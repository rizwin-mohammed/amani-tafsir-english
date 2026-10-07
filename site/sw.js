// Service worker: lets the site be installed as an app and read offline.
// Network first: every page, style and script is fetched fresh when there is a connection,
// so newly translated parts always show. A copy of each is kept, and used only when offline.
// scripts/build.mjs fills in the site address and the list of files to save, and adds a version line.
const BASE = '__BASE__';
const SHELL = __SHELL__;
const PAGES = 'amani-tafsir-pages';
const FONTS = 'amani-tafsir-fonts';
const OFFLINE = `${BASE}/en/offline/`;
// If the connection hangs this long and a saved copy exists, show the saved copy.
const TIMEOUT_MS = 10000;

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(PAGES);
    // One by one, so a single failure does not stop the rest from being saved.
    await Promise.allSettled(SHELL.map(async (url) => {
      const res = await fetch(url, { cache: 'no-cache' });
      if (res.ok) await cache.put(url, res);
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keep = [PAGES, FONTS];
    for (const key of await caches.keys()) if (!keep.includes(key)) await caches.delete(key);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin && url.pathname.startsWith(`${BASE}/`)) {
    event.respondWith(networkFirst(req, url));
  } else if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(savedThenRefresh(req));
  }
  // Anything else (for example the GitHub review comments) goes straight to the network.
});

// The saved copy of a page ignores ?review=on and similar, and #anchors.
const key = (url) => url.origin + url.pathname;

async function networkFirst(req, url) {
  const cache = await caches.open(PAGES);
  const nav = req.mode === 'navigate';
  // no-cache: ask the server whether the file changed, instead of trusting the browser's copy.
  const fresh = fetch(url.href, { cache: 'no-cache', credentials: 'same-origin' }).then((res) => {
    // A browser may not show a followed redirect as a page (for example /en/002-al-baqarah to
    // /en/002-al-baqarah/), so send the redirect itself and let the browser follow it.
    if (res.redirected) return Response.redirect(res.url, 302);
    if (res.ok) cache.put(key(url), res.clone());
    return res;
  });
  fresh.catch(() => {});
  const saved = () => cache.match(key(url));
  try {
    const timer = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
    const res = await Promise.race([fresh, timer.then(async () => (await saved()) || fresh)]);
    if (res) return res;
  } catch (e) {
    // Offline: fall through to the saved copy.
  }
  const copy = await saved();
  if (copy) return copy;
  if (nav) {
    const offline = await cache.match(OFFLINE);
    if (offline) return offline;
  }
  return Response.error();
}

// Fonts never change at the same address, so the saved copy is used and refreshed quietly.
async function savedThenRefresh(req) {
  const cache = await caches.open(FONTS);
  const saved = await cache.match(req);
  const fresh = fetch(req).then((res) => {
    if (res.ok || res.type === 'opaque') cache.put(req, res.clone());
    return res;
  }).catch(() => saved);
  return saved || fresh;
}
