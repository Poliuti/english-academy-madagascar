import { getProfiles, createProfile, setActiveProfile, deleteProfile, getLevelTitle } from '../storage.js';

const AVATARS = ['🦁','🐘','🦒','🦓','🐬','🦅','🌺','🌍','⭐','🔥','💎','🎯'];

export function renderProfileSelector() {
  const container = document.createElement('div');
  container.className = 'profile-page';

  container.innerHTML = `
    <div class="profile-header">
      <div class="app-logo">🇬🇧</div>
      <h1 class="app-title">English Academy</h1>
      <p class="app-subtitle">Apprends l'anglais, un pas à la fois !</p>
      <p class="app-subtitle-mg">Mianara anglisy, dingana iray amin'ny fotoana!</p>
    </div>

    <div class="profile-body">
      <h2 class="section-title">Qui es-tu ?</h2>
      <div id="profiles-grid" class="profiles-grid"></div>
      <button class="btn-new-profile" id="btn-new">
        <span class="btn-icon">➕</span>
        Nouveau profil
      </button>
    </div>

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

  renderProfiles(container);
  bindEvents(container);
  return container;
}

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
    const avatar = AVATARS[i % AVATARS.length];
    const titleInfo = getLevelTitle(p.xp || 0);
    const lastActive = p.lastActive
      ? new Date(p.lastActive).toLocaleDateString('fr-FR')
      : 'Jamais';
    return `
      <div class="profile-card" data-id="${p.id}">
        <button class="profile-delete" data-id="${p.id}" title="Supprimer">✕</button>
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

function bindEvents(container) {
  // Click on profile card
  container.addEventListener('click', e => {
    const card = e.target.closest('.profile-card');
    const deleteBtn = e.target.closest('.profile-delete');

    if (deleteBtn) {
      e.stopPropagation();
      showDeleteConfirm(container, deleteBtn.dataset.id);
      return;
    }

    if (card) {
      const id = card.dataset.id;
      setActiveProfile(id);
      location.hash = '#dashboard';
    }
  });

  // New profile button
  container.querySelector('#btn-new').addEventListener('click', () => {
    container.querySelector('#new-profile-modal').classList.remove('hidden');
    container.querySelector('#profile-name-input').focus();
  });

  // Cancel new profile
  container.querySelector('#btn-cancel').addEventListener('click', () => {
    container.querySelector('#new-profile-modal').classList.add('hidden');
    container.querySelector('#profile-name-input').value = '';
  });

  // Create profile
  container.querySelector('#btn-create').addEventListener('click', () => doCreate(container));

  // Enter key in input
  container.querySelector('#profile-name-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') doCreate(container);
  });

  // Modal backdrop click
  container.querySelector('#new-profile-modal .modal-backdrop').addEventListener('click', () => {
    container.querySelector('#new-profile-modal').classList.add('hidden');
  });
}

function doCreate(container) {
  const input = container.querySelector('#profile-name-input');
  const name = input.value.trim();
  if (!name) {
    input.classList.add('shake');
    setTimeout(() => input.classList.remove('shake'), 400);
    return;
  }
  createProfile(name);
  location.hash = '#assessment';
}

function showDeleteConfirm(container, profileId) {
  const profiles = getProfiles();
  const profile = profiles.find(p => p.id === profileId);
  if (!profile) return;

  const modal = container.querySelector('#delete-confirm-modal');
  container.querySelector('#delete-confirm-text').textContent =
    `Supprimer le profil de "${profile.name}" ? Tous les progrès seront perdus.`;
  modal.classList.remove('hidden');

  container.querySelector('#btn-cancel-delete').onclick = () => modal.classList.add('hidden');
  container.querySelector('#btn-confirm-delete').onclick = () => {
    deleteProfile(profileId);
    modal.classList.add('hidden');
    renderProfiles(container);
  };
}

function escHtml(str) {
  return str.replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}
