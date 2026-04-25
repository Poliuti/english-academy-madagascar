# Genera MP3 per TUTTI i testi inglesi dell'app (edge-tts, en-GB-SoniaNeural).
# Esegui da: Chatbot_inglese/
#   python scripts/generate_audio.py
# Output: public/audio/<md5>.mp3  +  src/data/audio-map.js

import asyncio
import os
import re
import json
import hashlib

try:
    import edge_tts
except ImportError:
    print("ERROR: pip install edge-tts")
    exit(1)

VOICE   = "en-GB-SoniaNeural"
OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "audio")
MAP_JS  = os.path.join(os.path.dirname(__file__), "..", "src", "data", "audio-map.js")
SRC_DIR = os.path.join(os.path.dirname(__file__), "..", "src", "data")


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

    # Filtra stringhe vuote o molto brevi
    return {t for t in texts if len(t.strip()) >= 2}


# ─── Generazione MP3 ──────────────────────────────────────────────────────────

def text_to_id(text):
    """MD5 breve del testo normalizzato = nome file."""
    norm = text.lower().strip()
    return hashlib.md5(norm.encode("utf-8")).hexdigest()[:12]

async def generate(text, file_id):
    out_path = os.path.join(OUT_DIR, f"{file_id}.mp3")
    if os.path.exists(out_path):
        return True, file_id
    try:
        communicate = edge_tts.Communicate(text, VOICE, rate="-5%")
        await communicate.save(out_path)
        return True, file_id
    except Exception as e:
        print(f"  [ERR] {text[:50]}: {e}")
        return False, file_id

async def main():
    os.makedirs(OUT_DIR, exist_ok=True)

    texts = collect_texts()
    print(f"Testi trovati: {len(texts)}")
    print(f"Voce: {VOICE}\n")

    # Mappa testo normalizzato -> id
    text_map = {t: text_to_id(t) for t in texts}

    # Genera solo i file mancanti
    to_generate = [(t, fid) for t, fid in text_map.items()
                   if not os.path.exists(os.path.join(OUT_DIR, f"{fid}.mp3"))]

    print(f"Da generare: {len(to_generate)} (gia' presenti: {len(texts) - len(to_generate)})\n")

    if to_generate:
        # Batch da 10 per non sovraccaricare il servizio
        BATCH = 10
        ok = 0
        for i in range(0, len(to_generate), BATCH):
            batch = to_generate[i:i+BATCH]
            results = await asyncio.gather(*[generate(t, fid) for t, fid in batch])
            ok += sum(1 for r, _ in results if r)
            print(f"  Batch {i//BATCH + 1}: {sum(1 for r,_ in results if r)}/{len(batch)} OK")

        print(f"\nGenerati: {ok}/{len(to_generate)}")

    # Scrivi audio-map.js (testo normalizzato -> percorso)
    lines = [
        "// Auto-generato da scripts/generate_audio.py",
        "// Chiave = testo inglese minuscolo, valore = path MP3",
        "export const AUDIO_MAP = {"
    ]
    for text, fid in sorted(text_map.items(), key=lambda x: x[0]):
        mp3_path = os.path.join(OUT_DIR, f"{fid}.mp3")
        if os.path.exists(mp3_path):
            escaped = text.replace("\\", "\\\\").replace('"', '\\"')
            lines.append(f'  "{escaped}": "/audio/{fid}.mp3",')
    lines += ["};", ""]

    with open(MAP_JS, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    total_in_map = sum(1 for l in lines if l.startswith('  "'))
    print(f"audio-map.js: {total_in_map} voci scritte")


if __name__ == "__main__":
    asyncio.run(main())
