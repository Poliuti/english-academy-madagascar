// Page d'administration des traductions malgaches.
// Permet d'accepter les propositions, d'éditer manuellement, d'importer /
// exporter, et de gérer la couche d'override (remplacement instantané).
import {
  getAllFlagged, getAllAccepted, getAllOverrides, getOverridesMap,
  acceptProposal, acceptAllProposals, setOverride, removeOverride,
  clearAllOverrides, dismissProposals,
} from '../mgReview.js';

function escHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}

// Échappe pour usage dans un attribut value="..." (guillemets doubles).
function escAttr(str) {
  return escHtml(str);
}

// Toast non-bloccante (sostituisce alert())
function showToast(msg) {
  let t = document.getElementById('mgadmin-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'mgadmin-toast';
    t.className = 'mgadmin-toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._hideTimer);
  t._hideTimer = setTimeout(() => t.classList.remove('show'), 2600);
}

function fmtDate(iso) {
  if (!iso) return '';
  try {
    const d = new Date(iso);
    if (isNaN(d.getTime())) return escHtml(iso);
    return d.toLocaleDateString('fr-FR') + ' ' + d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  } catch (_) { return escHtml(iso); }
}

export function renderMgAdmin() {
  const container = document.createElement('div');
  container.className = 'mgadmin-page';

  function pendingItems() {
    const overrides = getOverridesMap();
    return getAllFlagged()
      .filter(f => f.proposals && f.proposals.length > 0 && !overrides[f.key]);
  }

  function render() {
    const pending = pendingItems();
    const overrides = getAllOverrides()
      .sort((a, b) => String(b.acceptedAt || '').localeCompare(String(a.acceptedAt || '')));
    const totalProposals = pending.reduce((s, f) => s + (f.proposals?.length || 0), 0);

    container.innerHTML = `
      <div class="mgadmin-header">
        <button class="btn-back" id="btn-back">← Retour</button>
        <h2 class="mgadmin-title">🇲🇬 Gestion des traductions</h2>
        <div></div>
      </div>

      <div class="mgadmin-actions">
        <button class="btn-primary" id="btn-accept-all" ${pending.length === 0 ? 'disabled' : ''}>
          ✅ Tout accepter (${pending.length})
        </button>
        <button class="btn-secondary" id="btn-export">📥 Exporter JSON</button>
        <button class="btn-secondary" id="btn-import">📤 Importer JSON</button>
        <button class="btn-secondary" id="btn-reset" ${overrides.length === 0 ? 'disabled' : ''}>
          🗑️ Réinitialiser overrides
        </button>
        <input type="file" id="import-file" accept="application/json,.json" hidden />
      </div>

      <section class="mgadmin-section">
        <h3 class="mgadmin-section-title">📝 Propositions en attente (${pending.length})</h3>
        ${pending.length === 0
          ? `<p class="mgadmin-empty-mini">Aucune proposition en attente.</p>`
          : pending.map(renderPendingCard).join('')}
      </section>

      <section class="mgadmin-section">
        <h3 class="mgadmin-section-title">✅ Traductions appliquées (${overrides.length})</h3>
        ${overrides.length === 0
          ? `<p class="mgadmin-empty-mini">Aucune traduction modifiée.</p>`
          : overrides.map(renderOverrideRow).join('')}
      </section>

      ${pending.length === 0 && overrides.length === 0
        ? `<p class="mgadmin-empty">Aucune proposition ni traduction modifiée.</p>`
        : ''}
    `;

    bindEvents();
  }

  function renderPendingCard(f) {
    const lastProp = f.proposals[f.proposals.length - 1];
    const defaultVal = lastProp?.text || f.originalMg || '';
    return `
      <div class="mgadmin-card" data-key="${escAttr(f.key)}">
        <div class="mgadmin-ctx">
          ${f.contextEn ? `<span class="mgadmin-en">🇬🇧 ${escHtml(f.contextEn)}</span>` : ''}
          ${f.contextFr ? `<span class="mgadmin-fr">🇫🇷 ${escHtml(f.contextFr)}</span>` : ''}
        </div>
        <div class="mgadmin-orig">Original : <span>${escHtml(f.originalMg || '—')}</span></div>
        <div class="mgadmin-props">
          ${f.proposals.map((p, i) => `
            <div class="mgadmin-prop">
              <span class="mgadmin-prop-text">« ${escHtml(p.text)} »</span>
              <span class="mgadmin-prop-meta">— ${escHtml(p.profileId || 'anonyme')}, ${fmtDate(p.date)}</span>
              <button class="btn-primary mgadmin-mini-btn" data-act="accept-prop" data-key="${escAttr(f.key)}" data-idx="${i}">✓ Accepter</button>
            </div>
          `).join('')}
        </div>
        <div class="mgadmin-edit">
          <input type="text" class="mgadmin-input" data-key="${escAttr(f.key)}"
            value="${escAttr(defaultVal)}" placeholder="Traduction malgache…" />
          <button class="btn-secondary mgadmin-mini-btn" data-act="apply-manual" data-key="${escAttr(f.key)}">💾 Appliquer</button>
          <button class="btn-secondary mgadmin-mini-btn" data-act="dismiss" data-key="${escAttr(f.key)}">✗ Ignorer</button>
        </div>
      </div>
    `;
  }

  function renderOverrideRow(o) {
    return `
      <div class="mgadmin-row" data-key="${escAttr(o.key)}">
        <div class="mgadmin-ctx">
          ${o.en ? `<span class="mgadmin-en">🇬🇧 ${escHtml(o.en)}</span>` : ''}
          ${o.fr ? `<span class="mgadmin-fr">🇫🇷 ${escHtml(o.fr)}</span>` : ''}
        </div>
        <div class="mgadmin-orig">
          Original : <span>${escHtml(o.originalMg || '—')}</span>
          &nbsp;→&nbsp; Appliqué : <strong class="mgadmin-applied">${escHtml(o.mg)}</strong>
        </div>
        <div class="mgadmin-row-meta">
          <span class="mgadmin-tag">${escHtml(o.source || 'manual')}</span>
          <span>${fmtDate(o.acceptedAt)}</span>
        </div>
        <div class="mgadmin-row-actions">
          <button class="btn-secondary mgadmin-mini-btn" data-act="undo" data-key="${escAttr(o.key)}">↩ Annuler</button>
          <button class="btn-secondary mgadmin-mini-btn" data-act="edit" data-key="${escAttr(o.key)}">✏️ Modifier</button>
        </div>
      </div>
    `;
  }

  function exportJson() {
    const payload = {
      overrides: getOverridesMap(),
      flagged: getAllFlagged(),
      accepted: getAllAccepted(),
      generatedAt: new Date().toISOString(),
    };
    const today = new Date().toISOString().slice(0, 10);
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mg-traductions-${today}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function importJson(file) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result || '{}'));
        const ov = parsed && parsed.overrides ? parsed.overrides : {};
        let count = 0;
        Object.entries(ov).forEach(([key, v]) => {
          if (v && v.mg) {
            setOverride(key, v.mg, { en: v.en, fr: v.fr, originalMg: v.originalMg }, 'import');
            count++;
          }
        });
        showToast(`${count} traduction(s) importée(s).`);
      } catch (_) {
        showToast('Fichier JSON invalide.');
      }
      render();
    };
    reader.readAsText(file);
  }

  function bindEvents() {
    container.querySelector('#btn-back').addEventListener('click', () => {
      location.hash = '#dashboard';
    });

    const acceptAllBtn = container.querySelector('#btn-accept-all');
    if (acceptAllBtn) acceptAllBtn.addEventListener('click', () => {
      const n = acceptAllProposals();
      render();
      if (n > 0) showToast(`${n} proposition(s) acceptée(s) et appliquée(s).`);
      else showToast('Aucune proposition à accepter.');
    });

    container.querySelector('#btn-export').addEventListener('click', exportJson);

    const importBtn = container.querySelector('#btn-import');
    const importInput = container.querySelector('#import-file');
    importBtn.addEventListener('click', () => importInput.click());
    importInput.addEventListener('change', e => {
      const file = e.target.files && e.target.files[0];
      if (file) importJson(file);
    });

    const resetBtn = container.querySelector('#btn-reset');
    if (resetBtn) resetBtn.addEventListener('click', () => {
      if (confirm('Réinitialiser TOUTES les traductions appliquées (overrides) ? Cette action est irréversible.')) {
        clearAllOverrides();
        render();
      }
    });

    // Accepter une proposition précise
    container.querySelectorAll('[data-act="accept-prop"]').forEach(btn => {
      btn.addEventListener('click', () => {
        acceptProposal(btn.dataset.key, parseInt(btn.dataset.idx, 10));
        render();
      });
    });

    // Appliquer l'édition manuelle
    container.querySelectorAll('[data-act="apply-manual"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.key;
        const input = container.querySelector(`.mgadmin-input[data-key="${CSS.escape(key)}"]`);
        const val = (input?.value || '').trim();
        if (!val) { input?.focus(); return; }
        const f = pendingItems().find(x => x.key === key);
        setOverride(key, val, {
          en: f?.contextEn || '',
          fr: f?.contextFr || '',
          originalMg: f?.originalMg || '',
        }, 'manual');
        render();
      });
    });

    // Ignorer les propositions
    container.querySelectorAll('[data-act="dismiss"]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (confirm('Ignorer (supprimer) les propositions de cet item ?')) {
          dismissProposals(btn.dataset.key);
          render();
        }
      });
    });

    // Annuler un override
    container.querySelectorAll('[data-act="undo"]').forEach(btn => {
      btn.addEventListener('click', () => {
        removeOverride(btn.dataset.key);
        render();
      });
    });

    // Modifier un override existant (transforme en input)
    container.querySelectorAll('[data-act="edit"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.key;
        const row = container.querySelector(`.mgadmin-row[data-key="${CSS.escape(key)}"]`);
        if (!row) return;
        const applied = row.querySelector('.mgadmin-applied');
        const current = applied ? applied.textContent : '';
        const meta = getOverridesMap()[key] || {};
        const actions = row.querySelector('.mgadmin-row-actions');
        actions.innerHTML = `
          <input type="text" class="mgadmin-input mgadmin-edit-input" value="${escAttr(current)}" />
          <button class="btn-primary mgadmin-mini-btn" data-act="save-edit">💾 Enregistrer</button>
        `;
        const inp = actions.querySelector('.mgadmin-edit-input');
        inp.focus();
        actions.querySelector('[data-act="save-edit"]').addEventListener('click', () => {
          const val = (inp.value || '').trim();
          if (!val) { inp.focus(); return; }
          setOverride(key, val, {
            en: meta.en, fr: meta.fr, originalMg: meta.originalMg,
          }, meta.source || 'manual');
          render();
        });
      });
    });
  }

  render();
  return container;
}
