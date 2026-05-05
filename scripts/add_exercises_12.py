#!/usr/bin/env python3
"""
add_exercises_12.py
Extends each main topic from 8 to 12 exercises (adds 4 per topic).
Topics: routine, family, school, body, time, verbs, timeAdverbs,
        presentSimple, presentContinuous, pastSimple, futureSimple.
"""
import sys, re
sys.stdout.reconfigure(encoding='utf-8')

PATH = 'src/data/exercises.js'

with open(PATH, encoding='utf-8') as f:
    content = f.read()

NEW_EXERCISES = {

'routine': """
    { id: 'r09', type: 'translate', diffLevel: 1, level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Je me brosse les dents après le petit-déjeuner.',
      answer: 'I brush my teeth after breakfast.',
      acceptedAnswers: ['I brush my teeth after breakfast.', 'I brush my teeth after having breakfast.'],
      hint: 'brush + teeth', explanation: 'Brush your teeth = se brosser les dents.' },
    { id: 'r10', type: 'word-order', diffLevel: 2, level: 'A1',
      instruction: 'Remettez les mots dans l\'ordre.',
      words: ['She', 'comes', 'home', 'at', 'five', 'o\'clock'],
      answer: 'She comes home at five o\'clock.',
      hint: 'Subject + verb + time', explanation: 'Come home = rentrer à la maison.' },
    { id: 'r11', type: 'error-correct', diffLevel: 2, level: 'A1',
      instruction: 'Corrigez l\'erreur dans cette phrase.',
      sentence: 'He go to bed at ten every night.',
      answer: 'He goes to bed at ten every night.',
      acceptedAnswers: ['He goes to bed at ten every night.'],
      hint: 'he/she/it → -s', explanation: 'He/she/it + verb + -s in Present Simple.' },
    { id: 'r12', type: 'fill-blank', diffLevel: 3, level: 'A2',
      instruction: 'Complétez avec le bon verbe.',
      template: 'Every evening, they ___ homework together before dinner.',
      answer: 'do',
      acceptedAnswers: ['do', 'do their', 'do their homework'],
      hint: 'do homework', explanation: 'Do homework = faire les devoirs.' },
""",

'family': """
    { id: 'fam09', type: 'translate', diffLevel: 1, level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Ma grand-mère a soixante-dix ans.',
      answer: 'My grandmother is seventy years old.',
      acceptedAnswers: ['My grandmother is seventy years old.', 'My grandmother is 70 years old.', 'My grandmother is seventy.'],
      hint: 'grandmother + is + age', explanation: 'To say someone\'s age: subject + is + number + years old.' },
    { id: 'fam10', type: 'word-order', diffLevel: 2, level: 'A1',
      instruction: 'Remettez les mots dans l\'ordre.',
      words: ['My', 'brother', 'is', 'older', 'than', 'me'],
      answer: 'My brother is older than me.',
      hint: 'Subject + is + comparative', explanation: 'Older than = plus vieux que.' },
    { id: 'fam11', type: 'fill-blank', diffLevel: 2, level: 'A1',
      instruction: 'Complétez avec le bon mot.',
      template: 'She has two ___ and one sister.',
      answer: 'brothers',
      acceptedAnswers: ['brothers'],
      hint: 'plural of brother', explanation: 'Brother (singular) → brothers (plural).' },
    { id: 'fam12', type: 'error-correct', diffLevel: 3, level: 'A2',
      instruction: 'Corrigez l\'erreur.',
      sentence: 'My parents is farmers in the village.',
      answer: 'My parents are farmers in the village.',
      acceptedAnswers: ['My parents are farmers in the village.'],
      hint: 'parents = plural', explanation: 'Parents (plural) → are, not is.' },
""",

'school': """
    { id: 'sch09', type: 'translate', diffLevel: 1, level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Nous avons un cours de mathématiques à huit heures.',
      answer: 'We have a maths class at eight o\'clock.',
      acceptedAnswers: ['We have a maths class at eight o\'clock.', 'We have a maths lesson at eight o\'clock.', 'We have a math class at eight.'],
      hint: 'have + class/lesson', explanation: 'Have a class / have a lesson = avoir un cours.' },
    { id: 'sch10', type: 'word-order', diffLevel: 2, level: 'A1',
      instruction: 'Remettez les mots dans l\'ordre.',
      words: ['The', 'students', 'write', 'in', 'their', 'notebooks'],
      answer: 'The students write in their notebooks.',
      hint: 'Subject + verb + preposition', explanation: 'Write in a notebook = écrire dans un cahier.' },
    { id: 'sch11', type: 'fill-blank', diffLevel: 2, level: 'A2',
      instruction: 'Complétez la phrase.',
      template: 'She always ___ her hand when she knows the answer.',
      answer: 'raises',
      acceptedAnswers: ['raises', 'puts up', 'raises her hand', 'puts up her hand'],
      hint: 'raise hand / put up hand', explanation: 'Raise your hand / put up your hand = lever la main.' },
    { id: 'sch12', type: 'error-correct', diffLevel: 3, level: 'A2',
      instruction: 'Corrigez l\'erreur.',
      sentence: 'The teacher learned us a new song today.',
      answer: 'The teacher taught us a new song today.',
      acceptedAnswers: ['The teacher taught us a new song today.'],
      hint: 'teach ≠ learn', explanation: 'Teach (enseignant → élèves). Learn = apprendre soi-même.' },
""",

'body': """
    { id: 'bod09', type: 'translate', diffLevel: 1, level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Elle a les cheveux longs.',
      answer: 'She has long hair.',
      acceptedAnswers: ['She has long hair.'],
      hint: 'has + adjective + hair', explanation: 'Hair is uncountable in English — no plural -s.' },
    { id: 'bod10', type: 'word-order', diffLevel: 2, level: 'A1',
      instruction: 'Remettez les mots dans l\'ordre.',
      words: ['Wash', 'your', 'hands', 'before', 'eating'],
      answer: 'Wash your hands before eating.',
      hint: 'Imperative + body part', explanation: 'Imperative: start with the verb (Wash...).' },
    { id: 'bod11', type: 'fill-blank', diffLevel: 2, level: 'A1',
      instruction: 'Complétez avec la bonne partie du corps.',
      template: 'We use our ___ to hear sounds.',
      answer: 'ears',
      acceptedAnswers: ['ears', 'ear'],
      hint: 'organ for hearing', explanation: 'Ear (oreille) is the organ for hearing.' },
    { id: 'bod12', type: 'error-correct', diffLevel: 3, level: 'A2',
      instruction: 'Corrigez l\'erreur.',
      sentence: 'My all body hurts after football.',
      answer: 'My whole body hurts after football.',
      acceptedAnswers: ['My whole body hurts after football.', 'All my body hurts after football.'],
      hint: 'whole body / all my body', explanation: '"My whole body" or "all my body" — not "my all body".' },
""",

'time': """
    { id: 'tim09', type: 'translate', diffLevel: 1, level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Il est trois heures et demie.',
      answer: 'It is half past three.',
      acceptedAnswers: ['It is half past three.', "It's half past three.", 'It is three thirty.', "It's three thirty."],
      hint: 'half past + hour', explanation: 'Half past three = 3h30.' },
    { id: 'tim10', type: 'fill-blank', diffLevel: 1, level: 'A1',
      instruction: 'Complétez avec le bon mot.',
      template: 'School starts ___ Monday morning.',
      answer: 'on',
      acceptedAnswers: ['on'],
      hint: 'preposition of time with days', explanation: 'Use ON with days: on Monday, on Tuesday...' },
    { id: 'tim11', type: 'word-order', diffLevel: 2, level: 'A2',
      instruction: 'Remettez les mots dans l\'ordre.',
      words: ['We', 'always', 'have', 'lunch', 'at', 'noon'],
      answer: 'We always have lunch at noon.',
      hint: 'frequency adverb position', explanation: '"Always" goes before the main verb.' },
    { id: 'tim12', type: 'error-correct', diffLevel: 3, level: 'A2',
      instruction: 'Corrigez l\'erreur.',
      sentence: 'I wake up in seven o\'clock every morning.',
      answer: 'I wake up at seven o\'clock every morning.',
      acceptedAnswers: ['I wake up at seven o\'clock every morning.', 'I wake up at seven every morning.'],
      hint: 'at + specific time', explanation: 'Use AT for specific times: at seven o\'clock.' },
""",

'presentSimple': """
    { id: 'ps09', type: 'translate', diffLevel: 1, level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Mon père travaille dans une école.',
      answer: 'My father works in a school.',
      acceptedAnswers: ['My father works in a school.', 'My father works at a school.'],
      hint: 'father → third person -s', explanation: 'He/she/it + verb + -s: father workS.' },
    { id: 'ps10', type: 'error-correct', diffLevel: 2, level: 'A1',
      instruction: 'Corrigez l\'erreur.',
      sentence: 'She don\'t like spicy food.',
      answer: 'She doesn\'t like spicy food.',
      acceptedAnswers: ["She doesn't like spicy food.", 'She does not like spicy food.'],
      hint: 'she → doesn\'t', explanation: 'She/he/it: doesn\'t + base verb (not don\'t).' },
    { id: 'ps11', type: 'word-order', diffLevel: 2, level: 'A2',
      instruction: 'Remettez les mots dans l\'ordre.',
      words: ['He', 'usually', 'reads', 'the', 'newspaper', 'in', 'the', 'morning'],
      answer: 'He usually reads the newspaper in the morning.',
      hint: 'adverb of frequency position', explanation: 'Usually goes before the main verb: He USUALLY reads.' },
    { id: 'ps12', type: 'fill-blank', diffLevel: 3, level: 'A2',
      instruction: 'Mettez le verbe entre parenthèses au Present Simple.',
      template: 'Water ___ (freeze) at zero degrees Celsius.',
      answer: 'freezes',
      acceptedAnswers: ['freezes'],
      hint: 'scientific fact → Present Simple', explanation: 'General truths and scientific facts use Present Simple.' },
""",

'presentContinuous': """
    { id: 'pc09', type: 'translate', diffLevel: 1, level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Il pleut en ce moment.',
      answer: 'It is raining right now.',
      acceptedAnswers: ['It is raining right now.', "It's raining right now.", 'It is raining.', "It's raining."],
      hint: 'is + raining', explanation: 'It\'s raining = il pleut (en ce moment).' },
    { id: 'pc10', type: 'error-correct', diffLevel: 2, level: 'A1',
      instruction: 'Corrigez l\'erreur.',
      sentence: 'She is study for the exam right now.',
      answer: 'She is studying for the exam right now.',
      acceptedAnswers: ['She is studying for the exam right now.'],
      hint: 'is + verb-ing', explanation: 'Present Continuous: is/am/are + verb-ING.' },
    { id: 'pc11', type: 'word-order', diffLevel: 2, level: 'A2',
      instruction: 'Remettez les mots dans l\'ordre.',
      words: ['They', 'are', 'not', 'watching', 'TV', 'at', 'the', 'moment'],
      answer: 'They are not watching TV at the moment.',
      hint: 'are + not + -ing', explanation: 'Negative Present Continuous: are not / aren\'t + -ing.' },
    { id: 'pc12', type: 'fill-blank', diffLevel: 3, level: 'A2',
      instruction: 'Complétez avec la bonne forme du verbe.',
      template: 'Look! The children ___ in the garden.',
      answer: 'are playing',
      acceptedAnswers: ['are playing', 'play'],
      hint: 'look! = action in progress', explanation: '"Look!" signals an action happening NOW → Present Continuous.' },
""",

'pastSimple': """
    { id: 'past09', type: 'translate', diffLevel: 1, level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Elle est allée à l\'école hier.',
      answer: 'She went to school yesterday.',
      acceptedAnswers: ['She went to school yesterday.'],
      hint: 'go → went', explanation: 'Go is irregular: go → went.' },
    { id: 'past10', type: 'error-correct', diffLevel: 2, level: 'A2',
      instruction: 'Corrigez l\'erreur.',
      sentence: 'He didn\'t went to the market on Saturday.',
      answer: 'He didn\'t go to the market on Saturday.',
      acceptedAnswers: ["He didn't go to the market on Saturday.", 'He did not go to the market on Saturday.'],
      hint: 'didn\'t + base verb', explanation: 'After didn\'t (did not), use the BASE verb — never the past form.' },
    { id: 'past11', type: 'word-order', diffLevel: 2, level: 'A2',
      instruction: 'Remettez les mots dans l\'ordre.',
      words: ['Did', 'you', 'see', 'the', 'film', 'last', 'night'],
      answer: 'Did you see the film last night?',
      hint: 'Did + subject + base verb', explanation: 'Past Simple question: Did + subject + base verb?' },
    { id: 'past12', type: 'fill-blank', diffLevel: 3, level: 'B1',
      instruction: 'Complétez avec la bonne forme du verbe.',
      template: 'When she ___ (arrive) home, her family ___ (be) already there.',
      answer: 'arrived / was',
      acceptedAnswers: ['arrived, was', 'arrived / was', 'arrived and was'],
      hint: 'past simple × 2', explanation: 'Both actions are completed in the past → Past Simple for both.' },
""",

'futureSimple': """
    { id: 'fut09', type: 'translate', diffLevel: 1, level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Il fera beau demain.',
      answer: 'It will be sunny tomorrow.',
      acceptedAnswers: ["It'll be sunny tomorrow.", 'It will be sunny tomorrow.', 'It will be nice tomorrow.'],
      hint: 'will + be', explanation: 'Future Simple: will + base verb.' },
    { id: 'fut10', type: 'error-correct', diffLevel: 2, level: 'A2',
      instruction: 'Corrigez l\'erreur.',
      sentence: 'She will goes to university next year.',
      answer: 'She will go to university next year.',
      acceptedAnswers: ['She will go to university next year.'],
      hint: 'will + BASE verb (no -s)', explanation: 'After will, always use the base form of the verb.' },
    { id: 'fut11', type: 'word-order', diffLevel: 2, level: 'A2',
      instruction: 'Remettez les mots dans l\'ordre.',
      words: ['They', 'won\'t', 'be', 'at', 'school', 'tomorrow'],
      answer: "They won't be at school tomorrow.",
      hint: 'won\'t = will not', explanation: "Won't = will not. Negative future: won't + base verb." },
    { id: 'fut12', type: 'fill-blank', diffLevel: 3, level: 'B1',
      instruction: 'Complétez avec will ou won\'t.',
      template: 'Don\'t worry — I ___ help you with your homework.',
      answer: 'will',
      acceptedAnswers: ['will', "I'll"],
      hint: 'promise / offer → will', explanation: 'Use will for spontaneous decisions, offers and promises.' },
""",

'verbs': """
    { id: 'v09', type: 'translate', diffLevel: 1, level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Je veux apprendre l\'anglais.',
      answer: 'I want to learn English.',
      acceptedAnswers: ['I want to learn English.'],
      hint: 'want + to + infinitive', explanation: 'Want to + base verb = vouloir + infinitif.' },
    { id: 'v10', type: 'word-order', diffLevel: 2, level: 'A1',
      instruction: 'Remettez les mots dans l\'ordre.',
      words: ['Can', 'you', 'help', 'me', 'please'],
      answer: 'Can you help me please?',
      hint: 'Can + subject + verb', explanation: 'Questions with can: Can + subject + base verb?' },
    { id: 'v11', type: 'fill-blank', diffLevel: 2, level: 'A2',
      instruction: 'Complétez avec le bon verbe.',
      template: 'He ___ to music every evening on his phone.',
      answer: 'listens',
      acceptedAnswers: ['listens', 'listens to'],
      hint: 'listen to + object', explanation: 'Listen TO (intransitive verb that needs a preposition).' },
    { id: 'v12', type: 'error-correct', diffLevel: 3, level: 'A2',
      instruction: 'Corrigez l\'erreur.',
      sentence: 'She enjoys to cook for her family.',
      answer: 'She enjoys cooking for her family.',
      acceptedAnswers: ['She enjoys cooking for her family.'],
      hint: 'enjoy + -ing', explanation: 'Enjoy is always followed by the gerund (ING), not the infinitive.' },
""",

'timeAdverbs': """
    { id: 'ta09', type: 'translate', diffLevel: 1, level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Il se lève toujours tôt.',
      answer: 'He always gets up early.',
      acceptedAnswers: ['He always gets up early.', 'He always wakes up early.'],
      hint: 'always + verb', explanation: 'Frequency adverbs go before the main verb.' },
    { id: 'ta10', type: 'fill-blank', diffLevel: 2, level: 'A1',
      instruction: 'Choisissez le bon adverbe.',
      template: 'She ___ eats breakfast — she says she\'s never hungry in the morning.',
      answer: 'never',
      acceptedAnswers: ['never', 'rarely', 'seldom'],
      hint: 'never hungry → never eats', explanation: 'Never = 0% frequency.' },
    { id: 'ta11', type: 'word-order', diffLevel: 2, level: 'A2',
      instruction: 'Remettez les mots dans l\'ordre.',
      words: ['They', 'are', 'sometimes', 'late', 'for', 'school'],
      answer: 'They are sometimes late for school.',
      hint: 'position with "be"', explanation: 'With be (is/are/am), adverb comes AFTER: are sometimes.' },
    { id: 'ta12', type: 'error-correct', diffLevel: 3, level: 'A2',
      instruction: 'Corrigez l\'erreur.',
      sentence: 'I often am tired on Mondays.',
      answer: 'I am often tired on Mondays.',
      acceptedAnswers: ['I am often tired on Mondays.'],
      hint: 'adverb position with "be"', explanation: 'With "be", the adverb goes AFTER the verb: am OFTEN.' },
""",

}

