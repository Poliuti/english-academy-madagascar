/**
 * Reading Comprehension View
 * Phases: list → reading → questions → results
 *
 * Question types: mcq | tf | short | selfcheck
 * Glossary: tap on highlighted words shows FR/MG tooltip (hint tracker)
 */

import { getActiveProfile, addXP, updateStreak } from '../storage.js';
import { READING_TEXTS } from '../data/reading.js';

const LEVEL_COLOR = { A1: '#F59E0B', A2: '#3B82F6', B1: '#10B981', 'B1+': '#8B5CF6' };
const LEVEL_BG    = { A1: '#FEF3C7', A2: '#DBEAFE', B1: '#D1FAE5', 'B1+': '#EDE9FE' };
const LEVEL_TEXT  = { A1: '#92400E', A2: '#1E40AF', B1: '#065F46', 'B1+': '#4C1D95' };

// ─── Storage helpers (inline, avoids touching storage.js) ─────────────────────
function getReadingMap() {
  const profile = getActiveProfile();
  return profile?.readingProgress || {};
}
function saveReadingResult(textId, score, total, xpEarned) {
  try {
    const raw  = JSON.parse(localStorage.getItem('english_academy') || '{}');
    const pid  = raw.activeProfileId;
    const idx  = raw.profiles?.findIndex(p => p.id === pid);
    if (idx === -1 || idx == null) return;
    if (!raw.profiles[idx].readingProgress) raw.profiles[idx].readingProgress = {};
    raw.profiles[idx].readingProgress[textId] = {
      score, total, xpEarned, completedAt: Date.now(),
    };
    localStorage.setItem('english_academy', JSON.stringify(raw));
  } catch (_) {}
}

// ─── Main entry ───────────────────────────────────────────────────────────────
export function renderReading(textId) {
  const profile = getActiveProfile();
  if (!profile) { location.hash = '#profiles'; return document.createElement('div'); }

  const container = document.createElement('div');
  container.className = 'reading-page';

  if (textId) {
    const text = READING_TEXTS.find(t => t.id === textId);
    if (text) renderTextView(container, text);
    else renderList(container);
  } else {
    renderList(container);
  }

  return container;
}

// ══════════════════════════════════════════════════════════════════════════════
// LIST
// ══════════════════════════════════════════════════════════════════════════════
function renderList(container) {
  const readingMap = getReadingMap();

  let activeLevel = 'all';

  const render = () => {
    const filtered = activeLevel === 'all'
      ? READING_TEXTS
      : READING_TEXTS.filter(t => t.level === activeLevel);

    container.innerHTML = `
      <div class="rd-list-header">
        <button class="btn-back" id="rd-back">‹ Retour</button>
        <h1 class="rd-list-title">📖 Compréhension</h1>
      </div>

      <div class="rd-list-content">
        <div class="rd-level-filters">
          ${['all','A1','A2','B1','B1+'].map(lv => `
            <button class="rd-filter-btn ${activeLevel === lv ? 'active' : ''}" data-lv="${lv}">
              ${lv === 'all' ? 'Tous' : lv}
            </button>
          `).join('')}
        </div>

        <div class="rd-text-grid">
          ${filtered.map(t => {
            const done = readingMap[t.id];
            const pct  = done ? Math.round((done.score / done.total) * 100) : null;
            return `
              <div class="rd-text-card" data-id="${t.id}">
                <div class="rd-card-top">
                  <span class="rd-card-icon">${t.icon}</span>
                  <span class="rd-level-badge" style="background:${LEVEL_BG[t.level]};color:${LEVEL_TEXT[t.level]}">${t.level}</span>
                  ${done ? `<span class="rd-done-badge">✅</span>` : ''}
                </div>
                <div class="rd-card-title">${escHtml(t.title)}</div>
                <div class="rd-card-meta">${t.wordCount} mots · ${t.questions.length} questions · ⭐ ${t.xpReward} XP</div>
                ${done ? `
                  <div class="rd-card-score">
                    <div class="rd-card-score-bar">
                      <div class="rd-card-score-fill" style="width:${pct}%;background:${pct >= 80 ? '#4CAF50' : pct >= 60 ? '#FF9800' : '#E53935'}"></div>
                    </div>
                    <span class="rd-card-pct">${done.score}/${done.total} — ${pct}%</span>
                  </div>
                ` : ''}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    container.querySelector('#rd-back').addEventListener('click', () => {
      location.hash = '#dashboard';
    });

    container.querySelectorAll('.rd-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeLevel = btn.dataset.lv;
        render();
      });
    });

    container.querySelectorAll('.rd-text-card').forEach(card => {
      card.addEventListener('click', () => {
        location.hash = `#reading?id=${card.dataset.id}`;
      });
    });
  };

  render();
}

