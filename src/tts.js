// Web Speech API wrapper for Text-to-Speech
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
  // Prefer native English voices
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

export function speak(text, { rate = 0.85, pitch = 1, onEnd = null } = {}) {
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

export function stop() {
  if ('speechSynthesis' in window) speechSynthesis.cancel();
}

export function isSupported() {
  return 'speechSynthesis' in window;
}

export function getVoiceInfo() {
  const v = getBestVoice();
  return v ? `${v.name} (${v.lang})` : 'Voix par défaut';
}
