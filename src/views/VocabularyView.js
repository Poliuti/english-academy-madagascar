import { VOCAB_CATEGORIES, VOCABULARY } from '../data/vocabulary.js';
import { speak } from '../tts.js';

export function renderVocabulary(categoryId) {
  const container = document.createElement('div');
  container.className = 'vocabulary-page';

  let current = categoryId && VOCABULARY[categoryId] ? categoryId : VOCAB_CATEGORIES[0].id;
  let search = '';

  function render() {
    container.innerHTML = `
      <div class="vocab-layout">
        <aside class="vocab-sidebar">
          <button class="btn-back sidebar-back" id="btn-back">← Retour</button>
          <h3 class="sidebar-title">📚 Vocabulaire</h3>
          <input type="text" class="vocab-search" id="vocab-search" placeholder="🔎 Rechercher..." value="${escHtml(search)}" />
          <nav class="sidebar-nav">
            ${VOCAB_CATEGORIES.map(c => `
              <button class="sidebar-item ${c.id === current ? 'active' : ''}" data-cat="${c.id}">
                <span>${c.icon}</span>
                <span>${c.label}</span>
                <span class="sidebar-level">${c.level}</span>
              </button>
            `).join('')}
          </nav>
        </aside>
        <main class="vocab-main">
          ${renderCategory(current, search)}
        </main>
      </div>
    `;

    container.querySelector('#btn-back').addEventListener('click', () => {
      location.hash = '#dashboard';
    });

    container.querySelectorAll('.sidebar-item').forEach(btn => {
      btn.addEventListener('click', () => {
        current = btn.dataset.cat;
        search = '';
        render();
      });
    });

    const searchInput = container.querySelector('#vocab-search');
    if (searchInput) {
      searchInput.addEventListener('input', e => {
        search = e.target.value.trim().toLowerCase();
        const main = container.querySelector('.vocab-main');
        if (main) main.innerHTML = renderCategory(current, search);
        bindTts();
      });
    }

    bindTts();
  }

  function bindTts() {
    container.querySelectorAll('.tts-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.dataset.text;
        btn.classList.add('playing');
        speak(text, { onEnd: () => btn.classList.remove('playing') });
      });
    });
  }

  render();
  return container;
}

function renderCategory(catId, search) {
  const cat = VOCAB_CATEGORIES.find(c => c.id === catId);
  let words = VOCABULARY[catId] || [];

  if (search) {
    words = words.filter(w =>
      w.en.toLowerCase().includes(search) ||
      w.fr.toLowerCase().includes(search) ||
      (w.mg && w.mg.toLowerCase().includes(search))
    );
  }

  return `
    <div class="vocab-content">
      <div class="vocab-header">
        <h2 class="vocab-title">${cat?.icon || ''} ${cat?.label || ''}</h2>
        <span class="vocab-count">${words.length} mot${words.length !== 1 ? 's' : ''}</span>
      </div>
      ${words.length === 0 ? `
        <div class="vocab-empty">Aucun mot trouvé pour "${escHtml(search)}".</div>
      ` : `
        <div class="vocab-grid">
          ${words.map(w => `
            <div class="vocab-card">
              <div class="vocab-card-top">
                <div class="vocab-en">
                  ${escHtml(w.en)}
                  <button class="tts-btn" data-text="${escHtml(w.en)}" title="Écouter">▶</button>
                </div>
                <div class="vocab-fr">🇫🇷 ${escHtml(w.fr)}</div>
                ${w.mg ? `<div class="vocab-mg">🇲🇬 ${escHtml(w.mg)}</div>` : ''}
              </div>
              <div class="vocab-example">
                <em>${escHtml(w.example)}</em>
                <button class="tts-btn" data-text="${escHtml(w.example)}" title="Écouter l'exemple">▶</button>
              </div>
            </div>
          `).join('')}
        </div>
      `}
    </div>
  `;
}

function escHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}
