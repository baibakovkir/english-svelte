import{s as S,n as P,r as $}from"../chunks/scheduler.Bj67otkU.js";import{S as A,i as N,e as p,s as C,c as u,m as E,f as w,a as U,d as x,n as l,g as k,h as r,D as L,A as D,E as O}from"../chunks/index.CjQoJbwm.js";const q=""+new URL("../assets/english.D7iilFEJ.avif",import.meta.url).href,B=""+new URL("../assets/spanishFlag.D-DtBLbF.avif",import.meta.url).href,V=""+new URL("../assets/programming.BMgVvb45.avif",import.meta.url).href,z=""+new URL("../assets/circles.C14K0Pd1.svg",import.meta.url).href;function J(m){let n,h=`<img class="initial__img" src="${z}" alt="Круги"/> <h1 class="initial__title">База знаний</h1> <p class="initial__text">База знаний - это платформа для изучения всего на свете!</p> <p class="initial__text">На данный момент доступны курсы:</p> <div class="initial__grid"><div class="initial__box"><a href="/english" class="initial__link"><img src="${q}" alt="Английский" class="initial__box__img"/> <p class="initial__box__text initial__box__text_yellow">Английский язык</p></a></div> <div class="initial__box"><a href="/development" class="initial__link"><img src="${B}" alt="Испанский" class="initial__box__img"/> <p class="initial__box__text initial__box__text_yellow">Испанский язык</p></a></div> <div class="initial__box"><a href="/development" class="initial__link"><img src="${V}" alt="Программирование" class="initial__box__img"/> <p class="initial__box__text initial__box__text_yellow">Программирование</p></a></div></div>`,_,e,c,y="Связаться с разработчиками",g,t,s,b,o,T,f,I='<button class="spheres__button" type="submit">Отправить</button>',M,d,H="Нравится проект? Расскажите о нас!",R,F;return{c(){n=p("section"),n.innerHTML=h,_=C(),e=p("section"),c=p("h2"),c.textContent=y,g=C(),t=p("form"),s=p("input"),b=C(),o=p("textarea"),T=C(),f=p("div"),f.innerHTML=I,M=C(),d=p("p"),d.textContent=H,this.h()},l(i){n=u(i,"SECTION",{class:!0,"data-svelte-h":!0}),E(n)!=="svelte-ze15wm"&&(n.innerHTML=h),_=w(i),e=u(i,"SECTION",{class:!0});var a=U(e);c=u(a,"H2",{class:!0,"data-svelte-h":!0}),E(c)!=="svelte-1q0tgex"&&(c.textContent=y),g=w(a),t=u(a,"FORM",{class:!0});var v=U(t);s=u(v,"INPUT",{class:!0,type:!0,placeholder:!0}),b=w(v),o=u(v,"TEXTAREA",{class:!0,rows:!0,placeholder:!0}),U(o).forEach(x),T=w(v),f=u(v,"DIV",{class:!0,"data-svelte-h":!0}),E(f)!=="svelte-4omfis"&&(f.innerHTML=I),v.forEach(x),M=w(a),d=u(a,"P",{class:!0,"data-svelte-h":!0}),E(d)!=="svelte-8uxwne"&&(d.textContent=H),a.forEach(x),this.h()},h(){l(n,"class","initial"),l(c,"class","spheres__text"),l(s,"class","spheres__input spheres__input_name"),l(s,"type","text"),l(s,"placeholder","Ваше имя"),l(o,"class","spheres__input spheres__input_message"),l(o,"rows","5"),l(o,"placeholder","Ваше сообщение"),l(f,"class","spheres__button__wrapper"),l(t,"class","spheres__form"),l(d,"class","spheres__text"),l(e,"class","spheres")},m(i,a){k(i,n,a),k(i,_,a),k(i,e,a),r(e,c),r(e,g),r(e,t),r(t,s),L(s,m[0]),r(t,b),r(t,o),L(o,m[1]),r(t,T),r(t,f),r(e,M),r(e,d),R||(F=[D(s,"input",m[3]),D(o,"input",m[4]),D(t,"submit",O(m[2]))],R=!0)},p(i,[a]){a&1&&s.value!==i[0]&&L(s,i[0]),a&2&&L(o,i[1])},i:P,o:P,d(i){i&&(x(n),x(_),x(e)),R=!1,$(F)}}}function K(m,n,h){let _="",e="";function c(t){t.preventDefault();const s={name:_,message:e},b=`https://mail.google.com/mail/?view=cm&fs=1&to=baibakovkir@yandex.ru&su=${encodeURIComponent(s.name)}&body=${encodeURIComponent(s.message)}`;window.open(b,"_blank"),h(0,_=""),h(1,e="")}function y(){_=this.value,h(0,_)}function g(){e=this.value,h(1,e)}return[_,e,c,y,g]}class G extends A{constructor(n){super(),N(this,n,K,J,S,{})}}export{G as component};
