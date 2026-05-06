import re

with open('src/data/boky.js', 'r', encoding='utf-8') as f:
    content = f.read()

# The bokyChapters array ends at the FIRST '\n];' after the opening '['
chapters_start_str = 'export const bokyChapters = ['
chapters_start = content.index(chapters_start_str)

# Find array end: first '\n];' after chapters_start
array_end = content.index('\n];', chapters_start)

# header = everything up to and including 'export const bokyChapters = ['
header = content[:chapters_start + len(chapters_start_str)]

# chapters_inner = everything between '[' and '];'
chapters_inner = content[chapters_start + len(chapters_start_str):array_end]

# footer = everything from export const bokyIndex onwards
# (skip _CHAPTER_ORDER + sort block)
footer_idx = content.index('\nexport const bokyIndex', array_end)
footer = content[footer_idx + 1:]  # skip the leading \n

# Split inner into chapter chunks by '  {\n    id: \''
pattern = re.compile(r"  \{\n    id: '")
positions = [m.start() for m in pattern.finditer(chapters_inner)]
positions.append(len(chapters_inner))

chapters = {}
for idx, pos in enumerate(positions[:-1]):
    raw = chapters_inner[pos:positions[idx+1]]
    m = re.match(r"  \{\n    id: '(\w+)'", raw)
    if not m:
        print(f'WARNING no id at pos {pos}')
        continue
    cid = m.group(1)
    # Strip trailing whitespace + any orphaned comment block (// === lines)
    # Keep only up to and including the last line that is '  },'
    lines = raw.split('\n')
    last_close = -1
    for j, line in enumerate(lines):
        stripped = line.rstrip()
        if stripped == '  },' or stripped == '  }':
            last_close = j
    if last_close < 0:
        print(f'WARNING: no closing brace for {cid}')
        chapters[cid] = raw
    else:
        chapters[cid] = '\n'.join(lines[:last_close+1])

print(f'Chapters extracted: {len(chapters)}, ids: {sorted(chapters.keys())}')

new_order = [
    # Bloc 1: Fondations A1
    'pronouns', 'toBe', 'articles', 'plurals', 'therebeis', 'questions', 'interrogative',
    # Bloc 2: Décrire & Quantifier A1-A2
    'adjectives', 'possessives', 'prepositions', 'countableUncountable', 'someAny', 'imperatives',
    # Bloc 3: Actions dans le Temps A2
    'adverbs', 'comparatives', 'modals', 'presentSimple', 'presentContinuous',
    'goingTo', 'futureSimple', 'verbsOfState',
    # Bloc 4: Le Passé A2-B1
    'irregularVerbs', 'pastSimple', 'relativeClauses', 'connectors',
    # Bloc 5: Intermédiaire B1
    'pastContinuous', 'usedTo', 'presentPerfect', 'sinceFor', 'timeMarkers', 'tenseChooser',
    # Bloc 6: Structures Avancées B1-B2
    'pastPerfect', 'futureContinuous', 'passiveVoice', 'conditionals',
    'reportedSpeech', 'phrasalVerbs', 'futurePerfect',
]

missing = [k for k in new_order if k not in chapters]
extra   = [k for k in chapters if k not in new_order]
if missing: print('MISSING:', missing)
if extra:   print('EXTRA:', extra)
assert not missing and not extra, 'Order mismatch!'

# Build new chapters inner string
parts = []
for cid in new_order:
    chunk = chapters[cid]
    # Ensure ends with ','
    if not chunk.rstrip().endswith(','):
        chunk = chunk.rstrip() + ','
    parts.append(chunk)

new_inner = '\n' + '\n'.join(parts) + '\n'

new_content = (
    header
    + new_inner
    + '];\n\n'
    + footer
)

with open('src/data/boky.js', 'w', encoding='utf-8') as f:
    f.write(new_content)
print('Done. Chars:', len(new_content))
