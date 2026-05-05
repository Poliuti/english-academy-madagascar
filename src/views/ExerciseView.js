import { getActiveProfile, addXP, updateStreak, saveTopicProgress, saveSM2, saveSession,
         saveLevelProgress, getLevelScore, isLevelUnlocked } from '../storage.js';
import { getExercisesByTopic, getExercisesByLevel } from '../data/exercises.js';
import { assessmentExercises } from '../data/exercises.js';
import { TOPICS, getTopicById } from '../data/topics.js';
import { calculateNextReview, qualityFromResult, sortByPriority } from '../sm2.js';
import { speak, stop, isSupported } from '../tts.js';

const SESSION_SIZE = 12;
const LEVEL_LABELS = { 1: '🌱 Débutant', 2: '📈 Intermédiaire', 3: '🚀 Avancé' };

// ─── Malagasy instruction translations ───────────────────────────────────────
// Consegne standard tradotte in malgascio (verifcate con attenzione)
const INSTRUCTION_MG = {
  'Complétez avec la bonne forme du verbe.':     "Fenoy ny banga amin'ny endrika mety ny matoanteny.",
  'Complétez avec la bonne forme négative.':      "Fenoy amin'ny fandavana mety.",
  'Complétez avec la bonne préposition.':         "Fenoy amin'ny teny mampifandray mety.",
  'Complétez avec le bon mot.':                   "Fenoy amin'ny teny mety.",
  'Complétez avec a, an ou the.':                 "Fenoy amin'ny a, an na the.",
  'Complétez avec there is ou there are.':        "Fenoy amin'ny there is na there are.",
  'Complétez avec le bon pronom sujet.':          "Fenoy amin'ny pronom sujet mety.",
  'Complétez avec le bon adjectif possessif.':    "Fenoy amin'ny adjectif possessif mety.",
  'Complétez avec le bon adverbe.':               "Fenoy amin'ny adverbe mety.",
  'Choisissez le bon adverbe.':                   "Safidio ny adverbe mety.",
  'Complétez avec le comparatif correct.':        "Fenoy amin'ny comparatif mety.",
  'Complétez avec le comparatif.':                "Fenoy amin'ny comparatif mety.",
  'Complétez avec le superlatif.':                "Fenoy amin'ny superlatif mety.",
  'Complétez avec le contraire.':                 "Fenoy amin'ny teny mifanohitra.",
  'Complétez avec in, on ou at.':                 "Fenoy amin'ny in, on na at.",
  "Complétez avec can ou can't.":                 "Fenoy amin'ny can na can't.",
  'Complétez avec could ou can.':                 "Fenoy amin'ny could na can.",
  "Complétez avec 'will' + verbe.":               "Fenoy amin'ny will + matoanteny.",
  'Complétez avec how many ou how much.':         "Fenoy amin'ny how many na how much.",
  'Complétez avec la bonne couleur.':             "Fenoy amin'ny loko mety.",
  'Complétez avec la bonne quantité.':            "Fenoy amin'ny habetsahana mety.",
  'Complétez avec la bonne forme du verbe "be" au passé.': "Fenoy amin'ny endrika lasa ny matoanteny 'be'.",
  'Complétez avec la forme correcte (Present Continuous).': "Fenoy amin'ny Present Continuous mety.",
  'Complétez avec la forme correcte du Past Simple.': "Fenoy amin'ny Past Simple mety.",
  'Complétez avec la forme négative du Past Simple.': "Fenoy amin'ny fandavana Past Simple.",
  'Complétez au Present Perfect.':               "Fenoy amin'ny Present Perfect.",
  'Complétez au Past Continuous.':               "Fenoy amin'ny Past Continuous.",
  'Complétez au Past Perfect.':                  "Fenoy amin'ny Past Perfect.",
  'Complétez au Future Continuous.':             "Fenoy amin'ny Future Continuous.",
  'Complétez au Future Perfect.':                "Fenoy amin'ny Future Perfect.",
  'Complétez au passé.':                         "Fenoy amin'ny lasa.",
  'Complétez la question.':                      "Fenoy ny fanontaniana.",
  'Complétez les deux verbes.':                  "Fenoy ny matoanteny roa.",
  'Complétez.':                                  "Fenoy.",
  'Traduisez en anglais.':                       "Adikao amin'ny teny anglisy.",
  'Traduisez.':                                  "Adikao amin'ny teny anglisy.",
  'Traduisez la question.':                      "Adikao ny fanontaniana amin'ny teny anglisy.",
  'Mettez les mots dans le bon ordre.':          "Ataovy ny teny araka ny filaharan'ny mety.",
  'Écoutez et écrivez ce que vous entendez.':    "Henoy ka soratoy izay re.",
  'Écoutez et écrivez le nombre en lettres.':    "Henoy ka soratoy ny isa amin'ny litera.",
  "Trouvez et corrigez l'erreur dans la phrase.": "Tadiavo ny hadisoana ka amboary ny fehezanteny.",
  'Corrigez la phrase.':                         "Amboary ny fehezanteny.",
  'Corrigez le pluriel.':                        "Amboary ny endrika maro.",
  'Corrigez la préposition.':                    "Amboary ny teny mampifandray.",
  'Corrigez la question.':                       "Amboary ny fanontaniana.",
  'Corrigez.':                                   "Amboary.",
  'Donnez le pluriel.':                          "Omeo ny endrika maro.",
  'Formez une question.':                        "Ataovy fanontaniana.",
  'Since ou for ?':                              "Since na for ?",
  'Already, yet ou just ?':                      "Already, yet na just ?",
  'Pluriel ou singulier ?':                      "Maro na tokana ?",
  'Complétez avec Do ou Does.':                  "Fenoy amin'ny Do na Does.",
  'Complétez avec Is, Are, Was ou Were.':        "Fenoy amin'ny Is, Are, Was na Were.",
  'Complétez avec some ou any.':                 "Fenoy amin'ny some na any.",
  'Complétez avec something, anything ou nothing.': "Fenoy amin'ny something, anything na nothing.",
  "Complétez avec Let's ou Don't.":              "Fenoy amin'ny Let's na Don't.",
  "Corrigez l'erreur.":                          "Amboary ny hadisoana.",
  "Trouvez et corrigez l'erreur.":               "Tadiavo ny hadisoana ka amboary.",
  "Corrigez l'impératif.":                       "Amboary ny baiko.",
  'Complétez avec am, is ou are.':               "Fenoy amin'ny am, is na are.",
  'Complétez avec was ou were.':                 "Fenoy amin'ny was na were.",
  'Complétez la réponse courte.':                "Fenoy ny valiny fohy.",
  'Donnez le Past Simple.':                      "Omeo ny Past Simple.",
  'Complétez avec le participe passé.':          "Fenoy amin'ny participe passé.",
  'Choisissez la bonne réponse.':                "Safidio ny valiny mety.",
  'Choisissez la bonne option.':                 "Safidio ny safidy mety.",
  'Écris une phrase avec le mot donné.':         "Sorata fehezanteny iray mampiasa ny teny omena.",
  'Utilisez le mot donné dans une phrase.':      "Mampiasao ny teny omena anaty fehezanteny.",
  'Traduisez en français.':                      "Adikao amin'ny teny frantsay.",
  'Écoutez et répondez à la question.':          "Henoy ka valio ny fanontaniana.",
  'Remettez les mots dans le bon ordre.':        "Ataovy ny teny araka ny filaharan'ny mety.",
};
function getMgInstruction(fr) {
  if (INSTRUCTION_MG[fr]) return INSTRUCTION_MG[fr];
  const key = Object.keys(INSTRUCTION_MG).find(k => fr.startsWith(k.slice(0, 20)));
  return key ? INSTRUCTION_MG[key] : null;
}

