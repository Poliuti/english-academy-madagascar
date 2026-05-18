// Système de vote sur les traductions malgaches marquées [À VÉRIFIER]
// Stockage entièrement local dans localStorage.

const STORAGE_KEY = 'ea_mg_review';
const ACCEPT_THRESHOLD = 3;

// Structure stockée :
// {
//   [itemKey]: {
//     up: number,
//     down: number,
//     voters: { [profileId]: 'up' | 'down' },
//     proposals: [{ profileId, text, date, originalMg, contextEn, contextFr }],
//     status: 'pending' | 'accepted' | 'flagged',
//     originalMg: string,
//     contextEn: string,
//     contextFr: string,
//   }
// }

function loadAll() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (_) {
    return {};
  }
}

function saveAll(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (_) {
    // ignore quota errors
  }
}

function ensureItem(data, itemKey) {
  if (!data[itemKey]) {
    data[itemKey] = {
      up: 0,
      down: 0,
      voters: {},
      proposals: [],
      status: 'pending',
    };
  }
  // backward-compat : voters peut avoir été un tableau, migrons en objet
  if (Array.isArray(data[itemKey].voters)) {
    const obj = {};
    data[itemKey].voters.forEach(pid => { obj[pid] = 'up'; });
    data[itemKey].voters = obj;
  }
  return data[itemKey];
}

export function getVoteData(itemKey) {
  const data = loadAll();
  const item = data[itemKey] || { up: 0, down: 0, voters: {}, proposals: [], status: 'pending' };
  const voters = item.voters || {};
  return {
    up: item.up || 0,
    down: item.down || 0,
    status: item.status || 'pending',
    proposals: item.proposals || [],
    hasVoted: (profileId) => Boolean(voters && voters[profileId]),
    voteOf: (profileId) => (voters ? voters[profileId] : null),
  };
}

export function castVote(itemKey, profileId, direction, ctx = {}) {
  if (!profileId) return false;
  if (direction !== 'up' && direction !== 'down') return false;
  const data = loadAll();
  const item = ensureItem(data, itemKey);
  if (item.voters[profileId]) return false; // déjà voté
  item.voters[profileId] = direction;
  if (direction === 'up') item.up = (item.up || 0) + 1;
  else item.down = (item.down || 0) + 1;
  if (ctx.originalMg && !item.originalMg) item.originalMg = ctx.originalMg;
  if (ctx.contextEn && !item.contextEn) item.contextEn = ctx.contextEn;
  if (ctx.contextFr && !item.contextFr) item.contextFr = ctx.contextFr;
  if (item.up >= ACCEPT_THRESHOLD && item.status !== 'flagged') {
    item.status = 'accepted';
  }
  saveAll(data);
  return true;
}

export function submitProposal(itemKey, profileId, proposalText, originalMg, contextEn, contextFr) {
  if (!profileId || !proposalText || !String(proposalText).trim()) return false;
  const data = loadAll();
  const item = ensureItem(data, itemKey);
  item.proposals.push({
    profileId,
    text: String(proposalText).trim(),
    date: new Date().toISOString(),
    originalMg: originalMg || item.originalMg || '',
    contextEn: contextEn || item.contextEn || '',
    contextFr: contextFr || item.contextFr || '',
  });
  if (originalMg && !item.originalMg) item.originalMg = originalMg;
  if (contextEn && !item.contextEn) item.contextEn = contextEn;
  if (contextFr && !item.contextFr) item.contextFr = contextFr;
  item.status = 'flagged';
  saveAll(data);
  return true;
}

export function getAllFlagged() {
  const data = loadAll();
  return Object.entries(data)
    .filter(([_, v]) => v.status === 'flagged' || (v.proposals && v.proposals.length > 0))
    .map(([k, v]) => ({ key: k, ...v }));
}

export function getAllAccepted() {
  const data = loadAll();
  return Object.entries(data)
    .filter(([_, v]) => v.status === 'accepted')
    .map(([k, v]) => ({ key: k, ...v }));
}

export function isAccepted(itemKey) {
  const data = loadAll();
  return Boolean(data[itemKey] && data[itemKey].status === 'accepted');
}

export function clearReviewData() {
  try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
}

export function stripMarker(mgString) {
  return String(mgString || '').replace(/\s*\[À VÉRIFIER\]\s*/g, '').trim();
}

export function hasMarker(mgString) {
  return String(mgString || '').includes('[À VÉRIFIER]');
}

// Générateurs de clés uniques
export function vocabKey(catId, en) { return `vocab:${catId}:${en}`; }
export function theoryKey(topicId, exampleIdx) { return `theory:${topicId}:${exampleIdx}`; }
export function exerciseKey(id) { return `exercise:${id}`; }

export const _ACCEPT_THRESHOLD = ACCEPT_THRESHOLD;
