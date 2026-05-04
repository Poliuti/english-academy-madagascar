// ─── BOKY FAMPIANARANA — Grammaire bilingue FR / MG ─────────────────────────
// Chaque chapitre contient { fr: {...}, mg: {...} } pour permettre le switch de langue.
// ⚠️ Les traductions malagasy marquées sont incertaines — à vérifier.

export const bokyChapters = [

  // ══════════════════════════════════════════════════════════════════════
  // PRONOUNS — A1
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'pronouns',
    title: 'Pronoms — Pronouns',
    icon: '👤',
    level: 'A1',
    fr: {
      intro: "Les pronoms remplacent les noms pour éviter les répétitions. En anglais, le pronom sujet est <strong>obligatoire</strong> — on ne peut pas l'omettre comme parfois en français (« parle » n'est pas possible sans « il/elle »). Il existe plusieurs catégories : sujets, compléments, réfléchis.",
      sections: [
        {
          title: 'Pronoms sujets (Subject pronouns)',
          content: 'Utilisés comme sujet du verbe — avant le verbe. Obligatoires en anglais même quand le contexte est clair.',
          rows: [
            { en: 'I am a student.', tr: 'Je suis étudiant(e). → I' },
            { en: 'You are my friend.', tr: 'Tu es / Vous êtes mon ami(e). → You (sing. ET plur.)' },
            { en: 'He speaks English.', tr: 'Il parle anglais. → He (masc. humain)' },
            { en: 'She lives in Tana.', tr: 'Elle habite à Tana. → She (fém. humain)' },
            { en: 'It is raining.', tr: "Il pleut. → It (neutre : objets, animaux, météo)" },
            { en: 'We study together.', tr: 'Nous étudions ensemble. → We' },
            { en: 'They are my friends.', tr: 'Ce sont mes amis. → They (masc., fém. ou mixte)' },
          ]
        },
        {
          title: 'Pronoms compléments (Object pronouns)',
          content: 'Utilisés après un verbe ou une préposition (at, with, for, to, about…). Ne jamais utiliser les pronoms sujets ici.',
          rows: [
            { en: 'Call me later.', tr: 'Appelle-moi plus tard. → me' },
            { en: 'I can help you.', tr: "Je peux t'aider. → you" },
            { en: 'Tell him the truth.', tr: 'Dis-lui la vérité. → him' },
            { en: 'She loves him.', tr: "Elle l'aime. → him" },
            { en: 'Can you hear her?', tr: "Tu peux l'entendre ? → her" },
            { en: 'This gift is for us.', tr: 'Ce cadeau est pour nous. → us' },
            { en: 'I know them well.', tr: 'Je les connais bien. → them' },
          ]
        },
        {
          title: 'Tableau récapitulatif',
          content: 'Chaque pronom sujet correspond à un pronom complément. Mémoriser ces paires est essentiel.',
          rows: [
            { en: 'I → me', tr: 'je → moi/me' },
            { en: 'you → you', tr: 'tu/vous → toi/vous' },
            { en: 'he → him', tr: 'il → lui' },
            { en: 'she → her', tr: 'elle → la/lui' },
            { en: 'it → it', tr: '(neutre) → (neutre)' },
            { en: 'we → us', tr: 'nous → nous' },
            { en: 'they → them', tr: 'ils/elles → les/leur' },
          ]
        },
        {
          title: 'Pronoms réfléchis (Reflexive pronouns)',
          content: 'Utilisés quand le sujet et le complément désignent la même personne. Formés avec <em>-self</em> (singulier) ou <em>-selves</em> (pluriel). Servent aussi à insister : "I did it myself" (je l\'ai fait moi-même).',
          rows: [
            { en: 'I hurt myself.', tr: 'Je me suis blessé(e). → myself' },
            { en: 'He did it himself.', tr: "Il l'a fait lui-même. → himself" },
            { en: 'She looked at herself in the mirror.', tr: 'Elle se regarda dans le miroir. → herself' },
            { en: 'We enjoyed ourselves at the party.', tr: "Nous nous sommes bien amusés. → ourselves" },
            { en: 'They organized everything themselves.', tr: 'Ils ont tout organisé eux-mêmes. → themselves' },
          ]
        },
        {
          title: 'Le pronom "it" — usage neutre',
          content: '<strong>It</strong> est indispensable en anglais pour les objets, les animaux, la météo, l\'heure, la distance. En français ces constructions n\'ont souvent pas de sujet visible.',
          rows: [
            { en: "It is cold outside.", tr: 'Il fait froid dehors.' },
            { en: "It is 3 o'clock.", tr: 'Il est 3 heures.' },
            { en: "It takes one hour.", tr: "Ça prend une heure." },
            { en: "It is a beautiful country.", tr: "C'est un beau pays." },
            { en: "It was a good idea.", tr: "C'était une bonne idée." },
          ]
        },
      ],
      commonErrors: [
        "❌ \"Me and my friend went\" → ✅ \"My friend and I went\" (sujet = I, jamais Me)",
        "❌ \"He gaved it to I\" → ✅ \"He gave it to me\" (après préposition → pronom complément)",
        "❌ \"Her is happy\" → ✅ \"She is happy\" (sujet → pronom sujet)",
        "❌ \"I buyed it by me\" → ✅ \"I bought it myself\" (réfléchi, pas 'by me')",
        "❌ \"Is raining\" → ✅ \"It is raining\" (le sujet 'it' est obligatoire)",
      ],
      tips: [
        'Sujets : I / you / he / she / it / we / they — <em>avant</em> le verbe',
        'Compléments : me / you / him / her / it / us / them — <em>après</em> verbe ou préposition',
        '"You" = tutoiement ET vouvoiement, singulier ET pluriel — contexte seul précise',
        '"It" = météo, heure, durée, animaux non identifiés, objets, situations',
        'Réfléchis : myself / yourself / himself / herself / itself / ourselves / yourselves / themselves',
      ],
      summary: [
        'Sujets : I / you / he / she / it / we / they → avant le verbe',
        'Compléments : me / you / him / her / it / us / them → après verbe/préposition',
        'Réfléchis : -self (sing.) / -selves (plur.)',
        '"It" obligatoire pour la météo, l\'heure, les objets, les animaux',
        '"You" = tu et vous — le contexte fait la différence',
      ],
    },
    mg: {
      intro: "Ny pronoms dia manolo ny anarana mba hialana amin\'ny famenoana. Amin\'ny teny anglisy, ny pronom sujet dia tsy maintsy hita alohan\'ny matoanteny — tsy azo atao atsy toy ny frantsay matetika. Misy karazany maro : sujet, complément, réfléchi.",
      sections: [
        {
          title: 'Pronoms sujets — latabatra',
          content: 'Ampiasaina alohan\'ny matoanteny. Tsy azo hofany ireo amin\'ny teny anglisy.',
          rows: [
            { en: 'I am a student.', tr: 'Mpianatra aho. → I = aho' },
            { en: 'You are my friend.', tr: 'Namako ianao. → You = ianao / ianareo' },
            { en: 'He speaks English.', tr: 'Miteny anglisy izy. → He = izy (lahy)' },
            { en: 'She lives in Tana.', tr: 'Monina any Tana izy. → She = izy (vavy)' },
            { en: 'It is raining.', tr: 'Ranonorana. → It = tsy misy mitovy amin\'ny malagasy' },
            { en: 'We study together.', tr: 'Mianatra miaraka isika. → We = izahay/isika' },
            { en: 'They are my friends.', tr: 'Sakaizako izy ireo. → They = izy ireo' },
          ]
        },
        {
          title: 'Pronoms compléments',
          content: 'Ampiasaina aorian\'ny matoanteny na préposition.',
          rows: [
            { en: 'Call me later.', tr: 'Antsoy aho → me' },
            { en: 'I can help you.', tr: 'Afaka manampy anao aho. → you' },
            { en: 'Tell him the truth.', tr: 'Lazao aminy ny marina. → him' },
            { en: 'This gift is for us.', tr: 'Ny tohana ity dia ho anay. → us' },
            { en: 'I know them well.', tr: 'Fantatro tsara izy ireo. → them' },
          ]
        },
        {
          title: 'Pronoms réfléchis',
          content: 'Ampiasaina rehefa mitovy ny sujet sy ny complément. Fototra : -self (sing.) / -selves (plur.).',
          rows: [
            { en: 'I hurt myself.', tr: 'Naharatra tena aho.' },
            { en: 'He did it himself.', tr: 'Nataony irery izy.' },
            { en: 'We enjoyed ourselves.', tr: 'Namana tsara izahay.' },
          ]
        },
      ],
      commonErrors: [
        '❌ "Me and my friend went" → ✅ "My friend and I went"',
        '❌ "Is raining" → ✅ "It is raining" (It tsy azo hadinoina)',
        '❌ "Her is happy" → ✅ "She is happy"',
      ],
      tips: [
        'Sujets : I / you / he / she / it / we / they — alohan\'ny matoanteny',
        'Compléments : me / you / him / her / it / us / them — aorian\'ny matoanteny',
        '"It" ampiasaina amin\'ny toetr\'andro, ora, zavatra, biby',
      ],
      summary: [
        'Sujets : I / you / he / she / it / we / they',
        'Compléments : me / you / him / her / it / us / them',
        'Réfléchis : myself / yourself / himself / herself / itself / ourselves / themselves',
        '"It" tsy maintsy ao amin\'ny météo sy ora',
      ],
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // TOBE — A1
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'toBe',
    title: 'To Be — être',
    icon: '🔵',
    level: 'A1',
    fr: {
      intro: "Le verbe <strong>to be</strong> est le verbe le plus important de l'anglais. Il correspond à « être » en français. Il est indispensable pour se présenter, décrire, situer. Il ne se conjugue PAS comme les autres verbes et doit être mémorisé.",
      sections: [
        {
          title: 'Présent affirmatif — tableau complet',
          content: 'Le présent de <em>to be</em> a trois formes : <strong>am</strong> (I), <strong>is</strong> (he/she/it), <strong>are</strong> (you/we/they). Attention : contrairement au français, le pronom sujet est obligatoire.',
          rows: [
            { en: 'I am a student.', tr: 'Je suis étudiant(e).' },
            { en: 'You are my friend.', tr: 'Tu es mon ami(e).' },
            { en: 'He is a doctor.', tr: 'Il est médecin.' },
            { en: 'She is from Madagascar.', tr: 'Elle vient de Madagascar.' },
            { en: 'It is very hot today.', tr: "Il fait très chaud aujourd'hui." },
            { en: 'We are in class.', tr: 'Nous sommes en classe.' },
            { en: 'They are happy.', tr: 'Ils/Elles sont heureux.' },
          ]
        },
        {
          title: 'Formes contractées (usage courant)',
          content: 'En anglais parlé et écrit informel, on contracte le pronom et <em>to be</em>. Ces formes sont très fréquentes — il faut les reconnaître et les utiliser.',
          rows: [
            { en: "I'm tired.", tr: 'Je suis fatigué(e).' },
            { en: "You're right.", tr: 'Tu as raison. / Vous avez raison.' },
            { en: "He's a good teacher.", tr: "C'est un bon professeur." },
            { en: "She's at home.", tr: 'Elle est à la maison.' },
            { en: "It's raining.", tr: 'Il pleut.' },
            { en: "We're ready.", tr: 'Nous sommes prêts.' },
            { en: "They're late.", tr: 'Ils sont en retard.' },
          ]
        },
        {
          title: 'Présent négatif',
          content: 'On ajoute <strong>not</strong> après <em>am/is/are</em>. Contractions : <em>isn\'t</em>, <em>aren\'t</em>. Attention : la forme <em>amn\'t</em> n\'existe pas — on dit toujours <em>I\'m not</em>.',
          rows: [
            { en: "I'm not hungry.", tr: "Je n'ai pas faim." },
            { en: "You aren't wrong.", tr: "Tu n'as pas tort." },
            { en: "He isn't at school.", tr: "Il n'est pas à l'école." },
            { en: "She isn't tired.", tr: "Elle n'est pas fatiguée." },
            { en: "It isn't cold.", tr: "Il ne fait pas froid." },
            { en: "We aren't ready.", tr: "Nous ne sommes pas prêts." },
            { en: "They aren't from here.", tr: "Ils ne sont pas d'ici." },
          ]
        },
        {
          title: 'Questions au présent + réponses courtes',
          content: "Pour former une question, on <strong>inverse</strong> le sujet et le verbe. Les réponses courtes répètent le verbe <em>to be</em> — on n'utilise jamais 'yes' ou 'no' seuls en anglais soutenu.",
          rows: [
            { en: 'Are you a teacher? — Yes, I am. / No, I\'m not.', tr: 'Es-tu enseignant ? — Oui. / Non.' },
            { en: 'Is she happy? — Yes, she is. / No, she isn\'t.', tr: 'Est-elle heureuse ? — Oui. / Non.' },
            { en: 'Are they students? — Yes, they are. / No, they aren\'t.', tr: 'Sont-ils étudiants ? — Oui. / Non.' },
            { en: 'Is it a good film? — Yes, it is. / No, it isn\'t.', tr: "Est-ce un bon film ? — Oui. / Non." },
          ]
        },
        {
          title: 'Passé simple — was / were',
          content: 'Au passé, <em>to be</em> a deux formes : <strong>was</strong> pour I/he/she/it, et <strong>were</strong> pour you/we/they. Négatif : <em>wasn\'t, weren\'t</em>.',
          rows: [
            { en: 'I was at school yesterday.', tr: "J'étais à l'école hier." },
            { en: 'She was very tired last night.', tr: 'Elle était très fatiguée hier soir.' },
            { en: 'It was a beautiful day.', tr: "C'était une belle journée." },
            { en: 'We were in Antananarivo.', tr: 'Nous étions à Antananarivo.' },
            { en: "They weren't there.", tr: "Ils n'étaient pas là." },
            { en: 'Was he your teacher?', tr: 'Était-il ton professeur ?' },
            { en: 'Were you at home?', tr: 'Étais-tu à la maison ?' },
          ]
        },
        {
          title: 'To be + adjectif / nom / lieu',
          content: '<em>To be</em> s\'utilise pour trois fonctions principales : décrire (+ adjectif), identifier (+ nom) et situer (+ lieu).',
          rows: [
            { en: 'She is intelligent.', tr: 'Elle est intelligente. (+ adjectif)' },
            { en: 'He is a nurse.', tr: 'Il est infirmier. (+ nom de métier)' },
            { en: 'The keys are on the table.', tr: 'Les clés sont sur la table. (+ lieu)' },
            { en: 'I am 20 years old.', tr: "J'ai 20 ans. (âge)" },
            { en: 'We are hungry.', tr: 'Nous avons faim. (sensation)' },
          ]
        },
      ],
      commonErrors: [
        '❌ "He be a student" → ✅ "He IS a student" (to be obligatoire, jamais omis)',
        '❌ "I amn\'t ready" → ✅ "I\'m not ready" (amn\'t n\'existe pas)',
        '❌ "She are tired" → ✅ "She IS tired" (he/she/it → IS uniquement)',
        '❌ "They was here" → ✅ "They WERE here" (we/you/they → were au passé)',
        '❌ "Is you happy?" → ✅ "Are you happy?" (you → are, jamais is)',
        '❌ "I have 20 years" → ✅ "I am 20 years old" (l\'âge se dit avec to be en anglais)',
      ],
      tips: [
        'Présent : I → <strong>am</strong> | He/She/It → <strong>is</strong> | You/We/They → <strong>are</strong>',
        'Passé : I/He/She/It → <strong>was</strong> | You/We/They → <strong>were</strong>',
        "Contractions courantes : I'm · you're · he's · she's · it's · we're · they're",
        'Question = inverser sujet et verbe : "Are you…?" "Is she…?" "Were they…?"',
        'To be sert aussi pour l\'âge, les sensations (hungry, cold, hot) et les prix en anglais',
      ],
      summary: [
        'Présent : am (I) / is (he,she,it) / are (you,we,they)',
        'Passé : was (I,he,she,it) / were (you,we,they)',
        'Négatif : not après → isn\'t, aren\'t, wasn\'t, weren\'t (jamais amn\'t)',
        'Question : inverser verbe et sujet → "Are you…?" "Was he…?"',
        'Réponse courte : "Yes, I am." / "No, she isn\'t." — jamais yes/no seul',
      ],
    },
    mg: {
      intro: "Ny matoanteny <strong>to be</strong> dia ny matoanteny ampiasaina indrindra amin\'ny teny anglisy. Mitovy amin\'ny \"être\" frantsay. Ny teny malagasy dia tsy mampiasa matoanteny mitovy aminy, ka ny hoe \"Mpianatra aho\" (Je suis étudiant) dia tsy misy matoanteny eto. Koa sarotra ny hahazo azy, saingy tsy maintsy hadinina.",
      sections: [
        {
          title: 'Présent affirmatif — latabatra feno',
          content: 'Ny <em>to be</em> amin\'ny présent dia manana endrika telo : <strong>am</strong> (I), <strong>is</strong> (he/she/it), <strong>are</strong> (you/we/they). Ny pronom sujet dia tsy azo atao hofany.',
          rows: [
            { en: 'I am a student.', tr: 'Mpianatra aho.' },
            { en: 'You are my friend.', tr: 'Namako ianao.' },
            { en: 'He is a doctor.', tr: 'Dokotera izy.' },
            { en: 'She is from Madagascar.', tr: 'Malagasy izy.' },
            { en: 'It is very hot today.', tr: 'Mafana loatra anio.' },
            { en: 'We are in class.', tr: 'Eo amin\'ny kilasy izahay.' },
            { en: 'They are happy.', tr: 'Faly izy ireo.' },
          ]
        },
        {
          title: 'Endrika fohy (contractions)',
          content: 'Amin\'ny resaka andavanandro, ampiasaina ny endrika fohy. Tena ampiasaina matetika ireo ka tsy maintsy fantatrao.',
          rows: [
            { en: "I'm tired.", tr: 'Reraka aho.' },
            { en: "You're right.", tr: 'Marina ianao.' },
            { en: "He's a good teacher.", tr: 'Mpampianatra tsara izy.' },
            { en: "We're ready.", tr: 'Vonona izahay.' },
            { en: "They're late.", tr: 'Diso fotoana izy ireo.' },
          ]
        },
        {
          title: 'Présent négatif',
          content: 'Ampiana <strong>not</strong> aorian\'ny am/is/are. Endrika fohy : <em>isn\'t</em>, <em>aren\'t</em>. Ny <em>amn\'t</em> tsy misy — <em>I\'m not</em> foana.',
          rows: [
            { en: "I'm not hungry.", tr: 'Tsy noana aho.' },
            { en: "He isn't at school.", tr: 'Tsy any an\'ny sekoly izy.' },
            { en: "They aren't from here.", tr: 'Tsy avy eto izy ireo.' },
          ]
        },
        {
          title: 'Lasa tsotra — was / were',
          content: 'Amin\'ny lasa, <strong>was</strong> ampiasaina amin\'ny I/he/she/it, ary <strong>were</strong> amin\'ny you/we/they.',
          rows: [
            { en: 'I was at school yesterday.', tr: 'Tao an\'ny sekoly aho omaly.' },
            { en: 'We were in Antananarivo.', tr: 'Tany Antananarivo izahay.' },
            { en: "They weren't there.", tr: 'Tsy tao izy ireo.' },
            { en: 'Was he your teacher?', tr: 'Mpampianatrao ve izy teo aloha?' },
          ]
        },
      ],
      commonErrors: [
        '❌ "He be student" → ✅ "He IS a student" (tsy maintsy misy to be)',
        '❌ "I amn\'t" → ✅ "I\'m not" (tsy misy amn\'t)',
        '❌ "She are tired" → ✅ "She IS tired" (he/she/it → IS)',
        '❌ "They was here" → ✅ "They WERE here" (we/you/they → were)',
        '❌ "I have 20 years" → ✅ "I am 20 years old" (taona = to be)',
      ],
      tips: [
        'Présent : I → am | He/She/It → is | You/We/They → are',
        'Lasa : I/He/She/It → was | You/We/They → were',
        'Fanontaniana : mifamadika sujet sy verbe → "Are you...?" "Was he...?"',
      ],
      summary: [
        'Présent : am (I) / is (he,she,it) / are (you,we,they)',
        'Lasa : was (I,he,she,it) / were (you,we,they)',
        'Négatif : isn\'t, aren\'t, wasn\'t, weren\'t',
        'Fanontaniana : mifamadika sujet sy verbe',
      ],
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // ARTICLES — A1
  // ══════════════════════════════════════════════════════════════════════
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

  // ══════════════════════════════════════════════════════════════════════
  // PLURALS — A1
  // ══════════════════════════════════════════════════════════════════════
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
            { en: 'foot → feet', tr: 'tongotra → tongotra maro' },
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

  // ══════════════════════════════════════════════════════════════════════
  // THEREBEIS — A1
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'therebeis',
    title: 'There is / There are — Il y a',
    icon: '📍',
    level: 'A1',
    fr: {
      intro: "<strong>There is</strong> (singulier) et <strong>There are</strong> (pluriel) s'utilisent pour dire qu'une chose <em>existe</em> ou <em>se trouve quelque part</em>. C'est l'équivalent de « il y a » en français. Cette structure est essentielle pour décrire des lieux, des situations et des quantités.",
      sections: [
        {
          title: '✅ Affirmatif au présent',
          content: '<strong>There is</strong> + nom singulier ou indénombrable. <strong>There are</strong> + nom pluriel. Contraction courante : <strong>There\'s</strong> = There is.',
          rows: [
            { en: 'There <strong>is</strong> a school in my village.', tr: "Il y a une école dans mon village." },
            { en: "There <strong>is</strong> some water in the glass.", tr: "Il y a de l'eau dans le verre." },
            { en: "There <strong>are</strong> three students in the room.", tr: "Il y a trois élèves dans la salle." },
            { en: "There <strong>are</strong> many problems to solve.", tr: "Il y a beaucoup de problèmes à résoudre." },
            { en: "There <strong>are</strong> no shops nearby.", tr: "Il n'y a pas de magasins à proximité." },
          ]
        },
        {
          title: '❌ Négatif et ❓ Interrogatif au présent',
          content: 'Négatif : <strong>There is not (isn\'t) / There are not (aren\'t)</strong>. Question : <strong>Is there / Are there</strong> + nom ? Réponse courte : Yes, there is. / No, there isn\'t.',
          rows: [
            { en: "There <strong>isn't</strong> a hospital here.", tr: "Il n'y a pas d'hôpital ici." },
            { en: "There <strong>aren't</strong> any good restaurants nearby.", tr: "Il n'y a pas de bons restaurants à proximité." },
            { en: "<strong>Is there</strong> a market nearby? — Yes, there is.", tr: "Est-ce qu'il y a un marché près d'ici ? — Oui." },
            { en: "<strong>Are there</strong> any students? — No, there aren't.", tr: "Est-ce qu'il y a des élèves ? — Non." },
            { en: "<strong>How many</strong> students are there? — There are twenty.", tr: "Combien d'élèves y a-t-il ? — Il y en a vingt." },
          ]
        },
        {
          title: '🕰️ Passé : There was / There were',
          content: '<strong>There was</strong> = passé singulier. <strong>There were</strong> = passé pluriel. Même logique que le présent, mais pour parler d\'une situation passée.',
          rows: [
            { en: "There <strong>was</strong> a big tree here.", tr: "Il y avait un grand arbre ici. (il n'y est plus)" },
            { en: "There <strong>were</strong> many people at the market.", tr: "Il y avait beaucoup de monde au marché." },
            { en: "There <strong>wasn't</strong> any electricity yesterday.", tr: "Il n'y avait pas d'électricité hier." },
            { en: "<strong>Were there</strong> any problems? — No, there weren't.", tr: "Est-ce qu'il y avait des problèmes ? — Non." },
          ]
        },
        {
          title: '🔮 Futur et autres temps',
          content: 'On peut combiner <em>there</em> avec d\'autres auxiliaires ou temps verbaux.',
          rows: [
            { en: "There <strong>will be</strong> a meeting tomorrow.", tr: "Il y aura une réunion demain." },
            { en: "There <strong>might be</strong> some complications.", tr: "Il pourrait y avoir des complications." },
            { en: "There <strong>has been</strong> an accident.", tr: "Il y a eu un accident. (present perfect)" },
            { en: "There <strong>have been</strong> many changes recently.", tr: "Il y a eu beaucoup de changements récemment." },
          ]
        },
        {
          title: '⚖️ There is/are vs It is/they are',
          content: 'Ne confondez pas <em>there is/are</em> (existence) avec <em>it is / they are</em> (identification/description d\'une chose déjà mentionnée).',
          rows: [
            { en: "There is a book on the table. → It is a French book.", tr: "Il y a un livre sur la table. → C'est un livre français." },
            { en: "There are two dogs. → They are very noisy.", tr: "Il y a deux chiens. → Ils sont très bruyants." },
          ]
        },
      ],
      commonErrors: [
        '❌ "There are a book" → ✅ "There IS a book" (singulier → is)',
        '❌ "There is some books" → ✅ "There ARE some books" (pluriel → are)',
        '❌ "Is there students?" → ✅ "Are there students?" (pluriel → are)',
        '❌ "There is many people" → ✅ "There ARE many people" (people = pluriel)',
        '❌ "It is a school here" → ✅ "There IS a school here" (existence → there is)',
      ],
      tips: [
        '🔑 Singulier → there IS | Pluriel → there ARE',
        '🔑 Passé : there WAS (singulier) / there WERE (pluriel)',
        '🔑 Question → inverser : IS there / ARE there?',
        '💡 Avec some/any dans les questions et négatives',
        '💡 How many are there? / How much is there? pour demander la quantité',
      ],
      summary: [
        'Présent : there is (singulier) / there are (pluriel)',
        'Passé : there was (singulier) / there were (pluriel)',
        'Négatif : there isn\'t / there aren\'t',
        'Question : Is there...? / Are there...? → Yes, there is/are. / No, there isn\'t/aren\'t.',
      ],
      quickExercises: [
        { q: 'Complete: ___ a book on the table.', a: 'There is', hint: 'singulier' },
        { q: 'Complete: ___ many students today.', a: 'There are', hint: 'pluriel' },
        { q: 'Make negative: "There is a hospital."', a: "There isn't a hospital.", hint: 'is → isn\'t' },
        { q: 'Ask about quantity: "twenty students"', a: 'How many students are there?', hint: 'How many + are there?' },
        { q: 'Past: "a cinema here (before)"', a: 'There was a cinema here.', hint: 'was = passé singulier' },
      ],
    },
    mg: {
      intro: "<strong>There is</strong> (tokana) sy <strong>There are</strong> (maro) dia ampiasaina hilazana ny fisian'ny zavatra na olona amin'ny toerana iray. Mitovy amin'ny « misy » amin'ny teny malagasy.",
      sections: [
        {
          title: '✅ Fanekena ankehitriny',
          content: '<strong>There is</strong> + tokana. <strong>There are</strong> + maro. Fohiazana : There\'s = There is.',
          rows: [
            { en: 'There is a school in my village.', tr: "Misy sekoly amin'ny vohiko." },
            { en: 'There are three students in the room.', tr: "Misy mpianatra telo ao amin'ny efitrano." },
            { en: 'There are no shops nearby.', tr: "Tsy misy fivarotana akaikin'ity." },
          ]
        },
        {
          title: '❌ Fandavana sy ❓ Fanontaniana',
          content: 'Fandavana : There isn\'t / There aren\'t. Fanontaniana : Is there? / Are there?',
          rows: [
            { en: "There isn't a hospital here.", tr: 'Tsy misy hopitaly eto.' },
            { en: "There aren't any good restaurants.", tr: 'Tsy misy fisakafoana tsara.' },
            { en: 'Is there a market nearby? — Yes, there is.', tr: "Misy tsena akaikin'ity ve? — Eny." },
            { en: 'Are there any students? — No, there aren\'t.', tr: 'Misy mpianatra ve? — Tsia.' },
            { en: 'How many students are there?', tr: 'Firy ny mpianatra?' },
          ]
        },
        {
          title: '🕰️ Lasa : There was / There were',
          content: '<strong>There was</strong> = lasa tokana. <strong>There were</strong> = lasa maro.',
          rows: [
            { en: 'There was a big tree here.', tr: 'Nisy hazo lehibe teto taloha.' },
            { en: 'There were many people at the market.', tr: "Nisy olona maro tao amin'ny tsena." },
            { en: "Were there any problems? — No, there weren't.", tr: 'Nisy olana ve? — Tsia.' },
          ]
        },
        {
          title: '🔮 Ho avy sy taonan-taona hafa',
          content: 'There + auxiliaires hafa hilazana ny ho avy na ny teo aloha.',
          rows: [
            { en: 'There will be a meeting tomorrow.', tr: 'Hisy fivoriana rahampitso.' },
            { en: 'There has been an accident.', tr: 'Nisy loza nitranga.' },
          ]
        },
      ],
      commonErrors: [
        '❌ "There are a book" → ✅ "There IS a book" (tokana = is)',
        '❌ "There is some books" → ✅ "There ARE some books" (maro = are)',
        '❌ "It is a school here" → ✅ "There IS a school here"',
      ],
      tips: [
        '🔑 Tokana → there IS | Maro → there ARE',
        '🔑 Lasa : there WAS (tokana) / there WERE (maro)',
        '💡 Fanontaniana momba ny isa : How many are there?',
      ],
      summary: [
        'Ankehitriny : there is (tokana) / there are (maro)',
        'Lasa : there was (tokana) / there were (maro)',
        'Fanontaniana : Is there...? / Are there...?',
      ],
      quickExercises: [
        { q: 'Fenoy: ___ a book on the table.', a: 'There is', hint: 'tokana' },
        { q: 'Fenoy: ___ many students today.', a: 'There are', hint: 'maro' },
        { q: 'Ataovy fandavana: "There is a hospital."', a: "There isn't a hospital.", hint: 'is → isn\'t' },
        { q: 'Lasa: "cinema here (before)"', a: 'There was a cinema here.', hint: 'was = lasa tokana' },
      ],
    }
  },,

  // ══════════════════════════════════════════════════════════════════════
  // ADJECTIVES — A1–A2
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'adjectives',
    title: 'Les Adjectifs — Adjectives',
    icon: '✨',
    level: 'A1–A2',
    fr: {
      intro: "Un <strong>adjectif</strong> qualifie un nom ou un pronom. En anglais, contrairement au français, l'adjectif se place <em>toujours avant</em> le nom et ne s'accorde ni en genre ni en nombre — une seule forme pour tout.",
      sections: [
        {
          title: '📌 Position : avant le nom (attributif)',
          content: "L'adjectif précède le nom. Il ne change jamais de forme : <strong>a beautiful girl / beautiful girls</strong> (même adjectif, pas de « belle/belles »).",
          rows: [
            { en: 'a <strong>tall</strong> student', tr: 'un grand étudiant' },
            { en: 'a <strong>beautiful</strong> city', tr: 'une belle ville' },
            { en: 'an <strong>old</strong> book', tr: 'un vieux livre' },
            { en: '<strong>three difficult</strong> questions', tr: 'trois questions difficiles' },
            { en: '<strong>happy</strong> children', tr: 'des enfants heureux (jamais "happies")' },
          ]
        },
        {
          title: '🔗 Position : après "be" (prédicatif)',
          content: "Après <em>be, seem, look, feel, become, get, sound, taste, smell</em>, l'adjectif suit le verbe. C'est la position <strong>prédicative</strong>.",
          rows: [
            { en: 'She <strong>is</strong> intelligent.', tr: 'Elle est intelligente.' },
            { en: 'The food <strong>smells</strong> delicious.', tr: 'La nourriture sent délicieux.' },
            { en: 'He <strong>looks</strong> tired today.', tr: "Il a l'air fatigué aujourd'hui." },
            { en: 'The weather <strong>is getting</strong> cold.', tr: 'Il fait de plus en plus froid.' },
            { en: 'This soup <strong>tastes</strong> salty.', tr: 'Cette soupe a un goût salé.' },
          ]
        },
        {
          title: '🔢 Ordre des adjectifs (OSASCOMP)',
          content: 'Quand plusieurs adjectifs précèdent un nom, il faut respecter un ordre précis : <strong>Opinion → Taille → Âge → Forme → Couleur → Origine → Matière → But</strong>.',
          rows: [
            { en: 'a <strong>lovely old</strong> Italian house', tr: 'une belle vieille maison italienne' },
            { en: 'a <strong>big black</strong> cat', tr: 'un grand chat noir' },
            { en: 'some <strong>small round</strong> red berries', tr: 'de petites baies rondes rouges' },
            { en: 'a <strong>beautiful young</strong> French woman', tr: 'une belle jeune Française' },
          ]
        },
        {
          title: '😕 Adjectifs en -ED vs -ING',
          content: 'Les adjectifs dérivés de verbes ont deux formes : <strong>-ing</strong> décrit la cause (ce qui provoque un sentiment), <strong>-ed</strong> décrit l\'effet (ce qu\'on ressent).',
          rows: [
            { en: 'The film is <strong>boring</strong>. → I am <strong>bored</strong>.', tr: 'Le film est ennuyeux. → Je m\'ennuie.' },
            { en: 'The news is <strong>surprising</strong>. → She is <strong>surprised</strong>.', tr: 'La nouvelle est surprenante. → Elle est surprise.' },
            { en: 'The game is <strong>exciting</strong>. → He is <strong>excited</strong>.', tr: 'Le jeu est passionnant. → Il est enthousiasmé.' },
            { en: 'The work is <strong>tiring</strong>. → We are <strong>tired</strong>.', tr: 'Le travail est épuisant. → Nous sommes fatigués.' },
            { en: 'It is <strong>confusing</strong>. → I am <strong>confused</strong>.', tr: 'C\'est déroutant. → Je suis confus.' },
          ]
        },
        {
          title: '📚 Adjectifs courants à connaître',
          content: 'Ces adjectifs sont utilisés dans presque toutes les conversations. Apprenez-les avec leur contraire.',
          rows: [
            { en: 'good / bad · big / small · old / young · old / new', tr: 'bon/mauvais · grand/petit · vieux/jeune · vieux/nouveau' },
            { en: 'hot / cold · fast / slow · easy / difficult · right / wrong', tr: 'chaud/froid · rapide/lent · facile/difficile · correct/faux' },
            { en: 'happy / sad · rich / poor · clean / dirty · safe / dangerous', tr: 'heureux/triste · riche/pauvre · propre/sale · sûr/dangereux' },
            { en: 'beautiful / ugly · strong / weak · loud / quiet · early / late', tr: 'beau/laid · fort/faible · fort/silencieux · tôt/tard' },
          ]
        },
      ],
      commonErrors: [
        '❌ "a beautifuls girl" → ✅ "a beautiful girl" (pas de pluriel pour l\'adjectif)',
        '❌ "a girl beautiful" → ✅ "a beautiful girl" (adjectif AVANT le nom)',
        '❌ "a black big cat" → ✅ "a big black cat" (taille avant couleur)',
        '❌ "I am boring" (quand on veut dire qu\'on s\'ennuie) → ✅ "I am bored"',
        '❌ "She looks beautifully" → ✅ "She looks beautiful" (adjectif après look, pas adverbe)',
      ],
      tips: [
        '🔑 Adjectif invariable en anglais : "a tall man" et "tall women" — même forme',
        '🔑 Ordre : Opinion > Taille > Âge > Forme > Couleur > Origine > Matière > But',
        '💡 -ING = cause (ennuyeux, fatigant) / -ED = effet ressenti (ennuyé, fatigué)',
        '💡 Après : be, look, seem, feel, become, get, sound, taste, smell → adjectif (pas adverbe)',
        '⚠️ "I feel bad" (pas "badly") · "It looks good" (pas "well") — adjectifs prédicatifs',
      ],
      summary: [
        'Position : adjectif TOUJOURS avant le nom (attributif) ou après be/look/seem... (prédicatif)',
        'Invariable : pas d\'accord en genre ou en nombre',
        'Ordre de plusieurs adjectifs : Opinion > Taille > Âge > Forme > Couleur > Origine > Matière',
        '-ING (cause, caractéristique) vs -ED (effet ressenti par une personne)',
      ],
    },
    mg: {
      intro: "Ny <strong>teny mpamaritra</strong> dia manamarika ny anarana. Amin'ny teny anglisy, ny teny mpamaritra dia <em>alohan'ny anarana</em> foana ary tsy miova endrika na amin'ny lahy/vavy na amin'ny maro.",
      sections: [
        {
          title: '📌 Toerana : alohan\'ny anarana',
          content: 'Ny teny mpamaritra dia alohan\'ny anarana foana. Tsy misy fiovana endrika na amin\'ny lahy/vavy na amin\'ny maro/tokana.',
          rows: [
            { en: 'a tall student', tr: 'mpianatra lava' },
            { en: 'a beautiful city', tr: 'tanàna tsara tarehy' },
            { en: 'happy children', tr: 'ankizy faly (tsy "happies")' },
          ]
        },
        {
          title: '🔗 Aorian\'ny "be" sy veribe hafa',
          content: 'Aorian\'ny be, seem, look, feel, become, get, sound, taste, smell → teny mpamaritra.',
          rows: [
            { en: 'She is intelligent.', tr: 'Hendry izy.' },
            { en: 'He looks tired.', tr: 'Reraka ny fijerin\'izy.' },
            { en: 'The food smells delicious.', tr: 'Manitra tsara ny sakafo.' },
          ]
        },
        {
          title: '😕 -ED (toeadana) vs -ING (antony)',
          content: '<strong>-ING</strong> = manamarika ny zavatra mampiseho ny toeadana / <strong>-ED</strong> = manamarika ny toeadana aterak\'io zavatra io.',
          rows: [
            { en: 'The film is boring. → I am bored.', tr: 'Maharikoriko ny sarimihetsika. → Aharikoriko aho.' },
            { en: 'The work is tiring. → We are tired.', tr: 'Mampangory ny asa. → Reraka izahay.' },
            { en: 'The news is surprising. → She is surprised.', tr: 'Mahagaga ny vaovao. → Gaga izy.' },
          ]
        },
      ],
      commonErrors: [
        '❌ "a beautifuls girl" → ✅ "a beautiful girl" (tsy misy maro)',
        '❌ "a girl beautiful" → ✅ "a beautiful girl" (alohan\'ny anarana)',
        '❌ "I am boring" (raha aharikoriko) → ✅ "I am bored"',
      ],
      tips: [
        '🔑 Tsy miova endrika ny teny mpamaritra — "a tall man" sy "tall women" mitovy',
        '💡 -ING = antony (maharikoriko) / -ED = vokatry (aharikoriko)',
      ],
      summary: [
        'Toerana : alohan\'ny anarana foana',
        'Tsy miova endrika : lahy/vavy, tokana/maro — mitovy foana',
        '-ING (antony) vs -ED (vokatr\'ilay antony)',
      ],
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // POSSESSIVES — A2
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'possessives',
    title: 'Possessives — Possessifs',
    icon: '🏷️',
    level: 'A2',
    fr: {
      intro: "En anglais, on exprime la possession de deux façons : avec un <strong>adjectif possessif</strong> (my, your, his…) placé devant un nom, ou avec un <strong>pronom possessif</strong> (mine, yours, his…) utilisé seul à la place du nom. Les deux formes ne s'utilisent pas dans les mêmes contextes.",
      sections: [
        {
          title: 'Adjectifs possessifs (devant un nom)',
          content: 'Invariables. Pas de masculin/féminin/pluriel.',
          rows: [
            { en: 'This is my book.', tr: 'C\'est mon livre.' },
            { en: 'What is your name?', tr: 'Comment tu t\'appelles ?' },
            { en: 'His bag is blue.', tr: 'Son sac (à lui) est bleu.' },
            { en: 'Her phone is new.', tr: 'Son téléphone (à elle) est neuf.' },
            { en: 'The dog wags its tail.', tr: 'Le chien remue sa queue.' },
            { en: 'Our school is big.', tr: 'Notre école est grande.' },
            { en: 'Their parents are teachers.', tr: 'Leurs parents sont professeurs.' },
          ]
        },
        {
          title: 'Pronoms possessifs (à la place du nom)',
          content: 'Remplacent un groupe nominal déjà mentionné.',
          rows: [
            { en: 'That book is mine.', tr: 'Ce livre est à moi.' },
            { en: 'Is this bag yours?', tr: 'Ce sac est à toi ?' },
            { en: 'The blue pen is his.', tr: 'Le stylo bleu est à lui.' },
            { en: 'The phone is hers.', tr: 'Le téléphone est à elle.' },
            { en: 'The red car is ours.', tr: 'La voiture rouge est à nous.' },
            { en: 'The big house is theirs.', tr: 'La grande maison est à eux.' },
          ]
        },
        {
          title: 'Tableau récapitulatif',
          content: 'Adjectif possessif → pronom possessif',
          rows: [
            { en: 'my → mine', tr: 'mon/ma/mes → le mien / la mienne' },
            { en: 'your → yours', tr: 'ton/ta → le tien / la tienne' },
            { en: 'his → his', tr: 'son (masc.) → le sien (même forme !)' },
            { en: 'her → hers', tr: 'son (fém.) → le sien (à elle)' },
            { en: 'its → (no pronoun)', tr: 'son (chose/animal) → pas de pronom seul usuel' },
            { en: 'our → ours', tr: 'notre → le nôtre / la nôtre' },
            { en: 'their → theirs', tr: 'leur → le leur / la leur' },
          ]
        },
      ],
      commonErrors: [
        '"It\'s tail is long." ✗ → "Its tail is long." ✓ (its = possessif, pas d\'apostrophe)',
        '"The book is my." ✗ → "The book is mine." ✓',
        '"She lost her\'s keys." ✗ → "She lost her keys." ✓',
      ],
      tips: [
        '"His" est la même forme pour adjectif et pronom : his car / the car is his',
        '"Its" n\'a pas d\'apostrophe (possessif) ; "it\'s" = it is',
        'Les pronoms possessifs remplacent un nom : "This is my pen. Mine is red." (mine = my pen)',
      ],
      summary: [
        'Adjectif possessif + nom : my book, your bag, their car…',
        'Pronom possessif seul : mine, yours, his, hers, ours, theirs',
        '"his" reste "his" dans les deux cas',
      ]
    },
    mg: {
      intro: "Amin\'ny anglisy, ny fananana dia asehon\'ny <strong>adjectif possessif</strong> (my, your, his...) eo alohan\'ny noun, na ny <strong>pronom possessif</strong> (mine, yours, his...) ampiasaina irery tsy misy noun aorian\'ny.",
      sections: [
        {
          title: 'Adjectif possessif (eo alohan\'ny noun)',
          content: 'Tsy miova arakaraka ny genre na ny isan\'ny noun.',
          rows: [
            { en: 'This is my book.', tr: 'Io boky-ko io.' },
            { en: 'What is your name?', tr: 'Iza ny anaranao?' },
            { en: 'His bag is blue.', tr: 'Ny kitapo-ny (lehilahy) dia manga.' },
            { en: 'Her phone is new.', tr: 'Ny finday-ny (vehivavy) dia vaovao.' },
            { en: 'Our school is big.', tr: 'Lehibe ny sekolin\'ny.' },
            { en: 'Their parents are teachers.', tr: 'Mpampianatra ny ray aman-dreny-ny.' },
          ]
        },
        {
          title: 'Pronom possessif (misolo ny noun)',
          content: 'Ampiasaina irery, misolo ny noun efa voalaza.',
          rows: [
            { en: 'That book is mine.', tr: 'Io boky io an\'ny.' },
            { en: 'Is this bag yours?', tr: 'Anao ve ity kitapo ity?' },
            { en: 'The blue pen is his.', tr: 'An\'ny lehilahy ny penina manga.' },
            { en: 'The red car is ours.', tr: 'An\'ny fiara mena no an\'ny.' },
          ]
        },
        {
          title: 'Latabatra fampitahana',
          content: 'Adjectif possessif → Pronom possessif',
          rows: [
            { en: 'my → mine', tr: 'ahy / an\'ny (= an\'aho)' },
            { en: 'your → yours', tr: 'anao / an\'ianao' },
            { en: 'his → his', tr: 'azy (lehilahy) — endrika iray ihany!' },
            { en: 'her → hers', tr: 'azy (vehivavy)' },
            { en: 'our → ours', tr: 'an\'ny / an\'izahay' },
            { en: 'their → theirs', tr: 'azy ireo' },
          ]
        },
      ],
      commonErrors: [
        '"It\'s tail is long." ✗ → "Its tail is long." ✓ (its = possessif, tsy misy apostrophe)',
        '"The book is my." ✗ → "The book is mine." ✓',
      ],
      tips: [
        '"His" = adjectif sy pronom iray ihany: his car / the car is his',
        '"Its" tsy misy apostrophe (possessif) ≠ "it\'s" = it is',
      ],
      summary: [
        'Adjectif possessif + noun: my book, your bag...',
        'Pronom possessif irery: mine, yours, his, hers, ours, theirs',
      ]
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // PREPOSITIONS — A1–A2
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'prepositions',
    title: 'Prepositions — Prépositions',
    icon: '📍',
    level: 'A1–A2',
    fr: {
      intro: "Les <strong>prépositions</strong> indiquent la position, le temps ou la relation entre les éléments d'une phrase. En anglais, elles sont souvent différentes du français — il faut les apprendre par contexte.",
      sections: [
        {
          title: 'Prépositions de lieu (position)',
          content: '<strong>in</strong> (à l\'intérieur) · <strong>on</strong> (sur une surface) · <strong>at</strong> (point précis) · <strong>under</strong> (sous) · <strong>next to</strong> (à côté de) · <strong>between</strong> (entre)',
          rows: [
            { en: 'The book is on the table.', tr: 'Le livre est sur la table.' },
            { en: 'She lives in Antananarivo.', tr: 'Elle habite à Antananarivo.' },
            { en: 'He is at school.', tr: 'Il est à l\'école.' },
            { en: 'The cat is under the chair.', tr: 'Le chat est sous la chaise.' },
            { en: 'The shop is next to the bank.', tr: 'Le magasin est à côté de la banque.' },
          ]
        },
        {
          title: 'Prépositions de temps',
          content: '<strong>at</strong> (heure précise) · <strong>on</strong> (jour/date) · <strong>in</strong> (mois/année/saison)',
          rows: [
            { en: 'The lesson starts at 8 o\'clock.', tr: 'Le cours commence à 8h.' },
            { en: 'I was born on 3rd May.', tr: 'Je suis né(e) le 3 mai.' },
            { en: 'We have a holiday in August.', tr: 'Nous avons des vacances en août.' },
            { en: 'She studies in the morning.', tr: 'Elle étudie le matin.' },
          ]
        },
        {
          title: 'Prépositions de mouvement',
          content: '<strong>to</strong> (vers) · <strong>from</strong> (depuis/de) · <strong>into</strong> (vers l\'intérieur) · <strong>out of</strong> (hors de) · <strong>along</strong> (le long de)',
          rows: [
            { en: 'I go to school every day.', tr: 'Je vais à l\'école tous les jours.' },
            { en: 'She comes from Madagascar.', tr: 'Elle vient de Madagascar.' },
            { en: 'He walked into the room.', tr: 'Il est entré dans la salle.' },
            { en: 'They ran out of the building.', tr: 'Ils sont sortis du bâtiment en courant.' },
          ]
        },
      ],
      commonErrors: [
        '❌ "I am at home in the morning" → ✅ "in the morning" mais "at night"',
        '❌ "I go to the school" → ✅ "I go to school" (pas d\'article avec les lieux habituels)',
        '❌ "She was born in Monday" → ✅ "on Monday" (jours → on)',
        '❌ "Meet me on 3pm" → ✅ "at 3pm" (heure précise → at)',
      ],
      tips: [
        '⏰ Temps : at (heure) → on (jour/date) → in (mois/saison/année)',
        '📍 Lieu : at (point précis) → on (surface) → in (espace fermé)',
        '🚶 Mouvement : to (destination) · from (origine) · into/out of (passage de frontière)',
      ],
      summary: ['at = heure & point précis', 'on = surface & jour/date', 'in = intérieur & période', 'to = vers (mouvement) · from = depuis'],
    },
    mg: {
      intro: "Ny <strong>prépositions</strong> dia teny kely milaza ny toerana, ny fotoana na ny fifandraisana. Amin\'ny teny malagasy, matetika ampiasaina ny endrika hoe \"eo am-\" na \"ao anaty\". Tsy maintsy hadinina amin\'ny teny anglisy ireo prépositions ireo.",
      sections: [
        {
          title: 'Prépositions toerana',
          content: '<strong>in</strong> (ao anaty) · <strong>on</strong> (eo ambonin\'ny) · <strong>at</strong> (eo amin\'ny) · <strong>under</strong> (eo ambanin\'ny) · <strong>next to</strong> (eo anilany)',
          rows: [
            { en: 'The book is on the table.', tr: 'Ny boky dia eo ambonin\'ny latabatra.' },
            { en: 'She lives in Antananarivo.', tr: 'Monina any Antananarivo izy.' },
            { en: 'He is at school.', tr: 'Any an\'ny sekoly izy.' },
            { en: 'The cat is under the chair.', tr: 'Ny saka dia eo ambanin\'ny seza.' },
          ]
        },
        {
          title: 'Prépositions fotoana',
          content: '<strong>at</strong> (ora) · <strong>on</strong> (andro/daty) · <strong>in</strong> (volana/taona)',
          rows: [
            { en: 'The lesson starts at 8 o\'clock.', tr: 'Manomboka amin\'ny 8 ora ny lesona.' },
            { en: 'I was born on 3rd May.', tr: 'Teraka ny 3 mai aho.' },
            { en: 'We have a holiday in August.', tr: 'Manana fialantsasatra amin\'ny Aogositra izahay.' },
          ]
        },
      ],
      commonErrors: ['❌ "born in Monday" → ✅ "born on Monday"', '❌ "go to the school" → ✅ "go to school"'],
      tips: ['⏰ Fotoana : at (ora) → on (andro) → in (volana/taona)', '📍 Toerana : at (toerana) → on (ambony) → in (ao anaty)'],
      summary: ['at = ora sy toerana mazava', 'on = ambonin\'ny & andro/daty', 'in = ao anaty & volana/taona'],
    },
  },

  // ══════════════════════════════════════════════════════════════════════
  // QUESTIONS — A1–A2
  // ══════════════════════════════════════════════════════════════════════
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

  // ══════════════════════════════════════════════════════════════════════
  // IMPERATIVES — A1–A2
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'imperatives',
    title: 'Imperative — L\'Impératif',
    icon: '📢',
    level: 'A2',
    fr: {
      intro: "L'<strong>impératif</strong> en anglais est très simple : on utilise le verbe seul, sans sujet. Pas de conjugaison — une seule forme pour toutes les personnes. Utile pour donner des ordres, des instructions, des conseils.",
      sections: [
        {
          title: 'Impératif affirmatif',
          content: 'Verbe seul à l\'infinitif — le sujet "you" est toujours sous-entendu',
          rows: [
            { en: 'Open the book.', tr: 'Ouvre le livre.' },
            { en: 'Listen carefully.', tr: 'Écoute attentivement.' },
            { en: 'Sit down, please.', tr: 'Assieds-toi, s\'il te plaît.' },
            { en: 'Be quiet!', tr: 'Sois tranquille !' },
          ]
        },
        {
          title: 'Impératif négatif',
          content: '<strong>Don\'t</strong> + verbe infinitif',
          rows: [
            { en: "Don't speak in class.", tr: 'Ne parle pas en classe.' },
            { en: "Don't be late!", tr: 'Ne sois pas en retard !' },
            { en: "Don't touch that.", tr: 'Ne touche pas ça.' },
          ]
        },
        {
          title: 'Let\'s — suggestion collective',
          content: '<strong>Let\'s</strong> + verbe — pour inclure le locuteur dans l\'action',
          rows: [
            { en: "Let's go to school.", tr: 'Allons à l\'école.' },
            { en: "Let's eat!", tr: 'Mangeons !' },
            { en: "Let's not argue.", tr: 'Ne nous disputons pas.' },
          ]
        },
        {
          title: 'Politesse et instructions',
          content: 'Ajouter <strong>please</strong> au début ou à la fin — ou utiliser des formes indirectes',
          rows: [
            { en: 'Please close the door.', tr: 'S\'il te plaît, ferme la porte.' },
            { en: 'Could you repeat, please?', tr: 'Pourriez-vous répéter, s\'il vous plaît ? (poli)' },
            { en: 'Follow the instructions step by step.', tr: 'Suis les instructions étape par étape.' },
          ]
        },
      ],
      commonErrors: [
        '❌ "Not speak in class" → ✅ "Don\'t speak in class" (Don\'t obligatoire)',
        '❌ "Let\'s to go" → ✅ "Let\'s go" (pas de "to" après Let\'s)',
        '❌ "You open the book" → ✅ "Open the book" (pas de sujet à l\'impératif)',
      ],
      tips: [
        '🔑 Impératif = verbe seul : "Eat!" · "Stop!" · "Come here!"',
        '❌ Négatif : Don\'t + verbe — "Don\'t run!" · "Don\'t worry!"',
        '👥 Let\'s = suggestion pour "nous" — "Let\'s study together!"',
      ],
      summary: ['Affirmatif : verbe seul (Open! / Be quiet!)', 'Négatif : Don\'t + verbe (Don\'t run!)', 'Suggestion : Let\'s + verbe (Let\'s go!)'],
    },
    mg: {
      intro: "Ny <strong>impératif</strong> amin\'ny anglisy dia tsotra : matoanteny fotsiny, tsy misy pronom sujet. Mifandrindra amin\'ny baiko amin\'ny teny malagasy.",
      sections: [
        {
          title: 'Baiko mivantana (affirmatif)',
          content: 'Matoanteny infinitif fotsiny — tsy misy "you"',
          rows: [
            { en: 'Open the book.', tr: 'Asio ny boky.' },
            { en: 'Listen carefully.', tr: 'Mihainoa tsara.' },
            { en: 'Be quiet!', tr: 'Mangina!' },
          ]
        },
        {
          title: 'Baiko fandavana (négatif)',
          content: '<strong>Don\'t</strong> + matoanteny infinitif',
          rows: [
            { en: "Don't speak in class.", tr: 'Aza miteny ao an-kilasy.' },
            { en: "Don't be late!", tr: 'Aza diso fotoana!' },
          ]
        },
        {
          title: 'Let\'s — soso-kevitra',
          content: '<strong>Let\'s</strong> + matoanteny — manondro hetsika ho an\'ny rehetra',
          rows: [
            { en: "Let's go to school.", tr: 'Andeha any an\'ny sekoly.' },
            { en: "Let's eat!", tr: 'Aoka hohanina!' },
          ]
        },
      ],
      commonErrors: ['❌ "Not speak" → ✅ "Don\'t speak"', '❌ "Let\'s to go" → ✅ "Let\'s go"'],
      tips: ['Baiko = matoanteny fotsiny', 'Fandavana = Don\'t + matoanteny', 'Soso-kevitra = Let\'s + matoanteny'],
      summary: ['Affirmatif : matoanteny fotsiny', 'Négatif : Don\'t + matoanteny', 'Soso-kevitra : Let\'s + matoanteny'],
    },
  },

  // ══════════════════════════════════════════════════════════════════════
  // PRESENTSIMPLE — A2
  // ══════════════════════════════════════════════════════════════════════
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

  // ══════════════════════════════════════════════════════════════════════
  // PRESENTCONTINUOUS — A2
  // ══════════════════════════════════════════════════════════════════════
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
            { en: 'What are you doing?', tr: 'Inona no ataonao?' },
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

  // ══════════════════════════════════════════════════════════════════════
  // IRREGULARVERBS — A2
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'irregularVerbs',
    title: 'Verbes irréguliers',
    icon: '📋',
    level: 'A2',
    fr: {
      intro: "En anglais, de nombreux verbes courants ont des formes irrégulières au passé. Ils ne suivent pas la règle standard <em>verbe + -ed</em>. Les 50 verbes ci-dessous sont les plus fréquents — ils couvrent ~80 % des textes et conversations courantes. Format : <strong>Infinitif → Passé simple → Participe passé</strong>.",
      sections: [
        {
          title: 'Groupe 1 — Forme unique (les 3 temps identiques)',
          content: 'Ces verbes ne changent jamais. Le contexte ou un marqueur de temps (yesterday, already…) indique le temps.',
          rows: [
            { en: 'cut, cut, cut', tr: 'couper', tts: 'cut' },
            { en: 'hit, hit, hit', tr: 'frapper / atteindre', tts: 'hit' },
            { en: 'hurt, hurt, hurt', tr: 'blesser / faire mal', tts: 'hurt' },
            { en: 'let, let, let', tr: 'laisser / permettre', tts: 'let' },
            { en: 'put, put, put', tr: 'mettre / poser', tts: 'put' },
            { en: 'read, read, read', tr: 'lire (prononciation différente au passé : « red »)', tts: 'read' },
            { en: 'set, set, set', tr: 'régler / placer', tts: 'set' },
            { en: 'shut, shut, shut', tr: 'fermer', tts: 'shut' },
          ]
        },
        {
          title: 'Groupe 2 — Passé = Participe passé',
          content: 'Ces verbes ont le même passé simple et participe passé. Les deux dernières formes sont identiques.',
          rows: [
            { en: 'bring, brought, brought', tr: 'apporter', tts: 'bring' },
            { en: 'build, built, built', tr: 'construire', tts: 'build' },
            { en: 'buy, bought, bought', tr: 'acheter', tts: 'buy' },
            { en: 'catch, caught, caught', tr: 'attraper', tts: 'catch' },
            { en: 'feel, felt, felt', tr: 'ressentir', tts: 'feel' },
            { en: 'find, found, found', tr: 'trouver', tts: 'find' },
            { en: 'get, got, got', tr: 'obtenir / devenir', tts: 'get' },
            { en: 'have, had, had', tr: 'avoir', tts: 'have' },
            { en: 'hear, heard, heard', tr: 'entendre', tts: 'hear' },
            { en: 'keep, kept, kept', tr: 'garder / conserver', tts: 'keep' },
            { en: 'leave, left, left', tr: 'partir / laisser', tts: 'leave' },
            { en: 'lose, lost, lost', tr: 'perdre', tts: 'lose' },
            { en: 'make, made, made', tr: 'faire / fabriquer', tts: 'make' },
            { en: 'meet, met, met', tr: 'rencontrer', tts: 'meet' },
            { en: 'pay, paid, paid', tr: 'payer', tts: 'pay' },
            { en: 'say, said, said', tr: 'dire', tts: 'say' },
            { en: 'sell, sold, sold', tr: 'vendre', tts: 'sell' },
            { en: 'send, sent, sent', tr: 'envoyer', tts: 'send' },
            { en: 'sit, sat, sat', tr: "s'asseoir", tts: 'sit' },
            { en: 'sleep, slept, slept', tr: 'dormir', tts: 'sleep' },
            { en: 'spend, spent, spent', tr: 'dépenser / passer (temps)', tts: 'spend' },
            { en: 'stand, stood, stood', tr: 'se lever / être debout', tts: 'stand' },
            { en: 'teach, taught, taught', tr: 'enseigner', tts: 'teach' },
            { en: 'tell, told, told', tr: 'dire / raconter', tts: 'tell' },
            { en: 'think, thought, thought', tr: 'penser / croire', tts: 'think' },
            { en: 'understand, understood, understood', tr: 'comprendre', tts: 'understand' },
            { en: 'win, won, won', tr: 'gagner', tts: 'win' },
          ]
        },
        {
          title: 'Groupe 3 — Les 3 formes différentes',
          content: 'Ces verbes ont trois formes complètement distinctes. Ce sont souvent les plus fréquents. Attention particulière requise.',
          rows: [
            { en: 'be, was/were, been', tr: 'être', tts: 'be' },
            { en: 'become, became, become', tr: 'devenir', tts: 'become' },
            { en: 'begin, began, begun', tr: 'commencer', tts: 'begin' },
            { en: 'break, broke, broken', tr: 'casser', tts: 'break' },
            { en: 'choose, chose, chosen', tr: 'choisir', tts: 'choose' },
            { en: 'come, came, come', tr: 'venir', tts: 'come' },
            { en: 'do, did, done', tr: 'faire', tts: 'do' },
            { en: 'drink, drank, drunk', tr: 'boire', tts: 'drink' },
            { en: 'drive, drove, driven', tr: 'conduire', tts: 'drive' },
            { en: 'eat, ate, eaten', tr: 'manger', tts: 'eat' },
            { en: 'fall, fell, fallen', tr: 'tomber', tts: 'fall' },
            { en: 'fly, flew, flown', tr: 'voler', tts: 'fly' },
            { en: 'forget, forgot, forgotten', tr: 'oublier', tts: 'forget' },
            { en: 'give, gave, given', tr: 'donner', tts: 'give' },
            { en: 'go, went, gone', tr: 'aller', tts: 'go' },
            { en: 'grow, grew, grown', tr: 'grandir / pousser', tts: 'grow' },
            { en: 'know, knew, known', tr: 'savoir / connaître', tts: 'know' },
            { en: 'run, ran, run', tr: 'courir', tts: 'run' },
            { en: 'see, saw, seen', tr: 'voir', tts: 'see' },
            { en: 'show, showed, shown', tr: 'montrer', tts: 'show' },
            { en: 'speak, spoke, spoken', tr: 'parler', tts: 'speak' },
            { en: 'swim, swam, swum', tr: 'nager', tts: 'swim' },
            { en: 'take, took, taken', tr: 'prendre', tts: 'take' },
            { en: 'throw, threw, thrown', tr: 'lancer', tts: 'throw' },
            { en: 'wake, woke, woken', tr: 'se réveiller', tts: 'wake' },
            { en: 'wear, wore, worn', tr: 'porter (vêtements)', tts: 'wear' },
            { en: 'write, wrote, written', tr: 'écrire', tts: 'write' },
          ]
        },
      ],
      commonErrors: [
        "❌ \"I goed to school\" → ✅ \"I went to school\" (go est irrégulier)",
        "❌ \"She has ate\" → ✅ \"She has eaten\" (participe passé ≠ passé simple pour eat)",
        "❌ \"He buyed it\" → ✅ \"He bought it\"",
        "❌ \"They thinked about it\" → ✅ \"They thought about it\"",
        "❌ \"I have wrote\" → ✅ \"I have written\" (wrote = passé simple, written = participe passé)",
        "❌ \"She drived fast\" → ✅ \"She drove fast\"",
      ],
      tips: [
        'Groupe 1 (même forme) : put-put-put, let-let-let, cut-cut-cut, read-read-read',
        'Groupe 2 (passé=participe) : buy-bought-bought, think-thought-thought, catch-caught-caught',
        'Astuce sons similaires : bring/brought · think/thought · catch/caught · teach/taught',
        'Autres sons : keep/kept · feel/felt · sleep/slept · leave/left',
        'Méthode : apprendre 5 verbes par jour en 3 groupes de sons',
      ],
      summary: [
        'Format : Infinitif → Passé simple → Participe passé',
        'Groupe 1 : même forme (put-put-put)',
        'Groupe 2 : passé = participe passé (buy-bought-bought)',
        'Groupe 3 : 3 formes différentes — les plus importants à mémoriser',
        'Verbes clés : be / have / do / go / say / get / make / know / think / come',
      ],
    },
    mg: {
      intro: "Amin\'ny teny anglisy, maro ny matoanteny tena ampiasaina fa tsy manaraka ny fitsipika -ed amin\'ny lasa. Ireo matoanteny ireo dia antsoina hoe matoanteny tsy mahazatra. Tsy maintsy hadinina. Endrika : <strong>Infinitif → Lasa tsotra → Participe passé</strong>.",
      sections: [
        {
          title: 'Vondrona 1 — endrika mitovy foana',
          content: 'Ireto matoanteny ireto dia tsy miova na oviana na oviana.',
          rows: [
            { en: 'cut, cut, cut', tr: 'manapaka', tts: 'cut' },
            { en: 'put, put, put', tr: 'mametraka', tts: 'put' },
            { en: 'let, let, let', tr: 'mamela', tts: 'let' },
            { en: 'read, read, read', tr: 'mamaky', tts: 'read' },
          ]
        },
        {
          title: 'Vondrona 2 — lasa = participe passé',
          content: 'Ireto matoanteny ireto dia mitovy ny endrika lasa sy ny participe passé.',
          rows: [
            { en: 'bring, brought, brought', tr: 'mitondra', tts: 'bring' },
            { en: 'buy, bought, bought', tr: 'mividy', tts: 'buy' },
            { en: 'have, had, had', tr: 'manana', tts: 'have' },
            { en: 'keep, kept, kept', tr: 'mitahiry', tts: 'keep' },
            { en: 'leave, left, left', tr: 'miala / mandao', tts: 'leave' },
            { en: 'make, made, made', tr: 'manao / manao', tts: 'make' },
            { en: 'say, said, said', tr: 'milaza', tts: 'say' },
            { en: 'think, thought, thought', tr: 'mihevitra', tts: 'think' },
          ]
        },
        {
          title: 'Vondrona 3 — endrika telo samy hafa',
          content: 'Ireto no matoanteny manan-danja indrindra sy mahasarotra indrindra. Hadinina tsara.',
          rows: [
            { en: 'be, was/were, been', tr: 'to be [matoanteny manan-danja indrindra]', tts: 'be' },
            { en: 'come, came, come', tr: 'avy', tts: 'come' },
            { en: 'do, did, done', tr: 'manao', tts: 'do' },
            { en: 'eat, ate, eaten', tr: 'mihinana', tts: 'eat' },
            { en: 'give, gave, given', tr: 'manome', tts: 'give' },
            { en: 'go, went, gone', tr: 'mandeha', tts: 'go' },
            { en: 'know, knew, known', tr: 'mahalala', tts: 'know' },
            { en: 'see, saw, seen', tr: 'mahita', tts: 'see' },
            { en: 'speak, spoke, spoken', tr: 'miteny', tts: 'speak' },
            { en: 'take, took, taken', tr: 'mitondra / mandray', tts: 'take' },
            { en: 'write, wrote, written', tr: 'manoratra', tts: 'write' },
          ]
        },
      ],
      commonErrors: [
        '❌ "I goed" → ✅ "I went"',
        '❌ "She has ate" → ✅ "She has eaten"',
        '❌ "He buyed" → ✅ "He bought"',
        '❌ "I have wrote" → ✅ "I have written"',
      ],
      tips: [
        'Vondrona 1 : mitovy foana — put, let, cut, read',
        'Vondrona 2 : lasa = participe — buy/bought, think/thought',
        'Vondrona 3 : telo samy hafa — be/was/been, go/went/gone',
        'Matoanteny manan-danja : be, have, do, go, say, get, make',
      ],
      summary: [
        'Endrika : Infinitif → Lasa tsotra → Participe passé',
        'Vondrona 1 : mitovy (put-put-put)',
        'Vondrona 2 : lasa = participe (buy-bought-bought)',
        'Vondrona 3 : telo samy hafa — hadinina tsara',
      ],
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // PASTSIMPLE — A2
  // ══════════════════════════════════════════════════════════════════════
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
            { en: 'be → was/were', tr: 'no → ...' },
          ]
        },
        {
          title: 'Fandavana sy Fanontaniana',
          content: '<strong>didn\'t</strong> + infinitif. <strong>Did</strong> + sujet + infinitif ?',
          rows: [
            { en: 'I didn\'t go to school today.', tr: 'Tsy nankany an\'ny sekoly aho androany.' },
            { en: 'Did you eat lunch?', tr: 'Nihinana ny sakafo amin\'ny antoandro ve ianao?' },
            { en: 'What did she say?', tr: 'Inona no nolazainy?' },
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

  // ══════════════════════════════════════════════════════════════════════
  // FUTURESIMPLE — A2
  // ══════════════════════════════════════════════════════════════════════
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
            { en: 'She will pass her exam.', tr: 'Hahajoro ny fanadinany izy.' },
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
            { en: 'I am going to study medicine.', tr: 'Hianatra fanafody aho.' },
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

  // ══════════════════════════════════════════════════════════════════════
  // GOINGTO — A2
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'goingTo',
    title: 'Going to — Futur planifié',
    icon: '🎯',
    level: 'A2',
    fr: {
      intro: "<strong>Be going to</strong> exprime un futur déjà décidé : un plan ou une intention formée <em>avant</em> le moment où on parle, ou bien une prédiction basée sur une preuve visible. C'est différent de <em>will</em> qui exprime une décision spontanée.",
      sections: [
        {
          title: '📐 Formation : be going to + infinitif',
          content: '<strong>Sujet + am/is/are + going to + verbe base</strong>. Pour le négatif : am/is/are + not + going to. Pour la question : Am/Is/Are + sujet + going to + verbe ?',
          rows: [
            { en: 'I <strong>am going to</strong> study tonight.', tr: "Je vais étudier ce soir. (décision déjà prise)" },
            { en: 'She <strong>is going to</strong> travel to France.', tr: 'Elle va voyager en France.' },
            { en: 'We <strong>are going to</strong> build a new house.', tr: 'Nous allons construire une nouvelle maison.' },
            { en: 'He <strong>is not going to</strong> accept the offer.', tr: "Il ne va pas accepter l'offre." },
            { en: '<strong>Are</strong> they <strong>going to</strong> move abroad?', tr: 'Vont-ils s\'installer à l\'étranger ?' },
          ]
        },
        {
          title: '📅 Usage 1 : Plans et intentions décidés à l\'avance',
          content: 'Utilisez <em>going to</em> quand la décision a été prise <strong>avant</strong> le moment où vous parlez. C\'est un plan, pas une décision spontanée.',
          rows: [
            { en: "I decided last night. I'm going to apply for that scholarship.", tr: "J'ai décidé hier soir. Je vais postuler pour cette bourse." },
            { en: "She's going to study medicine. She's been preparing for years.", tr: 'Elle va étudier la médecine. Elle se prépare depuis des années.' },
            { en: "We're going to visit my family this weekend.", tr: 'Nous allons rendre visite à ma famille ce week-end.' },
            { en: "They're not going to eat meat anymore.", tr: 'Ils ne vont plus manger de viande.' },
          ]
        },
        {
          title: '🌩️ Usage 2 : Prédictions avec preuve visible',
          content: 'Utilisez <em>going to</em> quand vous observez quelque chose maintenant qui vous permet de prévoir ce qui va se passer.',
          rows: [
            { en: "Look at those dark clouds — it's going to rain!", tr: 'Regardez ces nuages noirs — il va pleuvoir !' },
            { en: "Careful! You're going to drop those glasses!", tr: 'Attention ! Tu vas faire tomber ces verres !' },
            { en: "He's eating so fast — he's going to choke.", tr: 'Il mange si vite — il va s\'étouffer.' },
            { en: "That car is going too fast — it's going to crash.", tr: 'Cette voiture va trop vite — elle va avoir un accident.' },
          ]
        },
        {
          title: '⚖️ Going to vs Will : la différence essentielle',
          content: '<strong>Going to</strong> = décision prise avant / preuve visible. <strong>Will</strong> = décision spontanée au moment où on parle / prédiction sans preuve concrète.',
          rows: [
            { en: "A: I need help! B: I'll help you! (decision now)", tr: "A: J'ai besoin d'aide ! B: Je vais t'aider ! (décision spontanée → will)" },
            { en: "A: What are your plans? B: I'm going to study English.", tr: "A: Quels sont tes plans ? B: Je vais étudier l'anglais. (plan décidé → going to)" },
            { en: "I think it will rain tomorrow. (opinion, no proof)", tr: 'Je pense qu\'il pleuvra demain. (opinion, pas de preuve → will)' },
            { en: "Look at those clouds — it's going to rain! (proof visible)", tr: 'Regardez ces nuages — il va pleuvoir ! (preuve visible → going to)' },
          ]
        },
        {
          title: '🔄 Going to vs Present Continuous pour le futur',
          content: 'Le présent continu peut aussi exprimer un futur, mais seulement pour des <strong>arrangements déjà fixés</strong> (rendez-vous, réservations). <em>Going to</em> exprime les intentions plus générales.',
          rows: [
            { en: "I'm meeting Sarah tomorrow at 3pm. (appointment made)", tr: "Je rencontre Sarah demain à 15h. (rendez-vous fixé → present continuous)" },
            { en: "I'm going to visit my grandmother sometime next week.", tr: "Je vais rendre visite à ma grand-mère la semaine prochaine. (intention → going to)" },
            { en: "We're flying to Paris on Monday. (tickets bought)", tr: "Nous volons vers Paris lundi. (billet réservé → present continuous)" },
          ]
        },
      ],
      commonErrors: [
        "❌ \"I going to study\" → ✅ \"I AM going to study\" (be obligatoire)",
        "❌ \"I'm gonna to study\" → ✅ \"I'm going to study\" (gonna est familier et sans 'to')",
        "❌ \"Will you going to...?\" → ✅ \"Are you going to...?\" (question avec be)",
        "❌ \"Look — it will rain!\" (avec preuve visible) → ✅ \"it's going to rain!\"",
        "❌ \"I'm going to help you!\" (décision spontanée) → ✅ \"I'll help you!\"",
      ],
      tips: [
        "🔑 Be going to = plan décidé à l'avance OU prédiction avec preuve visible",
        "🔑 Will = décision spontanée OU prédiction sans preuve (opinion, croyance)",
        "💡 Formes contractées naturelles : I'm going to / she's going to / we're going to",
        "💡 \"Gonna\" = forme orale très familière — évitez à l'écrit",
        "⚠️ N'oubliez jamais le verbe BE : I AM / She IS / They ARE going to...",
      ],
      summary: [
        'Formation : be (am/is/are) + going to + verbe base',
        'Usage 1 : plans et intentions décidés avant le moment de parler',
        'Usage 2 : prédictions basées sur une preuve visible maintenant',
        'vs will : will = spontané / sans preuve | going to = planifié / preuve visible',
      ],
    },
    mg: {
      intro: "<strong>Be going to</strong> dia ampiasaina hilazana ny zavatra efa voatokana ataonao amin'ny ho avy — drafitry ny saina na fiheverana miorina amin'ny porofo hita maso. Tsy mitovy amin'ny <em>will</em> izay entina milaza fanapahan-kevitra tampoka.",
      sections: [
        {
          title: '📐 Fomba : be going to + veribe base',
          content: '<strong>Sujet + am/is/are + going to + veribe</strong>. Fandavana : not + going to. Fanontaniana : am/is/are + sujet + going to?',
          rows: [
            { en: "I'm going to study tonight.", tr: 'Hianatra aho this evening. (fanapahan-kevitra efa vita)' },
            { en: "She's going to travel to France.", tr: 'Handeha any Frantsa izy.' },
            { en: "Are they going to move abroad?", tr: 'Handeha any ivelany ve izy ireo?' },
          ]
        },
        {
          title: '📅 Fampiasana 1 : Drafitra sy fikasana',
          content: 'Ampiasao <em>going to</em> raha efa voatokana ny fanapahan-kevitra talohan\'ny fitenenana.',
          rows: [
            { en: "I'm going to apply for that scholarship.", tr: 'Hangataka ilay kamboty fianarambola aho.' },
            { en: "We're going to visit our family this weekend.", tr: 'Hitsidika ny fianakaviany izahay weekend ity.' },
          ]
        },
        {
          title: '🌩️ Fampiasana 2 : Faminaniana miainga amin\'ny porofo',
          content: 'Ampiasao <em>going to</em> raha misy porofo hita maso mampiseho ny ho avy.',
          rows: [
            { en: "Look at those clouds — it's going to rain!", tr: 'Jereo ireny rahona ireny — ho ranonorana!' },
            { en: "Careful! You're going to drop those glasses!", tr: 'Tandremo! Ho latsaka ireny fitaratra ireny!' },
          ]
        },
        {
          title: '⚖️ Going to vs Will',
          content: '<strong>Going to</strong> = drafitra efa vita / porofo hita maso. <strong>Will</strong> = fanapahan-kevitra tampoka / hevitra fotsiny.',
          rows: [
            { en: "I'll help you! (spontaneous decision)", tr: 'Hanampy anao aho! (tampoka → will)' },
            { en: "I'm going to study English. (planned)", tr: 'Hianatra anglisy aho. (efa drafitra → going to)' },
          ]
        },
      ],
      commonErrors: [
        "❌ \"I going to study\" → ✅ \"I AM going to study\" (tsy maintsy misy be)",
        "❌ \"Will you going to...?\" → ✅ \"Are you going to...?\"",
        "❌ Hita porofo + will → ✅ hita porofo + going to",
      ],
      tips: [
        '🔑 Going to = drafitra na porofo hita maso',
        '🔑 Will = fanapahan-kevitra tampoka na hevitra tsotra',
        '⚠️ Tsy maintsy misy be (am/is/are) alohan\'ny going to',
      ],
      summary: [
        'Fomba : be (am/is/are) + going to + veribe',
        'Fampiasana : drafitra efa vita, faminaniana miainga amin\'ny porofo',
        'vs will : going to = drafitra/porofo | will = tampoka/hevitra',
      ],
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // COMPARATIVES — A2
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'comparatives',
    title: 'Comparatives & Superlatives',
    icon: '⚖️',
    level: 'A2',
    fr: {
      intro: "En anglais, les <strong>comparatifs</strong> et <strong>superlatifs</strong> fonctionnent différemment selon la longueur de l\'adjectif. La règle est simple et régulière pour la plupart des adjectifs.",
      sections: [
        {
          title: 'Comparatif d\'infériorité et supériorité',
          content: 'Adjectif court (1 syllabe) + <strong>-er than</strong> · Adjectif long (2+ syllabes) : <strong>more … than</strong>',
          rows: [
            { en: 'She is taller than her brother.', tr: 'Elle est plus grande que son frère. (tall → taller)' },
            { en: 'This film is more interesting than the last one.', tr: 'Ce film est plus intéressant que le dernier. (more + long adj)' },
            { en: 'Running is easier than swimming.', tr: 'Courir est plus facile que nager.' },
            { en: 'My bag is heavier than yours.', tr: 'Mon sac est plus lourd que le tien. (heavy → heavier)' },
          ]
        },
        {
          title: 'Superlatif',
          content: 'Adjectif court : <strong>the … -est</strong> · Adjectif long : <strong>the most …</strong>',
          rows: [
            { en: 'He is the fastest runner in the school.', tr: 'Il est le coureur le plus rapide de l\'école.' },
            { en: 'This is the most beautiful place I\'ve seen.', tr: 'C\'est l\'endroit le plus beau que j\'aie vu.' },
            { en: 'January is the coldest month.', tr: 'Janvier est le mois le plus froid.' },
          ]
        },
        {
          title: 'Égalité : as … as',
          content: 'Pour dire que deux choses sont égales',
          rows: [
            { en: 'My car is as fast as yours.', tr: 'Ma voiture est aussi rapide que la tienne.' },
            { en: 'She is as tall as her mother.', tr: 'Elle est aussi grande que sa mère.' },
          ]
        },
        {
          title: 'Irréguliers importants',
          content: 'good / bad / far ont des comparatifs et superlatifs irréguliers',
          rows: [
            { en: 'good → better → the best', tr: 'bon → meilleur → le meilleur' },
            { en: 'bad → worse → the worst', tr: 'mauvais → pire → le pire' },
            { en: 'far → farther/further → the farthest/furthest', tr: 'loin → plus loin → le plus loin' },
          ]
        },
      ],
      commonErrors: [
        '❌ "more tall than" → ✅ "taller than" (adj court → -er)',
        '❌ "the most fast" → ✅ "the fastest" (adj court → -est)',
        '❌ "more better" → ✅ "better" (irrégulier)',
        '❌ "the most good" → ✅ "the best" (irrégulier)',
      ],
      tips: [
        '📏 1 syllabe → -er/-est : tall/taller/tallest',
        '📏 2+ syllabes → more/most : beautiful / more beautiful / most beautiful',
        '⚠️ Doublement de la consonne finale : big/bigger, hot/hotter, fat/fatter',
        '⚠️ -y → -ier/-iest : happy/happier/happiest · easy/easier/easiest',
      ],
      summary: ['Court (-er/-est) : tall/taller/tallest', 'Long (more/most) : beautiful/more beautiful/most beautiful', 'Égalité : as … as', 'Irréguliers : good/better/best · bad/worse/worst'],
    },
    mg: {
      intro: "Ny <strong>comparatif</strong> sy <strong>superlative</strong> dia mampiasa endrika hafa arakaraky ny halavan\'ny adjectif. Tsotra ny fitsipika.",
      sections: [
        {
          title: 'Comparatif (mitovy na tsy mitovy)',
          content: 'Adjectif fohy + -er than · Adjectif lava : more … than',
          rows: [
            { en: 'She is taller than her brother.', tr: 'Lehibe kokoa izy noho ny rahalahiny.' },
            { en: 'This film is more interesting than the last one.', tr: 'Ny sarimihetsika ity dia maro lamintsasa kokoa noho ny farany.' },
          ]
        },
        {
          title: 'Superlative',
          content: 'Adjectif fohy : the … -est · Adjectif lava : the most …',
          rows: [
            { en: 'He is the fastest runner in the school.', tr: 'Izy no manerinerina indrindra ao an-tsekoly.' },
            { en: 'This is the most beautiful place.', tr: 'Ity no toerana tsara indrindra.' },
          ]
        },
        {
          title: 'Irréguliers',
          content: 'Ireo teny tsy manaraka fitsipika',
          rows: [
            { en: 'good → better → the best', tr: 'tsara → tsara kokoa → tsara indrindra' },
            { en: 'bad → worse → the worst', tr: 'ratsy → ratsy kokoa → ratsy indrindra' },
          ]
        },
      ],
      commonErrors: ['❌ "more tall" → ✅ "taller"', '❌ "more better" → ✅ "better"'],
      tips: ['Fohy (1 syllabe) → -er/-est', 'Lava (2+ syllabe) → more/most', 'Irréguliers : good/better/best · bad/worse/worst'],
      summary: ['Fohy → -er than / the -est', 'Lava → more … than / the most …', 'Mitovy : as … as'],
    },
  },

  // ══════════════════════════════════════════════════════════════════════
  // SOMEANY — A2
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'someAny',
    title: 'Some, Any & No',
    icon: '🔢',
    level: 'A2',
    fr: {
      intro: "<strong>Some</strong>, <strong>any</strong> et <strong>no</strong> expriment une quantité indéfinie. Leur choix dépend du type de phrase : affirmative, négative ou interrogative. Ce point est très différent du français.",
      sections: [
        {
          title: 'Some — phrases affirmatives',
          content: '"Quelques" / "du, de la, des" dans les phrases positives',
          rows: [
            { en: 'I have some water.', tr: 'J\'ai de l\'eau.' },
            { en: 'There are some books on the table.', tr: 'Il y a des livres sur la table.' },
            { en: 'Would you like some tea?', tr: 'Voulez-vous du thé ? (offre polie → some)' },
          ]
        },
        {
          title: 'Any — questions et négatives',
          content: '"Du/de la/des" dans les questions et "de" après une négation',
          rows: [
            { en: 'Do you have any money?', tr: 'Est-ce que tu as de l\'argent ?' },
            { en: 'I don\'t have any friends here.', tr: 'Je n\'ai pas d\'amis ici.' },
            { en: 'Is there any milk in the fridge?', tr: 'Il y a du lait dans le frigo ?' },
          ]
        },
        {
          title: 'No — quantité zéro',
          content: '"Aucun(e)" = Not any, mais plus direct et plus fort',
          rows: [
            { en: 'I have no money.', tr: 'Je n\'ai pas d\'argent. (= I don\'t have any)' },
            { en: 'There is no time.', tr: 'Il n\'y a pas de temps.' },
            { en: 'She has no brothers.', tr: 'Elle n\'a pas de frères.' },
          ]
        },
        {
          title: 'Composés : something / anything / nothing / someone / anyone',
          content: 'Some- (affirmatif) · Any- (question/négatif) · No- (zéro)',
          rows: [
            { en: 'I want something to eat.', tr: 'Je veux quelque chose à manger.' },
            { en: 'Do you need anything?', tr: 'As-tu besoin de quelque chose ?' },
            { en: 'There is nothing in the bag.', tr: 'Il n\'y a rien dans le sac.' },
            { en: 'Someone is at the door.', tr: 'Il y a quelqu\'un à la porte.' },
          ]
        },
      ],
      commonErrors: [
        '❌ "I don\'t have some money" → ✅ "I don\'t have any money" (négatif → any)',
        '❌ "There isn\'t nothing" → ✅ "There is nothing" ou "There isn\'t anything" (pas de double négation)',
        '❌ "Do you have some time?" → ✅ "Do you have any time?" (question neutre → any)',
      ],
      tips: [
        '🔑 SOME : affirmatif | ANY : question & négatif | NO : zéro',
        '💡 Some dans une question = offre polie : "Would you like some coffee?"',
        '🧩 Composés : some/any/no + body · one · thing · where',
      ],
      summary: ['some → affirmatif', 'any → question / négatif', 'no → quantité zéro', 'Composés : something / anything / nothing / someone / anyone / nowhere'],
    },
    mg: {
      intro: "Ny <strong>some</strong>, <strong>any</strong> ary <strong>no</strong> dia milaza habetsahana tsy mazava tsara. Ny safidiny miankina amin\'ny karazana fehezanteny (fanambara, fandavana, fanontaniana).",
      sections: [
        {
          title: 'Some — fehezanteny fanambara',
          content: '"Zavatra kely" amin\'ny fehezanteny tsara',
          rows: [
            { en: 'I have some water.', tr: 'Manana rano kely aho.' },
            { en: 'There are some books on the table.', tr: 'Misy boky kely eo ambonin\'ny latabatra.' },
          ]
        },
        {
          title: 'Any — fanontaniana sy fandavana',
          content: '"Inona na inona" amin\'ny fanontaniana sy fandavana',
          rows: [
            { en: 'Do you have any money?', tr: 'Manana vola ve ianao?' },
            { en: 'I don\'t have any friends here.', tr: 'Tsy manana namana eto aho.' },
          ]
        },
        {
          title: 'No — vola aotra',
          content: '"Tsy misy" = zero',
          rows: [
            { en: 'I have no money.', tr: 'Tsy manana vola aho.' },
            { en: 'There is nothing in the bag.', tr: 'Tsy misy na inona ao anaty kitapom-boky.' },
          ]
        },
      ],
      commonErrors: ['❌ "I don\'t have some" → ✅ "I don\'t have any"', '❌ "There isn\'t nothing" → ✅ "There is nothing"'],
      tips: ['some → fanambara | any → fanontaniana/fandavana | no → aotra', 'Composés : something / anything / nothing'],
      summary: ['some → fanambara', 'any → fanontaniana / fandavana', 'no → aotra (zéro)'],
    },
  },

  // ══════════════════════════════════════════════════════════════════════
  // COUNTABLEUNCOUNTABLE — A2–B1
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'countableUncountable',
    title: 'Countable & Uncountable Nouns',
    icon: '🧮',
    level: 'A2–B1',
    fr: {
      intro: "En anglais, les noms se divisent en <strong>countable</strong> (dénombrables, qu\'on peut compter) et <strong>uncountable</strong> (indénombrables, qu\'on ne peut pas compter). Ce choix détermine quel quantificateur utiliser : much, many, a lot of, a few, a little.",
      sections: [
        {
          title: 'Dénombrables (Countable nouns)',
          content: 'Ont un singulier et un pluriel. Peuvent être précédés de a/an.',
          rows: [
            { en: 'one apple, two apples, three books', tr: 'une pomme, deux pommes, trois livres' },
            { en: 'How many oranges do you have?', tr: 'Combien d\'oranges as-tu ?' },
            { en: 'I have a few coins in my pocket.', tr: 'J\'ai quelques pièces dans ma poche.' },
            { en: 'There are many students in the class.', tr: 'Il y a beaucoup d\'étudiants dans la classe.' },
          ]
        },
        {
          title: 'Indénombrables (Uncountable nouns)',
          content: 'Pas de pluriel. Pas de a/an. Verbe toujours singulier.',
          rows: [
            { en: 'water, milk, rice, bread, sugar, money, air', tr: 'eau, lait, riz, pain, sucre, argent, air' },
            { en: 'information, advice, furniture, news, luggage', tr: 'information, conseil, meubles, nouvelles, bagages' },
            { en: 'How much water do you drink every day?', tr: 'Combien d\'eau bois-tu chaque jour ?' },
            { en: 'The information is correct.', tr: 'L\'information est correcte. (pas "informations")' },
          ]
        },
        {
          title: 'Much / Many / A lot of',
          content: 'much + uncountable · many + countable · a lot of + les deux',
          rows: [
            { en: 'I don\'t have much time today.', tr: 'Je n\'ai pas beaucoup de temps aujourd\'hui.' },
            { en: 'She has a lot of friends at school.', tr: 'Elle a beaucoup d\'amis à l\'école.' },
            { en: 'He drinks a lot of water every day.', tr: 'Il boit beaucoup d\'eau chaque jour.' },
            { en: 'Do you have much homework tonight?', tr: 'Tu as beaucoup de devoirs ce soir ?' },
          ]
        },
        {
          title: 'A few / A little',
          content: 'a few + countable · a little + uncountable (sens positif)',
          rows: [
            { en: 'I have a few friends in this city.', tr: 'J\'ai quelques amis dans cette ville.' },
            { en: 'She speaks a little French.', tr: 'Elle parle un peu français.' },
            { en: 'Wait a few minutes, please.', tr: 'Attends quelques minutes, s\'il te plaît.' },
            { en: 'Add a little sugar to the tea.', tr: 'Ajoute un peu de sucre dans le thé.' },
          ]
        },
      ],
      commonErrors: [
        '"I have many informations." ✗ → "I have a lot of information." ✓',
        '"Can I have an advice?" ✗ → "Can I have some advice?" ✓',
        '"She has much friends." ✗ → "She has many friends." ✓',
        '"I have few money." ✗ → "I have little money." ✓',
      ],
      tips: [
        '"advice", "information", "furniture", "news", "luggage" → toujours uncountable !',
        'Few (sans "a") = peu de (presque rien) · a few = quelques (positif)',
        'Little (sans "a") = peu de (négatif) · a little = un peu (positif)',
      ],
      summary: [
        'Countable → a/an, pluriel, many, a few',
        'Uncountable → pas de a/an, pas de pluriel, much, a little',
        'A lot of → universel (les deux, surtout en affirmatif)',
      ]
    },
    mg: {
      intro: "Amin\'ny anglisy, ny noun dia mizara ho <strong>countable</strong> (azo isaina) sy <strong>uncountable</strong> (tsy azo isaina). Io no mametra ny fampiasana much, many, a lot of, a few, a little.",
      sections: [
        {
          title: 'Countable (azo isaina)',
          content: 'Misy endrika tokana sy endrika maro. Azo asiana a/an eo aloha.',
          rows: [
            { en: 'one apple, two apples, three books', tr: 'paoma iray, paoma roa, boky telo' },
            { en: 'How many oranges do you have?', tr: 'Ôranjy firy no anananao?' },
            { en: 'I have a few coins in my pocket.', tr: 'Manana vola vitsivitsy ao am-paosy aho.' },
          ]
        },
        {
          title: 'Uncountable (tsy azo isaina)',
          content: 'Tsy misy endrika maro. Tsy misy a/an. Matoanteny amin\'ny tokana foana.',
          rows: [
            { en: 'water, milk, rice, bread, sugar, money', tr: 'rano, ronono, vary, mofo, siramamy, vola' },
            { en: 'information, advice, furniture, news', tr: 'vaovao, torohevitra, firavaka, vaovao madinidinika' },
            { en: 'How much water do you drink every day?', tr: 'Rano ohatrinona no sotrohinao isan\'andro?' },
          ]
        },
        {
          title: 'Much / Many / A lot of',
          content: 'much + uncountable · many + countable · a lot of = izy roa',
          rows: [
            { en: 'I don\'t have much time today.', tr: 'Tsy manana fotoana be aho anio.' },
            { en: 'She has a lot of friends at school.', tr: 'Manana namana maro izy any an-tsekoly.' },
            { en: 'He drinks a lot of water every day.', tr: 'Misotro rano be izy isan\'andro.' },
          ]
        },
        {
          title: 'A few / A little',
          content: 'a few + countable · a little + uncountable',
          rows: [
            { en: 'I have a few friends in this city.', tr: 'Manana namana vitsivitsy aho ato an-tanàna.' },
            { en: 'She speaks a little French.', tr: 'Mahay teny frantsay kely izy.' },
            { en: 'Add a little sugar to the tea.', tr: 'Ampio siramamy kely ao amin\'ny dite.' },
          ]
        },
      ],
      commonErrors: [
        '"I have many informations." ✗ → "I have a lot of information." ✓',
        '"Can I have an advice?" ✗ → "Can I have some advice?" ✓',
      ],
      tips: [
        '"advice", "information", "furniture", "news" — uncountable foana ireo!',
        'A few / a little = kely nefa misy (positif) · few / little = tena kely be (négatif)',
      ],
      summary: [
        'Countable → a/an, endrika maro, many, a few',
        'Uncountable → tsy misy a/an, tsy misy endrika maro, much, a little',
        'A lot of → azo ampiasaina amin\'ny izy roa',
      ]
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // ADVERBS — A2
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'adverbs',
    title: 'Adverbs — Adverbes',
    icon: '⚡',
    level: 'A2',
    fr: {
      intro: "Les <strong>adverbes de fréquence</strong> indiquent à quelle fréquence une action se produit (always → never). Les <strong>adverbes de manière</strong> décrivent comment une action est effectuée (quickly, carefully). Leur position dans la phrase est essentielle.",
      sections: [
        {
          title: 'Adverbes de fréquence (100% → 0%)',
          content: 'Se placent avant le verbe principal, mais après "to be".',
          rows: [
            { en: 'I always brush my teeth in the morning.', tr: 'Je me brosse toujours les dents le matin. (100%)' },
            { en: 'She usually wakes up at six.', tr: 'Elle se réveille généralement à 6h. (80%)' },
            { en: 'We often eat rice for dinner.', tr: 'Nous mangeons souvent du riz le soir. (60%)' },
            { en: 'He sometimes watches TV after school.', tr: 'Il regarde parfois la télé après l\'école. (40%)' },
            { en: 'They rarely go to the cinema.', tr: 'Ils vont rarement au cinéma. (20%)' },
            { en: 'I never drink alcohol.', tr: 'Je ne bois jamais d\'alcool. (0%)' },
          ]
        },
        {
          title: 'Position avec "to be"',
          content: 'Après "to be", l\'adverbe de fréquence se place après le verbe.',
          rows: [
            { en: 'He is always late.', tr: 'Il est toujours en retard.' },
            { en: 'They are usually tired after school.', tr: 'Ils sont généralement fatigués après l\'école.' },
            { en: 'She is never rude.', tr: 'Elle n\'est jamais impolie.' },
          ]
        },
        {
          title: 'Adverbes de manière (adjectif + -ly)',
          content: 'Se placent après le verbe ou l\'objet direct.',
          rows: [
            { en: 'She speaks English quickly.', tr: 'Elle parle anglais rapidement.' },
            { en: 'He drives very carefully.', tr: 'Il conduit très prudemment.' },
            { en: 'The team played badly last night.', tr: 'L\'équipe a très mal joué hier soir.' },
            { en: 'She sings beautifully at every concert.', tr: 'Elle chante magnifiquement à chaque concert.' },
          ]
        },
        {
          title: 'Adverbes irréguliers (pas de -ly)',
          content: 'Formes à mémoriser.',
          rows: [
            { en: 'She plays the piano very well.', tr: 'Elle joue très bien du piano. (good → well)' },
            { en: 'He runs very fast.', tr: 'Il court très vite. (fast → fast)' },
            { en: 'She works really hard every day.', tr: 'Elle travaille vraiment dur chaque jour. (hard → hard)' },
            { en: 'He arrived late to the meeting.', tr: 'Il est arrivé en retard à la réunion. (late → late)' },
          ]
        },
      ],
      commonErrors: [
        '"She sings beautiful." ✗ → "She sings beautifully." ✓',
        '"He plays good the guitar." ✗ → "He plays the guitar well." ✓',
        '"I sometimes am late." ✗ → "I am sometimes late." ✓ (après to be)',
      ],
      tips: [
        'Ordre en fin de phrase : MANIÈRE → LIEU → TEMPS (She sang beautifully in the park yesterday)',
        '"hardly" ≠ "hard" : hardly = à peine / hard = fort ou dur',
        '"lately" ≠ "late" : lately = récemment / late = en retard',
      ],
      summary: [
        'Fréquence : avant le verbe principal / après to be',
        'Manière : adjectif + -ly, après le verbe ou l\'objet',
        'Irréguliers à retenir : good → well, fast → fast, hard → hard',
      ]
    },
    mg: {
      intro: "Ny <strong>adverbe de fréquence</strong> dia milaza ny matetika isaterahan\'ny asa (always → never). Ny <strong>adverbe de manière</strong> dia milaza ny fomba fanao (quickly, carefully). Ny toerana ao amin\'ny fehezanteny dia lehibe.",
      sections: [
        {
          title: 'Adverbe de fréquence (100% → 0%)',
          content: 'Eo alohan\'ny matoanteny lehibe, nefa aorian\'ny to be.',
          rows: [
            { en: 'I always brush my teeth in the morning.', tr: 'Mandrakariva manasa nify aho maraina.' },
            { en: 'She usually wakes up at six.', tr: 'Matetika mifohaza amin\'ny enina izy.' },
            { en: 'We often eat rice for dinner.', tr: 'Matetika mihinana vary amin\'ny alina izahay.' },
            { en: 'I never drink alcohol.', tr: 'Tsy mba misotro toaka aho.' },
          ]
        },
        {
          title: 'Toerana aorian\'ny "to be"',
          content: 'Aorian\'ny to be, ny adverbe dia apetraka aorian\'ny matoanteny.',
          rows: [
            { en: 'He is always late.', tr: 'Mandrakariva diso fotoana izy.' },
            { en: 'She is never rude.', tr: 'Tsy mba manevateva izy.' },
          ]
        },
        {
          title: 'Adverbe de manière (adjectif + -ly)',
          content: 'Apetraka aorian\'ny matoanteny na ny objet.',
          rows: [
            { en: 'She speaks English quickly.', tr: 'Haingana ny fitenenany anglisy.' },
            { en: 'He drives very carefully.', tr: 'Mitandrina be izy rehefa mitondra fiara.' },
            { en: 'She plays the piano very well.', tr: 'Mahay manao piano tsara izy. (good → well)' },
            { en: 'He runs very fast.', tr: 'Mihazakazaka haingana be izy. (fast → fast)' },
          ]
        },
      ],
      commonErrors: [
        '"She sings beautiful." ✗ → "She sings beautifully." ✓',
        '"He plays good." ✗ → "He plays well." ✓',
      ],
      tips: [
        'Manetrika: MANIÈRE → LIEU → FOTOANA (beautifully in the park yesterday)',
        '"hardly" = saika tsy (à peine) ≠ "hard" = mafy / mafy be',
      ],
      summary: [
        'Fréquence: eo alohan\'ny matoanteny / aorian\'ny to be',
        'Manière: adjectif + -ly, aorian\'ny matoanteny',
        'Tsy ara-dalàna: good → well, fast → fast, hard → hard',
      ]
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // MODALS — A2
  // ══════════════════════════════════════════════════════════════════════
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
            { en: 'She can\'t drive yet.', tr: 'Tsy afaka mampiasa fiara izy mbola.' },
          ]
        },
        {
          title: 'Must / Have to — tsy maintsy',
          content: '',
          rows: [
            { en: 'You must study harder.', tr: 'Tsy maintsy mianatra mafy kokoa ianao.' },
            { en: 'I have to wear a uniform.', tr: 'Tsy maintsy manao akanjo iray mitovy aho.' },
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
            { en: 'She might come later.', tr: 'Mety ho avy izy avy eo.' },
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

  // ══════════════════════════════════════════════════════════════════════
  // INTERROGATIVE — A2
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'interrogative',
    title: 'Questions — Interrogative',
    icon: '❓',
    level: 'A2',
    fr: {
      intro: "Former des questions en anglais est différent du français : on utilise des <strong>auxiliaires</strong> (Do/Does/Did, is/are/was/were, will, can…) et on <strong>inverse</strong> leur position avec le sujet. Maîtriser les questions est indispensable pour communiquer.",
      sections: [
        {
          title: 'Questions Yes/No — Do / Does (Present Simple)',
          content: '<strong>Do</strong> + I/you/we/they · <strong>Does</strong> + he/she/it → verbe à l\'infinitif',
          rows: [
            { en: 'Do you speak English?', tr: 'Est-ce que tu parles anglais ?' },
            { en: 'Does she live in Tana?', tr: 'Est-ce qu\'elle habite à Tana ?' },
            { en: 'Do they have a car?', tr: 'Est-ce qu\'ils ont une voiture ?' },
          ]
        },
        {
          title: 'Questions Yes/No — Did (Past Simple)',
          content: '<strong>Did</strong> + tous les sujets → verbe à l\'infinitif (pas de -ed !)',
          rows: [
            { en: 'Did you eat this morning?', tr: 'Est-ce que tu as mangé ce matin ?' },
            { en: 'Did she pass the exam?', tr: 'Est-ce qu\'elle a réussi l\'examen ?' },
            { en: 'Did they understand?', tr: 'Est-ce qu\'ils ont compris ?' },
          ]
        },
        {
          title: 'Questions avec Be + Modaux',
          content: 'Inverser directement — pas besoin de Do/Did',
          rows: [
            { en: 'Are you a student?', tr: 'Es-tu étudiant ?' },
            { en: 'Was he at home?', tr: 'Était-il à la maison ?' },
            { en: 'Can you help me?', tr: 'Peux-tu m\'aider ?' },
            { en: 'Will she come tomorrow?', tr: 'Est-ce qu\'elle viendra demain ?' },
          ]
        },
        {
          title: 'Questions Wh- (What/Where/When/Who/Why/How)',
          content: 'Mot interrogatif + auxiliaire + sujet + verbe infinitif',
          rows: [
            { en: 'Where do you live?', tr: 'Où habites-tu ?' },
            { en: 'What does she eat?', tr: 'Qu\'est-ce qu\'elle mange ?' },
            { en: 'Why did they leave?', tr: 'Pourquoi sont-ils partis ?' },
            { en: 'How many books do you have?', tr: 'Combien de livres as-tu ?' },
            { en: 'Who is your teacher?', tr: 'Qui est ton professeur ?' },
          ]
        },
      ],
      commonErrors: [
        '❌ "Does she speaks?" → ✅ "Does she speak?" (infinitif après Does)',
        '❌ "What you did?" → ✅ "What did you do?" (Did obligatoire + infinitif)',
        '❌ "Where she lives?" → ✅ "Where does she live?" (Do/Does obligatoire)',
        '❌ "Why he was late?" → ✅ "Why was he late?" (be → inverser directement)',
      ],
      tips: [
        '🔑 Do/Does pour le Present Simple · Did pour le Past Simple',
        '⚠️ Après Do/Does/Did → verbe INFINITIF (sans -s, sans -ed)',
        '💡 Be et modaux : pas besoin de Do — on inverse directement',
      ],
      summary: ['Yes/No : Do/Does/Did + sujet + infinitif ?', 'Be : Is/Are/Was/Were + sujet ?', 'Wh- : mot interrogatif + auxiliaire + sujet + infinitif ?'],
    },
    mg: {
      intro: "Ny fanontaniana amin\'ny teny anglisy dia mampiasa <strong>auxiliaires</strong> (Do/Does/Did, is/are…). Amin\'ny teny malagasy, matetika ampiana \"ve\" aorian\'ny matoanteny na ny lohalahateny.",
      sections: [
        {
          title: 'Fanontaniana Do/Does (Present Simple)',
          content: '<strong>Do</strong> + I/you/we/they · <strong>Does</strong> + he/she/it → matoanteny infinitif',
          rows: [
            { en: 'Do you speak English?', tr: 'Miteny anglisy ve ianao?' },
            { en: 'Does she live in Tana?', tr: 'Monina any Tana ve izy?' },
          ]
        },
        {
          title: 'Fanontaniana Wh-',
          content: 'Teny manontaniana + auxiliaire + sujet + matoanteny',
          rows: [
            { en: 'Where do you live?', tr: 'Aiza no mipetraka ianao?' },
            { en: 'What does she eat?', tr: 'Inona no haniny izy?' },
            { en: 'Why did they leave?', tr: 'Nahoana izy no lasa?' },
          ]
        },
      ],
      commonErrors: ['❌ "Does she speaks?" → ✅ "Does she speak?"', '❌ "What you did?" → ✅ "What did you do?"'],
      tips: ['Do/Does → Present Simple · Did → Past Simple', 'Aorian\'ny Do/Does/Did → matoanteny infinitif foana'],
      summary: ['Do/Does + sujet + infinitif?', 'Did + sujet + infinitif?', 'Wh- + aux + sujet + infinitif?'],
    },
  },

  // ══════════════════════════════════════════════════════════════════════
  // PRESENTPERFECT — A2–B1
  // ══════════════════════════════════════════════════════════════════════
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
            { en: 'Have you finished yet?', tr: 'Vita sahady ve ianao?' },
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

  // ══════════════════════════════════════════════════════════════════════
  // SINCEFOR — B1
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'sinceFor',
    title: 'Since & For — Durée et point de départ',
    icon: '⏳',
    level: 'B1',
    fr: {
      intro: "<strong>Since</strong> et <strong>for</strong> s'utilisent avec le <em>present perfect</em> pour exprimer la durée. <strong>Since</strong> indique le <em>point de départ</em> d'une action, <strong>for</strong> indique la <em>durée totale</em>. C'est l'un des points les plus importants du niveau B1.",
      sections: [
        {
          title: '📍 Since — depuis quand ? (point de départ)',
          content: '<strong>Since + moment précis</strong> : une date, une heure, un événement. L\'action a commencé à ce moment et continue jusqu\'au présent. <em>Obligatoirement avec un temps parfait.</em>',
          rows: [
            { en: 'I have lived here <strong>since 2015</strong>.', tr: "J'habite ici depuis 2015." },
            { en: 'She has been studying <strong>since 8 o\'clock</strong>.', tr: "Elle étudie depuis 8 heures." },
            { en: 'We have been friends <strong>since primary school</strong>.', tr: "Nous sommes amis depuis l'école primaire." },
            { en: 'He hasn\'t eaten <strong>since yesterday morning</strong>.', tr: "Il n'a pas mangé depuis hier matin." },
            { en: 'Things have changed <strong>since the new teacher arrived</strong>.', tr: "Les choses ont changé depuis l'arrivée du nouveau professeur." },
          ]
        },
        {
          title: '⏱️ For — combien de temps ? (durée)',
          content: '<strong>For + durée</strong> : un nombre d\'heures, de jours, de mois, d\'années... On mesure la longueur de la période, pas son point de départ.',
          rows: [
            { en: 'I have lived here <strong>for five years</strong>.', tr: "J'habite ici depuis cinq ans (= pendant cinq ans)." },
            { en: 'She has been waiting <strong>for two hours</strong>.', tr: "Elle attend depuis deux heures." },
            { en: 'He has been ill <strong>for a long time</strong>.', tr: "Il est malade depuis longtemps." },
            { en: 'They have known each other <strong>for decades</strong>.', tr: "Ils se connaissent depuis des décennies." },
            { en: 'I haven\'t seen her <strong>for three months</strong>.', tr: "Je ne l'ai pas vue depuis trois mois." },
          ]
        },
        {
          title: '🔍 Since vs For : le test pour ne plus confondre',
          content: 'Demandez-vous : est-ce un <strong>point dans le temps</strong> (→ since) ou une <strong>période / durée mesurée</strong> (→ for) ?',
          rows: [
            { en: 'since Monday (un jour précis = point)', tr: 'depuis lundi → since' },
            { en: 'for three days (nombre de jours = durée)', tr: 'depuis trois jours → for' },
            { en: 'since the accident (événement = point)', tr: "depuis l'accident → since" },
            { en: 'for a long time (durée indéfinie)', tr: 'depuis longtemps → for' },
            { en: 'since I was a child (moment passé = point)', tr: "depuis que j'étais enfant → since" },
          ]
        },
        {
          title: '❓ How long have you...?',
          content: 'Pour demander la durée, utilisez <strong>How long + present perfect</strong>. La réponse utilise <em>since</em> ou <em>for</em>.',
          rows: [
            { en: 'How long have you been here? — Since March. / For six months.', tr: 'Depuis combien de temps es-tu là ? — Depuis mars. / Depuis six mois.' },
            { en: 'How long have they been married? — For thirty years.', tr: 'Depuis combien de temps sont-ils mariés ? — Depuis trente ans.' },
            { en: 'How long has she known him? — Since they were at university.', tr: 'Depuis combien de temps le connaît-elle ? — Depuis l\'université.' },
          ]
        },
        {
          title: '🔙 Ago — il y a... (point dans le passé)',
          content: '<strong>Ago</strong> est différent de <em>since/for</em> : il indique quand quelque chose s\'est passé, pas depuis combien de temps ça dure. Utilisé avec le <strong>past simple</strong> (pas le present perfect).',
          rows: [
            { en: 'I moved here <strong>five years ago</strong>. (past simple)', tr: "Je me suis installé ici il y a cinq ans." },
            { en: 'She left <strong>two hours ago</strong>.', tr: "Elle est partie il y a deux heures." },
            { en: 'Compare: I moved here 5 years ago. / I have lived here for 5 years.', tr: "Je me suis installé il y a 5 ans. / J'habite ici depuis 5 ans." },
          ]
        },
      ],
      commonErrors: [
        '❌ "I live here since 2015" → ✅ "I HAVE LIVED here since 2015" (present perfect obligatoire)',
        '❌ "since five years" → ✅ "for five years" (durée → for)',
        '❌ "for Monday" → ✅ "since Monday" (point de départ → since)',
        '❌ "I came here since two years" → ✅ "I came here two years AGO"',
        '❌ "How long do you wait?" → ✅ "How long HAVE you BEEN waiting?"',
      ],
      tips: [
        '🔑 Since + POINT DE DÉPART (date, événement, moment)',
        '🔑 For + DURÉE (nombre d\'heures/jours/ans/longtemps)',
        '💡 Since et for → toujours avec present perfect (ou past perfect)',
        '💡 Ago → toujours avec past simple, pas de present perfect',
        '⚠️ "Since" peut aussi être suivi d\'une proposition : "since she arrived", "since I was young"',
      ],
      summary: [
        'Since + point de départ précis (2015, Monday, last year, childhood...)',
        'For + durée totale (five years, two hours, a long time)',
        'How long + present perfect → réponse avec since ou for',
        'Ago ≠ since/for : ago = il y a... (avec past simple, pas present perfect)',
      ],
    },
    mg: {
      intro: "<strong>Since</strong> sy <strong>for</strong> dia ampiasaina miaraka amin'ny present perfect hilazana ny faharetan'ny zavatra. <strong>Since</strong> = fotoana nanombohan'ny (aiza no nanombohany) / <strong>for</strong> = halavan'ny fotoana (efa ahodinkodina).",
      sections: [
        {
          title: '📍 Since — nanomboka rahoviana?',
          content: '<strong>Since + fotoana voafaritra</strong> : daty, ora, zava-nitranga. Nanomboka tamin\'io fotoana io ka hatramin\'izao.',
          rows: [
            { en: 'I have lived here since 2015.', tr: 'Monina eto aho hatry ny 2015.' },
            { en: "She hasn't eaten since yesterday morning.", tr: 'Tsy nisakafo izy hatry ny omaly maraina.' },
            { en: 'We have been friends since primary school.', tr: 'Namana izahay hatry ny sekoly fototra.' },
          ]
        },
        {
          title: '⏱️ For — halavan\'ny fotoana',
          content: '<strong>For + halava</strong> : andro, herinandro, taona... Refesina ny halavan\'ny fotoana, tsy ny toerana nanombohany.',
          rows: [
            { en: 'I have lived here for five years.', tr: 'Monina eto aho nandritra ny dimy taona.' },
            { en: "He has been ill for a long time.", tr: 'Narary izy nandritra ny fotoana ela.' },
            { en: "She has been waiting for two hours.", tr: 'Niandry izy nandritra ny ora roa.' },
          ]
        },
        {
          title: '❓ How long have you...?',
          content: 'Fanontaniana momba ny halavan\'ny fotoana : <strong>How long + present perfect</strong>.',
          rows: [
            { en: 'How long have you been here? — Since March. / For six months.', tr: 'Nandritra ny fotoana hoatrinona no teto ianao? — Hatry ny Martsa. / Nandritra ny enim-bolana.' },
          ]
        },
        {
          title: '🔙 Ago — taloha... (past simple)',
          content: '<strong>Ago</strong> = nilaza ny fotoana nisian\'ny zavatra taloha. Ampiasaina miaraka amin\'ny past simple (tsy present perfect).',
          rows: [
            { en: 'I moved here five years ago.', tr: 'Nifindra monina eto aho dimy taona lasa izay.' },
            { en: 'She left two hours ago.', tr: 'Niala izy ora roa lasa izay.' },
          ]
        },
      ],
      commonErrors: [
        '❌ "I live here since 2015" → ✅ "I HAVE LIVED here since 2015"',
        '❌ "since five years" → ✅ "for five years"',
        '❌ "for Monday" → ✅ "since Monday"',
      ],
      tips: [
        '🔑 Since + fotoana voafaritra | For + halavan\'ny fotoana',
        '💡 Since sy for → present perfect foana',
        '💡 Ago → past simple foana',
      ],
      summary: [
        'Since + fotoana voafaritra (2015, Alatsinainy, fahazazana...)',
        'For + halavan\'ny fotoana (dimy taona, ora roa, ela)',
        'Ago ≠ since/for : ago = past simple',
      ],
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // PASTCONTINUOUS — B1
  // ══════════════════════════════════════════════════════════════════════
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
            { en: 'I was sleeping when the phone rang.', tr: 'Natory aho fony niantso ny finaonan\'i.' },
            { en: 'She was studying all evening.', tr: 'Nianatra hariva manontolo izy.' },
            { en: 'They were playing when it rained.', tr: 'Nilalao izy ireo fony nilatsaka ny orana.' },
          ]
        },
        {
          title: 'Past Continuous + Past Simple (while / when)',
          content: '',
          rows: [
            { en: 'While I was cooking, the light went out.', tr: 'Raha nanao sakafo aho, dia niala ny jiro.' },
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

  // ══════════════════════════════════════════════════════════════════════
  // FUTURECONTINUOUS — A2–B1
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'futureContinuous',
    title: 'Future Continuous',
    icon: '🔮',
    level: 'B1',
    fr: {
      intro: "Le <strong>Future Continuous</strong> (<em>will be + -ing</em>) décrit une action qui sera <strong>en cours</strong> à un moment futur. Il donne l'idée d'une action qui aura commencé et ne sera pas encore terminée.",
      sections: [
        {
          title: 'Forme affirmative',
          content: 'Sujet + <strong>will be</strong> + verbe-<strong>ing</strong>',
          rows: [
            { en: 'I will be studying at 8pm.', tr: 'J\'étudierai (en train d\'étudier) à 20h.' },
            { en: 'She will be sleeping when you arrive.', tr: 'Elle sera en train de dormir quand tu arriveras.' },
            { en: 'They will be travelling all week.', tr: 'Ils seront en train de voyager toute la semaine.' },
          ]
        },
        {
          title: 'Forme négative',
          content: 'Sujet + <strong>won\'t be</strong> + verbe-<strong>ing</strong>',
          rows: [
            { en: 'I won\'t be working tomorrow.', tr: 'Je ne serai pas en train de travailler demain.' },
            { en: 'She won\'t be waiting for us.', tr: 'Elle ne sera pas en train de nous attendre.' },
          ]
        },
        {
          title: 'Forme interrogative',
          content: '<strong>Will</strong> + sujet + <strong>be</strong> + verbe-<strong>ing</strong> ?',
          rows: [
            { en: 'Will you be joining us for dinner?', tr: 'Seras-tu en train de dîner avec nous ?' },
            { en: 'Will she be studying when I call?', tr: 'Sera-t-elle en train d\'étudier quand j\'appelle ?' },
          ]
        },
        {
          title: 'Quand l\'utiliser ?',
          content: 'Action en cours à un moment précis du futur · Action interrompue par une autre · Demande polie sur les plans de quelqu\'un',
          rows: [
            { en: 'At 9am tomorrow, I will be having breakfast.', tr: 'Demain à 9h, je serai en train de prendre mon petit-déjeuner.' },
            { en: 'Will you be using the car this evening?', tr: 'Est-ce que tu utiliseras la voiture ce soir ? (demande polie)' },
          ]
        },
      ],
      commonErrors: [
        '❌ "I will studying" → ✅ "I will be studying" (be obligatoire)',
        '❌ "I will be study" → ✅ "I will be studying" (-ing obligatoire)',
      ],
      tips: [
        '🔑 Structure : will be + -ing',
        '💡 Contraste : "I will write the report" (simple) vs "I will be writing the report all day" (en cours)',
        '🙏 Demande polie : "Will you be needing the computer?" = moins direct que "Will you need it?"',
      ],
      summary: ['Affirmatif : will be + -ing', 'Négatif : won\'t be + -ing', 'Interrogatif : Will + sujet + be + -ing ?', 'Usage : action en cours à un moment futur précis'],
    },
    mg: {
      intro: "Ny <strong>Future Continuous</strong> (will be + -ing) dia milaza hetsika izay <strong>ho eo am-pandehanana</strong> amin\'ny fotoana iray ho avy.",
      sections: [
        {
          title: 'Endrika fanambara',
          content: 'Sujet + <strong>will be</strong> + matoanteny-<strong>ing</strong>',
          rows: [
            { en: 'I will be studying at 8pm.', tr: 'Eo am-pianakaviana aho amin\'ny 8 ora hariva.' },
            { en: 'She will be sleeping when you arrive.', tr: 'Ho eo am-patory izy rehefa tonga ianao.' },
          ]
        },
        {
          title: 'Endrika fandavana sy fanontaniana',
          content: 'Négatif : won\'t be + -ing · Fanontaniana : Will + sujet + be + -ing?',
          rows: [
            { en: "I won't be working tomorrow.", tr: 'Tsy ho eo am-panao asa aho rahampitso.' },
            { en: 'Will you be joining us for dinner?', tr: 'Ho hiara-misakafo aminay ve ianao?' },
          ]
        },
      ],
      commonErrors: ['❌ "I will studying" → ✅ "I will be studying"'],
      tips: ['will be + -ing foana', 'Milaza hetsika ho eo am-pandehanana amin\'ny fotoana iray'],
      summary: ['will be + -ing (fanambara)', 'won\'t be + -ing (fandavana)', 'Will + sujet + be + -ing? (fanontaniana)'],
    },
  },

  // ══════════════════════════════════════════════════════════════════════
  // TIMEMARKERS — B1
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'timeMarkers',
    title: 'Time Markers — Indicateurs de Temps',
    icon: '⏱️',
    level: 'B1',
    fr: {
      intro: "Les <strong>indicateurs de temps</strong> sont des mots qui signalent automatiquement quel temps verbal utiliser. Les apprendre est le moyen le plus rapide de maîtriser le choix des temps en anglais.",
      sections: [
        {
          title: 'Past Simple — actions passées terminées',
          content: 'Mots clés : <strong>yesterday, ago, last, in</strong> (année passée), <strong>when</strong> (ponctuel)',
          rows: [
            { en: 'I saw him yesterday.', tr: 'Je l\'ai vu hier.' },
            { en: 'She left two hours ago.', tr: 'Elle est partie il y a deux heures.' },
            { en: 'We met last summer.', tr: 'Nous nous sommes rencontrés l\'été dernier.' },
            { en: 'He was born in 1990.', tr: 'Il est né en 1990.' },
          ]
        },
        {
          title: 'Present Perfect — lien avec le présent',
          content: 'Mots clés : <strong>already, yet, just, since, for, ever, never, recently</strong>',
          rows: [
            { en: 'I have already eaten.', tr: 'J\'ai déjà mangé.' },
            { en: 'She hasn\'t arrived yet.', tr: 'Elle n\'est pas encore arrivée.' },
            { en: 'He has just called.', tr: 'Il vient juste d\'appeler.' },
            { en: 'They have lived here since 2010.', tr: 'Ils habitent ici depuis 2010.' },
            { en: 'I have worked here for five years.', tr: 'Je travaille ici depuis cinq ans.' },
          ]
        },
        {
          title: 'Present Simple — habitudes, vérités',
          content: 'Mots clés : <strong>always, usually, often, sometimes, rarely, never, every</strong>',
          rows: [
            { en: 'She always wakes up early.', tr: 'Elle se lève toujours tôt.' },
            { en: 'I usually have lunch at noon.', tr: 'Je déjeune généralement à midi.' },
            { en: 'They never eat meat.', tr: 'Ils ne mangent jamais de viande.' },
          ]
        },
        {
          title: 'Future — actions à venir',
          content: 'Mots clés : <strong>tomorrow, next, soon, in</strong> (futur), <strong>tonight, later</strong>',
          rows: [
            { en: 'I will call you tomorrow.', tr: 'Je t\'appellerai demain.' },
            { en: 'She is going to travel next week.', tr: 'Elle va voyager la semaine prochaine.' },
            { en: 'The match starts soon.', tr: 'Le match commence bientôt.' },
          ]
        },
      ],
      commonErrors: [
        '❌ "I have seen him yesterday" → ✅ "I saw him yesterday" (yesterday → Past Simple)',
        '❌ "She already ate" → ✅ "She has already eaten" (already → Present Perfect)',
        '❌ "I know him since 5 years" → ✅ "I have known him for 5 years" (for → Present Perfect)',
      ],
      tips: [
        '📅 yesterday/ago/last → Past Simple',
        '🔗 already/yet/just/since/for → Present Perfect',
        '🔄 always/usually/every → Present Simple',
        '🚀 tomorrow/next/soon → Future (will ou going to)',
      ],
      summary: ['Past Simple : yesterday / ago / last / when', 'Present Perfect : already / yet / just / since / for', 'Present Simple : always / usually / every', 'Future : tomorrow / next / soon'],
    },
    mg: {
      intro: "Ny <strong>indicateurs de temps</strong> dia teny izay milaza avy hatrany ny temps verbal tokony ampiasaina. Tsotra ny fitsipika.",
      sections: [
        {
          title: 'Past Simple — hetsika vita',
          content: 'Teny fototra : yesterday, ago, last, when',
          rows: [
            { en: 'I saw him yesterday.', tr: 'Nahita azy aho omaly.' },
            { en: 'She left two hours ago.', tr: 'Lasa izy roa ora lasa izay.' },
          ]
        },
        {
          title: 'Present Perfect — mifandray amin\'ny ankehitriny',
          content: 'Teny fototra : already, yet, just, since, for',
          rows: [
            { en: 'I have already eaten.', tr: 'Efa nihinana aho.' },
            { en: 'She hasn\'t arrived yet.', tr: 'Tsy tonga mbola izy.' },
          ]
        },
        {
          title: 'Present Simple — zava-mahazatra',
          content: 'Teny fototra : always, usually, often, never, every',
          rows: [
            { en: 'She always wakes up early.', tr: 'Mifohaza marobe foana izy.' },
          ]
        },
        {
          title: 'Future — hetsika ho avy',
          content: 'Teny fototra : tomorrow, next, soon, tonight',
          rows: [
            { en: 'I will call you tomorrow.', tr: 'Hantsaina ianao aho rahampitso.' },
          ]
        },
      ],
      commonErrors: ['❌ "I have seen him yesterday" → ✅ "I saw him yesterday"', '❌ "already ate" → ✅ "has already eaten"'],
      tips: ['yesterday/ago/last → Past Simple', 'already/yet/just/since/for → Present Perfect', 'always/every → Present Simple', 'tomorrow/next/soon → Future'],
      summary: ['Past Simple : yesterday / ago / last', 'Present Perfect : already / yet / just / since / for', 'Future : tomorrow / next / soon'],
    },
  },

  // ══════════════════════════════════════════════════════════════════════
  // RELATIVECLAUSES — A2–B1
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'relativeClauses',
    title: 'Propositions relatives — Relative Clauses',
    icon: '🔗',
    level: 'A2–B1',
    fr: {
      intro: "Une <strong>proposition relative</strong> est une mini-phrase qui complète un nom ou un pronom pour donner plus d'informations. Elle est introduite par un <em>pronom relatif</em> : who, which, that, whose, where, when. C'est une structure essentielle pour enrichir son expression.",
      sections: [
        {
          title: '👤 Who — pour les personnes',
          content: '<strong>Who</strong> remplace une personne (sujet ou objet de la relative). En langue soutenue, <em>whom</em> est utilisé quand le relatif est objet.',
          rows: [
            { en: 'The man <strong>who</strong> called you is my uncle.', tr: "L'homme qui t'a appelé est mon oncle. (sujet)" },
            { en: 'She is the teacher <strong>who</strong> helped me most.', tr: "C'est la professeure qui m'a le plus aidé." },
            { en: 'The students <strong>who</strong> study hard succeed.', tr: 'Les étudiants qui travaillent dur réussissent.' },
            { en: 'The doctor <strong>who(m)</strong> I saw yesterday was kind.', tr: 'Le médecin que j\'ai vu hier était aimable. (objet)' },
          ]
        },
        {
          title: '🔧 Which / That — pour les choses et animaux',
          content: '<strong>Which</strong> et <strong>that</strong> remplacent une chose ou un animal. <em>That</em> est plus courant en anglais américain informel ; <em>which</em> est utilisé en anglais soutenu et dans les relatives non-définissantes.',
          rows: [
            { en: 'The book <strong>which/that</strong> I read was amazing.', tr: 'Le livre que j\'ai lu était extraordinaire.' },
            { en: 'The car <strong>which/that</strong> broke down is being repaired.', tr: 'La voiture qui est tombée en panne est en réparation.' },
            { en: 'This is the film <strong>which/that</strong> won the Oscar.', tr: "C'est le film qui a gagné l'Oscar." },
            { en: 'The house <strong>which/that</strong> he built is beautiful.', tr: 'La maison qu\'il a construite est belle.' },
          ]
        },
        {
          title: '🏠 Whose — possession',
          content: '<strong>Whose</strong> exprime la possession (= dont le/la). Il peut s\'appliquer aux personnes et aux choses.',
          rows: [
            { en: 'The student <strong>whose</strong> bag was stolen came to see me.', tr: "L'étudiant dont le sac a été volé est venu me voir." },
            { en: 'She is the woman <strong>whose</strong> daughter won the competition.', tr: 'C\'est la femme dont la fille a gagné le concours.' },
            { en: 'The scientist <strong>whose</strong> discovery changed medicine received an award.', tr: 'Le scientifique dont la découverte a changé la médecine a reçu un prix.' },
            { en: 'That\'s the company <strong>whose</strong> products we use every day.', tr: "C'est la société dont nous utilisons les produits chaque jour." },
          ]
        },
        {
          title: '📍 Where / When — lieux et moments',
          content: '<strong>Where</strong> remplace un lieu ; <strong>when</strong> remplace un moment dans le temps.',
          rows: [
            { en: "That's the school <strong>where</strong> I studied.", tr: "C'est l'école où j'ai étudié." },
            { en: 'I remember the day <strong>when</strong> we first met.', tr: 'Je me souviens du jour où nous nous sommes rencontrés.' },
            { en: 'Paris is a city <strong>where</strong> you can find excellent food.', tr: "Paris est une ville où l'on peut trouver une excellente cuisine." },
            { en: "There was a time <strong>when</strong> people didn't have smartphones.", tr: "Il fut un temps où les gens n'avaient pas de smartphones." },
          ]
        },
        {
          title: '✂️ Définissante vs non-définissante (virgules !)',
          content: '<strong>Définissante</strong> : identifie lequel (pas de virgules, essentielle). <strong>Non-définissante</strong> : ajoute une info supplémentaire sur quelque chose déjà identifié (entre virgules, peut être retirée). <em>That</em> n\'est JAMAIS utilisé dans une relative non-définissante.',
          rows: [
            { en: 'The man <strong>who stole the bag</strong> was caught. (defining — which man?)', tr: "L'homme qui a volé le sac a été arrêté. (définissante — lequel ?)" },
            { en: 'My brother, <strong>who lives in Paris</strong>, is a doctor. (non-defining — extra info)', tr: 'Mon frère, qui vit à Paris, est médecin. (non-définissante — info extra)' },
            { en: 'The film <strong>which/that</strong> I liked best was short. (defining)', tr: 'Le film que j\'ai préféré était court. (définissante)' },
            { en: 'Avatar, <strong>which</strong> broke box office records, is visually stunning. (non-defining)', tr: "Avatar, qui a battu des records au box-office, est visuellement époustouflant." },
          ]
        },
        {
          title: '🗑️ Omission du pronom relatif (objet)',
          content: 'Quand le pronom relatif est <strong>objet</strong> de la relative (pas sujet), on peut l\'omettre en anglais parlé et informel. Cela s\'appelle un "contact clause".',
          rows: [
            { en: 'The book (that/which) I bought is great. → The book I bought is great.', tr: 'Le livre que j\'ai acheté est excellent.' },
            { en: 'The man (who/whom) I met yesterday is a teacher.', tr: "L'homme que j'ai rencontré hier est enseignant." },
            { en: 'Compare: The man WHO called (subject → cannot omit)', tr: "L'homme QUI a appelé (sujet → impossible d'omettre)" },
          ]
        },
      ],
      commonErrors: [
        '❌ "The man which called" → ✅ "The man WHO called" (who pour les personnes)',
        '❌ "The book who I read" → ✅ "The book WHICH/THAT I read" (which/that pour les choses)',
        '❌ "My brother, that lives in Paris" → ✅ "My brother, WHO lives in Paris" (that interdit après virgule)',
        '❌ "The woman whose her bag..." → ✅ "The woman whose bag..." (whose déjà possessif, pas de "her")',
        '❌ "This is the place where I studied there" → ✅ "...where I studied" (pas de there en plus)',
      ],
      tips: [
        '🔑 Who = personnes · Which/That = choses/animaux · Whose = possession · Where = lieu · When = moment',
        '🔑 Définissante (sans virgule) = identifie, essentielle | Non-définissante (avec virgule) = info en plus',
        '💡 "That" peut remplacer who ou which dans les relatives DÉFINISSANTES seulement',
        '💡 Le pronom relatif peut être omis quand il est OBJET (pas sujet) de la relative',
        '⚠️ Jamais "that" dans une relative non-définissante (après virgule)',
      ],
      summary: [
        'Who = personnes | Which/That = choses, animaux | Whose = possession',
        'Where = lieux | When = moments',
        'Définissante (sans virgule) : identifie quel/quelle',
        'Non-définissante (avec virgule) : info supplémentaire — that interdit',
        'Omission possible quand le relatif est objet',
      ],
    },
    mg: {
      intro: "Ny <strong>proposition relative</strong> dia fehezanteny fohy manampy fanazavana momba ny anarana. Ampiasaina ny pronoms relatifs : who, which, that, whose, where, when.",
      sections: [
        {
          title: '👤 Who — olona',
          content: '<strong>Who</strong> = solon\'ny olona amin\'ny antokon-teny relatifa.',
          rows: [
            { en: 'The man who called you is my uncle.', tr: 'Ilay lehilahy niantso anao dia rahalahy aho.' },
            { en: 'She is the teacher who helped me most.', tr: 'Izy no mpampianatra nanahy ahy indrindra.' },
            { en: 'The students who study hard succeed.', tr: 'Ireo mpianatra mampiasa hery dia mahatratra sehatra.' },
          ]
        },
        {
          title: '🔧 Which / That — zavatra sy biby',
          content: '<strong>Which</strong> sy <strong>that</strong> = solon\'ny zavatra na biby.',
          rows: [
            { en: 'The book which/that I read was amazing.', tr: 'Ny boky novakiko dia nahagaga.' },
            { en: 'The car which broke down is being repaired.', tr: 'Ny fiara nisy fahavoazana dia amboarina.' },
          ]
        },
        {
          title: '🏠 Whose — fananan\'',
          content: '<strong>Whose</strong> = fanehoana an\'ny fanana. Ampiasaina na amin\'ny olona na zavatra.',
          rows: [
            { en: 'The student whose bag was stolen came to see me.', tr: 'Ilay mpianatra nangalarina ny santaranany dia tonga hitako.' },
            { en: 'She is the woman whose daughter won.', tr: 'Izy no vehivavy nandresany ny zananivavy.' },
          ]
        },
        {
          title: '✂️ Mameha (tsy misy koma) vs Fanampiny (misy koma)',
          content: '<strong>Mameha</strong> : tsy misy koma — mamaritra izay lazaina. <strong>Fanampiny</strong> : misy koma — fanampiny fotsiny. That dia tsy ampiasaina amin\'ny fanampiny.',
          rows: [
            { en: 'The man who stole the bag was caught. (defining)', tr: 'Ilay lehilahy nangalarina ny kitapo dia nosamborina. (mameha)' },
            { en: 'My brother, who lives in Paris, is a doctor. (non-defining)', tr: 'Ny rahalahy, izay monina any Paris, dia dokotera. (fanampiny)' },
          ]
        },
      ],
      commonErrors: [
        '❌ "The man which called" → ✅ "The man WHO called"',
        '❌ "The book who I read" → ✅ "The book WHICH/THAT I read"',
        '❌ "My brother, that lives..." → ✅ "My brother, WHO lives..."',
      ],
      tips: [
        '🔑 Who = olona | Which/That = zavatra | Whose = fanana | Where = toerana | When = fotoana',
        '💡 That dia tsy ampiasaina aorian\'ny koma',
      ],
      summary: [
        'Who = olona | Which/That = zavatra/biby | Whose = fanana',
        'Where = toerana | When = fotoana',
        'Mameha (tsy misy koma) vs Fanampiny (misy koma)',
      ],
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // PASTPERFECT — B1
  // ══════════════════════════════════════════════════════════════════════
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
            { en: 'They hadn\'t eaten, so they were very hungry.', tr: 'Tsy nihinana izy ireo, ka noana izy ireo dia nihinana.' },
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

  // ══════════════════════════════════════════════════════════════════════
  // FUTUREPERFECT — B1
  // ══════════════════════════════════════════════════════════════════════
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
            { en: 'By 2030, I will have finished university.', tr: 'Amin\'ny 2030, efa vita ny fianarako any amin\'ny oniversite.' },
            { en: 'She will have cooked dinner by the time you arrive.', tr: 'Efa vita ny sakafo hariva fony tonga ianao.' },
            { en: 'Will you have finished the report by Friday?', tr: 'Vita ny tatitra alohan\'ny Zoma ve?' },
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

  // ══════════════════════════════════════════════════════════════════════
  // PASSIVEVOICE — B1
  // ══════════════════════════════════════════════════════════════════════
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
            { en: 'This road will be built next year.', tr: 'Ny lalana ity dia haorina taona ho avy.' },
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
        'Amin\'ny malagasy: ny "-ana" / "-ina" amin\'ny faranan\'ny verbe = passive matetika',
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

  // ══════════════════════════════════════════════════════════════════════
  // CONDITIONALS — B1
  // ══════════════════════════════════════════════════════════════════════
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
            { en: 'If I study, I will pass.', tr: 'Raha mianatra aho, dia hahajoro.' },
            { en: 'If it rains tomorrow, we won\'t go out.', tr: 'Raha milatsaka ny orana rahampitso, tsy hivoaka izahay.' },
          ]
        },
        {
          title: 'Type 2 — tsy misy / soso-kevitra',
          content: '<strong>If + past simple, would + infinitif.</strong>',
          rows: [
            { en: 'If I had a car, I would drive to work.', tr: 'Raha manana fiara aho, dia hamily mankany amin\'ny asako.' },
            { en: 'If I were you, I would study more.', tr: 'Raha ianao aho, dia hianatra mafy kokoa.' },
          ]
        },
        {
          title: 'Type 3 — tsoa-panahy tamin\'ny lasa',
          content: '<strong>If + past perfect, would have + participe passé.</strong>',
          rows: [
            { en: 'If I had studied, I would have passed.', tr: 'Raha nianatra aho, dia nohajoro.' },
            { en: 'If she had left earlier, she wouldn\'t have missed the bus.', tr: 'Raha nivoaka mialoha izy, tsy diso lamasinina.' },
          ]
        },
      ],
      commonErrors: [
        '❌ Type 2 : "If I was" → ✅ "If I WERE" (were ho an\'ny olon-drehetra)',
        '❌ "Raha hianatra aho dia hahajoro" → misy "will/would" ilaina amin\'ny fehezanteny faharoa',
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

  // ══════════════════════════════════════════════════════════════════════
  // USEDTO — B1
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'usedTo',
    title: 'Used to — Habitudes passées',
    icon: '🔙',
    level: 'B1',
    fr: {
      intro: "<strong>Used to + infinitif</strong> décrit des habitudes ou des états passés qui <em>n'existent plus</em> aujourd'hui. C'est une structure typique du B1 qui permet de parler du passé de manière nuancée, en insistant sur le contraste avec le présent.",
      sections: [
        {
          title: '📐 Formation : used to + infinitif',
          content: '<strong>Sujet + used to + verbe base</strong>. Affirmatif : "used to". Négatif : "didn\'t use to" (pas "didn\'t used to"). Question : "Did + sujet + use to + verbe ?" (pas "used to").',
          rows: [
            { en: 'I <strong>used to</strong> play football every day.', tr: 'Je jouais au football tous les jours. (habitude passée, plus maintenant)' },
            { en: 'She <strong>used to</strong> live in Antananarivo.', tr: 'Elle vivait à Antananarivo. (état passé)' },
            { en: 'I <strong>didn\'t use to</strong> like vegetables.', tr: "Je n'aimais pas les légumes. (mais maintenant oui)" },
            { en: '<strong>Did</strong> you <strong>use to</strong> play an instrument?', tr: 'Est-ce que tu jouais d\'un instrument ?' },
            { en: 'There <strong>used to be</strong> a cinema here.', tr: "Il y avait un cinéma ici. (il n'y en a plus)" },
          ]
        },
        {
          title: '🎯 Quand utiliser used to',
          content: 'Utilisez <em>used to</em> pour : (1) des habitudes régulières dans le passé qui ont cessé, (2) des états passés permanents qui n\'existent plus, (3) insister sur le contraste avec la situation actuelle.',
          rows: [
            { en: 'I used to smoke, but I stopped ten years ago.', tr: 'Je fumais, mais j\'ai arrêté il y a dix ans.' },
            { en: 'We used to go to the beach every summer.', tr: "Nous allions à la plage chaque été." },
            { en: 'This area used to be a forest.', tr: 'Cette zone était une forêt. (maintenant c\'est urbanisé)' },
            { en: 'She didn\'t use to speak English well, but now she\'s fluent.', tr: 'Elle ne parlait pas bien anglais, mais maintenant elle est courante.' },
          ]
        },
        {
          title: '🔄 Would pour les habitudes passées',
          content: '<strong>Would + infinitif</strong> peut aussi exprimer des habitudes passées répétées (mais pas des états). Plus formel, surtout à l\'écrit.',
          rows: [
            { en: "Every summer, we would go to the beach. (habit, formal)", tr: "Chaque été, nous allions à la plage. (habitude répétée → would OK)" },
            { en: 'This area would be a forest. ❌ (state, not habit)', tr: 'État → on ne peut pas utiliser would ici (seulement used to)' },
            { en: 'My grandfather would tell stories every night.', tr: 'Mon grand-père racontait des histoires chaque soir.' },
          ]
        },
        {
          title: '⚠️ Attention : be/get used to (ne pas confondre !)',
          content: "<strong>Be used to</strong> = être habitué à (présent, pas passé) · <strong>Get used to</strong> = s'habituer à (processus). Ces deux structures sont suivies d'un <em>nom ou gérondif</em>, pas d'un infinitif.",
          rows: [
            { en: 'I am <strong>used to</strong> waking up early. (= I\'m accustomed)', tr: "Je suis habitué à me lever tôt. (état actuel)" },
            { en: 'She is <strong>getting used to</strong> the new schedule.', tr: "Elle s'habitue au nouvel horaire. (processus en cours)" },
            { en: 'I <strong>used to</strong> wake up early. (= past habit)', tr: "Je me levais tôt autrefois. (habitude passée)" },
            { en: 'Be careful: used to + INF (past) vs be used to + ING (present)', tr: 'used to + infinitif (passé) ≠ be used to + gérondif (présent)' },
          ]
        },
      ],
      commonErrors: [
        "❌ \"I didn't used to\" → ✅ \"I didn't USE TO\" (après did, on revient à la forme base)",
        "❌ \"Did you used to...?\" → ✅ \"Did you USE TO...?\"",
        "❌ \"I used to going\" → ✅ \"I used to GO\" (infinitif sans TO après used to... wait: used to + INF)",
        "❌ \"I am used to wake up\" → ✅ \"I am used to WAKING up\" (be used to + gérondif)",
        "❌ Utiliser used to pour le présent → used to = UNIQUEMENT pour le passé",
      ],
      tips: [
        '🔑 Used to + INF = habitude/état PASSÉ qui n\'existe plus',
        '🔑 Be used to + ING = être habitué à (présent)',
        '🔑 Get used to + ING = s\'habituer à (processus)',
        '💡 Would peut remplacer used to pour les habitudes (mais PAS les états)',
        '⚠️ Négatif/question : "did + use to" (pas "used to") — la forme change !',
      ],
      summary: [
        'Used to + INF : habitudes ou états passés qui n\'existent plus',
        'Négatif : didn\'t use to | Question : Did...use to?',
        'Would + INF : habitudes répétées passées (formel, pas les états)',
        'Be used to + ING : être habitué à | Get used to + ING : s\'habituer à',
      ],
    },
    mg: {
      intro: "<strong>Used to + infinitif</strong> dia ampiasaina hilazana ny fandavanana sy ny toetry ny zavatra taloha izay <em>tsy misy intsony ankehitriny</em>. Tena mahasoa amin'ny fitantarana ny lasa amin'ny fomba mazava.",
      sections: [
        {
          title: '📐 Fomba : used to + veribe',
          content: '<strong>Sujet + used to + veribe</strong>. Fandavana : didn\'t use to. Fanontaniana : Did... use to?',
          rows: [
            { en: 'I used to play football every day.', tr: 'Nitana baolina kely andro aman\'alina aho taloha.' },
            { en: 'She used to live in Antananarivo.', tr: 'Nonina tany Antananarivo izy taloha.' },
            { en: "I didn't use to like vegetables.", tr: 'Tsy tia legioma aho taloha.' },
            { en: 'Did you use to play an instrument?', tr: 'Nitana zava-maneno ve ianao taloha?' },
          ]
        },
        {
          title: '⚠️ Aza diso: be/get used to',
          content: '<strong>Be used to + ING</strong> = zatra amin\'ny (ankehitriny). <strong>Get used to + ING</strong> = miezaka zatra. Tsy mitovy amin\'ny used to + INF.',
          rows: [
            { en: 'I am used to waking up early.', tr: 'Zatra mifoha maraina aho. (ankehitriny)' },
            { en: "She's getting used to the new schedule.", tr: 'Miezaka zatra ny fandaharam-potoana vaovao izy.' },
            { en: 'Compare: I used to wake up early. (past habit)', tr: 'Nifoha maraina aho taloha. (fandavanana lasa)' },
          ]
        },
      ],
      commonErrors: [
        "❌ \"I didn't used to\" → ✅ \"I didn't USE TO\"",
        "❌ \"I am used to wake up\" → ✅ \"I am used to WAKING up\"",
      ],
      tips: [
        '🔑 Used to + INF = fandavanana lasa tsy misy intsony',
        '🔑 Be used to + ING = zatra amin\'ny (ankehitriny)',
        '⚠️ Fandavana : didn\'t use to (tsy "didn\'t used to")',
      ],
      summary: [
        'Used to + INF : fandavanana na toetry ny zavatra lasa',
        'Fandavana : didn\'t use to | Fanontaniana : Did...use to?',
        'Be used to + ING : zatra | Get used to + ING : miezaka zatra',
      ],
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // VERBSOFSTATE — B1
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'verbsOfState',
    title: 'Verbes d\'état & Gérondif / Infinitif',
    icon: '🎭',
    level: 'B1',
    fr: {
      intro: "Certains verbes en anglais expriment un <strong>état mental ou physique</strong>, pas une action en cours. Ces <em>stative verbs</em> ne s'utilisent normalement <em>pas</em> avec les temps continus (progressifs). Par ailleurs, de nombreux verbes peuvent être suivis d'un <strong>gérondif</strong> ou d'un <strong>infinitif</strong> — le choix dépend du verbe.",
      sections: [
        {
          title: '🧠 Verbes d\'état : jamais (ou rarement) au continu',
          content: 'Ces verbes décrivent des états stables (pensées, sentiments, perceptions, possession) et ne s\'utilisent pas au présent continu. On dit "I know", pas "I am knowing".',
          rows: [
            { en: 'I <strong>know</strong> the answer. ✅ / I am knowing ❌', tr: 'Je connais la réponse.' },
            { en: 'She <strong>believes</strong> in hard work. ✅', tr: 'Elle croit au travail acharné.' },
            { en: 'He <strong>wants</strong> a new job. ✅ / He is wanting ❌', tr: 'Il veut un nouveau travail.' },
            { en: 'They <strong>own</strong> a house. ✅ / They are owning ❌', tr: 'Ils possèdent une maison.' },
            { en: 'I <strong>love</strong> music. ✅ / I am loving ❌ (en général)', tr: "J'aime la musique." },
          ]
        },
        {
          title: '📋 Catégories de verbes d\'état',
          content: 'Il existe 5 catégories principales. Mémorisez les plus courants de chaque groupe.',
          rows: [
            { en: 'Mental states: know, believe, understand, remember, forget, think (opinion), mean', tr: 'États mentaux : savoir, croire, comprendre, se souvenir, oublier' },
            { en: 'Emotions/preferences: love, like, hate, dislike, prefer, want, need, wish', tr: 'Émotions/préférences : aimer, préférer, vouloir, avoir besoin' },
            { en: 'Senses: see, hear, smell, taste, feel (perception involontaire)', tr: 'Sens : voir, entendre, sentir, goûter (perception involontaire)' },
            { en: 'Possession: have, own, belong, contain, include', tr: 'Possession : avoir, posséder, appartenir, contenir' },
            { en: 'Appearance/existence: seem, appear, look (adjective), be, exist', tr: 'Apparence/existence : sembler, paraître, être, exister' },
          ]
        },
        {
          title: '⚡ Exceptions : sens différents (action vs état)',
          content: 'Attention : certains verbes d\'état peuvent s\'utiliser au continu, mais avec un sens <strong>différent</strong> (action au lieu d\'état).',
          rows: [
            { en: 'I <strong>think</strong> he\'s right. (opinion → état) / I\'m <strong>thinking</strong> about it. (action mentale)', tr: "Je pense qu'il a raison. / Je réfléchis. (deux sens différents !)" },
            { en: 'I <strong>have</strong> a car. (possession) / I\'m <strong>having</strong> lunch. (action = manger)', tr: "J'ai une voiture. / Je déjeune." },
            { en: 'She <strong>looks</strong> tired. (état) / She\'s <strong>looking</strong> for her keys. (action)', tr: "Elle a l'air fatiguée. / Elle cherche ses clés." },
            { en: 'It <strong>smells</strong> good. (perception) / I\'m <strong>smelling</strong> the flowers. (action délibérée)', tr: 'Ça sent bon. / Je sens les fleurs.' },
            { en: "I'm <strong>loving</strong> this holiday! (informal/emphatic, now OK in modern English)", tr: 'Je kiffe vraiment ces vacances ! (usage moderne acceptable)' },
          ]
        },
        {
          title: '➕ Verbes + Gérondif (V-ing)',
          content: "Ces verbes sont <strong>toujours</strong> suivis d'un gérondif (ING), jamais d'un infinitif : enjoy, finish, avoid, mind, suggest, recommend, imagine, consider, keep, stop, deny, admit, miss.",
          rows: [
            { en: 'I enjoy <strong>swimming</strong>. (pas "to swim")', tr: "J'aime nager." },
            { en: 'She finished <strong>writing</strong> the essay.', tr: "Elle a fini d'écrire l'essai." },
            { en: 'He avoided <strong>making</strong> eye contact.', tr: "Il a évité de croiser les regards." },
            { en: 'Do you mind <strong>opening</strong> the window?', tr: "Ça te dérange d'ouvrir la fenêtre ?" },
            { en: 'They suggested <strong>taking</strong> a break.', tr: "Ils ont suggéré de faire une pause." },
          ]
        },
        {
          title: '🔛 Verbes + Infinitif (to + verbe)',
          content: "Ces verbes sont suivis d'un infinitif : want, decide, hope, plan, promise, refuse, agree, manage, afford, expect, need, offer, choose, try (attempt), learn, fail.",
          rows: [
            { en: 'She wants <strong>to study</strong> abroad.', tr: "Elle veut étudier à l'étranger." },
            { en: 'He decided <strong>to leave</strong> early.', tr: "Il a décidé de partir tôt." },
            { en: 'They managed <strong>to finish</strong> on time.', tr: "Ils ont réussi à finir à temps." },
            { en: "I can't afford <strong>to buy</strong> a new phone.", tr: "Je n'ai pas les moyens d'acheter un nouveau téléphone." },
            { en: 'She refused <strong>to answer</strong>.', tr: "Elle a refusé de répondre." },
          ]
        },
        {
          title: '↔️ Verbes + Gérondif OU Infinitif (sens différents)',
          content: "Certains verbes acceptent les deux, mais parfois avec un sens différent : <strong>stop, remember, forget, try, regret</strong>.",
          rows: [
            { en: 'I stopped <strong>smoking</strong>. / I stopped <strong>to smoke</strong>.', tr: "J'ai arrêté de fumer. / Je me suis arrêté pour fumer. (deux sens!)" },
            { en: 'Remember <strong>to lock</strong> the door! (reminder for future)', tr: "N'oublie pas de fermer la porte ! (rappel pour le futur)" },
            { en: 'I remember <strong>locking</strong> the door. (memory of past action)', tr: "Je me souviens d'avoir fermé la porte. (souvenir)" },
            { en: 'She tried <strong>to open</strong> the jar. (attempt) / Try <strong>adding</strong> more salt. (experiment)', tr: "Elle a essayé d'ouvrir le pot. / Essaie d'ajouter du sel." },
          ]
        },
      ],
      commonErrors: [
        '❌ "I am knowing the answer" → ✅ "I know the answer" (stative verb)',
        '❌ "She is believing it" → ✅ "She believes it"',
        '❌ "I enjoy to swim" → ✅ "I enjoy swimming" (enjoy + ING)',
        '❌ "She avoided to look" → ✅ "She avoided looking" (avoid + ING)',
        '❌ "I want going" → ✅ "I want to go" (want + INF)',
      ],
      tips: [
        '🔑 Stative verbs (know, believe, love, own, seem...) → pas de forme continue en général',
        '🔑 Enjoy, avoid, finish, mind, keep, miss, suggest → toujours + ING',
        '🔑 Want, decide, hope, refuse, manage, afford → toujours + infinitif',
        '💡 Stop/remember/forget + ING (action passée) vs + INF (futur/but)',
        '⚠️ Certains verbes ont deux sens : "I have a car" (état) vs "I\'m having lunch" (action)',
      ],
      summary: [
        'Stative verbs : jamais (ou rarement) au continu — know, believe, want, love, own...',
        'Verbes + ING : enjoy, avoid, finish, mind, suggest, keep, miss...',
        'Verbes + INF : want, decide, hope, promise, refuse, manage, afford...',
        'Stop/remember/forget : + ING = action passée | + INF = but/futur',
      ],
    },
    mg: {
      intro: "Ny <strong>verbes d'état</strong> dia matoanteny maneho toetry ny saina na vatan'olona, tsy hetsika. Ireny matoanteny ireny dia tsy ampiasaina amin'ny temps continus amin'ny ankamaroany.",
      sections: [
        {
          title: '🧠 Matoanteny toetra : tsy ampiasaina amin\'ny continu',
          content: 'Know, believe, understand, want, love, have (fanana), seem... — tsy lazaina amin\'ny forme continue.',
          rows: [
            { en: 'I know the answer. ✅ / I am knowing ❌', tr: 'Fantatro ny valiny.' },
            { en: 'She wants a new job. ✅ / She is wanting ❌', tr: 'Mitady asa vaovao izy.' },
            { en: 'They own a house. ✅ / They are owning ❌', tr: 'Manana trano izy ireo.' },
          ]
        },
        {
          title: '➕ Matoanteny + ING',
          content: 'Ireto matoanteny ireto dia tsy maintsy followed by ING : enjoy, avoid, finish, mind, suggest, keep, miss.',
          rows: [
            { en: "I enjoy swimming.", tr: 'Tiako ny filomanosana.' },
            { en: "She finished writing.", tr: 'Vita ny nanoratany.' },
            { en: "He avoided making eye contact.", tr: 'Nisoroka ny nandredreka maso izy.' },
          ]
        },
        {
          title: '🔛 Matoanteny + Infinitif',
          content: 'Want, decide, hope, refuse, manage, afford... — followed by infinitif.',
          rows: [
            { en: "She wants to study abroad.", tr: 'Te hianatra any ivelany izy.' },
            { en: "He decided to leave early.", tr: 'Nanapa-kevitra niala maraina izy.' },
          ]
        },
        {
          title: '↔️ Matoanteny misy hevitr\'isa roa',
          content: 'Stop, remember, forget + ING (hetsika lasa) vs + INF (tanjon\'ny ho avy).',
          rows: [
            { en: 'I stopped smoking. (hetsika nijanona)', tr: 'Nijanona nisotro sigara aho.' },
            { en: 'I stopped to smoke. (najanona mba hisotro sigara)', tr: 'Najanona aho mba hisotro sigara.' },
          ]
        },
      ],
      commonErrors: [
        '❌ "I am knowing" → ✅ "I know"',
        '❌ "I enjoy to swim" → ✅ "I enjoy swimming"',
        '❌ "I want going" → ✅ "I want to go"',
      ],
      tips: [
        '🔑 Know, believe, want, love, own... → tsy continu',
        '🔑 Enjoy, avoid, finish... → + ING foana',
        '🔑 Want, decide, hope... → + infinitif foana',
      ],
      summary: [
        'Matoanteny toetra : tsy continu — know, believe, want, love, own...',
        '+ ING : enjoy, avoid, finish, mind, suggest...',
        '+ INF : want, decide, hope, refuse, manage...',
      ],
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // TENSECHOOSER — B1
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'tenseChooser',
    title: 'Choosing the Right Tense — Choisir le bon temps',
    icon: '🎯',
    level: 'B1',
    fr: {
      intro: "Choisir le bon temps verbal est souvent difficile. Les <strong>indicateurs temporels</strong> (time markers) sont la clé : chaque groupe de mots signaux est associé à un temps précis. Maîtriser ces associations te permettra d\'utiliser les temps automatiquement.",
      sections: [
        {
          title: 'Past Simple — indicateurs',
          content: 'yesterday · ago · last… · in + année · when I was…',
          rows: [
            { en: 'I met her yesterday at the market.', tr: 'Je l\'ai rencontrée hier au marché.' },
            { en: 'He left two hours ago.', tr: 'Il est parti il y a deux heures.' },
            { en: 'We went to the beach last summer.', tr: 'Nous sommes allés à la plage l\'été dernier.' },
            { en: 'She was born in 2005.', tr: 'Elle est née en 2005.' },
          ]
        },
        {
          title: 'Present Perfect — indicateurs',
          content: 'already · yet · just · since · for · ever · never · recently · so far',
          rows: [
            { en: 'I have already eaten lunch.', tr: 'J\'ai déjà déjeuné.' },
            { en: 'Have you finished your homework yet?', tr: 'Tu as déjà fini tes devoirs ?' },
            { en: 'She has just arrived home.', tr: 'Elle vient juste d\'arriver à la maison.' },
            { en: 'He has lived here since 2020.', tr: 'Il habite ici depuis 2020.' },
            { en: 'We have studied English for three years.', tr: 'Nous étudions l\'anglais depuis trois ans.' },
          ]
        },
        {
          title: 'Present Simple — indicateurs',
          content: 'every day/week · always · usually · often · never · on Mondays',
          rows: [
            { en: 'I go to school every day.', tr: 'Je vais à l\'école tous les jours.' },
            { en: 'She always drinks coffee in the morning.', tr: 'Elle boit toujours du café le matin.' },
            { en: 'They play football on Sundays.', tr: 'Ils jouent au foot le dimanche.' },
          ]
        },
        {
          title: 'Future (will / going to) — indicateurs',
          content: 'tomorrow · next… · soon · in + durée future',
          rows: [
            { en: 'She will call you tomorrow morning.', tr: 'Elle t\'appellera demain matin.' },
            { en: 'We are going to travel next month.', tr: 'Nous allons voyager le mois prochain.' },
            { en: 'He will be back in two days.', tr: 'Il sera de retour dans deux jours.' },
          ]
        },
      ],
      commonErrors: [
        '"I have seen him yesterday." ✗ → "I saw him yesterday." ✓ (yesterday = Past Simple)',
        '"I already ate." ✗ → "I have already eaten." ✓ (already = Present Perfect)',
        '"I know him since 5 years." ✗ → "I have known him for 5 years." ✓ (for + durée = PP)',
      ],
      tips: [
        '"since" + moment précis (since 2020, since Monday) · "for" + durée (for 3 years)',
        'Moment précis et terminé → Past Simple · Lien avec le présent → Present Perfect',
        '"ago" = il y a (passé) · "in 2 days" = dans 2 jours (futur)',
      ],
      summary: [
        'yesterday / ago / last / in 2005 → Past Simple',
        'already / yet / just / since / for → Present Perfect',
        'every day / always / usually → Present Simple',
        'tomorrow / next / soon / in 2 days → Future',
      ]
    },
    mg: {
      intro: "Ny fisaraham-potoana amin\'ny anglisy dia misy indicators (teny famantarana) manokana. Ireo teny ireo no mametra ny temps ampiasaina.",
      sections: [
        {
          title: 'Past Simple — indicators',
          content: 'yesterday · ago · last… · in + taona · when I was…',
          rows: [
            { en: 'I met her yesterday at the market.', tr: 'Nahita azy aho omaly teny an-tsena.' },
            { en: 'He left two hours ago.', tr: 'Nandeha izy efatra ora lasa izay.' },
            { en: 'We went to the beach last summer.', tr: 'Nankany an-dranomasina izahay ny lohataona lasa.' },
          ]
        },
        {
          title: 'Present Perfect — indicators',
          content: 'already · yet · just · since · for · ever · never · recently',
          rows: [
            { en: 'I have already eaten lunch.', tr: 'Efa nisakafo atoandro aho.' },
            { en: 'Have you finished your homework yet?', tr: 'Vita ny asanao ve?' },
            { en: 'She has just arrived home.', tr: 'Vao tonga an-trano izy.' },
            { en: 'He has lived here since 2020.', tr: 'Monina eto izy hatramin\'ny 2020.' },
            { en: 'We have studied English for three years.', tr: 'Nandalina anglisy izahay mandritra ny telo taona.' },
          ]
        },
        {
          title: 'Present Simple — indicators',
          content: 'every day · always · usually · often · never · on Sundays',
          rows: [
            { en: 'I go to school every day.', tr: 'Mankany sekoly aho isan\'andro.' },
            { en: 'She always drinks coffee in the morning.', tr: 'Mandrakariva misotro kafe maraina izy.' },
          ]
        },
        {
          title: 'Future — indicators',
          content: 'tomorrow · next… · soon · in + fotoana ho avy',
          rows: [
            { en: 'She will call you tomorrow morning.', tr: 'Hiantso anao izy rahampitso maraina.' },
            { en: 'We are going to travel next month.', tr: 'Handeha dia izahay ny volana ho avy.' },
          ]
        },
      ],
      commonErrors: [
        '"I have seen him yesterday." ✗ → "I saw him yesterday." ✓ (yesterday = Past Simple)',
        '"I already ate." ✗ → "I have already eaten." ✓ (already = Present Perfect)',
      ],
      tips: [
        '"since" + fotoana manokana (since 2020) · "for" + faharetan\'ny fotoana (for 3 years)',
        'Fotoana mifarana = Past Simple · Mifandray amin\'ny ankehitriny = Present Perfect',
      ],
      summary: [
        'yesterday / ago / last / in 2005 → Past Simple',
        'already / yet / just / since / for → Present Perfect',
        'every day / always / usually → Present Simple',
        'tomorrow / next / soon → Future',
      ]
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // REPORTEDSPEECH — B1
  // ══════════════════════════════════════════════════════════════════════
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
            { en: '"I worked hard." → He said he had worked hard.', tr: '"Niasa mafy aho." → Nilaza izy fa niasa mafy izy.' },
            { en: '"I will come." → She said she would come.', tr: '"Ho avy aho." → Nilaza izy fa ho avy izy.' },
          ]
        },
        {
          title: 'Fanontaniana tsy mivantana',
          content: '',
          rows: [
            { en: '"Are you ready?" → He asked if she was ready.', tr: '"Vonona ve ianao?" → Nanontany izy raha vonona izy.' },
            { en: '"Where do you live?" → She asked where he lived.', tr: '"Aiza no monina ianao?" → Nanontany izy hoe aiza no monina izy.' },
          ]
        },
        {
          title: 'Baiko sy fangatahana tsy mivantana',
          content: '',
          rows: [
            { en: '"Sit down!" → The teacher told us to sit down.', tr: '"Mipetraha!" → Nasain\'ny mpampianatra mipetraka izahay.' },
            { en: '"Please help me." → She asked him to help her.', tr: '"Ampio aho." → Nangataka azy hanampy azy izy.' },
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

  // ══════════════════════════════════════════════════════════════════════
  // CONNECTORS — B1
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'connectors',
    title: 'Connectors & Conjunctions — Connecteurs',
    icon: '🔗',
    level: 'B1',
    fr: {
      intro: "Les connecteurs et conjonctions permettent de relier des idées, d\'exprimer des causes, des contrastes ou des ajouts. Ils sont indispensables pour écrire et parler de façon fluide et structurée.",
      sections: [
        {
          title: 'Coordination (and, but, or, so)',
          content: 'Relient deux éléments ou propositions de même niveau.',
          rows: [
            { en: 'I like tea and coffee.', tr: 'J\'aime le thé et le café.' },
            { en: 'She is tired but she keeps working hard.', tr: 'Elle est fatiguée mais elle continue à travailler.' },
            { en: 'You can stay or leave now.', tr: 'Tu peux rester ou partir maintenant.' },
            { en: 'It was raining, so we stayed home.', tr: 'Il pleuvait, donc nous sommes restés à la maison.' },
          ]
        },
        {
          title: 'Cause & Résultat (because, since, therefore)',
          content: 'because / since → la cause · therefore / as a result → la conséquence',
          rows: [
            { en: 'I was late because the bus broke down.', tr: 'J\'étais en retard parce que le bus est tombé en panne.' },
            { en: 'Since it was cold outside, we put on our coats.', tr: 'Comme il faisait froid dehors, nous avons mis nos manteaux.' },
            { en: 'He studied very hard. Therefore, he passed the exam.', tr: 'Il a beaucoup étudié. Par conséquent, il a réussi.' },
          ]
        },
        {
          title: 'Contraste (although, however, nevertheless)',
          content: 'although + proposition · however / nevertheless en début de phrase (+ virgule)',
          rows: [
            { en: 'Although it was expensive, she bought it.', tr: 'Bien que ce soit cher, elle l\'a acheté.' },
            { en: 'I was very tired. However, I finished my homework.', tr: 'J\'étais très fatigué. Cependant, j\'ai fini mes devoirs.' },
            { en: 'The plan was risky. Nevertheless, they all agreed.', tr: 'Le plan était risqué. Néanmoins, ils ont tous accepté.' },
            { en: 'Even though it rained, we enjoyed the trip.', tr: 'Même s\'il a plu, nous avons profité du voyage.' },
          ]
        },
        {
          title: 'Addition (moreover, furthermore, in addition)',
          content: 'Ajoutent une information. Registre soutenu (surtout à l\'écrit).',
          rows: [
            { en: 'The hotel is clean. Moreover, it is very affordable.', tr: 'L\'hôtel est propre. De plus, il est abordable.' },
            { en: 'Furthermore, the location is excellent.', tr: 'En outre, l\'emplacement est excellent.' },
            { en: 'In addition to English, she also speaks Spanish.', tr: 'En plus de l\'anglais, elle parle aussi espagnol.' },
          ]
        },
      ],
      commonErrors: [
        '"Although she was tired, but she worked." ✗ → "Although she was tired, she worked." ✓ (pas de "but" après "although")',
        '"Because I was tired, so I slept." ✗ → "Because I was tired, I slept." ✓',
        '"However she was tired, she worked." ✗ → "Although she was tired, she worked." ✓ (however ≠ although)',
      ],
      tips: [
        '"So" = conséquence · "because" = cause',
        '"Although" + proposition complète des deux côtés ; jamais suivi de "but"',
        '"However" = début de nouvelle phrase ou après un point-virgule (registre soutenu)',
      ],
      summary: [
        'and / but / or / so → coordination simple',
        'because / since → cause ; therefore → conséquence',
        'although / even though → contraste (+ proposition) ; however → contraste (+ phrase)',
      ]
    },
    mg: {
      intro: "Ny connector sy conjonction dia teny mampifandray hevitra roa na misea. Ilaina indrindra amin\'ny soratra sy ny resaka voalamina.",
      sections: [
        {
          title: 'Coordination (and, but, or, so)',
          content: 'Mampifandray element na proposition amin\'ny ambaratonga mitovy.',
          rows: [
            { en: 'I like tea and coffee.', tr: 'Tia dite sy kafe aho.' },
            { en: 'She is tired but she keeps working hard.', tr: 'Vizana izy nefa mitohy miasa.' },
            { en: 'It was raining, so we stayed home.', tr: 'Nisy orana, koa nijanona tao an-trano izahay.' },
          ]
        },
        {
          title: 'Antony sy Vokatr\'izany (because, since, therefore)',
          content: 'because / since → ny antony · therefore → ny vokatr\'izany',
          rows: [
            { en: 'I was late because the bus broke down.', tr: 'Diso fotoana aho satria very ny bus.' },
            { en: 'He studied very hard. Therefore, he passed the exam.', tr: 'Nahery fianarana izy. Koa amin\'izany, nahita fandaharam-potoana izy.' },
          ]
        },
        {
          title: 'Fanoherana (although, however, nevertheless)',
          content: 'although + proposition · however / nevertheless eo am-piandohan\'ny fehezanteny',
          rows: [
            { en: 'Although it was expensive, she bought it.', tr: 'Na dia lafo aza, novidiny ihany.' },
            { en: 'I was very tired. However, I finished my homework.', tr: 'Vizana be aho. Kanefa, vita ny asako.' },
            { en: 'Even though it rained, we enjoyed the trip.', tr: 'Na dia nisy orana aza, nanana fialam-boly tsara izahay.' },
          ]
        },
        {
          title: 'Fanampiana (moreover, furthermore, in addition)',
          content: 'Manampy vaovao. Fampiasana amin\'ny ssoratra indrindra.',
          rows: [
            { en: 'The hotel is clean. Moreover, it is very affordable.', tr: 'Madio ny hotely. Ho fanampin\'izany, mora ny vidiny.' },
            { en: 'In addition to English, she also speaks Spanish.', tr: 'Ho fanampin\'ny anglisy, mahay espaniola koa izy.' },
          ]
        },
      ],
      commonErrors: [
        '"Although...but..." ✗ → "Although..." fotsiny ✓ (tsy mampifandray "but" aorian\'ny "although")',
        '"Because...so..." ✗ → "Because..." fotsiny ✓',
      ],
      tips: [
        '"So" = vokatr\'izany · "because" = antony',
        '"Although" + fehezanteny feno roa lafiny; tsy misy "but" aorian\'ny',
      ],
      summary: [
        'and / but / or / so → fampifandraisana tsotra',
        'because / since → antony ; therefore → vokatr\'izany',
        'although → fanoherana (+ fehezanteny) ; however → fanoherana (+ fehezanteny vaovao)',
      ]
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // PHRASALVERBS — B1–B2
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 'phrasalVerbs',
    title: 'Phrasal Verbs — Verbes à particule',
    icon: '💡',
    level: 'B1–B2',
    fr: {
      intro: "Un <strong>phrasal verb</strong> est formé d\'un verbe + une particule (adverbe ou préposition). Le sens est souvent totalement différent du verbe de base et ne peut pas être deviné. Ils sont très fréquents dans l\'anglais oral et écrit courant.",
      sections: [
        {
          title: 'Phrasal verbs essentiels — groupe 1 (10)',
          content: 'Les plus fréquents du quotidien.',
          rows: [
            { en: 'I get up at six every morning.', tr: 'get up = se lever' },
            { en: "Don't give up, keep trying!", tr: 'give up = abandonner' },
            { en: "I'm looking for my keys.", tr: 'look for = chercher' },
            { en: 'She looks after her little brother.', tr: 'look after = s\'occuper de' },
            { en: 'Turn on the light, please.', tr: 'turn on = allumer' },
            { en: 'Turn off the TV before bed.', tr: 'turn off = éteindre' },
            { en: 'Can you pick me up at the station?', tr: 'pick up = ramasser / aller chercher' },
            { en: "Put on your coat, it's cold outside.", tr: 'put on = mettre (un vêtement)' },
            { en: 'Take off your shoes at the door.', tr: 'take off = enlever (vêtement) / décoller' },
            { en: 'I woke up very late today.', tr: 'wake up = se réveiller' },
          ]
        },
        {
          title: 'Phrasal verbs essentiels — groupe 2 (10)',
          content: 'Dix phrasal verbs supplémentaires très fréquents.',
          rows: [
            { en: 'When will you come back home?', tr: 'come back = revenir / rentrer' },
            { en: 'They go out every Friday evening.', tr: 'go out = sortir' },
            { en: 'I need to find out the truth.', tr: 'find out = découvrir / apprendre' },
            { en: 'She set up her own business last year.', tr: 'set up = créer / mettre en place' },
            { en: 'The car broke down on the highway.', tr: 'break down = tomber en panne' },
            { en: 'We ran out of milk this morning.', tr: 'run out of = manquer de / ne plus avoir' },
            { en: 'They made up after the argument.', tr: 'make up = se réconcilier / inventer' },
            { en: 'The doctor carried out the tests carefully.', tr: 'carry out = effectuer / réaliser' },
            { en: 'Hold on, I will be right back.', tr: 'hold on = attendre / tenir bon' },
            { en: "Don't put off your homework until tomorrow.", tr: 'put off = remettre à plus tard' },
          ]
        },
        {
          title: 'Séparables vs. Inséparables',
          content: 'Séparable : l\'objet peut aller entre verbe et particule · Inséparable : l\'objet vient après',
          rows: [
            { en: 'Turn off the TV. OR Turn it off. (séparable)', tr: 'Éteins la télé. / Éteins-la. ✓' },
            { en: 'Look after the children. (inséparable)', tr: 'Occupe-toi des enfants. (jamais "look the children after")' },
            { en: 'Pick up the book. OR Pick it up. (séparable)', tr: 'Ramasse le livre. / Ramasse-le. ✓' },
          ]
        },
      ],
      commonErrors: [
        '"Turn off it." ✗ → "Turn it off." ✓ (pronom entre verbe et particule)',
        '"I look for it on the shelf." ✓ mais "I look for the book." ✓ aussi (look for = inséparable)',
        '"She gave up it." ✗ → "She gave it up." ✓ (give up = séparable)',
      ],
      tips: [
        'Avec un pronom (it, them, him), la particule vient TOUJOURS après : "turn it off" ✓',
        '"Run out of" et "look after" sont inséparables — l\'objet ne peut pas se glisser entre',
        'Apprends les phrasal verbs par phrases complètes, pas juste la traduction',
      ],
      summary: [
        'Phrasal verb = verbe + particule (sens nouveau à mémoriser)',
        'Séparable : "turn off the TV" / "turn it off"',
        'Inséparable : "look after the children" (jamais "look the children after")',
      ]
    },
    mg: {
      intro: "Ny <strong>phrasal verb</strong> = matoanteny + particule (adverbe na préposition). Ny heviny dia hafa tanteraka amin\'ny teny tsirairay, ka tsy maintsy hadinina tsirairay.",
      sections: [
        {
          title: 'Phrasal verbs lehibe indrindra — vondrona 1 (10)',
          content: 'Ny mahazatra indrindra amin\'ny andavanandro.',
          rows: [
            { en: 'I get up at six every morning.', tr: 'get up = mitsangana' },
            { en: "Don't give up, keep trying!", tr: 'give up = manafoana / miala amin\'ny ezaka' },
            { en: "I'm looking for my keys.", tr: 'look for = mitady' },
            { en: 'She looks after her little brother.', tr: 'look after = mikarakara' },
            { en: 'Turn on the light, please.', tr: 'turn on = mampirehitra' },
            { en: 'Turn off the TV before bed.', tr: 'turn off = mampivoaka' },
            { en: 'Can you pick me up at the station?', tr: 'pick up = maka / handeha haka' },
            { en: "Put on your coat, it's cold outside.", tr: 'put on = mitafy' },
            { en: 'I woke up very late today.', tr: 'wake up = mifohaza' },
          ]
        },
        {
          title: 'Phrasal verbs lehibe indrindra — vondrona 2 (10)',
          content: 'Folo phrasal verbs hafa mahasoa.',
          rows: [
            { en: 'When will you come back home?', tr: 'come back = miverina' },
            { en: 'They go out every Friday evening.', tr: 'go out = mivoaka' },
            { en: 'I need to find out the truth.', tr: 'find out = mahita / mahalala' },
            { en: 'The car broke down on the highway.', tr: 'break down = very' },
            { en: 'We ran out of milk this morning.', tr: 'run out of = lany / tsy ampy' },
            { en: 'Hold on, I will be right back.', tr: 'hold on = andraso' },
            { en: "Don't put off your homework until tomorrow.", tr: 'put off = mametraka ho rahampitso' },
          ]
        },
        {
          title: 'Azo zaraina sy tsy azo zaraina',
          content: 'Separable: ny objet azo apetraka eo anelanelan\'ny verbe sy particule · Inseparable: ny objet aorian\'ny particule foana',
          rows: [
            { en: 'Turn off the TV. OR Turn it off. (séparable)', tr: 'Mahazo zaraina: "turn it off" ✓' },
            { en: 'Look after the children. (inséparable)', tr: 'Tsy azo zaraina: "look after them" ✓' },
          ]
        },
      ],
      commonErrors: [
        '"Turn off it." ✗ → "Turn it off." ✓ (pronom eo anelanelan\'ny verbe sy particule)',
      ],
      tips: [
        'Amin\'ny pronom (it, them): ny particule aorian\'ny pronom foana: "turn it off" ✓',
        'Mianatra phrasal verbs amin\'ny fehezanteny feno, fa tsy hevitra fotsiny',
      ],
      summary: [
        'Phrasal verb = verbe + particule (hevitra vaovao)',
        'Séparable: "turn off the TV" / "turn it off"',
        'Inséparable: "look after the children"',
      ]
    }
  },

];

// ─── Natural textbook progression order ──────────────────────────────────────
// (Cambridge / Oxford English Grammar in Use style)
const _CHAPTER_ORDER = [
  'pronouns',              // A1 — subject/object pronouns first
  'toBe',                  // A1 — most basic verb
  'articles',              // A1 — a / an / the
  'plurals',               // A1 — singular → plural
  'therebeis',             // A1 — there is / there are
  'prepositions',          // A1–A2 — in/on/at/to/from
  'questions',             // A1–A2 — question words
  'presentSimple',         // A2 — first main tense
  'presentContinuous',     // A2 — contrast with present simple
  'interrogative',         // A2 — Yes/No & Wh- questions
  'imperatives',           // A2 — commands & suggestions
  'someAny',               // A2 — some / any / no
  'comparatives',          // A2 — taller / more interesting / best
  'irregularVerbs',        // A2 — needed for past simple
  'modals',                // A2 — can / should / must
  'possessives',           // A2 — my/mine, your/yours…
  'adverbs',               // A2 — always, quickly, well
  'pastSimple',            // A2–B1 — past tense
  'futureSimple',          // A2–B1 — will / going to
  'countableUncountable',  // A2–B1 — much/many/a lot of
  'presentPerfect',        // B1 — have / has + p.p.
  'pastContinuous',        // B1 — was/were + -ing
  'futureContinuous',      // B1 — will be + -ing
  'pastPerfect',           // B1 — had + p.p.
  'timeMarkers',           // B1 — yesterday/ago → already/yet/just
  'passiveVoice',          // B1 — is done / was done
  'connectors',            // B1 — and/but/because/although/however
  'tenseChooser',          // B1 — choosing the right tense
  'conditionals',          // B1–B2 — if clauses
  'reportedSpeech',        // B1–B2 — he said that…
  'phrasalVerbs',          // B1–B2 — get up / give up / look for
  'futurePerfect',         // B2 — will have done
];
bokyChapters.sort((a, b) => {
  const ai = _CHAPTER_ORDER.indexOf(a.id);
  const bi = _CHAPTER_ORDER.indexOf(b.id);
  return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
});

// ─── Chapter index for sidebar ───────────────────────────────────────────────
export const bokyIndex = bokyChapters.map(c => ({
  id: c.id,
  title: c.title,
  icon: c.icon,
  level: c.level,
}));