// ══════════════════════════════════════════════════════════════════════════════
// TEXT VIEW  (reading → questions → results)
// ══════════════════════════════════════════════════════════════════════════════
function renderTextView(container, text) {
  // State
  let phase       = 'reading';   // 'reading' | 'questions' | 'results'
  let qIndex      = 0;
  let answers     = [];          // { correct: bool, skipped?: bool }
  let hintsUsed   = 0;
  let textCollapsed = false;
  let selfReveal  = false;       // for selfcheck questions
  let shortInput  = '';

  const glossary = text.glossary || {};
  const qs       = text.questions;

  // ── Tooltip state ──────────────────────────────────────────────────────────
  let tooltipWord = null;

  // ── Render loop ────────────────────────────────────────────────────────────
  const render = () => {
    tooltipWord = null; // reset on every full re-render
    container.innerHTML = `
      <div class="rd-view-header">
        <button class="btn-back" id="rd-back">‹</button>
        <div class="rd-view-title-wrap">
          <span class="rd-view-icon">${text.icon}</span>
          <span class="rd-view-title">${escHtml(text.title)}</span>
        </div>
        <span class="rd-level-badge" style="background:${LEVEL_BG[text.level]};color:${LEVEL_TEXT[text.level]}">${text.level}</span>
      </div>

      ${phase !== 'results' ? `
      <div class="rd-text-panel ${textCollapsed ? 'collapsed' : ''}">
        <button class="rd-text-toggle" id="rd-toggle">
          ${textCollapsed ? '📄 Voir le texte ▼' : '📄 Texte ▲'}
          ${Object.keys(glossary).length > 0 ? `<span class="rd-gloss-hint">Tapez les mots soulignés pour la traduction</span>` : ''}
        </button>
        <div class="rd-text-body" id="rd-text-body">
          <div class="rd-text-content">${renderText(text.text, glossary)}</div>
          ${Object.keys(glossary).length > 0 ? `
            <div id="rd-tooltip" class="rd-tooltip hidden"></div>
          ` : ''}
        </div>
      </div>
      ` : ''}

      <div class="rd-main">
        ${phase === 'reading'   ? renderReadingPhase(text) : ''}
        ${phase === 'questions' ? renderQuestion(qs[qIndex], qIndex, qs.length, hintsUsed) : ''}
        ${phase === 'results'   ? renderResults(text, answers, hintsUsed) : ''}
      </div>
    `;

    // ── Back button ──
    container.querySelector('#rd-back').addEventListener('click', () => {
      if (phase === 'questions') {
        if (confirm('Abandonner cet exercice ?')) location.hash = '#reading';
      } else {
        location.hash = '#reading';
      }
    });

    // ── Text collapse toggle ──
    container.querySelector('#rd-toggle')?.addEventListener('click', () => {
      textCollapsed = !textCollapsed;
      render();
    });

    // ── Glossary word taps ──
    if (Object.keys(glossary).length > 0) {
      container.querySelectorAll('.gloss-word').forEach(span => {
        span.addEventListener('click', e => {
          e.stopPropagation();
          const word = span.dataset.word;
          const tt = container.querySelector('#rd-tooltip');
          if (word === tooltipWord) {
            // Toggle off
            tooltipWord = null;
            if (tt) tt.classList.add('hidden');
            return;
          }
          tooltipWord = word;
          const entry = glossary[word];
          const isQ = phase === 'questions';
          if (isQ) {
            hintsUsed++;
            // Update hint badge in-place — no re-render
            const hintsEl = container.querySelector('.rd-hints-used');
            if (hintsEl) {
              hintsEl.textContent = `💡 ${hintsUsed} aide${hintsUsed > 1 ? 's' : ''}`;
            } else {
              const metaRow = container.querySelector('.rd-q-meta');
              if (metaRow) {
                const badge = document.createElement('span');
                badge.className = 'rd-hints-used';
                badge.textContent = `💡 ${hintsUsed} aide${hintsUsed > 1 ? 's' : ''}`;
                metaRow.appendChild(badge);
              }
            }
          }
          showTooltip(container, span, word, entry, isQ);
        });
      });

      // ✕ close button resets tooltipWord (register only once on the container)
      if (!container._tooltipClosedBound) {
        container._tooltipClosedBound = true;
        container.addEventListener('tooltip-closed', () => { tooltipWord = null; });
      }

      // Click anywhere in the text body (not on a word) dismisses the tooltip
      container.querySelector('.rd-text-body')?.addEventListener('click', () => {
        const tt = container.querySelector('#rd-tooltip');
        if (tt && !tt.classList.contains('hidden')) {
          tt.classList.add('hidden');
          tooltipWord = null;
        }
      });
    }

    // ── Phase-specific bindings ──
    if (phase === 'reading') bindReadingPhase(container);
    if (phase === 'questions') bindQuestion(container, qs[qIndex]);
    if (phase === 'results') bindResults(container, text);
  };

  // ── Transition handlers ────────────────────────────────────────────────────
  function bindReadingPhase(c) {
    c.querySelector('#rd-start-btn')?.addEventListener('click', () => {
      phase = 'questions';
      qIndex = 0;
      answers = [];
      hintsUsed = 0;
      textCollapsed = false;
      selfReveal = false;
      render();
    });
  }

  function bindQuestion(c, q) {
    if (q.type === 'mcq') {
      c.querySelectorAll('.rd-option').forEach(btn => {
        btn.addEventListener('click', () => {
          if (btn.dataset.answered) return;
          const chosen = parseInt(btn.dataset.idx);
          const correct = chosen === q.correct;
          answers.push({ correct, chosen, type: 'mcq' });
          // Show feedback
          c.querySelectorAll('.rd-option').forEach(b => {
            b.dataset.answered = '1';
            const idx = parseInt(b.dataset.idx);
            if (idx === q.correct) b.classList.add('rd-opt-correct');
            else if (idx === chosen && !correct) b.classList.add('rd-opt-wrong');
          });
          c.querySelector('#rd-next-btn').classList.remove('hidden');
        });
      });
    }

    if (q.type === 'tf') {
      c.querySelectorAll('.rd-tf-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (btn.dataset.answered) return;
          const chosen  = btn.dataset.val === 'true';
          const correct = chosen === q.correct;
          answers.push({ correct, chosen, type: 'tf' });
          c.querySelectorAll('.rd-tf-btn').forEach(b => {
            b.dataset.answered = '1';
            const val = b.dataset.val === 'true';
            if (val === q.correct) b.classList.add('rd-opt-correct');
            else if (val === chosen && !correct) b.classList.add('rd-opt-wrong');
          });
          c.querySelector('#rd-next-btn').classList.remove('hidden');
        });
      });
    }

    if (q.type === 'short') {
      const form = c.querySelector('#rd-short-form');
      const input = c.querySelector('#rd-short-input');
      form?.addEventListener('submit', e => {
        e.preventDefault();
        if (c.querySelector('#rd-short-feedback')) return;
        const val = input.value.trim();
        if (!val) return;
        const correct = checkShort(val, q.keywords);
        answers.push({ correct, userAnswer: val, type: 'short' });
        input.disabled = true;
        // Feedback
        const fb = document.createElement('div');
        fb.id = 'rd-short-feedback';
        fb.className = correct ? 'rd-short-fb rd-fb-ok' : 'rd-short-fb rd-fb-err';
        fb.innerHTML = correct
          ? `✅ Correct !`
          : `❌ Réponse attendue : <strong>${q.keywords[0]}</strong>`;
        form.appendChild(fb);
        c.querySelector('#rd-next-btn').classList.remove('hidden');
      });
    }

    if (q.type === 'selfcheck') {
      const textarea = c.querySelector('#rd-selfcheck-input');
      const revealBtn = c.querySelector('#rd-reveal-btn');
      revealBtn?.addEventListener('click', () => {
        if (!textarea.value.trim()) {
          textarea.classList.add('rd-input-shake');
          setTimeout(() => textarea.classList.remove('rd-input-shake'), 400);
          return;
        }
        // Show model answer
        const modelDiv = c.querySelector('#rd-model-answer');
        modelDiv.classList.remove('hidden');
        revealBtn.disabled = true;
        textarea.disabled = true;
      });
      c.querySelector('#rd-self-correct')?.addEventListener('click', () => {
        answers.push({ correct: true, type: 'selfcheck' });
        c.querySelector('#rd-next-btn').classList.remove('hidden');
        c.querySelector('#rd-self-correct').disabled = true;
        c.querySelector('#rd-self-incorrect').disabled = true;
      });
      c.querySelector('#rd-self-incorrect')?.addEventListener('click', () => {
        answers.push({ correct: false, type: 'selfcheck' });
        c.querySelector('#rd-next-btn').classList.remove('hidden');
        c.querySelector('#rd-self-correct').disabled = true;
        c.querySelector('#rd-self-incorrect').disabled = true;
      });
    }

    c.querySelector('#rd-next-btn')?.addEventListener('click', () => {
      if (qIndex < qs.length - 1) {
        qIndex++;
        selfReveal = false;
        render();
      } else {
        // Save & show results
        const score = answers.filter(a => a.correct).length;
        const profile = getActiveProfile();
        const xpBase  = text.xpReward;
        const xpBonus = score === qs.length ? 5 : 0;
        const xpPenalty = Math.min(hintsUsed, 5);
        const xpEarned = Math.max(0, xpBase + xpBonus - xpPenalty);
        if (profile) {
          addXP(profile.id, xpEarned);
          updateStreak(profile.id);
          saveReadingResult(text.id, score, qs.length, xpEarned);
        }
        phase = 'results';
        textCollapsed = true;
        render();
      }
    });
  }

  function bindResults(c, t) {
    c.querySelector('#rd-retry-btn')?.addEventListener('click', () => {
      phase = 'reading';
      qIndex = 0;
      answers = [];
      hintsUsed = 0;
      textCollapsed = false;
      render();
    });
    c.querySelector('#rd-list-btn')?.addEventListener('click', () => {
      location.hash = '#reading';
    });
    // Next text
    c.querySelector('#rd-next-text-btn')?.addEventListener('click', () => {
      const idx  = READING_TEXTS.findIndex(x => x.id === t.id);
      const next = READING_TEXTS[idx + 1];
      if (next) location.hash = `#reading?id=${next.id}`;
      else       location.hash = '#reading';
    });
  }

  render();
}

