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
      id: 'r01', type: 'fill-blank', diffLevel: 1, level: 'A1',
      instruction: 'Complétez avec la bonne forme du verbe.',
      template: 'Every morning, I ___ at 6 o\'clock.',
      verb: 'wake up', answer: 'wake up',
      hint: 'Routine → Present Simple. Avec "I" : pas de -s.',
      explanation: 'On utilise le Present Simple pour les routines. Avec "I", le verbe ne change pas.'
    },
    {
      id: 'r02', type: 'translate', diffLevel: 2, level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Je mange le petit-déjeuner à sept heures.',
      answer: 'I eat breakfast at seven o\'clock.',
      alternatives: ['I have breakfast at seven o\'clock.', 'I eat breakfast at 7.', 'I have breakfast at 7.'],
      hint: '"Manger le petit-déjeuner" = eat breakfast ou have breakfast',
      explanation: '"Eat breakfast" et "have breakfast" sont tous les deux corrects en anglais.'
    },
    {
      id: 'r03', type: 'word-order', diffLevel: 1, level: 'A1',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['I', 'go', 'to', 'school', 'every', 'day', '.'],
      answer: 'I go to school every day.',
      hint: 'Structure : Sujet + Verbe + Complément',
      explanation: 'En anglais, le verbe vient toujours juste après le sujet.'
    },
    {
      id: 'r04', type: 'fill-blank', diffLevel: 1, level: 'A1',
      instruction: 'Complétez avec la bonne forme du verbe.',
      template: 'She ___ her teeth twice a day.',
      verb: 'brush', answer: 'brushes',
      hint: 'She → 3ème personne → verbe + -es (brush → brushes)',
      explanation: 'Avec he/she/it, on ajoute -s ou -es au verbe. "brush" → "brushes".'
    },
    {
      id: 'r05', type: 'translate', diffLevel: 2, level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Il se couche à dix heures du soir.',
      answer: 'He goes to bed at ten o\'clock.',
      alternatives: ['He goes to bed at 10.', 'He goes to bed at 10 pm.', 'He goes to bed at ten.'],
      hint: '"Se coucher" = go to bed. He → goes',
      explanation: '"Go to bed" = aller dormir. Avec "he", "go" devient "goes".'
    },
    {
      id: 'r06', type: 'error-correct', diffLevel: 3, level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur dans la phrase.',
      sentence: 'She go to work by bus every morning.',
      answer: 'She goes to work by bus every morning.',
      hint: 'She → 3ème personne singulière → verbe + -s',
      explanation: 'Avec "she", on doit écrire "goes" et non "go".'
    },
    {
      id: 'r07', type: 'listening', diffLevel: 2, level: 'A1',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'I take a shower every morning.',
      answer: 'I take a shower every morning.',
      hint: 'Écoutez attentivement chaque mot.',
      explanation: '"Take a shower" = prendre une douche.'
    },
    {
      id: 'r08', type: 'fill-blank', diffLevel: 2, level: 'A2',
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
      id: 'f01', type: 'translate', diffLevel: 2, level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Mon père s\'appelle Paul.',
      answer: 'My father\'s name is Paul.',
      alternatives: ['My father is called Paul.', 'My dad\'s name is Paul.'],
      hint: '"S\'appeler" = to be called / name is',
      explanation: 'En anglais : "My father\'s name is Paul" ou "My father is called Paul".'
    },
    {
      id: 'f02', type: 'fill-blank', diffLevel: 1, level: 'A1',
      instruction: 'Complétez avec le bon mot.',
      template: 'Your father\'s mother is your ___.',
      answer: 'grandmother',
      alternatives: ['grandma', 'grand-mother'],
      hint: 'La mère de ton père = ?',
      explanation: 'La mère de ton père ou de ta mère s\'appelle "grandmother" (ou "grandma").'
    },
    {
      id: 'f03', type: 'translate', diffLevel: 2, level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'J\'ai deux frères et une sœur.',
      answer: 'I have two brothers and one sister.',
      alternatives: ['I have two brothers and a sister.'],
      hint: '"Frère" = brother, "Sœur" = sister',
      explanation: '"Brothers" est le pluriel de "brother". "One" et "a" sont tous les deux corrects.'
    },
    {
      id: 'f04', type: 'word-order', diffLevel: 1, level: 'A1',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['My', 'sister', 'is', 'older', 'than', 'me', '.'],
      answer: 'My sister is older than me.',
      hint: 'Comparatif : older than = plus âgée que',
      explanation: 'Pour comparer, on utilise : adjectif + -er + than. "old" → "older than".'
    },
    {
      id: 'f05', type: 'error-correct', diffLevel: 3, level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'My parents has three children.',
      answer: 'My parents have three children.',
      hint: '"My parents" = pluriel → "have" et non "has"',
      explanation: '"Has" s\'utilise avec he/she/it. "My parents" est pluriel, donc on utilise "have".'
    },
    {
      id: 'f06', type: 'translate', diffLevel: 2, level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Mes grands-parents habitent au village.',
      answer: 'My grandparents live in the village.',
      alternatives: ['My grandparents live in the village.', 'My grandparents stay in the village.'],
      hint: '"Habiter" = live in / stay in',
      explanation: '"Live in" est le verbe le plus courant pour "habiter".'
    },
    {
      id: 'f07', type: 'listening', diffLevel: 2, level: 'A1',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'I live with my mother and my father.',
      answer: 'I live with my mother and my father.',
      hint: 'Ecoutez bien les mots de la famille.',
      explanation: '"Live with" = habiter avec.'
    },
    {
      id: 'f08', type: 'fill-blank', diffLevel: 1, level: 'A1',
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
      id: 's01', type: 'translate', diffLevel: 2, level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Mon livre est sur la table.',
      answer: 'My book is on the table.',
      alternatives: ['The book is on the table.'],
      hint: '"Sur" = on, "table" = table',
      explanation: 'La préposition "sur" se traduit par "on" en anglais.'
    },
    {
      id: 's02', type: 'fill-blank', diffLevel: 1, level: 'A1',
      instruction: 'Complétez avec le bon mot.',
      template: 'The person who teaches in a school is a ___.',
      answer: 'teacher',
      hint: 'Celui qui enseigne = ?',
      explanation: '"Teacher" = enseignant(e). "Teach" est le verbe, "teacher" est la personne.'
    },
    {
      id: 's03', type: 'word-order', diffLevel: 1, level: 'A1',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['I', 'study', 'English', 'at', 'school', '.'],
      answer: 'I study English at school.',
      hint: 'Sujet + Verbe + Objet + Lieu',
      explanation: 'L\'ordre habituel en anglais : Sujet → Verbe → Objet → Lieu.'
    },
    {
      id: 's04', type: 'translate', diffLevel: 2, level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Quand est-ce que l\'école commence ?',
      answer: 'When does school start?',
      alternatives: ['When does school begin?'],
      hint: 'Question avec "does" : Does school start...?',
      explanation: 'Pour une question au Present Simple, on utilise "does" avec he/she/it/school.'
    },
    {
      id: 's05', type: 'error-correct', diffLevel: 3, level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'I doesn\'t have a pencil.',
      answer: 'I don\'t have a pencil.',
      hint: '"I" → don\'t (pas doesn\'t)',
      explanation: '"Doesn\'t" s\'utilise avec he/she/it. Avec "I", on utilise "don\'t".'
    },
    {
      id: 's06', type: 'fill-blank', diffLevel: 1, level: 'A1',
      instruction: 'Complétez avec le bon mot.',
      template: 'A place full of books where you can study quietly is a ___.',
      answer: 'library',
      alternatives: ['the library'],
      hint: 'Un endroit avec beaucoup de livres = ?',
      explanation: '"Library" = bibliothèque. Ne pas confondre avec "bookshop" (librairie).'
    },
    {
      id: 's07', type: 'translate', diffLevel: 2, level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Mon ami s\'appelle Jean.',
      answer: 'My friend\'s name is Jean.',
      alternatives: ['My friend is called Jean.'],
      hint: '"S\'appeler" = name is / is called',
      explanation: '"My friend\'s name is" utilise le génitif saxo (\'s) pour montrer la possession.'
    },
    {
      id: 's08', type: 'listening', diffLevel: 2, level: 'A1',
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
      id: 'b01', type: 'translate', diffLevel: 2, level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'J\'ai mal à la tête.',
      answer: 'I have a headache.',
      alternatives: ['My head hurts.', 'I have a head ache.'],
      hint: '"Avoir mal à la tête" = have a headache',
      explanation: '"Headache" est un seul mot qui signifie "mal de tête". "Have a headache" = avoir mal à la tête.'
    },
    {
      id: 'b02', type: 'fill-blank', diffLevel: 1, level: 'A1',
      instruction: 'Complétez avec le bon mot.',
      template: 'We have ten fingers and ten ___.',
      answer: 'toes',
      hint: 'Les doigts de pieds = ?',
      explanation: '"Fingers" = doigts de main. "Toes" = doigts de pied.'
    },
    {
      id: 'b03', type: 'translate', diffLevel: 2, level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Ses yeux sont marrons.',
      answer: 'His eyes are brown.',
      alternatives: ['Her eyes are brown.'],
      hint: '"Yeux" = eyes (pluriel de "eye"), "marrons" = brown',
      explanation: '"Eyes" est le pluriel de "eye". "His" pour un homme, "her" pour une femme.'
    },
    {
      id: 'b04', type: 'word-order', diffLevel: 1, level: 'A1',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['We', 'have', 'two', 'eyes', 'and', 'two', 'ears', '.'],
      answer: 'We have two eyes and two ears.',
      hint: 'Sujet + have + nombre + partie du corps',
      explanation: 'Simple présentation du corps humain avec "have" (avoir).'
    },
    {
      id: 'b05', type: 'error-correct', diffLevel: 3, level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'She hurts her foots.',
      answer: 'She hurts her feet.',
      hint: '"Foot" est un pluriel irrégulier',
      explanation: '"Foot" → pluriel = "feet" (irrégulier). Pas "foots"!'
    },
    {
      id: 'b06', type: 'translate', diffLevel: 2, level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Je me lave les mains avant de manger.',
      answer: 'I wash my hands before eating.',
      alternatives: ['I wash my hands before I eat.'],
      hint: '"Se laver les mains" = wash hands',
      explanation: '"Wash my hands" = se laver les mains. "Before eating" ou "before I eat".'
    },
    {
      id: 'b07', type: 'fill-blank', diffLevel: 1, level: 'A1',
      instruction: 'Complétez avec le bon mot.',
      template: 'You use your ___ to see and your ___ to hear.',
      answer: 'eyes, ears',
      hint: 'Voir = eyes, Entendre = ears',
      explanation: '"Eyes" = yeux, "ears" = oreilles.'
    },
    {
      id: 'b08', type: 'listening', diffLevel: 2, level: 'A1',
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
      id: 't01', type: 'translate', diffLevel: 2, level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Il est trois heures et demie.',
      answer: 'It is half past three.',
      alternatives: ['It\'s half past three.', 'It is three thirty.', 'It\'s three thirty.'],
      hint: '"Et demie" = half past, "trois heures" = three',
      explanation: '"Half past three" = 3h30. On peut aussi dire "three thirty".'
    },
    {
      id: 't02', type: 'fill-blank', diffLevel: 1, level: 'A1',
      instruction: 'Complétez avec la bonne préposition.',
      template: 'School starts ___ 7:30 in the morning.',
      answer: 'at',
      hint: 'Pour une heure précise, on utilise "at"',
      explanation: 'On utilise "at" devant une heure précise : at 7:30, at noon, at midnight.'
    },
    {
      id: 't03', type: 'translate', diffLevel: 2, level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Quelle heure est-il ?',
      answer: 'What time is it?',
      alternatives: ['What\'s the time?'],
      hint: '"Quelle heure" = What time, "est-il" = is it',
      explanation: '"What time is it?" ou "What\'s the time?" sont tous deux corrects.'
    },
    {
      id: 't04', type: 'error-correct', diffLevel: 3, level: 'A1',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'I wake up in 6 o\'clock.',
      answer: 'I wake up at 6 o\'clock.',
      hint: 'Pour une heure précise : "at" ou "in" ?',
      explanation: 'On utilise "at" pour les heures précises, jamais "in". "At 6 o\'clock".'
    },
    {
      id: 't05', type: 'fill-blank', diffLevel: 1, level: 'A1',
      instruction: 'Complétez avec le bon mot.',
      template: 'There are ___ days in a week.',
      answer: 'seven',
      alternatives: ['7'],
      hint: 'Lundi, mardi, mercredi... combien ?',
      explanation: 'Il y a 7 jours dans une semaine : Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.'
    },
    {
      id: 't06', type: 'translate', diffLevel: 2, level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Le lundi, j\'ai cours de mathématiques.',
      answer: 'On Mondays, I have a mathematics class.',
      alternatives: ['On Monday, I have maths.', 'On Mondays, I have maths.', 'On Monday I have a maths class.'],
      hint: '"Le lundi" (habitude) = on Mondays (avec -s)',
      explanation: '"On Mondays" (pluriel) exprime une habitude hebdomadaire. "On Monday" est aussi accepté.'
    },
    {
      id: 't07', type: 'listening', diffLevel: 2, level: 'A1',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'The train arrives at quarter past ten.',
      answer: 'The train arrives at quarter past ten.',
      hint: '"Quarter past" = et quart',
      explanation: '"Quarter past ten" = 10h15. "Quarter to ten" = 9h45.'
    },
    {
      id: 't08', type: 'word-order', diffLevel: 2, level: 'A2',
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
      id: 'v01', type: 'translate', diffLevel: 2, level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Je parle français et malgache.',
      answer: 'I speak French and Malagasy.',
      hint: '"Parler" = speak',
      explanation: '"Speak" = parler une langue. On dit "speak French", pas "speak the French".'
    },
    {
      id: 'v02', type: 'fill-blank', diffLevel: 1, level: 'A1',
      instruction: 'Complétez avec la bonne forme du verbe.',
      template: 'She ___ animals very much.',
      verb: 'love', answer: 'loves',
      hint: 'She → verbe + -s',
      explanation: 'Avec "she", on ajoute -s : "love" → "loves".'
    },
    {
      id: 'v03', type: 'translate', diffLevel: 2, level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Nous mangeons du riz tous les jours.',
      answer: 'We eat rice every day.',
      alternatives: ['We eat rice everyday.'],
      hint: '"Manger" = eat, "riz" = rice',
      explanation: '"Eat rice" = manger du riz. Pas d\'article devant "rice" en anglais.'
    },
    {
      id: 'v04', type: 'error-correct', diffLevel: 3, level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'He don\'t work on Sundays.',
      answer: 'He doesn\'t work on Sundays.',
      hint: 'He → doesn\'t (pas don\'t)',
      explanation: 'La forme négative de "he" est "he doesn\'t", jamais "he don\'t".'
    },
    {
      id: 'v05', type: 'word-order', diffLevel: 1, level: 'A1',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['Can', 'you', 'speak', 'English', '?'],
      answer: 'Can you speak English?',
      hint: 'Question avec "can" : Can + sujet + verbe',
      explanation: 'Pour les questions avec "can", on met "can" en premier : Can you...?'
    },
    {
      id: 'v06', type: 'translate', diffLevel: 2, level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Je comprends un peu l\'anglais.',
      answer: 'I understand a little English.',
      alternatives: ['I understand English a little.', 'I understand a bit of English.'],
      hint: '"Comprendre" = understand, "un peu" = a little',
      explanation: '"Understand" est un verbe irrégulier mais au Present Simple il est régulier.'
    },
    {
      id: 'v07', type: 'fill-blank', diffLevel: 2, level: 'A2',
      instruction: 'Complétez avec la bonne forme négative.',
      template: 'She ___ coffee.',
      verb: 'not like', answer: 'doesn\'t like',
      alternatives: ['does not like'],
      hint: 'She → doesn\'t + verbe infinitif',
      explanation: 'Forme négative avec she/he/it : doesn\'t + verbe (sans -s).'
    },
    {
      id: 'v08', type: 'listening', diffLevel: 2, level: 'A1',
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
      id: 'ta01', type: 'translate', diffLevel: 2, level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Je vais toujours à l\'école à pied.',
      answer: 'I always walk to school.',
      alternatives: ['I always go to school on foot.'],
      hint: '"Toujours" = always. Place de l\'adverbe : avant le verbe principal.',
      explanation: 'Les adverbes de fréquence se placent avant le verbe principal : I always walk...'
    },
    {
      id: 'ta02', type: 'fill-blank', diffLevel: 2, level: 'A2',
      instruction: 'Complétez avec le bon adverbe.',
      template: 'She ___ eats meat. She is vegetarian.',
      answer: 'never',
      hint: '0% du temps = ?',
      explanation: '"Never" = jamais. Fréquence 0%. Se place avant le verbe principal.'
    },
    {
      id: 'ta03', type: 'error-correct', diffLevel: 3, level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur (position de l\'adverbe).',
      sentence: 'I go sometimes to the market.',
      answer: 'I sometimes go to the market.',
      alternatives: ['Sometimes I go to the market.'],
      hint: 'L\'adverbe de fréquence se place avant le verbe principal',
      explanation: 'L\'adverbe "sometimes" se place avant le verbe : "I sometimes go", ou au début : "Sometimes I go".'
    },
    {
      id: 'ta04', type: 'word-order', diffLevel: 2, level: 'A2',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['She', 'is', 'often', 'late', '.'],
      answer: 'She is often late.',
      hint: 'Avec le verbe "to be", l\'adverbe vient APRÈS',
      explanation: 'Avec le verbe "to be", l\'adverbe de fréquence se place après : She is often late.'
    },
    {
      id: 'ta05', type: 'translate', diffLevel: 2, level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Il vient rarement ici.',
      answer: 'He rarely comes here.',
      alternatives: ['He seldom comes here.'],
      hint: '"Rarement" = rarely ou seldom',
      explanation: '"Rarely" et "seldom" signifient tous les deux "rarement". "Rarely" est plus courant.'
    },
    {
      id: 'ta06', type: 'fill-blank', diffLevel: 2, level: 'A2',
      instruction: 'Choisissez le bon adverbe.',
      template: 'She is ___ tired after work. She works twelve hours a day!',
      answer: 'always',
      alternatives: ['often'],
      hint: '12 heures de travail par jour → quelle fréquence ?',
      explanation: '"Always" = 100% du temps. C\'est logique après 12h de travail chaque jour.'
    },
    {
      id: 'ta07', type: 'listening', diffLevel: 2, level: 'A2',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'I have already finished my homework.',
      answer: 'I have already finished my homework.',
      hint: '"Already" = déjà',
      explanation: '"Already" = déjà. Se place entre "have" et le participe passé.'
    },
    {
      id: 'ta08', type: 'translate', diffLevel: 2, level: 'A2',
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
      id: 'ps01', type: 'fill-blank', diffLevel: 1, level: 'A1',
      instruction: 'Complétez avec la bonne forme du verbe.',
      template: 'She ___ to the market every Sunday.',
      verb: 'go', answer: 'goes',
      hint: 'She → go + -es (car "go" finit en -o)',
      explanation: 'Avec she/he/it : go → goes, do → does, watch → watches.'
    },
    {
      id: 'ps02', type: 'error-correct', diffLevel: 3, level: 'A1',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'He don\'t like bananas.',
      answer: 'He doesn\'t like bananas.',
      hint: 'Négatif avec he : doesn\'t (pas don\'t)',
      explanation: 'Forme négative : I/you/we/they + don\'t. He/she/it + doesn\'t.'
    },
    {
      id: 'ps03', type: 'translate', diffLevel: 2, level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Est-ce qu\'il habite à Antananarivo ?',
      answer: 'Does he live in Antananarivo?',
      hint: 'Question avec he → Does he...?',
      explanation: 'Question au Present Simple avec he/she/it : Does + sujet + verbe (infinitif)?'
    },
    {
      id: 'ps04', type: 'fill-blank', diffLevel: 1, level: 'A1',
      instruction: 'Complétez avec la bonne forme du verbe.',
      template: 'Water ___ at 100 degrees Celsius.',
      verb: 'boil', answer: 'boils',
      hint: 'Vérité générale scientifique → Present Simple. Water = it',
      explanation: 'Le Present Simple exprime les vérités générales. "Water boils" = l\'eau bout.'
    },
    {
      id: 'ps05', type: 'word-order', diffLevel: 2, level: 'A2',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['He', 'plays', 'football', 'every', 'Saturday', '.'],
      answer: 'He plays football every Saturday.',
      hint: 'Sujet + verbe + objet + temps',
      explanation: 'Ordre standard : He plays (quoi ?) football (quand ?) every Saturday.'
    },
    {
      id: 'ps06', type: 'error-correct', diffLevel: 3, level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'They doesn\'t know the answer.',
      answer: 'They don\'t know the answer.',
      hint: '"They" est pluriel → don\'t (pas doesn\'t)',
      explanation: '"Doesn\'t" s\'utilise seulement avec he/she/it. Avec "they" : don\'t.'
    },
    {
      id: 'ps07', type: 'translate', diffLevel: 2, level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Elle ne travaille pas le dimanche.',
      answer: 'She doesn\'t work on Sundays.',
      alternatives: ['She does not work on Sundays.', 'She doesn\'t work on Sunday.'],
      hint: 'Négatif avec she : doesn\'t + verbe',
      explanation: '"She doesn\'t work" = elle ne travaille pas. "On Sundays" = le dimanche (habitude).'
    },
    {
      id: 'ps08', type: 'listening', diffLevel: 2, level: 'A2',
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
      id: 'pc01', type: 'fill-blank', diffLevel: 2, level: 'A2',
      instruction: 'Complétez avec la forme correcte (Present Continuous).',
      template: 'Look! It ___ outside.',
      verb: 'rain', answer: 'is raining',
      hint: 'Action en cours maintenant → be + verbe-ing',
      explanation: 'Present Continuous = be (am/is/are) + verbe-ing. "It is raining" = il pleut maintenant.'
    },
    {
      id: 'pc02', type: 'translate', diffLevel: 2, level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Elle est en train de lire un livre.',
      answer: 'She is reading a book.',
      alternatives: ['She\'s reading a book.'],
      hint: '"Être en train de" = Present Continuous',
      explanation: '"She is reading" = she\'s reading. Le Present Continuous traduit "être en train de".'
    },
    {
      id: 'pc03', type: 'error-correct', diffLevel: 3, level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'I am study English right now.',
      answer: 'I am studying English right now.',
      hint: 'be + verbe-ing (pas verbe seul)',
      explanation: 'Present Continuous : am/is/are + verbe + -ing. "study" → "studying".'
    },
    {
      id: 'pc04', type: 'word-order', diffLevel: 2, level: 'A2',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['The', 'children', 'are', 'playing', 'in', 'the', 'garden', '.'],
      answer: 'The children are playing in the garden.',
      hint: 'Sujet + are + verbe-ing + lieu',
      explanation: 'Avec "the children" (pluriel), on utilise "are" : are playing.'
    },
    {
      id: 'pc05', type: 'fill-blank', diffLevel: 2, level: 'A2',
      instruction: 'Complétez la question.',
      template: 'What are you ___ right now?',
      verb: 'do', answer: 'doing',
      hint: 'do + -ing = ?',
      explanation: '"What are you doing?" = Qu\'est-ce que tu fais en ce moment ?'
    },
    {
      id: 'pc06', type: 'translate', diffLevel: 2, level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Ils ne travaillent pas en ce moment.',
      answer: 'They are not working right now.',
      alternatives: ['They aren\'t working right now.', 'They are not working now.', 'They aren\'t working now.'],
      hint: 'Négatif : be + not + verbe-ing',
      explanation: 'Forme négative : They are not working = They aren\'t working.'
    },
    {
      id: 'pc07', type: 'error-correct', diffLevel: 3, level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'He is eat a mango.',
      answer: 'He is eating a mango.',
      hint: 'be + verbe + -ing',
      explanation: '"Eat" doit prendre la forme -ing : "eating". He is eating a mango.'
    },
    {
      id: 'pc08', type: 'listening', diffLevel: 2, level: 'A2',
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
      id: 'past01', type: 'fill-blank', diffLevel: 2, level: 'A2',
      instruction: 'Complétez avec la forme correcte du Past Simple.',
      template: 'Yesterday, I ___ to school by bus.',
      verb: 'go', answer: 'went',
      hint: '"go" est irrégulier au passé',
      explanation: '"Go" → Past Simple = "went" (irrégulier). Apprenez les verbes irréguliers!'
    },
    {
      id: 'past02', type: 'translate', diffLevel: 2, level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Elle est arrivée en retard hier.',
      answer: 'She arrived late yesterday.',
      alternatives: ['She was late yesterday.'],
      hint: '"Arriver" = arrive → arrived (régulier : + d)',
      explanation: '"Arrive" est régulier : arrived. "Yesterday" = hier. Vient à la fin.'
    },
    {
      id: 'past03', type: 'error-correct', diffLevel: 3, level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'He didn\'t went to the party.',
      answer: 'He didn\'t go to the party.',
      hint: 'Après "didn\'t", verbe à l\'infinitif (sans -ed ni forme irrégulière)',
      explanation: 'Avec "didn\'t", le verbe reste à l\'infinitif : didn\'t go (pas didn\'t went).'
    },
    {
      id: 'past04', type: 'word-order', diffLevel: 2, level: 'A2',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['They', 'watched', 'television', 'last', 'night', '.'],
      answer: 'They watched television last night.',
      hint: 'Sujet + verbe passé + objet + temps',
      explanation: '"Watched" = Past Simple de "watch" (régulier : + -ed). "Last night" = hier soir.'
    },
    {
      id: 'past05', type: 'fill-blank', diffLevel: 2, level: 'A2',
      instruction: 'Complétez avec la forme négative du Past Simple.',
      template: 'We ___ electricity last week.',
      verb: 'not have', answer: 'didn\'t have',
      alternatives: ['did not have'],
      hint: 'Négatif passé : didn\'t + infinitif',
      explanation: 'Forme négative au Past Simple : didn\'t + verbe (infinitif). Pour tout sujet.'
    },
    {
      id: 'past06', type: 'translate', diffLevel: 3, level: 'B1',
      instruction: 'Traduisez en anglais.',
      french: 'As-tu mangé ce matin ?',
      answer: 'Did you eat this morning?',
      alternatives: ['Did you have breakfast this morning?'],
      hint: 'Question au Past Simple : Did + sujet + infinitif?',
      explanation: 'Question au Past Simple : Did + sujet + verbe (infinitif) ? "Did you eat?"'
    },
    {
      id: 'past07', type: 'fill-blank', diffLevel: 2, level: 'A2',
      instruction: 'Complétez avec la bonne forme du verbe "be" au passé.',
      template: 'She ___ born in 2005.',
      verb: 'be', answer: 'was',
      hint: 'She → was (pas were)',
      explanation: 'Past Simple de "be" : I/he/she/it → was. You/we/they → were.'
    },
    {
      id: 'past08', type: 'error-correct', diffLevel: 3, level: 'B1',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'I buyed a new pen yesterday.',
      answer: 'I bought a new pen yesterday.',
      hint: '"Buy" est un verbe irrégulier',
      explanation: '"Buy" → Past Simple = "bought" (irrégulier). Pas "buyed"!'
    },
  ],

  // ─── FOOD ────────────────────────────────────────────────────────────────────
  food: [
    {
      id: 'fd01', type: 'translate', diffLevel: 2, level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'J\'aime les bananes.',
      answer: 'I like bananas.',
      alternatives: ['I love bananas.'],
      hint: '"Aimer" = like. Pluriel de banana = bananas',
      explanation: '"I like" + pluriel pour exprimer un goût général.'
    },
    {
      id: 'fd02', type: 'fill-blank', diffLevel: 1, level: 'A1',
      instruction: 'Complétez avec le bon mot.',
      template: 'I drink ___ every morning.',
      answer: 'milk',
      alternatives: ['water', 'tea', 'coffee'],
      hint: 'Une boisson du petit-déjeuner',
      explanation: '"Milk" (lait), "water" (eau), "tea" (thé), "coffee" (café) sont tous valides.'
    },
    {
      id: 'fd03', type: 'translate', diffLevel: 2, level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Nous mangeons du riz et du poulet.',
      answer: 'We eat rice and chicken.',
      hint: '"Riz" = rice, "poulet" = chicken',
      explanation: 'Pas d\'article devant "rice" et "chicken" en général.'
    },
    {
      id: 'fd04', type: 'word-order', diffLevel: 1, level: 'A1',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['She', 'wants', 'a', 'glass', 'of', 'water', '.'],
      answer: 'She wants a glass of water.',
      hint: 'Sujet + verbe + article + nom + of + nom',
      explanation: '"A glass of water" = un verre d\'eau.'
    },
    {
      id: 'fd05', type: 'error-correct', diffLevel: 3, level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'I eat a rice every day.',
      answer: 'I eat rice every day.',
      hint: 'Rice est non-dénombrable → pas d\'article "a"',
      explanation: '"Rice" est indénombrable : pas de "a/an" devant. Juste "rice".'
    },
    {
      id: 'fd06', type: 'fill-blank', diffLevel: 1, level: 'A1',
      instruction: 'Complétez avec la bonne quantité.',
      template: 'How ___ bread do you want?',
      answer: 'much',
      hint: '"Bread" est indénombrable → how much/many ?',
      explanation: '"How much" pour indénombrables (bread, water, rice). "How many" pour dénombrables.'
    },
    {
      id: 'fd07', type: 'listening', diffLevel: 2, level: 'A1',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'I would like some fish and vegetables.',
      answer: 'I would like some fish and vegetables.',
      hint: 'Une commande au restaurant.',
      explanation: '"I would like" = je voudrais (poli). "Fish" = poisson, "vegetables" = légumes.'
    },
    {
      id: 'fd08', type: 'translate', diffLevel: 2, level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Mon plat préféré est le poulet avec du riz.',
      answer: 'My favourite dish is chicken with rice.',
      alternatives: ['My favorite dish is chicken with rice.', 'My favourite meal is chicken with rice.'],
      hint: '"Plat préféré" = favourite dish. "Avec" = with',
      explanation: '"Favourite" (UK) ou "favorite" (US). "Dish" = plat.'
    },
  ],

  // ─── COLORS ──────────────────────────────────────────────────────────────────
  colors: [
    {
      id: 'c01', type: 'translate', diffLevel: 2, level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Le ciel est bleu.',
      answer: 'The sky is blue.',
      hint: '"Ciel" = sky, "bleu" = blue',
      explanation: 'L\'adjectif de couleur se place APRÈS "is/are" (sky is blue).'
    },
    {
      id: 'c02', type: 'fill-blank', diffLevel: 1, level: 'A1',
      instruction: 'Complétez avec la bonne couleur.',
      template: 'Grass is ___.',
      answer: 'green',
      hint: 'De quelle couleur est l\'herbe ?',
      explanation: '"Green" = vert. L\'herbe est verte.'
    },
    {
      id: 'c03', type: 'word-order', diffLevel: 1, level: 'A1',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['She', 'has', 'a', 'red', 'bag', '.'],
      answer: 'She has a red bag.',
      hint: 'En anglais, la couleur va AVANT le nom',
      explanation: 'Ordre : sujet + verbe + article + couleur + nom. "A red bag" (pas "a bag red").'
    },
    {
      id: 'c04', type: 'error-correct', diffLevel: 3, level: 'A1',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'He has a car blue.',
      answer: 'He has a blue car.',
      hint: 'La couleur se place AVANT le nom en anglais',
      explanation: 'En anglais : a + couleur + nom. "A blue car" (pas "a car blue").'
    },
    {
      id: 'c05', type: 'translate', diffLevel: 2, level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Mes cheveux sont noirs.',
      answer: 'My hair is black.',
      hint: '"Hair" (cheveux) est SINGULIER en anglais',
      explanation: 'En anglais, "hair" est toujours singulier : "my hair IS" (pas "are").'
    },
    {
      id: 'c06', type: 'listening', diffLevel: 2, level: 'A1',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'I like the yellow and white flowers.',
      answer: 'I like the yellow and white flowers.',
      hint: 'Deux couleurs et un pluriel.',
      explanation: '"Yellow" = jaune, "white" = blanc, "flowers" = fleurs.'
    },
    {
      id: 'c07', type: 'fill-blank', diffLevel: 1, level: 'A1',
      instruction: 'Complétez avec la bonne couleur.',
      template: 'The Malagasy flag is red, green, and ___.',
      answer: 'white',
      hint: 'Drapeau malgache : quelles couleurs ?',
      explanation: 'Le drapeau de Madagascar : blanc (white), rouge (red), vert (green).'
    },
    {
      id: 'c08', type: 'translate', diffLevel: 2, level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Sa voiture n\'est pas noire, elle est grise.',
      answer: 'His car is not black, it is grey.',
      alternatives: ['Her car is not black, it is grey.', 'His car isn\'t black, it\'s gray.', 'Her car isn\'t black, it\'s grey.'],
      hint: '"Grise" = grey (UK) / gray (US)',
      explanation: 'Forme négative + affirmative. "Grey" (UK) ou "gray" (US) sont tous deux corrects.'
    },
  ],

  // ─── NUMBERS ─────────────────────────────────────────────────────────────────
  numbers: [
    {
      id: 'n01', type: 'translate', diffLevel: 2, level: 'A1',
      instruction: 'Traduisez en anglais (écrivez le nombre en lettres).',
      french: 'J\'ai quinze ans.',
      answer: 'I am fifteen years old.',
      alternatives: ['I\'m fifteen years old.', 'I am 15 years old.', 'I\'m 15 years old.'],
      hint: '15 = fifteen',
      explanation: '"I am ___ years old" pour l\'âge. 15 s\'écrit "fifteen".'
    },
    {
      id: 'n02', type: 'fill-blank', diffLevel: 1, level: 'A1',
      instruction: 'Complétez avec le bon nombre.',
      template: 'There are ___ months in a year.',
      answer: 'twelve',
      alternatives: ['12'],
      hint: 'Combien de mois dans une année ?',
      explanation: '12 mois = twelve months.'
    },
    {
      id: 'n03', type: 'word-order', diffLevel: 1, level: 'A1',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['I', 'have', 'three', 'books', 'and', 'two', 'pens', '.'],
      answer: 'I have three books and two pens.',
      hint: 'Nombre + nom pluriel',
      explanation: 'Après un nombre > 1, le nom est AU PLURIEL : "three books".'
    },
    {
      id: 'n04', type: 'translate', diffLevel: 2, level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Il y a vingt étudiants dans la classe.',
      answer: 'There are twenty students in the class.',
      hint: '"Il y a" (pluriel) = there are. 20 = twenty.',
      explanation: 'There are (pluriel). 20 students = twenty students.'
    },
    {
      id: 'n05', type: 'error-correct', diffLevel: 3, level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'She has five brother.',
      answer: 'She has five brothers.',
      hint: 'Après un chiffre > 1, pluriel',
      explanation: 'Avec un nombre > 1, le nom prend un "s" : "five brothers".'
    },
    {
      id: 'n06', type: 'listening', diffLevel: 2, level: 'A1',
      instruction: 'Écoutez et écrivez le nombre en lettres.',
      audio: 'My phone number is zero seven eight.',
      answer: 'My phone number is zero seven eight.',
      hint: 'Trois chiffres : 0-7-8',
      explanation: '"Zero seven eight" = 078. En anglais, on dit souvent chaque chiffre séparément.'
    },
    {
      id: 'n07', type: 'fill-blank', diffLevel: 2, level: 'A2',
      instruction: 'Complétez avec le bon nombre ordinal.',
      template: 'Monday is the ___ day of the week.',
      answer: 'first',
      hint: '1er = first',
      explanation: 'Nombres ordinaux : first (1er), second (2e), third (3e), fourth (4e)...'
    },
    {
      id: 'n08', type: 'translate', diffLevel: 2, level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Mon anniversaire est le vingt-cinq décembre.',
      answer: 'My birthday is on the twenty-fifth of December.',
      alternatives: ['My birthday is December 25th.', 'My birthday is on December the twenty-fifth.'],
      hint: '25e = twenty-fifth. Pour les dates : the + ordinal + of + mois',
      explanation: 'Dates en UK : "the 25th of December". Dates en US : "December 25th".'
    },
  ],

  // ─── ADJECTIVES ──────────────────────────────────────────────────────────────
  adjectives: [
    {
      id: 'a01', type: 'translate', diffLevel: 2, level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Elle est belle et intelligente.',
      answer: 'She is beautiful and intelligent.',
      alternatives: ['She\'s beautiful and intelligent.', 'She is pretty and smart.'],
      hint: '"Belle" = beautiful / pretty. "Intelligente" = intelligent / smart',
      explanation: 'Les adjectifs en anglais ne changent jamais (beautiful pour masculin et féminin).'
    },
    {
      id: 'a02', type: 'fill-blank', diffLevel: 1, level: 'A1',
      instruction: 'Complétez avec le contraire.',
      template: 'The opposite of "big" is ___.',
      answer: 'small',
      alternatives: ['little'],
      hint: 'Contraire de "grand" ?',
      explanation: '"Small" ou "little" = petit. Contraire de "big" (grand).'
    },
    {
      id: 'a03', type: 'word-order', diffLevel: 1, level: 'A1',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['He', 'is', 'a', 'tall', 'young', 'man', '.'],
      answer: 'He is a tall young man.',
      hint: 'Ordre : taille + âge + nom',
      explanation: 'Ordre des adjectifs : opinion → taille → âge → couleur → nom. "Tall young man".'
    },
    {
      id: 'a04', type: 'error-correct', diffLevel: 3, level: 'A1',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'She has eyes blue.',
      answer: 'She has blue eyes.',
      hint: 'Adjectif AVANT le nom en anglais',
      explanation: 'En anglais : adjectif + nom. "Blue eyes" (pas "eyes blue").'
    },
    {
      id: 'a05', type: 'translate', diffLevel: 2, level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Cette maison est vieille mais confortable.',
      answer: 'This house is old but comfortable.',
      hint: '"Vieille" = old. "Confortable" = comfortable',
      explanation: 'Les adjectifs "old" et "comfortable" ne changent pas selon le genre.'
    },
    {
      id: 'a06', type: 'listening', diffLevel: 2, level: 'A2',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'My little brother is very funny and clever.',
      answer: 'My little brother is very funny and clever.',
      hint: 'Deux adjectifs : "drôle" et "intelligent".',
      explanation: '"Funny" = drôle. "Clever" = intelligent / malin.'
    },
    {
      id: 'a07', type: 'fill-blank', diffLevel: 2, level: 'A2',
      instruction: 'Complétez avec le comparatif.',
      template: 'My brother is ___ (tall) than me.',
      answer: 'taller',
      hint: 'tall + -er = ?',
      explanation: 'Comparatif des adjectifs courts : + "-er". "Tall" → "taller".'
    },
    {
      id: 'a08', type: 'translate', diffLevel: 2, level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Il est le plus rapide de la classe.',
      answer: 'He is the fastest in the class.',
      alternatives: ['He\'s the fastest in the class.'],
      hint: 'Superlatif : the + adjectif + -est',
      explanation: '"The fastest" = le plus rapide. Pour superlatif court : "the" + adj + "-est".'
    },
  ],

  // ─── PRONOUNS ────────────────────────────────────────────────────────────────
  pronouns: [
    {
      id: 'pr01', type: 'fill-blank', diffLevel: 1, level: 'A1',
      instruction: 'Complétez avec le bon pronom sujet.',
      template: '___ is my teacher. (la prof femme)',
      answer: 'She',
      hint: 'Une femme = ?',
      explanation: '"She" pour une femme, "he" pour un homme, "it" pour un objet.'
    },
    {
      id: 'pr02', type: 'translate', diffLevel: 2, level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Elle m\'aime.',
      answer: 'She loves me.',
      hint: '"Me" = moi (pronom objet)',
      explanation: 'Pronom objet : me (moi), you (toi), him (lui), her (elle), it, us, them.'
    },
    {
      id: 'pr03', type: 'error-correct', diffLevel: 3, level: 'A1',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'Me like chocolate.',
      answer: 'I like chocolate.',
      hint: 'Sujet = I (pas "me")',
      explanation: '"I" est un pronom SUJET. "Me" est un pronom OBJET. Sujet → I like.'
    },
    {
      id: 'pr04', type: 'fill-blank', diffLevel: 1, level: 'A1',
      instruction: 'Complétez avec le bon adjectif possessif.',
      template: 'Tom and Mary love ___ children.',
      answer: 'their',
      hint: 'À eux = ?',
      explanation: '"Their" = leur(s). Appartient à "they" (eux).'
    },
    {
      id: 'pr05', type: 'translate', diffLevel: 2, level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Ce livre est à moi.',
      answer: 'This book is mine.',
      alternatives: ['This is my book.'],
      hint: 'Pronom possessif "à moi" = mine',
      explanation: '"Mine" = le mien / à moi. Pronom possessif (pas d\'article ni de nom après).'
    },
    {
      id: 'pr06', type: 'word-order', diffLevel: 1, level: 'A1',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['We', 'see', 'them', 'every', 'day', '.'],
      answer: 'We see them every day.',
      hint: 'Sujet + verbe + objet + temps',
      explanation: '"Them" est pronom objet (les). "We see them" = on les voit.'
    },
    {
      id: 'pr07', type: 'error-correct', diffLevel: 3, level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'This is her\'s book.',
      answer: 'This is her book.',
      alternatives: ['This book is hers.'],
      hint: '"Her" est déjà possessif',
      explanation: '"Her" (son/sa) est déjà possessif. Pas d\'apostrophe-s. Le pronom seul est "hers".'
    },
    {
      id: 'pr08', type: 'listening', diffLevel: 2, level: 'A1',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'She gives him a new pen.',
      answer: 'She gives him a new pen.',
      hint: 'Deux pronoms : she et him.',
      explanation: '"She" (sujet), "him" (objet, à lui). "Give someone something" = donner qqch à qqn.'
    },
  ],

  // ─── FUTURE SIMPLE ───────────────────────────────────────────────────────────
  futureSimple: [
    {
      id: 'fut01', type: 'fill-blank', diffLevel: 2, level: 'A2',
      instruction: 'Complétez avec "will" + verbe.',
      template: 'Tomorrow, I ___ my grandmother.',
      verb: 'visit', answer: 'will visit',
      hint: 'Futur simple : will + verbe infinitif',
      explanation: 'Future Simple : will + verbe (infinitif). Même forme pour tous les sujets.'
    },
    {
      id: 'fut02', type: 'translate', diffLevel: 2, level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Il va pleuvoir demain.',
      answer: 'It will rain tomorrow.',
      alternatives: ['It is going to rain tomorrow.', 'It\'ll rain tomorrow.'],
      hint: '"Aller + infinitif" peut se traduire par "will" ou "be going to"',
      explanation: '"Will rain" et "is going to rain" sont tous les deux corrects pour une prédiction.'
    },
    {
      id: 'fut03', type: 'error-correct', diffLevel: 3, level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'She will goes to the hospital tomorrow.',
      answer: 'She will go to the hospital tomorrow.',
      hint: 'Après "will", toujours l\'infinitif (sans -s)',
      explanation: 'Après "will", le verbe reste à l\'infinitif : will go (jamais will goes).'
    },
    {
      id: 'fut04', type: 'word-order', diffLevel: 2, level: 'A2',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['He', 'will', 'be', 'a', 'doctor', 'one', 'day', '.'],
      answer: 'He will be a doctor one day.',
      hint: 'Sujet + will + be + attribut + temps',
      explanation: '"Will be" = sera. "One day" = un jour. Rêve ou ambition future.'
    },
    {
      id: 'fut05', type: 'translate', diffLevel: 2, level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Je ne serai pas à l\'école demain.',
      answer: 'I will not be at school tomorrow.',
      alternatives: ['I won\'t be at school tomorrow.'],
      hint: 'Négatif : will not (won\'t) + infinitif',
      explanation: '"Will not" = "won\'t". "I won\'t be at school" = je ne serai pas à l\'école.'
    },
    {
      id: 'fut06', type: 'fill-blank', diffLevel: 3, level: 'B1',
      instruction: 'Complétez avec "will" ou "won\'t" + verbe.',
      template: 'If it rains, we ___ at home.',
      verb: 'stay', answer: 'will stay',
      hint: 'Condition → résultat futur : If..., will...',
      explanation: 'Structure conditionnelle : If + Present Simple, + will + verbe. Classique!'
    },
    {
      id: 'fut07', type: 'error-correct', diffLevel: 3, level: 'B1',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'Will she comes to the party?',
      answer: 'Will she come to the party?',
      hint: 'Question avec will : Will + sujet + infinitif?',
      explanation: 'Question au Future Simple : Will + sujet + verbe (infinitif) ? Pas "comes".'
    },
    {
      id: 'fut08', type: 'listening', diffLevel: 2, level: 'A2',
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
  { id: 'as01', type: 'fill-blank', diffLevel: 1, level: 'A1', instruction: 'Complétez.', template: 'I ___ a student.', verb: 'be', answer: 'am', hint: '"I" + be = ?', explanation: 'Le verbe "be" avec "I" = am.' },
  { id: 'as02', type: 'translate', diffLevel: 2, level: 'A1', instruction: 'Traduisez.', french: 'J\'ai un frère.', answer: 'I have a brother.', alternatives: ['I have one brother.'], hint: '"Avoir" = have', explanation: '"Have" = avoir. "A brother" = un frère.' },
  { id: 'as03', type: 'fill-blank', diffLevel: 1, level: 'A1', instruction: 'Complétez.', template: 'She ___ to school every day.', verb: 'go', answer: 'goes', hint: 'She + go = ?', explanation: '"Go" avec she/he/it = goes.' },
  // A2
  { id: 'as04', type: 'error-correct', diffLevel: 3, level: 'A2', instruction: 'Corrigez.', sentence: 'He don\'t speak English.', answer: 'He doesn\'t speak English.', hint: 'He → doesn\'t', explanation: '"He doesn\'t" est correct.' },
  { id: 'as05', type: 'translate', diffLevel: 2, level: 'A2', instruction: 'Traduisez.', french: 'Elle est en train de manger.', answer: 'She is eating.', alternatives: ['She\'s eating.'], hint: 'Present Continuous', explanation: '"Is eating" = être en train de manger.' },
  { id: 'as06', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Complétez.', template: 'I ___ my homework yesterday.', verb: 'finish', answer: 'finished', hint: 'Hier → Past Simple', explanation: '"Finish" au Past Simple = finished (régulier).' },
  // B1
  { id: 'as07', type: 'translate', diffLevel: 3, level: 'B1', instruction: 'Traduisez.', french: 'Il n\'est pas venu à la fête.', answer: 'He didn\'t come to the party.', alternatives: ['He did not come to the party.'], hint: 'Past Simple négatif', explanation: '"Didn\'t come" = négatif de "came".' },
  { id: 'as08', type: 'error-correct', diffLevel: 3, level: 'B1', instruction: 'Corrigez.', sentence: 'If I will have money, I will buy a book.', answer: 'If I have money, I will buy a book.', hint: 'Après "if" : Present Simple (pas will)', explanation: 'Structure : If + Present Simple, + will + verbe.' },
  { id: 'as09', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Complétez.', template: 'She ___ already ___ her work.', verb: 'have/finish', answer: 'has, finished', hint: 'Present Perfect : have/has + past participle', explanation: '"Has finished" = Present Perfect. Elle a déjà fini.' },
  { id: 'as10', type: 'translate', diffLevel: 3, level: 'B1', instruction: 'Traduisez.', french: 'Que fais-tu quand il pleut ?', answer: 'What do you do when it rains?', hint: 'Question + habitude (Present Simple)', explanation: '"What do you do" = que fais-tu? "When it rains" = quand il pleut.' },
];

// ─── ARTICLES ───────────────────────────────────────────────────────────────
exercises.articles = [
  { id: 'art01', type: 'fill-blank', diffLevel: 1, level: 'A1', instruction: 'Complétez avec a, an ou the.', template: 'I have ___ apple in my bag.', answer: 'an', hint: 'Apple commence par une voyelle → an', explanation: '"An" devant un son vocalique : an apple, an elephant, an hour.' },
  { id: 'art02', type: 'fill-blank', diffLevel: 1, level: 'A1', instruction: 'Complétez avec a, an ou the.', template: 'She is ___ teacher at our school.', answer: 'a', hint: 'Teacher commence par une consonne → a', explanation: '"A" devant un son consonantique : a teacher, a book, a car.' },
  { id: 'art03', type: 'fill-blank', diffLevel: 1, level: 'A1', instruction: 'Complétez avec a, an ou the.', template: 'Close ___ door, please!', answer: 'the', hint: 'On sait de quelle porte il s\'agit → the', explanation: '"The" quand on parle d\'une chose spécifique déjà connue des deux interlocuteurs.' },
  { id: 'art04', type: 'error-correct', diffLevel: 3, level: 'A1', instruction: 'Corrigez l\'article.', sentence: 'I drink a milk every morning.', answer: 'I drink milk every morning.', hint: 'Milk est non-dénombrable → pas d\'article', explanation: 'Les noms non-dénombrables (water, rice, milk, money) ne prennent pas d\'article au sens général.' },
  { id: 'art05', type: 'translate', diffLevel: 2, level: 'A1', instruction: 'Traduisez en anglais.', french: 'J\'ai un chien et un chat.', answer: 'I have a dog and a cat.', hint: 'Première mention → a/an', explanation: '"A dog, a cat" : première fois qu\'on en parle. Deuxième mention → "the dog, the cat".' },
  { id: 'art06', type: 'fill-blank', diffLevel: 1, level: 'A1', instruction: 'Complétez.', template: '___ sun is very hot today.', answer: 'The', hint: 'Il n\'y a qu\'un seul soleil → the', explanation: '"The sun, the moon, the sky" : objets uniques → toujours "the".' },
  { id: 'art07', type: 'error-correct', diffLevel: 3, level: 'A1', instruction: 'Corrigez l\'article.', sentence: 'She speaks the English very well.', answer: 'She speaks English very well.', hint: 'Les langues n\'ont pas d\'article', explanation: 'Les langues (English, French, Malagasy) ne prennent jamais d\'article.' },
  { id: 'art08', type: 'word-order', diffLevel: 1, level: 'A1', instruction: 'Remettez dans l\'ordre.', words: ['is', 'He', 'an', 'engineer'], answer: 'He is an engineer.', hint: 'engineer commence par une voyelle → an', explanation: '"An engineer" car "engineer" commence par le son vocalique /ɛ/.' },
];

// ─── PLURALS ────────────────────────────────────────────────────────────────
exercises.plurals = [
  { id: 'pl01', type: 'fill-blank', diffLevel: 1, level: 'A1', instruction: 'Donnez le pluriel.', template: 'One book → two ___', answer: 'books', hint: 'Règle générale : + s', explanation: 'Pluriel régulier : book + s = books.' },
  { id: 'pl02', type: 'fill-blank', diffLevel: 1, level: 'A1', instruction: 'Donnez le pluriel.', template: 'One bus → three ___', answer: 'buses', hint: 'Mots en -s → + es', explanation: 'Mots qui finissent en -s, -x, -ch, -sh : on ajoute -es. bus → buses.' },
  { id: 'pl03', type: 'error-correct', diffLevel: 3, level: 'A1', instruction: 'Corrigez le pluriel.', sentence: 'I have two childs at school.', answer: 'I have two children at school.', hint: 'Pluriel irrégulier de child', explanation: 'child → children (irrégulier). man → men, woman → women, child → children.' },
  { id: 'pl04', type: 'fill-blank', diffLevel: 1, level: 'A1', instruction: 'Donnez le pluriel.', template: 'One city → five ___', answer: 'cities', hint: 'Consonne + y → ies', explanation: 'city : consonne (t) + y → retire le y et ajoute -ies : cities.' },
  { id: 'pl05', type: 'translate', diffLevel: 2, level: 'A1', instruction: 'Traduisez.', french: 'Il y a beaucoup de gens dans la rue.', answer: 'There are many people in the street.', alternatives: ['There are a lot of people in the street.'], hint: 'people = pluriel de person', explanation: '"People" est déjà pluriel. On ne dit jamais "peoples" pour désigner des personnes.' },
  { id: 'pl06', type: 'error-correct', diffLevel: 3, level: 'A1', instruction: 'Corrigez.', sentence: 'My foots are tired after the walk.', answer: 'My feet are tired after the walk.', hint: 'Pluriel irrégulier de foot', explanation: 'foot → feet (irrégulier). tooth → teeth, man → men, woman → women.' },
  { id: 'pl07', type: 'fill-blank', diffLevel: 1, level: 'A1', instruction: 'Pluriel ou singulier ?', template: 'The ___ (sheep) are in the field.', answer: 'sheep', hint: 'Sheep = même forme au singulier et pluriel', explanation: 'Certains mots ont la même forme : sheep → sheep, fish → fish.' },
  { id: 'pl08', type: 'word-order', diffLevel: 1, level: 'A1', instruction: 'Remettez dans l\'ordre.', words: ['women', 'The', 'the', 'market', 'are', 'at'], answer: 'The women are at the market.', hint: 'women = pluriel de woman', explanation: 'woman → women (irrégulier). Sujet pluriel → are.' },
];

// ─── THERE IS / ARE ─────────────────────────────────────────────────────────
exercises.therebeis = [
  { id: 'tbi01', type: 'fill-blank', diffLevel: 1, level: 'A1', instruction: 'Complétez avec there is ou there are.', template: '___ a book on the table.', answer: 'There is', hint: 'a book = singulier → there is', explanation: '"There is" avec un nom singulier. "There are" avec un nom pluriel.' },
  { id: 'tbi02', type: 'fill-blank', diffLevel: 1, level: 'A1', instruction: 'Complétez avec there is ou there are.', template: '___ five students in the classroom.', answer: 'There are', hint: 'five students = pluriel → there are', explanation: '"There are" avec un chiffre supérieur à 1 ou un nom pluriel.' },
  { id: 'tbi03', type: 'translate', diffLevel: 2, level: 'A1', instruction: 'Traduisez.', french: 'Il y a un hôpital près d\'ici.', answer: 'There is a hospital near here.', alternatives: ["There's a hospital near here."], hint: 'hospital = singulier', explanation: '"There is" = il y a (singulier). Contraction : There\'s.' },
  { id: 'tbi04', type: 'error-correct', diffLevel: 3, level: 'A1', instruction: 'Corrigez la phrase.', sentence: 'There are a cat in the garden.', answer: 'There is a cat in the garden.', hint: 'a cat = singulier → there is', explanation: '"A cat" est singulier → "there is", pas "there are".' },
  { id: 'tbi05', type: 'fill-blank', diffLevel: 1, level: 'A1', instruction: 'Négatif : complétez.', template: '___ any milk in the fridge.', answer: "There isn't", hint: 'Forme négative de there is', explanation: '"There isn\'t any..." = il n\'y a pas de... (singulier/non-dénombrable).' },
  { id: 'tbi06', type: 'translate', diffLevel: 2, level: 'A1', instruction: 'Traduisez (question).', french: 'Y a-t-il des questions ?', answer: 'Are there any questions?', hint: 'Inverser there are pour la question', explanation: 'Question : Are there...? / Is there...? On utilise souvent "any" dans les questions.' },
  { id: 'tbi07', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Complétez au passé.', template: '___ many people at the party last night.', answer: 'There were', hint: 'Au passé : was/were', explanation: 'Au passé : "there was" (singulier) / "there were" (pluriel).' },
  { id: 'tbi08', type: 'word-order', diffLevel: 1, level: 'A1', instruction: 'Remettez dans l\'ordre.', words: ['a', 'Is', 'there', 'here', 'near', 'pharmacy', '?'], answer: 'Is there a pharmacy near here?', hint: 'Question avec there is → inversion', explanation: 'Question : Is there + singulier? / Are there + pluriel?' },
];

// ─── PREPOSITIONS ───────────────────────────────────────────────────────────
exercises.prepositions = [
  { id: 'prep01', type: 'fill-blank', diffLevel: 1, level: 'A1', instruction: 'Complétez avec in, on ou at.', template: 'I wake up ___ 6 o\'clock.', answer: 'at', hint: 'Heure précise → at', explanation: '"At" pour les heures précises : at 6 o\'clock, at noon, at midnight.' },
  { id: 'prep02', type: 'fill-blank', diffLevel: 1, level: 'A1', instruction: 'Complétez avec in, on ou at.', template: 'School starts ___ Monday.', answer: 'on', hint: 'Jours de la semaine → on', explanation: '"On" pour les jours : on Monday, on Friday, on my birthday.' },
  { id: 'prep03', type: 'fill-blank', diffLevel: 1, level: 'A1', instruction: 'Complétez avec in, on ou at.', template: 'My birthday is ___ January.', answer: 'in', hint: 'Mois → in', explanation: '"In" pour les mois, les années et les saisons : in January, in 2025, in summer.' },
  { id: 'prep04', type: 'error-correct', diffLevel: 3, level: 'A1', instruction: 'Corrigez la préposition.', sentence: 'I go to school in 7 am.', answer: 'I go to school at 7 am.', hint: 'Heure précise → at', explanation: 'Heure précise : "at 7 am", pas "in 7 am".' },
  { id: 'prep05', type: 'fill-blank', diffLevel: 1, level: 'A1', instruction: 'Complétez.', template: 'The cat is ___ the box.', answer: 'in', hint: 'À l\'intérieur → in', explanation: '"In" pour l\'intérieur. "On" pour la surface. "At" pour un point précis.' },
  { id: 'prep06', type: 'translate', diffLevel: 2, level: 'A2', instruction: 'Traduisez.', french: 'Je suis né en 1999.', answer: 'I was born in 1999.', hint: 'Année → in', explanation: '"In + année" pour situer dans le temps.' },
  { id: 'prep07', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Complétez.', template: 'She lives ___ home and goes ___ school every day.', answer: 'at, to', hint: 'at home (lieu), to school (direction)', explanation: '"At home" = chez soi. "To school" = direction vers l\'école.' },
  { id: 'prep08', type: 'error-correct', diffLevel: 3, level: 'A2', instruction: 'Corrigez.', sentence: 'The party is in the night.', answer: 'The party is at night.', hint: 'Night → at night (exception)', explanation: 'Exception : "at night" (pas "in the night"). Mais : "in the morning/afternoon/evening".' },
];

// ─── QUESTIONS ──────────────────────────────────────────────────────────────
exercises.questions = [
  { id: 'q01', type: 'fill-blank', diffLevel: 1, level: 'A1', instruction: 'Complétez la question.', template: '___ is your name?', answer: 'What', hint: 'Pour demander une chose/un nom', explanation: '"What" = quoi / quel. "What is your name?" = Quel est ton prénom?' },
  { id: 'q02', type: 'fill-blank', diffLevel: 1, level: 'A1', instruction: 'Complétez la question.', template: '___ do you live?', answer: 'Where', hint: 'Pour demander un lieu', explanation: '"Where" = où. "Where do you live?" = Où habites-tu?' },
  { id: 'q03', type: 'fill-blank', diffLevel: 1, level: 'A1', instruction: 'Complétez la question.', template: '___ old are you?', answer: 'How', hint: '"How" se combine avec des adjectifs', explanation: '"How old" = quel âge. "How many" = combien (dénombrable). "How much" = combien (non-dénombrable).' },
  { id: 'q04', type: 'translate', diffLevel: 2, level: 'A1', instruction: 'Traduisez la question.', french: 'Quand est-ce que tu vas à l\'école ?', answer: 'When do you go to school?', hint: 'When = quand + auxiliaire do', explanation: 'Structure : When + do/does + sujet + verbe infinitif ?' },
  { id: 'q05', type: 'error-correct', diffLevel: 3, level: 'A2', instruction: 'Corrigez la question.', sentence: 'What she does for work?', answer: 'What does she do for work?', hint: 'Does se place avant le sujet', explanation: 'Question avec "does" (he/she/it) : Does + sujet + infinitif? Le verbe retourne à l\'infinitif.' },
  { id: 'q06', type: 'word-order', diffLevel: 2, level: 'A2', instruction: 'Formez une question.', words: ['Why', 'you', 'did', 'school', 'miss', '?'], answer: 'Why did you miss school?', hint: 'Why + did + sujet + infinitif', explanation: 'Au passé : Did + sujet + verbe infinitif. "Why did you miss..." (pas "missed").' },
  { id: 'q07', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Complétez avec how many ou how much.', template: '___ brothers do you have?', answer: 'How many', hint: 'brothers = dénombrable', explanation: '"How many" pour les noms dénombrables. "How much" pour les non-dénombrables (water, money).' },
  { id: 'q08', type: 'translate', diffLevel: 2, level: 'A2', instruction: 'Traduisez.', french: 'Pourquoi est-ce qu\'il n\'est pas venu ?', answer: "Why didn't he come?", alternatives: ['Why did he not come?'], hint: 'Why + didn\'t + sujet + infinitif', explanation: '"Why didn\'t he come?" = Why + didn\'t (passé négatif) + sujet + infinitif.' },
];

// ─── MODALS ─────────────────────────────────────────────────────────────────
exercises.modals = [
  { id: 'mod01', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Complétez avec can ou can\'t.', template: 'She ___ swim very well — she is a champion!', answer: 'can', hint: 'Capacité positive', explanation: '"Can" exprime la capacité. Pas de -s à la 3e personne : "She can" (pas "she cans").' },
  { id: 'mod02', type: 'translate', diffLevel: 2, level: 'A2', instruction: 'Traduisez.', french: 'Tu dois étudier ce soir.', answer: 'You must study tonight.', alternatives: ['You have to study tonight.'], hint: 'Obligation forte → must ou have to', explanation: '"Must" = obligation personnelle. "Have to" = obligation externe. Les deux sont acceptés.' },
  { id: 'mod03', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Conseil : complétez.', template: 'You ___ drink more water every day.', answer: 'should', hint: 'Conseil (moins fort que must)', explanation: '"Should" donne un conseil. "You should eat vegetables."' },
  { id: 'mod04', type: 'error-correct', diffLevel: 3, level: 'A2', instruction: 'Corrigez la phrase.', sentence: 'She can to drive a car.', answer: 'She can drive a car.', hint: 'Après un modal : infinitif sans to', explanation: 'Après les modaux (can, must, should, might, would) : jamais de "to".' },
  { id: 'mod05', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Complétez avec could ou can.', template: 'When I was 5, I ___ read already.', answer: 'could', hint: 'Capacité dans le passé → could', explanation: '"Could" est le passé de "can". "I could swim at age 3."' },
  { id: 'mod06', type: 'translate', diffLevel: 3, level: 'B1', instruction: 'Traduisez.', french: 'Vous devriez prendre un parapluie — il pourrait pleuvoir.', answer: 'You should take an umbrella — it might rain.', alternatives: ['You should take an umbrella, it might rain.'], hint: 'Conseil + possibilité', explanation: '"Should" = conseil. "Might" = possibilité incertaine.' },
  { id: 'mod07', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Complétez.', template: '___ you like some tea?', answer: 'Would', hint: 'Offre polie → would', explanation: '"Would you like...?" = offre polie. "Would" = conditionnel/politesse.' },
  { id: 'mod08', type: 'error-correct', diffLevel: 3, level: 'B1', instruction: 'Corrigez.', sentence: 'He musts leave now.', answer: 'He must leave now.', hint: 'Must ne prend jamais de -s', explanation: 'Les modaux sont invariables : must, can, should, might → jamais de -s à la 3e personne.' },
];

// ─── PAST CONTINUOUS ────────────────────────────────────────────────────────
exercises.pastContinuous = [
  { id: 'pastc01', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Complétez au Past Continuous.', template: 'At 8pm, I ___ (read) a book.', answer: 'was reading', hint: 'was/were + -ing', explanation: '"Was reading" = j\'étais en train de lire. "I" → was.' },
  { id: 'pastc02', type: 'translate', diffLevel: 3, level: 'B1', instruction: 'Traduisez.', french: 'Ils jouaient au foot quand il a plu.', answer: 'They were playing football when it rained.', hint: 'Action longue (continuous) + action courte (simple)', explanation: 'Past Continuous pour l\'action en cours + Past Simple pour l\'interruption.' },
  { id: 'pastc03', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Complétez.', template: 'While she ___ (cook), her phone rang.', answer: 'was cooking', hint: 'While + Past Continuous', explanation: '"While" introduit souvent une action en cours au passé (Past Continuous).' },
  { id: 'pastc04', type: 'error-correct', diffLevel: 3, level: 'B1', instruction: 'Corrigez.', sentence: 'They was studying when I arrived.', answer: 'They were studying when I arrived.', hint: 'they → were (pas was)', explanation: '"Was" = I/he/she/it. "Were" = you/we/they.' },
  { id: 'pastc05', type: 'word-order', diffLevel: 3, level: 'B1', instruction: 'Remettez dans l\'ordre.', words: ['was', 'I', 'the', 'when', 'sleeping', 'rang', 'phone'], answer: 'I was sleeping when the phone rang.', hint: 'Past Continuous + when + Past Simple', explanation: 'Structure : sujet + was/were + V-ing + when + Past Simple.' },
  { id: 'pastc06', type: 'translate', diffLevel: 3, level: 'B1', instruction: 'Traduisez.', french: 'Qu\'est-ce que tu faisais hier soir à 20h ?', answer: 'What were you doing last night at 8pm?', hint: 'Question au Past Continuous', explanation: 'Question : What + were + you + doing?' },
  { id: 'pastc07', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Complétez les deux verbes.', template: 'While she ___ (study), he ___ (sleep).', answer: 'was studying, was sleeping', hint: 'Deux actions parallèles → deux Past Continuous', explanation: 'Deux actions simultanées dans le passé → les deux au Past Continuous.' },
  { id: 'pastc08', type: 'error-correct', diffLevel: 3, level: 'B1', instruction: 'Corrigez.', sentence: 'She was knowing the answer.', answer: 'She knew the answer.', hint: 'Know = verbe d\'état → pas de continuous', explanation: 'Verbes d\'état (know, like, love, believe, understand) → jamais au continuous.' },
];

// ─── PRESENT PERFECT ────────────────────────────────────────────────────────
exercises.presentPerfect = [
  { id: 'pp01', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Complétez au Present Perfect.', template: 'I ___ (visit) Paris twice.', answer: 'have visited', hint: 'have/has + participe passé', explanation: '"Have visited" = j\'ai visité (dans ma vie). Present Perfect pour les expériences.' },
  { id: 'pp02', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Complétez.', template: 'She ___ (not/eat) yet.', answer: "hasn't eaten", hint: 'hasn\'t + pp pour he/she/it', explanation: '"Hasn\'t eaten" = elle n\'a pas encore mangé.' },
  { id: 'pp03', type: 'translate', diffLevel: 3, level: 'B1', instruction: 'Traduisez.', french: 'As-tu déjà mangé du riz rouge ?', answer: 'Have you ever eaten red rice?', alternatives: ['Have you ever tried red rice?'], hint: 'ever = déjà (dans ta vie)', explanation: '"Have you ever...?" pour une expérience de vie.' },
  { id: 'pp04', type: 'error-correct', diffLevel: 3, level: 'B1', instruction: 'Corrigez.', sentence: 'I have went to school yesterday.', answer: 'I went to school yesterday.', hint: 'yesterday → Past Simple (pas Present Perfect)', explanation: '"Yesterday" = moment précis → Past Simple. Le Present Perfect ne s\'utilise jamais avec "yesterday".' },
  { id: 'pp05', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Since ou for ?', template: 'I have lived here ___ 2018.', answer: 'since', hint: '2018 = point de départ', explanation: '"Since" + point dans le temps. "For" + durée.' },
  { id: 'pp06', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Since ou for ?', template: 'She has worked here ___ five years.', answer: 'for', hint: 'five years = durée', explanation: '"For" + durée : for five years, for two months.' },
  { id: 'pp07', type: 'translate', diffLevel: 3, level: 'B1', instruction: 'Traduisez.', french: 'Il vient de partir.', answer: 'He has just left.', hint: 'just = tout juste → Present Perfect', explanation: '"Has just left" = il vient de partir. "Just" → entre have/has et le participe passé.' },
  { id: 'pp08', type: 'word-order', diffLevel: 3, level: 'B1', instruction: 'Remettez dans l\'ordre.', words: ['has', 'She', 'already', 'her', 'finished', 'homework'], answer: 'She has already finished her homework.', hint: 'already se place entre has et le pp', explanation: '"Already" se place entre have/has et le participe passé.' },
];

// ─── PAST PERFECT ───────────────────────────────────────────────────────────
exercises.pastPerfect = [
  { id: 'patp01', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Complétez au Past Perfect.', template: 'When I arrived, she ___ (already/leave).', answer: 'had already left', hint: 'had + participe passé', explanation: '"Had left" = elle était déjà partie (avant mon arrivée).' },
  { id: 'patp02', type: 'translate', diffLevel: 3, level: 'B1', instruction: 'Traduisez.', french: 'Il a raté le bus parce qu\'il ne s\'était pas levé tôt.', answer: "He missed the bus because he hadn't got up early.", alternatives: ["He missed the bus because he had not gotten up early."], hint: 'hadn\'t + pp pour l\'action antérieure', explanation: '"Hadn\'t got up" = il ne s\'était pas levé (avant de rater le bus).' },
  { id: 'patp03', type: 'error-correct', diffLevel: 3, level: 'B1', instruction: 'Corrigez.', sentence: 'After I ate, I have gone to sleep.', answer: 'After I had eaten, I went to sleep.', hint: 'Action antérieure → Past Perfect; action principale → Past Simple', explanation: '"After I had eaten" (antérieur) + "I went" (résultat).' },
  { id: 'patp04', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Complétez.', template: 'She failed because she ___ (not/study).', answer: "hadn't studied", hint: 'hadn\'t + pp = n\'avait pas', explanation: '"Hadn\'t studied" = elle n\'avait pas étudié (avant l\'examen).' },
  { id: 'patp05', type: 'translate', diffLevel: 3, level: 'B1', instruction: 'Traduisez.', french: 'Je n\'avais jamais vu la mer avant ce voyage.', answer: "I had never seen the sea before that trip.", hint: 'never + had + pp', explanation: '"Had never seen" = je n\'avais jamais vu (avant un moment du passé).' },
  { id: 'patp06', type: 'word-order', diffLevel: 3, level: 'B1', instruction: 'Remettez dans l\'ordre.', words: ['had', 'The', 'already', 'film', 'when', 'arrived', 'we', 'started'], answer: 'The film had already started when we arrived.', hint: 'Past Perfect pour l\'action antérieure', explanation: 'Le film avait commencé (Past Perfect) avant notre arrivée (Past Simple).' },
  { id: 'patp07', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Complétez.', template: 'By the time he called, I ___ (already/eat).', answer: 'had already eaten', hint: 'by the time + Past Perfect', explanation: '"By the time" exprime l\'antériorité. "By the time he called, I had eaten."' },
  { id: 'patp08', type: 'error-correct', diffLevel: 3, level: 'B1', instruction: 'Corrigez.', sentence: 'He was angry because I broke his pen.', answer: 'He was angry because I had broken his pen.', hint: 'L\'action antérieure (casser) → Past Perfect', explanation: 'Casser est AVANT la colère → Past Perfect : "had broken".' },
];

// ─── TIME MARKERS ───────────────────────────────────────────────────────────
exercises.timeMarkers = [
  { id: 'tm01', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Already, yet ou just ?', template: 'I have ___ finished — I\'m free now!', answer: 'just', hint: 'Tout juste terminé', explanation: '"Just" = tout juste. "I have just finished." → entre have et le participe.' },
  { id: 'tm02', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Already, yet ou just ?', template: 'Have you eaten ___?', answer: 'yet', hint: 'Question sur quelque chose attendu', explanation: '"Yet" en fin de phrase dans les questions et les négatifs.' },
  { id: 'tm03', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Since ou for ?', template: 'He has known her ___ 10 years.', answer: 'for', hint: '10 years = durée', explanation: '"For" + durée. "Since" + point de départ. "For 10 years".' },
  { id: 'tm04', type: 'error-correct', diffLevel: 3, level: 'B1', instruction: 'Corrigez.', sentence: 'I met him since 3 years ago.', answer: 'I met him 3 years ago.', hint: 'ago = il y a → Past Simple', explanation: '"Ago" avec le Past Simple seulement. Jamais "since ... ago".' },
  { id: 'tm05', type: 'translate', diffLevel: 3, level: 'B1', instruction: 'Traduisez.', french: 'Pendant que je dormais, mon frère regardait la télé.', answer: 'While I was sleeping, my brother was watching TV.', hint: 'while + Past Continuous', explanation: '"While" + Past Continuous pour deux actions parallèles dans le passé.' },
  { id: 'tm06', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Complétez.', template: '___ soon as she arrives, we will eat.', answer: 'As', hint: 'Dès que = as soon as', explanation: '"As soon as" = dès que. Suivi du Present Simple pour le futur.' },
  { id: 'tm07', type: 'error-correct', diffLevel: 3, level: 'B1', instruction: 'Corrigez.', sentence: 'I haven\'t seen him since two weeks.', answer: "I haven't seen him for two weeks.", hint: 'two weeks = durée → for', explanation: '"For" + durée (two weeks). "Since" + point précis (Monday, 2020).' },
  { id: 'tm08', type: 'translate', diffLevel: 3, level: 'B1', instruction: 'Traduisez.', french: 'Elle vient juste de sortir.', answer: 'She has just gone out.', alternatives: ["She's just gone out."], hint: 'juste = just → Present Perfect', explanation: '"Has just gone out" = elle vient de sortir.' },
];

// ─── CONDITIONALS ───────────────────────────────────────────────────────────
exercises.conditionals = [
  { id: 'cond01', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: '1er conditionnel : complétez.', template: 'If it ___ (rain), I will stay home.', answer: 'rains', hint: 'If + Present Simple → will', explanation: '1er conditionnel : If + Present Simple, + will + infinitif.' },
  { id: 'cond02', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: '1er conditionnel : complétez.', template: 'If you study hard, you ___ (pass) the exam.', answer: 'will pass', hint: 'Résultat futur → will + infinitif', explanation: '"Will pass" = tu réussiras. Condition dans "if" → Present Simple.' },
  { id: 'cond03', type: 'translate', diffLevel: 3, level: 'B1', instruction: '2e conditionnel : traduisez.', french: 'Si j\'avais de l\'argent, j\'achèterais une maison.', answer: 'If I had money, I would buy a house.', hint: 'If + Past Simple → would', explanation: '2e conditionnel : hypothèse irréelle. If + Past Simple, + would + infinitif.' },
  { id: 'cond04', type: 'error-correct', diffLevel: 3, level: 'B1', instruction: 'Corrigez.', sentence: 'If I will win the lottery, I will travel.', answer: 'If I won the lottery, I would travel.', hint: 'Pas de will après if (2e conditionnel)', explanation: '2e conditionnel : "If I won" (Past Simple), "I would travel". Jamais "will" après "if" ici.' },
  { id: 'cond05', type: 'translate', diffLevel: 3, level: 'B2', instruction: '3e conditionnel : traduisez.', french: 'Si j\'avais étudié, j\'aurais réussi l\'examen.', answer: "If I had studied, I would have passed the exam.", hint: 'If + Past Perfect → would have + pp', explanation: '3e conditionnel : regret. If + Past Perfect, + would have + participe passé.' },
  { id: 'cond06', type: 'fill-blank', diffLevel: 3, level: 'B2', instruction: '3e conditionnel : complétez.', template: 'If she ___ (leave) earlier, she ___ (not/miss) the bus.', answer: "had left, wouldn't have missed", hint: 'had + pp / wouldn\'t have + pp', explanation: '"Had left" + "wouldn\'t have missed".' },
  { id: 'cond07', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Zéro conditionnel : complétez.', template: 'If you ___ (heat) ice, it ___ (melt).', answer: 'heat, melts', hint: 'Vérité générale → Present Simple + Present Simple', explanation: 'Zéro conditionnel : If + Present Simple, + Present Simple.' },
  { id: 'cond08', type: 'error-correct', diffLevel: 3, level: 'B2', instruction: 'Corrigez (3e conditionnel).', sentence: 'If I had more money, I would have bought that car.', answer: 'If I had had more money, I would have bought that car.', hint: '3e conditionnel : if + past perfect (had + pp)', explanation: '"Had had" = had (auxiliaire) + had (pp de have). Le Past Perfect de "have" est "had had".' },
];

// ─── PASSIVE VOICE ──────────────────────────────────────────────────────────
exercises.passiveVoice = [
  { id: 'pass01', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Transformez au passif (présent).', template: 'English ___ (speak) in many countries.', answer: 'is spoken', hint: 'is/are + participe passé', explanation: 'Passif présent : is/are + pp. "English is spoken" (sujet singulier → is).' },
  { id: 'pass02', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Transformez au passif (passé).', template: 'The letter ___ (write) in 1900.', answer: 'was written', hint: 'was/were + participe passé', explanation: 'Passif passé : was/were + pp. "The letter was written" (singulier → was).' },
  { id: 'pass03', type: 'translate', diffLevel: 3, level: 'B1', instruction: 'Traduisez au passif.', french: 'Le riz est cultivé à Madagascar.', answer: 'Rice is grown in Madagascar.', hint: 'is + pp de grow = grown', explanation: 'Grow → grown (irrégulier). Rice est non-dénombrable → "Rice is".' },
  { id: 'pass04', type: 'error-correct', diffLevel: 3, level: 'B1', instruction: 'Corrigez.', sentence: 'The windows are clean every day.', answer: 'The windows are cleaned every day.', hint: 'Passif : are + participe passé', explanation: '"Are cleaned" (passif) ≠ "are clean" (adjectif). Le participe passé est nécessaire.' },
  { id: 'pass05', type: 'word-order', diffLevel: 3, level: 'B1', instruction: 'Remettez dans l\'ordre.', words: ['was', 'The', 'school', 'built', 'last', 'year'], answer: 'The school was built last year.', hint: 'was + pp', explanation: '"Was built" = passif passé. "The school" = sujet qui reçoit l\'action.' },
  { id: 'pass06', type: 'translate', diffLevel: 3, level: 'B1', instruction: 'Actif → passif : traduisez.', french: 'On a volé mon sac.', answer: 'My bag was stolen.', hint: 'Auteur inconnu → passif sans by', explanation: 'Quand l\'auteur est inconnu, on omet "by". "My bag was stolen."' },
  { id: 'pass07', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Futur passif : complétez.', template: 'The results ___ (announce) tomorrow.', answer: 'will be announced', hint: 'will be + pp', explanation: 'Passif futur : will be + pp. "Will be announced" = seront annoncés.' },
  { id: 'pass08', type: 'error-correct', diffLevel: 3, level: 'B1', instruction: 'Corrigez.', sentence: 'The book was wrote by a student.', answer: 'The book was written by a student.', hint: 'write → written (pp irrégulier)', explanation: '"Written" = pp de "write". Passif : was + pp (pas prétérit).' },
];

// ─── REPORTED SPEECH ────────────────────────────────────────────────────────
exercises.reportedSpeech = [
  { id: 'rs01', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Discours indirect : complétez.', template: '"I am tired." → She said she ___ tired.', answer: 'was', hint: 'am/is → was en discours indirect', explanation: 'En discours indirect, les temps reculent. am/is/are → was/were.' },
  { id: 'rs02', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Transformez au discours indirect.', template: '"I work here." → He said he ___ there.', answer: 'worked', hint: 'works → worked en discours indirect', explanation: 'Present Simple → Past Simple. "He said he worked there."' },
  { id: 'rs03', type: 'translate', diffLevel: 3, level: 'B1', instruction: 'Mettez au discours indirect.', french: 'Il a dit : "Je viendrai demain."', answer: 'He said he would come the next day.', alternatives: ['He said that he would come the next day.'], hint: 'will → would; tomorrow → the next day', explanation: '"Will" → "would". "Tomorrow" → "the next day".' },
  { id: 'rs04', type: 'error-correct', diffLevel: 3, level: 'B1', instruction: 'Corrigez.', sentence: 'She said she will help me.', answer: 'She said she would help me.', hint: 'will → would en discours indirect', explanation: '"Will" devient "would" dans un discours indirect au passé.' },
  { id: 'rs05', type: 'translate', diffLevel: 3, level: 'B1', instruction: 'Question indirecte : traduisez.', french: 'Il a demandé si je parlais anglais.', answer: 'He asked if I spoke English.', alternatives: ['He asked whether I spoke English.'], hint: 'Asked if/whether pour les questions oui/non', explanation: '"Asked if" + ordre normal (sujet + verbe). Pas d\'inversion.' },
  { id: 'rs06', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Complétez (ordre indirect).', template: 'She said: "Sit down!" → She told him ___ down.', answer: 'to sit', hint: 'Ordre → tell/ask + to + infinitif', explanation: 'Ordre indirect : tell + objet + to + infinitif. "She told him to sit down."' },
  { id: 'rs07', type: 'error-correct', diffLevel: 3, level: 'B2', instruction: 'Corrigez.', sentence: 'He asked where did she live.', answer: 'He asked where she lived.', hint: 'Question indirecte : ordre normal (sujet + verbe)', explanation: 'Dans une question indirecte, pas d\'inversion : "where she lived" (pas "where did she live").' },
  { id: 'rs08', type: 'translate', diffLevel: 3, level: 'B2', instruction: 'Traduisez.', french: 'Elle m\'a demandé de ne pas être en retard.', answer: 'She asked me not to be late.', hint: 'Demande négative → ask + not + to + infinitif', explanation: '"Ask + objet + not to + infinitif". "She asked me not to be late."' },
];

// ─── FUTURE CONTINUOUS ──────────────────────────────────────────────────────
exercises.futureContinuous = [
  { id: 'fc01', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Complétez au Future Continuous.', template: 'At 8pm tomorrow, I ___ (study).', answer: 'will be studying', hint: 'will be + V-ing', explanation: '"Will be studying" = je serai en train d\'étudier demain à 20h.' },
  { id: 'fc02', type: 'translate', diffLevel: 3, level: 'B1', instruction: 'Traduisez.', french: 'Demain à cette heure, elle sera en avion.', answer: 'This time tomorrow, she will be flying.', hint: 'will be + -ing', explanation: '"Will be flying" = elle sera en train de voler.' },
  { id: 'fc03', type: 'error-correct', diffLevel: 3, level: 'B1', instruction: 'Corrigez.', sentence: 'At noon, they will study.', answer: 'At noon, they will be studying.', hint: 'Action en cours à un moment précis → Future Continuous', explanation: '"Will be studying" (en cours à midi) est plus précis que "will study".' },
  { id: 'fc04', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Complétez la question.', template: '___ you ___ (use) the computer tonight?', answer: 'Will, be using', hint: 'Question : will + sujet + be + V-ing', explanation: '"Will you be using...?" = demande polie. Structure : Will + sujet + be + V-ing?' },
  { id: 'fc05', type: 'translate', diffLevel: 3, level: 'B1', instruction: 'Traduisez.', french: 'Je ne travaillerai pas samedi.', answer: "I won't be working on Saturday.", alternatives: ["I will not be working on Saturday."], hint: 'Négatif : won\'t be + -ing', explanation: '"Won\'t be working" = je ne serai pas en train de travailler.' },
  { id: 'fc06', type: 'word-order', diffLevel: 3, level: 'B1', instruction: 'Remettez dans l\'ordre.', words: ['be', 'She', 'will', 'waiting', 'the', 'at', 'airport'], answer: 'She will be waiting at the airport.', hint: 'will be + -ing', explanation: '"Will be waiting" = elle sera en train d\'attendre.' },
  { id: 'fc07', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Complétez.', template: 'When you arrive, we ___ (already/eat).', answer: 'will already be eating', hint: 'Action en cours à l\'arrivée', explanation: '"Will be eating" = nous serons en train de manger quand tu arrives.' },
  { id: 'fc08', type: 'error-correct', diffLevel: 3, level: 'B1', instruction: 'Corrigez.', sentence: 'At 9pm, I am studying.', answer: 'At 9pm, I will be studying.', hint: 'Futur prévu → Future Continuous', explanation: 'Pour une action en cours dans le futur → will be + -ing.' },
];

// ─── FUTURE PERFECT ─────────────────────────────────────────────────────────
exercises.futurePerfect = [
  { id: 'fp01', type: 'fill-blank', diffLevel: 3, level: 'B2', instruction: 'Complétez au Future Perfect.', template: 'By 2030, I ___ (graduate).', answer: 'will have graduated', hint: 'will have + participe passé', explanation: '"Will have graduated" = j\'aurai obtenu mon diplôme. Future Perfect pour une action terminée avant un moment futur.' },
  { id: 'fp02', type: 'translate', diffLevel: 3, level: 'B2', instruction: 'Traduisez.', french: 'Quand tu arriveras, nous aurons mangé.', answer: 'By the time you arrive, we will have eaten.', hint: 'By the time + Present Simple → Future Perfect', explanation: '"By the time" + Present Simple + Future Perfect dans la principale.' },
  { id: 'fp03', type: 'error-correct', diffLevel: 3, level: 'B2', instruction: 'Corrigez.', sentence: 'By next year, she will finish her studies.', answer: 'By next year, she will have finished her studies.', hint: 'by next year → action terminée → Future Perfect', explanation: '"By next year" implique une action terminée avant ce moment → will have + pp.' },
  { id: 'fp04', type: 'fill-blank', diffLevel: 3, level: 'B2', instruction: 'Négatif : complétez.', template: 'I ___ (not/save) enough money by then.', answer: "won't have saved", hint: 'won\'t have + pp', explanation: '"Won\'t have saved" = je n\'aurai pas économisé.' },
  { id: 'fp05', type: 'translate', diffLevel: 3, level: 'B2', instruction: 'Traduisez.', french: 'Est-ce qu\'il aura fini avant vendredi ?', answer: 'Will he have finished by Friday?', hint: 'Question : Will + sujet + have + pp', explanation: 'Question Future Perfect : Will + sujet + have + pp?' },
  { id: 'fp06', type: 'word-order', diffLevel: 3, level: 'B2', instruction: 'Remettez dans l\'ordre.', words: ['have', 'We', 'will', 'by', 'the', 'time', 'left', 'arrives', 'he'], answer: 'We will have left by the time he arrives.', hint: 'will have + pp + by the time', explanation: '"Will have left" = nous serons partis quand il arrivera.' },
  { id: 'fp07', type: 'fill-blank', diffLevel: 3, level: 'B2', instruction: 'Complétez.', template: 'By the time she is 30, she ___ (travel) to 10 countries.', answer: 'will have travelled', hint: 'Accomplissement avant un âge futur', explanation: '"Will have travelled" = elle aura voyagé.' },
  { id: 'fp08', type: 'error-correct', diffLevel: 3, level: 'B2', instruction: 'Corrigez.', sentence: 'By 8pm, I will finished my homework.', answer: 'By 8pm, I will have finished my homework.', hint: 'Future Perfect : will HAVE + pp', explanation: '"Will have finished" (pas "will finished"). Le "have" est obligatoire.' },
];

// ─── COMPARATIVES & SUPERLATIVES ────────────────────────────────────────────
exercises.comparatives = [
  { id: 'cmp01', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Complétez avec le comparatif correct.', template: 'This film is ___ (interesting) than the last one.', answer: 'more interesting', hint: 'Adjectif long → more + adjectif', explanation: 'Adjectifs longs (2+ syllabes) : "more + adjectif". "More interesting" = plus intéressant.' },
  { id: 'cmp02', type: 'translate', diffLevel: 2, level: 'A2', instruction: 'Traduisez en anglais.', french: 'Elle est plus grande que son frère.', answer: 'She is taller than her brother.', alternatives: ["She's taller than her brother."], hint: 'tall → taller (adjectif court : + -er)', explanation: 'Adjectifs courts (1 syllabe) : + "-er". "Tall" → "taller than".' },
  { id: 'cmp03', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Complétez avec le superlatif.', template: 'He is ___ (fast) runner in the school.', answer: 'the fastest', hint: 'Adjectif court : the + adj + -est', explanation: 'Superlatif court : "the + adj + -est". "Fast" → "the fastest". Doublement de la consonne finale.' },
  { id: 'cmp04', type: 'error-correct', diffLevel: 3, level: 'A2', instruction: "Trouvez et corrigez l'erreur.", sentence: 'This box is more heavy than that one.', answer: 'This box is heavier than that one.', hint: '"Heavy" = adjectif en -y → -ier', explanation: '"Heavy" → "heavier" (terminaison en -y : y → i + er). Pas "more heavy".' },
  { id: 'cmp05', type: 'word-order', diffLevel: 2, level: 'A2', instruction: 'Mettez les mots dans le bon ordre.', words: ['English', 'is', 'the', 'most', 'beautiful', 'language', '.'], answer: 'English is the most beautiful language.', hint: 'the most + adjectif long', explanation: 'Superlatif long : "the most + adjectif". "The most beautiful language".' },
  { id: 'cmp06', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Complétez (égalité : as … as).', template: 'My car is ___ fast ___ yours.', answer: 'as, as', hint: 'Égalité : as + adjectif + as', explanation: '"As … as" exprime l\'égalité : "My car is as fast as yours" = ma voiture est aussi rapide que la tienne.' },
  { id: 'cmp07', type: 'translate', diffLevel: 3, level: 'B1', instruction: 'Traduisez en anglais.', french: "Plus tu travailles, meilleurs sont tes résultats.", answer: 'The harder you work, the better your results are.', alternatives: ['The more you work, the better your results are.'], hint: 'The + comparatif ..., the + comparatif ...', explanation: 'Structure "the more … the more" / "the harder … the better" = plus… plus…' },
  { id: 'cmp08', type: 'listening', diffLevel: 3, level: 'B1', instruction: 'Écoutez et écrivez ce que vous entendez.', audio: 'London is bigger than Paris but Tokyo is the biggest city.', answer: 'London is bigger than Paris but Tokyo is the biggest city.', hint: 'Comparatif "bigger" + superlatif "the biggest"', explanation: '"Bigger" (comparatif de "big") et "the biggest" (superlatif). Doublement de "g" pour les adjectifs CVC.' },
];

exercises.interrogative = [
  { id: 'intr01', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Complétez avec Do ou Does.', template: '___ she speak French?', answer: 'Does', hint: 'she = he/she/it → Does', explanation: 'Avec he/she/it au Present Simple, on utilise "Does". "Does she speak French?"' },
  { id: 'intr02', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Complétez avec Do ou Does.', template: '___ they go to school every day?', answer: 'Do', hint: 'they = pluriel → Do', explanation: 'Avec I/you/we/they au Present Simple, on utilise "Do". "Do they go to school?"' },
  { id: 'intr03', type: 'word-order', diffLevel: 2, level: 'A2', instruction: 'Mettez les mots dans le bon ordre.', words: ['did', 'she', 'eat', 'what', '?'], answer: 'What did she eat?', hint: 'Wh- + did + sujet + verbe', explanation: 'Question Wh- au passé : "What did she eat?" Le verbe reste à l\'infinitif après "did".' },
  { id: 'intr04', type: 'translate', diffLevel: 2, level: 'A2', instruction: 'Traduisez en anglais.', french: 'Est-ce qu\'il a un frère ?', answer: 'Does he have a brother?', alternatives: ['Does he have a brother ?'], hint: 'he → Does; have reste à l\'infinitif', explanation: 'Avec "he" on utilise "Does" et le verbe reste à l\'infinitif : "Does he have…?" (pas "Does he has?")'  },
  { id: 'intr05', type: 'error-correct', diffLevel: 3, level: 'A2', instruction: "Corrigez l'erreur.", sentence: 'Does she speaks English?', answer: 'Does she speak English?', hint: 'Après Does, le verbe est à l\'infinitif (sans -s)', explanation: 'Après l\'auxiliaire "Does", le verbe perd le -s : "Does she speak?" (pas "speaks").' },
  { id: 'intr06', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Complétez avec Is, Are, Was ou Were.', template: '___ your parents at home yesterday?', answer: 'Were', hint: 'parents = pluriel, passé → Were', explanation: '"Were" = be au passé pluriel. "Were your parents at home?" = Vos parents étaient-ils à la maison ?' },
  { id: 'intr07', type: 'word-order', diffLevel: 2, level: 'A2', instruction: 'Mettez les mots dans le bon ordre.', words: ['you', 'do', 'where', 'live', '?'], answer: 'Where do you live?', hint: 'Wh- + Do + sujet + verbe infinitif', explanation: '"Where do you live?" — question Wh- avec "do" pour I/you/we/they.' },
  { id: 'intr08', type: 'translate', diffLevel: 2, level: 'A2', instruction: 'Traduisez en anglais.', french: 'Pourquoi sont-ils partis tôt ?', answer: 'Why did they leave early?', alternatives: ['Why did they leave early ?'], hint: 'Why + did + they + verbe infinitif', explanation: 'Questions Wh- au Past Simple : "Why did they leave early?" Le verbe reste à l\'infinitif.' },
  { id: 'intr09', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Complétez la question.', template: 'How many books ___ you have?', answer: 'do', hint: 'you → do (Present Simple)', explanation: '"How many" + nom pluriel + "do" + sujet + verbe. "How many books do you have?"' },
  { id: 'intr10', type: 'error-correct', diffLevel: 3, level: 'A2', instruction: "Corrigez l'erreur.", sentence: 'What you did yesterday?', answer: 'What did you do yesterday?', hint: 'Question Wh- : What + did + sujet + verbe infinitif', explanation: 'Il faut l\'auxiliaire "did" en question : "What did you do?" Le verbe "do" reste à l\'infinitif.' },
];

exercises.imperatives = [
  { id: 'imp01', type: 'translate', diffLevel: 2, level: 'A2', instruction: 'Traduisez en anglais.', french: 'Ouvre le livre.', answer: 'Open the book.', hint: 'Impératif = verbe seul', explanation: 'L\'impératif anglais = verbe à l\'infinitif sans sujet. "Open the book."' },
  { id: 'imp02', type: 'translate', diffLevel: 2, level: 'A2', instruction: 'Traduisez en anglais.', french: 'Ne parle pas en classe.', answer: "Don't speak in class.", alternatives: ["Do not speak in class."], hint: 'Négatif : Don\'t + verbe', explanation: 'Impératif négatif = "Don\'t" + verbe infinitif. "Don\'t speak in class."' },
  { id: 'imp03', type: 'word-order', diffLevel: 2, level: 'A2', instruction: 'Mettez les mots dans le bon ordre.', words: ["don't", 'be', 'late', '!'], answer: "Don't be late!", hint: 'Don\'t + be + adjectif', explanation: '"Don\'t be late!" — impératif négatif avec "be". On utilise "Don\'t be", jamais "Don\'t are".' },
  { id: 'imp04', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Complétez avec Let\'s ou Don\'t.', template: "___ forget your homework!", answer: "Don't", hint: 'Conseil négatif → Don\'t', explanation: '"Don\'t forget your homework!" — ordre négatif. "Let\'s" serait utilisé pour une suggestion ("Let\'s study!").' },
  { id: 'imp05', type: 'translate', diffLevel: 2, level: 'A2', instruction: 'Traduisez en anglais.', french: 'Allons à la plage !', answer: "Let's go to the beach!", alternatives: ["Let's go to the beach!"], hint: 'Let\'s + verbe infinitif', explanation: '"Let\'s go to the beach!" — "Let\'s" = "Let us", utilisé pour suggérer une action à faire ensemble.' },
  { id: 'imp06', type: 'error-correct', diffLevel: 3, level: 'A2', instruction: "Corrigez l'erreur.", sentence: 'Not speak in class!', answer: "Don't speak in class!", hint: 'Négatif impératif → Don\'t + verbe', explanation: 'On ne peut pas dire "Not speak" — l\'impératif négatif en anglais c\'est toujours "Don\'t + verbe".' },
  { id: 'imp07', type: 'word-order', diffLevel: 2, level: 'A2', instruction: 'Mettez les mots dans le bon ordre.', words: ['please', 'door', 'the', 'close', '.'], answer: 'Close the door, please.', hint: 'Impératif + please à la fin (ou au début)', explanation: '"Close the door, please." — "please" peut se mettre au début ou à la fin pour être poli.' },
  { id: 'imp08', type: 'translate', diffLevel: 2, level: 'A2', instruction: 'Traduisez en anglais.', french: 'Écoute attentivement, s\'il te plaît.', answer: 'Listen carefully, please.', alternatives: ['Please listen carefully.'], hint: 'Verbe seul + adverbe + please', explanation: '"Listen carefully, please." — l\'adverbe "carefully" vient après le verbe.' },
  { id: 'imp09', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Complétez l\'impératif.', template: "___ quiet, please. I'm studying.", answer: 'Be', hint: 'Be + adjectif (état)', explanation: '"Be quiet, please." — "be" s\'utilise à l\'impératif devant un adjectif d\'état : "Be careful!", "Be quiet!"' },
  { id: 'imp10', type: 'error-correct', diffLevel: 3, level: 'A2', instruction: "Corrigez l'erreur.", sentence: "Let's to go to the cinema.", answer: "Let's go to the cinema.", hint: 'Let\'s + verbe infinitif (sans "to")', explanation: '"Let\'s" est déjà suivi directement du verbe infinitif, sans "to". "Let\'s go!" et non "Let\'s to go!"' },
];

exercises.someAny = [
  { id: 'sa01', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Complétez avec some ou any.', template: 'I have ___ rice in the kitchen.', answer: 'some', hint: 'Phrase affirmative → some', explanation: '"Some" s\'utilise dans les phrases affirmatives. "I have some rice in the kitchen."' },
  { id: 'sa02', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Complétez avec some ou any.', template: 'Do you have ___ money?', answer: 'any', hint: 'Question → any', explanation: '"Any" s\'utilise dans les questions et les négatives. "Do you have any money?"' },
  { id: 'sa03', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Complétez avec some ou any.', template: "I don't have ___ friends here.", answer: 'any', hint: 'Phrase négative → any', explanation: '"Any" s\'utilise après "don\'t/doesn\'t/didn\'t". "I don\'t have any friends here."' },
  { id: 'sa04', type: 'error-correct', diffLevel: 3, level: 'A2', instruction: "Corrigez l'erreur.", sentence: 'There are some books on the table? Are there some books?', answer: 'Are there any books on the table?', hint: 'Question → any (pas some)', explanation: 'Dans les questions, on utilise normalement "any" : "Are there any books?" (pas "some books?").' },
  { id: 'sa05', type: 'translate', diffLevel: 2, level: 'A2', instruction: 'Traduisez en anglais.', french: 'Il n\'y a pas de lait dans le frigo.', answer: 'There is no milk in the fridge.', alternatives: ["There isn't any milk in the fridge."], hint: 'No + nom = quantité zéro', explanation: '"There is no milk" = quantité zéro. Équivalent : "There isn\'t any milk." Les deux sont corrects.' },
  { id: 'sa06', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Complétez avec something, anything ou nothing.', template: "I'm hungry. I want ___ to eat.", answer: 'something', hint: 'Affirmatif → something', explanation: '"Something" s\'utilise dans les phrases affirmatives. "I want something to eat."' },
  { id: 'sa07', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Complétez avec something, anything ou nothing.', template: "There is ___ in the bag. It's empty.", answer: 'nothing', hint: 'Quantité zéro → nothing', explanation: '"Nothing" = rien. "There is nothing in the bag." (Attention : ne pas dire "There isn\'t nothing" — double négation incorrecte.)' },
  { id: 'sa08', type: 'translate', diffLevel: 2, level: 'A2', instruction: 'Traduisez en anglais.', french: 'Est-ce qu\'il y a quelque chose à faire ?', answer: 'Is there anything to do?', alternatives: ['Is there anything to do ?'], hint: 'Question → anything', explanation: '"Is there anything to do?" — dans une question, on utilise "anything" (pas "something").' },
  { id: 'sa09', type: 'word-order', diffLevel: 2, level: 'A2', instruction: 'Mettez les mots dans le bon ordre.', words: ['she', 'have', "doesn't", 'money', 'any', '.'], answer: "She doesn't have any money.", hint: 'doesn\'t + any', explanation: '"She doesn\'t have any money." — négative avec "any". On pourrait aussi dire "She has no money."' },
  { id: 'sa10', type: 'error-correct', diffLevel: 3, level: 'A2', instruction: "Corrigez l'erreur.", sentence: "I don't have no time.", answer: "I don't have any time.", hint: 'Pas de double négation en anglais', explanation: 'En anglais, on évite la double négation. "I don\'t have no time" est incorrect. On dit "I don\'t have any time" ou "I have no time".' },
];

exercises.toBe = [
  { id: 'tobe01', type: 'fill-blank', diffLevel: 1, level: 'A1', instruction: 'Complétez avec am, is ou are.', template: 'I ___ a student.', answer: 'am', hint: 'I → am', explanation: '"I am" — avec I on utilise toujours "am".' },
  { id: 'tobe02', type: 'fill-blank', diffLevel: 1, level: 'A1', instruction: 'Complétez avec am, is ou are.', template: 'She ___ a teacher.', answer: 'is', hint: 'she = he/she/it → is', explanation: '"She is" — avec he/she/it on utilise "is".' },
  { id: 'tobe03', type: 'fill-blank', diffLevel: 1, level: 'A1', instruction: 'Complétez avec am, is ou are.', template: 'They ___ happy.', answer: 'are', hint: 'they → are', explanation: '"They are" — avec you/we/they on utilise "are".' },
  { id: 'tobe04', type: 'translate', diffLevel: 2, level: 'A1', instruction: 'Traduisez en anglais.', french: 'Elle n\'est pas fatiguée.', answer: "She isn't tired.", alternatives: ['She is not tired.'], hint: 'she is + not → isn\'t', explanation: '"She isn\'t tired." — la contraction de "is not" est "isn\'t".' },
  { id: 'tobe05', type: 'word-order', diffLevel: 1, level: 'A1', instruction: 'Mettez les mots dans le bon ordre.', words: ['are', 'you', 'a', 'student', '?'], answer: 'Are you a student?', hint: 'Question : Are + sujet + …', explanation: '"Are you a student?" — on inverse sujet et are pour former une question.' },
  { id: 'tobe06', type: 'fill-blank', diffLevel: 1, level: 'A1', instruction: 'Complétez avec was ou were.', template: 'He ___ at school yesterday.', answer: 'was', hint: 'he → was (passé)', explanation: '"He was" — au passé, he/she/it → was.' },
  { id: 'tobe07', type: 'error-correct', diffLevel: 3, level: 'A1', instruction: "Corrigez l'erreur.", sentence: 'She are my friend.', answer: 'She is my friend.', hint: 'she → is (pas are)', explanation: '"She is my friend." — she/he/it utilise "is", jamais "are".' },
  { id: 'tobe08', type: 'translate', diffLevel: 2, level: 'A1', instruction: 'Traduisez en anglais.', french: 'J\'ai 15 ans.', answer: 'I am 15 years old.', alternatives: ["I'm 15 years old.", 'I am 15.'], hint: 'Âge en anglais = I am … years old', explanation: 'En anglais, l\'âge se dit avec "to be" : "I am 15 years old." Jamais "I have 15 years".' },
  { id: 'tobe09', type: 'fill-blank', diffLevel: 1, level: 'A1', instruction: 'Complétez la réponse courte.', template: 'Are they students? — Yes, they ___.', answer: 'are', hint: 'Réponse courte : Yes, they + are', explanation: '"Yes, they are." — la réponse courte répète le verbe to be.' },
  { id: 'tobe10', type: 'error-correct', diffLevel: 3, level: 'A1', instruction: "Corrigez l'erreur.", sentence: "They was here.", answer: 'They were here.', hint: 'they → were (passé pluriel)', explanation: '"They were here." — au passé, you/we/they utilisent "were".' },
];

exercises.irregularVerbs = [
  { id: 'irr01', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Donnez le Past Simple.', template: 'go → ___', answer: 'went', hint: 'go est irrégulier — groupe 3', explanation: '"go" → "went" au Past Simple. "I went to school."' },
  { id: 'irr02', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Donnez le Past Simple.', template: 'have → ___', answer: 'had', hint: 'have est irrégulier — groupe 2', explanation: '"have" → "had". "She had breakfast early."' },
  { id: 'irr03', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Donnez le Past Simple.', template: 'see → ___', answer: 'saw', hint: 'see est irrégulier — groupe 3', explanation: '"see" → "saw". "I saw a good film yesterday."' },
  { id: 'irr04', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Donnez le Past Simple.', template: 'buy → ___', answer: 'bought', hint: 'buy est irrégulier — groupe 2', explanation: '"buy" → "bought". "She bought a new dress."' },
  { id: 'irr05', type: 'translate', diffLevel: 2, level: 'A2', instruction: 'Traduisez en anglais.', french: 'Ils ont mangé du riz hier.', answer: 'They ate rice yesterday.', alternatives: ['They ate some rice yesterday.'], hint: 'eat → ate (Past Simple)', explanation: '"eat" → "ate" au Past Simple. "They ate rice yesterday."' },
  { id: 'irr06', type: 'error-correct', diffLevel: 3, level: 'A2', instruction: "Corrigez l'erreur.", sentence: 'She goed to the market.', answer: 'She went to the market.', hint: 'go → went (irrégulier)', explanation: '"go" est irrégulier : "went". Jamais "goed".' },
  { id: 'irr07', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Complétez avec le participe passé.', template: 'I have ___ (write) two letters.', answer: 'written', hint: 'write → wrote → written', explanation: '"write" → "written" au participe passé (Present Perfect).' },
  { id: 'irr08', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Complétez avec le participe passé.', template: 'She has ___ (take) my book.', answer: 'taken', hint: 'take → took → taken', explanation: '"take" → "taken" au participe passé.' },
  { id: 'irr09', type: 'word-order', diffLevel: 2, level: 'A2', instruction: 'Mettez dans le bon ordre.', words: ['she', 'the', 'exam', 'passed', '?', 'Did'], answer: 'Did she pass the exam?', hint: 'Did + sujet + infinitif (pas -ed)', explanation: 'Au Past Simple, "Did" + infinitif. Ne pas dire "Did she passed".' },
  { id: 'irr10', type: 'translate', diffLevel: 2, level: 'A2', instruction: 'Traduisez en anglais.', french: 'Nous avons commencé le cours à 8h.', answer: 'We began the lesson at 8.', alternatives: ['We began the class at 8.', 'We began class at 8.', 'We began the lesson at 8am.'], hint: 'begin → began (Past Simple)', explanation: '"begin" → "began" au Past Simple.' },
];

// ─── Possessives ─────────────────────────────────────────────────────────────
exercises.possessives = [
  { id: 'pos01', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Complétez avec le bon adjectif possessif.', template: '___ name is Miora. (she)', answer: 'Her', hint: 'she → her', explanation: '"Her name is Miora." — adjectif possessif pour she = her.' },
  { id: 'pos02', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Complétez avec le bon adjectif possessif.', template: 'This is ___ book. (I)', answer: 'my', hint: 'I → my', explanation: '"This is my book." — adjectif possessif pour I = my.' },
  { id: 'pos03', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Choisissez : adjectif ou pronom possessif.', template: 'The red bag is ___. (she)', answer: 'hers', hint: 'Ici pas de nom après → pronom', explanation: '"The red bag is hers." — pronom possessif (seul, sans nom après) pour she = hers.' },
  { id: 'pos04', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Complétez avec le bon adjectif possessif.', template: 'We love ___ country.', answer: 'our', hint: 'we → our', explanation: '"We love our country." — adjectif possessif pour we = our.' },
  { id: 'pos05', type: 'error-correct', diffLevel: 3, level: 'A2', instruction: "Corrigez l'erreur.", sentence: 'The book is my.', answer: 'The book is mine.', hint: 'Après "is", on utilise le pronom possessif', explanation: '"The book is mine." — après "to be" seul, on utilise le pronom possessif (mine, not my).' },
  { id: 'pos06', type: 'translate', diffLevel: 2, level: 'A2', instruction: 'Traduisez en anglais.', french: 'Leur maison est grande.', answer: 'Their house is big.', alternatives: ['Their home is big.', 'Their house is large.'], hint: 'their = adjectif possessif pour they', explanation: '"Their house is big." — leur = their.' },
  { id: 'pos07', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Complétez avec le pronom possessif.', template: 'My bag is red. What colour is ___? (you)', answer: 'yours', hint: 'you → yours', explanation: '"What colour is yours?" — pronom possessif pour you = yours.' },
  { id: 'pos08', type: 'error-correct', diffLevel: 3, level: 'A2', instruction: "Corrigez l'erreur.", sentence: "It's tail is very long.", answer: "Its tail is very long.", hint: "its (possessif) pas d'apostrophe", explanation: '"Its tail is very long." — "its" (possessif) n\'a pas d\'apostrophe. "it\'s" = it is.' },
  { id: 'pos09', type: 'word-order', diffLevel: 2, level: 'A2', instruction: 'Mettez dans le bon ordre.', words: ['parents', 'Their', 'are', 'teachers'], answer: 'Their parents are teachers.', hint: 'adjectif possessif + nom', explanation: '"Their parents are teachers." — Their est l\'adjectif possessif pour they.' },
  { id: 'pos10', type: 'translate', diffLevel: 2, level: 'A2', instruction: 'Traduisez en anglais.', french: 'Est-ce que ce stylo est à lui ?', answer: 'Is this pen his?', alternatives: ['Is this his pen?'], hint: 'his = même forme pour adjectif et pronom', explanation: '"Is this pen his?" — his est le pronom possessif pour he.' },
];

// ─── Adverbs ─────────────────────────────────────────────────────────────────
exercises.adverbs = [
  { id: 'adv01', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Choisissez le bon adverbe de fréquence.', template: 'I ___ brush my teeth. (100%)', answer: 'always', hint: '100% = always', explanation: '"I always brush my teeth." — always = 100% du temps.' },
  { id: 'adv02', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Choisissez le bon adverbe de fréquence.', template: 'She ___ goes to school on foot. (0%)', answer: 'never', hint: '0% = never', explanation: '"She never goes to school on foot." — never = 0%.' },
  { id: 'adv03', type: 'error-correct', diffLevel: 3, level: 'A2', instruction: "Corrigez l'erreur.", sentence: 'She sings beautiful.', answer: 'She sings beautifully.', hint: 'adverbe de manière = adjectif + -ly', explanation: '"She sings beautifully." — on ajoute -ly à l\'adjectif pour former l\'adverbe.' },
  { id: 'adv04', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: "Formez l'adverbe.", template: 'quick → ___', answer: 'quickly', hint: 'adjectif + -ly', explanation: '"quick" + -ly = "quickly". She speaks quickly.' },
  { id: 'adv05', type: 'error-correct', diffLevel: 3, level: 'A2', instruction: "Corrigez l'erreur.", sentence: 'He plays the guitar good.', answer: 'He plays the guitar well.', hint: 'good → well (irrégulier)', explanation: '"He plays the guitar well." — good → well est irrégulier.' },
  { id: 'adv06', type: 'translate', diffLevel: 2, level: 'A2', instruction: 'Traduisez en anglais.', french: 'Il est toujours en retard.', answer: 'He is always late.', hint: 'toujours = always, après to be', explanation: '"He is always late." — avec to be, l\'adverbe de fréquence vient après le verbe.' },
  { id: 'adv07', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Placez correctement "often".', template: 'We ___ eat rice for dinner.', answer: 'often', hint: 'often avant le verbe principal', explanation: '"We often eat rice for dinner." — often se place avant le verbe principal.' },
  { id: 'adv08', type: 'word-order', diffLevel: 2, level: 'A2', instruction: 'Mettez dans le bon ordre.', words: ['usually', 'wakes', 'She', 'up', 'at', 'six'], answer: 'She usually wakes up at six.', hint: 'adverbe avant le verbe principal', explanation: '"She usually wakes up at six." — usually avant le verbe.' },
  { id: 'adv09', type: 'translate', diffLevel: 2, level: 'A2', instruction: 'Traduisez en anglais.', french: 'Elle conduit très prudemment.', answer: 'She drives very carefully.', alternatives: ['She drives carefully.'], hint: 'careful + -ly = carefully', explanation: '"She drives very carefully." — careful + -ly = carefully.' },
  { id: 'adv10', type: 'error-correct', diffLevel: 3, level: 'A2', instruction: "Corrigez l'erreur.", sentence: 'I sometimes am late.', answer: 'I am sometimes late.', hint: 'avec to be, adverbe après le verbe', explanation: '"I am sometimes late." — avec to be, l\'adverbe vient APRÈS le verbe.' },
];

// ─── Countable / Uncountable ─────────────────────────────────────────────────
exercises.countableUncountable = [
  { id: 'cu01', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Choisissez : much ou many.', template: 'I don\'t have ___ time today.', answer: 'much', hint: 'time = uncountable', explanation: '"I don\'t have much time." — time est uncountable → much.' },
  { id: 'cu02', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Choisissez : much ou many.', template: 'There are ___ students in the class.', answer: 'many', hint: 'students = countable', explanation: '"There are many students." — students est countable → many.' },
  { id: 'cu03', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Choisissez : a few ou a little.', template: 'She speaks ___ French.', answer: 'a little', hint: 'French (langue) = uncountable', explanation: '"She speaks a little French." — French est uncountable → a little.' },
  { id: 'cu04', type: 'fill-blank', diffLevel: 2, level: 'A2', instruction: 'Choisissez : a few ou a little.', template: 'I have ___ friends here.', answer: 'a few', hint: 'friends = countable', explanation: '"I have a few friends here." — friends est countable → a few.' },
  { id: 'cu05', type: 'error-correct', diffLevel: 3, level: 'A2', instruction: "Corrigez l'erreur.", sentence: 'I have many informations.', answer: 'I have a lot of information.', hint: 'information = uncountable', explanation: '"information" est uncountable : pas de pluriel, pas de "many". → "a lot of information".' },
  { id: 'cu06', type: 'error-correct', diffLevel: 3, level: 'A2', instruction: "Corrigez l'erreur.", sentence: 'Can I have an advice?', answer: 'Can I have some advice?', hint: 'advice = uncountable, pas de "an"', explanation: '"advice" est uncountable : pas de "an". → "some advice".' },
  { id: 'cu07', type: 'translate', diffLevel: 3, level: 'B1', instruction: 'Traduisez en anglais.', french: 'Elle a beaucoup d\'amis à l\'école.', answer: 'She has a lot of friends at school.', alternatives: ['She has many friends at school.'], hint: 'friends = countable, beaucoup = a lot of / many', explanation: '"She has a lot of friends at school." — friends = countable, a lot of ou many.' },
  { id: 'cu08', type: 'translate', diffLevel: 3, level: 'B1', instruction: 'Traduisez en anglais.', french: 'Il boit beaucoup d\'eau chaque jour.', answer: 'He drinks a lot of water every day.', hint: 'water = uncountable, beaucoup = a lot of', explanation: '"He drinks a lot of water every day." — water = uncountable, a lot of.' },
  { id: 'cu09', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Complétez avec a lot of, much ou many.', template: 'Do you have ___ homework tonight?', answer: 'much', hint: 'homework = uncountable', explanation: '"Do you have much homework tonight?" — homework est uncountable → much (en question).' },
  { id: 'cu10', type: 'word-order', diffLevel: 3, level: 'B1', instruction: 'Mettez dans le bon ordre.', words: ['sugar', 'a', 'to', 'Add', 'little', 'the', 'tea'], answer: 'Add a little sugar to the tea.', hint: 'a little + uncountable noun', explanation: '"Add a little sugar to the tea." — sugar est uncountable → a little.' },
];

// ─── Connectors ──────────────────────────────────────────────────────────────
exercises.connectors = [
  { id: 'con01', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Choisissez le bon connecteur (but / so / because).', template: 'I was late ___ the bus broke down.', answer: 'because', hint: 'cause → because', explanation: '"I was late because the bus broke down." — because introduit la cause.' },
  { id: 'con02', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Choisissez le bon connecteur (but / so / because).', template: 'It was raining, ___ we stayed home.', answer: 'so', hint: 'conséquence → so', explanation: '"It was raining, so we stayed home." — so indique la conséquence.' },
  { id: 'con03', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Choisissez le bon connecteur (although / however / therefore).', template: '___ it was expensive, she bought it.', answer: 'Although', hint: 'contraste en début de phrase → although', explanation: '"Although it was expensive, she bought it." — although = bien que (contraste).' },
  { id: 'con04', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Choisissez le bon connecteur.', template: 'I was very tired. ___, I finished my homework.', answer: 'However', hint: 'contraste avec nouvelle phrase → however', explanation: '"However, I finished my homework." — however = cependant (début de nouvelle phrase).' },
  { id: 'con05', type: 'error-correct', diffLevel: 3, level: 'B1', instruction: "Corrigez l'erreur.", sentence: 'Although she was tired, but she worked.', answer: 'Although she was tired, she worked.', hint: 'Pas de "but" après "although"', explanation: '"Although" et "but" ne s\'utilisent pas ensemble. Choisir l\'un ou l\'autre.' },
  { id: 'con06', type: 'translate', diffLevel: 3, level: 'B1', instruction: 'Traduisez en anglais.', french: 'Il a beaucoup étudié. Par conséquent, il a réussi.', answer: 'He studied very hard. Therefore, he passed.', alternatives: ['He studied hard. Therefore, he passed the exam.'], hint: 'par conséquent = therefore', explanation: '"Therefore" indique la conséquence logique (registre soutenu).' },
  { id: 'con07', type: 'translate', diffLevel: 3, level: 'B1', instruction: 'Traduisez en anglais.', french: 'Même s\'il a plu, nous avons profité du voyage.', answer: 'Even though it rained, we enjoyed the trip.', alternatives: ['Although it rained, we enjoyed the trip.'], hint: 'même si = even though / although', explanation: '"Even though" est plus fort qu\'"although" pour exprimer le contraste.' },
  { id: 'con08', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Complétez avec moreover ou furthermore.', template: 'The hotel is clean. ___, it is affordable.', answer: 'Moreover', alternatives: ['Furthermore'], hint: 'addition dans un registre soutenu', explanation: '"Moreover" ou "Furthermore" ajoutent une information supplémentaire (registre soutenu).' },
  { id: 'con09', type: 'word-order', diffLevel: 3, level: 'B1', instruction: 'Mettez dans le bon ordre.', words: ['cold', 'Since', 'outside', 'coats', 'put', 'on', 'our', 'was', 'it', ',', 'we'], answer: 'Since it was cold outside, we put on our coats.', hint: 'since = comme / puisque (cause)', explanation: '"Since it was cold outside, we put on our coats." — since = puisque (cause).' },
  { id: 'con10', type: 'translate', diffLevel: 3, level: 'B1', instruction: 'Traduisez en anglais.', french: 'En plus de l\'anglais, elle parle aussi espagnol.', answer: 'In addition to English, she also speaks Spanish.', hint: 'en plus de = in addition to', explanation: '"In addition to English, she also speaks Spanish." — in addition to = en plus de.' },
];

// ─── Tense Chooser ───────────────────────────────────────────────────────────
exercises.tenseChooser = [
  { id: 'tc01', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Choisissez le temps correct (Past Simple ou Present Perfect).', template: 'I ___ (eat) already.', answer: 'have already eaten', hint: 'already → Present Perfect', explanation: '"I have already eaten." — already est un indicateur du Present Perfect.' },
  { id: 'tc02', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Choisissez le temps correct.', template: 'She ___ (born) in 2005.', answer: 'was born', hint: 'in 2005 = moment précis → Past Simple', explanation: '"She was born in 2005." — in + année passée = Past Simple.' },
  { id: 'tc03', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Choisissez le temps correct.', template: 'He ___ (live) here since 2020.', answer: 'has lived', hint: 'since → Present Perfect', explanation: '"He has lived here since 2020." — since = indicateur du Present Perfect.' },
  { id: 'tc04', type: 'error-correct', diffLevel: 3, level: 'B1', instruction: "Corrigez l'erreur.", sentence: 'I have seen him yesterday.', answer: 'I saw him yesterday.', hint: 'yesterday → Past Simple', explanation: '"I saw him yesterday." — yesterday est un indicateur du Past Simple.' },
  { id: 'tc05', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Complétez avec le bon temps.', template: 'We ___ (go) to the beach last summer.', answer: 'went', hint: 'last summer → Past Simple', explanation: '"We went to the beach last summer." — last summer = Past Simple.' },
  { id: 'tc06', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Complétez avec le bon temps.', template: 'Have you finished your homework ___?', answer: 'yet', hint: 'Present Perfect négatif/question → yet', explanation: '"Have you finished your homework yet?" — yet est un indicateur du Present Perfect en question.' },
  { id: 'tc07', type: 'translate', diffLevel: 3, level: 'B1', instruction: 'Traduisez en anglais.', french: 'Elle vient juste d\'arriver à la maison.', answer: 'She has just arrived home.', hint: 'vient juste de = has just + participe passé', explanation: '"She has just arrived home." — just est un indicateur du Present Perfect.' },
  { id: 'tc08', type: 'translate', diffLevel: 3, level: 'B1', instruction: 'Traduisez en anglais.', french: 'Nous étudions l\'anglais depuis trois ans.', answer: 'We have studied English for three years.', hint: 'depuis + durée = Present Perfect + for', explanation: '"We have studied English for three years." — for + durée = Present Perfect.' },
  { id: 'tc09', type: 'word-order', diffLevel: 3, level: 'B1', instruction: 'Mettez dans le bon ordre.', words: ['will', 'She', 'you', 'call', 'tomorrow', 'morning'], answer: 'She will call you tomorrow morning.', hint: 'tomorrow → futur (will)', explanation: '"She will call you tomorrow morning." — tomorrow = indicateur du futur.' },
  { id: 'tc10', type: 'error-correct', diffLevel: 3, level: 'B1', instruction: "Corrigez l'erreur.", sentence: 'I know him since 5 years.', answer: 'I have known him for 5 years.', hint: 'for + durée → Present Perfect', explanation: '"I have known him for 5 years." — for + durée = Present Perfect.' },
];

// ─── Phrasal Verbs ───────────────────────────────────────────────────────────
exercises.phrasalVerbs = [
  { id: 'pv01', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Complétez avec la bonne particule.', template: 'I get ___ at six every morning.', answer: 'up', hint: 'get up = se lever', explanation: '"I get up at six every morning." — get up = se lever.' },
  { id: 'pv02', type: 'translate', diffLevel: 3, level: 'B1', instruction: 'Traduisez en anglais.', french: "Ne t'avoue pas vaincu, continue d'essayer !", answer: "Don't give up, keep trying!", alternatives: ["Don't give up! Keep trying!"], hint: 'give up = abandonner', explanation: '"Don\'t give up, keep trying!" — give up = abandonner.' },
  { id: 'pv03', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Complétez le phrasal verb.', template: "I'm looking ___ my keys.", answer: 'for', hint: 'look for = chercher', explanation: '"I\'m looking for my keys." — look for = chercher.' },
  { id: 'pv04', type: 'translate', diffLevel: 3, level: 'B1', instruction: 'Traduisez en anglais.', french: 'Éteins la télé avant de te coucher.', answer: 'Turn off the TV before bed.', alternatives: ['Turn the TV off before bed.'], hint: 'turn off = éteindre (séparable)', explanation: '"Turn off the TV before bed." — turn off = éteindre. Séparable : "Turn it off" aussi.' },
  { id: 'pv05', type: 'error-correct', diffLevel: 3, level: 'B1', instruction: "Corrigez l'erreur.", sentence: 'Turn off it.', answer: 'Turn it off.', hint: 'pronom → entre verbe et particule', explanation: '"Turn it off." — avec un pronom, la particule vient APRÈS le pronom.' },
  { id: 'pv06', type: 'translate', diffLevel: 3, level: 'B1', instruction: 'Traduisez en anglais.', french: 'La voiture est tombée en panne sur l\'autoroute.', answer: 'The car broke down on the highway.', alternatives: ['The car broke down on the motorway.'], hint: 'break down = tomber en panne', explanation: '"The car broke down on the highway." — break down = tomber en panne.' },
  { id: 'pv07', type: 'fill-blank', diffLevel: 3, level: 'B1', instruction: 'Complétez avec la bonne particule.', template: 'We ran ___ of milk this morning.', answer: 'out', hint: 'run out of = manquer de', explanation: '"We ran out of milk this morning." — run out of = manquer de / ne plus avoir.' },
  { id: 'pv08', type: 'translate', diffLevel: 3, level: 'B1', instruction: 'Traduisez en anglais.', french: 'Elle s\'occupe de son petit frère.', answer: 'She looks after her little brother.', hint: 'look after = s\'occuper de (inséparable)', explanation: '"She looks after her little brother." — look after est inséparable.' },
  { id: 'pv09', type: 'word-order', diffLevel: 3, level: 'B1', instruction: 'Mettez dans le bon ordre.', words: ['out', 'I', 'need', 'find', 'to', 'the', 'truth'], answer: 'I need to find out the truth.', hint: 'find out = découvrir', explanation: '"I need to find out the truth." — find out = découvrir / apprendre.' },
  { id: 'pv10', type: 'translate', diffLevel: 3, level: 'B1', instruction: 'Traduisez en anglais.', french: "Ne remets pas tes devoirs à demain.", answer: "Don't put off your homework until tomorrow.", alternatives: ["Don't put your homework off until tomorrow."], hint: 'put off = remettre à plus tard (séparable)', explanation: '"Don\'t put off your homework until tomorrow." — put off = remettre à plus tard.' },
];


// ─── NEW LEVEL EXERCISES (diffLevel 1 / 2 / 3) ──────────────────────────────

// ─── ARTICLES ───────────────────────────────────────────────────────────────
exercises.articles.push(
  // Level 1 (+10)
  {id:'art_1_01',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'___ elephant never forgets.',options:['a','an','the','—'],answer:'an',hint:'elephant → voyelle',explanation:'"An" devant les sons vocaliques.'},
  {id:'art_1_02',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'She is ___ doctor.',options:['a','an','the','—'],answer:'a',hint:'doctor → consonne',explanation:'"A" devant les consonnes.'},
  {id:'art_1_03',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'___ moon is beautiful tonight.',options:['a','an','the','—'],answer:'The',hint:'unique → the',explanation:'"The" pour les objets uniques.'},
  {id:'art_1_04',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'I drink ___ water every day.',options:['a','an','the','—'],answer:'—',hint:'water non-dénombrable au général',explanation:'Pas d\'article avec les non-dénombrables au sens général.'},
  {id:'art_1_05',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'He plays ___ guitar.',options:['a','an','the','—'],answer:'the',hint:'instruments → the',explanation:'"Play the guitar/piano" toujours avec "the".'},
  {id:'art_1_06',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'She is ___ honest woman.',options:['a','an','the','—'],answer:'an',hint:'honest : h muet → son /ɒ/',explanation:'"An honest" car le h est muet.'},
  {id:'art_1_07',type:'fill-blank',diffLevel:1,instruction:'Complétez avec a, an ou the.',template:'I saw ___ old man near the market.',answer:'an',hint:'old → son vocalique',explanation:'"An old" — "old" commence par /əʊ/.'},
  {id:'art_1_08',type:'fill-blank',diffLevel:1,instruction:'Complétez avec a, an ou the.',template:'Close ___ door, it is cold.',answer:'the',hint:'porte spécifique → the',explanation:'"The door" = porte spécifique connue des deux.'},
  {id:'art_1_09',type:'fill-blank',diffLevel:1,instruction:'Complétez avec a, an ou the.',template:'___ Nile is the longest river in Africa.',answer:'The',hint:'fleuves → the',explanation:'"The Nile" — on met "the" devant les noms de fleuves.'},
  {id:'art_1_10',type:'fill-blank',diffLevel:1,instruction:'Complétez avec a, an ou the.',template:'She reads ___ book every night.',answer:'a',hint:'première mention → a',explanation:'"A book" = première mention générale.'},
  {id:'art_1_11',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['an','is','He','engineer'],answer:'He is an engineer.',hint:'an + engineer (voyelle)',explanation:'"An engineer" — voyelle /ɛ/.'},
  {id:'art_1_12',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['a','She','bought','new','dress'],answer:'She bought a new dress.',hint:'a + dress',explanation:'"A new dress" — première mention.'},
  {id:'art_1_13',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['the','in','school','is','library','The'],answer:'The library is in the school.',hint:'library et school = spécifiques',explanation:'"The library" et "the school" = institutions spécifiques.'},
  {id:'art_1_14',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['at','They','the','play','beach'],answer:'They play at the beach.',hint:'the beach = lieu spécifique',explanation:'"The beach" = lieu identifié.'},
  // Level 2 (+14)
  {id:'art_2_01',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"C'est une idée intéressante.",answer:'It is an interesting idea.',alternatives:["It's an interesting idea."],hint:'interesting → voyelle → an',explanation:'"An interesting idea".'},
  {id:'art_2_02',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Le soleil se lève à six heures.',answer:'The sun rises at six.',alternatives:['The sun rises at 6 am.'],hint:'Le soleil → The sun',explanation:'"The sun" — objet unique.'},
  {id:'art_2_03',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"J'achète du riz au marché.",answer:'I buy rice at the market.',hint:'du riz → rice (sans article)',explanation:'"Rice" au sens général = sans article.'},
  {id:'art_2_04',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Il joue du piano chaque soir.',answer:'He plays the piano every evening.',hint:'instruments → the',explanation:'"Play the piano".'},
  {id:'art_2_05',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"Elle est infirmière à l'hôpital.",answer:'She is a nurse at the hospital.',hint:'nurse → a ; hospital → the',explanation:'"A nurse" (métier, consonne). "The hospital" (institution).'},
  {id:'art_2_06',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'She has a cat and an umbrella.',answer:'She has a cat and an umbrella.',hint:'cat → a ; umbrella → an',explanation:'"A cat" et "an umbrella".'},
  {id:'art_2_07',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'The children are playing in the garden.',answer:'The children are playing in the garden.',hint:'the children, the garden',explanation:'Références spécifiques.'},
  {id:'art_2_08',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'I need a pen and an eraser.',answer:'I need a pen and an eraser.',hint:'pen → a ; eraser → an',explanation:'"A pen" et "an eraser".'},
  {id:'art_2_09',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'He is the best student in the class.',answer:'He is the best student in the class.',hint:'superlatif → the',explanation:'"The best" = superlatif.'},
  {id:'art_2_10',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'I live near an old church.',answer:'I live near an old church.',hint:'old → son vocalique → an',explanation:'"An old church".'},
  {id:'art_2_11',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['the','is','She','in','kitchen'],answer:'She is in the kitchen.',hint:'the kitchen',explanation:'"The kitchen" = pièce spécifique.'},
  {id:'art_2_12',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['a','is','There','market','near','here'],answer:'There is a market near here.',hint:'a market = première mention',explanation:'"A market" = non spécifié.'},
  {id:'art_2_13',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['the','best','is','He','student','class','in','the'],answer:'He is the best student in the class.',hint:'superlatif → the',explanation:'"The best student".'},
  {id:'art_2_14',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['an','went','She','to','interview'],answer:'She went to an interview.',hint:'interview → an',explanation:'"An interview" — voyelle /ɪ/.'},
  {id:'art_2_15',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['the','to','go','They','school','every','day'],answer:'They go to school every day.',hint:'school = institution',explanation:'"Go to school" sans article = expression idiomatique.'},
  // Level 3 (+13)
  {id:'art_3_01',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'an',example:'I have an orange in my bag.',hint:'"an" devant son vocalique',explanation:'"An" + voyelle : an apple, an egg, an hour.'},
  {id:'art_3_02',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'the',example:'The sun is very hot today.',hint:'"the" pour quelque chose de spécifique',explanation:'"The" = article défini.'},
  {id:'art_3_03',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'a',example:'I saw a dog in the street.',hint:'"a" devant consonne',explanation:'"A" = article indéfini, consonne.'},
  {id:'art_3_04',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'the best',example:'She is the best teacher in the school.',hint:'superlatif → the',explanation:'"The best/most/tallest" — superlatifs.'},
  {id:'art_3_05',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'He is a honest man.',answer:'He is an honest man.',hint:'Honest : h muet',explanation:'"An honest" — le h est muet.'},
  {id:'art_3_06',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'She plays a piano very well.',answer:'She plays the piano very well.',hint:'instruments → the',explanation:'"Play the piano".'},
  {id:'art_3_07',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'I drink the milk every morning.',answer:'I drink milk every morning.',hint:'milk au sens général',explanation:'Non-dénombrable au sens général = sans article.'},
  {id:'art_3_08',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'She is best student in the class.',answer:'She is the best student in the class.',hint:'superlatif → the best',explanation:'"The best" = superlatif.'},
  {id:'art_3_09',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'She is an excellent doctor.',answer:'Elle est une excellente médecin.',alternatives:['Elle est un excellent médecin.'],hint:'an excellent → une excellente',explanation:'"An excellent" → "une excellente".'},
  {id:'art_3_10',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'The children love the beach.',answer:'Les enfants adorent la plage.',hint:'The = les/la',explanation:'"The children" = "les enfants".'},
  {id:'art_3_11',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'I need a doctor urgently.',answer:"J'ai besoin d'un médecin d'urgence.",hint:'a doctor = un médecin',explanation:'"A doctor" = "un médecin".'},
  {id:'art_3_12',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'He plays the guitar and sings.',answer:'Il joue de la guitare et chante.',hint:'play the guitar = jouer de la guitare',explanation:'"Play the guitar" = "jouer de la guitare".'},
  {id:'art_3_13',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'I saw a dog and an elephant at the zoo.',question:'Quel article est utilisé avec elephant ?',answer:'an',alternatives:['An'],hint:'elephant → voyelle',explanation:'"An elephant" — voyelle /ɛ/.'},
  {id:'art_3_14',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'The sun is shining and the sky is blue.',question:'Pourquoi utilise-t-on "the" avec sun et sky ?',answer:'They are unique objects.',alternatives:['They are unique.','Sun and sky are unique.'],hint:'Objets uniques → the',explanation:'"The sun" et "the sky" sont uniques.'},
  {id:'art_3_15',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'She is a teacher and her husband is an engineer.',question:'Quel est le métier du mari ?',answer:'He is an engineer.',alternatives:['an engineer','engineer'],hint:'Écoutez le deuxième métier',explanation:'"An engineer" — voyelle /ɛ/.'}
);

// ─── PLURALS ─────────────────────────────────────────────────────────────────
exercises.plurals.push(
  // Level 1 (+10)
  {id:'pl_1_01',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon pluriel.',question:'One child → two ___',options:['childs','children','childrens','child'],answer:'children',hint:'Irrégulier',explanation:'"Children" est le pluriel irrégulier de "child".'},
  {id:'pl_1_02',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon pluriel.',question:'One city → many ___',options:['citys','cities','cityes','city'],answer:'cities',hint:'consonne + y → ies',explanation:'"City" → retire y, ajoute -ies → "cities".'},
  {id:'pl_1_03',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon pluriel.',question:'One knife → two ___',options:['knifes','knives','knifes','knife'],answer:'knives',hint:'f/fe → ves',explanation:'"Knife" → "knives" (f → ves).'},
  {id:'pl_1_04',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon pluriel.',question:'One tooth → many ___',options:['tooths','teeths','teeth','tooth'],answer:'teeth',hint:'Irrégulier',explanation:'"Tooth" → "teeth" (irrégulier).'},
  {id:'pl_1_05',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon pluriel.',question:'One sheep → two ___',options:['sheeps','sheepes','sheep','sheeps'],answer:'sheep',hint:'Invariable',explanation:'"Sheep" → "sheep" (invariable).'},
  {id:'pl_1_06',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon pluriel.',question:'One box → three ___',options:['boxs','boxes','boxies','box'],answer:'boxes',hint:'-s, -x, -ch, -sh → +es',explanation:'"Box" → "boxes" (finit en -x → +es).'},
  {id:'pl_1_07',type:'fill-blank',diffLevel:1,instruction:'Donnez le pluriel.',template:'One man → two ___',answer:'men',hint:'Irrégulier',explanation:'"Man" → "men" (irrégulier).'},
  {id:'pl_1_08',type:'fill-blank',diffLevel:1,instruction:'Donnez le pluriel.',template:'One woman → three ___',answer:'women',hint:'Irrégulier',explanation:'"Woman" → "women" (irrégulier).'},
  {id:'pl_1_09',type:'fill-blank',diffLevel:1,instruction:'Donnez le pluriel.',template:'One leaf → five ___',answer:'leaves',hint:'f → ves',explanation:'"Leaf" → "leaves" (f → ves).'},
  {id:'pl_1_10',type:'fill-blank',diffLevel:1,instruction:'Donnez le pluriel.',template:'One tomato → many ___',answer:'tomatoes',hint:'-o → +es',explanation:'"Tomato" → "tomatoes" (-o → +es).'},
  {id:'pl_1_11',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['The','are','children','happy'],answer:'The children are happy.',hint:'children = pluriel de child',explanation:'"The children are" — "children" est pluriel → "are".'},
  {id:'pl_1_12',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['have','I','three','brothers'],answer:'I have three brothers.',hint:'brother → brothers',explanation:'"Brothers" = pluriel régulier de "brother".'},
  {id:'pl_1_13',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['are','in','the','Mice','house'],answer:'Mice are in the house.',hint:'mouse → mice',explanation:'"Mouse" → "mice" (irrégulier).'},
  {id:'pl_1_14',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['two','She','has','knives'],answer:'She has two knives.',hint:'knife → knives',explanation:'"Knife" → "knives" (f → ves).'},
  // Level 2 (+14)
  {id:'pl_2_01',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Il y a beaucoup de gens dans la rue.',answer:'There are many people in the street.',alternatives:['There are a lot of people in the street.'],hint:'people = pluriel de person',explanation:'"People" est déjà pluriel.'},
  {id:'pl_2_02',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Les femmes travaillent à l\'hôpital.',answer:'The women work at the hospital.',hint:'woman → women',explanation:'"Women" = pluriel de "woman".'},
  {id:'pl_2_03',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'J\'ai trois dents abîmées.',answer:'I have three damaged teeth.',alternatives:['I have three broken teeth.'],hint:'dent → tooth → teeth',explanation:'"Tooth" → "teeth" (irrégulier).'},
  {id:'pl_2_04',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Les souris mangent le fromage.',answer:'The mice eat the cheese.',hint:'mouse → mice',explanation:'"Mouse" → "mice" (irrégulier).'},
  {id:'pl_2_05',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Il y a cinq poissons dans le bassin.',answer:'There are five fish in the pond.',alternatives:['There are five fishes in the pond.'],hint:'fish peut rester invariable',explanation:'"Fish" reste souvent invariable, mais "fishes" est aussi accepté.'},
  {id:'pl_2_06',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'The children are playing outside.',answer:'The children are playing outside.',hint:'children = pluriel',explanation:'"Children" = pluriel de "child".'},
  {id:'pl_2_07',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'I see two geese on the lake.',answer:'I see two geese on the lake.',hint:'goose → geese',explanation:'"Goose" → "geese" (irrégulier).'},
  {id:'pl_2_08',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'Her teeth are very white.',answer:'Her teeth are very white.',hint:'tooth → teeth',explanation:'"Teeth" = pluriel de "tooth".'},
  {id:'pl_2_09',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'The men are waiting outside.',answer:'The men are waiting outside.',hint:'man → men',explanation:'"Men" = pluriel de "man".'},
  {id:'pl_2_10',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'She has five sheep on her farm.',answer:'She has five sheep on her farm.',hint:'sheep = invariable',explanation:'"Sheep" = invariable.'},
  {id:'pl_2_11',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['are','The','in','oxen','the','field'],answer:'The oxen are in the field.',hint:'ox → oxen',explanation:'"Ox" → "oxen" (irrégulier ancien).'},
  {id:'pl_2_12',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['have','many','We','responsibilities'],answer:'We have many responsibilities.',hint:'responsibility → responsibilities',explanation:'"Responsibility" → "responsibilities" (-y → -ies).'},
  {id:'pl_2_13',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['The','beautiful','are','butterflies'],answer:'The butterflies are beautiful.',hint:'butterfly → butterflies',explanation:'"Butterfly" → "butterflies" (-y → -ies).'},
  {id:'pl_2_14',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['gave','three','She','sandwiches','me'],answer:'She gave me three sandwiches.',hint:'sandwich → sandwiches',explanation:'"Sandwich" → "sandwiches" (-ch → +es).'},
  {id:'pl_2_15',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['lives','in','A','the','deer','forest'],answer:'A deer lives in the forest.',hint:'deer = invariable',explanation:'"Deer" = invariable.'},
  // Level 3 (+13)
  {id:'pl_3_01',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'children',example:'The children are playing in the garden.',hint:'Pluriel irrégulier de child',explanation:'"Children" = pluriel de "child".'},
  {id:'pl_3_02',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'teeth',example:'I brush my teeth every morning.',hint:'Pluriel de tooth',explanation:'"Teeth" = pluriel de "tooth".'},
  {id:'pl_3_03',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'women',example:'The women are very kind.',hint:'Pluriel de woman',explanation:'"Women" = pluriel de "woman".'},
  {id:'pl_3_04',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'leaves',example:'The leaves are falling from the trees.',hint:'leaf → leaves',explanation:'"Leaf" → "leaves" (f → ves).'},
  {id:'pl_3_05',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'He has two childs at school.',answer:'He has two children at school.',hint:'Pluriel irrégulier de child',explanation:'"Child" → "children".'},
  {id:'pl_3_06',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'I see three sheeps in the field.',answer:'I see three sheep in the field.',hint:'sheep = invariable',explanation:'"Sheep" ne change pas au pluriel.'},
  {id:'pl_3_07',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'She has beautiful tooths.',answer:'She has beautiful teeth.',hint:'Pluriel irrégulier de tooth',explanation:'"Tooth" → "teeth".'},
  {id:'pl_3_08',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'There are five womans in the room.',answer:'There are five women in the room.',hint:'Pluriel irrégulier de woman',explanation:'"Woman" → "women".'},
  {id:'pl_3_09',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'The mice ran away quickly.',answer:'Les souris se sont enfuies rapidement.',alternatives:['Les souris ont vite disparu.'],hint:'mice = les souris',explanation:'"Mice" = pluriel de "mouse" = "souris".'},
  {id:'pl_3_10',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'The children played all day.',answer:'Les enfants ont joué toute la journée.',hint:'children = les enfants',explanation:'"Children" = "les enfants".'},
  {id:'pl_3_11',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'She has two cats and three dogs.',answer:'Elle a deux chats et trois chiens.',hint:'cats = chats, dogs = chiens',explanation:'Pluriels réguliers : cats, dogs.'},
  {id:'pl_3_12',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'The leaves are orange and red in autumn.',answer:'Les feuilles sont orange et rouges en automne.',hint:'leaves = les feuilles',explanation:'"Leaves" = pluriel de "leaf" = "feuilles".'},
  {id:'pl_3_13',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'There are three children and two women in the park.',question:'Combien de personnes y a-t-il en tout ?',answer:'Five.',alternatives:['5.','Five people.'],hint:'3 + 2 = ?',explanation:'Three children + two women = five people.'},
  {id:'pl_3_14',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'I see two geese and one deer near the river.',question:'Quel animal apparaît une seule fois ?',answer:'A deer.',alternatives:['deer','The deer'],hint:'Écoutez les quantités',explanation:'"One deer" = singulier.'},
  {id:'pl_3_15',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'The men and women work together in the office.',question:'Quel est le pluriel de man utilisé ici ?',answer:'men',alternatives:['Men'],hint:'man → ?',explanation:'"Men" = pluriel irrégulier de "man".'}
);

// ─── THERE IS / ARE ──────────────────────────────────────────────────────────
exercises.therebeis.push(
  // Level 1 (+11)
  {id:'tbi_1_01',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'___ a book on the table.',options:['There is','There are','There has','There have'],answer:'There is',hint:'a book = singulier',explanation:'"There is" + singulier.'},
  {id:'tbi_1_02',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'___ three students in the classroom.',options:['There is','There are','There was','There have'],answer:'There are',hint:'three students = pluriel',explanation:'"There are" + pluriel.'},
  {id:'tbi_1_03',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'___ any milk in the fridge?',options:['Is there','Are there','Has there','Have there'],answer:'Is there',hint:'milk = non-dénombrable → is',explanation:'"Is there any milk?" — milk est non-dénombrable.'},
  {id:'tbi_1_04',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'___ many people at the party last night.',options:['There were','There was','There are','There is'],answer:'There were',hint:'last night = passé + pluriel',explanation:'"There were" = pluriel passé.'},
  {id:'tbi_1_05',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'___ no sugar left.',options:["There isn't","There aren't",'There was not','There not'],answer:"There isn't",hint:'sugar = non-dénombrable → is',explanation:'"There isn\'t any sugar" — non-dénombrable.'},
  {id:'tbi_1_06',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'___ an elephant in the zoo.',options:['There is','There are','There be','There has'],answer:'There is',hint:'an elephant = singulier',explanation:'"There is an elephant" — singulier.'},
  {id:'tbi_1_07',type:'fill-blank',diffLevel:1,instruction:'Complétez avec there is/are.',template:'___ a hospital near the school.',answer:'There is',hint:'hospital = singulier',explanation:'"There is a hospital" — singulier.'},
  {id:'tbi_1_08',type:'fill-blank',diffLevel:1,instruction:'Complétez avec there is/are.',template:'___ many birds in the trees.',answer:'There are',hint:'many birds = pluriel',explanation:'"There are many birds" — pluriel.'},
  {id:'tbi_1_09',type:'fill-blank',diffLevel:1,instruction:'Complétez avec there is/are.',template:'___ no water in the glass.',answer:"There isn't",alternatives:['There is no'],hint:'water = non-dénombrable → is',explanation:'"There isn\'t any water" ou "There is no water".'},
  {id:'tbi_1_10',type:'fill-blank',diffLevel:1,instruction:'Complétez avec there is/are.',template:'___ a fly in my soup!',answer:'There is',hint:'a fly = singulier',explanation:'"There is a fly" — singulier.'},
  {id:'tbi_1_11',type:'fill-blank',diffLevel:1,instruction:'Complétez avec there is/are.',template:'___ five chairs around the table.',answer:'There are',hint:'five chairs = pluriel',explanation:'"There are five chairs" — pluriel.'},
  {id:'tbi_1_12',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['a','is','There','pharmacy','here','near'],answer:'There is a pharmacy near here.',hint:'There is + singulier',explanation:'"There is a pharmacy" — singulier.'},
  {id:'tbi_1_13',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['Are','questions','there','any','?'],answer:'Are there any questions?',hint:'Question : Are there...?',explanation:'Question : "Are there any questions?"'},
  {id:'tbi_1_14',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['were','at','There','people','market','many','the'],answer:'There were many people at the market.',hint:'passé pluriel → were',explanation:'"There were" = passé pluriel.'},
  // Level 2 (+12)
  {id:'tbi_2_01',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"Il y a un chien dans le jardin.",answer:'There is a dog in the garden.',alternatives:["There's a dog in the garden."],hint:'un chien = a dog (singulier)',explanation:'"There is a dog" — singulier.'},
  {id:'tbi_2_02',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Il y a beaucoup de gens dans la rue.',answer:'There are many people in the street.',alternatives:['There are a lot of people in the street.'],hint:'beaucoup de gens = many people (pluriel)',explanation:'"There are many people" — pluriel.'},
  {id:'tbi_2_03',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"Y a-t-il une école ici ?",answer:'Is there a school here?',hint:'Question singulier : Is there...?',explanation:'"Is there a school?" — question singulier.'},
  {id:'tbi_2_04',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"Il n'y a pas de lait dans le frigo.",answer:"There isn't any milk in the fridge.",alternatives:['There is no milk in the fridge.'],hint:'pas de lait → no milk / not any milk',explanation:'"There isn\'t any milk" ou "There is no milk".'},
  {id:'tbi_2_05',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"Il y avait cinq voitures dans la rue.",answer:'There were five cars in the street.',hint:'passé pluriel → were',explanation:'"There were five cars" — passé pluriel.'},
  {id:'tbi_2_06',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'There is a cat on the roof.',answer:'There is a cat on the roof.',hint:'a cat = singulier → is',explanation:'"There is a cat".'},
  {id:'tbi_2_07',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'There are three books on the table.',answer:'There are three books on the table.',hint:'three books = pluriel → are',explanation:'"There are three books".'},
  {id:'tbi_2_08',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'Is there a market near here?',answer:'Is there a market near here?',hint:'Question → Is there...?',explanation:'Question singulier.'},
  {id:'tbi_2_09',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'There were many animals in the forest.',answer:'There were many animals in the forest.',hint:'passé pluriel → were',explanation:'"There were many animals".'},
  {id:'tbi_2_10',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:"There isn't any sugar in the kitchen.",answer:"There isn't any sugar in the kitchen.",hint:'sugar non-dénombrable → is',explanation:'"There isn\'t any sugar".'},
  {id:'tbi_2_11',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['many','Are','shops','there','here','near','?'],answer:'Are there many shops near here?',hint:'Question pluriel',explanation:'"Are there many shops?" — pluriel.'},
  {id:'tbi_2_12',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['a','was','There','problem','yesterday'],answer:'There was a problem yesterday.',hint:'passé singulier → was',explanation:'"There was a problem" — passé singulier.'},
  {id:'tbi_2_13',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['any','there','Are','questions','?'],answer:'Are there any questions?',hint:'Questions → Are there...?',explanation:'"Are there any questions?"'},
  {id:'tbi_2_14',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['no','There','the','is','bus','today'],answer:'There is no bus today.',hint:'There is no = il n\'y a pas de',explanation:'"There is no bus" = "There isn\'t a bus".'},
  {id:'tbi_2_15',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['a','There','in','is','garden','bee','the'],answer:'There is a bee in the garden.',hint:'a bee = singulier',explanation:'"There is a bee" — singulier.'},
  // Level 3 (+14)
  {id:'tbi_3_01',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'there is',example:'There is a beautiful lake near our village.',hint:'"There is" + singulier',explanation:'"There is" exprime l\'existence d\'un objet singulier.'},
  {id:'tbi_3_02',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'there are',example:'There are many students in the classroom.',hint:'"There are" + pluriel',explanation:'"There are" exprime l\'existence de plusieurs objets.'},
  {id:'tbi_3_03',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'there were',example:'There were many people at the festival.',hint:'"There were" = passé pluriel',explanation:'"There were" = passé de "there are".'},
  {id:'tbi_3_04',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:"there isn't",example:"There isn't any milk in the fridge.",hint:'"There isn\'t" = négatif singulier',explanation:'"There isn\'t" = "there is not".'},
  {id:'tbi_3_05',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'There are a dog in the garden.',answer:'There is a dog in the garden.',hint:'a dog = singulier → is',explanation:'"A dog" = singulier → "there is".'},
  {id:'tbi_3_06',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'Is there many people here?',answer:'Are there many people here?',hint:'many people = pluriel → are',explanation:'"Many people" = pluriel → "Are there...?"'},
  {id:'tbi_3_07',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'There were a problem yesterday.',answer:'There was a problem yesterday.',hint:'a problem = singulier → was',explanation:'"A problem" = singulier → "there was".'},
  {id:'tbi_3_08',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:"There isn't any books left.",answer:"There aren't any books left.",hint:'books = pluriel → aren\'t',explanation:'"Books" = pluriel → "there aren\'t".'},
  {id:'tbi_3_09',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'There is a market every Sunday.',answer:'Il y a un marché tous les dimanches.',hint:'There is = il y a',explanation:'"There is" = "il y a" (singulier).'},
  {id:'tbi_3_10',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'There are many birds in Madagascar.',answer:'Il y a beaucoup d\'oiseaux à Madagascar.',hint:'There are = il y a',explanation:'"There are" = "il y a" (pluriel).'},
  {id:'tbi_3_11',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:"There isn't any water in the glass.",answer:"Il n'y a pas d'eau dans le verre.",hint:"There isn't = il n'y a pas",explanation:'"There isn\'t" = "il n\'y a pas".'},
  {id:'tbi_3_12',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'Were there many students at the ceremony?',answer:'Y avait-il beaucoup d\'étudiants à la cérémonie ?',hint:'Were there...? = Y avait-il ?',explanation:'"Were there...?" = "Y avait-il...?" (passé).'},
  {id:'tbi_3_13',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'There are two cats and one dog in the house.',question:'Combien d\'animaux y a-t-il en tout ?',answer:'Three.',alternatives:['3.','Three animals.'],hint:'2 + 1 = ?',explanation:'Two cats + one dog = three animals.'},
  {id:'tbi_3_14',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'There is no school today because of the rain.',question:'Y a-t-il école aujourd\'hui ?',answer:'No, there is no school today.',alternatives:['No.','No school today.'],hint:'Écoutez la négation',explanation:'"There is no school" = pas d\'école.'},
  {id:'tbi_3_15',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'There were five people at the meeting yesterday.',question:'Quand a eu lieu la réunion ?',answer:'Yesterday.',alternatives:['Last night.','Yesterday morning.'],hint:'Écoutez l\'adverbe de temps',explanation:'"Yesterday" = hier.'}
);

// ─── PREPOSITIONS ─────────────────────────────────────────────────────────────
exercises.prepositions.push(
  // Level 1 (+11)
  {id:'prep_1_01',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne préposition.',question:'I wake up ___ 6 o\'clock.',options:['in','on','at','by'],answer:'at',hint:'heure précise → at',explanation:'"At" pour les heures précises.'},
  {id:'prep_1_02',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne préposition.',question:'School starts ___ Monday.',options:['in','on','at','by'],answer:'on',hint:'jours → on',explanation:'"On" pour les jours de la semaine.'},
  {id:'prep_1_03',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne préposition.',question:'My birthday is ___ June.',options:['in','on','at','by'],answer:'in',hint:'mois → in',explanation:'"In" pour les mois et les années.'},
  {id:'prep_1_04',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne préposition.',question:'The keys are ___ the table.',options:['in','on','at','under'],answer:'on',hint:'sur la surface → on',explanation:'"On" pour une surface.'},
  {id:'prep_1_05',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne préposition.',question:'We go to church ___ Sunday mornings.',options:['in','on','at','by'],answer:'on',hint:'jour + moment → on',explanation:'"On Sunday mornings" = les matins du dimanche.'},
  {id:'prep_1_06',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne préposition.',question:'She was born ___ 1998.',options:['in','on','at','by'],answer:'in',hint:'année → in',explanation:'"In 1998" — années avec "in".'},
  {id:'prep_1_07',type:'fill-blank',diffLevel:1,instruction:'Complétez avec in, on ou at.',template:'The cat is ___ the box.',answer:'in',hint:'à l\'intérieur → in',explanation:'"In" = à l\'intérieur.'},
  {id:'prep_1_08',type:'fill-blank',diffLevel:1,instruction:'Complétez avec in, on ou at.',template:'We meet ___ noon.',answer:'at',hint:'noon = moment précis → at',explanation:'"At noon" — moment précis.'},
  {id:'prep_1_09',type:'fill-blank',diffLevel:1,instruction:'Complétez avec in, on ou at.',template:'She was born ___ a Sunday.',answer:'on',hint:'jour → on',explanation:'"On a Sunday" — jour.'},
  {id:'prep_1_10',type:'fill-blank',diffLevel:1,instruction:'Complétez avec in, on ou at.',template:'I read ___ the evening.',answer:'in',hint:'in the morning/afternoon/evening',explanation:'"In the evening" — parties de la journée (sauf night).'},
  {id:'prep_1_11',type:'fill-blank',diffLevel:1,instruction:'Complétez avec in, on ou at.',template:'The shop is ___ the corner.',answer:'on',hint:'on the corner = au coin',explanation:'"On the corner" — expression fixe.'},
  {id:'prep_1_12',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['at','I','school','am','noon','at'],answer:'I am at school at noon.',hint:'at school, at noon',explanation:'"At school" (lieu) + "at noon" (heure).'},
  {id:'prep_1_13',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['on','She','her','the','birthday','July','is','in','3rd'],answer:'Her birthday is on July 3rd.',hint:'date précise → on',explanation:'"On July 3rd" — date précise.'},
  {id:'prep_1_14',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['The','book','on','is','table','the'],answer:'The book is on the table.',hint:'on = sur la surface',explanation:'"On the table" = sur la table.'},
  {id:'prep_1_15',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['in','was','born','1992','I'],answer:'I was born in 1992.',hint:'année → in',explanation:'"In 1992" — année.'},
  // Level 2 (+13)
  {id:'prep_2_01',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Je suis né(e) le 15 août.',answer:'I was born on August 15th.',alternatives:['I was born on the 15th of August.'],hint:'date précise → on',explanation:'"On August 15th" — date précise.'},
  {id:'prep_2_02',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Elle habite à Antananarivo depuis 2010.',answer:'She has lived in Antananarivo since 2010.',alternatives:['She has been in Antananarivo since 2010.'],hint:'depuis → since + date précise',explanation:'"Since" = depuis un moment précis.'},
  {id:'prep_2_03',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Le bus part à 7h30 le matin.',answer:'The bus leaves at 7:30 in the morning.',alternatives:['The bus departs at 7:30 am.'],hint:'heure → at ; matin → in the morning',explanation:'"At 7:30 in the morning".'},
  {id:'prep_2_04',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Il y a un marché tous les vendredis.',answer:'There is a market every Friday.',alternatives:['There is a market on Fridays.'],hint:'le vendredi → every Friday / on Fridays',explanation:'"Every Friday" ou "on Fridays".'},
  {id:'prep_2_05',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Nous nous retrouvons devant l\'école.',answer:'We meet in front of the school.',hint:'devant → in front of',explanation:'"In front of" = devant.'},
  {id:'prep_2_06',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'The meeting is on Friday at three.',answer:'The meeting is on Friday at three.',hint:'on Friday, at three',explanation:'"On Friday" (jour) + "at three" (heure).'},
  {id:'prep_2_07',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'I was born in the morning in summer.',answer:'I was born in the morning in summer.',hint:'in the morning, in summer',explanation:'"In the morning" + "in summer".'},
  {id:'prep_2_08',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'She lives near the market on Main Street.',answer:'She lives near the market on Main Street.',hint:'near, on',explanation:'"Near" = près de. "On Main Street".'},
  {id:'prep_2_09',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'I go to work by bus every morning.',answer:'I go to work by bus every morning.',hint:'by bus = en bus',explanation:'"By bus" = en bus.'},
  {id:'prep_2_10',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'The library is between the school and the park.',answer:'The library is between the school and the park.',hint:'between = entre',explanation:'"Between A and B" = entre A et B.'},
  {id:'prep_2_11',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['at','They','the','arrive','airport','at','noon'],answer:'They arrive at the airport at noon.',hint:'at the airport (lieu), at noon (heure)',explanation:'"At the airport" + "at noon".'},
  {id:'prep_2_12',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['on','I','walk','Sunday','mornings','to','church'],answer:'I walk to church on Sunday mornings.',hint:'on Sunday mornings',explanation:'"On Sunday mornings" — jour + partie du jour.'},
  {id:'prep_2_13',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['in','was','born','She','summer','in','1995'],answer:'She was born in summer in 1995.',hint:'in summer, in 1995',explanation:'"In summer" + "in 1995".'},
  {id:'prep_2_14',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['behind','The','garden','is','the','house'],answer:'The garden is behind the house.',hint:'behind = derrière',explanation:'"Behind" = derrière.'},
  {id:'prep_2_15',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['on','He','floor','lives','the','second'],answer:'He lives on the second floor.',hint:'on the second floor',explanation:'"On the second floor" — étages avec "on".'},
  // Level 3 (+13)
  {id:'prep_3_01',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'at',example:'I arrive at school at eight in the morning.',hint:'"at" pour heure ou lieu précis',explanation:'"At" = heure précise / lieu précis.'},
  {id:'prep_3_02',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'in front of',example:'I always wait in front of the school.',hint:'"in front of" = devant',explanation:'"In front of" = devant.'},
  {id:'prep_3_03',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'between',example:'The post office is between the bank and the park.',hint:'"between" = entre deux choses',explanation:'"Between A and B" = entre A et B.'},
  {id:'prep_3_04',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'by',example:'I go to school by bicycle.',hint:'"by" + moyen de transport',explanation:'"By bus/car/train" = en bus/voiture/train.'},
  {id:'prep_3_05',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'The party is in the night.',answer:'The party is at night.',hint:'at night (exception)',explanation:'"At night" — exception. Mais : "in the morning/evening".'},
  {id:'prep_3_06',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'I go to school in 7 am.',answer:'I go to school at 7 am.',hint:'heure précise → at',explanation:'"At 7 am" — heure précise.'},
  {id:'prep_3_07',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'She lives on Madagascar.',answer:'She lives in Madagascar.',hint:'pays → in',explanation:'"In Madagascar" — on dit "in" pour les pays.'},
  {id:'prep_3_08',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'We meet on the afternoon.',answer:'We meet in the afternoon.',hint:'in the afternoon',explanation:'"In the afternoon" — pas "on".'},
  {id:'prep_3_09',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'She was born on the 3rd of May.',answer:'Elle est née le 3 mai.',hint:'on the 3rd of May = le 3 mai',explanation:'"On the 3rd of May" = "le 3 mai".'},
  {id:'prep_3_10',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'The school is in front of the church.',answer:"L'école est en face de l'église.",alternatives:["L'école est devant l'église."],hint:'in front of = en face de / devant',explanation:'"In front of" = "devant" ou "en face de".'},
  {id:'prep_3_11',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'I will arrive at noon on Saturday.',answer:'J\'arriverai à midi samedi.',alternatives:["J'arriverai le samedi à midi."],hint:'at noon = à midi, on Saturday = samedi',explanation:'"At noon on Saturday".'},
  {id:'prep_3_12',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'The book is between the pen and the eraser.',answer:'Le livre est entre le stylo et la gomme.',hint:'between = entre',explanation:'"Between" = "entre".'},
  {id:'prep_3_13',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'I go to school by bus on weekdays.',question:'Comment va-t-il à l\'école ?',answer:'By bus.',alternatives:['He goes by bus.','On the bus.'],hint:'Écoutez le moyen de transport',explanation:'"By bus" = en bus.'},
  {id:'prep_3_14',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'The market is open on Fridays and Saturdays.',question:'Quand le marché est-il ouvert ?',answer:'On Fridays and Saturdays.',alternatives:['Friday and Saturday.','On Friday and Saturday.'],hint:'Écoutez les jours',explanation:'"On Fridays and Saturdays".'},
  {id:'prep_3_15',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'She lives near the lake between two mountains.',question:'Où habite-t-elle ?',answer:'Near the lake, between two mountains.',alternatives:['Between two mountains.','Near a lake.'],hint:'Écoutez les prépositions de lieu',explanation:'"Near the lake between two mountains".'}
);

// ─── QUESTIONS ───────────────────────────────────────────────────────────────
exercises.questions.push(
  // Level 1 (+12)
  {id:'q_1_01',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon mot interrogatif.',question:'___ do you live?',options:['What','Where','When','Who'],answer:'Where',hint:'pour un lieu',explanation:'"Where" = où.'},
  {id:'q_1_02',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon mot interrogatif.',question:'___ is your name?',options:['What','Where','When','Who'],answer:'What',hint:'pour une chose',explanation:'"What" = quoi/quel.'},
  {id:'q_1_03',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon mot interrogatif.',question:'___ is she?',options:['What','Where','When','Who'],answer:'Who',hint:'pour une personne',explanation:'"Who" = qui.'},
  {id:'q_1_04',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon mot interrogatif.',question:'___ do you go to school?',options:['What','Where','When','Who'],answer:'When',hint:'pour un moment',explanation:'"When" = quand.'},
  {id:'q_1_05',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'___ do you like coffee?',options:['What','Where','Why','Who'],answer:'Why',hint:'pour une raison',explanation:'"Why" = pourquoi.'},
  {id:'q_1_06',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'___ old are you?',options:['What','How','Who','Why'],answer:'How',hint:'"How" + adjectif',explanation:'"How old" = quel âge.'},
  {id:'q_1_07',type:'fill-blank',diffLevel:1,instruction:'Complétez la question.',template:'___ do you come from?',answer:'Where',hint:'lieu d\'origine',explanation:'"Where do you come from?" = D\'où viens-tu?'},
  {id:'q_1_08',type:'fill-blank',diffLevel:1,instruction:'Complétez la question.',template:'___ many students are in your class?',answer:'How',hint:'"How many" + dénombrable',explanation:'"How many" pour compter des objets dénombrables.'},
  {id:'q_1_09',type:'fill-blank',diffLevel:1,instruction:'Complétez la question.',template:'___ do you prefer, tea or coffee?',answer:'What',hint:'choix entre deux choses',explanation:'"What do you prefer?" = Que préfères-tu?'},
  {id:'q_1_10',type:'fill-blank',diffLevel:1,instruction:'Complétez la question.',template:'___ is your teacher\'s name?',answer:'What',hint:'pour un nom',explanation:'"What is your teacher\'s name?" = Quel est le nom de ton prof?'},
  {id:'q_1_11',type:'fill-blank',diffLevel:1,instruction:'Complétez la question.',template:'___ is your birthday?',answer:'When',hint:'pour une date',explanation:'"When is your birthday?" = C\'est quand ton anniversaire?'},
  {id:'q_1_12',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['you','do','live','Where','?'],answer:'Where do you live?',hint:'Where + do + sujet + verbe',explanation:'"Where do you live?" — mot interrogatif + auxiliaire + sujet + verbe.'},
  {id:'q_1_13',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['old','are','How','you','?'],answer:'How old are you?',hint:'"How old" + are + you',explanation:'"How old are you?" — question sur l\'âge.'},
  {id:'q_1_14',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['your','What','name','is','?'],answer:'What is your name?',hint:'What + is + sujet',explanation:'"What is your name?"'},
  {id:'q_1_15',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['do','Why','late','come','you','?'],answer:'Why do you come late?',hint:'Why + do + sujet + verbe',explanation:'"Why do you come late?" — raison.'},
  // Level 2 (+11)
  {id:'q_2_01',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Combien ça coûte ?',answer:'How much does it cost?',alternatives:['How much is it?'],hint:'"How much" pour un prix',explanation:'"How much" = combien (non-dénombrable / prix).'},
  {id:'q_2_02',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Pourquoi est-ce qu\'elle est en retard ?',answer:"Why is she late?",hint:'Why + auxiliaire + sujet',explanation:'"Why is she late?" — question directe.'},
  {id:'q_2_03',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Quand est-ce que le bus part ?',answer:'When does the bus leave?',alternatives:['When does the bus depart?'],hint:'"When does" + sujet + verbe',explanation:'"When does the bus leave?"'},
  {id:'q_2_04',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Qui a pris mon livre ?',answer:'Who took my book?',hint:'Who + verbe (pas d\'auxiliaire avec who sujet)',explanation:'"Who took my book?" — "who" est le sujet → pas de "did".'},
  {id:'q_2_05',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Comment s\'appelle ton professeur ?',answer:"What is your teacher's name?",alternatives:['What is the name of your teacher?'],hint:'What is...name?',explanation:'"What is your teacher\'s name?"'},
  {id:'q_2_06',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'Where do you come from?',answer:'Where do you come from?',hint:'Where + do + sujet',explanation:'"Where do you come from?" = D\'où viens-tu?'},
  {id:'q_2_07',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'How many brothers do you have?',answer:'How many brothers do you have?',hint:'"How many" + pluriel',explanation:'"How many brothers do you have?"'},
  {id:'q_2_08',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:"Why didn't you come to school yesterday?",answer:"Why didn't you come to school yesterday?",hint:'Why + didn\'t + sujet',explanation:'"Why didn\'t you come?" — négatif passé.'},
  {id:'q_2_09',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'What time does the train arrive?',answer:'What time does the train arrive?',hint:'"What time does" + sujet',explanation:'"What time does the train arrive?"'},
  {id:'q_2_10',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'Which book do you prefer?',answer:'Which book do you prefer?',hint:'Which = lequel',explanation:'"Which" = lequel (choix limité).'},
  {id:'q_2_11',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['does','what','do','she','?'],answer:'What does she do?',hint:'What + does + sujet + infinitif',explanation:'"What does she do?" — profession/activité.'},
  {id:'q_2_12',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['did','you','go','Where','yesterday','?'],answer:'Where did you go yesterday?',hint:'Where + did + sujet + infinitif',explanation:'"Where did you go yesterday?" — passé.'},
  {id:'q_2_13',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['does','cost','much','How','it','?'],answer:'How much does it cost?',hint:'"How much does" + sujet',explanation:'"How much does it cost?"'},
  {id:'q_2_14',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['is','Who','your','teacher','favourite','?'],answer:'Who is your favourite teacher?',hint:'Who + is',explanation:'"Who is your favourite teacher?"'},
  {id:'q_2_15',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['take','does','long','it','How','to','walk','school','to','?'],answer:'How long does it take to walk to school?',hint:'"How long does it take..."',explanation:'"How long does it take to...?" — durée.'},
  // Level 3 (+14)
  {id:'q_3_01',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'why',example:'Why do you like English?',hint:'"Why" = pourquoi',explanation:'"Why" introduit une question sur la raison.'},
  {id:'q_3_02',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'how many',example:'How many students are in your class?',hint:'"How many" + dénombrable',explanation:'"How many" pour les noms dénombrables.'},
  {id:'q_3_03',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'whose',example:'Whose book is this?',hint:'"Whose" = à qui',explanation:'"Whose" = à qui (possession).'},
  {id:'q_3_04',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'which',example:'Which colour do you prefer?',hint:'"Which" = lequel (choix limité)',explanation:'"Which" = lequel (choix limité).'},
  {id:'q_3_05',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'What she does for work?',answer:'What does she do for work?',hint:'does avant le sujet',explanation:'"What does she do?" — auxiliaire avant le sujet.'},
  {id:'q_3_06',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'Where you live?',answer:'Where do you live?',hint:'auxiliaire do requis',explanation:'"Where do you live?" — "do" requis avec les verbes ordinaires.'},
  {id:'q_3_07',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'Who did came to the party?',answer:'Who came to the party?',hint:'"Who" sujet → pas d\'auxiliaire',explanation:'"Who came?" — "who" est sujet → pas de "did".'},
  {id:'q_3_08',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'How much books do you have?',answer:'How many books do you have?',hint:'books = dénombrable → how many',explanation:'"How many" (dénombrable). "How much" (non-dénombrable).'},
  {id:'q_3_09',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'What time does the school start?',answer:'À quelle heure commence l\'école ?',hint:'What time = à quelle heure',explanation:'"What time" = "à quelle heure".'},
  {id:'q_3_10',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'How long have you been waiting?',answer:'Depuis combien de temps attends-tu ?',alternatives:['Depuis quand attends-tu ?'],hint:'How long = depuis combien de temps',explanation:'"How long have you been...?" = "Depuis combien de temps...?"'},
  {id:'q_3_11',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'Who told you that?',answer:'Qui t\'a dit ça ?',hint:'Who = qui',explanation:'"Who told you that?" = "Qui t\'a dit ça?"'},
  {id:'q_3_12',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'Which way should I go?',answer:'Par quel chemin dois-je aller ?',alternatives:['Quel chemin dois-je prendre ?'],hint:'which way = par quel chemin',explanation:'"Which way" = "par quel chemin/quelle direction".'},
  {id:'q_3_13',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'Where do you come from? I come from Madagascar.',question:'D\'où vient la personne ?',answer:'From Madagascar.',alternatives:['Madagascar.','She comes from Madagascar.'],hint:'Écoutez la réponse',explanation:'"I come from Madagascar."'},
  {id:'q_3_14',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'How many languages do you speak? I speak three languages.',question:'Combien de langues parle-t-il ?',answer:'Three.',alternatives:['Three languages.','He speaks three.'],hint:'Écoutez le nombre',explanation:'"I speak three languages."'},
  {id:'q_3_15',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'Why are you late? Because the bus was delayed.',question:'Pourquoi est-il en retard ?',answer:'Because the bus was delayed.',alternatives:['The bus was late.','The bus was delayed.'],hint:'Écoutez la raison',explanation:'"Because the bus was delayed."'}
);

// ─── MODALS ──────────────────────────────────────────────────────────────────
exercises.modals.push(
  // Level 1 (+15)
  {id:'mod_1_01',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon modal.',question:'She ___ swim very well.',options:['can','must','should','have'],answer:'can',hint:'capacité → can',explanation:'"Can" = capacité.'},
  {id:'mod_1_02',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon modal.',question:'You ___ eat more vegetables.',options:['can','must','should','will'],answer:'should',hint:'conseil → should',explanation:'"Should" = conseil.'},
  {id:'mod_1_03',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon modal.',question:'You ___ wear a seatbelt. It\'s the law.',options:['can','must','should','might'],answer:'must',hint:'obligation forte → must',explanation:'"Must" = obligation forte.'},
  {id:'mod_1_04',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon modal.',question:'It ___ rain tomorrow. The sky is cloudy.',options:['must','should','might','can'],answer:'might',hint:'possibilité incertaine → might',explanation:'"Might" = possibilité incertaine.'},
  {id:'mod_1_05',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon modal.',question:'___ you help me, please?',options:['Can','Must','Should','Might'],answer:'Can',hint:'demande polie → can',explanation:'"Can you help me?" = demande polie.'},
  {id:'mod_1_06',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon modal.',question:'You ___ enter — it\'s private.',options:['must','can\'t','should','might'],answer:"can't",hint:'interdiction → can\'t',explanation:'"Can\'t" = interdiction.'},
  {id:'mod_1_07',type:'fill-blank',diffLevel:1,instruction:"Complétez avec can ou can't.",template:'He ___ drive yet — he is only 15.',answer:"can't",hint:'15 ans → trop jeune',explanation:'"Can\'t drive" — trop jeune.'},
  {id:'mod_1_08',type:'fill-blank',diffLevel:1,instruction:"Complétez avec should ou shouldn't.",template:'You ___ stay up too late. You have school tomorrow.',answer:"shouldn't",hint:'mauvais conseil → shouldn\'t',explanation:'"Shouldn\'t" = ne devrait pas (conseil négatif).'},
  {id:'mod_1_09',type:'fill-blank',diffLevel:1,instruction:"Complétez avec must ou mustn't.",template:'You ___ touch that wire — it is dangerous.',answer:"mustn't",hint:'danger → mustn\'t',explanation:'"Mustn\'t" = interdiction absolue (danger).'},
  {id:'mod_1_10',type:'fill-blank',diffLevel:1,instruction:"Complétez avec will ou would.",template:'___ you like some tea?',answer:'Would',hint:'offre polie → would',explanation:'"Would you like...?" = offre polie.'},
  {id:'mod_1_11',type:'fill-blank',diffLevel:1,instruction:"Complétez avec may ou might.",template:'She ___ be at the market — I\'m not sure.',answer:'might',alternatives:['may'],hint:'incertitude → might/may',explanation:'"Might/may" = peut-être.'},
  {id:'mod_1_12',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['can','She','English','speak'],answer:'She can speak English.',hint:'can + infinitif (sans to)',explanation:'"Can" + infinitif.'},
  {id:'mod_1_13',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['should','more','You','exercise'],answer:'You should exercise more.',hint:'should + infinitif',explanation:'"Should" + infinitif.'},
  {id:'mod_1_14',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['here','must','You','on','be','time'],answer:'You must be here on time.',hint:'must + infinitif',explanation:'"Must" + infinitif.'},
  {id:'mod_1_15',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['help','Could','please','you','me','?'],answer:'Could you help me please?',hint:'Could = can poli',explanation:'"Could you...?" = demande polie.'},
  // Level 2 (+11)
  {id:'mod_2_01',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Elle sait parler trois langues.',answer:'She can speak three languages.',alternatives:['She is able to speak three languages.'],hint:'savoir → can',explanation:'"Can" = savoir/pouvoir.'},
  {id:'mod_2_02',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Tu ne devrais pas manger autant de sucre.',answer:"You shouldn't eat so much sugar.",alternatives:["You should not eat so much sugar."],hint:'conseil négatif → shouldn\'t',explanation:'"Shouldn\'t" = ne devrait pas.'},
  {id:'mod_2_03',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Il doit finir ses devoirs avant dîner.',answer:'He must finish his homework before dinner.',alternatives:['He has to finish his homework before dinner.'],hint:'obligation → must / have to',explanation:'"Must/have to" = obligation.'},
  {id:'mod_2_04',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Puis-je aller aux toilettes ?',answer:'May I go to the toilet?',alternatives:['Can I go to the toilet?'],hint:'permission → may/can',explanation:'"May I...?" = permission (formel).'},
  {id:'mod_2_05',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Il se pourrait qu\'il pleuve ce soir.',answer:'It might rain this evening.',alternatives:['It may rain this evening.'],hint:'possibilité → might/may',explanation:'"Might/may" = possibilité.'},
  {id:'mod_2_06',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'You should drink more water every day.',answer:'You should drink more water every day.',hint:'should + infinitif',explanation:'"Should drink" = conseil.'},
  {id:'mod_2_07',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'Can you close the window please?',answer:'Can you close the window please?',hint:'Can = capacité/demande',explanation:'"Can you...?" = demande polie.'},
  {id:'mod_2_08',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'You must not smoke inside the building.',answer:'You must not smoke inside the building.',hint:'must not = interdiction',explanation:'"Must not" = interdiction.'},
  {id:'mod_2_09',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'She might come to the party tonight.',answer:'She might come to the party tonight.',hint:'might = peut-être',explanation:'"Might come" = possibilité.'},
  {id:'mod_2_10',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'Would you like some coffee or tea?',answer:'Would you like some coffee or tea?',hint:'Would = offre polie',explanation:'"Would you like...?" = offre polie.'},
  {id:'mod_2_11',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['could','you','the','door','Could','open','?'],answer:'Could you open the door?',hint:'Could = can poli',explanation:'"Could you open...?" = demande polie.'},
  {id:'mod_2_12',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['must','passport','You','your','carry'],answer:'You must carry your passport.',hint:'must + infinitif',explanation:'"Must carry" = obligation.'},
  {id:'mod_2_13',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['might','late','be','She'],answer:'She might be late.',hint:'might + infinitif',explanation:'"Might be" = possibilité.'},
  {id:'mod_2_14',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['not','You','here','mustn\'t','smoke'],answer:"You mustn't smoke here.",hint:"mustn't + infinitif",explanation:'"Mustn\'t smoke" = interdiction.'},
  {id:'mod_2_15',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['can','you','fast','How','run','?'],answer:'How fast can you run?',hint:'How + modal + sujet + infinitif',explanation:'"How fast can you run?"'},
  // Level 3 (+11)
  {id:'mod_3_01',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'should',example:'You should study every evening.',hint:'"should" = conseil',explanation:'"Should" = conseil / recommandation.'},
  {id:'mod_3_02',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'might',example:'It might snow tomorrow.',hint:'"might" = possibilité incertaine',explanation:'"Might" = peut-être.'},
  {id:'mod_3_03',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'must',example:'You must arrive on time.',hint:'"must" = obligation forte',explanation:'"Must" = obligation.'},
  {id:'mod_3_04',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'could',example:'Could you pass me the salt?',hint:'"could" = demande polie ou capacité passée',explanation:'"Could" = polie ou passé de "can".'},
  {id:'mod_3_05',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'She can to sing very well.',answer:'She can sing very well.',hint:'modal → pas de "to"',explanation:'Après les modaux : infinitif SANS "to".'},
  {id:'mod_3_06',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'You must to wear a seatbelt.',answer:'You must wear a seatbelt.',hint:'must → pas de "to"',explanation:'"Must wear" — pas de "to" après les modaux.'},
  {id:'mod_3_07',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'He musts leave now.',answer:'He must leave now.',hint:'modaux invariables — jamais de -s',explanation:'"Must" = invariable.'},
  {id:'mod_3_08',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'Should I to bring anything?',answer:'Should I bring anything?',hint:'should → pas de "to"',explanation:'"Should I bring?" — pas de "to".'},
  {id:'mod_3_09',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'You should see a doctor.',answer:'Tu devrais voir un médecin.',hint:'should = devrais',explanation:'"Should" = "devrait/devrais".'},
  {id:'mod_3_10',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'She can speak English and French.',answer:'Elle parle (sait parler) anglais et français.',hint:'can speak = sait parler',explanation:'"Can speak" = "sait parler".'},
  {id:'mod_3_11',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'You must not enter without permission.',answer:'Tu ne dois pas entrer sans permission.',hint:'must not = ne doit pas',explanation:'"Must not" = interdiction.'},
  {id:'mod_3_12',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'You should eat vegetables and you must drink water.',question:'Quel modal exprime une obligation ?',answer:'must',alternatives:['Must.'],hint:'conseil vs obligation',explanation:'"Should" = conseil. "Must" = obligation.'},
  {id:'mod_3_13',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'Can you ride a bicycle? Yes, I can.',question:'La personne peut-elle faire du vélo ?',answer:'Yes, she can.',alternatives:['Yes.','Yes, he can.'],hint:'Écoutez la réponse',explanation:'"Yes, I can" = oui, je peux.'},
  {id:'mod_3_14',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'It might rain this afternoon so you should take an umbrella.',question:'Que conseille-t-on de prendre ?',answer:'An umbrella.',alternatives:['umbrella','A umbrella.'],hint:'Écoutez la recommandation',explanation:'"Take an umbrella" = prendre un parapluie.'},
  {id:'mod_3_15',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:"You mustn't use your phone in class.",question:'Que ne peut-on pas faire en classe ?',answer:'Use a phone.',alternatives:['Use your phone.','Use the phone.'],hint:'Écoutez l\'interdiction',explanation:'"Mustn\'t use your phone in class".'}
);


// ─── BATCH 2 EXERCISES (diffLevel 1 / 2 / 3) ────────────────────────────────

// ─── PAST CONTINUOUS ────────────────────────────────────────────────────────
exercises.pastContinuous.push(
  // Level 1 (+15)
  {id:'pc_1_01',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'I ___ watching TV when she called.',options:['was','were','am','have'],answer:'was',hint:'I = singulier → was',explanation:'"Was" avec I, he, she, it.'},
  {id:'pc_1_02',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'They ___ playing football at 5pm.',options:['was','were','are','have'],answer:'were',hint:'They = pluriel → were',explanation:'"Were" avec you, we, they.'},
  {id:'pc_1_03',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'She ___ sleeping when I arrived.',options:['was','were','is','has'],answer:'was',hint:'she = singulier → was',explanation:'"Was sleeping" = passé continu singulier.'},
  {id:'pc_1_04',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'What ___ you doing yesterday?',options:['were','was','did','have'],answer:'were',hint:'you → were',explanation:'"Were you doing?" — question passé continu.'},
  {id:'pc_1_05',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'He ___ not listening carefully.',options:['was','were','did','has'],answer:'was',hint:'he = singulier → was',explanation:'"He was not listening."'},
  {id:'pc_1_06',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'We ___ cooking dinner at 8pm.',options:['were','was','are','be'],answer:'were',hint:'we = pluriel → were',explanation:'"We were cooking."'},
  {id:'pc_1_07',type:'fill-blank',diffLevel:1,instruction:'Complétez avec was/were + -ing.',template:'It ___ raining when I left the house.',answer:'was raining',hint:'it = singulier → was',explanation:'"It was raining."'},
  {id:'pc_1_08',type:'fill-blank',diffLevel:1,instruction:'Complétez avec was/were + -ing.',template:'They ___ not working last night.',answer:'were not working',alternatives:["weren't working"],hint:'they → were',explanation:'"They were not working."'},
  {id:'pc_1_09',type:'fill-blank',diffLevel:1,instruction:'Complétez avec was/were + -ing.',template:'She ___ reading a book at midnight.',answer:'was reading',hint:'she → was',explanation:'"She was reading."'},
  {id:'pc_1_10',type:'fill-blank',diffLevel:1,instruction:'Complétez avec was/were + -ing.',template:'We ___ travelling to the capital last week.',answer:'were travelling',hint:'we → were',explanation:'"We were travelling."'},
  {id:'pc_1_11',type:'fill-blank',diffLevel:1,instruction:'Complétez avec was/were + -ing.',template:'The children ___ playing in the garden all afternoon.',answer:'were playing',hint:'children = pluriel → were',explanation:'"The children were playing."'},
  {id:'pc_1_12',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['watching','was','I','TV'],answer:'I was watching TV.',hint:'sujet + was/were + -ing',explanation:'"I was watching TV."'},
  {id:'pc_1_13',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['were','They','the','cleaning','house'],answer:'They were cleaning the house.',hint:'they → were',explanation:'"They were cleaning the house."'},
  {id:'pc_1_14',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['arrived','was','She','crying','when','he'],answer:'She was crying when he arrived.',hint:'was + -ing pour l\'action en cours',explanation:'"She was crying when he arrived."'},
  {id:'pc_1_15',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['raining','not','was','It'],answer:'It was not raining.',hint:'it → was',explanation:'"It was not raining."'},
  // Level 2 (+15)
  {id:'pc_2_01',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"J'étudiais quand le téléphone a sonné.",answer:'I was studying when the phone rang.',hint:'imparfait = past continuous',explanation:'"Was studying" = action en cours interrompue.'},
  {id:'pc_2_02',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Ils jouaient au football toute la matinée.',answer:'They were playing football all morning.',hint:'ils → were',explanation:'"They were playing."'},
  {id:'pc_2_03',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"Elle dormait quand je suis arrivé.",answer:'She was sleeping when I arrived.',hint:'elle → was',explanation:'"She was sleeping when I arrived."'},
  {id:'pc_2_04',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Que faisais-tu hier soir ?',answer:'What were you doing last night?',alternatives:['What were you doing yesterday evening?'],hint:'que faisais-tu → what were you doing',explanation:'"What were you doing...?"'},
  {id:'pc_2_05',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Nous regardions la télé pendant que tu travaillais.',answer:'We were watching TV while you were working.',hint:'pendant que = while + past continuous',explanation:'Two simultaneous past actions.'},
  {id:'pc_2_06',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'I was cooking dinner when you called.',answer:'I was cooking dinner when you called.',hint:'was + cooking',explanation:'"Was cooking" = action en cours interrompue.'},
  {id:'pc_2_07',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'They were playing in the garden all afternoon.',answer:'They were playing in the garden all afternoon.',hint:'were + playing',explanation:'"Were playing."'},
  {id:'pc_2_08',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'She was not feeling well yesterday morning.',answer:'She was not feeling well yesterday morning.',hint:'was not feeling',explanation:'"Was not feeling" = négatif passé continu.'},
  {id:'pc_2_09',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'What were you doing at seven last night?',answer:'What were you doing at seven last night?',hint:'were + doing',explanation:'"What were you doing...?"'},
  {id:'pc_2_10',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'We were travelling when it started to rain.',answer:'We were travelling when it started to rain.',hint:'were + travelling',explanation:'"Were travelling" = action en cours interrompue.'},
  {id:'pc_2_11',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['doing','were','you','What','yesterday','?'],answer:'What were you doing yesterday?',hint:'What + were + sujet + -ing',explanation:'"What were you doing yesterday?"'},
  {id:'pc_2_12',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['was','studying','She','when','arrived','I'],answer:'She was studying when I arrived.',hint:'was + studying',explanation:'"She was studying when I arrived."'},
  {id:'pc_2_13',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['were','all','They','night','working'],answer:'They were working all night.',hint:'were + working',explanation:'"They were working all night."'},
  {id:'pc_2_14',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['was','It','when','raining','we','left'],answer:'It was raining when we left.',hint:'was + raining',explanation:'"It was raining when we left."'},
  {id:'pc_2_15',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['were','listening','not','They','carefully'],answer:'They were not listening carefully.',hint:'were + not + listening',explanation:'"They were not listening carefully."'},
  // Level 3 (+7)
  {id:'pc_3_01',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'was doing',example:'I was doing my homework when my mother called.',hint:'action en cours au passé',explanation:'"Was doing" = action en cours interrompue.'},
  {id:'pc_3_02',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'were playing',example:'They were playing music when I arrived.',hint:'action simultanée dans le passé',explanation:'"Were playing" = action simultanée au passé.'},
  {id:'pc_3_03',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'He were watching TV last night.',answer:'He was watching TV last night.',hint:'he = singulier → was',explanation:'"He was watching" — singulier.'},
  {id:'pc_3_04',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'I was study when she called.',answer:'I was studying when she called.',hint:'was + verbe-ing (pas infinitif)',explanation:'"Was studying" = was + -ing.'},
  {id:'pc_3_05',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'They were talking about the exam.',answer:"Ils parlaient de l'examen.",hint:'were talking = imparfait',explanation:'"Were talking" = imparfait en français.'},
  {id:'pc_3_06',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'She was writing a letter when the power went out.',answer:"Elle écrivait une lettre quand la lumière s'est éteinte.",alternatives:["Elle rédigeait une lettre quand l'électricité a coupé."],hint:'was writing = écrivait',explanation:'"Was writing" = imparfait.'},
  {id:'pc_3_07',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'I was reading a book when my sister came in and started talking loudly.',question:'Que faisait la personne avant interruption ?',answer:'She was reading a book.',alternatives:['Reading a book.'],hint:'Écoutez la première action',explanation:'"Was reading" = action interrompue.'}
);

// ─── PRESENT PERFECT ────────────────────────────────────────────────────────
exercises.presentPerfect.push(
  // Level 1 (+15)
  {id:'pp_1_01',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'I ___ never seen snow.',options:['have','has','had','am'],answer:'have',hint:'I → have',explanation:'"I have never seen" — have + participe passé.'},
  {id:'pp_1_02',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'She ___ already eaten lunch.',options:['have','has','had','is'],answer:'has',hint:'she = singulier → has',explanation:'"She has already eaten."'},
  {id:'pp_1_03',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'We ___ just arrived.',options:['have','has','had','are'],answer:'have',hint:'we → have',explanation:'"We have just arrived."'},
  {id:'pp_1_04',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'He ___ not finished his work yet.',options:['have','has','had','did'],answer:'has',hint:'he → has',explanation:'"He has not finished yet."'},
  {id:'pp_1_05',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'They ___ lived here for ten years.',options:['have','has','had','are'],answer:'have',hint:'they → have',explanation:'"They have lived here for ten years."'},
  {id:'pp_1_06',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'___ you ever visited London?',options:['Have','Has','Did','Are'],answer:'Have',hint:'you → Have',explanation:'"Have you ever visited...?"'},
  {id:'pp_1_07',type:'fill-blank',diffLevel:1,instruction:'Complétez avec have/has.',template:'I ___ known him since 2010.',answer:'have',hint:'I → have',explanation:'"I have known him since 2010."'},
  {id:'pp_1_08',type:'fill-blank',diffLevel:1,instruction:'Complétez avec have/has.',template:'She ___ never tried sushi.',answer:'has',hint:'she → has',explanation:'"She has never tried sushi."'},
  {id:'pp_1_09',type:'fill-blank',diffLevel:1,instruction:'Complétez avec have/has.',template:'They ___ just left the office.',answer:'have',hint:'they → have',explanation:'"They have just left."'},
  {id:'pp_1_10',type:'fill-blank',diffLevel:1,instruction:'Complétez avec have/has.',template:'He ___ already done his homework.',answer:'has',hint:'he → has',explanation:'"He has already done."'},
  {id:'pp_1_11',type:'fill-blank',diffLevel:1,instruction:'Complétez avec have/has.',template:'We ___ lived here for five years.',answer:'have',hint:'we → have',explanation:'"We have lived here for five years."'},
  {id:'pp_1_12',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['ever','Have','you','been','to','Paris','?'],answer:'Have you ever been to Paris?',hint:'Have + sujet + ever + participe',explanation:'"Have you ever been to Paris?"'},
  {id:'pp_1_13',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['has','just','She','arrived'],answer:'She has just arrived.',hint:'has + just + participe',explanation:'"She has just arrived."'},
  {id:'pp_1_14',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['never','I','seen','have','that','film'],answer:'I have never seen that film.',hint:'have + never + participe',explanation:'"I have never seen that film."'},
  {id:'pp_1_15',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['finished','He','not','has','yet'],answer:'He has not finished yet.',hint:'has + not + participe + yet',explanation:'"He has not finished yet."'},
  // Level 2 (+15)
  {id:'pp_2_01',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"J'ai déjà mangé.",answer:'I have already eaten.',alternatives:["I've already eaten."],hint:'déjà → already',explanation:'"Have already eaten" — present perfect.'},
  {id:'pp_2_02',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"Elle n'a jamais vu la mer.",answer:'She has never seen the sea.',hint:'jamais → never',explanation:'"Has never seen" — present perfect négatif.'},
  {id:'pp_2_03',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Ils viennent juste d\'arriver.',answer:'They have just arrived.',alternatives:["They've just arrived."],hint:'viennent de → have just',explanation:'"Have just arrived."'},
  {id:'pp_2_04',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Tu as déjà visité Madagascar ?',answer:'Have you ever visited Madagascar?',hint:'as-tu déjà → have you ever',explanation:'"Have you ever visited...?"'},
  {id:'pp_2_05',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Nous vivons ici depuis deux ans.',answer:'We have lived here for two years.',alternatives:["We've lived here for two years."],hint:'depuis + durée → for',explanation:'"Have lived for" — present perfect + for.'},
  {id:'pp_2_06',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'I have never eaten Japanese food.',answer:'I have never eaten Japanese food.',hint:'have + never + participe',explanation:'"Have never eaten."'},
  {id:'pp_2_07',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'She has already finished her homework.',answer:'She has already finished her homework.',hint:'has + already + participe',explanation:'"Has already finished."'},
  {id:'pp_2_08',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'Have you ever met a famous person?',answer:'Have you ever met a famous person?',hint:'Have + you + ever + participe',explanation:'"Have you ever met...?"'},
  {id:'pp_2_09',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'We have lived in this city for ten years.',answer:'We have lived in this city for ten years.',hint:'have + lived + for',explanation:'"Have lived for ten years."'},
  {id:'pp_2_10',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'He has just called me.',answer:'He has just called me.',hint:'has + just + participe',explanation:'"Has just called."'},
  {id:'pp_2_11',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['ever','you','Have','eaten','sushi','?'],answer:'Have you ever eaten sushi?',hint:'Have + ever + participe',explanation:'"Have you ever eaten sushi?"'},
  {id:'pp_2_12',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['has','just','She','the','exam','passed'],answer:'She has just passed the exam.',hint:'has + just + participe',explanation:'"She has just passed the exam."'},
  {id:'pp_2_13',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['never','He','been','has','abroad'],answer:'He has never been abroad.',hint:'has + never + participe',explanation:'"He has never been abroad."'},
  {id:'pp_2_14',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['for','lived','They','years','five','here','have'],answer:'They have lived here for five years.',hint:'have + participe + for + durée',explanation:'"They have lived here for five years."'},
  {id:'pp_2_15',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['finished','has','already','She','her','work'],answer:'She has already finished her work.',hint:'has + already + participe',explanation:'"She has already finished her work."'},
  // Level 3 (+7)
  {id:'pp_3_01',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'have never',example:'I have never climbed a mountain.',hint:'"have never" + participe passé',explanation:'"Have never" = jamais fait quelque chose.'},
  {id:'pp_3_02',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'has just',example:'She has just received some great news.',hint:'"has just" + participe passé',explanation:'"Has just" = vient de faire.'},
  {id:'pp_3_03',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'I have see that movie before.',answer:'I have seen that movie before.',hint:'participe passé de see = seen',explanation:'"Have seen" — participe passé irrégulier.'},
  {id:'pp_3_04',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'She has went to Paris last year.',answer:'She went to Paris last year.',hint:'last year = passé précis → past simple',explanation:'"Last year" = date précise → past simple "went".'},
  {id:'pp_3_05',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'He has lived in France for three years.',answer:'Il vit en France depuis trois ans.',hint:'for = depuis + durée',explanation:'Present perfect + for = "depuis" en français.'},
  {id:'pp_3_06',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'Have they arrived yet?',answer:'Sont-ils déjà arrivés ?',alternatives:['Ont-ils déjà arrive ?'],hint:'Have they...? = Sont-ils...?',explanation:'"Have they arrived yet?" = "Sont-ils déjà arrivés?"'},
  {id:'pp_3_07',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'I have visited five countries but I have never been to Asia.',question:"A-t-il visité l'Asie ?",answer:'No, he has never been to Asia.',alternatives:['No.','Never.'],hint:'Écoutez "never"',explanation:'"Has never been to Asia" = jamais visité l\'Asie.'}
);

// ─── PAST PERFECT ───────────────────────────────────────────────────────────
exercises.pastPerfect.push(
  // Level 1 (+15)
  {id:'ppt_1_01',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'By the time I arrived, she ___ already left.',options:['had','have','was','did'],answer:'had',hint:'avant un autre passé → had',explanation:'"Had left" = action avant une autre action passée.'},
  {id:'ppt_1_02',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'He ___ never eaten sushi before that day.',options:['had','have','was','did'],answer:'had',hint:'before → had + participe',explanation:'"Had never eaten" avant ce moment.'},
  {id:'ppt_1_03',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'They ___ finished the work before I called.',options:['had','have','were','did'],answer:'had',hint:'before → past perfect',explanation:'"Had finished" avant l\'appel.'},
  {id:'ppt_1_04',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'We ___ just started when it began to rain.',options:['had','have','was','were'],answer:'had',hint:'just → had just',explanation:'"Had just started."'},
  {id:'ppt_1_05',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'She ___ not met him before the party.',options:['had','have','was','did'],answer:'had',hint:'before = avant → past perfect',explanation:'"Had not met" = ne l\'avait pas rencontré.'},
  {id:'ppt_1_06',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'___ you visited Paris before 2020?',options:['Had','Have','Did','Were'],answer:'Had',hint:'Question past perfect = Had + sujet?',explanation:'"Had you visited...?" = question past perfect.'},
  {id:'ppt_1_07',type:'fill-blank',diffLevel:1,instruction:'Complétez avec had + participe.',template:'By 8pm, I ___ already eaten.',answer:'had already eaten',hint:'had + already + participe',explanation:'"Had already eaten."'},
  {id:'ppt_1_08',type:'fill-blank',diffLevel:1,instruction:'Complétez avec had + participe.',template:'She ___ never seen such a big city.',answer:'had never seen',hint:'had + never + participe',explanation:'"Had never seen."'},
  {id:'ppt_1_09',type:'fill-blank',diffLevel:1,instruction:'Complétez avec had + participe.',template:'He ___ finished the book before the exam.',answer:'had finished',hint:'before → past perfect',explanation:'"Had finished before."'},
  {id:'ppt_1_10',type:'fill-blank',diffLevel:1,instruction:'Complétez avec had + participe.',template:'They ___ left by the time we arrived.',answer:'had left',hint:'by the time → past perfect',explanation:'"Had left" avant notre arrivée.'},
  {id:'ppt_1_11',type:'fill-blank',diffLevel:1,instruction:'Complétez avec had + participe.',template:'I ___ never heard that song before.',answer:'had never heard',hint:'never before → past perfect',explanation:'"Had never heard."'},
  {id:'ppt_1_12',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['arrived','By','I','she','the','had','left','time'],answer:'By the time I arrived, she had left.',hint:'By the time + past simple, had + participe',explanation:'"By the time I arrived, she had left."'},
  {id:'ppt_1_13',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['already','eaten','had','He','dinner'],answer:'He had already eaten dinner.',hint:'had + already + participe',explanation:'"He had already eaten dinner."'},
  {id:'ppt_1_14',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['not','We','had','met','before'],answer:'We had not met before.',hint:'had + not + participe',explanation:'"We had not met before."'},
  {id:'ppt_1_15',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['finished','Had','she','her','work','?'],answer:'Had she finished her work?',hint:'Had + sujet + participe?',explanation:'"Had she finished her work?"'},
  // Level 2 (+15)
  {id:'ppt_2_01',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"Quand je suis arrivé, elle était déjà partie.",answer:'When I arrived, she had already left.',hint:'elle était partie → she had left',explanation:'"Had left" = plus-que-parfait.'},
  {id:'ppt_2_02',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"Il n'avait jamais vu la mer avant ce voyage.",answer:'He had never seen the sea before that trip.',hint:'il n\'avait jamais → he had never',explanation:'"Had never seen" = jamais vu avant ce moment.'},
  {id:'ppt_2_03',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Ils avaient fini leur travail avant la réunion.',answer:'They had finished their work before the meeting.',hint:'ils avaient fini → they had finished',explanation:'"Had finished before the meeting."'},
  {id:'ppt_2_04',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Avais-tu déjà visité Paris avant cette fois ?',answer:'Had you visited Paris before that time?',alternatives:['Had you been to Paris before?'],hint:'avais-tu → had you',explanation:'"Had you visited...?"'},
  {id:'ppt_2_05',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"Nous venions juste de commencer quand il a plu.",answer:'We had just started when it rained.',hint:'nous venions de → we had just',explanation:'"Had just started when it rained."'},
  {id:'ppt_2_06',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'She had already eaten when I arrived.',answer:'She had already eaten when I arrived.',hint:'had + already + participe',explanation:'"Had already eaten."'},
  {id:'ppt_2_07',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'Had you met him before the party?',answer:'Had you met him before the party?',hint:'Had + sujet + participe?',explanation:'"Had you met him before the party?"'},
  {id:'ppt_2_08',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'They had not finished the project by Friday.',answer:'They had not finished the project by Friday.',hint:'had + not + participe',explanation:'"Had not finished by Friday."'},
  {id:'ppt_2_09',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'He had never tried coffee before that day.',answer:'He had never tried coffee before that day.',hint:'had + never + participe',explanation:'"Had never tried."'},
  {id:'ppt_2_10',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'By the time we arrived the film had started.',answer:'By the time we arrived the film had started.',hint:'by the time → past perfect',explanation:'"Had started" avant notre arrivée.'},
  {id:'ppt_2_11',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['arrived','she','By','the','time','had','I','left'],answer:'By the time I arrived, she had left.',hint:'By the time + past simple, had + participe',explanation:'"By the time I arrived, she had left."'},
  {id:'ppt_2_12',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['never','He','had','flown','before'],answer:'He had never flown before.',hint:'had + never + participe',explanation:'"He had never flown before."'},
  {id:'ppt_2_13',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['already','started','Had','the','film','?'],answer:'Had the film already started?',hint:'Had + sujet + already + participe?',explanation:'"Had the film already started?"'},
  {id:'ppt_2_14',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['finished','had','They','eating','when','arrived','we'],answer:'They had finished eating when we arrived.',hint:'had + participe + when',explanation:'"They had finished eating when we arrived."'},
  {id:'ppt_2_15',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['not','had','the','We','key','forgotten'],answer:'We had not forgotten the key.',hint:'had + not + participe',explanation:'"We had not forgotten the key."'},
  // Level 3 (+7)
  {id:'ppt_3_01',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'had already',example:'She had already left when I called.',hint:'"had already" + participe passé',explanation:'"Had already" = déjà fait avant un autre passé.'},
  {id:'ppt_3_02',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'had never',example:'He had never seen such a beautiful place.',hint:'"had never" + participe passé',explanation:'"Had never" = jamais fait avant ce moment.'},
  {id:'ppt_3_03',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'I have seen that film before you arrived.',answer:'I had seen that film before you arrived.',hint:'avant un passé → had, pas have',explanation:'"Had seen" — past perfect, pas present perfect.'},
  {id:'ppt_3_04',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'She had went to Paris before the trip.',answer:'She had gone to Paris before the trip.',hint:'participe passé de go = gone',explanation:'"Had gone" — participe irrégulier.'},
  {id:'ppt_3_05',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'We had finished dinner before they arrived.',answer:"Nous avions fini le dîner avant leur arrivée.",hint:'had finished = avions fini',explanation:'"Had finished" = plus-que-parfait.'},
  {id:'ppt_3_06',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'He had already spoken to her.',answer:'Il lui avait déjà parlé.',hint:'had spoken = avait parlé',explanation:'"Had spoken" = plus-que-parfait.'},
  {id:'ppt_3_07',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'By the time the ambulance arrived the doctor had already treated the patient.',question:'Qui avait traité le patient en premier ?',answer:'The doctor had already treated the patient.',alternatives:['The doctor.'],hint:'Écoutez "had already"',explanation:'"Had already treated" = action avant l\'ambulance.'}
);

// ─── TIME MARKERS ───────────────────────────────────────────────────────────
exercises.timeMarkers.push(
  // Level 1 (+15)
  {id:'tm_1_01',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon marqueur temporel.',question:'I have ___ finished my homework.',options:['already','yet','since','for'],answer:'already',hint:'action complète avant maintenant → already',explanation:'"Already" = déjà (action déjà faite).'},
  {id:'tm_1_02',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon marqueur temporel.',question:'Have you eaten lunch ___?',options:['already','yet','since','for'],answer:'yet',hint:'question ou négatif → yet',explanation:'"Yet" = encore/déjà (dans questions et négatifs).'},
  {id:'tm_1_03',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon marqueur temporel.',question:'She ___ lives here — she has not moved.',options:['already','yet','still','just'],answer:'still',hint:'situation qui continue → still',explanation:'"Still" = toujours (situation continue).'},
  {id:'tm_1_04',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon marqueur temporel.',question:'He left ten minutes ___.',options:['ago','since','for','yet'],answer:'ago',hint:'durée + ago = il y a ...',explanation:'"Ago" = il y a (passé simple).'},
  {id:'tm_1_05',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon marqueur temporel.',question:'She has been sick ___ Monday.',options:['since','for','ago','yet'],answer:'since',hint:'point de départ précis → since',explanation:'"Since" = depuis un moment précis.'},
  {id:'tm_1_06',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon marqueur temporel.',question:'We have been waiting ___ two hours.',options:['since','for','ago','yet'],answer:'for',hint:'durée → for',explanation:'"For" = depuis une durée.'},
  {id:'tm_1_07',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon marqueur.',template:'I have ___ arrived — I am at the door.',answer:'just',hint:'vient de se passer → just',explanation:'"Just" = vient de (action très récente).'},
  {id:'tm_1_08',type:'fill-blank',diffLevel:1,instruction:'Complétez avec yet ou already.',template:'Have you finished ___?',answer:'yet',hint:'question → yet',explanation:'"Yet" dans les questions = déjà?'},
  {id:'tm_1_09',type:'fill-blank',diffLevel:1,instruction:'Complétez avec still ou yet.',template:'She ___ studies every night.',answer:'still',hint:'habitude continue → still',explanation:'"Still" = toujours, continue à.'},
  {id:'tm_1_10',type:'fill-blank',diffLevel:1,instruction:'Complétez avec ago ou since.',template:'He left ten minutes ___.',answer:'ago',hint:'durée + ago = il y a',explanation:'"Ten minutes ago" = il y a dix minutes.'},
  {id:'tm_1_11',type:'fill-blank',diffLevel:1,instruction:'Complétez avec for ou since.',template:'They have known each other ___ 2015.',answer:'since',hint:'point de départ → since',explanation:'"Since 2015" = depuis 2015 (point précis).'},
  {id:'tm_1_12',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['already','have','finished','I'],answer:'I have already finished.',hint:'have + already + participe',explanation:'"Already" entre have et le participe.'},
  {id:'tm_1_13',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['yet','you','Have','eaten','?'],answer:'Have you eaten yet?',hint:'yet en fin de phrase → question',explanation:'"Have you eaten yet?" = tu as déjà mangé?'},
  {id:'tm_1_14',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['been','waiting','We','since','have','morning'],answer:'We have been waiting since morning.',hint:'have been + -ing + since',explanation:'"Since morning" = depuis ce matin.'},
  {id:'tm_1_15',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['arrived','just','He','has'],answer:'He has just arrived.',hint:'has + just + participe',explanation:'"He has just arrived."'},
  // Level 2 (+15)
  {id:'tm_2_01',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Je viens de finir mes devoirs.',answer:'I have just finished my homework.',alternatives:["I've just finished my homework."],hint:'viens de → have just',explanation:'"Just" = vient de faire.'},
  {id:'tm_2_02',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'As-tu déjà mangé ?',answer:'Have you eaten yet?',alternatives:['Have you already eaten?'],hint:'déjà (question) → yet / already',explanation:'"Have you eaten yet?"'},
  {id:'tm_2_03',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"Elle habite ici depuis 2010.",answer:'She has lived here since 2010.',hint:'depuis + date → since',explanation:'"Since 2010" = depuis 2010.'},
  {id:'tm_2_04',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"Il y a dix ans, j'étais à l'école.",answer:'Ten years ago, I was at school.',hint:'il y a → ago + past simple',explanation:'"Ago" + past simple = il y a.'},
  {id:'tm_2_05',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Il travaille ici depuis cinq ans.',answer:'He has worked here for five years.',alternatives:["He's worked here for five years."],hint:'depuis + durée → for',explanation:'"For five years" = depuis cinq ans (durée).'},
  {id:'tm_2_06',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'I have already seen that film.',answer:'I have already seen that film.',hint:'already entre have et participe',explanation:'"Have already seen."'},
  {id:'tm_2_07',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'She has been ill since Monday.',answer:'She has been ill since Monday.',hint:'since + point précis',explanation:'"Since Monday."'},
  {id:'tm_2_08',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'Have you finished your work yet?',answer:'Have you finished your work yet?',hint:'yet en fin',explanation:'"Have you finished yet?"'},
  {id:'tm_2_09',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'He left ten minutes ago.',answer:'He left ten minutes ago.',hint:'ago + past simple',explanation:'"Ten minutes ago."'},
  {id:'tm_2_10',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'They have lived here for three years.',answer:'They have lived here for three years.',hint:'for + durée',explanation:'"For three years."'},
  {id:'tm_2_11',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['ten','ago','years','He','was','born'],answer:'He was born ten years ago.',hint:'durée + ago + past simple',explanation:'"Ten years ago."'},
  {id:'tm_2_12',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['yet','not','have','finished','I'],answer:'I have not finished yet.',hint:'yet en fin, négatif',explanation:'"I have not finished yet."'},
  {id:'tm_2_13',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['since','have','We','known','each','other','2018'],answer:'We have known each other since 2018.',hint:'since + date',explanation:'"Since 2018."'},
  {id:'tm_2_14',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['still','working','She','is'],answer:'She is still working.',hint:'still entre is et le verbe',explanation:'"Still working" = toujours en train de travailler.'},
  {id:'tm_2_15',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['just','arrived','has','He'],answer:'He has just arrived.',hint:'has + just + participe',explanation:'"He has just arrived."'},
  // Level 3 (+7)
  {id:'tm_3_01',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'since',example:'She has been a teacher since 2015.',hint:'"since" + moment précis',explanation:'"Since" = depuis un point précis dans le temps.'},
  {id:'tm_3_02',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'already',example:'I have already read that book twice.',hint:'"already" entre have et le participe',explanation:'"Already" = déjà accompli.'},
  {id:'tm_3_03',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'I have been waiting since two hours.',answer:'I have been waiting for two hours.',hint:'durée → for, pas since',explanation:'"For" + durée. "Since" + point précis.'},
  {id:'tm_3_04',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'She has left already ten minutes ago.',answer:'She left ten minutes ago.',hint:'"ago" = past simple, pas present perfect',explanation:'"Ago" avec le past simple uniquement.'},
  {id:'tm_3_05',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'He has been studying English for three years.',answer:"Il étudie l'anglais depuis trois ans.",hint:'for = depuis + durée',explanation:'Present perfect + for = "depuis" en français.'},
  {id:'tm_3_06',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'Have they arrived yet?',answer:'Sont-ils déjà arrivés ?',hint:'Have they...yet? = Sont-ils déjà...?',explanation:'"Yet" dans les questions = "déjà" en français.'},
  {id:'tm_3_07',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'I have known her since we were children but I have not seen her for two years.',question:'Depuis combien de temps ne se sont-ils pas vus ?',answer:'For two years.',alternatives:['Two years.'],hint:'Écoutez "for"',explanation:'"For two years" = depuis deux ans.'}
);

// ─── CONDITIONALS ──────────────────────────────────────────────────────────
exercises.conditionals.push(
  // Level 1 (+15)
  {id:'cond_1_01',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'If you heat water to 100°C, it ___.',options:['boils','will boil','would boil','boiled'],answer:'boils',hint:'vérité générale → present simple',explanation:'Conditionnel 0 : If + présent, présent.'},
  {id:'cond_1_02',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'If it rains tomorrow, I ___ stay home.',options:['will','would','should','am'],answer:'will',hint:'futur probable → will',explanation:'Conditionnel 1 : If + présent, will + infinitif.'},
  {id:'cond_1_03',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'If I were rich, I ___ travel the world.',options:['will','would','should','could'],answer:'would',hint:'situation irréelle → would',explanation:'Conditionnel 2 : If + past, would + infinitif.'},
  {id:'cond_1_04',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'If she ___ harder, she would pass.',options:['studied','studies','will study','had studied'],answer:'studied',hint:'conditionnel 2 → past simple',explanation:'Conditionnel 2 : "If she studied..."'},
  {id:'cond_1_05',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'If I had known, I ___ told you.',options:['would have','will have','would','had'],answer:'would have',hint:'passé irréel → would have',explanation:'Conditionnel 3 : would have + participe.'},
  {id:'cond_1_06',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'If they leave now, they ___ on time.',options:['will be','would be','are','were'],answer:'will be',hint:'futur probable → will',explanation:'Conditionnel 1 : "If they leave, they will be."'},
  {id:'cond_1_07',type:'fill-blank',diffLevel:1,instruction:'Complétez la phrase.',template:'If you study, you ___ pass the exam.',answer:'will',hint:'conditionnel 1 → will',explanation:'"Will pass" — condition réalisable.'},
  {id:'cond_1_08',type:'fill-blank',diffLevel:1,instruction:'Complétez la phrase.',template:'If I ___ a bird, I would fly.',answer:'were',hint:'conditionnel 2 → were (pour toutes personnes)',explanation:'"If I were" — subjonctif conditionnel 2.'},
  {id:'cond_1_09',type:'fill-blank',diffLevel:1,instruction:'Complétez la phrase.',template:'If it snows, the school ___ close.',answer:'will',hint:'condition probable → will',explanation:'"Will close" — conditionnel 1.'},
  {id:'cond_1_10',type:'fill-blank',diffLevel:1,instruction:'Complétez la phrase.',template:'If he had called, I ___ answered.',answer:'would have',hint:'passé irréel → would have',explanation:'"Would have answered" — conditionnel 3.'},
  {id:'cond_1_11',type:'fill-blank',diffLevel:1,instruction:'Complétez la phrase.',template:'She ___ help if she could.',answer:'would',hint:'conditionnel 2 → would',explanation:'"Would help" — conditionnel 2.'},
  {id:'cond_1_12',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['it','stay','I','home','will','rains','If'],answer:'If it rains, I will stay home.',hint:'If + présent, will + infinitif',explanation:'Conditionnel 1.'},
  {id:'cond_1_13',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['were','I','fly','rich','would','I','if'],answer:'If I were rich, I would fly.',hint:'If + were, would + infinitif',explanation:'Conditionnel 2 — hypothèse irréelle.'},
  {id:'cond_1_14',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['studied','if','he','pass','would','harder','He'],answer:'If he studied harder, he would pass.',hint:'conditionnel 2',explanation:'Conditionnel 2.'},
  {id:'cond_1_15',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['had','known','would','If','she','have','told','him'],answer:'If she had known, she would have told him.',hint:'conditionnel 3',explanation:'Conditionnel 3 — passé irréel.'},
  // Level 2 (+15)
  {id:'cond_2_01',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"Si tu étudies, tu réussiras l'examen.",answer:'If you study, you will pass the exam.',hint:'conditionnel 1 → will',explanation:'Conditionnel 1.'},
  {id:'cond_2_02',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"Si j'étais riche, j'achèterais une maison.",answer:'If I were rich, I would buy a house.',hint:'conditionnel 2 → would',explanation:'Conditionnel 2 — hypothèse irréelle.'},
  {id:'cond_2_03',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"Si elle avait su, elle serait venue.",answer:'If she had known, she would have come.',hint:'conditionnel 3 → would have',explanation:'Conditionnel 3 — passé irréel.'},
  {id:'cond_2_04',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Si tu as faim, mange quelque chose.',answer:'If you are hungry, eat something.',hint:'conditionnel 0 → présent',explanation:'Conditionnel 0 — vérité générale / conseil.'},
  {id:'cond_2_05',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"Si nous partions maintenant, nous arriverions à l'heure.",answer:'If we left now, we would arrive on time.',alternatives:['If we left now, we would be on time.'],hint:'conditionnel 2 → would',explanation:'Conditionnel 2.'},
  {id:'cond_2_06',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'If it rains tomorrow we will cancel the trip.',answer:'If it rains tomorrow we will cancel the trip.',hint:'conditionnel 1',explanation:'"Will cancel" — conditionnel 1.'},
  {id:'cond_2_07',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'If I were you I would apologise.',answer:'If I were you I would apologise.',hint:'conditionnel 2',explanation:'"Would apologise" — conditionnel 2.'},
  {id:'cond_2_08',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'If she had worked harder she would have passed.',answer:'If she had worked harder she would have passed.',hint:'conditionnel 3',explanation:'"Would have passed" — conditionnel 3.'},
  {id:'cond_2_09',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'What would you do if you won the lottery?',answer:'What would you do if you won the lottery?',hint:'conditionnel 2',explanation:'"Would do" — conditionnel 2.'},
  {id:'cond_2_10',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'If you heat ice it melts.',answer:'If you heat ice it melts.',hint:'conditionnel 0',explanation:'"Melts" — vérité générale, conditionnel 0.'},
  {id:'cond_2_11',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['you','would','do','If','what','won','lottery','the'],answer:'What would you do if you won the lottery?',hint:'conditionnel 2 — question',explanation:'Question au conditionnel 2.'},
  {id:'cond_2_12',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['will','If','study','you','you','pass'],answer:'If you study, you will pass.',hint:'conditionnel 1',explanation:'Conditionnel 1.'},
  {id:'cond_2_13',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['have','I','told','had','you','known','If','would'],answer:'If I had known, I would have told you.',hint:'conditionnel 3',explanation:'Conditionnel 3.'},
  {id:'cond_2_14',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['help','him','I','could','if','would'],answer:'I would help him if I could.',hint:'conditionnel 2',explanation:'"I would help him if I could."'},
  {id:'cond_2_15',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['she','If','came','be','happy','would','I'],answer:'If she came, I would be happy.',hint:'conditionnel 2',explanation:'Conditionnel 2.'},
  // Level 3 (+7)
  {id:'cond_3_01',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'If I were',example:'If I were the president, I would build more schools.',hint:'conditionnel 2 — hypothèse irréelle',explanation:'"If I were" = conditionnel 2 (situation imaginaire).'},
  {id:'cond_3_02',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'If I had known',example:'If I had known the truth, I would not have lied.',hint:'conditionnel 3 — passé irréel',explanation:'"If I had known" = conditionnel 3.'},
  {id:'cond_3_03',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'If I will study harder, I will pass.',answer:'If I study harder, I will pass.',hint:'pas de "will" dans la clause if (cond. 1)',explanation:'Conditionnel 1 : "If + présent simple, will..."'},
  {id:'cond_3_04',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'If she would have known, she would have helped.',answer:'If she had known, she would have helped.',hint:'cond. 3 : if + had + participe',explanation:'Conditionnel 3 : "If + had + participe."'},
  {id:'cond_3_05',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'If it rains, the match will be cancelled.',answer:'Si il pleut, le match sera annulé.',alternatives:["S'il pleut, le match sera annulé."],hint:'conditionnel 1 → futur',explanation:'Conditionnel 1 : futur en français.'},
  {id:'cond_3_06',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'She would travel more if she had money.',answer:'Elle voyagerait davantage si elle avait de l\'argent.',hint:'conditionnel 2 → conditionnel présent',explanation:'Conditionnel 2 en français.'},
  {id:'cond_3_07',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'If you exercise every day you will feel better. If I were younger I would run a marathon.',question:'Quel type de conditionnel est la deuxième phrase ?',answer:'Type 2 (second conditional).',alternatives:['Conditional 2.','Second conditional.'],hint:'were + would = conditionnel 2',explanation:'"If I were younger" = conditionnel 2, hypothèse irréelle.'}
);

// ─── PASSIVE VOICE ──────────────────────────────────────────────────────────
exercises.passiveVoice.push(
  // Level 1 (+15)
  {id:'pv_1_01',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'The book ___ written by Shakespeare.',options:['was','is','were','be'],answer:'was',hint:'passé singulier → was',explanation:'Passif passé singulier : was + participe.'},
  {id:'pv_1_02',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'The letters ___ sent every morning.',options:['is','are','was','were'],answer:'are',hint:'pluriel présent → are',explanation:'Passif présent pluriel : are + participe.'},
  {id:'pv_1_03',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'The car ___ stolen last night.',options:['is','are','was','were'],answer:'was',hint:'passé singulier → was',explanation:'Passif passé : was + participe.'},
  {id:'pv_1_04',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'English ___ spoken all over the world.',options:['is','are','was','were'],answer:'is',hint:'présent singulier → is',explanation:'Passif présent singulier : is + participe.'},
  {id:'pv_1_05',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'The cakes ___ made by my mother.',options:['was','were','is','are'],answer:'were',hint:'passé pluriel → were',explanation:'Passif passé pluriel : were + participe.'},
  {id:'pv_1_06',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'This photo ___ taken in 2010.',options:['is','are','was','were'],answer:'was',hint:'passé singulier → was',explanation:'Passif passé singulier.'},
  {id:'pv_1_07',type:'fill-blank',diffLevel:1,instruction:'Complétez avec is/are/was/were.',template:'Rice ___ grown in Madagascar.',answer:'is',hint:'présent singulier → is',explanation:'"Rice is grown" — passif présent.'},
  {id:'pv_1_08',type:'fill-blank',diffLevel:1,instruction:'Complétez avec is/are/was/were.',template:'Many trees ___ cut down every year.',answer:'are',hint:'trees = pluriel → are',explanation:'"Trees are cut down" — passif pluriel.'},
  {id:'pv_1_09',type:'fill-blank',diffLevel:1,instruction:'Complétez avec is/are/was/were.',template:'The bridge ___ built in 1900.',answer:'was',hint:'passé singulier → was',explanation:'"Was built" — passé passif.'},
  {id:'pv_1_10',type:'fill-blank',diffLevel:1,instruction:'Complétez avec is/are/was/were.',template:'The film ___ directed by Spielberg.',answer:'was',hint:'passé singulier → was',explanation:'"Was directed" — passif passé.'},
  {id:'pv_1_11',type:'fill-blank',diffLevel:1,instruction:'Complétez avec is/are/was/were.',template:'These shoes ___ made in Italy.',answer:'are',hint:'shoes = pluriel → are',explanation:'"Shoes are made" — passif présent pluriel.'},
  {id:'pv_1_12',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['was','car','stolen','The'],answer:'The car was stolen.',hint:'sujet + was/were + participe',explanation:'"The car was stolen" — passif passé.'},
  {id:'pv_1_13',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['are','English','world','over','spoken','the','all','and','French'],answer:'English and French are spoken all over the world.',hint:'are + participe',explanation:'Passif présent pluriel.'},
  {id:'pv_1_14',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['was','The','built','1990','in','school'],answer:'The school was built in 1990.',hint:'was + participe',explanation:'"The school was built in 1990."'},
  {id:'pv_1_15',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['letter','sent','been','The','has'],answer:'The letter has been sent.',hint:'has + been + participe (present perfect passif)',explanation:'"Has been sent" — passif present perfect.'},
  // Level 2 (+15)
  {id:'pv_2_01',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'La voiture a été volée hier soir.',answer:'The car was stolen last night.',hint:'a été volée → was stolen',explanation:'Passif passé.'},
  {id:'pv_2_02',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Le riz est cultivé dans de nombreux pays.',answer:'Rice is grown in many countries.',hint:'est cultivé → is grown',explanation:'Passif présent.'},
  {id:'pv_2_03',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Ce livre a été écrit par un auteur célèbre.',answer:'This book was written by a famous author.',hint:'a été écrit → was written',explanation:'Passif passé + by.'},
  {id:'pv_2_04',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"L'école sera construite l'année prochaine.",answer:'The school will be built next year.',hint:'sera construite → will be built',explanation:'Passif futur : will be + participe.'},
  {id:'pv_2_05',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Les fenêtres ont été cassées par le vent.',answer:'The windows were broken by the wind.',hint:'ont été cassées → were broken',explanation:'Passif passé pluriel.'},
  {id:'pv_2_06',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'The letter was sent this morning.',answer:'The letter was sent this morning.',hint:'was + participe',explanation:'Passif passé.'},
  {id:'pv_2_07',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'English is spoken in many countries.',answer:'English is spoken in many countries.',hint:'is + participe',explanation:'Passif présent.'},
  {id:'pv_2_08',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'The bridge was built over a hundred years ago.',answer:'The bridge was built over a hundred years ago.',hint:'was + participe',explanation:'Passif passé + ago.'},
  {id:'pv_2_09',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'The match was cancelled because of the rain.',answer:'The match was cancelled because of the rain.',hint:'was + participe',explanation:'Passif passé.'},
  {id:'pv_2_10',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'A new hospital is being built in the city.',answer:'A new hospital is being built in the city.',hint:'is being + participe = passif présent continu',explanation:'"Is being built" — passif présent continu.'},
  {id:'pv_2_11',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['was','discovered','America','by','Columbus'],answer:'America was discovered by Columbus.',hint:'sujet + was + participe + by',explanation:'"America was discovered by Columbus."'},
  {id:'pv_2_12',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['is','French','Madagascar','spoken','in'],answer:'French is spoken in Madagascar.',hint:'is + participe',explanation:'"French is spoken in Madagascar."'},
  {id:'pv_2_13',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['damaged','was','storm','The','house','in','the'],answer:'The house was damaged in the storm.',hint:'was + participe',explanation:'"The house was damaged in the storm."'},
  {id:'pv_2_14',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['will','be','The','tomorrow','finished','work'],answer:'The work will be finished tomorrow.',hint:'will + be + participe',explanation:'Passif futur.'},
  {id:'pv_2_15',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['been','The','stolen','has','bicycle'],answer:'The bicycle has been stolen.',hint:'has + been + participe',explanation:'Passif present perfect.'},
  // Level 3 (+7)
  {id:'pv_3_01',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'was built',example:'The Eiffel Tower was built in 1889.',hint:'was + participe passé',explanation:'Passif passé pour décrire une construction.'},
  {id:'pv_3_02',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'is spoken',example:'English is spoken by millions of people.',hint:'is + participe passé',explanation:'Passif présent pour une vérité générale.'},
  {id:'pv_3_03',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'The book was wrote by Tolstoy.',answer:'The book was written by Tolstoy.',hint:'participe de write = written',explanation:'"Written" = participe passé de "write".'},
  {id:'pv_3_04',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'English is speak in many countries.',answer:'English is spoken in many countries.',hint:'passif = is + participe',explanation:'"Is spoken" — participe passif.'},
  {id:'pv_3_05',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'The road is being repaired.',answer:'La route est en train d\'être réparée.',alternatives:['On répare la route.'],hint:'is being repaired = en cours',explanation:'Passif présent continu.'},
  {id:'pv_3_06',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'The criminal was caught by the police.',answer:'Le criminel a été arrêté par la police.',hint:'was caught = a été arrêté',explanation:'Passif passé en français.'},
  {id:'pv_3_07',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'The Mona Lisa was painted by Leonardo da Vinci and is kept in the Louvre Museum in Paris.',question:'Par qui la Joconde a-t-elle été peinte ?',answer:'By Leonardo da Vinci.',alternatives:['Leonardo da Vinci.'],hint:'Écoutez "painted by"',explanation:'"Was painted by Leonardo da Vinci."'}
);

// ─── REPORTED SPEECH ────────────────────────────────────────────────────────
exercises.reportedSpeech.push(
  // Level 1 (+15)
  {id:'rs_1_01',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'"I am tired." → He said he ___ tired.',options:['was','is','were','be'],answer:'was',hint:'am → was (backshifting)',explanation:'"Am" devient "was" au discours indirect.'},
  {id:'rs_1_02',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'"I will help." → She said she ___ help.',options:['would','will','could','should'],answer:'would',hint:'will → would',explanation:'"Will" devient "would" au discours indirect.'},
  {id:'rs_1_03',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'"I can swim." → She said she ___ swim.',options:['could','can','would','should'],answer:'could',hint:'can → could',explanation:'"Can" devient "could" au discours indirect.'},
  {id:'rs_1_04',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'"I ate lunch." → He said he ___ eaten lunch.',options:['had','has','have','did'],answer:'had',hint:'past simple → past perfect',explanation:'Past simple devient past perfect au discours indirect.'},
  {id:'rs_1_05',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'"Do you like coffee?" → He asked if I ___ coffee.',options:['liked','like','liking','likes'],answer:'liked',hint:'present simple → past simple',explanation:'"Like" devient "liked" au discours indirect.'},
  {id:'rs_1_06',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'"Where do you live?" → She asked where I ___.',options:['lived','live','living','lives'],answer:'lived',hint:'présent → passé',explanation:'"Live" devient "lived" au discours indirect.'},
  {id:'rs_1_07',type:'fill-blank',diffLevel:1,instruction:'Transformez au discours indirect.',template:'"I am happy." → She said she ___ happy.',answer:'was',hint:'am → was',explanation:'"Am" → "was" (backshifting).'},
  {id:'rs_1_08',type:'fill-blank',diffLevel:1,instruction:'Transformez au discours indirect.',template:'"I will call you." → He said he ___ call me.',answer:'would',hint:'will → would',explanation:'"Will" → "would".'},
  {id:'rs_1_09',type:'fill-blank',diffLevel:1,instruction:'Transformez au discours indirect.',template:'"I can drive." → She said she ___ drive.',answer:'could',hint:'can → could',explanation:'"Can" → "could".'},
  {id:'rs_1_10',type:'fill-blank',diffLevel:1,instruction:'Transformez au discours indirect.',template:'"I have finished." → He said he ___ finished.',answer:'had',hint:'present perfect → past perfect',explanation:'"Have finished" → "had finished".'},
  {id:'rs_1_11',type:'fill-blank',diffLevel:1,instruction:'Transformez au discours indirect.',template:'"I like music." → She said she ___ music.',answer:'liked',hint:'like → liked',explanation:'"Like" → "liked".'},
  {id:'rs_1_12',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['said','tired','she','She','was'],answer:'She said she was tired.',hint:'said + she + was',explanation:'Discours indirect : said (that) she was.'},
  {id:'rs_1_13',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['asked','I','liked','he','if','coffee'],answer:'He asked if I liked coffee.',hint:'asked + if + sujet + passé',explanation:'Question indirecte : asked if I liked.'},
  {id:'rs_1_14',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['said','would','She','me','she','help'],answer:'She said she would help me.',hint:'said + she + would',explanation:'"Will" → "would" au discours indirect.'},
  {id:'rs_1_15',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['where','asked','He','I','lived'],answer:'He asked where I lived.',hint:'asked + where + sujet + passé',explanation:'Question indirecte avec "where".'},
  // Level 2 (+15)
  {id:'rs_2_01',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'"Je suis fatigué," dit-il.',answer:'He said he was tired.',alternatives:['He said that he was tired.'],hint:'il dit → he said + he was',explanation:'Am → was (backshifting).'},
  {id:'rs_2_02',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'"J\'irai à Paris," dit-elle.',answer:'She said she would go to Paris.',alternatives:['She said that she would go to Paris.'],hint:'will → would',explanation:'"Will go" → "would go".'},
  {id:'rs_2_03',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'"Je peux nager," dit-il.',answer:'He said he could swim.',hint:'can → could',explanation:'"Can swim" → "could swim".'},
  {id:'rs_2_04',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'"Aimes-tu le café ?" demanda-t-il.',answer:'He asked if I liked coffee.',alternatives:['He asked whether I liked coffee.'],hint:'demanda si → asked if',explanation:'Question indirecte : asked if + past simple.'},
  {id:'rs_2_05',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'"Où habitez-vous ?" demanda-t-elle.',answer:'She asked where I lived.',alternatives:['She asked where we lived.'],hint:'demanda où → asked where',explanation:'Question indirecte avec where.'},
  {id:'rs_2_06',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'He said he was feeling sick that day.',answer:'He said he was feeling sick that day.',hint:'said + he + was',explanation:'Discours indirect : présent → passé.'},
  {id:'rs_2_07',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'She told me she would call later.',answer:'She told me she would call later.',hint:'told + me + she + would',explanation:'"Will" → "would" au discours indirect.'},
  {id:'rs_2_08',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'He asked if I had eaten lunch.',answer:'He asked if I had eaten lunch.',hint:'asked if + past perfect',explanation:'Question indirecte au past perfect.'},
  {id:'rs_2_09',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'They said they could not come to the party.',answer:'They said they could not come to the party.',hint:'said + they + could not',explanation:'"Cannot" → "could not".'},
  {id:'rs_2_10',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'She asked where I was going.',answer:'She asked where I was going.',hint:'asked where + passé',explanation:'Question indirecte : asked where.'},
  {id:'rs_2_11',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['said','she','tired','She','was'],answer:'She said she was tired.',hint:'said + she + was',explanation:'Am → was.'},
  {id:'rs_2_12',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['asked','he','she','where','going','was'],answer:'He asked where she was going.',hint:'asked + where + sujet + was + -ing',explanation:'Question indirecte avec where.'},
  {id:'rs_2_13',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['would','She','she','help','said','me'],answer:'She said she would help me.',hint:'said + she + would',explanation:'"Will" → "would".'},
  {id:'rs_2_14',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['could','He','he','said','swim'],answer:'He said he could swim.',hint:'said + he + could',explanation:'"Can" → "could".'},
  {id:'rs_2_15',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['asked','they','if','coming','were','They'],answer:'They asked if they were coming.',hint:'asked if + sujet + were + -ing',explanation:'Question indirecte : asked if.'},
  // Level 3 (+7)
  {id:'rs_3_01',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'said that',example:'She said that she was very happy to be there.',hint:'"said that" + phrase au passé',explanation:'"Said that" introduit le discours indirect.'},
  {id:'rs_3_02',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'asked if',example:'He asked if I had finished my homework.',hint:'"asked if" + phrase au passé',explanation:'"Asked if" pour les questions oui/non.'},
  {id:'rs_3_03',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'He said he is tired.',answer:'He said he was tired.',hint:'am/is → was (backshifting)',explanation:'Discours indirect : présent → passé.'},
  {id:'rs_3_04',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'She said she will help me.',answer:'She said she would help me.',hint:'will → would',explanation:'"Will" → "would" au discours indirect.'},
  {id:'rs_3_05',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'She said she had never been to France.',answer:"Elle a dit qu'elle n'était jamais allée en France.",hint:'had never been = n\'était jamais allée',explanation:'Past perfect → plus-que-parfait en français.'},
  {id:'rs_3_06',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'He asked me if I liked classical music.',answer:"Il m'a demandé si j'aimais la musique classique.",hint:'asked if = a demandé si',explanation:'Question indirecte en français.'},
  {id:'rs_3_07',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'She said she was studying for her exam and that she would come to the party later.',question:"Que faisait-elle quand il a appelé ?",answer:'She was studying for her exam.',alternatives:['She was studying.'],hint:'Écoutez la première action',explanation:'"Was studying" — discours indirect.'}
);

// ─── FUTURE CONTINUOUS ──────────────────────────────────────────────────────
exercises.futureContinuous.push(
  // Level 1 (+15)
  {id:'fc_1_01',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'This time tomorrow, I ___ flying to Paris.',options:['will be','am','would be','shall'],answer:'will be',hint:'futur continu → will be + -ing',explanation:'"Will be flying" — futur continu.'},
  {id:'fc_1_02',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'She ___ working all day tomorrow.',options:['will be','am being','would be','is'],answer:'will be',hint:'will be + -ing',explanation:'"Will be working."'},
  {id:'fc_1_03',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'___ you be coming to the party?',options:['Will','Would','Shall','Are'],answer:'Will',hint:'question futur continu → Will + sujet + be + -ing',explanation:'"Will you be coming...?"'},
  {id:'fc_1_04',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'At 8pm tonight, we ___ having dinner.',options:['will be','are','would be','shall'],answer:'will be',hint:'action en cours à un moment futur précis',explanation:'"Will be having" — futur continu.'},
  {id:'fc_1_05',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'He ___ sleeping by the time you arrive.',options:['will be','is','would','shall'],answer:'will be',hint:'will be + -ing',explanation:'"Will be sleeping."'},
  {id:'fc_1_06',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'They ___ travelling next week.',options:['will be','are','were','would'],answer:'will be',hint:'action future en cours → will be',explanation:'"Will be travelling."'},
  {id:'fc_1_07',type:'fill-blank',diffLevel:1,instruction:'Complétez avec will be + -ing.',template:'I ___ studying all evening.',answer:'will be studying',hint:'will be + étudier',explanation:'"Will be studying."'},
  {id:'fc_1_08',type:'fill-blank',diffLevel:1,instruction:'Complétez avec will be + -ing.',template:'She ___ waiting for you at the station.',answer:'will be waiting',hint:'will be + attendre',explanation:'"Will be waiting."'},
  {id:'fc_1_09',type:'fill-blank',diffLevel:1,instruction:'Complétez avec will be + -ing.',template:'At this time tomorrow, they ___ flying to London.',answer:'will be flying',hint:'will be + voler',explanation:'"Will be flying."'},
  {id:'fc_1_10',type:'fill-blank',diffLevel:1,instruction:'Complétez avec will be + -ing.',template:'He ___ working late tonight.',answer:'will be working',hint:'will be + travailler',explanation:'"Will be working."'},
  {id:'fc_1_11',type:'fill-blank',diffLevel:1,instruction:'Complétez avec will be + -ing.',template:'We ___ watching the match when you call.',answer:'will be watching',hint:'will be + regarder',explanation:'"Will be watching."'},
  {id:'fc_1_12',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['be','this','will','I','time','studying','tomorrow'],answer:'I will be studying this time tomorrow.',hint:'will + be + -ing',explanation:'"Will be studying this time tomorrow."'},
  {id:'fc_1_13',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['working','be','all','She','will','day'],answer:'She will be working all day.',hint:'will + be + -ing',explanation:'"She will be working all day."'},
  {id:'fc_1_14',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['you','Will','be','coming','tomorrow','?'],answer:'Will you be coming tomorrow?',hint:'Will + sujet + be + -ing?',explanation:'"Will you be coming tomorrow?"'},
  {id:'fc_1_15',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['travelling','be','will','next','They','week'],answer:'They will be travelling next week.',hint:'will + be + -ing',explanation:'"They will be travelling next week."'},
  // Level 2 (+15)
  {id:'fc_2_01',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"Demain à cette heure-ci, je serai en train de voler vers Paris.",answer:'This time tomorrow, I will be flying to Paris.',hint:'futur continu → will be + -ing',explanation:'"Will be flying."'},
  {id:'fc_2_02',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"À 8h ce soir, nous serons en train de dîner.",answer:'At 8pm tonight, we will be having dinner.',hint:'nous serons en train de → we will be + -ing',explanation:'"Will be having dinner."'},
  {id:'fc_2_03',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Est-ce que tu travailleras demain matin ?',answer:'Will you be working tomorrow morning?',hint:'Will + you + be + -ing?',explanation:'"Will you be working?"'},
  {id:'fc_2_04',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Elle dormira quand tu arriveras.',answer:'She will be sleeping when you arrive.',hint:'elle dormira = she will be sleeping',explanation:'"Will be sleeping when you arrive."'},
  {id:'fc_2_05',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Ils seront en train de voyager toute la semaine.',answer:'They will be travelling all week.',hint:'ils seront en train de → will be + -ing',explanation:'"Will be travelling all week."'},
  {id:'fc_2_06',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'I will be studying all evening tomorrow.',answer:'I will be studying all evening tomorrow.',hint:'will be + -ing',explanation:'"Will be studying."'},
  {id:'fc_2_07',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'Will you be joining us for dinner?',answer:'Will you be joining us for dinner?',hint:'Will + sujet + be + -ing?',explanation:'"Will you be joining us?"'},
  {id:'fc_2_08',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'She will be working from home next week.',answer:'She will be working from home next week.',hint:'will be + -ing',explanation:'"Will be working from home."'},
  {id:'fc_2_09',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'They will be celebrating their anniversary this weekend.',answer:'They will be celebrating their anniversary this weekend.',hint:'will be + celebrating',explanation:'"Will be celebrating."'},
  {id:'fc_2_10',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'He will be travelling to New York on Monday.',answer:'He will be travelling to New York on Monday.',hint:'will be + travelling',explanation:'"Will be travelling to New York."'},
  {id:'fc_2_11',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['be','you','Will','tomorrow','working','?'],answer:'Will you be working tomorrow?',hint:'Will + sujet + be + -ing?',explanation:'"Will you be working tomorrow?"'},
  {id:'fc_2_12',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['will','She','the','whole','be','working','day'],answer:'She will be working the whole day.',hint:'will + be + -ing',explanation:'"She will be working the whole day."'},
  {id:'fc_2_13',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['time','be','will','flying','I','this','tomorrow'],answer:'I will be flying this time tomorrow.',hint:'will + be + -ing',explanation:'"I will be flying this time tomorrow."'},
  {id:'fc_2_14',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['be','They','celebrating','tonight','will'],answer:'They will be celebrating tonight.',hint:'will + be + -ing',explanation:'"They will be celebrating tonight."'},
  {id:'fc_2_15',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['sleeping','will','already','He','be','when','arrive','you'],answer:'He will already be sleeping when you arrive.',hint:'will already be + -ing',explanation:'"He will already be sleeping when you arrive."'},
  // Level 3 (+7)
  {id:'fc_3_01',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'will be studying',example:'I will be studying for my exams all weekend.',hint:'"will be studying" = futur continu',explanation:'Action en cours à un moment futur précis.'},
  {id:'fc_3_02',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'will be travelling',example:'She will be travelling around Europe this summer.',hint:'"will be travelling" = en train de voyager',explanation:'Futur continu pour une action planifiée.'},
  {id:'fc_3_03',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'This time tomorrow, I will study English.',answer:'This time tomorrow, I will be studying English.',hint:'action en cours à un moment futur → will be + -ing',explanation:'Futur continu = will be + -ing.'},
  {id:'fc_3_04',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'She will being working all day.',answer:'She will be working all day.',hint:'will + be (pas being)',explanation:'"Will be" + -ing, jamais "will being".'},
  {id:'fc_3_05',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'At this time next year, I will be living in France.',answer:"A cette période l'année prochaine, je vivrai en France.",alternatives:["L'année prochaine à cette époque, je serai en train de vivre en France."],hint:'will be living = je vivrai / serai en train de',explanation:'Futur continu → futur ou présent continu en français.'},
  {id:'fc_3_06',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'Will you be using the computer this afternoon?',answer:"Utiliseras-tu l'ordinateur cet après-midi ?",alternatives:["Est-ce que tu utiliseras l'ordinateur cet après-midi ?"],hint:'Will you be using = utiliseras-tu',explanation:'Question au futur continu.'},
  {id:'fc_3_07',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'This time next week I will be sitting on a beach in Madagascar sipping coconut water.',question:'Que fera la personne à cette heure la semaine prochaine ?',answer:'She will be sitting on a beach in Madagascar.',alternatives:['Sitting on a beach.'],hint:'Écoutez la description de l\'action future',explanation:'"Will be sitting on a beach" — futur continu.'}
);

// ─── FUTURE PERFECT ─────────────────────────────────────────────────────────
exercises.futurePerfect.push(
  // Level 1 (+15)
  {id:'fp_1_01',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'By next year, I ___ finished my studies.',options:['will have','have','would have','shall'],answer:'will have',hint:'avant un moment futur → will have',explanation:'"Will have finished" — futur antérieur.'},
  {id:'fp_1_02',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'By 5pm, she ___ finished the report.',options:['will have','has','would','shall'],answer:'will have',hint:'before a future time → will have',explanation:'"Will have finished by 5pm."'},
  {id:'fp_1_03',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'By the time you arrive, I ___ eaten.',options:['will have','have','would have','shall'],answer:'will have',hint:'avant un futur → will have',explanation:'"Will have eaten by the time you arrive."'},
  {id:'fp_1_04',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'They ___ built the school by 2026.',options:['will have','have','would have','had'],answer:'will have',hint:'by + futur → will have',explanation:'"Will have built by 2026."'},
  {id:'fp_1_05',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'He ___ worked here for 20 years by December.',options:['will have','has','would have','had'],answer:'will have',hint:'by + futur + durée → will have',explanation:'"Will have worked for 20 years."'},
  {id:'fp_1_06',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'___ you finished by tomorrow?',options:['Will you have','Have you','Would you have','Did you'],answer:'Will you have',hint:'question futur antérieur → Will you have?',explanation:'"Will you have finished by tomorrow?"'},
  {id:'fp_1_07',type:'fill-blank',diffLevel:1,instruction:'Complétez avec will have + participe.',template:'By next month, she ___ completed the course.',answer:'will have completed',hint:'will have + participe',explanation:'"Will have completed."'},
  {id:'fp_1_08',type:'fill-blank',diffLevel:1,instruction:'Complétez avec will have + participe.',template:'By the time we arrive, he ___ already eaten.',answer:'will have already eaten',alternatives:['will have eaten'],hint:'will have + already + participe',explanation:'"Will have already eaten."'},
  {id:'fp_1_09',type:'fill-blank',diffLevel:1,instruction:'Complétez avec will have + participe.',template:'They ___ finished the project by Friday.',answer:'will have finished',hint:'will have + participe',explanation:'"Will have finished by Friday."'},
  {id:'fp_1_10',type:'fill-blank',diffLevel:1,instruction:'Complétez avec will have + participe.',template:'I ___ read the book by tonight.',answer:'will have read',hint:'will have + participe',explanation:'"Will have read by tonight."'},
  {id:'fp_1_11',type:'fill-blank',diffLevel:1,instruction:'Complétez avec will have + participe.',template:'By 2030, scientists ___ found new cures.',answer:'will have found',hint:'will have + participe',explanation:'"Will have found."'},
  {id:'fp_1_12',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['will','have','I','by','finished','tonight'],answer:'I will have finished by tonight.',hint:'will + have + participe',explanation:'"I will have finished by tonight."'},
  {id:'fp_1_13',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['have','built','will','By','they','2030','the','bridge'],answer:'By 2030, they will have built the bridge.',hint:'By + date, will + have + participe',explanation:'"By 2030, they will have built."'},
  {id:'fp_1_14',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['you','Will','have','finished','by','noon','?'],answer:'Will you have finished by noon?',hint:'Will + sujet + have + participe?',explanation:'"Will you have finished by noon?"'},
  {id:'fp_1_15',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['already','will','She','have','left','time','arrive','you','by','the'],answer:'She will have already left by the time you arrive.',hint:'will + have + already + participe',explanation:'"Will have already left by the time you arrive."'},
  // Level 2 (+15)
  {id:'fp_2_01',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"D'ici la fin du mois, j'aurai fini le projet.",answer:'By the end of the month, I will have finished the project.',hint:'j\'aurai fini → I will have finished',explanation:'"Will have finished" — futur antérieur.'},
  {id:'fp_2_02',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Quand tu arriveras, nous aurons déjà mangé.',answer:'By the time you arrive, we will have already eaten.',alternatives:['When you arrive, we will have already eaten.'],hint:'nous aurons mangé → we will have eaten',explanation:'"Will have already eaten."'},
  {id:'fp_2_03',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"D'ici 2030, les scientifiques auront trouvé de nouveaux remèdes.",answer:'By 2030, scientists will have found new cures.',hint:'auront trouvé → will have found',explanation:'"Will have found by 2030."'},
  {id:'fp_2_04',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Aura-t-elle fini avant demain ?',answer:'Will she have finished by tomorrow?',hint:'aura-t-elle fini → will she have finished',explanation:'Question futur antérieur.'},
  {id:'fp_2_05',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"Il travaillera ici depuis 10 ans en décembre.",answer:'By December, he will have worked here for ten years.',hint:'il aura travaillé → will have worked',explanation:'"Will have worked for ten years."'},
  {id:'fp_2_06',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'By the time you wake up I will have left.',answer:'By the time you wake up I will have left.',hint:'will + have + participe',explanation:'"Will have left."'},
  {id:'fp_2_07',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'She will have finished her studies by next year.',answer:'She will have finished her studies by next year.',hint:'will have + participe',explanation:'"Will have finished."'},
  {id:'fp_2_08',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'Will you have completed the report by Friday?',answer:'Will you have completed the report by Friday?',hint:'Will + sujet + have + participe?',explanation:'Question futur antérieur.'},
  {id:'fp_2_09',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'They will have been married for twenty-five years by June.',answer:'They will have been married for twenty-five years by June.',hint:'will have been + participe',explanation:'"Will have been married for 25 years."'},
  {id:'fp_2_10',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'By 2025 we will have solved the problem.',answer:'By 2025 we will have solved the problem.',hint:'will have + participe',explanation:'"Will have solved."'},
  {id:'fp_2_11',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['have','you','by','finished','Will','tomorrow','?'],answer:'Will you have finished by tomorrow?',hint:'Will + sujet + have + participe?',explanation:'"Will you have finished by tomorrow?"'},
  {id:'fp_2_12',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['will','She','have','passed','her','by','exam','June'],answer:'She will have passed her exam by June.',hint:'will + have + participe',explanation:'"Will have passed by June."'},
  {id:'fp_2_13',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['already','By','you','the','will','have','left','time','I'],answer:'By the time I arrive, you will have already left.',hint:'By the time, will have already + participe',explanation:'"Will have already left."'},
  {id:'fp_2_14',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['built','They','have','will','the','2030','by','hospital'],answer:'They will have built the hospital by 2030.',hint:'will + have + participe',explanation:'"Will have built by 2030."'},
  {id:'fp_2_15',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['have','By','studied','I','next','will','French','year','for','five','years'],answer:'By next year, I will have studied French for five years.',hint:'will have + participe + for',explanation:'"Will have studied for five years."'},
  // Level 3 (+7)
  {id:'fp_3_01',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'will have finished',example:'By this time tomorrow, I will have finished the exam.',hint:'"will have finished" + délai futur',explanation:'Futur antérieur : action accomplie avant un moment futur.'},
  {id:'fp_3_02',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'will have lived',example:'By 2030, she will have lived in France for ten years.',hint:'"will have lived" + for + durée',explanation:'"Will have lived" — durée accomplie à un moment futur.'},
  {id:'fp_3_03',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'By tomorrow, I will finished the report.',answer:'By tomorrow, I will have finished the report.',hint:'futur antérieur = will have + participe',explanation:'"Will have finished" — futur antérieur.'},
  {id:'fp_3_04',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'She will have went to Paris by June.',answer:'She will have gone to Paris by June.',hint:'participe de go = gone',explanation:'"Gone" = participe passé de "go".'},
  {id:'fp_3_05',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'By the time you arrive, we will have eaten.',answer:'Quand tu arriveras, nous aurons déjà mangé.',hint:'will have eaten = aurons mangé',explanation:'Futur antérieur en français.'},
  {id:'fp_3_06',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'Will they have finished the project by December?',answer:"Auront-ils terminé le projet d'ici décembre ?",hint:'will they have finished? = auront-ils terminé?',explanation:'Futur antérieur interrogatif.'},
  {id:'fp_3_07',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'By the end of this year I will have lived in Madagascar for five years.',question:"Depuis combien de temps la personne vit-elle à Madagascar en fin d'année ?",answer:'For five years.',alternatives:['Five years.'],hint:'Écoutez "for five years"',explanation:'"Will have lived for five years" — durée accomplie.'}
);


// ─── BATCH 3a EXERCISES ──────────────────────────────────────────────────────

// ─── COMPARATIVES ───────────────────────────────────────────────────────────
exercises.comparatives.push(
  {id:'comp_1_01',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme.',question:'My bag is ___ than yours.',options:['more heavy','heavier','heavyer','most heavy'],answer:'heavier',hint:'heavy → heavier (-y → ier)',explanation:'"Heavier" — adj court en -y → -ier.'},
  {id:'comp_1_02',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme.',question:'This film is ___ than the other one.',options:['more interesting','interestinger','most interesting','interestinger'],answer:'more interesting',hint:'long adj → more',explanation:'"More interesting" — adjectif long.'},
  {id:'comp_1_03',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme.',question:'She is ___ student in the class.',options:['the best','the goodest','the most good','better'],answer:'the best',hint:'good → best (irrégulier)',explanation:'"The best" — superlatif irrégulier de "good".'},
  {id:'comp_1_04',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme.',question:'He runs ___ than anyone in the team.',options:['more fast','faster','fastest','most fast'],answer:'faster',hint:'fast → faster (court)',explanation:'"Faster" — adj court → -er.'},
  {id:'comp_1_05',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme.',question:'This is ___ day of the year.',options:['the coldest','the most cold','colder','more cold'],answer:'the coldest',hint:'cold → the coldest',explanation:'"The coldest" — superlatif d\'adj court.'},
  {id:'comp_1_06',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme.',question:'French is ___ than English for some learners.',options:['difficulter','more difficult','most difficult','difficultier'],answer:'more difficult',hint:'long adj → more + adj',explanation:'"More difficult" — adjectif long.'},
  {id:'comp_1_07',type:'fill-blank',diffLevel:1,instruction:'Complétez avec la forme correcte.',template:'This book is ___ than that one. (interesting)',answer:'more interesting',hint:'long adj → more',explanation:'"More interesting."'},
  {id:'comp_1_08',type:'fill-blank',diffLevel:1,instruction:'Complétez avec la forme correcte.',template:'January is ___ month of the year. (cold)',answer:'the coldest',hint:'superlatif → the coldest',explanation:'"The coldest month."'},
  {id:'comp_1_09',type:'fill-blank',diffLevel:1,instruction:'Complétez avec la forme correcte.',template:'He is ___ than his brother. (tall)',answer:'taller',hint:'tall → taller',explanation:'"Taller" — adj court.'},
  {id:'comp_1_10',type:'fill-blank',diffLevel:1,instruction:'Complétez avec la forme correcte.',template:'She is ___ student in the school. (good)',answer:'the best',hint:'good → the best',explanation:'"The best" — superlatif irrégulier.'},
  {id:'comp_1_11',type:'fill-blank',diffLevel:1,instruction:'Complétez avec la forme correcte.',template:'Today is ___ than yesterday. (hot)',answer:'hotter',hint:'hot → hotter (double consonne)',explanation:'"Hotter" — consonne finale doublée.'},
  {id:'comp_1_12',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['than','taller','is','He','his','brother'],answer:'He is taller than his brother.',hint:'adj comparatif + than',explanation:'"Taller than his brother."'},
  {id:'comp_1_13',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['film','the','This','ever','is','best','I','seen','have'],answer:'This is the best film I have ever seen.',hint:'the + superlatif',explanation:'"The best film I have ever seen."'},
  {id:'comp_1_14',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['more','English','is','than','French','difficult'],answer:'English is more difficult than French.',hint:'more + long adj + than',explanation:'"More difficult than French."'},
  {id:'comp_1_15',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['the','She','fastest','is','runner'],answer:'She is the fastest runner.',hint:'the + superlatif',explanation:'"The fastest runner."'},
  {id:'comp_2_01',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Il est plus grand que son frère.',answer:'He is taller than his brother.',hint:'plus grand → taller',explanation:'"Taller than."'},
  {id:'comp_2_02',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"C'est le plus beau pays du monde.",answer:'It is the most beautiful country in the world.',hint:'le plus beau → the most beautiful',explanation:'"The most beautiful."'},
  {id:'comp_2_03',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Elle parle mieux anglais que lui.',answer:'She speaks English better than him.',hint:'mieux → better',explanation:'"Better than him."'},
  {id:'comp_2_04',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"Aujourd'hui est plus chaud qu'hier.",answer:'Today is hotter than yesterday.',hint:'plus chaud → hotter',explanation:'"Hotter than yesterday."'},
  {id:'comp_2_05',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'He is the tallest boy in the class.',answer:'He is the tallest boy in the class.',hint:'the + superlatif',explanation:'"The tallest boy."'},
  {id:'comp_2_06',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'This book is more interesting than the film.',answer:'This book is more interesting than the film.',hint:'more + adj + than',explanation:'"More interesting than the film."'},
  {id:'comp_2_07',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'She runs faster than anyone I know.',answer:'She runs faster than anyone I know.',hint:'faster than',explanation:'"Faster than anyone I know."'},
  {id:'comp_2_08',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'English is easier than Chinese for Europeans.',answer:'English is easier than Chinese for Europeans.',hint:'easier than',explanation:'"Easier than Chinese."'},
  {id:'comp_2_09',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['most','is','beautiful','country','This','the'],answer:'This is the most beautiful country.',hint:'the most + adj',explanation:'"The most beautiful country."'},
  {id:'comp_2_10',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['better','He','her','sings','than'],answer:'He sings better than her.',hint:'better than',explanation:'"Better than her."'},
  {id:'comp_2_11',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['most','the','was','It','difficult','exam'],answer:'It was the most difficult exam.',hint:'the most + adj',explanation:'"The most difficult exam."'},
  {id:'comp_3_01',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'taller than',example:'He is taller than his brother.',hint:'adj court + -er + than',explanation:'Comparatif d\'infériorité/supériorité.'},
  {id:'comp_3_02',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'more interesting than',example:'This book is more interesting than the film.',hint:'more + long adj + than',explanation:'Comparatif pour adj longs.'},
  {id:'comp_3_03',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'the best',example:'She is the best student in the class.',hint:'superlatif irrégulier de good',explanation:'"The best" = superlatif de "good".'},
  {id:'comp_3_04',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'He is more tall than his brother.',answer:'He is taller than his brother.',hint:'adj court (1 syllabe) → -er, pas more',explanation:'"Tall" → "taller", pas "more tall".'},
  {id:'comp_3_05',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'She is the most good student.',answer:'She is the best student.',hint:'good → best (irrégulier)',explanation:'"The best" — superlatif irrégulier.'},
  {id:'comp_3_06',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'This film is more bad than the other.',answer:'This film is worse than the other.',hint:'bad → worse → the worst',explanation:'"Worse" — comparatif irrégulier de "bad".'},
  {id:'comp_3_07',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'She is the most intelligent person I know.',answer:"C'est la personne la plus intelligente que je connaisse.",hint:'the most intelligent = la plus intelligente',explanation:'Superlatif → "le/la plus..." en français.'},
  {id:'comp_3_08',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'My car is older than yours.',answer:'Ma voiture est plus vieille que la tienne.',hint:'older than = plus vieux que',explanation:'Comparatif en français.'},
  {id:'comp_3_09',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'He works harder than everyone else.',answer:'Il travaille plus dur que tout le monde.',hint:'harder than = plus dur que',explanation:'"Works harder" = comparatif d\'adverbe.'},
  {id:'comp_3_10',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'This restaurant is much better than the one we went to last week. The food is more delicious and the prices are lower.',question:'Comment sont les prix du nouveau restaurant ?',answer:'They are lower.',alternatives:['Lower.','Lower than the other restaurant.'],hint:'Écoutez "lower"',explanation:'"Lower" = moins chers.'},
  {id:'comp_3_11',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'She is the youngest child in the family but she is the most responsible.',question:'Est-elle la plus jeune ?',answer:'Yes, she is the youngest.',alternatives:['Yes.'],hint:'Écoutez "youngest"',explanation:'"The youngest child" = la plus jeune.'}
);

// ─── INTERROGATIVE ──────────────────────────────────────────────────────────
exercises.interrogative.push(
  {id:'int_1_01',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon mot interrogatif.',question:'___ is your name?',options:['What','Where','Who','How'],answer:'What',hint:'nom → What',explanation:'"What is your name?"'},
  {id:'int_1_02',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon mot interrogatif.',question:'___ do you live?',options:['What','Where','Who','How'],answer:'Where',hint:'lieu → Where',explanation:'"Where do you live?"'},
  {id:'int_1_03',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon mot interrogatif.',question:'___ old are you?',options:['How','What','Where','Who'],answer:'How',hint:'age → How old',explanation:'"How old" = quel âge.'},
  {id:'int_1_04',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon mot interrogatif.',question:'___ does the train leave?',options:['When','Where','What','Why'],answer:'When',hint:'temps → When',explanation:'"When does the train leave?"'},
  {id:'int_1_05',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon mot interrogatif.',question:'___ is your teacher?',options:['What','Where','Who','How'],answer:'Who',hint:'personne → Who',explanation:'"Who is your teacher?"'},
  {id:'int_1_06',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon mot interrogatif.',question:'___ much does it cost?',options:['How','What','Where','When'],answer:'How',hint:'prix → How much',explanation:'"How much does it cost?"'},
  {id:'int_1_07',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon mot interrogatif.',template:'___ did you go last weekend?',answer:'Where',hint:'lieu → Where',explanation:'"Where did you go?"'},
  {id:'int_1_08',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon mot interrogatif.',template:'___ is the meeting?',answer:'When',hint:'temps → When',explanation:'"When is the meeting?"'},
  {id:'int_1_09',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon mot interrogatif.',template:'___ long have you been learning English?',answer:'How',hint:'durée → How long',explanation:'"How long" = depuis combien de temps.'},
  {id:'int_1_10',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon mot interrogatif.',template:'___ do you prefer: tea or coffee?',answer:'Which',hint:'choix entre options → Which',explanation:'"Which" = lequel (choix limité).'},
  {id:'int_1_11',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon mot interrogatif.',template:'___ are you crying?',answer:'Why',hint:'raison → Why',explanation:'"Why are you crying?"'},
  {id:'int_1_12',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['your','is','What','name','?'],answer:'What is your name?',hint:'What + is/are + sujet?',explanation:'"What is your name?"'},
  {id:'int_1_13',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['live','do','Where','you','?'],answer:'Where do you live?',hint:'Where + do + sujet + infinitif?',explanation:'"Where do you live?"'},
  {id:'int_1_14',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['does','cost','much','How','it','?'],answer:'How much does it cost?',hint:'How much + does + sujet + infinitif?',explanation:'"How much does it cost?"'},
  {id:'int_1_15',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['come','you','Why','late','did','?'],answer:'Why did you come late?',hint:'Why + did + sujet + infinitif?',explanation:'"Why did you come late?"'},
  {id:'int_2_01',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Où habites-tu ?',answer:'Where do you live?',hint:'où → Where',explanation:'"Where do you live?"'},
  {id:'int_2_02',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"Depuis combien de temps étudie-t-il l'anglais ?",answer:'How long has he been studying English?',hint:'depuis combien de temps → how long',explanation:'"How long has he been studying?"'},
  {id:'int_2_03',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'How much does this book cost?',answer:'How much does this book cost?',hint:'How much + does',explanation:'"How much does this book cost?"'},
  {id:'int_2_04',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'Why did you come home late?',answer:'Why did you come home late?',hint:'Why + did',explanation:'"Why did you come home late?"'},
  {id:'int_2_05',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'Who is your favourite teacher?',answer:'Who is your favourite teacher?',hint:'Who + is',explanation:'"Who is your favourite teacher?"'},
  {id:'int_2_06',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['did','study','you','Where','?'],answer:'Where did you study?',hint:'Where + did + sujet?',explanation:'"Where did you study?"'},
  {id:'int_2_07',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['old','she','How','is','?'],answer:'How old is she?',hint:'How old + is + sujet?',explanation:'"How old is she?"'},
  {id:'int_3_01',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'How long',example:'How long have you been studying English?',hint:'"How long" = depuis combien de temps',explanation:'"How long" pour la durée.'},
  {id:'int_3_02',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'What kind of',example:'What kind of music do you like?',hint:'"What kind of" = quel type de',explanation:'"What kind of" pour demander le type.'},
  {id:'int_3_03',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'How often',example:'How often do you exercise?',hint:'"How often" = à quelle fréquence',explanation:'"How often" pour la fréquence.'},
  {id:'int_3_04',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'Where you live?',answer:'Where do you live?',hint:'question → auxiliaire do/does',explanation:'"Where do you live?" — auxiliaire obligatoire.'},
  {id:'int_3_05',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'How old have you?',answer:'How old are you?',hint:'age → How old are you?',explanation:'"How old are you?" — to be, pas have.'},
  {id:'int_3_06',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'What means this word?',answer:'What does this word mean?',hint:'auxiliaire do + infinitif',explanation:'"What does this word mean?"'},
  {id:'int_3_07',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'Who did came to the party?',answer:'Who came to the party?',hint:'who = sujet → pas d\'auxiliaire did',explanation:'"Who came?" — who est sujet, pas besoin de did.'},
  {id:'int_3_08',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'How long have you been working here?',answer:'Depuis combien de temps travaillez-vous ici ?',hint:'How long = depuis combien de temps',explanation:'"How long" = durée depuis le début.'},
  {id:'int_3_09',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'How much does this book cost?',answer:'Combien coûte ce livre ?',hint:'How much = combien',explanation:'"How much" = combien (quantité/prix).'},
  {id:'int_3_10',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'What time does the film start?',answer:'À quelle heure commence le film ?',hint:'What time = à quelle heure',explanation:'"What time" = à quelle heure.'},
  {id:'int_3_11',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'Why are you late?',answer:'Pourquoi es-tu en retard ?',hint:'Why = pourquoi',explanation:'"Why" = pourquoi.'},
  {id:'int_3_12',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'How long have you been living in Madagascar? About five years now.',question:'Depuis combien de temps vit-il à Madagascar ?',answer:'For about five years.',alternatives:['About five years.','Five years.'],hint:'Écoutez la réponse',explanation:'"For about five years."'},
  {id:'int_3_13',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'Where do you usually go for your holidays? We usually go to the coast in summer.',question:'Où vont-ils en vacances ?',answer:'To the coast.',alternatives:['The coast.','They go to the coast.'],hint:'Écoutez "coast"',explanation:'"We usually go to the coast in summer."'}
);

// ─── IMPERATIVES ────────────────────────────────────────────────────────────
exercises.imperatives.push(
  {id:'imp_1_01',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme impérative.',question:"___ be late!",options:["Don't","Doesn't","Do","Not"],answer:"Don't",hint:"négatif → Don't",explanation:'"Don\'t be late!" — impératif négatif.'},
  {id:'imp_1_02',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme impérative.',question:'___ the window, please.',options:['Open','Opens','Opening','Opened'],answer:'Open',hint:'impératif = infinitif sans sujet',explanation:'"Open the window" — impératif positif.'},
  {id:'imp_1_03',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme impérative.',question:'___ go for a walk!',options:["Let's","Let us to","We should","We let"],answer:"Let's",hint:"suggestion commune → Let's",explanation:'"Let\'s go!" — suggestion inclusive.'},
  {id:'imp_1_04',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme impérative.',question:'___ the music down, please.',options:['Turn','Turns','Turning','Turned'],answer:'Turn',hint:'impératif = base verbale',explanation:'"Turn the music down."'},
  {id:'imp_1_05',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme impérative.',question:"___ the door — it's raining!",options:["Don't open","Not open","No open","Does not open"],answer:"Don't open",hint:"négatif → Don't + infinitif",explanation:'"Don\'t open the door."'},
  {id:'imp_1_06',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme impérative.',question:'___ the window when you leave.',options:['Close','Closes','Closed','Closing'],answer:'Close',hint:'impératif positif',explanation:'"Close the window."'},
  {id:'imp_1_07',type:'fill-blank',diffLevel:1,instruction:"Complétez avec l'impératif.",template:'___ your homework before playing!',answer:'Do',hint:'impératif positif de do',explanation:'"Do your homework!"'},
  {id:'imp_1_08',type:'fill-blank',diffLevel:1,instruction:"Complétez avec l'impératif.",template:'___ run in the corridors.',answer:"Don't",hint:"défense → Don't",explanation:'"Don\'t run" — interdit.'},
  {id:'imp_1_09',type:'fill-blank',diffLevel:1,instruction:"Complétez avec l'impératif.",template:'___ your hands before eating.',answer:'Wash',hint:'impératif positif',explanation:'"Wash your hands."'},
  {id:'imp_1_10',type:'fill-blank',diffLevel:1,instruction:"Complétez avec l'impératif.",template:'___ careful on the road.',answer:'Be',hint:'Be + adjectif',explanation:'"Be careful."'},
  {id:'imp_1_11',type:'fill-blank',diffLevel:1,instruction:"Complétez avec l'impératif.",template:'___ late to class.',answer:"Don't be",hint:"Don't be + adjectif",explanation:'"Don\'t be late."'},
  {id:'imp_1_12',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['the','Open','window'],answer:'Open the window.',hint:'base verbale + complément',explanation:'"Open the window."'},
  {id:'imp_1_13',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['late','be',"Don't"],answer:"Don't be late.",hint:"Don't + be + adj",explanation:'"Don\'t be late."'},
  {id:'imp_1_14',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['go',"Let's",'beach','the','to'],answer:"Let's go to the beach.",hint:"Let's + infinitif",explanation:'"Let\'s go to the beach."'},
  {id:'imp_1_15',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['hands','your','Wash','now'],answer:'Wash your hands now.',hint:'base verbale + complément',explanation:'"Wash your hands now."'},
  {id:'imp_2_01',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'N\'oublie pas tes clés.',answer:"Don't forget your keys.",hint:"Don't + oublier",explanation:'"Don\'t forget your keys."'},
  {id:'imp_2_02',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Soyez tranquilles !',answer:'Be quiet!',hint:'Be + adj',explanation:'"Be quiet!"'},
  {id:'imp_2_03',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:"Don't touch that!",answer:"Don't touch that!",hint:"Don't + touch",explanation:'"Don\'t touch that!"'},
  {id:'imp_2_04',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'Please sit down and open your books.',answer:'Please sit down and open your books.',hint:'please + impératif',explanation:'"Please sit down and open your books."'},
  {id:'imp_2_05',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:"Let's meet at the cafe at noon.",answer:"Let's meet at the cafe at noon.",hint:"Let's + meet",explanation:'"Let\'s meet at the café at noon."'},
  {id:'imp_2_06',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['at',"Let's",'seven','meet'],answer:"Let's meet at seven.",hint:"Let's + infinitif",explanation:'"Let\'s meet at seven."'},
  {id:'imp_2_07',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['quiet','please','Be'],answer:'Be quiet please.',hint:'Be + adj + please',explanation:'"Be quiet please."'},
  {id:'imp_3_01',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:"Don't forget",example:"Don't forget to call me tonight!",hint:"Don't forget + infinitif",explanation:'"Don\'t forget to..." — ordre négatif.'},
  {id:'imp_3_02',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:"Let's",example:"Let's go to the cinema this evening.",hint:"Let's + infinitif = suggestion",explanation:'"Let\'s" pour une proposition commune.'},
  {id:'imp_3_03',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'Be careful',example:'Be careful when you cross the road.',hint:'Be + adj = impératif avec to be',explanation:'"Be careful" — impératif de to be.'},
  {id:'imp_3_04',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:"Doesn't talk in class.",answer:"Don't talk in class.",hint:"impératif négatif → Don't",explanation:'"Don\'t talk" — impératif négatif.'},
  {id:'imp_3_05',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'Please to sit down.',answer:'Please sit down.',hint:'pas de "to" après please + impératif',explanation:'"Please sit down" — sans "to".'},
  {id:'imp_3_06',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'Let us to go.',answer:"Let's go.",hint:"Let's + infinitif (sans to)",explanation:'"Let\'s go" — pas de "to" après let\'s.'},
  {id:'imp_3_07',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'Not be late.',answer:"Don't be late.",hint:"Don't be, pas Not be",explanation:'"Don\'t be late" — impératif négatif.'},
  {id:'imp_3_08',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'Open the book at page twenty.',answer:'Ouvre le livre à la page vingt.',hint:'impératif positif',explanation:'"Open" = "ouvre".'},
  {id:'imp_3_09',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:"Don't touch that!",answer:'Ne touche pas à ça !',hint:"Don't touch = ne touche pas",explanation:'"Don\'t touch" = "ne touche pas".'},
  {id:'imp_3_10',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'Sit down and close your books.',answer:'Asseyez-vous et fermez vos livres.',hint:'two imperatives joined by and',explanation:'Double impératif.'},
  {id:'imp_3_11',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:"Let's go to the market!",answer:'Allons au marché !',hint:"Let's go = allons",explanation:'"Let\'s go to the market!"'},
  {id:'imp_3_12',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:"Don't forget your umbrella it might rain this afternoon.",question:'Que faut-il ne pas oublier ?',answer:'An umbrella.',alternatives:['Umbrella.'],hint:'Écoutez "umbrella"',explanation:'"Don\'t forget your umbrella."'},
  {id:'imp_3_13',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'Please be quiet and listen carefully to the instructions.',question:'Que demande-t-on de faire ?',answer:'Be quiet and listen carefully.',alternatives:['Be quiet and listen.'],hint:'Écoutez les deux actions',explanation:'"Be quiet and listen carefully."'}
);

// ─── SOME / ANY ─────────────────────────────────────────────────────────────
exercises.someAny.push(
  {id:'sa_1_01',type:'multiple-choice',diffLevel:1,instruction:'Choisissez some ou any.',question:'There is ___ milk in the fridge.',options:['some','any','no','the'],answer:'some',hint:'affirmatif → some',explanation:'"Some" dans les phrases affirmatives.'},
  {id:'sa_1_02',type:'multiple-choice',diffLevel:1,instruction:'Choisissez some ou any.',question:'Is there ___ water left?',options:['some','any','no','a'],answer:'any',hint:'question → any',explanation:'"Any" dans les questions neutres.'},
  {id:'sa_1_03',type:'multiple-choice',diffLevel:1,instruction:'Choisissez some ou any.',question:"I don't have ___ money.",options:['some','any','no','a'],answer:'any',hint:"négatif → any",explanation:'"Any" dans les phrases négatives.'},
  {id:'sa_1_04',type:'multiple-choice',diffLevel:1,instruction:'Choisissez some ou any.',question:'___ called while you were out.',options:['Someone','Anyone','No one','Some'],answer:'Someone',hint:'affirmatif → someone',explanation:'"Someone" = quelqu\'un (affirmatif).'},
  {id:'sa_1_05',type:'multiple-choice',diffLevel:1,instruction:'Choisissez some ou any.',question:"I didn't see ___ in the shop.",options:['someone','anyone','no one','some'],answer:'anyone',hint:"négatif → anyone",explanation:'"Anyone" dans les phrases négatives.'},
  {id:'sa_1_06',type:'multiple-choice',diffLevel:1,instruction:'Choisissez some ou any.',question:'Would you like ___ tea?',options:['some','any','no','a'],answer:'some',hint:'offre → some',explanation:'"Some" dans les offres et propositions.'},
  {id:'sa_1_07',type:'fill-blank',diffLevel:1,instruction:'Complétez avec some ou any.',template:'She bought ___ bread at the market.',answer:'some',hint:'affirmatif → some',explanation:'"Some bread" — affirmatif.'},
  {id:'sa_1_08',type:'fill-blank',diffLevel:1,instruction:'Complétez avec some ou any.',template:'Are there ___ students in the classroom?',answer:'any',hint:'question → any',explanation:'"Any students" — question.'},
  {id:'sa_1_09',type:'fill-blank',diffLevel:1,instruction:'Complétez avec some ou any.',template:"He didn't eat ___ vegetables.",answer:'any',hint:"négatif → any",explanation:'"Any vegetables" — négatif.'},
  {id:'sa_1_10',type:'fill-blank',diffLevel:1,instruction:'Complétez avec some/someone/something.',template:'___ has left a message for you.',answer:'Someone',hint:'personne inconnue → someone',explanation:'"Someone" = quelqu\'un (affirmatif).'},
  {id:'sa_1_11',type:'fill-blank',diffLevel:1,instruction:'Complétez avec some ou any.',template:"I don't have ___ information.",answer:'any',hint:"négatif → any",explanation:'"Any information" — négatif.'},
  {id:'sa_1_12',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['some','bought','She','at','the','milk','market'],answer:'She bought some milk at the market.',hint:'affirmatif → some',explanation:'"She bought some milk."'},
  {id:'sa_1_13',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['any','Is','bread','there','?'],answer:'Is there any bread?',hint:'question → any',explanation:'"Is there any bread?"'},
  {id:'sa_1_14',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:["didn't","see","I","anyone"],answer:"I didn't see anyone.",hint:"négatif → anyone",explanation:'"I didn\'t see anyone."'},
  {id:'sa_1_15',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['someone','waiting','is','There','outside'],answer:'There is someone waiting outside.',hint:'affirmatif → someone',explanation:'"There is someone waiting."'},
  {id:'sa_2_01',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Est-ce qu\'il reste du pain ?',answer:'Is there any bread left?',hint:'question → any',explanation:'"Any bread" — question.'},
  {id:'sa_2_02',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Quelqu\'un a appelé pendant ton absence.',answer:'Someone called while you were out.',hint:'quelqu\'un → someone',explanation:'"Someone called."'},
  {id:'sa_2_03',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'I need some help with this exercise.',answer:'I need some help with this exercise.',hint:'affirmatif → some',explanation:'"Some help" — affirmatif.'},
  {id:'sa_2_04',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'Did you see anyone at the party?',answer:'Did you see anyone at the party?',hint:'question → anyone',explanation:'"Anyone" — question.'},
  {id:'sa_2_05',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'There is something in the bag.',answer:'There is something in the bag.',hint:'chose inconnue → something',explanation:'"Something" — chose indéfinie.'},
  {id:'sa_2_06',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:["doesn't","She","money","any","have"],answer:"She doesn't have any money.",hint:"négatif → any",explanation:'"She doesn\'t have any money."'},
  {id:'sa_2_07',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['some','Would','like','you','coffee','?'],answer:'Would you like some coffee?',hint:'offre → some',explanation:'"Would you like some coffee?"'},
  {id:'sa_3_01',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'some',example:'I bought some apples and some bread at the market.',hint:'"some" dans les affirmatifs',explanation:'"Some" — quantité indéfinie, affirmatif.'},
  {id:'sa_3_02',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'anyone',example:'Did anyone call while I was out?',hint:'"anyone" dans questions/négatifs',explanation:'"Anyone" — questions et négatifs.'},
  {id:'sa_3_03',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'something',example:'I have something important to tell you.',hint:'"something" = chose indéfinie',explanation:'"Something" — chose affirmative.'},
  {id:'sa_3_04',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:"She didn't eat nothing.",answer:"She didn't eat anything.",hint:"double négatif → didn't + anything",explanation:'"Didn\'t eat anything" — pas de double négatif.'},
  {id:'sa_3_05',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'I need any help.',answer:'I need some help.',hint:'affirmatif → some',explanation:'"Some help" — phrase affirmative.'},
  {id:'sa_3_06',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'Did you see someone?',answer:'Did you see anyone?',hint:'question neutre → anyone',explanation:'"Anyone" dans les questions neutres.'},
  {id:'sa_3_07',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:"There isn't no sugar.",answer:"There isn't any sugar.",hint:"négatif → any, pas no (double négatif)",explanation:'"There isn\'t any sugar."'},
  {id:'sa_3_08',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'I want something to drink.',answer:'Je veux quelque chose à boire.',hint:'something = quelque chose',explanation:'"Something" = "quelque chose".'},
  {id:'sa_3_09',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'Nobody came.',answer:'Personne n\'est venu.',alternatives:['Aucun n\'est venu.'],hint:'nobody = personne',explanation:'"Nobody" = "personne".'},
  {id:'sa_3_10',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'Is there anything interesting here?',answer:'Y a-t-il quelque chose d\'intéressant ici ?',hint:'anything = quelque chose (question)',explanation:'"Anything" dans les questions.'},
  {id:'sa_3_11',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'Can someone help me?',answer:'Est-ce que quelqu\'un peut m\'aider ?',alternatives:['Quelqu\'un peut-il m\'aider ?'],hint:'someone = quelqu\'un',explanation:'"Someone" = "quelqu\'un" (affirmatif/offre).'},
  {id:'sa_3_12',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:"Would you like some cake? No thank you I don't want anything sweet today.",question:'Est-ce que la personne veut du gâteau ?',answer:"No, she doesn't want anything sweet.",alternatives:['No.'],hint:'Écoutez la réponse',explanation:'"I don\'t want anything sweet."'},
  {id:'sa_3_13',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'Someone left their bag in the classroom. Does anyone know who it belongs to?',question:'Où le sac a-t-il été trouvé ?',answer:'In the classroom.',alternatives:['The classroom.'],hint:'Écoutez "classroom"',explanation:'"Left their bag in the classroom."'}
);

// ─── TO BE ──────────────────────────────────────────────────────────────────
exercises.toBe.push(
  {id:'tobe_1_01',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme de to be.',question:'She ___ a doctor.',options:['is','am','are','be'],answer:'is',hint:'she → is',explanation:'"She is" — troisième personne singulier.'},
  {id:'tobe_1_02',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme de to be.',question:'They ___ at school yesterday.',options:['was','were','are','be'],answer:'were',hint:'they + passé → were',explanation:'"They were" — passé pluriel.'},
  {id:'tobe_1_03',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme de to be.',question:'___ you tired?',options:['Are','Is','Am','Be'],answer:'Are',hint:'you → are',explanation:'"Are you tired?"'},
  {id:'tobe_1_04',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme de to be.',question:'I ___ not ready yet.',options:['am','is','are','be'],answer:'am',hint:'I → am',explanation:'"I am not" — première personne.'},
  {id:'tobe_1_05',type:'fill-blank',diffLevel:1,instruction:'Complétez avec am/is/are/was/were.',template:'He ___ my best friend.',answer:'is',hint:'he → is',explanation:'"He is my best friend."'},
  {id:'tobe_1_06',type:'fill-blank',diffLevel:1,instruction:'Complétez avec am/is/are/was/were.',template:'We ___ at home last night.',answer:'were',hint:'we + passé → were',explanation:'"We were at home."'},
  {id:'tobe_1_07',type:'fill-blank',diffLevel:1,instruction:'Complétez avec am/is/are/was/were.',template:'___ she ready?',answer:'Is',hint:'she → Is',explanation:'"Is she ready?"'},
  {id:'tobe_1_08',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['tired','am','I','very'],answer:'I am very tired.',hint:'I + am',explanation:'"I am very tired."'},
  {id:'tobe_1_09',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['were','school','They','yesterday','at'],answer:'They were at school yesterday.',hint:'they + were',explanation:'"They were at school yesterday."'},
  {id:'tobe_2_01',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Je suis étudiant.',answer:'I am a student.',alternatives:["I'm a student."],hint:'je suis → I am',explanation:'"I am a student."'},
  {id:'tobe_2_02',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"Elle n'est pas ici.",answer:'She is not here.',alternatives:["She isn't here."],hint:'elle n\'est pas → she is not',explanation:'"She is not here."'},
  {id:'tobe_2_03',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Étais-tu à la maison hier ?',answer:'Were you at home yesterday?',hint:'étais-tu → Were you',explanation:'"Were you at home yesterday?"'},
  {id:'tobe_2_04',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Nous sommes fatigués.',answer:'We are tired.',alternatives:["We're tired."],hint:'nous sommes → We are',explanation:'"We are tired."'},
  {id:'tobe_2_05',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"Il n'était pas content.",answer:'He was not happy.',alternatives:["He wasn't happy."],hint:'il n\'était pas → He was not',explanation:'"He was not happy."'},
  {id:'tobe_2_06',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'I am a student from Madagascar.',answer:'I am a student from Madagascar.',hint:'I am',explanation:'"I am a student."'},
  {id:'tobe_2_07',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'Are you ready for the exam?',answer:'Are you ready for the exam?',hint:'Are you',explanation:'"Are you ready?"'},
  {id:'tobe_2_08',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'They were at the market this morning.',answer:'They were at the market this morning.',hint:'They were',explanation:'"They were at the market."'},
  {id:'tobe_2_09',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'She is not feeling well today.',answer:'She is not feeling well today.',hint:'She is not',explanation:'"She is not feeling well."'},
  {id:'tobe_2_10',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['a','am','I','teacher'],answer:'I am a teacher.',hint:'I + am',explanation:'"I am a teacher."'},
  {id:'tobe_2_11',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['home','is','She','not','at'],answer:'She is not at home.',hint:'She + is + not',explanation:'"She is not at home."'},
  {id:'tobe_2_12',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['you','Were','yesterday','school','at','?'],answer:'Were you at school yesterday?',hint:'Were + you',explanation:'"Were you at school yesterday?"'},
  {id:'tobe_2_13',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['very','are','They','happy'],answer:'They are very happy.',hint:'They + are',explanation:'"They are very happy."'},
  {id:'tobe_3_01',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'am not',example:'I am not sure about the answer.',hint:'"am not" = I am not',explanation:'"Am not" — forme négative de "I am".'},
  {id:'tobe_3_02',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'were not',example:'They were not at home when I called.',hint:'"were not" = pluriel passé négatif',explanation:'"Were not" — négatif passé pluriel.'},
  {id:'tobe_3_03',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'is the best',example:'She is the best student in the class.',hint:'"is" + superlatif',explanation:'"Is the best" — to be + superlatif.'},
  {id:'tobe_3_04',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'She am tired.',answer:'She is tired.',hint:'she → is',explanation:'"She is tired."'},
  {id:'tobe_3_05',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'They is students.',answer:'They are students.',hint:'they → are',explanation:'"They are students."'},
  {id:'tobe_3_06',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'I are happy.',answer:'I am happy.',hint:'I → am',explanation:'"I am happy."'},
  {id:'tobe_3_07',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'He were at school.',answer:'He was at school.',hint:'he + passé → was',explanation:'"He was at school."'},
  {id:'tobe_3_08',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'He is a doctor and she is a nurse.',answer:'Il est médecin et elle est infirmière.',hint:'is = est',explanation:'"He is a doctor."'},
  {id:'tobe_3_09',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:"Weren't you at the market this morning?",answer:'N\'étais-tu pas au marché ce matin ?',hint:"Weren't = n'étais-tu pas",explanation:'"Weren\'t you" = contraction négative.'},
  {id:'tobe_3_10',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'We are all tired after the trip.',answer:'Nous sommes tous fatigués après le voyage.',hint:'we are = nous sommes',explanation:'"We are" = "nous sommes".'},
  {id:'tobe_3_11',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'It is the most beautiful country in the world.',answer:"C'est le plus beau pays du monde.",hint:'it is = c\'est',explanation:'"It is" = "c\'est".'},
  {id:'tobe_3_12',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'I am from Madagascar and I am a student at the university. I am twenty years old.',question:'Quel âge a la personne ?',answer:'Twenty years old.',alternatives:['Twenty.','She is twenty.'],hint:'Écoutez "twenty years old"',explanation:'"I am twenty years old."'},
  {id:'tobe_3_13',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'Were they at the party last night? No they were not. They were at home.',question:'Où étaient-ils hier soir ?',answer:'They were at home.',alternatives:['At home.'],hint:'Écoutez "at home"',explanation:'"They were at home."'}
);

// ─── IRREGULAR VERBS ────────────────────────────────────────────────────────
exercises.irregularVerbs.push(
  {id:'irv_1_01',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme.',question:'go → past simple →',options:['went','goed','gone','goes'],answer:'went',hint:'go → went → gone',explanation:'"Went" = passé simple irrégulier de "go".'},
  {id:'irv_1_02',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme.',question:'see → past participle →',options:['saw','seen','seed','seened'],answer:'seen',hint:'see → saw → seen',explanation:'"Seen" = participe passé de "see".'},
  {id:'irv_1_03',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme.',question:'buy → past simple →',options:['buyed','boughted','bought','buys'],answer:'bought',hint:'buy → bought → bought',explanation:'"Bought" = passé irrégulier de "buy".'},
  {id:'irv_1_04',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme.',question:'eat → past participle →',options:['aten','eaten','eated','ate'],answer:'eaten',hint:'eat → ate → eaten',explanation:'"Eaten" = participe passé de "eat".'},
  {id:'irv_1_05',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme.',question:'come → past simple →',options:['comed','came','come','comes'],answer:'came',hint:'come → came → come',explanation:'"Came" = passé simple de "come".'},
  {id:'irv_1_06',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme.',question:'write → past participle →',options:['writed','written','wrote','writes'],answer:'written',hint:'write → wrote → written',explanation:'"Written" = participe passé de "write".'},
  {id:'irv_1_07',type:'fill-blank',diffLevel:1,instruction:'Donnez la forme correcte du verbe.',template:'She ___ the book in one day. (read)',answer:'read',hint:'read → read → read (même forme)',explanation:'"Read" (passé) = même orthographe, prononcé /rɛd/.'},
  {id:'irv_1_08',type:'fill-blank',diffLevel:1,instruction:'Donnez la forme correcte du verbe.',template:'They ___ a new house last year. (buy)',answer:'bought',hint:'buy → bought',explanation:'"Bought" = passé de "buy".'},
  {id:'irv_1_09',type:'fill-blank',diffLevel:1,instruction:'Donnez la forme correcte du verbe.',template:'He ___ me a beautiful letter. (write)',answer:'wrote',hint:'write → wrote',explanation:'"Wrote" = passé de "write".'},
  {id:'irv_1_10',type:'fill-blank',diffLevel:1,instruction:'Donnez la forme correcte du verbe.',template:'I have ___ that film twice. (see)',answer:'seen',hint:'see → seen (participe)',explanation:'"Seen" = participe de "see".'},
  {id:'irv_1_11',type:'fill-blank',diffLevel:1,instruction:'Donnez la forme correcte du verbe.',template:'We ___ to the beach last summer. (go)',answer:'went',hint:'go → went',explanation:'"Went" = passé de "go".'},
  {id:'irv_1_12',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['to','went','They','beach','the'],answer:'They went to the beach.',hint:'went = passé de go',explanation:'"They went to the beach."'},
  {id:'irv_1_13',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['saw','a','I','lion','zoo','at','the'],answer:'I saw a lion at the zoo.',hint:'saw = passé de see',explanation:'"I saw a lion."'},
  {id:'irv_1_14',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['bought','She','a','new','dress'],answer:'She bought a new dress.',hint:'bought = passé de buy',explanation:'"She bought a new dress."'},
  {id:'irv_1_15',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['eaten','never','have','I','sushi'],answer:'I have never eaten sushi.',hint:'eaten = participe de eat',explanation:'"I have never eaten sushi."'},
  {id:'irv_2_01',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Il a écrit une très belle lettre.',answer:'He wrote a very beautiful letter.',hint:'il a écrit → he wrote',explanation:'"Wrote" = passé de "write".'},
  {id:'irv_2_02',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Nous sommes allés au marché ce matin.',answer:'We went to the market this morning.',hint:'nous sommes allés → we went',explanation:'"Went" = passé de "go".'},
  {id:'irv_2_03',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'She saw her friend at the supermarket.',answer:'She saw her friend at the supermarket.',hint:'saw = passé de see',explanation:'"She saw her friend."'},
  {id:'irv_2_04',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'He ate three pieces of cake.',answer:'He ate three pieces of cake.',hint:'ate = passé de eat',explanation:'"He ate three pieces."'},
  {id:'irv_2_05',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['written','has','He','a','beautiful','poem'],answer:'He has written a beautiful poem.',hint:'has + written (participe)',explanation:'"Has written" = present perfect.'},
  {id:'irv_2_06',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['saw','We','sunset','beautiful','a'],answer:'We saw a beautiful sunset.',hint:'saw = passé de see',explanation:'"We saw a beautiful sunset."'},
  {id:'irv_3_01',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'went',example:'She went to the market and bought some vegetables.',hint:'went = passé de go',explanation:'"Went" — passé irrégulier.'},
  {id:'irv_3_02',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'have seen',example:'I have seen that film three times.',hint:'have + seen (participe)',explanation:'"Have seen" — present perfect.'},
  {id:'irv_3_03',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'wrote',example:'He wrote a poem for his mother.',hint:'wrote = passé de write',explanation:'"Wrote" — passé irrégulier.'},
  {id:'irv_3_04',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'bought',example:'We bought some fresh fish at the market.',hint:'bought = passé de buy',explanation:'"Bought" — passé irrégulier.'},
  {id:'irv_3_05',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'He goed to school.',answer:'He went to school.',hint:'go → went (irrégulier)',explanation:'"Went" = passé de "go".'},
  {id:'irv_3_06',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'She buyed a new phone.',answer:'She bought a new phone.',hint:'buy → bought (irrégulier)',explanation:'"Bought" = passé de "buy".'},
  {id:'irv_3_07',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'I have saw that film.',answer:'I have seen that film.',hint:'see → seen (participe)',explanation:'"Seen" = participe de "see".'},
  {id:'irv_3_08',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'They writed the letter.',answer:'They wrote the letter.',hint:'write → wrote (irrégulier)',explanation:'"Wrote" = passé de "write".'},
  {id:'irv_3_09',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'She bought some bread this morning.',answer:'Elle a acheté du pain ce matin.',hint:'bought = a acheté',explanation:'"She bought" = "elle a acheté".'},
  {id:'irv_3_10',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'We saw a beautiful sunset.',answer:'Nous avons vu un beau coucher de soleil.',hint:'saw = avons vu',explanation:'"We saw" = "nous avons vu".'},
  {id:'irv_3_11',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'He wrote all night.',answer:'Il a écrit toute la nuit.',hint:'wrote = a écrit',explanation:'"He wrote" = "il a écrit".'},
  {id:'irv_3_12',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'They came to my party.',answer:'Ils sont venus à ma fête.',hint:'came = sont venus',explanation:'"They came" = "ils sont venus".'},
  {id:'irv_3_13',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'Last weekend I went to the beach with my family. We ate grilled fish and drank coconut water.',question:'Où sont-ils allés le week-end dernier ?',answer:'To the beach.',alternatives:['The beach.'],hint:'Écoutez "beach"',explanation:'"We went to the beach."'},
  {id:'irv_3_14',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'She has written three books and has won several prizes.',question:'Combien de livres a-t-elle écrits ?',answer:'Three books.',alternatives:['Three.'],hint:'Écoutez le nombre',explanation:'"She has written three books."'}
);


// ─── BATCH 3b EXERCISES ──────────────────────────────────────────────────────

// ─── POSSESSIVES ────────────────────────────────────────────────────────────
exercises.possessives.push(
  {id:'pos_1_01',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme.',question:'This is ___ book. (I have it)',options:['my','mine','me','I'],answer:'my',hint:'adjectif possessif devant nom → my',explanation:'"My book" — adjectif possessif.'},
  {id:'pos_1_02',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme.',question:'Is this pen ___? (you own it)',options:['your','yours','you','ye'],answer:'yours',hint:'pronom possessif sans nom → yours',explanation:'"Yours" — pronom possessif.'},
  {id:'pos_1_03',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme.',question:'That car is ___. (she owns it)',options:['her','hers','his','its'],answer:'hers',hint:'pronom possessif féminin → hers',explanation:'"Hers" — pronom possessif féminin.'},
  {id:'pos_1_04',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme.',question:'These are ___ keys. (they own them)',options:['they','their','them','theirs'],answer:'their',hint:'adjectif possessif pluriel → their',explanation:'"Their keys" — adjectif possessif.'},
  {id:'pos_1_05',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme.',question:'The cat drinks ___ milk.',options:['it','its','it\'s','his'],answer:'its',hint:'animal → its (sans apostrophe)',explanation:'"Its milk" — possessif neutre.'},
  {id:'pos_1_06',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme.',question:"John's book = ___ book",options:["John's","Johns","the book of John","John"],answer:"John's",hint:"nom + 's = possession",explanation:'"John\'s book" — apostrophe possessif.'},
  {id:'pos_1_07',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon possessif.',template:'This is ___ pen — please give it back. (I own it)',answer:'my',hint:'adjectif possessif → my',explanation:'"My pen."'},
  {id:'pos_1_08',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon possessif.',template:'Is that ___ car? (you)',answer:'your',hint:'adjectif possessif → your',explanation:'"Your car."'},
  {id:'pos_1_09',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon possessif.',template:'The dog wagged ___ tail.',answer:'its',hint:'animal → its',explanation:'"Its tail" — possessif neutre.'},
  {id:'pos_1_10',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon possessif.',template:'We gave ___ teacher a gift.',answer:'our',hint:'we → our',explanation:'"Our teacher."'},
  {id:'pos_1_11',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon possessif.',template:'That bag is ___. (she owns it)',answer:'hers',hint:'pronom possessif → hers',explanation:'"That bag is hers."'},
  {id:'pos_1_12',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['my','is','This','book'],answer:'This is my book.',hint:'my + nom',explanation:'"This is my book."'},
  {id:'pos_1_13',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['their','They','lost','keys'],answer:'They lost their keys.',hint:'their + nom',explanation:'"They lost their keys."'},
  {id:'pos_1_14',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['hers','is','bag','The','red'],answer:'The red bag is hers.',hint:'pronom possessif en fin',explanation:'"The red bag is hers."'},
  {id:'pos_1_15',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['name','What','your','is','?'],answer:'What is your name?',hint:'your + nom',explanation:'"What is your name?"'},
  {id:'pos_2_01',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'C\'est mon livre, pas le tien.',answer:'This is my book, not yours.',hint:'le tien → yours (pronom)',explanation:'"Yours" — pronom possessif.'},
  {id:'pos_2_02',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Est-ce que c\'est sa voiture ? (à lui)',answer:'Is this his car?',hint:'sa (à lui) → his',explanation:'"His car" — masculin.'},
  {id:'pos_2_03',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'My sister lost her keys again.',answer:'My sister lost her keys again.',hint:'my, her',explanation:'"My sister" + "her keys."'},
  {id:'pos_2_04',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'Is this yours or mine?',answer:'Is this yours or mine?',hint:'yours, mine = pronoms possessifs',explanation:'"Yours or mine."'},
  {id:'pos_2_05',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'The dog is wagging its tail.',answer:'The dog is wagging its tail.',hint:'its = neutre',explanation:'"Its tail."'},
  {id:'pos_2_06',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['mine','is','This','not','yours'],answer:'This is mine not yours.',hint:'mine, yours = pronoms',explanation:'"This is mine, not yours."'},
  {id:'pos_2_07',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['her','loves','She','cat','and','feeds','it','every','day'],answer:'She loves her cat and feeds it every day.',hint:'her cat, feeds it',explanation:'"She loves her cat."'},
  {id:'pos_3_01',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'my own',example:'I have my own room at home.',hint:'"my own" = mon propre',explanation:'"My own" = emphase sur la possession.'},
  {id:'pos_3_02',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'theirs',example:'That house on the corner is theirs.',hint:'"theirs" = le leur/la leur',explanation:'"Theirs" — pronom possessif pluriel.'},
  {id:'pos_3_03',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:"John's",example:"That is John's bicycle.",hint:"nom + 's = possession",explanation:'"John\'s" — cas possessif.'},
  {id:'pos_3_04',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'This is hers book.',answer:'This is her book.',hint:'adjectif possessif devant nom → her',explanation:'"Her book" — adjectif, pas pronom.'},
  {id:'pos_3_05',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:"The cat lost it's collar.",answer:"The cat lost its collar.",hint:"its = possessif (sans apostrophe); it's = it is",explanation:'"Its collar" — possessif sans apostrophe.'},
  {id:'pos_3_06',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:"Is this your's?",answer:'Is this yours?',hint:"yours sans apostrophe",explanation:'"Yours" — pronom sans apostrophe.'},
  {id:'pos_3_07',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:"She lost she's bag.",answer:'She lost her bag.',hint:"adjectif possessif → her",explanation:'"Her bag" — adjectif possessif féminin.'},
  {id:'pos_3_08',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:"That is Marie's sister.",answer:"C'est la sœur de Marie.",hint:"Marie's = de Marie",explanation:'Cas possessif anglais → "de" en français.'},
  {id:'pos_3_09',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'These books are ours.',answer:'Ces livres sont les nôtres.',hint:'ours = les nôtres',explanation:'"Ours" = "les nôtres".'},
  {id:'pos_3_10',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'He lost his keys.',answer:'Il a perdu ses clés.',hint:'his keys = ses clés',explanation:'"His keys" = "ses clés".'},
  {id:'pos_3_11',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:"That is my neighbours' dog.",answer:'C\'est le chien de mes voisins.',hint:"neighbours' = de mes voisins",explanation:'Apostrophe pluriel → "de mes voisins".'},
  {id:'pos_3_12',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'Is this your phone? No mine is the red one. That blue one is hers.',question:'De quelle couleur est le téléphone de cette personne ?',answer:'Red.',alternatives:['The red one.'],hint:'Écoutez "mine is the red one"',explanation:'"Mine is the red one."'},
  {id:'pos_3_13',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:"John's car is older than mine but his is much bigger.",question:'Quel possessif représente la voiture de John ?',answer:"John's / His.",alternatives:["John's car.","His car."],hint:'Écoutez le possessif utilisé',explanation:'"John\'s" ou "his" pour la voiture de John.'}
);

// ─── ADVERBS ────────────────────────────────────────────────────────────────
exercises.adverbs.push(
  {id:'adv_1_01',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme.',question:'She sings ___. (beautiful)',options:['beautiful','beautifully','beauty','more beautiful'],answer:'beautifully',hint:'adjectif → adverbe = + -ly',explanation:'"Beautifully" — adverbe de manière.'},
  {id:'adv_1_02',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme.',question:'He drives ___. (careful)',options:['careful','carefullier','carefully','care'],answer:'carefully',hint:'careful → carefully',explanation:'"Carefully" — adverbe de manière.'},
  {id:'adv_1_03',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme.',question:'I am ___ tired. (very)',options:['very','much','too much','so much'],answer:'very',hint:'very + adjectif',explanation:'"Very" modifie un adjectif.'},
  {id:'adv_1_04',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme.',question:'They ___ arrive late.',options:['never','no','not','none'],answer:'never',hint:'fréquence négative → never',explanation:'"Never" — adverbe de fréquence.'},
  {id:'adv_1_05',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme.',question:'He speaks English ___. (good)',options:['good','goodly','well','better'],answer:'well',hint:'good → well (adverbe irrégulier)',explanation:'"Well" = adverbe de "good".'},
  {id:'adv_1_06',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne forme.',question:'She ___ studies in the library.',options:['always','all ways','all the way','all time'],answer:'always',hint:'adverbe de fréquence',explanation:'"Always" — 100% du temps.'},
  {id:'adv_1_07',type:'fill-blank',diffLevel:1,instruction:'Formez l\'adverbe.',template:'She speaks very ___. (quiet)',answer:'quietly',hint:'quiet + ly',explanation:'"Quietly" — adverbe de manière.'},
  {id:'adv_1_08',type:'fill-blank',diffLevel:1,instruction:'Complétez avec l\'adverbe de fréquence.',template:'I am ___ late — hurry up! (already)',answer:'already',hint:'already = déjà',explanation:'"Already late."'},
  {id:'adv_1_09',type:'fill-blank',diffLevel:1,instruction:'Complétez avec l\'adverbe de fréquence.',template:'She ___ exercises. (rarely)',answer:'rarely',alternatives:['seldom'],hint:'adverbe de fréquence basse',explanation:'"Rarely" — peu fréquent.'},
  {id:'adv_1_10',type:'fill-blank',diffLevel:1,instruction:'Formez l\'adverbe.',template:'He finished the work ___. (quick)',answer:'quickly',hint:'quick + ly',explanation:'"Quickly" — adverbe de manière.'},
  {id:'adv_1_11',type:'fill-blank',diffLevel:1,instruction:'Complétez avec l\'adverbe.',template:'She ___ studies at the library. (usually)',answer:'usually',hint:'adverbe de fréquence',explanation:'"Usually" — environ 80% du temps.'},
  {id:'adv_1_12',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['always','She','coffee','drinks','morning','in','the'],answer:'She always drinks coffee in the morning.',hint:'adverbe entre sujet et verbe',explanation:'"Always" entre sujet et verbe principal.'},
  {id:'adv_1_13',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['runs','He','very','fast'],answer:'He runs very fast.',hint:'very + adverbe',explanation:'"He runs very fast."'},
  {id:'adv_1_14',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['never','I','late','am'],answer:'I am never late.',hint:'never après to be',explanation:'"I am never late."'},
  {id:'adv_1_15',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['loudly','Please','not','speak','so'],answer:'Please do not speak so loudly.',alternatives:['Please not speak so loudly.'],hint:'do not + adverbe',explanation:'"Please do not speak so loudly."'},
  {id:'adv_2_01',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Elle parle très doucement.',answer:'She speaks very softly.',hint:'doucement → softly',explanation:'"Softly" = "doucement".'},
  {id:'adv_2_02',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"Il arrive toujours à l'heure.",answer:'He always arrives on time.',hint:'toujours → always',explanation:'"Always arrives on time."'},
  {id:'adv_2_03',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Nous nous voyons rarement.',answer:'We rarely see each other.',alternatives:['We seldom see each other.'],hint:'rarement → rarely',explanation:'"Rarely see each other."'},
  {id:'adv_2_04',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'She always works hard.',answer:'She always works hard.',hint:'always + works hard',explanation:'"Always works hard."'},
  {id:'adv_2_05',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'He never eats meat.',answer:'He never eats meat.',hint:'never + eats',explanation:'"He never eats meat."'},
  {id:'adv_2_06',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'They speak English very well.',answer:'They speak English very well.',hint:'very well',explanation:'"Very well."'},
  {id:'adv_2_07',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['carefully','drives','always','She'],answer:'She always drives carefully.',hint:'always + verbe + adverbe',explanation:'"She always drives carefully."'},
  {id:'adv_2_08',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['hard','very','works','He'],answer:'He works very hard.',hint:'very + hard',explanation:'"He works very hard."'},
  {id:'adv_3_01',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'always',example:'She always studies in the library in the evening.',hint:'"always" entre sujet et verbe',explanation:'"Always" = adverbe de fréquence.'},
  {id:'adv_3_02',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'quickly',example:'He finished his homework quickly.',hint:'"quickly" = rapidement',explanation:'"Quickly" = adverbe de manière.'},
  {id:'adv_3_03',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'never',example:'I have never eaten Chinese food.',hint:'"never" = jamais',explanation:'"Never" = adverbe de fréquence.'},
  {id:'adv_3_04',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'She sings beautiful.',answer:'She sings beautifully.',hint:'après un verbe d\'action → adverbe -ly',explanation:'"Beautifully" — adverbe, pas adjectif.'},
  {id:'adv_3_05',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'He drives very careful.',answer:'He drives very carefully.',hint:'careful → carefully',explanation:'"Carefully" — adverbe.'},
  {id:'adv_3_06',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'She speaks English good.',answer:'She speaks English well.',hint:'good → well (irrégulier)',explanation:'"Well" = adverbe irrégulier de "good".'},
  {id:'adv_3_07',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'They arrived quick.',answer:'They arrived quickly.',hint:'quick → quickly',explanation:'"Quickly" — adverbe de manière.'},
  {id:'adv_3_08',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'He always speaks too fast.',answer:'Il parle toujours trop vite.',hint:'always = toujours, fast = vite',explanation:'"Always speaks too fast."'},
  {id:'adv_3_09',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'She finished her work quickly.',answer:'Elle a fini son travail rapidement.',hint:'quickly = rapidement',explanation:'"Quickly" = "rapidement".'},
  {id:'adv_3_10',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'I rarely come home before 8pm.',answer:'Je rentre rarement avant 20h.',hint:'rarely = rarement',explanation:'"Rarely" = "rarement".'},
  {id:'adv_3_11',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'She speaks English fluently but she always makes small grammar mistakes.',question:'Comment parle-t-elle l\'anglais ?',answer:'Fluently.',alternatives:['She speaks fluently.'],hint:'Écoutez "fluently"',explanation:'"Speaks English fluently."'},
  {id:'adv_3_12',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'He never arrives late and always finishes his work early.',question:'Est-ce qu\'il arrive souvent en retard ?',answer:'No, he never arrives late.',alternatives:['No.','Never.'],hint:'Écoutez "never"',explanation:'"He never arrives late."'}
);

// ─── COUNTABLE / UNCOUNTABLE ────────────────────────────────────────────────
exercises.countableUncountable.push(
  {id:'cu_1_01',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'___ water is in the bottle?',options:['How many','How much','A few','Several'],answer:'How much',hint:'water = non-dénombrable → how much',explanation:'"How much" avec les non-dénombrables.'},
  {id:'cu_1_02',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'There are ___ books on the table.',options:['much','many','a little','any'],answer:'many',hint:'books = dénombrable pluriel → many',explanation:'"Many" avec les dénombrables pluriels.'},
  {id:'cu_1_03',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'I have ___ money. (petite quantité)',options:['a few','a little','many','several'],answer:'a little',hint:'money = non-dénombrable → a little',explanation:'"A little" avec les non-dénombrables.'},
  {id:'cu_1_04',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'She has ___ friends.',options:['a little','a few','much','a much'],answer:'a few',hint:'friends = dénombrable → a few',explanation:'"A few" avec les dénombrables.'},
  {id:'cu_1_05',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'I need ___ advice.',options:['a few','a','many','some'],answer:'some',hint:'advice = non-dénombrable',explanation:'"Advice" est non-dénombrable → some/any.'},
  {id:'cu_1_06',type:'multiple-choice',diffLevel:1,instruction:'Choisissez la bonne réponse.',question:'There is ___ information on this topic.',options:['few','little','many','a few'],answer:'little',hint:'information = non-dénombrable → little',explanation:'"Little" avec les non-dénombrables.'},
  {id:'cu_1_07',type:'fill-blank',diffLevel:1,instruction:'Complétez avec much, many, a little ou a few.',template:'I need ___ help with this.',answer:'a little',hint:'help = non-dénombrable → a little',explanation:'"A little help" — non-dénombrable.'},
  {id:'cu_1_08',type:'fill-blank',diffLevel:1,instruction:'Complétez avec much, many, a little ou a few.',template:'How ___ students are in the class?',answer:'many',hint:'students = dénombrable → many',explanation:'"How many students."'},
  {id:'cu_1_09',type:'fill-blank',diffLevel:1,instruction:'Complétez avec much, many, a little ou a few.',template:'How ___ sugar do you take?',answer:'much',hint:'sugar = non-dénombrable → much',explanation:'"How much sugar."'},
  {id:'cu_1_10',type:'fill-blank',diffLevel:1,instruction:'Complétez avec much, many, a little ou a few.',template:'There are only ___ apples left.',answer:'a few',hint:'apples = dénombrable → a few',explanation:'"A few apples" — quelques.'},
  {id:'cu_1_11',type:'fill-blank',diffLevel:1,instruction:'Complétez avec much, many, a little ou a few.',template:'She has ___ patience with difficult students.',answer:'little',hint:'patience = non-dénombrable → little',explanation:'"Little patience" — peu de patience.'},
  {id:'cu_1_12',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['much','How','do','water','you','drink','?'],answer:'How much water do you drink?',hint:'How much + non-dénombrable',explanation:'"How much water?"'},
  {id:'cu_1_13',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['few','There','students','are','only','a'],answer:'There are only a few students.',hint:'a few + dénombrable pluriel',explanation:'"A few students."'},
  {id:'cu_1_14',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['little','She','has','a','money'],answer:'She has a little money.',hint:'a little + non-dénombrable',explanation:'"A little money."'},
  {id:'cu_1_15',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['many','books','How','have','you','read','?'],answer:'How many books have you read?',hint:'How many + dénombrable',explanation:'"How many books?"'},
  {id:'cu_2_01',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Combien de lait reste-t-il ?',answer:'How much milk is there left?',hint:'combien de + non-dénombrable → how much',explanation:'"How much milk."'},
  {id:'cu_2_02',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"J'ai quelques amis ici.",answer:'I have a few friends here.',hint:'quelques + dénombrable → a few',explanation:'"A few friends."'},
  {id:'cu_2_03',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"Il ne boit pas beaucoup d'eau.",answer:'He does not drink much water.',alternatives:["He doesn't drink much water."],hint:'beaucoup de + non-dénombrable → much',explanation:'"Not much water."'},
  {id:'cu_2_04',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Il faut un peu de patience.',answer:'You need a little patience.',hint:'un peu de + non-dénombrable → a little',explanation:'"A little patience."'},
  {id:'cu_2_05',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'How much money do you need?',answer:'How much money do you need?',hint:'how much + money',explanation:'"How much money."'},
  {id:'cu_2_06',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'There are only a few cookies left.',answer:'There are only a few cookies left.',hint:'a few + dénombrable',explanation:'"A few cookies."'},
  {id:'cu_2_07',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'She drinks a lot of water every day.',answer:'She drinks a lot of water every day.',hint:'a lot of + non-dénombrable',explanation:'"A lot of water."'},
  {id:'cu_2_08',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'I need some more information.',answer:'I need some more information.',hint:'information = non-dénombrable',explanation:'"Some more information."'},
  {id:'cu_2_09',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['many','are','How','students','there','?'],answer:'How many students are there?',hint:'How many + dénombrable',explanation:'"How many students?"'},
  {id:'cu_2_10',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['a','has','She','patience','little'],answer:'She has a little patience.',hint:'a little + non-dénombrable',explanation:'"A little patience."'},
  {id:'cu_2_11',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['much','There','not','coffee','is','very'],answer:'There is not very much coffee.',hint:'not much + non-dénombrable',explanation:'"Not very much coffee."'},
  {id:'cu_3_01',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'a few',example:'I have a few questions about the homework.',hint:'"a few" + dénombrable pluriel',explanation:'"A few" = quelques (dénombrable).'},
  {id:'cu_3_02',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'a little',example:'Could you give me a little help?',hint:'"a little" + non-dénombrable',explanation:'"A little" = un peu de (non-dénombrable).'},
  {id:'cu_3_03',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'I have few money.',answer:'I have little money.',hint:'money = non-dénombrable → little',explanation:'"Little money" — non-dénombrable.'},
  {id:'cu_3_04',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'How many sugar do you want?',answer:'How much sugar do you want?',hint:'sugar = non-dénombrable → how much',explanation:'"How much sugar."'},
  {id:'cu_3_05',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'She gave me an advice.',answer:'She gave me some advice.',alternatives:['She gave me a piece of advice.'],hint:'advice = non-dénombrable → some/a piece of',explanation:'"Advice" est non-dénombrable.'},
  {id:'cu_3_06',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'There are very few people here.',answer:'Il y a très peu de gens ici.',hint:'very few = très peu de (dénombrable)',explanation:'"Very few" = "très peu de".'},
  {id:'cu_3_07',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'I need a little time.',answer:"J'ai besoin d'un peu de temps.",hint:'a little time = un peu de temps',explanation:'"A little" = "un peu de".'},
  {id:'cu_3_08',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'How many languages do you speak?',answer:'Combien de langues parles-tu ?',hint:'how many = combien de (dénombrable)',explanation:'"How many" = "combien de".'},
  {id:'cu_3_09',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:"I don't have much time today but I have a few minutes to help you.",question:'A-t-il beaucoup de temps ?',answer:"No, he doesn't have much time.",alternatives:['No, not much.'],hint:'Écoutez "not much time"',explanation:'"Not much time" — non-dénombrable.'}
);

// ─── CONNECTORS ─────────────────────────────────────────────────────────────
exercises.connectors.push(
  {id:'con_1_01',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon connecteur.',question:'I was tired ___ I went to bed early.',options:['so','but','although','because'],answer:'so',hint:'résultat → so',explanation:'"So" exprime la conséquence.'},
  {id:'con_1_02',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon connecteur.',question:'She loves music ___ she cannot sing.',options:['so','but','because','although'],answer:'but',hint:'contraste → but',explanation:'"But" exprime le contraste.'},
  {id:'con_1_03',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon connecteur.',question:'He studies hard ___ he wants to pass.',options:['because','but','so','although'],answer:'because',hint:'cause → because',explanation:'"Because" exprime la cause.'},
  {id:'con_1_04',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon connecteur.',question:'___ it was raining, we went for a walk.',options:['Although','Because','So','But'],answer:'Although',hint:'concession → although',explanation:'"Although" exprime la concession.'},
  {id:'con_1_05',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon connecteur.',question:'He was sick; ___, he came to work.',options:['however','although','so','because'],answer:'however',hint:'contraste formel → however',explanation:'"However" = "cependant" (formel).'},
  {id:'con_1_06',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon connecteur.',question:'I will go ___ you come with me.',options:['if','but','so','although'],answer:'if',hint:'condition → if',explanation:'"If" exprime la condition.'},
  {id:'con_1_07',type:'fill-blank',diffLevel:1,instruction:'Choisissez le bon connecteur.',template:'She studied hard ___ she failed the exam.',answer:'but',hint:'contraste inattendu → but',explanation:'"But" — contraste.'},
  {id:'con_1_08',type:'fill-blank',diffLevel:1,instruction:'Choisissez le bon connecteur.',template:'He was late ___ the traffic was bad.',answer:'because',hint:'cause → because',explanation:'"Because" — cause.'},
  {id:'con_1_09',type:'fill-blank',diffLevel:1,instruction:'Choisissez le bon connecteur.',template:'It was cold; ___, we enjoyed our walk.',answer:'however',hint:'cependant → however',explanation:'"However" — contraste formel.'},
  {id:'con_1_10',type:'fill-blank',diffLevel:1,instruction:'Choisissez le bon connecteur.',template:'She was tired, ___ she finished the work.',answer:'but',hint:'malgré la fatigue → but',explanation:'"But" — contraste.'},
  {id:'con_1_11',type:'fill-blank',diffLevel:1,instruction:'Choisissez le bon connecteur.',template:"I'll help ___ you ask politely.",answer:'if',hint:'condition → if',explanation:'"If" — condition.'},
  {id:'con_1_12',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['tired','so','I','early','went','bed','to','was','I'],answer:'I was tired so I went to bed early.',hint:'résultat → so',explanation:'"So I went to bed early."'},
  {id:'con_1_13',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['speaks','She','well','English','she','but','cannot','write'],answer:'She speaks English well but she cannot write.',hint:'contraste → but',explanation:'"But she cannot write."'},
  {id:'con_1_14',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['raining','it','go','Although','out','was','we','went'],answer:'Although it was raining we went out.',hint:'concession → although',explanation:'"Although it was raining..."'},
  {id:'con_1_15',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['hungry','was','he','so','He','ate','a','lot'],answer:'He was hungry so he ate a lot.',hint:'résultat → so',explanation:'"So he ate a lot."'},
  {id:'con_2_01',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"Il était fatigué mais il a continué à travailler.",answer:'He was tired but he continued working.',alternatives:['He was tired but continued working.'],hint:'mais → but',explanation:'"But" — contraste.'},
  {id:'con_2_02',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"Elle a raté l'examen parce qu'elle n'avait pas étudié.",answer:'She failed the exam because she had not studied.',hint:'parce que → because',explanation:'"Because" — cause.'},
  {id:'con_2_03',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Bien qu\'il soit pauvre, il est généreux.',answer:'Although he is poor, he is generous.',hint:'bien que → although',explanation:'"Although" — concession.'},
  {id:'con_2_04',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"J'ai travaillé dur, donc j'ai réussi.",answer:'I worked hard so I passed.',hint:'donc → so',explanation:'"So" — conséquence.'},
  {id:'con_2_05',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Il parle anglais ; cependant, il fait beaucoup de fautes.',answer:'He speaks English; however, he makes many mistakes.',hint:'cependant → however',explanation:'"However" — contraste formel.'},
  {id:'con_2_06',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'I was hungry so I ate a big meal.',answer:'I was hungry so I ate a big meal.',hint:'so = donc',explanation:'"So" — conséquence.'},
  {id:'con_2_07',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'She failed because she did not study.',answer:'She failed because she did not study.',hint:'because = parce que',explanation:'"Because" — cause.'},
  {id:'con_2_08',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'Although it was raining we still went out.',answer:'Although it was raining we still went out.',hint:'although = bien que',explanation:'"Although" — concession.'},
  {id:'con_2_09',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'He is kind but sometimes impatient.',answer:'He is kind but sometimes impatient.',hint:'but = mais',explanation:'"But" — contraste.'},
  {id:'con_2_10',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'I need to study therefore I cannot go out.',answer:'I need to study therefore I cannot go out.',hint:'therefore = donc (formel)',explanation:'"Therefore" — conséquence formelle.'},
  {id:'con_2_11',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['hard','studied','but','He','failed','he'],answer:'He studied hard but he failed.',hint:'contraste → but',explanation:'"But he failed."'},
  {id:'con_2_12',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['she','did','Because','eat','not','she','sick','got'],answer:'Because she did not eat she got sick.',hint:'cause → because',explanation:'"Because she did not eat."'},
  {id:'con_2_13',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['tired','was','she','Although','well','worked','she'],answer:'Although she was tired she worked well.',hint:'concession → although',explanation:'"Although she was tired."'},
  {id:'con_2_14',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['hungry','so','ate','lot','a','He','was','he'],answer:'He was hungry so he ate a lot.',hint:'résultat → so',explanation:'"So he ate a lot."'},
  {id:'con_2_15',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['wrong','was','he','admitted','it','However','he'],answer:'He was wrong; however, he admitted it.',hint:'contraste formel → however',explanation:'"However, he admitted it."'},
  {id:'con_3_01',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'although',example:'Although it was very hot, we walked all the way.',hint:'"although" = concession',explanation:'"Although" — contraste avec concession.'},
  {id:'con_3_02',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'He was tired but however he finished.',answer:'He was tired but he finished.',alternatives:['He was tired; however, he finished.'],hint:'"but" et "however" ne s\'utilisent pas ensemble',explanation:'"But" ou "however", pas les deux ensemble.'},
  {id:'con_3_03',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'He is rich; however, he is unhappy.',answer:'Il est riche ; cependant, il est malheureux.',hint:'however = cependant',explanation:'"However" = "cependant".'},
  {id:'con_3_04',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'She studied all night so she passed.',answer:'Elle a étudié toute la nuit donc elle a réussi.',hint:'so = donc',explanation:'"So" = "donc".'},
  {id:'con_3_05',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'Although the weather was bad we decided to go hiking. It was tiring but very beautiful.',question:'Quel connecteur de concession est utilisé ?',answer:'Although.',alternatives:['Although (bien que).'],hint:'Écoutez le premier mot',explanation:'"Although" = concession.'}
);

// ─── TENSE CHOOSER ──────────────────────────────────────────────────────────
exercises.tenseChooser.push(
  {id:'tc_1_01',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon temps.',question:'She ___ to school every day. (routine)',options:['goes','is going','went','has gone'],answer:'goes',hint:'routine → present simple',explanation:'Habitude/routine → present simple.'},
  {id:'tc_1_02',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon temps.',question:'Look! He ___ over there! (now)',options:['runs','ran','is running','has run'],answer:'is running',hint:'maintenant → present continuous',explanation:'Action en cours → present continuous.'},
  {id:'tc_1_03',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon temps.',question:'I ___ her yesterday. (specific past)',options:['see','saw','have seen','am seeing'],answer:'saw',hint:'hier = passé précis → past simple',explanation:'Moment précis → past simple.'},
  {id:'tc_1_04',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon temps.',question:'They ___ in Paris in 2015. (specific year)',options:['lived','have lived','live','are living'],answer:'lived',hint:'2015 = date précise → past simple',explanation:'Date précise → past simple.'},
  {id:'tc_1_05',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon temps.',question:'He ___ TV when I called. (in progress)',options:['watched','was watching','has watched','watches'],answer:'was watching',hint:'en cours quand → past continuous',explanation:'Action interrompue → past continuous.'},
  {id:'tc_1_06',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon temps.',question:'By next year, she ___ the project. (before future)',options:['will finish','will have finished','has finished','finishes'],answer:'will have finished',hint:'avant un moment futur → future perfect',explanation:'Action accomplie avant un futur → future perfect.'},
  {id:'tc_1_07',type:'fill-blank',diffLevel:1,instruction:'Choisissez le bon temps.',template:'I ___ coffee every morning. (habit)',answer:'drink',hint:'habitude → present simple',explanation:'"Drink" — habitude quotidienne.'},
  {id:'tc_1_08',type:'fill-blank',diffLevel:1,instruction:'Choisissez le bon temps.',template:'She ___ that film twice already. (result matters)',answer:'has seen',hint:'résultat présent → present perfect',explanation:'"Has seen" — experience, résultat présent.'},
  {id:'tc_1_09',type:'fill-blank',diffLevel:1,instruction:'Choisissez le bon temps.',template:'He ___ at 7am yesterday. (specific time)',answer:'arrived',hint:'heure précise hier → past simple',explanation:'"Arrived" — past simple.'},
  {id:'tc_1_10',type:'fill-blank',diffLevel:1,instruction:'Choisissez le bon temps.',template:'We ___ dinner when you called. (in progress)',answer:'were having',hint:'en cours → past continuous',explanation:'"Were having" — past continuous.'},
  {id:'tc_1_11',type:'fill-blank',diffLevel:1,instruction:'Choisissez le bon temps.',template:'By the time they arrive, I ___ everything. (before future)',answer:'will have prepared',hint:'avant leur arrivée future → future perfect',explanation:'"Will have prepared."'},
  {id:'tc_1_12',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['every','goes','She','morning','jogging'],answer:'She goes jogging every morning.',hint:'habitude → present simple',explanation:'"Goes jogging" — routine.'},
  {id:'tc_1_13',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['was','studying','She','when','I','arrived'],answer:'She was studying when I arrived.',hint:'en cours + interrompu → past continuous',explanation:'"Was studying" — past continuous.'},
  {id:'tc_1_14',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['have','never','I','been','to','Asia'],answer:'I have never been to Asia.',hint:'expérience → present perfect',explanation:'"Have never been" — expérience.'},
  {id:'tc_1_15',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['arrived','already','had','She','he','when','came'],answer:'She had already arrived when he came.',hint:'avant un autre passé → past perfect',explanation:'"Had already arrived" — past perfect.'},
  {id:'tc_2_01',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Il regarde la télé en ce moment.',answer:'He is watching TV right now.',hint:'en ce moment → present continuous',explanation:'"Is watching" — present continuous.'},
  {id:'tc_2_02',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"J'ai déjà mangé.",answer:'I have already eaten.',hint:'déjà → present perfect',explanation:'"Have already eaten."'},
  {id:'tc_2_03',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"Que faisais-tu hier à 8h ?",answer:'What were you doing yesterday at 8?',hint:'en cours à un moment passé → past continuous',explanation:'"Were you doing" — past continuous.'},
  {id:'tc_2_04',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"D'ici demain, j'aurai fini.",answer:'By tomorrow, I will have finished.',hint:'avant demain → future perfect',explanation:'"Will have finished" — future perfect.'},
  {id:'tc_2_05',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:'Elle travaille ici depuis 2015.',answer:'She has been working here since 2015.',hint:'depuis + encore maintenant → present perfect continuous',explanation:'"Has been working since."'},
  {id:'tc_2_06',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'She drinks coffee every morning.',answer:'She drinks coffee every morning.',hint:'habitude → present simple',explanation:'"Drinks" — routine.'},
  {id:'tc_2_07',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'He was working when I arrived.',answer:'He was working when I arrived.',hint:'past continuous',explanation:'"Was working" — past continuous.'},
  {id:'tc_2_08',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'Have you ever been to England?',answer:'Have you ever been to England?',hint:'expérience → present perfect',explanation:'"Have you ever been."'},
  {id:'tc_2_09',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'They had already left when we arrived.',answer:'They had already left when we arrived.',hint:'avant un passé → past perfect',explanation:'"Had already left."'},
  {id:'tc_2_10',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'By the time you wake up I will have finished.',answer:'By the time you wake up I will have finished.',hint:'before future → future perfect',explanation:'"Will have finished."'},
  {id:'tc_2_11',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['every','drinks','She','morning','coffee'],answer:'She drinks coffee every morning.',hint:'habitude → present simple',explanation:'"Drinks" — present simple.'},
  {id:'tc_2_12',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['working','when','was','arrived','He','I'],answer:'He was working when I arrived.',hint:'past continuous + simple',explanation:'"Was working when I arrived."'},
  {id:'tc_2_13',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['ever','you','Have','been','to','London','?'],answer:'Have you ever been to London?',hint:'expérience → present perfect',explanation:'"Have you ever been."'},
  {id:'tc_2_14',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['arrived','had','they','already','left','we','when'],answer:'They had already left when we arrived.',hint:'past perfect',explanation:'"Had already left."'},
  {id:'tc_2_15',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['finished','have','tomorrow','will','I','by'],answer:'I will have finished by tomorrow.',hint:'future perfect',explanation:'"Will have finished by tomorrow."'},
  {id:'tc_3_01',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'has been working',example:'She has been working here since 2015.',hint:'present perfect continuous → durée',explanation:'"Has been working" — action depuis le passé, toujours vraie.'},
  {id:'tc_3_02',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'I am living here since ten years.',answer:'I have been living here for ten years.',hint:'depuis = present perfect continuous + for',explanation:'"Have been living for" — durée.'},
  {id:'tc_3_03',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'We were eating when he called.',answer:'Nous mangions quand il a appelé.',hint:'were eating = imparfait',explanation:'"Were eating" = imparfait en français.'},
  {id:'tc_3_04',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'She had finished her work when I arrived.',answer:'Elle avait terminé son travail quand je suis arrivé.',hint:'had finished = avait terminé',explanation:'"Had finished" = plus-que-parfait.'},
  {id:'tc_3_05',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'I wake up at six have breakfast then go to work. Last night I was cooking dinner when the lights went out.',question:'Que faisait la personne quand les lumières se sont éteintes ?',answer:'She was cooking dinner.',alternatives:['Cooking dinner.'],hint:'Écoutez "was cooking"',explanation:'"Was cooking dinner" — past continuous.'}
);

// ─── PHRASAL VERBS ──────────────────────────────────────────────────────────
exercises.phrasalVerbs.push(
  {id:'phv_1_01',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon phrasal verb.',question:'She ___ smoking last year.',options:['gave up','took off','put on','found out'],answer:'gave up',hint:'arrêter de faire → give up',explanation:'"Give up" = arrêter.'},
  {id:'phv_1_02',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon phrasal verb.',question:"Please ___ the TV — the news is starting.",options:['turn on','turn off','give up','put on'],answer:'turn on',hint:'allumer → turn on',explanation:'"Turn on" = allumer.'},
  {id:'phv_1_03',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon phrasal verb.',question:'Who looks ___ your children?',options:['after','up','for','on'],answer:'after',hint:'look after = s\'occuper de',explanation:'"Look after" = prendre soin de.'},
  {id:'phv_1_04',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon phrasal verb.',question:'I need to ___ when the train arrives.',options:['find out','give up','turn on','look after'],answer:'find out',hint:'découvrir, s\'informer → find out',explanation:'"Find out" = découvrir.'},
  {id:'phv_1_05',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon phrasal verb.',question:'The plane ___ at 9am.',options:['gave up','took off','turned on','put on'],answer:'took off',hint:'décollage → take off',explanation:'"Take off" = décoller.'},
  {id:'phv_1_06',type:'multiple-choice',diffLevel:1,instruction:'Choisissez le bon phrasal verb.',question:"___ your coat — it's cold!",options:['Put on','Take off','Give up','Find out'],answer:'Put on',hint:'enfiler → put on',explanation:'"Put on" = mettre (un vêtement).'},
  {id:'phv_1_07',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon phrasal verb.',template:'She ___ smoking because of her health.',answer:'gave up',hint:'arrêter → gave up',explanation:'"Gave up smoking."'},
  {id:'phv_1_08',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon phrasal verb.',template:'Please ___ the lights when you leave.',answer:'turn off',hint:'éteindre → turn off',explanation:'"Turn off the lights."'},
  {id:'phv_1_09',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon phrasal verb.',template:'He ___ his little sister after school.',answer:'looks after',hint:'s\'occuper de → look after',explanation:'"Looks after his sister."'},
  {id:'phv_1_10',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon phrasal verb.',template:'The meeting has been ___ until next week.',answer:'put off',hint:'reporter → put off',explanation:'"Put off" = reporter.'},
  {id:'phv_1_11',type:'fill-blank',diffLevel:1,instruction:'Complétez avec le bon phrasal verb.',template:'I need to ___ when the train arrives.',answer:'find out',hint:'découvrir → find out',explanation:'"Find out" = se renseigner.'},
  {id:'phv_1_12',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['gave','She','up','smoking','ago','two','years'],answer:'She gave up smoking two years ago.',hint:'gave up + gérondif',explanation:'"Gave up smoking."'},
  {id:'phv_1_13',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['on','the','Turn','light','please'],answer:'Turn on the light please.',hint:'turn on = allumer',explanation:'"Turn on the light."'},
  {id:'phv_1_14',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['off','the','Turn','TV','before','bed'],answer:'Turn off the TV before bed.',hint:'turn off = éteindre',explanation:'"Turn off the TV."'},
  {id:'phv_1_15',type:'word-order',diffLevel:1,instruction:'Mettez dans le bon ordre.',words:['after','looks','He','his','elderly','mother'],answer:'He looks after his elderly mother.',hint:'look after = prendre soin de',explanation:'"Looks after his mother."'},
  {id:'phv_2_01',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"Elle a arrêté de fumer l'année dernière.",answer:'She gave up smoking last year.',hint:'arrêter de fumer → give up smoking',explanation:'"Gave up smoking."'},
  {id:'phv_2_02',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"L'avion a décollé à 9h.",answer:'The plane took off at nine.',hint:'décoller → take off',explanation:'"Took off at nine."'},
  {id:'phv_2_03',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"Peux-tu t'occuper du chien ?",answer:'Can you look after the dog?',hint:"s'occuper de → look after",explanation:'"Look after the dog."'},
  {id:'phv_2_04',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"Éteins la lumière en sortant.",answer:'Turn off the light when you leave.',hint:'éteindre → turn off',explanation:'"Turn off the light."'},
  {id:'phv_2_05',type:'translate',diffLevel:2,instruction:'Traduisez en anglais.',french:"J'ai découvert la vérité.",answer:'I found out the truth.',hint:'découvrir → find out',explanation:'"Found out the truth."'},
  {id:'phv_2_06',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'She gave up her job to look after her children.',answer:'She gave up her job to look after her children.',hint:'gave up, look after',explanation:'"Gave up her job to look after."'},
  {id:'phv_2_07',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'The plane took off two hours late.',answer:'The plane took off two hours late.',hint:'took off = décolla',explanation:'"Took off two hours late."'},
  {id:'phv_2_08',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'Can you find out what time the shop closes?',answer:'Can you find out what time the shop closes?',hint:'find out = découvrir',explanation:'"Find out what time."'},
  {id:'phv_2_09',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'Please turn on the heating it is cold.',answer:'Please turn on the heating it is cold.',hint:'turn on = allumer',explanation:'"Turn on the heating."'},
  {id:'phv_2_10',type:'listening',diffLevel:2,instruction:'Écoutez et écrivez ce que vous entendez.',audio:'He put off his dentist appointment again.',answer:'He put off his dentist appointment again.',hint:'put off = reporter',explanation:'"Put off his appointment."'},
  {id:'phv_2_11',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['smoking','up','He','gave','five','years','ago'],answer:'He gave up smoking five years ago.',hint:'gave up + gérondif',explanation:'"Gave up smoking five years ago."'},
  {id:'phv_2_12',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['off','Please','the','turn','lights'],answer:'Please turn off the lights.',hint:'turn off = éteindre',explanation:'"Turn off the lights."'},
  {id:'phv_2_13',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['out','found','She','truth','the'],answer:'She found out the truth.',hint:'found out = a découvert',explanation:'"Found out the truth."'},
  {id:'phv_2_14',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['took','off','plane','The','time','on'],answer:'The plane took off on time.',hint:'took off = décolla',explanation:'"Took off on time."'},
  {id:'phv_2_15',type:'word-order',diffLevel:2,instruction:'Mettez dans le bon ordre.',words:['after','looking','is','He','parents','his'],answer:'He is looking after his parents.',hint:'is looking after = s\'occupe de',explanation:'"Looking after his parents."'},
  {id:'phv_3_01',type:'free-production',diffLevel:3,instruction:'Écris une phrase avec le mot donné.',keyword:'gave up',example:'He gave up his job to travel the world.',hint:'"give up" + gérondif ou nom',explanation:'"Give up" = arrêter / abandonner.'},
  {id:'phv_3_02',type:'error-correct',diffLevel:3,instruction:"Corrigez l'erreur.",sentence:'She gave up to smoke.',answer:'She gave up smoking.',hint:'give up + gérondif (pas infinitif)',explanation:'"Give up smoking" — gérondif obligatoire.'},
  {id:'phv_3_03',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:"The plane took off two hours late.",answer:"L'avion a décollé avec deux heures de retard.",hint:'took off = a décollé',explanation:'"Took off" = "a décollé".'},
  {id:'phv_3_04',type:'translate-fr',diffLevel:3,instruction:'Traduisez en français.',english:'You should give up eating so much sugar.',answer:'Tu devrais arrêter de manger autant de sucre.',hint:'give up eating = arrêter de manger',explanation:'"Give up eating" = "arrêter de manger".'},
  {id:'phv_3_05',type:'listening-comp',diffLevel:3,instruction:'Écoutez et répondez à la question.',audio:'She gave up her well-paid job to look after her sick mother. Everyone admired her decision.',question:'Pourquoi a-t-elle quitté son emploi ?',answer:'To look after her sick mother.',alternatives:['Look after her mother.'],hint:'Écoutez "to look after"',explanation:'"Gave up her job to look after her mother."'}
);

export function getAllExercises() {
  return Object.values(exercises).flat();
}

export function getExercisesByTopic(topicId) {
  return exercises[topicId] || [];
}

export function getExerciseById(id) {
  return getAllExercises().find(ex => ex.id === id);
}

/**
 * Returns exercises for a specific difficulty tier (1 = easy, 2 = medium, 3 = hard).
 * Strategy:
 *  - Prefer explicit `diffLevel` field on each exercise (new system).
 *  - Fallback: map `level` tag A1→1, A2→2, B1/B2→3, or distribute by position.
 *  - Falls back to full topic pool if a tier has 0 exercises.
 */
export function getExercisesByLevel(topicId, diffLevel) {
  const pool = exercises[topicId] || [];
  if (!pool.length) return [];

  // Prefer explicit diffLevel field
  if (pool.some(e => e.diffLevel != null)) {
    const filtered = pool.filter(e => e.diffLevel === diffLevel);
    return filtered.length >= 2 ? filtered : pool;
  }

  // Legacy fallback: use 'level' string tag
  const LEVEL_TO_DIFF = { A1: 1, A2: 2, B1: 3, 'B1-B2': 3, B2: 3 };
  const levels = new Set(pool.map(e => e.level));
  let filtered;
  if (levels.size > 1) {
    filtered = pool.filter(e => (LEVEL_TO_DIFF[e.level] || 2) === diffLevel);
  } else {
    const third = Math.ceil(pool.length / 3);
    const ranges = [
      pool.slice(0, third),
      pool.slice(third, third * 2),
      pool.slice(third * 2),
    ];
    filtered = ranges[diffLevel - 1] || [];
  }

  // Fallback: if this tier is empty, use the full pool
  return filtered.length >= 2 ? filtered : pool;
}
