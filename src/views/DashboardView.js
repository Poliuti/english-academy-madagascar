import { getActiveProfile, getLevelTitle, getTopicCompletionPercent, getLevelScore, isLevelUnlocked } from '../storage.js';
import { TOPICS, isTopicUnlocked } from '../data/topics.js';
import { ENABLE_COMPETITIVE_MODE } from '../config.js';
import { toggleTheme, isDark } from '../theme.js';

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
        <button class="btn-icon-only btn-stats-nav" id="btn-stats" title="Mes statistiques">📊</button>
        <button class="btn-icon-only" id="btn-theme" title="Changer de thème">${isDark() ? '☀️' : '🌙'}</button>
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

      <!-- Legend (collapsible) — above quick actions -->
      <div class="legend-section" id="legend-section">
        <button class="legend-toggle" id="legend-toggle" aria-expanded="false">
          <span>📌 Guide des sections</span>
          <span class="legend-toggle-arrow">▾</span>
        </button>
        <div class="legend-grid" id="legend-grid" hidden>
          <div class="legend-item">
            <span class="legend-icon">🇲🇬</span>
            <div>
              <div class="legend-name">Boky</div>
              <div class="legend-desc">Manuel structuré en malgache pour apprendre l'anglais pas à pas.</div>
            </div>
          </div>
          <div class="legend-item">
            <span class="legend-icon">📖</span>
            <div>
              <div class="legend-name">Grammaire</div>
              <div class="legend-desc">Leçons et exercices sur les règles essentielles de l'anglais.</div>
            </div>
          </div>
          <div class="legend-item">
            <span class="legend-icon">📚</span>
            <div>
              <div class="legend-name">Vocabulaire</div>
              <div class="legend-desc">Flashcards avec répétition espacée (SM-2) pour mémoriser les mots.</div>
            </div>
          </div>
          <div class="legend-item">
            <span class="legend-icon">📰</span>
            <div>
              <div class="legend-name">Compréhension</div>
              <div class="legend-desc">Textes progressifs (A1→B1+) avec questions de compréhension.</div>
            </div>
          </div>
          <div class="legend-item">
            <span class="legend-icon">💬</span>
            <div>
              <div class="legend-name">Dialogues</div>
              <div class="legend-desc">Conversations guidées pour pratiquer l'anglais du quotidien.</div>
            </div>
          </div>
          <div class="legend-item">
            <span class="legend-icon">🤖</span>
            <div>
              <div class="legend-name">Tutor IA</div>
              <div class="legend-desc">Pratique libre avec un tuteur IA — pose des questions, converse.</div>
            </div>
          </div>
          <div class="legend-item">
            <span class="legend-icon">🌿</span>
            <div>
              <div class="legend-name">Lecture MG</div>
              <div class="legend-desc">5 textes A1 simples avec traduction malgache mot-à-mot.</div>
            </div>
          </div>
          <div class="legend-item">
            <span class="legend-icon">📍</span>
            <div>
              <div class="legend-name">Mon Parcours</div>
              <div class="legend-desc">Exercices progressifs débloqués au fil de ta progression.</div>
            </div>
          </div>
          <div class="legend-item">
            <span class="legend-icon">📊</span>
            <div>
              <div class="legend-name">Statistiques</div>
              <div class="legend-desc">Tes progrès : XP, précision, révisions, historique de sessions.</div>
            </div>
          </div>
          <div class="legend-item">
            <span class="legend-icon">🎯</span>
            <div>
              <div class="legend-name">Test de niveau</div>
              <div class="legend-desc">Évalue ton niveau CECR (A1→B1+) pour personnaliser ton parcours.</div>
            </div>
          </div>
          ${ENABLE_COMPETITIVE_MODE ? `
          <div class="legend-item">
            <span class="legend-icon">🏆</span>
            <div>
              <div class="legend-name">Défi amis</div>
              <div class="legend-desc">Affronte tes amis sur des exercices chronométrés et compare vos scores.</div>
            </div>
          </div>` : ''}
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="quick-actions">
        <button class="quick-btn" id="btn-boky">
          <span class="quick-icon">🇲🇬</span>
          <span>Boky</span>
        </button>
        <button class="quick-btn" id="btn-theory">
          <span class="quick-icon">📖</span>
          <span>Grammaire</span>
        </button>
        <button class="quick-btn" id="btn-vocabulary">
          <span class="quick-icon">📚</span>
          <span>Vocabulaire</span>
        </button>
        <button class="quick-btn" id="btn-reading">
          <span class="quick-icon">📰</span>
          <span>Compréhension</span>
        </button>
        <button class="quick-btn" id="btn-dialogues">
          <span class="quick-icon">💬</span>
          <span>Dialogues</span>
        </button>
        <button class="quick-btn" id="btn-tutor">
          <span class="quick-icon">🤖</span>
          <span>Tutor IA</span>
        </button>
        <button class="quick-btn" id="btn-lecture">
          <span class="quick-icon">🌿</span>
          <span>Lecture MG</span>
        </button>
      </div>
      ${ENABLE_COMPETITIVE_MODE ? `
      <button class="quick-btn-competitive" id="btn-competitive">
        <span class="quick-icon">🏆</span>
        <span>Défi amis</span>
      </button>` : ''}

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
  container.querySelector('#btn-stats').addEventListener('click', () => {
    location.hash = '#stats';
  });
  container.querySelector('#btn-theme').addEventListener('click', function() {
    const next = toggleTheme();
    this.textContent = next === 'dark' ? '☀️' : '🌙';
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
  container.querySelector('#btn-reading').addEventListener('click', () => {
    location.hash = '#reading';
  });
  container.querySelector('#btn-tutor').addEventListener('click', () => {
    location.hash = '#tutor';
  });
  container.querySelector('#btn-lecture').addEventListener('click', () => {
    location.hash = '#lecture';
  });
  if (ENABLE_COMPETITIVE_MODE) {
    container.querySelector('#btn-competitive')?.addEventListener('click', () => {
      location.hash = '#competitive';
    });
  }

  // Legend toggle
  container.querySelector('#legend-toggle').addEventListener('click', () => {
    const grid = container.querySelector('#legend-grid');
    const btn  = container.querySelector('#legend-toggle');
    const open = !grid.hidden;
    grid.hidden = open;
    btn.setAttribute('aria-expanded', String(!open));
    btn.querySelector('.legend-toggle-arrow').textContent = open ? '▾' : '▴';
    try { localStorage.setItem('ea_legend_open', open ? '0' : '1'); } catch (_) {}
  });

  // Restore legend state from last visit
  try {
    if (localStorage.getItem('ea_legend_open') === '1') {
      const grid = container.querySelector('#legend-grid');
      const btn  = container.querySelector('#legend-toggle');
      grid.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
      btn.querySelector('.legend-toggle-arrow').textContent = '▴';
    }
  } catch (_) {}

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

// Grammar topics that have a theory page
const GRAMMAR_THEORY_MAP = {
  presentSimple:        'presentSimple',
  presentContinuous:    'presentContinuous',
  pastSimple:           'pastSimple',
  futureSimple:         'futureSimple',
  modals:               'modals',
  prepositions:         'prepositions',
  questions:            'questions',
  comparatives:         'comparatives',
  articles:             'articles',
  plurals:              'plurals',
  therebeis:            'therebeis',
  pronouns:             'pronouns',
  pastContinuous:       'pastContinuous',
  presentPerfect:       'presentPerfect',
  conditionals:         'conditionals',
  passiveVoice:         'passiveVoice',
  reportedSpeech:       'reportedSpeech',
  pastPerfect:          'pastPerfect',
  futurePerfect:        'futurePerfect',
  interrogative:        'interrogative',
  imperatives:          'imperatives',
  someAny:              'someAny',
  toBe:                 'toBe',
  irregularVerbs:       'irregularVerbs',
  futureContinuous:     'futureContinuous',
  timeMarkers:          'timeMarkers',
  possessives:          'possessives',
  adverbs:              'adverbs',
  countableUncountable: 'countableUncountable',
  connectors:           'connectors',
  tenseChooser:         'tenseChooser',
  phrasalVerbs:         'phrasalVerbs',
  verbs:                'presentSimple',
  timeAdverbs:          'adverbs',
};

function renderLearningPath(profile) {
  const completedTopics = profile.completedTopics || [];

  // Group topics by level for section headers
  let lastLevel = null;
  return TOPICS.map((topic, i) => {
    const unlocked = isTopicUnlocked(topic.id, completedTopics);
    const percent = getTopicCompletionPercent(profile, topic.id);
    const isCompleted = completedTopics.includes(topic.id);
    const progress = profile.topicProgress?.[topic.id];
    const correct = progress?.correct || 0;
    const done = progress?.done || 0;

    const statusClass = isCompleted ? 'completed' : (unlocked ? 'available' : 'locked');
    const theoryId = GRAMMAR_THEORY_MAP[topic.id] || null;

    // Lock reason: which prerequisites are missing
    const missingReqs = topic.unlockRequires
      ? topic.unlockRequires.filter(r => !completedTopics.includes(r))
      : [];
    const lockMsg = missingReqs.length > 0
      ? `Complète d'abord : ${missingReqs.join(', ')}`
      : 'Continue pour débloquer';

    // Level section header
    let sectionHeader = '';
    if (topic.level !== lastLevel) {
      lastLevel = topic.level;
      sectionHeader = `<div class="path-level-header"><span class="path-level-badge">${topic.level}</span></div>`;
    }

    // Difficulty level mini-dots (only for unlocked topics)
    const levelDots = unlocked ? [1,2,3].map(lv => {
      const sc = getLevelScore(profile, topic.id, lv);
      const lvUnlocked = isLevelUnlocked(profile, topic.id, lv);
      if (!lvUnlocked) return `<span class="lv-dot lv-dot-locked" title="Niveau ${lv} : verrouillé">●</span>`;
      if (sc >= 80)    return `<span class="lv-dot lv-dot-done"   title="Niveau ${lv} : ${sc}%">●</span>`;
      if (sc > 0)      return `<span class="lv-dot lv-dot-progress" title="Niveau ${lv} : ${sc}%">●</span>`;
      return              `<span class="lv-dot lv-dot-open"   title="Niveau ${lv} : pas encore commencé">●</span>`;
    }).join('') : '';

    return sectionHeader + `
      <div class="topic-card ${statusClass}" data-topic="${topic.id}" style="--topic-color:${topic.color};--topic-dark:${topic.colorDark}">
        <div class="topic-card-left">
          <div class="topic-icon" style="background:${topic.color}">${topic.icon}</div>
          <div class="topic-info">
            <div class="topic-name">${topic.label}</div>
            ${unlocked ? `
              <div class="topic-progress-bar-wrap">
                <div class="topic-progress-bar">
                  <div class="topic-progress-fill" style="width:${percent}%;background:${topic.colorDark}"></div>
                </div>
                <div class="topic-progress-row">
                  <span class="topic-progress-text">${done} ex · ${correct} ✓</span>
                  ${percent > 0 ? `<span class="topic-pct-badge" style="background:${topic.colorDark}">${percent}%</span>` : ''}
                </div>
              </div>
              <div class="lv-dots">${levelDots}</div>
            ` : `<div class="topic-locked-msg">🔒 ${lockMsg}</div>`}
          </div>
        </div>
        <div class="topic-card-right">
          ${isCompleted ? '<span class="status-icon">✅</span>' : ''}
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
