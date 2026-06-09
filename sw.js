/* ============================================
   JES 2025 – Service Worker
   v2.1 – Auto Update + Cache Strategy
   ============================================ */

const APP_VERSION = 'jes-v2.7';
const CACHE_STATIC = `${APP_VERSION}-static`;
const CACHE_DYNAMIC = `${APP_VERSION}-dynamic`;

// File inti yang WAJIB di-cache saat install
const STATIC_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// ── INSTALL: cache semua asset statis ──
self.addEventListener('install', event => {
  console.log('[SW] Installing version:', APP_VERSION);
  event.waitUntil(
    caches.open(CACHE_STATIC)
      .then(cache => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        // skipWaiting: SW baru langsung aktif tanpa menunggu tab ditutup
        console.log('[SW] skipWaiting — ready to take over');
        return self.skipWaiting();
      })
      .catch(err => console.warn('[SW] Install cache error:', err))
  );
});

// ── ACTIVATE: hapus cache lama, ambil alih semua klien ──
self.addEventListener('activate', event => {
  console.log('[SW] Activating version:', APP_VERSION);
  event.waitUntil(
    caches.keys().then(cacheNames => {
      const deleteOld = cacheNames
        .filter(name => name !== CACHE_STATIC && name !== CACHE_DYNAMIC)
        .map(name => {
          console.log('[SW] Deleting old cache:', name);
          return caches.delete(name);
        });
      return Promise.all(deleteOld);
    }).then(() => {
      console.log('[SW] Claiming all clients');
      // clients.claim: SW langsung menguasai semua halaman yang terbuka
      return self.clients.claim();
    })
  );
});

// ── FETCH: Strategi cache ──
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Skip non-GET & cross-origin API calls
  if (event.request.method !== 'GET') return;
  if (url.origin !== location.origin && !url.href.includes('fonts.googleapis.com') && !url.href.includes('cdnjs.cloudflare.com')) return;

  // Strategi: Network First untuk HTML & app.js (selalu ambil versi terbaru)
  if (
    event.request.destination === 'document' ||
    url.pathname.endsWith('.html') ||
    url.pathname.endsWith('app.js')
  ) {
    event.respondWith(networkFirstStrategy(event.request));
    return;
  }

  // Strategi: Cache First untuk JS/CSS/fonts/icons (performa)
  if (
    event.request.destination === 'script' ||
    event.request.destination === 'style' ||
    event.request.destination === 'font' ||
    event.request.destination === 'image' ||
    url.href.includes('fonts.googleapis.com') ||
    url.href.includes('cdnjs.cloudflare.com')
  ) {
    event.respondWith(cacheFirstStrategy(event.request));
    return;
  }

  // Default: Network First
  event.respondWith(networkFirstStrategy(event.request));
});

// Network First: coba network, fallback ke cache
async function networkFirstStrategy(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.status === 200) {
      const cache = await caches.open(CACHE_DYNAMIC);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch {
    const cached = await caches.match(request);
    return cached || caches.match('./index.html');
  }
}

// Cache First: ambil dari cache, update cache di background
async function cacheFirstStrategy(request) {
  const cached = await caches.match(request);
  if (cached) {
    // Stale-while-revalidate: update cache di background
    fetch(request).then(response => {
      if (response && response.status === 200) {
        caches.open(CACHE_STATIC).then(cache => cache.put(request, response));
      }
    }).catch(() => {});
    return cached;
  }
  // Tidak ada di cache, ambil dari network dan simpan
  try {
    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.status === 200) {
      const cache = await caches.open(CACHE_STATIC);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch {
    return new Response('Offline', { status: 503 });
  }
}

// ── MESSAGE: komunikasi dengan halaman ──
self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') {
    console.log('[SW] Received SKIP_WAITING, activating new SW');
    self.skipWaiting();
  }
  if (event.data === 'GET_VERSION') {
    event.ports[0].postMessage({ version: APP_VERSION });
  }
});
