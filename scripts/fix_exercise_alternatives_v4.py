"""
Synonym/equivalence audit — round 4.
Covers:
  - must ↔ have to (obligation contexts)
  - although ↔ even though ↔ though
  - because ↔ since/as (causal)
  - however → but
"""
import re, sys
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

    # ── must ↔ have to (obligation) ──────────────────────────────────────────
    # "must not" is NOT interchangeable with "don't have to"
    'mod_1_14': [
        "You have to be here on time.",
    ],
    'mod_2_03': [
        "He has to finish his homework before dinner.",
    ],
    'mod_2_12': [
        "You have to carry your passport.",
    ],
    'mod_3_06': [
        "You have to wear a seatbelt.",
    ],
    'mod_3_07': [
        "He has to leave now.",
    ],

    # ── although ↔ even though ↔ though ─────────────────────────────────────
    'con_1_14': [
        "Even though it was raining we went out.",
        "Though it was raining we went out.",
    ],
    'con_2_03': [
        "Even though he is poor, he is generous.",
        "Though he is poor, he is generous.",
    ],
    'con_2_13': [
        "Even though she was tired she worked well.",
        "Though she was tired she worked well.",
    ],
    'con_3_08': [
        "Even though the weather was bad, we went outside.",
        "Though the weather was bad, we went outside.",
    ],

    # ── because ↔ since / as (causal) ───────────────────────────────────────
    # Note: "since" here = causal, not temporal
    'con_2_02': [
        "She failed the exam since she had not studied.",
        "She failed the exam as she had not studied.",
        "She failed the exam because she hadn't studied.",
        "She failed the exam since she hadn't studied.",
        "She failed the exam as she hadn't studied.",
    ],

    # ── however ↔ but ───────────────────────────────────────────────────────
    # Normalize strips ; and , so "however" vs "but" still differ after stripping
    'con_2_05': [
        "He speaks English but he makes many mistakes.",
        "He speaks English, but he makes many mistakes.",
        "He speaks English. However, he makes many mistakes.",
        "He speaks English. However he makes many mistakes.",
    ],
}

print('Patching exercise acceptedAnswers (v4 — equivalence audit)...')
for ex_id, alts in PATCHES.items():
    content = add_accepted_answers(content, ex_id, alts)

with open('src/data/exercises.js', 'w', encoding='utf-8') as f:
    f.write(content)
print('\nDone.')
