export const theory = {

  presentSimple: {
    id: 'presentSimple',
    title: 'Present Simple',
    icon: '📖',
    level: 'A1–A2',
    subtitle: 'Pour les habitudes, routines et vérités générales',
    malgasyNote: 'Ampiasaina ho an\'ny zava-mahazatra sy ny marina mandrakariva',
    sections: [
      {
        title: '✅ Forme affirmative',
        content: 'Sujet + verbe (+ <strong>-s/-es</strong> avec he/she/it)',
        examples: [
          { en: 'I go to school every day.', fr: 'Je vais à l\'école tous les jours.' },
          { en: 'She works at a hospital.', fr: 'Elle travaille dans un hôpital.' },
          { en: 'They eat rice every day.', fr: 'Ils mangent du riz tous les jours.' },
        ]
      },
      {
        title: '❌ Forme négative',
        content: 'Sujet + <strong>don\'t</strong> / <strong>doesn\'t</strong> + verbe infinitif',
        examples: [
          { en: 'I don\'t like coffee.', fr: 'Je n\'aime pas le café.' },
          { en: 'He doesn\'t speak English.', fr: 'Il ne parle pas anglais.' },
          { en: 'We don\'t have class on Sunday.', fr: 'Nous n\'avons pas cours le dimanche.' },
        ]
      },
      {
        title: '❓ Forme interrogative',
        content: '<strong>Do</strong> / <strong>Does</strong> + sujet + verbe infinitif ?',
        examples: [
          { en: 'Do you speak French?', fr: 'Est-ce que tu parles français ?' },
          { en: 'Does she live in Antananarivo?', fr: 'Est-ce qu\'elle habite à Antananarivo ?' },
          { en: 'Do they go to school?', fr: 'Est-ce qu\'ils vont à l\'école ?' },
        ]
      },
      {
        title: '⚠️ Règle du -s',
        content: 'Avec <strong>he / she / it</strong>, on ajoute <strong>-s</strong> ou <strong>-es</strong>',
        examples: [
          { en: 'work → he work<strong>s</strong>', fr: 'travailler → il travaille' },
          { en: 'go → she go<strong>es</strong>', fr: 'aller → elle va' },
          { en: 'study → he studi<strong>es</strong>', fr: 'étudier → il étudie' },
        ]
      },
    ],
    tips: [
      '🔑 Mots-clés : always, usually, often, sometimes, never',
      '🔑 Expressions de temps : every day/week, on Mondays, in the morning',
      '⚠️ he/she/it → toujours avec -s : she goes, he has, it rains',
    ]
  },

  presentContinuous: {
    id: 'presentContinuous',
    title: 'Present Continuous',
    icon: '🔄',
    level: 'A2',
    subtitle: 'Pour les actions en cours au moment où on parle',
    malgasyNote: 'Ho an\'ny zavatra atao amin\'izao fotoana izao',
    sections: [
      {
        title: '✅ Forme affirmative',
        content: 'Sujet + <strong>am/is/are</strong> + verbe<strong>-ing</strong>',
        examples: [
          { en: 'I am reading a book.', fr: 'Je suis en train de lire un livre.' },
          { en: 'She is cooking dinner.', fr: 'Elle est en train de préparer le dîner.' },
          { en: 'They are playing football.', fr: 'Ils sont en train de jouer au football.' },
        ]
      },
      {
        title: '❌ Forme négative',
        content: 'Sujet + <strong>am/is/are not</strong> + verbe<strong>-ing</strong>',
        examples: [
          { en: 'I\'m not sleeping.', fr: 'Je ne dors pas.' },
          { en: 'He isn\'t working today.', fr: 'Il ne travaille pas aujourd\'hui.' },
          { en: 'They aren\'t listening.', fr: 'Ils n\'écoutent pas.' },
        ]
      },
      {
        title: '❓ Forme interrogative',
        content: '<strong>Am/Is/Are</strong> + sujet + verbe<strong>-ing</strong> ?',
        examples: [
          { en: 'Are you listening?', fr: 'Tu écoutes ?' },
          { en: 'Is she coming?', fr: 'Est-ce qu\'elle vient ?' },
          { en: 'What are you doing?', fr: 'Qu\'est-ce que tu fais ?' },
        ]
      },
      {
        title: '⚠️ Orthographe du -ing',
        content: 'Règles importantes pour ajouter -ing',
        examples: [
          { en: 'run → runn<strong>ing</strong> (double la consonne)', fr: 'courir' },
          { en: 'come → com<strong>ing</strong> (enlève le -e final)', fr: 'venir' },
          { en: 'play → play<strong>ing</strong> (normal)', fr: 'jouer' },
        ]
      },
    ],
    tips: [
      '🔑 Mots-clés : now, right now, at the moment, look!, listen!',
      '⚠️ Ne pas utiliser avec : know, like, love, want, understand (verbes d\'état)',
      '💡 I am → I\'m | He is → He\'s | They are → They\'re',
    ]
  },

  pastSimple: {
    id: 'pastSimple',
    title: 'Past Simple',
    icon: '⏮️',
    level: 'A2–B1',
    subtitle: 'Pour les actions terminées dans le passé',
    malgasyNote: 'Ho an\'ny zavatra nitranga sy vita teo aloha',
    sections: [
      {
        title: '✅ Verbes réguliers',
        content: 'Sujet + verbe + <strong>-ed</strong>',
        examples: [
          { en: 'I walked to school yesterday.', fr: 'J\'ai marché jusqu\'à l\'école hier.' },
          { en: 'She finished her homework.', fr: 'Elle a terminé ses devoirs.' },
          { en: 'They played football last week.', fr: 'Ils ont joué au football la semaine dernière.' },
        ]
      },
      {
        title: '⚡ Verbes irréguliers',
        content: 'Certains verbes changent complètement de forme !',
        examples: [
          { en: 'go → <strong>went</strong>', fr: 'aller → alla/allé' },
          { en: 'have → <strong>had</strong>', fr: 'avoir → eut/eu' },
          { en: 'see → <strong>saw</strong>', fr: 'voir → vit/vu' },
          { en: 'come → <strong>came</strong>', fr: 'venir → vint/venu' },
          { en: 'buy → <strong>bought</strong>', fr: 'acheter → acheta/acheté' },
        ]
      },
      {
        title: '❌ Forme négative',
        content: 'Sujet + <strong>didn\'t</strong> + verbe infinitif (pour TOUS les sujets)',
        examples: [
          { en: 'I didn\'t go to school.', fr: 'Je ne suis pas allé à l\'école.' },
          { en: 'She didn\'t eat breakfast.', fr: 'Elle n\'a pas mangé le petit-déjeuner.' },
          { en: 'They didn\'t understand.', fr: 'Ils n\'ont pas compris.' },
        ]
      },
      {
        title: '❓ Forme interrogative',
        content: '<strong>Did</strong> + sujet + verbe infinitif ? (pour TOUS les sujets)',
        examples: [
          { en: 'Did you go to the market?', fr: 'Est-ce que tu es allé au marché ?' },
          { en: 'Did she call you?', fr: 'Est-ce qu\'elle t\'a appelé ?' },
          { en: 'Where did they go?', fr: 'Où sont-ils allés ?' },
        ]
      },
    ],
    tips: [
      '🔑 Mots-clés : yesterday, last night/week/year, ago, in 2005',
      '⚠️ Après didn\'t et did, TOUJOURS l\'infinitif : didn\'t go (pas didn\'t went)',
      '📝 Liste à apprendre : go/went, have/had, come/came, see/saw, eat/ate',
    ]
  },

  futureSimple: {
    id: 'futureSimple',
    title: 'Future Simple',
    icon: '🚀',
    level: 'A2–B1',
    subtitle: 'Pour les décisions, prédictions et promesses',
    malgasyNote: 'Ho an\'ny fanapahan-kevitra, fandaharam-potoana sy teny fikasana',
    sections: [
      {
        title: '✅ Forme affirmative',
        content: 'Sujet + <strong>will</strong> + verbe infinitif (même forme pour tous !)',
        examples: [
          { en: 'I will help you.', fr: 'Je vais t\'aider. / Je t\'aiderai.' },
          { en: 'She will be a doctor.', fr: 'Elle sera médecin.' },
          { en: 'They will come tomorrow.', fr: 'Ils viendront demain.' },
        ]
      },
      {
        title: '❌ Forme négative',
        content: 'Sujet + <strong>won\'t</strong> (will not) + verbe infinitif',
        examples: [
          { en: 'I won\'t be late.', fr: 'Je ne serai pas en retard.' },
          { en: 'He won\'t come to school.', fr: 'Il ne viendra pas à l\'école.' },
          { en: 'It won\'t rain today.', fr: 'Il ne pleuvra pas aujourd\'hui.' },
        ]
      },
      {
        title: '❓ Forme interrogative',
        content: '<strong>Will</strong> + sujet + verbe infinitif ?',
        examples: [
          { en: 'Will you help me?', fr: 'Est-ce que tu m\'aideras ?' },
          { en: 'Will she pass the exam?', fr: 'Est-ce qu\'elle réussira l\'examen ?' },
          { en: 'What will they do?', fr: 'Qu\'est-ce qu\'ils feront ?' },
        ]
      },
      {
        title: '💡 Going to vs Will',
        content: '"Be going to" exprime un plan déjà décidé, "will" une décision immédiate',
        examples: [
          { en: 'I\'m going to study medicine. (plan)', fr: 'Je vais étudier la médecine. (décision prise)' },
          { en: 'I\'ll help you carry that! (décision immédiate)', fr: 'Je vais t\'aider à porter ça !' },
        ]
      },
    ],
    tips: [
      '🔑 Mots-clés : tomorrow, next week/year, in the future, one day, soon',
      '⚠️ Après "will", TOUJOURS l\'infinitif : will go, will be, will have',
      '💡 will = \'ll | will not = won\'t (contraction)',
    ]
  },

  articles: {
    id: 'articles',
    title: 'Les Articles (a, an, the)',
    icon: '🔤',
    level: 'A1',
    subtitle: 'Comment utiliser a, an et the correctement',
    malgasyNote: 'Ny "a/an" dia ampiasaina rehefa zavatra iray tsy voafaritra',
    sections: [
      {
        title: '🅰️ A / An (indéfini)',
        content: '<strong>A</strong> devant consonne · <strong>An</strong> devant voyelle (a, e, i, o, u)',
        examples: [
          { en: '<strong>a</strong> book, <strong>a</strong> car, <strong>a</strong> teacher', fr: 'un livre, une voiture, un professeur' },
          { en: '<strong>an</strong> apple, <strong>an</strong> elephant, <strong>an</strong> hour', fr: 'une pomme, un éléphant, une heure' },
          { en: '<strong>a</strong> university (son "you")', fr: 'une université (exception : son consonne)' },
        ]
      },
      {
        title: '🅾️ The (défini)',
        content: '<strong>The</strong> = quand on sait de quoi on parle (spécifique)',
        examples: [
          { en: '<strong>The</strong> sun is hot today.', fr: 'Le soleil est chaud aujourd\'hui.' },
          { en: 'I read <strong>the</strong> book you gave me.', fr: 'J\'ai lu le livre que tu m\'as donné.' },
          { en: 'Close <strong>the</strong> door, please.', fr: 'Ferme la porte, s\'il te plaît.' },
        ]
      },
      {
        title: '🚫 Sans article',
        content: 'Pas d\'article devant : noms pluriels généraux, noms abstraits, repas, langues',
        examples: [
          { en: 'I love ___ music. (pas d\'article)', fr: 'J\'aime la musique.' },
          { en: 'She speaks ___ English.', fr: 'Elle parle anglais.' },
          { en: 'We have ___ breakfast at 7.', fr: 'On prend le petit-déjeuner à 7h.' },
        ]
      },
    ],
    tips: [
      '🔑 Première mention = a/an. Deuxième mention = the.',
      '⚠️ "An hour" (h muet), mais "a hotel" (h prononcé)',
      '💡 Noms non-dénombrables (water, rice) : souvent sans article',
    ]
  },

  pronouns: {
    id: 'pronouns',
    title: 'Les Pronoms',
    icon: '👥',
    level: 'A1',
    subtitle: 'Sujet, objet, possessifs',
    malgasyNote: 'Solon\'anarana : izaho, ianao, izy, isika...',
    sections: [
      {
        title: '🧍 Pronoms sujets',
        content: 'Celui qui fait l\'action',
        examples: [
          { en: '<strong>I</strong> am a student. (je)', fr: 'Je suis étudiant.' },
          { en: '<strong>You</strong> are kind. (tu / vous)', fr: 'Tu es gentil.' },
          { en: '<strong>He / She / It</strong> is here. (il / elle)', fr: 'Il / Elle est ici.' },
          { en: '<strong>We / You / They</strong> are friends.', fr: 'Nous / Vous / Ils sont amis.' },
        ]
      },
      {
        title: '🎯 Pronoms objets',
        content: 'Celui qui subit l\'action (après le verbe)',
        examples: [
          { en: 'She loves <strong>me</strong>. (moi)', fr: 'Elle m\'aime.' },
          { en: 'I see <strong>you</strong>. (toi)', fr: 'Je te vois.' },
          { en: 'We call <strong>him / her / it</strong>.', fr: 'On l\'appelle.' },
          { en: 'They help <strong>us / you / them</strong>.', fr: 'Ils nous / vous / les aident.' },
        ]
      },
      {
        title: '🔐 Adjectifs possessifs',
        content: 'Devant un nom : mon, ton, son...',
        examples: [
          { en: '<strong>my</strong> book, <strong>your</strong> pen', fr: 'mon livre, ton stylo' },
          { en: '<strong>his</strong> bag (à lui), <strong>her</strong> bag (à elle)', fr: 'son sac' },
          { en: '<strong>our</strong> house, <strong>their</strong> car', fr: 'notre maison, leur voiture' },
        ]
      },
      {
        title: '💎 Pronoms possessifs',
        content: 'Seuls, sans nom : le mien, le tien...',
        examples: [
          { en: 'This book is <strong>mine</strong>.', fr: 'Ce livre est le mien.' },
          { en: 'Is this pen <strong>yours</strong>?', fr: 'Ce stylo est à toi ?' },
          { en: 'The car is <strong>theirs</strong>.', fr: 'La voiture est la leur.' },
        ]
      },
    ],
    tips: [
      '⚠️ "It" s\'utilise pour les objets, animaux, le temps : "It is raining."',
      '🔑 His (à lui) ≠ Her (à elle). Attention à ne pas confondre !',
      '💡 Ordre possessif : my < our < your < his/her/its < their',
    ]
  },

  questions: {
    id: 'questions',
    title: 'Les Questions (Wh-)',
    icon: '❓',
    level: 'A1–A2',
    subtitle: 'What, Who, Where, When, Why, How',
    malgasyNote: 'Fomba fametrahana fanontaniana amin\'ny teny anglisy',
    sections: [
      {
        title: '🙋 Les mots interrogatifs',
        content: 'Chaque "wh-word" a un sens précis',
        examples: [
          { en: '<strong>What</strong>? (Quoi ?)', fr: 'What is your name? — Quel est ton nom ?' },
          { en: '<strong>Who</strong>? (Qui ?)', fr: 'Who is that? — Qui est-ce ?' },
          { en: '<strong>Where</strong>? (Où ?)', fr: 'Where do you live? — Où habites-tu ?' },
          { en: '<strong>When</strong>? (Quand ?)', fr: 'When does it start? — Quand ça commence ?' },
          { en: '<strong>Why</strong>? (Pourquoi ?)', fr: 'Why are you sad? — Pourquoi es-tu triste ?' },
          { en: '<strong>How</strong>? (Comment ?)', fr: 'How are you? — Comment vas-tu ?' },
        ]
      },
      {
        title: '🔨 Structure de la question',
        content: '<strong>Wh- + auxiliaire + sujet + verbe ?</strong>',
        examples: [
          { en: 'Where <strong>do</strong> you <strong>live</strong>?', fr: 'Où habites-tu ?' },
          { en: 'What <strong>does</strong> she <strong>want</strong>?', fr: 'Que veut-elle ?' },
          { en: 'Why <strong>did</strong> they <strong>leave</strong>?', fr: 'Pourquoi sont-ils partis ?' },
          { en: 'When <strong>will</strong> you <strong>come</strong>?', fr: 'Quand viendras-tu ?' },
        ]
      },
      {
        title: '📏 How + adjectif / adverbe',
        content: '"How" se combine souvent',
        examples: [
          { en: '<strong>How old</strong> are you?', fr: 'Quel âge as-tu ?' },
          { en: '<strong>How many</strong> brothers?', fr: 'Combien de frères ?' },
          { en: '<strong>How much</strong> money?', fr: 'Combien d\'argent ?' },
          { en: '<strong>How often</strong> do you study?', fr: 'À quelle fréquence étudies-tu ?' },
        ]
      },
    ],
    tips: [
      '🔑 How many (dénombrable : books, pens) vs How much (non-dénombrable : money, water)',
      '⚠️ "Who" peut être sujet : "Who called?" (sans "did")',
      '💡 Question Yes/No : sans wh-word. "Do you speak English?"',
    ]
  },

  prepositions: {
    id: 'prepositions',
    title: 'Prépositions (in, on, at)',
    icon: '📍',
    level: 'A1–A2',
    subtitle: 'Temps et lieu',
    malgasyNote: 'Ireo mpampitohy manondro toerana sy fotoana',
    sections: [
      {
        title: '⏰ Prépositions de temps',
        content: 'IN / ON / AT pour parler du temps',
        examples: [
          { en: '<strong>at</strong> 7 o\'clock, <strong>at</strong> noon, <strong>at</strong> night', fr: 'Heure précise : AT' },
          { en: '<strong>on</strong> Monday, <strong>on</strong> July 5th', fr: 'Jours/dates : ON' },
          { en: '<strong>in</strong> January, <strong>in</strong> 2025, <strong>in</strong> the morning', fr: 'Mois/années/périodes : IN' },
        ]
      },
      {
        title: '📍 Prépositions de lieu',
        content: 'IN / ON / AT pour parler du lieu',
        examples: [
          { en: '<strong>at</strong> school, <strong>at</strong> home, <strong>at</strong> the bus stop', fr: 'Point précis : AT' },
          { en: '<strong>on</strong> the table, <strong>on</strong> the wall', fr: 'Surface : ON' },
          { en: '<strong>in</strong> the box, <strong>in</strong> Madagascar, <strong>in</strong> the room', fr: 'À l\'intérieur : IN' },
        ]
      },
      {
        title: '🧭 Autres prépositions importantes',
        content: 'Mouvement et position',
        examples: [
          { en: '<strong>to</strong> school (vers)', fr: 'I go to school.' },
          { en: '<strong>from</strong> home (depuis)', fr: 'I come from home.' },
          { en: '<strong>under / above / next to</strong>', fr: 'sous / au-dessus / à côté de' },
          { en: '<strong>between</strong> A and B', fr: 'entre A et B' },
        ]
      },
    ],
    tips: [
      '🔑 Astuce : AT (point), ON (surface), IN (dedans)',
      '⚠️ "on Monday" mais "in the morning" — mémoriser les combinaisons',
      '💡 Exception : "at night" (pas "in the night")',
    ]
  },

  comparatives: {
    id: 'comparatives',
    title: 'Comparatifs et Superlatifs',
    icon: '⚖️',
    level: 'A2',
    subtitle: 'Plus... que / le plus...',
    malgasyNote: 'Fampitahana : kokoa, indrindra',
    sections: [
      {
        title: '📈 Comparatif (plus... que)',
        content: 'Adjectif court + <strong>-er than</strong>',
        examples: [
          { en: 'Tom is tall<strong>er than</strong> me.', fr: 'Tom est plus grand que moi.' },
          { en: 'This car is fast<strong>er than</strong> that one.', fr: 'Cette voiture est plus rapide.' },
          { en: 'My book is old<strong>er than</strong> yours.', fr: 'Mon livre est plus vieux.' },
        ]
      },
      {
        title: '📉 Adjectifs longs',
        content: '<strong>More</strong> + adjectif + <strong>than</strong>',
        examples: [
          { en: 'English is <strong>more</strong> difficult <strong>than</strong> French.', fr: 'L\'anglais est plus difficile.' },
          { en: 'She is <strong>more</strong> intelligent <strong>than</strong> him.', fr: 'Elle est plus intelligente.' },
          { en: 'This film is <strong>more</strong> interesting.', fr: 'Ce film est plus intéressant.' },
        ]
      },
      {
        title: '🏆 Superlatif (le plus...)',
        content: 'Adjectif court : <strong>the ___-est</strong> | Long : <strong>the most ___</strong>',
        examples: [
          { en: 'She is <strong>the tallest</strong> in the class.', fr: 'Elle est la plus grande de la classe.' },
          { en: 'This is <strong>the most beautiful</strong> city.', fr: 'C\'est la plus belle ville.' },
          { en: 'Monday is <strong>the worst</strong> day!', fr: 'Lundi est le pire jour !' },
        ]
      },
      {
        title: '⚡ Irréguliers',
        content: 'À apprendre par cœur',
        examples: [
          { en: 'good → <strong>better</strong> → <strong>the best</strong>', fr: 'bon / meilleur / le meilleur' },
          { en: 'bad → <strong>worse</strong> → <strong>the worst</strong>', fr: 'mauvais / pire / le pire' },
          { en: 'far → <strong>farther</strong> → <strong>the farthest</strong>', fr: 'loin / plus loin / le plus loin' },
        ]
      },
    ],
    tips: [
      '🔑 Règle 1 syllabe : + -er / -est (tall → taller → tallest)',
      '⚠️ "happy" → "happier" (y devient i)',
      '💡 "as... as" = aussi... que : "She is as tall as me."',
    ]
  },

  modals: {
    id: 'modals',
    title: 'Verbes Modaux (can, must, should)',
    icon: '🛠️',
    level: 'A2',
    subtitle: 'Capacité, obligation, conseil',
    malgasyNote: 'Matoanteny manambara fahaizana, tsy maintsy, tokony',
    sections: [
      {
        title: '💪 Can / Can\'t (pouvoir)',
        content: 'Capacité ou permission · Suivi d\'un <strong>verbe à l\'infinitif sans "to"</strong>',
        examples: [
          { en: 'I <strong>can</strong> swim. (je sais nager)', fr: 'Je sais / peux nager.' },
          { en: 'She <strong>can\'t</strong> drive.', fr: 'Elle ne sait pas conduire.' },
          { en: '<strong>Can</strong> I open the window?', fr: 'Puis-je ouvrir la fenêtre ?' },
        ]
      },
      {
        title: '❗ Must / Mustn\'t (devoir)',
        content: 'Obligation forte ou interdiction',
        examples: [
          { en: 'You <strong>must</strong> study for the test.', fr: 'Tu dois étudier.' },
          { en: 'You <strong>mustn\'t</strong> be late.', fr: 'Tu ne dois pas être en retard.' },
          { en: 'We <strong>must</strong> help our family.', fr: 'Nous devons aider notre famille.' },
        ]
      },
      {
        title: '💡 Should / Shouldn\'t (conseil)',
        content: 'Suggestion ou conseil (moins fort que "must")',
        examples: [
          { en: 'You <strong>should</strong> drink more water.', fr: 'Tu devrais boire plus d\'eau.' },
          { en: 'He <strong>shouldn\'t</strong> eat so much sugar.', fr: 'Il ne devrait pas manger tant de sucre.' },
          { en: '<strong>Should</strong> I call her?', fr: 'Devrais-je l\'appeler ?' },
        ]
      },
      {
        title: '🔑 Have to (obligation externe)',
        content: 'Obligation venant de l\'extérieur (règles, loi)',
        examples: [
          { en: 'I <strong>have to</strong> go to school at 7.', fr: 'Je dois aller à l\'école à 7h.' },
          { en: 'She <strong>has to</strong> work on Saturday.', fr: 'Elle doit travailler samedi.' },
          { en: 'We <strong>don\'t have to</strong> wear uniforms.', fr: 'Nous n\'avons pas à porter d\'uniforme.' },
        ]
      },
    ],
    tips: [
      '🔑 Modaux : PAS de -s à la 3e pers. singulier (She can, She must)',
      '⚠️ Après un modal : verbe infinitif SANS "to" (can go, pas can to go)',
      '💡 must = obligation personnelle ; have to = obligation extérieure',
    ]
  },

  plurals: {
    id: 'plurals',
    title: 'Les Pluriels',
    icon: '🔢',
    level: 'A1',
    subtitle: 'Règles régulières et irrégulières',
    malgasyNote: 'Ny fomba fanaovana anarana maromaro',
    sections: [
      {
        title: '✅ Règle générale',
        content: 'Ajoutez <strong>-s</strong> à la fin',
        examples: [
          { en: 'book → book<strong>s</strong>', fr: 'livre → livres' },
          { en: 'car → car<strong>s</strong>', fr: 'voiture → voitures' },
          { en: 'friend → friend<strong>s</strong>', fr: 'ami → amis' },
        ]
      },
      {
        title: '📝 Mots en -s, -x, -ch, -sh',
        content: 'Ajoutez <strong>-es</strong>',
        examples: [
          { en: 'bus → bus<strong>es</strong>', fr: 'bus' },
          { en: 'box → box<strong>es</strong>', fr: 'boîte → boîtes' },
          { en: 'watch → watch<strong>es</strong>', fr: 'montre → montres' },
        ]
      },
      {
        title: '🔁 Mots en -y',
        content: 'Consonne + y → <strong>-ies</strong>',
        examples: [
          { en: 'baby → bab<strong>ies</strong>', fr: 'bébé → bébés' },
          { en: 'city → cit<strong>ies</strong>', fr: 'ville → villes' },
          { en: 'boy → boy<strong>s</strong> (voyelle + y, règle normale)', fr: 'garçon' },
        ]
      },
      {
        title: '⚡ Pluriels irréguliers',
        content: 'À mémoriser !',
        examples: [
          { en: 'man → <strong>men</strong>', fr: 'homme → hommes' },
          { en: 'woman → <strong>women</strong>', fr: 'femme → femmes' },
          { en: 'child → <strong>children</strong>', fr: 'enfant → enfants' },
          { en: 'foot → <strong>feet</strong>', fr: 'pied → pieds' },
          { en: 'tooth → <strong>teeth</strong>', fr: 'dent → dents' },
          { en: 'mouse → <strong>mice</strong>', fr: 'souris' },
          { en: 'person → <strong>people</strong>', fr: 'personne → personnes' },
        ]
      },
    ],
    tips: [
      '⚠️ "people" est déjà pluriel (pas de "peoples")',
      '🔑 Fish, sheep : même forme au singulier et pluriel',
      '💡 Non-dénombrables (water, rice, money) : pas de pluriel',
    ]
  },

  therebeis: {
    id: 'therebeis',
    title: 'There is / There are',
    icon: '📌',
    level: 'A1',
    subtitle: 'Pour dire "il y a"',
    malgasyNote: 'Mba hilazana hoe "misy"',
    sections: [
      {
        title: '✅ Affirmatif',
        content: '<strong>There is</strong> (singulier) · <strong>There are</strong> (pluriel)',
        examples: [
          { en: '<strong>There is</strong> a book on the table.', fr: 'Il y a un livre sur la table.' },
          { en: '<strong>There are</strong> five students in the class.', fr: 'Il y a cinq étudiants dans la classe.' },
          { en: '<strong>There\'s</strong> a dog in the garden.', fr: 'Il y a un chien dans le jardin.' },
        ]
      },
      {
        title: '❌ Négatif',
        content: '<strong>There isn\'t</strong> / <strong>There aren\'t</strong>',
        examples: [
          { en: '<strong>There isn\'t</strong> any milk.', fr: 'Il n\'y a pas de lait.' },
          { en: '<strong>There aren\'t</strong> many people here.', fr: 'Il n\'y a pas beaucoup de monde.' },
        ]
      },
      {
        title: '❓ Question',
        content: '<strong>Is there</strong> / <strong>Are there</strong>',
        examples: [
          { en: '<strong>Is there</strong> a hospital near here?', fr: 'Y a-t-il un hôpital près d\'ici ?' },
          { en: '<strong>Are there</strong> any questions?', fr: 'Y a-t-il des questions ?' },
          { en: 'How many students <strong>are there</strong>?', fr: 'Combien d\'étudiants y a-t-il ?' },
        ]
      },
    ],
    tips: [
      '🔑 Au passé : There was / There were',
      '⚠️ "there is" ≠ "it is". "There is a pen" = il y a un stylo. "It is a pen" = c\'est un stylo.',
      '💡 Avec "a" / "an" (singulier) : there is. Avec chiffre ou pluriel : there are.',
    ]
  },

  vocabulary: {
    routine: {
      title: 'Vocabulaire : Routine Quotidienne',
      words: [
        { en: 'wake up', fr: 'se réveiller', mg: 'mifohaza', example: 'I wake up at 6 am.' },
        { en: 'get up', fr: 'se lever', mg: 'mitsangana', example: 'She gets up at 7.' },
        { en: 'take a shower', fr: 'prendre une douche', mg: 'manasa vatana', example: 'I take a shower every morning.' },
        { en: 'have breakfast', fr: 'prendre le petit-déjeuner', mg: 'misakafo maraina', example: 'We have breakfast at 7:30.' },
        { en: 'go to school', fr: 'aller à l\'école', mg: 'mankany sekoly', example: 'The children go to school at 8.' },
        { en: 'have lunch', fr: 'déjeuner', mg: 'misakafo atoandro', example: 'We have lunch at noon.' },
        { en: 'come home', fr: 'rentrer à la maison', mg: 'miverina an-trano', example: 'I come home at 5 pm.' },
        { en: 'have dinner', fr: 'dîner', mg: 'misakafo hariva', example: 'My family has dinner together.' },
        { en: 'go to bed', fr: 'se coucher', mg: 'matory', example: 'I go to bed at 10 pm.' },
        { en: 'brush teeth', fr: 'se brosser les dents', mg: 'manasa nify', example: 'Brush your teeth twice a day!' },
      ]
    },
    family: {
      title: 'Vocabulaire : La Famille',
      words: [
        { en: 'mother', fr: 'mère', mg: 'reny', example: 'My mother is a teacher.' },
        { en: 'father', fr: 'père', mg: 'ray', example: 'My father works in the city.' },
        { en: 'brother', fr: 'frère', mg: 'rahalahy', example: 'I have two brothers.' },
        { en: 'sister', fr: 'sœur', mg: 'anabavy', example: 'My sister is 15 years old.' },
        { en: 'grandmother', fr: 'grand-mère', mg: 'renibe', example: 'My grandmother lives in the village.' },
        { en: 'grandfather', fr: 'grand-père', mg: 'raibe', example: 'My grandfather is 70 years old.' },
        { en: 'uncle', fr: 'oncle', mg: 'dadatoa', example: 'My uncle is a doctor.' },
        { en: 'aunt', fr: 'tante', mg: 'nenitoa', example: 'My aunt has three children.' },
        { en: 'cousin', fr: 'cousin(e)', mg: 'zanak\'olo-mpiray tam-po', example: 'I play with my cousins on weekends.' },
        { en: 'children', fr: 'enfants', mg: 'zanaka', example: 'They have four children.' },
      ]
    },
    body: {
      title: 'Vocabulaire : Le Corps',
      words: [
        { en: 'head', fr: 'tête', mg: 'loha', example: 'I have a headache.' },
        { en: 'eye(s)', fr: 'œil / yeux', mg: 'maso', example: 'She has brown eyes.' },
        { en: 'ear(s)', fr: 'oreille(s)', mg: 'sofina', example: 'Listen with your ears!' },
        { en: 'nose', fr: 'nez', mg: 'orona', example: 'I have a cold.' },
        { en: 'mouth', fr: 'bouche', mg: 'vava', example: 'Close your mouth when you eat.' },
        { en: 'hand(s)', fr: 'main(s)', mg: 'tanana', example: 'Wash your hands before eating.' },
        { en: 'foot / feet', fr: 'pied(s)', mg: 'tongotra', example: 'My feet are tired after walking.' },
        { en: 'arm', fr: 'bras', mg: 'sandry', example: 'He broke his arm.' },
        { en: 'leg', fr: 'jambe', mg: 'ranjo', example: 'She hurt her leg.' },
        { en: 'back', fr: 'dos', mg: 'lamosina', example: 'I have a backache.' },
      ]
    },
    time: {
      title: 'Vocabulaire : L\'Heure et le Temps',
      words: [
        { en: 'Monday', fr: 'lundi', mg: 'Alatsinainy', example: 'School starts on Monday.' },
        { en: 'Tuesday', fr: 'mardi', mg: 'Talata', example: 'I have English on Tuesday.' },
        { en: 'Wednesday', fr: 'mercredi', mg: 'Alarobia', example: 'Wednesday is the middle of the week.' },
        { en: 'Thursday', fr: 'jeudi', mg: 'Alakamisy', example: 'We play sport on Thursday.' },
        { en: 'Friday', fr: 'vendredi', mg: 'Zoma', example: 'Friday is the last school day.' },
        { en: 'Saturday', fr: 'samedi', mg: 'Asabotsy', example: 'I rest on Saturday.' },
        { en: 'Sunday', fr: 'dimanche', mg: 'Alahady', example: 'Sunday is a day of rest.' },
        { en: 'morning', fr: 'matin', mg: 'maraina', example: 'I study in the morning.' },
        { en: 'afternoon', fr: 'après-midi', mg: 'tolakandro', example: 'We play in the afternoon.' },
        { en: 'evening', fr: 'soir', mg: 'hariva', example: 'We eat dinner in the evening.' },
      ]
    },
  }
};

