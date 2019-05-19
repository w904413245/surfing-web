const cacheName = 'cache-v1';
const precacheResources = [
    '/',
    'index.html',
    'HeaderPage.html',
    'css/style-zjm.css',
    'css/style.css',
    'images/busy.png',
    'images/chat.png',
    'images/example.jpg',
    'images/lesslumpy.png',
    'images/lumpy.png',
    'images/n.png',
    'images/notbusy.png',
    'images/pic.png',
    'images/piechart.jpg',
    'images/strongwave.png',
    'images/subcription.jpg',
    'images/user.jpg',
    'images/weakwave.png',
];

self.addEventListener('install', event => {
  console.log('Service worker install event!');
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(precacheResources);
      })
  );
});

self.addEventListener('activate', event => {
  console.log('Service worker activate event!');
});

self.addEventListener('fetch', event => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(caches.match(event.request)
    .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      })
    );
});