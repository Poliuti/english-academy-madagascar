import { DIALOGUE_SCENARIOS, getDialoguesByScenario, getScenarioById } from '../data/dialogues.js';
import { getActiveProfile, addXP } from '../storage.js';
import { speak } from '../tts.js';

export function renderDialogueList() {
  const container = document.createElement('div');
  container.className = 'dialogue-list-page';

  container.innerHTML = `
    <header class="sub-header">
      <button class="btn-back" id="btn-back">← Retour</button>
      <h2>💬 Dialogues</h2>
    </header>
    <div class="sub-intro">
      <p>Entraîne-toi avec des conversations de la vie réelle.</p>
      <p class="mg-note">🇲🇬 Mianara miresaka amin\'ny teny anglisy amin\'ny resaka andavanandro.</p>
    </div>
    <div class="dialogue-grid">
      ${DIALOGUE_SCENARIOS.map(s => `
        <button class="dialogue-card level-${s.level}" data-id="${s.id}">
          <div class="dialogue-icon">${s.icon}</div>
          <div class="dialogue-info">
            <div class="dialogue-title">${s.title}</div>
            <div class="dialogue-desc">${s.description}</div>
            <div class="dialogue-mg">🇲🇬 ${s.malgasy}</div>
          </div>
          <div class="dialogue-level">${s.level}</div>
        </button>
      `).join('')}
    </div>
  `;

  container.querySelector('#btn-back').addEventListener('click', () => {
    location.hash = '#dashboard';
  });

  container.querySelectorAll('.dialogue-card').forEach(card => {
    card.addEventListener('click', () => {
      location.hash = `#dialogue?id=${card.dataset.id}`;
    });
  });

  return container;
}

export function renderDialogue(scenarioId) {
  const container = document.createElement('div');
  container.className = 'dialogue-page';

  const scenario = getScenarioById(scenarioId);
  const dialogues = getDialoguesByScenario(scenarioId);

  if (!scenario || dialogues.length === 0) {
    container.innerHTML = `<div class="empty-page"><p>Dialogue non trouvé.</p><button onclick="location.hash='#dialogues'">Retour</button></div>`;
    return container;
  }

  const profile = getActiveProfile();
  const dialogue = dialogues[0]; // first one for now

  // Start at the first turn that requires user input
  const firstTaskIndex = dialogue.turns.findIndex(t => t.task);

  const state = {
    turnIndex: firstTaskIndex >= 0 ? firstTaskIndex : dialogue.turns.length,
    answered: [],
    showHint: false,
    xpGained: 0,
  };

  function render() {
    container.innerHTML = `
      <div class="ex-header">
        <button class="btn-back" id="btn-back">← Retour</button>
        <div class="ex-topic-label">${scenario.icon} ${scenario.title}</div>
        <div class="ex-progress-text">${scenario.level}</div>
      </div>

      <div class="dialogue-intro">
        <h3>${dialogue.title}</h3>
        <p class="mg-note">🇲🇬 ${scenario.malgasy}</p>
      </div>

      <div class="dialogue-chat" id="dialogue-chat">
        ${renderTurns(dialogue, state)}
      </div>

      <div id="dialogue-actions"></div>
    `;

    bind();
  }

  function bind() {
    container.querySelector('#btn-back').addEventListener('click', () => {
      location.hash = '#dialogues';
    });

    // TTS buttons
    container.querySelectorAll('.tts-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.dataset.text;
        btn.classList.add('playing');
        speak(text, { onEnd: () => btn.classList.remove('playing') });
      });
    });

    // If current turn has task and not answered → show input
    const currentTurn = dialogue.turns[state.turnIndex];
    if (currentTurn && currentTurn.task && !state.answered[state.turnIndex]) {
      renderInput(currentTurn);
    } else if (state.turnIndex >= dialogue.turns.length) {
      renderComplete();
    }

    // Auto-scroll
    const chat = container.querySelector('#dialogue-chat');
    if (chat) chat.scrollTop = chat.scrollHeight;
  }

  function renderInput(turn) {
    const actionsDiv = container.querySelector('#dialogue-actions');
    const task = turn.task;

    if (task.type === 'choice') {
      actionsDiv.innerHTML = `
        <div class="dialogue-task">
          <p class="task-french">🇫🇷 ${escHtml(task.french || 'Choisissez la bonne réponse')}</p>
          <div class="choice-list">
            ${task.options.map((opt, i) => `
              <button class="choice-btn" data-i="${i}">${escHtml(opt)}</button>
            `).join('')}
          </div>
          <button class="btn-hint" id="btn-hint">💡 Indice</button>
          <div id="hint-box" class="hint-box hidden">💡 ${escHtml(task.hint || '')}</div>
          <div id="feedback-box" class="feedback-box hidden"></div>
        </div>
      `;

      actionsDiv.querySelectorAll('.choice-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const chosen = task.options[btn.dataset.i];
          handleAnswer(turn, chosen);
        });
      });

      bindHint();

    } else {
      // fill or listen
      actionsDiv.innerHTML = `
        <div class="dialogue-task">
          ${task.french ? `<p class="task-french">🇫🇷 ${escHtml(task.french)}</p>` : ''}
          <input
            type="text"
            id="dialogue-input"
            class="answer-input"
            placeholder="Écrivez en anglais..."
            autocomplete="off"
          />
          <div class="dialogue-task-btns">
            <button class="btn-hint" id="btn-hint">💡 Indice</button>
            <button class="btn-submit" id="btn-submit">Vérifier ✓</button>
          </div>
          <div id="hint-box" class="hint-box hidden">💡 ${escHtml(task.hint || '')}</div>
          <div id="feedback-box" class="feedback-box hidden"></div>
        </div>
      `;

      const input = actionsDiv.querySelector('#dialogue-input');
      actionsDiv.querySelector('#btn-submit').addEventListener('click', () => {
        handleAnswer(turn, input.value.trim());
      });
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter') handleAnswer(turn, input.value.trim());
      });
      setTimeout(() => input.focus(), 100);

      bindHint();
    }
  }

  function bindHint() {
    const hintBtn = container.querySelector('#btn-hint');
    if (hintBtn) {
      hintBtn.addEventListener('click', () => {
        container.querySelector('#hint-box').classList.remove('hidden');
      });
    }
  }

  function handleAnswer(turn, userAnswer) {
    if (!userAnswer) return;
    const task = turn.task;
    const correct = checkAnswer(userAnswer, task.answer, task.alternatives);

    state.answered[state.turnIndex] = { userAnswer, correct };

    const feedback = container.querySelector('#feedback-box');
    feedback.classList.remove('hidden', 'correct', 'incorrect');
    feedback.classList.add(correct ? 'correct' : 'incorrect');
    feedback.innerHTML = correct
      ? `<div class="feedback-msg"><strong>✅ Bravo !</strong> +10 XP</div>`
      : `<div class="feedback-msg"><strong>❌ Pas tout à fait.</strong> Réponse : <em>${escHtml(task.answer)}</em></div>`;

    if (correct && profile) {
      addXP(profile.id, 10);
      state.xpGained += 10;
    }

    // Disable inputs
    const input = container.querySelector('#dialogue-input');
    if (input) input.disabled = true;
    container.querySelectorAll('.choice-btn').forEach(b => b.disabled = true);
    const submitBtn = container.querySelector('#btn-submit');
    if (submitBtn) {
      submitBtn.textContent = state.turnIndex < dialogue.turns.length - 1 ? 'Suivant →' : 'Terminer 🏁';
      submitBtn.onclick = nextTurn;
    } else {
      // For choice, add next button
      const nextBtn = document.createElement('button');
      nextBtn.className = 'btn-submit btn-next';
      nextBtn.textContent = state.turnIndex < dialogue.turns.length - 1 ? 'Suivant →' : 'Terminer 🏁';
      nextBtn.addEventListener('click', nextTurn);
      feedback.after(nextBtn);
    }
  }

  function nextTurn() {
    state.turnIndex++;
    // Skip display-only turns (no task), they'll be visible in the chat
    while (state.turnIndex < dialogue.turns.length && !dialogue.turns[state.turnIndex].task) {
      state.turnIndex++;
    }
    render();
  }

  function renderComplete() {
    const correctCount = state.answered.filter(a => a?.correct).length;
    const total = state.answered.filter(a => a).length;
    const actionsDiv = container.querySelector('#dialogue-actions');
    actionsDiv.innerHTML = `
      <div class="dialogue-complete">
        <div class="results-emoji">🎉</div>
        <h2>Dialogue terminé !</h2>
        <div class="results-score-line">${correctCount} / ${total} · +${state.xpGained} XP</div>
        <div class="results-actions">
          <button class="btn-primary" id="btn-retry">🔄 Refaire</button>
          <button class="btn-secondary" id="btn-back-list">📋 Autres dialogues</button>
        </div>
      </div>
    `;

    actionsDiv.querySelector('#btn-retry').addEventListener('click', () => {
      location.hash = `#dialogue?id=${scenarioId}`;
      location.reload();
    });
    actionsDiv.querySelector('#btn-back-list').addEventListener('click', () => {
      location.hash = '#dialogues';
    });
  }

  render();
  return container;
}