export function renderExercise(topicId, mode, diffLevel) {
  const profile = getActiveProfile();
  if (!profile) { location.hash = '#profiles'; return document.createElement('div'); }

  const container = document.createElement('div');
  container.className = 'exercise-page';

  // Assessment mode skips level picker
  if (mode === 'assessment') {
    const exs = loadExercises(topicId, mode, profile, null);
    if (!exs.length) return renderEmpty(topicId);
    const state = { exercises: exs, current: 0, results: [], usedHint: false, answered: false,
                    topicId, mode, diffLevel: null, xpEarned: 0 };
    renderExerciseCard(container, state, profile);
    return container;
  }

  // If a specific level was provided, start immediately
  if (diffLevel) {
    const lv = parseInt(diffLevel, 10);
    if (!isLevelUnlocked(profile, topicId, lv)) {
      renderLevelPicker(container, topicId, mode, profile);
      return container;
    }
    const exs = loadExercises(topicId, mode, profile, lv);
    if (!exs.length) return renderEmpty(topicId);
    const state = { exercises: exs, current: 0, results: [], usedHint: false, answered: false,
                    topicId, mode, diffLevel: lv, xpEarned: 0 };
    renderExerciseCard(container, state, profile);
    return container;
  }

  // No level → show level picker
  renderLevelPicker(container, topicId, mode, profile);
  return container;
}

