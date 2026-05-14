/**
 * Lecture MG — textes A1 ultra-simples avec traduction malgache mot-à-mot
 * Flow: liste → texte → questions (MCQ) → résultats + traduction
 */
import { LECTURE_TEXTS } from '../data/comprehension-ecrite.js';
import { getActiveProfile, addXP, updateStreak } from '../storage.js';

function escHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, c =>
    ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}

export function renderLecture(textId) {
  const profile = getActiveProfile();
  if (!profile) { location.hash = '#profiles'; return document.createElement('div'); }

  const container = document.createElement('div');
  container.className = 'lecture-page';
  if (textId) {
    const found = LECTURE_TEXTS.find(t => t.id === textId);
    if (found) renderText(container, found.id);
    else renderList(container);
  } else {
    renderList(container);
  }
  return container;
}

// ─── LIST ────────────────────────────────────────────────────────────────────
function renderList(container) {
  container.innerHTML = `
    <div class="lecture-list-view">
      <div class="lecture-list-header">
        <button class="btn-back" id="lec-back">‹</button>
        <div>
          <h2 class="lecture-list-title">🌿 Lecture MG</h2>
          <p class="lecture-list-sub">Lis, comprends, et découvre la traduction en malgache</p>
        </div>
      </div>
      <div class="lecture-cards">
        ${LECTURE_TEXTS.map(t => `
          <button class="lecture-card" data-id="${t.id}">
            <span class="lecture-card-icon">${t.icon}</span>
            <div class="lecture-card-body">
              <div class="lecture-card-title">${escHtml(t.title)}</div>
              <div class="lecture-card-meta">A1 · ${t.questions.length} questions · 🌿 traduction MG</div>
            </div>
            <span class="lecture-card-arrow">›</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;
  container.querySelector('#lec-back').addEventListener('click', () => { location.hash = '#dashboard'; });
  container.querySelectorAll('.lecture-card').forEach(card => {
    card.addEventListener('click', () => renderText(container, card.dataset.id));
  });
}

// ─── TEXT VIEW ───────────────────────────────────────────────────────────────
function renderText(container, textId) {
  const text = LECTURE_TEXTS.find(t => t.id === textId);
  if (!text) { renderList(container); return; }

  container.innerHTML = `
    <div class="lecture-text-view">
      <div class="lecture-header">
        <button class="btn-back" id="lec-back">‹</button>
        <span class="lecture-title-icon">${text.icon}</span>
        <span class="lecture-title-text">${escHtml(text.title)}</span>
        <span class="lecture-badge">A1</span>
      </div>
      <div class="lecture-text-box">
        <p>${escHtml(text.text)}</p>
      </div>
      <div class="lecture-instr">
        📖 Lis le texte, puis réponds aux questions.<br>
        <span class="lecture-instr-mg">Vakio ny lahatsoratra, avy eo valio ny fanontaniana.</span>
      </div>
      <button class="btn-primary lecture-start-btn" id="lec-start">
        ▶ Commencer les questions →
      </button>
    </div>
  `;
  container.querySelector('#lec-back').addEventListener('click', () => renderList(container));
  container.querySelector('#lec-start').addEventListener('click', () => renderQuestion(container, text, 0, []));
}

