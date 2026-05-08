"""
Mon Parcours synonym audit — round 3.
Adds acceptedAnswers for cases where two simultaneous word substitutions
are needed in the same sentence (SYNONYMS table handles only one at a time),
plus a few other gaps found in family/routine/school vocabulary exercises.
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

    # ── fam32: "father … mother" — dad/mum/mom combos (double substitution) ──
    # SYNONYMS catches single swaps (dad→father OR mum→mother),
    # but not both simultaneously in the same sentence.
    'fam32': [
        "My dad is taller than my mum.",
        "My dad is taller than my mom.",
        "My father is taller than my mum.",
        "My father is taller than my mom.",
        "My dad is taller than my mother.",   # single swap — also explicit for safety
    ],

    # ── r32: dad + "starts work" variant (SYNONYMS doesn't check alternatives) ─
    # Main answer: "My father starts working at seven and comes home at six."
    # Alternative: "My father starts work at seven and comes home at six."
    # SYNONYMS covers "My dad starts working…" (single swap → main answer),
    # but "My dad starts work…" needs a single swap → alternative, which
    # SYNONYMS doesn't reach. Add explicitly.
    'r32': [
        "My dad starts work at seven and comes home at six.",
        "My dad starts working at seven and comes home at six.",
    ],

    # ── fam30: countryside → country (rural area sense) ──────────────────────
    # "country" as "rural area" is valid but "country" also means "nation".
    # Per-exercise safer than global SYNONYMS.
    'fam30': [
        "My grandparents have lived in the country for twenty years.",
        "My grandparents have been living in the country for twenty years.",
    ],

    # ── sch22: "très bon" → "very good" / "excellent" / "great" ─────────────
    'sch22': [
        "My maths teacher is excellent.",
        "My math teacher is excellent.",
        "My maths teacher is great.",
        "My math teacher is great.",
    ],

    # ── ps09: "dad" already covered by SYNONYMS; add "at school" variant ─────
    # (father↔dad handled by SYNONYMS now; only missing "at a school" for dad)
    'ps09': [
        "My dad works in a school.",
        "My dad works at a school.",
    ],

    # ── fam13: father/kind — after SYNONYMS kind↔nice, auto-covered.
    # But "My dad is nice." needs explicit since it's a double SYNONYMS swap
    # (dad→father + nice→kind). Add explicitly.
    'fam13': [
        "My father is nice.",
        "My dad is nice.",
    ],

    # ── sch16: "kind" → "nice" — will be caught by SYNONYMS, but
    # also add "The teacher is friendly." which SYNONYMS won't catch.
    'sch16': [
        "The teacher is nice.",
        "The teacher is friendly.",
    ],
}

print('Patching exercise acceptedAnswers (v3 — Mon Parcours)...')
for ex_id, alts in PATCHES.items():
    content = add_accepted_answers(content, ex_id, alts)

with open('src/data/exercises.js', 'w', encoding='utf-8') as f:
    f.write(content)
print('\nDone.')