def insert_after_last_id(content, topic_key, new_exercises_str):
    """Find the topic section and append new exercises before the closing ]."""
    # Find the topic array
    topic_start = content.find(f'\n  {topic_key}: [')
    if topic_start == -1:
        topic_start = content.find(f'\n  // ─── {topic_key.upper()}')
        if topic_start == -1:
            print(f"WARNING: topic '{topic_key}' not found")
            return content

    # Find the closing bracket of this topic's array
    # Track brace depth from '['
    bracket_open = content.find('[', topic_start)
    if bracket_open == -1:
        print(f"WARNING: no '[' found for topic '{topic_key}'")
        return content

    depth = 0
    in_string = False
    sc = None
    i = bracket_open
    n = len(content)
    end_bracket = None
    while i < n:
        c = content[i]
        if in_string:
            if c == '\\': i += 2; continue
            if c == sc: in_string = False
        else:
            if c in ('"', "'", '`'): in_string = True; sc = c
            elif c == '[': depth += 1
            elif c == ']':
                depth -= 1
                if depth == 0: end_bracket = i; break
        i += 1

    if end_bracket is None:
        print(f"WARNING: no matching ']' found for topic '{topic_key}'")
        return content

    # Insert the new exercises just before the closing bracket
    insert_pos = end_bracket
    return content[:insert_pos] + new_exercises_str + content[insert_pos:]