function renderLevelPicker(container, topicId, mode, profile) {
  const topic = getTopicById(topicId);
  const topicLabel = topic?.label || topicId;

  container.innerHTML = `
    <div class="ex-header">
      <button class="btn-back" id="btn-back">← Retour</button>
      <div class="ex-topic-label">${topic?.icon || ''} ${topicLabel}</div>
      <div></div>
    </div>
    <div class="level-picker">
      <h2 class="level-picker-title">Choisis ton niveau</h2>
      <p class="level-picker-sub">🇲🇬 Safidio ny sehatra mety</p>
      <div class="level-picker-cards">
        ${[1,2,3].map(lv => {
          const unlocked = isLevelUnlocked(profile, topicId, lv);
          const score    = getLevelScore(profile, topicId, lv);
          const pool     = getExercisesByLevel(topicId, lv);
          return `
            <button class="level-card ${unlocked ? '' : 'level-card-locked'}" data-lv="${lv}" ${unlocked ? '' : 'disabled'}>
              <div class="level-card-icon">${unlocked ? (lv === 1 ? '🌱' : lv === 2 ? '📈' : '🚀') : '🔒'}</div>
              <div class="level-card-label">${LEVEL_LABELS[lv]}</div>
              <div class="level-card-count">${pool.length} exercice${pool.length !== 1 ? 's' : ''}</div>
              ${score > 0 ? `<div class="level-card-score">${score}% ✓</div>` : ''}
              ${score >= 80 ? `<div class="level-card-badge">⭐ Maîtrisé</div>` : ''}
              ${!unlocked && lv > 1 ? `<div class="level-card-lock-msg">Obtiens 80% au niveau ${lv-1}</div>` : ''}
            </button>
          `;
        }).join('')}
      </div>
    </div>
  `;

  container.querySelector('#btn-back').addEventListener('click', () => {
    location.hash = '#dashboard';
  });

  container.querySelectorAll('.level-card:not([disabled])').forEach(btn => {
    btn.addEventListener('click', () => {
      const lv = parseInt(btn.dataset.lv, 10);
      const exs = loadExercises(topicId, mode, profile, lv);
      if (!exs.length) return;
      const state = { exercises: exs, current: 0, results: [], usedHint: false, answered: false,
                      topicId, mode, diffLevel: lv, xpEarned: 0 };
      renderExerciseCard(container, state, profile);
    });
  });
}

function loadExercises(topicId, mode, profile, diffLevel) {
  let pool;
  if (mode === 'assessment') {
    pool = [...assessmentExercises];
  } else if (diffLevel) {
    pool = getExercisesByLevel(topicId, diffLevel);
  } else {
    pool = getExercisesByTopic(topicId);
  }

  const sm2Map = profile.sm2Items || {};
  const sorted = sortByPriority(pool, sm2Map);
  return sorted.slice(0, SESSION_SIZE);
}

function renderExerciseCard(container, state, profile) {
  const ex = state.exercises[state.current];
  const total = state.exercises.length;
  const topic = getTopicById(state.topicId);
  const topicLabel = state.mode === 'assessment' ? 'Test de Niveau 🎯' : (topic?.label || '');

  container.innerHTML = `
    <div class="ex-header">
      <button class="btn-back" id="btn-back">← Retour</button>
      <div class="ex-topic-label">${topicLabel}</div>
      <div class="ex-progress-text">${state.current + 1} / ${total}</div>
    </div>

    <div class="ex-progress-track">
      <div class="ex-progress-fill" style="width: ${((state.current) / total) * 100}%"></div>
    </div>

    <div class="ex-body">
      <div class="ex-type-badge">${typeLabel(ex.type)}</div>
      <div class="ex-level-badge level-${ex.level}">${ex.level}</div>

      <div class="ex-card">
        <p class="ex-instruction">${ex.instruction}</p>
        ${getMgInstruction(ex.instruction) ? `<p class="ex-instruction-mg">🇲🇬 ${getMgInstruction(ex.instruction)}</p>` : ''}
        ${renderQuestion(ex)}
        <div id="ex-answer-area">
          ${renderAnswerArea(ex)}
        </div>
      </div>

      <div class="ex-actions">
        <button class="btn-hint" id="btn-hint" title="Voir l'indice">💡 Indice <span class="hint-cost">(-5 XP)</span></button>
        <button class="btn-submit" id="btn-submit">Vérifier ✓</button>
      </div>

      <div id="hint-box" class="hint-box hidden">
        <span class="hint-icon">💡</span>
        <span>${ex.hint}</span>
      </div>

      <div id="feedback-box" class="feedback-box hidden"></div>
    </div>
  `;

  bindExerciseEvents(container, state, profile, ex);
}

