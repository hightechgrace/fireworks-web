"use strict";var precacheConfig=[["/index.html","475d909167d928db54cb6a76ea732804"],["/static/css/main.b8b1ebc9.css","3668bfc7b055816b8c15b4f5aa6b9c01"],["/static/js/main.1ae3b089.js","afef3b0d1a91da1fdcb18a1efdd9f4de"],["/static/media/Bonfire.e6397c60.jpg","e6397c60c8cdb6c28bbfddaa4e22a745"],["/static/media/Planet1.d957d658.png","d957d65875e819ab77b73173a65238c4"],["/static/media/Planet2.f8ffe5d3.png","f8ffe5d32a8d32745aec526b112a4a6a"],["/static/media/akin.45bbaa7f.jpg","45bbaa7f5216df93bc2b4c73be56437f"],["/static/media/astro.680036ad.png","680036ad11bea3de42cd114fcf5db280"],["/static/media/bar.475f0e68.svg","475f0e687818eac2d5da433322158ba4"],["/static/media/black_dots.7cf93755.svg","7cf93755ea5769dab758b917416db23f"],["/static/media/brand.592febe8.svg","592febe818d540fb292a761bbe90263e"],["/static/media/chude.3f075839.jpg","3f075839adb47fc56c2040b2ba49185e"],["/static/media/creative.a98720fa.svg","a98720fae08fab47cb38e84572035d89"],["/static/media/cyrus.e5b1fb9d.jpg","e5b1fb9d23261589f196df93d8b5d0bd"],["/static/media/digital.e6c77c26.svg","e6c77c26163323ecdd3f3b018bcc1dc1"],["/static/media/doelle.a5523b9e.jpg","a5523b9e4e9deb526fd47b42a49091d4"],["/static/media/dots.2fc8723b.svg","2fc8723b81aabf7996c1657889445fe5"],["/static/media/fd.0fddb333.svg","0fddb333841da5b43b5f5bacf0d5088b"],["/static/media/ferdy.781163bb.jpg","781163bbb0a102c0f3f143a069e0c0d2"],["/static/media/fire.763b2317.svg","763b2317be5050df0df4cb0639751696"],["/static/media/fire_black.65fe013a.svg","65fe013a4daf42abf1d69b6c58ab2b69"],["/static/media/fire_main.7d5606a9.svg","7d5606a95cdd4e4bb582f7abf6a90d6a"],["/static/media/fs.73a9e9fa.svg","73a9e9fa0f7965dec957e867abe7f70a"],["/static/media/fu.357bc9a9.svg","357bc9a9f7355460f3e0bf3f0d3fe345"],["/static/media/menu.dc08d1e4.svg","dc08d1e4ff11fe91286265d103799539"],["/static/media/strategy.01f4284a.svg","01f4284a5577d383ba25fd6106843f63"],["/static/media/studio-icon.ef6bad48.svg","ef6bad48424c47dcba7e4ddeb30c9623"],["/static/media/studio.7e035f6d.svg","7e035f6d3bf5f13d2572f4a1cca7ea07"],["/static/media/subs.f19efae3.png","f19efae397f26448325c60142ceff099"],["/static/media/tartan.5da75a20.jpg","5da75a205656bee90858ac96e23b9e0d"],["/static/media/tech-icon.ad507674.svg","ad507674f689c1baf7f14290d96f278b"],["/static/media/tech.f77630c7.svg","f77630c784d6c7d0fbc440f7c4894d6d"],["/static/media/tori.8babb305.svg","8babb3053c33dafef548f1373e597cc3"],["/static/media/tori.f663bcdb.png","f663bcdb5948a2141eefa7b9110b51e3"],["/static/media/uni-icon.30a8436d.svg","30a8436d8555fe597601193e65d0a819"],["/static/media/yanga.43b57e2d.png","43b57e2d27c7b4b4cb9dcd505bf4eef2"],["/static/media/yanga.45ab0dea.svg","45ab0dea8a8d2274b7642a80eb347037"],["/static/media/young.120e6e8e.svg","120e6e8e50f327d568610ca0a82c3854"],["/static/media/young.bb4bbc0a.png","bb4bbc0aa5abb06d73fb1ccca76095ec"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});