import{s as p,a as f,n as c}from"../chunks/scheduler.Bj67otkU.js";import{S as h,i as _,e as u,c as d,a as m,d as n,n as s,g as w,h as y}from"../chunks/index.CjQoJbwm.js";function v(o){let r,e,i;return{c(){r=u("section"),e=u("iframe"),this.h()},l(t){r=d(t,"SECTION",{class:!0});var a=m(r);e=d(a,"IFRAME",{class:!0,src:!0,title:!0,frameborder:!0,allow:!0,referrerpolicy:!0}),m(e).forEach(n),a.forEach(n),this.h()},h(){s(e,"class","video__iframe"),f(e.src,i="https://www.youtube.com/embed/"+o[0])||s(e,"src",i),s(e,"title","YouTube video player"),s(e,"frameborder","0"),s(e,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),s(e,"referrerpolicy","strict-origin-when-cross-origin"),e.allowFullscreen=!0,s(r,"class","video")},m(t,a){w(t,r,a),y(r,e)},p:c,i:c,o:c,d(t){t&&n(r)}}}function b(o,r,e){var a;let{data:i}=r;const t=(a=i.post.link)==null?void 0:a.split("v=")[1];return o.$$set=l=>{"data"in l&&e(1,i=l.data)},[t,i]}class S extends h{constructor(r){super(),_(this,r,b,v,p,{data:1})}}export{S as component};