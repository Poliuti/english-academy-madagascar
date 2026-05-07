"""
Adds/expands acceptedAnswers alternatives to all fill-type dialogue tasks.
Uses double quotes for strings containing apostrophes, single quotes otherwise.
Since checkAnswer now expands contractions automatically, we only add SEMANTIC
variants here (different words, not just I'm/I am etc.).

APPROACH: We avoid regex-parsing the existing alternatives array entirely
(which breaks on escaped apostrophes). Instead we locate each task block
by its answer value and *rebuild* the alternatives list from scratch using
the master EXTRA_ALTS map, simply replacing whatever is already there.
"""
import re

with open('src/data/dialogues.js', encoding='utf-8') as f:
    content = f.read()

def js_str(s):
    """Return JS string literal, using double quotes if apostrophe present."""
    if "'" in s:
        return '"' + s.replace('\\', '\\\\').replace('"', '\\"') + '"'
    return "'" + s + "'"

# ─── Patch map ─────────────────────────────────────────────────────────────────
# Key = exact answer field value; Value = ALL accepted alternatives (complete list)
# NOTE: contractions (I'm/I am, won't/will not, etc.) are handled automatically
# by checkAnswer — only add SEMANTIC variants here (different words).
EXTRA_ALTS = {

    # ── greetings ────────────────────────────────────────────────────────────
    "Hello! My name is Paul.": [
        "Hi! My name is Paul.",
        "Hello! I am Paul.",
        "Hi! I am Paul.",
        "Hello, my name is Paul.",
        "Hi, my name is Paul.",
        "My name is Paul.",
    ],
    "I am from Madagascar.": [
        "I come from Madagascar.",
        "I am from Madagascar",        # no period
    ],
    "I am 15 years old.": [
        "I am fifteen years old.",
        "I am 15.",
        "I am fifteen.",
        "I am 15 years old",           # no period
    ],

    # ── interview ────────────────────────────────────────────────────────────
    "My name is Paul and I am from Madagascar.": [
        "My name is Paul and I come from Madagascar.",
        "I am Paul and I come from Madagascar.",
        "My name is Paul. I come from Madagascar.",
        "My name is Paul, I come from Madagascar.",
        "I am Paul and I am from Madagascar.",
        "I am Paul. I am from Madagascar.",
        "I am Paul. I come from Madagascar.",
    ],
    "I want to learn new things.": [
        "I would like to learn new things.",
        "I want to learn new skills.",
        "I want to discover new things.",
        "I like to learn new things.",
        "I love to learn new things.",
    ],
    "Yes, I can speak English well.": [
        "Yes, I speak English.",
        "Yes, I can speak English.",
        "Yes, I speak English well.",
        "Yes I can speak English well.",
        "Yes, I do speak English.",
    ],

    # ── market ───────────────────────────────────────────────────────────────
    "Yes, I would like some bananas.": [
        "Yes, I want some bananas, please.",
        "Yes, bananas please.",
        "I would like bananas please.",
        "Yes, I would like bananas.",
        "Yes, I would like some bananas",
        "I want some bananas.",
        "I want some bananas, please.",
    ],
    "Five, please.": [
        "Five bananas.",
        "Five.",
        "I want five.",
        "Give me five, please.",
        "Five bananas, please.",
        "I would like five.",
        "I would like five, please.",
    ],

    # ── restaurant ───────────────────────────────────────────────────────────
    "Yes, I would like chicken and rice.": [
        "Yes, I want chicken and rice, please.",
        "Chicken and rice, please.",
        "I would like chicken and rice.",
        "I would like chicken and rice, please.",
        "Yes, I want chicken and rice.",
        "I want chicken and rice.",
        "Chicken and rice.",
    ],
    "A glass of water, please.": [
        "Water, please.",
        "Could I have a glass of water, please?",
        "I would like a glass of water, please.",
        "I would like a glass of water.",
        "Can I have a glass of water, please?",
        "Can I have some water, please?",
        "Some water, please.",
    ],
    "The bill, please.": [
        "Can I get the bill, please?",
        "Could I have the bill?",
        "The bill please.",
        "Check, please.",
        "Could I have the bill, please?",
        "I would like the bill, please.",
    ],

    # ── doctor ───────────────────────────────────────────────────────────────
    "I have a headache and a fever.": [
        "I have a headache and fever.",
        "I have a headache. I also have a fever.",
        "I have a headache and a temperature.",
        "My head hurts and I have a fever.",
    ],
    "Since yesterday.": [
        "Yesterday.",
        "Since last night.",
        "Since yesterday morning.",
        "Since yesterday evening.",
        "For one day.",
        "From yesterday.",
    ],
    "Thank you, doctor.": [
        "Thanks, doctor.",
        "Thank you very much.",
        "Thank you.",
        "Thanks.",
        "Thank you very much, doctor.",
    ],

    # ── phone ────────────────────────────────────────────────────────────────
    "She is not here right now.": [
        "She is not here.",
        "She is out right now.",
        "She is not here at the moment.",
        "She is not available right now.",
        "She is out.",
    ],
    "I will tell her. Goodbye.": [
        "I will tell her, goodbye.",
        "I will let her know. Goodbye.",
        "OK, I will tell her. Bye.",
        "I will tell her. Bye.",
        "I will pass on the message. Goodbye.",
    ],

    # ── ecole ────────────────────────────────────────────────────────────────
    "Good morning, teacher.": [
        "Good morning!",
        "Good morning, sir.",
        "Good morning, miss.",
        "Morning, teacher.",
        "Good morning, madam.",
        "Good morning ma'am.",
    ],
    "Yes, I will. Thank you.": [
        "Yes, I will.",
        "Yes. Thank you.",
        "OK, I will. Thank you.",
        "Yes, I will bring it. Thank you.",
        "OK. Thank you.",
        "Yes, of course. Thank you.",
    ],
    "My favourite subject is English.": [
        "I like English.",
        "English is my favourite subject.",
        "English is my favorite subject.",
        "My favorite subject is English.",
        "I love English.",
        "English.",
        "English is my best subject.",
        "I prefer English.",
    ],

    # ── sport ────────────────────────────────────────────────────────────────
    "Yes, I love football.": [
        "Yes, I like football.",
        "Yes, I love soccer.",
        "Yes, I enjoy football.",
        "Football, yes!",
        "Yes, I really love football.",
        "Yes, I enjoy soccer.",
    ],
    "I play twice a week.": [
        "Twice a week.",
        "Two times a week.",
        "I play two times a week.",
        "I play football twice a week.",
        "I play it twice a week.",
        "I play two times per week.",
    ],
    "I prefer swimming. It is relaxing.": [
        "I prefer swimming.",
        "Swimming. It is relaxing.",
        "I like swimming.",
        "Swimming is relaxing.",
        "I prefer to swim. It is relaxing.",
        "I prefer to swim.",
        "Swimming, it is relaxing.",
    ],

    # ── famille ──────────────────────────────────────────────────────────────
    "I have a small family.": [
        "My family is small.",
        "We are a small family.",
        "I have a small family",       # no period
    ],
    "I have one brother and two sisters.": [
        "I have a brother and two sisters.",
        "One brother and two sisters.",
        "I have 1 brother and 2 sisters.",
        "I have one brother and 2 sisters.",
        "I have 1 brother and two sisters.",
        "A brother and two sisters.",
    ],
    "No, they live in the village.": [
        "No, they live in a village.",
        "No. They live in the village.",
        "No, they live in their village.",
        "No, they do not live here.",
        "No. They live in a village.",
    ],

    # ── shopping ─────────────────────────────────────────────────────────────
    "Yes, I am looking for a tee-shirt.": [
        "Yes, I need a tee-shirt.",
        "I am looking for a tee-shirt.",
        "Yes, a tee-shirt please.",
        "Yes, I want a tee-shirt.",
        "I need a tee-shirt.",
        "I am looking for a t-shirt.",
        "Yes, I am looking for a t-shirt.",
        "I want a tee-shirt.",
    ],
    "I prefer blue or black.": [
        "Blue or black, please.",
        "I like blue or black.",
        "Blue or black.",
        "I would like blue or black.",
        "Blue or black would be nice.",
    ],
    "I will take it. Thank you.": [
        "OK, I will take it.",
        "I will take it.",
        "I will take this one. Thank you.",
        "I will buy it. Thank you.",
        "I will take it, thank you.",
    ],

    # ── weekend ──────────────────────────────────────────────────────────────
    "I went to the beach with my family.": [
        "I visited the beach with my family.",
        "I went to the beach.",
        "We went to the beach.",
        "I went to the beach with my parents.",
        "We visited the beach.",
        "I spent time at the beach with my family.",
    ],
    "I will visit my grandparents.": [
        "I will see my grandparents.",
        "I am going to visit my grandparents.",
        "I am going to see my grandparents.",
        "I plan to visit my grandparents.",
        "I will go to my grandparents.",
    ],
    "Thank you! You too!": [
        "Thank you! Same to you!",
        "Thank you. You too.",
        "Thank you, same to you!",
        "Thanks! You too!",
        "Thank you! You too",
    ],

    # ── directions ───────────────────────────────────────────────────────────
    "Go straight and turn left.": [
        "Go straight, then turn left.",
        "Go straight and then turn left.",
        "Go straight ahead and turn left.",
        "Go straight ahead, then turn left.",
        "Straight ahead and turn left.",
    ],
    "You are welcome.": [
        "Not at all.",
        "No problem.",
        "My pleasure.",
        "No worries.",
        "It is my pleasure.",
        "That is alright.",
        "No problem at all.",
    ],
}


