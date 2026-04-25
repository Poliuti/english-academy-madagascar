// TTS: tries pre-generated MP3 first (edge-tts quality), falls back to Web Speech API.

let audioMap = null;

async function loadAudioMap() {
  if (audioMap !== null) return;
  try {
    const { AUDIO_MAP } = await import('./data/audio-map.js');
    audioMap = AUDIO_MAP;
  } catch {
    audioMap = {};
  }
}

loadAudioMap();

// ─── MP3 playback ────────────────────────────────────────────────────────────
let currentAudio = null;

function playMP3(path, { onEnd = null } = {}) {
  if (currentAudio) { currentAudio.pause(); currentAudio = null; }
  const audio = new Audio(path);
  currentAudio = audio;
  if (onEnd) audio.addEventListener('ended', onEnd);
  audio.play().catch(() => {
    // MP3 failed, fall back to SpeechSynthesis
    currentAudio = null;
    speakFallback(path, { onEnd });
  });
}

// ─── Web Speech API fallback ──────────────────────────────────────────────────
let voices = [];
let ready = false;

function loadVoices() {
  voices = speechSynthesis.getVoices();
  if (voices.length > 0) ready = true;
}

if ('speechSynthesis' in window) {
  loadVoices();
  speechSynthesis.addEventListener('voiceschanged', loadVoices);
}

function getBestVoice() {
  const preferred = [
    v => v.lang === 'en-GB' && v.localService,
    v => v.lang === 'en-US' && v.localService,
    v => v.lang.startsWith('en-') && v.localService,
    v => v.lang === 'en-GB',
    v => v.lang === 'en-US',
    v => v.lang.startsWith('en-'),
  ];
  for (const test of preferred) {
    const found = voices.find(test);
    if (found) return found;
  }
  return voices[0] || null;
}

function speakFallback(text, { rate = 0.85, pitch = 1, onEnd = null } = {}) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-GB';
  utter.rate = rate;
  utter.pitch = pitch;
  const voice = getBestVoice();
  if (voice) utter.voice = voice;
  if (onEnd) utter.onend = onEnd;
  speechSynthesis.speak(utter);
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Speak text: checks audio map for pre-generated MP3 by id, then tries text
 * match; falls back to Web Speech API.
 * @param {string} text
 * @param {{ id?: string, rate?: number, onEnd?: Function }} options
 */
export function speak(text, { id = null, rate = 0.85, onEnd = null } = {}) {
  // Try MP3 by explicit id first
  if (id && audioMap && audioMap[id]) {
    playMP3(audioMap[id], { onEnd });
    return;
  }

  // Try to find MP3 by matching text content
  if (audioMap) {
    const textKey = Object.keys(audioMap).find(k => {
      const mapText = k; // keys are ids, not texts — skip text-match for now
      return false;
    });
    // If we had a text→path map we'd use it here; for now rely on id param
  }

  // Always fall back to Web Speech API for dynamic TTS (vocab cards, theory, etc.)
  speakFallback(text, { rate, onEnd });
}

export function stop() {
  if (currentAudio) { currentAudio.pause(); currentAudio = null; }
  if ('speechSynthesis' in window) speechSynthesis.cancel();
}

export function isSupported() {
  return 'speechSynthesis' in window || (audioMap && Object.keys(audioMap).length > 0);
}

export function getVoiceInfo() {
  const mp3Count = audioMap ? Object.keys(audioMap).length : 0;
  if (mp3Count > 0) return `MP3 pré-générés (${mp3Count}) + synthèse vocale`;
  const v = getBestVoice();
  return v ? `${v.name} (${v.lang})` : 'Voix par défaut';
}
