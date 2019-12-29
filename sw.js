var cacheName = 'dml-pwa';
var filesToCache = [
    '/',
    '/index.html',
    '/dist/css/bootstrap.min.css',
    '/dist/fonts/css/all.css',
    '/dist/css/sm-nav-menu.css',
    '/dist/style.css',
    '/dist/nav-menu-4.css',
    '/dist/jquery.js',
    '/dist/js/jquery.sm-nav-menu.js',
    '/dist/scripts.js'];
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});
/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
    e.respondWith(caches.match(e.request).then(function (response) {
        return response || fetch(e.request);
    })
    );
});