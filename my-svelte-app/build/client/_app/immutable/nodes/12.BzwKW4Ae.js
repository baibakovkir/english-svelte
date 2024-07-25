import{s as B}from"../chunks/scheduler.Bj67otkU.js";import{S as F,i as G,k as J,s as I,e as p,l as K,f as L,c as g,a as $,m as w,d as m,n as v,o as M,g as k,h as d,p as Q,q as R,r as W,u as T,t as V,b as y,j as z}from"../chunks/index.U5MeZLZm.js";import{e as j}from"../chunks/each.D6YF6ztN.js";import{S as X}from"../chunks/Sidebar.BuvnA0Qw.js";function D(i,a,n){const e=i.slice();return e[1]=a[n].slug,e[2]=a[n].title,e}function H(i,a,n){const e=i.slice();return e[1]=a[n].slug,e[2]=a[n].title,e}function N(i){let a,n,e=i[2]+"",l,o;return{c(){a=p("li"),n=p("a"),l=V(e),this.h()},l(t){a=g(t,"LI",{});var s=$(a);n=g(s,"A",{href:!0});var _=$(n);l=y(_,e),_.forEach(m),s.forEach(m),this.h()},h(){v(n,"href",o="/grammar/"+i[1])},m(t,s){k(t,a,s),d(a,n),d(n,l)},p(t,s){s&1&&e!==(e=t[2]+"")&&z(l,e),s&1&&o!==(o="/grammar/"+t[1])&&v(n,"href",o)},d(t){t&&m(a)}}}function Y(i){let a,n=j(i[0].summaries),e=[];for(let l=0;l<n.length;l+=1)e[l]=N(H(i,n,l));return{c(){a=p("ul");for(let l=0;l<e.length;l+=1)e[l].c()},l(l){a=g(l,"UL",{});var o=$(a);for(let t=0;t<e.length;t+=1)e[t].l(o);o.forEach(m)},m(l,o){k(l,a,o);for(let t=0;t<e.length;t+=1)e[t]&&e[t].m(a,null)},p(l,o){if(o&1){n=j(l[0].summaries);let t;for(t=0;t<n.length;t+=1){const s=H(l,n,t);e[t]?e[t].p(s,o):(e[t]=N(s),e[t].c(),e[t].m(a,null))}for(;t<e.length;t+=1)e[t].d(1);e.length=n.length}},d(l){l&&m(a),T(e,l)}}}function O(i){let a,n,e=i[2]+"",l,o;return{c(){a=p("li"),n=p("a"),l=V(e),this.h()},l(t){a=g(t,"LI",{});var s=$(a);n=g(s,"A",{href:!0});var _=$(n);l=y(_,e),_.forEach(m),s.forEach(m),this.h()},h(){v(n,"href",o="/grammar/"+i[1])},m(t,s){k(t,a,s),d(a,n),d(n,l)},p(t,s){s&1&&e!==(e=t[2]+"")&&z(l,e),s&1&&o!==(o="/grammar/"+t[1])&&v(n,"href",o)},d(t){t&&m(a)}}}function Z(i){let a,n,e,l,o="Грамматика",t,s,_,A="Приветствуем вас на этой странице, где мы объясним вам преимущества разделения изучения грамматики на модули. Этот подход поможет вам лучше понять грамматику, ускорить процесс обучения и добиться успеха в изучении языка.",P,x,U="Модули - это структурированные блоки информации, которые содержат основные аспекты грамматики языка. Каждый модуль посвящен определенной теме, такой как глаголы, прилагательные, местоимения и т. д. Разделение грамматики на модули делает обучение более организованным и доступным для понимания.",q,C,S;a=new X({props:{$$slots:{default:[Y]},$$scope:{ctx:i}}});let b=j(i[0].summaries),c=[];for(let r=0;r<b.length;r+=1)c[r]=O(D(i,b,r));return{c(){J(a.$$.fragment),n=I(),e=p("section"),l=p("h1"),l.textContent=o,t=I(),s=p("div"),_=p("p"),_.textContent=A,P=I(),x=p("p"),x.textContent=U,q=I(),C=p("ul");for(let r=0;r<c.length;r+=1)c[r].c();this.h()},l(r){K(a.$$.fragment,r),n=L(r),e=g(r,"SECTION",{class:!0});var u=$(e);l=g(u,"H1",{"data-svelte-h":!0}),w(l)!=="svelte-1jrhhsj"&&(l.textContent=o),t=L(u),s=g(u,"DIV",{class:!0});var f=$(s);_=g(f,"P",{class:!0,"data-svelte-h":!0}),w(_)!=="svelte-ptlhnn"&&(_.textContent=A),P=L(f),x=g(f,"P",{class:!0,"data-svelte-h":!0}),w(x)!=="svelte-y6p7nw"&&(x.textContent=U),q=L(f),C=g(f,"UL",{class:!0});var h=$(C);for(let E=0;E<c.length;E+=1)c[E].l(h);h.forEach(m),f.forEach(m),u.forEach(m),this.h()},h(){v(_,"class","initial__text"),v(x,"class","initial__text"),v(C,"class","grammar__menu"),v(s,"class","initial__box"),v(e,"class","grammar")},m(r,u){M(a,r,u),k(r,n,u),k(r,e,u),d(e,l),d(e,t),d(e,s),d(s,_),d(s,P),d(s,x),d(s,q),d(s,C);for(let f=0;f<c.length;f+=1)c[f]&&c[f].m(C,null);S=!0},p(r,[u]){const f={};if(u&129&&(f.$$scope={dirty:u,ctx:r}),a.$set(f),u&1){b=j(r[0].summaries);let h;for(h=0;h<b.length;h+=1){const E=D(r,b,h);c[h]?c[h].p(E,u):(c[h]=O(E),c[h].c(),c[h].m(C,null))}for(;h<c.length;h+=1)c[h].d(1);c.length=b.length}},i(r){S||(Q(a.$$.fragment,r),S=!0)},o(r){R(a.$$.fragment,r),S=!1},d(r){r&&(m(n),m(e)),W(a,r),T(c,r)}}}function ee(i,a,n){let{data:e}=a;return i.$$set=l=>{"data"in l&&n(0,e=l.data)},[e]}class se extends F{constructor(a){super(),G(this,a,ee,Z,B,{data:0})}}export{se as component};