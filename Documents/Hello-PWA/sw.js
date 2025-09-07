var cacheName = "hello-pwa";
var filesToCache = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/main.js",
  "/fonts/pic.jpg", 
  "/fonts/Glata-Regular.ttf", 
  "/fonts/Glata-Bold.ttf", 
  "/images/hello-icon-152.png", 
  "/favicon.ico",
  "/manifest.json",
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
