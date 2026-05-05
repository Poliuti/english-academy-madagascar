import { getExercisesByTopic, getExercisesByLevel } from '../data/exercises.js';
import { VOCABULARY, VOCAB_CATEGORIES } from '../data/vocabulary.js';
import { TOPICS } from '../data/topics.js';

// ═══════════════════════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════════════════════

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function escHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, c =>
    ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}

function normalise(s) {
  return (s || '').toLowerCase().trim()
    // Ligature normalisation: œ/æ ↔ oe/ae (both directions collapse to oe/ae)
    .replace(/œ/g, 'oe').replace(/Œ/g, 'oe')
    .replace(/æ/g, 'ae').replace(/Æ/g, 'ae')
    .replace(/[.,!?;:'"]/g, '')
    .replace(/\s+/g, ' ');
}

// ═══════════════════════════════════════════════════════════════════════════
// EXERCISE POOL BUILDERS
// ═══════════════════════════════════════════════════════════════════════════

// Build all vocab entries (optionally filtered to one category id)
function getAllVocabEntries(catId = null) {
  const out = [];
  for (const cat of VOCAB_CATEGORIES) {
    if (catId && cat.id !== catId) continue;
    const words = VOCABULARY[cat.id] || [];
    for (const w of words) {
      out.push({ ...w, category: cat.label, catId: cat.id });
    }
  }
  return out;
}

// Build vocab pool. If level <= 2 → produce MCQ shape (with 4 options).
// Level 3 → keep open-text answer.
function buildVocabPool(catId, difficulty) {
  const all = getAllVocabEntries(catId);
  const allFr = all.map(w => w.fr);
  const pool = all.map(w => {
    const base = {
      id: `vocab_${w.catId}_${w.en}`,
      type: 'vocab-match',
      en: w.en,
      fr: w.fr,
      category: w.category,
    };
    if (difficulty <= 2) {
      // Build MCQ: 1 correct + 3 distractors (other FR translations)
      const distractors = shuffle(allFr.filter(fr => fr !== w.fr)).slice(0, 3);
      const options = shuffle([w.fr, ...distractors]);
      return { ...base, mode: 'mcq', options, correct: w.fr };
    }
    return { ...base, mode: 'text' };
  });
  return shuffle(pool);
}

// Build grammar pool. Level <= 2 → MCQ (correct answer + 3 distractors from
// other exercises in same topic/level). Level 3 → text input.
function buildGrammarPool(topicId, difficulty) {
  const topicIds = topicId ? [topicId] : TOPICS.map(t => t.id);
  const collected = [];
  for (const tid of topicIds) {
    const exs = getExercisesByLevel
      ? getExercisesByLevel(tid, difficulty)
      : getExercisesByTopic(tid);
    if (exs && exs.length) {
      for (const ex of exs) collected.push({ ...ex, _topic: tid });
    }
  }

  // Pool of answers (for distractor generation)
  const allAnswers = collected
    .map(e => e.answer)
    .filter(Boolean);

  const pool = collected.map(ex => {
    if (difficulty <= 2 && ex.answer) {
      const distractors = shuffle(allAnswers.filter(a => a !== ex.answer)).slice(0, 3);
      // If we couldn't find 3 unique distractors, pad with simple fillers
      while (distractors.length < 3) distractors.push('—');
      const options = shuffle([ex.answer, ...distractors]);
      return { ...ex, mode: 'mcq', options, correct: ex.answer };
    }
    return { ...ex, mode: 'text' };
  });
  return shuffle(pool);
}

// Mixed pool (60% grammar / 40% vocab)
function buildMixedPool(difficulty) {
  const grammar = buildGrammarPool(null, difficulty);
  const vocab = buildVocabPool(null, difficulty);
  const total = Math.max(grammar.length, vocab.length);
  const mixed = [];
  let gi = 0, vi = 0;
  for (let i = 0; i < total * 2; i++) {
    if (i % 5 < 3 && gi < grammar.length) mixed.push(grammar[gi++]);
    else if (vi < vocab.length)           mixed.push(vocab[vi++]);
    else if (gi < grammar.length)         mixed.push(grammar[gi++]);
  }
  return mixed;
}

// ═══════════════════════════════════════════════════════════════════════════
// ANSWER CHECKING
// ═══════════════════════════════════════════════════════════════════════════

function checkAnswerText(ex, userAnswer) {
  const norm = normalise(userAnswer);
  if (!norm) return false;
  if (ex.type === 'vocab-match') {
    return norm === normalise(ex.en) || norm === normalise(ex.fr);
  }
  if (ex.answer && normalise(ex.answer) === norm) return true;
  if (ex.acceptedAnswers?.some(a => normalise(a) === norm)) return true;
  if (ex.alternatives?.some(a => normalise(a) === norm)) return true;
  return false;
}

function checkAnswerMcq(ex, choice) {
  return normalise(choice) === normalise(ex.correct);
}

// ═══════════════════════════════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════════════════════════════

const ANSWER_TIME = 30; // seconds per question

const ENCOURAGEMENTS = [
  "Excellent travail à tous ! 🌟",
  "Bravo à chacun d'entre vous ! 💪",
  "Super effort ! Continuez comme ça ! 🎉",
  "Vous êtes tous des champions ! 🏆",
  "Quelle belle partie ! Vous progressez tous ! 🚀",
  "Félicitations à tous les joueurs ! ✨",
];

// ═══════════════════════════════════════════════════════════════════════════
// MAIN VIEW
// ═══════════════════════════════════════════════════════════════════════════

export function renderCompetitive() {
  const container = document.createElement('div');
  container.className = 'competitive-page';

  // ── State ─────────────────────────────────────────────────────────────────
  let phase = 'setup';            // setup | playing | end
  let players = [];               // [{ name, score, answered }]
  let playerNames = ['', '', '', '']; // PERSISTED across re-renders (TASK 3)
  let category = 'mixed';         // grammar | vocab | mixed
  let grammarTopic = 'all';       // 'all' or topic id (TASK 5)
  let vocabTheme = 'all';         // 'all' or category id (TASK 5)
  let difficulty = 1;             // 1 | 2 | 3
  let questionCount = 10;
  let pool = [];
  let currentPlayer = 0;
  let questionIndex = 0;
  let totalQuestions = 0;
  let currentEx = null;
  let timerValue = ANSWER_TIME;
  let timerInterval = null;
  let answered = false;
  let lastCorrect = null;

  function render() {
    if (phase === 'setup')         renderSetup();
    else if (phase === 'playing')  renderPlaying();
    else                           renderEnd();
  }

  // ══════════════════════════════════════════════════════════════════════════
  // SETUP SCREEN
  // ══════════════════════════════════════════════════════════════════════════

  // Snapshot current player input values into playerNames before any re-render
  function snapshotPlayerNames() {
    [0,1,2,3].forEach(i => {
      const el = container.querySelector(`#player-${i}`);
      if (el) playerNames[i] = el.value;
    });
  }

  function renderSetup() {
    const grammarTopicsList = TOPICS.map(t => `<option value="${t.id}" ${grammarTopic===t.id?'selected':''}>${escHtml(t.label)}</option>`).join('');
    const vocabThemesList   = VOCAB_CATEGORIES.map(c => `<option value="${c.id}" ${vocabTheme===c.id?'selected':''}>${c.icon || ''} ${escHtml(c.label)}</option>`).join('');

    container.innerHTML = `
      <div class="comp-page">
        <div class="comp-setup-card">
          <button class="btn-back comp-back" id="btn-back">← Retour</button>

          <!-- Hero icon (TASK 4) -->
          <div class="comp-hero">
            <div class="comp-hero-icon">🏆</div>
            <div class="comp-hero-glow"></div>
          </div>

          <div class="comp-setup-header">
            <h1 class="comp-setup-title">Défi entre amis</h1>
            <p class="comp-setup-sub">Un quiz multijoueur — le meilleur gagne !</p>
          </div>

          <!-- Players -->
          <div class="comp-section">
            <h3 class="comp-section-title">👥 Joueurs (2 à 4)</h3>
            <div class="comp-players-list" id="players-list">
              ${[0,1,2,3].map(i => `
                <div class="comp-player-row">
                  <span class="comp-player-num">${['1️⃣','2️⃣','3️⃣','4️⃣'][i]}</span>
                  <input
                    class="comp-player-input"
                    id="player-${i}"
                    type="text"
                    placeholder="${i < 2 ? 'Nom du joueur ' + (i+1) + ' (requis)' : 'Joueur ' + (i+1) + ' (optionnel)'}"
                    maxlength="20"
                    value="${escHtml(playerNames[i] || '')}"
                  />
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Category -->
          <div class="comp-section">
            <h3 class="comp-section-title">📚 Catégorie</h3>
            <div class="comp-options">
              <button class="comp-opt ${category==='grammar'?'active':''}" data-cat="grammar">📖 Grammaire</button>
              <button class="comp-opt ${category==='vocab'?'active':''}"   data-cat="vocab">💬 Vocabulaire</button>
              <button class="comp-opt ${category==='mixed'?'active':''}"   data-cat="mixed">🎯 Mixte (tout)</button>
            </div>
          </div>

          <!-- Grammar sub-topic (TASK 5) -->
          ${category === 'grammar' ? `
          <div class="comp-section">
            <h3 class="comp-section-title">🎓 Sujet de grammaire</h3>
            <select class="comp-select" id="grammar-topic-select">
              <option value="all" ${grammarTopic==='all'?'selected':''}>🎲 Tous les sujets (mixte)</option>
              ${grammarTopicsList}
            </select>
          </div>` : ''}

          <!-- Vocab sub-theme (TASK 5) -->
          ${category === 'vocab' ? `
          <div class="comp-section">
            <h3 class="comp-section-title">🎨 Thème de vocabulaire</h3>
            <select class="comp-select" id="vocab-theme-select">
              <option value="all" ${vocabTheme==='all'?'selected':''}>🎲 Tous les thèmes (mixte)</option>
              ${vocabThemesList}
            </select>
          </div>` : ''}

          <!-- Difficulty -->
          <div class="comp-section">
            <h3 class="comp-section-title">⚡ Difficulté</h3>
            <div class="comp-options">
              <button class="comp-opt ${difficulty===1?'active':''}" data-diff="1">🌱 Débutant</button>
              <button class="comp-opt ${difficulty===2?'active':''}" data-diff="2">📈 Intermédiaire</button>
              <button class="comp-opt ${difficulty===3?'active':''}" data-diff="3">🚀 Avancé</button>
            </div>
            <p class="comp-diff-note">
              ${difficulty < 3
                ? '🔘 Niveaux 1-2 : <strong>questions à choix multiple</strong>'
                : '✍️ Niveau Avancé : <strong>réponse à écrire</strong> (texte libre)'}
            </p>
          </div>

          <!-- Question count -->
          <div class="comp-section">
            <h3 class="comp-section-title">🔢 Questions par joueur</h3>
            <div class="comp-options">
              <button class="comp-opt ${questionCount===5?'active':''}"  data-q="5">5</button>
              <button class="comp-opt ${questionCount===10?'active':''}" data-q="10">10</button>
              <button class="comp-opt ${questionCount===15?'active':''}" data-q="15">15</button>
            </div>
          </div>

          <button class="comp-start-btn" id="btn-start">🎮 Commencer la partie !</button>
          <div class="comp-start-error" id="start-error"></div>
        </div>
      </div>
    `;
    bindSetupEvents();
  }

  function bindSetupEvents() {
    container.querySelector('#btn-back').addEventListener('click', () => {
      location.hash = '#dashboard';
    });

    container.querySelectorAll('[data-cat]').forEach(btn => {
      btn.addEventListener('click', () => {
        snapshotPlayerNames();          // TASK 3: keep names
        category = btn.dataset.cat;
        renderSetup();
      });
    });

    container.querySelectorAll('[data-diff]').forEach(btn => {
      btn.addEventListener('click', () => {
        snapshotPlayerNames();
        difficulty = +btn.dataset.diff;
        renderSetup();
      });
    });

    container.querySelectorAll('[data-q]').forEach(btn => {
      btn.addEventListener('click', () => {
        snapshotPlayerNames();
        questionCount = +btn.dataset.q;
        renderSetup();
      });
    });

    const grammarSel = container.querySelector('#grammar-topic-select');
    if (grammarSel) {
      grammarSel.addEventListener('change', e => {
        snapshotPlayerNames();
        grammarTopic = e.target.value;
        // No re-render needed — just store
        playerNames = playerNames.slice();
      });
    }

    const vocabSel = container.querySelector('#vocab-theme-select');
    if (vocabSel) {
      vocabSel.addEventListener('change', e => {
        snapshotPlayerNames();
        vocabTheme = e.target.value;
      });
    }

    // Track typing in inputs so playerNames stays current even on form interaction
    [0,1,2,3].forEach(i => {
      const el = container.querySelector(`#player-${i}`);
      if (el) el.addEventListener('input', () => { playerNames[i] = el.value; });
    });

    container.querySelector('#btn-start').addEventListener('click', startGame);
  }

  function startGame() {
    snapshotPlayerNames();
    const names = playerNames.map(n => (n || '').trim()).filter(Boolean);

    if (names.length < 2) {
      container.querySelector('#start-error').textContent = '⚠️ Au moins 2 joueurs sont requis.';
      return;
    }

    players = names.map(name => ({ name, score: 0, answered: 0 }));
    currentPlayer = 0;
    questionIndex = 0;
    totalQuestions = players.length * questionCount;

    // Build pool based on category + sub-topic
    if (category === 'grammar') {
      const tid = grammarTopic === 'all' ? null : grammarTopic;
      pool = buildGrammarPool(tid, difficulty);
    } else if (category === 'vocab') {
      const cid = vocabTheme === 'all' ? null : vocabTheme;
      pool = buildVocabPool(cid, difficulty);
    } else {
      pool = buildMixedPool(difficulty);
    }

    if (pool.length === 0) {
      container.querySelector('#start-error').textContent = '⚠️ Aucun exercice disponible pour cette sélection.';
      return;
    }
    if (pool.length < totalQuestions) pool = [...pool, ...pool, ...pool];
    pool = pool.slice(0, totalQuestions);

    phase = 'playing';
    answered = false;
    lastCorrect = null;
    loadNextQuestion();
    render();
  }

  // ══════════════════════════════════════════════════════════════════════════
  // PLAYING SCREEN
  // ══════════════════════════════════════════════════════════════════════════

  function loadNextQuestion() {
    clearTimer();
    if (questionIndex >= totalQuestions) {
      phase = 'end';
      render();
      return;
    }
    currentEx = pool[questionIndex];
    answered = false;
    lastCorrect = null;
    timerValue = ANSWER_TIME;
    startTimer();
  }

  function startTimer() {
    clearTimer();
    timerInterval = setInterval(() => {
      timerValue--;
      updateTimerUI();
      if (timerValue <= 0) timeOut();
    }, 1000);
  }

  function clearTimer() {
    if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
  }

  function timeOut() {
    clearTimer();
    if (answered) return;
    answered = true;
    lastCorrect = false;
    updateResultUI();
  }

  function updateTimerUI() {
    const timerEl = container.querySelector('#comp-timer-val');
    const timerBar = container.querySelector('#comp-timer-bar');
    if (timerEl) timerEl.textContent = timerValue;
    if (timerBar) {
      const pct = (timerValue / ANSWER_TIME) * 100;
      timerBar.style.width = pct + '%';
      timerBar.style.background = timerValue > 10 ? 'var(--primary)' : '#EF4444';
    }
  }

  function renderPlaying() {
    const p = players[currentPlayer];
    const ex = currentEx;
    if (!ex) return;

    const qNum = questionIndex + 1;
    const isVocab = ex.type === 'vocab-match';
    const isMcq = ex.mode === 'mcq';

    container.innerHTML = `
      <div class="comp-page">
        <div class="comp-scoreboard">
          ${players.map((pl, i) => `
            <div class="comp-score-card ${i === currentPlayer ? 'current' : ''}">
              <div class="comp-score-name">${escHtml(pl.name)}</div>
              <div class="comp-score-pts">${pl.score} pts</div>
            </div>
          `).join('')}
        </div>

        <div class="comp-game-card">
          <div class="comp-game-meta">
            <span class="comp-qnum">Q ${qNum} / ${totalQuestions}</span>
            <div class="comp-timer-wrap">
              <div class="comp-timer-track">
                <div class="comp-timer-bar" id="comp-timer-bar" style="width:${(timerValue/ANSWER_TIME)*100}%"></div>
              </div>
              <span class="comp-timer-val" id="comp-timer-val">${timerValue}</span>
            </div>
          </div>

          <div class="comp-player-banner">
            🎯 Tour de <strong>${escHtml(p.name)}</strong>
          </div>

          <div class="comp-question-area">
            ${isVocab ? renderVocabQuestion(ex) : renderGrammarQuestion(ex)}
          </div>

          <div class="comp-answer-area" id="answer-area">
            ${answered
              ? renderAnswerResult(ex)
              : (isMcq ? renderMcqInput(ex) : renderTextInput(isVocab))}
          </div>
        </div>
      </div>
    `;

    bindPlayingEvents();
  }

  // ── Question renderers ────────────────────────────────────────────────────
  // CRITICAL TASK 2: NO solution leak — never show ex.fr or ex.answer here.

  function renderVocabQuestion(ex) {
    return `
      <div class="comp-vocab-q">
        <div class="comp-q-label">Traduisez ce mot :</div>
        <div class="comp-q-word">${escHtml(ex.en)}</div>
      </div>
    `;
  }

  function renderGrammarQuestion(ex) {
    let questionText = '';
    if (ex.type === 'fill-blank')         questionText = escHtml(ex.template || '');
    else if (ex.type === 'translate')     questionText = escHtml(ex.french || '');
    else if (ex.type === 'error-correct') questionText = `Corrigez : <em>${escHtml(ex.sentence)}</em>`;
    else if (ex.type === 'word-order')    questionText = `Remettez dans l'ordre : <em>${escHtml((ex.words||[]).join(' / '))}</em>`;
    else if (ex.type === 'listening')     questionText = `🔊 Audio : <em>${escHtml(ex.audio || '')}</em>`;
    else                                  questionText = escHtml(ex.instruction || '');

    return `
      <div class="comp-grammar-q">
        <div class="comp-q-type">${escHtml(ex.instruction || '')}</div>
        <div class="comp-q-text">${questionText}</div>
      </div>
    `;
  }

  // ── Answer input renderers ────────────────────────────────────────────────

  function renderTextInput(isVocab) {
    return `
      <input
        class="comp-answer-input"
        id="comp-answer"
        type="text"
        placeholder="${isVocab ? 'Tapez le mot français...' : 'Votre réponse...'}"
        autocomplete="off"
        autofocus
      />
      <button class="comp-submit-btn" id="btn-submit">✅ Valider</button>
    `;
  }

  function renderMcqInput(ex) {
    return `
      <div class="comp-mcq-options">
        ${ex.options.map((opt, i) => `
          <button class="comp-mcq-btn" data-choice="${escHtml(opt)}">
            <span class="comp-mcq-letter">${String.fromCharCode(65 + i)}</span>
            <span class="comp-mcq-text">${escHtml(opt)}</span>
          </button>
        `).join('')}
      </div>
    `;
  }

  function renderAnswerResult(ex) {
    const correct = lastCorrect;
    const answer = ex.mode === 'mcq'
      ? ex.correct
      : (ex.answer || ex.fr || ex.en || '');
    return `
      <div class="comp-result ${correct ? 'correct' : 'wrong'}">
        <div class="comp-result-icon">${correct ? '✅' : '⏱️'}</div>
        <div class="comp-result-text">
          ${correct
            ? `<strong>Correct !</strong> +10 points`
            : `La bonne réponse : <strong>${escHtml(answer)}</strong>`}
        </div>
        ${ex.hint && !correct ? `<div class="comp-result-hint">💡 ${escHtml(ex.hint)}</div>` : ''}
        <button class="comp-next-btn" id="btn-next">
          ${questionIndex + 1 >= totalQuestions ? '🏁 Voir les résultats' : '➡️ Question suivante'}
        </button>
      </div>
    `;
  }

  function bindPlayingEvents() {
    const submitBtn = container.querySelector('#btn-submit');
    const input = container.querySelector('#comp-answer');

    if (submitBtn) submitBtn.addEventListener('click', submitTextAnswer);
    if (input) {
      input.focus();
      input.addEventListener('keydown', e => { if (e.key === 'Enter') submitTextAnswer(); });
    }

    container.querySelectorAll('.comp-mcq-btn').forEach(btn => {
      btn.addEventListener('click', () => submitMcqAnswer(btn.dataset.choice, btn));
    });

    const nextBtn = container.querySelector('#btn-next');
    if (nextBtn) nextBtn.addEventListener('click', nextQuestion);
  }

  function submitTextAnswer() {
    if (answered) return;
    const input = container.querySelector('#comp-answer');
    const userAnswer = input?.value || '';

    clearTimer();
    answered = true;
    lastCorrect = checkAnswerText(currentEx, userAnswer);

    if (lastCorrect) players[currentPlayer].score += 10;
    players[currentPlayer].answered++;

    updateResultUI();
  }

  function submitMcqAnswer(choice, btnEl) {
    if (answered) return;
    clearTimer();
    answered = true;
    lastCorrect = checkAnswerMcq(currentEx, choice);

    if (lastCorrect) players[currentPlayer].score += 10;
    players[currentPlayer].answered++;

    // Visual feedback on buttons before re-render
    container.querySelectorAll('.comp-mcq-btn').forEach(b => {
      b.disabled = true;
      const isCorrect = normalise(b.dataset.choice) === normalise(currentEx.correct);
      if (isCorrect) b.classList.add('mcq-correct');
      if (b === btnEl && !isCorrect) b.classList.add('mcq-wrong');
    });

    setTimeout(updateResultUI, 700);
  }

  function updateResultUI() {
    const answerArea = container.querySelector('#answer-area');
    if (!answerArea) { render(); return; }

    answerArea.innerHTML = renderAnswerResult(currentEx || {});

    const nextBtn = container.querySelector('#btn-next');
    if (nextBtn) nextBtn.addEventListener('click', nextQuestion);

    const cards = container.querySelectorAll('.comp-score-card');
    cards.forEach((card, i) => {
      const ptsEl = card.querySelector('.comp-score-pts');
      if (ptsEl) ptsEl.textContent = players[i].score + ' pts';
    });
  }

  function nextQuestion() {
    questionIndex++;
    currentPlayer = questionIndex % players.length;
    loadNextQuestion();
    if (phase === 'playing') render();
    else renderEnd();
  }

  // ══════════════════════════════════════════════════════════════════════════
  // END SCREEN
  // ══════════════════════════════════════════════════════════════════════════

  function renderEnd() {
    clearTimer();
    const ranked = [...players].sort((a, b) => b.score - a.score);
    const maxScore = ranked[0].score;
    const encouragement = ENCOURAGEMENTS[Math.floor(Math.random() * ENCOURAGEMENTS.length)];
    const medals = ['🥇','🥈','🥉','🏅'];

    container.innerHTML = `
      <div class="comp-page">
        <div class="comp-end-card">
          <div class="comp-end-trophy">🏆</div>
          <h2 class="comp-end-title">Fin de la partie !</h2>
          <p class="comp-end-msg">${encouragement}</p>

          <div class="comp-rankings">
            ${ranked.map((p, i) => `
              <div class="comp-rank-row ${i === 0 ? 'winner' : ''}">
                <span class="comp-rank-medal">${medals[i] || '🏅'}</span>
                <span class="comp-rank-name">${escHtml(p.name)}</span>
                <span class="comp-rank-score">${p.score} pts</span>
                <div class="comp-rank-bar-wrap">
                  <div class="comp-rank-bar" style="width:${maxScore > 0 ? Math.round((p.score/maxScore)*100) : 0}%"></div>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="comp-end-stats">
            <div class="comp-end-stat">
              <span class="comp-end-stat-val">${totalQuestions}</span>
              <span class="comp-end-stat-label">Questions</span>
            </div>
            <div class="comp-end-stat">
              <span class="comp-end-stat-val">${players.reduce((s,p)=>s+p.score,0)}</span>
              <span class="comp-end-stat-label">Points totaux</span>
            </div>
            <div class="comp-end-stat">
              <span class="comp-end-stat-val">${maxScore}</span>
              <span class="comp-end-stat-label">Meilleur score</span>
            </div>
          </div>

          <div class="comp-end-actions">
            <button class="btn-primary comp-play-again" id="btn-again">🎮 Nouvelle partie</button>
            <button class="btn-secondary comp-home" id="btn-home">🏠 Accueil</button>
          </div>
        </div>
      </div>
    `;

    container.querySelector('#btn-again').addEventListener('click', () => {
      // Reset scores but KEEP names (TASK 3)
      players = [];
      phase = 'setup';
      render();
    });
    container.querySelector('#btn-home').addEventListener('click', () => {
      location.hash = '#dashboard';
    });
  }

  render();
  return container;
}
