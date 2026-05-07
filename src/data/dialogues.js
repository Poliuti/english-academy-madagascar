// Dialogues : scénarios de conversation avec difficulté progressive.
// Chaque dialogue propose des "lignes à compléter" : soit traduction, soit choix multiple, soit écoute.

export const DIALOGUE_SCENARIOS = [
  {
    id: 'greetings',
    title: 'Se Présenter',
    icon: '👋',
    level: 'A1',
    description: 'Première rencontre : dire bonjour et se présenter',
    malgasy: 'Mifankazatra : miarahaba ka manambara ny anarana',
  },
  {
    id: 'market',
    title: 'Au Marché',
    icon: '🛒',
    level: 'A1',
    description: 'Acheter des fruits et légumes',
    malgasy: 'Mividy voankazo sy legioma',
  },
  {
    id: 'directions',
    title: 'Demander son Chemin',
    icon: '🗺️',
    level: 'A2',
    description: 'Comment aller quelque part',
    malgasy: 'Manontany lalana',
  },
  {
    id: 'restaurant',
    title: 'Au Restaurant',
    icon: '🍽️',
    level: 'A2',
    description: 'Commander de la nourriture',
    malgasy: 'Mitendry sakafo',
  },
  {
    id: 'doctor',
    title: 'Chez le Médecin',
    icon: '🏥',
    level: 'A2',
    description: 'Décrire un problème de santé',
    malgasy: 'Miresaka amin\'ny dokotera',
  },
  {
    id: 'phone',
    title: 'Appel Téléphonique',
    icon: '📞',
    level: 'B1',
    description: 'Répondre et prendre un message',
    malgasy: 'Fiantsoana an-telefaona',
  },
  {
    id: 'interview',
    title: 'Entretien d\'Embauche',
    icon: '💼',
    level: 'B1',
    description: 'Se présenter professionnellement',
    malgasy: 'Fanadihadiana asa',
  },
  {
    id: 'ecole',
    title: 'À l\'École',
    icon: '🏫',
    level: 'A1',
    description: 'Parler de l\'école et des cours',
    malgasy: 'Ny fiainana an-tsekoly',
  },
  {
    id: 'sport',
    title: 'Le Sport',
    icon: '⚽',
    level: 'A2',
    description: 'Parler de ses sports préférés',
    malgasy: 'Ny fanatanjahan-tena',
  },
  {
    id: 'famille',
    title: 'La Famille',
    icon: '👨‍👩‍👧',
    level: 'A1',
    description: 'Présenter les membres de sa famille',
    malgasy: 'Ny fianakaviana',
  },
  {
    id: 'shopping',
    title: 'Faire les Courses',
    icon: '🛍️',
    level: 'A2',
    description: 'Acheter des vêtements au marché',
    malgasy: 'Mividy fitafiana',
  },
  {
    id: 'weekend',
    title: 'Le Week-end',
    icon: '🎉',
    level: 'A2',
    description: 'Raconter et planifier son week-end',
    malgasy: 'Ny herinandro farany',
  },
];

// Chaque dialogue = array de "turns"
// turn = { speaker: 'A' | 'B', text: 'English sentence', translation: 'French', mg?: 'Malagasy', task?: {...} }
// task types :
//  - null : on affiche juste (narration)
//  - { type: 'fill', answer: 'English', hint: '...', french: 'aide' } : l'élève doit écrire
//  - { type: 'choice', options: [...], answer: 'correct option' } : choix multiple
//  - { type: 'listen', answer: 'full sentence' } : écoute et écrit