function renderQuestion(ex) {
  if (ex.type === 'fill-blank') {
    // Show verb hint in parentheses if provided: ___ (go)
    const hint = ex.verbHint ? `<span class="verb-hint">(${escHtml(ex.verbHint)})</span>` : '';
    const blanked = escHtml(ex.template).replace('___', `<span class="blank">___</span>${hint}`);
    return `<div class="ex-question">${blanked}</div>`;
  }
  if (ex.type === 'translate') {
    return `<div class="ex-question translate-q"><span class="flag">🇫🇷</span> ${escHtml(ex.french)}</div>`;
  }
  if (ex.type === 'word-order') {
    const shuffled = shuffle([...ex.words]);
    return `
      <div class="ex-question word-order-q">
        <div class="wo-answer-area" id="wo-answer"></div>
        <div class="wo-bank" id="wo-bank">
          ${shuffled.map((w, i) => `<button class="wo-word" data-word="${escHtml(w)}" data-idx="${i}">${escHtml(w)}</button>`).join('')}
        </div>
      </div>
    `;
  }
  if (ex.type === 'listening') {
    return `
      <div class="ex-question listening-q">
        <button class="btn-listen" id="btn-listen">
          ${isSupported() ? '▶ Écouter' : '🔇 Audio non disponible'}
        </button>
        <p class="listen-hint">Écris ce que tu entends</p>
      </div>
    `;
  }
  if (ex.type === 'error-correct') {
    return `
      <div class="ex-question error-q">
        <p class="error-label">❌ Phrase incorrecte :</p>
        <p class="error-sentence">"${escHtml(ex.sentence)}"</p>
        <p class="error-task">Écris la version correcte ↓</p>
      </div>
    `;
  }
  if (ex.type === 'translate-fr') {
    return `<div class="ex-question translate-q"><span class="flag">🇬🇧</span> ${escHtml(ex.english)}</div>`;
  }
  if (ex.type === 'multiple-choice') {
    const q = ex.question || ex.template || '';
    return `
      <div class="ex-question mc-q">
        <p class="mc-sentence">${escHtml(q).replace('___', '<span class="blank">___</span>')}</p>
        <div class="mc-options" id="mc-options">
          ${ex.options.map((opt, i) => `
            <button class="mc-option" data-idx="${i}" data-value="${escHtml(opt)}">${escHtml(opt)}</button>
          `).join('')}
        </div>
      </div>
    `;
  }
  if (ex.type === 'listening-comp') {
    return `
      <div class="ex-question listening-q">
        <button class="btn-listen" id="btn-listen">
          ${isSupported() ? '▶ Écouter' : '🔇 Audio non disponible'}
        </button>
        <p class="listen-hint comp-question">❓ ${escHtml(ex.question || '')}</p>
      </div>
    `;
  }
  if (ex.type === 'free-production') {
    return `
      <div class="ex-question free-prod-q">
        <p class="fp-label">📝 Utilise ce mot dans une phrase :</p>
        <p class="fp-keyword">${escHtml(ex.keyword)}</p>
      </div>
    `;
  }
  return '';
}

function renderAnswerArea(ex) {
  if (ex.type === 'word-order') return ''; // handled inline
  if (ex.type === 'multiple-choice') return ''; // options are clickable buttons
  const placeholder = ex.type === 'translate-fr'
    ? 'Ta réponse en français...'
    : ex.type === 'free-production'
      ? 'Écris ta phrase ici...'
      : 'Ta réponse en anglais...';
  return `
    <input
      type="text"
      id="answer-input"
      class="answer-input"
      placeholder="${placeholder}"
      autocomplete="off"
      autocorrect="off"
      autocapitalize="off"
      spellcheck="false"
    />
  `;
}

