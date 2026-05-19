import { theory, theoryTopics, vocabTopics, malgasyManual } from '../data/theory.js';
import { speak } from '../tts.js';
import {
  getVoteData, castVote, submitProposal,
  isAccepted, hasMarker, stripMarker, theoryKey,
  getOverride,
} from '../mgReview.js';
import { getActiveProfile } from '../storage.js';

export function renderTheory(topicId) {
  const container = document.createElement('div');
  container.className = 'theory-page';

  const defaultTopic = topicId && theory[topicId] ? topicId : 'presentSimple';
  let currentTopic = defaultTopic;
  let isVocab = topicId === 'vocabulary';
  let isMalgasy = topicId === 'malgasy';
  let currentVocab = 'routine';
  let currentMalgasyId = malgasyManual[0]?.id || '';

  function render() {
    // Preserve sidebar scroll position across re-renders
    const savedSidebarScroll = container.querySelector('.theory-sidebar')?.scrollTop ?? 0;

    container.innerHTML = `
      <!-- Mobile sidebar backdrop -->
      <div class="sidebar-backdrop" id="theory-backdrop"></div>

      <div class="theory-layout">
        <!-- Sidebar -->
        <aside class="theory-sidebar" id="theory-sidebar">
          <button class="btn-sidebar-close" id="btn-sidebar-close">✕ Fermer</button>
          <button class="btn-back sidebar-back" id="btn-back">← Retour</button>
          <h3 class="sidebar-title">📚 Grammaire</h3>
          <nav class="sidebar-nav">
            ${theoryTopics.map(t => `
              <button
                class="sidebar-item ${!t.isVocab && currentTopic === t.id && !isVocab && !isMalgasy ? 'active' : ''} ${t.isVocab && isVocab ? 'active' : ''}"
                data-topic="${t.id}"
                data-vocab="${t.isVocab || false}"
              >
                <span>${t.icon}</span>
                <span>${t.label}</span>
                <span class="sidebar-level">${t.level}</span>
              </button>
            `).join('')}
            <div class="sidebar-separator"></div>
            <button class="sidebar-item sidebar-item-mg ${isMalgasy ? 'active' : ''}" data-malgasy="true">
              <span>🇲🇬</span>
              <span>Boky fampianarana</span>
              <span class="sidebar-level">MG</span>
            </button>
          </nav>
        </aside>

        <!-- Main content -->
        <main class="theory-main">
          <!-- Mobile navigation bar (visible only on small screens) -->
          <div class="theory-mobilebar">
            <button class="btn-back" id="btn-back-mobile">← Retour</button>
            <button class="btn-mobile-toc" id="btn-mobile-toc">☰ Chapitres</button>
          </div>
          ${isVocab ? renderVocabNav(currentVocab) : ''}
          ${isMalgasy ? renderMalgasyNav(currentMalgasyId) : ''}
          <div id="theory-content">
            ${isVocab
              ? renderVocab(currentVocab)
              : isMalgasy
                ? renderMalgasySection(currentMalgasyId)
                : renderGrammar(currentTopic)}
          </div>
        </main>
      </div>
      <div class="mg-proposal-modal" id="mg-proposal-modal" hidden>
        <div class="mg-proposal-content">
          <h3>🇲🇬 Proposer une correction</h3>
          <p class="mg-proposal-context" id="mg-proposal-context"></p>
          <label for="mg-proposal-input">Votre proposition de traduction :</label>
          <input type="text" id="mg-proposal-input" placeholder="Écrivez la traduction correcte..." />
          <p class="mg-proposal-hint">🇲🇬 Soraty ny dikany marina amin'ny teny malagasy</p>
          <div class="mg-proposal-actions">
            <button class="btn-secondary" id="mg-proposal-cancel">Annuler</button>
            <button class="btn-primary" id="mg-proposal-submit">Envoyer</button>
          </div>
        </div>
      </div>
    `;

    // Restore sidebar scroll, then ensure active item is visible
    const sidebar = container.querySelector('.theory-sidebar');
    if (sidebar) {
      sidebar.scrollTop = savedSidebarScroll;
      // If active item is outside view, scroll it into view
      const activeItem = sidebar.querySelector('.sidebar-item.active');
      if (activeItem) {
        requestAnimationFrame(() => {
          const sTop = sidebar.scrollTop;
          const sH   = sidebar.clientHeight;
          const iTop = activeItem.offsetTop;
          const iH   = activeItem.offsetHeight;
          if (iTop < sTop || iTop + iH > sTop + sH) {
            activeItem.scrollIntoView({ block: 'nearest' });
          }
        });
      }
    }

    bindEvents();
  }

  function openProposalModal(key, originalMg, en, fr) {
    const modal = container.querySelector('#mg-proposal-modal');
    if (!modal) return;
    modal.hidden = false;
    modal.dataset.key = key;
    modal.dataset.originalMg = originalMg;
    modal.dataset.en = en;
    modal.dataset.fr = fr;
    const ctx = container.querySelector('#mg-proposal-context');
    if (ctx) {
      ctx.innerHTML = `
        <strong>Anglais :</strong> ${escHtml(en)}<br>
        ${fr ? `<strong>Français :</strong> ${escHtml(fr)}<br>` : ''}
        <strong>Traduction actuelle :</strong> ${escHtml(stripMarker(originalMg))}
      `;
    }
    const inp = container.querySelector('#mg-proposal-input');
    if (inp) { inp.value = ''; setTimeout(() => inp.focus(), 30); }
  }

  function closeProposalModal() {
    const modal = container.querySelector('#mg-proposal-modal');
    if (modal) modal.hidden = true;
  }

  function bindMgVoting() {
    const profile = getActiveProfile();
    container.querySelectorAll('.mg-vote-widget').forEach(widget => {
      const key = widget.dataset.key;
      const en = widget.dataset.en;
      const fr = widget.dataset.fr || '';
      const originalMg = widget.dataset.originalmg;
      widget.querySelectorAll('.mg-vote-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (!profile) return;
          const dir = btn.dataset.action;
          if (dir === 'up') {
            castVote(key, profile.id, 'up', { originalMg, contextEn: en, contextFr: fr });
            render();
          } else {
            openProposalModal(key, originalMg, en, fr);
          }
        });
      });
    });
    const cancelBtn = container.querySelector('#mg-proposal-cancel');
    if (cancelBtn) cancelBtn.addEventListener('click', closeProposalModal);
    const submitBtn = container.querySelector('#mg-proposal-submit');
    if (submitBtn) submitBtn.addEventListener('click', () => {
      const modal = container.querySelector('#mg-proposal-modal');
      const inp = container.querySelector('#mg-proposal-input');
      if (!modal || !inp || !profile) return;
      const text = (inp.value || '').trim();
      if (!text) { inp.focus(); return; }
      submitProposal(modal.dataset.key, profile.id, text, modal.dataset.originalMg, modal.dataset.en, modal.dataset.fr);
      castVote(modal.dataset.key, profile.id, 'down', {
        originalMg: modal.dataset.originalMg,
        contextEn: modal.dataset.en,
        contextFr: modal.dataset.fr,
      });
      closeProposalModal();
      render();
    });
  }

  function openTheorySidebar() {
    const sidebar  = container.querySelector('#theory-sidebar');
    const backdrop = container.querySelector('#theory-backdrop');
    if (sidebar)  sidebar.classList.add('mobile-open');
    if (backdrop) backdrop.classList.add('active');
  }

  function closeTheorySidebar() {
    const sidebar  = container.querySelector('#theory-sidebar');
    const backdrop = container.querySelector('#theory-backdrop');
    if (sidebar)  sidebar.classList.remove('mobile-open');
    if (backdrop) backdrop.classList.remove('active');
  }

  function bindEvents() {
    container.querySelector('#btn-back')?.addEventListener('click', () => {
      location.hash = '#dashboard';
    });
    container.querySelector('#btn-back-mobile')?.addEventListener('click', () => {
      location.hash = '#dashboard';
    });

    // Mobile TOC button
    container.querySelector('#btn-mobile-toc')?.addEventListener('click', openTheorySidebar);

    // Close sidebar button
    container.querySelector('#btn-sidebar-close')?.addEventListener('click', closeTheorySidebar);

    // Backdrop click closes sidebar
    container.querySelector('#theory-backdrop')?.addEventListener('click', closeTheorySidebar);

    container.querySelectorAll('.sidebar-item:not([data-malgasy])').forEach(btn => {
      btn.addEventListener('click', () => {
        const isVocabTopic = btn.dataset.vocab === 'true';
        isMalgasy = false;
        if (isVocabTopic) {
          isVocab = true;
        } else {
          isVocab = false;
          currentTopic = btn.dataset.topic;
        }
        closeTheorySidebar();
        render();
      });
    });

    const mgBtn = container.querySelector('[data-malgasy="true"]');
    if (mgBtn) {
      mgBtn.addEventListener('click', () => {
        isMalgasy = true;
        isVocab = false;
        closeTheorySidebar();
        render();
      });
    }

    container.querySelectorAll('.vocab-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        currentVocab = btn.dataset.vocab;
        render();
      });
    });

    container.querySelectorAll('.mg-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        currentMalgasyId = btn.dataset.mgid;
        render();
      });
    });

    container.querySelectorAll('.tts-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.disabled) return;
        btn.disabled = true;
        btn.textContent = '🔊';
        const restore = () => { btn.disabled = false; btn.textContent = '▶'; };
        speak(btn.dataset.text, { onEnd: restore, onError: restore });
      });
    });

    bindMgVoting();

    container.querySelectorAll('.do-exercises-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        // For Malgasy manual buttons, use data-ref; otherwise use currentTopic
        const effectiveTopic = btn.dataset.ref || currentTopic;
        // Maps theory section id → exercise topic key in exercises.js
        const topicMap = {
          // vocabulary topics
          routine:           'routine',
          family:            'family',
          school:            'school',
          body:              'body',
          time:              'time',
          food:              'food',
          colors:            'colors',
          numbers:           'numbers',
          adjectives:        'adjectives',
          comparatives:      'comparatives',
          pronouns:          'pronouns',
          // grammar A1
          articles:          'articles',
          plurals:           'plurals',
          therebeis:         'therebeis',
          // grammar A1-A2
          prepositions:      'prepositions',
          questions:         'questions',
          // grammar A1
          toBe:              'toBe',
          // grammar A2
          presentSimple:     'presentSimple',
          presentContinuous: 'presentContinuous',
          interrogative:     'interrogative',
          imperatives:       'imperatives',
          someAny:           'someAny',
          comparatives:      'comparatives',
          irregularVerbs:    'irregularVerbs',
          modals:               'modals',
          possessives:          'possessives',
          adverbs:              'adverbs',
          // grammar A2-B1
          pastSimple:           'pastSimple',
          futureSimple:         'futureSimple',
          countableUncountable: 'countableUncountable',
          // grammar B1
          pastContinuous:       'pastContinuous',
          futureContinuous:     'futureContinuous',
          presentPerfect:       'presentPerfect',
          pastPerfect:          'pastPerfect',
          timeMarkers:          'timeMarkers',
          passiveVoice:         'passiveVoice',
          connectors:           'connectors',
          tenseChooser:         'tenseChooser',
          // grammar B1-B2
          conditionals:         'conditionals',
          reportedSpeech:       'reportedSpeech',
          phrasalVerbs:         'phrasalVerbs',
          // grammar B2
          futurePerfect:        'futurePerfect',
          // new sections (adjectives already mapped above as vocabulary)
          sinceFor:             'sinceFor',
          usedTo:               'usedTo',
          verbsOfState:         'verbsOfState',
          relativeClauses:      'relativeClauses',
          goingTo:              'goingTo',
        };
        const ex = topicMap[effectiveTopic];
        if (ex) {
          location.hash = `#exercise?topic=${ex}&mode=topic`;
        } else {
          btn.textContent = '🚧 Exercices bientôt disponibles !';
          btn.disabled = true;
          setTimeout(() => {
            btn.textContent = '✏️ Faire des exercices sur ce thème';
            btn.disabled = false;
          }, 2500);
        }
      });
    });

    container.querySelectorAll('.boky-ref-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        location.hash = `#boky?chapter=${btn.dataset.boky}`;
      });
    });

    container.querySelectorAll('.mg-go-theory-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const ref = btn.dataset.ref;
        if (ref && theory[ref]) {
          isMalgasy = false;
          isVocab = false;
          currentTopic = ref;
          render();
        }
      });
    });
  }

  render();
  return container;
}

