const html='<html><head><title>Offline</title></head><body>Sie sind offline</body></html>';


self.addEventListener('fetch', function(e) {
    e.respondWith(        
             fetch(e.request).catch(function() {
               return new Response ( html, {headers:{'Content-Type':'text/html'}});
             }
        ));
});


