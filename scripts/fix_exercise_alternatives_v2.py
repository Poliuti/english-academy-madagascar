"""
Adds acceptedAnswers to grammar exercises identified in the systematic
synonym/equivalence audit. Covers:
  - Present Perfect Simple ↔ Continuous (depuis/since/for contexts)
  - Future Perfect Simple ↔ Continuous
  - Reported speech: "that" optional
  - Phrasal verb equivalents (look after/take care of, turn off/switch off, give up/stop)
  - Passive voice alternatives (grown/cultivated, will be built/going to be built)
  - Past Continuous: sleeping ↔ asleep
  - Error-correct: learnt/learned, backache alternatives
  - TV/television (covered globally by SYNONYMS but explicit here too)
  - Future Continuous: sleeping ↔ asleep
  - find out ↔ discover, finished ↔ completed
  - Time adverb variants (fc_2_01)
"""
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/exercises.js', encoding='utf-8') as f:
    content = f.read()


def add_accepted_answers(content, ex_id, new_alts):
    esc = re.escape(ex_id)
    pat = re.compile(
        r'(\{[^{}]{0,2000}?id:\s*[\'"]' + esc + r'[\'"][^{}]{0,2000}?\})',
        re.DOTALL
    )
    matches = list(pat.finditer(content))
    if not matches:
        print(f'  NOT FOUND: {ex_id}')
        return content
    if len(matches) > 1:
        print(f'  MULTIPLE ({len(matches)}): {ex_id} — using first')

    m = matches[0]
    ex_str = m.group(1)

    aa_match = re.search(r'acceptedAnswers:\s*\[([^\]]*)\]', ex_str, re.DOTALL)
    if aa_match:
        existing_raw = aa_match.group(1)
        existing = re.findall(r'["\']([^"\']*)["\']', existing_raw)
    else:
        existing = []

    def norm(s): return s.lower().strip().rstrip('.')
    existing_norm = {norm(e) for e in existing}
    to_add = [a for a in new_alts if norm(a) not in existing_norm]
    if not to_add:
        print(f'  SKIP (already covered): {ex_id}')
        return content

    all_alts = existing + to_add

    def js_str(s):
        if "'" in s:
            return '"' + s.replace('\\', '\\\\').replace('"', '\\"') + '"'
        return "'" + s + "'"

    alts_js = ', '.join(js_str(a) for a in all_alts)
    alts_block = f'acceptedAnswers: [{alts_js}]'

    if aa_match:
        start = m.start() + aa_match.start()
        end   = m.start() + aa_match.end()
        content = content[:start] + alts_block + content[end:]
    else:
        new_ex = re.sub(
            r'(\s*)\}$',
            lambda mm: mm.group(1).rstrip(' ') + f', {alts_block}' + ' }',
            ex_str.rstrip()
        )
        content = content[:m.start()] + new_ex + content[m.end():]

    print(f'  OK {ex_id}: +{len(to_add)} alt(s)')
    return content


PATCHES = {

    # ── Present Perfect Simple ↔ Continuous (depuis/since/for) ───────────────
    'pp_2_05': [
        "We have been living here for two years.",
    ],
    'tm_2_03': [
        "She has been living here since 2010.",
    ],

    # ── Future Perfect Simple ↔ Continuous ───────────────────────────────────
    'fp_2_05': [
        "By December, he will have been working here for ten years.",
    ],

    # ── Reported speech: "that" optional ─────────────────────────────────────
    'rs_2_03': [
        "He said that he could swim.",
    ],

    # ── Phrasal verb equivalents ──────────────────────────────────────────────
    'phv_2_01': [
        "She stopped smoking last year.",
        "She quit smoking last year.",
    ],
    'phv_2_03': [
        "Can you take care of the dog?",
        "Could you look after the dog?",
        "Could you take care of the dog?",
    ],
    'phv_2_04': [
        "Switch off the light when you leave.",
        "Turn the light off when you leave.",
        "Switch the light off when you leave.",
    ],
    'phv_2_05': [
        "I discovered the truth.",
        "I learned the truth.",
    ],

    # ── Verb synonyms (stop/give up) ─────────────────────────────────────────
    'vs_2_02': [
        "He gave up smoking two years ago.",
        "He quit smoking two years ago.",
    ],

    # ── Passive voice alternatives ────────────────────────────────────────────
    'pv_2_02': [
        "Rice is cultivated in many countries.",
        "Rice is produced in many countries.",
    ],
    'pv_2_04': [
        "The school is going to be built next year.",
    ],

    # ── Past Continuous: sleeping ↔ asleep ────────────────────────────────────
    'pc_2_03': [
        "She was asleep when I arrived.",
    ],

    # ── Error-correct: learnt/learned ────────────────────────────────────────
    # (also covered globally by SYNONYMS, but explicit acceptedAnswers = cleaner feedback)
    'sch33': [
        "I have learned many things at school.",
        "I have learned many things at school",
    ],

    # ── Error-correct: back pain alternatives ────────────────────────────────
    'bod33': [
        "My back hurts.",
        "I have a backache.",
        "I have backache.",
    ],

    # ── TV ↔ television (also in SYNONYMS globally) ──────────────────────────
    'tc_2_01': [
        "He is watching television right now.",
    ],

    # ── Future Continuous: sleeping ↔ asleep ─────────────────────────────────
    'fc_2_04': [
        "She will be asleep when you arrive.",
    ],

    # ── Future Continuous: time adverb order ─────────────────────────────────
    'fc_2_01': [
        "Tomorrow at this time, I will be flying to Paris.",
        "Tomorrow at this time I will be flying to Paris.",
    ],

    # ── Past Perfect: finished ↔ completed ───────────────────────────────────
    'ppt_2_03': [
        "They had completed their work before the meeting.",
    ],

    # ── Future Perfect: found ↔ discovered ───────────────────────────────────
    'fp_2_03': [
        "By 2030, scientists will have discovered new cures.",
        "By 2030, scientists will have found new remedies.",
    ],

    # ── Future Perfect: finished ↔ completed ─────────────────────────────────
    'fp_2_01': [
        "By the end of the month, I will have completed the project.",
    ],
}

print('Patching exercise acceptedAnswers (v2)...')
for ex_id, alts in PATCHES.items():
    content = add_accepted_answers(content, ex_id, alts)

with open('src/data/exercises.js', 'w', encoding='utf-8') as f:
    f.write(content)
print('\nDone.')
