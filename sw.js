/* ═══════════════════════════════════════════════════
   SigilForge Service Worker  –  Cache-first strategy
   ═══════════════════════════════════════════════════ */

const APP_VERSION = '1.0';
const CACHE_NAME  = `sigilforge-v${APP_VERSION}`;

// Archivos que se pre-cachean al instalar
const PRECACHE = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Share+Tech+Mono&family=MedievalSharp&family=UnifrakturMaguntia&family=Pirata+One&family=Almendra&display=swap'
];

// ── INSTALL: pre-cachear recursos ─────────────────────
// NO llamamos skipWaiting() aquí; el cliente decide cuándo
// aplicar la nueva versión (tras el banner de actualización).
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      cache.addAll(PRECACHE.filter(u => !u.startsWith('http')))
        .then(() =>
          Promise.allSettled(
            PRECACHE.filter(u => u.startsWith('http'))
              .map(u => cache.add(u).catch(() => {}))
          )
        )
    )
  );
});

// ── ACTIVATE: limpiar cachés de versiones anteriores ──
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH: cache-first, red como fallback ─────────────
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }
        const toCache = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, toCache));
        return response;
      }).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});

// ── MESSAGES desde la página ──────────────────────────
self.addEventListener('message', event => {
  // La app pide activar la nueva versión en espera
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  // La app consulta la versión del SW activo
  if (event.data?.type === 'GET_VERSION') {
    event.source?.postMessage({ type: 'SW_VERSION', version: APP_VERSION });
  }
});
