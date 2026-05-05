import { getProfiles, createProfile, setActiveProfile, deleteProfile, getLevelTitle,
         setProfileCloudPin, importProfile } from '../storage.js';
import { isConfigured, fetchProfile } from '../supabase.js';

const AVATARS = ['🦁','🐘','🦒','🦓','🐬','🦅','🌺','🌍','⭐','🔥','💎','🎯'];

export function renderProfileSelector() {
  const container = document.createElement('div');
  container.className = 'profile-page';

  const cloudEnabled = isConfigured();

  container.innerHTML = `
    <div class="profile-header">
      <h1 class="app-title">English Academy<br><span class="app-title-mg">Madagascar</span></h1>
      <p class="app-subtitle">✨ Parle anglais avec confiance — gratuitement, hors ligne, à ton rythme !</p>
      <p class="app-subtitle-mg">🇲🇬 Mianara anglisy maimaimpoana, tsy mila internet, araka ny fihevitreo!</p>
      <div class="app-stats-row">
        <span class="app-stat-chip">📖 39 chapitres</span>
        <span class="app-stat-chip">🎧 2100+ audios</span>
        <span class="app-stat-chip">💬 370 mots</span>
        <span class="app-stat-chip">🤖 Tutor IA</span>
      </div>
    </div>

    <div class="profile-body">
      <h2 class="section-title">Qui es-tu ?</h2>
      <div id="profiles-grid" class="profiles-grid"></div>
      <div class="profile-actions-row">
        <button class="btn-new-profile" id="btn-new">
          <span class="btn-icon">➕</span>
          Nouveau profil
        </button>
        ${cloudEnabled ? `
        <button class="btn-restore-cloud" id="btn-restore">
          ☁️ Récupérer un profil
        </button>` : ''}
      </div>
    </div>

    <!-- Modal: new profile name -->
    <div id="new-profile-modal" class="modal hidden">
      <div class="modal-backdrop"></div>
      <div class="modal-box">
        <h3>✏️ Créer un profil</h3>
        <p>Comment tu t'appelles ?</p>
        <input
          type="text"
          id="profile-name-input"
          class="modal-input"
          placeholder="Ton prénom..."
          maxlength="20"
          autocomplete="off"
        />
        <div class="modal-actions">
          <button class="btn-secondary" id="btn-cancel">Annuler</button>
          <button class="btn-primary" id="btn-create">Créer !</button>
        </div>
      </div>
    </div>

    <!-- Modal: cloud PIN setup (only if Supabase configured) -->
    <div id="cloud-pin-modal" class="modal hidden">
      <div class="modal-backdrop"></div>
      <div class="modal-box">
        <div class="choice-header">☁️</div>
        <h3>Sauvegarder dans le cloud ?</h3>
        <p>Choisis un code PIN à 4 chiffres pour retrouver ton profil sur n'importe quel appareil.</p>
        <p class="modal-sub">🇲🇬 <em>Asio kaody 4 isa hahazoanao ny profilinao amin'ny fitaovana hafa.</em></p>
        <input
          type="text"
          id="cloud-pin-input"
          class="modal-input pin-input"
          placeholder="0000"
          maxlength="4"
          inputmode="numeric"
          pattern="[0-9]{4}"
          autocomplete="off"
        />
        <div class="modal-actions">
          <button class="btn-secondary" id="btn-skip-cloud">⏭️ Non, local seulement</button>
          <button class="btn-primary"   id="btn-save-cloud">☁️ Sauvegarder</button>
        </div>
      </div>
    </div>

    <!-- Modal: assessment choice -->
    <div id="assessment-choice-modal" class="modal hidden">
      <div class="modal-backdrop"></div>
      <div class="modal-box">
        <div class="choice-header">🎉</div>
        <h3>Bienvenue, <span class="choice-name"></span> !</h3>
        <p>Veux-tu faire un rapide test de niveau pour personnaliser ton parcours ?</p>
        <p class="modal-sub">🇲🇬 <em>Hanao fitsapana haingana ve ianao?</em></p>
        <div class="modal-actions choice-actions">
          <button class="btn-secondary" id="btn-skip-assessment">⏭️ Passer</button>
          <button class="btn-primary" id="btn-do-assessment">🎯 Faire le test</button>
        </div>
      </div>
    </div>

    <!-- Modal: restore from cloud -->
    <div id="restore-modal" class="modal hidden">
      <div class="modal-backdrop"></div>
      <div class="modal-box">
        <div class="choice-header">☁️</div>
        <h3>Récupérer un profil</h3>
        <p>Entre ton prénom et ton code PIN pour récupérer ton profil depuis le cloud.</p>
        <input
          type="text"
          id="restore-name-input"
          class="modal-input"
          placeholder="Ton prénom..."
          maxlength="20"
          autocomplete="off"
        />
        <input
          type="text"
          id="restore-pin-input"
          class="modal-input pin-input"
          placeholder="Code PIN (4 chiffres)"
          maxlength="4"
          inputmode="numeric"
          pattern="[0-9]{4}"
          autocomplete="off"
          style="margin-top: 10px;"
        />
        <div id="restore-error" class="restore-error hidden">❌ Profil introuvable ou PIN incorrect.</div>
        <div class="modal-actions">
          <button class="btn-secondary" id="btn-cancel-restore">Annuler</button>
          <button class="btn-primary"   id="btn-do-restore">
            <span id="restore-btn-text">☁️ Récupérer</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Modal: delete confirm -->
    <div id="delete-confirm-modal" class="modal hidden">
      <div class="modal-backdrop"></div>
      <div class="modal-box">
        <h3>⚠️ Supprimer ?</h3>
        <p id="delete-confirm-text"></p>
        <div class="modal-actions">
          <button class="btn-secondary" id="btn-cancel-delete">Annuler</button>
          <button class="btn-danger" id="btn-confirm-delete">Supprimer</button>
        </div>
      </div>
    </div>
  `;

  // State for deferred PIN setup (profile created, waiting for PIN choice)
  let _pendingProfileId = null;

  renderProfiles(container);
  bindEvents(container, { cloudEnabled, getPendingId: () => _pendingProfileId,
                           setPendingId: id => { _pendingProfileId = id; } });
  return container;
}