function renderTurns(dialogue, state) {
  return dialogue.turns.slice(0, state.turnIndex + 1).map((turn, i) => {
    const isUser = turn.speaker === 'B' || turn.speaker === 'Vous' || turn.speaker === 'Client' || turn.speaker === 'Patient' || turn.speaker === 'Candidat';
    const answered = state.answered[i];
    const hasTask = !!turn.task;

    let content;
    if (hasTask && !answered) {
      content = `<span class="turn-blank">___</span>`;
    } else if (hasTask && answered) {
      const displayText = answered.correct ? turn.task.answer : `<s>${escHtml(answered.userAnswer)}</s> → <strong>${escHtml(turn.task.answer)}</strong>`;
      content = `
        ${displayText}
        <button class="tts-btn" data-text="${escHtml(turn.task.answer)}" title="Écouter">▶</button>
      `;
    } else {
      content = `
        ${escHtml(turn.text)}
        <button class="tts-btn" data-text="${escHtml(turn.text)}" title="Écouter">▶</button>
      `;
    }

    return `
      <div class="chat-turn ${isUser ? 'user' : 'other'}">
        <div class="chat-speaker">${escHtml(turn.speaker)}</div>
        <div class="chat-bubble">
          <div class="chat-en">${content}</div>
          ${turn.fr && !hasTask ? `<div class="chat-fr">🇫🇷 ${escHtml(turn.fr)}</div>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function checkAnswer(user, correct, alternatives) {
  const normalize = s => s.toLowerCase().trim()
    .replace(/œ/g, 'oe').replace(/Œ/g, 'oe').replace(/æ/g, 'ae').replace(/Æ/g, 'ae')
    .replace(/[.!?,]/g, '').replace(/\s+/g, ' ');
  const n = normalize(user);
  if (n === normalize(correct)) return true;
  if (alternatives) {
    return alternatives.some(a => normalize(a) === n);
  }
  return false;
}

function escHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}
