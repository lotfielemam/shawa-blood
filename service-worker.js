/* الدليل انتقل إلى https://shawa-blood.github.io/ — هذا الملف يمسح النسخة القديمة من الأجهزة */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.map(k => caches.delete(k))))
    .then(() => self.registration.unregister())
    .then(() => self.clients.matchAll()).then(cs => cs.forEach(c => c.navigate('https://shawa-blood.github.io/'))));
});
self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') e.respondWith(Response.redirect('https://shawa-blood.github.io/' + new URL(e.request.url).search, 302));
});
