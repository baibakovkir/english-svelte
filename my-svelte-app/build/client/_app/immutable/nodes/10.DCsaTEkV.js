import{s as q,n as k,o as M,a as w}from"../chunks/scheduler.Bj67otkU.js";import{S as P,i as T,e as m,s as E,c as v,a as x,m as y,f as C,d as p,n as o,g as j,h as d,u as A,t as G,b as H,j as N}from"../chunks/index.CjQoJbwm.js";import{e as D}from"../chunks/each.D6YF6ztN.js";function S(_,a,s){const e=_.slice();return e[1]=a[s].slug,e[2]=a[s].title,e[3]=a[s].img,e}function V(_){let a,s,e,u,g,f,c,l=_[2]+"",n,h,t;return{c(){a=m("div"),s=m("a"),e=m("img"),f=E(),c=m("p"),n=G(l),t=E(),this.h()},l(i){a=v(i,"DIV",{class:!0});var r=x(a);s=v(r,"A",{href:!0,class:!0});var b=x(s);e=v(b,"IMG",{src:!0,alt:!0,class:!0}),f=C(b),c=v(b,"P",{class:!0});var I=x(c);n=H(I,l),I.forEach(p),b.forEach(p),t=C(r),r.forEach(p),this.h()},h(){w(e.src,u=_[3])||o(e,"src",u),o(e,"alt",g=_[2]),o(e,"class","english__box__img"),o(c,"class","english__box__text english__box__text_yellow"),o(s,"href",h="/english/"+_[1]),o(s,"class","english__link"),o(a,"class","english__box")},m(i,r){j(i,a,r),d(a,s),d(s,e),d(s,f),d(s,c),d(c,n),d(a,t)},p(i,r){r&1&&!w(e.src,u=i[3])&&o(e,"src",u),r&1&&g!==(g=i[2])&&o(e,"alt",g),r&1&&l!==(l=i[2]+"")&&N(n,l),r&1&&h!==(h="/english/"+i[1])&&o(s,"href",h)},d(i){i&&p(a)}}}function O(_){let a,s,e,u="Курсы по английскому языку",g,f,c=D(_[0].summaries),l=[];for(let n=0;n<c.length;n+=1)l[n]=V(S(_,c,n));return{c(){a=m("section"),s=m("div"),e=m("h1"),e.textContent=u,g=E(),f=m("div");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){a=v(n,"SECTION",{class:!0});var h=x(a);s=v(h,"DIV",{class:!0});var t=x(s);e=v(t,"H1",{class:!0,"data-svelte-h":!0}),y(e)!=="svelte-17r44tj"&&(e.textContent=u),g=C(t),f=v(t,"DIV",{class:!0});var i=x(f);for(let r=0;r<l.length;r+=1)l[r].l(i);i.forEach(p),t.forEach(p),h.forEach(p),this.h()},h(){o(e,"class","english__title"),o(f,"class","english__grid"),o(s,"class","english__container"),o(a,"class","english")},m(n,h){j(n,a,h),d(a,s),d(s,e),d(s,g),d(s,f);for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(f,null)},p(n,[h]){if(h&1){c=D(n[0].summaries);let t;for(t=0;t<c.length;t+=1){const i=S(n,c,t);l[t]?l[t].p(i,h):(l[t]=V(i),l[t].c(),l[t].m(f,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=c.length}},i:k,o:k,d(n){n&&p(a),A(l,n)}}}function z(_,a,s){let{data:e}=a;return M(()=>{window.scrollTo(0,0)}),_.$$set=u=>{"data"in u&&s(0,e=u.data)},[e]}class K extends P{constructor(a){super(),T(this,a,z,O,q,{data:0})}}export{K as component};