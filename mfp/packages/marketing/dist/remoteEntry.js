var marketing;(()=>{"use strict";var e,r,t,a,n,o,i,l,u,f,s,c={7716:(e,r,t)=>{var a={"./marketingApp":()=>Promise.all([t.e(271),t.e(650),t.e(156)]).then((()=>()=>t(3156)))},n=(e,r)=>(t.R=r,r=t.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var a="default",n=t.S[a];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[a]=e,t.I(a,r)}};t.d(r,{get:()=>n,init:()=>o})}},d={};function h(e){var r=d[e];if(void 0!==r)return r.exports;var t=d[e]={exports:{}};return c[e](t,t.exports,h),t.exports}h.m=c,h.c=d,h.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return h.d(r,{a:r}),r},h.d=(e,r)=>{for(var t in r)h.o(r,t)&&!h.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},h.f={},h.e=e=>Promise.all(Object.keys(h.f).reduce(((r,t)=>(h.f[t](e,r),r)),[])),h.u=e=>e+"."+{3:"0a38d400b1007e266e12",156:"34d4bc5f2b115deace35",271:"7cde8a9568ca741fdb32",294:"33f84db3624f709affe2",385:"94f88b1ef025dbef601b",584:"f23bec73a2c7d13e649e",650:"8889c3f658583dba55e4",655:"2977d4b7bf47d13bd552",786:"5cf36ea36bc08389c2ae",935:"2d355a129d27a00cf18a",942:"47a28943b110f8a6cec8"}[e]+".js",h.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),h.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="marketing:",h.l=(t,a,n,o)=>{if(e[t])e[t].push(a);else{var i,l;if(void 0!==n)for(var u=document.getElementsByTagName("script"),f=0;f<u.length;f++){var s=u[f];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+n){i=s;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,h.nc&&i.setAttribute("nonce",h.nc),i.setAttribute("data-webpack",r+n),i.src=t),e[t]=[a];var c=(r,a)=>{i.onerror=i.onload=null,clearTimeout(d);var n=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(a))),r)return r(a)},d=setTimeout(c.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=c.bind(null,i.onerror),i.onload=c.bind(null,i.onload),l&&document.head.appendChild(i)}},h.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{h.S={};var e={},r={};h.I=(t,a)=>{a||(a=[]);var n=r[t];if(n||(n=r[t]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[t])return e[t];h.o(h.S,t)||(h.S[t]={});var o=h.S[t],i="marketing",l=(e,r,t,a)=>{var n=o[e]=o[e]||{},l=n[r];(!l||!l.loaded&&(!a!=!l.eager?a:i>l.from))&&(n[r]={get:t,from:i,eager:!!a})},u=[];return"default"===t&&(l("@material-ui/core","4.12.4",(()=>Promise.all([h.e(786),h.e(584),h.e(271),h.e(650),h.e(942)]).then((()=>()=>h(5584))))),l("@material-ui/icons","4.11.3",(()=>Promise.all([h.e(786),h.e(385),h.e(271),h.e(3)]).then((()=>()=>h(9385))))),l("react-dom","17.0.2",(()=>Promise.all([h.e(935),h.e(271)]).then((()=>()=>h(3935))))),l("react-router-dom","5.3.4",(()=>Promise.all([h.e(655),h.e(271)]).then((()=>()=>h(4655))))),l("react","17.0.2",(()=>h.e(294).then((()=>()=>h(7294)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;h.g.importScripts&&(e=h.g.location+"");var r=h.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var a=t.length-1;a>-1&&!e;)e=t[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),h.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},a=(e,r)=>{e=t(e),r=t(r);for(var a=0;;){if(a>=e.length)return a<r.length&&"u"!=(typeof r[a])[0];var n=e[a],o=(typeof n)[0];if(a>=r.length)return"u"==o;var i=r[a],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&n!=i)return n<i;a++}},n=(e,r)=>{if(0 in e){r=t(r);var a=e[0],o=a<0;o&&(a=-a-1);for(var i=0,l=1,u=!0;;l++,i++){var f,s,c=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(s=(typeof(f=r[i]))[0]))return!u||("u"==c?l>a&&!o:""==c!=o);if("u"==s){if(!u||"u"!=c)return!1}else if(u)if(c==s)if(l<=a){if(f!=e[l])return!1}else{if(o?f>e[l]:f<e[l])return!1;f!=e[l]&&(u=!1)}else if("s"!=c&&"n"!=c){if(o||l<=a)return!1;u=!1,l--}else{if(l<=a||s<c!=o)return!1;u=!1}else"s"!=c&&"n"!=c&&(u=!1,l--)}}var d=[],h=d.pop.bind(d);for(i=1;i<e.length;i++){var p=e[i];d.push(1==p?h()|h():2==p?h()&h():p?n(p,r):!h())}return!!h()},o=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!n(t,r)||e&&!a(e,r)?e:r),0))&&o[r]},i=e=>(e.loaded=1,e.get()),l=(e=>function(r,t,a,n){var o=h.I(r);return o&&o.then?o.then(e.bind(e,r,h.S[r],t,a,n)):e(0,h.S[r],t,a,n)})(((e,r,t,a,n)=>{var l=r&&h.o(r,t)&&o(r,t,a);return l?i(l):n()})),u={},f={7271:()=>l("default","react",[1,17,0,1],(()=>h.e(294).then((()=>()=>h(7294))))),7650:()=>l("default","react-dom",[1,17,0,1],(()=>h.e(935).then((()=>()=>h(3935))))),334:()=>l("default","react-router-dom",[1,5,2,0],(()=>h.e(655).then((()=>()=>h(4655))))),2462:()=>l("default","@material-ui/icons",[1,4,9,1],(()=>Promise.all([h.e(786),h.e(385)]).then((()=>()=>h(9385))))),6677:()=>l("default","@material-ui/core",[1,4,12,4],(()=>Promise.all([h.e(786),h.e(584)]).then((()=>()=>h(5584)))))},s={156:[334,2462,6677],271:[7271],650:[7650]},h.f.consumes=(e,r)=>{h.o(s,e)&&s[e].forEach((e=>{if(h.o(u,e))return r.push(u[e]);var t=r=>{u[e]=0,h.m[e]=t=>{delete h.c[e],t.exports=r()}},a=r=>{delete u[e],h.m[e]=t=>{throw delete h.c[e],r}};try{var n=f[e]();n.then?r.push(u[e]=n.then(t).catch(a)):t(n)}catch(e){a(e)}}))},(()=>{var e={73:0};h.f.j=(r,t)=>{var a=h.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(271|650)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>a=e[r]=[t,n]));t.push(a[2]=n);var o=h.p+h.u(r),i=new Error;h.l(o,(t=>{if(h.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var a,n,[o,i,l]=t,u=0;if(o.some((r=>0!==e[r]))){for(a in i)h.o(i,a)&&(h.m[a]=i[a]);l&&l(h)}for(r&&r(t);u<o.length;u++)n=o[u],h.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkmarketing=self.webpackChunkmarketing||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var p=h(7716);marketing=p})();