// Page utilisateur pour proposer des corrections aux traductions malgaches [À VÉRIFIER]
import { VOCABULARY } from '../data/vocabulary.js';
import { hasMarker, stripMarker, vocabKey, submitProposal, getVoteData } from '../mgReview.js';
import { getActiveProfile } from '../storage.js';

function escHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}

/** Collect all [À VÉRIFIER] entries from the vocabulary */
function collectFlaggedItems() {
  const items = [];
  for (const [catId, entries] of Object.entries(VOCABULARY)) {
    for (const entry of entries) {
      if (entry.mg && hasMarker(entry.mg)) {
        items.push({
          key:        vocabKey(catId, entry.en),
          catId,
          en:         entry.en,
          fr:         entry.fr,
          mg:         stripMarker(entry.mg),
          rawMg:      entry.mg,
        });
      }
    }
  }
  return items;
}

export function renderMgReviewUser() {
  const container = document.createElement('div');
  container.className = 'mgadmin-page';

  const profile  = getActiveProfile();
  const profileId = profile?.id || 'anonymous';
  const items    = collectFlaggedItems();

  // Track submitted keys in this session
  const submitted = new Set();

  function renderItem(item) {
    const vd = getVoteData(item.key);
    const alreadyProposed = vd.proposals.some(p => p.profileId === profileId);
    const wasJustSubmitted = submitted.has(item.key);

    return `
      <div class="mgreview-card" data-key="${escHtml(item.key)}" id="card-${escHtml(item.key)}">
        <div class="mgreview-langs">
          <span class="mgreview-en">🇬🇧 <strong>${escHtml(item.en)}</strong></span>
          <span class="mgreview-fr">🇫🇷 ${escHtml(item.fr)}</span>
        </div>
        <div class="mgreview-current">
          🇲🇬 Traduction actuelle : <em>${escHtml(item.mg)}</em>
          <span class="mgreview-badge">À vérifier</span>
        </div>
        ${wasJustSubmitted || alreadyProposed
          ? `<div class="mgreview-thanks">✅ Merci — ta suggestion sera examinée par un enseignant.</div>`
          : `<div class="mgreview-form">
               <input
                 type="text"
                 class="mgreview-input"
                 data-key="${escHtml(item.key)}"
                 placeholder="Propose une meilleure traduction malgache…"
                 autocomplete="off"
               />
               <button class="btn-primary mgreview-submit" data-key="${escHtml(item.key)}">
                 ✉️ Soumettre
               </button>
             </div>`
        }
      </div>
    `;
  }

  function render() {
    container.innerHTML = `
      <div class="mgadmin-header">
        <button class="btn-back" id="btn-back">← Retour</button>
        <h2 class="mgadmin-title">🌿 Améliorer les traductions</h2>
        <div></div>
      </div>

      <div class="mgreview-intro">
        <p>Ces traductions malgaches sont marquées <strong>« À vérifier »</strong>.
           Si tu connais une meilleure version, propose-la ci-dessous —
           un enseignant l'examinera avant de l'appliquer.</p>
        <p class="mgreview-count">${items.length} traduction${items.length > 1 ? 's' : ''} à vérifier</p>
      </div>

      <div class="mgreview-list">
        ${items.length === 0
          ? '<p class="mgadmin-empty">Aucune traduction à vérifier pour l\'instant. 🎉</p>'
          : items.map(renderItem).join('')
        }
      </div>
    `;

    // Back button
    container.querySelector('#btn-back').addEventListener('click', () => {
      location.hash = '#dashboard';
    });

    // Submit buttons
    container.querySelectorAll('.mgreview-submit').forEach(btn => {
      btn.addEventListener('click', () => {
        const key   = btn.dataset.key;
        const input = container.querySelector(`.mgreview-input[data-key="${CSS.escape(key)}"]`);
        const text  = (input?.value || '').trim();
        if (!text) { input?.focus(); return; }

        const item = items.find(i => i.key === key);
        submitProposal(
          key,
          profileId,
          text,
          item?.mg    || '',
          item?.en    || '',
          item?.fr    || '',
        );

        submitted.add(key);

        // Replace the card with the thank-you message
        const card = container.querySelector(`#card-${CSS.escape(key)}`);
        if (card) {
          const form = card.querySelector('.mgreview-form');
          if (form) {
            form.outerHTML = `<div class="mgreview-thanks">✅ Merci — ta suggestion sera examinée par un enseignant.</div>`;
          }
        }
      });
    });

    // Allow Enter to submit
    container.querySelectorAll('.mgreview-input').forEach(input => {
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          const btn = container.querySelector(`.mgreview-submit[data-key="${CSS.escape(input.dataset.key)}"]`);
          btn?.click();
        }
      });
    });
  }

  render();
  return container;
}