// ══════════════════════════════════════════════════════════════════════════════
// HTML builders
// ══════════════════════════════════════════════════════════════════════════════

function renderReadingPhase(text) {
  return `
    <div class="rd-reading-phase">
      <div class="rd-read-info">
        <span>📖 ${text.wordCount} mots</span>
        <span>❓ ${text.questions.length} questions</span>
        <span>⭐ ${text.xpReward} XP</span>
        ${Object.keys(text.glossary || {}).length > 0 ? `<span class="rd-gloss-tip">💡 ${Object.keys(text.glossary).length} mots clés disponibles</span>` : ''}
      </div>
      <p class="rd-phase-mg">🇲🇬 Vakio ny lahatsoratra, avy eo valio ny fanontaniana.</p>
      <button class="btn-primary rd-start-btn" id="rd-start-btn">
        J'ai lu le texte — Commencer les questions →
      </button>
    </div>
  `;
}

const RD_TYPE_MG = {
  mcq:       'Safidio ny valiny mety',
  tf:        'Marina sa diso ?',
  short:     'Valio fohy',
  selfcheck: 'Valio an-tsoratra, avy eo jereo',
};

function renderQuestion(q, idx, total, hints) {
  const progress = Math.round(((idx) / total) * 100);
  const typeLabel = { mcq: '📝 QCM', tf: '☑️ Vrai / Faux', short: '✏️ Réponse courte', selfcheck: '💬 Réponse libre' };
  return `
    <div class="rd-q-wrap">
      <div class="rd-q-header">
        <div class="rd-q-progress-bar">
          <div class="rd-q-progress-fill" style="width:${progress}%"></div>
        </div>
        <div class="rd-q-meta">
          <span class="rd-q-type">${typeLabel[q.type]}</span>
          ${RD_TYPE_MG[q.type] ? `<span class="rd-q-type-mg">🇲🇬 ${RD_TYPE_MG[q.type]}</span>` : ''}
          <span class="rd-q-count">Question ${idx + 1} / ${total}</span>
          ${hints > 0 ? `<span class="rd-hints-used">💡 ${hints} aide${hints > 1 ? 's' : ''}</span>` : ''}
        </div>
      </div>

      <div class="rd-question-text">${escHtml(q.type === 'tf' ? q.statement : q.question)}</div>

      ${q.type === 'mcq' ? `
        <div class="rd-options">
          ${q.options.map((opt, i) => `
            <button class="rd-option" data-idx="${i}">${escHtml(opt)}</button>
          `).join('')}
        </div>
      ` : ''}

      ${q.type === 'tf' ? `
        <div class="rd-tf-row">
          <button class="rd-tf-btn rd-tf-true"  data-val="true">✅ Vrai</button>
          <button class="rd-tf-btn rd-tf-false" data-val="false">❌ Faux</button>
        </div>
      ` : ''}

      ${q.type === 'short' ? `
        <form id="rd-short-form" class="rd-short-form">
          <input id="rd-short-input" class="rd-short-input" type="text"
            placeholder="Ta réponse…" autocomplete="off" autocorrect="off" spellcheck="false" />
          <button type="submit" class="btn-primary rd-short-submit">Vérifier</button>
        </form>
        ${q.hint ? `<div class="rd-short-hint">💡 Indice : ${escHtml(q.hint)}</div>` : ''}
      ` : ''}

      ${q.type === 'selfcheck' ? `
        <div class="rd-selfcheck-wrap">
          <textarea id="rd-selfcheck-input" class="rd-selfcheck-input"
            placeholder="Écris ta réponse ici…" rows="4"></textarea>
          <button id="rd-reveal-btn" class="btn-secondary rd-reveal-btn">Révéler la réponse modèle</button>
          <div id="rd-model-answer" class="rd-model-answer hidden">
            <div class="rd-model-label">📌 Réponse modèle :</div>
            <div class="rd-model-text">${escHtml(q.modelAnswer)}</div>
            <div class="rd-self-rate">
              <span class="rd-self-rate-label">Ta réponse était :</span>
              <button id="rd-self-correct"   class="rd-self-btn rd-self-ok">✓ Correcte</button>
              <button id="rd-self-incorrect" class="rd-self-btn rd-self-ko">✗ Pas tout à fait</button>
            </div>
          </div>
        </div>
      ` : ''}

      <button id="rd-next-btn" class="btn-primary rd-next-btn hidden">
        ${idx < total - 1 ? 'Suivant →' : 'Voir les résultats'}
      </button>
    </div>
  `;
}

