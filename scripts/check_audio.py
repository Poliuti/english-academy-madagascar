#!/usr/bin/env python3
"""
check_audio.py — Verifica i mapping audio dell'app English Academy.

Confronta:
  1. audio-map.js  (chiavi → percorsi)
  2. File .wav su disco  (public/audio/)
  3. Testi inglesi nell'app (exercises, vocabulary, theory, dialogues, boky)

Uso:
  python scripts/check_audio.py           # solo verifica
  python scripts/check_audio.py --fix     # tenta di rigenerare i mapping rotti
"""

import os
import re
import sys
import hashlib
import json

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.join(SCRIPT_DIR, '..')
AUDIO_MAP_JS  = os.path.join(PROJECT_DIR, 'src', 'data', 'audio-map.js')
AUDIO_DIR     = os.path.join(PROJECT_DIR, 'public', 'audio')
SRC_DATA      = os.path.join(PROJECT_DIR, 'src', 'data')
AUDIO_URL_PREFIX = '/public/audio'
EXT           = 'wav'
MODEL_ONNX    = os.path.join(SCRIPT_DIR, 'kokoro-v0_19.onnx')
VOICES_BIN    = os.path.join(SCRIPT_DIR, 'voices.bin')
VOICE         = 'af_sarah'

FIX_MODE = '--fix' in sys.argv


# ─── Parsing ─────────────────────────────────────────────────────────────────

def parse_audio_map():
    """Legge audio-map.js → dict {key_lowercase: filename}"""
    if not os.path.exists(AUDIO_MAP_JS):
        print(f"[WARN] audio-map.js non trovato: {AUDIO_MAP_JS}")
        return {}
    with open(AUDIO_MAP_JS, encoding='utf-8') as f:
        content = f.read()
    # Match: "key": "/public/audio/xxxx.wav",
    pattern = r'"([^"]+)":\s*"/public/audio/([^"]+)"'
    return {k.lower().strip(): fname for k, fname in re.findall(pattern, content)}


def text_to_id(text):
    norm = text.lower().strip()
    return hashlib.md5(norm.encode('utf-8')).hexdigest()[:12]


# ─── Testo estratto dall'app ──────────────────────────────────────────────────

def read_src(name):
    path = os.path.join(SRC_DATA, name)
    if not os.path.exists(path):
        return ''
    with open(path, encoding='utf-8') as f:
        return f.read()


def unescape(s):
    return s.replace("\\'", "'").replace('\\"', '"').replace('\\n', ' ')


def extract_field(js, field):
    # Non-greedy match between quotes, anchored by trailing comma or closing brace
    pattern = rf"{field}\s*:\s*['\"]([^\n]+?)['\"],?\s*[,\}}]"
    return [unescape(m) for m in re.findall(pattern, js)]


def collect_app_texts():
    """Raccoglie tutti i testi inglesi referenziati nell'app."""
    texts = set()

    # exercises.js → campo audio
    for t in extract_field(read_src('exercises.js'), 'audio'):
        texts.add(t)

    # vocabulary.js → en, example
    for t in extract_field(read_src('vocabulary.js'), 'en'):
        texts.add(t)
    for t in extract_field(read_src('vocabulary.js'), 'example'):
        texts.add(t)

    # theory.js → examples.en (rimuovi HTML)
    theory = read_src('theory.js')
    for block in re.finditer(r'\{\s*en\s*:\s*[\'"]([^\'"<>]+)[\'"]', theory):
        clean = re.sub(r'<[^>]+>', '', block.group(1)).strip()
        if clean:
            texts.add(unescape(clean))

    # dialogues.js → text, answer
    dlg = read_src('dialogues.js')
    for t in extract_field(dlg, 'text'):
        if t not in ('___', ''):
            texts.add(t)
    for t in extract_field(dlg, 'answer'):
        if t:
            texts.add(t)

    # boky.js → campo en (righe tabella)
    boky = read_src('boky.js')
    for t in extract_field(boky, 'en'):
        clean = re.sub(r'<[^>]+>', '', t).strip()
        # Le righe tipo "go → went" contengono freccia → prendi solo la parte prima
        parts = [p.strip() for p in re.split(r'→|\.→', clean) if p.strip()]
        for p in parts:
            if len(p) >= 3 and not p.startswith('Active') and not p.startswith('Active'):
                texts.add(unescape(p))

    return {t for t in texts if len(t.strip()) >= 3}


# ─── Report ──────────────────────────────────────────────────────────────────

