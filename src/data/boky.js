// ─── BOKY FAMPIANARANA — Grammaire bilingue FR / MG ─────────────────────────
// Chaque chapitre contient { fr: {...}, mg: {...} } pour permettre le switch de langue.
// ⚠️ Les traductions malagasy marquées [?] sont incertaines — à vérifier.

export const bokyChapters = [

  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'articles',
    title: 'Articles (a / an / the)',
    icon: '🔤',
    level: 'A1',
    fr: {
      intro: "L'anglais utilise trois articles : <strong>a</strong>, <strong>an</strong> (indéfinis) et <strong>the</strong> (défini). Contrairement au français, il n'y a pas de genre (masculin/féminin).",
      sections: [
        {
          title: 'A / An — article indéfini',
          content: 'Utilisé quand on parle de quelque chose pour la première fois, ou d\'une chose non spécifique. <strong>A</strong> devant une consonne, <strong>an</strong> devant une voyelle (a, e, i, o, u).',
          rows: [
            { en: 'I have a book.', tr: 'J\'ai un livre.' },
            { en: 'She is an engineer.', tr: 'Elle est ingénieure.' },
            { en: 'I need a pen.', tr: 'J\'ai besoin d\'un stylo.' },
            { en: 'He ate an apple.', tr: 'Il a mangé une pomme.' },
          ]
        },
        {
          title: 'The — article défini',
          content: 'Utilisé quand les deux interlocuteurs savent de quoi on parle, ou quand quelque chose a déjà été mentionné.',
          rows: [
            { en: 'The book is on the table.', tr: 'Le livre est sur la table.' },
            { en: 'Please close the door.', tr: 'S\'il te plaît, ferme la porte.' },
            { en: 'The sun rises in the east.', tr: 'Le soleil se lève à l\'est.' },
          ]
        },
        {
          title: 'Pas d\'article (Ø)',
          content: 'Devant les noms généraux, les langues, les matières, les repas. Aussi devant les noms propres, les villes, les pays (sauf exceptions).',
          rows: [
            { en: 'I like Ø rice.', tr: 'J\'aime le riz (en général).' },
            { en: 'She speaks Ø English.', tr: 'Elle parle anglais.' },
            { en: 'We have Ø breakfast at 7.', tr: 'Nous prenons le petit-déjeuner à 7h.' },
            { en: 'He studies Ø mathematics.', tr: 'Il étudie les mathématiques.' },
            { en: 'I live in Ø Madagascar.', tr: 'J\'habite à Madagascar.' },
          ]
        },
      ],
      commonErrors: [
        '❌ "I am a student" ✅ — mais ❌ "She is engineer" → ✅ "She is AN engineer" (article obligatoire avec les métiers)',
        '❌ "I like the rice" → ✅ "I like rice" (goût général = pas d\'article)',
        '❌ "a university" semble incorrect mais ✅ car "u" se prononce "you" (consonne)',
        '❌ "an book" → ✅ "a book" (b = consonne)',
        '❌ "I go to the school" (souvent) → ✅ "I go to school" (institution en général)',
      ],
      tips: [
        'a + consonne : a cat, a dog, a university (« u » se prononce « you »)',
        'an + voyelle : an apple, an hour (« h » muet), an umbrella',
        'the = on sait EXACTEMENT de quoi on parle',
        'Ø (rien) = noms généraux, langues, repas, pays, villes, matières scolaires',
      ],
      summary: [
        '3 articles : a (indéfini + consonne), an (indéfini + voyelle), the (défini)',
        'a/an = première mention ou catégorie générale',
        'the = les deux personnes savent de quoi on parle',
        'Pas d\'article : langues (English), repas (breakfast), pays (Madagascar)',
        'Astuce son : "a university" (u = « you ») / "an hour" (h muet)',
      ],
      quickExercises: [
        { q: 'Complete: She is ___ engineer.', a: 'an engineer', hint: 'engineer starts with a vowel sound' },
        { q: 'Complete: I want ___ coffee. (a/an/the/Ø)', a: 'some coffee / a coffee', hint: 'unspecified quantity' },
        { q: 'Correct the error: "I like the music."', a: 'I like music. (general taste → no article)', hint: 'general preference' },
        { q: 'Complete: Please close ___ window.', a: 'the window', hint: 'specific, known window' },
        { q: 'a or an? : ___ honest man', a: 'an honest man', hint: '"h" is silent in "honest"' },
      ],
    },
    mg: {
      intro: "Ny teny anglisy dia manana teny filaza telo : <strong>a</strong>, <strong>an</strong> (tsy mazava) ary <strong>the</strong> (mazava). Tsy misy lahy/vavy toy ny teny frantsay.",
      sections: [
        {
          title: 'A / An — tsy mazava',
          content: 'Ampiasaina rehefa miresaka zavatra voalohany, na zavatra tsy voatondro manokana. <strong>A</strong> alohan\'ny consonant, <strong>an</strong> alohan\'ny vowel.',
          rows: [
            { en: 'I have a book.', tr: 'Manana boky aho.' },
            { en: 'She is an engineer.', tr: 'Injenierina izy.' },
            { en: 'I need a pen.', tr: 'Mila kilalao aho.' },
            { en: 'He ate an apple.', tr: 'Nihinana paoma izy.' },
          ]
        },
        {
          title: 'The — mazava / fantatra',
          content: 'Ampiasaina rehefa samy mahalala ny mpiresaka izay resahina. Mitovy amin\'ny "ny" amin\'ny teny malagasy.',
          rows: [
            { en: 'The book is on the table.', tr: 'Ny boky dia eo ambonin\'ny latabatra.' },
            { en: 'Please close the door.', tr: 'Mangataka, hidin\'ny varavarana.' },
            { en: 'The sun rises in the east.', tr: 'Ny masoandro dia miposaka any atsinanana.' },
          ]
        },
        {
          title: 'Tsy misy teny filaza (Ø)',
          content: 'Eo alohan\'ny hevitra ankapoben\'ny (fiteny, sakafo, sns.).',
          rows: [
            { en: 'I like Ø rice.', tr: 'Tia vary aho (amin\'ny ankapobeny).' },
            { en: 'She speaks Ø English.', tr: 'Miteny anglisy izy.' },
            { en: 'We have Ø breakfast at 7.', tr: 'Misakafo maraina amin\'ny 7 ora izahay.' },
          ]
        },
      ],
      commonErrors: [
        '❌ "She is engineer" → ✅ "She is AN engineer" (tsy maintsy misy article alohan\'ny asa)',
        '❌ "I like the rice" → ✅ "I like rice" (hevitra ankapoben\'ny = tsy misy article)',
        '❌ "an book" → ✅ "a book" (b = consonant)',
        '❌ "a apple" → ✅ "an apple" (a = vowel)',
      ],
      tips: [
        'a + consonant : a cat, a dog, a university ("u" = "you")',
        'an + vowel : an apple, an hour ("h" mangina), an umbrella',
        'the = "ny" — samy mahalala ny zavatra resahina',
        'Tsy misy article : fiteny, sakafo, firenena, tanàna, matière sekoly',
      ],
      summary: [
        'Article 3 : a (consonant), an (vowel), the (fantatra)',
        'a/an = voalohany lazaina, na ankapoben\'ny',
        'the = "ny" malagasy — samy mahalala ny resahina',
        'Tsy misy article : fiteny (English), sakafo (breakfast), firenena (Madagascar)',
      ],
      quickExercises: [
        { q: 'Fenoy: She is ___ engineer.', a: 'an engineer', hint: '"e" vowel' },
        { q: 'Mety sa tsia? "I like the music."', a: 'Diso → I like music. (hevitra ankapobeny)', hint: 'tsy misy article' },
        { q: 'Fenoy: Please close ___ window.', a: 'the window', hint: 'window fantatra' },
        { q: 'a na an? ___ honest man', a: 'an honest man', hint: '"h" mangina' },
      ],
    }
  },

  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'plurals',
    title: 'Les Pluriels',
    icon: '🔢',
    level: 'A1',
    fr: {
      intro: 'En anglais, on forme le pluriel des noms en ajoutant <strong>-s</strong> ou <strong>-es</strong>. Certains pluriels sont irréguliers.',
      sections: [
        {
          title: 'Pluriel régulier : + s / + es',
          content: '<strong>+s</strong> en général. <strong>+es</strong> après -s, -sh, -ch, -x, -z. Les noms en -y → -ies.',
          rows: [
            { en: 'book → books', tr: 'livre → livres' },
            { en: 'box → boxes', tr: 'boîte → boîtes' },
            { en: 'city → cities', tr: 'ville → villes' },
            { en: 'bus → buses', tr: 'bus → bus' },
          ]
        },
        {
          title: 'Pluriels irréguliers',
          content: 'Ces mots changent complètement de forme au pluriel.',
          rows: [
            { en: 'man → men', tr: 'homme → hommes' },
            { en: 'woman → women', tr: 'femme → femmes' },
            { en: 'child → children', tr: 'enfant → enfants' },
            { en: 'tooth → teeth', tr: 'dent → dents' },
            { en: 'foot → feet', tr: 'pied → pieds' },
            { en: 'mouse → mice', tr: 'souris → souris' },
          ]
        },
      ],
      tips: [
        'sheep, fish, deer = pareil au singulier et au pluriel',
        'Noms en -f/-fe → -ves : leaf → leaves, knife → knives',
      ],
      summary: [
        'Règle générale : nom + -s (books, cats, dogs)',
        '+es après -s, -sh, -ch, -x, -z (boxes, buses, churches)',
        '-y → -ies si consonne avant -y (city→cities) ; +s si voyelle (boys)',
        'Irréguliers clés : man/men, woman/women, child/children, foot/feet, tooth/teeth',
        'Invariables : sheep, fish, deer (singulier = pluriel)',
      ],
      quickExercises: [
        { q: 'Plural of "box"?', a: 'boxes', hint: '-x → +es' },
        { q: 'Plural of "child"?', a: 'children', hint: 'irregular' },
        { q: 'Plural of "city"?', a: 'cities', hint: 'consonant + y → ies' },
        { q: 'Correct: "I have two foots."', a: 'I have two feet.', hint: 'foot → feet (irregular)' },
        { q: 'Plural of "leaf"?', a: 'leaves', hint: '-f → -ves' },
      ],
    },
    mg: {
      intro: 'Ny maromaro (pluriel) amin\'ny anglisy dia ataon\'ny fampiana <strong>-s</strong> na <strong>-es</strong> amin\'ny faranan\'ny teny. Misy teny irrégulier koa.',
      sections: [
        {
          title: 'Pluriel mahazatra : + s / + es',
          content: '<strong>+s</strong> amin\'ny ankapobeny. <strong>+es</strong> aorian\'ny -s, -sh, -ch, -x, -z. Ny teny mifarana amin\'ny -y → -ies.',
          rows: [
            { en: 'book → books', tr: 'boky → boky maro' },
            { en: 'box → boxes', tr: 'boaty → boaty maro' },
            { en: 'city → cities', tr: 'tanàna → tanàna maro' },
            { en: 'bus → buses', tr: 'bus → bus maro' },
          ]
        },
        {
          title: 'Pluriel tsy mahazatra (irrégulier)',
          content: 'Ireo teny ireo dia miova endrika tanteraka amin\'ny maromaro.',
          rows: [
            { en: 'man → men', tr: 'lehilahy → lehilahy maro' },
            { en: 'woman → women', tr: 'vehivavy → vehivavy maro' },
            { en: 'child → children', tr: 'ankizy → ankizy maro' },
            { en: 'tooth → teeth', tr: 'nify → nify maro' },
            { en: 'foot → feet', tr: 'tongotra → tongotra maro [?]' },
            { en: 'mouse → mice', tr: 'voalavo → voalavo maro' },
          ]
        },
      ],
      tips: [
        'sheep, fish, deer = mitovy amin\'ny singulier sy pluriel',
        'Teny mifarana -f/-fe → -ves : leaf → leaves, knife → knives',
      ],
      summary: [
        'Fitsipika ankapoben\'ny : + -s (books, cats)',
        '+es aorian\'ny -s/-sh/-ch/-x/-z (boxes, buses)',
        '-y → -ies raha consonant eo aloha (city→cities)',
        'Irrégulier manan-danja : man/men, child/children, foot/feet, tooth/teeth',
      ],
      quickExercises: [
        { q: 'Pluriel ny "box"?', a: 'boxes', hint: '-x → +es' },
        { q: 'Pluriel ny "child"?', a: 'children', hint: 'irrégulier' },
        { q: 'Mety sa tsia? "I have two foots."', a: 'Diso → I have two feet.', hint: 'irrégulier' },
        { q: 'Pluriel ny "leaf"?', a: 'leaves', hint: '-f → -ves' },
      ],
    }
  },

  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'therebeis',
    title: 'There is / There are',
    icon: '📍',
    level: 'A1',
    fr: {
      intro: '<strong>There is</strong> (singulier) et <strong>There are</strong> (pluriel) s\'utilisent pour dire qu\'une chose existe ou se trouve quelque part.',
      sections: [
        {
          title: 'Affirmatif',
          content: '<strong>There is</strong> + nom singulier. <strong>There are</strong> + nom pluriel.',
          rows: [
            { en: 'There is a school in my village.', tr: 'Il y a une école dans mon village.' },
            { en: 'There are three students in the room.', tr: 'Il y a trois élèves dans la salle.' },
          ]
        },
        {
          title: 'Négatif et interrogatif',
          content: '',
          rows: [
            { en: 'There isn\'t a hospital here.', tr: 'Il n\'y a pas d\'hôpital ici.' },
            { en: 'There aren\'t any books.', tr: 'Il n\'y a pas de livres.' },
            { en: 'Is there a market nearby?', tr: 'Est-ce qu\'il y a un marché près d\'ici ?' },
            { en: 'Are there any students?', tr: 'Est-ce qu\'il y a des élèves ?' },
          ]
        },
      ],
      tips: [
        'There\'s = There is (contraction courante)',
        'Utilise "any" dans les phrases négatives et interrogatives',
      ],
      summary: [
        'There is + singulier / There are + pluriel',
        'Négatif : There isn\'t / There aren\'t any',
        'Question : Is there…? / Are there…?',
        '"any" dans les phrases négatives et interrogatives',
      ],
      quickExercises: [
        { q: 'Complete: ___ a book on the table.', a: 'There is', hint: 'book = singulier' },
        { q: 'Complete: ___ many students today.', a: 'There are', hint: 'students = pluriel' },
        { q: 'Make negative: "There is a hospital."', a: 'There isn\'t a hospital.', hint: 'is → isn\'t' },
        { q: 'Make question: "There are students."', a: 'Are there any students?', hint: 'Are + there + any?' },
      ],
    },
    mg: {
      intro: '<strong>There is</strong> (tokana) sy <strong>There are</strong> (maro) dia ampiasaina hilazana ny fisian\'ny zavatra na olona amin\'ny toerana iray.',
      sections: [
        {
          title: 'Fanekena (affirmatif)',
          content: '<strong>There is</strong> + singulier. <strong>There are</strong> + pluriel.',
          rows: [
            { en: 'There is a school in my village.', tr: 'Misy sekoly amin\'ny vohiko.' },
            { en: 'There are three students in the room.', tr: 'Misy mpianatra telo ao amin\'ny efitrano.' },
          ]
        },
        {
          title: 'Fandavana sy Fanontaniana',
          content: '',
          rows: [
            { en: 'There isn\'t a hospital here.', tr: 'Tsy misy hopitaly eto.' },
            { en: 'There aren\'t any books.', tr: 'Tsy misy boky.' },
            { en: 'Is there a market nearby?', tr: 'Misy tsena akaikin\'ity ve?' },
            { en: 'Are there any students?', tr: 'Misy mpianatra ve?' },
          ]
        },
      ],
      tips: [
        'There\'s = There is (fohiazana)',
        'Ampiasao "any" amin\'ny fandavana sy fanontaniana',
      ],
      summary: [
        'There is + tokana / There are + maro',
        'Fandavana : There isn\'t / There aren\'t any',
        'Fanontaniana : Is there…? / Are there…?',
        '"any" amin\'ny fandavana sy fanontaniana',
      ],
      quickExercises: [
        { q: 'Fenoy: ___ a book on the table.', a: 'There is', hint: 'book = tokana' },
        { q: 'Fenoy: ___ many students today.', a: 'There are', hint: 'students = maro' },
        { q: 'Ataovy fandavana: "There is a hospital."', a: 'There isn\'t a hospital.', hint: 'is → isn\'t' },
      ],
    }
  },

  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'presentSimple',
    title: 'Present Simple',
    icon: '📖',
    level: 'A1–A2',
    fr: {
      intro: 'Le Present Simple exprime les habitudes, les routines, les vérités générales et les états permanents.',
      sections: [
        {
          title: 'Affirmatif',
          content: 'I/You/We/They + verbe. He/She/It + verbe <strong>+ s/es</strong>.',
          rows: [
            { en: 'I eat rice every day.', tr: 'Je mange du riz tous les jours.' },
            { en: 'She works at a hospital.', tr: 'Elle travaille dans un hôpital.' },
            { en: 'They speak English well.', tr: 'Ils parlent bien anglais.' },
          ]
        },
        {
          title: 'Négatif',
          content: 'I/You/We/They + <strong>don\'t</strong> + verbe. He/She/It + <strong>doesn\'t</strong> + verbe.',
          rows: [
            { en: 'I don\'t like coffee.', tr: 'Je n\'aime pas le café.' },
            { en: 'He doesn\'t speak French.', tr: 'Il ne parle pas français.' },
          ]
        },
        {
          title: 'Interrogatif',
          content: '<strong>Do</strong>/Does + sujet + verbe ?',
          rows: [
            { en: 'Do you study every day?', tr: 'Est-ce que tu étudies tous les jours ?' },
            { en: 'Does she live in Tana?', tr: 'Est-ce qu\'elle habite à Tana ?' },
          ]
        },
        {
          title: 'Règle du -s/-es',
          content: 'Avec he/she/it : +s en général. +es après -sh/-ch/-x/-o/-s. Verbes en -y → -ies. Exceptions : have→has, be→is.',
          rows: [
            { en: 'He always reads before sleep.', tr: 'Il lit toujours avant de dormir.' },
            { en: 'She has a big family.', tr: 'Elle a une grande famille.' },
            { en: 'My father goes to work by bike.', tr: 'Mon père va au travail à vélo.' },
            { en: 'The baby cries every night.', tr: 'Le bébé pleure chaque nuit.' },
            { en: 'Water boils at 100 degrees.', tr: 'L\'eau bout à 100 degrés.' },
          ]
        },
      ],
      commonErrors: [
        '❌ "She work every day" → ✅ "She workS every day" (he/she/it → toujours +s)',
        '❌ "He don\'t like rice" → ✅ "He DOESN\'T like rice" (doesn\'t avec he/she/it)',
        '❌ "Does she works?" → ✅ "Does she work?" (avec does/doesn\'t → infinitif sans -s)',
        '❌ "I am always late" (correct) mais ❌ "Always I am late" → adverbe après "be"',
        '❌ "She studys" → ✅ "She studies" (-y après consonne → -ies)',
      ],
      tips: [
        'Adverbes de fréquence : always, usually, often, sometimes, rarely, never',
        'always/usually → devant le verbe : She always eats breakfast.',
        'don\'t (I/you/we/they) ≠ doesn\'t (he/she/it) — erreur très fréquente !',
        'he/she/it → TOUJOURS +s, même si ça semble bizarre',
      ],
      summary: [
        'Forme : sujet + verbe (+s avec he/she/it)',
        'Négatif : don\'t / doesn\'t + verbe (infinitif)',
        'Question : Do / Does + sujet + verbe ?',
        'Usages : habitudes (every day), vérités générales, états permanents',
        'Erreur classique : "He don\'t" → FAUX ; toujours "He doesn\'t"',
      ],
      quickExercises: [
        { q: 'Complete: She ___ (work) at a bank.', a: 'works', hint: 'she → +s' },
        { q: 'Correct: "He don\'t eat meat."', a: 'He doesn\'t eat meat.', hint: 'he → doesn\'t' },
        { q: 'Make question: "She lives in Tana."', a: 'Does she live in Tana?', hint: 'Does + verbe infinitif' },
        { q: 'Complete: They ___ (not/speak) French.', a: 'don\'t speak', hint: 'they → don\'t' },
        { q: 'Correct: "Does she works here?"', a: 'Does she work here?', hint: 'après does → infinitif sans -s' },
      ],
    },
    mg: {
      intro: 'Ny Present Simple dia ampiasaina ho an\'ny fomba mahazatra, ny asa andavanandro, ny marina mandrakariva. Ny malagasy dia mampiasa alohan\'ny verbe (mi-) sy adverbe fotoana.',
      sections: [
        {
          title: 'Fanekena (affirmatif)',
          content: 'I/You/We/They + verbe. He/She/It + verbe <strong>+ s/es</strong>.',
          rows: [
            { en: 'I eat rice every day.', tr: 'Mihinam-bary aho isan\'andro.' },
            { en: 'She works at a hospital.', tr: 'Miasa any amin\'ny hopitaly izy.' },
            { en: 'They speak English well.', tr: 'Miteny anglisy tsara izy ireo.' },
          ]
        },
        {
          title: 'Fandavana (négatif)',
          content: 'I/You/We/They + <strong>don\'t</strong> + verbe. He/She/It + <strong>doesn\'t</strong> + verbe.',
          rows: [
            { en: 'I don\'t like coffee.', tr: 'Tsy tia kafe aho.' },
            { en: 'He doesn\'t speak French.', tr: 'Tsy miteny frantsay izy.' },
          ]
        },
        {
          title: 'Fanontaniana (interrogatif)',
          content: '<strong>Do</strong>/Does + sujet + verbe ?',
          rows: [
            { en: 'Do you study every day?', tr: 'Mianatra isan\'andro ve ianao?' },
            { en: 'Does she live in Tana?', tr: 'Monina any Tana ve izy?' },
          ]
        },
        {
          title: 'Fitsipiky ny -s/-es',
          content: 'Amin\'ny he/she/it : work → works, go → goes, study → studies, have → has.',
          rows: [
            { en: 'He always reads before sleep.', tr: 'Mamaky foana izy mialoha ny fatoriana.' },
            { en: 'She has a big family.', tr: 'Manana fianakaviana lehibe izy.' },
          ]
        },
      ],
      commonErrors: [
        '❌ "She work every day" → ✅ "She workS every day" (he/she/it → +s foana)',
        '❌ "He don\'t like rice" → ✅ "He DOESN\'T like rice"',
        '❌ "Does she works?" → ✅ "Does she work?" (aorian\'ny does → infinitif)',
        '❌ "She studys" → ✅ "She studies" (-y aorian\'ny consonant → -ies)',
      ],
      tips: [
        'Adverbe fotoana : always (foana), usually (matetika), often (matetika koa), sometimes (indraindray), never (tsy mba)',
        'don\'t (I/you/we/they) ≠ doesn\'t (he/she/it)',
        'Ny fitsipika -s/-es dia ilaina foana amin\'ny he/she/it',
      ],
      summary: [
        'Endriky : sujet + verbe (+s amin\'ny he/she/it)',
        'Fandavana : don\'t / doesn\'t + verbe (infinitif)',
        'Fanontaniana : Do / Does + sujet + verbe ?',
        'Ampiasaina : fomba mahazatra, marina mandrakariva',
        'Hadisoana mahazatra : "He don\'t" → DISO ; "He doesn\'t" METY',
      ],
      quickExercises: [
        { q: 'Fenoy: She ___ (work) at a bank.', a: 'works', hint: 'she → +s' },
        { q: 'Ataovy fandavana: "He eats rice."', a: 'He doesn\'t eat rice.', hint: 'he → doesn\'t' },
        { q: 'Ataovy fanontaniana: "She lives in Tana."', a: 'Does she live in Tana?', hint: 'Does + infinitif' },
      ],
    }
  },

  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'presentContinuous',
    title: 'Present Continuous',
    icon: '🔄',
    level: 'A2',
    fr: {
      intro: 'Le Present Continuous (be + verbe-ing) décrit une action en cours au moment où on parle, ou une action temporaire.',
      sections: [
        {
          title: 'Formation',
          content: 'Sujet + <strong>am/is/are</strong> + verbe-<strong>ing</strong>. I → am ; he/she/it → is ; we/you/they → are.',
          rows: [
            { en: 'I am reading a book.', tr: 'Je suis en train de lire un livre.' },
            { en: 'She is cooking dinner.', tr: 'Elle est en train de cuisiner le dîner.' },
            { en: 'They are playing football.', tr: 'Ils sont en train de jouer au foot.' },
          ]
        },
        {
          title: 'Négatif et interrogatif',
          content: '',
          rows: [
            { en: 'I am not sleeping.', tr: 'Je ne suis pas en train de dormir.' },
            { en: 'Is she working now?', tr: 'Est-ce qu\'elle travaille en ce moment ?' },
            { en: 'What are you doing?', tr: 'Qu\'est-ce que tu fais ?' },
          ]
        },
        {
          title: 'Règles du -ing',
          content: 'Verbe en -e → supprimer le e : write→writing. Consonne courte doublée : run→running. -ie → ying : lie→lying.',
          rows: [
            { en: 'write → writing', tr: 'écrire → en train d\'écrire' },
            { en: 'run → running', tr: 'courir → en train de courir' },
            { en: 'lie → lying', tr: 'mentir/se coucher → en train de...' },
          ]
        },
      ],
      tips: [
        'Ne pas utiliser avec les verbes d\'état : know, love, hate, want, need, understand, believe',
        'Signal words : now, at the moment, currently, right now, look! listen!',
      ],
      summary: [
        'Forme : am/is/are + verbe-ing',
        'Négatif : am not / isn\'t / aren\'t + verbe-ing',
        'Question : Am/Is/Are + sujet + verbe-ing ?',
        'Usage : action en cours maintenant, situation temporaire',
        'Verbes d\'état JAMAIS en -ing : know, love, want, need, understand',
      ],
      quickExercises: [
        { q: 'Complete: She ___ (study) right now.', a: 'is studying', hint: 'she + is + -ing' },
        { q: 'Make negative: "They are playing."', a: 'They aren\'t playing.', hint: 'are → aren\'t' },
        { q: 'Correct: "I am knowing the answer."', a: 'I know the answer.', hint: '"know" is a state verb' },
        { q: 'Complete: What ___ you ___ (do)?', a: 'are, doing', hint: 'are + subject + -ing' },
      ],
    },
    mg: {
      intro: 'Ny Present Continuous (be + verbe-ing) dia fampisehoana ny asa atao amin\'izao fotoana izao, na asa vonjimaika.',
      sections: [
        {
          title: 'Fomba fanaovana',
          content: 'Sujet + <strong>am/is/are</strong> + verbe-<strong>ing</strong>.',
          rows: [
            { en: 'I am reading a book.', tr: 'Mamaky boky aho ankehitriny.' },
            { en: 'She is cooking dinner.', tr: 'Manao sakafo hariva izy.' },
            { en: 'They are playing football.', tr: 'Milalao baolina izy ireo.' },
          ]
        },
        {
          title: 'Fandavana sy Fanontaniana',
          content: '',
          rows: [
            { en: 'I am not sleeping.', tr: 'Tsy matory aho ankehitriny.' },
            { en: 'Is she working now?', tr: 'Miasa ve izy ankehitriny?' },
            { en: 'What are you doing?', tr: 'Inona no ataonao [?]?' },
          ]
        },
        {
          title: 'Fitsipiky ny -ing',
          content: 'Verbe mifarana -e → esorina ny e : write→writing. Consonant fohy doubled : run→running.',
          rows: [
            { en: 'write → writing', tr: 'manoratra → manoratra ankehitriny' },
            { en: 'run → running', tr: 'mihazakazaka → mihazakazaka ankehitriny' },
          ]
        },
      ],
      tips: [
        'Tsy ampiasaina amin\'ny "state verbs" : know, love, hate, want, need',
        'Teny fampitandremana : now (ankehitriny), at the moment, currently',
      ],
      summary: [
        'Endrika : am/is/are + verbe-ing',
        'Fandavana : isn\'t / aren\'t + verbe-ing',
        'Fanontaniana : Is/Are + sujet + verbe-ing ?',
        'Ampiasaina : asa atao ankehitriny, na vonjimaika',
        '"State verbs" TSY ampiasaina amin\'ny -ing : know, love, want',
      ],
      quickExercises: [
        { q: 'Fenoy: She ___ (study) ankehitriny.', a: 'is studying', hint: 'is + -ing' },
        { q: 'Ataovy fandavana: "They are playing."', a: 'They aren\'t playing.', hint: 'are → aren\'t' },
        { q: 'Mety sa tsia? "I am knowing the answer."', a: 'Diso → I know the answer. (state verb)', hint: '"know" = state verb' },
      ],
    }
  },

  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'pastSimple',
    title: 'Past Simple',
    icon: '⏮️',
    level: 'A2–B1',
    fr: {
      intro: 'Le Past Simple exprime une action <strong>terminée</strong> dans le passé, à un moment précis.',
      sections: [
        {
          title: 'Verbes réguliers : + ed',
          content: 'Sujet + verbe + <strong>ed</strong>.',
          rows: [
            { en: 'I worked yesterday.', tr: 'J\'ai travaillé hier.' },
            { en: 'She visited her family last week.', tr: 'Elle a rendu visite à sa famille la semaine dernière.' },
            { en: 'They studied all night.', tr: 'Ils ont étudié toute la nuit.' },
          ]
        },
        {
          title: 'Verbes irréguliers (forme 2)',
          content: 'Ces verbes ne prennent pas -ed.',
          rows: [
            { en: 'go → went', tr: 'aller → allé(e)' },
            { en: 'eat → ate', tr: 'manger → mangé(e)' },
            { en: 'come → came', tr: 'venir → venu(e)' },
            { en: 'see → saw', tr: 'voir → vu(e)' },
            { en: 'have → had', tr: 'avoir → eu(e)' },
            { en: 'do → did', tr: 'faire → fait(e)' },
            { en: 'be → was/were', tr: 'être → était/étaient' },
            { en: 'say → said', tr: 'dire → dit' },
            { en: 'know → knew', tr: 'savoir → su' },
            { en: 'take → took', tr: 'prendre → pris' },
          ]
        },
        {
          title: 'Négatif et interrogatif',
          content: '<strong>didn\'t</strong> + verbe infinitif. <strong>Did</strong> + sujet + verbe infinitif ?',
          rows: [
            { en: 'I didn\'t go to school today.', tr: 'Je ne suis pas allé à l\'école aujourd\'hui.' },
            { en: 'Did you eat lunch?', tr: 'As-tu mangé à midi ?' },
            { en: 'What did she say?', tr: 'Qu\'est-ce qu\'elle a dit ?' },
          ]
        },
      ],
      commonErrors: [
        '❌ "I goed to school" → ✅ "I WENT to school" (go est irrégulier)',
        '❌ "She didn\'t went" → ✅ "She didn\'t GO" (avec didn\'t → infinitif, pas past)',
        '❌ "Did she worked?" → ✅ "Did she WORK?" (avec did → infinitif)',
        '❌ "I was eat" → ✅ "I ate" (Past Simple ≠ be + verbe, sauf continuous)',
        '❌ "Yesterday I have eaten" → ✅ "Yesterday I ate" (hier = moment précis → Past Simple)',
        '❌ "He were happy" → ✅ "He WAS happy" (was pour I/he/she/it)',
      ],
      tips: [
        'Signal words : yesterday, last week/month/year, ago, in 2020, when I was young',
        'was (I/he/she/it) ≠ were (we/you/they)',
        'Avec didn\'t, le verbe reste à l\'infinitif (sans -ed)',
        'Apprenez les 30 verbes irréguliers les plus fréquents par cœur !',
      ],
      summary: [
        'Régulier : verbe + -ed (worked, studied)',
        'Irrégulier : forme 2 à apprendre (went, ate, came…)',
        'Négatif : didn\'t + infinitif (pas de -ed !)',
        'Question : Did + sujet + infinitif ?',
        'was = I/he/she/it ; were = we/you/they',
      ],
      quickExercises: [
        { q: 'Past of "go"?', a: 'went', hint: 'irregular verb' },
        { q: 'Correct: "She didn\'t went home."', a: 'She didn\'t go home.', hint: 'didn\'t + infinitif' },
        { q: 'Complete: ___ you study yesterday?', a: 'Did', hint: 'question = Did + sujet + infinitif' },
        { q: 'Past of "eat"?', a: 'ate', hint: 'irregular' },
        { q: 'was or were? "They ___ happy."', a: 'were', hint: 'they → were' },
      ],
    },
    mg: {
      intro: 'Ny Past Simple dia ampiasaina hilazana ny asa <strong>vita tanteraka</strong> tamin\'ny lasa, amin\'ny fotoana voafaritra.',
      sections: [
        {
          title: 'Verbe mahazatra : + ed',
          content: 'Sujet + verbe + <strong>ed</strong>.',
          rows: [
            { en: 'I worked yesterday.', tr: 'Niasa aho omaly.' },
            { en: 'She visited her family last week.', tr: 'Nitsidika ny fianakaviany izy tamin\'ny herinandrotsy.' },
            { en: 'They studied all night.', tr: 'Nianatra alina manontolo izy ireo.' },
          ]
        },
        {
          title: 'Verbe irrégulier (endrika faha-2)',
          content: 'Ireo verbe ireo dia tsy mampiana -ed.',
          rows: [
            { en: 'go → went', tr: 'mandeha → nankany' },
            { en: 'eat → ate', tr: 'mihinana → nihinana' },
            { en: 'come → came', tr: 'avy → tonga' },
            { en: 'see → saw', tr: 'mahita → nahita' },
            { en: 'have → had', tr: 'manana → nanana' },
            { en: 'do → did', tr: 'manao → nanao' },
            { en: 'be → was/were', tr: 'no → ... [?]' },
          ]
        },
        {
          title: 'Fandavana sy Fanontaniana',
          content: '<strong>didn\'t</strong> + infinitif. <strong>Did</strong> + sujet + infinitif ?',
          rows: [
            { en: 'I didn\'t go to school today.', tr: 'Tsy nankany an\'ny sekoly aho androany.' },
            { en: 'Did you eat lunch?', tr: 'Nihinana ny sakafo amin\'ny antoandro ve ianao?' },
            { en: 'What did she say?', tr: 'Inona no nolazainy [?]?' },
          ]
        },
      ],
      commonErrors: [
        '❌ "I goed" → ✅ "I went" (go = irrégulier)',
        '❌ "She didn\'t went" → ✅ "She didn\'t go" (aorian\'ny didn\'t → infinitif)',
        '❌ "Did she worked?" → ✅ "Did she work?"',
        '❌ "He were" → ✅ "He WAS" (was = I/he/she/it)',
      ],
      tips: [
        'Fotoana lasa : yesterday (omaly), last week (herinandrotsy), ago, in 2020',
        'was (I/he/she/it) ≠ were (we/you/they)',
        'Aorian\'ny didn\'t → infinitif foana (tsy -ed)',
      ],
      summary: [
        'Mahazatra : verbe + -ed (worked, studied)',
        'Tsy mahazatra : endrika 2 (went, ate, came, saw…)',
        'Fandavana : didn\'t + infinitif (tsy misy -ed)',
        'Fanontaniana : Did + sujet + infinitif ?',
        'was = I/he/she/it ; were = we/you/they',
      ],
      quickExercises: [
        { q: 'Past ny "go"?', a: 'went', hint: 'irrégulier' },
        { q: 'Mety sa tsia? "She didn\'t went home."', a: 'Diso → She didn\'t go home.', hint: 'aorian\'ny didn\'t → infinitif' },
        { q: 'Fenoy: ___ you study omaly?', a: 'Did', hint: 'Did + sujet + infinitif' },
        { q: 'was na were? "They ___ happy."', a: 'were', hint: 'they → were' },
      ],
    }
  },

  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'futureSimple',
    title: 'Future Simple',
    icon: '🚀',
    level: 'A2–B1',
    fr: {
      intro: 'Le Future Simple avec <strong>will</strong> exprime une décision spontanée, une promesse ou une prédiction. <strong>Be going to</strong> exprime une intention préparée.',
      sections: [
        {
          title: 'Will + verbe',
          content: 'Sujet + <strong>will</strong> + verbe infinitif. Même forme pour tous les sujets.',
          rows: [
            { en: 'I will help you.', tr: 'Je t\'aiderai.' },
            { en: 'She will pass her exam.', tr: 'Elle réussira son examen.' },
            { en: 'It will rain tomorrow.', tr: 'Il va pleuvoir demain.' },
          ]
        },
        {
          title: 'Won\'t (négatif) et Will...? (interrogatif)',
          content: '',
          rows: [
            { en: 'I won\'t forget you.', tr: 'Je ne t\'oublierai pas.' },
            { en: 'Will you come to the party?', tr: 'Est-ce que tu viendras à la fête ?' },
          ]
        },
        {
          title: 'Be going to',
          content: 'Pour les intentions planifiées ou les prédictions basées sur des signes visibles.',
          rows: [
            { en: 'I am going to study medicine.', tr: 'Je vais étudier la médecine.' },
            { en: 'Look at those clouds — it\'s going to rain!', tr: 'Regarde ces nuages — il va pleuvoir !' },
          ]
        },
      ],
      tips: [
        'will = décision spontanée / promesse / prédiction générale',
        'be going to = intention déjà décidée / preuve visible',
        'Signal words : tomorrow, next week/year, in the future, soon',
      ],
      summary: [
        'will + infinitif (même forme pour tous les sujets)',
        'Négatif : won\'t + infinitif',
        'Question : Will + sujet + infinitif ?',
        'will = décision spontanée, promesse, prédiction',
        'be going to = intention planifiée, preuve visible',
      ],
      quickExercises: [
        { q: 'Complete: She ___ (pass) her exam.', a: 'will pass', hint: 'will + infinitif' },
        { q: 'Correct: "He will goes to school."', a: 'He will go to school.', hint: 'will + infinitif sans -s' },
        { q: 'Negative: "I will help you."', a: 'I won\'t help you.', hint: 'will → won\'t' },
        { q: 'will or be going to? "Look at those clouds — ___"', a: 'it\'s going to rain!', hint: 'visible proof → be going to' },
      ],
    },
    mg: {
      intro: 'Ny Future Simple (<strong>will</strong> + verbe) dia ampiasaina ho an\'ny fanapahan-kevitra vetivety, toky, na fanambarana ho avy. Ny <strong>be going to</strong> dia ho an\'ny fikasana efa nokendry.',
      sections: [
        {
          title: 'Will + verbe',
          content: 'Sujet + <strong>will</strong> + infinitif. Mitovy ho an\'ny olon-drehetra.',
          rows: [
            { en: 'I will help you.', tr: 'Hanampy anao aho.' },
            { en: 'She will pass her exam.', tr: 'Hahajoro ny fanadinany izy [?].' },
            { en: 'It will rain tomorrow.', tr: 'Handatsaka ny orana rahampitso.' },
          ]
        },
        {
          title: 'Won\'t (fandavana) sy Will...? (fanontaniana)',
          content: '',
          rows: [
            { en: 'I won\'t forget you.', tr: 'Tsy hanadino anao aho.' },
            { en: 'Will you come to the party?', tr: 'Ho avy amin\'ny fety ve ianao?' },
          ]
        },
        {
          title: 'Be going to',
          content: 'Fikasana efa nokendry na faminaniana mifototra amin\'ny porofo hita.',
          rows: [
            { en: 'I am going to study medicine.', tr: 'Hianatra fanafody aho [?].' },
            { en: 'It\'s going to rain!', tr: 'Handatsaka ny orana!' },
          ]
        },
      ],
      tips: [
        'will = fanapahan-kevitra vetivety / toky',
        'be going to = fikasana efa nokendry / porofo hita',
        'Fotoana ho avy : tomorrow (rahampitso), next week (herinandro ho avy)',
      ],
      summary: [
        'will + infinitif (mitovy ho an\'ny olon-drehetra)',
        'Fandavana : won\'t + infinitif',
        'Fanontaniana : Will + sujet + infinitif ?',
        'will = fanapahan-kevitra vetivety; be going to = fikasana efa nokendry',
      ],
      quickExercises: [
        { q: 'Fenoy: She ___ (help) you tomorrow.', a: 'will help', hint: 'will + infinitif' },
        { q: 'Ataovy fandavana: "I will come."', a: 'I won\'t come.', hint: 'will → won\'t' },
        { q: 'will na be going to? Misy rahona be — ___', a: 'It\'s going to rain.', hint: 'porofo hita → be going to' },
      ],
    }
  },

  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'modals',
    title: 'Verbes Modaux',
    icon: '🛠️',
    level: 'A2',
    fr: {
      intro: 'Les verbes modaux (can, could, must, should, may, might, would) expriment la capacité, l\'obligation, la permission ou la possibilité. Ils sont suivis d\'un verbe à l\'infinitif sans <em>to</em>.',
      sections: [
        {
          title: 'Can / Can\'t — capacité et permission',
          content: '',
          rows: [
            { en: 'I can swim.', tr: 'Je sais nager. / Je peux nager.' },
            { en: 'Can I use your phone?', tr: 'Est-ce que je peux utiliser ton téléphone ?' },
            { en: 'She can\'t drive yet.', tr: 'Elle ne sait pas encore conduire.' },
          ]
        },
        {
          title: 'Must / Have to — obligation',
          content: '<strong>Must</strong> : obligation interne (je me l\'impose). <strong>Have to</strong> : obligation externe (règle, loi).',
          rows: [
            { en: 'You must study harder.', tr: 'Tu dois travailler plus dur.' },
            { en: 'I have to wear a uniform at school.', tr: 'Je dois porter un uniforme à l\'école.' },
            { en: 'You mustn\'t be late.', tr: 'Tu ne dois pas être en retard.' },
          ]
        },
        {
          title: 'Should / Shouldn\'t — conseil',
          content: '',
          rows: [
            { en: 'You should eat breakfast every day.', tr: 'Tu devrais manger le petit-déjeuner tous les jours.' },
            { en: 'You shouldn\'t sleep late.', tr: 'Tu ne devrais pas dormir tard.' },
          ]
        },
        {
          title: 'May / Might — possibilité',
          content: '<strong>May</strong> : assez probable. <strong>Might</strong> : moins probable.',
          rows: [
            { en: 'It may rain this afternoon.', tr: 'Il se peut qu\'il pleuve cet après-midi.' },
            { en: 'She might come later.', tr: 'Elle viendra peut-être plus tard.' },
          ]
        },
        {
          title: 'Would — politesse et condition',
          content: '',
          rows: [
            { en: 'Would you like some tea?', tr: 'Voulez-vous du thé ?' },
            { en: 'I would like to travel to Europe.', tr: 'J\'aimerais voyager en Europe.' },
          ]
        },
      ],
      commonErrors: [
        '❌ "She cans swim" → ✅ "She CAN swim" (modaux = jamais de -s)',
        '❌ "You must to study" → ✅ "You must study" (pas de "to" après les modaux)',
        '❌ "He should goes" → ✅ "He should go" (infinitif sans -s après modal)',
        '❌ "Can you to help me?" → ✅ "Can you help me?"',
        '❌ "I would like go" → ✅ "I would like TO go" (would like est une exception → to + inf)',
      ],
      tips: [
        'Les modaux ne prennent jamais de -s avec he/she/it',
        'Toujours suivis de l\'infinitif sans to (sauf ought to, have to)',
        'can → could (passé) ; will → would ; may → might',
      ],
      summary: [
        'can = capacité/permission ; must = obligation forte ; should = conseil',
        'may/might = possibilité ; would = politesse/conditionnel',
        'JAMAIS de -s avec he/she/it : she can (pas she cans)',
        'JAMAIS "to" après le modal (sauf have to, ought to)',
        'Exception : would like + to + infinitif',
      ],
      quickExercises: [
        { q: 'Correct: "She cans speak English."', a: 'She can speak English.', hint: 'modals never take -s' },
        { q: 'Correct: "You must to study."', a: 'You must study.', hint: 'no "to" after modal' },
        { q: 'Fill: You ___ eat more vegetables. (conseil)', a: 'should', hint: 'advice → should' },
        { q: 'Fill: It ___ rain later. (possibility)', a: 'may / might', hint: 'possibility' },
        { q: 'Correct: "He should goes home."', a: 'He should go home.', hint: 'modal + infinitif' },
      ],
    },
    mg: {
      intro: 'Ny verbe manampy (can, must, should, may, might, would) dia fampisehoana ny fahafahana, ny tsy maintsy, ny tsara atao, na ny mety mitranga. Ampiasaina foana miaraka amin\'ny infinitif tsy misy "to".',
      sections: [
        {
          title: 'Can / Can\'t — fahafahana sy fanomezan-dalana',
          content: '',
          rows: [
            { en: 'I can swim.', tr: 'Afaka milomano aho.' },
            { en: 'Can I use your phone?', tr: 'Afaka mampiasa ny finaonanao ve aho?' },
            { en: 'She can\'t drive yet.', tr: 'Tsy afaka mampiasa fiara izy mbola [?].' },
          ]
        },
        {
          title: 'Must / Have to — tsy maintsy',
          content: '',
          rows: [
            { en: 'You must study harder.', tr: 'Tsy maintsy mianatra mafy kokoa ianao.' },
            { en: 'I have to wear a uniform.', tr: 'Tsy maintsy manao akanjo iray mitovy aho [?].' },
            { en: 'You mustn\'t be late.', tr: 'Tsy tokony hatara ianao.' },
          ]
        },
        {
          title: 'Should / Shouldn\'t — tsara raha atao',
          content: '',
          rows: [
            { en: 'You should eat breakfast every day.', tr: 'Tokony hihinana sakafo maraina isan\'andro ianao.' },
            { en: 'You shouldn\'t sleep late.', tr: 'Tsy tokony hatory hariva ianao.' },
          ]
        },
        {
          title: 'May / Might — mety mitranga',
          content: '',
          rows: [
            { en: 'It may rain this afternoon.', tr: 'Mety handatsaka ny orana tolakandro.' },
            { en: 'She might come later.', tr: 'Mety ho avy izy avy eo [?].' },
          ]
        },
        {
          title: 'Would — fandraharahana sy toky',
          content: '',
          rows: [
            { en: 'Would you like some tea?', tr: 'Te-misotro dite ve ianao?' },
            { en: 'I would like to travel to Europe.', tr: 'Te-handeha any Eropa aho.' },
          ]
        },
      ],
      commonErrors: [
        '❌ "She cans swim" → ✅ "She can swim" (modal = tsy misy -s)',
        '❌ "You must to study" → ✅ "You must study" (tsy "to" aorian\'ny modal)',
        '❌ "He should goes" → ✅ "He should go" (infinitif foana)',
      ],
      tips: [
        'Ny modal verbs dia tsy manova endrika (tsy +s amin\'ny he/she/it)',
        'Tsy ampiasaina "to" aorian\'ny modal (afa-tsy have to, ought to)',
        'can → could (lasa); will → would; may → might',
      ],
      summary: [
        'can = afaka; must = tsy maintsy; should = tokony',
        'may/might = mety; would = fandraharahana/conditionnelle',
        'TSY misy -s amin\'ny he/she/it : she can (tsy she cans)',
        'TSY "to" aorian\'ny modal (afa-tsy have to)',
      ],
      quickExercises: [
        { q: 'Mety sa tsia? "She cans swim."', a: 'Diso → She can swim.', hint: 'tsy misy -s amin\'ny modal' },
        { q: 'Mety sa tsia? "You must to study."', a: 'Diso → You must study.', hint: 'tsy "to" aorian\'ny modal' },
        { q: 'Fenoy: You ___ eat more vegetables. (tsara)', a: 'should', hint: 'tsara raha atao = should' },
        { q: 'Fenoy: He ___ help me. (mety)', a: 'may / might', hint: 'mety mitranga' },
      ],
    }
  },

  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'presentPerfect',
    title: 'Present Perfect',
    icon: '🔗',
    level: 'B1',
    fr: {
      intro: 'Le Present Perfect (<strong>have/has + participe passé</strong>) relie le passé au présent. On ne précise pas <em>quand</em> l\'action a eu lieu.',
      sections: [
        {
          title: 'Formation et usage général',
          content: 'Sujet + <strong>have/has</strong> + participe passé.',
          rows: [
            { en: 'I have visited Paris.', tr: 'J\'ai visité Paris (dans ma vie).' },
            { en: 'She has finished her homework.', tr: 'Elle a fini ses devoirs.' },
            { en: 'They have never eaten sushi.', tr: 'Ils n\'ont jamais mangé de sushi.' },
          ]
        },
        {
          title: 'Already / Yet / Just',
          content: '<strong>already</strong> (déjà, affirmatif) ; <strong>yet</strong> (encore/déjà, négatif/question) ; <strong>just</strong> (juste/venir de).',
          rows: [
            { en: 'I have already eaten.', tr: 'J\'ai déjà mangé.' },
            { en: 'Have you finished yet?', tr: 'As-tu fini ?' },
            { en: 'She has just arrived.', tr: 'Elle vient d\'arriver.' },
          ]
        },
        {
          title: 'Ever / Never / For / Since',
          content: '',
          rows: [
            { en: 'Have you ever been to London?', tr: 'Es-tu déjà allé(e) à Londres ?' },
            { en: 'I have never seen snow.', tr: 'Je n\'ai jamais vu la neige.' },
            { en: 'I have lived here for 5 years.', tr: 'J\'habite ici depuis 5 ans.' },
            { en: 'She has worked here since 2020.', tr: 'Elle travaille ici depuis 2020.' },
          ]
        },
      ],
      commonErrors: [
        '❌ "I have seen him yesterday" → ✅ "I SAW him yesterday" (yesterday = moment précis → Past Simple)',
        '❌ "She has went to Paris" → ✅ "She has GONE to Paris" (go → gone, pas went)',
        '❌ "I have lived here since 5 years" → ✅ "...for 5 years" (durée → for)',
        '❌ "Have you ever went?" → ✅ "Have you ever BEEN?" (participe passé obligatoire)',
        '❌ "I have already ate" → ✅ "I have already EATEN"',
      ],
      tips: [
        'Present Perfect ≠ Past Simple : PP = pas de moment précis ; PS = moment précis',
        'I have eaten today (today pas encore fini) / I ate at noon (moment précis)',
        'for = durée (for 3 years) ; since = point de départ (since 2020)',
      ],
      summary: [
        'Forme : have/has + participe passé',
        'Usage : expériences de vie, résultats récents, durée avec for/since',
        'already (affirmatif) / yet (négatif+question) / just (il vient de)',
        'ever (déjà?) / never (jamais)',
        'for = durée (3 years) ; since = début (2020)',
      ],
      quickExercises: [
        { q: 'Correct: "I have seen him yesterday."', a: 'I saw him yesterday.', hint: 'yesterday = moment précis → Past Simple' },
        { q: 'Complete: She ___ (just/arrive).', a: 'has just arrived', hint: 'has + just + pp' },
        { q: 'for or since? "I\'ve lived here ___ 2019."', a: 'since 2019', hint: 'point de départ = since' },
        { q: 'Complete: Have you ever ___ (be) to Paris?', a: 'been', hint: 'go → gone, be → been' },
        { q: 'Correct: "She has went home."', a: 'She has gone home.', hint: 'go → gone (pp irrégulier)' },
      ],
    },
    mg: {
      intro: 'Ny Present Perfect (<strong>have/has + participe passé</strong>) dia mampifandray ny lasa sy ny ankehitriny. Tsy lazaina ny fotoana manokana nanaovana ilay asa.',
      sections: [
        {
          title: 'Fomba fanaovana sy fampiasana',
          content: 'Sujet + <strong>have/has</strong> + participe passé.',
          rows: [
            { en: 'I have visited Paris.', tr: 'Efa nitsidika any Paris aho (tamin\'ny fiainako).' },
            { en: 'She has finished her homework.', tr: 'Efa vita ny devoa ataony.' },
            { en: 'They have never eaten sushi.', tr: 'Tsy mba nihinana sushi izy ireo.' },
          ]
        },
        {
          title: 'Already / Yet / Just',
          content: '',
          rows: [
            { en: 'I have already eaten.', tr: 'Efa nihinana aho.' },
            { en: 'Have you finished yet?', tr: 'Vita sahady ve ianao [?]?' },
            { en: 'She has just arrived.', tr: 'Vao tonga izy.' },
          ]
        },
        {
          title: 'Ever / Never / For / Since',
          content: '',
          rows: [
            { en: 'Have you ever been to London?', tr: 'Nitsidika any Londona ve ianao?' },
            { en: 'I have never seen snow.', tr: 'Tsy mba nahita oram-panala aho.' },
            { en: 'I have lived here for 5 years.', tr: 'Monina eto aho hatramin\'ny 5 taona lasa.' },
            { en: 'She has worked here since 2020.', tr: 'Niasa eto izy hatramin\'ny 2020.' },
          ]
        },
      ],
      commonErrors: [
        '❌ "I have seen him omaly" → ✅ "I SAW him omaly" (fotoana voafaritra → Past Simple)',
        '❌ "She has went" → ✅ "She has GONE" (go → gone)',
        '❌ "...since 5 years" → ✅ "...for 5 years" (faharetan\'ny = for)',
      ],
      tips: [
        'Present Perfect ≠ Past Simple : PP = tsy voafaritra; PS = voafaritra',
        'for = faharetan\'ny fotoana (for 3 years); since = fiandohan\'ny fotoana (since 2020)',
        '"ever" ampiasaina amin\'ny fanontaniana; "never" amin\'ny fandavana',
      ],
      summary: [
        'Endrika : have/has + participe passé',
        'Ampiasaina : traikefa (tsy voafaritra), vokatra vao vita, for/since',
        'already (efa) / yet (tsara? amin\'ny fanontaniana) / just (vao)',
        'for = faharetan\'ny fotoana; since = fiandohana',
      ],
      quickExercises: [
        { q: 'Mety sa tsia? "I have seen him omaly."', a: 'Diso → I saw him yesterday. (Past Simple)', hint: 'fotoana voafaritra → Past Simple' },
        { q: 'Fenoy: She ___ (just/arrive).', a: 'has just arrived', hint: 'has + just + pp' },
        { q: 'for na since? "...since ___ 2019"', a: 'since 2019', hint: 'fiandohana = since' },
      ],
    }
  },

  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'pastContinuous',
    title: 'Past Continuous',
    icon: '⏸️',
    level: 'B1',
    fr: {
      intro: 'Le Past Continuous (<strong>was/were + verbe-ing</strong>) décrit une action qui était en cours dans le passé, souvent interrompue par une autre action.',
      sections: [
        {
          title: 'Formation',
          content: 'I/He/She/It + <strong>was</strong> + verbe-ing. We/You/They + <strong>were</strong> + verbe-ing.',
          rows: [
            { en: 'I was sleeping when the phone rang.', tr: 'Je dormais quand le téléphone a sonné.' },
            { en: 'She was studying all evening.', tr: 'Elle étudiait toute la soirée.' },
            { en: 'They were playing when it started to rain.', tr: 'Ils jouaient quand il a commencé à pleuvoir.' },
          ]
        },
        {
          title: 'Past Continuous + Past Simple (while / when)',
          content: '<strong>While</strong> + Past Continuous : action en cours. <strong>When</strong> + Past Simple : interruption.',
          rows: [
            { en: 'While I was cooking, the light went out.', tr: 'Pendant que je cuisinais, la lumière s\'est éteinte.' },
            { en: 'When she arrived, we were eating.', tr: 'Quand elle est arrivée, nous mangions.' },
          ]
        },
      ],
      tips: [
        'was (I/he/she/it) ; were (we/you/they)',
        'Deux actions passées simultanées → while + Past Continuous / Past Continuous',
        'Action longue (PC) interrompue par action courte (PS)',
      ],
      summary: [
        'Forme : was/were + verbe-ing',
        'was = I/he/she/it ; were = we/you/they',
        'while + PC = action en cours ; when + PS = interruption',
        'PC (action longue) + PS (action courte qui interrompt)',
      ],
      quickExercises: [
        { q: 'Complete: I ___ (sleep) when the phone rang.', a: 'was sleeping', hint: 'I → was + -ing' },
        { q: 'was or were? "They ___ playing."', a: 'were', hint: 'they → were' },
        { q: 'Complete: While she ___ (cook), he arrived.', a: 'was cooking', hint: 'while + PC' },
        { q: 'Correct: "I were studying."', a: 'I was studying.', hint: 'I → was (not were)' },
      ],
    },
    mg: {
      intro: 'Ny Past Continuous (<strong>was/were + verbe-ing</strong>) dia fampisehoana ny asa nitohy tamin\'ny lasa, matetika voaraotry ny asa hafa.',
      sections: [
        {
          title: 'Fomba fanaovana',
          content: 'I/He/She/It + <strong>was</strong> + verbe-ing. We/You/They + <strong>were</strong> + verbe-ing.',
          rows: [
            { en: 'I was sleeping when the phone rang.', tr: 'Natory aho fony niantso ny finaonan\'i [?].' },
            { en: 'She was studying all evening.', tr: 'Nianatra hariva manontolo izy.' },
            { en: 'They were playing when it rained.', tr: 'Nilalao izy ireo fony nilatsaka ny orana.' },
          ]
        },
        {
          title: 'Past Continuous + Past Simple (while / when)',
          content: '',
          rows: [
            { en: 'While I was cooking, the light went out.', tr: 'Raha nanao sakafo aho, dia niala ny jiro [?].' },
            { en: 'When she arrived, we were eating.', tr: 'Fony tonga izy, nihinana izahay.' },
          ]
        },
      ],
      tips: [
        'was (I/he/she/it) ; were (we/you/they)',
        'while + Past Continuous = asa nitohy',
        'when + Past Simple = asa nanapaka ny asa nitohy',
      ],
      summary: [
        'Endrika : was/were + verbe-ing',
        'was = I/he/she/it ; were = we/you/they',
        'while + PC = asa nitohy; when + PS = asa nanapaka',
      ],
      quickExercises: [
        { q: 'Fenoy: I ___ (sleep) fony niantso ny finaonan\'i.', a: 'was sleeping', hint: 'I → was + -ing' },
        { q: 'was na were? "They ___ playing."', a: 'were', hint: 'they → were' },
        { q: 'Fenoy: While she ___ (cook), tonga izy.', a: 'was cooking', hint: 'while + PC' },
      ],
    }
  },

  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'conditionals',
    title: 'Conditionnels (if)',
    icon: '🔀',
    level: 'B1–B2',
    fr: {
      intro: 'Les conditionnels expriment des situations hypothétiques. Il en existe 4 types selon le degré de réalité.',
      sections: [
        {
          title: 'Type 0 — vérité générale',
          content: '<strong>If + présent, présent.</strong> Pour les faits scientifiques et habitudes.',
          rows: [
            { en: 'If you heat water to 100°C, it boils.', tr: 'Si tu chauffes l\'eau à 100°C, elle bout.' },
            { en: 'If it rains, the grass gets wet.', tr: 'Quand il pleut, l\'herbe se mouille.' },
          ]
        },
        {
          title: 'Type 1 — réel et probable',
          content: '<strong>If + présent simple, will + infinitif.</strong> Situation possible dans le futur.',
          rows: [
            { en: 'If I study, I will pass.', tr: 'Si j\'étudie, je réussirai.' },
            { en: 'If it rains tomorrow, we won\'t go out.', tr: 'S\'il pleut demain, nous ne sortirons pas.' },
          ]
        },
        {
          title: 'Type 2 — irréel / hypothétique',
          content: '<strong>If + past simple, would + infinitif.</strong> Situation impossible ou peu probable.',
          rows: [
            { en: 'If I had a car, I would drive to work.', tr: 'Si j\'avais une voiture, j\'irais au travail en voiture.' },
            { en: 'If I were you, I would study more.', tr: 'Si j\'étais toi, j\'étudierais davantage.' },
          ]
        },
        {
          title: 'Type 3 — regret sur le passé',
          content: '<strong>If + past perfect, would have + participe passé.</strong> Situation qui ne s\'est pas réalisée.',
          rows: [
            { en: 'If I had studied, I would have passed.', tr: 'Si j\'avais étudié, j\'aurais réussi.' },
            { en: 'If she had left earlier, she wouldn\'t have missed the bus.', tr: 'Si elle était partie plus tôt, elle n\'aurait pas raté le bus.' },
          ]
        },
      ],
      commonErrors: [
        '❌ "If I will study, I will pass" → ✅ "If I STUDY, I will pass" (Type 1 : présent après if)',
        '❌ "If I was rich" → ✅ "If I WERE rich" (Type 2 : were pour tous les sujets)',
        '❌ "If I would have money" → ✅ "If I HAD money" (Type 2 : past simple après if)',
        '❌ "If she studied, she would passed" → ✅ "...she would PASS" (infinitif après would)',
        '❌ "If I had studied, I would passed" → ✅ "...I would HAVE PASSED" (Type 3)',
      ],
      tips: [
        'Type 2 : if + were (pas was!) pour tous les sujets : If I were you...',
        'Ordre des propositions : la proposition "if" peut venir en premier ou en second',
        'Si "if" en premier → virgule obligatoire entre les deux propositions',
      ],
      summary: [
        'Type 0 : If + présent, présent (vérité générale)',
        'Type 1 : If + présent, will + inf (futur réel)',
        'Type 2 : If + past simple, would + inf (hypothèse)',
        'Type 3 : If + past perfect, would have + pp (regret passé)',
        'Type 2 : TOUJOURS "were" (jamais "was") : If I were you…',
      ],
      quickExercises: [
        { q: 'Type 1: If it rains, we ___ (stay) home.', a: 'will stay', hint: 'If + présent → will + inf' },
        { q: 'Correct: "If I was rich, I would help everyone."', a: 'If I were rich, I would help everyone.', hint: 'Type 2 : were (pas was)' },
        { q: 'Type 3: If I ___ (study), I would have passed.', a: 'had studied', hint: 'If + past perfect' },
        { q: 'Correct: "If I will come, I will call you."', a: 'If I come, I will call you.', hint: 'No will after if in Type 1' },
      ],
    },
    mg: {
      intro: 'Ny conditionals dia fampisehoana ny toe-javatra hypothétique. Misy karazana 4 arakaraka ny tena mety mitranga.',
      sections: [
        {
          title: 'Type 0 — veritá ankapoben\'ny',
          content: '<strong>If + présent, présent.</strong>',
          rows: [
            { en: 'If you heat water, it boils.', tr: 'Raha manafana rano ianao, dia mifoha.' },
            { en: 'If it rains, the grass gets wet.', tr: 'Raha milatsaka ny orana, dia lena ny ahitra.' },
          ]
        },
        {
          title: 'Type 1 — mety mitranga',
          content: '<strong>If + présent, will + infinitif.</strong>',
          rows: [
            { en: 'If I study, I will pass.', tr: 'Raha mianatra aho, dia hahajoro [?].' },
            { en: 'If it rains tomorrow, we won\'t go out.', tr: 'Raha milatsaka ny orana rahampitso, tsy hivoaka izahay.' },
          ]
        },
        {
          title: 'Type 2 — tsy misy / soso-kevitra',
          content: '<strong>If + past simple, would + infinitif.</strong>',
          rows: [
            { en: 'If I had a car, I would drive to work.', tr: 'Raha manana fiara aho, dia hamily mankany amin\'ny asako [?].' },
            { en: 'If I were you, I would study more.', tr: 'Raha ianao aho, dia hianatra mafy kokoa.' },
          ]
        },
        {
          title: 'Type 3 — tsoa-panahy tamin\'ny lasa',
          content: '<strong>If + past perfect, would have + participe passé.</strong>',
          rows: [
            { en: 'If I had studied, I would have passed.', tr: 'Raha nianatra aho, dia nohajoro [?].' },
            { en: 'If she had left earlier, she wouldn\'t have missed the bus.', tr: 'Raha nivoaka mialoha izy, tsy diso lamasinina [?].' },
          ]
        },
      ],
      commonErrors: [
        '❌ Type 2 : "If I was" → ✅ "If I WERE" (were ho an\'ny olon-drehetra)',
        '❌ "Raha hianatra aho dia hahajoro" → misy "will/would" ilaina amin\'ny fehezanteny faharoa [?]',
      ],
      tips: [
        'Type 2 : if + were (tsy was!) ho an\'ny olon-drehetra',
        '"raha" = if amin\'ny malagasy — ao am-piandohan\'ny fepetra foana',
        'Comma (,) ilaina raha "if" eo aloha',
      ],
      summary: [
        'Type 0 : fitsipika ankapoben\'ny (If + présent, présent)',
        'Type 1 : hety mitranga (If + présent, will + inf)',
        'Type 2 : soso-kevitra (If + past, would + inf)',
        'Type 3 : tsoa-panahy (If + past perfect, would have + pp)',
        'Type 2 : "were" foana (tsy "was") : If I were you…',
      ],
      quickExercises: [
        { q: 'Type 1: If it rains, we ___ (stay) home.', a: 'will stay', hint: 'If + présent → will + inf' },
        { q: 'Mety sa tsia? "If I was rich…"', a: 'Diso → If I were rich… (Type 2 : were foana)', hint: 'were, tsy was' },
        { q: 'Type 3: If I ___ (study), I would have passed.', a: 'had studied', hint: 'past perfect' },
      ],
    }
  },

  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'passiveVoice',
    title: 'Voix Passive',
    icon: '🔄',
    level: 'B1',
    fr: {
      intro: 'La voix passive met l\'accent sur l\'objet de l\'action, pas sur celui qui la fait. On l\'utilise quand le sujet actif est inconnu, non important, ou évident.',
      sections: [
        {
          title: 'Formation générale',
          content: 'Sujet (objet actif) + <strong>be (conjugué)</strong> + <strong>participe passé</strong> + (by + agent).',
          rows: [
            { en: 'The cake is made by my mother. (présent)', tr: 'Le gâteau est fait par ma mère.' },
            { en: 'The book was written in 1980. (passé)', tr: 'Le livre a été écrit en 1980.' },
            { en: 'This road will be built next year. (futur)', tr: 'Cette route sera construite l\'année prochaine.' },
          ]
        },
        {
          title: 'Actif → Passif',
          content: 'L\'objet actif devient sujet passif. Le sujet actif devient "by + agent" (optionnel).',
          rows: [
            { en: 'The teacher explains the lesson. → The lesson is explained by the teacher.', tr: 'Active → Passive (présent)' },
            { en: 'Someone broke the window. → The window was broken.', tr: 'Active → Passive (passé, agent omis)' },
          ]
        },
      ],
      commonErrors: [
        '❌ "The book was write in 1980" → ✅ "The book was WRITTEN in 1980" (participe passé, pas infinitif)',
        '❌ "The cake is making by my mother" → ✅ "The cake is MADE by my mother"',
        '❌ "English is speak here" → ✅ "English is SPOKEN here"',
        '❌ "The window was broke" → ✅ "The window was BROKEN"',
      ],
      tips: [
        'Le participe passé est la forme 3 du verbe : write→written, break→broken, eat→eaten',
        '"by + agent" est souvent omis quand l\'agent est inconnu ou évident',
        'English is spoken here. (agent évident = les gens)',
      ],
      summary: [
        'Forme : be (conjugué) + participe passé',
        'Présent passif : is/are + pp | Passé passif : was/were + pp',
        'Futur passif : will be + pp',
        '"by + agent" optionnel (omis si inconnu/évident)',
        'Participe passé (forme 3) : write→written, break→broken',
      ],
      quickExercises: [
        { q: 'Make passive: "My mother makes the cake."', a: 'The cake is made by my mother.', hint: 'objet → sujet passif' },
        { q: 'Correct: "The book was write in 1980."', a: 'The book was written in 1980.', hint: 'write → written (pp)' },
        { q: 'Make passive (future): "They will build a school."', a: 'A school will be built.', hint: 'will be + pp' },
        { q: 'Correct: "English is speak here."', a: 'English is spoken here.', hint: 'speak → spoken (pp)' },
      ],
    },
    mg: {
      intro: 'Ny passive voice dia mampifantoka amin\'ny voajanahary (objet), fa tsy amin\'ny mpanao. Ampiasaina rehefa tsy fantatra na tsy ilaina ny mpanao.',
      sections: [
        {
          title: 'Fomba fanaovana',
          content: 'Sujet + <strong>be</strong> (conjugué) + <strong>participe passé</strong> + (by + mpanao).',
          rows: [
            { en: 'The cake is made by my mother.', tr: 'Ny mofomamy dia nataon\'ny reniko.' },
            { en: 'The book was written in 1980.', tr: 'Ny boky dia nosoratana tamin\'ny 1980.' },
            { en: 'This road will be built next year.', tr: 'Ny lalana ity dia haorina taona ho avy [?].' },
          ]
        },
        {
          title: 'Active → Passive',
          content: '',
          rows: [
            { en: 'The teacher explains the lesson. → The lesson is explained by the teacher.', tr: 'Active → Passive (présent)' },
            { en: 'Someone broke the window. → The window was broken.', tr: 'Active → Passive (lasa, tsy lazaina ny mpanao)' },
          ]
        },
      ],
      tips: [
        'Participe passé (forme 3) : write→written, break→broken, eat→eaten',
        '"by + mpanao" dia sarotra tsy lazaina rehefa tsy fantatra ny mpanao',
        'Amin\'ny malagasy: ny "-ana" / "-ina" amin\'ny faranan\'ny verbe = passive matetika [?]',
      ],
      summary: [
        'Endrika : be (conjugué) + participe passé',
        'Présent : is/are + pp | Lasa : was/were + pp',
        'Ho avy : will be + pp',
        '"by + mpanao" azo esory raha tsy fantatra ny mpanao',
      ],
      quickExercises: [
        { q: 'Ataovy passive: "My mother makes the cake."', a: 'The cake is made by my mother.', hint: 'objet → sujet' },
        { q: 'Mety sa tsia? "The book was write in 1980."', a: 'Diso → was written', hint: 'write → written' },
        { q: 'Fenoy: English ___ (speak) here.', a: 'is spoken', hint: 'is + pp' },
      ],
    }
  },

  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'reportedSpeech',
    title: 'Discours Indirect',
    icon: '💬',
    level: 'B1–B2',
    fr: {
      intro: 'Le discours indirect (reported speech) sert à rapporter ce que quelqu\'un a dit. Les temps verbaux et les pronoms changent.',
      sections: [
        {
          title: 'Changements de temps',
          content: 'Present → Past, Past Simple → Past Perfect, Future (will) → Conditional (would)',
          rows: [
            { en: '"I am tired." → She said (that) she was tired.', tr: '"Je suis fatigué(e)." → Elle a dit qu\'elle était fatiguée.' },
            { en: '"I worked hard." → He said he had worked hard.', tr: '"J\'ai travaillé dur." → Il a dit qu\'il avait travaillé dur.' },
            { en: '"I will come." → She said she would come.', tr: '"Je viendrai." → Elle a dit qu\'elle viendrait.' },
          ]
        },
        {
          title: 'Questions indirectes',
          content: 'Ask + if/whether (oui/non) ou + mot interrogatif. L\'ordre devient affirmatif (sujet + verbe).',
          rows: [
            { en: '"Are you ready?" → He asked if she was ready.', tr: '"Es-tu prête ?" → Il a demandé si elle était prête.' },
            { en: '"Where do you live?" → She asked where he lived.', tr: '"Où vis-tu ?" → Elle a demandé où il vivait.' },
          ]
        },
        {
          title: 'Ordres et demandes indirects',
          content: 'Tell + sb + to + infinitif. Ask + sb + to + infinitif.',
          rows: [
            { en: '"Sit down!" → The teacher told us to sit down.', tr: '"Asseyez-vous !" → Le prof nous a dit de nous asseoir.' },
            { en: '"Please help me." → She asked him to help her.', tr: '"Aide-moi s\'il te plaît." → Elle lui a demandé de l\'aider.' },
          ]
        },
      ],
      commonErrors: [
        '❌ "She said she is tired" → ✅ "She said she WAS tired" (concordance des temps)',
        '❌ "He asked where do you live" → ✅ "He asked where he LIVED" (ordre affirmatif en indirect)',
        '❌ "She said to go" → ✅ "She told US to go" (tell + objet + to + inf)',
        '❌ "He asked if she was ready?" → ✅ sans point d\'interrogation (c\'est une affirmation)',
      ],
      tips: [
        'that peut être omis : She said (that) she was tired.',
        'Changements temporels : today→that day, yesterday→the day before, tomorrow→the next day',
        'Les modaux : can→could, must→had to, will→would, may→might',
      ],
      summary: [
        'Temps : présent→passé, past→past perfect, will→would',
        'Pronoms : I→he/she, we→they, my→his/her',
        'Question indirecte : ordre affirmatif (sujet + verbe), pas d\'inversion',
        'Ordre indirect : tell/ask + objet + to + infinitif',
        'that est optionnel : She said (that) she was tired.',
      ],
      quickExercises: [
        { q: 'Report: "I am happy." → She said she ___ happy.', a: 'was', hint: 'am/is → was' },
        { q: 'Report: "I will come." → She said she ___ come.', a: 'would', hint: 'will → would' },
        { q: 'Correct: "He asked where did she live."', a: 'He asked where she lived.', hint: 'ordre affirmatif en indirect' },
        { q: 'Report order: "Sit down!" → The teacher told us ___.', a: 'to sit down', hint: 'tell + objet + to + inf' },
      ],
    },
    mg: {
      intro: 'Ny discours indirect dia ampiasaina hampitana ny teny nolazain\'ny olona hafa. Miova ny fotoana (tense) sy ny solontena (pronoun).',
      sections: [
        {
          title: 'Fiovaovan\'ny fotoana',
          content: 'Present → Past, Past Simple → Past Perfect, will → would',
          rows: [
            { en: '"I am tired." → She said she was tired.', tr: '"Vizaka aho." → Nilaza izy fa vizaka izy.' },
            { en: '"I worked hard." → He said he had worked hard.', tr: '"Niasa mafy aho." → Nilaza izy fa niasa mafy izy [?].' },
            { en: '"I will come." → She said she would come.', tr: '"Ho avy aho." → Nilaza izy fa ho avy izy [?].' },
          ]
        },
        {
          title: 'Fanontaniana tsy mivantana',
          content: '',
          rows: [
            { en: '"Are you ready?" → He asked if she was ready.', tr: '"Vonona ve ianao?" → Nanontany izy raha vonona izy [?].' },
            { en: '"Where do you live?" → She asked where he lived.', tr: '"Aiza no monina ianao?" → Nanontany izy hoe aiza no monina izy [?].' },
          ]
        },
        {
          title: 'Baiko sy fangatahana tsy mivantana',
          content: '',
          rows: [
            { en: '"Sit down!" → The teacher told us to sit down.', tr: '"Mipetraha!" → Nasain\'ny mpampianatra mipetraka izahay.' },
            { en: '"Please help me." → She asked him to help her.', tr: '"Ampio aho." → Nangataka azy hanampy azy izy [?].' },
          ]
        },
      ],
      tips: [
        '"that" dia azo esory : She said (that) she was tired.',
        'Fiovaovan\'ny fotoana : today→that day, yesterday→the day before, tomorrow→the next day',
        'Modals : can→could, must→had to, will→would',
      ],
      summary: [
        'Fotoana : présent→lasa, lasa→past perfect, will→would',
        'Fanontaniana tsy mivantana : sujet + verbe (tsy misy inversement)',
        'Baiko tsy mivantana : tell/ask + olona + to + infinitif',
        '"that" azo esory',
      ],
      quickExercises: [
        { q: 'Report: "I am tired." → She said she ___ tired.', a: 'was', hint: 'am → was' },
        { q: 'Report: "I will come." → She said she ___ come.', a: 'would', hint: 'will → would' },
        { q: 'Mety sa tsia? "He asked where did she live."', a: 'Diso → He asked where she lived.', hint: 'tsy misy inversion' },
      ],
    }
  },

  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'pastPerfect',
    title: 'Past Perfect',
    icon: '⏮️⏮️',
    level: 'B1',
    fr: {
      intro: 'Le Past Perfect (<strong>had + participe passé</strong>) exprime une action terminée <em>avant</em> une autre action dans le passé.',
      sections: [
        {
          title: 'Formation',
          content: 'Sujet + <strong>had</strong> + participe passé. Même forme pour tous les sujets.',
          rows: [
            { en: 'When I arrived, she had already left.', tr: 'Quand je suis arrivé(e), elle était déjà partie.' },
            { en: 'He had studied English before moving to London.', tr: 'Il avait étudié l\'anglais avant de déménager à Londres.' },
            { en: 'They hadn\'t eaten, so they were very hungry.', tr: 'Ils n\'avaient pas mangé, donc ils avaient très faim.' },
          ]
        },
        {
          title: 'Séquence d\'événements',
          content: 'Utilisé avec after, before, when, by the time, as soon as.',
          rows: [
            { en: 'After she had finished, she went to bed.', tr: 'Après avoir fini, elle est allée se coucher.' },
            { en: 'By the time I got there, the film had started.', tr: 'Quand je suis arrivé, le film avait déjà commencé.' },
          ]
        },
      ],
      tips: [
        'Past Perfect = le "plus-que-parfait" français',
        'Signal words : already, yet, after, before, by the time, when, as soon as',
        'Past Perfect vs Past Simple : le PP arrive AVANT le PS dans la réalité',
      ],
      summary: [
        'Forme : had + participe passé (même pour tous les sujets)',
        'Usage : action terminée avant une autre action dans le passé',
        'Séquence : Past Perfect (avant) → Past Simple (après)',
        'Signal words : already, before, after, by the time, when',
      ],
      quickExercises: [
        { q: 'Complete: When I arrived, she ___ (already/leave).', a: 'had already left', hint: 'had + already + pp' },
        { q: 'Complete: He ___ (study) English before he moved.', a: 'had studied', hint: 'action avant = Past Perfect' },
        { q: 'Correct: "By the time she came, I already ate."', a: 'By the time she came, I had already eaten.', hint: 'avant l\'autre action = Past Perfect' },
        { q: 'Negative: "She had left." → She ___', a: 'hadn\'t left.', hint: 'had → hadn\'t' },
      ],
    },
    mg: {
      intro: 'Ny Past Perfect (<strong>had + participe passé</strong>) dia fampisehoana ny asa vita <em>mialoha</em> ny asa hafa tamin\'ny lasa.',
      sections: [
        {
          title: 'Fomba fanaovana',
          content: 'Sujet + <strong>had</strong> + participe passé. Mitovy ho an\'ny olon-drehetra.',
          rows: [
            { en: 'When I arrived, she had already left.', tr: 'Fony tonga aho, efa niala izy.' },
            { en: 'He had studied English before moving to London.', tr: 'Efa nianatra anglisy izy mialoha ny fandehany any Londona.' },
            { en: 'They hadn\'t eaten, so they were very hungry.', tr: 'Tsy nihinana izy ireo, ka noana izy ireo dia nihinana [?].' },
          ]
        },
        {
          title: 'Filaharana ny asa roa',
          content: '',
          rows: [
            { en: 'After she had finished, she went to bed.', tr: 'Taorian\'ny nahavitan\'ny asany, dia natory izy.' },
            { en: 'By the time I got there, the film had started.', tr: 'Fony tonga tao aho, efa nanomboka ny sarimihetsika.' },
          ]
        },
      ],
      tips: [
        'Past Perfect = "plus-que-parfait" amin\'ny teny frantsay',
        'Teny mampitandremana : already, yet, after, before, by the time, when',
        'PP = asa vita mialoha ny asa Past Simple hafa',
      ],
      summary: [
        'Endrika : had + participe passé (mitovy ho an\'ny olon-drehetra)',
        'Ampiasaina : asa vita mialoha ny asa Past Simple hafa',
        'Teny mampitandremana : already, before, after, by the time',
      ],
      quickExercises: [
        { q: 'Fenoy: When I arrived, she ___ (already/leave).', a: 'had already left', hint: 'had + pp' },
        { q: 'Fenoy: He ___ (study) mialoha ny nifindrahana.', a: 'had studied', hint: 'asa vita mialoha = Past Perfect' },
        { q: 'Fandavana: "She had left." → She ___', a: 'hadn\'t left.', hint: 'had → hadn\'t' },
      ],
    }
  },

  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'futurePerfect',
    title: 'Future Perfect',
    icon: '✅🚀',
    level: 'B2',
    fr: {
      intro: 'Le Future Perfect (<strong>will have + participe passé</strong>) exprime une action qui sera terminée avant un moment précis dans le futur.',
      sections: [
        {
          title: 'Formation et usage',
          content: 'Sujet + <strong>will have</strong> + participe passé.',
          rows: [
            { en: 'By 2030, I will have finished university.', tr: 'D\'ici 2030, j\'aurai terminé l\'université.' },
            { en: 'She will have cooked dinner by the time you arrive.', tr: 'Elle aura cuisiné le dîner quand tu arriveras.' },
            { en: 'Will you have finished the report by Friday?', tr: 'Auras-tu fini le rapport d\'ici vendredi ?' },
          ]
        },
      ],
      tips: [
        'Signal words : by (then/tomorrow/2030), before, by the time',
        'Négatif : won\'t have + participe passé',
        'Moins fréquent que les autres temps, mais important en B2',
      ],
      summary: [
        'Forme : will have + participe passé',
        'Usage : action terminée avant un moment futur précis',
        'Signal words : by (then/Friday/2030), by the time',
        'Négatif : won\'t have + pp',
      ],
      quickExercises: [
        { q: 'Complete: By 2030, she ___ (finish) university.', a: 'will have finished', hint: 'will have + pp' },
        { q: 'Negative: "I will have saved money." → I ___', a: 'won\'t have saved money.', hint: 'will → won\'t' },
        { q: 'Correct: "By then, I will finish my work."', a: 'By then, I will have finished my work.', hint: '"by" + futur = Future Perfect' },
      ],
    },
    mg: {
      intro: 'Ny Future Perfect (<strong>will have + participe passé</strong>) dia fampisehoana ny asa hvita tanteraka mialoha ny fotoana voafaritra amin\'ny ho avy.',
      sections: [
        {
          title: 'Fomba fanaovana sy fampiasana',
          content: 'Sujet + <strong>will have</strong> + participe passé.',
          rows: [
            { en: 'By 2030, I will have finished university.', tr: 'Amin\'ny 2030, efa vita ny fianarako any amin\'ny oniversite [?].' },
            { en: 'She will have cooked dinner by the time you arrive.', tr: 'Efa vita ny sakafo hariva fony tonga ianao [?].' },
            { en: 'Will you have finished the report by Friday?', tr: 'Vita ny tatitra alohan\'ny Zoma ve [?]?' },
          ]
        },
      ],
      tips: [
        'Teny mampitandremana : by (then/tomorrow/2030), before, by the time',
        'Fandavana : won\'t have + participe passé',
        'Tsy matetika ampiasaina, fa ilaina amin\'ny B2',
      ],
      summary: [
        'Endrika : will have + participe passé',
        'Ampiasaina : asa vita mialoha ny fotoana ho avy voafaritra',
        'Teny mampitandremana : by (then/2030/Friday), by the time',
        'Fandavana : won\'t have + pp',
      ],
      quickExercises: [
        { q: 'Fenoy: By 2030, she ___ (finish) ny fianarany.', a: 'will have finished', hint: 'will have + pp' },
        { q: 'Fandavana: "I will have saved money." → I ___', a: 'won\'t have saved money.', hint: 'will → won\'t' },
        { q: 'Mety sa tsia? "By then, I will finish my work."', a: 'Diso → I will have finished my work.', hint: '"by" → Future Perfect' },
      ],
    }
  },

  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'questions',
    title: 'Questions (Wh-)',
    icon: '❓',
    level: 'A1–A2',
    fr: {
      intro: 'Les questions en anglais utilisent soit l\'inversion sujet/auxiliaire (yes/no), soit un mot interrogatif (Wh- question).',
      sections: [
        {
          title: 'Questions Yes/No',
          content: 'Auxiliaire (do/does/did/is/are/was/were/will/can...) + sujet + verbe ?',
          rows: [
            { en: 'Do you speak English?', tr: 'Est-ce que tu parles anglais ?' },
            { en: 'Is she a teacher?', tr: 'Est-ce qu\'elle est professeure ?' },
            { en: 'Did you eat lunch?', tr: 'As-tu mangé à midi ?' },
            { en: 'Can he swim?', tr: 'Est-ce qu\'il sait nager ?' },
          ]
        },
        {
          title: 'Questions Wh-',
          content: 'Mot interrogatif + auxiliaire + sujet + verbe ?',
          rows: [
            { en: 'What is your name?', tr: 'Comment t\'appelles-tu ?' },
            { en: 'Where do you live?', tr: 'Où habites-tu ?' },
            { en: 'When did she arrive?', tr: 'Quand est-elle arrivée ?' },
            { en: 'Why are you late?', tr: 'Pourquoi es-tu en retard ?' },
            { en: 'How many students are there?', tr: 'Combien d\'élèves y a-t-il ?' },
            { en: 'Who told you that?', tr: 'Qui te l\'a dit ?' },
          ]
        },
      ],
      tips: [
        'What = quoi/quel | Where = où | When = quand | Who = qui | Why = pourquoi | How = comment',
        'How many + nom dénombrable | How much + nom indénombrable',
        'Whose = à qui : Whose bag is this?',
      ],
      summary: [
        'Yes/No : auxiliaire + sujet + verbe ?',
        'Wh- : mot interrogatif + auxiliaire + sujet + verbe ?',
        'What/Where/When/Who/Why/How — les 6 essentiels',
        'How many (dénombrable) / How much (indénombrable)',
        'Jamais de "do" si le mot interrogatif EST le sujet : Who lives here? (pas Who does live)',
      ],
      quickExercises: [
        { q: 'Make Wh-question for: "She lives in Tana."', a: 'Where does she live?', hint: 'where + does + sujet + infinitif' },
        { q: 'Make question: "They arrived at noon."', a: 'When did they arrive?', hint: 'when + did + sujet + infinitif' },
        { q: 'How many or how much? "___ students are there?"', a: 'How many', hint: 'students = dénombrable' },
        { q: 'Correct: "Where does she lives?"', a: 'Where does she live?', hint: 'does + infinitif (sans -s)' },
      ],
    },
    mg: {
      intro: 'Ny fanontaniana amin\'ny anglisy dia mampiasa ny fiovaovan\'ny sujet/auxiliaire (eny/tsia), na teny manontany (Wh-).',
      sections: [
        {
          title: 'Fanontaniana Eny/Tsia',
          content: 'Auxiliaire + sujet + verbe ?',
          rows: [
            { en: 'Do you speak English?', tr: 'Miteny anglisy ve ianao?' },
            { en: 'Is she a teacher?', tr: 'Mpampianatra ve izy?' },
            { en: 'Did you eat lunch?', tr: 'Nihinana ny antoandro ve ianao?' },
            { en: 'Can he swim?', tr: 'Afaka milomano ve izy?' },
          ]
        },
        {
          title: 'Fanontaniana Wh-',
          content: 'Teny manontany + auxiliaire + sujet + verbe ?',
          rows: [
            { en: 'What is your name?', tr: 'Iza no anaranao?' },
            { en: 'Where do you live?', tr: 'Aiza no monina ianao?' },
            { en: 'When did she arrive?', tr: 'Oviana no tonga izy?' },
            { en: 'Why are you late?', tr: 'Nahoana ianao no tara?' },
            { en: 'How many students are there?', tr: 'Firy ny mpianatra?' },
            { en: 'Who told you that?', tr: 'Iza no nilaza izany taminao?' },
          ]
        },
      ],
      tips: [
        'What=inona/iza | Where=aiza | When=oviana | Who=iza | Why=nahoana | How=ahoana',
        'How many + azo isaina | How much + tsy azo isaina',
        '"ve" amin\'ny malagasy = marqueur interrogatif',
      ],
      summary: [
        'Eny/Tsia : auxiliaire + sujet + verbe ?',
        'Wh- : teny manontany + auxiliaire + sujet + verbe ?',
        'What/Where/When/Who/Why/How — fototra 6',
        'How many (azo isaina) / How much (tsy azo isaina)',
      ],
      quickExercises: [
        { q: 'Ataovy fanontaniana: "She lives in Tana."', a: 'Where does she live?', hint: 'where + does + infinitif' },
        { q: 'Ataovy fanontaniana: "They arrived at noon."', a: 'When did they arrive?', hint: 'when + did + infinitif' },
        { q: 'How many na how much? "___ mpianatra misy?"', a: 'How many', hint: 'mpianatra = azo isaina' },
        { q: 'Mety sa tsia? "Where does she lives?"', a: 'Diso → Where does she live?', hint: 'does + infinitif tsy misy -s' },
      ],
    }
  },

];

// ─── Chapter index for sidebar ───────────────────────────────────────────────
export const bokyIndex = bokyChapters.map(c => ({
  id: c.id,
  title: c.title,
  icon: c.icon,
  level: c.level,
}));
