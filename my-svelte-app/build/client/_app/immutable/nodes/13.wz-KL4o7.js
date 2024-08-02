import{s as D,n as L}from"../chunks/scheduler.Bj67otkU.js";import{S as V,i as $,s as x,e as d,t as q,v as z,d as r,f as A,c as v,a as b,b as N,n as w,g as p,h as E,j as O,u as U,H as k,w as H}from"../chunks/index.59xXzVuS.js";import{e as S}from"../chunks/each.D6YF6ztN.js";function j(c,l,n){const i=c.slice();return i[1]=l[n],i}function y(c){let l,n,i=c[1].text1+"";return{c(){l=d("p"),n=new k(!1),this.h()},l(o){l=v(o,"P",{class:!0});var t=b(l);n=H(t,!1),t.forEach(r),this.h()},h(){n.a=null,w(l,"class","initial__about__text")},m(o,t){p(o,l,t),n.m(i,l)},p:L,d(o){o&&r(l)}}}function B(c){let l,n,i,o=c[1].example1+"",t,u,f,h=c[1].example2+"";return{c(){l=d("ul"),n=d("li"),i=new k(!1),t=x(),u=d("li"),f=new k(!1),this.h()},l(m){l=v(m,"UL",{class:!0});var _=b(l);n=v(_,"LI",{class:!0});var s=b(n);i=H(s,!1),s.forEach(r),t=A(_),u=v(_,"LI",{class:!0});var e=b(u);f=H(e,!1),e.forEach(r),_.forEach(r),this.h()},h(){i.a=null,w(n,"class","initial__about__list__item"),f.a=null,w(u,"class","initial__about__list__item"),w(l,"class","initial__about__list")},m(m,_){p(m,l,_),E(l,n),i.m(o,n),E(l,t),E(l,u),f.m(h,u)},p:L,d(m){m&&r(l)}}}function C(c){let l,n,i,o,t=c[0].post.section1.table1+"",u,f,h,m=c[1].text2+"",_=c[1].text1&&y(c),s=c[1].example1&&B(c);return{c(){_&&_.c(),l=x(),s&&s.c(),n=x(),i=d("div"),o=new k(!1),u=x(),f=d("p"),h=new k(!1),this.h()},l(e){_&&_.l(e),l=A(e),s&&s.l(e),n=A(e),i=v(e,"DIV",{class:!0});var a=b(i);o=H(a,!1),a.forEach(r),u=A(e),f=v(e,"P",{class:!0});var g=b(f);h=H(g,!1),g.forEach(r),this.h()},h(){o.a=null,w(i,"class","initial__about__table"),h.a=null,w(f,"class","initial__about__text")},m(e,a){_&&_.m(e,a),p(e,l,a),s&&s.m(e,a),p(e,n,a),p(e,i,a),o.m(t,i),p(e,u,a),p(e,f,a),h.m(m,f)},p(e,a){e[1].text1&&_.p(e,a),e[1].example1&&s.p(e,a),a&1&&t!==(t=e[0].post.section1.table1+"")&&o.p(t)},d(e){e&&(r(l),r(n),r(i),r(u),r(f)),_&&_.d(e),s&&s.d(e)}}}function F(c){let l,n,i,o,t=c[0].post.title+"",u,f,h;document.title=l=c[0].post.title;let m=S(c[1]),_=[];for(let s=0;s<m.length;s+=1)_[s]=C(j(c,m,s));return{c(){n=x(),i=d("section"),o=d("h1"),u=q(t),f=x(),h=d("div");for(let s=0;s<_.length;s+=1)_[s].c();this.h()},l(s){z("svelte-zg4c03",document.head).forEach(r),n=A(s),i=v(s,"SECTION",{class:!0});var a=b(i);o=v(a,"H1",{class:!0});var g=b(o);u=N(g,t),g.forEach(r),f=A(a),h=v(a,"DIV",{class:!0});var P=b(h);for(let T=0;T<_.length;T+=1)_[T].l(P);P.forEach(r),a.forEach(r),this.h()},h(){w(o,"class","initial__title"),w(h,"class","initial__about"),w(i,"class","initial")},m(s,e){p(s,n,e),p(s,i,e),E(i,o),E(o,u),E(i,f),E(i,h);for(let a=0;a<_.length;a+=1)_[a]&&_[a].m(h,null)},p(s,[e]){if(e&1&&l!==(l=s[0].post.title)&&(document.title=l),e&1&&t!==(t=s[0].post.title+"")&&O(u,t),e&3){m=S(s[1]);let a;for(a=0;a<m.length;a+=1){const g=j(s,m,a);_[a]?_[a].p(g,e):(_[a]=C(g),_[a].c(),_[a].m(h,null))}for(;a<_.length;a+=1)_[a].d(1);_.length=m.length}},i:L,o:L,d(s){s&&(r(n),r(i)),U(_,s)}}}function I(c){return c.replaceAll(" /n ","<br>").replaceAll(" /im ",'<span class="initial__important">').replaceAll(" im/ ","</span>").replaceAll(" /it ","<i>").replaceAll(" it/ ","</i>")}function G(c){let l=c.replaceAll(" /col ",'<div class="initial__about__table__col">').replaceAll(" col/ ","</div>");const n=l.match(/<div class="initial__about__table__col">.*?<\/div>/g);if(n)for(let i=0;i<n.length;i++){const o=n[i],t=o.match(/<div class="initial__about__table__col">(.*?)<\/div>/);if(t){const f=t[1].split(" ").map(h=>`<div class="initial__about__table__cell"><p class="initial__about__table__cell__element">${h.replaceAll("/20"," ").replaceAll("/0","</br>")}</p></div>`).join("");l=l.replace(o,`<div class="initial__about__table__col">${f}</div>`)}}return l}function J(c,l,n){let{data:i}=l;const o=[i.post.section1,i.post.section2];return o.forEach(t=>{t.text1?t.text1=I(t.text1):t.text1="",t.example1=I(t.example1),t.example2=I(t.example2),t.text2=I(t.text2),t.table1=G(t.table1)}),c.$$set=t=>{"data"in t&&n(0,i=t.data)},[i,o]}class R extends V{constructor(l){super(),$(this,l,J,F,D,{data:0})}}export{R as component};