import{s as h,a as p}from"../chunks/scheduler.CQWhEZFA.js";import{S as g,i as $,e as u,k,s as y,c as f,a as E,l as b,f as q,d,n as o,g as v,o as w,h as _,p as S,q as x,r as C}from"../chunks/index.WnMLyVnY.js";import{L}from"../chunks/LinkAnimated.CrnA6RKY.js";function A(i){let e,s,r,t,c,l;return s=new L({props:{link:"/audio/"+i[0].post.slug,name:"Далее"}}),{c(){e=u("section"),k(s.$$.fragment),r=y(),t=u("embed"),this.h()},l(a){e=f(a,"SECTION",{class:!0});var n=E(e);b(s.$$.fragment,n),r=q(n),t=f(n,"EMBED",{src:!0,type:!0,class:!0,allowfullscreen:!0}),n.forEach(d),this.h()},h(){p(t.src,c=i[0].post.pdf)||o(t,"src",c),o(t,"type","application/pdf"),o(t,"class","text__pdf"),o(t,"allowfullscreen",""),o(e,"class","text")},m(a,n){v(a,e,n),w(s,e,null),_(e,r),_(e,t),l=!0},p(a,[n]){const m={};n&1&&(m.link="/audio/"+a[0].post.slug),s.$set(m),(!l||n&1&&!p(t.src,c=a[0].post.pdf))&&o(t,"src",c)},i(a){l||(S(s.$$.fragment,a),l=!0)},o(a){x(s.$$.fragment,a),l=!1},d(a){a&&d(e),C(s)}}}function B(i,e,s){let{data:r}=e;return i.$$set=t=>{"data"in t&&s(0,r=t.data)},[r]}class N extends g{constructor(e){super(),$(this,e,B,A,h,{data:0})}}export{N as component};
