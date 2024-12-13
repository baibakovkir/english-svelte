import{s as _e,n as ue,o as je,z as Ae,d as Le,a as Se,r as Oe}from"../chunks/scheduler.CBUumMkb.js";import{S as Ce,i as ze,x as Ee,g as se,d as G,v as De,e as R,C as Re,s as U,c as I,a as O,D as Ie,f as q,n as f,y as Q,h as v,k as fe,l as me,m as ne,o as ge,E as de,A as he,F as Xe,p as be,r as xe,u as ve}from"../chunks/index.DTQdrM-u.js";import{T as Ye}from"../chunks/TextHeaderShine.CZr2xy2U.js";import{e as Pe}from"../chunks/each.D6YF6ztN.js";const Ze=""+new URL("../assets/english.D7iilFEJ.avif",import.meta.url).href,Je=""+new URL("../assets/spanishFlag.D-DtBLbF.avif",import.meta.url).href,Ke=""+new URL("../assets/programming.BMgVvb45.avif",import.meta.url).href,Qe=""+new URL("../assets/logo.Bae0AbxC.svg",import.meta.url).href,$e=""+new URL("../assets/snow.DjwcLed2.png",import.meta.url).href;function Be(e){var t,r,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=Be(e[t]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function et(){for(var e,t,r=0,o="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=Be(e))&&(o&&(o+=" "),o+=t);return o}const ke="-",tt=e=>{const t=ot(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:i=>{const l=i.split(ke);return l[0]===""&&l.length!==1&&l.shift(),Fe(l,t)||rt(i)},getConflictingClassGroupIds:(i,l)=>{const c=r[i]||[];return l&&o[i]?[...c,...o[i]]:c}}},Fe=(e,t)=>{var i;if(e.length===0)return t.classGroupId;const r=e[0],o=t.nextPart.get(r),s=o?Fe(e.slice(1),o):void 0;if(s)return s;if(t.validators.length===0)return;const n=e.join(ke);return(i=t.validators.find(({validator:l})=>l(n)))==null?void 0:i.classGroupId},Ge=/^\[(.+)\]$/,rt=e=>{if(Ge.test(e)){const t=Ge.exec(e)[1],r=t==null?void 0:t.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},ot=e=>{const{theme:t,prefix:r}=e,o={nextPart:new Map,validators:[]};return st(Object.entries(e.classGroups),r).forEach(([n,i])=>{we(i,o,n,t)}),o},we=(e,t,r,o)=>{e.forEach(s=>{if(typeof s=="string"){const n=s===""?t:Te(t,s);n.classGroupId=r;return}if(typeof s=="function"){if(nt(s)){we(s(o),t,r,o);return}t.validators.push({validator:s,classGroupId:r});return}Object.entries(s).forEach(([n,i])=>{we(i,Te(t,n),r,o)})})},Te=(e,t)=>{let r=e;return t.split(ke).forEach(o=>{r.nextPart.has(o)||r.nextPart.set(o,{nextPart:new Map,validators:[]}),r=r.nextPart.get(o)}),r},nt=e=>e.isThemeGetter,st=(e,t)=>t?e.map(([r,o])=>{const s=o.map(n=>typeof n=="string"?t+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([i,l])=>[t+i,l])):n);return[r,s]}):e,at=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,o=new Map;const s=(n,i)=>{r.set(n,i),t++,t>e&&(t=0,o=r,r=new Map)};return{get(n){let i=r.get(n);if(i!==void 0)return i;if((i=o.get(n))!==void 0)return s(n,i),i},set(n,i){r.has(n)?r.set(n,i):s(n,i)}}},He="!",lt=e=>{const{separator:t,experimentalParseClassName:r}=e,o=t.length===1,s=t[0],n=t.length,i=l=>{const c=[];let g=0,b=0,L;for(let x=0;x<l.length;x++){let p=l[x];if(g===0){if(p===s&&(o||l.slice(x,x+n)===t)){c.push(l.slice(b,x)),b=x+n;continue}if(p==="/"){L=x;continue}}p==="["?g++:p==="]"&&g--}const m=c.length===0?l:l.substring(b),C=m.startsWith(He),y=C?m.substring(1):m,h=L&&L>b?L-b:void 0;return{modifiers:c,hasImportantModifier:C,baseClassName:y,maybePostfixModifierPosition:h}};return r?l=>r({className:l,parseClassName:i}):i},it=e=>{if(e.length<=1)return e;const t=[];let r=[];return e.forEach(o=>{o[0]==="["?(t.push(...r.sort(),o),r=[]):r.push(o)}),t.push(...r.sort()),t},ct=e=>({cache:at(e.cacheSize),parseClassName:lt(e),...tt(e)}),dt=/\s+/,ut=(e,t)=>{const{parseClassName:r,getClassGroupId:o,getConflictingClassGroupIds:s}=t,n=[],i=e.trim().split(dt);let l="";for(let c=i.length-1;c>=0;c-=1){const g=i[c],{modifiers:b,hasImportantModifier:L,baseClassName:m,maybePostfixModifierPosition:C}=r(g);let y=!!C,h=o(y?m.substring(0,C):m);if(!h){if(!y){l=g+(l.length>0?" "+l:l);continue}if(h=o(m),!h){l=g+(l.length>0?" "+l:l);continue}y=!1}const x=it(b).join(":"),p=L?x+He:x,w=p+h;if(n.includes(w))continue;n.push(w);const D=s(h,y);for(let j=0;j<D.length;++j){const T=D[j];n.push(p+T)}l=g+(l.length>0?" "+l:l)}return l};function pt(){let e=0,t,r,o="";for(;e<arguments.length;)(t=arguments[e++])&&(r=Ue(t))&&(o&&(o+=" "),o+=r);return o}const Ue=e=>{if(typeof e=="string")return e;let t,r="";for(let o=0;o<e.length;o++)e[o]&&(t=Ue(e[o]))&&(r&&(r+=" "),r+=t);return r};function ft(e,...t){let r,o,s,n=i;function i(c){const g=t.reduce((b,L)=>L(b),e());return r=ct(g),o=r.cache.get,s=r.cache.set,n=l,l(c)}function l(c){const g=o(c);if(g)return g;const b=ut(c,r);return s(c,b),b}return function(){return n(pt.apply(null,arguments))}}const _=e=>{const t=r=>r[e]||[];return t.isThemeGetter=!0,t},qe=/^\[(?:([a-z-]+):)?(.+)\]$/i,mt=/^\d+\/\d+$/,gt=new Set(["px","full","screen"]),ht=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,bt=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,xt=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,vt=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,yt=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Z=e=>ae(e)||gt.has(e)||mt.test(e),$=e=>le(e,"length",Lt),ae=e=>!!e&&!Number.isNaN(Number(e)),ye=e=>le(e,"number",ae),ie=e=>!!e&&Number.isInteger(Number(e)),wt=e=>e.endsWith("%")&&ae(e.slice(0,-1)),d=e=>qe.test(e),ee=e=>ht.test(e),_t=new Set(["length","size","percentage"]),Ct=e=>le(e,_t,We),zt=e=>le(e,"position",We),kt=new Set(["image","url"]),Mt=e=>le(e,kt,Et),At=e=>le(e,"",St),ce=()=>!0,le=(e,t,r)=>{const o=qe.exec(e);return o?o[1]?typeof t=="string"?o[1]===t:t.has(o[1]):r(o[2]):!1},Lt=e=>bt.test(e)&&!xt.test(e),We=()=>!1,St=e=>vt.test(e),Et=e=>yt.test(e),Rt=()=>{const e=_("colors"),t=_("spacing"),r=_("blur"),o=_("brightness"),s=_("borderColor"),n=_("borderRadius"),i=_("borderSpacing"),l=_("borderWidth"),c=_("contrast"),g=_("grayscale"),b=_("hueRotate"),L=_("invert"),m=_("gap"),C=_("gradientColorStops"),y=_("gradientColorStopPositions"),h=_("inset"),x=_("margin"),p=_("opacity"),w=_("padding"),D=_("saturate"),j=_("scale"),T=_("sepia"),J=_("skew"),W=_("space"),N=_("translate"),B=()=>["auto","contain","none"],X=()=>["auto","hidden","clip","visible","scroll"],Y=()=>["auto",d,t],u=()=>[d,t],a=()=>["",Z,$],A=()=>["auto",ae,d],z=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],S=()=>["solid","dashed","dotted","double","none"],k=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],E=()=>["start","end","center","between","around","evenly","stretch"],V=()=>["","0",d],F=()=>["auto","avoid","all","avoid-page","page","left","right","column"],H=()=>[ae,d];return{cacheSize:500,separator:":",theme:{colors:[ce],spacing:[Z,$],blur:["none","",ee,d],brightness:H(),borderColor:[e],borderRadius:["none","","full",ee,d],borderSpacing:u(),borderWidth:a(),contrast:H(),grayscale:V(),hueRotate:H(),invert:V(),gap:u(),gradientColorStops:[e],gradientColorStopPositions:[wt,$],inset:Y(),margin:Y(),opacity:H(),padding:u(),saturate:H(),scale:H(),sepia:V(),skew:H(),space:u(),translate:u()},classGroups:{aspect:[{aspect:["auto","square","video",d]}],container:["container"],columns:[{columns:[ee]}],"break-after":[{"break-after":F()}],"break-before":[{"break-before":F()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...z(),d]}],overflow:[{overflow:X()}],"overflow-x":[{"overflow-x":X()}],"overflow-y":[{"overflow-y":X()}],overscroll:[{overscroll:B()}],"overscroll-x":[{"overscroll-x":B()}],"overscroll-y":[{"overscroll-y":B()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[h]}],"inset-x":[{"inset-x":[h]}],"inset-y":[{"inset-y":[h]}],start:[{start:[h]}],end:[{end:[h]}],top:[{top:[h]}],right:[{right:[h]}],bottom:[{bottom:[h]}],left:[{left:[h]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ie,d]}],basis:[{basis:Y()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",d]}],grow:[{grow:V()}],shrink:[{shrink:V()}],order:[{order:["first","last","none",ie,d]}],"grid-cols":[{"grid-cols":[ce]}],"col-start-end":[{col:["auto",{span:["full",ie,d]},d]}],"col-start":[{"col-start":A()}],"col-end":[{"col-end":A()}],"grid-rows":[{"grid-rows":[ce]}],"row-start-end":[{row:["auto",{span:[ie,d]},d]}],"row-start":[{"row-start":A()}],"row-end":[{"row-end":A()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",d]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",d]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal",...E()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...E(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...E(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[x]}],mx:[{mx:[x]}],my:[{my:[x]}],ms:[{ms:[x]}],me:[{me:[x]}],mt:[{mt:[x]}],mr:[{mr:[x]}],mb:[{mb:[x]}],ml:[{ml:[x]}],"space-x":[{"space-x":[W]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[W]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",d,t]}],"min-w":[{"min-w":[d,t,"min","max","fit"]}],"max-w":[{"max-w":[d,t,"none","full","min","max","fit","prose",{screen:[ee]},ee]}],h:[{h:[d,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[d,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[d,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[d,t,"auto","min","max","fit"]}],"font-size":[{text:["base",ee,$]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",ye]}],"font-family":[{font:[ce]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",d]}],"line-clamp":[{"line-clamp":["none",ae,ye]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Z,d]}],"list-image":[{"list-image":["none",d]}],"list-style-type":[{list:["none","disc","decimal",d]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[p]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[p]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...S(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Z,$]}],"underline-offset":[{"underline-offset":["auto",Z,d]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:u()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",d]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",d]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[p]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...z(),zt]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ct]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Mt]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[y]}],"gradient-via-pos":[{via:[y]}],"gradient-to-pos":[{to:[y]}],"gradient-from":[{from:[C]}],"gradient-via":[{via:[C]}],"gradient-to":[{to:[C]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[p]}],"border-style":[{border:[...S(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[p]}],"divide-style":[{divide:S()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...S()]}],"outline-offset":[{"outline-offset":[Z,d]}],"outline-w":[{outline:[Z,$]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:a()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[p]}],"ring-offset-w":[{"ring-offset":[Z,$]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",ee,At]}],"shadow-color":[{shadow:[ce]}],opacity:[{opacity:[p]}],"mix-blend":[{"mix-blend":[...k(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":k()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",ee,d]}],grayscale:[{grayscale:[g]}],"hue-rotate":[{"hue-rotate":[b]}],invert:[{invert:[L]}],saturate:[{saturate:[D]}],sepia:[{sepia:[T]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[g]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[b]}],"backdrop-invert":[{"backdrop-invert":[L]}],"backdrop-opacity":[{"backdrop-opacity":[p]}],"backdrop-saturate":[{"backdrop-saturate":[D]}],"backdrop-sepia":[{"backdrop-sepia":[T]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",d]}],duration:[{duration:H()}],ease:[{ease:["linear","in","out","in-out",d]}],delay:[{delay:H()}],animate:[{animate:["none","spin","ping","pulse","bounce",d]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[j]}],"scale-x":[{"scale-x":[j]}],"scale-y":[{"scale-y":[j]}],rotate:[{rotate:[ie,d]}],"translate-x":[{"translate-x":[N]}],"translate-y":[{"translate-y":[N]}],"skew-x":[{"skew-x":[J]}],"skew-y":[{"skew-y":[J]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",d]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",d]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":u()}],"scroll-mx":[{"scroll-mx":u()}],"scroll-my":[{"scroll-my":u()}],"scroll-ms":[{"scroll-ms":u()}],"scroll-me":[{"scroll-me":u()}],"scroll-mt":[{"scroll-mt":u()}],"scroll-mr":[{"scroll-mr":u()}],"scroll-mb":[{"scroll-mb":u()}],"scroll-ml":[{"scroll-ml":u()}],"scroll-p":[{"scroll-p":u()}],"scroll-px":[{"scroll-px":u()}],"scroll-py":[{"scroll-py":u()}],"scroll-ps":[{"scroll-ps":u()}],"scroll-pe":[{"scroll-pe":u()}],"scroll-pt":[{"scroll-pt":u()}],"scroll-pr":[{"scroll-pr":u()}],"scroll-pb":[{"scroll-pb":u()}],"scroll-pl":[{"scroll-pl":u()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",d]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Z,$,ye]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},It=ft(Rt);function Pt(...e){return It(et(e))}function Ne(e,t,r){const o=e.slice();return o[3]=t[r],o[5]=r,o}function Ve(e){let t,r,o,s,n,i;return{c(){t=R("span"),r=Re("svg"),o=Re("path"),s=U(),n=R("div"),i=U(),this.h()},l(l){t=I(l,"SPAN",{id:!0,class:!0,style:!0});var c=O(t);r=Ie(c,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0});var g=O(r);o=Ie(g,"path",{fill:!0,d:!0}),O(o).forEach(G),g.forEach(G),s=q(c),n=I(c,"DIV",{class:!0}),O(n).forEach(G),i=q(c),c.forEach(G),this.h()},h(){f(o,"fill","#A8B0BC"),f(o,"d","M21.415 12H28v-2h-4.585L28 5.415L26.586 4L22 8.587V4h-2v6.587L18.587 12H17V8h-2v4h-1.587L12 10.587V4h-2v4.587L5.414 4L4 5.415L8.585 10H4v2h6.585L12 13.415V15H8v2h4v1.587L10.587 20H4v2h4.587L4 26.586l1.414 1.415L10 23.415V28h2v-6.585L13.415 20H15v4h2v-4h1.585L20 21.415V28h2v-4.585l4.585 4.586L28 26.586L23.413 22H28v-2h-6.587L20 18.587V17h4v-2h-4v-1.585ZM18 18h-4v-4h4Z"),f(r,"xmlns","http://www.w3.org/2000/svg"),f(r,"class","absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"),f(r,"width","5"),f(r,"height","5"),f(r,"viewBox","0 0 32 32"),f(n,"class","pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 via-blue-600/30 to-transparent"),f(t,"id","meteor-"+(e[5]+1)),f(t,"class",Pt("pointer-events-none absolute left-1/2 top-1/2 size-[2.4px] rotate-[215deg] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]")),Q(t,"top",e[3].top+"px"),Q(t,"left",e[3].left),Q(t,"animation-delay",e[3].animationDelay),Q(t,"animation-duration",e[3].animationDuration)},m(l,c){se(l,t,c),v(t,r),v(r,o),v(t,s),v(t,n),v(t,i)},p(l,c){c&1&&Q(t,"top",l[3].top+"px"),c&1&&Q(t,"left",l[3].left),c&1&&Q(t,"animation-delay",l[3].animationDelay),c&1&&Q(t,"animation-duration",l[3].animationDuration)},d(l){l&&G(t)}}}function Gt(e){let t,r=Pe(e[0]),o=[];for(let s=0;s<r.length;s+=1)o[s]=Ve(Ne(e,r,s));return{c(){for(let s=0;s<o.length;s+=1)o[s].c();t=Ee()},l(s){for(let n=0;n<o.length;n+=1)o[n].l(s);t=Ee()},m(s,n){for(let i=0;i<o.length;i+=1)o[i]&&o[i].m(s,n);se(s,t,n)},p(s,[n]){if(n&1){r=Pe(s[0]);let i;for(i=0;i<r.length;i+=1){const l=Ne(s,r,i);o[i]?o[i].p(l,n):(o[i]=Ve(l),o[i].c(),o[i].m(t.parentNode,t))}for(;i<o.length;i+=1)o[i].d(1);o.length=r.length}},i:ue,o:ue,d(s){s&&G(t),De(o,s)}}}function Tt(e,t,r){let{number:o=10}=t,s=[],n=i=>{r(0,s=[]);const l=[...new Array(i)].map(()=>({top:-20,left:Math.floor(Math.random()*700)+"px",animationDelay:Math.random()*1+.2+"s",animationDuration:Math.floor(Math.random()*8+2.9)+"s"}));r(0,s=l)};return je(()=>{n(o)}),e.$$set=i=>{"number"in i&&r(1,o=i.number)},[s,o]}class Nt extends Ce{constructor(t){super(),ze(this,t,Tt,Gt,_e,{number:1})}}function Vt(e){let t,r,o;return{c(){t=R("div"),r=R("canvas"),this.h()},l(s){t=I(s,"DIV",{class:!0,"aria-hidden":!0});var n=O(t);r=I(n,"CANVAS",{class:!0}),O(r).forEach(G),n.forEach(G),this.h()},h(){f(r,"class","size-full svelte-977r95"),f(t,"class",o=Ae(e[0])+" svelte-977r95"),f(t,"aria-hidden","true")},m(s,n){se(s,t,n),v(t,r),e[11](r),e[12](t)},p(s,[n]){n&1&&o!==(o=Ae(s[0])+" svelte-977r95")&&f(t,"class",o)},i:ue,o:ue,d(s){s&&G(t),e[11](null),e[12](null)}}}function jt(e){e=e.replace("#",""),e.length===3&&(e=e.split("").map(n=>n+n).join(""));const t=parseInt(e,16),r=t>>16&255,o=t>>8&255,s=t&255;return[r,o,s]}function Bt(e,t,r,o,s){let n=(e-t)*(s-o)/(r-t)+o;return n>0?n:0}function Ft(e,t,r){let{className:o=""}=t,{quantity:s=100}=t,{staticity:n=50}=t,{ease:i=50}=t,{size:l=2.4}=t,{refresh:c=!0}=t,{color:g="#A8B0BC"}=t,{vx:b=0}=t,{vy:L=0}=t,m,C,y=null,h=[],x={x:0,y:0},p={w:0,h:0};const w=typeof window<"u"?window.devicePixelRatio:1,D=jt(g);function j(){const a=Math.floor(Math.random()*p.w),A=Math.floor(Math.random()*p.h),z=0,S=0,k=Math.floor(Math.random()*2)+l,E=0,V=parseFloat((Math.random()*.6+.1).toFixed(1)),F=(Math.random()-.5)*.1,H=(Math.random()-.5)*.1,te=.1+Math.random()*4;return{x:a,y:A,translateX:z,translateY:S,size:k,alpha:E,targetAlpha:V,dx:F,dy:H,magnetism:te}}function T(){C&&m&&y&&(h.length=0,p.w=C.offsetWidth,p.h=C.offsetHeight,r(1,m.width=p.w*w,m),r(1,m.height=p.h*w,m),r(1,m.style.width=`${p.w}px`,m),r(1,m.style.height=`${p.h}px`,m),y.scale(w,w))}function J(){y&&y.clearRect(0,0,p.w,p.h)}function W(a,A=!1){if(y){const{x:z,y:S,translateX:k,translateY:E,size:V,alpha:F}=a;y.translate(k,E),y.beginPath(),y.arc(z,S,V,0,2*Math.PI),y.fillStyle=`rgba(${D.join(", ")}, ${F})`,y.fill(),y.setTransform(w,0,0,w,0,0),A||h.push(a)}}function N(){J();for(let a=0;a<s;a++){const A=j();W(A)}}function B(){J(),h.forEach((a,A)=>{const S=[a.x+a.translateX-a.size,p.w-a.x-a.translateX-a.size,a.y+a.translateY-a.size,p.h-a.y-a.translateY-a.size].reduce((E,V)=>Math.min(E,V)),k=parseFloat(Bt(S,0,20,0,1).toFixed(2));if(k>1?(a.alpha+=.02,a.alpha>a.targetAlpha&&(a.alpha=a.targetAlpha)):a.alpha=a.targetAlpha*k,a.x+=a.dx+b,a.y+=a.dy+L,a.translateX+=(x.x/(n/a.magnetism)-a.translateX)/i,a.translateY+=(x.y/(n/a.magnetism)-a.translateY)/i,W(a,!0),a.x<-a.size||a.x>p.w+a.size||a.y<-a.size||a.y>p.h+a.size){h.splice(A,1);const E=j();W(E)}}),window.requestAnimationFrame(B)}function X(a){if(m){let A=m.getBoundingClientRect(),{w:z,h:S}=p,k=a.clientX-A.left-z/2,E=a.clientY-A.top-S/2;k<z/2&&k>-z/2&&E<S/2&&E>-S/2&&(x.x=k,x.y=E)}}je(()=>(m&&(y=m.getContext("2d"),T(),B(),window.addEventListener("resize",T),window.addEventListener("mousemove",X)),()=>{window.removeEventListener("resize",T),window.removeEventListener("mousemove",X)}));function Y(a){Le[a?"unshift":"push"](()=>{m=a,r(1,m)})}function u(a){Le[a?"unshift":"push"](()=>{C=a,r(2,C)})}return e.$$set=a=>{"className"in a&&r(0,o=a.className),"quantity"in a&&r(3,s=a.quantity),"staticity"in a&&r(4,n=a.staticity),"ease"in a&&r(5,i=a.ease),"size"in a&&r(6,l=a.size),"refresh"in a&&r(7,c=a.refresh),"color"in a&&r(8,g=a.color),"vx"in a&&r(9,b=a.vx),"vy"in a&&r(10,L=a.vy)},e.$$.update=()=>{e.$$.dirty&2&&m&&N()},[o,m,C,s,n,i,l,c,g,b,L,Y,u]}class Ht extends Ce{constructor(t){super(),ze(this,t,Ft,Vt,_e,{className:0,quantity:3,staticity:4,ease:5,size:6,refresh:7,color:8,vx:9,vy:10})}}function Ut(e){let t,r,o,s,n,i,l,c,g,b,L,m,C,y,h,x="База знаний - это платформа для изучения всего на свете!",p,w,D="На данный момент доступны курсы:",j,T,J=`<div class="initial__box"><a href="/english" class="initial__link"><img src="${Ze}" alt="Английский" class="initial__box__img"/> <p class="initial__box__text initial__box__text_yellow">Английский язык</p></a></div> <div class="initial__box"><a href="/development" class="initial__link"><img src="${Je}" alt="Испанский" class="initial__box__img"/> <p class="initial__box__text initial__box__text_yellow">Испанский язык</p></a></div> <div class="initial__box"><a href="/development" class="initial__link"><img src="${Ke}" alt="Программирование" class="initial__box__img"/> <p class="initial__box__text initial__box__text_yellow">Программирование</p></a></div>`,W,N,B,X="Связаться с разработчиками",Y,u,a,A,z,S,k,E='<button class="spheres__button" type="submit">Отправить</button>',V,F,H="Нравится проект? Расскажите о нас!",te,pe,Me;return o=new Nt({props:{number:30}}),n=new Ht({props:{className:"absolute inset-0",refresh:!0}}),C=new Ye({props:{title:"База знаний"}}),{c(){t=R("section"),r=R("div"),fe(o.$$.fragment),s=U(),fe(n.$$.fragment),i=U(),l=R("img"),g=U(),b=R("img"),m=U(),fe(C.$$.fragment),y=U(),h=R("p"),h.textContent=x,p=U(),w=R("p"),w.textContent=D,j=U(),T=R("div"),T.innerHTML=J,W=U(),N=R("section"),B=R("h2"),B.textContent=X,Y=U(),u=R("form"),a=R("input"),A=U(),z=R("textarea"),S=U(),k=R("div"),k.innerHTML=E,V=U(),F=R("p"),F.textContent=H,this.h()},l(M){t=I(M,"SECTION",{class:!0});var P=O(t);r=I(P,"DIV",{class:!0});var K=O(r);me(o.$$.fragment,K),s=q(K),me(n.$$.fragment,K),i=q(K),l=I(K,"IMG",{class:!0,src:!0,alt:!0}),g=q(K),b=I(K,"IMG",{class:!0,src:!0,alt:!0}),K.forEach(G),m=q(P),me(C.$$.fragment,P),y=q(P),h=I(P,"P",{class:!0,"data-svelte-h":!0}),ne(h)!=="svelte-1jungnk"&&(h.textContent=x),p=q(P),w=I(P,"P",{class:!0,"data-svelte-h":!0}),ne(w)!=="svelte-1kezy9p"&&(w.textContent=D),j=q(P),T=I(P,"DIV",{class:!0,"data-svelte-h":!0}),ne(T)!=="svelte-13eqzk"&&(T.innerHTML=J),P.forEach(G),W=q(M),N=I(M,"SECTION",{class:!0});var re=O(N);B=I(re,"H2",{class:!0,"data-svelte-h":!0}),ne(B)!=="svelte-1q0tgex"&&(B.textContent=X),Y=q(re),u=I(re,"FORM",{class:!0});var oe=O(u);a=I(oe,"INPUT",{class:!0,type:!0,placeholder:!0}),A=q(oe),z=I(oe,"TEXTAREA",{class:!0,rows:!0,placeholder:!0}),O(z).forEach(G),S=q(oe),k=I(oe,"DIV",{class:!0,"data-svelte-h":!0}),ne(k)!=="svelte-4omfis"&&(k.innerHTML=E),oe.forEach(G),V=q(re),F=I(re,"P",{class:!0,"data-svelte-h":!0}),ne(F)!=="svelte-8uxwne"&&(F.textContent=H),re.forEach(G),this.h()},h(){f(l,"class","initial__img"),Se(l.src,c=Qe)||f(l,"src",c),f(l,"alt","baibakovkir"),f(b,"class","initial__snow"),Se(b.src,L=$e)||f(b,"src",L),f(b,"alt","Снег"),f(r,"class","relative flex flex-col w-full max-w-lg items-center justify-center overflow-hidden"),f(h,"class","initial__text"),f(w,"class","initial__text"),f(T,"class","initial__grid"),f(t,"class","initial"),f(B,"class","spheres__text"),f(a,"class","spheres__input spheres__input_name"),f(a,"type","text"),f(a,"placeholder","Ваше имя"),f(z,"class","spheres__input spheres__input_message"),f(z,"rows","5"),f(z,"placeholder","Ваше сообщение"),f(k,"class","spheres__button__wrapper"),f(u,"class","spheres__form"),f(F,"class","spheres__text"),f(N,"class","spheres")},m(M,P){se(M,t,P),v(t,r),ge(o,r,null),v(r,s),ge(n,r,null),v(r,i),v(r,l),v(r,g),v(r,b),v(t,m),ge(C,t,null),v(t,y),v(t,h),v(t,p),v(t,w),v(t,j),v(t,T),se(M,W,P),se(M,N,P),v(N,B),v(N,Y),v(N,u),v(u,a),de(a,e[0]),v(u,A),v(u,z),de(z,e[1]),v(u,S),v(u,k),v(N,V),v(N,F),te=!0,pe||(Me=[he(a,"input",e[3]),he(z,"input",e[4]),he(u,"submit",Xe(e[2]))],pe=!0)},p(M,[P]){P&1&&a.value!==M[0]&&de(a,M[0]),P&2&&de(z,M[1])},i(M){te||(be(o.$$.fragment,M),be(n.$$.fragment,M),be(C.$$.fragment,M),te=!0)},o(M){xe(o.$$.fragment,M),xe(n.$$.fragment,M),xe(C.$$.fragment,M),te=!1},d(M){M&&(G(t),G(W),G(N)),ve(o),ve(n),ve(C),pe=!1,Oe(Me)}}}function qt(e,t,r){let o="",s="";function n(c){c.preventDefault();const g={name:o,message:s},b=`https://mail.google.com/mail/?view=cm&fs=1&to=baibakovkir@yandex.ru&su=${encodeURIComponent(g.name)}&body=${encodeURIComponent(g.message)}`;window.open(b,"_blank"),r(0,o=""),r(1,s="")}function i(){o=this.value,r(0,o)}function l(){s=this.value,r(1,s)}return[o,s,n,i,l]}class Yt extends Ce{constructor(t){super(),ze(this,t,qt,Ut,_e,{})}}export{Yt as component};
