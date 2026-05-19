// Emoji fallback map for Tot Kely mode (super-beginner)
// Used when a vocabulary entry has no `icon` field.
// Keyed by English word (lowercase, exact match).

export const TK_EMOJI = {
  // Family
  'mother': '👩', 'father': '👨', 'parents': '👨‍👩‍👧', 'brother': '👦', 'sister': '👧',
  'son': '👶', 'daughter': '👶', 'children': '🧒', 'grandmother': '👵', 'grandfather': '👴',
  'uncle': '🧑', 'aunt': '👩‍🦰', 'cousin': '🧑‍🤝‍🧑', 'husband': '🤵', 'wife': '👰',
  'family': '👨‍👩‍👧‍👦', 'nephew': '👦', 'niece': '👧', 'stepfather': '👨', 'twin': '👯',
  'baby': '👶', 'boy': '👦', 'girl': '👧', 'man': '👨', 'woman': '👩',

  // Body
  'head': '🗣️', 'face': '😊', 'hair': '💇', 'eye': '👁️', 'ear': '👂', 'nose': '👃',
  'mouth': '👄', 'tooth': '🦷', 'tongue': '👅', 'neck': '🧣', 'arm': '💪', 'hand': '✋',
  'finger': '👆', 'leg': '🦵', 'foot': '🦶', 'back': '🫂', 'heart': '❤️', 'stomach': '🫃',
  'knee': '🦵', 'shoulder': '🤷',

  // Food
  'rice': '🍚', 'bread': '🍞', 'meat': '🥩', 'chicken': '🍗', 'fish': '🐟', 'egg': '🥚',
  'milk': '🥛', 'water': '💧', 'tea': '🍵', 'coffee': '☕', 'fruit': '🍎', 'banana': '🍌',
  'apple': '🍎', 'mango': '🥭', 'orange': '🍊', 'tomato': '🍅', 'vegetable': '🥬',
  'sugar': '🍬', 'salt': '🧂', 'oil': '🫒', 'cheese': '🧀', 'butter': '🧈', 'soup': '🍲',
  'cake': '🍰', 'chocolate': '🍫', 'pizza': '🍕', 'pasta': '🍝', 'noodles': '🍜',

  // Colors
  'red': '🟥', 'blue': '🟦', 'green': '🟩', 'yellow': '🟨', 'orange (color)': '🟧',
  'purple': '🟪', 'pink': '🌸', 'brown': '🟫', 'black': '⬛', 'white': '⬜',
  'grey': '⚪', 'gray': '⚪', 'beige': '🟫', 'turquoise': '💎', 'navy': '🔷', 'cream': '🟨',

  // Numbers
  'one': '1️⃣', 'two': '2️⃣', 'three': '3️⃣', 'four': '4️⃣', 'five': '5️⃣',
  'six': '6️⃣', 'seven': '7️⃣', 'eight': '8️⃣', 'nine': '9️⃣', 'ten': '🔟',
  'zero': '0️⃣', 'eleven': '1️⃣1️⃣', 'twelve': '1️⃣2️⃣', 'twenty': '2️⃣0️⃣',
  'hundred': '💯', 'thousand': '🔢',

  // Routine / activities
  'wake up': '⏰', 'get up': '🛏️', 'take a shower': '🚿', 'brush teeth': '🪥',
  'get dressed': '👕', 'have breakfast': '🥞', 'go to school': '🎒', 'have lunch': '🍱',
  'come home': '🏠', 'do homework': '📚', 'have dinner': '🍽️', 'go to bed': '🛌',
  'sleep': '😴', 'watch television': '📺', 'read a book': '📖', 'cook dinner': '👨‍🍳',
  'tidy up': '🧹', 'go for a walk': '🚶', 'water the plants': '🌱', 'set the table': '🍴',
  'play': '⚽', 'run': '🏃', 'walk': '🚶', 'jump': '🤸', 'sing': '🎤', 'dance': '💃',

  // Time
  'monday': '📅', 'tuesday': '📅', 'wednesday': '📅', 'thursday': '📅', 'friday': '📅',
  'saturday': '📅', 'sunday': '📅', 'morning': '🌅', 'afternoon': '☀️', 'evening': '🌆',
  'night': '🌙', 'today': '📆', 'yesterday': '⬅️', 'tomorrow': '➡️', 'now': '⏱️',
  'later': '⏰', 'week': '🗓️', 'month': '📅', 'year': '📆', 'hour': '🕐',

  // Weather (small set)
  'sun': '☀️', 'rain': '🌧️', 'snow': '❄️', 'cloud': '☁️', 'wind': '💨',
  'sunny': '☀️', 'rainy': '🌧️', 'cloudy': '☁️', 'cold': '🥶', 'hot': '🥵', 'warm': '🌡️',

  // Greetings / common phrases
  'hello': '👋', 'goodbye': '👋', 'thank you': '🙏', 'please': '🙏', 'sorry': '😔',
  'yes': '✅', 'no': '❌',

  // School
  'school': '🏫', 'teacher': '👩‍🏫', 'student': '🧑‍🎓', 'book': '📕', 'notebook': '📓',
  'pen': '🖊️', 'pencil': '✏️', 'eraser': '🧽', 'desk': '🪑', 'chair': '🪑',
  'blackboard': '📋', 'classroom': '🏫', 'lesson': '📖', 'homework': '📝', 'test': '📄',
  'question': '❓', 'answer': '💬', 'library': '📚', 'ruler': '📏', 'dictionary': '📔',

  // Places
  'house': '🏠', 'home': '🏡', 'market': '🏪', 'shop': '🏬', 'hospital': '🏥',
  'church': '⛪', 'street': '🛣️', 'road': '🛤️', 'city': '🏙️', 'village': '🏘️',
  'country': '🗺️', 'park': '🏞️', 'restaurant': '🍴', 'post office': '🏤', 'bank': '🏦',

  // Professions
  'doctor': '👨‍⚕️', 'nurse': '👩‍⚕️', 'farmer': '👨‍🌾', 'fisherman': '🎣', 'driver': '🚗',
  'cook': '👨‍🍳', 'policeman': '👮', 'engineer': '👷', 'shopkeeper': '🛒', 'pastor': '⛪',
  'lawyer': '⚖️', 'mechanic': '🔧', 'accountant': '🧮', 'journalist': '📰', 'soldier': '🪖',
  'musician': '🎸', 'businessman': '💼', 'builder': '👷',

  // Adjectives
  'big': '🐘', 'small': '🐜', 'tall': '📏', 'short': '📐', 'long': '➖',
  'good': '👍', 'bad': '👎', 'nice': '😊', 'beautiful': '🌸', 'ugly': '👹',
  'happy': '😄', 'sad': '😢', 'tired': '😩', 'hungry': '🍽️', 'thirsty': '🥤',
  'easy': '✅', 'difficult': '🧗', 'fast': '⚡', 'slow': '🐌', 'new': '✨',
  'old': '👴', 'rich': '💰', 'poor': '🪙',

  // Weather extra
  'windy': '🌬️', 'storm': '⛈️', 'fog': '🌫️', 'temperature': '🌡️', 'season': '🍂',
  'climate': '🌍', 'weather': '🌤️', 'thunder': '🌩️', 'lightning': '⚡', 'humid': '💦',
  'dry': '🏜️', 'mild': '🌤️',

  // Clothes
  'shirt': '👔', 'dress': '👗', 'trousers': '👖', 'skirt': '👚', 'jacket': '🧥',
  'shoes': '👟', 'socks': '🧦', 'hat': '🎩', 'scarf': '🧣', 'coat': '🧥',
  'glasses': '👓', 'bag': '👜', 't-shirt': '👕', 'uniform': '👮', 'jumper': '🧶',
  'belt': '🪢', 'gloves': '🧤', 'swimsuit': '🩱', 'tie': '👔', 'boots': '🥾',

  // House
  'door': '🚪', 'window': '🪟', 'stairs': '🪜', 'roof': '🏠', 'wall': '🧱',
  'floor': '🟫', 'table': '🪑', 'lamp': '💡', 'fridge': '🧊', 'sofa': '🛋️',
  'shelf': '🗄️', 'ceiling': '⬆️', 'curtain': '🪟', 'sink': '🚰', 'garden': '🌷',

  // Emotions
  'angry': '😠', 'scared': '😨', 'surprised': '😲', 'bored': '😑', 'worried': '😟',
  'proud': '😌', 'nervous': '😰', 'calm': '😌', 'love': '❤️', 'smile': '😊',
  'hope': '🤞', 'embarrassed': '😳', 'jealous': '😒', 'grateful': '🙏', 'lonely': '😔',
  'confused': '😕', 'excited': '🤩',

  // Transport
  'car': '🚗', 'bus': '🚌', 'train': '🚆', 'bicycle': '🚲', 'plane': '✈️',
  'boat': '⛵', 'taxi': '🚕', 'motorbike': '🏍️', 'on foot': '🚶', 'station': '🚉',
  'ticket': '🎫', 'helicopter': '🚁', 'ferry': '⛴️', 'tram': '🚊', 'underground': '🚇',
  'port': '⚓', 'traffic': '🚦', 'traffic jam': '🚗', 'petrol station': '⛽',

  // Nature
  'tree': '🌳', 'river': '🏞️', 'mountain': '⛰️', 'sea': '🌊', 'forest': '🌲',
  'flower': '🌸', 'grass': '🌿', 'sky': '🌌', 'moon': '🌙', 'star': '⭐',
  'lake': '🏞️', 'island': '🏝️', 'beach': '🏖️', 'rock': '🪨', 'waterfall': '💦',
  'desert': '🏜️', 'soil': '🟤', 'plant': '🪴',

  // Sports
  'football': '⚽', 'swimming': '🏊', 'running': '🏃', 'basketball': '🏀', 'volleyball': '🏐',
  'cycling': '🚴', 'tennis': '🎾', 'sport': '🏅', 'team': '👥', 'match': '🆚',
  'win': '🏆', 'lose': '😞', 'boxing': '🥊', 'yoga': '🧘', 'gym': '🏋️',
  'race': '🏁', 'championship': '🏆', 'athlete': '🏃', 'score': '🔢',

  // Health
  'headache': '🤕', 'fever': '🤒', 'cough': '😷', 'medicine': '💊', 'healthy': '💪',
  'ill': '🤢', 'pain': '😣', 'rest': '🛌', 'exercise': '🤸', 'diet': '🥗',
  'toothache': '🦷', 'pharmacy': '💊', 'injection': '💉', 'bandage': '🩹', 'allergy': '🤧',
  'appointment': '📅', 'surgery': '🏥',

  // Shopping
  'price': '🏷️', 'cheap': '🪙', 'expensive': '💎', 'buy': '🛒', 'sell': '🤝',
  'money': '💵', 'pay': '💳', 'receipt': '🧾', 'discount': '🏷️', 'queue': '🚶‍♂️',
  'cash': '💵', 'card': '💳', 'supermarket': '🛒', 'change': '🪙', 'sale': '🏷️',
  'size': '📏', 'customer': '🧍',

  // Travel
  'hotel': '🏨', 'airport': '🛫', 'passport': '🛂', 'suitcase': '🧳', 'map': '🗺️',
  'tourist': '📷', 'reservation': '📅', 'trip': '🧳', 'destination': '📍', 'guide': '🧭',
  'visa': '📄', 'currency': '💱', 'luggage': '🧳', 'boarding pass': '🎫', 'customs': '🛃',
  'delay': '⏳', 'souvenir': '🎁', 'adventure': '🗺️', 'journey': '🧭', 'check-in': '🏨',

  // Technology
  'phone': '📱', 'computer': '💻', 'internet': '🌐', 'message': '💬', 'website': '🌐',
  'application': '📲', 'camera': '📷', 'screen': '🖥️', 'battery': '🔋', 'password': '🔑',
  'keyboard': '⌨️', 'mouse': '🖱️', 'printer': '🖨️', 'wifi': '📶', 'charger': '🔌',
  'social media': '📲', 'video call': '📹', 'software': '💿',

  // Activities extra
  'listen to music': '🎧', 'watch tv': '📺', 'draw': '🎨', 'cook': '👨‍🍳', 'swim': '🏊',
  'play guitar': '🎸', 'take photos': '📸', 'write': '✍️', 'paint': '🎨',
  'watch a film': '🎬', 'chat with friends': '💬',
};

/**
 * Get an emoji for a vocab word.
 * Priority: word.icon → TK_EMOJI map → fallback "📖"
 */
export function getTkEmoji(word) {
  if (word?.icon) return word.icon;
  if (!word?.en) return '📖';
  const key = word.en.toLowerCase().trim();
  return TK_EMOJI[key] || '📖';
}

/**
 * Like getTkEmoji but returns '' (no icon) when there is no good match,
 * so normal vocab cards don't all show a generic book fallback.
 */
export function getVocabIcon(word) {
  if (word?.icon) return word.icon;
  if (!word?.en) return '';
  const key = word.en.toLowerCase().trim();
  return TK_EMOJI[key] || '';
}
