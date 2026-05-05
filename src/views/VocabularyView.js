import { VOCAB_CATEGORIES, VOCABULARY } from '../data/vocabulary.js';
import { speak } from '../tts.js';

export function renderVocabulary(categoryId) {
  const container = document.createElement('div');
  container.className = 'vocabulary-page';

  let current = categoryId && VOCABULARY[categoryId] ? categoryId : VOCAB_CATEGORIES[0].id;
  let search = '';
  let flashMode = false;
  let matchMode = false;
  // Flashcard state
  let flashDeck = [];
  let flashIndex = 0;
  let flashFlipped = false;
  let flashKnown = [];
  let flashReview = [];
  // Match state
  let matchPairs = [];
  let matchSelected = null;   // { idx, side }
  let matchMatched = new Set();
  let matchMoves = 0;
  const MATCH_SIZE = 6;

  function startFlash() {
    const words = VOCABULARY[current] || [];
    flashDeck = [...words].sort(() => Math.random() - 0.5);
    flashIndex = 0;
    flashFlipped = false;
    flashKnown = [];
    flashReview = [];
    flashMode = true;
    matchMode = false;
    render();
  }

  function stopFlash() {
    flashMode = false;
    render();
  }

  function startMatch() {
    const words = VOCABULARY[current] || [];
    const sample = [...words].sort(() => Math.random() - 0.5).slice(0, MATCH_SIZE);
    matchPairs = sample;
    matchSelected = null;
    matchMatched = new Set();
    matchMoves = 0;
    matchMode = true;
    flashMode = false;
    render();
  }

  function stopMatch() {
    matchMode = false;
    render();
  }

  function render() {
    const inGame = flashMode || matchMode;
    container.innerHTML = `
      <!-- Mobile sidebar backdrop -->
      <div class="sidebar-backdrop" id="vocab-backdrop"></div>

      <div class="vocab-layout">
        <aside class="vocab-sidebar" id="vocab-sidebar">
          <button class="btn-sidebar-close" id="btn-sidebar-close">✕ Fermer</button>
          <button class="btn-back sidebar-back" id="btn-back">← Retour</button>
          <h3 class="sidebar-title">📚 Vocabulaire</h3>
          ${inGame ? '' : `<input type="text" class="vocab-search" id="vocab-search" placeholder="🔎 Rechercher..." value="${escHtml(search)}" />`}
          <nav class="sidebar-nav">
            ${VOCAB_CATEGORIES.map(c => `
              <button class="sidebar-item ${c.id === current && !inGame ? 'active' : ''}" data-cat="${c.id}">
                <span>${c.icon}</span>
                <span>${c.label}</span>
                <span class="sidebar-level">${c.level}</span>
              </button>
            `).join('')}
          </nav>
        </aside>
        <main class="vocab-main">
          <!-- Mobile bar (hidden on desktop) -->
          <div class="vocab-mobilebar">
            <button class="btn-back" id="btn-back-mobile">← Retour</button>
            <button class="btn-mobile-toc" id="btn-mobile-toc">☰ Catégories</button>
          </div>
          ${flashMode ? renderFlashcardUI() : matchMode ? renderMatchUI() : renderCategory(current, search)}
        </main>
      </div>
    `;

    bindEvents();
  }

  function renderFlashcardUI() {
    if (flashDeck.length === 0) return '<div class="vocab-empty">Aucun mot dans cette catégorie.</div>';

    // Summary screen
    if (flashIndex >= flashDeck.length) {
      return `
        <div class="flash-summary">
          <div class="flash-summary-icon">🎉</div>
          <h2 class="flash-summary-title">Session terminée !</h2>
          <div class="flash-summary-stats">
            <div class="flash-stat flash-stat-known">
              <div class="flash-stat-num">${flashKnown.length}</div>
              <div class="flash-stat-label">✅ Je savais</div>
            </div>
            <div class="flash-stat flash-stat-review">
              <div class="flash-stat-num">${flashReview.length}</div>
              <div class="flash-stat-label">🔄 À revoir</div>
            </div>
          </div>
          ${flashReview.length > 0 ? `
            <button class="btn-primary flash-retry-btn" id="btn-flash-retry">
              🔄 Revoir les ${flashReview.length} mot${flashReview.length > 1 ? 's' : ''} difficile${flashReview.length > 1 ? 's' : ''}
            </button>
          ` : '<p class="flash-perfect">Parfait ! Tu connais tous les mots. 🌟</p>'}
          <button class="btn-secondary flash-stop-btn" id="btn-flash-stop">← Retour à la liste</button>
        </div>
      `;
    }

    const w = flashDeck[flashIndex];
    const total = flashDeck.length;
    const progressPct = Math.round((flashIndex / total) * 100);

    return `
      <div class="flash-wrap">
        <div class="flash-topbar">
          <span class="flash-counter">${flashIndex + 1} / ${total}</span>
          <div class="flash-progress-track">
            <div class="flash-progress-fill" style="width:${progressPct}%"></div>
          </div>
          <button class="flash-stop-x" id="btn-flash-stop" title="Arrêter">✕</button>
        </div>

        <div class="flash-scene" id="flash-scene">
          <div class="flash-inner ${flashFlipped ? 'flipped' : ''}" id="flash-inner">
            <!-- Front -->
            <div class="flash-face flash-front" id="flash-face">
              <div class="flash-front-content">
                <div class="flash-word">${escHtml(w.en)}</div>
                <button class="tts-btn flash-tts" data-text="${escHtml(w.en)}" title="Écouter">🔊</button>
              </div>
              ${!flashFlipped ? `<button class="btn-secondary flash-reveal-btn" id="btn-reveal">Voir la traduction 👁</button>` : ''}
            </div>
            <!-- Back -->
            <div class="flash-face flash-back">
              <div class="flash-back-content">
                <div class="flash-word">${escHtml(w.en)}
                  <button class="tts-btn flash-tts" data-text="${escHtml(w.en)}" title="Écouter">🔊</button>
                </div>
                <div class="flash-fr">🇫🇷 ${escHtml(w.fr)}</div>
                ${w.mg ? `<div class="flash-mg">🇲🇬 ${escHtml(w.mg)}</div>` : ''}
                <div class="flash-example">
                  <em>${escHtml(w.example)}</em>
                  <button class="tts-btn flash-tts" data-text="${escHtml(w.example)}" title="Écouter l'exemple">🔊</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        ${flashFlipped ? `
          <div class="flash-btns">
            <button class="flash-btn flash-btn-review" id="btn-review">🔄 À revoir</button>
            <button class="flash-btn flash-btn-known" id="btn-known">✅ Je savais</button>
          </div>
        ` : ''}
      </div>
    `;
  }

  function openVocabSidebar() {
    container.querySelector('#vocab-sidebar')?.classList.add('mobile-open');
    container.querySelector('#vocab-backdrop')?.classList.add('active');
  }
  function closeVocabSidebar() {
    container.querySelector('#vocab-sidebar')?.classList.remove('mobile-open');
    container.querySelector('#vocab-backdrop')?.classList.remove('active');
  }

  function bindEvents() {
    container.querySelector('#btn-back').addEventListener('click', () => {
      if (flashMode) { stopFlash(); return; }
      if (matchMode) { stopMatch(); return; }
      location.hash = '#dashboard';
    });
    container.querySelector('#btn-back-mobile')?.addEventListener('click', () => {
      if (flashMode) { stopFlash(); return; }
      if (matchMode) { stopMatch(); return; }
      location.hash = '#dashboard';
    });
    container.querySelector('#btn-mobile-toc')?.addEventListener('click', openVocabSidebar);
    container.querySelector('#btn-sidebar-close')?.addEventListener('click', closeVocabSidebar);
    container.querySelector('#vocab-backdrop')?.addEventListener('click', closeVocabSidebar);

    container.querySelectorAll('.sidebar-item').forEach(btn => {
      btn.addEventListener('click', () => {
        current = btn.dataset.cat;
        search = '';
        flashMode = false;
        matchMode = false;
        closeVocabSidebar();
        render();
      });
    });

    if (matchMode) {
      const stopBtn = container.querySelector('#btn-match-stop');
      if (stopBtn) stopBtn.addEventListener('click', stopMatch);
      const againBtn = container.querySelector('#btn-match-again');
      if (againBtn) againBtn.addEventListener('click', startMatch);

      container.querySelectorAll('.match-card:not([disabled])').forEach(card => {
        card.addEventListener('click', () => {
          const idx = +card.dataset.idx;
          const side = card.dataset.side;
          if (matchMatched.has(idx)) return;

          if (!matchSelected) {
            matchSelected = { idx, side };
            render();
            return;
          }
          // Same side clicked again — re-select
          if (matchSelected.side === side) {
            matchSelected = { idx, side };
            render();
            return;
          }
          // Opposite side clicked — check match
          matchMoves++;
          if (matchSelected.idx === idx) {
            // ✅ Correct pair
            matchMatched.add(idx);
            speak(matchPairs[idx].en);
            matchSelected = null;
          } else {
            // ❌ Wrong — flash error then clear
            matchSelected = null;
          }
          render();
        });
      });
      return;
    }

    if (!flashMode) {
      const searchInput = container.querySelector('#vocab-search');
      if (searchInput) {
        searchInput.addEventListener('input', e => {
          search = e.target.value.trim().toLowerCase();
          const main = container.querySelector('.vocab-main');
          if (main) main.innerHTML = renderCategory(current, search);
          bindTts();
          bindFlashStart();
          bindMatchStart();
        });
      }
      bindFlashStart();
      bindMatchStart();
    } else {
      // Flash mode events
      const stopBtn = container.querySelector('#btn-flash-stop');
      if (stopBtn) stopBtn.addEventListener('click', stopFlash);

      const retryBtn = container.querySelector('#btn-flash-retry');
      if (retryBtn) {
        retryBtn.addEventListener('click', () => {
          flashDeck = [...flashReview].sort(() => Math.random() - 0.5);
          flashIndex = 0;
          flashFlipped = false;
          flashKnown = [];
          flashReview = [];
          render();
        });
      }

      const revealBtn = container.querySelector('#btn-reveal');
      if (revealBtn) {
        revealBtn.addEventListener('click', () => {
          flashFlipped = true;
          render();
        });
      }

      const knownBtn = container.querySelector('#btn-known');
      if (knownBtn) {
        knownBtn.addEventListener('click', () => {
          flashKnown.push(flashDeck[flashIndex]);
          flashIndex++;
          flashFlipped = false;
          render();
        });
      }

      const reviewBtn = container.querySelector('#btn-review');
      if (reviewBtn) {
        reviewBtn.addEventListener('click', () => {
          flashReview.push(flashDeck[flashIndex]);
          flashIndex++;
          flashFlipped = false;
          render();
        });
      }
    }

    bindTts();
  }

  function renderMatchUI() {
    const total = matchPairs.length;
    const done = matchMatched.size;

    if (done === total) {
      return `
        <div class="flash-summary">
          <div class="flash-summary-icon">🎉</div>
          <h2 class="flash-summary-title">Bravo ! Tout trouvé !</h2>
          <div class="flash-summary-stats">
            <div class="flash-stat flash-stat-known">
              <div class="flash-stat-num">${matchMoves}</div>
              <div class="flash-stat-label">🔀 Tentatives</div>
            </div>
            <div class="flash-stat flash-stat-review">
              <div class="flash-stat-num">${total}</div>
              <div class="flash-stat-label">✅ Paires trouvées</div>
            </div>
          </div>
          <button class="btn-primary flash-retry-btn" id="btn-match-again">🔀 Nouveau round</button>
          <button class="btn-secondary flash-stop-btn" id="btn-match-stop">← Retour à la liste</button>
        </div>
      `;
    }

    // Build shuffled EN and FR columns
    const enOrder = [...matchPairs.keys()].sort(() => Math.random() - 0.5);
    const frOrder = [...matchPairs.keys()].sort(() => Math.random() - 0.5);

    return `
      <div class="match-wrap">
        <div class="match-topbar">
          <span class="match-info">${done}/${total} paires · ${matchMoves} essais</span>
          <button class="flash-stop-x" id="btn-match-stop" title="Arrêter">✕</button>
        </div>
        <div class="match-columns">
          <div class="match-col" id="match-col-en">
            ${enOrder.map(i => {
              const w = matchPairs[i];
              const isMatched = matchMatched.has(i);
              const isSelected = matchSelected?.side === 'en' && matchSelected?.idx === i;
              return `<button
                class="match-card match-en ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''}"
                data-idx="${i}" data-side="en"
                ${isMatched ? 'disabled' : ''}
              >${w.icon ? w.icon + ' ' : ''}${escHtml(w.en)}</button>`;
            }).join('')}
          </div>
          <div class="match-col" id="match-col-fr">
            ${frOrder.map(i => {
              const w = matchPairs[i];
              const isMatched = matchMatched.has(i);
              const isSelected = matchSelected?.side === 'fr' && matchSelected?.idx === i;
              return `<button
                class="match-card match-fr ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''}"
                data-idx="${i}" data-side="fr"
                ${isMatched ? 'disabled' : ''}
              >🇫🇷 ${escHtml(w.fr)}</button>`;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  }

  function bindFlashStart() {
    const btn = container.querySelector('#btn-flash-start');
    if (btn) btn.addEventListener('click', startFlash);
  }

  function bindMatchStart() {
    const btn = container.querySelector('#btn-match-start');
    if (btn) btn.addEventListener('click', startMatch);
  }

  function bindTts() {
    container.querySelectorAll('.tts-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.disabled) return;
        btn.disabled = true;
        btn.classList.add('playing');
        const restore = () => {
          btn.disabled = false;
          btn.classList.remove('playing');
        };
        speak(btn.dataset.text, { onEnd: restore, onError: restore });
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
        <div class="vocab-header-left">
          <h2 class="vocab-title">${cat?.icon || ''} ${cat?.label || ''}</h2>
          <span class="vocab-count">${words.length} mot${words.length !== 1 ? 's' : ''}</span>
        </div>
        ${words.length > 0 ? `
          <div class="vocab-game-btns">
            <button class="btn-primary flash-start-btn" id="btn-flash-start" title="Mode Flashcards">🃏 Flashcards</button>
            <button class="btn-secondary match-start-btn" id="btn-match-start" title="Jeu de mémorisation">🔀 Match</button>
          </div>
        ` : ''}
      </div>
      ${words.length === 0 ? `
        <div class="vocab-empty">Aucun mot trouvé pour "${escHtml(search)}".</div>
      ` : `
        <div class="vocab-grid">
          ${words.map(w => `
            <div class="vocab-card">
              <div class="vocab-card-top">
                ${w.icon ? `<div class="vocab-icon">${w.icon}</div>` : ''}
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