export const DIALOGUES = {

  greetings: [
    {
      title: 'Rencontre au parc',
      turns: [
        { speaker: 'A', text: 'Hello! My name is Anna. What\'s your name?', fr: 'Bonjour ! Je m\'appelle Anna. Comment t\'appelles-tu ?' },
        { speaker: 'B', text: '___', task: { type: 'fill', answer: 'Hello! My name is Paul.', french: 'Bonjour ! Je m\'appelle Paul.', hint: '"Bonjour" = Hello / Hi. "Je m\'appelle" = My name is'
,
        alternatives: ['Hi! My name is Paul.', 'Hello! I am Paul.', 'Hi! I am Paul.', 'Hello, my name is Paul.', 'Hi, my name is Paul.', 'My name is Paul.']
      } },
        { speaker: 'A', text: 'Nice to meet you, Paul. Where are you from?', fr: 'Enchantée Paul. D\'où viens-tu ?' },
        { speaker: 'B', text: '___', task: { type: 'fill', answer: 'I am from Madagascar.', french: 'Je viens de Madagascar.', hint: '"Venir de" = to be from. I am from...'
,
        alternatives: ['I come from Madagascar.', 'I am from Madagascar']
      } },
        { speaker: 'A', text: 'How old are you?', fr: 'Quel âge as-tu ?' },
        { speaker: 'B', text: '___', task: { type: 'fill', answer: 'I am 15 years old.', french: 'J\'ai 15 ans.', hint: 'En anglais, on utilise "be" pour l\'âge : I am ___ years old.'
,
        alternatives: ['I am fifteen years old.', 'I am 15.', 'I am fifteen.', 'I am 15 years old']
      } },
        { speaker: 'A', text: 'Great! See you soon!', fr: 'Super ! À bientôt !' },
        { speaker: 'B', text: '___', task: { type: 'choice', options: ['Goodbye! See you soon!', 'Hello! How are you?', 'Thank you very much.'], answer: 'Goodbye! See you soon!', hint: 'Comment dit-on "Au revoir, à bientôt" ?' } },
      ]
    }
  ],

  market: [
    {
      title: 'Acheter des fruits',
      turns: [
        { speaker: 'Vendeur', text: 'Good morning! Can I help you?', fr: 'Bonjour ! Puis-je vous aider ?' },
        { speaker: 'Vous', text: '___', task: { type: 'fill', answer: 'Yes, I would like some bananas.', french: 'Oui, je voudrais des bananes.', hint: '"Je voudrais" = I would like (plus poli que "I want")'
,
        alternatives: ['Yes, I want some bananas, please.', 'Yes, bananas please.', 'I would like bananas please.', 'Yes, I would like bananas.', 'Yes, I would like some bananas', 'I want some bananas.', 'I want some bananas, please.']
      } },
        { speaker: 'Vendeur', text: 'How many do you want?', fr: 'Combien en voulez-vous ?' },
        { speaker: 'Vous', text: '___', task: { type: 'fill', answer: 'Five, please.', french: 'Cinq, s\'il vous plaît.', hint: '5 = five'
,
        alternatives: ['Five bananas.', 'Five.', 'I want five.', 'Give me five, please.', 'Five bananas, please.', 'I would like five.', 'I would like five, please.']
      } },
        { speaker: 'Vendeur', text: 'That\'s 2000 Ariary.', fr: 'Ça fait 2000 Ariary.' },
        { speaker: 'Vous', text: '___', task: { type: 'choice', options: ['Here you are. Thank you!', 'I don\'t understand.', 'Goodbye!'], answer: 'Here you are. Thank you!', hint: '"Voici" / "tenez" = Here you are' } },
        { speaker: 'Vendeur', text: 'Thank you! Have a nice day.', fr: 'Merci ! Bonne journée.' },
      ]
    }
  ],

  directions: [
    {
      title: 'Aller à la poste',
      turns: [
        { speaker: 'Touriste', text: 'Excuse me, where is the post office?', fr: 'Excusez-moi, où est la poste ?' },
        { speaker: 'Vous', text: '___', task: { type: 'fill', answer: 'Go straight and turn left.', french: 'Allez tout droit et tournez à gauche.', hint: '"Tout droit" = straight. "À gauche" = left.'
,
        alternatives: ['Go straight, then turn left.', 'Go straight and then turn left.', 'Go straight ahead and turn left.', 'Go straight ahead, then turn left.', 'Straight ahead and turn left.']
      } },
        { speaker: 'Touriste', text: 'Is it far?', fr: 'C\'est loin ?' },
        { speaker: 'Vous', text: '___', task: { type: 'choice', options: ['No, it\'s just five minutes.', 'Yes, I am hungry.', 'I don\'t like it.'], answer: 'No, it\'s just five minutes.', hint: 'La question : "C\'est loin ?"' } },
        { speaker: 'Touriste', text: 'Thank you very much!', fr: 'Merci beaucoup !' },
        { speaker: 'Vous', text: '___', task: { type: 'fill', answer: 'You are welcome.', french: 'De rien.', hint: 'Réponse à "thank you"'
,
        alternatives: ['Not at all.', 'No problem.', 'My pleasure.', 'No worries.', 'It is my pleasure.', 'That is alright.', 'No problem at all.']
      } },
      ]
    }
  ],

  restaurant: [
    {
      title: 'Commander un repas',
      turns: [
        { speaker: 'Serveur', text: 'Good evening. Are you ready to order?', fr: 'Bonsoir. Êtes-vous prêt à commander ?' },
        { speaker: 'Client', text: '___', task: { type: 'fill', answer: 'Yes, I would like chicken and rice.', french: 'Oui, je voudrais du poulet et du riz.', hint: '"Poulet" = chicken. "Riz" = rice.'
,
        alternatives: ['Yes, I want chicken and rice, please.', 'Chicken and rice, please.', 'I would like chicken and rice.', 'I would like chicken and rice, please.', 'Yes, I want chicken and rice.', 'I want chicken and rice.', 'Chicken and rice.']
      } },
        { speaker: 'Serveur', text: 'Would you like something to drink?', fr: 'Voulez-vous quelque chose à boire ?' },
        { speaker: 'Client', text: '___', task: { type: 'fill', answer: 'A glass of water, please.', french: 'Un verre d\'eau, s\'il vous plaît.', hint: '"Un verre de" = A glass of'
,
        alternatives: ['Water, please.', 'Could I have a glass of water, please?', 'I would like a glass of water, please.', 'I would like a glass of water.', 'Can I have a glass of water, please?', 'Can I have some water, please?', 'Some water, please.']
      } },
        { speaker: 'Serveur', text: 'Here is your meal. Enjoy!', fr: 'Voici votre repas. Bon appétit !' },
        { speaker: 'Client', text: '___', task: { type: 'choice', options: ['Thank you! It looks delicious.', 'I don\'t have money.', 'Where is the bus stop?'], answer: 'Thank you! It looks delicious.', hint: 'Comment remercier et complimenter le plat ?' } },
        { speaker: 'Client', text: '(plus tard) ___', task: { type: 'fill', answer: 'The bill, please.', french: 'L\'addition, s\'il vous plaît.', hint: '"Addition" = bill (UK) ou check (US)'
,
        alternatives: ['Can I get the bill, please?', 'Could I have the bill?', 'The bill please.', 'Check, please.', 'Could I have the bill, please?', 'I would like the bill, please.']
      } },
      ]
    }
  ],

  doctor: [
    {
      title: 'Consultation médicale',
      turns: [
        { speaker: 'Médecin', text: 'Good morning. What\'s the problem?', fr: 'Bonjour. Quel est le problème ?' },
        { speaker: 'Patient', text: '___', task: { type: 'fill', answer: 'I have a headache and a fever.', french: 'J\'ai mal à la tête et de la fièvre.', hint: '"Avoir mal à la tête" = have a headache. "Fièvre" = fever.'
,
        alternatives: ['I have a headache and fever.', 'I have a headache. I also have a fever.', 'I have a headache and a temperature.', 'My head hurts and I have a fever.']
      } },
        { speaker: 'Médecin', text: 'Since when?', fr: 'Depuis quand ?' },
        { speaker: 'Patient', text: '___', task: { type: 'fill', answer: 'Since yesterday.', french: 'Depuis hier.', hint: '"Depuis" = since. "Hier" = yesterday.'
,
        alternatives: ['Yesterday.', 'Since last night.', 'Since yesterday morning.', 'Since yesterday evening.', 'For one day.', 'From yesterday.']
      } },
        { speaker: 'Médecin', text: 'Do you cough?', fr: 'Toussez-vous ?' },
        { speaker: 'Patient', text: '___', task: { type: 'choice', options: ['No, I don\'t.', 'Yes, I am.', 'I live in Madagascar.'], answer: 'No, I don\'t.', hint: 'Question avec "do" → réponse avec do/don\'t' } },
        { speaker: 'Médecin', text: 'Take this medicine twice a day.', fr: 'Prenez ce médicament deux fois par jour.' },
        { speaker: 'Patient', text: '___', task: { type: 'fill', answer: 'Thank you, doctor.', french: 'Merci, docteur.', hint: 'Remercier le docteur'
,
        alternatives: ['Thanks, doctor.', 'Thank you very much.', 'Thank you.', 'Thanks.', 'Thank you very much, doctor.']
      } },
      ]
    }
  ],

  phone: [
    {
      title: 'Appel au bureau',
      turns: [
        { speaker: 'A', text: 'Hello, this is John speaking. Can I speak to Mary?', fr: 'Bonjour, c\'est John. Puis-je parler à Mary ?' },
        { speaker: 'B', text: '___', task: { type: 'fill', answer: 'She is not here right now.', french: 'Elle n\'est pas là en ce moment.', hint: '"En ce moment" = right now'
,
        alternatives: ['She is not here.', 'She is out right now.', 'She is not here at the moment.', 'She is not available right now.', 'She is out.']
      } },
        { speaker: 'A', text: 'Can I leave a message?', fr: 'Puis-je laisser un message ?' },
        { speaker: 'B', text: '___', task: { type: 'choice', options: ['Of course, go ahead.', 'I am a student.', 'Goodbye and thank you.'], answer: 'Of course, go ahead.', hint: 'Accepter poliment : "bien sûr"' } },
        { speaker: 'A', text: 'Please tell her I called. My number is 033 12 345.', fr: 'Dites-lui que j\'ai appelé. Mon numéro est 033 12 345.' },
        { speaker: 'B', text: '___', task: { type: 'fill', answer: 'I will tell her. Goodbye.', french: 'Je lui dirai. Au revoir.', hint: 'Futur simple : I will tell'
,
        alternatives: ['I will tell her, goodbye.', 'I will let her know. Goodbye.', 'OK, I will tell her. Bye.', 'I will tell her. Bye.', 'I will pass on the message. Goodbye.']
      } },
      ]
    }
  ],

  interview: [
    {
      title: 'Premier entretien',
      turns: [
        { speaker: 'Recruteur', text: 'Tell me about yourself.', fr: 'Parlez-moi de vous.' },
        { speaker: 'Candidat', text: '___', task: { type: 'fill', answer: 'My name is Paul and I am from Madagascar.', french: 'Je m\'appelle Paul et je viens de Madagascar.', hint: 'Commencer par son nom'
,
        alternatives: ['My name is Paul and I come from Madagascar.', 'I am Paul and I come from Madagascar.', 'My name is Paul. I come from Madagascar.', 'My name is Paul, I come from Madagascar.', 'I am Paul and I am from Madagascar.', 'I am Paul. I am from Madagascar.', 'I am Paul. I come from Madagascar.']
      } },
        { speaker: 'Recruteur', text: 'Why do you want this job?', fr: 'Pourquoi voulez-vous ce travail ?' },
        { speaker: 'Candidat', text: '___', task: { type: 'fill', answer: 'I want to learn new things.', french: 'Je veux apprendre de nouvelles choses.', hint: '"Apprendre" = to learn'
,
        alternatives: ['I would like to learn new things.', 'I want to learn new skills.', 'I want to discover new things.', 'I like to learn new things.', 'I love to learn new things.']
      } },
        { speaker: 'Recruteur', text: 'What are your strengths?', fr: 'Quels sont vos points forts ?' },
        { speaker: 'Candidat', text: '___', task: { type: 'choice', options: ['I am hard-working and honest.', 'I don\'t like to work.', 'I need more money.'], answer: 'I am hard-working and honest.', hint: 'Décrire ses qualités positives' } },
        { speaker: 'Recruteur', text: 'Can you speak English fluently?', fr: 'Parlez-vous anglais couramment ?' },
        { speaker: 'Candidat', text: '___', task: { type: 'fill', answer: 'Yes, I can speak English well.', french: 'Oui, je peux parler anglais bien.', hint: '"Bien" = well. Can + verbe'
,
        alternatives: ['Yes, I speak English.', 'Yes, I can speak English.', 'Yes, I speak English well.', 'Yes I can speak English well.', 'Yes, I do speak English.']
      } },
      ]
    }
  ],
  ecole: [
    {
      title: 'Oubli des devoirs',
      turns: [
        { speaker: 'Prof', text: 'Good morning, class. Open your books, please.', fr: 'Bonjour, la classe. Ouvrez vos livres, s\'il vous plaît.' },
        { speaker: 'Élève', text: '___', task: { type: 'fill', answer: 'Good morning, teacher.', french: 'Bonjour, professeur.', hint: '"Professeur" = teacher. "Bonjour" = Good morning.'
,
        alternatives: ['Good morning!', 'Good morning, sir.', 'Good morning, miss.', 'Morning, teacher.', 'Good morning, madam.', "Good morning ma'am."]
      } },
        { speaker: 'Prof', text: 'Did you do your homework?', fr: 'Est-ce que tu as fait tes devoirs ?' },
        { speaker: 'Élève', text: '___', task: { type: 'choice', options: ['No, I forgot. I am sorry.', 'Yes, I want to eat.', 'My name is Paul.'], answer: 'No, I forgot. I am sorry.', hint: '"Oublier" = forget. "Désolé" = sorry.' } },
        { speaker: 'Prof', text: 'Please bring it tomorrow.', fr: 'Apporte-le demain, s\'il te plaît.' },
        { speaker: 'Élève', text: '___', task: { type: 'fill', answer: 'Yes, I will. Thank you.', french: 'Oui, je le ferai. Merci.', hint: '"Je le ferai" = I will. Futur simple.'
,
        alternatives: ['Yes, I will.', 'Yes. Thank you.', 'OK, I will. Thank you.', 'Yes, I will bring it. Thank you.', 'OK. Thank you.', 'Yes, of course. Thank you.']
      } },
        { speaker: 'Prof', text: 'What is your favourite subject?', fr: 'Quelle est ta matière préférée ?' },
        { speaker: 'Élève', text: '___', task: { type: 'fill', answer: 'My favourite subject is English.', french: 'Ma matière préférée est l\'anglais.', hint: '"Matière préférée" = favourite subject. "Anglais" = English.'
,
        alternatives: ['I like English.', 'English is my favourite subject.', 'English is my favorite subject.', 'My favorite subject is English.', 'I love English.', 'English.', 'English is my best subject.', 'I prefer English.']
      } },
      ]
    }
  ],

  sport: [
    {
      title: 'Sports préférés',
      turns: [
        { speaker: 'Ana', text: 'Do you like sports?', fr: 'Est-ce que tu aimes le sport ?' },
        { speaker: 'Paul', text: '___', task: { type: 'fill', answer: 'Yes, I love football.', french: 'Oui, j\'adore le football.', hint: '"J\'adore" = I love. "Football" = football / soccer.'
,
        alternatives: ['Yes, I like football.', 'Yes, I love soccer.', 'Yes, I enjoy football.', 'Football, yes!', 'Yes, I really love football.', 'Yes, I enjoy soccer.']
      } },
        { speaker: 'Ana', text: 'How often do you play?', fr: 'Tu joues combien de fois ?' },
        { speaker: 'Paul', text: '___', task: { type: 'fill', answer: 'I play twice a week.', french: 'Je joue deux fois par semaine.', hint: '"Deux fois par semaine" = twice a week.'
,
        alternatives: ['Twice a week.', 'Two times a week.', 'I play two times a week.', 'I play football twice a week.', 'I play it twice a week.', 'I play two times per week.']
      } },
        { speaker: 'Ana', text: 'Are you good at football?', fr: 'Est-ce que tu es bon au football ?' },
        { speaker: 'Paul', text: '___', task: { type: 'choice', options: ['Yes, I am quite good.', 'I have a headache.', 'The bus is coming.'], answer: 'Yes, I am quite good.', hint: '"Assez bon" = quite good.' } },
        { speaker: 'Ana', text: 'What sport do you prefer: running or swimming?', fr: 'Quel sport préfères-tu : la course ou la natation ?' },
        { speaker: 'Paul', text: '___', task: { type: 'fill', answer: 'I prefer swimming. It is relaxing.', french: 'Je préfère la natation. C\'est relaxant.', hint: '"Préférer" = prefer. "Relaxant" = relaxing.'
,
        alternatives: ['I prefer swimming.', 'Swimming. It is relaxing.', 'I like swimming.', 'Swimming is relaxing.', 'I prefer to swim. It is relaxing.', 'I prefer to swim.', 'Swimming, it is relaxing.']
      } },
      ]
    }
  ],

  famille: [
    {
      title: 'Présenter sa famille',
      turns: [
        { speaker: 'Ami', text: 'Tell me about your family.', fr: 'Parle-moi de ta famille.' },
        { speaker: 'Paul', text: '___', task: { type: 'fill', answer: 'I have a small family.', french: 'J\'ai une petite famille.', hint: '"Petite famille" = small family.'
,
        alternatives: ['My family is small.', 'We are a small family.', 'I have a small family']
      } },
        { speaker: 'Ami', text: 'How many brothers and sisters do you have?', fr: 'Tu as combien de frères et sœurs ?' },
        { speaker: 'Paul', text: '___', task: { type: 'fill', answer: 'I have one brother and two sisters.', french: 'J\'ai un frère et deux sœurs.', hint: '"Frère" = brother. "Sœur" = sister.'
,
        alternatives: ['I have a brother and two sisters.', 'One brother and two sisters.', 'I have 1 brother and 2 sisters.', 'I have one brother and 2 sisters.', 'I have 1 brother and two sisters.', 'A brother and two sisters.']
      } },
        { speaker: 'Ami', text: 'What does your father do?', fr: 'Que fait ton père ?' },
        { speaker: 'Paul', text: '___', task: { type: 'choice', options: ['He is a farmer.', 'She is at home.', 'I am a student.'], answer: 'He is a farmer.', hint: '"Agriculteur" = farmer. Le père = He.' } },
        { speaker: 'Ami', text: 'Do you live with your grandparents?', fr: 'Est-ce que tu habites avec tes grands-parents ?' },
        { speaker: 'Paul', text: '___', task: { type: 'fill', answer: 'No, they live in the village.', french: 'Non, ils habitent au village.', hint: '"Ils habitent" = they live. "Village" = village.'
,
        alternatives: ['No, they live in a village.', 'No. They live in the village.', 'No, they live in their village.', 'No, they do not live here.', 'No. They live in a village.']
      } },
      ]
    }
  ],

  shopping: [
    {
      title: 'Acheter un tee-shirt',
      turns: [
        { speaker: 'Vendeur', text: 'Hello! Can I help you?', fr: 'Bonjour ! Je peux vous aider ?' },
        { speaker: 'Vous', text: '___', task: { type: 'fill', answer: 'Yes, I am looking for a tee-shirt.', french: 'Oui, je cherche un tee-shirt.', hint: '"Je cherche" = I am looking for.'
,
        alternatives: ['Yes, I need a tee-shirt.', 'I am looking for a tee-shirt.', 'Yes, a tee-shirt please.', 'Yes, I want a tee-shirt.', 'I need a tee-shirt.', 'I am looking for a t-shirt.', 'Yes, I am looking for a t-shirt.', 'I want a tee-shirt.']
      } },
        { speaker: 'Vendeur', text: 'What size do you need?', fr: 'Quelle taille vous faut-il ?' },
        { speaker: 'Vous', text: '___', task: { type: 'choice', options: ['Medium, please.', 'I want to go home.', 'It is too expensive.'], answer: 'Medium, please.', hint: 'Les tailles : small, medium, large' } },
        { speaker: 'Vendeur', text: 'What colour do you prefer?', fr: 'Quelle couleur préférez-vous ?' },
        { speaker: 'Vous', text: '___', task: { type: 'fill', answer: 'I prefer blue or black.', french: 'Je préfère le bleu ou le noir.', hint: '"Bleu" = blue. "Noir" = black.'
,
        alternatives: ['Blue or black, please.', 'I like blue or black.', 'Blue or black.', 'I would like blue or black.', 'Blue or black would be nice.']
      } },
        { speaker: 'Vendeur', text: 'This one is five thousand ariary.', fr: 'Celui-ci coûte cinq mille ariary.' },
        { speaker: 'Vous', text: '___', task: { type: 'fill', answer: 'I will take it. Thank you.', french: 'Je le prends. Merci.', hint: '"Je le prends" = I will take it.'
,
        alternatives: ['OK, I will take it.', 'I will take it.', 'I will take this one. Thank you.', 'I will buy it. Thank you.', 'I will take it, thank you.']
      } },
      ]
    }
  ],

  weekend: [
    {
      title: 'Le week-end passé',
      turns: [
        { speaker: 'Marie', text: 'What did you do last weekend?', fr: 'Qu\'est-ce que tu as fait le week-end dernier ?' },
        { speaker: 'Paul', text: '___', task: { type: 'fill', answer: 'I went to the beach with my family.', french: 'Je suis allé à la plage avec ma famille.', hint: '"Aller" (passé) = went. "Plage" = beach.'
,
        alternatives: ['I visited the beach with my family.', 'I went to the beach.', 'We went to the beach.', 'I went to the beach with my parents.', 'We visited the beach.', 'I spent time at the beach with my family.']
      } },
        { speaker: 'Marie', text: 'Did you swim?', fr: 'Est-ce que tu as nagé ?' },
        { speaker: 'Paul', text: '___', task: { type: 'choice', options: ['Yes, the water was great!', 'No, I like coffee.', 'I am studying now.'], answer: 'Yes, the water was great!', hint: 'Répondre au passé : Did + Yes/No + détail.' } },
        { speaker: 'Marie', text: 'What will you do next weekend?', fr: 'Qu\'est-ce que tu feras le prochain week-end ?' },
        { speaker: 'Paul', text: '___', task: { type: 'fill', answer: 'I will visit my grandparents.', french: 'Je rendrai visite à mes grands-parents.', hint: '"Je rendrai visite" = I will visit. Futur avec will.'
,
        alternatives: ['I will see my grandparents.', 'I am going to visit my grandparents.', 'I am going to see my grandparents.', 'I plan to visit my grandparents.', 'I will go to my grandparents.']
      } },
        { speaker: 'Marie', text: 'That sounds nice! Have a good weekend.', fr: 'Ça a l\'air bien ! Bon week-end.' },
        { speaker: 'Paul', text: '___', task: { type: 'fill', answer: 'Thank you! You too!', french: 'Merci ! Toi aussi !', hint: '"Toi aussi" = You too.'
,
        alternatives: ['Thank you! Same to you!', 'Thank you. You too.', 'Thank you, same to you!', 'Thanks! You too!', 'Thank you! You too']
      } },
      ]
    }
  ],

};

export function getDialoguesByScenario(scenarioId) {
  return DIALOGUES[scenarioId] || [];
}

export function getScenarioById(id) {
  return DIALOGUE_SCENARIOS.find(s => s.id === id);
}
