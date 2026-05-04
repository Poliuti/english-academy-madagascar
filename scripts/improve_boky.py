#!/usr/bin/env python3
"""
improve_boky.py
────────────────
1. Adds 6 missing Boky chapters: adjectives, goingTo, sinceFor,
   relativeClauses, usedTo, verbsOfState (full bilingual content)
2. Expands thin existing chapters (therebeis, articles, plurals, imperatives, someAny)
3. Reorders bokyChapters in correct EFL textbook sequence
4. Updates theoryTopics in theory.js to match the same order
"""
import sys, re
sys.stdout.reconfigure(encoding='utf-8')

BOKY   = 'src/data/boky.js'
THEORY = 'src/data/theory.js'

# ═══════════════════════════════════════════════════════════════════════════════
# NEW CHAPTER CONTENT
# ═══════════════════════════════════════════════════════════════════════════════

NEW_CHAPTERS = {}

# ──────────────────────────────────────────────────────────────────────────────
NEW_CHAPTERS['adjectives'] = r"""
  // ══════════════════════════════════════════════════════════════════════════
  // ADJECTIVES — A1-A2
  // ══════════════════════════════════════════════════════════════════════════
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
"""

# ──────────────────────────────────────────────────────────────────────────────
NEW_CHAPTERS['goingTo'] = r"""
  // ══════════════════════════════════════════════════════════════════════════
  // GOING TO — A2
  // ══════════════════════════════════════════════════════════════════════════
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
"""

# ──────────────────────────────────────────────────────────────────────────────
NEW_CHAPTERS['sinceFor'] = r"""
  // ══════════════════════════════════════════════════════════════════════════
  // SINCE & FOR — B1
  // ══════════════════════════════════════════════════════════════════════════
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
"""

# ──────────────────────────────────────────────────────────────────────────────
NEW_CHAPTERS['relativeClauses'] = r"""
  // ══════════════════════════════════════════════════════════════════════════
  // RELATIVE CLAUSES — A2-B1
  // ══════════════════════════════════════════════════════════════════════════
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
"""

# ──────────────────────────────────────────────────────────────────────────────
NEW_CHAPTERS['usedTo'] = r"""
  // ══════════════════════════════════════════════════════════════════════════
  // USED TO — B1
  // ══════════════════════════════════════════════════════════════════════════
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
"""

# ──────────────────────────────────────────────────────────────────────────────
NEW_CHAPTERS['verbsOfState'] = r"""
  // ══════════════════════════════════════════════════════════════════════════
  // VERBS OF STATE — B1
  // ══════════════════════════════════════════════════════════════════════════
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
"""

# ═══════════════════════════════════════════════════════════════════════════════
# CORRECT EFL ORDER for bokyChapters
# ═══════════════════════════════════════════════════════════════════════════════

CORRECT_ORDER = [
    # A1
    'pronouns', 'toBe', 'articles', 'plurals', 'therebeis',
    'adjectives', 'possessives',
    # A1-A2
    'prepositions', 'questions', 'imperatives',
    # A2
    'presentSimple', 'presentContinuous', 'irregularVerbs',
    'pastSimple', 'futureSimple', 'goingTo',
    'comparatives', 'someAny', 'countableUncountable',
    'adverbs', 'modals', 'interrogative',
    # A2-B1
    'presentPerfect', 'sinceFor', 'pastContinuous',
    'futureContinuous', 'timeMarkers', 'relativeClauses',
    # B1
    'pastPerfect', 'futurePerfect', 'passiveVoice',
    'conditionals', 'usedTo', 'verbsOfState',
    'tenseChooser', 'reportedSpeech', 'connectors', 'phrasalVerbs',
]

# ═══════════════════════════════════════════════════════════════════════════════
# PARSER: extract chapter blocks from boky.js
# ═══════════════════════════════════════════════════════════════════════════════