// ─── Malgasy nav tabs ────────────────────────────────────────────────────────
function renderMalgasyNav(currentId) {
  return `
    <div class="mg-tabs">
      ${malgasyManual.map(m => `
        <button class="mg-tab ${m.id === currentId ? 'active' : ''}" data-mgid="${m.id}">
          ${m.icon} ${m.titleMg}
        </button>
      `).join('')}
    </div>
  `;
}

// ─── Malgasy section renderer ────────────────────────────────────────────────
function renderMalgasySection(id) {
  const m = malgasyManual.find(x => x.id === id);
  if (!m) return '<p>Tsy hita.</p>';

  return `
    <div class="theory-content-inner mg-manual">
      <div class="mg-disclaimer">
        ⚠️ <em>Ny fanazavana malagasy ato dia natao amin\'ny AI — mety tsy marina tanteraka. Jereo ny mpampianatra raha misy fisalasalana.</em>
      </div>

      <div class="theory-header">
        <h2 class="theory-title">${m.icon} ${m.titleMg}</h2>
        <span class="theory-level-badge">${m.level}</span>
      </div>
      <p class="mg-subtitle"><em>${escHtml(m.title)}</em></p>

      <div class="mg-explanation">
        ${escHtml(m.explanation)}
      </div>

      <div class="mg-table-wrap">
        <table class="mg-table">
          <thead>
            <tr>
              <th>Fomba</th>
              <th>Rafitra (structure)</th>
              <th>Anglisy 🇬🇧</th>
              <th>Malagasy 🇲🇬</th>
              <th>Fanamarihana</th>
            </tr>
          </thead>
          <tbody>
            ${m.rows.map((r, idx) => `
              <tr>
                <td class="mg-col-label"><strong>${escHtml(r.label)}</strong></td>
                <td class="mg-col-struct"><code>${escHtml(r.structure)}</code></td>
                <td class="mg-col-en">
                  <button class="tts-btn" data-text="${escHtml(r.example_en)}" title="Écouter">▶</button>
                  <em>${escHtml(r.example_en)}</em>
                </td>
                <td class="mg-col-mg">${renderTheoryMg(id, idx, r)}</td>
                <td class="mg-col-note">${escHtml(r.note || '')}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      ${m.tipsMg?.length ? `
        <div class="tips-box">
          <h3>💡 Torohevitra</h3>
          <ul>
            ${m.tipsMg.map(tip => `<li>${escHtml(tip)}</li>`).join('')}
          </ul>
        </div>
      ` : ''}

      ${m.grammarRef ? `
        <div class="theory-cta mg-cta">
          <button class="btn-secondary mg-go-theory-btn" data-ref="${m.grammarRef}">
            📖 Voir la théorie française (${escHtml(m.title)})
          </button>
          <button class="btn-primary do-exercises-btn" data-ref="${m.grammarRef}">
            ✏️ Faire des exercices
          </button>
        </div>
      ` : ''}
    </div>
  `;
}

// ─── Vocab nav ───────────────────────────────────────────────────────────────
function renderVocabNav(currentVocab) {
  return `
    <div class="vocab-tabs">
      ${vocabTopics.map(v => `
        <button class="vocab-tab ${v.id === currentVocab ? 'active' : ''}" data-vocab="${v.id}">
          ${v.icon} ${v.label}
        </button>
      `).join('')}
    </div>
  `;
}

function renderVocab(vocabId) {
  const data = theory.vocabulary?.[vocabId];
  if (!data) return '<p>Vocabulaire non trouvé.<span class="instr-mg"> 🇲🇬 Tsy hita ny voambolana.</span></p>';

  return `
    <div class="theory-content-inner">
      <h2 class="theory-title">${data.title}</h2>
      <div class="vocab-grid">
        ${data.words.map(w => `
          <div class="vocab-card">
            <div class="vocab-card-top">
              <div class="vocab-en">
                ${escHtml(w.en)}
                <button class="tts-btn" data-text="${escHtml(w.en)}" title="Écouter">▶</button>
              </div>
              <div class="vocab-fr">${escHtml(w.fr)}</div>
              ${w.mg ? `<div class="vocab-mg">🇲🇬 ${escHtml(w.mg)}</div>` : ''}
            </div>
            <div class="vocab-example">
              <em>${escHtml(w.example)}</em>
              <button class="tts-btn" data-text="${escHtml(w.example)}" title="Écouter l'exemple">▶</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Grammar topic → corresponding Boky chapter id
const GRAMMAR_TO_BOKY = {
  // A1
  toBe:                 'toBe',
  articles:             'articles',
  plurals:              'plurals',
  therebeis:            'therebeis',
  pronouns:             'pronouns',
  // A1-A2
  prepositions:         'prepositions',
  questions:            'questions',
  // A2
  presentSimple:        'presentSimple',
  presentContinuous:    'presentContinuous',
  interrogative:        'interrogative',
  imperatives:          'imperatives',
  someAny:              'someAny',
  comparatives:         'comparatives',
  irregularVerbs:       'irregularVerbs',
  modals:               'modals',
  possessives:          'possessives',
  adverbs:              'adverbs',
  // A2-B1
  pastSimple:           'pastSimple',
  futureSimple:         'futureSimple',
  countableUncountable: 'countableUncountable',
  // B1
  pastContinuous:       'pastContinuous',
  futureContinuous:     'futureContinuous',
  presentPerfect:       'presentPerfect',
  pastPerfect:          'pastPerfect',
  timeMarkers:          'timeMarkers',
  passiveVoice:         'passiveVoice',
  connectors:           'connectors',
  tenseChooser:         'tenseChooser',
  // B1-B2
  conditionals:         'conditionals',
  reportedSpeech:       'reportedSpeech',
  phrasalVerbs:         'phrasalVerbs',
  // B2
  futurePerfect:        'futurePerfect',
  // B1-B2
  relativeClauses:      'relativeClauses',
  goingTo:              'goingTo',
};

function renderGrammar(topicId) {
  const t = theory[topicId];
  if (!t) return '<p>Section non trouvée.<span class="instr-mg"> 🇲🇬 Tsy hita ny fizarana.</span></p>';
  const bokyChapter = GRAMMAR_TO_BOKY[topicId];

  return `
    <div class="theory-content-inner">
      <div class="theory-header">
        <h2 class="theory-title">${t.icon} ${t.title}</h2>
        <span class="theory-level-badge">${t.level}</span>
      </div>
      <p class="theory-subtitle">${t.subtitle}</p>

      ${t.malgasyNote ? `
        <div class="malgasy-note">
          🇲🇬 <strong>Malagasy :</strong> ${escHtml(t.malgasyNote)}
        </div>
      ` : ''}

      ${t.sections.map(s => `
        <div class="theory-section">
          <h3 class="section-heading">${s.title}</h3>
          <p class="section-content">${s.content}</p>
          <div class="examples-list">
            ${s.examples.map(ex => `
              <div class="example-row">
                <div class="example-en">
                  <button class="tts-btn" data-text="${escHtml(ex.en.replace(/<[^>]+>/g,'').replace(/\s*\([^)]*\)\s*/g,' ').trim())}" title="Écouter">▶</button>
                  <span>${ex.en}</span>
                </div>
                <div class="example-fr">🇫🇷 ${ex.fr}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}

      ${t.tips?.length ? `
        <div class="tips-box">
          <h3>💡 Conseils</h3>
          <ul>
            ${t.tips.map(tip => `<li>${tip}</li>`).join('')}
          </ul>
        </div>
      ` : ''}

      <div class="theory-cta">
        ${bokyChapter ? `
          <button class="btn-secondary boky-ref-btn" data-boky="${bokyChapter}">
            📖 Théorie complète → Boky
          </button>
        ` : ''}
        <button class="btn-primary do-exercises-btn">
          ✏️ Faire des exercices sur ce thème
        </button>
      </div>
    </div>
  `;
}

function escHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}

function renderTheoryMg(topicId, idx, r) {
  const mg = r.example_mg || '';
  const en = r.example_en || '';
  const key = theoryKey(topicId, idx);
  const override = getOverride(key);
  if (override) {
    return `🇲🇬 ${escHtml(override)} ✅`;
  }
  const marked = hasMarker(mg);
  const accepted = isAccepted(key);
  if (!marked || accepted) {
    return `🇲🇬 ${escHtml(stripMarker(mg))}${accepted ? ' ✅' : ''}`;
  }
  const vd = getVoteData(key);
  const profile = getActiveProfile();
  const voted = profile ? vd.hasVoted(profile.id) : false;
  return `
    🇲🇬 ${escHtml(stripMarker(mg))}
    <div class="mg-vote-widget" data-key="${escHtml(key)}" data-en="${escHtml(en)}" data-fr="" data-originalmg="${escHtml(mg)}">
      <button class="mg-vote-btn mg-vote-up" data-action="up" ${voted ? 'disabled' : ''}>👍 ${vd.up}</button>
      <button class="mg-vote-btn mg-vote-down" data-action="down" ${voted ? 'disabled' : ''}>👎 ${vd.down}</button>
      <span class="mg-vote-status">${voted ? '✓ Vous avez voté' : '⚠️ À vérifier'}</span>
    </div>
  `;
}
