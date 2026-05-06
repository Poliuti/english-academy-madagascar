"""
Add single-word fill-blank L1 exercises for topics with 0 valid L1 exercises.
Also adds GRAMMAR_TOPICS export to exercises.js.
Strategy: insert at START of push block (not end) to avoid trailing-comma issues.
"""
import re

INPUT = 'src/data/exercises.js'

with open(INPUT, 'r', encoding='utf-8') as f:
    content = f.read()

# ─── New exercises per topic (each entry is a comma-terminated list) ─────────

NEW_EXERCISES = {

'presentContinuous': """\
  {id:'prc_sw_01',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le verbe -ing manquant.',template:'I am ___ breakfast right now.',answer:'eating',hint:'"eat" → eating.',explanation:'"I am eating breakfast."'},
  {id:'prc_sw_02',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le verbe -ing manquant.',template:'She is ___ to music.',answer:'listening',hint:'"listen" → listening.',explanation:'"She is listening to music."'},
  {id:'prc_sw_03',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le verbe -ing manquant.',template:'They are ___ football in the park.',answer:'playing',hint:'"play" → playing.',explanation:'"They are playing football."'},
  {id:'prc_sw_04',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le verbe -ing manquant.',template:'He is ___ his homework.',answer:'doing',hint:'"do" → doing.',explanation:'"He is doing his homework."'},
  {id:'prc_sw_05',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le verbe -ing manquant.',template:'She is ___ a book in the garden.',answer:'reading',hint:'"read" → reading.',explanation:'"She is reading a book."'},
  {id:'prc_sw_06',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le verbe -ing manquant.',template:'It is ___ outside. Take your umbrella!',answer:'raining',hint:'"rain" → raining.',explanation:'"It is raining."'},
  {id:'prc_sw_07',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le verbe -ing manquant.',template:'I am ___ a letter to my friend.',answer:'writing',hint:'"write" → writing.',explanation:'"I am writing a letter."'},
  {id:'prc_sw_08',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le verbe -ing manquant.',template:'The dog is ___ in the sun.',answer:'sleeping',hint:'"sleep" → sleeping.',explanation:'"The dog is sleeping."'},
  {id:'prc_sw_09',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le verbe -ing manquant.',template:'We are ___ English at school.',answer:'learning',hint:'"learn" → learning.',alternatives:['studying'],explanation:'"We are learning English."'},
  {id:'prc_sw_10',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le verbe -ing manquant.',template:'She is ___ to school right now.',answer:'walking',hint:'"walk" → walking.',alternatives:['going'],explanation:'"She is walking to school."'},
""",

'therebeis': """\
  {id:'tbi_sw_01',type:'fill-blank',diffLevel:1,instruction:'Complétez avec is ou are.',template:'There ___ a cat on the mat.',answer:'is',hint:'a cat = singulier.',explanation:'"There is a cat."'},
  {id:'tbi_sw_02',type:'fill-blank',diffLevel:1,instruction:'Complétez avec is ou are.',template:'There ___ three students in the room.',answer:'are',hint:'three students = pluriel.',explanation:'"There are three students."'},
  {id:'tbi_sw_03',type:'fill-blank',diffLevel:1,instruction:'Complétez avec is ou are.',template:'There ___ a dog in the garden.',answer:'is',hint:'a dog = singulier.',explanation:'"There is a dog."'},
  {id:'tbi_sw_04',type:'fill-blank',diffLevel:1,instruction:'Complétez avec is ou are.',template:'There ___ two chairs near the table.',answer:'are',hint:'two chairs = pluriel.',explanation:'"There are two chairs."'},
  {id:'tbi_sw_05',type:'fill-blank',diffLevel:1,instruction:'Complétez avec is ou are.',template:'There ___ a school near my house.',answer:'is',hint:'a school = singulier.',explanation:'"There is a school."'},
  {id:'tbi_sw_06',type:'fill-blank',diffLevel:1,instruction:'Complétez avec is ou are.',template:'There ___ many trees in the forest.',answer:'are',hint:'many trees = pluriel.',explanation:'"There are many trees."'},
  {id:'tbi_sw_07',type:'fill-blank',diffLevel:1,instruction:'Complétez avec is ou are.',template:'There ___ a problem with the computer.',answer:'is',hint:'a problem = singulier.',explanation:'"There is a problem."'},
  {id:'tbi_sw_08',type:'fill-blank',diffLevel:1,instruction:'Complétez avec is ou are.',template:'There ___ five apples in the basket.',answer:'are',hint:'five apples = pluriel.',explanation:'"There are five apples."'},
  {id:'tbi_sw_09',type:'fill-blank',diffLevel:1,instruction:'Complétez avec is ou are.',template:'There ___ a hospital in this town.',answer:'is',hint:'a hospital = singulier.',explanation:'"There is a hospital."'},
  {id:'tbi_sw_10',type:'fill-blank',diffLevel:1,instruction:'Complétez avec is ou are.',template:'There ___ some flowers on the table.',answer:'are',hint:'some flowers = pluriel.',explanation:'"There are some flowers."'},
""",

'pastContinuous': """\
  {id:'pc_sw_01',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le verbe -ing manquant.',template:'She was ___ a book when I arrived.',answer:'reading',hint:'"read" → reading.',explanation:'"She was reading."'},
  {id:'pc_sw_02',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le verbe -ing manquant.',template:'They were ___ football in the park.',answer:'playing',hint:'"play" → playing.',explanation:'"They were playing football."'},
  {id:'pc_sw_03',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le verbe -ing manquant.',template:'He was ___ TV all evening.',answer:'watching',hint:'"watch" → watching.',explanation:'"He was watching TV."'},
  {id:'pc_sw_04',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le verbe -ing manquant.',template:'I was ___ a letter to my sister.',answer:'writing',hint:'"write" → writing.',explanation:'"I was writing a letter."'},
  {id:'pc_sw_05',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le verbe -ing manquant.',template:'It was ___ when we left the house.',answer:'raining',hint:'"rain" → raining.',explanation:'"It was raining."'},
  {id:'pc_sw_06',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le verbe -ing manquant.',template:'She was ___ to music in her room.',answer:'listening',hint:'"listen" → listening.',explanation:'"She was listening to music."'},
  {id:'pc_sw_07',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le verbe -ing manquant.',template:'We were ___ dinner at 7pm.',answer:'eating',hint:'"eat" → eating.',explanation:'"We were eating dinner."'},
  {id:'pc_sw_08',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le verbe -ing manquant.',template:'The baby was ___ peacefully.',answer:'sleeping',hint:'"sleep" → sleeping.',explanation:'"The baby was sleeping."'},
  {id:'pc_sw_09',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le verbe -ing manquant.',template:'He was ___ in the garden when it started to rain.',answer:'working',hint:'"work" → working.',explanation:'"He was working in the garden."'},
  {id:'pc_sw_10',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le verbe -ing manquant.',template:'They were ___ for the bus when I saw them.',answer:'waiting',hint:'"wait" → waiting.',explanation:'"They were waiting for the bus."'},
""",

'pastPerfect': """\
  {id:'ppt_sw_01',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon participe passé.',template:'She had already ___ before I arrived.',answer:'left',hint:'"leave" → left.',explanation:'"She had already left."'},
  {id:'ppt_sw_02',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon participe passé.',template:'They had ___ that film before.',answer:'seen',hint:'"see" → seen.',explanation:'"They had seen the film."'},
  {id:'ppt_sw_03',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon participe passé.',template:'I had already ___ by the time he called.',answer:'eaten',hint:'"eat" → eaten.',explanation:'"I had already eaten."'},
  {id:'ppt_sw_04',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon participe passé.',template:'She had never ___ sushi before.',answer:'tried',hint:'"try" → tried.',explanation:'"She had never tried sushi."'},
  {id:'ppt_sw_05',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon participe passé.',template:'They had ___ home before the storm started.',answer:'gone',hint:'"go" → gone.',explanation:'"They had gone home."'},
  {id:'ppt_sw_06',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon participe passé.',template:'I had never ___ him before that day.',answer:'met',hint:'"meet" → met.',explanation:'"I had never met him."'},
  {id:'ppt_sw_07',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon participe passé.',template:'She had already ___ the letter.',answer:'read',hint:'"read" → read.',explanation:'"She had already read the letter."'},
  {id:'ppt_sw_08',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon participe passé.',template:'He had ___ his homework before dinner.',answer:'done',hint:'"do" → done.',explanation:'"He had done his homework."'},
  {id:'ppt_sw_09',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon participe passé.',template:'They had ___ together for ten years.',answer:'worked',hint:'"work" → worked.',explanation:'"They had worked together."'},
  {id:'ppt_sw_10',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon participe passé.',template:'She had ___ the door before leaving.',answer:'closed',hint:'"close" → closed.',explanation:'"She had closed the door."'},
""",

'futureContinuous': """\
  {id:'fc_sw_01',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le verbe -ing manquant.',template:'I will be ___ at 8pm tonight.',answer:'sleeping',hint:'"sleep" → sleeping.',explanation:'"I will be sleeping."'},
  {id:'fc_sw_02',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le verbe -ing manquant.',template:'She will be ___ all day tomorrow.',answer:'working',hint:'"work" → working.',explanation:'"She will be working."'},
  {id:'fc_sw_03',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le verbe -ing manquant.',template:'They will be ___ football this time tomorrow.',answer:'playing',hint:'"play" → playing.',explanation:'"They will be playing football."'},
  {id:'fc_sw_04',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le verbe -ing manquant.',template:'He will be ___ TV when you arrive.',answer:'watching',hint:'"watch" → watching.',explanation:'"He will be watching TV."'},
  {id:'fc_sw_05',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le verbe -ing manquant.',template:'I will be ___ for you at the station.',answer:'waiting',hint:'"wait" → waiting.',explanation:'"I will be waiting for you."'},
  {id:'fc_sw_06',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le verbe -ing manquant.',template:'We will be ___ English next year.',answer:'studying',hint:'"study" → studying.',alternatives:['learning'],explanation:'"We will be studying English."'},
  {id:'fc_sw_07',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le verbe -ing manquant.',template:'It will be ___ when we arrive.',answer:'raining',hint:'"rain" → raining.',explanation:'"It will be raining."'},
  {id:'fc_sw_08',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le verbe -ing manquant.',template:'She will be ___ dinner when you get home.',answer:'cooking',hint:'"cook" → cooking.',alternatives:['making'],explanation:'"She will be cooking dinner."'},
  {id:'fc_sw_09',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le verbe -ing manquant.',template:'They will be ___ their exams this time next week.',answer:'taking',hint:'"take" → taking.',explanation:'"They will be taking their exams."'},
  {id:'fc_sw_10',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le verbe -ing manquant.',template:'He will be ___ a letter when you call.',answer:'writing',hint:'"write" → writing.',explanation:'"He will be writing a letter."'},
""",

'futurePerfect': """\
  {id:'fp_sw_01',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon participe passé.',template:'By Monday, I will have ___ my homework.',answer:'finished',hint:'"finish" → finished.',explanation:'"I will have finished my homework."'},
  {id:'fp_sw_02',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon participe passé.',template:'She will have ___ by the time you arrive.',answer:'left',hint:'"leave" → left.',explanation:'"She will have left."'},
  {id:'fp_sw_03',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon participe passé.',template:'They will have ___ the book by Friday.',answer:'read',hint:'"read" → read.',explanation:'"They will have read the book."'},
  {id:'fp_sw_04',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon participe passé.',template:'He will have ___ the work by noon.',answer:'done',hint:'"do" → done.',explanation:'"He will have done the work."'},
  {id:'fp_sw_05',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon participe passé.',template:'We will have ___ dinner before the film starts.',answer:'eaten',hint:'"eat" → eaten.',explanation:'"We will have eaten dinner."'},
  {id:'fp_sw_06',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon participe passé.',template:'She will have ___ all her money by then.',answer:'spent',hint:'"spend" → spent.',explanation:'"She will have spent all her money."'},
  {id:'fp_sw_07',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon participe passé.',template:'They will have ___ home before midnight.',answer:'arrived',hint:'"arrive" → arrived.',explanation:'"They will have arrived home."'},
  {id:'fp_sw_08',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon participe passé.',template:'I will have ___ this book by tomorrow.',answer:'written',hint:'"write" → written.',explanation:'"I will have written this book."'},
  {id:'fp_sw_09',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon participe passé.',template:'He will have ___ three cups of coffee by lunchtime.',answer:'drunk',hint:'"drink" → drunk.',alternatives:['had'],explanation:'"He will have drunk three cups of coffee."'},
  {id:'fp_sw_10',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon participe passé.',template:'We will have ___ 100 lessons by the end of the year.',answer:'completed',hint:'"complete" → completed.',alternatives:['finished'],explanation:'"We will have completed 100 lessons."'},
""",

'goingTo': """\
  {id:'gt_sw_01',type:'fill-blank',diffLevel:1,instruction:'Complétez avec is, am ou are.',template:'She ___ going to cook dinner tonight.',answer:'is',hint:'She = singulier → is.',explanation:'"She is going to cook dinner."'},
  {id:'gt_sw_02',type:'fill-blank',diffLevel:1,instruction:'Complétez avec is, am ou are.',template:'They ___ going to study this weekend.',answer:'are',hint:'They = pluriel → are.',explanation:'"They are going to study."'},
  {id:'gt_sw_03',type:'fill-blank',diffLevel:1,instruction:'Complétez avec is, am ou are.',template:'I ___ going to help you with that.',answer:'am',hint:'I → am.',explanation:'"I am going to help you."'},
  {id:'gt_sw_04',type:'fill-blank',diffLevel:1,instruction:'Complétez avec is, am ou are.',template:'He ___ going to call you later.',answer:'is',hint:'He = singulier → is.',explanation:'"He is going to call you."'},
  {id:'gt_sw_05',type:'fill-blank',diffLevel:1,instruction:'Complétez avec is, am ou are.',template:'We ___ going to win this match.',answer:'are',hint:'We = pluriel → are.',explanation:'"We are going to win."'},
  {id:'gt_sw_06',type:'fill-blank',diffLevel:1,instruction:'Complétez avec is, am ou are.',template:'It ___ going to rain this afternoon.',answer:'is',hint:'It → is.',explanation:'"It is going to rain."'},
  {id:'gt_sw_07',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon verbe (infinitif).',template:'I am going to ___ my family this weekend.',answer:'visit',hint:'"going to" + base verbale.',explanation:'"I am going to visit my family."'},
  {id:'gt_sw_08',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon verbe (infinitif).',template:'She is going to ___ English at university.',answer:'study',hint:'"going to" + base verbale.',explanation:'"She is going to study English."'},
  {id:'gt_sw_09',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon verbe (infinitif).',template:'They are going to ___ football tomorrow.',answer:'play',hint:'"going to" + base verbale.',explanation:'"They are going to play football."'},
  {id:'gt_sw_10',type:'fill-blank',diffLevel:1,instruction:'Complétez avec is, am ou are.',template:'You ___ going to love this film!',answer:'are',hint:'You → are.',explanation:'"You are going to love this film."'},
""",

'usedTo': """\
  {id:'ut_sw_01',type:'fill-blank',diffLevel:1,instruction:'Complétez avec used ou use.',template:'She ___ to live in Paris.',answer:'used',hint:'Affirmation → used to.',explanation:'"She used to live in Paris."'},
  {id:'ut_sw_02',type:'fill-blank',diffLevel:1,instruction:'Complétez avec used ou use.',template:'Did you ___ to play football?',answer:'use',hint:'Après "did" → base verbale: use (sans -d).',explanation:'"Did you use to play?"'},
  {id:'ut_sw_03',type:'fill-blank',diffLevel:1,instruction:'Complétez avec used ou use.',template:'He ___ to wake up very early.',answer:'used',hint:'Affirmation → used to.',explanation:'"He used to wake up early."'},
  {id:'ut_sw_04',type:'fill-blank',diffLevel:1,instruction:'Complétez avec used ou use.',template:'They ___ to walk to school every day.',answer:'used',hint:'Affirmation → used to.',explanation:'"They used to walk to school."'},
  {id:'ut_sw_05',type:'fill-blank',diffLevel:1,instruction:'Complétez avec used ou use.',template:'I ___ to love swimming as a child.',answer:'used',hint:'Affirmation → used to.',explanation:'"I used to love swimming."'},
  {id:'ut_sw_06',type:'fill-blank',diffLevel:1,instruction:'Complétez avec used ou use.',template:'She ___ to be very shy.',answer:'used',hint:'Affirmation → used to.',explanation:'"She used to be very shy."'},
  {id:'ut_sw_07',type:'fill-blank',diffLevel:1,instruction:'Complétez avec used ou use.',template:'Did he ___ to live here?',answer:'use',hint:'Après "did" → base verbale: use.',explanation:'"Did he use to live here?"'},
  {id:'ut_sw_08',type:'fill-blank',diffLevel:1,instruction:'Complétez avec used ou use.',template:'We ___ to eat together every Sunday.',answer:'used',hint:'Affirmation → used to.',explanation:'"We used to eat together."'},
  {id:'ut_sw_09',type:'fill-blank',diffLevel:1,instruction:'Complétez avec used ou use.',template:'She did not ___ to like vegetables.',answer:'use',hint:'Après "did not" → base verbale: use.',explanation:'"She did not use to like vegetables."'},
  {id:'ut_sw_10',type:'fill-blank',diffLevel:1,instruction:'Complétez avec used ou use.',template:'He ___ to play the piano every evening.',answer:'used',hint:'Affirmation → used to.',explanation:'"He used to play the piano."'},
""",

'phrasalVerbs': """\
  {id:'phv_sw_01',type:'fill-blank',diffLevel:1,instruction:'Complétez avec la bonne particule.',template:'Please turn ___ the TV before you go to bed.',answer:'off',hint:'"turn off" = éteindre.',explanation:'"Turn off" = to switch off.'},
  {id:'phv_sw_02',type:'fill-blank',diffLevel:1,instruction:'Complétez avec la bonne particule.',template:'She gave ___ her old clothes to charity.',answer:'away',hint:'"give away" = donner.',explanation:'"Give away" = to donate.'},
  {id:'phv_sw_03',type:'fill-blank',diffLevel:1,instruction:'Complétez avec la bonne particule.',template:'Pick ___ your toys before dinner!',answer:'up',hint:'"pick up" = ramasser.',explanation:'"Pick up" = to collect.'},
  {id:'phv_sw_04',type:'fill-blank',diffLevel:1,instruction:'Complétez avec la bonne particule.',template:'She gave ___ smoking last year.',answer:'up',hint:'"give up" = arrêter.',explanation:'"Give up" = to stop doing something.'},
  {id:'phv_sw_05',type:'fill-blank',diffLevel:1,instruction:'Complétez avec la bonne particule.',template:'He turned ___ our offer.',answer:'down',hint:'"turn down" = refuser.',explanation:'"Turn down" = to refuse.'},
  {id:'phv_sw_06',type:'fill-blank',diffLevel:1,instruction:'Complétez avec la bonne particule.',template:'Look ___ for cars when you cross the road.',answer:'out',hint:'"look out" = faire attention.',explanation:'"Look out!" = Be careful!'},
  {id:'phv_sw_07',type:'fill-blank',diffLevel:1,instruction:'Complétez avec la bonne particule.',template:'I need to look ___ this word in the dictionary.',answer:'up',hint:'"look up" = chercher.',explanation:'"Look up" = to search for information.'},
  {id:'phv_sw_08',type:'fill-blank',diffLevel:1,instruction:'Complétez avec la bonne particule.',template:'The fire went ___ after the rain.',answer:'out',hint:'"go out" = s\'éteindre.',explanation:'"Go out" = to stop burning.'},
  {id:'phv_sw_09',type:'fill-blank',diffLevel:1,instruction:'Complétez avec la bonne particule.',template:'Can you turn ___ the music? It is too quiet.',answer:'up',hint:'"turn up" = monter le son.',explanation:'"Turn up" = to increase the volume.'},
  {id:'phv_sw_10',type:'fill-blank',diffLevel:1,instruction:'Complétez avec la bonne particule.',template:'She came ___ with a great idea.',answer:'up',hint:'"come up with" = trouver une idée.',explanation:'"Come up with" = to think of an idea.'},
""",
}

