const CACHE = 'english-academy-v1';

const ASSETS = [
  '/',
  '/index.html',
  '/src/main.js',
  '/src/storage.js',
  '/src/sm2.js',
  '/src/tts.js',
  '/src/styles/main.css',
  '/src/data/topics.js',
  '/src/data/exercises.js',
  '/src/data/theory.js',
  '/src/views/ProfileView.js',
  '/src/views/DashboardView.js',
  '/src/views/ExerciseView.js',
  '/src/views/TheoryView.js',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      const network = fetch(e.request).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