def extract_chapter_blocks(content):
    """
    Extracts the text block for each chapter from bokyChapters.
    Returns dict: { id: block_string }
    """
    # Find start of array
    array_start = content.index('export const bokyChapters = [')
    bracket_open = content.index('[', array_start)

    chapters = {}
    depth = 0
    current_start = None
    in_string = False
    string_char = None
    i = bracket_open + 1
    n = len(content)

    while i < n:
        c = content[i]

        # Track string literals to avoid counting { } inside them
        if in_string:
            if c == '\\':
                i += 2
                continue
            if c == string_char:
                in_string = False
        else:
            if c in ('"', "'", '`'):
                in_string = True
                string_char = c
            elif c == '{':
                if depth == 0:
                    current_start = i
                depth += 1
            elif c == '}':
                depth -= 1
                if depth == 0 and current_start is not None:
                    block = content[current_start:i+1]
                    # Find id
                    m = re.search(r"id:\s*'(\w+)'", block)
                    if m:
                        chapters[m.group(1)] = block
                    current_start = None
            elif c == ']' and depth == 0:
                break  # end of bokyChapters array

        i += 1

    return chapters


def extract_prefix_suffix(content):
    """
    Returns (prefix, suffix) where:
    prefix = everything up to and including 'export const bokyChapters = ['
    suffix = everything from 'export const bokyIndex' onwards
    """
    array_start = content.index('export const bokyChapters = [')
    bracket_open = content.index('[', array_start)

    # Find end of array
    depth = 0
    in_string = False
    string_char = None
    i = bracket_open
    n = len(content)
    end_bracket = None

    while i < n:
        c = content[i]
        if in_string:
            if c == '\\':
                i += 2
                continue
            if c == string_char:
                in_string = False
        else:
            if c in ('"', "'", '`'):
                in_string = True
                string_char = c
            elif c == '[':
                depth += 1
            elif c == ']':
                depth -= 1
                if depth == 0:
                    end_bracket = i
                    break
        i += 1

    prefix = content[:bracket_open + 1]  # up to and including '['
    suffix_start = end_bracket  # from ']' onwards
    suffix = content[suffix_start:]
    return prefix, suffix


# ═══════════════════════════════════════════════════════════════════════════════
# IMPROVED THIN CHAPTERS (replacement content)
# ═══════════════════════════════════════════════════════════════════════════════

IMPROVED_THEREBEIS = r"""  {
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
  },"""


# ═══════════════════════════════════════════════════════════════════════════════
# ROBUST JS OBJECT EXTRACTOR (index-based, handles \' and \" correctly)
# ═══════════════════════════════════════════════════════════════════════════════

def _extract_js_object(s):
    """Extract the first complete {...} JS object from string s.
    Uses index-based loop so backslash escapes (\\', \\") are handled correctly."""
    try:
        start = s.index('{')
    except ValueError:
        return None
    depth = 0
    in_string = False
    sc = None
    i = start
    while i < len(s):
        c = s[i]
        if in_string:
            if c == '\\':
                i += 2   # skip escaped character — MUST use index loop for this
                continue
            elif c == sc:
                in_string = False
        else:
            if c in ('"', "'", '`'):
                in_string = True
                sc = c
            elif c == '{':
                depth += 1
            elif c == '}':
                depth -= 1
                if depth == 0:
                    return s[start:i + 1]
        i += 1
    return None


# ═══════════════════════════════════════════════════════════════════════════════
# MAIN
# ═══════════════════════════════════════════════════════════════════════════════