# ─── Find the opening of the LAST push/assignment block and insert at start ─

def find_last_push_open(content, topic):
    """
    Find position just after the opening bracket of the LAST
    exercises.TOPIC.push( or exercises.TOPIC = [ block.
    Returns char index just after the opening bracket.
    """
    patterns = [
        rf'exercises\.{re.escape(topic)}\.push\s*\(',
        rf'exercises\.{re.escape(topic)}\s*=\s*\[',
    ]
    best_end = -1
    for pat in patterns:
        for m in re.finditer(pat, content):
            if m.end() > best_end:
                best_end = m.end()
    return best_end  # position right after the opening ( or [


for topic, new_exs in NEW_EXERCISES.items():
    open_pos = find_last_push_open(content, topic)
    if open_pos < 0:
        print(f'WARNING: Could not find opening of {topic} block')
        continue

    # Insert new exercises right after the opening bracket, before existing content
    # Add a comment header and newline
    insertion = '\n  // ── L1 single-word fill-blank (audit) ──\n' + new_exs
    content = content[:open_pos] + insertion + content[open_pos:]
    print(f'OK: Inserted 10 exercises for {topic}')


# ─── Add GRAMMAR_TOPICS export ───────────────────────────────────────────────

GRAMMAR_TOPICS_EXPORT = """
// ─── ALL GRAMMAR TOPICS (for competitive mode dropdown) ──────────────────────
export const GRAMMAR_TOPICS = {
  routine:               { label: 'Routine Quotidienne',          icon: '\\u{1F305}' },
  family:                { label: 'La Famille',                   icon: '\\u{1F46A}' },
  school:                { label: "L'\\u00e9cole",                icon: '\\u{1F3EB}' },
  body:                  { label: 'Le Corps',                     icon: '\\u{1F4AA}' },
  time:                  { label: "L'Heure & Le Temps",           icon: '\\u23f0' },
  food:                  { label: 'La Nourriture',                icon: '\\u{1F34E}' },
  colors:                { label: 'Les Couleurs',                 icon: '\\u{1F3A8}' },
  numbers:               { label: 'Les Nombres',                  icon: '\\u{1F522}' },
  adjectives:            { label: 'Les Adjectifs',                icon: '\\u2728' },
  pronouns:              { label: 'Les Pronoms',                  icon: '\\u{1F465}' },
  verbs:                 { label: 'Verbes Principaux',            icon: '\\u26a1' },
  timeAdverbs:           { label: 'Adverbes de Temps',            icon: '\\u{1F4C5}' },
  toBe:                  { label: 'Le Verbe To Be',               icon: '\\u{1F524}' },
  articles:              { label: 'Les Articles (a/an/the)',       icon: '\\u{1F4DD}' },
  plurals:               { label: 'Les Pluriels',                 icon: '\\u{1F522}' },
  therebeis:             { label: 'There is / There are',         icon: '\\u{1F4CD}' },
  prepositions:          { label: 'Les Pr\\u00e9positions',       icon: '\\u{1F4CC}' },
  someAny:               { label: 'Some & Any',                   icon: '\\u{1F522}' },
  possessives:           { label: 'Les Possessifs',               icon: '\\u{1F511}' },
  imperatives:           { label: "L'Imp\\u00e9ratif",           icon: '\\u{1F4E3}' },
  questions:             { label: 'Les Questions',                icon: '\\u2753' },
  interrogative:         { label: 'Formes Interrogatives',        icon: '\\u{1F50D}' },
  presentSimple:         { label: 'Present Simple',               icon: '\\u{1F4D6}' },
  presentContinuous:     { label: 'Present Continuous',           icon: '\\u{1F504}' },
  pastSimple:            { label: 'Past Simple',                  icon: '\\u23ee\\ufe0f' },
  pastContinuous:        { label: 'Past Continuous',              icon: '\\u23ea' },
  presentPerfect:        { label: 'Present Perfect',              icon: '\\u2705' },
  pastPerfect:           { label: 'Past Perfect',                 icon: '\\u{1F570}\\ufe0f' },
  futureSimple:          { label: 'Future Simple',                icon: '\\u{1F680}' },
  goingTo:               { label: 'Going to',                     icon: '\\u27a1\\ufe0f' },
  futureContinuous:      { label: 'Future Continuous',            icon: '\\u23e9' },
  futurePerfect:         { label: 'Future Perfect',               icon: '\\u{1F3C1}' },
  modals:                { label: 'Les Modaux (can/must/should)',  icon: '\\u{1F3AF}' },
  conditionals:          { label: 'Les Conditionnels',            icon: '\\u{1F500}' },
  irregularVerbs:        { label: 'Verbes Irr\\u00e9guliers',     icon: '\\u2699\\ufe0f' },
  comparatives:          { label: 'Comparatifs & Superlatifs',    icon: '\\u{1F4C8}' },
  adverbs:               { label: 'Les Adverbes',                 icon: '\\u{1F4CA}' },
  countableUncountable:  { label: 'D\\u00e9nombrable & Ind\\u00e9nombrable', icon: '\\u2696\\ufe0f' },
  connectors:            { label: 'Les Connecteurs',              icon: '\\u{1F517}' },
  tenseChooser:          { label: 'Choix des Temps',              icon: '\\u{1F3B2}' },
  phrasalVerbs:          { label: 'Verbes \\u00e0 Particule',     icon: '\\u{1F527}' },
  passiveVoice:          { label: 'La Voix Passive',              icon: '\\u{1F503}' },
  reportedSpeech:        { label: 'Le Discours Rapport\\u00e9',   icon: '\\u{1F4AC}' },
  timeMarkers:           { label: 'Marqueurs de Temps',           icon: '\\u{1F550}' },
  relativeClauses:       { label: 'Les Relatives (who/which)',    icon: '\\u{1F9E9}' },
  sinceFor:              { label: 'Since & For',                  icon: '\\u23f1\\ufe0f' },
  usedTo:                { label: 'Used to',                      icon: '\\u{1F4AD}' },
  verbsOfState:          { label: "Verbes d'\\u00c9tat",          icon: '\\u{1F9E0}' },
};
"""

insert_before = 'export function getAllExercises()'
insert_pos = content.find(insert_before)
if insert_pos >= 0:
    content = content[:insert_pos] + GRAMMAR_TOPICS_EXPORT + '\n' + content[insert_pos:]
    print('OK: Inserted GRAMMAR_TOPICS export')
else:
    content += GRAMMAR_TOPICS_EXPORT
    print('OK: Appended GRAMMAR_TOPICS export at end')

with open(INPUT, 'w', encoding='utf-8') as f:
    f.write(content)

print(f'Done. Lines: {content.count(chr(10))+1}')