function bindExerciseEvents(container, state, profile, ex) {
  // Back button
  container.querySelector('#btn-back').addEventListener('click', () => {
    stop();
    if (state.mode === 'assessment') location.hash = '#dashboard';
    else location.hash = '#dashboard';
  });

  // Listen button — single instance guard
  const listenBtn = container.querySelector('#btn-listen');
  if (listenBtn) {
    listenBtn.addEventListener('click', () => {
      if (listenBtn.disabled) return;
      listenBtn.disabled = true;
      listenBtn.textContent = '🔊 En cours...';
      const restore = () => {
        listenBtn.disabled = false;
        listenBtn.textContent = '▶ Réécouter';
      };
      speak(ex.audio, { onEnd: restore, onError: restore });
    });
  }

  // Word order
  if (ex.type === 'word-order') {
    setupWordOrder(container);
  }

  // Multiple choice — clicking an option selects it
  if (ex.type === 'multiple-choice') {
    container.querySelectorAll('.mc-option').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.mc-option').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });
  }

  // Hint
  container.querySelector('#btn-hint').addEventListener('click', () => {
    const hintBox = container.querySelector('#hint-box');
    hintBox.classList.remove('hidden');
    state.usedHint = true;
    container.querySelector('#btn-hint').disabled = true;
  });

  // Submit
  container.querySelector('#btn-submit').addEventListener('click', () => {
    if (!state.answered) {
      handleSubmit(container, state, profile, ex);
    } else {
      nextOrFinish(container, state, profile);
    }
  });

  // Enter key
  const input = container.querySelector('#answer-input');
  if (input) {
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        if (!state.answered) handleSubmit(container, state, profile, ex);
        else nextOrFinish(container, state, profile);
      }
    });
    // Auto-focus
    setTimeout(() => input.focus(), 100);
  }
}

function setupWordOrder(container) {
  const bank = container.querySelector('#wo-bank');
  const answerArea = container.querySelector('#wo-answer');
  const selected = [];

  bank.addEventListener('click', e => {
    const btn = e.target.closest('.wo-word');
    if (!btn || btn.disabled) return;
    btn.disabled = true;
    btn.classList.add('used');
    selected.push({ word: btn.dataset.word, idx: btn.dataset.idx });

    const chip = document.createElement('button');
    chip.className = 'wo-chip';
    chip.textContent = btn.dataset.word;
    chip.dataset.idx = btn.dataset.idx;
    answerArea.appendChild(chip);
  });

  answerArea.addEventListener('click', e => {
    const chip = e.target.closest('.wo-chip');
    if (!chip) return;
    const idx = chip.dataset.idx;
    const bankBtn = bank.querySelector(`[data-idx="${idx}"]`);
    if (bankBtn) { bankBtn.disabled = false; bankBtn.classList.remove('used'); }
    const i = selected.findIndex(s => s.idx === idx);
    if (i > -1) selected.splice(i, 1);
    chip.remove();
  });

  // Expose getter
  answerArea._getAnswer = () =>
    selected.map(s => s.word).join(' ').replace(/\s+([.!?,;?])/g, '$1');
}

function getInputAnswer(container, ex) {
  if (ex.type === 'word-order') {
    const answerArea = container.querySelector('#wo-answer');
    return answerArea?._getAnswer?.() || '';
  }
  if (ex.type === 'multiple-choice') {
    const sel = container.querySelector('.mc-option.selected');
    return sel ? sel.dataset.value : '';
  }
  return container.querySelector('#answer-input')?.value?.trim() || '';
}

function handleSubmit(container, state, profile, ex) {
  const rawAnswer = getInputAnswer(container, ex);
  if (!rawAnswer) {
    // For MC, shake the options; for text, shake the input
    if (ex.type === 'multiple-choice') {
      const opts = container.querySelector('#mc-options');
      if (opts) { opts.classList.add('shake'); setTimeout(() => opts.classList.remove('shake'), 400); }
    } else {
      const input = container.querySelector('#answer-input');
      if (input) { input.classList.add('shake'); setTimeout(() => input.classList.remove('shake'), 400); }
    }
    return;
  }

  const correct = checkAnswer(rawAnswer, ex);
  const quality = qualityFromResult(correct, state.usedHint);
  const xp = correct ? (state.usedHint ? 5 : 10) : 0;

  // Update SM2
  const prevSM2 = profile.sm2Items?.[ex.id] || null;
  const newSM2 = calculateNextReview(prevSM2, quality);
  saveSM2(profile.id, ex.id, newSM2);

  // Update profile XP
  if (xp > 0) {
    addXP(profile.id, xp);
    state.xpEarned += xp;
  }

  state.results.push({ id: ex.id, correct, xp, rawAnswer });
  state.answered = true;

  showFeedback(container, correct, ex, rawAnswer, xp);
}

