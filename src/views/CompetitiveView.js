import { getExercisesByTopic, getExercisesByLevel } from '../data/exercises.js';
import { VOCABULARY, VOCAB_CATEGORIES } from '../data/vocabulary.js';
import { TOPICS } from '../data/topics.js';

// ─── Exercise pool builders ───────────────────────────────────────────────────

function buildGrammarPool(difficulty) {
  const grammarTopics = TOPICS.map(t => t.id);
  const pool = [];
  for (const topicId of grammarTopics) {
    const exs = getExercisesByLevel ? getExercisesByLevel(topicId, difficulty) : getExercisesByTopic(topicId);
    if (exs && exs.length) pool.push(...exs);
  }
  return shuffle(pool);
}

function buildVocabPool() {
  const pool = [];
  for (const cat of VOCAB_CATEGORIES) {
    const words = VOCABULARY[cat.id] || [];
    for (const w of words) {
      pool.push({
        id: `vocab_${cat.id}_${w.en}`,
        type: 'vocab-match',
        en: w.en, fr: w.fr, example: w.example,
        category: cat.label,
      });
    }
  }
  return shuffle(pool);
}

function buildMixedPool(difficulty) {
  const grammar = buildGrammarPool(difficulty);
  const vocab = buildVocabPool();
  // Interleave grammar and vocab (60% grammar, 40% vocab)
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

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Answer checking ──────────────────────────────────────────────────────────

function normalise(s) {
  return (s || '').toLowerCase().trim()
    .replace(/[.,!?;:'"]/g, '')
    .replace(/\s+/g, ' ');
}

function checkAnswer(ex, userAnswer) {
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

// ─── TIMER CONSTANT ───────────────────────────────────────────────────────────
const ANSWER_TIME = 30; // seconds per question

// ─── escHtml ──────────────────────────────────────────────────────────────────
function escHtml(s) {
  return String(s || '').replace(/[&<>"']/g, c =>
    ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}

// ─── ENCOURAGEMENT MESSAGES ───────────────────────────────────────────────────
const ENCOURAGEMENTS = [
  "Excellent travail à tous ! 🌟",
  "Bravo à chacun d'entre vous ! 💪",
  "Super effort ! Continuez comme ça ! 🎉",
  "Vous êtes tous des champions ! 🏆",
  "Quelle belle partie ! Vous progressez tous ! 🚀",
  "Félicitations à tous les joueurs ! ✨",
];

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN VIEW
// ═══════════════════════════════════════════════════════════════════════════════

export function renderCompetitive() {
  const container = document.createElement('div');
  container.className = 'competitive-page';

  // ── State ─────────────────────────────────────────────────────────────────
  let phase = 'setup';          // setup | playing | end
  let players = [];             // [{ name, score }]
  let category = 'mixed';       // grammar | vocab | mixed
  let difficulty = 1;           // 1 | 2 | 3
  let questionCount = 10;       // per player
  let pool = [];                // exercise pool
  let currentPlayer = 0;        // index into players[]
  let questionIndex = 0;        // absolute question index
  let totalQuestions = 0;       // players.length * questionCount
  let currentEx = null;
  let timerValue = ANSWER_TIME;
  let timerInterval = null;
  let answered = false;
  let lastCorrect = null;       // true/false/null

  // ── Render dispatcher ────────────────────────────────────────────────────
  function render() {
    if (phase === 'setup')   renderSetup();
    else if (phase === 'playing') renderPlaying();
    else                     renderEnd();
  }

  // ══════════════════════════════════════════════════════════════════════════
  // SETUP SCREEN
  // ══════════════════════════════════════════════════════════════════════════

  function renderSetup() {
    container.innerHTML = `
      <div class="comp-page">
        <div class="comp-setup-card">
          <button class="btn-back comp-back" id="btn-back">← Retour</button>
          <div class="comp-setup-header">
            <div class="comp-setup-icon">🏆</div>
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
              <button class="comp-opt ${category==='mixed'?'active':''}"   data-cat="mixed">🎯 Mixte</button>
            </div>
          </div>

          <!-- Difficulty (only for grammar/mixed) -->
          <div class="comp-section" id="diff-section" style="display:${category==='vocab'?'none':'block'}">
            <h3 class="comp-section-title">⚡ Difficulté</h3>
            <div class="comp-options">
              <button class="comp-opt ${difficulty===1?'active':''}" data-diff="1">🌱 Débutant</button>
              <button class="comp-opt ${difficulty===2?'active':''}" data-diff="2">📈 Intermédiaire</button>
              <button class="comp-opt ${difficulty===3?'active':''}" data-diff="3">🚀 Avancé</button>
            </div>
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
        category = btn.dataset.cat;
        renderSetup();
      });
    });

    container.querySelectorAll('[data-diff]').forEach(btn => {
      btn.addEventListener('click', () => {
        difficulty = +btn.dataset.diff;
        renderSetup();
      });
    });

    container.querySelectorAll('[data-q]').forEach(btn => {
      btn.addEventListener('click', () => {
        questionCount = +btn.dataset.q;
        renderSetup();
      });
    });

    container.querySelector('#btn-start').addEventListener('click', startGame);
  }

  function startGame() {
    const names = [0,1,2,3].map(i => {
      const v = container.querySelector(`#player-${i}`)?.value.trim();
      return v || null;
    }).filter(Boolean);

    if (names.length < 2) {
      container.querySelector('#start-error').textContent = '⚠️ Au moins 2 joueurs sont requis.';
      return;
    }

    players = names.map(name => ({ name, score: 0, answered: 0 }));
    currentPlayer = 0;
    questionIndex = 0;
    totalQuestions = players.length * questionCount;

    // Build pool
    if (category === 'grammar')     pool = buildGrammarPool(difficulty);
    else if (category === 'vocab')  pool = buildVocabPool();
    else                            pool = buildMixedPool(difficulty);

    if (pool.length < totalQuestions) pool = [...pool, ...pool, ...pool]; // repeat if needed
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
      if (timerValue <= 0) {
        timeOut();
      }
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
    updateResultUI(false, null);
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

    container.innerHTML = `
      <div class="comp-page">
        <!-- Scoreboard -->
        <div class="comp-scoreboard">
          ${players.map((pl, i) => `
            <div class="comp-score-card ${i === currentPlayer ? 'current' : ''}">
              <div class="comp-score-name">${escHtml(pl.name)}</div>
              <div class="comp-score-pts">${pl.score} pts</div>
            </div>
          `).join('')}
        </div>

        <!-- Main game area -->
        <div class="comp-game-card">
          <!-- Progress & timer -->
          <div class="comp-game-meta">
            <span class="comp-qnum">Q ${qNum} / ${totalQuestions}</span>
            <div class="comp-timer-wrap">
              <div class="comp-timer-track">
                <div class="comp-timer-bar" id="comp-timer-bar" style="width:${(timerValue/ANSWER_TIME)*100}%"></div>
              </div>
              <span class="comp-timer-val" id="comp-timer-val">${timerValue}</span>
            </div>
          </div>

          <!-- Current player banner -->
          <div class="comp-player-banner">
            🎯 Tour de <strong>${escHtml(p.name)}</strong>
          </div>

          <!-- Question -->
          <div class="comp-question-area">
            ${isVocab ? renderVocabQuestion(ex) : renderGrammarQuestion(ex)}
          </div>

          <!-- Answer input -->
          <div class="comp-answer-area" id="answer-area">
            ${answered ? renderAnswerResult(ex) : `
              <input
                class="comp-answer-input"
                id="comp-answer"
                type="text"
                placeholder="${isVocab ? 'Tapez le mot anglais ou français...' : 'Votre réponse...'}"
                autocomplete="off"
                autofocus
              />
              <button class="comp-submit-btn" id="btn-submit">✅ Valider</button>
            `}
          </div>
        </div>
      </div>
    `;

    bindPlayingEvents();
  }

  function renderVocabQuestion(ex) {
    return `
      <div class="comp-vocab-q">
        <div class="comp-q-label">Traduisez ce mot :</div>
        <div class="comp-q-word">${escHtml(ex.en)}</div>
        <div class="comp-q-hint">${escHtml(ex.fr)} — ${escHtml(ex.category || '')}</div>
      </div>
    `;
  }

  function renderGrammarQuestion(ex) {
    let questionText = '';
    if (ex.type === 'fill-blank')     questionText = escHtml(ex.template || ex.instruction);
    else if (ex.type === 'translate') questionText = escHtml(ex.french || ex.instruction);
    else if (ex.type === 'error-correct') questionText = `Corrigez : <em>${escHtml(ex.sentence)}</em>`;
    else if (ex.type === 'word-order')    questionText = `Remettez dans l'ordre : <em>${escHtml((ex.words||[]).join(' / '))}</em>`;
    else if (ex.type === 'listening')     questionText = `🔊 Audio : <em>${escHtml(ex.audio || '')}</em>`;
    else questionText = escHtml(ex.instruction || '');

    return `
      <div class="comp-grammar-q">
        <div class="comp-q-type">${escHtml(ex.instruction || '')}</div>
        <div class="comp-q-text">${questionText}</div>
        ${ex.hint ? `<div class="comp-q-hint">💡 ${escHtml(ex.hint)}</div>` : ''}
      </div>
    `;
  }

  function renderAnswerResult(ex) {
    const correct = lastCorrect;
    const answer = ex.answer || (ex.en + ' / ' + ex.fr);
    return `
      <div class="comp-result ${correct ? 'correct' : 'wrong'}">
        <div class="comp-result-icon">${correct ? '✅' : '⏱️'}</div>
        <div class="comp-result-text">
          ${correct
            ? `<strong>Correct !</strong> +10 points`
            : `La bonne réponse : <strong>${escHtml(answer)}</strong>`}
        </div>
        <button class="comp-next-btn" id="btn-next">
          ${questionIndex + 1 >= totalQuestions ? '🏁 Voir les résultats' : '➡️ Question suivante'}
        </button>
      </div>
    `;
  }

  function bindPlayingEvents() {
    const submitBtn = container.querySelector('#btn-submit');
    const input = container.querySelector('#comp-answer');

    if (submitBtn) submitBtn.addEventListener('click', submitAnswer);
    if (input) {
      input.focus();
      input.addEventListener('keydown', e => { if (e.key === 'Enter') submitAnswer(); });
    }

    const nextBtn = container.querySelector('#btn-next');
    if (nextBtn) nextBtn.addEventListener('click', nextQuestion);
  }

  function submitAnswer() {
    if (answered) return;
    const input = container.querySelector('#comp-answer');
    const userAnswer = input?.value || '';

    clearTimer();
    answered = true;
    lastCorrect = checkAnswer(currentEx, userAnswer);

    if (lastCorrect) {
      players[currentPlayer].score += 10;
    }
    players[currentPlayer].answered++;

    updateResultUI(lastCorrect, currentEx.answer || currentEx.en);
  }

  function updateResultUI(correct, correctAnswer) {
    const answerArea = container.querySelector('#answer-area');
    if (!answerArea) { render(); return; }

    const ex = currentEx;
    const answer = ex ? (ex.answer || ex.en || '') : '';
    answerArea.innerHTML = renderAnswerResult(ex || {});

    // Re-bind next button
    const nextBtn = container.querySelector('#btn-next');
    if (nextBtn) nextBtn.addEventListener('click', nextQuestion);

    // Update scoreboard
    const cards = container.querySelectorAll('.comp-score-card');
    cards.forEach((card, i) => {
      card.querySelector('.comp-score-pts').textContent = players[i].score + ' pts';
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

    // Sort by score descending
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

          <!-- Rankings -->
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

          <!-- Stats -->
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
