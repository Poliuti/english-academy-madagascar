import { getActiveProfile, getLevelTitle, getTopicCompletionPercent } from '../storage.js';
import { TOPICS, isTopicUnlocked } from '../data/topics.js';

export function renderDashboard() {
  const profile = getActiveProfile();
  if (!profile) { location.hash = '#profiles'; return document.createElement('div'); }

  const container = document.createElement('div');
  container.className = 'dashboard-page';

  const titleInfo = getLevelTitle(profile.xp || 0);
  const xpToNext = xpForNextLevel(profile.xp || 0);
  const xpPercent = xpProgressPercent(profile.xp || 0);

  container.innerHTML = `
    <header class="dash-header">
      <div class="dash-header-left">
        <button class="btn-icon-only" id="btn-profiles" title="Changer de profil">👤</button>
        <div>
          <div class="dash-name">Bonjour, ${escHtml(profile.name)} 👋</div>
          <div class="dash-title">${titleInfo.sub} · ${titleInfo.label}</div>
        </div>
      </div>
      <div class="dash-header-right">
        <div class="stat-badge">🔥 ${profile.streak || 0}</div>
        <div class="stat-badge xp-badge">⭐ ${profile.xp || 0} XP</div>
      </div>
    </header>

    <div class="dash-content">

      <!-- XP Bar -->
      <div class="xp-bar-section">
        <div class="xp-bar-label">
          <span>${profile.level || 'A1'}</span>
          <span>${profile.xp || 0} / ${xpToNext} XP</span>
        </div>
        <div class="xp-bar-track">
          <div class="xp-bar-fill" style="width: ${xpPercent}%"></div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="quick-actions">
        <button class="quick-btn" id="btn-theory">
          <span class="quick-icon">📖</span>
          <span>Grammaire</span>
        </button>
        <button class="quick-btn" id="btn-vocabulary">
          <span class="quick-icon">📚</span>
          <span>Vocabulaire</span>
        </button>
        <button class="quick-btn" id="btn-dialogues">
          <span class="quick-icon">💬</span>
          <span>Dialogues</span>
        </button>
        <button class="quick-btn quick-btn-mg" id="btn-boky">
          <span class="quick-icon">🇲🇬</span>
          <span>Boky</span>
        </button>
        <button class="quick-btn quick-btn-tutor" id="btn-tutor">
          <span class="quick-icon">🤖</span>
          <span>Tutor IA</span>
        </button>
      </div>

      <!-- Assessment Banner -->
      <div class="assessment-banner" id="btn-assessment">
        <div class="assessment-banner-left">
          <span class="assessment-icon">🎯</span>
          <div>
            <div class="assessment-title">Test de niveau</div>
            <div class="assessment-sub">Découvre ton niveau d'anglais</div>
          </div>
        </div>
        <span class="assessment-arrow">›</span>
      </div>

      <!-- Learning Path -->
      <h2 class="section-title">📍 Mon Parcours</h2>
      <div class="learning-path" id="learning-path">
        ${renderLearningPath(profile)}
      </div>

    </div>
  `;

  container.querySelector('#btn-profiles').addEventListener('click', () => {
    location.hash = '#profiles';
  });
  container.querySelector('#btn-assessment').addEventListener('click', () => {
    location.hash = '#exercise?topic=assessment&mode=assessment';
  });
  container.querySelector('#btn-theory').addEventListener('click', () => {
    location.hash = '#theory';
  });
  container.querySelector('#btn-vocabulary').addEventListener('click', () => {
    location.hash = '#vocabulary';
  });
  container.querySelector('#btn-dialogues').addEventListener('click', () => {
    location.hash = '#dialogues';
  });
  container.querySelector('#btn-boky').addEventListener('click', () => {
    location.hash = '#boky';
  });
  container.querySelector('#btn-tutor').addEventListener('click', () => {
    location.hash = '#tutor';
  });

  // Topic card clicks
  container.querySelectorAll('.topic-card[data-topic]').forEach(card => {
    card.addEventListener('click', () => {
      const topic = card.dataset.topic;
      const locked = card.classList.contains('locked');
      if (!locked) {
        location.hash = `#exercise?topic=${topic}&mode=topic`;
      }
    });
  });
  container.querySelectorAll('.topic-theory-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      location.hash = `#theory?topic=${btn.dataset.topic}`;
    });
  });

  return container;
}

function renderLearningPath(profile) {
  const completedTopics = profile.completedTopics || [];

  return TOPICS.map((topic, i) => {
    const unlocked = isTopicUnlocked(topic.id, completedTopics);
    const percent = getTopicCompletionPercent(profile, topic.id);
    const isCompleted = completedTopics.includes(topic.id);
    const progress = profile.topicProgress?.[topic.id];
    const correct = progress?.correct || 0;
    const done = progress?.done || 0;

    const statusClass = isCompleted ? 'completed' : (unlocked ? 'available' : 'locked');
    const statusIcon = isCompleted ? '✅' : (unlocked ? '' : '🔒');

    const grammarTopics = ['presentSimple','presentContinuous','pastSimple','futureSimple'];
    const theoryId = grammarTopics.includes(topic.id) ? topic.id : null;

    return `
      <div class="topic-card ${statusClass}" data-topic="${topic.id}" style="--topic-color:${topic.color};--topic-dark:${topic.colorDark}">
        <div class="topic-card-left">
          <div class="topic-icon" style="background:${topic.color}">${topic.icon}</div>
          <div class="topic-info">
            <div class="topic-name">${topic.label}</div>
            <div class="topic-level-tag">${topic.level}</div>
            ${unlocked ? `
              <div class="topic-progress-bar-wrap">
                <div class="topic-progress-bar">
                  <div class="topic-progress-fill" style="width:${percent}%;background:${topic.colorDark}"></div>
                </div>
                <span class="topic-progress-text">${done} exercice${done !== 1 ? 's' : ''} · ${correct} correct${correct !== 1 ? 's' : ''}</span>
              </div>
            ` : `<div class="topic-locked-msg">Complète d'autres sujets pour débloquer</div>`}
          </div>
        </div>
        <div class="topic-card-right">
          ${statusIcon ? `<span class="status-icon">${statusIcon}</span>` : ''}
          ${unlocked && theoryId ? `<button class="topic-theory-btn" data-topic="${theoryId}" title="Voir la théorie">📖</button>` : ''}
          ${unlocked ? `<span class="topic-arrow">›</span>` : ''}
        </div>
      </div>
      ${i < TOPICS.length - 1 ? '<div class="path-connector"></div>' : ''}
    `;
  }).join('');
}

function xpForNextLevel(xp) {
  if (xp < 100) return 100;
  if (xp < 200) return 200;
  if (xp < 500) return 500;
  if (xp < 1000) return 1000;
  return xp + 200;
}

function xpProgressPercent(xp) {
  const prev = xp < 100 ? 0 : xp < 200 ? 100 : xp < 500 ? 200 : xp < 1000 ? 500 : 1000;
  const next = xpForNextLevel(xp);
  return Math.min(100, Math.round(((xp - prev) / (next - prev)) * 100));
}

function escHtml(str) {
  return str.replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}
