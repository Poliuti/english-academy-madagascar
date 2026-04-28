# Genera WAV per TUTTI i testi inglesi dell'app (kokoro-onnx, voce af_sarah).
# Esegui da: Chatbot_inglese/
#   python scripts/generate_audio.py
# Output: public/audio/<md5>.wav  +  src/data/audio-map.js

import os
import re
import hashlib

try:
    from kokoro_onnx import Kokoro
    import soundfile as sf
except ImportError:
    print("ERROR: python -m pip install kokoro-onnx soundfile")
    exit(1)

VOICE    = "af_sarah"
SPEED    = 1.0
LANG     = "en-us"
EXT      = "wav"                          # kokoro output è WAV nativo
SCRIPT   = os.path.dirname(__file__)
MODEL    = os.path.join(SCRIPT, "kokoro-v0_19.onnx")
VOICES_F = os.path.join(SCRIPT, "voices.bin")
OUT_DIR  = os.path.join(SCRIPT, "..", "public", "audio")
AUDIO_URL_PREFIX = "/public/audio"   # path served by Python http.server & Vercel from project root
MAP_JS   = os.path.join(SCRIPT, "..", "src", "data", "audio-map.js")
SRC_DIR  = os.path.join(SCRIPT, "..", "src", "data")


# ─── Estrazione testi dai file JS ────────────────────────────────────────────

def extract_field(js_text, field):
    """Estrae tutti i valori di 'field: "..."' o "field: '...'" da un file JS."""
    pattern = rf'{field}\s*:\s*[\'"]([^\'"\\]+(?:\\.[^\'"\\]*)*)[\'"]'
    return re.findall(pattern, js_text)

def unescape(s):
    return s.replace("\\'", "'").replace('\\"', '"').replace('\\n', ' ')

def read_file(name):
    path = os.path.join(SRC_DIR, name)
    if not os.path.exists(path):
        return ""
    with open(path, encoding="utf-8") as f:
        return f.read()

def collect_texts():
    texts = set()

    # ── exercises.js ──────────────────────────────────────────────────────────
    ex = read_file("exercises.js")
    for t in extract_field(ex, "audio"):
        texts.add(unescape(t))

    # ── vocabulary.js ──────────────────────────────────────────────────────────
    vocab = read_file("vocabulary.js")
    for t in extract_field(vocab, "en"):
        texts.add(unescape(t))
    for t in extract_field(vocab, "example"):
        texts.add(unescape(t))

    # ── theory.js ──────────────────────────────────────────────────────────────
    theory = read_file("theory.js")
    # Estrai solo la parte inglese degli examples: { en: '...', fr: '...' }
    for block in re.finditer(r'\{\s*en\s*:\s*[\'"]([^\'"<>]+)[\'"]', theory):
        raw = block.group(1)
        # Rimuove eventuali tag HTML rimasti
        clean = re.sub(r'<[^>]+>', '', raw).strip()
        if clean:
            texts.add(unescape(clean))

    # ── dialogues.js ──────────────────────────────────────────────────────────
    dlg = read_file("dialogues.js")
    for t in extract_field(dlg, "text"):
        if t != "___":
            texts.add(unescape(t))
    for t in extract_field(dlg, "answer"):
        texts.add(unescape(t))

    # ── boky.js ───────────────────────────────────────────────────────────────
    boky = read_file("boky.js")
    # Estrai campo 'en' dalle righe tabella (contengono le frasi inglesi)
    for block in re.finditer(r'\ben\s*:\s*[\'"]([^\'"\\n<>]{3,})[\'"]', boky):
        raw = block.group(1)
        clean = re.sub(r'<[^>]+>', '', raw).strip()
        # Righe tipo "go → went" → prendi solo la parte leggibile
        for part in re.split(r'\s*[→.]\s*(?=[A-Z])', clean):
            p = part.strip()
            if len(p) >= 4 and not p.startswith('Active') and not p.startswith('Passive'):
                texts.add(unescape(p))

    # Filtra stringhe vuote o molto brevi
    return {t for t in texts if len(t.strip()) >= 2}


# ─── Generazione WAV ─────────────────────────────────────────────────────────

def text_to_id(text):
    """MD5 breve del testo normalizzato = nome file."""
    norm = text.lower().strip()
    return hashlib.md5(norm.encode("utf-8")).hexdigest()[:12]

def generate(kokoro, text, file_id):
    out_path = os.path.join(OUT_DIR, f"{file_id}.{EXT}")
    if os.path.exists(out_path):
        return True
    try:
        samples, sample_rate = kokoro.create(text, voice=VOICE, speed=SPEED, lang=LANG)
        sf.write(out_path, samples, sample_rate)
        return True
    except Exception as e:
        print(f"  [ERR] {text[:50]}: {e}")
        return False

def main():
    if not os.path.exists(MODEL) or not os.path.exists(VOICES_F):
        print("ERROR: model files missing in scripts/")
        print("  kokoro-v0_19.onnx  and  voices.bin")
        exit(1)

    os.makedirs(OUT_DIR, exist_ok=True)

    print(f"Caricamento modello kokoro...")
    kokoro = Kokoro(MODEL, VOICES_F)

    texts = collect_texts()
    print(f"Testi trovati: {len(texts)}")
    print(f"Voce: {VOICE}  speed: {SPEED}\n")

    text_map = {t: text_to_id(t) for t in texts}

    to_generate = [(t, fid) for t, fid in text_map.items()
                   if not os.path.exists(os.path.join(OUT_DIR, f"{fid}.{EXT}"))]

    print(f"Da generare: {len(to_generate)} (gia' presenti: {len(texts) - len(to_generate)})\n")

    ok = 0
    for i, (t, fid) in enumerate(to_generate, 1):
        if generate(kokoro, t, fid):
            ok += 1
        if i % 50 == 0:
            print(f"  {i}/{len(to_generate)} ({ok} OK)")

    print(f"\nGenerati: {ok}/{len(to_generate)}")

    # Scrivi audio-map.js (testo normalizzato -> percorso)
    lines = [
        "// Auto-generato da scripts/generate_audio.py",
        f"// Chiave = testo inglese minuscolo, valore = path {EXT.upper()}",
        "export const AUDIO_MAP = {"
    ]
    for text, fid in sorted(text_map.items(), key=lambda x: x[0]):
        wav_path = os.path.join(OUT_DIR, f"{fid}.{EXT}")
        if os.path.exists(wav_path):
            # Key MUST be lowercase+trimmed to match tts.js normalize()
            key = text.lower().strip().replace("\\", "\\\\").replace('"', '\\"')
            lines.append(f'  "{key}": "{AUDIO_URL_PREFIX}/{fid}.{EXT}",')
    lines += ["};", ""]

    with open(MAP_JS, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    total_in_map = sum(1 for l in lines if l.startswith('  "'))
    print(f"audio-map.js: {total_in_map} voci scritte")


if __name__ == "__main__":
    main()
