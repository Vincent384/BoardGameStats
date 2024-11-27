self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('pwa-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/manifest.json',
          '/icons/icon-192x192.png',
          '/icons/icon-512x512.png',
          // Lägg till fler filer här som du vill cache:a
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse; // Returnera från cache om det finns
        }
        return fetch(event.request); // Annars hämta från nätet
      })
    );
  });
  