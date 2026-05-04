"""
Batch 5 — Fill all exercise gaps to reach minimum 12 per level per topic.
Inserts exercises for 25 topics with exact IDs from audit.
"""
import sys, os
sys.stdout.reconfigure(encoding='utf-8')

EXERCISES_PATH = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'exercises.js')

NEW = r"""
// ═══════════════════════════════════════════════════════════════
// BATCH 5 — Fill gaps to ≥12 per level (auto-generated)
// ═══════════════════════════════════════════════════════════════

// ── toBe L1 (10-12) ──────────────────────────────────────────
exercises.toBe.push(
  {id:'tobe_1_10',type:'multiple-choice',diffLevel:1,
   instruction:'Choisissez la bonne réponse.',
   question:'___ your parents at home?',
   options:['Is','Am','Are','Be'],answer:'Are',
   hint:'parents = pluriel → are',explanation:'"Are" avec les sujets pluriels et "you".'},
  {id:'tobe_1_11',type:'fill-blank',diffLevel:1,
   instruction:'Complétez avec am, is ou are.',
   template:'The children ___ very happy today.',
   answer:'are',verbHint:'be',
   hint:'children = pluriel',explanation:'"Are" avec les sujets pluriels.'},
  {id:'tobe_1_12',type:'word-order',diffLevel:1,
   instruction:'Mettez les mots dans le bon ordre.',
   words:['He','is','a','good','student','.'],
   answer:'He is a good student.',
   hint:'sujet + is + ...',explanation:'Forme affirmative : sujet + is.'}
);

// ── adverbs L2 (09-12) ───────────────────────────────────────
exercises.adverbs.push(
  {id:'adv_2_09',type:'translate',diffLevel:2,
   instruction:'Traduisez en anglais.',
   french:'Elle conduit très prudemment.',
   answer:'She drives very carefully.',
   acceptedAnswers:['She drives really carefully.'],
   hint:'prudemment = carefully',explanation:'"Carefully" est l\'adverbe de "careful".'},
  {id:'adv_2_10',type:'listening',diffLevel:2,
   instruction:'Écoutez et écrivez ce que vous entendez.',
   audio:'He finished the exam quickly and correctly.',
   answer:'He finished the exam quickly and correctly.',
   hint:'Deux adverbes en -ly',explanation:'"Quickly" = rapidement, "correctly" = correctement.'},
  {id:'adv_2_11',type:'word-order',diffLevel:2,
   instruction:'Mettez les mots dans le bon ordre.',
   words:['She','always','arrives','early','at','work','.'],
   answer:'She always arrives early at work.',
   hint:'"always" se place avant le verbe principal',explanation:'Les adverbes de fréquence se placent avant le verbe principal.'},
  {id:'adv_2_12',type:'translate',diffLevel:2,
   instruction:'Traduisez en anglais.',
   french:'Il parle anglais couramment mais lentement.',
   answer:'He speaks English fluently but slowly.',
   acceptedAnswers:['He speaks English slowly but fluently.'],
   hint:'couramment = fluently, lentement = slowly',explanation:'Deux adverbes de manière coordonnés.'}
);

// ── comparatives L2 (12) ─────────────────────────────────────
exercises.comparatives.push(
  {id:'comp_2_12',type:'translate',diffLevel:2,
   instruction:'Traduisez en anglais.',
   french:'Ce problème est bien moins difficile que le précédent.',
   answer:'This problem is much less difficult than the previous one.',
   acceptedAnswers:['This problem is far less difficult than the previous one.'],
   hint:'bien moins = much less',explanation:'"Much less" renforce une comparaison inférieure.'}
);

// ── comparatives L3 (12) ─────────────────────────────────────
exercises.comparatives.push(
  {id:'comp_3_12',type:'free-production',diffLevel:3,
   instruction:'Écris une phrase avec le mot donné.',
   keyword:'the more',
   hint:'ex: The more you study, the better you get.',
   explanation:'"The more... the more..." exprime une corrélation progressive.'}
);

// ── connectors L3 (06-12) ────────────────────────────────────
exercises.connectors.push(
  {id:'con_3_06',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur dans la phrase.",
   sentence:'She was tired, despite she studied all night.',
   answer:'She was tired, despite having studied all night.',
   hint:'"despite" + gérondif, pas + sujet+verbe',explanation:'"Despite" est suivi d\'un nom ou gérondif, jamais d\'une proposition.'},
  {id:'con_3_07',type:'translate-fr',diffLevel:3,
   instruction:'Traduisez en français.',
   english:'He worked hard so that his family could have a better life.',
   answer:'Il a travaillé dur afin que sa famille puisse avoir une meilleure vie.',
   acceptedAnswers:['Il a travaillé dur pour que sa famille puisse avoir une meilleure vie.'],
   hint:'so that = afin que / pour que',explanation:'"So that" exprime le but.'},
  {id:'con_3_08',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:'Although the weather was bad, but we went outside.',
   answer:'Although the weather was bad, we went outside.',
   hint:'"although" et "but" ne se combinent pas',explanation:'On ne combine pas "although" et "but" dans la même phrase.'},
  {id:'con_3_09',type:'free-production',diffLevel:3,
   instruction:'Écris une phrase avec le mot donné.',
   keyword:'however',
   hint:'ex: I wanted to go; however, it was raining.',
   explanation:'"However" introduit une idée qui contraste. Suivi d\'une virgule.'},
  {id:'con_3_10',type:'listening-comp',diffLevel:3,
   instruction:'Écoutez et répondez à la question.',
   audio:'She finished all her work. Nevertheless, she felt unsatisfied with the result.',
   question:'What connector is used to show contrast?',
   answer:'nevertheless',
   acceptedAnswers:['Nevertheless'],
   hint:'"nevertheless" = néanmoins',explanation:'"Nevertheless" est un connecteur de concession formelle.'},
  {id:'con_3_11',type:'translate-fr',diffLevel:3,
   instruction:'Traduisez en français.',
   english:'Not only did he arrive late, but he also forgot the documents.',
   answer:"Non seulement il est arrivé en retard, mais il a aussi oublié les documents.",
   hint:'not only... but also = non seulement... mais aussi',explanation:'Structure emphatique "not only... but also".'},
  {id:'con_3_12',type:'free-production',diffLevel:3,
   instruction:'Écris une phrase avec le mot donné.',
   keyword:'therefore',
   hint:'ex: It was raining; therefore, we cancelled the trip.',
   explanation:'"Therefore" exprime la conséquence logique.'}
);

// ── conditionals L3 (08-12) ──────────────────────────────────
exercises.conditionals.push(
  {id:'cond_3_08',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:'If I would know the answer, I would tell you.',
   answer:'If I knew the answer, I would tell you.',
   hint:'Conditionnel 2 : if + past simple (pas "would")',explanation:'Dans la condition du type 2, on utilise le past simple, jamais "would".'},
  {id:'cond_3_09',type:'translate-fr',diffLevel:3,
   instruction:'Traduisez en français.',
   english:'Had she studied harder, she would have passed the exam.',
   answer:"Si elle avait étudié davantage, elle aurait réussi l'examen.",
   hint:'Had + sujet = inversion formelle du conditionnel 3',explanation:'Structure inversée du conditionnel 3 : "Had + sujet" remplace "If + had".'},
  {id:'cond_3_10',type:'free-production',diffLevel:3,
   instruction:'Écris une phrase avec le mot donné.',
   keyword:'unless',
   hint:'ex: I will go unless it rains.',
   explanation:'"Unless" = "if not". Utilisé avec le présent dans la condition.'},
  {id:'cond_3_11',type:'listening-comp',diffLevel:3,
   instruction:'Écoutez et répondez à la question.',
   audio:'If I had more time, I would learn a new language. What type of conditional is this?',
   question:'What type of conditional is used?',
   answer:'type 2',
   acceptedAnswers:['second conditional','conditional 2','conditionnel 2'],
   hint:'would + base verb dans le résultat',explanation:'Type 2 : situation hypothétique dans le présent/futur.'},
  {id:'cond_3_12',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:'If it will rain tomorrow, we will stay home.',
   answer:'If it rains tomorrow, we will stay home.',
   hint:'Conditionnel 1 : if + présent simple (pas "will")',explanation:'Dans le conditionnel 1, la condition est au présent simple.'}
);

// ── countableUncountable L2 (12) ─────────────────────────────
exercises.countableUncountable.push(
  {id:'cu_2_12',type:'translate',diffLevel:2,
   instruction:'Traduisez en anglais.',
   french:"Il n'y a pas beaucoup de lait dans le réfrigérateur.",
   answer:"There isn't much milk in the fridge.",
   acceptedAnswers:["There is not much milk in the fridge.","There isn't much milk in the refrigerator."],
   hint:'lait = uncountable → much',explanation:'"Much" avec les indénombrables, "many" avec les dénombrables.'}
);

// ── countableUncountable L3 (10-12) ──────────────────────────
exercises.countableUncountable.push(
  {id:'cu_3_10',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:'She gave me a very useful advice.',
   answer:'She gave me very useful advice.',
   hint:'"advice" est indénombrable : pas d\'article "a"',explanation:'"Advice" est toujours indénombrable en anglais : pas de pluriel ni d\'article "a".'},
  {id:'cu_3_11',type:'translate-fr',diffLevel:3,
   instruction:'Traduisez en français.',
   english:"There isn't enough equipment for all the students.",
   answer:"Il n'y a pas assez d'équipement pour tous les étudiants.",
   hint:'equipment = indénombrable',explanation:'"Equipment" est indénombrable : pas de pluriel ni "a/an".'},
  {id:'cu_3_12',type:'free-production',diffLevel:3,
   instruction:'Écris une phrase avec le mot donné.',
   keyword:'furniture',
   hint:'"furniture" est indénombrable : pas de "a" ni de -s',
   explanation:'"Furniture" est toujours indénombrable. On dit "a piece of furniture".'}
);

// ── futureContinuous L3 (08-12) ──────────────────────────────
exercises.futureContinuous.push(
  {id:'fc_3_08',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:'At 8pm tonight I will be watch the game.',
   answer:'At 8pm tonight I will be watching the game.',
   hint:'Future Continuous : will be + verbe-ing',explanation:'Le Future Continuous s\'forme avec "will be + -ing", pas "will be + base".'},
  {id:'fc_3_09',type:'translate-fr',diffLevel:3,
   instruction:'Traduisez en français.',
   english:'This time next week, they will be flying to London.',
   answer:'À cette heure la semaine prochaine, ils seront en train de voler vers Londres.',
   acceptedAnswers:["La semaine prochaine à cette heure-ci, ils voleront vers Londres."],
   hint:'this time next week = à cette heure la semaine prochaine',explanation:'Le Future Continuous exprime une action en cours à un moment précis du futur.'},
  {id:'fc_3_10',type:'free-production',diffLevel:3,
   instruction:'Écris une phrase avec le mot donné.',
   keyword:'will be studying',
   hint:'ex: At midnight, I will be studying for the exam.',
   explanation:'Future Continuous pour une activité en cours à un moment futur précis.'},
  {id:'fc_3_11',type:'listening-comp',diffLevel:3,
   instruction:'Écoutez et répondez à la question.',
   audio:'Tomorrow morning at nine, the president will be giving a speech to the nation.',
   question:'What will the president be doing at 9am tomorrow?',
   answer:'giving a speech',
   acceptedAnswers:['he will be giving a speech','giving a speech to the nation'],
   hint:'Future Continuous = action en cours',explanation:'Le Future Continuous décrit ce qui sera en train de se faire.'},
  {id:'fc_3_12',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:'Will you be work late tomorrow evening?',
   answer:'Will you be working late tomorrow evening?',
   hint:'will be + verbe-ing',explanation:'Le Future Continuous à l\'interrogatif : Will + sujet + be + verbe-ing.'}
);

// ── futurePerfect L3 (08-12) ─────────────────────────────────
exercises.futurePerfect.push(
  {id:'fp_3_08',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:'By next year, she will finish her degree.',
   answer:'By next year, she will have finished her degree.',
   hint:'"by" + futur → Future Perfect',explanation:'Avec "by + moment futur", on utilise le Future Perfect (will have + participe passé).'},
  {id:'fp_3_09',type:'translate-fr',diffLevel:3,
   instruction:'Traduisez en français.',
   english:'By the time you arrive, I will have cooked dinner.',
   answer:"Quand tu arriveras, j'aurai préparé le dîner.",
   hint:'by the time = quand / au moment où',explanation:'"By the time" introduit la limite temporelle pour le Future Perfect.'},
  {id:'fp_3_10',type:'free-production',diffLevel:3,
   instruction:'Écris une phrase avec le mot donné.',
   keyword:'will have',
   hint:'ex: By 2030, scientists will have found a solution.',
   explanation:'Future Perfect : will have + participe passé. Action accomplie avant un moment futur.'},
  {id:'fp_3_11',type:'listening-comp',diffLevel:3,
   instruction:'Écoutez et répondez à la question.',
   audio:'By the end of this month, the team will have completed the project.',
   question:'When will the project be completed?',
   answer:'by the end of the month',
   acceptedAnswers:['by the end of this month','before the end of the month'],
   hint:'"by" = avant ce moment-là',explanation:'"By" indique la limite de temps dans le Future Perfect.'},
  {id:'fp_3_12',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:'By 2050, the temperature will raised by two degrees.',
   answer:'By 2050, the temperature will have risen by two degrees.',
   hint:'"rise" est irrégulier : rise/rose/risen',explanation:'Future Perfect : will have + participe passé. "Rise" → risen (irrégulier).'}
);

// ── futureSimple L2 (11-12) ──────────────────────────────────
exercises.futureSimple.push(
  {id:'fts_2_11',type:'translate',diffLevel:2,
   instruction:'Traduisez en anglais.',
   french:'Ils ne viendront probablement pas à la réunion.',
   answer:"They probably won't come to the meeting.",
   acceptedAnswers:["They will probably not come to the meeting."],
   hint:'probablement = probably (avant "won\'t")',explanation:'"Probably" se place avant "won\'t" ou après "will".'},
  {id:'fts_2_12',type:'word-order',diffLevel:2,
   instruction:'Mettez les mots dans le bon ordre.',
   words:['I','think','she','will','pass','the','exam','.'],
   answer:'I think she will pass the exam.',
   hint:'will + base verb dans la proposition principale',explanation:'Après "I think", on utilise will + base verb pour le futur.'}
);

// ── imperatives L2 (08-12) ───────────────────────────────────
exercises.imperatives.push(
  {id:'imp_2_08',type:'translate',diffLevel:2,
   instruction:'Traduisez en anglais.',
   french:"N'oublie pas d'apporter ton passeport.",
   answer:"Don't forget to bring your passport.",
   acceptedAnswers:["Do not forget to bring your passport."],
   hint:"Négatif impératif : don't + verbe",explanation:'"Don\'t + base verb" pour l\'impératif négatif.'},
  {id:'imp_2_09',type:'listening',diffLevel:2,
   instruction:'Écoutez et écrivez ce que vous entendez.',
   audio:"Please sit down and open your books to page ten.",
   answer:"Please sit down and open your books to page ten.",
   hint:'Deux impératifs coordonnés',explanation:'"Please" rend l\'impératif plus poli. Deux impératifs liés par "and".'},
  {id:'imp_2_10',type:'word-order',diffLevel:2,
   instruction:'Mettez les mots dans le bon ordre.',
   words:["Don't","be","late","for","the","meeting","."],
   answer:"Don't be late for the meeting.",
   hint:"Don't + base verb",explanation:'"Don\'t be" est l\'impératif négatif de "to be".'},
  {id:'imp_2_11',type:'translate',diffLevel:2,
   instruction:'Traduisez en anglais.',
   french:'Soyons honnêtes avec les autres.',
   answer:"Let's be honest with others.",
   hint:"Nous inclus = let's + base verb",explanation:'"Let\'s" inclut le locuteur dans la suggestion.'},
  {id:'imp_2_12',type:'listening',diffLevel:2,
   instruction:'Écoutez et écrivez ce que vous entendez.',
   audio:"Never leave your bag unattended in a public place.",
   answer:"Never leave your bag unattended in a public place.",
   hint:'"Never" renforce l\'interdiction',explanation:'"Never + base verb" renforce l\'impératif négatif.'}
);

// ── interrogative L2 (08-12) ─────────────────────────────────
exercises.interrogative.push(
  {id:'int_2_08',type:'translate',diffLevel:2,
   instruction:'Traduisez en anglais.',
   french:'Depuis combien de temps habites-tu ici ?',
   answer:'How long have you lived here?',
   acceptedAnswers:['How long have you been living here?'],
   hint:'depuis combien de temps = how long + present perfect',explanation:'"How long" avec le Present Perfect exprime la durée depuis le début.'},
  {id:'int_2_09',type:'listening',diffLevel:2,
   instruction:'Écoutez et écrivez ce que vous entendez.',
   audio:"How often do you exercise during the week?",
   answer:"How often do you exercise during the week?",
   hint:'How often = à quelle fréquence',explanation:'"How often" demande la fréquence d\'une action.'},
  {id:'int_2_10',type:'word-order',diffLevel:2,
   instruction:'Mettez les mots dans le bon ordre.',
   words:['Why','did','she','leave','so','early','?'],
   answer:'Why did she leave so early?',
   hint:'Why + did + sujet + base verb',explanation:'Question au Past Simple : did + sujet + base verb.'},
  {id:'int_2_11',type:'translate',diffLevel:2,
   instruction:'Traduisez en anglais.',
   french:'Avec qui parles-tu ?',
   answer:'Who are you talking to?',
   acceptedAnswers:['With whom are you talking?','Who are you speaking to?'],
   hint:'who + are you + verbe-ing',explanation:'Avec le Present Continuous : who + are + sujet + verbe-ing.'},
  {id:'int_2_12',type:'listening',diffLevel:2,
   instruction:'Écoutez et écrivez ce que vous entendez.',
   audio:"What time does the next train leave for the capital?",
   answer:"What time does the next train leave for the capital?",
   hint:'What time + does + sujet + base verb',explanation:'"What time" + Present Simple pour les horaires.'}
);

// ── irregularVerbs L2 (07-12) ────────────────────────────────
exercises.irregularVerbs.push(
  {id:'irv_2_07',type:'translate',diffLevel:2,
   instruction:'Traduisez en anglais.',
   french:"Elle a écrit une lettre à son professeur hier.",
   answer:'She wrote a letter to her teacher yesterday.',
   hint:'écrire = write → wrote (past simple)',explanation:'"Write" est irrégulier : write/wrote/written.'},
  {id:'irv_2_08',type:'listening',diffLevel:2,
   instruction:'Écoutez et écrivez ce que vous entendez.',
   audio:"He broke his arm when he fell off his bicycle.",
   answer:"He broke his arm when he fell off his bicycle.",
   hint:'break → broke, fall → fell',explanation:'Deux verbes irréguliers : break/broke et fall/fell.'},
  {id:'irv_2_09',type:'word-order',diffLevel:2,
   instruction:'Mettez les mots dans le bon ordre.',
   words:['We','have','known','each','other','for','ten','years','.'],
   answer:'We have known each other for ten years.',
   hint:'know → known (participe passé)',explanation:'"Know" est irrégulier : know/knew/known.'},
  {id:'irv_2_10',type:'translate',diffLevel:2,
   instruction:'Traduisez en anglais.',
   french:"Ils ont choisi le mauvais chemin.",
   answer:'They chose the wrong path.',
   acceptedAnswers:['They chose the wrong way.','They chose the wrong road.'],
   hint:'choisir = choose → chose (past simple)',explanation:'"Choose" est irrégulier : choose/chose/chosen.'},
  {id:'irv_2_11',type:'listening',diffLevel:2,
   instruction:'Écoutez et écrivez ce que vous entendez.',
   audio:"She sang beautifully at the concert last night.",
   answer:"She sang beautifully at the concert last night.",
   hint:'sing → sang (past simple)',explanation:'"Sing" est irrégulier : sing/sang/sung.'},
  {id:'irv_2_12',type:'translate',diffLevel:2,
   instruction:'Traduisez en anglais.',
   french:"Nous avons dépensé tout notre argent.",
   answer:'We spent all our money.',
   hint:'dépenser = spend → spent',explanation:'"Spend" est irrégulier : spend/spent/spent.'}
);

// ── pastContinuous L3 (08-12) ────────────────────────────────
exercises.pastContinuous.push(
  {id:'pc_3_08',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:'While I was cooked dinner, the phone rang.',
   answer:'While I was cooking dinner, the phone rang.',
   hint:'was + verbe-ing (pas participe passé)',explanation:'Past Continuous : was/were + verbe-ing. "Cooked" est le past simple, pas le gérondif.'},
  {id:'pc_3_09',type:'translate-fr',diffLevel:3,
   instruction:'Traduisez en français.',
   english:'They were arguing when the teacher entered the classroom.',
   answer:"Ils se disputaient quand le professeur est entré dans la salle de classe.",
   hint:'arguing = se disputaient (imparfait)',explanation:'Past Continuous (imparfait) interrompu par le Past Simple (passé composé).'},
  {id:'pc_3_10',type:'free-production',diffLevel:3,
   instruction:'Écris une phrase avec le mot donné.',
   keyword:'while',
   hint:'ex: While she was sleeping, someone knocked on the door.',
   explanation:'"While" introduit l\'action en cours (Past Continuous), interrompue par le Past Simple.'},
  {id:'pc_3_11',type:'listening-comp',diffLevel:3,
   instruction:'Écoutez et répondez à la question.',
   audio:'It was raining heavily when we left the stadium.',
   question:'What was the weather doing when they left?',
   answer:'it was raining',
   acceptedAnswers:['raining heavily','it was raining heavily'],
   hint:'Past Continuous = action en cours au moment',explanation:'Le Past Continuous décrit la météo (action de fond) au moment du départ.'},
  {id:'pc_3_12',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:'She was knowing the answer all along.',
   answer:'She knew the answer all along.',
   hint:'"know" est un verbe d\'état → pas de continuous',explanation:'Les verbes d\'état (know, believe, like, want) ne s\'utilisent pas avec le continuous.'}
);

// ── phrasalVerbs L3 (06-12) ──────────────────────────────────
exercises.phrasalVerbs.push(
  {id:'phv_3_06',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:'She gave up to smoke after ten years.',
   answer:'She gave up smoking after ten years.',
   hint:'give up + gérondif',explanation:'"Give up" est suivi d\'un gérondif (-ing), jamais d\'un infinitif.'},
  {id:'phv_3_07',type:'translate-fr',diffLevel:3,
   instruction:'Traduisez en français.',
   english:"I need to find out when the next flight leaves.",
   answer:"J'ai besoin de découvrir / savoir quand part le prochain vol.",
   acceptedAnswers:["Je dois savoir quand part le prochain vol."],
   hint:'find out = découvrir, savoir',explanation:'"Find out" = découvrir une information.'},
  {id:'phv_3_08',type:'free-production',diffLevel:3,
   instruction:'Écris une phrase avec le mot donné.',
   keyword:'look forward to',
   hint:'look forward to + gérondif : ex: I look forward to meeting you.',
   explanation:'"Look forward to" exprime l\'attente positive. Suivi d\'un gérondif.'},
  {id:'phv_3_09',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:'Can you turn off the lights when you go out?',
   answer:'Can you turn off the lights when you go out?',
   hint:'Cette phrase est correcte !',explanation:'Cette phrase est déjà correcte. "Turn off" = éteindre.'},
  {id:'phv_3_10',type:'listening-comp',diffLevel:3,
   instruction:'Écoutez et répondez à la question.',
   audio:"She came across an old photo while cleaning her room.",
   question:'What does "came across" mean in this sentence?',
   answer:'found by chance',
   acceptedAnswers:['discovered accidentally','found unexpectedly','trouver par hasard'],
   hint:'come across = trouver par hasard',explanation:'"Come across" = trouver quelque chose par accident.'},
  {id:'phv_3_11',type:'translate-fr',diffLevel:3,
   instruction:'Traduisez en français.',
   english:"He put off the meeting until next Monday.",
   answer:"Il a reporté la réunion à lundi prochain.",
   hint:'put off = reporter, remettre à plus tard',explanation:'"Put off" = remettre à plus tard, reporter.'},
  {id:'phv_3_12',type:'free-production',diffLevel:3,
   instruction:'Écris une phrase avec le mot donné.',
   keyword:'run out of',
   hint:'ex: We ran out of milk this morning.',
   explanation:'"Run out of" = ne plus avoir de quelque chose, épuiser son stock.'}
);

// ── possessives L2 (08-12) ───────────────────────────────────
exercises.possessives.push(
  {id:'pos_2_08',type:'translate',diffLevel:2,
   instruction:'Traduisez en anglais.',
   french:"C'est le vélo de mon frère.",
   answer:"It is my brother's bike.",
   acceptedAnswers:["It's my brother's bike.","That is my brother's bike.","That's my brother's bike."],
   hint:"génitif saxon : frère's + objet",explanation:"Le génitif saxon ('s) montre la possession."},
  {id:'pos_2_09',type:'listening',diffLevel:2,
   instruction:'Écoutez et écrivez ce que vous entendez.',
   audio:"Is this your umbrella or mine? I think it's mine.",
   answer:"Is this your umbrella or mine? I think it's mine.",
   hint:'"mine" = pronom possessif de "my"',explanation:'"Mine" est le pronom possessif de la 1ère personne du singulier.'},
  {id:'pos_2_10',type:'word-order',diffLevel:2,
   instruction:'Mettez les mots dans le bon ordre.',
   words:["The","children's","books","are","on","the","shelf","."],
   answer:"The children's books are on the shelf.",
   hint:"children's = génitif saxon (pluriel irrégulier)",explanation:"Génitif saxon : pour les pluriels irréguliers, on ajoute 's. Pour les pluriels réguliers (ends in s), on ajoute juste '."},
  {id:'pos_2_11',type:'translate',diffLevel:2,
   instruction:'Traduisez en anglais.',
   french:"Sa maison est plus grande que la nôtre.",
   answer:"His house is bigger than ours.",
   acceptedAnswers:["Her house is bigger than ours."],
   hint:'"ours" = pronom possessif de "our"',explanation:'"Ours" remplace "our + nom" pour éviter la répétition.'},
  {id:'pos_2_12',type:'listening',diffLevel:2,
   instruction:'Écoutez et écrivez ce que vous entendez.',
   audio:"Whose jacket is this? It must be the teacher's.",
   answer:"Whose jacket is this? It must be the teacher's.",
   hint:'"whose" = à qui + génitif saxon',explanation:'"Whose" demande à qui appartient quelque chose. Le génitif peut se terminer sans nom si compris du contexte.'}
);

// ── presentPerfect L3 (08-12) ────────────────────────────────
exercises.presentPerfect.push(
  {id:'pp_3_08',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:'I have seen him yesterday.',
   answer:'I saw him yesterday.',
   hint:'"yesterday" = moment précis → Past Simple',explanation:'Le Present Perfect ne s\'utilise pas avec des marqueurs de temps précis (yesterday, last year, in 2020, etc.).'},
  {id:'pp_3_09',type:'translate-fr',diffLevel:3,
   instruction:'Traduisez en français.',
   english:"She hasn't been to Europe since she was a child.",
   answer:"Elle n'est pas allée en Europe depuis qu'elle était enfant.",
   hint:'since she was a child = depuis qu\'elle était enfant',explanation:'"Since" avec un événement passé précis. Present Perfect pour la durée jusqu\'au présent.'},
  {id:'pp_3_10',type:'free-production',diffLevel:3,
   instruction:'Écris une phrase avec le mot donné.',
   keyword:'have never',
   hint:'ex: I have never eaten sushi in my life.',
   explanation:'"Have never + participe passé" pour une expérience jamais vécue.'},
  {id:'pp_3_11',type:'listening-comp',diffLevel:3,
   instruction:'Écoutez et répondez à la question.',
   audio:"He has just received the results of his exam. He passed!",
   question:'When did he receive the results?',
   answer:'just now',
   acceptedAnswers:['just','a moment ago','very recently'],
   hint:'"just" = il vient de recevoir',explanation:'"Just" avec le Present Perfect exprime une action très récente.'},
  {id:'pp_3_12',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:'Have you ever went abroad for work?',
   answer:'Have you ever been abroad for work?',
   hint:'"have you ever" + participe passé de go = been',explanation:'Le participe passé de "go" est "gone" (ou "been" pour "aller et revenir"). "Went" est le past simple.'}
);

// ── pastPerfect L3 (08-12) ───────────────────────────────────
exercises.pastPerfect.push(
  {id:'ppt_3_08',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:'After she has finished eating, she went to bed.',
   answer:'After she had finished eating, she went to bed.',
   hint:'"after" + Past Perfect pour l\'action antérieure',explanation:'Past Perfect (had + participe passé) pour l\'action accomplie avant une autre action passée.'},
  {id:'ppt_3_09',type:'translate-fr',diffLevel:3,
   instruction:'Traduisez en français.',
   english:'When we arrived at the cinema, the film had already started.',
   answer:"Quand nous sommes arrivés au cinéma, le film avait déjà commencé.",
   hint:'avait commencé = had started',explanation:'Past Perfect pour l\'action antérieure (le film a commencé AVANT notre arrivée).'},
  {id:'ppt_3_10',type:'free-production',diffLevel:3,
   instruction:'Écris une phrase avec le mot donné.',
   keyword:'had never',
   hint:'ex: She had never seen snow before that winter.',
   explanation:'"Had never + participe passé" pour une expérience jamais vécue avant un moment passé.'},
  {id:'ppt_3_11',type:'listening-comp',diffLevel:3,
   instruction:'Écoutez et répondez à la question.',
   audio:'He was nervous because he had never spoken in front of such a large audience before.',
   question:'Why was he nervous?',
   answer:'he had never spoken in front of a large audience before',
   acceptedAnswers:['he had never spoken to a large audience','he had never done it before'],
   hint:'Past Perfect = action avant un moment passé',explanation:'Le Past Perfect explique la cause (antérieure) de l\'état passé.'},
  {id:'ppt_3_12',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:'I found my keys after I looked everywhere.',
   answer:'I found my keys after I had looked everywhere.',
   hint:"'after' indique qu'une action est antérieure → Past Perfect",explanation:'Quand l\'ordre chronologique des actions doit être clarifié, on utilise le Past Perfect pour la première action.'}
);

// ── presentContinuous L2 (10-12) ─────────────────────────────
exercises.presentContinuous.push(
  {id:'prc_2_10',type:'translate',diffLevel:2,
   instruction:'Traduisez en anglais.',
   french:"Pourquoi est-ce qu'il crie comme ça ?",
   answer:'Why is he shouting like that?',
   acceptedAnswers:['Why is he yelling like that?'],
   hint:'crier = shout/yell → shouting/yelling',explanation:'Present Continuous interrogatif : Why + is + sujet + verbe-ing.'},
  {id:'prc_2_11',type:'listening',diffLevel:2,
   instruction:'Écoutez et écrivez ce que vous entendez.',
   audio:"They aren't playing football today because of the rain.",
   answer:"They aren't playing football today because of the rain.",
   hint:'Present Continuous négatif',explanation:'"Aren\'t + verbe-ing" pour la forme négative du Present Continuous.'},
  {id:'prc_2_12',type:'word-order',diffLevel:2,
   instruction:'Mettez les mots dans le bon ordre.',
   words:['Is','your','sister','studying','medicine','at','university','?'],
   answer:'Is your sister studying medicine at university?',
   hint:'Is + sujet + verbe-ing ?',explanation:'Question au Present Continuous : is/are + sujet + verbe-ing.'}
);

// ── presentSimple L2 (12) ────────────────────────────────────
exercises.presentSimple.push(
  {id:'prs_2_12',type:'translate',diffLevel:2,
   instruction:'Traduisez en anglais.',
   french:"Est-ce que les banques ouvrent le samedi dans ton pays ?",
   answer:'Do banks open on Saturdays in your country?',
   acceptedAnswers:['Do banks open on Saturday in your country?'],
   hint:'Do + sujet pluriel + base verb',explanation:'Question au Present Simple (pluriel) : Do + sujet + base verb.'}
);

// ── pastSimple L2 (11-12) ────────────────────────────────────
exercises.pastSimple.push(
  {id:'pts_2_11',type:'translate',diffLevel:2,
   instruction:'Traduisez en anglais.',
   french:"Elle n'a pas répondu à son message.",
   answer:"She didn't reply to his message.",
   acceptedAnswers:["She did not reply to his message.","She didn't answer his message."],
   hint:"didn't + base verb (pas de -ed après didn't)",explanation:'"Didn\'t + base verb" pour la forme négative du Past Simple.'},
  {id:'pts_2_12',type:'listening',diffLevel:2,
   instruction:'Écoutez et écrivez ce que vous entendez.',
   audio:"Did you see the news last night? It was very shocking.",
   answer:"Did you see the news last night? It was very shocking.",
   hint:'"Did + sujet + base verb ?" pour la question',explanation:'Question au Past Simple : Did + sujet + base verb.'}
);

// ── passiveVoice L3 (08-12) ──────────────────────────────────
exercises.passiveVoice.push(
  {id:'pv_3_08',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:'The letter was wrote by an anonymous person.',
   answer:'The letter was written by an anonymous person.',
   hint:'"write" est irrégulier : write/wrote/written',explanation:'Voix passive : was/were + participe passé. "Written" pas "wrote".'},
  {id:'pv_3_09',type:'translate-fr',diffLevel:3,
   instruction:'Traduisez en français.',
   english:'The new hospital will be built next to the school.',
   answer:'Le nouvel hôpital sera construit à côté de l\'école.',
   hint:'will be built = sera construit',explanation:'Voix passive au futur : will be + participe passé.'},
  {id:'pv_3_10',type:'free-production',diffLevel:3,
   instruction:'Écris une phrase avec le mot donné.',
   keyword:'was invented',
   hint:'ex: The telephone was invented by Alexander Graham Bell.',
   explanation:'Voix passive au passé : was/were + participe passé. "By" introduit l\'agent.'},
  {id:'pv_3_11',type:'listening-comp',diffLevel:3,
   instruction:'Écoutez et répondez à la question.',
   audio:'English is spoken as an official language in more than fifty countries.',
   question:'How many countries have English as an official language?',
   answer:'more than fifty',
   acceptedAnswers:['more than 50','over fifty','over 50'],
   hint:'voix passive au présent : is spoken',explanation:'Voix passive au présent : is/are + participe passé.'},
  {id:'pv_3_12',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:'The documents have been sign by all the managers.',
   answer:'The documents have been signed by all the managers.',
   hint:'Present Perfect passif : have been + participe passé',explanation:'Present Perfect passif : have/has been + participe passé.'}
);

// ── reportedSpeech L3 (08-12) ────────────────────────────────
exercises.reportedSpeech.push(
  {id:'rs_3_08',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:'She said that she can help us tomorrow.',
   answer:'She said that she could help us tomorrow.',
   hint:'"can" → "could" au discours indirect',explanation:'Au discours indirect, "can" devient "could".'},
  {id:'rs_3_09',type:'translate-fr',diffLevel:3,
   instruction:'Traduisez en français.',
   english:'He asked me if I had finished the report.',
   answer:"Il m'a demandé si j'avais terminé le rapport.",
   hint:'if = si (question indirecte)',explanation:'Dans le discours indirect, la question devient une proposition avec "if/whether".'},
  {id:'rs_3_10',type:'free-production',diffLevel:3,
   instruction:'Écris une phrase avec le mot donné.',
   keyword:'told me that',
   hint:'ex: She told me that she was tired.',
   explanation:'"Tell" + complément + "that" + proposition au passé dans le discours indirect.'},
  {id:'rs_3_11',type:'listening-comp',diffLevel:3,
   instruction:'Écoutez et répondez à la question.',
   audio:'"I will call you tonight," he said.',
   question:'How would you report this in indirect speech?',
   answer:'he said he would call me that night',
   acceptedAnswers:['he said that he would call me that night','he told me he would call me that night'],
   hint:'"will" → "would", "tonight" → "that night"',explanation:'Au discours indirect : will → would, tonight → that night.'},
  {id:'rs_3_12',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:'He said me that the shop was closed.',
   answer:'He told me that the shop was closed.',
   hint:'"say" ne prend pas de complément de personne direct',explanation:'"Say" ne prend pas de pronom complément. On dit "tell me" mais "say that".'}
);

// ── someAny L2 (08-12) ───────────────────────────────────────
exercises.someAny.push(
  {id:'sa_2_08',type:'translate',diffLevel:2,
   instruction:'Traduisez en anglais.',
   french:"Il reste encore du café dans la cafetière.",
   answer:'There is still some coffee in the coffee maker.',
   acceptedAnswers:['There is some coffee left in the coffee maker.','There is still some coffee in the pot.'],
   hint:'"some" dans les affirmatives',explanation:'"Some" s\'utilise dans les phrases affirmatives.'},
  {id:'sa_2_09',type:'listening',diffLevel:2,
   instruction:'Écoutez et écrivez ce que vous entendez.',
   audio:"Would you like some more rice? There is plenty left.",
   answer:"Would you like some more rice? There is plenty left.",
   hint:'"some" dans les offres (même interrogatives)',explanation:'"Some" dans les offres polies même à la forme interrogative.'},
  {id:'sa_2_10',type:'word-order',diffLevel:2,
   instruction:'Mettez les mots dans le bon ordre.',
   words:["I","don't","have","any","money","left","today","."],
   answer:"I don't have any money left today.",
   hint:'"any" dans les négatives',explanation:'"Any" s\'utilise dans les phrases négatives.'},
  {id:'sa_2_11',type:'translate',diffLevel:2,
   instruction:'Traduisez en anglais.',
   french:"Est-ce qu'il y a quelqu'un à la maison ?",
   answer:'Is there anyone at home?',
   acceptedAnswers:['Is there somebody at home?','Is anyone at home?'],
   hint:'"anyone/somebody" dans les questions',explanation:'"Anyone" ou "somebody" pour les personnes dans les questions.'},
  {id:'sa_2_12',type:'listening',diffLevel:2,
   instruction:'Écoutez et écrivez ce que vous entendez.',
   audio:"There isn't anything interesting on television tonight.",
   answer:"There isn't anything interesting on television tonight.",
   hint:'"anything" = négatif de "something"',explanation:'"Anything" dans les phrases négatives remplace "something".'}
);

// ── tenseChooser L3 (06-12) ──────────────────────────────────
exercises.tenseChooser.push(
  {id:'tc_3_06',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:'By the time she gets home, he will already leave.',
   answer:'By the time she gets home, he will already have left.',
   hint:'by the time + présent → Future Perfect dans la principale',explanation:'"By the time" + présent simple implique le Future Perfect dans la principale.'},
  {id:'tc_3_07',type:'translate-fr',diffLevel:3,
   instruction:'Traduisez en français.',
   english:'I had been waiting for an hour when the bus finally arrived.',
   answer:"J'attendais depuis une heure quand le bus est enfin arrivé.",
   hint:'had been waiting = attendais depuis',explanation:'Past Perfect Continuous pour une action en cours avant un événement passé.'},
  {id:'tc_3_08',type:'free-production',diffLevel:3,
   instruction:'Écris une phrase avec le mot donné.',
   keyword:'used to',
   hint:'ex: She used to walk to school when she was young.',
   explanation:'"Used to + base verb" exprime une habitude ou état passé qui n\'existe plus.'},
  {id:'tc_3_09',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:'When I was young, I would used to play in the streets.',
   answer:'When I was young, I used to play in the streets.',
   hint:'"would" et "used to" ne se combinent pas',explanation:'"Would" et "used to" sont deux alternatives pour les habitudes passées, pas à combiner.'},
  {id:'tc_3_10',type:'listening-comp',diffLevel:3,
   instruction:'Écoutez et répondez à la question.',
   audio:'She has been learning English for three years but she still makes mistakes.',
   question:'Which tense describes her ongoing learning?',
   answer:'present perfect continuous',
   acceptedAnswers:['present perfect continuous','present perfect progressive'],
   hint:'has been + verbe-ing = durée en cours',explanation:'Present Perfect Continuous : has/have been + verbe-ing pour une action commencée dans le passé et toujours en cours.'},
  {id:'tc_3_11',type:'translate-fr',diffLevel:3,
   instruction:'Traduisez en français.',
   english:'He was about to leave when his friend called.',
   answer:"Il était sur le point de partir quand son ami a appelé.",
   hint:'was about to = était sur le point de',explanation:'"Was/were about to + base verb" exprime une action imminente dans le passé.'},
  {id:'tc_3_12',type:'free-production',diffLevel:3,
   instruction:'Écris une phrase avec le mot donné.',
   keyword:'since',
   hint:'ex: She has lived here since 2015. (Present Perfect + since)',
   explanation:'"Since" + point de départ + Present Perfect pour une durée depuis un moment précis.'}
);

// ── timeMarkers L3 (08-12) ───────────────────────────────────
exercises.timeMarkers.push(
  {id:'tm_3_08',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:"I haven't seen her since two years.",
   answer:"I haven't seen her for two years.",
   hint:'"for" + durée, "since" + point de départ',explanation:'"For" + durée (two years). "Since" + point de départ (2020, last year, etc.).'},
  {id:'tm_3_09',type:'translate-fr',diffLevel:3,
   instruction:'Traduisez en français.',
   english:'By the time the ambulance arrived, the accident had already happened.',
   answer:"Quand l'ambulance est arrivée, l'accident s'était déjà produit.",
   hint:'by the time = quand / au moment où',explanation:'"By the time" indique la limite temporelle. Past Perfect pour l\'action antérieure.'},
  {id:'tm_3_10',type:'free-production',diffLevel:3,
   instruction:'Écris une phrase avec le mot donné.',
   keyword:'as soon as',
   hint:'ex: I will call you as soon as I arrive.',
   explanation:'"As soon as" + présent simple pour les actions futures dans une subordonnée.'},
  {id:'tm_3_11',type:'listening-comp',diffLevel:3,
   instruction:'Écoutez et répondez à la question.',
   audio:'She had been working there for fifteen years before she was promoted.',
   question:'How long had she worked there before the promotion?',
   answer:'fifteen years',
   acceptedAnswers:['for fifteen years','15 years'],
   hint:'Past Perfect pour la durée avant un événement passé',explanation:'Past Perfect (+ for) pour exprimer la durée d\'une action avant un autre événement passé.'},
  {id:'tm_3_12',type:'error-correct',diffLevel:3,
   instruction:"Trouvez et corrigez l'erreur.",
   sentence:'I will call you while I arrive at the station.',
   answer:'I will call you when I arrive at the station.',
   hint:'"while" pour des actions simultanées, "when" pour un moment',explanation:'"When" introduit un moment précis. "While" introduit une action en cours simultanée.'}
);
"""

with open(EXERCISES_PATH, encoding='utf-8') as f:
    src = f.read()

insert_pos = src.index('export function getAllExercises()')
new_src = src[:insert_pos] + NEW + '\n' + src[insert_pos:]

with open(EXERCISES_PATH, 'w', encoding='utf-8') as f:
    f.write(new_src)

print('Batch 5 done: filled gaps in 25 topics to reach minimum 12 exercises per level.')