def main():
    print("=" * 60)
    print("  CHECK AUDIO MAPPINGS — English Academy Madagascar")
    print("=" * 60)

    # 1. Leggi audio-map
    audio_map = parse_audio_map()
    print(f"\n[MAP] Chiavi in audio-map.js        : {len(audio_map)}")

    # 2. File su disco
    if not os.path.exists(AUDIO_DIR):
        print(f"[ERR] Cartella audio non trovata: {AUDIO_DIR}")
        disk_files = set()
    else:
        disk_files = set(os.listdir(AUDIO_DIR))
    print(f"[DSK] File .wav su disco             : {len(disk_files)}")

    # 3. Mapping rotti (chiave in mappa ma file mancante su disco)
    broken = [(k, fname) for k, fname in audio_map.items()
              if fname not in disk_files]

    status = "[ERR]" if broken else "[OK] "
    print(f"\n{status} Mapping rotti (file mancanti)   : {len(broken)}")
    if broken:
        for k, fname in broken[:50]:
            print(f"  '{k[:60]}' -> {fname}")
        if len(broken) > 50:
            print(f"  ... e altri {len(broken)-50}")

    # 4. Testi nell'app non in audio-map
    app_texts = collect_app_texts()
    audio_keys = set(audio_map.keys())
    not_mapped = sorted(t for t in app_texts if t.lower().strip() not in audio_keys)

    status2 = "[WARN]" if not_mapped else "[OK]  "
    print(f"\n{status2} Testi app senza audio mapping   : {len(not_mapped)}")
    if not_mapped:
        for t in not_mapped[:40]:
            print(f"  '{t[:70]}'")
        if len(not_mapped) > 40:
            print(f"  ... e altri {len(not_mapped)-40}")

    # 5. File orfani (su disco ma non in mappa)
    mapped_fnames = set(audio_map.values())
    orphans = disk_files - mapped_fnames
    print(f"\n[ORF] File orfani (disco, non in mappa): {len(orphans)}")

    # 6. Riepilogo
    print("\n" + "=" * 60)
    total_issues = len(broken) + len(not_mapped)
    if total_issues == 0:
        print("[OK] TUTTO OK -- nessun problema trovato.")
    else:
        print(f"[!!] Problemi totali: {total_issues}")
        if FIX_MODE:
            fix_missing(broken, not_mapped, audio_map)
        else:
            print("     Esegui con --fix per tentare la rigenerazione automatica.")
    print("=" * 60)


# ─── Fix (rigenerazione kokoro) ───────────────────────────────────────────────

def fix_missing(broken_map, not_mapped_texts, audio_map):
    """Tenta di rigenerare i file mancanti con kokoro-onnx."""
    try:
        from kokoro_onnx import Kokoro
        import soundfile as sf
    except ImportError:
        print("\n[FIX] kokoro-onnx non installato → pip install kokoro-onnx soundfile")
        return

    if not os.path.exists(MODEL_ONNX) or not os.path.exists(VOICES_BIN):
        print(f"\n[FIX] Model files mancanti in scripts/:")
        print(f"       {MODEL_ONNX}")
        print(f"       {VOICES_BIN}")
        return

    print(f"\n[FIX] Caricamento kokoro...")
    kokoro = Kokoro(MODEL_ONNX, VOICES_BIN)
    os.makedirs(AUDIO_DIR, exist_ok=True)

    # Raccogli testi da rigenerare
    to_fix = {}

    # Mapping rotti: ricostruisci il testo dalla chiave
    for key, fname in broken_map:
        fid = fname.replace('.wav', '').replace('.mp3', '')
        to_fix[key] = (fid, fname)

    # Testi non mappati: genera nuovi file
    new_entries = {}
    for text in not_mapped_texts:
        fid = text_to_id(text)
        fname = f"{fid}.{EXT}"
        full_path = os.path.join(AUDIO_DIR, fname)
        if not os.path.exists(full_path):
            to_fix[text.lower().strip()] = (fid, fname)
        new_entries[text.lower().strip()] = fname

    print(f"[FIX] Da generare: {len(to_fix)}")
    ok = 0
    for text, (fid, fname) in to_fix.items():
        out_path = os.path.join(AUDIO_DIR, fname)
        try:
            samples, sr = kokoro.create(text, voice=VOICE, speed=1.0, lang='en-us')
            sf.write(out_path, samples, sr)
            ok += 1
            print(f"  OK  '{text[:50]}'")
        except Exception as e:
            print(f"  ERR '{text[:50]}': {e}")

    print(f"\n[FIX] Generati: {ok}/{len(to_fix)}")

    # Aggiorna audio-map.js
    if ok > 0 or new_entries:
        _rewrite_audio_map(audio_map, new_entries)


def _rewrite_audio_map(existing_map, new_entries):
    """Aggiorna audio-map.js con le nuove voci."""
    merged = dict(existing_map)  # key → fname
    for k, fname in new_entries.items():
        full_path = os.path.join(AUDIO_DIR, fname)
        if os.path.exists(full_path):
            merged[k] = fname

    lines = [
        '// Auto-generato da scripts/generate_audio.py + check_audio.py',
        f'// Chiave = testo inglese minuscolo, valore = path WAV',
        'export const AUDIO_MAP = {',
    ]
    for key in sorted(merged.keys()):
        fname = merged[key]
        full_path = os.path.join(AUDIO_DIR, fname)
        if os.path.exists(full_path):
            safe_key = key.replace('\\', '\\\\').replace('"', '\\"')
            lines.append(f'  "{safe_key}": "{AUDIO_URL_PREFIX}/{fname}",')
    lines += ['};', '']

    with open(AUDIO_MAP_JS, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))

    total = sum(1 for l in lines if l.startswith('  "'))
    print(f"[FIX] audio-map.js aggiornato: {total} voci")


if __name__ == '__main__':
    main()
