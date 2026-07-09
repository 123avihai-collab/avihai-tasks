const CACHE = 'avihai-tasks-v33';
const ASSETS = ['/avihai-tasks/index.html', '/avihai-tasks/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  const isApp = e.request.mode === 'navigate' ||
    (url.origin === location.origin &&
     (url.pathname.endsWith('/') || url.pathname.endsWith('/index.html') || url.pathname.endsWith('/manifest.json')));
  if (isApp) {
    // App shell: always fetch fresh (bypass the CDN/HTTP cache) so new versions appear immediately.
    e.respondWith(
      fetch(e.request, { cache: 'reload' })
        .then(resp => {
          try { const clone = resp.clone(); caches.open(CACHE).then(c => c.put('/avihai-tasks/index.html', clone)); } catch (_) {}
          return resp;
        })
        .catch(() => caches.match(e.request).then(r => r || caches.match('/avihai-tasks/index.html')))
    );
  } else {
    // Everything else (CDN scripts, Firebase, Google APIs): normal network, cache fallback.
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
  }
});