function showFeedback(container, correct, ex, rawAnswer, xp) {
  const feedbackBox = container.querySelector('#feedback-box');
  feedbackBox.classList.remove('hidden', 'correct', 'incorrect');
  feedbackBox.classList.add(correct ? 'correct' : 'incorrect');

  // Gather all accepted answers for display
  const allAccepted = [ex.answer, ...(ex.acceptedAnswers || []), ...(ex.alternatives || [])];

  feedbackBox.innerHTML = correct
    ? `
      <div class="feedback-icon">✅</div>
      <div class="feedback-msg">
        <strong>Bravo !</strong>
        ${xp > 0 ? `<span class="xp-gain">+${xp} XP</span>` : ''}
      </div>
      ${ex.explanation ? `<p class="feedback-explanation">${ex.explanation}</p>` : ''}
    `
    : `
      <div class="feedback-icon">❌</div>
      <div class="feedback-msg">
        <strong>Pas tout à fait !</strong>
      </div>
      <div class="feedback-answer">
        <span class="your-answer">Toi : <em>${escHtml(rawAnswer)}</em></span>
        <span class="correct-answer">✓ Correct : <strong>${escHtml(ex.answer)}</strong></span>
        ${allAccepted.length > 1 ? `<span class="also-accepted">Aussi accepté : ${allAccepted.slice(1).map(a => `<em>${escHtml(a)}</em>`).join(', ')}</span>` : ''}
      </div>
      ${ex.explanation ? `<p class="feedback-explanation">${ex.explanation}</p>` : ''}
    `;

  const submitBtn = container.querySelector('#btn-submit');
  submitBtn.textContent = state.current < state.exercises.length - 1 ? 'Suivant →' : 'Voir les résultats 🏆';
  submitBtn.className = 'btn-submit btn-next';

  const hintBtn = container.querySelector('#btn-hint');
  if (hintBtn) hintBtn.style.display = 'none';

  // Disable input / options after submit
  const input = container.querySelector('#answer-input');
  if (input) input.disabled = true;
  container.querySelectorAll('.wo-word, .wo-chip').forEach(el => el.style.pointerEvents = 'none');
  container.querySelectorAll('.mc-option').forEach(el => { el.disabled = true; });
}

function nextOrFinish(container, state, profile) {
  state.usedHint = false;
  state.answered = false;

  if (state.current < state.exercises.length - 1) {
    state.current++;
    renderExerciseCard(container, state, profile);
  } else {
    finishSession(container, state, profile);
  }
}

