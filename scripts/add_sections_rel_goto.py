"""
Add relativeClauses (who/which/that/whose/where) and goingTo (future with going to)
to theory.js and exercises.js.
"""
import sys, os
sys.stdout.reconfigure(encoding='utf-8')

BASE = os.path.join(os.path.dirname(__file__), '..')
THEORY_PATH    = os.path.join(BASE, 'src', 'data', 'theory.js')
EXERCISES_PATH = os.path.join(BASE, 'src', 'data', 'exercises.js')

# ─────────────────────────────────────────────────────────────────────────────
# 1. Theory sections
# ─────────────────────────────────────────────────────────────────────────────
NEW_THEORY = r"""
  relativeClauses: {
    id: 'relativeClauses',
    title: 'Les Propositions Relatives',
    icon: '🔗',
    level: 'A2–B1',
    subtitle: 'Who, which, that, whose, where, when',
    malgasyNote: 'Fehezanteny mampifandray: izay, izay nanapaka, ny toerana...',
    sections: [
      {
        title: '🧍 Who — pour les personnes',
        content: '<strong>Who</strong> remplace un nom de personne dans la proposition relative',
        examples: [
          { en: 'The man <strong>who</strong> called you is my uncle.', fr: 'L\'homme qui t\'a appelé est mon oncle.' },
          { en: 'The students <strong>who</strong> study hard succeed.', fr: 'Les étudiants qui travaillent dur réussissent.' },
          { en: 'She is the teacher <strong>who</strong> helped me most.', fr: 'C\'est la professeure qui m\'a le plus aidé.' },
        ]
      },
      {
        title: '🪑 Which — pour les choses et animaux',
        content: '<strong>Which</strong> remplace un nom de chose ou d\'animal',
        examples: [
          { en: 'The book <strong>which</strong> I read was amazing.', fr: 'Le livre que j\'ai lu était incroyable.' },
          { en: 'The car <strong>which</strong> broke down is being repaired.', fr: 'La voiture qui est tombée en panne est en réparation.' },
          { en: 'This is the film <strong>which</strong> won the Oscar.', fr: 'C\'est le film qui a gagné l\'Oscar.' },
        ]
      },
      {
        title: '🔄 That — universel (personnes + choses)',
        content: '<strong>That</strong> peut remplacer "who" ou "which" dans les propositions relatives définissantes (restrictives)',
        examples: [
          { en: 'The man <strong>that</strong> called you is my uncle.', fr: '(= who) L\'homme qui t\'a appelé...' },
          { en: 'The book <strong>that</strong> I read was amazing.', fr: '(= which) Le livre que j\'ai lu...' },
          { en: '⚠️ "That" ne peut pas remplacer "which" dans les relatives non-restrictives.', fr: 'Londres, which is the capital, is beautiful. (pas "that")' },
        ]
      },
      {
        title: '🏠 Whose / Where / When',
        content: '<strong>Whose</strong> = dont (possession) | <strong>Where</strong> = où | <strong>When</strong> = quand/où',
        examples: [
          { en: 'The student <strong>whose</strong> bag was stolen came to see me.', fr: 'L\'étudiant dont le sac a été volé est venu me voir.' },
          { en: 'That\'s the school <strong>where</strong> I studied.', fr: 'C\'est l\'école où j\'ai étudié.' },
          { en: 'I remember the day <strong>when</strong> we first met.', fr: 'Je me souviens du jour où nous nous sommes rencontrés.' },
        ]
      },
      {
        title: '⚠️ Relative définissante vs non-définissante',
        content: '<strong>Définissante</strong> (pas de virgule) : identifie le nom. <strong>Non-définissante</strong> (avec virgule) : ajoute une info',
        examples: [
          { en: 'The man <strong>who</strong> stole the bag was caught. (qui? → identifie)', fr: 'L\'homme qui a volé le sac a été attrapé.' },
          { en: 'My brother, <strong>who</strong> lives in Paris, is a doctor. (info supplémentaire)', fr: 'Mon frère, qui vit à Paris, est médecin.' },
          { en: '⚠️ Non-définissante → jamais "that", toujours "who/which"', fr: 'Mon frère, that... (incorrect !)' },
        ]
      },
    ],
    tips: [
      '🔑 Who → personnes | Which → choses/animaux | That → personnes + choses (restrictives)',
      '🔑 Whose → possession ("dont") | Where → lieu | When → moment',
      '💡 "That" n\'est JAMAIS utilisé dans une relative non-définissante (avec virgules)',
      '⚠️ Le pronom relatif peut être omis quand il est objet : "The book I read" = "The book that I read"',
    ]
  },

  goingTo: {
    id: 'goingTo',
    title: 'Futur avec Going To',
    icon: '🚀',
    level: 'A2',
    subtitle: 'Plans, intentions et prédictions basées sur des indices',
    malgasyNote: 'Zavatra hokasaina na efa voalamina ho avy',
    sections: [
      {
        title: '✅ Forme affirmative',
        content: 'Sujet + <strong>am/is/are going to</strong> + verbe infinitif',
        examples: [
          { en: 'I <strong>am going to</strong> visit my family this weekend.', fr: 'Je vais rendre visite à ma famille ce week-end.' },
          { en: 'She <strong>is going to</strong> study medicine.', fr: 'Elle va étudier la médecine.' },
          { en: 'They <strong>are going to</strong> build a new school.', fr: 'Ils vont construire une nouvelle école.' },
        ]
      },
      {
        title: '❌ Forme négative',
        content: 'Sujet + <strong>am/is/are not going to</strong> + verbe infinitif',
        examples: [
          { en: 'I <strong>\'m not going to</strong> eat meat anymore.', fr: 'Je ne vais plus manger de viande.' },
          { en: 'He <strong>isn\'t going to</strong> come to the party.', fr: 'Il ne va pas venir à la fête.' },
        ]
      },
      {
        title: '❓ Forme interrogative',
        content: '<strong>Am/Is/Are</strong> + sujet + <strong>going to</strong> + verbe ?',
        examples: [
          { en: '<strong>Are</strong> you <strong>going to</strong> apply for the job?', fr: 'Est-ce que tu vas postuler pour le poste ?' },
          { en: '<strong>Is</strong> she <strong>going to</strong> move abroad?', fr: 'Est-ce qu\'elle va partir à l\'étranger ?' },
        ]
      },
      {
        title: '🆚 Going to vs Will',
        content: 'Deux futurs, deux usages différents',
        examples: [
          { en: 'I <strong>\'m going to</strong> study tonight. (plan déjà décidé)', fr: 'Je vais étudier ce soir. (décision déjà prise)' },
          { en: 'I <strong>\'ll</strong> help you if you want. (décision spontanée)', fr: 'Je t\'aiderai si tu veux. (décision au moment où on parle)' },
          { en: 'Look at those clouds — it <strong>\'s going to</strong> rain! (preuve visible)', fr: 'Regardez ces nuages — il va pleuvoir !' },
          { en: 'I think it <strong>will</strong> rain tomorrow. (prédiction sans preuve)', fr: 'Je pense qu\'il pleuvra demain.' },
        ]
      },
    ],
    tips: [
      '🔑 Going to = plan décidé à l\'avance ou prédiction avec preuve visible',
      '🔑 Will = décision spontanée ou prédiction sans preuve',
      '💡 Formes contractées : I\'m going to / She\'s going to / We\'re going to',
      '⚠️ "Gonna" = forme parlée très familière de "going to" (à éviter à l\'écrit)',
    ]
  },

"""

