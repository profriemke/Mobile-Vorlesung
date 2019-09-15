
self.addEventListener("fetch", function(e) {
    if (e.request.url.includes('1.png')) {
        e.respondWith(        
                fetch('2.png')
        );
        console.log('fetch');
    }
  console.log('Angefragete URL: ', e.request.url)
});