function finishSession(container, state, profile) {
  const correctCount = state.results.filter(r => r.correct).length;
  const total = state.results.length;
  const percent = Math.round((correctCount / total) * 100);
  const xpTotal = state.results.reduce((s, r) => s + r.xp, 0);

  // Save progress
  saveTopicProgress(profile.id, state.topicId || 'assessment', total, correctCount);
  if (state.diffLevel) {
    saveLevelProgress(profile.id, state.topicId, state.diffLevel, total, correctCount);
  }
  updateStreak(profile.id);
  saveSession(profile.id, {
    topic: state.topicId,
    mode: state.mode,
    correct: correctCount,
    total,
    xp: xpTotal,
  });

  // Check if next level just unlocked
  const freshProfile = getActiveProfile();
  const nextLv = state.diffLevel ? state.diffLevel + 1 : null;
  const nextUnlocked = nextLv && nextLv <= 3 && percent >= 80 && isLevelUnlocked(freshProfile, state.topicId, nextLv);

  const emoji = percent >= 80 ? '🏆' : percent >= 60 ? '🌟' : percent >= 40 ? '👍' : '💪';
  const msg   = percent >= 80 ? 'Excellent travail !' : percent >= 60 ? 'Bon travail !' : percent >= 40 ? 'Continue !' : 'Ne lâche pas !';
  const levelLabel = state.diffLevel ? LEVEL_LABELS[state.diffLevel] : null;

  container.innerHTML = `
    <div class="results-page">
      <div class="results-header">
        <div class="results-emoji">${emoji}</div>
        <h2>${msg}</h2>
      </div>

      <div class="results-score">
        <div class="score-circle" style="--pct:${percent}">
          <div class="score-inner">
            <span class="score-num">${correctCount}</span>
            <span class="score-den">/ ${total}</span>
          </div>
        </div>
        <div class="score-percent">${percent}% de réussite</div>
      </div>

      ${xpTotal > 0 ? `<div class="results-xp">+${xpTotal} XP gagnés ⭐</div>` : ''}
      ${levelLabel ? `<div class="results-level-badge">${levelLabel}</div>` : ''}
      ${nextUnlocked ? `
        <div class="results-unlock-banner">
          🎉 Niveau ${LEVEL_LABELS[nextLv]} débloqué !
        </div>
      ` : ''}

      <div class="results-breakdown">
        ${state.results.map((r, i) => {
          const ex = state.exercises[i];
          return `
            <div class="result-item ${r.correct ? 'ok' : 'err'}">
              <span class="result-icon">${r.correct ? '✅' : '❌'}</span>
              <span class="result-q">${getShortQuestion(ex)}</span>
              ${!r.correct ? `<span class="result-ans">→ ${escHtml(ex.answer)}</span>` : ''}
            </div>
          `;
        }).join('')}
      </div>

      <div class="results-actions">
        ${nextUnlocked ? `<button class="btn-primary results-next-lv" id="btn-next-lv">🚀 Niveau ${nextLv} →</button>` : ''}
        <button class="btn-${nextUnlocked ? 'secondary' : 'primary'}" id="btn-again">🔄 Recommencer</button>
        <button class="btn-secondary" id="btn-dashboard">🏠 Tableau de bord</button>
        ${state.diffLevel ? `<button class="btn-secondary" id="btn-levels">📊 Niveaux</button>` : ''}
      </div>
    </div>
  `;

  const nextLvBtn = container.querySelector('#btn-next-lv');
  if (nextLvBtn) {
    nextLvBtn.addEventListener('click', () => {
      const newEx = loadExercises(state.topicId, state.mode, getActiveProfile(), nextLv);
      if (!newEx.length) return;
      const newState = { exercises: newEx, current: 0, results: [], usedHint: false, answered: false,
                         topicId: state.topicId, mode: state.mode, diffLevel: nextLv, xpEarned: 0 };
      renderExerciseCard(container, newState, getActiveProfile());
    });
  }

  container.querySelector('#btn-again').addEventListener('click', () => {
    const freshProfile = getActiveProfile();
    const newEx = loadExercises(state.topicId, state.mode, freshProfile, state.diffLevel);
    if (!newEx.length) return;
    const newState = { exercises: newEx, current: 0, results: [], usedHint: false, answered: false,
                       topicId: state.topicId, mode: state.mode, diffLevel: state.diffLevel, xpEarned: 0 };
    renderExerciseCard(container, newState, freshProfile);
  });

  container.querySelector('#btn-dashboard').addEventListener('click', () => {
    location.hash = '#dashboard';
  });

  const levelsBtn = container.querySelector('#btn-levels');
  if (levelsBtn) {
    levelsBtn.addEventListener('click', () => {
      renderLevelPicker(container, state.topicId, state.mode, getActiveProfile());
    });
  }
}

// Synonym map: both directions (key ↔ value are interchangeable)
const SYNONYMS = [
  ['smart',       'intelligent'],
  ['intelligent', 'smart'],
  ['big',         'large'],
  ['large',       'big'],
  ['happy',       'glad'],
  ['glad',        'happy'],
  ['fast',        'quick'],
  ['quick',       'fast'],
  ['little',      'small'],
  ['small',       'little'],
  ['tired',       'exhausted'],
  ['sick',        'ill'],
  ['ill',         'sick'],
  ['beautiful',   'pretty'],
  ['pretty',      'beautiful'],
  ['angry',       'mad'],
  ['mad',         'angry'],
  ['correct',     'right'],
  ['right',       'correct'],
  ['incorrect',   'wrong'],
  ['wrong',       'incorrect'],
];