# ─────────────────────────────────────────────────────────────────────────────
# 2. theoryTopics entries
# ─────────────────────────────────────────────────────────────────────────────
NEW_THEORY_TOPICS = """
  { id: 'relativeClauses', label: 'Propositions Relatives',         icon: '🔗',   level: 'A2–B1' },
  { id: 'goingTo',         label: 'Futur avec Going To',            icon: '🚀',   level: 'A2' },"""

# ─────────────────────────────────────────────────────────────────────────────
# 3. Boky chapters
# ─────────────────────────────────────────────────────────────────────────────
NEW_BOKY = r"""
  {
    id: 'mg_relativeClauses',
    grammarRef: 'relativeClauses',
    title: 'Relative Clauses',
    titleMg: 'Fehezanteny Mampifandray',
    icon: '🔗',
    level: 'A2–B1',
    explanation: 'Ny fehezanteny mampifandray (relative clauses) dia ampiasaina hanazavana na hamarihana ny anarana teo aloha. Ny pronoms relatifs: who (olona), which (zavatra), that (olona na zavatra), whose (fananana), where (toerana).',
    rows: [
      {
        label: 'Who (olona)',
        structure: 'nom (olona) + who + verbe',
        example_en: 'The teacher who helped me is kind.',
        example_mg: 'Ny mpampianatra izay nanampy ahy dia tsara fanahy.',
        note: '"izay" ny malagasy = who/which/that',
      },
      {
        label: 'Which (zavatra)',
        structure: 'nom (zavatra) + which + verbe/sujet+verbe',
        example_en: 'The book which I read was interesting.',
        example_mg: 'Ny boky izay namakiako dia nahafinaritra.',
        note: '"izay namakiako" = that I read',
      },
      {
        label: 'Whose (fananana)',
        structure: 'nom + whose + nom (fananana)',
        example_en: 'The student whose bag was stolen...',
        example_mg: 'Ny mpianatra izay nangalarina ny entany...',
        note: '"izay nangalarina ny entany" = whose bag was stolen',
      },
    ],
    tipsMg: [
      '"izay" ny malagasy = who, which, that amin\'ny anglisy',
      'Who → olona | which → zavatra | that → roa azo',
      'Whose → fananana ("ny ... izay")',
    ],
  },

  {
    id: 'mg_goingTo',
    grammarRef: 'goingTo',
    title: 'Going To',
    titleMg: 'Futur amin\'ny Going To',
    icon: '🚀',
    level: 'A2',
    explanation: 'Ny "going to" dia ampiasaina hilazana ny drafitra na fikasana efa voalamina. Ny malagasy dia tsy manana temps ho an\'ny ho avy avy hatrany, fa ampiasaina "hoe" na "ho" alohan\'ny matoanteny.',
    rows: [
      {
        label: 'Fomba fanaovana (+)',
        structure: 'am/is/are + going to + verbe',
        example_en: 'I am going to study tonight.',
        example_mg: 'Hianatra aho anio alina.',
        note: '"ho" + matoanteny ny malagasy',
      },
      {
        label: 'Fandavana (−)',
        structure: 'am/is/are + not going to + verbe',
        example_en: "She isn't going to come.",
        example_mg: 'Tsy ho avy izy.',
        note: '"tsy ho" = not going to',
      },
      {
        label: 'Going to vs Will',
        structure: 'going to = drafitra | will = fanapahan-kevitra ara-dalana',
        example_en: "I'm going to visit Paris. (plan) / I'll help you. (spontaneous)",
        example_mg: 'Hitsidika an\'i Paris aho. / Hanampy anao aho.',
        note: 'going to = voalamina | will = amin\'izao fotoana izao',
      },
    ],
    tipsMg: [
      '"Going to" = fikasana efa voalamina talohan\'ny fotoana resahina',
      '"Will" = fanapahan-kevitra raisina amin\'izao fotoana izao na faminaniana tsotra',
      'Fampiasana ny "gonna" amin\'ny teny fitenenana: "I\'m gonna go" = I\'m going to go',
    ],
  },

"""