function renderResults(text, answers, hintsUsed) {
  const score   = answers.filter(a => a.correct).length;
  const total   = answers.length;
  const pct     = Math.round((score / total) * 100);
  const xpBase  = text.xpReward;
  const xpBonus = score === total ? 5 : 0;
  const xpPenalty = Math.min(hintsUsed, 5);
  const xpEarned = Math.max(0, xpBase + xpBonus - xpPenalty);
  const emoji   = pct >= 80 ? '🏆' : pct >= 60 ? '🌟' : '💪';
  const msg     = pct >= 80 ? 'Excellent travail !' : pct >= 60 ? 'Bon travail !' : 'Continue tes efforts !';
  const hasNext = READING_TEXTS.findIndex(x => x.id === text.id) < READING_TEXTS.length - 1;

  return `
    <div class="rd-results">
      <div class="rd-results-header">
        <div class="rd-results-emoji">${emoji}</div>
        <div class="rd-results-msg">${msg}</div>
        <div class="rd-results-score">${score} / ${total} correct</div>
        <div class="rd-results-pct">${pct}%</div>
      </div>

      <div class="rd-results-xp">
        +${xpEarned} ⭐ XP
        ${xpBonus > 0 ? `<span class="rd-xp-bonus">+${xpBonus} bonus parfait !</span>` : ''}
        ${xpPenalty > 0 ? `<span class="rd-xp-penalty">-${xpPenalty} aides utilisées</span>` : ''}
      </div>

      <div class="rd-results-breakdown">
        ${answers.map((a, i) => {
          const q = text.questions[i];
          const qText = q.type === 'tf' ? q.statement : q.question;
          return `
            <div class="rd-result-item ${a.correct ? 'ok' : 'err'}">
              <span class="rd-ri-icon">${a.correct ? '✅' : '❌'}</span>
              <div class="rd-ri-body">
                <div class="rd-ri-q">${escHtml(qText.length > 80 ? qText.slice(0, 80) + '…' : qText)}</div>
                ${!a.correct && q.type === 'mcq' ? `<div class="rd-ri-ans">✓ ${escHtml(q.options[q.correct])}</div>` : ''}
                ${!a.correct && q.type === 'tf'  ? `<div class="rd-ri-ans">✓ ${q.correct ? 'Vrai' : 'Faux'}</div>` : ''}
                ${!a.correct && q.type === 'short' ? `<div class="rd-ri-ans">✓ ${escHtml(q.keywords[0])}</div>` : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <div class="rd-results-actions">
        <button id="rd-retry-btn" class="btn-secondary">🔄 Recommencer</button>
        <button id="rd-list-btn"  class="btn-secondary">📖 Tous les textes</button>
        ${hasNext ? `<button id="rd-next-text-btn" class="btn-primary">Suivant →</button>` : ''}
      </div>
    </div>
  `;
}

// ══════════════════════════════════════════════════════════════════════════════
// Helpers
// ══════════════════════════════════════════════════════════════════════════════

function renderText(rawText, glossary) {
  // Escape HTML first
  let html = escHtml(rawText);
  // Wrap glossary words
  for (const word of Object.keys(glossary)) {
    const re = new RegExp(`\\b(${escRegex(word)})\\b`, 'gi');
    html = html.replace(re, `<span class="gloss-word" data-word="${word.toLowerCase()}">$1</span>`);
  }
  // Newlines → paragraphs
  return html.split('\n\n').map(para => `<p>${para.replace(/\n/g, '<br>')}</p>`).join('');
}

function showTooltip(container, span, word, entry, isQuestion) {
  if (!entry) return; // guard: word not in glossary
  const tt = container.querySelector('#rd-tooltip');
  if (!tt) return;

  tt.innerHTML = `
    <button class="rd-tt-close" title="Fermer">✕</button>
    <strong>${word}</strong><br>
    🇫🇷 ${escHtml(entry.fr)}<br>
    🇲🇬 ${escHtml(entry.mg)}
    ${isQuestion ? `<div class="rd-tt-hint">💡 aide comptabilisée</div>` : ''}
  `;

  // Use position:fixed so viewport coords work regardless of scroll
  tt.style.position = 'fixed';
  tt.style.top  = '-9999px';
  tt.style.left = '-9999px';
  tt.classList.remove('hidden');

  // Wire up the ✕ close button
  tt.querySelector('.rd-tt-close').addEventListener('click', e => {
    e.stopPropagation();
    tt.classList.add('hidden');
    container.dispatchEvent(new CustomEvent('tooltip-closed'));
  });

  // Block clicks on the tooltip body from reaching the text (avoids accidental dismiss)
  tt.onclick = e => e.stopPropagation();

  // Measure tooltip size after making it visible
  const ttH = tt.offsetHeight || 88;
  const ttW = tt.offsetWidth  || 200;

  // Viewport coords of the clicked word
  const spanRect = span.getBoundingClientRect();

  // Decide: below or above?
  const spaceBelow = window.innerHeight - spanRect.bottom;
  let topFixed;
  if (spaceBelow >= ttH + 10) {
    topFixed = spanRect.bottom + 6;        // normal: below the word
  } else {
    topFixed = spanRect.top - ttH - 6;    // flip: above the word
  }
  // Clamp to viewport
  topFixed = Math.max(4, Math.min(topFixed, window.innerHeight - ttH - 4));

  // Horizontal: start at word's left, keep within viewport
  const leftFixed = Math.max(4, Math.min(spanRect.left, window.innerWidth - ttW - 8));

  tt.style.top  = topFixed  + 'px';
  tt.style.left = leftFixed + 'px';
}

function hideTooltip() { /* no-op — handled inline */ }

/** Keyword-based short answer verification */
function checkShort(userInput, keywords) {
  const norm = s => s.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
  const ans  = norm(userInput);
  return keywords.some(kw => ans.includes(norm(kw)));
}

function escHtml(str) {
  return String(str).replace(/[&<>"']/g, c =>
    ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}

function escRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
