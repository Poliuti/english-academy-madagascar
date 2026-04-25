# Genera file MP3 ad alta qualita con edge-tts (voce en-GB-SoniaNeural).
# Esegui da: Chatbot_inglese/
#   python scripts/generate_audio.py
# Output: public/audio/<id>.mp3  +  src/data/audio-map.js

import asyncio
import os
import re
import json

try:
    import edge_tts
except ImportError:
    print("ERROR: edge-tts non installato. Esegui: pip install edge-tts")
    exit(1)

VOICE = "en-GB-SoniaNeural"
OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "audio")
MAP_FILE = os.path.join(os.path.dirname(__file__), "..", "src", "data", "audio-map.js")

# ─── Tutti i testi da convertire ─────────────────────────────────────────────
AUDIO_TEXTS = {
    # Routine
    "r07":    "I take a shower every morning.",
    "s08":    "We have five lessons every day.",
    "f07":    "I live with my mother and my father.",
    "b08":    "He is tall and has short black hair.",
    "t07":    "The train arrives at quarter past ten.",
    "v08":    "They play football and swim every week.",
    "ta07":   "I have already finished my homework.",
    "ps08":   "My brother doesn't study very much.",
    "pc08":   "She is not sleeping. She is doing her homework.",
    "fut08":  "I think she will pass her exam.",
    # Food
    "fd07":   "I would like some fish and vegetables.",
    # Colors
    "c06":    "I like the yellow and white flowers.",
    # Numbers
    "n06":    "My phone number is zero seven eight.",
    # Adjectives
    "a06":    "My little brother is very funny and clever.",
    # Pronouns
    "pr08":   "She gives him a new pen.",
    # Assessment
    "as01":   "I am a student.",
    "as02":   "I have a brother.",
    # Theory examples
    "th_ps1": "I go to school every day.",
    "th_ps2": "She works at a hospital.",
    "th_ps3": "They eat rice every day.",
    "th_pc1": "I am reading a book.",
    "th_pc2": "She is cooking dinner.",
    "th_past1": "I walked to school yesterday.",
    "th_fut1":  "I will help you.",
    "th_can1":  "I can swim.",
    "th_must1": "You must study for the test.",
    "th_should1": "You should drink more water.",
    # Vocabulary samples (frequently listened)
    "vocab_hello": "Hello, my name is Anna.",
    "vocab_bye":   "Goodbye! See you soon!",
    "vocab_thanks": "Thank you very much!",
    "vocab_sorry":  "I am sorry, I don't understand.",
    "vocab_please": "Can you repeat, please?",
    # Dialogue sentences
    "dlg_g1": "Hello! My name is Anna. What's your name?",
    "dlg_g2": "Nice to meet you. Where are you from?",
    "dlg_m1": "Good morning! Can I help you?",
    "dlg_m2": "That's two thousand Ariary.",
    "dlg_d1": "Excuse me, where is the post office?",
    "dlg_r1": "Good evening. Are you ready to order?",
    "dlg_r2": "Here is your meal. Enjoy!",
    "dlg_doc1": "Good morning. What's the problem?",
    "dlg_doc2": "Take this medicine twice a day.",
    "dlg_ph1": "Hello, this is John speaking. Can I speak to Mary?",
    "dlg_int1": "Tell me about yourself.",
    "dlg_int2": "Why do you want this job?",
}


async def generate(text_id, text):
    out_path = os.path.join(OUT_DIR, f"{text_id}.mp3")
    if os.path.exists(out_path):
        print(f"  [skip] {text_id}.mp3 già presente")
        return True
    try:
        communicate = edge_tts.Communicate(text, VOICE, rate="-5%")
        await communicate.save(out_path)
        print(f"  [OK]   {text_id}.mp3")
        return True
    except Exception as e:
        print(f"  [ERR]  {text_id}: {e}")
        return False


async def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    print(f"Generazione audio con {VOICE}...\n")

    results = await asyncio.gather(*[
        generate(tid, txt) for tid, txt in AUDIO_TEXTS.items()
    ])

    generated = [tid for tid, ok in zip(AUDIO_TEXTS.keys(), results) if ok]

    # Scrivi audio-map.js
    lines = ["// Auto-generato da scripts/generate_audio.py — NON modificare manualmente",
             "export const AUDIO_MAP = {"]
    for tid in generated:
        lines.append(f'  "{tid}": "/audio/{tid}.mp3",')
    lines.append("};\n")
    lines.append("export function getAudioPath(id) {")
    lines.append("  return AUDIO_MAP[id] || null;")
    lines.append("}")

    with open(MAP_FILE, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    print(f"\n✅  {len(generated)}/{len(AUDIO_TEXTS)} file generati → public/audio/")
    print(f"✅  Mappa esportata → src/data/audio-map.js")


if __name__ == "__main__":
    asyncio.run(main())
