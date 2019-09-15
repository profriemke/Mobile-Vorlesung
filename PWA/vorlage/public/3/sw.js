self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('hdm-cache').then(function(cache){
      return cache.add('offline.html');
    })
  );
});

self.addEventListener('fetch', function(e) {
    e.respondWith(        
             fetch(e.request).catch(function() {
               return caches.match('offline.html');
             }
        ));
});


