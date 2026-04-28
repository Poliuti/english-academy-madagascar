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
    const chapter = bokyChapters.find(c => c.id === currentId);
    container.innerHTML = `
      <div class="boky-layout">

        <!-- Sidebar / Table des matières -->
        <aside class="boky-sidebar">
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

    bindEvents();
  }

  function bindEvents() {
    container.querySelector('#btn-back').addEventListener('click', () => {
      location.hash = '#dashboard';
    });

    container.querySelectorAll('.boky-toc-item').forEach(btn => {
      btn.addEventListener('click', () => {
        currentId = btn.dataset.id;
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
        const text = btn.dataset.text;
        btn.textContent = '🔊';
        speak(text, { onEnd: () => { btn.textContent = '▶'; } });
      });
    });

    container.querySelectorAll('.boky-go-exercises').forEach(btn => {
      btn.addEventListener('click', () => {
        const topic = btn.dataset.topic;
        location.hash = `#exercise?topic=${topic}&mode=topic`;
      });
    });
  }

  render();
  return container;
}

// ─── Chapter renderer ─────────────────────────────────────────────────────────
function renderChapter(chapter, l) {
  const data = chapter[l];
  if (!data) return '<p>Contenu non disponible.</p>';

  const isUncertain = l === 'mg'; // flag uncertain MG translations
  const trLabel = l === 'fr' ? '🇫🇷' : '🇲🇬';
  const exercisesLabel = l === 'fr' ? '✏️ Faire des exercices' : '✏️ Exercices (fanazarana)';

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
                    <td class="boky-en">${escHtml(row.en)}</td>
                    <td class="boky-tr ${row.tr.includes('[?]') ? 'boky-uncertain' : ''}">${escHtml(row.tr)}</td>
                    <td class="boky-tts-cell">
                      <button class="tts-btn" data-text="${escHtml(stripTags(row.en))}" title="Écouter">▶</button>
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
            ${data.commonErrors.map(e => `<li>${escHtml(e)}</li>`).join('')}
          </ul>
        </div>
      ` : ''}

      ${data.tips?.length ? `
        <div class="boky-tips">
          <h3>${l === 'fr' ? '💡 Points importants' : '💡 Torohevitra'}</h3>
          <ul>
            ${data.tips.map(t => `<li class="${t.includes('[?]') ? 'boky-uncertain' : ''}">${escHtml(t)}</li>`).join('')}
          </ul>
        </div>
      ` : ''}

      <div class="boky-cta">
        <button class="boky-go-exercises btn-primary" data-topic="${chapter.id}">
          ${exercisesLabel}
        </button>
      </div>

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
