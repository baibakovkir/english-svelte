import{s as m,a as p,n as c}from"../chunks/scheduler.Bj67otkU.js";import{S as f,i as h,e as l,c as u,a as d,d as n,n as s,g as _,h as w}from"../chunks/index.U5MeZLZm.js";function y(o){let r,e,i;return{c(){r=l("section"),e=l("iframe"),this.h()},l(t){r=u(t,"SECTION",{class:!0});var a=d(r);e=u(a,"IFRAME",{class:!0,src:!0,title:!0,frameborder:!0,allow:!0,referrerpolicy:!0}),d(e).forEach(n),a.forEach(n),this.h()},h(){s(e,"class","video__iframe"),p(e.src,i="https://www.youtube.com/embed/"+o[0])||s(e,"src",i),s(e,"title","YouTube video player"),s(e,"frameborder","0"),s(e,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),s(e,"referrerpolicy","strict-origin-when-cross-origin"),e.allowFullscreen=!0,s(r,"class","video")},m(t,a){_(t,r,a),w(r,e)},p:c,i:c,o:c,d(t){t&&n(r)}}}function v(o,r,e){let{data:i}=r;const t=i.post.link.split("v=")[1];return o.$$set=a=>{"data"in a&&e(1,i=a.data)},[t,i]}class E extends f{constructor(r){super(),h(this,r,v,y,m,{data:1})}}export{E as component};