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
        { speaker: 'B', text: '___', task: { type: 'fill', answer: 'Hello! My name is Paul.', french: 'Bonjour ! Je m\'appelle Paul.', hint: '"Bonjour" = Hello / Hi. "Je m\'appelle" = My name is' } },
        { speaker: 'A', text: 'Nice to meet you, Paul. Where are you from?', fr: 'Enchantée Paul. D\'où viens-tu ?' },
        { speaker: 'B', text: '___', task: { type: 'fill', answer: 'I am from Madagascar.', french: 'Je viens de Madagascar.', hint: '"Venir de" = to be from. I am from...', alternatives: ['I\'m from Madagascar.'] } },
        { speaker: 'A', text: 'How old are you?', fr: 'Quel âge as-tu ?' },
        { speaker: 'B', text: '___', task: { type: 'fill', answer: 'I am 15 years old.', french: 'J\'ai 15 ans.', hint: 'En anglais, on utilise "be" pour l\'âge : I am ___ years old.', alternatives: ['I\'m 15 years old.', 'I am fifteen years old.'] } },
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
        { speaker: 'Vous', text: '___', task: { type: 'fill', answer: 'Yes, I would like some bananas.', french: 'Oui, je voudrais des bananes.', hint: '"Je voudrais" = I would like (plus poli que "I want")', alternatives: ['Yes, I want some bananas.', 'I would like bananas, please.'] } },
        { speaker: 'Vendeur', text: 'How many do you want?', fr: 'Combien en voulez-vous ?' },
        { speaker: 'Vous', text: '___', task: { type: 'fill', answer: 'Five, please.', french: 'Cinq, s\'il vous plaît.', hint: '5 = five', alternatives: ['Five bananas, please.', 'I want five.', 'I would like five.'] } },
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
        { speaker: 'Vous', text: '___', task: { type: 'fill', answer: 'Go straight and turn left.', french: 'Allez tout droit et tournez à gauche.', hint: '"Tout droit" = straight. "À gauche" = left.', alternatives: ['Go straight, then turn left.', 'Go straight and then turn left.'] } },
        { speaker: 'Touriste', text: 'Is it far?', fr: 'C\'est loin ?' },
        { speaker: 'Vous', text: '___', task: { type: 'choice', options: ['No, it\'s just five minutes.', 'Yes, I am hungry.', 'I don\'t like it.'], answer: 'No, it\'s just five minutes.', hint: 'La question : "C\'est loin ?"' } },
        { speaker: 'Touriste', text: 'Thank you very much!', fr: 'Merci beaucoup !' },
        { speaker: 'Vous', text: '___', task: { type: 'fill', answer: 'You are welcome.', french: 'De rien.', hint: 'Réponse à "thank you"', alternatives: ['You\'re welcome.', 'Not at all.', 'No problem.'] } },
      ]
    }
  ],

  restaurant: [
    {
      title: 'Commander un repas',
      turns: [
        { speaker: 'Serveur', text: 'Good evening. Are you ready to order?', fr: 'Bonsoir. Êtes-vous prêt à commander ?' },
        { speaker: 'Client', text: '___', task: { type: 'fill', answer: 'Yes, I would like chicken and rice.', french: 'Oui, je voudrais du poulet et du riz.', hint: '"Poulet" = chicken. "Riz" = rice.', alternatives: ['Yes, I want chicken and rice.', 'I would like chicken with rice.'] } },
        { speaker: 'Serveur', text: 'Would you like something to drink?', fr: 'Voulez-vous quelque chose à boire ?' },
        { speaker: 'Client', text: '___', task: { type: 'fill', answer: 'A glass of water, please.', french: 'Un verre d\'eau, s\'il vous plaît.', hint: '"Un verre de" = A glass of', alternatives: ['Water, please.', 'I want a glass of water.', 'A glass of water please.'] } },
        { speaker: 'Serveur', text: 'Here is your meal. Enjoy!', fr: 'Voici votre repas. Bon appétit !' },
        { speaker: 'Client', text: '___', task: { type: 'choice', options: ['Thank you! It looks delicious.', 'I don\'t have money.', 'Where is the bus stop?'], answer: 'Thank you! It looks delicious.', hint: 'Comment remercier et complimenter le plat ?' } },
        { speaker: 'Client', text: '(plus tard) ___', task: { type: 'fill', answer: 'The bill, please.', french: 'L\'addition, s\'il vous plaît.', hint: '"Addition" = bill (UK) ou check (US)', alternatives: ['Can I have the bill, please?', 'The check, please.'] } },
      ]
    }
  ],

  doctor: [
    {
      title: 'Consultation médicale',
      turns: [
        { speaker: 'Médecin', text: 'Good morning. What\'s the problem?', fr: 'Bonjour. Quel est le problème ?' },
        { speaker: 'Patient', text: '___', task: { type: 'fill', answer: 'I have a headache and a fever.', french: 'J\'ai mal à la tête et de la fièvre.', hint: '"Avoir mal à la tête" = have a headache. "Fièvre" = fever.', alternatives: ['I have a headache and fever.'] } },
        { speaker: 'Médecin', text: 'Since when?', fr: 'Depuis quand ?' },
        { speaker: 'Patient', text: '___', task: { type: 'fill', answer: 'Since yesterday.', french: 'Depuis hier.', hint: '"Depuis" = since. "Hier" = yesterday.', alternatives: ['Since yesterday morning.'] } },
        { speaker: 'Médecin', text: 'Do you cough?', fr: 'Toussez-vous ?' },
        { speaker: 'Patient', text: '___', task: { type: 'choice', options: ['No, I don\'t.', 'Yes, I am.', 'I live in Madagascar.'], answer: 'No, I don\'t.', hint: 'Question avec "do" → réponse avec do/don\'t' } },
        { speaker: 'Médecin', text: 'Take this medicine twice a day.', fr: 'Prenez ce médicament deux fois par jour.' },
        { speaker: 'Patient', text: '___', task: { type: 'fill', answer: 'Thank you, doctor.', french: 'Merci, docteur.', hint: 'Remercier le docteur', alternatives: ['Thank you very much, doctor.'] } },
      ]
    }
  ],

  phone: [
    {
      title: 'Appel au bureau',
      turns: [
        { speaker: 'A', text: 'Hello, this is John speaking. Can I speak to Mary?', fr: 'Bonjour, c\'est John. Puis-je parler à Mary ?' },
        { speaker: 'B', text: '___', task: { type: 'fill', answer: 'She is not here right now.', french: 'Elle n\'est pas là en ce moment.', hint: '"En ce moment" = right now', alternatives: ['She isn\'t here right now.', 'She is not here at the moment.'] } },
        { speaker: 'A', text: 'Can I leave a message?', fr: 'Puis-je laisser un message ?' },
        { speaker: 'B', text: '___', task: { type: 'choice', options: ['Of course, go ahead.', 'I am a student.', 'Goodbye and thank you.'], answer: 'Of course, go ahead.', hint: 'Accepter poliment : "bien sûr"' } },
        { speaker: 'A', text: 'Please tell her I called. My number is 033 12 345.', fr: 'Dites-lui que j\'ai appelé. Mon numéro est 033 12 345.' },
        { speaker: 'B', text: '___', task: { type: 'fill', answer: 'I will tell her. Goodbye.', french: 'Je lui dirai. Au revoir.', hint: 'Futur simple : I will tell', alternatives: ['I\'ll tell her. Goodbye.', 'I will tell her, goodbye.'] } },
      ]
    }
  ],

  interview: [
    {
      title: 'Premier entretien',
      turns: [
        { speaker: 'Recruteur', text: 'Tell me about yourself.', fr: 'Parlez-moi de vous.' },
        { speaker: 'Candidat', text: '___', task: { type: 'fill', answer: 'My name is Paul and I am from Madagascar.', french: 'Je m\'appelle Paul et je viens de Madagascar.', hint: 'Commencer par son nom', alternatives: ['I\'m Paul and I\'m from Madagascar.', 'My name is Paul, I am from Madagascar.'] } },
        { speaker: 'Recruteur', text: 'Why do you want this job?', fr: 'Pourquoi voulez-vous ce travail ?' },
        { speaker: 'Candidat', text: '___', task: { type: 'fill', answer: 'I want to learn new things.', french: 'Je veux apprendre de nouvelles choses.', hint: '"Apprendre" = to learn', alternatives: ['I want to learn new skills.', 'I would like to learn new things.'] } },
        { speaker: 'Recruteur', text: 'What are your strengths?', fr: 'Quels sont vos points forts ?' },
        { speaker: 'Candidat', text: '___', task: { type: 'choice', options: ['I am hard-working and honest.', 'I don\'t like to work.', 'I need more money.'], answer: 'I am hard-working and honest.', hint: 'Décrire ses qualités positives' } },
        { speaker: 'Recruteur', text: 'Can you speak English fluently?', fr: 'Parlez-vous anglais couramment ?' },
        { speaker: 'Candidat', text: '___', task: { type: 'fill', answer: 'Yes, I can speak English well.', french: 'Oui, je peux parler anglais bien.', hint: '"Bien" = well. Can + verbe', alternatives: ['Yes, I speak English well.', 'Yes, I can.'] } },
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
