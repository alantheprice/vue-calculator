const CACHE = 'CALC_CACHE'
const CACHED_ASSETS = [
  'index.html', 
  'app.css',
  'https://unpkg.com/es6-import'
]

self.addEventListener('install', (ev) => {
  console.log('installing service worker');

  ev.waitUntil(precache())
})

self.addEventListener('fetch', (ev) => {
   console.log('serving asset')
   let response = loadFromNetwork(ev.request, 400)
     .catch(() => {
       return loadFromCache(ev.request)
     })
   ev.respondWith(response)
})

function precache() {
  return caches.open(CACHE).then((cache) => {
    return cache.addAll(CACHED_ASSETS)
  })
}

function loadFromNetwork(request, maxWaitMilliseconds) {
  return new Promise((resolve, reject) => {
    let timeoutId = setTimeout(reject, maxWaitMilliseconds)
    fetch(request).then((response) => {
        clearTimeout(timeoutId)
        resolve(response)
      })
      .catch(reject)
  })
}

function loadFromCache(request) {
  return caches.open(CACHE)
    .then((cache) => cache.match(request))
    .then((match) => getValue(match))
}

function getValue(value) {
  return new Promise((resolve, reject) => {
    if (!value) {
      reject('value is undefined')
    }
    resolve(value)
  })
}