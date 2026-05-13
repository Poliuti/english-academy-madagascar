import { getActiveProfile } from '../storage.js';
import { TOPICS, getTopicById } from '../data/topics.js';
import { VOCAB_CATEGORIES, VOCABULARY } from '../data/vocabulary.js';
import { isDue } from '../sm2.js';
import { toggleTheme, isDark } from '../theme.js';

// ─── Entry point ──────────────────────────────────────────────────────────────

export function renderStats() {
  const profile = getActiveProfile();
  if (!profile) { location.hash = '#profiles'; return document.createElement('div'); }

  const s = buildStats(profile);
  const container = document.createElement('div');
  container.className = 'stats-page';
  container.innerHTML = buildHTML(profile, s);

  container.querySelector('#btn-stats-back').addEventListener('click', () => {
    location.hash = '#dashboard';
  });
  container.querySelector('#btn-stats-theme').addEventListener('click', function() {
    const next = toggleTheme();
    this.textContent = next === 'dark' ? '☀️' : '🌙';
  });

  return container;
}

// ─── Stats computation ────────────────────────────────────────────────────────

function buildStats(profile) {
  const tp  = profile.topicProgress  || {};
  const sm2 = profile.sm2Items       || {};
  const vs  = profile.vocabSM2       || {};

  // ── Grammar accuracy ──
  const allProg      = Object.values(tp);
  const totalDone    = allProg.reduce((s, p) => s + (p.done    || 0), 0);
  const totalCorrect = allProg.reduce((s, p) => s + (p.correct || 0), 0);
  const accuracy     = totalDone > 0 ? Math.round((totalCorrect / totalDone) * 100) : 0;

  // ── Grammar SM-2 ──
  const sm2Vals  = Object.values(sm2);
  const gramDue  = sm2Vals.filter(i =>  isDue(i)).length;
  const gramKnown= sm2Vals.filter(i => !isDue(i) && (i.repetitions || 0) >= 2).length;
  const gramSeen = sm2Vals.length;

  // ── Vocabulary SM-2 ──
  const totalVocabWords = Object.values(VOCABULARY).reduce((s, arr) => s + arr.length, 0);
  const vsVals    = Object.values(vs);
  const vocabDue  = vsVals.filter(i =>  isDue(i)).length;
  const vocabSoon = vsVals.filter(i => !isDue(i) && (i.repetitions || 0) <= 1).length;
  const vocabKnown= vsVals.filter(i => !isDue(i) && (i.repetitions || 0) >= 2).length;
  const vocabSeen = vsVals.length;
  const vocabNew  = totalVocabWords - vocabSeen;

  // ── Per-level grammar progress ──
  const levelStats = ['A1', 'A2', 'B1'].map(lv => {
    const lvTopics = TOPICS.filter(t => t.level === lv);
    const done = lvTopics.filter(t => (profile.completedTopics || []).includes(t.id)).length;
    return { level: lv, total: lvTopics.length, done };
  });

  // ── Per-topic accuracy (only attempted topics, sorted best→worst) ──
  const topicRows = TOPICS
    .filter(t => (tp[t.id]?.done || 0) > 0)
    .map(t => ({
      id:      t.id,
      label:   t.label,
      icon:    t.icon,
      done:    tp[t.id].done,
      correct: tp[t.id].correct,
      pct:     Math.min(100, Math.round((tp[t.id].correct / tp[t.id].done) * 100)),
    }))
    .sort((a, b) => b.pct - a.pct);

  // ── Vocabulary per category ──
  const catStats = VOCAB_CATEGORIES.map(cat => {
    const words = VOCABULARY[cat.id] || [];
    let catKnown = 0, catDue = 0, catSoon = 0;
    for (const w of words) {
      const item = vs[`${cat.id}:${w.en}`];
      if (!item || (item.repetitions || 0) === 0) continue;
      if (isDue(item))                        catDue++;
      else if ((item.repetitions || 0) <= 1)  catSoon++;
      else                                     catKnown++;
    }
    return { ...cat, total: words.length, seen: catKnown + catDue + catSoon, known: catKnown, due: catDue, soon: catSoon };
  });

  return {
    totalDone, totalCorrect, accuracy,
    gramDue, gramKnown, gramSeen,
    totalVocabWords, vocabDue, vocabSoon, vocabKnown, vocabSeen, vocabNew,
    levelStats, topicRows, catStats,
    sessions: (profile.sessionHistory || []).slice(0, 10),
  };
}

// ─── HTML ─────────────────────────────────────────────────────────────────────

