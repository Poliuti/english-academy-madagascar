// TTS module: uses pre-generated kokoro-onnx WAVs (af_sarah) when available.
// Lookup key = normalized text (lowercase, trimmed).
// Falls back to Web Speech API only if no MP3 exists for that text.

let audioMap = null;
let mapLoading = null;

function loadMap() {
  if (audioMap !== null) return Promise.resolve();
  if (mapLoading) return mapLoading;
  mapLoading = import('./data/audio-map.js')
    .then(m => { audioMap = m.AUDIO_MAP || {}; })
    .catch(() => { audioMap = {}; });
  return mapLoading;
}

// Pre-load map as soon as module is imported
loadMap();

// ─── normalize ────────────────────────────────────────────────────────────────
function normalize(text) {
  return (text || '').toLowerCase().trim();
}

// ─── MP3 player ───────────────────────────────────────────────────────────────
let currentAudio = null;

function playMP3(path, text, onEnd, onError) {
  if (currentAudio) { currentAudio.pause(); currentAudio.src = ''; currentAudio = null; }
  const audio = new Audio(path);
  currentAudio = audio;
  if (onEnd) audio.addEventListener('ended', onEnd, { once: true });
  if (onError) audio.addEventListener('error', onError, { once: true });
  audio.play().catch(() => {
    // WAV load/play failed → fall back to Web Speech API
    currentAudio = null;
    speakFallback(text, onEnd);
  });
}

// ─── Web Speech API fallback ──────────────────────────────────────────────────
let voices = [];

function loadVoices() { voices = speechSynthesis.getVoices(); }
if ('speechSynthesis' in window) {
  loadVoices();
  speechSynthesis.addEventListener('voiceschanged', loadVoices);
}

function bestVoice() {
  const tests = [
    v => v.lang === 'en-GB' && v.localService,
    v => v.lang === 'en-US' && v.localService,
    v => v.lang.startsWith('en-') && v.localService,
    v => v.lang === 'en-GB',
    v => v.lang === 'en-US',
    v => v.lang.startsWith('en-'),
  ];
  for (const t of tests) { const v = voices.find(t); if (v) return v; }
  return voices[0] || null;
}

function speakFallback(text, onEnd) {
  if (!('speechSynthesis' in window)) { if (onEnd) onEnd(); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-GB';
  u.rate = 0.85;
  u.pitch = 1;
  const v = bestVoice();
  if (v) u.voice = v;
  if (onEnd) u.onend = onEnd;
  speechSynthesis.speak(u);
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Speak English text.
 * Uses pre-generated MP3 (edge-tts en-GB-SoniaNeural) when available,
 * falls back to Web Speech API.
 *
 * @param {string} text  - English text to speak
 * @param {{ onEnd?: Function }} opts
 */
export function speak(text, { onEnd = null, onError = null } = {}) {
  stop(); // ensure only one audio at a time across WAV + Web Speech API
  const key = normalize(text);

  loadMap().then(() => {
    const path = audioMap[key];
    if (path) {
      playMP3(path, text, onEnd, onError);
    } else {
      speakFallback(text, onEnd);
    }
  });
}

/** Returns true if a WAV or Web Speech utterance is currently active */
export function isPlaying() {
  return !!(currentAudio && !currentAudio.paused) ||
         ('speechSynthesis' in window && speechSynthesis.speaking);
}

export function stop() {
  if (currentAudio) { currentAudio.pause(); currentAudio.src = ''; currentAudio = null; }
  if ('speechSynthesis' in window) speechSynthesis.cancel();
}

export function isSupported() {
  return true; // MP3 + Web Speech API always available in modern browsers
}