export function getTheoryById(id) {
  return theory[id] || null;
}

export const theoryTopics = [
  { id: 'articles', label: 'Articles (a/an/the)', icon: '🔤', level: 'A1' },
  { id: 'pronouns', label: 'Pronoms', icon: '👥', level: 'A1' },
  { id: 'plurals', label: 'Pluriels', icon: '🔢', level: 'A1' },
  { id: 'therebeis', label: 'There is / are', icon: '📌', level: 'A1' },
  { id: 'prepositions', label: 'Prépositions', icon: '📍', level: 'A1–A2' },
  { id: 'questions', label: 'Questions (Wh-)', icon: '❓', level: 'A1–A2' },
  { id: 'presentSimple', label: 'Present Simple', icon: '📖', level: 'A1–A2' },
  { id: 'presentContinuous', label: 'Present Continuous', icon: '🔄', level: 'A2' },
  { id: 'comparatives', label: 'Comparatifs', icon: '⚖️', level: 'A2' },
  { id: 'modals', label: 'Modaux (can/must)', icon: '🛠️', level: 'A2' },
  { id: 'pastSimple', label: 'Past Simple', icon: '⏮️', level: 'A2–B1' },
  { id: 'futureSimple', label: 'Future Simple', icon: '🚀', level: 'A2–B1' },
];

export const vocabTopics = [
  { id: 'routine', label: 'Routine Quotidienne', icon: '🌅' },
  { id: 'family', label: 'La Famille', icon: '👨‍👩‍👧' },
  { id: 'body', label: 'Le Corps', icon: '💪' },
  { id: 'time', label: 'L\'Heure et le Temps', icon: '⏰' },
];
