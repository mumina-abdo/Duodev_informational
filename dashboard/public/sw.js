if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const r=e=>a(e,t),o={module:{uri:t},exports:i,require:r};s[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(c(...e),i)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"584fddf5412fa1e6f1e90b40e59c64d8"},{url:"/_next/static/GlR4JvaAU-FOgBH-e6cNw/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/GlR4JvaAU-FOgBH-e6cNw/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/173-e70c8bee04541480.js",revision:"GlR4JvaAU-FOgBH-e6cNw"},{url:"/_next/static/chunks/23-1136ec47fbb40fc9.js",revision:"GlR4JvaAU-FOgBH-e6cNw"},{url:"/_next/static/chunks/231-4b3dca241bb6b9a7.js",revision:"GlR4JvaAU-FOgBH-e6cNw"},{url:"/_next/static/chunks/311-42ce96e75117914b.js",revision:"GlR4JvaAU-FOgBH-e6cNw"},{url:"/_next/static/chunks/53c13509-92796e0f209f3628.js",revision:"GlR4JvaAU-FOgBH-e6cNw"},{url:"/_next/static/chunks/636-0e6bc74b4032f6eb.js",revision:"GlR4JvaAU-FOgBH-e6cNw"},{url:"/_next/static/chunks/8e1d74a4-cd24ba27203a866e.js",revision:"GlR4JvaAU-FOgBH-e6cNw"},{url:"/_next/static/chunks/9c4e2130-bdb16daf2d97a43c.js",revision:"GlR4JvaAU-FOgBH-e6cNw"},{url:"/_next/static/chunks/app/(auth)/auth/layout-1a7c95e6f29f8e42.js",revision:"GlR4JvaAU-FOgBH-e6cNw"},{url:"/_next/static/chunks/app/(auth)/auth/role/page-443cba8fca891850.js",revision:"GlR4JvaAU-FOgBH-e6cNw"},{url:"/_next/static/chunks/app/(auth)/auth/signIn/page-bbede59d38ece191.js",revision:"GlR4JvaAU-FOgBH-e6cNw"},{url:"/_next/static/chunks/app/(auth)/auth/signUp/page-c33f0a3c0ce6932f.js",revision:"GlR4JvaAU-FOgBH-e6cNw"},{url:"/_next/static/chunks/app/(public)/layout-84838a249ed02790.js",revision:"GlR4JvaAU-FOgBH-e6cNw"},{url:"/_next/static/chunks/app/(public)/publicUser/home/page-0916741a58654714.js",revision:"GlR4JvaAU-FOgBH-e6cNw"},{url:"/_next/static/chunks/app/(public)/publicUser/marketplace/page-4b16de9b4446df05.js",revision:"GlR4JvaAU-FOgBH-e6cNw"},{url:"/_next/static/chunks/app/_not-found/page-1fe41d8df168b155.js",revision:"GlR4JvaAU-FOgBH-e6cNw"},{url:"/_next/static/chunks/app/landingpage/page-b97767b8e2977ee0.js",revision:"GlR4JvaAU-FOgBH-e6cNw"},{url:"/_next/static/chunks/app/layout-c7dd3a9cf53a1d0c.js",revision:"GlR4JvaAU-FOgBH-e6cNw"},{url:"/_next/static/chunks/app/page-0dd712ed595f144d.js",revision:"GlR4JvaAU-FOgBH-e6cNw"},{url:"/_next/static/chunks/fc2f6fa8-c4c3fa46e63befc6.js",revision:"GlR4JvaAU-FOgBH-e6cNw"},{url:"/_next/static/chunks/fd9d1056-62aaf4b921c84028.js",revision:"GlR4JvaAU-FOgBH-e6cNw"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"GlR4JvaAU-FOgBH-e6cNw"},{url:"/_next/static/chunks/main-4f3faf367ce3e865.js",revision:"GlR4JvaAU-FOgBH-e6cNw"},{url:"/_next/static/chunks/main-app-b7ffc0b0333442c7.js",revision:"GlR4JvaAU-FOgBH-e6cNw"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"GlR4JvaAU-FOgBH-e6cNw"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"GlR4JvaAU-FOgBH-e6cNw"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-381e057135e17746.js",revision:"GlR4JvaAU-FOgBH-e6cNw"},{url:"/_next/static/css/5a56e3c1761e58ad.css",revision:"5a56e3c1761e58ad"},{url:"/_next/static/css/dff42e7aa301dde7.css",revision:"dff42e7aa301dde7"},{url:"/_next/static/media/4473ecc91f70f139-s.p.woff",revision:"78e6fc13ea317b55ab0bd6dc4849c110"},{url:"/_next/static/media/463dafcda517f24f-s.p.woff",revision:"cbeb6d2d96eaa268b4b5beb0b46d9632"},{url:"/ecohublogo.svg",revision:"1cb8179bc7216da611d9b279ef6b91d2"},{url:"/fffff.png",revision:"aaef5556b1456531622b79185961b211"},{url:"/logo.jpeg",revision:"33eff28ae453f1360b83fe907d295d0e"},{url:"/logo.png",revision:"7a310ee345ca24d07063e6529e073eb4"},{url:"/manifest.json",revision:"9a8255d0ed0140531763c1534e3c5d05"},{url:"/picture2.jpeg",revision:"6acb57874a2c18189528f25ff86c0611"},{url:"/shopclothing.jpg",revision:"6928525fd238585e49e8c9c4b55528f5"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
