const STORE_KEY = 'english_academy';

function load() {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY)) || { profiles: [], activeProfileId: null };
  } catch {
    return { profiles: [], activeProfileId: null };
  }
}

function save(data) {
  localStorage.setItem(STORE_KEY, JSON.stringify(data));
}

// ─── PROFILES ────────────────────────────────────────────────────────────────

export function getProfiles() {
  return load().profiles;
}

export function getActiveProfile() {
  const data = load();
  return data.profiles.find(p => p.id === data.activeProfileId) || null;
}

export function setActiveProfile(profileId) {
  const data = load();
  data.activeProfileId = profileId;
  save(data);
}

export function createProfile(name) {
  const data = load();
  const id = `profile_${Date.now()}`;
  const profile = {
    id,
    name,
    createdAt: Date.now(),
    lastActive: Date.now(),
    xp: 0,
    streak: 0,
    lastStreakDate: null,
    level: 'A1',
    completedTopics: [],
    topicProgress: {},   // { topicId: { done: N, correct: N } }
    sm2Items: {},        // { exerciseId: sm2Data }
    sessionHistory: [],  // last 10 sessions summary
  };
  data.profiles.push(profile);
  data.activeProfileId = id;
  save(data);
  return profile;
}

export function deleteProfile(profileId) {
  const data = load();
  data.profiles = data.profiles.filter(p => p.id !== profileId);
  if (data.activeProfileId === profileId) {
    data.activeProfileId = data.profiles[0]?.id || null;
  }
  save(data);
}

// ─── PROFILE UPDATES ─────────────────────────────────────────────────────────

function updateProfile(profileId, updater) {
  const data = load();
  const idx = data.profiles.findIndex(p => p.id === profileId);
  if (idx === -1) return;
  data.profiles[idx] = updater(data.profiles[idx]);
  save(data);
  return data.profiles[idx];
}

export function addXP(profileId, amount) {
  return updateProfile(profileId, p => {
    p.xp = (p.xp || 0) + amount;
    p.level = computeLevel(p.xp);
    return p;
  });
}

export function updateStreak(profileId) {
  return updateProfile(profileId, p => {
    const today = new Date().toDateString();
    const lastDate = p.lastStreakDate;
    const yesterday = new Date(Date.now() - 86400000).toDateString();

    if (lastDate === today) return p; // already updated today
    if (lastDate === yesterday) {
      p.streak = (p.streak || 0) + 1;
    } else {
      p.streak = 1;
    }
    p.lastStreakDate = today;
    p.lastActive = Date.now();
    return p;
  });
}

export function saveTopicProgress(profileId, topicId, done, correct) {
  return updateProfile(profileId, p => {
    if (!p.topicProgress) p.topicProgress = {};
    const prev = p.topicProgress[topicId] || { done: 0, correct: 0 };
    p.topicProgress[topicId] = {
      done: prev.done + done,
      correct: prev.correct + correct,
    };
    const total = getTopicExerciseCount(topicId);
    if (p.topicProgress[topicId].done >= total && !p.completedTopics.includes(topicId)) {
      p.completedTopics.push(topicId);
    }
    return p;
  });
}

export function saveSM2(profileId, exerciseId, sm2Data) {
  return updateProfile(profileId, p => {
    if (!p.sm2Items) p.sm2Items = {};
    p.sm2Items[exerciseId] = sm2Data;
    return p;
  });
}

export function getSM2(profileId, exerciseId) {
  const profile = getActiveProfile();
  if (!profile || profile.id !== profileId) return null;
  return profile.sm2Items?.[exerciseId] || null;
}

export function saveSession(profileId, session) {
  return updateProfile(profileId, p => {
    if (!p.sessionHistory) p.sessionHistory = [];
    p.sessionHistory.unshift({ ...session, date: Date.now() });
    p.sessionHistory = p.sessionHistory.slice(0, 20);
    return p;
  });
}

export function setProfileLevel(profileId, level) {
  return updateProfile(profileId, p => {
    p.level = level;
    return p;
  });
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function getTopicExerciseCount(topicId) {
  // Default count — keeps storage.js free of data dependency
  const counts = {
    routine: 8, family: 8, school: 8, body: 8, time: 8,
    verbs: 8, timeAdverbs: 8, presentSimple: 8,
    presentContinuous: 8, pastSimple: 8, futureSimple: 8,
  };
  return counts[topicId] || 8;
}

export function computeLevel(xp) {
  if (xp >= 1000) return 'B1+';
  if (xp >= 500) return 'B1';
  if (xp >= 200) return 'A2';
  return 'A1';
}

export function getLevelTitle(xp) {
  if (xp >= 1000) return { label: 'Manam-pahaizana', sub: 'Expert' };
  if (xp >= 500)  return { label: 'Mpahay', sub: 'Avancé' };
  if (xp >= 200)  return { label: 'Mpianakavy', sub: 'Intermédiaire' };
  if (xp >= 100)  return { label: 'Mpianatra matotra', sub: 'Apprenti' };
  return { label: 'Mpianatra', sub: 'Débutant' };
}

export function getTopicCompletionPercent(profile, topicId) {
  const total = getTopicExerciseCount(topicId);
  const done = profile.topicProgress?.[topicId]?.done || 0;
  return Math.min(100, Math.round((done / total) * 100));
}

// ─── LEVEL PROGRESS (3 difficulty tiers per topic) ──────────────────────────
// Key: `${topicId}_lv${level}` (level = 1, 2, or 3)

export function saveLevelProgress(profileId, topicId, level, done, correct) {
  return updateProfile(profileId, p => {
    if (!p.levelProgress) p.levelProgress = {};
    const key = `${topicId}_lv${level}`;
    const prev = p.levelProgress[key] || { done: 0, correct: 0, sessions: 0 };
    p.levelProgress[key] = {
      done:     prev.done + done,
      correct:  prev.correct + correct,
      sessions: prev.sessions + 1,
    };
    return p;
  });
}

export function getLevelProgress(profile, topicId, level) {
  const key = `${topicId}_lv${level}`;
  return profile.levelProgress?.[key] || { done: 0, correct: 0, sessions: 0 };
}

/** Returns 0-100 percent score for the best session on this level */
export function getLevelScore(profile, topicId, level) {
  const prog = getLevelProgress(profile, topicId, level);
  if (!prog.done) return 0;
  return Math.min(100, Math.round((prog.correct / prog.done) * 100));
}

/** Level 1 always unlocked; level 2 requires ≥ 80% on level 1; level 3 requires ≥ 80% on level 2 */
export function isLevelUnlocked(profile, topicId, diffLevel) {
  if (diffLevel <= 1) return true;
  return getLevelScore(profile, topicId, diffLevel - 1) >= 80;
}
