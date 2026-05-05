#!/usr/bin/env python3
"""Add 1 more exercise to food L3, colors L3, numbers L3, timeAdverbs L1."""
import re

PATH = 'src/data/exercises.js'

# (topic, prefix, id_num, exercise_dict_text)
EXTRAS = [
    ('food', 'fd', 40, '''    { id: "fd40", type: "fill-blank", diffLevel: 3, level: "B1", instruction: "Complétez avec le bon mot.", template: "I have ___ eaten dinner yet.", answer: "not", acceptedAnswers: ["not"], hint: "have not + past participle + yet", explanation: "Forme négative du Present Perfect avec 'yet' = pas encore." },
'''),
    ('colors', 'col', 40, '''    { id: "col40", type: "translate", diffLevel: 3, level: "A2", instruction: "Traduisez en anglais.", french: "La voiture verte est plus rapide que la voiture rouge.", answer: "The green car is faster than the red car.", alternatives: ["The green car is quicker than the red car."], hint: "comparatif court → -er than", explanation: "Comparatif d'adjectif court : adj + -er + than." },
'''),
    ('numbers', 'num', 40, '''    { id: "num40", type: "translate", diffLevel: 3, level: "A2", instruction: "Traduisez en anglais.", french: "Plus de la moitié des élèves ont réussi l'examen.", answer: "More than half of the pupils passed the exam.", alternatives: ["More than half of the students passed the exam."], hint: "more than + half of", explanation: "Expression de quantité avec 'more than half'." },
'''),
    ('timeAdverbs', 'ta', 36, '''    { id: "ta36", type: "fill-blank", diffLevel: 1, level: "A1", instruction: "Complétez avec un adverbe de fréquence.", template: "I ___ drink coffee in the morning.", answer: "always", acceptedAnswers: ["always", "often", "usually", "sometimes", "never"], hint: "adverbe de fréquence avant le verbe", explanation: "Always/often/usually/sometimes/never — placés avant le verbe lexical." },
'''),
]


def find_block_end(content, topic):
    """Return position of closing ']' for the topic block."""
    m = re.search(rf"^\s*{re.escape(topic)}:\s*\[", content, re.M)
    if not m:
        return None
    depth = 1
    i = m.end()
    while i < len(content):
        c = content[i]
        if c == '[':
            depth += 1
        elif c == ']':
            depth -= 1
            if depth == 0:
                return i
        i += 1
    return None


def main():
    with open(PATH, encoding='utf-8') as f:
        content = f.read()

    for topic, prefix, num, ex_text in EXTRAS:
        end = find_block_end(content, topic)
        if end is None:
            print(f"[SKIP] {topic} not found")
            continue
        # Make sure we insert before `]`, with proper comma+newline before
        before = content[:end].rstrip()
        after = content[end:]
        if not before.endswith(','):
            before = before + ',\n'
        else:
            before = before + '\n'
        content = before + ex_text + after
        print(f"[ADD]  {topic}: +1 (id={prefix}{num})")

    with open(PATH, 'w', encoding='utf-8') as f:
        f.write(content)


if __name__ == '__main__':
    main()
