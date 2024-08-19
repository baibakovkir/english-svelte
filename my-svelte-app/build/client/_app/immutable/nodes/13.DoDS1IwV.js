import{s as Mt,n as U,o as Rt,r as Ut}from"../chunks/scheduler.Bj67otkU.js";import{S as Ht,i as qt,s as $,e as E,t as Q,F as Gt,d as g,f as V,c as A,a as I,b as Z,m as nt,n as m,g as B,h as b,j as St,u as X,H as Y,B as J,A as W}from"../chunks/index.CjQoJbwm.js";import{e as L}from"../chunks/each.D6YF6ztN.js";const Kt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;var Dt=typeof global=="object"&&global&&global.Object===Object&&global,Xt=typeof self=="object"&&self&&self.Object===Object&&self,Pt=Dt||Xt||Function("return this")(),et=Pt.Symbol,Ct=Object.prototype,Yt=Ct.hasOwnProperty,Jt=Ct.toString,G=et?et.toStringTag:void 0;function Qt(e){var t=Yt.call(e,G),a=e[G];try{e[G]=void 0;var l=!0}catch{}var r=Jt.call(e);return l&&(t?e[G]=a:delete e[G]),r}var Zt=Object.prototype,zt=Zt.toString;function Wt(e){return zt.call(e)}var te="[object Null]",ee="[object Undefined]",dt=et?et.toStringTag:void 0;function rt(e){return e==null?e===void 0?ee:te:dt&&dt in Object(e)?Qt(e):Wt(e)}function ot(e){return e!=null&&typeof e=="object"}function le(e,t){for(var a=-1,l=e==null?0:e.length,r=Array(l);++a<l;)r[a]=t(e[a],a,e);return r}var $t=Array.isArray;function ae(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var ne="[object AsyncFunction]",re="[object Function]",oe="[object GeneratorFunction]",se="[object Proxy]";function ie(e){if(!ae(e))return!1;var t=rt(e);return t==re||t==oe||t==ne||t==se}function ce(e,t){var a=-1,l=e.length;for(t||(t=Array(l));++a<l;)t[a]=e[a];return t}var fe=9007199254740991,_e=/^(?:0|[1-9]\d*)$/;function ue(e,t){var a=typeof e;return t=t??fe,!!t&&(a=="number"||a!="symbol"&&_e.test(e))&&e>-1&&e%1==0&&e<t}var de=9007199254740991;function Vt(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=de}function pe(e){return e!=null&&Vt(e.length)&&!ie(e)}var he=Object.prototype;function ge(e){var t=e&&e.constructor,a=typeof t=="function"&&t.prototype||he;return e===a}function be(e,t){for(var a=-1,l=Array(e);++a<e;)l[a]=t(a);return l}var me="[object Arguments]";function pt(e){return ot(e)&&rt(e)==me}var Ft=Object.prototype,ve=Ft.hasOwnProperty,xe=Ft.propertyIsEnumerable,ye=pt(function(){return arguments}())?pt:function(e){return ot(e)&&ve.call(e,"callee")&&!xe.call(e,"callee")};function Te(){return!1}var Bt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ht=Bt&&typeof module=="object"&&module&&!module.nodeType&&module,je=ht&&ht.exports===Bt,gt=je?Pt.Buffer:void 0,Ee=gt?gt.isBuffer:void 0,Ae=Ee||Te,we="[object Arguments]",ke="[object Array]",Ie="[object Boolean]",Oe="[object Date]",Se="[object Error]",De="[object Function]",Pe="[object Map]",Ce="[object Number]",$e="[object Object]",Ve="[object RegExp]",Fe="[object Set]",Be="[object String]",Le="[object WeakMap]",Ne="[object ArrayBuffer]",Me="[object DataView]",Re="[object Float32Array]",Ue="[object Float64Array]",He="[object Int8Array]",qe="[object Int16Array]",Ge="[object Int32Array]",Ke="[object Uint8Array]",Xe="[object Uint8ClampedArray]",Ye="[object Uint16Array]",Je="[object Uint32Array]",j={};j[Re]=j[Ue]=j[He]=j[qe]=j[Ge]=j[Ke]=j[Xe]=j[Ye]=j[Je]=!0;j[we]=j[ke]=j[Ne]=j[Ie]=j[Me]=j[Oe]=j[Se]=j[De]=j[Pe]=j[Ce]=j[$e]=j[Ve]=j[Fe]=j[Be]=j[Le]=!1;function Qe(e){return ot(e)&&Vt(e.length)&&!!j[rt(e)]}function Ze(e){return function(t){return e(t)}}var Lt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,K=Lt&&typeof module=="object"&&module&&!module.nodeType&&module,ze=K&&K.exports===Lt,lt=ze&&Dt.process,bt=function(){try{var e=K&&K.require&&K.require("util").types;return e||lt&&lt.binding&&lt.binding("util")}catch{}}(),mt=bt&&bt.isTypedArray,We=mt?Ze(mt):Qe,tl=Object.prototype,el=tl.hasOwnProperty;function ll(e,t){var a=$t(e),l=!a&&ye(e),r=!a&&!l&&Ae(e),n=!a&&!l&&!r&&We(e),s=a||l||r||n,o=s?be(e.length,String):[],d=o.length;for(var i in e)(t||el.call(e,i))&&!(s&&(i=="length"||r&&(i=="offset"||i=="parent")||n&&(i=="buffer"||i=="byteLength"||i=="byteOffset")||ue(i,d)))&&o.push(i);return o}function al(e,t){return function(a){return e(t(a))}}var nl=al(Object.keys,Object),rl=Object.prototype,ol=rl.hasOwnProperty;function sl(e){if(!ge(e))return nl(e);var t=[];for(var a in Object(e))ol.call(e,a)&&a!="constructor"&&t.push(a);return t}function il(e){return pe(e)?ll(e):sl(e)}function cl(e,t){return le(t,function(a){return e[a]})}function fl(e){return e==null?[]:cl(e,il(e))}var _l=Math.floor,ul=Math.random;function dl(e,t){return e+_l(ul()*(t-e+1))}function Nt(e,t){var a=-1,l=e.length,r=l-1;for(t=t===void 0?l:t;++a<t;){var n=dl(a,r),s=e[n];e[n]=e[a],e[a]=s}return e.length=t,e}function pl(e){return Nt(ce(e))}function hl(e){return Nt(fl(e))}function gl(e){var t=$t(e)?pl:hl;return t(e)}const{document:at}=Kt;function vt(e,t,a){const l=e.slice();return l[10]=t[a],l}function xt(e,t,a){const l=e.slice();return l[10]=t[a],l}function yt(e,t,a){const l=e.slice();return l[15]=t[a],l[17]=a,l}function Tt(e,t,a){const l=e.slice();return l[10]=t[a],l[19]=a,l}function jt(e,t,a){const l=e.slice();return l[4]=t[a],l[17]=a,l}function bl(e){let t,a,l=e[4].text1+"";return{c(){t=E("p"),a=new Y(!1),this.h()},l(r){t=A(r,"P",{class:!0});var n=I(t);a=J(n,!1),n.forEach(g),this.h()},h(){a.a=null,m(t,"class","initial__about__text")},m(r,n){B(r,t,n),a.m(l,t)},p:U,d(r){r&&g(t)}}}function ml(e){let t,a,l,r=e[4].example1+"",n,s,o,d=e[4].example2+"";return{c(){t=E("ul"),a=E("li"),l=new Y(!1),n=$(),s=E("li"),o=new Y(!1),this.h()},l(i){t=A(i,"UL",{class:!0});var u=I(t);a=A(u,"LI",{class:!0});var k=I(a);l=J(k,!1),k.forEach(g),n=V(u),s=A(u,"LI",{class:!0});var v=I(s);o=J(v,!1),v.forEach(g),u.forEach(g),this.h()},h(){l.a=null,m(a,"class","initial__about__list__item"),o.a=null,m(s,"class","initial__about__list__item"),m(t,"class","initial__about__list")},m(i,u){B(i,t,u),b(t,a),l.m(r,a),b(t,n),b(t,s),o.m(d,s)},p:U,d(i){i&&g(t)}}}function vl(e){var r;let t,a,l=((r=e[4])==null?void 0:r.table)+"";return{c(){t=E("div"),a=new Y(!1),this.h()},l(n){t=A(n,"DIV",{class:!0});var s=I(t);a=J(s,!1),s.forEach(g),this.h()},h(){a.a=null,m(t,"class","initial__about__table")},m(n,s){B(n,t,s),a.m(l,t)},p:U,d(n){n&&g(t)}}}function Et(e){var y,c,x,T;let t,a,l=e[17]+1+"",r,n,s,o,d,i,u,k=((y=e[4])==null?void 0:y.text2)+"",v,S=((c=e[4])==null?void 0:c.text1)&&bl(e),O=((x=e[4])==null?void 0:x.example1)&&ml(e),w=((T=e[4])==null?void 0:T.table)&&vl(e);return{c(){t=E("div"),a=E("p"),r=Q(l),n=$(),S&&S.c(),s=$(),O&&O.c(),o=$(),w&&w.c(),d=$(),i=E("p"),u=new Y(!1),v=$(),this.h()},l(_){t=A(_,"DIV",{class:!0});var p=I(t);a=A(p,"P",{class:!0});var h=I(a);r=Z(h,l),h.forEach(g),n=V(p),S&&S.l(p),s=V(p),O&&O.l(p),o=V(p),w&&w.l(p),d=V(p),i=A(p,"P",{class:!0});var f=I(i);u=J(f,!1),f.forEach(g),v=V(p),p.forEach(g),this.h()},h(){m(a,"class","initial__about__section-number"),u.a=null,m(i,"class","initial__about__text"),m(t,"class","initial__about__wrapper")},m(_,p){B(_,t,p),b(t,a),b(a,r),b(t,n),S&&S.m(t,null),b(t,s),O&&O.m(t,null),b(t,o),w&&w.m(t,null),b(t,d),b(t,i),u.m(k,i),b(t,v)},p(_,p){var h,f,D;(h=_[4])!=null&&h.text1&&S.p(_,p),(f=_[4])!=null&&f.example1&&O.p(_,p),(D=_[4])!=null&&D.table&&w.p(_,p)},d(_){_&&g(t),S&&S.d(),O&&O.d(),w&&w.d()}}}function At(e){let t,a,l="Перетащите слова в правильное место в предложении",r,n=L(e[1]),s=[];for(let o=0;o<n.length;o+=1)s[o]=kt(yt(e,n,o));return{c(){t=E("div"),a=E("h3"),a.textContent=l,r=$();for(let o=0;o<s.length;o+=1)s[o].c();this.h()},l(o){t=A(o,"DIV",{class:!0});var d=I(t);a=A(d,"H3",{class:!0,"data-svelte-h":!0}),nt(a)!=="svelte-13l7133"&&(a.textContent=l),r=V(d);for(let i=0;i<s.length;i+=1)s[i].l(d);d.forEach(g),this.h()},h(){m(a,"class","initial__tasks__drag-words__title"),m(t,"class","initial__tasks__drag-words")},m(o,d){B(o,t,d),b(t,a),b(t,r);for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(t,null)},p(o,d){if(d&6){n=L(o[1]);let i;for(i=0;i<n.length;i+=1){const u=yt(o,n,i);s[i]?s[i].p(u,d):(s[i]=kt(u),s[i].c(),s[i].m(t,null))}for(;i<s.length;i+=1)s[i].d(1);s.length=n.length}},d(o){o&&g(t),X(s,o)}}}function wt(e){let t,a=e[10]+"",l,r,n;return{c(){t=E("div"),l=Q(a),this.h()},l(s){t=A(s,"DIV",{draggable:!0,"data-id":!0,role:!0,tabindex:!0,class:!0,"aria-grabbed":!0});var o=I(t);l=Z(o,a),o.forEach(g),this.h()},h(){m(t,"draggable","true"),m(t,"data-id",e[17]+"-"+e[19]),m(t,"role","link"),m(t,"tabindex","0"),m(t,"class","initial__tasks__drag-words__item__word"),m(t,"aria-grabbed","false")},m(s,o){B(s,t,o),b(t,l),r||(n=[W(t,"dragover",jl),W(t,"dragend",El),W(t,"dragstart",Tl),W(t,"drop",e[2])],r=!0)},p(s,o){o&2&&a!==(a=s[10]+"")&&St(l,a)},d(s){s&&g(t),r=!1,Ut(n)}}}function kt(e){let t,a,l=L(e[15]),r=[];for(let n=0;n<l.length;n+=1)r[n]=wt(Tt(e,l,n));return{c(){t=E("div");for(let n=0;n<r.length;n+=1)r[n].c();a=$(),this.h()},l(n){t=A(n,"DIV",{class:!0,"data-id":!0});var s=I(t);for(let o=0;o<r.length;o+=1)r[o].l(s);a=V(s),s.forEach(g),this.h()},h(){m(t,"class","initial__tasks__drag-words__item"),m(t,"data-id",e[17])},m(n,s){B(n,t,s);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(t,null);b(t,a)},p(n,s){if(s&6){l=L(n[15]);let o;for(o=0;o<l.length;o+=1){const d=Tt(n,l,o);r[o]?r[o].p(d,s):(r[o]=wt(d),r[o].c(),r[o].m(t,a))}for(;o<r.length;o+=1)r[o].d(1);r.length=l.length}},d(n){n&&g(t),X(r,n)}}}function xl(e){var S,O,w,y;let t,a,l="Закончите предложения. Используйте слова в нужной форме.",r,n,s,o,d,i=L((O=(S=e[3])==null?void 0:S.box1)==null?void 0:O.split(" ")),u=[];for(let c=0;c<i.length;c+=1)u[c]=It(xt(e,i,c));let k=L((y=(w=e[3])==null?void 0:w.box2)==null?void 0:y.split(" ")),v=[];for(let c=0;c<k.length;c+=1)v[c]=Ot(vt(e,k,c));return{c(){t=E("div"),a=E("h3"),a.textContent=l,r=$(),n=E("div"),s=E("div");for(let c=0;c<u.length;c+=1)u[c].c();o=$(),d=E("div");for(let c=0;c<v.length;c+=1)v[c].c();this.h()},l(c){t=A(c,"DIV",{class:!0});var x=I(t);a=A(x,"H3",{class:!0,"data-svelte-h":!0}),nt(a)!=="svelte-35i5ga"&&(a.textContent=l),r=V(x),n=A(x,"DIV",{class:!0});var T=I(n);s=A(T,"DIV",{class:!0});var _=I(s);for(let h=0;h<u.length;h+=1)u[h].l(_);_.forEach(g),o=V(T),d=A(T,"DIV",{class:!0});var p=I(d);for(let h=0;h<v.length;h+=1)v[h].l(p);p.forEach(g),T.forEach(g),x.forEach(g),this.h()},h(){m(a,"class","initial__tasks__correct-form__title"),m(s,"class","initial__tasks__correct-form__box1"),m(d,"class","initial__tasks__correct-form__box2"),m(n,"class","initial__tasks__correct-form__boxes"),m(t,"class","initial__tasks__correct-form")},m(c,x){B(c,t,x),b(t,a),b(t,r),b(t,n),b(n,s);for(let T=0;T<u.length;T+=1)u[T]&&u[T].m(s,null);b(n,o),b(n,d);for(let T=0;T<v.length;T+=1)v[T]&&v[T].m(d,null)},p(c,x){var T,_,p,h;if(x&8){i=L((_=(T=c[3])==null?void 0:T.box1)==null?void 0:_.split(" "));let f;for(f=0;f<i.length;f+=1){const D=xt(c,i,f);u[f]?u[f].p(D,x):(u[f]=It(D),u[f].c(),u[f].m(s,null))}for(;f<u.length;f+=1)u[f].d(1);u.length=i.length}if(x&8){k=L((h=(p=c[3])==null?void 0:p.box2)==null?void 0:h.split(" "));let f;for(f=0;f<k.length;f+=1){const D=vt(c,k,f);v[f]?v[f].p(D,x):(v[f]=Ot(D),v[f].c(),v[f].m(d,null))}for(;f<v.length;f+=1)v[f].d(1);v.length=k.length}},d(c){c&&g(t),X(u,c),X(v,c)}}}function It(e){let t,a=e[10]+"",l;return{c(){t=E("div"),l=Q(a),this.h()},l(r){t=A(r,"DIV",{class:!0});var n=I(t);l=Z(n,a),n.forEach(g),this.h()},h(){m(t,"class","initial__tasks__correct-form__box1__item")},m(r,n){B(r,t,n),b(t,l)},p:U,d(r){r&&g(t)}}}function Ot(e){let t,a=e[10]+"",l;return{c(){t=E("div"),l=Q(a),this.h()},l(r){t=A(r,"DIV",{class:!0});var n=I(t);l=Z(n,a),n.forEach(g),this.h()},h(){m(t,"class","initial__tasks__correct-form__box2__item")},m(r,n){B(r,t,n),b(t,l)},p:U,d(r){r&&g(t)}}}function yl(e){var T;let t,a,l,r,n=e[0].post.title+"",s,o,d,i,u,k,v="Задания",S,O;at.title=t=e[0].post.title;let w=L(e[4]),y=[];for(let _=0;_<w.length;_+=1)y[_]=Et(jt(e,w,_));let c=((T=e[1])==null?void 0:T.length)&&At(e),x=e[3]&&xl(e);return{c(){a=$(),l=E("section"),r=E("h1"),s=Q(n),o=$(),d=E("div");for(let _=0;_<y.length;_+=1)y[_].c();i=$(),u=E("div"),k=E("h2"),k.textContent=v,S=$(),c&&c.c(),O=$(),x&&x.c(),this.h()},l(_){Gt("svelte-zg4c03",at.head).forEach(g),a=V(_),l=A(_,"SECTION",{class:!0});var h=I(l);r=A(h,"H1",{class:!0});var f=I(r);s=Z(f,n),f.forEach(g),o=V(h),d=A(h,"DIV",{class:!0});var D=I(d);for(let H=0;H<y.length;H+=1)y[H].l(D);D.forEach(g),i=V(h),u=A(h,"DIV",{class:!0});var N=I(u);k=A(N,"H2",{class:!0,"data-svelte-h":!0}),nt(k)!=="svelte-1t2dohg"&&(k.textContent=v),S=V(N),c&&c.l(N),O=V(N),x&&x.l(N),N.forEach(g),h.forEach(g),this.h()},h(){m(r,"class","initial__title"),m(d,"class","initial__about"),m(k,"class","initial__tasks__title"),m(u,"class","initial__tasks"),m(l,"class","initial")},m(_,p){B(_,a,p),B(_,l,p),b(l,r),b(r,s),b(l,o),b(l,d);for(let h=0;h<y.length;h+=1)y[h]&&y[h].m(d,null);b(l,i),b(l,u),b(u,k),b(u,S),c&&c.m(u,null),b(u,O),x&&x.m(u,null)},p(_,[p]){var h;if(p&1&&t!==(t=_[0].post.title)&&(at.title=t),p&1&&n!==(n=_[0].post.title+"")&&St(s,n),p&16){w=L(_[4]);let f;for(f=0;f<w.length;f+=1){const D=jt(_,w,f);y[f]?y[f].p(D,p):(y[f]=Et(D),y[f].c(),y[f].m(d,null))}for(;f<y.length;f+=1)y[f].d(1);y.length=w.length}(h=_[1])!=null&&h.length?c?c.p(_,p):(c=At(_),c.c(),c.m(u,O)):c&&(c.d(1),c=null),_[3]&&x.p(_,p)},i:U,o:U,d(_){_&&(g(a),g(l)),X(y,_),c&&c.d(),x&&x.d()}}}function P(e){return e.replaceAll(" /n ","<br>").replaceAll(" /im ",'<span class="initial__important">').replaceAll(" im/ ","</span>").replaceAll(" /it ","<i>").replaceAll(" it/ ","</i>")}function tt(e){let t=e.replaceAll(" /col ",'<div class="initial__about__table__col">').replaceAll(" col/ ","</div>");const a=t.match(/<div class="initial__about__table__col">.*?<\/div>/g);if(a)for(let l=0;l<a.length;l++){const r=a[l],n=r.match(/<div class="initial__about__table__col">(.*?)<\/div>/);if(n){const o=n[1].split(" ").map(d=>`<div class="initial__about__table__cell"><p class="initial__about__table__cell__element">${d.replaceAll("/20"," ").replaceAll("/0","</br>")}</p></div>`).join("");t=t.replace(r,`<div class="initial__about__table__col">${o}</div>`)}}return t}function Tl(e){var a;const t=e.target;(a=e.dataTransfer)==null||a.setData("text/plain",t.dataset.id?t.dataset.id:""),t.style.opacity="0.5"}function jl(e){var r;e.preventDefault();const t=e.target,a=(r=e.dataTransfer)==null?void 0:r.getData("text/plain"),l=t.closest(".initial__tasks__drag-words__item");if(a&&l&&l.contains(t)){const n=document.querySelector(`[data-id="${a}"]`),s=n==null?void 0:n.closest(".initial__tasks__drag-words__item");if(n&&s===l&&t.nodeName==="DIV"&&t!==n){const o=t.getBoundingClientRect(),d=o.top+o.height/2;e.clientY<d?t.insertAdjacentElement("beforebegin",n):t.insertAdjacentElement("afterend",n)}}}function El(e){const t=e.target;t.style.opacity="1"}function Al(e,t,a){var S,O,w,y,c,x,T,_,p,h,f,D,N,H,st,it,ct,ft;let{data:l}=t;const r=l.post.table1?tt(l.post.table1):"",n=l.post.table2?tt(l.post.table2):"",s=l.post.table3?tt(l.post.table3):"",o=l.post.table4?tt(l.post.table4):"",d=[{text1:(S=l.post.section1)!=null&&S.text1?P(l.post.section1.text1):"",example1:(O=l.post.section1)!=null&&O.example1?P(l.post.section1.example1):"",example2:(w=l.post.section1)!=null&&w.example2?P(l.post.section1.example2):"",text2:(y=l.post.section1)!=null&&y.text2?P(l.post.section1.text2):"",table:r},{text1:(c=l.post.section2)!=null&&c.text1?P(l.post.section2.text1):"",example1:(x=l.post.section2)!=null&&x.example1?P(l.post.section2.example1):"",example2:(T=l.post.section2)!=null&&T.example2?P(l.post.section2.example2):"",text2:(_=l.post.section2)!=null&&_.text2?P(l.post.section2.text2):"",table:n},{text1:(p=l.post.section3)!=null&&p.text1?P(l.post.section3.text1):"",example1:(h=l.post.section3)!=null&&h.example1?P(l.post.section3.example1):"",example2:(f=l.post.section3)!=null&&f.example2?P(l.post.section3.example2):"",text2:(D=l.post.section3)!=null&&D.text2?P(l.post.section3.text2):"",table:s},{text1:(N=l.post.section4)!=null&&N.text1?P(l.post.section4.text1):"",example1:(H=l.post.section4)!=null&&H.example1?P(l.post.section4.example1):"",example2:(st=l.post.section4)!=null&&st.example2?P(l.post.section4.example2):"",text2:(it=l.post.section4)!=null&&it.text2?P(l.post.section4.text2):"",table:o}],i=(ct=l.post.tasks)==null?void 0:ct.dragWords;let u=[];function k(M){var q;M.preventDefault();const F=M.target,z=(q=M.dataTransfer)==null?void 0:q.getData("text/plain");if(z){const R=document.querySelector(`[data-id="${z}"]`),_t=F.getBoundingClientRect(),ut=R==null?void 0:R.getBoundingClientRect();F.nodeName==="DIV"&&R&&F!==R&&(_t.top!==ut.top||(_t.left<ut.left?F.insertAdjacentElement("beforebegin",R):F.insertAdjacentElement("afterend",R)))}let C=F.parentNode.innerText;C=C.replace(/(\r\n|\n|\r)/gm," "),C=C.trim(),i!=null&&i.includes(C)&&F.parentNode.classList.add("initial__tasks__drag-words__item_success")}const v=(ft=l.post.tasks)==null?void 0:ft.correctForm;return Rt(()=>{i!=null&&i.length&&a(1,u=i==null?void 0:i.map(C=>gl(C.split(" ")))),u.map(C=>C.join(" "));const M=document.querySelectorAll(".initial__tasks__drag-words__item");let F="";function z(C){F="",C.childNodes.forEach(q=>{q.nodeType===Node.TEXT_NODE&&(F+=q.textContent)}),C.innerText=F,i!=null&&i.includes(F)&&C.classList.add("initial__tasks__drag-words__item_active")}M.forEach(C=>{C.addEventListener("drop",z)})}),e.$$set=M=>{"data"in M&&a(0,l=M.data)},[l,u,k,v,d]}class Ol extends Ht{constructor(t){super(),qt(this,t,Al,yl,Mt,{data:0})}}export{Ol as component};