def main():
    with open(BOKY, encoding='utf-8') as f:
        content = f.read()

    # ── 1. Extract existing chapters ─────────────────────────────────────────
    existing = extract_chapter_blocks(content)
    print(f"Found {len(existing)} existing chapters: {list(existing.keys())}")

    # ── 2. Improve 'therebeis' ────────────────────────────────────────────────
    existing['therebeis'] = IMPROVED_THEREBEIS

    # ── 3. Add new chapters ───────────────────────────────────────────────────
    new_ids = list(NEW_CHAPTERS.keys())
    for nid in new_ids:
        if nid not in existing:
            block_str = NEW_CHAPTERS[nid].strip()
            block = _extract_js_object(block_str)
            if block:
                existing[nid] = block
                print(f"Added new chapter: {nid}")
            else:
                print(f"WARNING: Could not extract block for {nid}")
        else:
            print(f"Chapter already exists: {nid}")

    # ── 4. Rebuild in correct order ───────────────────────────────────────────
    prefix, suffix = extract_prefix_suffix(content)

    parts = [prefix + '\n\n']
    for chapter_id in CORRECT_ORDER:
        if chapter_id in existing:
            block = existing[chapter_id].strip()
            # Add comment header
            level_map = {
                'pronouns': 'A1', 'toBe': 'A1', 'articles': 'A1', 'plurals': 'A1',
                'therebeis': 'A1', 'adjectives': 'A1–A2', 'possessives': 'A2',
                'prepositions': 'A1–A2', 'questions': 'A1–A2', 'imperatives': 'A1–A2',
                'presentSimple': 'A2', 'presentContinuous': 'A2', 'irregularVerbs': 'A2',
                'pastSimple': 'A2', 'futureSimple': 'A2', 'goingTo': 'A2',
                'comparatives': 'A2', 'someAny': 'A2', 'countableUncountable': 'A2–B1',
                'adverbs': 'A2', 'modals': 'A2', 'interrogative': 'A2',
                'presentPerfect': 'A2–B1', 'sinceFor': 'B1', 'pastContinuous': 'B1',
                'futureContinuous': 'A2–B1', 'timeMarkers': 'B1', 'relativeClauses': 'A2–B1',
                'pastPerfect': 'B1', 'futurePerfect': 'B1', 'passiveVoice': 'B1',
                'conditionals': 'B1', 'usedTo': 'B1', 'verbsOfState': 'B1',
                'tenseChooser': 'B1', 'reportedSpeech': 'B1', 'connectors': 'B1',
                'phrasalVerbs': 'B1–B2',
            }
            level = level_map.get(chapter_id, '')
            comment = f"  // {'═'*70}\n  // {chapter_id.upper()} — {level}\n  // {'═'*70}\n"
            parts.append(comment + '  ' + block + ',\n\n')
        else:
            print(f"WARNING: Chapter '{chapter_id}' not found, skipping")

    # Close array
    parts.append(suffix)

    new_content = ''.join(parts)

    with open(BOKY, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"\nboky.js written ({len(new_content)} chars)")

    # ── 5. Reorder theoryTopics in theory.js ────────────────────────────────
    with open(THEORY, encoding='utf-8') as f:
        theory_content = f.read()

    # Find theoryTopics array and reorder it
    # The current order may differ from CORRECT_ORDER
    # We just need to move entries around to match
    # Using a simple approach: find all items in theoryTopics, sort by CORRECT_ORDER

    def reorder_theory_topics(tc):
        start_marker = 'export const theoryTopics = ['
        idx = tc.index(start_marker)
        bracket = tc.index('[', idx)
        # Find end of array
        depth = 0
        in_str = False
        sc = None
        end = None
        for i in range(bracket, len(tc)):
            c = tc[i]
            if in_str:
                if c == '\\': continue
                if c == sc: in_str = False
            else:
                if c in ('"', "'", '`'): in_str = True; sc = c
                elif c == '[': depth += 1
                elif c == ']':
                    depth -= 1
                    if depth == 0: end = i; break
        if not end:
            print("Could not find end of theoryTopics"); return tc

        array_content = tc[bracket+1:end]
        # Extract individual items: { id: 'xxx', ... }
        items = []
        item_depth = 0; item_start = None
        in_str2 = False; sc2 = None
        for i, c in enumerate(array_content):
            if in_str2:
                if c == '\\': continue
                if c == sc2: in_str2 = False
            else:
                if c in ('"', "'", '`'): in_str2 = True; sc2 = c
                elif c == '{':
                    if item_depth == 0: item_start = i
                    item_depth += 1
                elif c == '}':
                    item_depth -= 1
                    if item_depth == 0 and item_start is not None:
                        items.append(array_content[item_start:i+1])
                        item_start = None

        # Build id → item dict
        item_dict = {}
        for item in items:
            m = re.search(r"id:\s*'(\w+)'", item)
            if m: item_dict[m.group(1)] = item

        # Reconstruct in correct order
        new_items = []
        for cid in CORRECT_ORDER:
            if cid in item_dict:
                new_items.append('  ' + item_dict[cid])
        # Add any items not in CORRECT_ORDER (shouldn't happen, but just in case)
        for k, v in item_dict.items():
            if k not in CORRECT_ORDER:
                new_items.append('  ' + v)

        new_array = '\n' + ',\n'.join(new_items) + ',\n'
        return tc[:bracket+1] + new_array + tc[end:]

    theory_content = reorder_theory_topics(theory_content)
    with open(THEORY, 'w', encoding='utf-8') as f:
        f.write(theory_content)
    print("theory.js theoryTopics reordered")

    print("\n✅ Done. Run node to verify syntax.")


if __name__ == '__main__':
    main()
