const CACHE_VERSION = "bazi-static-v2026-07-02-voice-cache";
const AUDIO_CACHE = "bazi-story-audio-v1";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app-audio.js",
  "./voice-assets.json",
  "./voice-test.html"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(CORE_ASSETS)).catch(() => undefined)
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys
      .filter((key) => key.startsWith("bazi-static-") && key !== CACHE_VERSION)
      .map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== location.origin || event.request.method !== "GET") return;

  if (/\.(mp3|wav|ogg|m4a)$/i.test(requestUrl.pathname)) {
    event.respondWith(
      caches.open(AUDIO_CACHE).then(async (cache) => {
        const cached = await cache.match(event.request);
        if (cached) return cached;
        const response = await fetch(event.request);
        if (response.ok) cache.put(event.request, response.clone());
        return response;
      }).catch(() => fetch(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
      if (response.ok && ["document", "script", "style", "image"].includes(event.request.destination)) {
        const clone = response.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, clone));
      }
      return response;
    }))
  );
});
