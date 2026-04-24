// SM-2 Spaced Repetition Algorithm
// quality: 5=perfect, 4=hesitant, 3=hard but correct, 2=wrong (easy), 1=wrong, 0=blackout
// Maps to our app: correct first try=5, correct with hint=3, wrong=1

const DEFAULT_ITEM = {
  repetitions: 0,
  interval: 1,
  easeFactor: 2.5,
  nextReview: 0,
};

export function getInitialItem() {
  return { ...DEFAULT_ITEM };
}

export function calculateNextReview(item = DEFAULT_ITEM, quality) {
  let { repetitions, interval, easeFactor } = { ...DEFAULT_ITEM, ...item };

  if (quality >= 3) {
    if (repetitions === 0) interval = 1;
    else if (repetitions === 1) interval = 6;
    else interval = Math.round(interval * easeFactor);
    repetitions += 1;
  } else {
    interval = 1;
    repetitions = 0;
  }

  easeFactor = Math.max(
    1.3,
    easeFactor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)
  );

  return {
    repetitions,
    interval,
    easeFactor: Math.round(easeFactor * 1000) / 1000,
    nextReview: Date.now() + interval * 86400000,
  };
}

export function isDue(item) {
  if (!item) return true;
  return Date.now() >= (item.nextReview || 0);
}

export function sortByPriority(exercises, sm2Map) {
  return [...exercises].sort((a, b) => {
    const itemA = sm2Map[a.id];
    const itemB = sm2Map[b.id];
    const dueA = !itemA || isDue(itemA);
    const dueB = !itemB || isDue(itemB);
    if (dueA && !dueB) return -1;
    if (!dueA && dueB) return 1;
    // Among due items: prefer lower ease (harder for student)
    const efA = itemA?.easeFactor ?? 2.5;
    const efB = itemB?.easeFactor ?? 2.5;
    return efA - efB;
  });
}

export function qualityFromResult(correct, usedHint) {
  if (!correct) return 1;
  if (usedHint) return 3;
  return 5;
}