def patch_task(content, answer_fragment, alts):
    """
    Find every task block whose answer: field equals answer_fragment,
    and set its alternatives array to exactly `alts`.
    We avoid parsing the existing alternatives and instead do a full replace.
    """
    # Build the replacement alternatives JS literal
    alts_js = ', '.join(js_str(a) for a in alts)
    alts_block = f'alternatives: [{alts_js}]'

    # Escape for use in a regex pattern
    esc = re.escape(answer_fragment)

    # Pattern: find a task:{...} block containing our answer value.
    # We capture the full task block so we can manipulate it.
    task_pat = re.compile(
        r'(task:\s*\{(?:[^{}]|\{[^{}]*\})*?answer:\s*[\'"]'
        + esc +
        r'[\'"](?:[^{}]|\{[^{}]*\})*?\})',
        re.DOTALL
    )

    count = 0

    def replace_task(m):
        nonlocal count
        task_str = m.group(1)

        # Remove existing alternatives block if present (handles escaped apostrophes safely)
        task_str_clean = re.sub(r',?\s*alternatives:\s*\[[^\]]*\]', '', task_str, flags=re.DOTALL)

        # Strip trailing whitespace/newline before closing brace, then add alternatives
        task_str_new = re.sub(
            r'(\s*)\}$',
            lambda mm: mm.group(1).rstrip(' ') + f',\n        {alts_block}\n      ' + '}',
            task_str_clean.rstrip()
        )

        count += 1
        return task_str_new

    new_content = task_pat.sub(replace_task, content)
    status = 'OK' if count > 0 else 'WARNING: not found'
    print(f'  {status}: {count}x  "{answer_fragment[:55]}"')
    return new_content


print('Patching dialogue alternatives...')
for answer_frag, alts in EXTRA_ALTS.items():
    content = patch_task(content, answer_frag, alts)

# Quick syntax sanity check
errors = []
for m in re.finditer(r'task:\s*\{', content):
    start = m.start()
    depth = 0
    for i in range(start, min(start + 2000, len(content))):
        if content[i] == '{':
            depth += 1
        elif content[i] == '}':
            depth -= 1
            if depth == 0:
                break
    else:
        errors.append(start)
print(f'Brace check: {len(errors)} unclosed task blocks')

with open('src/data/dialogues.js', 'w', encoding='utf-8') as f:
    f.write(content)
print('Done.')
