import{s as b,a as g,n as y}from"../chunks/scheduler.CQWhEZFA.js";import{S as E,i as x,e as f,t as I,s as S,c as m,a as _,b as k,d as u,f as q,n as r,g as C,h as p,j as F}from"../chunks/index.UGgirURG.js";function T(d){let e,s,a,o=d[0].post.title+"",l,n,t,h;return{c(){e=f("section"),s=f("div"),a=f("h1"),l=I(o),n=S(),t=f("iframe"),this.h()},l(c){e=m(c,"SECTION",{class:!0});var i=_(e);s=m(i,"DIV",{class:!0});var v=_(s);a=m(v,"H1",{class:!0});var w=_(a);l=k(w,o),w.forEach(u),v.forEach(u),n=q(i),t=m(i,"IFRAME",{class:!0,src:!0,title:!0,frameborder:!0,allow:!0,referrerpolicy:!0}),_(t).forEach(u),i.forEach(u),this.h()},h(){r(a,"class","initial__title"),r(s,"class","initial__top"),r(t,"class","video__iframe"),g(t.src,h="https://www.youtube.com/embed/"+d[1])||r(t,"src",h),r(t,"title","YouTube video player"),r(t,"frameborder","0"),r(t,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),r(t,"referrerpolicy","strict-origin-when-cross-origin"),t.allowFullscreen=!0,r(e,"class","video")},m(c,i){C(c,e,i),p(e,s),p(s,a),p(a,l),p(e,n),p(e,t)},p(c,[i]){i&1&&o!==(o=c[0].post.title+"")&&F(l,o)},i:y,o:y,d(c){c&&u(e)}}}function j(d,e,s){var l;let{data:a}=e;const o=(l=a.post.link)==null?void 0:l.split("v=")[1];return d.$$set=n=>{"data"in n&&s(0,a=n.data)},[a,o]}class H extends E{constructor(e){super(),x(this,e,j,T,b,{data:0})}}export{H as component};
