import{s as Gt,a as Kt,n as Z,o as Xt,r as Yt}from"../chunks/scheduler.Bj67otkU.js";import{S as Jt,i as Qt,s as M,e as y,t as z,F as Zt,d as g,f as N,c as T,a as w,b as W,m as ut,n as h,g as G,h as u,j as $t,u as tt,H as et,B as lt,A as st}from"../chunks/index.CjQoJbwm.js";import{e as X}from"../chunks/each.D6YF6ztN.js";import{a as zt}from"../chunks/arrow-right.Due544SG.js";const Wt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;var Lt=typeof global=="object"&&global&&global.Object===Object&&global,te=typeof self=="object"&&self&&self.Object===Object&&self,Bt=Lt||te||Function("return this")(),it=Bt.Symbol,Mt=Object.prototype,ee=Mt.hasOwnProperty,le=Mt.toString,nt=it?it.toStringTag:void 0;function ae(e){var t=ee.call(e,nt),a=e[nt];try{e[nt]=void 0;var l=!0}catch{}var r=le.call(e);return l&&(t?e[nt]=a:delete e[nt]),r}var ne=Object.prototype,re=ne.toString;function se(e){return re.call(e)}var oe="[object Null]",ie="[object Undefined]",gt=it?it.toStringTag:void 0;function dt(e){return e==null?e===void 0?ie:oe:gt&&gt in Object(e)?ae(e):se(e)}function pt(e){return e!=null&&typeof e=="object"}function ce(e,t){for(var a=-1,l=e==null?0:e.length,r=Array(l);++a<l;)r[a]=t(e[a],a,e);return r}var Nt=Array.isArray;function _e(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var fe="[object AsyncFunction]",ue="[object Function]",de="[object GeneratorFunction]",pe="[object Proxy]";function he(e){if(!_e(e))return!1;var t=dt(e);return t==ue||t==de||t==fe||t==pe}function ge(e,t){var a=-1,l=e.length;for(t||(t=Array(l));++a<l;)t[a]=e[a];return t}var be=9007199254740991,me=/^(?:0|[1-9]\d*)$/;function ve(e,t){var a=typeof e;return t=t??be,!!t&&(a=="number"||a!="symbol"&&me.test(e))&&e>-1&&e%1==0&&e<t}var xe=9007199254740991;function Ft(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=xe}function ye(e){return e!=null&&Ft(e.length)&&!he(e)}var Te=Object.prototype;function je(e){var t=e&&e.constructor,a=typeof t=="function"&&t.prototype||Te;return e===a}function Ee(e,t){for(var a=-1,l=Array(e);++a<e;)l[a]=t(a);return l}var we="[object Arguments]";function bt(e){return pt(e)&&dt(e)==we}var Rt=Object.prototype,Ae=Rt.hasOwnProperty,ke=Rt.propertyIsEnumerable,Ie=bt(function(){return arguments}())?bt:function(e){return pt(e)&&Ae.call(e,"callee")&&!ke.call(e,"callee")};function Oe(){return!1}var Ut=typeof exports=="object"&&exports&&!exports.nodeType&&exports,mt=Ut&&typeof module=="object"&&module&&!module.nodeType&&module,Se=mt&&mt.exports===Ut,vt=Se?Bt.Buffer:void 0,De=vt?vt.isBuffer:void 0,Pe=De||Oe,Ce="[object Arguments]",Ve="[object Array]",$e="[object Boolean]",Le="[object Date]",Be="[object Error]",Me="[object Function]",Ne="[object Map]",Fe="[object Number]",Re="[object Object]",Ue="[object RegExp]",qe="[object Set]",He="[object String]",Ge="[object WeakMap]",Ke="[object ArrayBuffer]",Xe="[object DataView]",Ye="[object Float32Array]",Je="[object Float64Array]",Qe="[object Int8Array]",Ze="[object Int16Array]",ze="[object Int32Array]",We="[object Uint8Array]",tl="[object Uint8ClampedArray]",el="[object Uint16Array]",ll="[object Uint32Array]",k={};k[Ye]=k[Je]=k[Qe]=k[Ze]=k[ze]=k[We]=k[tl]=k[el]=k[ll]=!0;k[Ce]=k[Ve]=k[Ke]=k[$e]=k[Xe]=k[Le]=k[Be]=k[Me]=k[Ne]=k[Fe]=k[Re]=k[Ue]=k[qe]=k[He]=k[Ge]=!1;function al(e){return pt(e)&&Ft(e.length)&&!!k[dt(e)]}function nl(e){return function(t){return e(t)}}var qt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,rt=qt&&typeof module=="object"&&module&&!module.nodeType&&module,rl=rt&&rt.exports===qt,_t=rl&&Lt.process,xt=function(){try{var e=rt&&rt.require&&rt.require("util").types;return e||_t&&_t.binding&&_t.binding("util")}catch{}}(),yt=xt&&xt.isTypedArray,sl=yt?nl(yt):al,ol=Object.prototype,il=ol.hasOwnProperty;function cl(e,t){var a=Nt(e),l=!a&&Ie(e),r=!a&&!l&&Pe(e),n=!a&&!l&&!r&&sl(e),o=a||l||r||n,s=o?Ee(e.length,String):[],f=s.length;for(var i in e)(t||il.call(e,i))&&!(o&&(i=="length"||r&&(i=="offset"||i=="parent")||n&&(i=="buffer"||i=="byteLength"||i=="byteOffset")||ve(i,f)))&&s.push(i);return s}function _l(e,t){return function(a){return e(t(a))}}var fl=_l(Object.keys,Object),ul=Object.prototype,dl=ul.hasOwnProperty;function pl(e){if(!je(e))return fl(e);var t=[];for(var a in Object(e))dl.call(e,a)&&a!="constructor"&&t.push(a);return t}function hl(e){return ye(e)?cl(e):pl(e)}function gl(e,t){return ce(t,function(a){return e[a]})}function bl(e){return e==null?[]:gl(e,hl(e))}var ml=Math.floor,vl=Math.random;function xl(e,t){return e+ml(vl()*(t-e+1))}function Ht(e,t){var a=-1,l=e.length,r=l-1;for(t=t===void 0?l:t;++a<t;){var n=xl(a,r),o=e[n];e[n]=e[a],e[a]=o}return e.length=t,e}function yl(e){return Ht(ge(e))}function Tl(e){return Ht(bl(e))}function jl(e){var t=Nt(e)?yl:Tl;return t(e)}const{document:ft}=Wt;function Tt(e,t,a){const l=e.slice();return l[13]=t[a],l[15]=a,l}function jt(e,t,a){const l=e.slice();return l[16]=t[a],l}function Et(e,t,a){const l=e.slice();return l[16]=t[a],l}function wt(e,t,a){const l=e.slice();return l[21]=t[a],l[15]=a,l}function At(e,t,a){const l=e.slice();return l[16]=t[a],l[24]=a,l}function kt(e,t,a){const l=e.slice();return l[5]=t[a],l[15]=a,l}function El(e){let t,a,l=e[5].text1+"";return{c(){t=y("p"),a=new et(!1),this.h()},l(r){t=T(r,"P",{class:!0});var n=w(t);a=lt(n,!1),n.forEach(g),this.h()},h(){a.a=null,h(t,"class","initial__about__text")},m(r,n){G(r,t,n),a.m(l,t)},p:Z,d(r){r&&g(t)}}}function wl(e){let t,a,l,r=e[5].example1+"",n,o,s,f=e[5].example2+"";return{c(){t=y("ul"),a=y("li"),l=new et(!1),n=M(),o=y("li"),s=new et(!1),this.h()},l(i){t=T(i,"UL",{class:!0});var m=w(t);a=T(m,"LI",{class:!0});var $=w(a);l=lt($,!1),$.forEach(g),n=N(m),o=T(m,"LI",{class:!0});var d=w(o);s=lt(d,!1),d.forEach(g),m.forEach(g),this.h()},h(){l.a=null,h(a,"class","initial__about__list__item"),s.a=null,h(o,"class","initial__about__list__item"),h(t,"class","initial__about__list")},m(i,m){G(i,t,m),u(t,a),l.m(r,a),u(t,n),u(t,o),s.m(f,o)},p:Z,d(i){i&&g(t)}}}function Al(e){var r;let t,a,l=((r=e[5])==null?void 0:r.table)+"";return{c(){t=y("div"),a=new et(!1),this.h()},l(n){t=T(n,"DIV",{class:!0});var o=w(t);a=lt(o,!1),o.forEach(g),this.h()},h(){a.a=null,h(t,"class","initial__about__table")},m(n,o){G(n,t,o),a.m(l,t)},p:Z,d(n){n&&g(t)}}}function It(e){var x,K,D,F;let t,a,l=e[15]+1+"",r,n,o,s,f,i,m,$=((x=e[5])==null?void 0:x.text2)+"",d,S=((K=e[5])==null?void 0:K.text1)&&El(e),v=((D=e[5])==null?void 0:D.example1)&&wl(e),I=((F=e[5])==null?void 0:F.table)&&Al(e);return{c(){t=y("div"),a=y("p"),r=z(l),n=M(),S&&S.c(),o=M(),v&&v.c(),s=M(),I&&I.c(),f=M(),i=y("p"),m=new et(!1),d=M(),this.h()},l(O){t=T(O,"DIV",{class:!0});var c=w(t);a=T(c,"P",{class:!0});var j=w(a);r=W(j,l),j.forEach(g),n=N(c),S&&S.l(c),o=N(c),v&&v.l(c),s=N(c),I&&I.l(c),f=N(c),i=T(c,"P",{class:!0});var b=w(i);m=lt(b,!1),b.forEach(g),d=N(c),c.forEach(g),this.h()},h(){h(a,"class","initial__about__section-number"),m.a=null,h(i,"class","initial__about__text"),h(t,"class","initial__about__wrapper")},m(O,c){G(O,t,c),u(t,a),u(a,r),u(t,n),S&&S.m(t,null),u(t,o),v&&v.m(t,null),u(t,s),I&&I.m(t,null),u(t,f),u(t,i),m.m($,i),u(t,d)},p(O,c){var j,b,E;(j=O[5])!=null&&j.text1&&S.p(O,c),(b=O[5])!=null&&b.example1&&v.p(O,c),(E=O[5])!=null&&E.table&&I.p(O,c)},d(O){O&&g(t),S&&S.d(),v&&v.d(),I&&I.d()}}}function Ot(e){let t,a,l="Перетащите слова в правильное место в предложении",r,n=X(e[1]),o=[];for(let s=0;s<n.length;s+=1)o[s]=Dt(wt(e,n,s));return{c(){t=y("div"),a=y("h3"),a.textContent=l,r=M();for(let s=0;s<o.length;s+=1)o[s].c();this.h()},l(s){t=T(s,"DIV",{class:!0});var f=w(t);a=T(f,"H3",{class:!0,"data-svelte-h":!0}),ut(a)!=="svelte-13l7133"&&(a.textContent=l),r=N(f);for(let i=0;i<o.length;i+=1)o[i].l(f);f.forEach(g),this.h()},h(){h(a,"class","initial__tasks__drag-words__title"),h(t,"class","initial__tasks__drag-words")},m(s,f){G(s,t,f),u(t,a),u(t,r);for(let i=0;i<o.length;i+=1)o[i]&&o[i].m(t,null)},p(s,f){if(f&6){n=X(s[1]);let i;for(i=0;i<n.length;i+=1){const m=wt(s,n,i);o[i]?o[i].p(m,f):(o[i]=Dt(m),o[i].c(),o[i].m(t,null))}for(;i<o.length;i+=1)o[i].d(1);o.length=n.length}},d(s){s&&g(t),tt(o,s)}}}function St(e){let t,a=e[16]+"",l,r,n;return{c(){t=y("div"),l=z(a),this.h()},l(o){t=T(o,"DIV",{draggable:!0,"data-id":!0,role:!0,tabindex:!0,class:!0,"aria-grabbed":!0});var s=w(t);l=W(s,a),s.forEach(g),this.h()},h(){h(t,"draggable","true"),h(t,"data-id",e[15]+"-"+e[24]),h(t,"role","link"),h(t,"tabindex","0"),h(t,"class","initial__tasks__drag-words__item__word"),h(t,"aria-grabbed","false")},m(o,s){G(o,t,s),u(t,l),r||(n=[st(t,"dragover",Sl),st(t,"dragend",Dl),st(t,"dragstart",Ol),st(t,"drop",e[2])],r=!0)},p(o,s){s&2&&a!==(a=o[16]+"")&&$t(l,a)},d(o){o&&g(t),r=!1,Yt(n)}}}function Dt(e){let t,a,l=X(e[21]),r=[];for(let n=0;n<l.length;n+=1)r[n]=St(At(e,l,n));return{c(){t=y("div");for(let n=0;n<r.length;n+=1)r[n].c();a=M(),this.h()},l(n){t=T(n,"DIV",{class:!0,"data-id":!0});var o=w(t);for(let s=0;s<r.length;s+=1)r[s].l(o);a=N(o),o.forEach(g),this.h()},h(){h(t,"class","initial__tasks__drag-words__item"),h(t,"data-id",e[15])},m(n,o){G(n,t,o);for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(t,null);u(t,a)},p(n,o){if(o&6){l=X(n[21]);let s;for(s=0;s<l.length;s+=1){const f=At(n,l,s);r[s]?r[s].p(f,o):(r[s]=St(f),r[s].c(),r[s].m(t,a))}for(;s<r.length;s+=1)r[s].d(1);r.length=l.length}},d(n){n&&g(t),tt(r,n)}}}function kl(e){var K,D,F,O;let t,a,l="Закончите предложения. Используйте слова в нужной форме.",r,n,o,s,f,i,m,$=X((D=(K=e[3])==null?void 0:K.box1)==null?void 0:D.split(" ")),d=[];for(let c=0;c<$.length;c+=1)d[c]=Pt(Et(e,$,c));let S=X((O=(F=e[3])==null?void 0:F.box2)==null?void 0:O.split(" ")),v=[];for(let c=0;c<S.length;c+=1)v[c]=Ct(jt(e,S,c));let I=X(e[4]),x=[];for(let c=0;c<I.length;c+=1)x[c]=Vt(Tt(e,I,c));return{c(){t=y("div"),a=y("h3"),a.textContent=l,r=M(),n=y("div"),o=y("div");for(let c=0;c<d.length;c+=1)d[c].c();s=M(),f=y("div");for(let c=0;c<v.length;c+=1)v[c].c();i=M(),m=y("div");for(let c=0;c<x.length;c+=1)x[c].c();this.h()},l(c){t=T(c,"DIV",{class:!0});var j=w(t);a=T(j,"H3",{class:!0,"data-svelte-h":!0}),ut(a)!=="svelte-35i5ga"&&(a.textContent=l),r=N(j),n=T(j,"DIV",{class:!0});var b=w(n);o=T(b,"DIV",{class:!0});var E=w(o);for(let _=0;_<d.length;_+=1)d[_].l(E);E.forEach(g),s=N(b),f=T(b,"DIV",{class:!0});var A=w(f);for(let _=0;_<v.length;_+=1)v[_].l(A);A.forEach(g),b.forEach(g),i=N(j),m=T(j,"DIV",{class:!0});var C=w(m);for(let _=0;_<x.length;_+=1)x[_].l(C);C.forEach(g),j.forEach(g),this.h()},h(){h(a,"class","initial__tasks__correct-form__title"),h(o,"class","initial__tasks__correct-form__box"),h(f,"class","initial__tasks__correct-form__box"),h(n,"class","initial__tasks__correct-form__boxes"),h(m,"class","initial__tasks__correct-form__sentences"),h(t,"class","initial__tasks__correct-form")},m(c,j){G(c,t,j),u(t,a),u(t,r),u(t,n),u(n,o);for(let b=0;b<d.length;b+=1)d[b]&&d[b].m(o,null);u(n,s),u(n,f);for(let b=0;b<v.length;b+=1)v[b]&&v[b].m(f,null);u(t,i),u(t,m);for(let b=0;b<x.length;b+=1)x[b]&&x[b].m(m,null)},p(c,j){var b,E,A,C;if(j&8){$=X((E=(b=c[3])==null?void 0:b.box1)==null?void 0:E.split(" "));let _;for(_=0;_<$.length;_+=1){const p=Et(c,$,_);d[_]?d[_].p(p,j):(d[_]=Pt(p),d[_].c(),d[_].m(o,null))}for(;_<d.length;_+=1)d[_].d(1);d.length=$.length}if(j&8){S=X((C=(A=c[3])==null?void 0:A.box2)==null?void 0:C.split(" "));let _;for(_=0;_<S.length;_+=1){const p=jt(c,S,_);v[_]?v[_].p(p,j):(v[_]=Ct(p),v[_].c(),v[_].m(f,null))}for(;_<v.length;_+=1)v[_].d(1);v.length=S.length}if(j&16){I=X(c[4]);let _;for(_=0;_<I.length;_+=1){const p=Tt(c,I,_);x[_]?x[_].p(p,j):(x[_]=Vt(p),x[_].c(),x[_].m(m,null))}for(;_<x.length;_+=1)x[_].d(1);x.length=I.length}},d(c){c&&g(t),tt(d,c),tt(v,c),tt(x,c)}}}function Pt(e){let t,a=e[16]+"",l;return{c(){t=y("p"),l=z(a),this.h()},l(r){t=T(r,"P",{class:!0});var n=w(t);l=W(n,a),n.forEach(g),this.h()},h(){h(t,"class","initial__tasks__correct-form__box__item")},m(r,n){G(r,t,n),u(t,l)},p:Z,d(r){r&&g(t)}}}function Ct(e){let t,a=e[16]+"",l;return{c(){t=y("p"),l=z(a),this.h()},l(r){t=T(r,"P",{class:!0});var n=w(t);l=W(n,a),n.forEach(g),this.h()},h(){h(t,"class","initial__tasks__correct-form__box__item")},m(r,n){G(r,t,n),u(t,l)},p:Z,d(r){r&&g(t)}}}function Vt(e){let t,a=e[15]+1+"",l,r,n,o=e[13]+"";return{c(){t=y("div"),l=z(a),r=z(". "),n=new et(!1),this.h()},l(s){t=T(s,"DIV",{class:!0});var f=w(t);l=W(f,a),r=W(f,". "),n=lt(f,!1),f.forEach(g),this.h()},h(){n.a=null,h(t,"class","initial__tasks__correct-form__sentence")},m(s,f){G(s,t,f),u(t,l),u(t,r),n.m(o,t)},p:Z,d(s){s&&g(t)}}}function Il(e){var _;let t,a,l,r,n,o=e[0].post.title+"",s,f,i,m,$,d,S,v,I,x,K,D,F,O="Задания",c,j;ft.title=t=e[0].post.title;let b=X(e[5]),E=[];for(let p=0;p<b.length;p+=1)E[p]=It(kt(e,b,p));let A=((_=e[1])==null?void 0:_.length)&&Ot(e),C=e[3]&&kl(e);return{c(){a=M(),l=y("section"),r=y("div"),n=y("h1"),s=z(o),f=M(),i=y("div"),m=y("a"),$=z("Перейти к тексту"),d=y("img"),I=M(),x=y("div");for(let p=0;p<E.length;p+=1)E[p].c();K=M(),D=y("div"),F=y("h2"),F.textContent=O,c=M(),A&&A.c(),j=M(),C&&C.c(),this.h()},l(p){Zt("svelte-zg4c03",ft.head).forEach(g),a=N(p),l=T(p,"SECTION",{class:!0});var L=w(l);r=T(L,"DIV",{class:!0});var P=w(r);n=T(P,"H1",{class:!0});var Q=w(n);s=W(Q,o),Q.forEach(g),f=N(P),i=T(P,"DIV",{class:!0});var at=w(i);m=T(at,"A",{href:!0,class:!0});var q=w(m);$=W(q,"Перейти к тексту"),d=T(q,"IMG",{class:!0,src:!0,alt:!0}),q.forEach(g),at.forEach(g),P.forEach(g),I=N(L),x=T(L,"DIV",{class:!0});var V=w(x);for(let J=0;J<E.length;J+=1)E[J].l(V);V.forEach(g),K=N(L),D=T(L,"DIV",{class:!0});var Y=w(D);F=T(Y,"H2",{class:!0,"data-svelte-h":!0}),ut(F)!=="svelte-1t2dohg"&&(F.textContent=O),c=N(Y),A&&A.l(Y),j=N(Y),C&&C.l(Y),Y.forEach(g),L.forEach(g),this.h()},h(){h(n,"class","initial__title initial__title_right"),h(d,"class","initial__link__arrow"),Kt(d.src,S=zt)||h(d,"src",S),h(d,"alt","arrow"),h(m,"href",v="/text/"+e[0].post.slug),h(m,"class","initial__task-link"),h(i,"class","initial__top-link"),h(r,"class","initial__top"),h(x,"class","initial__about"),h(F,"class","initial__tasks__title"),h(D,"class","initial__tasks"),h(l,"class","initial")},m(p,U){G(p,a,U),G(p,l,U),u(l,r),u(r,n),u(n,s),u(r,f),u(r,i),u(i,m),u(m,$),u(m,d),u(l,I),u(l,x);for(let L=0;L<E.length;L+=1)E[L]&&E[L].m(x,null);u(l,K),u(l,D),u(D,F),u(D,c),A&&A.m(D,null),u(D,j),C&&C.m(D,null)},p(p,[U]){var L;if(U&1&&t!==(t=p[0].post.title)&&(ft.title=t),U&1&&o!==(o=p[0].post.title+"")&&$t(s,o),U&1&&v!==(v="/text/"+p[0].post.slug)&&h(m,"href",v),U&32){b=X(p[5]);let P;for(P=0;P<b.length;P+=1){const Q=kt(p,b,P);E[P]?E[P].p(Q,U):(E[P]=It(Q),E[P].c(),E[P].m(x,null))}for(;P<E.length;P+=1)E[P].d(1);E.length=b.length}(L=p[1])!=null&&L.length?A?A.p(p,U):(A=Ot(p),A.c(),A.m(D,j)):A&&(A.d(1),A=null),p[3]&&C.p(p,U)},i:Z,o:Z,d(p){p&&(g(a),g(l)),tt(E,p),A&&A.d(),C&&C.d()}}}function R(e){return e.replaceAll(" /n ","<br>").replaceAll(" /im ",'<span class="initial__important">').replaceAll(" im/ ","</span>").replaceAll(" /it ","<i>").replaceAll(" it/ ","</i>")}function ot(e){let t=e.replaceAll(" /col ",'<div class="initial__about__table__col">').replaceAll(" col/ ","</div>");const a=t.match(/<div class="initial__about__table__col">.*?<\/div>/g);if(a)for(let l=0;l<a.length;l++){const r=a[l],n=r.match(/<div class="initial__about__table__col">(.*?)<\/div>/);if(n){const s=n[1].split(" ").map(f=>`<div class="initial__about__table__cell"><p class="initial__about__table__cell__element">${f.replaceAll("/20"," ").replaceAll("/0","</br>")}</p></div>`).join("");t=t.replace(r,`<div class="initial__about__table__col">${s}</div>`)}}return t}function Ol(e){var a;const t=e.target;(a=e.dataTransfer)==null||a.setData("text/plain",t.dataset.id?t.dataset.id:""),t.style.opacity="0.5"}function Sl(e){var r;e.preventDefault();const t=e.target,a=(r=e.dataTransfer)==null?void 0:r.getData("text/plain"),l=t.closest(".initial__tasks__drag-words__item");if(a&&l&&l.contains(t)){const n=document.querySelector(`[data-id="${a}"]`),o=n==null?void 0:n.closest(".initial__tasks__drag-words__item");if(n&&o===l&&t.nodeName==="DIV"&&t!==n){const s=t.getBoundingClientRect(),f=s.top+s.height/2;e.clientY<f?t.insertAdjacentElement("beforebegin",n):t.insertAdjacentElement("afterend",n)}}}function Dl(e){const t=e.target;t.style.opacity="1"}function Pl(e,t,a){var x,K,D,F,O,c,j,b,E,A,C,_,p,U,L,P,Q,at;let{data:l}=t;const r=l.post.table1?ot(l.post.table1):"",n=l.post.table2?ot(l.post.table2):"",o=l.post.table3?ot(l.post.table3):"",s=l.post.table4?ot(l.post.table4):"",f=[{text1:(x=l.post.section1)!=null&&x.text1?R(l.post.section1.text1):"",example1:(K=l.post.section1)!=null&&K.example1?R(l.post.section1.example1):"",example2:(D=l.post.section1)!=null&&D.example2?R(l.post.section1.example2):"",text2:(F=l.post.section1)!=null&&F.text2?R(l.post.section1.text2):"",table:r},{text1:(O=l.post.section2)!=null&&O.text1?R(l.post.section2.text1):"",example1:(c=l.post.section2)!=null&&c.example1?R(l.post.section2.example1):"",example2:(j=l.post.section2)!=null&&j.example2?R(l.post.section2.example2):"",text2:(b=l.post.section2)!=null&&b.text2?R(l.post.section2.text2):"",table:n},{text1:(E=l.post.section3)!=null&&E.text1?R(l.post.section3.text1):"",example1:(A=l.post.section3)!=null&&A.example1?R(l.post.section3.example1):"",example2:(C=l.post.section3)!=null&&C.example2?R(l.post.section3.example2):"",text2:(_=l.post.section3)!=null&&_.text2?R(l.post.section3.text2):"",table:o},{text1:(p=l.post.section4)!=null&&p.text1?R(l.post.section4.text1):"",example1:(U=l.post.section4)!=null&&U.example1?R(l.post.section4.example1):"",example2:(L=l.post.section4)!=null&&L.example2?R(l.post.section4.example2):"",text2:(P=l.post.section4)!=null&&P.text2?R(l.post.section4.text2):"",table:s}],i=(Q=l.post.tasks)==null?void 0:Q.dragWords;let m=[];function $(q){var B;q.preventDefault();const V=q.target,Y=(B=q.dataTransfer)==null?void 0:B.getData("text/plain");if(Y){const H=document.querySelector(`[data-id="${Y}"]`),ct=V.getBoundingClientRect(),ht=H==null?void 0:H.getBoundingClientRect();V.nodeName==="DIV"&&H&&V!==H&&(ct.top!==ht.top||(ct.left<ht.left?V.insertAdjacentElement("beforebegin",H):V.insertAdjacentElement("afterend",H)))}let J=V.parentNode.innerText;J=J.replace(/(\r\n|\n|\r)/gm," "),J=J.trim(),i!=null&&i.includes(J)&&V.parentNode.classList.add("initial__tasks__drag-words__item_success")}const d=(at=l.post.tasks)==null?void 0:at.correctForm,v=(d==null?void 0:d.sentences).map((q,V)=>q.replace("/input",'<input type="text" class="initial__tasks__correct-form__input" name="input'+V+'" id="input'+V+'"></input>')),I=d==null?void 0:d.answers;return Xt(()=>{i!=null&&i.length&&a(1,m=i==null?void 0:i.map(B=>jl(B.split(" ")))),m.map(B=>B.join(" "));const q=document.querySelectorAll(".initial__tasks__drag-words__item");let V="";function Y(B){V="",B.childNodes.forEach(H=>{H.nodeType===Node.TEXT_NODE&&(V+=H.textContent)}),B.innerText=V,i!=null&&i.includes(V)&&B.classList.add("initial__tasks__drag-words__item_active")}q.forEach(B=>{B.addEventListener("drop",Y)}),document.querySelectorAll(".initial__tasks__correct-form__input").forEach((B,H)=>{B.addEventListener("input",()=>{I[H].split("/").includes(B.value)?B.classList.add("initial__tasks__correct-form__input_success"):B.classList.remove("initial__tasks__correct-form__input_success")})})}),e.$$set=q=>{"data"in q&&a(0,l=q.data)},[l,m,$,d,v,f]}class Bl extends Jt{constructor(t){super(),Qt(this,t,Pl,Il,Gt,{data:0})}}export{Bl as component};
