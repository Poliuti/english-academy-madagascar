import re

with open('src/data/exercises.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find and replace the GRAMMAR_TOPICS block
start_marker = '// ─── ALL GRAMMAR TOPICS'
end_marker = '};\n\nexport function getAllExercises'

start = content.find(start_marker)
end = content.find(end_marker)
assert start >= 0, 'Start marker not found'
assert end >= 0, 'End marker not found'

new_block = (
    '// ─── ALL GRAMMAR TOPICS (for competitive mode dropdown) ──────────────────────────\n'
    '// Ordered pedagogically A1 → B2. Vocabulary-only topics (routine, family,\n'
    '// school, body, time, food, colors, numbers) are excluded — they belong to\n'
    '// the Vocabulaire competitive mode.\n'
    'export const GRAMMAR_TOPICS = {\n'
    '  // ── Bloc 1 : Fondations A1 ────────────────────────────────────────────────────────\n'
    "  pronouns:              { label: 'Les Pronoms',                  icon: '\U0001f465' },\n"
    "  toBe:                  { label: 'Le Verbe To Be',               icon: '\U0001f524' },\n"
    "  articles:              { label: 'Les Articles (a/an/the)',       icon: '\U0001f4dd' },\n"
    "  plurals:               { label: 'Les Pluriels',                 icon: '\U0001f522' },\n"
    "  therebeis:             { label: 'There is / There are',         icon: '\U0001f4cd' },\n"
    "  questions:             { label: 'Les Questions (Wh-)',          icon: '❓' },\n"
    "  interrogative:         { label: 'Formes Interrogatives',        icon: '\U0001f50d' },\n"
    '  // ── Bloc 2 : Décrire & Quantifier A1-A2 ──────────────────────────────────\n'
    "  adjectives:            { label: 'Les Adjectifs',                icon: '✨' },\n"
    "  possessives:           { label: 'Les Possessifs',               icon: '\U0001f511' },\n"
    "  prepositions:          { label: 'Les Prépositions',        icon: '\U0001f4cc' },\n"
    "  countableUncountable:  { label: 'Dénombrable & Indénombrable', icon: '⚖️' },\n"
    "  someAny:               { label: 'Some, Any & No',               icon: '\U0001f522' },\n"
    "  imperatives:           { label: \"L'Impératif\",           icon: '\U0001f4e3' },\n"
    '  // ── Bloc 3 : Actions dans le Temps A2 ───────────────────────────────────\n'
    "  adverbs:               { label: 'Les Adverbes',                 icon: '\U0001f4ca' },\n"
    "  timeAdverbs:           { label: 'Adverbes de Temps',            icon: '\U0001f4c5' },\n"
    "  comparatives:          { label: 'Comparatifs & Superlatifs',    icon: '\U0001f4c8' },\n"
    "  modals:                { label: 'Les Modaux (can/must/should)',  icon: '\U0001f3af' },\n"
    "  verbs:                 { label: 'Verbes Principaux',            icon: '⚡' },\n"
    "  presentSimple:         { label: 'Present Simple',               icon: '\U0001f4d6' },\n"
    "  presentContinuous:     { label: 'Present Continuous',           icon: '\U0001f504' },\n"
    "  goingTo:               { label: 'Going to',                     icon: '➡️' },\n"
    "  futureSimple:          { label: 'Future Simple (Will)',         icon: '\U0001f680' },\n"
    "  verbsOfState:          { label: \"Verbes d'État\",          icon: '\U0001f9e0' },\n"
    '  // ── Bloc 4 : Le Passé A2-B1 ────────────────────────────────────────────────\n'
    "  irregularVerbs:        { label: 'Verbes Irréguliers',      icon: '⚙️' },\n"
    "  pastSimple:            { label: 'Past Simple',                  icon: '⏮️' },\n"
    "  relativeClauses:       { label: 'Les Relatives (who/which)',    icon: '\U0001f9e9' },\n"
    "  connectors:            { label: 'Les Connecteurs',              icon: '\U0001f517' },\n"
    '  // ── Bloc 5 : Intermédiaire B1 ───────────────────────────────────────────\n'
    "  pastContinuous:        { label: 'Past Continuous',              icon: '⏪' },\n"
    "  usedTo:                { label: 'Used to',                      icon: '\U0001f4ad' },\n"
    "  presentPerfect:        { label: 'Present Perfect',              icon: '✅' },\n"
    "  sinceFor:              { label: 'Since & For',                  icon: '⏱️' },\n"
    "  timeMarkers:           { label: 'Marqueurs de Temps',           icon: '\U0001f550' },\n"
    "  tenseChooser:          { label: 'Choix des Temps',              icon: '\U0001f3b2' },\n"
    '  // ── Bloc 6 : Structures Avancées B1-B2 ────────────────────────────────\n'
    "  pastPerfect:           { label: 'Past Perfect',                 icon: '\U0001f570️' },\n"
    "  futureContinuous:      { label: 'Future Continuous',            icon: '⏩' },\n"
    "  passiveVoice:          { label: 'La Voix Passive',              icon: '\U0001f503' },\n"
    "  conditionals:          { label: 'Les Conditionnels',            icon: '\U0001f500' },\n"
    "  reportedSpeech:        { label: 'Le Discours Rapporté',    icon: '\U0001f4ac' },\n"
    "  phrasalVerbs:          { label: 'Verbes à Particule',      icon: '\U0001f527' },\n"
    "  futurePerfect:         { label: 'Future Perfect',               icon: '\U0001f3c1' },\n"
    '}'
)

content = content[:start] + new_block + ';\n\nexport function getAllExercises' + content[end + len(end_marker):]

with open('src/data/exercises.js', 'w', encoding='utf-8') as f:
    f.write(content)
print('GRAMMAR_TOPICS updated:', content.count('GRAMMAR_TOPICS'))
