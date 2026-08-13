/* Service Worker — សម្រាប់ PWA (Add to Home Screen ⇒ គ្មាន URL bar)
   ចេតនា៖ ធ្វើឲ្យ installable ប៉ុណ្ណោះ។ មិន cache ទេ ⇒ តែងតែ​ទាញ​ថ្មី។ */
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', (e) => { /* default browser fetch */ });
