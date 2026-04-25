import { renderProfileSelector } from './views/ProfileView.js';
import { renderDashboard } from './views/DashboardView.js';
import { renderExercise } from './views/ExerciseView.js';
import { renderTheory } from './views/TheoryView.js';
import { renderVocabulary } from './views/VocabularyView.js';
import { renderDialogueList, renderDialogue } from './views/DialogueView.js';
import { getActiveProfile } from './storage.js';

const app = document.getElementById('app');

function parseHash() {
  const raw = location.hash.slice(1) || '';
  const [path, qs] = raw.split('?');
  const params = new URLSearchParams(qs || '');
  return { path, params };
}

function router() {
  const { path, params } = parseHash();
  const profile = getActiveProfile();

  if (!profile && path !== 'profiles' && path !== 'assessment') {
    location.hash = '#profiles';
    return;
  }

  app.innerHTML = '';
  let view;

  switch (path) {
    case 'profiles':
      view = renderProfileSelector();
      break;
    case 'dashboard':
      view = renderDashboard();
      break;
    case 'exercise':
      view = renderExercise(params.get('topic'), params.get('mode') || 'topic');
      break;
    case 'theory':
      view = renderTheory(params.get('topic'));
      break;
    case 'vocabulary':
      view = renderVocabulary(params.get('cat'));
      break;
    case 'dialogues':
      view = renderDialogueList();
      break;
    case 'dialogue':
      view = renderDialogue(params.get('id'));
      break;
    case 'assessment':
      view = renderExercise('assessment', 'assessment');
      break;
    default:
      view = profile ? renderDashboard() : renderProfileSelector();
  }

  if (view) app.appendChild(view);
}

window.addEventListener('hashchange', router);
window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }
  if (!location.hash || location.hash === '#') {
    location.hash = getActiveProfile() ? '#dashboard' : '#profiles';
  } else {
    router();
  }
});
