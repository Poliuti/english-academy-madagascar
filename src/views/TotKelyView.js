// TotKelyView : version ultra-simplifiée pour les très jeunes enfants
// Image/icône + anglais + audio + traduction malgache. Pas de français.

import { speak } from '../tts.js';
import { stripMarker } from '../mgReview.js';
import { VOCABULARY } from '../data/vocabulary.js';

// Sélection curée par catégorie — uniquement des mots simples et concrets.
const PICK_PER_CAT = {
  family:  6,
  colors:  6,
  body:    6,
  animals: 6,
  food:    6,
  numbers: 10,
  routine: 4,
};

function buildTotKelyDeck() {
  const deck = [];
  for (const [cat, n] of Object.entries(PICK_PER_CAT)) {
    const words = (VOCABULARY[cat] || []).filter(w => w.mg);
    for (let i = 0; i < Math.min(n, words.length); i++) {
      deck.push({ ...words[i], catId: cat });
    }
  }
  return deck;
}

function escHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

export function renderTotKely() {
  const container = document.createElement('div');
  container.className = 'totkely-page';

  const deck = buildTotKelyDeck();
  let mode = 'grid';   // 'grid' | 'card'
  let currentIdx = 0;

  function render() {
    if (mode === 'grid') renderGrid();
    else renderCard();
  }

  function renderGrid() {
    container.innerHTML = `
      <header class="tk-header">
        <button class="btn-back" id="tk-back">‹ Retour</button>
        <div class="tk-title-wrap">
          <h1 class="tk-title">🌱 Tot Kely</h1>
          <p class="tk-sub">🇲🇬 Hianatra teny anglisy mora foana</p>
        </div>
      </header>
      <div class="tk-grid">
        ${deck.map((w, i) => `
          <button class="tk-card" data-idx="${i}">
            <div class="tk-icon">${w.icon || '📖'}</div>
            <div class="tk-en">${escHtml(w.en)}</div>
            <div class="tk-mg">${escHtml(stripMarker(w.mg))}</div>
          </button>
        `).join('')}
      </div>
    `;
    bindGrid();
  }

  function renderCard() {
    const w = deck[currentIdx];
    if (!w) { mode = 'grid'; render(); return; }
    container.innerHTML = `
      <header class="tk-header">
        <button class="btn-back" id="tk-back">‹ Lisitra</button>
        <span class="tk-counter">${currentIdx + 1} / ${deck.length}</span>
      </header>
      <div class="tk-bigcard">
        <div class="tk-bigicon">${w.icon || '📖'}</div>
        <div class="tk-bigen">${escHtml(w.en)}</div>
        <button class="tk-listen" id="tk-listen">🔊 Henoy</button>
        <div class="tk-bigmg">🇲🇬 ${escHtml(stripMarker(w.mg))}</div>
      </div>
      <div class="tk-nav">
        <button class="btn-secondary tk-navbtn" id="tk-prev" ${currentIdx === 0 ? 'disabled' : ''}>‹ Aloha</button>
        <button class="btn-primary tk-navbtn" id="tk-next" ${currentIdx === deck.length - 1 ? 'disabled' : ''}>Manaraka ›</button>
      </div>
    `;
    bindCard();
    setTimeout(() => speak(w.en), 300);
  }

  function bindGrid() {
    container.querySelector('#tk-back').addEventListener('click', () => {
      location.hash = '#dashboard';
    });
    container.querySelectorAll('.tk-card').forEach(card => {
      card.addEventListener('click', () => {
        currentIdx = parseInt(card.dataset.idx, 10);
        mode = 'card';
        render();
      });
    });
  }

  function bindCard() {
    container.querySelector('#tk-back').addEventListener('click', () => {
      mode = 'grid';
      render();
    });
    container.querySelector('#tk-listen').addEventListener('click', () => {
      const w = deck[currentIdx];
      if (w) speak(w.en);
    });
    container.querySelector('#tk-prev').addEventListener('click', () => {
      if (currentIdx > 0) { currentIdx--; render(); }
    });
    container.querySelector('#tk-next').addEventListener('click', () => {
      if (currentIdx < deck.length - 1) { currentIdx++; render(); }
    });
  }

  render();
  return container;
}