for topic, exercises_str in NEW_EXERCISES.items():
    content = insert_after_last_id(content, topic, exercises_str)
    print(f"Added 4 exercises to '{topic}'")

with open(PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print("\nVerifying exercise counts...")
import subprocess
result = subprocess.run(
    ['node', '-e', '''
const {exercises, getExercisesByTopic} = require('./src/data/exercises.js');
const topics = ['routine','family','school','body','time','verbs','timeAdverbs',
                'presentSimple','presentContinuous','pastSimple','futureSimple'];
topics.forEach(t => {
    const ex = getExercisesByTopic(t);
    console.log(t + ":", ex ? ex.length : 0, "exercises");
});
'''],
    capture_output=True, text=True, cwd='.'
)
if result.returncode != 0:
    # Try module syntax
    result2 = subprocess.run(
        ['node', '-e', r'''
import("./src/data/exercises.js").then(m => {
    const ex = m.exercises;
    const topics = ["routine","family","school","body","time","verbs","timeAdverbs",
                    "presentSimple","presentContinuous","pastSimple","futureSimple"];
    topics.forEach(t => console.log(t + ":", (ex[t]||[]).length, "exercises"));
}).catch(e => console.error(e));
''', '--input-type=module'],
        capture_output=True, text=True, cwd='.'
    )
    print(result2.stdout or result2.stderr[:200])
else:
    print(result.stdout)

print("\nDone.")
