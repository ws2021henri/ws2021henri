!function(){"use strict";const t=1613733118146,e=`cache${t}`,n=["/client/client.16e1d0f3.js","/client/inject_styles.5607aec6.js","/client/index.24fd9208.js","/client/1.e77ed21f.js"].concat(["/service-worker-index.html","/fonts/ibm-plex-mono-v6-latin-ext_latin-regular.woff","/fonts/ibm-plex-mono-v6-latin-ext_latin-regular.woff2","/fonts/inconsolata-v21-latin-regular.woff","/fonts/inconsolata-v21-latin-regular.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300italic.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300italic.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-600.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-600.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-700.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-700.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-italic.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-italic.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-regular.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-regular.woff2","/fonts/source-serif-pro-v10-latin-300.woff","/fonts/source-serif-pro-v10-latin-300.woff2","/fonts/source-serif-pro-v10-latin-300italic.woff","/fonts/source-serif-pro-v10-latin-300italic.woff2","/global.css"]),s=new Set(n);self.addEventListener("install",(t=>{t.waitUntil(caches.open(e).then((t=>t.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(t=>{t.waitUntil(caches.keys().then((async t=>{for(const n of t)n!==e&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url),i=n.protocol.startsWith("http"),o=n.hostname===self.location.hostname&&n.port!==self.location.port,a=n.host===self.location.host&&s.has(n.pathname),l="only-if-cached"===e.request.cache&&!a;!i||o||l||e.respondWith((async()=>a&&await caches.match(e.request)||async function(e){const n=await caches.open(`offline${t}`);try{const t=await fetch(e);return n.put(e,t.clone()),t}catch(t){const s=await n.match(e);if(s)return s;throw t}}(e.request))())}))}();
