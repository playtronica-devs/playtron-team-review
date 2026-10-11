// Generated for one verified hosted entry; selected encoded sounds live in a separate immutable cache.
const release={"build":"0371ee123fc0","sha":"8fd187eb776c1fba1a990568cb25bf33475977f8d96d77717ee89e695aafa513"},entry=new URL('index.html',self.registration.scope).href;
const prefix='playtron-shell:'+self.registration.scope+':',name=prefix+release.build+':'+release.sha;
async function valid(response,sha=release.sha){if(!response||!response.ok)return false;const bytes=await response.arrayBuffer();return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes)),x=>x.toString(16).padStart(2,'0')).join('')===sha;}
self.addEventListener('install',event=>event.waitUntil((async()=>{
 const url=new URL(entry);url.searchParams.set('__install',release.build);
 const response=await fetch(url,{cache:'no-store'});if(!await valid(response.clone()))throw Error('Offline entry failed verification');
 const cache=await caches.open(name);
 try{await cache.put(entry,response);}catch(error){if(!await valid(await cache.match(entry)))await caches.delete(name);throw error;}
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 await self.clients.claim();const old=(await caches.keys()).filter(x=>x.startsWith(prefix)&&x!==name);
 let keptPrevious=false;
 for(const previous of old.reverse()){const cached=await(await caches.open(previous)).match(entry);
  if(!keptPrevious&&await valid(cached,previous.slice(-64)))keptPrevious=true;else await caches.delete(previous);
 }
})()));
self.addEventListener('message',event=>{
 if(event.data?.type==='ACTIVATE')event.waitUntil(self.skipWaiting());
 if(event.data?.type==='STATUS')event.waitUntil((async()=>{const response=await(await caches.open(name)).match(entry);event.ports[0]?.postMessage({build:release.build,saved:await valid(response)});})());
});
self.addEventListener('fetch',event=>{
 const url=new URL(event.request.url),path=new URL(entry);
 if(event.request.mode!=='navigate'||url.origin!==path.origin||!(url.pathname===path.pathname||url.pathname===new URL('./',entry).pathname))return;
 event.respondWith((async()=>{const response=await(await caches.open(name)).match(entry);return await valid(response?.clone())?response:fetch(event.request);})());
});