function checkAnswer(raw, ex) {
  const normalize = s => s.toLowerCase()
    .trim()
    // Ligature normalisation: œ/æ ↔ oe/ae
    .replace(/œ/g, 'oe').replace(/Œ/g, 'oe')
    .replace(/æ/g, 'ae').replace(/Æ/g, 'ae')
    .replace(/[.!?,;:]/g, '')   // strip punctuation
    .replace(/\s+/g, ' ')
    .trim()
    // contraction expansions (both directions)
    .replace(/won't/g,    'will not')
    .replace(/will not/g, "won't")
    .replace(/don't/g,    'do not')
    .replace(/do not/g,   "don't")
    .replace(/doesn't/g,  'does not')
    .replace(/does not/g, "doesn't")
    .replace(/didn't/g,   'did not')
    .replace(/did not/g,  "didn't")
    .replace(/isn't/g,    'is not')
    .replace(/is not/g,   "isn't")
    .replace(/aren't/g,   'are not')
    .replace(/are not/g,  "aren't")
    .replace(/weren't/g,  'were not')
    .replace(/were not/g, "weren't")
    .replace(/wasn't/g,   'was not')
    .replace(/was not/g,  "wasn't")
    .replace(/haven't/g,  'have not')
    .replace(/have not/g, "haven't")
    .replace(/hasn't/g,   'has not')
    .replace(/has not/g,  "hasn't")
    .replace(/hadn't/g,   'had not')
    .replace(/had not/g,  "hadn't")
    .replace(/wouldn't/g, 'would not')
    .replace(/would not/g,"wouldn't")
    .replace(/couldn't/g, 'could not')
    .replace(/could not/g,"couldn't")
    .replace(/shouldn't/g,'should not')
    .replace(/should not/g,"shouldn't")
    .replace(/i'm/g,      'i am')
    .replace(/i am/g,     "i'm")
    .replace(/she's/g,    'she is')
    .replace(/he's/g,     'he is')
    .replace(/it's/g,     'it is')
    .replace(/they're/g,  'they are')
    .replace(/we're/g,    'we are')
    .replace(/you're/g,   'you are')
    .replace(/i've/g,     'i have')
    .replace(/i'd/g,      'i would')
    .replace(/i'll/g,     'i will');

  // Strip optional articles for article-flexibility ("the dinner" ≈ "dinner")
  const stripArticles = s => s.replace(/\b(the|a|an)\b\s*/g, '').replace(/\s+/g, ' ').trim();

  // Free production: correct if the keyword appears and answer is ≥ 4 words
  if (ex.type === 'free-production') {
    const words = raw.trim().split(/\s+/);
    return words.length >= 4 && raw.toLowerCase().includes(ex.keyword.toLowerCase());
  }

  const ans     = normalize(raw);
  const correct = normalize(ex.answer);

  if (ans === correct) return true;

  // Check acceptedAnswers list (explicit multi-answer support)
  if (ex.acceptedAnswers?.some(a => normalize(a) === ans)) return true;

  // Check legacy alternatives array
  if (ex.alternatives?.some(alt => normalize(alt) === ans)) return true;

  // Article-flexible comparison: ignore a/an/the differences
  if (stripArticles(ans) === stripArticles(correct) && stripArticles(ans).length > 0) return true;

  // Check synonym substitution
  for (const [a, b] of SYNONYMS) {
    const re = new RegExp('\\b' + a + '\\b', 'g');
    if (normalize(correct.replace(re, b)) === ans) return true;
    if (normalize(ans.replace(re, b)) === correct) return true;
  }

  return false;
}

function getShortQuestion(ex) {
  if (ex.type === 'translate') return `🇫🇷 ${ex.french?.substring(0, 40)}...`;
  if (ex.type === 'translate-fr') return `🇬🇧 ${ex.english?.substring(0, 40)}...`;
  if (ex.type === 'multiple-choice') return (ex.question || ex.template || '')?.substring(0, 40) + '...';
  if (ex.type === 'free-production') return `📝 ${ex.keyword}`;
  if (ex.type === 'listening-comp') return `🎧 ${ex.question?.substring(0, 30)}...`;
  if (ex.type === 'fill-blank') return ex.template?.substring(0, 40) + '...';
  if (ex.type === 'word-order') return ex.words?.slice(0, 4).join(' ') + '...';
  if (ex.type === 'listening') return '🎧 ' + ex.audio?.substring(0, 30) + '...';
  if (ex.type === 'error-correct') return ex.sentence?.substring(0, 40) + '...';
  return ex.id;
}

function renderEmpty(topicId) {
  const div = document.createElement('div');
  div.innerHTML = `
    <div class="empty-page">
      <p>Aucun exercice trouvé pour ce sujet.</p>
      <button onclick="location.hash='#dashboard'">Retour</button>
    </div>
  `;
  return div;
}

function typeLabel(type) {
  const labels = {
    'fill-blank':       '✏️ Complète',
    'translate':        '🔄 Traduis FR→EN',
    'translate-fr':     '🔄 Traduis EN→FR',
    'word-order':       '🔀 Ordonne',
    'listening':        '🎧 Écoute',
    'listening-comp':   '🎧 Compréhension',
    'error-correct':    '🔍 Corrige',
    'multiple-choice':  '🎯 Choix multiple',
    'free-production':  '✍️ Production libre',
  };
  return labels[type] || type;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function escHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}