// ─── QUESTION ────────────────────────────────────────────────────────────────
function renderQuestion(container, text, qIndex, answers) {
  const q = text.questions[qIndex];
  const total = text.questions.length;

  container.innerHTML = `
    <div class="lecture-q-view">
      <div class="lecture-header">
        <button class="btn-back" id="lec-back">‹</button>
        <span class="lecture-title-icon">${text.icon}</span>
        <span class="lecture-title-text">${escHtml(text.title)}</span>
        <span class="lecture-badge">${qIndex + 1} / ${total}</span>
      </div>

      <div class="lecture-text-box lecture-text-small">
        <p>${escHtml(text.text)}</p>
      </div>

      <div class="lecture-q-card">
        <div class="lecture-q-num">Q${qIndex + 1}</div>
        <div class="lecture-q-text">${escHtml(q.question)}</div>
        <div class="lecture-q-options">
          ${q.options.map((opt, i) => `
            <button class="lecture-opt-btn" data-idx="${i}">${escHtml(opt)}</button>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  container.querySelector('#lec-back').addEventListener('click', () => {
    if (confirm('Abandonner cette lecture ?')) renderList(container);
  });

  container.querySelectorAll('.lecture-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const chosen = parseInt(btn.dataset.idx, 10);
      const correct = chosen === q.correct;

      // Visual feedback
      container.querySelectorAll('.lecture-opt-btn').forEach(b => {
        b.disabled = true;
        if (parseInt(b.dataset.idx, 10) === q.correct) b.classList.add('lec-opt-correct');
        if (b === btn && !correct) b.classList.add('lec-opt-wrong');
      });

      const newAnswers = [...answers, { chosen, correct }];

      // Add "Next" button
      const card = container.querySelector('.lecture-q-card');
      const nextDiv = document.createElement('div');
      nextDiv.className = 'lecture-q-next';
      nextDiv.innerHTML = `
        <span class="lecture-q-fb ${correct ? 'lec-fb-ok' : 'lec-fb-no'}">${correct ? '✅ Correct !' : `❌ ${escHtml(q.options[q.correct])}`}</span>
        <button class="btn-primary" id="lec-next">
          ${qIndex + 1 < total ? 'Question suivante →' : '🌿 Voir la traduction →'}
        </button>
      `;
      card.appendChild(nextDiv);

      nextDiv.querySelector('#lec-next').addEventListener('click', () => {
        if (qIndex + 1 < total) {
          renderQuestion(container, text, qIndex + 1, newAnswers);
        } else {
          renderResults(container, text, newAnswers);
        }
      });
    });
  });
}

// ─── RESULTS + TRADUCTION ────────────────────────────────────────────────────
function renderResults(container, text, answers) {
  const score = answers.filter(a => a.correct).length;
  const total = text.questions.length;
  const xpEarned = score * 3;

  // Award XP
  const profile = getActiveProfile();
  if (profile) {
    addXP(profile.id, xpEarned);
    updateStreak(profile.id);
  }

  const translationHtml = text.sentences.map(s => `
    <div class="lec-sentence-block">
      <div class="lec-sen-en">${escHtml(s.en)}</div>
      <div class="lec-sen-words">
        ${s.words.map(w => `<span class="lec-word-pair"><span class="lec-w-en">${escHtml(w.en)}</span><span class="lec-w-mg">${escHtml(w.mg)}</span></span>`).join('')}
      </div>
      <div class="lec-sen-free">🇲🇬 ${escHtml(s.mgFree)}</div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="lecture-results-view">
      <div class="lecture-header">
        <button class="btn-back" id="lec-back">‹</button>
        <span class="lecture-title-icon">${text.icon}</span>
        <span class="lecture-title-text">${escHtml(text.title)}</span>
        <span class="lecture-badge">Résultats</span>
      </div>

      <div class="lec-score-banner">
        <div class="lec-score-num">${score} / ${total}</div>
        <div class="lec-score-xp">+${xpEarned} XP ⭐</div>
        <div class="lec-score-msg">${score === total ? '🎉 Parfait !' : score >= total * 0.6 ? '👍 Bien joué !' : '💪 Continue !'}</div>
      </div>

      <div class="lec-translation-section">
        <h3 class="lec-trans-title">🌿 Traduction malgache mot-à-mot</h3>
        <p class="lec-trans-note">Format : <em>mot anglais</em> → <em>traduction malgache</em></p>
        ${translationHtml}
        <p class="lec-av-note">💡 Les mots marqués [À VÉRIFIER] sont à confirmer avec un locuteur natif.</p>
      </div>

      <div class="lec-end-actions">
        <button class="btn-primary" id="lec-retry">🔄 Recommencer</button>
        <button class="btn-secondary" id="lec-list">📋 Autres textes</button>
      </div>
    </div>
  `;

  container.querySelector('#lec-back').addEventListener('click', () => renderList(container));
  container.querySelector('#lec-retry').addEventListener('click', () => renderText(container, text.id));
  container.querySelector('#lec-list').addEventListener('click', () => renderList(container));
}
