// Exercise types:
// fill-blank  → sentence with ___, user types missing word(s)
// translate   → French sentence, user types English translation
// word-order  → scrambled words array, user clicks to build sentence
// listening   → TTS plays audio text, user types what they hear
// error-correct → sentence with error, user types corrected version

export const exercises = {

  // ─── ROUTINE ────────────────────────────────────────────────────────────────
  routine: [
    {
      id: 'r01', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec la bonne forme du verbe.',
      template: 'Every morning, I ___ at 6 o\'clock.',
      verb: 'wake up', answer: 'wake up',
      hint: 'Routine → Present Simple. Avec "I" : pas de -s.',
      explanation: 'On utilise le Present Simple pour les routines. Avec "I", le verbe ne change pas.'
    },
    {
      id: 'r02', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Je mange le petit-déjeuner à sept heures.',
      answer: 'I eat breakfast at seven o\'clock.',
      alternatives: ['I have breakfast at seven o\'clock.', 'I eat breakfast at 7.', 'I have breakfast at 7.'],
      hint: '"Manger le petit-déjeuner" = eat breakfast ou have breakfast',
      explanation: '"Eat breakfast" et "have breakfast" sont tous les deux corrects en anglais.'
    },
    {
      id: 'r03', type: 'word-order', level: 'A1',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['I', 'go', 'to', 'school', 'every', 'day', '.'],
      answer: 'I go to school every day.',
      hint: 'Structure : Sujet + Verbe + Complément',
      explanation: 'En anglais, le verbe vient toujours juste après le sujet.'
    },
    {
      id: 'r04', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec la bonne forme du verbe.',
      template: 'She ___ her teeth twice a day.',
      verb: 'brush', answer: 'brushes',
      hint: 'She → 3ème personne → verbe + -es (brush → brushes)',
      explanation: 'Avec he/she/it, on ajoute -s ou -es au verbe. "brush" → "brushes".'
    },
    {
      id: 'r05', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Il se couche à dix heures du soir.',
      answer: 'He goes to bed at ten o\'clock.',
      alternatives: ['He goes to bed at 10.', 'He goes to bed at 10 pm.', 'He goes to bed at ten.'],
      hint: '"Se coucher" = go to bed. He → goes',
      explanation: '"Go to bed" = aller dormir. Avec "he", "go" devient "goes".'
    },
    {
      id: 'r06', type: 'error-correct', level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur dans la phrase.',
      sentence: 'She go to work by bus every morning.',
      answer: 'She goes to work by bus every morning.',
      hint: 'She → 3ème personne singulière → verbe + -s',
      explanation: 'Avec "she", on doit écrire "goes" et non "go".'
    },
    {
      id: 'r07', type: 'listening', level: 'A1',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'I take a shower every morning.',
      answer: 'I take a shower every morning.',
      hint: 'Écoutez attentivement chaque mot.',
      explanation: '"Take a shower" = prendre une douche.'
    },
    {
      id: 'r08', type: 'fill-blank', level: 'A2',
      instruction: 'Complétez avec la bonne forme du verbe.',
      template: 'My father ___ at seven and ___ home at six.',
      verb: 'start work / come back', answer: 'starts work, comes back',
      alternatives: ['starts work, gets home', 'starts, comes back', 'starts, gets home'],
      hint: 'He/She/It → verbe + -s',
      explanation: 'Deux actions habituelles avec "my father" (= he) : starts et comes back.'
    },
  ],

  // ─── FAMILY ─────────────────────────────────────────────────────────────────
  family: [
    {
      id: 'f01', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Mon père s\'appelle Paul.',
      answer: 'My father\'s name is Paul.',
      alternatives: ['My father is called Paul.', 'My dad\'s name is Paul.'],
      hint: '"S\'appeler" = to be called / name is',
      explanation: 'En anglais : "My father\'s name is Paul" ou "My father is called Paul".'
    },
    {
      id: 'f02', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec le bon mot.',
      template: 'Your father\'s mother is your ___.',
      answer: 'grandmother',
      alternatives: ['grandma', 'grand-mother'],
      hint: 'La mère de ton père = ?',
      explanation: 'La mère de ton père ou de ta mère s\'appelle "grandmother" (ou "grandma").'
    },
    {
      id: 'f03', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'J\'ai deux frères et une sœur.',
      answer: 'I have two brothers and one sister.',
      alternatives: ['I have two brothers and a sister.'],
      hint: '"Frère" = brother, "Sœur" = sister',
      explanation: '"Brothers" est le pluriel de "brother". "One" et "a" sont tous les deux corrects.'
    },
    {
      id: 'f04', type: 'word-order', level: 'A1',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['My', 'sister', 'is', 'older', 'than', 'me', '.'],
      answer: 'My sister is older than me.',
      hint: 'Comparatif : older than = plus âgée que',
      explanation: 'Pour comparer, on utilise : adjectif + -er + than. "old" → "older than".'
    },
    {
      id: 'f05', type: 'error-correct', level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'My parents has three children.',
      answer: 'My parents have three children.',
      hint: '"My parents" = pluriel → "have" et non "has"',
      explanation: '"Has" s\'utilise avec he/she/it. "My parents" est pluriel, donc on utilise "have".'
    },
    {
      id: 'f06', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Mes grands-parents habitent au village.',
      answer: 'My grandparents live in the village.',
      alternatives: ['My grandparents live in the village.', 'My grandparents stay in the village.'],
      hint: '"Habiter" = live in / stay in',
      explanation: '"Live in" est le verbe le plus courant pour "habiter".'
    },
    {
      id: 'f07', type: 'listening', level: 'A1',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'I live with my mother and my father.',
      answer: 'I live with my mother and my father.',
      hint: 'Ecoutez bien les mots de la famille.',
      explanation: '"Live with" = habiter avec.'
    },
    {
      id: 'f08', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec le bon mot.',
      template: 'My mother\'s brother is my ___.',
      answer: 'uncle',
      hint: 'Le frère de ta mère = ?',
      explanation: 'Le frère de ta mère ou de ton père s\'appelle "uncle".'
    },
  ],

  // ─── SCHOOL ─────────────────────────────────────────────────────────────────
  school: [
    {
      id: 's01', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Mon livre est sur la table.',
      answer: 'My book is on the table.',
      alternatives: ['The book is on the table.'],
      hint: '"Sur" = on, "table" = table',
      explanation: 'La préposition "sur" se traduit par "on" en anglais.'
    },
    {
      id: 's02', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec le bon mot.',
      template: 'The person who teaches in a school is a ___.',
      answer: 'teacher',
      hint: 'Celui qui enseigne = ?',
      explanation: '"Teacher" = enseignant(e). "Teach" est le verbe, "teacher" est la personne.'
    },
    {
      id: 's03', type: 'word-order', level: 'A1',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['I', 'study', 'English', 'at', 'school', '.'],
      answer: 'I study English at school.',
      hint: 'Sujet + Verbe + Objet + Lieu',
      explanation: 'L\'ordre habituel en anglais : Sujet → Verbe → Objet → Lieu.'
    },
    {
      id: 's04', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Quand est-ce que l\'école commence ?',
      answer: 'When does school start?',
      alternatives: ['When does school begin?'],
      hint: 'Question avec "does" : Does school start...?',
      explanation: 'Pour une question au Present Simple, on utilise "does" avec he/she/it/school.'
    },
    {
      id: 's05', type: 'error-correct', level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'I doesn\'t have a pencil.',
      answer: 'I don\'t have a pencil.',
      hint: '"I" → don\'t (pas doesn\'t)',
      explanation: '"Doesn\'t" s\'utilise avec he/she/it. Avec "I", on utilise "don\'t".'
    },
    {
      id: 's06', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec le bon mot.',
      template: 'A place full of books where you can study quietly is a ___.',
      answer: 'library',
      alternatives: ['the library'],
      hint: 'Un endroit avec beaucoup de livres = ?',
      explanation: '"Library" = bibliothèque. Ne pas confondre avec "bookshop" (librairie).'
    },
    {
      id: 's07', type: 'translate', level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Mon ami s\'appelle Jean.',
      answer: 'My friend\'s name is Jean.',
      alternatives: ['My friend is called Jean.'],
      hint: '"S\'appeler" = name is / is called',
      explanation: '"My friend\'s name is" utilise le génitif saxo (\'s) pour montrer la possession.'
    },
    {
      id: 's08', type: 'listening', level: 'A1',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'We have five lessons every day.',
      answer: 'We have five lessons every day.',
      hint: 'Combien de cours par jour ?',
      explanation: '"Lessons" = cours. "Every day" = tous les jours.'
    },
  ],

  // ─── BODY ───────────────────────────────────────────────────────────────────
  body: [
    {
      id: 'b01', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'J\'ai mal à la tête.',
      answer: 'I have a headache.',
      alternatives: ['My head hurts.', 'I have a head ache.'],
      hint: '"Avoir mal à la tête" = have a headache',
      explanation: '"Headache" est un seul mot qui signifie "mal de tête". "Have a headache" = avoir mal à la tête.'
    },
    {
      id: 'b02', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec le bon mot.',
      template: 'We have ten fingers and ten ___.',
      answer: 'toes',
      hint: 'Les doigts de pieds = ?',
      explanation: '"Fingers" = doigts de main. "Toes" = doigts de pied.'
    },
    {
      id: 'b03', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Ses yeux sont marrons.',
      answer: 'His eyes are brown.',
      alternatives: ['Her eyes are brown.'],
      hint: '"Yeux" = eyes (pluriel de "eye"), "marrons" = brown',
      explanation: '"Eyes" est le pluriel de "eye". "His" pour un homme, "her" pour une femme.'
    },
    {
      id: 'b04', type: 'word-order', level: 'A1',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['We', 'have', 'two', 'eyes', 'and', 'two', 'ears', '.'],
      answer: 'We have two eyes and two ears.',
      hint: 'Sujet + have + nombre + partie du corps',
      explanation: 'Simple présentation du corps humain avec "have" (avoir).'
    },
    {
      id: 'b05', type: 'error-correct', level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'She hurts her foots.',
      answer: 'She hurts her feet.',
      hint: '"Foot" est un pluriel irrégulier',
      explanation: '"Foot" → pluriel = "feet" (irrégulier). Pas "foots"!'
    },
    {
      id: 'b06', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Je me lave les mains avant de manger.',
      answer: 'I wash my hands before eating.',
      alternatives: ['I wash my hands before I eat.'],
      hint: '"Se laver les mains" = wash hands',
      explanation: '"Wash my hands" = se laver les mains. "Before eating" ou "before I eat".'
    },
    {
      id: 'b07', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec le bon mot.',
      template: 'You use your ___ to see and your ___ to hear.',
      answer: 'eyes, ears',
      hint: 'Voir = eyes, Entendre = ears',
      explanation: '"Eyes" = yeux, "ears" = oreilles.'
    },
    {
      id: 'b08', type: 'listening', level: 'A1',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'He is tall and has short black hair.',
      answer: 'He is tall and has short black hair.',
      hint: 'Description physique : taille et cheveux.',
      explanation: '"Tall" = grand, "short" = court, "hair" = cheveux.'
    },
  ],

  // ─── TIME ────────────────────────────────────────────────────────────────────
  time: [
    {
      id: 't01', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Il est trois heures et demie.',
      answer: 'It is half past three.',
      alternatives: ['It\'s half past three.', 'It is three thirty.', 'It\'s three thirty.'],
      hint: '"Et demie" = half past, "trois heures" = three',
      explanation: '"Half past three" = 3h30. On peut aussi dire "three thirty".'
    },
    {
      id: 't02', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec la bonne préposition.',
      template: 'School starts ___ 7:30 in the morning.',
      answer: 'at',
      hint: 'Pour une heure précise, on utilise "at"',
      explanation: 'On utilise "at" devant une heure précise : at 7:30, at noon, at midnight.'
    },
    {
      id: 't03', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Quelle heure est-il ?',
      answer: 'What time is it?',
      alternatives: ['What\'s the time?'],
      hint: '"Quelle heure" = What time, "est-il" = is it',
      explanation: '"What time is it?" ou "What\'s the time?" sont tous deux corrects.'
    },
    {
      id: 't04', type: 'error-correct', level: 'A1',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'I wake up in 6 o\'clock.',
      answer: 'I wake up at 6 o\'clock.',
      hint: 'Pour une heure précise : "at" ou "in" ?',
      explanation: 'On utilise "at" pour les heures précises, jamais "in". "At 6 o\'clock".'
    },
    {
      id: 't05', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec le bon mot.',
      template: 'There are ___ days in a week.',
      answer: 'seven',
      alternatives: ['7'],
      hint: 'Lundi, mardi, mercredi... combien ?',
      explanation: 'Il y a 7 jours dans une semaine : Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.'
    },
    {
      id: 't06', type: 'translate', level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Le lundi, j\'ai cours de mathématiques.',
      answer: 'On Mondays, I have a mathematics class.',
      alternatives: ['On Monday, I have maths.', 'On Mondays, I have maths.', 'On Monday I have a maths class.'],
      hint: '"Le lundi" (habitude) = on Mondays (avec -s)',
      explanation: '"On Mondays" (pluriel) exprime une habitude hebdomadaire. "On Monday" est aussi accepté.'
    },
    {
      id: 't07', type: 'listening', level: 'A1',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'The train arrives at quarter past ten.',
      answer: 'The train arrives at quarter past ten.',
      hint: '"Quarter past" = et quart',
      explanation: '"Quarter past ten" = 10h15. "Quarter to ten" = 9h45.'
    },
    {
      id: 't08', type: 'word-order', level: 'A2',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['was', 'I', 'born', 'in', 'January', '.'],
      answer: 'I was born in January.',
      hint: 'Pour les mois, on utilise "in"',
      explanation: 'On utilise "in" pour les mois et les années : in January, in 2005.'
    },
  ],

  // ─── VERBS ───────────────────────────────────────────────────────────────────
  verbs: [
    {
      id: 'v01', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Je parle français et malgache.',
      answer: 'I speak French and Malagasy.',
      hint: '"Parler" = speak',
      explanation: '"Speak" = parler une langue. On dit "speak French", pas "speak the French".'
    },
    {
      id: 'v02', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec la bonne forme du verbe.',
      template: 'She ___ animals very much.',
      verb: 'love', answer: 'loves',
      hint: 'She → verbe + -s',
      explanation: 'Avec "she", on ajoute -s : "love" → "loves".'
    },
    {
      id: 'v03', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Nous mangeons du riz tous les jours.',
      answer: 'We eat rice every day.',
      alternatives: ['We eat rice everyday.'],
      hint: '"Manger" = eat, "riz" = rice',
      explanation: '"Eat rice" = manger du riz. Pas d\'article devant "rice" en anglais.'
    },
    {
      id: 'v04', type: 'error-correct', level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'He don\'t work on Sundays.',
      answer: 'He doesn\'t work on Sundays.',
      hint: 'He → doesn\'t (pas don\'t)',
      explanation: 'La forme négative de "he" est "he doesn\'t", jamais "he don\'t".'
    },
    {
      id: 'v05', type: 'word-order', level: 'A1',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['Can', 'you', 'speak', 'English', '?'],
      answer: 'Can you speak English?',
      hint: 'Question avec "can" : Can + sujet + verbe',
      explanation: 'Pour les questions avec "can", on met "can" en premier : Can you...?'
    },
    {
      id: 'v06', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Je comprends un peu l\'anglais.',
      answer: 'I understand a little English.',
      alternatives: ['I understand English a little.', 'I understand a bit of English.'],
      hint: '"Comprendre" = understand, "un peu" = a little',
      explanation: '"Understand" est un verbe irrégulier mais au Present Simple il est régulier.'
    },
    {
      id: 'v07', type: 'fill-blank', level: 'A2',
      instruction: 'Complétez avec la bonne forme négative.',
      template: 'She ___ coffee.',
      verb: 'not like', answer: 'doesn\'t like',
      alternatives: ['does not like'],
      hint: 'She → doesn\'t + verbe infinitif',
      explanation: 'Forme négative avec she/he/it : doesn\'t + verbe (sans -s).'
    },
    {
      id: 'v08', type: 'listening', level: 'A1',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'They play football and swim every week.',
      answer: 'They play football and swim every week.',
      hint: 'Deux activités sportives.',
      explanation: '"Play football" = jouer au foot, "swim" = nager.'
    },
  ],

  // ─── TIME ADVERBS ────────────────────────────────────────────────────────────
  timeAdverbs: [
    {
      id: 'ta01', type: 'translate', level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Je vais toujours à l\'école à pied.',
      answer: 'I always walk to school.',
      alternatives: ['I always go to school on foot.'],
      hint: '"Toujours" = always. Place de l\'adverbe : avant le verbe principal.',
      explanation: 'Les adverbes de fréquence se placent avant le verbe principal : I always walk...'
    },
    {
      id: 'ta02', type: 'fill-blank', level: 'A2',
      instruction: 'Complétez avec le bon adverbe.',
      template: 'She ___ eats meat. She is vegetarian.',
      answer: 'never',
      hint: '0% du temps = ?',
      explanation: '"Never" = jamais. Fréquence 0%. Se place avant le verbe principal.'
    },
    {
      id: 'ta03', type: 'error-correct', level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur (position de l\'adverbe).',
      sentence: 'I go sometimes to the market.',
      answer: 'I sometimes go to the market.',
      alternatives: ['Sometimes I go to the market.'],
      hint: 'L\'adverbe de fréquence se place avant le verbe principal',
      explanation: 'L\'adverbe "sometimes" se place avant le verbe : "I sometimes go", ou au début : "Sometimes I go".'
    },
    {
      id: 'ta04', type: 'word-order', level: 'A2',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['She', 'is', 'often', 'late', '.'],
      answer: 'She is often late.',
      hint: 'Avec le verbe "to be", l\'adverbe vient APRÈS',
      explanation: 'Avec le verbe "to be", l\'adverbe de fréquence se place après : She is often late.'
    },
    {
      id: 'ta05', type: 'translate', level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Il vient rarement ici.',
      answer: 'He rarely comes here.',
      alternatives: ['He seldom comes here.'],
      hint: '"Rarement" = rarely ou seldom',
      explanation: '"Rarely" et "seldom" signifient tous les deux "rarement". "Rarely" est plus courant.'
    },
    {
      id: 'ta06', type: 'fill-blank', level: 'A2',
      instruction: 'Choisissez le bon adverbe.',
      template: 'She is ___ tired after work. She works twelve hours a day!',
      answer: 'always',
      alternatives: ['often'],
      hint: '12 heures de travail par jour → quelle fréquence ?',
      explanation: '"Always" = 100% du temps. C\'est logique après 12h de travail chaque jour.'
    },
    {
      id: 'ta07', type: 'listening', level: 'A2',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'I have already finished my homework.',
      answer: 'I have already finished my homework.',
      hint: '"Already" = déjà',
      explanation: '"Already" = déjà. Se place entre "have" et le participe passé.'
    },
    {
      id: 'ta08', type: 'translate', level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Ils ne jouent presque jamais dehors.',
      answer: 'They hardly ever play outside.',
      alternatives: ['They almost never play outside.', 'They rarely play outside.'],
      hint: '"Presque jamais" = hardly ever ou almost never',
      explanation: '"Hardly ever" et "almost never" signifient "presque jamais". Très utiles!'
    },
  ],

  // ─── PRESENT SIMPLE ──────────────────────────────────────────────────────────
  presentSimple: [
    {
      id: 'ps01', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec la bonne forme du verbe.',
      template: 'She ___ to the market every Sunday.',
      verb: 'go', answer: 'goes',
      hint: 'She → go + -es (car "go" finit en -o)',
      explanation: 'Avec she/he/it : go → goes, do → does, watch → watches.'
    },
    {
      id: 'ps02', type: 'error-correct', level: 'A1',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'He don\'t like bananas.',
      answer: 'He doesn\'t like bananas.',
      hint: 'Négatif avec he : doesn\'t (pas don\'t)',
      explanation: 'Forme négative : I/you/we/they + don\'t. He/she/it + doesn\'t.'
    },
    {
      id: 'ps03', type: 'translate', level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Est-ce qu\'il habite à Antananarivo ?',
      answer: 'Does he live in Antananarivo?',
      hint: 'Question avec he → Does he...?',
      explanation: 'Question au Present Simple avec he/she/it : Does + sujet + verbe (infinitif)?'
    },
    {
      id: 'ps04', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec la bonne forme du verbe.',
      template: 'Water ___ at 100 degrees Celsius.',
      verb: 'boil', answer: 'boils',
      hint: 'Vérité générale scientifique → Present Simple. Water = it',
      explanation: 'Le Present Simple exprime les vérités générales. "Water boils" = l\'eau bout.'
    },
    {
      id: 'ps05', type: 'word-order', level: 'A2',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['He', 'plays', 'football', 'every', 'Saturday', '.'],
      answer: 'He plays football every Saturday.',
      hint: 'Sujet + verbe + objet + temps',
      explanation: 'Ordre standard : He plays (quoi ?) football (quand ?) every Saturday.'
    },
    {
      id: 'ps06', type: 'error-correct', level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'They doesn\'t know the answer.',
      answer: 'They don\'t know the answer.',
      hint: '"They" est pluriel → don\'t (pas doesn\'t)',
      explanation: '"Doesn\'t" s\'utilise seulement avec he/she/it. Avec "they" : don\'t.'
    },
    {
      id: 'ps07', type: 'translate', level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Elle ne travaille pas le dimanche.',
      answer: 'She doesn\'t work on Sundays.',
      alternatives: ['She does not work on Sundays.', 'She doesn\'t work on Sunday.'],
      hint: 'Négatif avec she : doesn\'t + verbe',
      explanation: '"She doesn\'t work" = elle ne travaille pas. "On Sundays" = le dimanche (habitude).'
    },
    {
      id: 'ps08', type: 'listening', level: 'A2',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'My brother doesn\'t study very much.',
      answer: 'My brother doesn\'t study very much.',
      hint: 'Forme négative avec he/she/it',
      explanation: '"Doesn\'t study" = ne étudie pas. "Very much" = beaucoup.'
    },
  ],

  // ─── PRESENT CONTINUOUS ──────────────────────────────────────────────────────
  presentContinuous: [
    {
      id: 'pc01', type: 'fill-blank', level: 'A2',
      instruction: 'Complétez avec la forme correcte (Present Continuous).',
      template: 'Look! It ___ outside.',
      verb: 'rain', answer: 'is raining',
      hint: 'Action en cours maintenant → be + verbe-ing',
      explanation: 'Present Continuous = be (am/is/are) + verbe-ing. "It is raining" = il pleut maintenant.'
    },
    {
      id: 'pc02', type: 'translate', level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Elle est en train de lire un livre.',
      answer: 'She is reading a book.',
      alternatives: ['She\'s reading a book.'],
      hint: '"Être en train de" = Present Continuous',
      explanation: '"She is reading" = she\'s reading. Le Present Continuous traduit "être en train de".'
    },
    {
      id: 'pc03', type: 'error-correct', level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'I am study English right now.',
      answer: 'I am studying English right now.',
      hint: 'be + verbe-ing (pas verbe seul)',
      explanation: 'Present Continuous : am/is/are + verbe + -ing. "study" → "studying".'
    },
    {
      id: 'pc04', type: 'word-order', level: 'A2',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['The', 'children', 'are', 'playing', 'in', 'the', 'garden', '.'],
      answer: 'The children are playing in the garden.',
      hint: 'Sujet + are + verbe-ing + lieu',
      explanation: 'Avec "the children" (pluriel), on utilise "are" : are playing.'
    },
    {
      id: 'pc05', type: 'fill-blank', level: 'A2',
      instruction: 'Complétez la question.',
      template: 'What are you ___ right now?',
      verb: 'do', answer: 'doing',
      hint: 'do + -ing = ?',
      explanation: '"What are you doing?" = Qu\'est-ce que tu fais en ce moment ?'
    },
    {
      id: 'pc06', type: 'translate', level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Ils ne travaillent pas en ce moment.',
      answer: 'They are not working right now.',
      alternatives: ['They aren\'t working right now.', 'They are not working now.', 'They aren\'t working now.'],
      hint: 'Négatif : be + not + verbe-ing',
      explanation: 'Forme négative : They are not working = They aren\'t working.'
    },
    {
      id: 'pc07', type: 'error-correct', level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'He is eat a mango.',
      answer: 'He is eating a mango.',
      hint: 'be + verbe + -ing',
      explanation: '"Eat" doit prendre la forme -ing : "eating". He is eating a mango.'
    },
    {
      id: 'pc08', type: 'listening', level: 'A2',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'She is not sleeping. She is doing her homework.',
      answer: 'She is not sleeping. She is doing her homework.',
      hint: 'Deux actions au Present Continuous.',
      explanation: '"Is not sleeping" (forme négative) et "is doing" (forme affirmative).'
    },
  ],

  // ─── PAST SIMPLE ─────────────────────────────────────────────────────────────
  pastSimple: [
    {
      id: 'past01', type: 'fill-blank', level: 'A2',
      instruction: 'Complétez avec la forme correcte du Past Simple.',
      template: 'Yesterday, I ___ to school by bus.',
      verb: 'go', answer: 'went',
      hint: '"go" est irrégulier au passé',
      explanation: '"Go" → Past Simple = "went" (irrégulier). Apprenez les verbes irréguliers!'
    },
    {
      id: 'past02', type: 'translate', level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Elle est arrivée en retard hier.',
      answer: 'She arrived late yesterday.',
      alternatives: ['She was late yesterday.'],
      hint: '"Arriver" = arrive → arrived (régulier : + d)',
      explanation: '"Arrive" est régulier : arrived. "Yesterday" = hier. Vient à la fin.'
    },
    {
      id: 'past03', type: 'error-correct', level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'He didn\'t went to the party.',
      answer: 'He didn\'t go to the party.',
      hint: 'Après "didn\'t", verbe à l\'infinitif (sans -ed ni forme irrégulière)',
      explanation: 'Avec "didn\'t", le verbe reste à l\'infinitif : didn\'t go (pas didn\'t went).'
    },
    {
      id: 'past04', type: 'word-order', level: 'A2',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['They', 'watched', 'television', 'last', 'night', '.'],
      answer: 'They watched television last night.',
      hint: 'Sujet + verbe passé + objet + temps',
      explanation: '"Watched" = Past Simple de "watch" (régulier : + -ed). "Last night" = hier soir.'
    },
    {
      id: 'past05', type: 'fill-blank', level: 'A2',
      instruction: 'Complétez avec la forme négative du Past Simple.',
      template: 'We ___ electricity last week.',
      verb: 'not have', answer: 'didn\'t have',
      alternatives: ['did not have'],
      hint: 'Négatif passé : didn\'t + infinitif',
      explanation: 'Forme négative au Past Simple : didn\'t + verbe (infinitif). Pour tout sujet.'
    },
    {
      id: 'past06', type: 'translate', level: 'B1',
      instruction: 'Traduisez en anglais.',
      french: 'As-tu mangé ce matin ?',
      answer: 'Did you eat this morning?',
      alternatives: ['Did you have breakfast this morning?'],
      hint: 'Question au Past Simple : Did + sujet + infinitif?',
      explanation: 'Question au Past Simple : Did + sujet + verbe (infinitif) ? "Did you eat?"'
    },
    {
      id: 'past07', type: 'fill-blank', level: 'A2',
      instruction: 'Complétez avec la bonne forme du verbe "be" au passé.',
      template: 'She ___ born in 2005.',
      verb: 'be', answer: 'was',
      hint: 'She → was (pas were)',
      explanation: 'Past Simple de "be" : I/he/she/it → was. You/we/they → were.'
    },
    {
      id: 'past08', type: 'error-correct', level: 'B1',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'I buyed a new pen yesterday.',
      answer: 'I bought a new pen yesterday.',
      hint: '"Buy" est un verbe irrégulier',
      explanation: '"Buy" → Past Simple = "bought" (irrégulier). Pas "buyed"!'
    },
  ],

  // ─── FUTURE SIMPLE ───────────────────────────────────────────────────────────
  futureSimple: [
    {
      id: 'fut01', type: 'fill-blank', level: 'A2',
      instruction: 'Complétez avec "will" + verbe.',
      template: 'Tomorrow, I ___ my grandmother.',
      verb: 'visit', answer: 'will visit',
      hint: 'Futur simple : will + verbe infinitif',
      explanation: 'Future Simple : will + verbe (infinitif). Même forme pour tous les sujets.'
    },
    {
      id: 'fut02', type: 'translate', level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Il va pleuvoir demain.',
      answer: 'It will rain tomorrow.',
      alternatives: ['It is going to rain tomorrow.', 'It\'ll rain tomorrow.'],
      hint: '"Aller + infinitif" peut se traduire par "will" ou "be going to"',
      explanation: '"Will rain" et "is going to rain" sont tous les deux corrects pour une prédiction.'
    },
    {
      id: 'fut03', type: 'error-correct', level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'She will goes to the hospital tomorrow.',
      answer: 'She will go to the hospital tomorrow.',
      hint: 'Après "will", toujours l\'infinitif (sans -s)',
      explanation: 'Après "will", le verbe reste à l\'infinitif : will go (jamais will goes).'
    },
    {
      id: 'fut04', type: 'word-order', level: 'A2',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['He', 'will', 'be', 'a', 'doctor', 'one', 'day', '.'],
      answer: 'He will be a doctor one day.',
      hint: 'Sujet + will + be + attribut + temps',
      explanation: '"Will be" = sera. "One day" = un jour. Rêve ou ambition future.'
    },
    {
      id: 'fut05', type: 'translate', level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Je ne serai pas à l\'école demain.',
      answer: 'I will not be at school tomorrow.',
      alternatives: ['I won\'t be at school tomorrow.'],
      hint: 'Négatif : will not (won\'t) + infinitif',
      explanation: '"Will not" = "won\'t". "I won\'t be at school" = je ne serai pas à l\'école.'
    },
    {
      id: 'fut06', type: 'fill-blank', level: 'B1',
      instruction: 'Complétez avec "will" ou "won\'t" + verbe.',
      template: 'If it rains, we ___ at home.',
      verb: 'stay', answer: 'will stay',
      hint: 'Condition → résultat futur : If..., will...',
      explanation: 'Structure conditionnelle : If + Present Simple, + will + verbe. Classique!'
    },
    {
      id: 'fut07', type: 'error-correct', level: 'B1',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'Will she comes to the party?',
      answer: 'Will she come to the party?',
      hint: 'Question avec will : Will + sujet + infinitif?',
      explanation: 'Question au Future Simple : Will + sujet + verbe (infinitif) ? Pas "comes".'
    },
    {
      id: 'fut08', type: 'listening', level: 'A2',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'I think she will pass her exam.',
      answer: 'I think she will pass her exam.',
      hint: '"I think" = je pense. Opinion sur le futur.',
      explanation: '"I think + will" = prédiction personnelle. "Pass an exam" = réussir un examen.'
    },
  ],
};

// ─── LEVEL ASSESSMENT EXERCISES ─────────────────────────────────────────────
export const assessmentExercises = [
  // A1
  { id: 'as01', type: 'fill-blank', level: 'A1', instruction: 'Complétez.', template: 'I ___ a student.', verb: 'be', answer: 'am', hint: '"I" + be = ?', explanation: 'Le verbe "be" avec "I" = am.' },
  { id: 'as02', type: 'translate', level: 'A1', instruction: 'Traduisez.', french: 'J\'ai un frère.', answer: 'I have a brother.', alternatives: ['I have one brother.'], hint: '"Avoir" = have', explanation: '"Have" = avoir. "A brother" = un frère.' },
  { id: 'as03', type: 'fill-blank', level: 'A1', instruction: 'Complétez.', template: 'She ___ to school every day.', verb: 'go', answer: 'goes', hint: 'She + go = ?', explanation: '"Go" avec she/he/it = goes.' },
  // A2
  { id: 'as04', type: 'error-correct', level: 'A2', instruction: 'Corrigez.', sentence: 'He don\'t speak English.', answer: 'He doesn\'t speak English.', hint: 'He → doesn\'t', explanation: '"He doesn\'t" est correct.' },
  { id: 'as05', type: 'translate', level: 'A2', instruction: 'Traduisez.', french: 'Elle est en train de manger.', answer: 'She is eating.', alternatives: ['She\'s eating.'], hint: 'Present Continuous', explanation: '"Is eating" = être en train de manger.' },
  { id: 'as06', type: 'fill-blank', level: 'A2', instruction: 'Complétez.', template: 'I ___ my homework yesterday.', verb: 'finish', answer: 'finished', hint: 'Hier → Past Simple', explanation: '"Finish" au Past Simple = finished (régulier).' },
  // B1
  { id: 'as07', type: 'translate', level: 'B1', instruction: 'Traduisez.', french: 'Il n\'est pas venu à la fête.', answer: 'He didn\'t come to the party.', alternatives: ['He did not come to the party.'], hint: 'Past Simple négatif', explanation: '"Didn\'t come" = négatif de "came".' },
  { id: 'as08', type: 'error-correct', level: 'B1', instruction: 'Corrigez.', sentence: 'If I will have money, I will buy a book.', answer: 'If I have money, I will buy a book.', hint: 'Après "if" : Present Simple (pas will)', explanation: 'Structure : If + Present Simple, + will + verbe.' },
  { id: 'as09', type: 'fill-blank', level: 'B1', instruction: 'Complétez.', template: 'She ___ already ___ her work.', verb: 'have/finish', answer: 'has, finished', hint: 'Present Perfect : have/has + past participle', explanation: '"Has finished" = Present Perfect. Elle a déjà fini.' },
  { id: 'as10', type: 'translate', level: 'B1', instruction: 'Traduisez.', french: 'Que fais-tu quand il pleut ?', answer: 'What do you do when it rains?', hint: 'Question + habitude (Present Simple)', explanation: '"What do you do" = que fais-tu? "When it rains" = quand il pleut.' },
];

export function getAllExercises() {
  return Object.values(exercises).flat();
}

export function getExercisesByTopic(topicId) {
  return exercises[topicId] || [];
}

export function getExerciseById(id) {
  return getAllExercises().find(ex => ex.id === id);
}
