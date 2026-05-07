"""
Adds acceptedAnswers to specific grammar exercises where multiple valid
English forms exist and are not covered by the SYNONYMS table in checkAnswer.

Handles:
  - going to ↔ will (future intent exercises)
  - must ↔ have to (obligation)
  - want to ↔ would like to (desire)
  - present perfect continuous ↔ simple (with since/for)
  - past simple time adverb alternatives (fronted/end position)
  - British spellings not caught by SYNONYMS (edge cases)
"""
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/exercises.js', encoding='utf-8') as f:
    content = f.read()

def add_accepted_answers(content, ex_id, new_alts):
    """
    Find exercise by id (single or double quoted) and add/extend acceptedAnswers.
    Handles both single-quote and double-quote id fields.
    """
    # Build pattern to find the exercise object
    esc = re.escape(ex_id)
    # Find exercise block: from id: 'EID' or id: "EID" to the closing }
    pat = re.compile(
        r'(\{[^{}]{0,1500}?id:\s*[\'"]' + esc + r'[\'"][^{}]{0,1500}?\})',
        re.DOTALL
    )
    matches = list(pat.finditer(content))
    if not matches:
        print(f'  NOT FOUND: {ex_id}')
        return content
    if len(matches) > 1:
        print(f'  MULTIPLE ({len(matches)}): {ex_id} - using first')

    m = matches[0]
    ex_str = m.group(1)

    # Check existing acceptedAnswers
    aa_match = re.search(r'acceptedAnswers:\s*\[([^\]]*)\]', ex_str, re.DOTALL)
    if aa_match:
        existing_raw = aa_match.group(1)
        existing = re.findall(r'["\']([^"\']*)["\']', existing_raw)
    else:
        existing = []

    # Normalize for dedup
    def norm(s): return s.lower().strip().rstrip('.')

    existing_norm = {norm(e) for e in existing}
    to_add = [a for a in new_alts if norm(a) not in existing_norm]
    if not to_add:
        print(f'  SKIP (already has alts): {ex_id}')
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
        # Insert before closing brace
        new_ex = re.sub(
            r'(\s*)\}$',
            lambda mm: mm.group(1).rstrip(' ') + f', {alts_block}' + ' }',
            ex_str.rstrip()
        )
        content = content[:m.start()] + new_ex + content[m.end():]

    print(f'  OK {ex_id}: +{len(to_add)} alt(s)')
    return content


# ─── Patch map ──────────────────────────────────────────────────────────────
# Format: { 'exercise_id': ['alt1', 'alt2', ...] }
PATCHES = {

    # ── going to → will (both express future plans/intent) ───────────────────
    'gt_2_01': [
        "She will start a new job next week.",
    ],
    'gt_2_02': [
        "Will they build a new road here?",
    ],
    # gt_2_05: "Look! That vase is going to fall." — near-future evidence,
    #          specifically a "going to" usage; skip adding "will" alt
    'gt_2_07': [
        "We will try this new restaurant tonight.",
    ],
    'gt_2_09': [
        "Will you study tonight or go out with your friends?",
    ],
    'gt_2_11': [
        "What will you do after the lesson?",
    ],

    # ── future simple → going to (French "va + inf" → both natural) ──────────
    'fut02': [
        "It is going to rain tomorrow.",
    ],

    # ── want to ↔ would like to ──────────────────────────────────────────────
    'v09': [
        "I would like to learn English.",
    ],

    # ── must ↔ have to (obligation) ──────────────────────────────────────────
    'mod_2_03': [
        "He has to finish his homework before dinner.",
        "He needs to finish his homework before dinner.",
    ],

    # ── present perfect continuous ↔ simple (with since) ─────────────────────
    'tc_2_05': [
        "She has worked here since 2015.",
    ],

    # ── past simple: end-position time adverb can be fronted ─────────────────
    'pts_2_01': [
        "Yesterday morning, I went to the market.",
    ],
    'pv_2_01': [
        "Last night, the car was stolen.",
    ],

    # ── common paraphrase gaps in translate exercises ─────────────────────────
    # "He has just left." — also "He just left." (American English)
    'pp07': [
        "He just left.",
    ],
    # "She has never seen the sea." — also simple past in American context
    'pp_2_02': [
        "She never saw the sea.",
    ],
    # "Have you ever visited Madagascar?" — also simple past
    'pp_2_04': [
        "Did you ever visit Madagascar?",
    ],
    # "Do you want tea or coffee?" → "Would you like tea or coffee?"
    'fd23': [
        "Would you like tea or coffee?",
        "Would you like some tea or coffee?",
    ],

    # ── word-order exercises: UK spelling → add American variant ─────────────
    # These are covered by SYNONYMS in checkAnswer, but adding explicit
    # acceptedAnswers provides cleaner feedback display.
    # (skipped — SYNONYMS handles these silently)

    # ── futureSimple: also accept "going to" for French "aller + inf" ─────────
    'fts_2_04': [
        "I am going to call you this evening.",
    ],
    'fts_2_03': [
        "They are probably not going to arrive on time.",
    ],
}

print('Patching exercise acceptedAnswers...')
for ex_id, alts in PATCHES.items():
    content = add_accepted_answers(content, ex_id, alts)

# Verify JS syntax by checking brace balance
errors = 0
for m in re.finditer(r'\{', content):
    pass  # quick sanity - just write and let node check

with open('src/data/exercises.js', 'w', encoding='utf-8') as f:
    f.write(content)
print('\nDone. Run node to verify syntax.')