# ─────────────────────────────────────────────────────────────────────────────
# 4. Exercises (36 each = 12 per level)
# ─────────────────────────────────────────────────────────────────────────────
NEW_EXERCISES = r"""
// ═══════════════════════════════════════════════════════════════
// relativeClauses + goingTo — 12 exercises per level
// ═══════════════════════════════════════════════════════════════

exercises.relativeClauses = [
  // L1 — 12 multiple-choice / fill-blank / word-order
  {id:'rel_1_01',type:'multiple-choice',diffLevel:1,
   instruction:'Choisissez la bonne réponse.',
   question:'The woman ___ lives next door is a doctor.',
   options:['who','which','whose','where'],answer:'who',
   hint:'"woman" = personne → who',explanation:'"Who" remplace un nom de personne dans une proposition relative.'},
  {id:'rel_1_02',type:'multiple-choice',diffLevel:1,
   instruction:'Choisissez la bonne réponse.',
   question:'The book ___ I bought yesterday is very interesting.',
   options:['which','who','whose','whom'],answer:'which',
   hint:'"book" = chose → which',explanation:'"Which" remplace un nom de chose ou d\'animal.'},
  {id:'rel_1_03',type:'fill-blank',diffLevel:1,
   instruction:'Complétez avec who, which ou that.',
   template:'This is the teacher ___ taught me English.',
   answer:'who',verbHint:'who/which/that',
   hint:'"teacher" = personne → who ou that',explanation:'"Who" (ou "that") pour les personnes.'},
  {id:'rel_1_04',type:'fill-blank',diffLevel:1,
   instruction:'Complétez avec who, which ou that.',
   template:'Where is the pen ___ was on my desk?',
   answer:'that',verbHint:'who/which/that',
   hint:'"pen" = chose → which ou that',explanation:'"That" ou "which" pour les choses.'},
  {id:'rel_1_05',type:'multiple-choice',diffLevel:1,
   instruction:'Choisissez la bonne réponse.',
   question:'That\'s the city ___ I was born.',
   options:['where','which','who','that'],answer:'where',
   hint:'"city" = lieu → where',explanation:'"Where" remplace un nom de lieu.'},
  {id:'rel_1_06',type:'fill-blank',diffLevel:1,
   instruction:'Complétez avec whose, where ou when.',
   template:"I know a man ___ car was stolen.",
   answer:'whose',verbHint:'whose/where/when',
   hint:'"car" appartient au "man" → whose',explanation:'"Whose" exprime la possession (dont).'},
  {id:'rel_1_07',type:'word-order',diffLevel:1,
   instruction:'Mettez les mots dans le bon ordre.',
   words:['The','girl','who','sings','is','my','sister','.'],
   answer:'The girl who sings is my sister.',
   hint:'nom (personne) + who + verbe',explanation:'"Who" introduit la relative après un nom de personne.'},
  {id:'rel_1_08',type:'multiple-choice',diffLevel:1,
   instruction:'Choisissez la bonne réponse.',
   question:'I remember the day ___ we first met.',
   options:['when','where','which','who'],answer:'when',
   hint:'"day" = moment dans le temps → when',explanation:'"When" remplace un nom de temps (day, moment, year...).'},
  {id:'rel_1_09',type:'fill-blank',diffLevel:1,
   instruction:'Complétez.',
   template:'The film ___ won the Oscar was beautiful.',
   answer:'that',verbHint:'that/which',
   hint:'"film" = chose → that ou which',explanation:'"That" ou "which" pour les choses dans une relative définissante.'},
  {id:'rel_1_10',type:'word-order',diffLevel:1,
   instruction:'Mettez les mots dans le bon ordre.',
   words:['This','is','the','house','where','I','grew','up','.'],
   answer:'This is the house where I grew up.',
   hint:'"house" = lieu → where',explanation:'"Where" introduit la relative de lieu.'},
  {id:'rel_1_11',type:'multiple-choice',diffLevel:1,
   instruction:'Choisissez la bonne réponse.',
   question:'She has a brother ___ works in Paris.',
   options:['who','which','whose','where'],answer:'who',
   hint:'"brother" = personne → who',explanation:'"Who" pour les personnes.'},
  {id:'rel_1_12',type:'fill-blank',diffLevel:1,
   instruction:'Complétez.',
   template:'The student ___ results were the best received a prize.',
   answer:'whose',verbHint:'whose/who/which',
   hint:'"results" appartiennent au "student" → whose',explanation:'"Whose + nom" exprime la possession (dont le/la/les).'},

  // L2 — 12 translate / listening / word-order
  {id:'rel_2_01',type:'translate',diffLevel:2,
   instruction:'Traduisez en anglais.',
   french:"L'homme qui répare notre voiture est très compétent.",
   answer:'The man who repairs our car is very competent.',
   acceptedAnswers:['The man that repairs our car is very competent.','The man who fixes our car is very competent.'],
   hint:'"qui" + personne = who',explanation:'"Who" pour les personnes.'},
  {id:'rel_2_02',type:'translate',diffLevel:2,
   instruction:'Traduisez en anglais.',
   french:'Le livre que tu m\'as prêté était passionnant.',
   answer:'The book that you lent me was fascinating.',
   acceptedAnswers:['The book which you lent me was fascinating.','The book you lent me was fascinating.'],
   hint:'"que" + chose = which/that (ou omis)',explanation:'"Which/that" pour les choses. Le relatif objet peut être omis.'},
  {id:'rel_2_03',type:'listening',diffLevel:2,
   instruction:'Écoutez et écrivez ce que vous entendez.',
   audio:"The students whose homework was incomplete had to stay after class.",
   answer:"The students whose homework was incomplete had to stay after class.",
   hint:'"whose homework" = dont les devoirs',explanation:'"Whose" pour la possession dans une relative.'},
  {id:'rel_2_04',type:'word-order',diffLevel:2,
   instruction:'Mettez les mots dans le bon ordre.',
   words:["That's","the","restaurant","where","we","had","our","first","date","."],
   answer:"That's the restaurant where we had our first date.",
   hint:'"where" après un nom de lieu',explanation:'"Where" dans la relative de lieu.'},
  {id:'rel_2_05',type:'translate',diffLevel:2,
   instruction:'Traduisez en anglais.',
   french:"C'est la raison pour laquelle je suis parti tôt.",
   answer:'That is the reason why I left early.',
   acceptedAnswers:["That's the reason why I left early.",'That is why I left early.'],
   hint:'raison pourquoi = the reason why',explanation:'"Why" peut remplacer "for which" dans une relative de cause.'},
  {id:'rel_2_06',type:'listening',diffLevel:2,
   instruction:'Écoutez et écrivez ce que vous entendez.',
   audio:"He is the kind of person who never gives up.",
   answer:"He is the kind of person who never gives up.",
   hint:'"person" = personne → who',explanation:'"Who" pour les personnes.'},
  {id:'rel_2_07',type:'translate',diffLevel:2,
   instruction:'Traduisez en anglais.',
   french:"Mon frère, qui vit à Londres, est ingénieur.",
   answer:'My brother, who lives in London, is an engineer.',
   hint:'virgules = relative non-définissante → "who" seulement',explanation:'Relative non-définissante (entre virgules) : toujours "who", jamais "that".'},
  {id:'rel_2_08',type:'word-order',diffLevel:2,
   instruction:'Mettez les mots dans le bon ordre.',
   words:['The','company','which','he','founded','is','now','worth','millions','.'],
   answer:'The company which he founded is now worth millions.',
   hint:'"which" = chose (la company)',explanation:'"Which" pour les choses et organisations.'},
  {id:'rel_2_09',type:'translate',diffLevel:2,
   instruction:'Traduisez en anglais.',
   french:"Je me souviens de l'année où nous avons déménagé.",
   answer:"I remember the year when we moved.",
   acceptedAnswers:["I remember the year that we moved.","I remember the year we moved."],
   hint:'"année" = moment → when',explanation:'"When" pour les noms de temps.'},
  {id:'rel_2_10',type:'listening',diffLevel:2,
   instruction:'Écoutez et écrivez ce que vous entendez.',
   audio:"The woman whose daughter won the competition was very proud.",
   answer:"The woman whose daughter won the competition was very proud.",
   hint:'"whose daughter" = dont la fille',explanation:'"Whose + nom de personne" pour la possession.'},
  {id:'rel_2_11',type:'translate',diffLevel:2,
   instruction:'Traduisez en anglais.',
   french:"L'enfant que tu vois là-bas est mon neveu.",
   answer:'The child that you can see over there is my nephew.',
   acceptedAnswers:['The child who you can see over there is my nephew.','The child you can see over there is my nephew.'],
   hint:'"that/who" pour les personnes — ou omis (relatif objet)',explanation:'"That" ou "who" pour les personnes. Omissible car relatif objet.'},
  {id:'rel_2_12',type:'word-order',diffLevel:2,
   instruction:'Mettez les mots dans le bon ordre.',
   words:["I","don't","understand","the","reason","why","she","left","."],
   answer:"I don't understand the reason why she left.",
   hint:'"why" = relative de cause',explanation:'"Why" dans la relative exprime la raison (= for which).'},

  // L3 — 12 exercises
  {id:'rel_3_01',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:'London, that is the capital of England, is very crowded.',
   answer:'London, which is the capital of England, is very crowded.',
   hint:'relative non-définissante → "which" (pas "that")',explanation:'"That" ne s\'utilise jamais dans une relative non-définissante (entre virgules).'},
  {id:'rel_3_02',type:'translate-fr',diffLevel:3,
   instruction:'Traduisez en français.',
   english:"The professor whose research I admire won the Nobel Prize.",
   answer:"Le professeur dont j'admire les recherches a remporté le Prix Nobel.",
   hint:'"whose research" = dont les recherches',explanation:'"Whose" pour la possession exprimée par "dont" en français.'},
  {id:'rel_3_03',type:'free-production',diffLevel:3,
   instruction:'Écris une phrase avec le mot donné.',
   keyword:'which',
   hint:'ex: The house which was built in 1900 is now a museum.',
   explanation:'"Which" dans une relative pour qualifier une chose ou un lieu.'},
  {id:'rel_3_04',type:'listening-comp',diffLevel:3,
   instruction:'Écoutez et répondez à la question.',
   audio:"The scientist who discovered this molecule received international recognition.",
   question:'What pronoun is used and why?',
   answer:'who, because scientist is a person',
   acceptedAnswers:['who','who because its a person','who - person'],
   hint:'"scientist" = personne → who',explanation:'"Who" pour les personnes dans une proposition relative.'},
  {id:'rel_3_05',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:'The village where I grew up it is very small.',
   answer:'The village where I grew up is very small.',
   hint:'pas de pronom en double après la relative',explanation:'Après une proposition relative, on ne répète pas le sujet avec "it".'},
  {id:'rel_3_06',type:'translate-fr',diffLevel:3,
   instruction:'Traduisez en français.',
   english:"Everything that she said was completely true.",
   answer:"Tout ce qu'elle a dit était complètement vrai.",
   hint:'"everything that" = tout ce que',explanation:'"Everything that" = tout ce que. "That" après "everything, anything, nothing, all".'},
  {id:'rel_3_07',type:'free-production',diffLevel:3,
   instruction:'Écris une phrase avec le mot donné.',
   keyword:'whose',
   hint:'ex: The family whose house was destroyed needed help.',
   explanation:'"Whose" exprime la possession dans une relative. Équivaut à "dont" en français.'},
  {id:'rel_3_08',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:'This is the person which I told you about.',
   answer:'This is the person who I told you about.',
   hint:'"person" = personne → who (pas which)',explanation:'"Who" pour les personnes. "Which" uniquement pour les choses.'},
  {id:'rel_3_09',type:'listening-comp',diffLevel:3,
   instruction:'Écoutez et répondez à la question.',
   audio:'The film, which was released last year, broke all box office records.',
   question:'Is this a defining or non-defining relative clause?',
   answer:'non-defining',
   acceptedAnswers:['non-defining','non defining','non-restrictive','non restrictive'],
   hint:'la virgule indique une relative non-définissante',explanation:'Les virgules indiquent une relative non-définissante (elle ajoute une info, n\'identifie pas).'},
  {id:'rel_3_10',type:'translate-fr',diffLevel:3,
   instruction:'Traduisez en français.',
   english:"The day when I received my results was the happiest day of my life.",
   answer:"Le jour où j'ai reçu mes résultats était le jour le plus heureux de ma vie.",
   hint:'"when" = où dans une relative de temps',explanation:'"When" dans une relative temporelle correspond à "où/que" en français.'},
  {id:'rel_3_11',type:'free-production',diffLevel:3,
   instruction:'Écris une phrase avec le mot donné.',
   keyword:'that',
   hint:'ex: The only thing that matters is your happiness.',
   explanation:'"That" après "the only", "the first", "the last", "all", "everything" est préféré à "which".'},
  {id:'rel_3_12',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:"I've met the man whom daughter is in your class.",
   answer:"I've met the man whose daughter is in your class.",
   hint:'"whose" pour la possession, "whom" pour objet de personne',explanation:'"Whose" = dont (possession). "Whom" = relatif objet pour les personnes (formel).'},
];

exercises.goingTo = [
  // L1 — 12 exercises
  {id:'gt_1_01',type:'multiple-choice',diffLevel:1,
   instruction:'Choisissez la bonne réponse.',
   question:'I ___ visit my grandparents tomorrow.',
   options:["am going to","is going to","are going to","going to"],answer:'am going to',
   hint:'"I" → am going to',explanation:'"Going to" : am (I) / is (he/she/it) / are (we/you/they).'},
  {id:'gt_1_02',type:'fill-blank',diffLevel:1,
   instruction:'Complétez avec la forme correcte de "going to".',
   template:'She ___ study medicine at university.',
   answer:'is going to',verbHint:'be going to',
   hint:'"she" → is going to',explanation:'"Is going to" avec she/he/it.'},
  {id:'gt_1_03',type:'multiple-choice',diffLevel:1,
   instruction:'Choisissez la bonne réponse.',
   question:'Look at those clouds! It ___ rain.',
   options:["is going to","will","going to","goes to"],answer:'is going to',
   hint:'preuve visible → going to',explanation:'"Going to" quand il y a une preuve visible (les nuages).'},
  {id:'gt_1_04',type:'word-order',diffLevel:1,
   instruction:'Mettez les mots dans le bon ordre.',
   words:["We","are","going","to","move","to","a","new","house","next","month","."],
   answer:"We are going to move to a new house next month.",
   hint:'"are going to" + base verb',explanation:'"Going to" pour un plan décidé à l\'avance.'},
  {id:'gt_1_05',type:'fill-blank',diffLevel:1,
   instruction:'Complétez.',
   template:"They ___ (not) come to the party tonight.",
   answer:"aren't going to",verbHint:'be going to',
   hint:'"they" → aren\'t going to',explanation:'"Aren\'t going to" = forme négative.'},
  {id:'gt_1_06',type:'multiple-choice',diffLevel:1,
   instruction:'Choisissez la bonne réponse.',
   question:'___ you going to apply for the job?',
   options:['Are','Is','Am','Do'],answer:'Are',
   hint:'"you" → are',explanation:'Question : Am/Is/Are + sujet + going to ?'},
  {id:'gt_1_07',type:'word-order',diffLevel:1,
   instruction:'Mettez les mots dans le bon ordre.',
   words:["Is","she","going","to","take","the","exam","?"],
   answer:"Is she going to take the exam?",
   hint:'"Is" + she + going to + verbe ?',explanation:'Question au futur going to avec she.'},
  {id:'gt_1_08',type:'fill-blank',diffLevel:1,
   instruction:'Complétez.',
   template:'He ___ cook dinner for us tonight.',
   answer:'is going to',verbHint:'be going to',
   hint:'"he" → is going to',explanation:'"Is going to" avec he/she/it pour un plan.'},
  {id:'gt_1_09',type:'multiple-choice',diffLevel:1,
   instruction:'Choisissez la bonne réponse.',
   question:'She has already decided. She ___ become a teacher.',
   options:["is going to","will","goes to","is going"],answer:'is going to',
   hint:'décision déjà prise → going to',explanation:'"Going to" pour un plan ou une décision déjà prise.'},
  {id:'gt_1_10',type:'word-order',diffLevel:1,
   instruction:'Mettez les mots dans le bon ordre.',
   words:["I","am","not","going","to","eat","fast","food","anymore","."],
   answer:"I am not going to eat fast food anymore.",
   hint:'"am not going to" + base verb',explanation:'Forme négative : am/is/are + not + going to.'},
  {id:'gt_1_11',type:'multiple-choice',diffLevel:1,
   instruction:'Choisissez la bonne réponse.',
   question:'What are you going to ___ this summer?',
   options:['do','doing','did','does'],answer:'do',
   hint:'going to + base verb (pas gérondif)',explanation:'"Going to" est toujours suivi du base verb.'},
  {id:'gt_1_12',type:'fill-blank',diffLevel:1,
   instruction:'Complétez.',
   template:"We ___ (be) late if we don't leave now.",
   answer:'are going to be',verbHint:'be going to',
   hint:'"we" → are going to + be',explanation:'"Are going to be" pour une prédiction avec preuve.'},

  // L2 — 12 exercises
  {id:'gt_2_01',type:'translate',diffLevel:2,
   instruction:'Traduisez en anglais.',
   french:"Elle va commencer un nouveau travail la semaine prochaine.",
   answer:"She is going to start a new job next week.",
   acceptedAnswers:["She's going to start a new job next week."],
   hint:'"going to" pour un plan',explanation:'"Is going to start" pour un plan décidé.'},
  {id:'gt_2_02',type:'translate',diffLevel:2,
   instruction:'Traduisez en anglais.',
   french:"Est-ce qu'ils vont construire une nouvelle route ici ?",
   answer:"Are they going to build a new road here?",
   hint:'"are they going to" + base verb',explanation:'Question : Are + they + going to + base verb ?'},
  {id:'gt_2_03',type:'listening',diffLevel:2,
   instruction:'Écoutez et écrivez ce que vous entendez.',
   audio:"I'm going to take a long holiday when I retire.",
   answer:"I'm going to take a long holiday when I retire.",
   hint:'"I\'m going to" = plan futur',explanation:'"I\'m going to" pour un plan décidé. "When + présent" pour le futur.'},
  {id:'gt_2_04',type:'word-order',diffLevel:2,
   instruction:'Mettez les mots dans le bon ordre.',
   words:["They","are","not","going","to","sell","their","house","after","all","."],
   answer:"They are not going to sell their house after all.",
   hint:'"are not going to" + base verb',explanation:'"Going to" négatif : are not going to.'},
  {id:'gt_2_05',type:'translate',diffLevel:2,
   instruction:'Traduisez en anglais.',
   french:"Regarde ! Ce vase va tomber.",
   answer:"Look! That vase is going to fall.",
   acceptedAnswers:["Look! The vase is going to fall."],
   hint:'preuve visible → going to',explanation:'"Is going to fall" car on voit que la chute est imminente.'},
  {id:'gt_2_06',type:'listening',diffLevel:2,
   instruction:'Écoutez et écrivez ce que vous entendez.',
   audio:"Are you going to visit your family during the school holidays?",
   answer:"Are you going to visit your family during the school holidays?",
   hint:'question avec "going to"',explanation:'"Are you going to" pour une question sur un plan.'},
  {id:'gt_2_07',type:'translate',diffLevel:2,
   instruction:'Traduisez en anglais.',
   french:"Nous allons essayer ce nouveau restaurant ce soir.",
   answer:"We are going to try this new restaurant tonight.",
   acceptedAnswers:["We're going to try this new restaurant tonight."],
   hint:'"we" → are going to',explanation:'"Are going to" avec we pour un plan.'},
  {id:'gt_2_08',type:'word-order',diffLevel:2,
   instruction:'Mettez les mots dans le bon ordre.',
   words:["He","is","going","to","be","a","great","football","player","one","day","."],
   answer:"He is going to be a great football player one day.",
   hint:'"is going to be" + attribut',explanation:'"Is going to be" pour une prédiction basée sur des éléments observables.'},
  {id:'gt_2_09',type:'translate',diffLevel:2,
   instruction:'Traduisez en anglais.',
   french:"Est-ce que tu vas étudier ce soir ou sortir avec tes amis ?",
   answer:"Are you going to study tonight or go out with your friends?",
   acceptedAnswers:["Are you going to study this evening or go out with your friends?"],
   hint:'"are you going to" + base verb ... or + base verb',explanation:'Question alternative avec "going to".'},
  {id:'gt_2_10',type:'listening',diffLevel:2,
   instruction:'Écoutez et écrivez ce que vous entendez.',
   audio:"She isn't going to accept the offer. She wants more money.",
   answer:"She isn't going to accept the offer. She wants more money.",
   hint:'"isn\'t going to" = refus planifié',explanation:'"Isn\'t going to" pour exprimer un refus décidé.'},
  {id:'gt_2_11',type:'translate',diffLevel:2,
   instruction:'Traduisez en anglais.',
   french:"Qu'est-ce que vous allez faire après le cours ?",
   answer:"What are you going to do after the lesson?",
   acceptedAnswers:["What are you going to do after class?"],
   hint:'"what are you going to do" = qu\'allez-vous faire',explanation:'"What are you going to do?" = question sur un plan futur.'},
  {id:'gt_2_12',type:'word-order',diffLevel:2,
   instruction:'Mettez les mots dans le bon ordre.',
   words:["The","government","is","going","to","invest","in","renewable","energy","."],
   answer:"The government is going to invest in renewable energy.",
   hint:'"is going to" avec sujet singulier',explanation:'"Is going to invest" pour une politique décidée.'},

  // L3 — 12 exercises
  {id:'gt_3_01',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:'Look at those dark clouds! It will rain soon.',
   answer:'Look at those dark clouds! It is going to rain soon.',
   hint:'preuve visible → going to (pas will)',explanation:'Avec une preuve visible (nuages noirs), on utilise "going to", pas "will".'},
  {id:'gt_3_02',type:'translate-fr',diffLevel:3,
   instruction:'Traduisez en français.',
   english:"She's going to graduate next June after five years of hard work.",
   answer:"Elle va obtenir son diplôme en juin prochain après cinq ans de travail.",
   hint:'"going to graduate" = va obtenir son diplôme',explanation:'"Going to" pour un plan décidé avec une date précise.'},
  {id:'gt_3_03',type:'free-production',diffLevel:3,
   instruction:'Écris une phrase avec le mot donné.',
   keyword:'am going to',
   hint:'ex: I am going to learn a new skill this year.',
   explanation:'"Am going to" pour exprimer un plan personnel décidé.'},
  {id:'gt_3_04',type:'listening-comp',diffLevel:3,
   instruction:'Écoutez et répondez à la question.',
   audio:"I decided last night. I'm going to apply for that scholarship.",
   question:'Why is "going to" used here instead of "will"?',
   answer:'because the decision was made before the moment of speaking',
   acceptedAnswers:['decision already made','plan already decided','decided before'],
   hint:'"decided last night" = plan déjà décidé',explanation:'"Going to" car la décision a été prise avant le moment où on parle.'},
  {id:'gt_3_05',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:"She going to start her new job on Monday.",
   answer:"She is going to start her new job on Monday.",
   hint:'ne pas oublier "is" avant "going to"',explanation:'"Is going to" : le verbe "be" est obligatoire avant "going to".'},
  {id:'gt_3_06',type:'translate-fr',diffLevel:3,
   instruction:'Traduisez en français.',
   english:"The company is going to lay off two hundred workers next month.",
   answer:"L'entreprise va licencier deux cents travailleurs le mois prochain.",
   hint:'"lay off" = licencier',explanation:'"Is going to lay off" pour une décision d\'entreprise annoncée.'},
  {id:'gt_3_07',type:'free-production',diffLevel:3,
   instruction:'Écris une phrase avec le mot donné.',
   keyword:'is going to',
   hint:'ex: It is going to be a beautiful day tomorrow.',
   explanation:'"Is going to" pour une prédiction basée sur des indices présents.'},
  {id:'gt_3_08',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:"I'll call you when I'm going to arrive.",
   answer:"I'll call you when I arrive.",
   hint:'dans les subordonnées temporelles ("when"), on utilise le présent (pas will/going to)',explanation:'Après "when", "as soon as", "before", "after" → présent simple pour le futur.'},
  {id:'gt_3_09',type:'listening-comp',diffLevel:3,
   instruction:'Écoutez et répondez à la question.',
   audio:"Careful! You are going to drop those glasses.",
   question:'What evidence suggests this prediction?',
   answer:'the speaker can see the glasses are about to be dropped',
   acceptedAnswers:['something visible','the person is holding them dangerously','visible evidence'],
   hint:'"going to" avec preuve visible',explanation:'"Going to" pour une prédiction basée sur une preuve visible.'},
  {id:'gt_3_10',type:'translate-fr',diffLevel:3,
   instruction:'Traduisez en français.',
   english:"Are you going to tell her the truth, or are you going to keep lying?",
   answer:"Tu vas lui dire la vérité, ou tu vas continuer à mentir ?",
   hint:'double question avec going to',explanation:'Double question au futur "going to" exprimant un choix moral.'},
  {id:'gt_3_11',type:'free-production',diffLevel:3,
   instruction:'Écris une phrase avec le mot donné.',
   keyword:"aren't going to",
   hint:"ex: They aren't going to change their minds easily.",
   explanation:'"Aren\'t going to" = forme négative avec we/you/they.'},
  {id:'gt_3_12',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:"I'm going to to visit Paris next summer.",
   answer:"I'm going to visit Paris next summer.",
   hint:'"going to" + base verb (pas "to + base verb")',explanation:'"Going to" est déjà suivi directement du base verb, sans "to" en plus.'},
];
"""

