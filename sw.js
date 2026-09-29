const CACHE_NAME = 'garden-party-v1';
const ASSETS_TO_CACHE = [
    'index.html',
    'style.css',
    'script.js',
    'manifest.json',
    'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&family=Noto+Sans+Bengali:wght@400;600&family=Inter:wght@400;600&display=swap'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
