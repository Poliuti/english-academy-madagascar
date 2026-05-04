import { bokyChapters, bokyIndex } from '../data/boky.js';
import { speak } from '../tts.js';

// Language persists for the whole session (module-level)
let lang = sessionStorage.getItem('boky_lang') || 'fr';

export function renderBoky(chapterId) {
  const container = document.createElement('div');
  container.className = 'boky-page';

  let currentId = chapterId && bokyChapters.find(c => c.id === chapterId)
    ? chapterId
    : bokyChapters[0].id;

  function render() {
    // Preserve sidebar scroll position across re-renders
    const savedSidebarScroll = container.querySelector('.boky-sidebar')?.scrollTop ?? 0;

    const chapter = bokyChapters.find(c => c.id === currentId);
    container.innerHTML = `
      <!-- Mobile sidebar backdrop -->
      <div class="sidebar-backdrop" id="sidebar-backdrop"></div>

      <div class="boky-layout">

        <!-- Sidebar / Table des matières -->
        <aside class="boky-sidebar" id="boky-sidebar">
          <button class="btn-sidebar-close" id="btn-sidebar-close">✕ Fermer</button>
          <button class="btn-back boky-back" id="btn-back">← Retour</button>
          <h3 class="boky-sidebar-title">📗 Boky fampianarana</h3>
          <nav class="boky-toc">
            ${bokyIndex.map(item => `
              <button
                class="boky-toc-item ${item.id === currentId ? 'active' : ''}"
                data-id="${item.id}"
              >
                <span class="boky-toc-icon">${item.icon}</span>
                <span class="boky-toc-label">${item.title}</span>
                <span class="boky-toc-level">${item.level}</span>
              </button>
            `).join('')}
          </nav>
        </aside>

        <!-- Main content -->
        <main class="boky-main">
          <!-- Top bar with language toggle -->
          <div class="boky-topbar">
            <button class="btn-mobile-toc" id="btn-mobile-toc">☰ Chapitres</button>
            <div class="boky-breadcrumb">
              ${chapter.icon} <strong>${chapter.title}</strong>
              <span class="boky-level-badge">${chapter.level}</span>
            </div>
            <button class="boky-lang-toggle" id="btn-lang-toggle">
              ${lang === 'fr'
                ? '🇲🇬 Voir en Malagasy'
                : '🇫🇷 Voir en Français'}
            </button>
          </div>

          <!-- Chapter content -->
          <div class="boky-content">
            ${renderChapter(chapter, lang)}
          </div>
        </main>

      </div>
    `;

    // Restore sidebar scroll, then ensure active item is visible
    const sidebar = container.querySelector('.boky-sidebar');
    if (sidebar) {
      sidebar.scrollTop = savedSidebarScroll;
      const activeItem = sidebar.querySelector('.boky-toc-item.active');
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

  function openMobileSidebar() {
    const sidebar  = container.querySelector('#boky-sidebar');
    const backdrop = container.querySelector('#sidebar-backdrop');
    if (sidebar)  sidebar.classList.add('mobile-open');
    if (backdrop) backdrop.classList.add('active');
  }

  function closeMobileSidebar() {
    const sidebar  = container.querySelector('#boky-sidebar');
    const backdrop = container.querySelector('#sidebar-backdrop');
    if (sidebar)  sidebar.classList.remove('mobile-open');
    if (backdrop) backdrop.classList.remove('active');
  }

  function bindEvents() {
    container.querySelector('#btn-back').addEventListener('click', () => {
      location.hash = '#dashboard';
    });

    // Mobile TOC button
    const mobileTocBtn = container.querySelector('#btn-mobile-toc');
    if (mobileTocBtn) mobileTocBtn.addEventListener('click', openMobileSidebar);

    // Close sidebar button
    const closeBtn = container.querySelector('#btn-sidebar-close');
    if (closeBtn) closeBtn.addEventListener('click', closeMobileSidebar);

    // Backdrop click closes sidebar
    const backdrop = container.querySelector('#sidebar-backdrop');
    if (backdrop) backdrop.addEventListener('click', closeMobileSidebar);

    container.querySelectorAll('.boky-toc-item').forEach(btn => {
      btn.addEventListener('click', () => {
        currentId = btn.dataset.id;
        closeMobileSidebar();
        render();
        container.querySelector('.boky-main').scrollTop = 0;
      });
    });

    container.querySelector('#btn-lang-toggle').addEventListener('click', () => {
      lang = lang === 'fr' ? 'mg' : 'fr';
      sessionStorage.setItem('boky_lang', lang);
      render();
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

    container.querySelectorAll('.boky-go-grammar').forEach(btn => {
      btn.addEventListener('click', () => {
        const ref = btn.dataset.ref;
        if (ref) location.hash = `#theory?topic=${ref}`;
      });
    });
  }

  render();
  return container;
}

// ─── Boky chapter → Grammar topic mapping ────────────────────────────────────
// Only chapters that have a corresponding grammar+exercise section are listed.
// toBe and irregularVerbs are Boky-only reference → no link.
const BOKY_TO_GRAMMAR = {
  toBe:                 'toBe',
  pronouns:             'pronouns',
  articles:             'articles',
  plurals:              'plurals',
  therebeis:            'therebeis',
  prepositions:         'prepositions',
  questions:            'questions',
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
  pastSimple:           'pastSimple',
  futureSimple:         'futureSimple',
  countableUncountable: 'countableUncountable',
  pastContinuous:       'pastContinuous',
  futureContinuous:     'futureContinuous',
  presentPerfect:       'presentPerfect',
  pastPerfect:          'pastPerfect',
  timeMarkers:          'timeMarkers',
  passiveVoice:         'passiveVoice',
  connectors:           'connectors',
  tenseChooser:         'tenseChooser',
  conditionals:         'conditionals',
  reportedSpeech:       'reportedSpeech',
  phrasalVerbs:         'phrasalVerbs',
  futurePerfect:        'futurePerfect',
};

// ─── Chapter renderer ─────────────────────────────────────────────────────────
function renderChapter(chapter, l) {
  const data = chapter[l];
  if (!data) return '<p>Contenu non disponible.</p>';

  const isUncertain = l === 'mg'; // flag uncertain MG translations
  const trLabel = l === 'fr' ? '🇫🇷' : '🇲🇬';
  const grammarRef   = BOKY_TO_GRAMMAR[chapter.id];
  const grammarLabel = l === 'fr' ? '✏️ Faire les exercices → Grammaire' : '✏️ Fanazarana → Grammaire';

  return `
    <div class="boky-chapter">

      ${isUncertain ? `
        <div class="boky-mg-disclaimer">
          ⚠️ <em>Ny fanazavana malagasy dia natao amin\'ny AI — ny teny voamarika <strong>[?]</strong> dia tsy azo antoka tanteraka. Jereo ny mpampianatra raha misy fisalasalana.</em>
        </div>
      ` : ''}

      <div class="boky-intro">${data.intro}</div>

      ${data.sections.map(s => `
        <div class="boky-section">
          <h3 class="boky-section-title">${s.title}</h3>
          ${s.content ? `<p class="boky-section-desc">${s.content}</p>` : ''}
          <div class="boky-table-wrap">
            <table class="boky-table">
              <thead>
                <tr>
                  <th>🇬🇧 Anglisy</th>
                  <th>${trLabel} Traduction</th>
                  <th class="boky-tts-col">🔊</th>
                </tr>
              </thead>
              <tbody>
                ${s.rows.map(row => `
                  <tr>
                    <td class="boky-en">${row.en}</td>
                    <td class="boky-tr ${row.tr.includes('[?]') ? 'boky-uncertain' : ''}">${row.tr}</td>
                    <td class="boky-tts-cell">
                      <button class="tts-btn" data-text="${escHtml(stripTags(row.tts || row.en))}" title="Écouter">▶</button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `).join('')}

      ${data.commonErrors?.length ? `
        <div class="boky-errors">
          <h3>${l === 'fr' ? '⚠️ Erreurs fréquentes' : '⚠️ Hadisoana mahazatra'}</h3>
          <ul>
            ${data.commonErrors.map(e => `<li>${e}</li>`).join('')}
          </ul>
        </div>
      ` : ''}

      ${data.tips?.length ? `
        <div class="boky-tips">
          <h3>${l === 'fr' ? '💡 Points importants' : '💡 Torohevitra'}</h3>
          <ul>
            ${data.tips.map(t => `<li class="${t.includes('[?]') ? 'boky-uncertain' : ''}">${t}</li>`).join('')}
          </ul>
        </div>
      ` : ''}

      ${data.summary?.length ? `
        <div class="boky-summary">
          <h3>${l === 'fr' ? '📌 En bref' : '📌 Andao ho tohizana'}</h3>
          <ul>
            ${data.summary.map(s => `<li>${s}</li>`).join('')}
          </ul>
        </div>
      ` : ''}

      ${grammarRef ? `
        <div class="boky-cta">
          <button class="boky-go-grammar btn-secondary" data-ref="${grammarRef}">
            ${grammarLabel}
          </button>
        </div>
      ` : ''}

    </div>
  `;
}

function stripTags(str) {
  return (str || '').replace(/<[^>]+>/g, '');
}

function escHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, c =>
    ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c])
  );
}
