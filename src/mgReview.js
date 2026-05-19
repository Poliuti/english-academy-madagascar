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

// ─── Couche d'override des traductions (remplacement instantané) ─────────────
const STORAGE_KEY_OVERRIDES = 'ea_mg_overrides';
// structure : { [itemKey]: { mg, en, fr, originalMg, source, acceptedAt } }
//   source : 'proposal' | 'manual' | 'bulk' | 'import'

function loadOverrides() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY_OVERRIDES) || '{}'); }
  catch (_) { return {}; }
}

function saveOverrides(o) {
  try { localStorage.setItem(STORAGE_KEY_OVERRIDES, JSON.stringify(o)); }
  catch (_) { /* ignore quota errors */ }
}

export function getOverride(itemKey) {
  const o = loadOverrides();
  return o[itemKey] ? o[itemKey].mg : null;
}

export function setOverride(itemKey, mgText, ctx = {}, source = 'manual') {
  if (!itemKey || !mgText || !String(mgText).trim()) return false;
  const o = loadOverrides();
  const prev = o[itemKey] || {};
  o[itemKey] = {
    mg: String(mgText).trim(),
    en: ctx.en || prev.en || '',
    fr: ctx.fr || prev.fr || '',
    originalMg: ctx.originalMg || prev.originalMg || '',
    source,
    acceptedAt: new Date().toISOString(),
  };
  saveOverrides(o);
  return true;
}

export function removeOverride(itemKey) {
  const o = loadOverrides();
  if (o[itemKey]) { delete o[itemKey]; saveOverrides(o); return true; }
  return false;
}

export function getOverridesMap() { return loadOverrides(); }

export function getAllOverrides() {
  const o = loadOverrides();
  return Object.entries(o).map(([key, v]) => ({ key, ...v }));
}

// Helper central : retourne l'override s'il existe, sinon la chaîne nettoyée du marqueur.
export function resolveMg(itemKey, rawMg) {
  const ov = itemKey ? getOverride(itemKey) : null;
  if (ov) return ov;
  return stripMarker(rawMg);
}

// Accepte une proposition précise d'un item → devient un override
export function acceptProposal(itemKey, proposalIndex = -1) {
  const data = loadAll();
  const item = data[itemKey];
  if (!item || !item.proposals || item.proposals.length === 0) return false;
  const idx = proposalIndex < 0 ? item.proposals.length - 1 : proposalIndex;
  const p = item.proposals[idx];
  if (!p) return false;
  setOverride(itemKey, p.text, { en: p.contextEn, fr: p.contextFr, originalMg: p.originalMg }, 'proposal');
  item.status = 'accepted';
  saveAll(data);
  return true;
}

// Accepte TOUTES les propositions (la dernière de chaque item) d'un coup
export function acceptAllProposals() {
  const data = loadAll();
  let count = 0;
  for (const [key, item] of Object.entries(data)) {
    if (item.proposals && item.proposals.length > 0) {
      const p = item.proposals[item.proposals.length - 1];
      setOverride(key, p.text, { en: p.contextEn, fr: p.contextFr, originalMg: p.originalMg }, 'bulk');
      item.status = 'accepted';
      count++;
    }
  }
  saveAll(data);
  return count;
}

// Marque un item comme accepté sans créer d'override (utilitaire interne exposé)
export function markAccepted(itemKey) {
  if (!itemKey) return false;
  const data = loadAll();
  const item = ensureItem(data, itemKey);
  item.status = 'accepted';
  saveAll(data);
  return true;
}

// Supprime les propositions d'un item (bouton « Ignorer »)
export function dismissProposals(itemKey) {
  const data = loadAll();
  const item = data[itemKey];
  if (!item) return false;
  item.proposals = [];
  if (item.status === 'flagged') item.status = 'pending';
  saveAll(data);
  return true;
}

export function clearAllOverrides() {
  try { localStorage.removeItem(STORAGE_KEY_OVERRIDES); } catch (_) {}
}

export const _ACCEPT_THRESHOLD = ACCEPT_THRESHOLD;