// ─────────────────────────────────────────────────────────────────────────────

function renderProfiles(container) {
  const grid = container.querySelector('#profiles-grid');
  const profiles = getProfiles();

  if (profiles.length === 0) {
    grid.innerHTML = `
      <div class="empty-profiles">
        <p>Pas encore de profil.</p>
        <p>Clique sur <strong>"Nouveau profil"</strong> pour commencer !</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = profiles.map((p, i) => {
    const avatar   = AVATARS[i % AVATARS.length];
    const titleInfo = getLevelTitle(p.xp || 0);
    const lastActive = p.lastActive
      ? new Date(p.lastActive).toLocaleDateString('fr-FR')
      : 'Jamais';
    const cloudBadge = p.cloudPin
      ? `<span class="profile-cloud-badge" title="Profil sauvegardé dans le cloud">☁️</span>`
      : '';
    return `
      <div class="profile-card" data-id="${p.id}">
        <button class="profile-delete" data-id="${p.id}" title="Supprimer">✕</button>
        ${cloudBadge}
        <div class="profile-avatar">${avatar}</div>
        <div class="profile-name">${escHtml(p.name)}</div>
        <div class="profile-level-badge level-${p.level || 'A1'}">${p.level || 'A1'}</div>
        <div class="profile-stats">
          <span class="stat">⭐ ${p.xp || 0} XP</span>
          <span class="stat">🔥 ${p.streak || 0} jours</span>
        </div>
        <div class="profile-title">${titleInfo.sub}</div>
        <div class="profile-last">Dernière session: ${lastActive}</div>
      </div>
    `;
  }).join('');
}

// ─────────────────────────────────────────────────────────────────────────────

function bindEvents(container, { cloudEnabled, getPendingId, setPendingId }) {

  // ── Profile card click ────────────────────────────────────────────────────
  container.addEventListener('click', e => {
    const card      = e.target.closest('.profile-card');
    const deleteBtn = e.target.closest('.profile-delete');

    if (deleteBtn) {
      e.stopPropagation();
      showDeleteConfirm(container, deleteBtn.dataset.id);
      return;
    }
    if (card) {
      setActiveProfile(card.dataset.id);
      location.hash = '#dashboard';
    }
  });

  // ── New profile ────────────────────────────────────────────────────────────
  container.querySelector('#btn-new').addEventListener('click', () => {
    container.querySelector('#new-profile-modal').classList.remove('hidden');
    container.querySelector('#profile-name-input').focus();
  });

  container.querySelector('#btn-cancel').addEventListener('click', () => {
    container.querySelector('#new-profile-modal').classList.add('hidden');
    container.querySelector('#profile-name-input').value = '';
  });

  container.querySelector('#new-profile-modal .modal-backdrop').addEventListener('click', () => {
    container.querySelector('#new-profile-modal').classList.add('hidden');
  });

  container.querySelector('#btn-create').addEventListener('click', () => doCreate(container, { cloudEnabled, setPendingId }));
  container.querySelector('#profile-name-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') doCreate(container, { cloudEnabled, setPendingId });
  });

  // ── Cloud PIN modal ────────────────────────────────────────────────────────
  if (cloudEnabled) {
    // Filter: only digits
    container.querySelector('#cloud-pin-input').addEventListener('input', e => {
      e.target.value = e.target.value.replace(/\D/g, '');
    });

    container.querySelector('#btn-skip-cloud').addEventListener('click', () => {
      container.querySelector('#cloud-pin-modal').classList.add('hidden');
      container.querySelector('#cloud-pin-input').value = '';
      showAssessmentChoice(container, getPendingId());
    });

    container.querySelector('#btn-save-cloud').addEventListener('click', () => {
      const pin = container.querySelector('#cloud-pin-input').value.trim();
      if (pin.length !== 4) {
        container.querySelector('#cloud-pin-input').classList.add('shake');
        setTimeout(() => container.querySelector('#cloud-pin-input').classList.remove('shake'), 400);
        return;
      }
      const pid = getPendingId();
      if (pid) setProfileCloudPin(pid, pin);
      container.querySelector('#cloud-pin-modal').classList.add('hidden');
      container.querySelector('#cloud-pin-input').value = '';
      showAssessmentChoice(container, pid);
    });
  }

  // ── Assessment choice ──────────────────────────────────────────────────────
  container.querySelector('#btn-do-assessment').addEventListener('click', () => {
    location.hash = '#exercise?topic=assessment&mode=assessment';
  });
  container.querySelector('#btn-skip-assessment').addEventListener('click', () => {
    location.hash = '#dashboard';
  });
  container.querySelector('#assessment-choice-modal .modal-backdrop').addEventListener('click', () => {
    location.hash = '#dashboard';
  });

  // ── Restore from cloud ────────────────────────────────────────────────────
  if (cloudEnabled) {
    container.querySelector('#btn-restore').addEventListener('click', () => {
      container.querySelector('#restore-modal').classList.remove('hidden');
      container.querySelector('#restore-name-input').focus();
    });

    container.querySelector('#btn-cancel-restore').addEventListener('click', () => {
      container.querySelector('#restore-modal').classList.add('hidden');
      container.querySelector('#restore-error').classList.add('hidden');
    });

    container.querySelector('#restore-modal .modal-backdrop').addEventListener('click', () => {
      container.querySelector('#restore-modal').classList.add('hidden');
      container.querySelector('#restore-error').classList.add('hidden');
    });

    // Filter: only digits in PIN
    container.querySelector('#restore-pin-input').addEventListener('input', e => {
      e.target.value = e.target.value.replace(/\D/g, '');
    });

    container.querySelector('#btn-do-restore').addEventListener('click', async () => {
      const name = container.querySelector('#restore-name-input').value.trim();
      const pin  = container.querySelector('#restore-pin-input').value.trim();
      const errEl = container.querySelector('#restore-error');
      const btnText = container.querySelector('#restore-btn-text');

      if (!name || pin.length !== 4) {
        errEl.textContent = '⚠️ Entre ton prénom et un code PIN à 4 chiffres.';
        errEl.classList.remove('hidden');
        return;
      }

      btnText.textContent = '⏳ Recherche…';
      container.querySelector('#btn-do-restore').disabled = true;
      errEl.classList.add('hidden');

      const profile = await fetchProfile(name, pin);

      btnText.textContent = '☁️ Récupérer';
      container.querySelector('#btn-do-restore').disabled = false;

      if (!profile) {
        errEl.textContent = '❌ Profil introuvable ou PIN incorrect.';
        errEl.classList.remove('hidden');
        return;
      }

      importProfile(profile);
      setActiveProfile(profile.id);
      container.querySelector('#restore-modal').classList.add('hidden');
      renderProfiles(container);
      // Flash success then go to dashboard
      location.hash = '#dashboard';
    });
  }
}

// ─────────────────────────────────────────────────────────────────────────────

function doCreate(container, { cloudEnabled, setPendingId }) {
  const input = container.querySelector('#profile-name-input');
  const name  = input.value.trim();
  if (!name) {
    input.classList.add('shake');
    setTimeout(() => input.classList.remove('shake'), 400);
    return;
  }

  if (cloudEnabled) {
    // Create profile locally first (no pin yet)
    const profile = createProfile(name, null);
    setPendingId(profile.id);
    container.querySelector('#new-profile-modal').classList.add('hidden');
    input.value = '';
    // Show cloud PIN modal
    container.querySelector('#cloud-pin-modal').classList.remove('hidden');
    container.querySelector('#cloud-pin-input').focus();
  } else {
    // No cloud — create directly and go to assessment choice
    const profile = createProfile(name, null);
    setPendingId(profile.id);
    container.querySelector('#new-profile-modal').classList.add('hidden');
    input.value = '';
    showAssessmentChoice(container, profile.id);
  }
}

function showAssessmentChoice(container, profileId) {
  const profiles = getProfiles();
  const profile  = profiles.find(p => p.id === profileId);
  const modal    = container.querySelector('#assessment-choice-modal');
  modal.querySelector('.choice-name').textContent = profile?.name || '';
  modal.classList.remove('hidden');
}

function showDeleteConfirm(container, profileId) {
  const profiles = getProfiles();
  const profile  = profiles.find(p => p.id === profileId);
  if (!profile) return;

  const modal = container.querySelector('#delete-confirm-modal');
  const txt   = profile.cloudPin
    ? `Supprimer le profil de "${profile.name}" ? Les données locales ET le cloud seront supprimés.`
    : `Supprimer le profil de "${profile.name}" ? Tous les progrès seront perdus.`;
  container.querySelector('#delete-confirm-text').textContent = txt;
  modal.classList.remove('hidden');

  container.querySelector('#btn-cancel-delete').onclick = () => modal.classList.add('hidden');
  container.querySelector('#btn-confirm-delete').onclick = () => {
    deleteProfile(profileId);
    modal.classList.add('hidden');
    renderProfiles(container);
  };
}

function escHtml(str) {
  return str.replace(/[&<>"']/g, c =>
    ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}
