(()=>{"use strict";var e,t,n,a,r={99:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(81),r=n.n(a),c=n(645),o=n.n(c)()(r());o.push([e.id,"body{background-color:#d3d3d3}.garage-container{margin:20px 0}.garage{margin:0;padding:0;list-style:none}.track{margin-top:10px}.garage-controls{display:flex;align-items:center;gap:5px}.road{display:flex;justify-content:space-between;width:100%;height:54px;border-bottom:dotted 2px green}.launch{display:flex}.car-controls{align-self:center}.car{position:relative;width:160px;height:60px}.car-image{position:absolute;width:100%;height:100%}.rear-wheel,.front-wheel{position:absolute;width:30%;height:42%;top:51%;left:8.5%;transform-origin:center}.front-wheel{left:63%}.flag{width:50px;margin-right:160px}.winners-table{width:50%;border:solid 1px #000;border-radius:5px;border-spacing:0;font-size:24px;margin:20px 0}.winners-table td{text-align:center;border-top:solid 1px #000;border-right:solid 1px #000;padding:0}.winners-table th{border-right:solid 1px #000;padding:0}.winners-table tr td:last-child,.winners-table tr th:last-child{border-right:none}.winner-car{min-width:80px}.hide{display:none}",""]);const s=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,c){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(o[i]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&o[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},273:(e,t,n)=>{var a=n(379),r=n.n(a),c=n(795),o=n.n(c),s=n(569),i=n.n(s),d=n(565),l=n.n(d),u=n(216),m=n.n(u),h=n(589),p=n.n(h),v=n(99),g={};g.styleTagTransform=p(),g.setAttributes=l(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=m(),r()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var c={},o=[],s=0;s<e.length;s++){var i=e[s],d=a.base?i[0]+a.base:i[0],l=c[d]||0,u="".concat(d," ").concat(l);c[d]=l+1;var m=n(u),h={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==m)t[m].references++,t[m].updater(h);else{var p=r(h,a);a.byIndex=s,t.splice(s,0,{identifier:u,updater:p,references:1})}o.push(u)}return o}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var c=a(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<c.length;o++){var s=n(c[o]);t[s].references--}for(var i=a(e,r),d=0;d<c.length;d++){var l=n(c[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}c=i}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},198:(e,t,n)=>{n.d(t,{SR:()=>c,nS:()=>r,s3:()=>o});const a="http://localhost:3000",r=`${a}/garage`,c=`${a}/engine`,o=`${a}/winners`},639:(e,t,n)=>{n.d(t,{Bo:()=>i,DT:()=>o,Rn:()=>r,oX:()=>c,tD:()=>s});var a=n(198);const r=async(e,t=7)=>{const n=await fetch(`${a.nS}?_page=${e}&_limit=${t}`);return{items:await n.json(),count:n.headers.get("X-Total-Count")}},c=async e=>(await fetch(`${a.nS}/${e}`)).json(),o=async e=>(await fetch(a.nS,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json(),s=async e=>(await fetch(`${a.nS}/${e}`,{method:"DELETE"})).json(),i=async(e,t)=>(await fetch(`${a.nS}/${e}`,{method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})).json()},506:(e,t,n)=>{n.d(t,{p6:()=>r,yQ:()=>c});var a=n(198);const r=async e=>(await fetch(`${a.SR}?id=${e}&status=started`,{method:"PATCH"})).json(),c=async e=>(await fetch(`${a.SR}?id=${e}&status=stopped`)).json()},677:(e,t,n)=>{n.d(t,{BS:()=>o,ix:()=>c});var a=n(198),r=n(639);const c=async(e,t=10,n,c)=>{const o=await fetch(`${a.s3}?_page=${e}&_limit=${t}${((e,t)=>e&&t?`&_sort=${e}&_order=${t}`:"")(n,c)}`),s=await o.json();return{items:await Promise.all(s.map((async e=>({...e,car:await(0,r.oX)(e.id)})))),count:o.headers.get("X-Total-Count")}},o=async e=>(await fetch(`${a.s3}/${e}`,{method:"DELETE"})).json()},607:(e,t,n)=>{n.a(e,(async(e,t)=>{try{var a=n(307),r=n(50),c=n(628),o=(n(273),n(284)),s=e([a,r,o]);[a,r,o]=s.then?(await s)():s,(0,a.X)(),(0,o.Q)(c.GV.CarsPage,c.Si.CarsCount,c.cd.Cars),(0,r.o)(),t()}catch(e){t(e)}}))},628:(e,t,n)=>{var a,r,c,o,s,i,d,l,u;n.d(t,{G7:()=>c,GV:()=>i,Ii:()=>u,Il:()=>l,Si:()=>d,T3:()=>s,cd:()=>o}),function(e){e.ByAsc="ASC",e.ByDesc="DESC"}(a||(a={})),function(e){e.ById="id",e.ByWins="winners",e.ByTime="time"}(r||(r={})),function(e){e.Garage="garage",e.Winners="winners"}(c||(c={})),function(e){e[e.Cars=7]="Cars",e[e.Winners=10]="Winners"}(o||(o={})),function(e){e[e.First=1]="First"}(s||(s={})),function(e){e.CarsPage="carsPage",e.WinnersPage="winnersPage"}(i||(i={})),function(e){e.CarsCount="carsCount",e.WinnersCount="winnersCount"}(d||(d={})),function(e){e[e.Max=255]="Max"}(l||(l={})),function(e){e[e.Number=100]="Number"}(u||(u={}))},50:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{o:()=>h});var r=n(981),c=n(716),o=n(429),s=n(502),i=n(465),d=n(207),l=n(270),u=n(143),m=e([r,c,o,s,i,d,l,u]);[r,c,o,s,i,d,l,u]=m.then?(await m)():m;const h=()=>{(0,s.k)(),(0,s.L)(),(0,r.h)(),(0,u.V)(),(0,d.H)(),(0,l._)(),(0,o.Z)(),(0,c.P)(),(0,i.r)()};a()}catch(e){a(e)}}))},981:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{h:()=>s});var r=n(639),c=n(498),o=e([c]);c=(o.then?(await o)():o)[0];const s=()=>{document.querySelector("#create-submit").addEventListener("click",(async e=>{const t=document.querySelector("#create-name"),n=document.querySelector("#create-color");e.preventDefault(),await(0,r.DT)({name:t.value,color:n.value}),await(0,c.A)(),t.value="",n.value="#ffffff"}))};a()}catch(e){a(e)}}))},716:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{P:()=>g});var r=n(639),c=n(506),o=n(677),s=n(962),i=n(498),d=n(729),l=n(201),u=e([s,i,d,l]);[s,i,d,l]=u.then?(await u)():u;const m=async e=>{const t=+e.id.replace("remove-car-","");await(0,r.tD)(t),await(0,o.BS)(t),await(0,d.a)(),await(0,i.A)()},h=async e=>{const t=document.querySelector("#update-name"),n=document.querySelector("#update-color"),a=document.querySelector("#update-submit"),r=+e.id.replace("select-car-",""),c=s.h.cars.find((e=>e.id===r));t.disabled=!1,t.value=c?c.name:"",n.disabled=!1,n.value=c?c.color:"",a.disabled=!1,a.name=`${r}`},p=async e=>{const t=e,n=+t.id.replace("start-engine-car-",""),a=document.querySelector(`#stop-engine-car-${n}`);t.disabled=!0,s.h.animationReset=s.h.animationReset.filter((e=>e!==n));const{velocity:r,distance:o}=await(0,c.p6)(n);(0,l.gr)(n,(0,l.Np)(),o/r),a.disabled=!1},v=async e=>{const t=e,n=+t.id.replace("stop-engine-car-",""),a=document.querySelector(`#start-engine-car-${n}`);t.disabled=!0,await(0,c.yQ)(n),s.h.animationReset.push(n),(0,l.zj)(n),a.disabled=!1},g=()=>{document.querySelector(".garage-container").addEventListener("click",(async e=>{const t=e.target;t.classList.contains("remove-button")&&m(t),t.classList.contains("select-button")&&h(t),t.classList.contains("start-engine-button")&&p(t),t.classList.contains("stop-engine-button")&&v(t)}))};a()}catch(e){a(e)}}))},429:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{Z:()=>i});var r=n(628),c=n(493),o=n(498),s=e([o]);o=(s.then?(await s)():s)[0];const i=()=>{document.querySelector("#generate").addEventListener("click",(async()=>{(0,c.g)(r.Ii.Number),await(0,o.A)()}))};a()}catch(e){a(e)}}))},502:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{L:()=>d,k:()=>i});var r=n(962),c=n(628),o=n(284),s=e([r,o]);[r,o]=s.then?(await s)():s;const i=()=>{document.querySelector("#garage-menu").addEventListener("click",(()=>{const e=document.querySelector(".garage-view"),t=document.querySelector(".garage-container"),n=document.querySelector(".winners-container");e.classList.remove("hide"),t.classList.remove("hide"),n.classList.add("hide"),r.h.view=c.G7.Garage,(0,o.Q)(c.GV.CarsPage,c.Si.CarsCount,c.cd.Cars)}))},d=()=>{document.querySelector("#winners-menu").addEventListener("click",(()=>{const e=document.querySelector(".garage-view"),t=document.querySelector(".garage-container"),n=document.querySelector(".winners-container");e.classList.add("hide"),t.classList.add("hide"),n.classList.remove("hide"),r.h.view=c.G7.Winners,(0,o.Q)(c.GV.WinnersPage,c.Si.WinnersCount,c.cd.Winners)}))};a()}catch(e){a(e)}}))},465:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{r:()=>l});var r=n(628),c=n(962),o=n(498),s=n(729),i=n(284),d=e([c,o,s,i]);[c,o,s,i]=d.then?(await d)():d;const l=()=>{document.querySelector(".pagination").addEventListener("click",(async e=>{const t=e.target;c.h.view===r.G7.Garage?("prev"===t.id?c.h.carsPage-=1:c.h.carsPage+=1,await(0,o.A)()):("prev"===t.id?c.h.winnersPage-=1:c.h.winnersPage+=1,await(0,s.a)(),(0,i.Q)(r.GV.WinnersPage,r.Si.WinnersCount,r.cd.Winners))}))};a()}catch(e){a(e)}}))},207:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{H:()=>i});var r=n(506),c=n(201),o=n(962),s=e([c,o]);[c,o]=s.then?(await s)():s;const i=()=>{const e=document.querySelector("#race");e.addEventListener("click",(async()=>{const t=document.querySelector("#reset"),n=document.querySelectorAll(".start-engine-button"),a=document.querySelectorAll(".stop-engine-button");e.disabled=!0,o.h.cars.forEach((async e=>{o.h.animationReset=o.h.animationReset.filter((t=>t!==e.id));const{velocity:t,distance:n}=await(0,r.p6)(e.id);(0,c.gr)(e.id,(0,c.Np)(),n/t)})),t.disabled=!1,n.forEach((e=>e.disabled=!0)),a.forEach((e=>e.disabled=!1))}))};a()}catch(e){a(e)}}))},270:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{_:()=>i});var r=n(506),c=n(201),o=n(962),s=e([c,o]);[c,o]=s.then?(await s)():s;const i=()=>{const e=document.querySelector("#reset");e.addEventListener("click",(async()=>{const t=document.querySelector("#race"),n=document.querySelectorAll(".start-engine-button"),a=document.querySelectorAll(".stop-engine-button");e.disabled=!0,o.h.cars.forEach((async e=>{await(0,r.yQ)(e.id),o.h.animationReset.push(e.id),(0,c.zj)(e.id)})),t.disabled=!1,n.forEach((e=>e.disabled=!1)),a.forEach((e=>e.disabled=!0))}))};a()}catch(e){a(e)}}))},143:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{V:()=>s});var r=n(639),c=n(498),o=e([c]);c=(o.then?(await o)():o)[0];const s=()=>{document.querySelector("#update-submit").addEventListener("click",(async e=>{const t=e.target,n=document.querySelector("#update-name"),a=document.querySelector("#update-color"),o=+t.name;e.preventDefault(),await(0,r.Bo)(o,{name:n.value,color:a.value}),await(0,c.A)(),n.value="",n.disabled=!0,a.value="#ffffff",a.disabled=!0,t.disabled=!0}))};a()}catch(e){a(e)}}))},518:(e,t,n)=>{n.d(t,{O:()=>a});const a=()=>'\n  <div class="garage-view">\n  <div>\n    <form class="form" name="create">\n      <input type="text" name="name" id="create-name">\n      <input type="color" name="color" id="create-color" value="#ffffff">\n      <button class="button" id="create-submit" type="submit">Create</button>\n    </form>\n    <form class="form" name="update">\n      <input type="text" name="name" id="update-name" disabled>\n      <input type="color" name="color" id="update-color" value="#ffffff" disabled>\n      <button class="button" id="update-submit" type="submit" disabled>Update</button>\n    </form>\n  </div>\n  <div class="race-control">\n    <button class="button" id="race">Race</button>\n    <button class="button" id="reset" disabled>Reset</button>\n    <button class="button" id="generate">Generate</button>\n  </div>\n  </div>\n  '},504:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{O:()=>s});var r=n(962),c=n(563),o=e([r]);r=(o.then?(await o)():o)[0];const s=()=>`\n  <h1>Garage (${r.h.carsCount})</h1>\n  <h2>Page #${r.h.carsPage}</h2>\n  <ul class="garage">\n    ${r.h.cars.map((e=>`<li class="track">${(0,c.d)(e.id,e.name,e.color,!1)}</li>`)).join("")}\n  </ul>\n  `;a()}catch(e){a(e)}}))},14:(e,t,n)=>{n.d(t,{g:()=>a});const a=()=>'\n  <div class="menu">\n    <button class="button menu" id="garage-menu">To Garage</button>\n    <button class="button menu" id="winners-menu">To Winners</button>\n  </div>\n  '},307:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{X:()=>l});var r=n(504),c=n(518),o=n(14),s=n(776),i=n(928),d=e([r,i]);[r,i]=d.then?(await d)():d;const l=()=>{document.body.innerHTML=`\n    ${(0,o.g)()}\n    ${(0,c.O)()}\n    <div class="garage-container">\n      ${(0,r.O)()}\n    </div>\n    <div class="winners-container hide">\n      ${(0,i.V)()}\n    </div>\n    ${(0,s.f)()}\n  `};a()}catch(e){a(e)}}))},776:(e,t,n)=>{n.d(t,{f:()=>a});const a=()=>'\n  <div class="pagination">\n    <button class="button pagination" id="prev" disabled>Prev</button>\n    <button class="button pagination" id="next" disabled>Next</button>\n  </div>\n  '},181:(e,t,n)=>{n.d(t,{Aw:()=>a,dq:()=>r,pI:()=>c,xA:()=>o});const a=(e,t)=>`\n  <button class="icon start-engine-button" id="start-engine-car-${e}" ${t?"disabled":""}>Start</button>\n  <button class="icon stop-engine-button"  id="stop-engine-car-${e}" ${t?"":"disabled"}>Stop</button>\n  `,r=(e,t)=>`\n  <button class="button select-button" id="select-car-${e}">Select</button>\n  <button class="button remove-button" id="remove-car-${e}">Remove</button>\n  <span class="car-name">${t}</span>\n  `,c=(e,t)=>`\n  <svg width="700pt" height="250pt" class="car-image" version="1.1" viewBox="0 200 700 250" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g>\n      <path d="m649.54 318s-17.086-20.496-41.68-22.539c0 0-95.645-5.4688-137.31-15.035l-91.543-51.23s-31.43-14.344-103.16-7.5117c0 0-94.965 6.1602-235.01 77.203 0 0-25.277 17.766-25.277 31.422v45.094s0.68359 5.4531 9.5586 9.5586l75.832 17.086s-8.1914-81.984 66.266-81.984c0 0 43.727-0.68359 58.07 51.934v30.055s-1.3594 8.8828 8.8906 8.8828h240.47s8.207 0.67578 8.207-9.5664c0 0-6.1367-81.293 62.859-81.293 0 0 62.16-1.3672 62.16 75.148 0 0-0.35156 7.1719 5.8008 7.1719 0 0 52.258-3.4141 70.699-17.422v-48.504c-0.011718-0.027344-11.633-18.469-34.84-18.469zm-624.92 17.25c0-13.672 28.352-31.941 28.352-31.941 15.695-5.707 37.754 0 37.754 0-5.3086 31.41-66.105 31.941-66.105 31.941zm163.44-52.445c-37.574 0-32.105-7.1719-32.105-7.1719-2.2461-6.9688 39.66-19.578 68.531-27.371v34.535h-36.426zm93.598 39.496h-16.395c-3.1094 0-5.6406-1.5469-5.6406-3.4609 0-1.9062 2.5195-3.4531 5.6406-3.4531h16.395c3.1094 0 5.6406 1.5469 5.6406 3.4531 0 1.9023-2.5273 3.4609-5.6406 3.4609zm-47.414-39.496v-37.125c9.8945-2.5742 16.668-4.1992 16.668-4.1992 80.957-19.469 124 2.7305 124 2.7305l65.246 38.594zm370.11 20.836c15.75-2.1094 38.875 18.812 38.875 18.812-35.574 5.0664-38.875-18.812-38.875-18.812z"\n      fill="${t}"/>\n    </g>\n  </svg>\n  <svg class="rear-wheel" id="rear-wheel-${e}" width="150pt" height="150pt" version="1.1" viewBox="110 328 110 110" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g>\n      <path d="m164.57 329c-29.711 0-53.793 24.035-53.793 53.77 0 29.664 24.078 53.754 53.793 53.754 29.695 0 53.777-24.07 53.777-53.754-0.003906-29.734-24.082-53.785-53.777-53.77zm-0.007812 62.316c-4.7383 0-8.5547-3.8281-8.5547-8.5547 0-4.7305 3.8203-8.5625 8.5547-8.5625 4.7227 0 8.5391 3.8281 8.5391 8.5625 0 4.7109-3.8086 8.5547-8.5391 8.5547zm8.0977-22.727c-1.1914-0.68359-2.4648-1.2148-3.8281-1.5859v-11.875c4.543 0.69922 8.7031 2.4414 12.25 5.0391zm-12.391-1.5781c-1.4297 0.39062-2.7773 0.95703-4.0273 1.6953l-8.3828-8.3828c3.5781-2.6758 7.793-4.4805 12.414-5.1953zm-9.9883 7.8242c-0.63672 1.1367-1.1367 2.3555-1.4922 3.6484h-11.852c0.68359-4.4648 2.3789-8.5703 4.9062-12.086zm-1.4922 12.211c0.36719 1.3516 0.90234 2.6289 1.5938 3.8203l-8.4141 8.4062c-2.5898-3.5391-4.3398-7.6914-5.0391-12.227zm7.6445 9.8672c1.1992 0.68359 2.4727 1.2227 3.8359 1.5938v11.875c-4.543-0.69922-8.7031-2.4492-12.25-5.0547zm12.398 1.6055c1.293-0.35156 2.4961-0.84766 3.6406-1.4844l8.4375 8.4453c-3.5078 2.5352-7.6133 4.2305-12.078 4.9141zm9.7852-7.4531c0.73828-1.2461 1.3086-2.5898 1.6953-4.0273h11.859c-0.70703 4.6133-2.5117 8.8281-5.1797 12.406zm1.6953-12.586c-0.36719-1.3672-0.91016-2.6523-1.5938-3.8438l8.4141-8.4141c2.5977 3.5547 4.3477 7.7148 5.0391 12.258z"/>\n    </g>\n    </svg>\n  <svg class="front-wheel" id="front-wheel-${e}" width="150pt" height="150pt" version="1.1" viewBox="110 328 110 110" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g>\n      <path d="m164.57 329c-29.711 0-53.793 24.035-53.793 53.77 0 29.664 24.078 53.754 53.793 53.754 29.695 0 53.777-24.07 53.777-53.754-0.003906-29.734-24.082-53.785-53.777-53.77zm-0.007812 62.316c-4.7383 0-8.5547-3.8281-8.5547-8.5547 0-4.7305 3.8203-8.5625 8.5547-8.5625 4.7227 0 8.5391 3.8281 8.5391 8.5625 0 4.7109-3.8086 8.5547-8.5391 8.5547zm8.0977-22.727c-1.1914-0.68359-2.4648-1.2148-3.8281-1.5859v-11.875c4.543 0.69922 8.7031 2.4414 12.25 5.0391zm-12.391-1.5781c-1.4297 0.39062-2.7773 0.95703-4.0273 1.6953l-8.3828-8.3828c3.5781-2.6758 7.793-4.4805 12.414-5.1953zm-9.9883 7.8242c-0.63672 1.1367-1.1367 2.3555-1.4922 3.6484h-11.852c0.68359-4.4648 2.3789-8.5703 4.9062-12.086zm-1.4922 12.211c0.36719 1.3516 0.90234 2.6289 1.5938 3.8203l-8.4141 8.4062c-2.5898-3.5391-4.3398-7.6914-5.0391-12.227zm7.6445 9.8672c1.1992 0.68359 2.4727 1.2227 3.8359 1.5938v11.875c-4.543-0.69922-8.7031-2.4492-12.25-5.0547zm12.398 1.6055c1.293-0.35156 2.4961-0.84766 3.6406-1.4844l8.4375 8.4453c-3.5078 2.5352-7.6133 4.2305-12.078 4.9141zm9.7852-7.4531c0.73828-1.2461 1.3086-2.5898 1.6953-4.0273h11.859c-0.70703 4.6133-2.5117 8.8281-5.1797 12.406zm1.6953-12.586c-0.36719-1.3672-0.91016-2.6523-1.5938-3.8438l8.4141-8.4141c2.5977 3.5547 4.3477 7.7148 5.0391 12.258z"/>\n    </g>\n  </svg>\n  `,o=e=>`\n<div class="winner-car">\n  <svg version="1.1" viewBox="0 200 700 250" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g>\n      <path d="m649.54 318s-17.086-20.496-41.68-22.539c0 0-95.645-5.4688-137.31-15.035l-91.543-51.23s-31.43-14.344-103.16-7.5117c0 0-94.965 6.1602-235.01 77.203 0 0-25.277 17.766-25.277 31.422v45.094s0.68359 5.4531 9.5586 9.5586l75.832 17.086s-8.1914-81.984 66.266-81.984c0 0 43.727-0.68359 58.07 51.934v30.055s-1.3594 8.8828 8.8906 8.8828h240.47s8.207 0.67578 8.207-9.5664c0 0-6.1367-81.293 62.859-81.293 0 0 62.16-1.3672 62.16 75.148 0 0-0.35156 7.1719 5.8008 7.1719 0 0 52.258-3.4141 70.699-17.422v-48.504c-0.011718-0.027344-11.633-18.469-34.84-18.469zm-624.92 17.25c0-13.672 28.352-31.941 28.352-31.941 15.695-5.707 37.754 0 37.754 0-5.3086 31.41-66.105 31.941-66.105 31.941zm163.44-52.445c-37.574 0-32.105-7.1719-32.105-7.1719-2.2461-6.9688 39.66-19.578 68.531-27.371v34.535h-36.426zm93.598 39.496h-16.395c-3.1094 0-5.6406-1.5469-5.6406-3.4609 0-1.9062 2.5195-3.4531 5.6406-3.4531h16.395c3.1094 0 5.6406 1.5469 5.6406 3.4531 0 1.9023-2.5273 3.4609-5.6406 3.4609zm-47.414-39.496v-37.125c9.8945-2.5742 16.668-4.1992 16.668-4.1992 80.957-19.469 124 2.7305 124 2.7305l65.246 38.594zm370.11 20.836c15.75-2.1094 38.875 18.812 38.875 18.812-35.574 5.0664-38.875-18.812-38.875-18.812z"\n      fill="${e}"/>\n      <path d="m164.57 329c-29.711 0-53.793 24.035-53.793 53.77 0 29.664 24.078 53.754 53.793 53.754 29.695 0 53.777-24.07 53.777-53.754-0.003906-29.734-24.082-53.785-53.777-53.77zm-0.007812 62.316c-4.7383 0-8.5547-3.8281-8.5547-8.5547 0-4.7305 3.8203-8.5625 8.5547-8.5625 4.7227 0 8.5391 3.8281 8.5391 8.5625 0 4.7109-3.8086 8.5547-8.5391 8.5547zm8.0977-22.727c-1.1914-0.68359-2.4648-1.2148-3.8281-1.5859v-11.875c4.543 0.69922 8.7031 2.4414 12.25 5.0391zm-12.391-1.5781c-1.4297 0.39062-2.7773 0.95703-4.0273 1.6953l-8.3828-8.3828c3.5781-2.6758 7.793-4.4805 12.414-5.1953zm-9.9883 7.8242c-0.63672 1.1367-1.1367 2.3555-1.4922 3.6484h-11.852c0.68359-4.4648 2.3789-8.5703 4.9062-12.086zm-1.4922 12.211c0.36719 1.3516 0.90234 2.6289 1.5938 3.8203l-8.4141 8.4062c-2.5898-3.5391-4.3398-7.6914-5.0391-12.227zm7.6445 9.8672c1.1992 0.68359 2.4727 1.2227 3.8359 1.5938v11.875c-4.543-0.69922-8.7031-2.4492-12.25-5.0547zm12.398 1.6055c1.293-0.35156 2.4961-0.84766 3.6406-1.4844l8.4375 8.4453c-3.5078 2.5352-7.6133 4.2305-12.078 4.9141zm9.7852-7.4531c0.73828-1.2461 1.3086-2.5898 1.6953-4.0273h11.859c-0.70703 4.6133-2.5117 8.8281-5.1797 12.406zm1.6953-12.586c-0.36719-1.3672-0.91016-2.6523-1.5938-3.8438l8.4141-8.4141c2.5977 3.5547 4.3477 7.7148 5.0391 12.258z"/>\n      <path d="m545.68 329c-29.703 0-53.785 24.035-53.785 53.77 0 29.664 24.078 53.754 53.785 53.754 29.688 0 53.77-24.07 53.77-53.754 0-29.734-24.074-53.785-53.77-53.77zm-0.007813 62.316c-4.7383 0-8.5547-3.8281-8.5547-8.5547 0-4.7305 3.8125-8.5625 8.5547-8.5625 4.7227 0 8.5391 3.8281 8.5391 8.5625 0.003906 4.7109-3.8086 8.5547-8.5391 8.5547zm8.0977-22.727c-1.1914-0.68359-2.4648-1.2148-3.8281-1.5859v-11.875c4.543 0.69922 8.7031 2.4414 12.242 5.0391zm-12.391-1.5781c-1.4375 0.39062-2.7773 0.95703-4.0273 1.6953l-8.3828-8.3828c3.5781-2.6758 7.8008-4.4805 12.414-5.1953zm-9.9844 7.8242c-0.63672 1.1367-1.1367 2.3555-1.4922 3.6484h-11.852c0.69141-4.4648 2.3867-8.5703 4.9062-12.086zm-1.4883 12.211c0.36719 1.3516 0.89453 2.6289 1.5859 3.8203l-8.4062 8.4062c-2.5977-3.5391-4.3477-7.6914-5.0391-12.227zm7.6406 9.8672c1.1992 0.68359 2.4727 1.2227 3.8359 1.5938v11.875c-4.543-0.69922-8.7031-2.4492-12.25-5.0547zm12.395 1.6055c1.293-0.35156 2.4961-0.84766 3.6406-1.4844l8.4375 8.4453c-3.5 2.5352-7.6133 4.2305-12.078 4.9141zm9.7852-7.4531c0.73828-1.2461 1.3086-2.5898 1.7031-4.0273h11.852c-0.70703 4.6133-2.5117 8.8281-5.1797 12.406zm1.7031-12.586c-0.375-1.3672-0.91016-2.6523-1.5938-3.8438l8.4062-8.4141c2.5977 3.5547 4.3477 7.7148 5.0391 12.258z"/>\n    </g>\n  </svg>\n  </div>\n  `},563:(e,t,n)=>{n.d(t,{d:()=>r});var a=n(181);const r=(e,t,n,r)=>`\n  <div class="garage-controls">\n    ${(0,a.dq)(e,t)}\n  </div>\n  <div class="road">\n    <div class="launch">\n      <div class="car-controls">\n        ${(0,a.Aw)(e,r)}\n      </div>\n      <div class="car" id="car-${e}">\n        ${(0,a.pI)(e,n)}\n      </div>\n    </div>\n    <img class="flag" src="./flag.png" alt="finish">\n  </div>\n  `},928:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{V:()=>s});var r=n(962),c=n(181),o=e([r]);r=(o.then?(await o)():o)[0];const s=()=>`\n  <h1>Winners (${r.h.winnersCount})</h1>\n  <h2>Page #${r.h.winnersPage}</h2>\n  <table class="winners-table">\n  <tr>\n    <th>Number</th>\n    <th>Car</th>\n    <th>Name</th>\n    <th>Wins</th>\n    <th>Best time (seconds)</th>\n  </tr>\n  ${r.h.winnersCars.map(((e,t)=>`\n      <tr>\n        <td>${t+1}</td>\n        <td>${(0,c.xA)(e.color)}</td>\n        <td>${e.name}</td>\n        <td>${e.wins}</td>\n        <td>${e.time}</td>\n      </tr>\n    `)).join("")}\n  </table>\n  `;a()}catch(e){a(e)}}))},498:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{A:()=>l});var r=n(639),c=n(628),o=n(504),s=n(962),i=n(284),d=e([o,s,i]);[o,s,i]=d.then?(await d)():d;const l=async()=>{const e=document.querySelector(".garage-container");s.h.cars=(await(0,r.Rn)(s.h.carsPage)).items,s.h.carsCount=(await(0,r.Rn)(s.h.carsPage)).count,s.h.carsCount&&Math.ceil(+s.h.carsCount/c.cd.Cars)<s.h.carsPage&&(s.h.carsPage-=1,s.h.cars=(await(0,r.Rn)(s.h.carsPage)).items,s.h.carsCount=(await(0,r.Rn)(s.h.carsPage)).count),e.innerHTML=(0,o.O)(),(0,i.Q)(c.GV.CarsPage,c.Si.CarsCount,c.cd.Cars)};a()}catch(e){a(e)}}))},284:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{Q:()=>s});var r=n(628),c=n(962),o=e([c]);c=(o.then?(await o)():o)[0];const s=(e,t,n)=>{const a=document.querySelector("#prev"),o=document.querySelector("#next"),s=c.h[t];c.h[e]!==r.T3.First?a.disabled=!1:a.disabled=!0,s&&(c.h[e]*n<+s?o.disabled=!1:o.disabled=!0)};a()}catch(e){a(e)}}))},729:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{a:()=>i});var r=n(677),c=n(928),o=n(962),s=e([c,o]);[c,o]=s.then?(await s)():s;const i=async()=>{const e=document.querySelector(".winners-container");o.h.winnersCars=(await(0,r.ix)(o.h.carsPage)).items,o.h.winnersCount=(await(0,r.ix)(o.h.carsPage)).count,e.innerHTML=(0,c.V)()};a()}catch(e){a(e)}}))},201:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{Np:()=>o,gr:()=>i,zj:()=>s});var r=n(962),c=e([r]);r=(c.then?(await c)():c)[0];const o=()=>{const e=document.querySelector(".road"),t=document.querySelector(".launch");return e.clientWidth-t.clientWidth},s=e=>{const t=document.querySelector(`#car-${e}`),n=document.querySelector(`#front-wheel-${e}`),a=document.querySelector(`#rear-wheel-${e}`);t.style.transition=n.style.transform=a.style.transform="0s",t.style.transform="translateX(0px)",n.style.transform=a.style.transform="rotate(0deg)"},i=(e,t,n)=>{const a=document.querySelector(`#car-${e}`),c=document.querySelector(`#front-wheel-${e}`),o=document.querySelector(`#rear-wheel-${e}`);a.style.transition=c.style.transition=o.style.transition="ease-out 1s";let i=0,d=0;const l=n/1e3*60,u=t/l,m=t/77.5*360/l,h=()=>{if(i+=u,d+=m,a.style.transform=`translateX(${i}px)`,c.style.transform=o.style.transform=`rotate(${d}deg)`,i<t){const t=requestAnimationFrame(h);r.h.animationStop.includes(e)&&cancelAnimationFrame(t),r.h.animationReset.includes(e)&&(cancelAnimationFrame(t),s(e))}};h()};a()}catch(e){a(e)}}))},493:(e,t,n)=>{n.d(t,{g:()=>i});var a=n(639),r=n(628);const c=()=>{const e=()=>Math.round(Math.random()*r.Il.Max).toString(16);return`#${e()}${e()}${e()}`},o=["Acura","Alfa Romeo","Aston Martin","Audi","Bentley","BMW","Bugatti","Buick","Cadillac","Chevrolet","Chrysler","Dodge","Ferrari","Fiat","Ford","Genesis","Honda","Hummer","Hyundai","Infiniti","Jaguar","Jeep","Kia","Land Rover","Lamborghini","Lexus","Lincoln","Maserati","Mazda","Mercedes-Benz","Nissan","Porsche","Rolls-Royce","Tesla","Toyota","Volkswagen","Volvo"],s=["A4","A5","A6","A7","A8","Q5","Q7","Q8","Model 3","Model X","Model Y","Model S","X1","X2","X3","X4","X5","X6","X7","M3","M5","M8","Mustang","F-150","Fiesta","Focus","Mondeo","Escape","Edge","Explorer","911","Panamera","Macan","Cayen"],i=e=>{(e=>{const t=[];for(let r=0;r<e;r++)t.push({name:(n=o,a=s,n[Math.round(Math.random()*n.length-1)]+" "+a[Math.round(Math.random()*a.length-1)]),color:c()});var n,a;return t})(e).forEach((async e=>(0,a.DT)(e)))}},962:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{h:()=>l});var r=n(639),c=n(677),o=n(628);const{items:e,count:s}=await(0,r.Rn)(1),{items:i,count:d}=await(0,c.ix)(1),l={carsPage:1,cars:e,carsCount:s,winnersPage:1,winnersCars:i.map((t=>({id:t.id,name:e.find((e=>e.id===t.id))?.name,color:e.find((e=>e.id===t.id))?.color,wins:t.wins,time:t.time}))),winnersCount:d,view:o.G7.Garage,sortBy:null,sortOrder:null,selectedID:void 0,animationStop:[],animationReset:[]};a()}catch(e){a(e)}}),1)}},c={};function o(e){var t=c[e];if(void 0!==t)return t.exports;var n=c[e]={id:e,exports:{}};return r[e](n,n.exports,o),n.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},o.a=(r,c,o)=>{var s;o&&((s=[]).d=1);var i,d,l,u=new Set,m=r.exports,h=new Promise(((e,t)=>{l=t,d=e}));h[t]=m,h[e]=e=>(s&&e(s),u.forEach(e),h.catch((e=>{}))),r.exports=h,c((r=>{var c;i=(r=>r.map((r=>{if(null!==r&&"object"==typeof r){if(r[e])return r;if(r.then){var c=[];c.d=0,r.then((e=>{o[t]=e,a(c)}),(e=>{o[n]=e,a(c)}));var o={};return o[e]=e=>e(c),o}}var s={};return s[e]=e=>{},s[t]=r,s})))(r);var o=()=>i.map((e=>{if(e[n])throw e[n];return e[t]})),d=new Promise((t=>{(c=()=>t(o)).r=0;var n=e=>e!==s&&!u.has(e)&&(u.add(e),e&&!e.d&&(c.r++,e.push(c)));i.map((t=>t[e](n)))}));return c.r?d:o()}),(e=>(e?l(h[n]=e):d(m),a(s)))),s&&(s.d=0)},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.nc=void 0,o(607)})();