function buildHTML(profile, s) {
  const topicsCompleted = (profile.completedTopics || []).length;
  const daysSince = profile.createdAt
    ? Math.max(0, Math.floor((Date.now() - profile.createdAt) / 86400000))
    : 0;

  return `
    <div class="stats-header">
      <button class="btn-icon-only" id="btn-stats-back" title="Retour">‹</button>
      <h1 class="stats-title">📊 Mes Statistiques</h1>
      <button class="btn-icon-only btn-theme-stats" id="btn-stats-theme" title="Changer de thème" style="margin-left:auto">${isDark() ? '☀️' : '🌙'}</button>
    </div>

    <div class="stats-content">

      <!-- ── KPI cards ── -->
      <div class="stats-kpi-grid">
        ${kpi('⭐', fmt(profile.xp || 0),      'XP total')}
        ${kpi('🔥', profile.streak || 0,        'Jours consécutifs')}
        ${kpi('✅', `${topicsCompleted}/${TOPICS.length}`, 'Thèmes faits')}
        ${kpi('🎯', s.accuracy + '%',           'Précision')}
        ${kpi('📖', s.vocabKnown,               'Mots maîtrisés')}
      </div>

      <!-- ── Grammar by CEFR level ── -->
      <section class="stats-section">
        <h2 class="stats-section-title">📍 Grammaire par niveau</h2>
        ${s.levelStats.map(lv => {
          const pct = lv.total > 0 ? Math.round((lv.done / lv.total) * 100) : 0;
          return `
            <div class="stats-level-row">
              <div class="stats-level-badge">${lv.level}</div>
              <div class="stats-level-bar-wrap">
                <div class="stats-level-bar">
                  <div class="stats-level-fill" style="width:${pct}%"></div>
                </div>
                <span class="stats-level-label">${lv.done} / ${lv.total} thèmes complétés</span>
              </div>
              <span class="stats-level-pct">${pct}%</span>
            </div>
          `;
        }).join('')}
      </section>

      <!-- ── Grammar SM-2 review status ── -->
      ${s.gramSeen > 0 ? `
      <section class="stats-section">
        <h2 class="stats-section-title">🔄 Révision grammaire (SM-2)</h2>
        <div class="stats-sm2-row">
          <div class="stats-sm2-badge sm2-due">
            <span class="sm2-num">${s.gramDue}</span>
            <span class="sm2-lbl">à réviser</span>
          </div>
          <div class="stats-sm2-badge sm2-known">
            <span class="sm2-num">${s.gramKnown}</span>
            <span class="sm2-lbl">maîtrisés</span>
          </div>
          <div class="stats-sm2-badge sm2-seen">
            <span class="sm2-num">${s.gramSeen}</span>
            <span class="sm2-lbl">vus au total</span>
          </div>
        </div>
      </section>
      ` : ''}

      <!-- ── Vocabulary overview ── -->
      <section class="stats-section">
        <h2 class="stats-section-title">📚 Vocabulaire</h2>
        <div class="stats-vocab-overview">
          <div class="stats-vocab-seg-bar">
            ${vocabSegBar(s.vocabKnown, s.vocabSoon + s.vocabDue, s.vocabNew, s.totalVocabWords)}
          </div>
          <div class="stats-vocab-legend">
            <span class="vleg vleg-known">🟢 ${s.vocabKnown} maîtrisés</span>
            <span class="vleg vleg-prog"> 🟡 ${s.vocabSoon + s.vocabDue} en cours</span>
            ${s.vocabDue > 0 ? `<span class="vleg vleg-due">🔴 ${s.vocabDue} à réviser</span>` : ''}
            <span class="vleg vleg-new"> ⬜ ${s.vocabNew} nouveaux</span>
          </div>
        </div>

        <div class="stats-cat-grid">
          ${s.catStats.map(cat => {
            const knownPct = cat.total > 0 ? Math.round((cat.known / cat.total) * 100) : 0;
            const soonPct  = cat.total > 0 ? Math.round((cat.soon  / cat.total) * 100) : 0;
            const duePct   = cat.total > 0 ? Math.round((cat.due   / cat.total) * 100) : 0;
            return `
              <div class="stats-cat-card">
                <div class="stats-cat-icon">${cat.icon}</div>
                <div class="stats-cat-info">
                  <div class="stats-cat-name">${cat.label}</div>
                  <div class="stats-cat-bar">
                    <div class="stats-cat-fill-known" style="width:${knownPct}%"></div>
                    <div class="stats-cat-fill-soon"  style="width:${soonPct}%"></div>
                    <div class="stats-cat-fill-due"   style="width:${duePct}%"></div>
                  </div>
                  <div class="stats-cat-nums">${cat.known}/${cat.total}
                    ${cat.due > 0 ? `<span class="cat-due-dot">· ${cat.due} due</span>` : ''}
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </section>

      <!-- ── Topic accuracy table ── -->
      ${s.topicRows.length > 0 ? `
      <section class="stats-section">
        <h2 class="stats-section-title">🎯 Précision par thème</h2>
        <div class="stats-topic-table">
          ${s.topicRows.map(t => `
            <div class="stats-topic-row">
              <span class="stats-topic-icon">${t.icon}</span>
              <span class="stats-topic-name">${t.label}</span>
              <div class="stats-topic-bar-wrap">
                <div class="stats-topic-bar">
                  <div class="stats-topic-fill ${t.pct >= 80 ? 'fill-good' : t.pct >= 60 ? 'fill-ok' : 'fill-low'}"
                       style="width:${t.pct}%"></div>
                </div>
              </div>
              <span class="stats-topic-pct ${t.pct >= 80 ? 'pct-good' : t.pct >= 60 ? 'pct-ok' : 'pct-low'}">${t.pct}%</span>
            </div>
          `).join('')}
        </div>
      </section>
      ` : ''}

      <!-- ── Recent sessions ── -->
      ${s.sessions.length > 0 ? `
      <section class="stats-section">
        <h2 class="stats-section-title">🕐 Sessions récentes</h2>
        <div class="stats-sessions">
          ${s.sessions.map(sess => sessionRow(sess)).join('')}
        </div>
      </section>
      ` : `
      <section class="stats-section stats-empty">
        <div class="stats-empty-icon">🎓</div>
        <div class="stats-empty-msg">Fais ton premier exercice pour voir tes statistiques ici !</div>
      </section>
      `}

      <!-- ── Account info ── -->
      <section class="stats-section stats-account-section">
        ${accountRow('📅', 'Membre depuis',       `${daysSince} jour${daysSince !== 1 ? 's' : ''}`)}
        ${accountRow('🏅', 'Niveau CECR',          profile.level || 'A1')}
        ${accountRow('📝', 'Exercices faits',       fmt(s.totalDone))}
        ${accountRow('✅', 'Réponses correctes',    fmt(s.totalCorrect))}
        ${accountRow('📚', 'Mots vus',              fmt(s.vocabSeen))}
        ${accountRow('🔥', 'Meilleur streak',       `${profile.streak || 0} jours`)}
      </section>

    </div>
  `;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function kpi(icon, value, label) {
  return `
    <div class="stats-kpi-card">
      <div class="kpi-icon">${icon}</div>
      <div class="kpi-value">${value}</div>
      <div class="kpi-label">${label}</div>
    </div>
  `;
}

function vocabSegBar(known, inProg, newWords, total) {
  if (total === 0) return '';
  const kPct = Math.round((known   / total) * 100);
  const iPct = Math.round((inProg  / total) * 100);
  return `
    <div class="stats-vocab-seg">
      <div class="seg-known" style="width:${kPct}%"></div>
      <div class="seg-prog"  style="width:${iPct}%"></div>
    </div>
  `;
}

function sessionRow(sess) {
  const d   = new Date(sess.date);
  const day = d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
  const hr  = d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  const pct = sess.total > 0 ? Math.round((sess.correct / sess.total) * 100) : 0;
  const scoreClass = pct >= 80 ? 'score-good' : pct >= 60 ? 'score-ok' : 'score-low';
  const emoji = pct >= 80 ? '🏆' : pct >= 60 ? '🌟' : '💪';

  // Try to get a human-readable topic label
  const topicObj = getTopicById(sess.topic);
  const topicLabel = topicObj ? `${topicObj.icon} ${topicObj.label}` : (sess.topic || '—');

  return `
    <div class="stats-session-row">
      <div class="session-date">
        <div class="session-day">${day}</div>
        <div class="session-time">${hr}</div>
      </div>
      <div class="session-topic">${escHtml(topicLabel)}</div>
      <div class="session-right">
        <span class="session-emoji">${emoji}</span>
        <span class="session-pct ${scoreClass}">${pct}%</span>
        <span class="session-score-detail">${sess.correct}/${sess.total}</span>
        <span class="session-xp">+${sess.xp || 0}⭐</span>
      </div>
    </div>
  `;
}

function accountRow(icon, label, value) {
  return `
    <div class="stats-account-row">
      <span class="account-label">${icon} ${label}</span>
      <span class="account-value">${value}</span>
    </div>
  `;
}

function fmt(n) {
  return Number(n).toLocaleString('fr-FR');
}

function escHtml(str) {
  return String(str).replace(/[&<>"']/g, c =>
    ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}
