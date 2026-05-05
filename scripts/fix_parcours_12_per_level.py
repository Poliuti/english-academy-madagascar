#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
TASK 6: ensure each topic in MON PARCOURS has at least 12 exercises per
difficulty level (1, 2, 3) — i.e. 36 total minimum per topic.

Strategy
--------
Read src/data/exercises.js, count current exercises per level per topic,
generate the deficit using topic-specific content libraries, then insert
the new entries before each topic's closing `],`. Pure-additive — never
modifies or removes existing exercises.
"""
import re
import sys
import io
import os

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

PATH = 'src/data/exercises.js'

# ─── Content libraries per topic ────────────────────────────────────────────
# Each item: (type, diffLevel, content_dict)
# Types and required keys:
#   fill-blank:    {template, answer, hint, explanation}
#   translate:     {french, answer, alternatives, hint, explanation}
#   word-order:    {words, answer, hint, explanation}
#   error-correct: {sentence, answer, hint, explanation}

TARGET_PER_LEVEL = 12

# All exercises below produced fresh — each topic+level gets a pool;
# generator picks however many are needed to reach 12 per level.

CONTENT = {
    'routine': {
        1: [
            ('translate', "Je me lève à six heures.", "I wake up at six.",
             ["I wake up at 6.", "I get up at six."],
             "Routine = Present Simple", "Avec 'I', verbe sans -s."),
            ('translate', "Tu prends ton petit-déjeuner.", "You have breakfast.",
             ["You eat breakfast."], "have/eat breakfast", "'You' = pas de -s."),
            ('fill-blank', "I ___ my teeth every morning.", "brush",
             [], "se brosser = brush", "'Brush' avec 'I' reste 'brush'."),
            ('word-order', ['She', 'wakes', 'up', 'at', 'seven'], "She wakes up at seven.",
             "She → wakes (avec -s)", "Routine au Present Simple."),
            ('fill-blank', "We ___ home at five.", "come",
             [], "rentrer = come home", "Avec 'we', verbe sans -s."),
            ('translate', "Il prend une douche.", "He takes a shower.",
             ["He has a shower."], "He → -s", "'Take a shower' = prendre une douche."),
            ('word-order', ['I', 'go', 'to', 'bed', 'at', 'ten'], "I go to bed at ten.",
             "go to bed = se coucher", "Heure à la fin."),
            ('fill-blank', "They ___ dinner at seven.", "have",
             [], "dîner = have dinner", "'They' → pas de -s."),
            ('translate', "Elle se réveille tôt.", "She wakes up early.",
             ["She gets up early."], "She → wakes", "Routine."),
            ('word-order', ['We', 'eat', 'lunch', 'at', 'noon'], "We eat lunch at noon.",
             "noon = midi", "Sujet + verbe + complément."),
        ],
        2: [
            ('translate', "Je me lève toujours à six heures.", "I always wake up at six.",
             ["I always get up at six."], "always avant le verbe", "Adverbe de fréquence avant le verbe."),
            ('error-correct', "She wake up at seven.", "She wakes up at seven.",
             "She → wakes", "3ème pers sing → -s."),
            ('fill-blank', "He usually ___ a shower in the morning.", "takes",
             ["has"], "He → -s", "Routine matinale."),
            ('translate', "Nous prenons le petit-déjeuner ensemble.", "We have breakfast together.",
             ["We eat breakfast together."], "ensemble = together", "Routine partagée."),
            ('word-order', ['My', 'sister', 'never', 'eats', 'breakfast'], "My sister never eats breakfast.",
             "never avant verbe", "Adverbe de fréquence avant le verbe principal."),
            ('error-correct', "He don't go to school on Sunday.", "He doesn't go to school on Sunday.",
             "He → doesn't", "Forme négative 3ème pers."),
            ('fill-blank', "I ___ home at six in the evening.", "come",
             ["go"], "rentrer = come home", "Avec 'I', sans -s."),
            ('translate', "Mon frère se couche tard.", "My brother goes to bed late.",
             [], "tard = late", "'My brother' = he → goes."),
            ('word-order', ['She', 'often', 'reads', 'before', 'bed'], "She often reads before bed.",
             "often avant verbe", "Adverbe de fréquence."),
            ('fill-blank', "We ___ TV in the evening.", "watch",
             [], "regarder la télé = watch TV", "Avec 'we', pas de -s."),
        ],
        3: [
            ('error-correct', "My mother work in a hospital.", "My mother works in a hospital.",
             "mother = she → -s", "3ème pers sing au Present Simple."),
            ('translate', "D'habitude, je me réveille avant que mes parents se lèvent.",
             "Usually, I wake up before my parents get up.",
             ["I usually wake up before my parents get up."],
             "before + sujet + verbe", "Phrase complexe avec 'before'."),
            ('error-correct', "He always go to bed at ten.", "He always goes to bed at ten.",
             "He → goes", "Adverbe + verbe à la 3ème pers."),
            ('translate', "Après le dîner, nous regardons la télé pendant une heure.",
             "After dinner, we watch TV for one hour.",
             ["After dinner, we watch TV for an hour."],
             "for + durée", "'For one hour' = pendant une heure."),
            ('error-correct', "She brush her teeth twice a day.", "She brushes her teeth twice a day.",
             "She → brushes (-es après sh)", "Brush → brushes."),
            ('translate', "Mon père commence à travailler à sept heures et rentre à six heures.",
             "My father starts working at seven and comes home at six.",
             ["My father starts work at seven and comes home at six."],
             "starts + Ving / starts work", "Deux verbes coordonnés à la 3ème pers."),
            ('error-correct', "We doesn't have lunch at home.", "We don't have lunch at home.",
             "we → don't", "Sujet pluriel/we → don't."),
            ('translate', "Avant d'aller à l'école, elle prend toujours un petit-déjeuner.",
             "Before going to school, she always has breakfast.",
             ["Before going to school, she always eats breakfast."],
             "before + Ving", "Forme 'before -ing'."),
            ('error-correct', "I am wake up at six every day.", "I wake up at six every day.",
             "Pas de 'am' en routine", "Present Simple sans auxiliaire."),
            ('translate', "Elle ne prend jamais de petit-déjeuner avant le travail.",
             "She never has breakfast before work.",
             ["She never eats breakfast before work."],
             "never après auxiliaire / avant verbe", "Adverbe négatif avec verbe lexical."),
        ],
    },

    'family': {
        1: [
            ('translate', "Mon père est gentil.", "My father is kind.", ["My dad is kind."],
             "father = père", "Adjectif après be."),
            ('fill-blank', "She ___ my sister.", "is", [], "She + be = is", "Verbe be 3ème pers."),
            ('word-order', ['I', 'have', 'two', 'brothers'], "I have two brothers.",
             "have = avoir", "Sujet + have + complément."),
            ('translate', "Tu as une sœur.", "You have a sister.", [],
             "You → have", "Pas de -s avec 'you'."),
            ('fill-blank', "He ___ a son.", "has", [], "He + have = has",
             "'Have' à la 3ème pers = has."),
            ('word-order', ['My', 'mother', 'is', 'a', 'teacher'], "My mother is a teacher.",
             "a + métier", "Article 'a' devant un nom de métier."),
            ('translate', "Nous avons une grande famille.", "We have a big family.",
             [], "big = grand", "Adjectif avant le nom."),
            ('fill-blank', "They ___ my parents.", "are", [], "They + be = are",
             "Be au pluriel = are."),
            ('word-order', ['She', 'is', 'my', 'aunt'], "She is my aunt.",
             "aunt = tante", "Possessif 'my' devant le nom."),
            ('translate', "C'est mon oncle.", "He is my uncle.",
             ["This is my uncle.", "He's my uncle."], "uncle = oncle", "He / This is."),
        ],
        2: [
            ('error-correct', "I have two brother.", "I have two brothers.",
             "two → pluriel", "Pluriel après un nombre > 1."),
            ('translate', "Mes parents habitent à Antananarivo.", "My parents live in Antananarivo.",
             [], "live in + ville", "Préposition 'in' pour les villes."),
            ('fill-blank', "My grandmother ___ very kind.", "is", [], "she = is",
             "'Grandmother' = she."),
            ('error-correct', "My sister have a baby.", "My sister has a baby.",
             "sister = she → has", "Have à la 3ème pers = has."),
            ('translate', "Combien de cousins as-tu ?", "How many cousins do you have?",
             [], "How many + pluriel + do/does", "Question avec 'how many'."),
            ('word-order', ['My', 'cousin', 'lives', 'in', 'France'], "My cousin lives in France.",
             "cousin = he/she → lives", "3ème pers sing."),
            ('fill-blank', "Their children ___ at school.", "are", [],
             "children pluriel → are", "Be au pluriel."),
            ('translate', "Ma tante a deux enfants.", "My aunt has two children.",
             [], "child → children", "Pluriel irrégulier."),
            ('error-correct', "He are my uncle.", "He is my uncle.",
             "He → is", "Be 3ème pers sing."),
            ('word-order', ['Our', 'family', 'is', 'very', 'big'], "Our family is very big.",
             "family = it (singular)", "'Family' = singulier en anglais courant."),
        ],
        3: [
            ('error-correct', "My brother and me are students.", "My brother and I are students.",
             "Sujet → I, pas me", "'Me' est complément, 'I' est sujet."),
            ('translate', "Ma sœur aînée travaille comme infirmière à l'hôpital.",
             "My older sister works as a nurse at the hospital.",
             ["My elder sister works as a nurse at the hospital."],
             "older / elder + nom de personne", "Comparatif d'âge."),
            ('error-correct', "She have a children.", "She has a child.",
             "a + singulier; have → has", "Article 'a' + singulier."),
            ('translate', "Mes grands-parents habitent à la campagne depuis vingt ans.",
             "My grandparents have lived in the countryside for twenty years.",
             ["My grandparents have been living in the countryside for twenty years."],
             "for + durée → Present Perfect", "Action commencée dans le passé et qui continue."),
            ('error-correct', "He don't have any brothers.", "He doesn't have any brothers.",
             "He → doesn't", "Forme négative 3ème pers."),
            ('translate', "Mon père est plus grand que ma mère.", "My father is taller than my mother.",
             [], "comparatif → -er than", "Comparatif court."),
            ('error-correct', "Their childrens are at school.", "Their children are at school.",
             "child → children (pas childrens)", "Pluriel irrégulier."),
            ('translate', "Bien que ma cousine vive à l'étranger, nous nous parlons souvent.",
             "Although my cousin lives abroad, we often talk to each other.",
             ["Even though my cousin lives abroad, we often talk to each other."],
             "although + sujet + verbe", "Conjonction de concession."),
            ('error-correct', "We is a happy family.", "We are a happy family.",
             "We → are", "Be au pluriel."),
            ('translate', "Si mes parents ont le temps, ils nous rendent visite le dimanche.",
             "If my parents have time, they visit us on Sunday.",
             ["If my parents have time, they visit us on Sundays."],
             "If + Present, Present", "Conditionnel zéro."),
        ],
    },

    'school': {
        1: [
            ('translate', "Je suis étudiant.", "I am a student.", ["I'm a student."],
             "a + métier", "Article 'a' obligatoire."),
            ('fill-blank', "We ___ in class.", "are", [], "we → are", "Be pluriel."),
            ('word-order', ['I', 'have', 'a', 'pen'], "I have a pen.",
             "pen = stylo", "S+V+C."),
            ('translate', "Le professeur est gentil.", "The teacher is kind.",
             [], "the + nom défini", "Article défini."),
            ('fill-blank', "She ___ a book.", "has", [], "she → has", "Have 3ème pers."),
            ('word-order', ['The', 'school', 'is', 'big'], "The school is big.",
             "the + school", "Article devant 'school'."),
            ('translate', "C'est ma classe.", "This is my class.",
             ["It's my class."], "this = ceci", "Démonstratif singulier."),
            ('fill-blank', "They ___ pupils.", "are", [], "they → are", "Be pluriel."),
            ('word-order', ['I', 'like', 'English'], "I like English.",
             "Pas d'article devant matière", "'English' sans article."),
            ('translate', "J'ai un cahier.", "I have a notebook.",
             [], "notebook = cahier", "S + have + a + nom."),
        ],
        2: [
            ('error-correct', "I am student.", "I am a student.",
             "Article 'a' obligatoire", "On dit toujours 'a student'."),
            ('translate', "Mon professeur de mathématiques est très bon.",
             "My maths teacher is very good.",
             ["My math teacher is very good."], "maths = mathématiques", "Adjectif composé."),
            ('fill-blank', "We have ___ classes today.", "many",
             ["several", "lots of"], "beaucoup = many/lots of", "Quantifieur."),
            ('error-correct', "He study English at university.", "He studies English at university.",
             "he → studies", "Verbe en -y → -ies."),
            ('translate', "Quand commence l'école ?", "When does school start?",
             [], "When + does + verbe", "Question avec 'when'."),
            ('word-order', ['My', 'school', 'starts', 'at', 'eight'], "My school starts at eight.",
             "starts (3ème pers)", "Sujet 'school' = it."),
            ('fill-blank', "There ___ many books in the library.", "are",
             [], "many → are", "There + be au pluriel."),
            ('translate', "Les élèves font leurs devoirs.", "The pupils do their homework.",
             ["The students do their homework."], "pupils/students = élèves", "Pluriel + do."),
            ('error-correct', "She don't like maths.", "She doesn't like maths.",
             "she → doesn't", "Négation 3ème pers."),
            ('word-order', ['I', 'always', 'do', 'my', 'homework'], "I always do my homework.",
             "always avant verbe", "Adverbe de fréquence."),
        ],
        3: [
            ('error-correct', "I am studying English since two years.", "I have been studying English for two years.",
             "for + durée → Present Perfect", "Action continue depuis."),
            ('translate', "Si tu étudies dur, tu réussiras tes examens.",
             "If you study hard, you will pass your exams.",
             ["If you study hard, you'll pass your exams."],
             "If + Present, will + V", "Conditionnel type 1."),
            ('error-correct', "The students is doing their homework.", "The students are doing their homework.",
             "students → are", "Sujet pluriel."),
            ('translate', "Mon cours d'anglais préféré est celui qui a lieu le matin.",
             "My favourite English class is the one that takes place in the morning.",
             ["My favorite English class is the one that takes place in the morning."],
             "the one that = celui qui", "Pronom relatif."),
            ('error-correct', "He study at the library every day.", "He studies at the library every day.",
             "he → studies", "Verbe en -y."),
            ('translate', "Les élèves qui travaillent dur réussissent toujours.",
             "Pupils who work hard always succeed.",
             ["Students who work hard always succeed."],
             "who = qui (sujet)", "Pronom relatif sujet."),
            ('error-correct', "I have learn many things at school.", "I have learnt many things at school.",
             "have + participle", "Present Perfect → past participle."),
            ('translate', "Lorsque j'étais à l'école primaire, j'aimais beaucoup les mathématiques.",
             "When I was in primary school, I liked maths a lot.",
             ["When I was in primary school, I really liked maths."],
             "Past Simple", "Habitude passée."),
            ('error-correct', "She is more better at English than me.", "She is better at English than me.",
             "Pas 'more' avec 'better'", "Comparatif irrégulier."),
            ('translate', "Bien que les examens soient difficiles, je vais les réussir.",
             "Although the exams are difficult, I will pass them.",
             ["Even though the exams are difficult, I will pass them."],
             "although + sujet + verbe", "Concession."),
        ],
    },

    'body': {
        1: [
            ('translate', "J'ai deux yeux.", "I have two eyes.", [], "eye → eyes", "Pluriel régulier."),
            ('fill-blank', "She ___ long hair.", "has", [], "she → has", "Have 3ème pers."),
            ('word-order', ['He', 'has', 'short', 'hair'], "He has short hair.",
             "short hair = cheveux courts", "Adjectif avant nom."),
            ('translate', "Ma main est petite.", "My hand is small.", [],
             "hand = main", "Possessif + nom."),
            ('fill-blank', "We ___ ten fingers.", "have", [], "we → have", "Have pluriel."),
            ('word-order', ['I', 'have', 'a', 'big', 'nose'], "I have a big nose.",
             "big nose = grand nez", "Article + adjectif + nom."),
            ('translate', "Tes yeux sont bleus.", "Your eyes are blue.",
             [], "eyes pluriel → are", "Pluriel + be."),
            ('fill-blank', "His feet ___ big.", "are", [], "feet pluriel → are", "Foot → feet."),
            ('word-order', ['Her', 'eyes', 'are', 'green'], "Her eyes are green.",
             "green = vert", "Pluriel + couleur."),
            ('translate', "Mes pieds sont fatigués.", "My feet are tired.",
             [], "feet (pluriel)", "'Foot' au pluriel = feet."),
        ],
        2: [
            ('error-correct', "He have two foots.", "He has two feet.",
             "have→has; foot→feet", "Pluriel irrégulier + 3ème pers."),
            ('translate', "Mes cheveux sont longs et noirs.", "My hair is long and black.",
             [], "hair = singulier", "'Hair' = nom indénombrable singulier."),
            ('fill-blank', "There ___ five fingers on my hand.", "are",
             [], "five → are", "Pluriel + there be."),
            ('error-correct', "She have a beautiful eyes.", "She has beautiful eyes.",
             "Pas d'article devant pluriel", "Pas de 'a' devant pluriel."),
            ('translate', "Il a mal à la tête.", "He has a headache.",
             ["He has got a headache."], "have a headache", "Maladie = have + a + nom."),
            ('word-order', ['My', 'arm', 'is', 'longer', 'than', 'yours'],
             "My arm is longer than yours.", "longer than = plus long que", "Comparatif + that of yours/yours."),
            ('fill-blank', "I have a pain in my ___.", "stomach",
             ["leg", "head"], "ventre = stomach", "Localisation de la douleur."),
            ('translate', "Ses cheveux sont blonds.", "His hair is blond.",
             ["Her hair is blond."], "hair = singulier", "'Hair' indénombrable."),
            ('error-correct', "His teeth is white.", "His teeth are white.",
             "teeth → pluriel → are", "Tooth → teeth."),
            ('word-order', ['Her', 'face', 'is', 'beautiful'], "Her face is beautiful.",
             "face = visage", "Possessif + nom + be + adj."),
        ],
        3: [
            ('error-correct', "I have a strongs arms.", "I have strong arms.",
             "Pas de -s à l'adjectif; pas d'article", "Adjectifs invariables."),
            ('translate', "Si tu as mal au dos, tu devrais voir un médecin.",
             "If you have a backache, you should see a doctor.",
             ["If your back hurts, you should see a doctor."],
             "should + V", "Conseil au présent."),
            ('error-correct', "She is having long hairs.", "She has long hair.",
             "have (état) sans -ing; hair singulier", "État → Present Simple."),
            ('translate', "Ses yeux sont aussi bleus que le ciel.", "Her eyes are as blue as the sky.",
             [], "as ... as", "Comparaison d'égalité."),
            ('error-correct', "His leg is more longer than mine.", "His leg is longer than mine.",
             "Pas 'more' + comparatif court", "Adjectif court → -er."),
            ('translate', "Quand j'étais enfant, mes cheveux étaient blonds.",
             "When I was a child, my hair was blond.",
             [], "Past be", "État passé."),
            ('error-correct', "I have hurt in my back.", "I have a pain in my back.",
             "a pain in", "Expression idiomatique."),
            ('translate', "Le médecin a dit que mon bras serait guéri dans trois semaines.",
             "The doctor said that my arm would be healed in three weeks.",
             [], "discours indirect → would", "Concordance des temps."),
            ('error-correct', "My foots is hurting.", "My feet are hurting.",
             "foot→feet; is→are", "Pluriel irrégulier."),
            ('translate', "Bien que ses cheveux soient courts, ils sont très beaux.",
             "Although her hair is short, it is very beautiful.",
             ["Even though her hair is short, it is very beautiful."],
             "although + S+V; hair = it", "Concession + indénombrable."),
        ],
    },

    'time': {
        1: [
            ('translate', "Il est trois heures.", "It is three o'clock.",
             ["It's three o'clock.", "It is 3."], "It is + heure", "Heure exacte."),
            ('fill-blank', "It is ___ o'clock.", "five",
             ["six", "two"], "heure pile", "Nombre + o'clock."),
            ('word-order', ['It', 'is', 'half', 'past', 'two'], "It is half past two.",
             "half past = et demie", "Heure et demie."),
            ('translate', "Quel jour sommes-nous ?", "What day is it?",
             ["What day is today?"], "What day", "Question sur le jour."),
            ('fill-blank', "Today is ___.", "Monday",
             ["Tuesday", "Sunday"], "jour de la semaine", "Capitalize."),
            ('word-order', ['It', 'is', 'a', 'quarter', 'past', 'six'],
             "It is a quarter past six.",
             "a quarter past = et quart", "Heure et quart."),
            ('translate', "Il est midi.", "It is noon.",
             ["It's noon.", "It is twelve.", "It's twelve o'clock."], "noon = midi", "Midi en anglais."),
            ('fill-blank', "It is ___ in the morning.", "early",
             ["late"], "early = tôt", "Adverbe."),
            ('word-order', ['What', 'time', 'is', 'it'], "What time is it?",
             "What time", "Question sur l'heure."),
            ('translate', "Nous sommes en janvier.", "It is January.",
             ["It's January."], "It is + mois", "Mois capitalisé."),
        ],
        2: [
            ('error-correct', "It is the three o'clock.", "It is three o'clock.",
             "Pas de 'the' devant l'heure", "Heure sans article."),
            ('translate', "Il est quatre heures et demie.", "It is half past four.",
             ["It's half past four.", "It is four thirty."], "half past 4", "Heure et demie."),
            ('fill-blank', "I get up ___ seven a.m.", "at",
             [], "at + heure", "Préposition de temps précis."),
            ('error-correct', "We are in monday.", "It is Monday.",
             "It is + jour", "Pas 'in monday'."),
            ('translate', "Je travaille le lundi.", "I work on Monday.",
             ["I work on Mondays."], "on + jour", "Préposition + jour."),
            ('word-order', ['She', 'is', 'busy', 'on', 'Tuesday'], "She is busy on Tuesday.",
             "on Tuesday", "'on' + jour de la semaine."),
            ('fill-blank', "We are ___ January.", "in",
             [], "in + mois", "Préposition + mois."),
            ('translate', "Il est huit heures moins le quart.", "It is a quarter to eight.",
             ["It's a quarter to eight.", "It is 7:45."], "quarter to 8", "Heure moins le quart."),
            ('error-correct', "It is two and ten.", "It is ten past two.",
             "ten past two", "Heure + 10."),
            ('word-order', ['The', 'meeting', 'is', 'at', 'noon'], "The meeting is at noon.",
             "at noon = à midi", "Préposition + noon."),
        ],
        3: [
            ('error-correct', "It is January 5, in 2024.", "It is January 5, 2024.",
             "Pas de 'in' devant l'année isolée", "Date complète."),
            ('translate', "L'école commence à huit heures du matin et finit à quinze heures.",
             "School starts at eight in the morning and ends at three in the afternoon.",
             ["School starts at eight a.m. and ends at three p.m."],
             "at + heure", "Plage horaire."),
            ('error-correct', "He was born on 1990.", "He was born in 1990.",
             "in + année", "Préposition + année."),
            ('translate', "Si tu arrives tôt, nous pouvons commencer la réunion à neuf heures.",
             "If you arrive early, we can start the meeting at nine.",
             ["If you arrive early, we can start the meeting at nine o'clock."],
             "If + Present, can + V", "Conditionnel + heure."),
            ('error-correct', "We met at the last Sunday.", "We met last Sunday.",
             "Pas de 'the' avec last", "Last/next sans article."),
            ('translate', "Quand je serai grand, je me lèverai à six heures tous les jours.",
             "When I grow up, I will wake up at six every day.",
             ["When I'm older, I will wake up at six every day."],
             "When + Present, will + V", "Future après 'when'."),
            ('error-correct', "It is ten o'clock and half.", "It is half past ten.",
             "half past ten", "Heure et demie."),
            ('translate', "L'année dernière, mon anniversaire est tombé un mardi.",
             "Last year, my birthday was on a Tuesday.",
             [], "on a + jour", "Date + jour de la semaine."),
            ('error-correct', "I will be there by five hours.", "I will be there by five o'clock.",
             "by + heure (o'clock pas hours)", "Préposition + heure."),
            ('translate', "À quelle heure le film commence-t-il ce soir ?",
             "What time does the movie start tonight?",
             ["What time does the film start tonight?"],
             "What time + does", "Question heure."),
        ],
    },

    'food': {
        1: [
            ('translate', "J'aime les pommes.", "I like apples.", [],
             "Pas d'article au pluriel général", "Préférence générale."),
            ('fill-blank', "She ___ bread.", "eats", [], "she → -s", "Présent simple."),
            ('word-order', ['I', 'eat', 'rice', 'every', 'day'], "I eat rice every day.",
             "rice = riz", "Routine alimentaire."),
            ('translate', "Tu bois de l'eau.", "You drink water.", [],
             "Pas d'article devant 'water'", "Indénombrable."),
            ('fill-blank', "We ___ fish.", "like",
             ["eat"], "we → like", "Pas de -s avec we."),
            ('word-order', ['He', 'wants', 'an', 'orange'], "He wants an orange.",
             "an orange (voyelle)", "Article 'an'."),
            ('translate', "Elle mange du pain.", "She eats bread.", [],
             "she → eats", "Indénombrable."),
            ('fill-blank', "I drink ___ in the morning.", "milk",
             ["tea", "coffee"], "boisson matinale", "Indénombrable."),
            ('word-order', ['Do', 'you', 'like', 'fish'], "Do you like fish?",
             "Do + you + V", "Question."),
            ('translate', "C'est délicieux !", "It is delicious!",
             ["It's delicious!"], "delicious = délicieux", "Adjectif après be."),
        ],
        2: [
            ('error-correct', "She eat an apple every day.", "She eats an apple every day.",
             "she → eats", "3ème pers."),
            ('translate', "Voulez-vous du thé ou du café ?", "Do you want tea or coffee?",
             [], "Do + you + want", "Question avec or."),
            ('fill-blank', "There ___ some bread on the table.", "is",
             [], "bread = singulier indénombrable", "Be singulier."),
            ('error-correct', "I have a milk every morning.", "I have milk every morning.",
             "Pas d'article devant indénombrable", "'Milk' sans article."),
            ('translate', "Combien de pommes veux-tu ?", "How many apples do you want?",
             [], "how many + pluriel", "Question sur quantité."),
            ('word-order', ['He', 'never', 'eats', 'meat'], "He never eats meat.",
             "never avant verbe", "Adverbe + 3ème pers."),
            ('fill-blank', "Can I have ___ water, please?", "some",
             [], "some + indénombrable", "Quantifieur."),
            ('translate', "Mes parents préparent le dîner.", "My parents are making dinner.",
             ["My parents are cooking dinner."], "make/cook dinner", "Action en cours."),
            ('error-correct', "I would like a rice.", "I would like some rice.",
             "indénombrable → some", "'Rice' sans 'a'."),
            ('word-order', ['She', 'always', 'drinks', 'tea'], "She always drinks tea.",
             "always + 3ème pers", "Adverbe de fréquence."),
        ],
        3: [
            ('error-correct', "I have eat too much breads.", "I have eaten too much bread.",
             "ate→eaten; bread = indénombrable", "Present Perfect + indénombrable."),
            ('translate', "Si tu ne manges pas de légumes, tu ne seras pas en bonne santé.",
             "If you don't eat vegetables, you won't be healthy.",
             ["If you don't eat vegetables, you will not be healthy."],
             "If + Present, won't + V", "Conditionnel type 1 négatif."),
            ('error-correct', "There is many fruits in the basket.", "There are many fruits in the basket.",
             "many + pluriel → are", "Sujet pluriel."),
            ('translate', "Bien que je n'aime pas les légumes, je sais que c'est bon pour la santé.",
             "Although I don't like vegetables, I know they are good for health.",
             ["Even though I don't like vegetables, I know they are good for health."],
             "although + S+V", "Concession."),
            ('error-correct', "She is having a tea now.", "She is having tea now.",
             "Pas d'article devant indénombrable", "'Tea' indénombrable."),
            ('translate', "Si j'avais plus de temps, je cuisinerais tous les jours.",
             "If I had more time, I would cook every day.",
             [], "If + Past, would + V", "Conditionnel type 2."),
            ('error-correct', "He doesn't eat the meat.", "He doesn't eat meat.",
             "Pas 'the' au sens général", "Sens général sans article."),
            ('translate', "Le pain qui est sur la table est très bon.",
             "The bread that is on the table is very good.",
             ["The bread on the table is very good."],
             "that = qui", "Relatif sujet."),
            ('error-correct', "I am drink water every day.", "I drink water every day.",
             "Pas de 'am' au présent simple", "Routine sans 'be'."),
            ('translate', "Les enfants devraient manger plus de fruits et moins de bonbons.",
             "Children should eat more fruit and fewer sweets.",
             ["Children should eat more fruit and less candy."],
             "more/fewer", "Comparatif quantité."),
        ],
    },

    'colors': {
        1: [
            ('translate', "Le ciel est bleu.", "The sky is blue.", [],
             "the + sky", "Article défini."),
            ('fill-blank', "My shirt is ___.", "red",
             ["white", "blue"], "couleur courante", "Couleur après be."),
            ('word-order', ['The', 'cat', 'is', 'black'], "The cat is black.",
             "black = noir", "S + be + couleur."),
            ('translate', "J'aime le vert.", "I like green.", [],
             "couleur sans article général", "Préférence."),
            ('fill-blank', "Roses are ___.", "red", [], "rose rouge", "Pluriel + be."),
            ('word-order', ['My', 'car', 'is', 'white'], "My car is white.",
             "white = blanc", "Possessif + nom + couleur."),
            ('translate', "La banane est jaune.", "The banana is yellow.",
             [], "yellow = jaune", "Article + nom."),
            ('fill-blank', "Grass is ___.", "green",
             [], "herbe verte", "Indénombrable."),
            ('word-order', ['I', 'have', 'a', 'blue', 'pen'], "I have a blue pen.",
             "blue avant pen", "Adjectif avant nom."),
            ('translate', "Les pommes sont rouges ou vertes.", "Apples are red or green.",
             [], "or = ou", "Pluriel sans article."),
        ],
        2: [
            ('error-correct', "I have a hat black.", "I have a black hat.",
             "Adjectif avant le nom", "Couleur avant nom."),
            ('translate', "Sa voiture est rouge foncé.", "His car is dark red.",
             ["Her car is dark red."], "dark = foncé", "Nuance de couleur."),
            ('fill-blank', "The sea is ___.", "blue",
             [], "mer bleue", "Article + couleur."),
            ('error-correct', "Her dress is yellow color.", "Her dress is yellow.",
             "Pas 'color' après l'adjectif", "Couleur seule."),
            ('translate', "Mes yeux sont marron.", "My eyes are brown.",
             [], "brown = marron", "Pluriel + couleur."),
            ('word-order', ['She', 'wants', 'a', 'pink', 'dress'], "She wants a pink dress.",
             "pink avant dress", "Adjectif avant nom."),
            ('fill-blank', "Snow is ___.", "white",
             [], "neige blanche", "Indénombrable."),
            ('translate', "Quelle est ta couleur préférée ?", "What is your favourite colour?",
             ["What's your favorite color?"], "favourite/favorite", "Orthographe UK/US."),
            ('error-correct', "The sky are blue.", "The sky is blue.",
             "sky = it → is", "Singulier + be."),
            ('word-order', ['His', 'shoes', 'are', 'black'], "His shoes are black.",
             "shoes pluriel → are", "Pluriel."),
        ],
        3: [
            ('error-correct', "She wear a dress red and blue.", "She wears a red and blue dress.",
             "wears; couleurs avant nom", "3ème pers + ordre adj."),
            ('translate', "Si je pouvais choisir, je peindrais ma chambre en bleu clair.",
             "If I could choose, I would paint my room light blue.",
             ["If I could choose, I would paint my room a light blue."],
             "If + could, would + V", "Conditionnel."),
            ('error-correct', "The car blue is mine.", "The blue car is mine.",
             "blue avant car", "Adjectif avant nom."),
            ('translate', "Sa robe est plus claire que la mienne.", "Her dress is lighter than mine.",
             [], "lighter than", "Comparatif."),
            ('error-correct', "These colors is beautiful.", "These colours are beautiful.",
             "colours pluriel → are", "Sujet pluriel."),
            ('translate', "J'ai acheté une chemise bleu marine et un pantalon noir.",
             "I bought a navy blue shirt and black trousers.",
             ["I bought a navy blue shirt and black pants."],
             "navy blue", "Couleur composée."),
            ('error-correct', "I have buy a yellow car.", "I have bought a yellow car.",
             "have + past participle", "Present Perfect."),
            ('translate', "Quand j'étais enfant, ma couleur préférée était le rouge.",
             "When I was a child, my favourite colour was red.",
             ["When I was a child, my favorite color was red."],
             "Past be + couleur", "Goût passé."),
            ('error-correct', "The sky was painted on blue.", "The sky was painted blue.",
             "Pas de préposition", "'Paint' + objet + couleur."),
            ('translate', "Les vêtements que j'ai achetés hier sont tous noirs.",
             "The clothes I bought yesterday are all black.",
             ["The clothes that I bought yesterday are all black."],
             "that omis", "Relatif COD omis."),
        ],
    },

    'numbers': {
        1: [
            ('translate', "J'ai trois frères.", "I have three brothers.", [],
             "three brothers", "Nombre + pluriel."),
            ('fill-blank', "She is ___ years old.", "ten",
             ["five", "twelve"], "âge", "Years old."),
            ('word-order', ['I', 'have', 'two', 'cats'], "I have two cats.",
             "two cats (pluriel)", "Nombre + nom pluriel."),
            ('translate', "Nous sommes cinq.", "We are five.",
             ["There are five of us."], "we are + nombre", "Quantité de personnes."),
            ('fill-blank', "There are ___ days in a week.", "seven",
             [], "7 jours", "Nombre exact."),
            ('word-order', ['He', 'has', 'four', 'apples'], "He has four apples.",
             "He → has", "3ème pers + nombre."),
            ('translate', "Il y a douze mois dans une année.", "There are twelve months in a year.",
             [], "twelve months", "Nombre + pluriel."),
            ('fill-blank', "I am ___ years old.", "twenty",
             ["fifteen"], "âge", "Number + years old."),
            ('word-order', ['She', 'buys', 'six', 'oranges'], "She buys six oranges.",
             "she + buys", "3ème pers + nombre."),
            ('translate', "Mon livre coûte dix euros.", "My book costs ten euros.",
             [], "costs = coûte", "3ème pers + nombre + unité."),
        ],
        2: [
            ('error-correct', "I have two brother.", "I have two brothers.",
             "two → pluriel", "Nombre > 1 → pluriel."),
            ('translate', "Combien de stylos as-tu ?", "How many pens do you have?",
             [], "How many + pluriel", "Question quantité."),
            ('fill-blank', "There are ___ minutes in an hour.", "sixty",
             [], "60 min", "Nombre exact."),
            ('error-correct', "She is twenty year old.", "She is twenty years old.",
             "years (pluriel)", "Years après nombre > 1."),
            ('translate', "Nous avons besoin de cinq personnes.", "We need five people.",
             [], "people = pluriel", "Pluriel irrégulier."),
            ('word-order', ['The', 'class', 'has', 'thirty', 'students'], "The class has thirty students.",
             "thirty students", "Sujet + has + nombre + nom."),
            ('fill-blank', "My phone number is two-five-___-eight.", "seven",
             [], "0-9", "Nombre dans une séquence."),
            ('translate', "Mon père a quarante ans.", "My father is forty years old.",
             ["My father is forty."], "forty years old", "Âge."),
            ('error-correct', "There is twenty pupils.", "There are twenty pupils.",
             "Pluriel → are", "Be + pluriel."),
            ('word-order', ['It', 'costs', 'fifty', 'dollars'], "It costs fifty dollars.",
             "fifty dollars", "Prix."),
        ],
        3: [
            ('error-correct', "He has fives childrens.", "He has five children.",
             "five (pas fives); children", "Nombre + pluriel irrégulier."),
            ('translate', "Si nous avions cent dollars, nous pourrions acheter ce livre.",
             "If we had a hundred dollars, we could buy that book.",
             ["If we had one hundred dollars, we could buy that book."],
             "If + Past, could + V", "Conditionnel + nombre."),
            ('error-correct', "I am studying English since two year.", "I have been studying English for two years.",
             "for + durée → Present Perfect", "Two years."),
            ('translate', "Il y avait deux mille personnes au concert.", "There were two thousand people at the concert.",
             [], "two thousand people", "Grand nombre + pluriel."),
            ('error-correct', "The book costs ten dollar.", "The book costs ten dollars.",
             "dollars (pluriel)", "Pluriel après nombre."),
            ('translate', "Nous avons besoin d'au moins dix volontaires pour ce projet.",
             "We need at least ten volunteers for this project.",
             [], "at least + nombre", "Quantité minimum."),
            ('error-correct', "She have twenty-one years old.", "She is twenty-one years old.",
             "is + nombre + years old", "Âge avec be."),
            ('translate', "Le pourcentage de réussite a augmenté de cinq pour cent l'année dernière.",
             "The success rate increased by five percent last year.",
             ["The success rate went up by five percent last year."],
             "by + nombre + percent", "Augmentation."),
            ('error-correct', "Their three childrens are at school.", "Their three children are at school.",
             "child → children", "Pluriel irrégulier."),
            ('translate', "Bien que j'aie économisé mille euros, ce n'est pas assez.",
             "Although I have saved one thousand euros, it is not enough.",
             ["Even though I've saved a thousand euros, it isn't enough."],
             "although + Present Perfect", "Concession + grand nombre."),
        ],
    },

    'verbs': {
        1: [
            ('translate', "Je joue au football.", "I play football.", [],
             "play + sport", "Pas d'article devant sport."),
            ('fill-blank', "She ___ to music.", "listens",
             [], "listen + to", "She → -s."),
            ('word-order', ['I', 'eat', 'rice', 'every', 'day'], "I eat rice every day.",
             "eat = manger", "Routine."),
            ('translate', "Tu cours vite.", "You run fast.",
             ["You run quickly."], "fast = vite", "Adverbe."),
            ('fill-blank', "He ___ to school.", "goes",
             [], "go → goes", "3ème pers."),
            ('word-order', ['We', 'speak', 'English'], "We speak English.",
             "speak = parler", "S + V + langue."),
            ('translate', "Elle lit un livre.", "She reads a book.",
             [], "reads = lit", "3ème pers."),
            ('fill-blank', "They ___ tennis.", "play",
             [], "they → play", "Pluriel."),
            ('word-order', ['I', 'write', 'a', 'letter'], "I write a letter.",
             "write a letter", "S + V + COD."),
            ('translate', "Nous nageons.", "We swim.", [],
             "we swim", "Pluriel sans -s."),
        ],
        2: [
            ('error-correct', "He don't play football.", "He doesn't play football.",
             "He → doesn't", "Négation 3ème pers."),
            ('translate', "Que fais-tu maintenant ?", "What are you doing now?",
             [], "Present Continuous", "Action en cours."),
            ('fill-blank', "I ___ a book every week.", "read",
             [], "I → read", "Routine."),
            ('error-correct', "She play the piano very well.", "She plays the piano very well.",
             "she → plays", "3ème pers."),
            ('translate', "Ils écrivent une lettre.", "They are writing a letter.",
             ["They write a letter."], "Continuous = en train de", "Action en cours."),
            ('word-order', ['He', 'sometimes', 'goes', 'to', 'the', 'cinema'],
             "He sometimes goes to the cinema.",
             "sometimes avant verbe", "Adverbe."),
            ('fill-blank', "We ___ chess together.", "play",
             [], "play chess", "Verbe + jeu."),
            ('translate', "Elle danse souvent avec ses amis.", "She often dances with her friends.",
             [], "often + dances", "Adverbe + 3ème pers."),
            ('error-correct', "I am play tennis now.", "I am playing tennis now.",
             "am + V-ing", "Present Continuous."),
            ('word-order', ['Do', 'you', 'speak', 'English'], "Do you speak English?",
             "Do + sujet + V", "Question."),
        ],
        3: [
            ('error-correct', "Yesterday I go to the park.", "Yesterday I went to the park.",
             "go → went", "Past Simple."),
            ('translate', "Si j'avais le temps, j'apprendrais à jouer du piano.",
             "If I had time, I would learn to play the piano.",
             [], "If + Past, would + V", "Conditionnel."),
            ('error-correct', "She is knowing the answer.", "She knows the answer.",
             "know = état → simple", "État sans Continuous."),
            ('translate', "Bien qu'il pleuve, nous allons nager.",
             "Although it is raining, we are going to swim.",
             ["Even though it's raining, we are going swimming."],
             "although + S + V", "Concession."),
            ('error-correct', "He has wrote a letter.", "He has written a letter.",
             "write → written", "Past participle."),
            ('translate', "Quand j'étais jeune, je jouais au football tous les jours.",
             "When I was young, I used to play football every day.",
             ["When I was young, I would play football every day."],
             "used to + V", "Habitude passée."),
            ('error-correct', "I have play tennis since 5 years.", "I have been playing tennis for 5 years.",
             "for + durée → Present Perfect Continuous", "Action continue."),
            ('translate', "Avant de partir, n'oublie pas de fermer la porte.",
             "Before leaving, don't forget to close the door.",
             ["Before you leave, don't forget to close the door."],
             "before + V-ing", "Préposition + gérondif."),
            ('error-correct', "She doesn't likes to study.", "She doesn't like to study.",
             "doesn't + base", "Auxiliaire + base verbale."),
            ('translate', "S'il pleut demain, nous resterons à la maison.",
             "If it rains tomorrow, we will stay at home.",
             ["If it rains tomorrow, we'll stay home."],
             "If + Present, will + V", "Conditionnel type 1."),
        ],
    },

    'timeAdverbs': {
        1: [
            ('translate', "Je suis toujours heureux.", "I am always happy.", [],
             "always avant adj/après be", "Adverbe + be."),
            ('fill-blank', "She is ___ tired.", "always",
             ["never", "often"], "always = toujours", "Adverbe."),
            ('word-order', ['I', 'never', 'eat', 'meat'], "I never eat meat.",
             "never avant verbe", "Adverbe avant verbe lexical."),
            ('translate', "Il est souvent en retard.", "He is often late.",
             [], "often + be", "Be + adverbe."),
            ('fill-blank', "We ___ play football on Sunday.", "sometimes",
             ["often", "always"], "sometimes = parfois", "Adverbe."),
            ('word-order', ['She', 'usually', 'gets', 'up', 'early'], "She usually gets up early.",
             "usually avant verbe", "Adverbe avant verbe."),
            ('translate', "Tu es rarement à la maison.", "You are rarely at home.",
             [], "rarely = rarement", "Adverbe + be."),
            ('fill-blank', "They ___ go to the cinema.", "often",
             [], "often = souvent", "Adverbe."),
            ('word-order', ['He', 'always', 'helps', 'me'], "He always helps me.",
             "always avant verbe", "Adverbe + 3ème pers."),
            ('translate', "Je n'aime jamais le café.", "I never like coffee.",
             ["I never drink coffee."], "never + V", "Négation par adverbe."),
        ],
        2: [
            ('error-correct', "I always am happy.", "I am always happy.",
             "always après be", "Position après auxiliaire."),
            ('translate', "Il fait toujours ses devoirs.", "He always does his homework.",
             [], "always avant verbe lexical", "Position adverbe."),
            ('fill-blank', "She ___ goes to bed late.", "rarely",
             ["sometimes", "never"], "rarement", "Adverbe."),
            ('error-correct', "We never has lunch at school.", "We never have lunch at school.",
             "we → have", "Sujet pluriel."),
            ('translate', "Mes parents prennent rarement l'avion.", "My parents rarely take the plane.",
             ["My parents seldom take the plane."], "rarely = seldom", "Synonymes."),
            ('word-order', ['She', 'is', 'never', 'at', 'home'], "She is never at home.",
             "never après be", "Adverbe + be."),
            ('fill-blank', "I ___ watch TV in the morning.", "never",
             [], "jamais le matin", "Adverbe + V."),
            ('translate', "Il joue parfois au tennis le week-end.", "He sometimes plays tennis at the weekend.",
             ["He sometimes plays tennis on weekends."], "at the weekend / on weekends", "Préposition UK/US."),
            ('error-correct', "He often is happy.", "He is often happy.",
             "often après be", "Adverbe après auxiliaire."),
            ('word-order', ['They', 'always', 'have', 'breakfast', 'together'],
             "They always have breakfast together.",
             "always avant verbe", "Routine + adverbe."),
        ],
        3: [
            ('error-correct', "I go always to the cinema on Friday.", "I always go to the cinema on Friday.",
             "always avant verbe lexical", "Position adverbe avec verbe lexical."),
            ('translate', "Si tu étais à l'heure, je serais content.",
             "If you were on time, I would be happy.",
             [], "If + Past, would + V", "Conditionnel."),
            ('error-correct', "She has always wanted travel.", "She has always wanted to travel.",
             "want + to + V", "Verbe + infinitif."),
            ('translate', "Mon grand-père nous racontait souvent des histoires drôles.",
             "My grandfather often told us funny stories.",
             ["My grandfather used to tell us funny stories."],
             "Past Simple + adverbe", "Habitude passée."),
            ('error-correct', "We are rarely angry never.", "We are rarely angry.",
             "Pas double négation", "Un seul adverbe négatif."),
            ('translate', "Bien que je sois souvent fatigué, je continue à travailler dur.",
             "Although I am often tired, I keep working hard.",
             ["Even though I'm often tired, I keep working hard."],
             "although + S+V", "Concession."),
            ('error-correct', "He never will agree with you.", "He will never agree with you.",
             "never après auxiliaire (will)", "Position adverbe."),
            ('translate', "Quand j'étais enfant, je rendais rarement visite à mes cousins.",
             "When I was a child, I rarely visited my cousins.",
             ["When I was a child, I seldom visited my cousins."],
             "Past Simple + rarely", "Adverbe + verbe au passé."),
            ('error-correct', "She is never been to Paris.", "She has never been to Paris.",
             "have/has + been (Present Perfect)", "Auxiliaire correct."),
            ('translate', "Habituellement, mon frère arrive tôt mais aujourd'hui il est en retard.",
             "Usually, my brother arrives early but today he is late.",
             [], "usually au début", "Adverbe en début de phrase."),
        ],
    },
}


# ─── Generation ────────────────────────────────────────────────────────────

def js_str(s):
    """Render a Python string as a JS double-quoted string with escapes."""
    return '"' + s.replace('\\', '\\\\').replace('"', '\\"') + '"'


def js_arr(items):
    return '[' + ', '.join(js_str(s) for s in items) + ']'


def render_exercise(eid, ex_type, diff, content, level_label):
    """Render one exercise as a single-line JS object."""
    parts = [
        f"id: {js_str(eid)}",
        f"type: {js_str(ex_type)}",
        f"diffLevel: {diff}",
        f"level: {js_str(level_label)}",
    ]

    if ex_type == 'fill-blank':
        template, answer, alts, hint, explanation = content
        parts.append(f"instruction: {js_str('Complétez avec le mot correct.')}")
        parts.append(f"template: {js_str(template)}")
        parts.append(f"answer: {js_str(answer)}")
        if alts:
            parts.append(f"acceptedAnswers: {js_arr([answer] + alts)}")
        parts.append(f"hint: {js_str(hint)}")
        parts.append(f"explanation: {js_str(explanation)}")
    elif ex_type == 'translate':
        french, answer, alts, hint, explanation = content
        parts.append(f"instruction: {js_str('Traduisez en anglais.')}")
        parts.append(f"french: {js_str(french)}")
        parts.append(f"answer: {js_str(answer)}")
        if alts:
            parts.append(f"alternatives: {js_arr(alts)}")
        parts.append(f"hint: {js_str(hint)}")
        parts.append(f"explanation: {js_str(explanation)}")
    elif ex_type == 'word-order':
        words, answer, hint, explanation = content
        parts.append(f'instruction: {js_str("Mettez les mots dans le bon ordre.")}')
        parts.append(f"words: {js_arr(words)}")
        parts.append(f"answer: {js_str(answer)}")
        parts.append(f"hint: {js_str(hint)}")
        parts.append(f"explanation: {js_str(explanation)}")
    elif ex_type == 'error-correct':
        sentence, answer, hint, explanation = content
        instr = "Corrigez l'erreur dans la phrase."
        parts.append(f'instruction: {js_str(instr)}')
        parts.append(f"sentence: {js_str(sentence)}")
        parts.append(f"answer: {js_str(answer)}")
        parts.append(f"hint: {js_str(hint)}")
        parts.append(f"explanation: {js_str(explanation)}")

    return '    { ' + ', '.join(parts) + ' },\n'


def count_per_level(content, topic):
    """Read existing exercises.js and count diffLevel 1/2/3 per topic block."""
    block_re = re.compile(rf"^\s*{re.escape(topic)}:\s*\[", re.M)
    m = block_re.search(content)
    if not m:
        return None, None, None, None, None
    start = m.end()
    # Find matching `],` by tracking bracket depth
    depth = 1
    i = start
    while i < len(content):
        c = content[i]
        if c == '[':
            depth += 1
        elif c == ']':
            depth -= 1
            if depth == 0:
                break
        i += 1
    block_text = content[start:i]
    # Count diffLevel: 1/2/3
    c1 = len(re.findall(r"diffLevel:\s*1\b", block_text))
    c2 = len(re.findall(r"diffLevel:\s*2\b", block_text))
    c3 = len(re.findall(r"diffLevel:\s*3\b", block_text))
    return c1, c2, c3, m.end(), i


def find_existing_ids(content, topic):
    """Find all existing exercise IDs in a topic block, to avoid collisions."""
    c1, c2, c3, start, end = count_per_level(content, topic)
    if start is None:
        return set()
    block_text = content[start:end]
    return set(re.findall(r"id:\s*['\"]([^'\"]+)['\"]", block_text))


def main():
    with open(PATH, encoding='utf-8') as f:
        content = f.read()

    inserted_total = 0

    for topic, levels in CONTENT.items():
        c1, c2, c3, start, end = count_per_level(content, topic)
        if start is None:
            print(f"[SKIP] Topic '{topic}' not found")
            continue

        # Determine level label for new exercises (use the topic's typical level)
        level_label_map = {
            'routine': 'A1', 'family': 'A1', 'school': 'A1', 'body': 'A1', 'time': 'A1',
            'food': 'A1', 'colors': 'A1', 'numbers': 'A1', 'adjectives': 'A1', 'pronouns': 'A1',
            'verbs': 'A2', 'timeAdverbs': 'A2',
            'presentSimple': 'A2', 'presentContinuous': 'A2',
            'pastSimple': 'B1', 'futureSimple': 'B1',
        }
        level_label = level_label_map.get(topic, 'A1')

        existing = find_existing_ids(content, topic)
        prefix_map = {
            'routine': 'r', 'family': 'fam', 'school': 'sch', 'body': 'bod', 'time': 'tim',
            'food': 'fd', 'colors': 'col', 'numbers': 'num', 'verbs': 'v', 'timeAdverbs': 'ta',
        }
        prefix = prefix_map[topic]

        new_blocks = []
        next_num = 13  # start IDs at 13 (existing go up to ~12)

        deficits = {1: max(0, TARGET_PER_LEVEL - c1),
                    2: max(0, TARGET_PER_LEVEL - c2),
                    3: max(0, TARGET_PER_LEVEL - c3)}

        for diff, needed in deficits.items():
            if needed == 0:
                continue
            pool = levels.get(diff, [])
            if len(pool) < needed:
                print(f"[WARN] {topic} L{diff}: pool has {len(pool)}, need {needed}")
                needed = len(pool)
            for k in range(needed):
                # Find unique ID
                while True:
                    eid = f"{prefix}{next_num:02d}"
                    next_num += 1
                    if eid not in existing:
                        existing.add(eid)
                        break
                ex = pool[k]
                ex_type = ex[0]
                # diff retrieved from outer loop; content is rest of tuple
                content_tuple = ex[1:]
                # Choose level_label by diff: L1/L2 → A1 typically, L3 → A2/B1
                if diff == 3 and level_label == 'A1':
                    label = 'A2'
                elif diff == 3 and level_label == 'A2':
                    label = 'B1'
                else:
                    label = level_label
                new_blocks.append(render_exercise(eid, ex_type, diff, content_tuple, label))
                inserted_total += 1

        if not new_blocks:
            print(f"[OK]   {topic}: already L1={c1}/L2={c2}/L3={c3}")
            continue

        # Insert just before closing `]` (find the topic block end again, since
        # we may have already mutated `content`)
        c1b, c2b, c3b, sb, eb = count_per_level(content, topic)
        # Insert at position eb (the `]` char). Make sure there's a newline.
        insertion = ''.join(new_blocks)
        # Make sure there's a comma + newline before our insertion
        before = content[:eb]
        after = content[eb:]
        # Check if last non-whitespace char before `]` is `,`
        stripped = before.rstrip()
        if not stripped.endswith(','):
            before = stripped + ',\n'
        else:
            before = stripped + '\n'
        content = before + insertion + after

        print(f"[ADD]  {topic}: L1 {c1}→{c1+deficits[1]}, L2 {c2}→{c2+deficits[2]}, L3 {c3}→{c3+deficits[3]}")

    with open(PATH, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"\n[DONE] Inserted {inserted_total} new exercises")


if __name__ == '__main__':
    main()
