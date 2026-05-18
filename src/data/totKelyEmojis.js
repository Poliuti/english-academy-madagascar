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