# ─────────────────────────────────────────────────────────────────────────────
# Apply changes
# ─────────────────────────────────────────────────────────────────────────────
with open(THEORY_PATH, encoding='utf-8') as f:
    theory_src = f.read()

# Insert theory sections before `export const theoryTopics`
MARKER = 'export const theoryTopics'
theory_src = theory_src.replace(MARKER, NEW_THEORY + '\n' + MARKER, 1)

# Add theoryTopics entries
idx_topics = theory_src.find('export const theoryTopics')
idx_close  = theory_src.find('];', idx_topics)
theory_src = theory_src[:idx_close] + NEW_THEORY_TOPICS + '\n' + theory_src[idx_close:]

# Add Boky chapters
idx_boky_close = theory_src.rfind('];\n\n// ─── Topics list')
theory_src = theory_src[:idx_boky_close] + NEW_BOKY + '\n' + theory_src[idx_boky_close:]

with open(THEORY_PATH, 'w', encoding='utf-8') as f:
    f.write(theory_src)
print('theory.js updated.')

# exercises.js
with open(EXERCISES_PATH, encoding='utf-8') as f:
    ex_src = f.read()
INSERT = 'export function getAllExercises()'
ex_src = ex_src[:ex_src.index(INSERT)] + NEW_EXERCISES + '\n' + ex_src[ex_src.index(INSERT):]
with open(EXERCISES_PATH, 'w', encoding='utf-8') as f:
    f.write(ex_src)
print('exercises.js updated.')
print('Done: relativeClauses + goingTo added.')
