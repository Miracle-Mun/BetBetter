"use strict";var precacheConfig=[["/index.html","e16a60465ecf5702bb17403b08ba489a"],["/static/media/arbs_icon-eb605e277798c41189ab69c864851ab175e0e1cf744298b48ed45b14b14d11bc.c662c6e0.svg","c662c6e0f99150da3fd91962e283b27b"],["/static/media/arrow_down_white-bd31cb6cdca88c47f7bf1e082c346ec41dd7844fa8ea01c247a4197fe5f31b14.90ae7522.svg","90ae752256f7d3246beab2889b662128"],["/static/media/austria-0cb95afa3dbe460cc8dcb2553bc4a0c727d201478f7dd9430fe1140f8216b564.dd11d23b.svg","dd11d23b24f2c88181012458e6dfee75"],["/static/media/back.6a9e310e.jpg","6a9e310e547cc4d7e3fe6541a45bce33"],["/static/media/britain-e1adbdaac9fe290e1b97a0fc776b60c0bcbad8392d7ef6b22de983c8f03f82a0.5b97a045.svg","5b97a045ca8e17161436ee988ef6d3f0"],["/static/media/checkbox_side_filters-05ed2ee9ce44bc8966d526e04e0256d638347778dac20bbd7dba73b5031cb1e0.e4405033.svg","e4405033b9ca65e7b8c5655d5f351479"],["/static/media/china-3f10737a6deba81bca793539fcaf9e1b9ea91466f1c2831c11af3e2c962f7cb8.946a654f.svg","946a654f170be169e59d3ed54707cb95"],["/static/media/chrome.d8b33746.svg","d8b33746450e65a410bcb3e53700a083"],["/static/media/colombia-f37fc91e8da8cac62f13fdaf940ae9a2fac4ed08946748f766a567d6a12f1321.03db6da5.svg","03db6da56746818f11da261bf9fa771b"],["/static/media/france-ede4de451fbed1f10235098c8096140511e5986fd48d1a5708e9868ea9db46c5.f9ba0001.svg","f9ba00018ae569fb9e8412a42ff911fa"],["/static/media/gears-01602e0df33040dae4b49603f3316deaabf60f0e7691e0aa58c4d311e3159cca.b921701a.svg","b921701a24ba08d3d3183e7d5f399913"],["/static/media/germany-26725ee2640b1128583b0d5fddd04453bdba2de13fcadb411de5f5827c315aad.63382628.svg","63382628c924e066822765a418e45017"],["/static/media/greece-628c1f20c44b1fcc59df9b7bbcbe645a228491a0833d7904649ce2189204eb1d.3ea5b964.svg","3ea5b96427546788e2989a1bf35b0b08"],["/static/media/italy-4343c55f776d2250756225f44e7bbc3aaf321af4d62a2a022e0e7afce699699f.ea52036c.svg","ea52036c018bc06b707fa763c57fa391"],["/static/media/portugal-741dbd527e7d5fd2c4a575e98f7f95ac832c0937320e1bb878b0593264552b3d.082ec963.svg","082ec9630c10d70cdbe156047ce63e87"],["/static/media/romania-aed8dd8128b7a5384d08e8a53f8903393ea0e87e8cb9fff1c245238c1474e5ac.2b047585.svg","2b047585df306efe208076bfde9e806f"],["/static/media/search-icon-71f24fd3ea00f92614649998254e168d8c49cc6ced883b43c10a9bbd540ee75f.7a7ce4f6.svg","7a7ce4f666f2abad5216c99ad6476681"],["/static/media/spain-e8995be4b9d748c89ecf9c6add97dc834f14173666c238d397beac300b07dc8b.2d6ddad0.svg","2d6ddad0b16b470f9ec9a5cdfdef25c4"],["/static/media/telegram.b90dfaa7.svg","b90dfaa7bc455df133fde6300d1ca886"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),n=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});