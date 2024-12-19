import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape, f as each, h as null_to_empty } from './ssr-C8JQ9GCh.js';
import { T as TextHeaderShine } from './TextHeaderShine-YCFIZ_L9.js';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const englishColor = "/_app/immutable/assets/english.D7iilFEJ.avif";
const spanishColor = "/_app/immutable/assets/spanishFlag.D-DtBLbF.avif";
const codingColor = "/_app/immutable/assets/programming.BMgVvb45.avif";
const logo = "/_app/immutable/assets/logo.Bae0AbxC.svg";
const snow = "/_app/immutable/assets/snow.DjwcLed2.png";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Meteors = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { number = 10 } = $$props;
  let meteorStyles = [];
  if ($$props.number === void 0 && $$bindings.number && number !== void 0) $$bindings.number(number);
  return `${each(meteorStyles, (style, idx) => {
    return `<span id="${"meteor-" + escape(idx + 1, true)}"${add_attribute("class", cn("pointer-events-none absolute left-1/2 top-1/2 size-[2.4px] rotate-[215deg] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"), 0)} style="${"top: " + escape(style.top, true) + "px; left: " + escape(style.left, true) + "; animation-delay: " + escape(style.animationDelay, true) + "; animation-duration: " + escape(style.animationDuration, true) + ";"}"><svg xmlns="http://www.w3.org/2000/svg" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" width="5" height="5" viewBox="0 0 32 32"><path fill="#A8B0BC" d="M21.415 12H28v-2h-4.585L28 5.415L26.586 4L22 8.587V4h-2v6.587L18.587 12H17V8h-2v4h-1.587L12 10.587V4h-2v4.587L5.414 4L4 5.415L8.585 10H4v2h6.585L12 13.415V15H8v2h4v1.587L10.587 20H4v2h4.587L4 26.586l1.414 1.415L10 23.415V28h2v-6.585L13.415 20H15v4h2v-4h1.585L20 21.415V28h2v-4.585l4.585 4.586L28 26.586L23.413 22H28v-2h-6.587L20 18.587V17h4v-2h-4v-1.585ZM18 18h-4v-4h4Z"></path></svg>  <div class="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-indigo-800 via-blue-600/30 to-transparent"></div> </span>`;
  })}`;
});
const css = {
  code: ".size-full.svelte-977r95{width:100%;height:100%}",
  map: '{"version":3,"file":"Particles.svelte","sources":["Particles.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nexport let className = \\"\\";\\nexport let quantity = 100;\\nexport let staticity = 50;\\nexport let ease = 50;\\nexport let size = 2.4;\\nexport let refresh = true;\\nexport let color = \\"#A8B0BC\\";\\nexport let vx = 0;\\nexport let vy = 0;\\nlet canvasRef;\\nlet canvasContainerRef;\\nlet context = null;\\nlet circles = [];\\nlet mouse = { x: 0, y: 0 };\\nlet canvasSize = { w: 0, h: 0 };\\nconst dpr = typeof window !== \\"undefined\\" ? window.devicePixelRatio : 1;\\nfunction hexToRgb(hex) {\\n  hex = hex.replace(\\"#\\", \\"\\");\\n  if (hex.length === 3) {\\n    hex = hex.split(\\"\\").map((char) => char + char).join(\\"\\");\\n  }\\n  const hexInt = parseInt(hex, 16);\\n  const red = hexInt >> 16 & 255;\\n  const green = hexInt >> 8 & 255;\\n  const blue = hexInt & 255;\\n  return [red, green, blue];\\n}\\nconst rgb = hexToRgb(color);\\nfunction circleParams() {\\n  const x = Math.floor(Math.random() * canvasSize.w);\\n  const y = Math.floor(Math.random() * canvasSize.h);\\n  const translateX = 0;\\n  const translateY = 0;\\n  const pSize = Math.floor(Math.random() * 2) + size;\\n  const alpha = 0;\\n  const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));\\n  const dx = (Math.random() - 0.5) * 0.1;\\n  const dy = (Math.random() - 0.5) * 0.1;\\n  const magnetism = 0.1 + Math.random() * 4;\\n  return {\\n    x,\\n    y,\\n    translateX,\\n    translateY,\\n    size: pSize,\\n    alpha,\\n    targetAlpha,\\n    dx,\\n    dy,\\n    magnetism\\n  };\\n}\\nfunction resizeCanvas() {\\n  if (canvasContainerRef && canvasRef && context) {\\n    circles.length = 0;\\n    canvasSize.w = canvasContainerRef.offsetWidth;\\n    canvasSize.h = canvasContainerRef.offsetHeight;\\n    canvasRef.width = canvasSize.w * dpr;\\n    canvasRef.height = canvasSize.h * dpr;\\n    canvasRef.style.width = `${canvasSize.w}px`;\\n    canvasRef.style.height = `${canvasSize.h}px`;\\n    context.scale(dpr, dpr);\\n  }\\n}\\nfunction clearContext() {\\n  if (context) {\\n    context.clearRect(0, 0, canvasSize.w, canvasSize.h);\\n  }\\n}\\nfunction drawCircle(circle, update = false) {\\n  if (context) {\\n    const { x, y, translateX, translateY, size: size2, alpha } = circle;\\n    context.translate(translateX, translateY);\\n    context.beginPath();\\n    context.arc(x, y, size2, 0, 2 * Math.PI);\\n    context.fillStyle = `rgba(${rgb.join(\\", \\")}, ${alpha})`;\\n    context.fill();\\n    context.setTransform(dpr, 0, 0, dpr, 0, 0);\\n    if (!update) {\\n      circles.push(circle);\\n    }\\n  }\\n}\\nfunction drawParticles() {\\n  clearContext();\\n  for (let i = 0; i < quantity; i++) {\\n    const circle = circleParams();\\n    drawCircle(circle);\\n  }\\n}\\nfunction remapValue(value, start1, end1, start2, end2) {\\n  let remapped = (value - start1) * (end2 - start2) / (end1 - start1) + start2;\\n  return remapped > 0 ? remapped : 0;\\n}\\nfunction animate() {\\n  clearContext();\\n  circles.forEach((circle, i) => {\\n    const edge = [\\n      circle.x + circle.translateX - circle.size,\\n      canvasSize.w - circle.x - circle.translateX - circle.size,\\n      circle.y + circle.translateY - circle.size,\\n      canvasSize.h - circle.y - circle.translateY - circle.size\\n    ];\\n    const closestEdge = edge.reduce((a, b) => Math.min(a, b));\\n    const remapClosestEdge = parseFloat(\\n      remapValue(closestEdge, 0, 20, 0, 1).toFixed(2)\\n    );\\n    if (remapClosestEdge > 1) {\\n      circle.alpha += 0.02;\\n      if (circle.alpha > circle.targetAlpha) {\\n        circle.alpha = circle.targetAlpha;\\n      }\\n    } else {\\n      circle.alpha = circle.targetAlpha * remapClosestEdge;\\n    }\\n    circle.x += circle.dx + vx;\\n    circle.y += circle.dy + vy;\\n    circle.translateX += (mouse.x / (staticity / circle.magnetism) - circle.translateX) / ease;\\n    circle.translateY += (mouse.y / (staticity / circle.magnetism) - circle.translateY) / ease;\\n    drawCircle(circle, true);\\n    if (circle.x < -circle.size || circle.x > canvasSize.w + circle.size || circle.y < -circle.size || circle.y > canvasSize.h + circle.size) {\\n      circles.splice(i, 1);\\n      const newCircle = circleParams();\\n      drawCircle(newCircle);\\n    }\\n  });\\n  window.requestAnimationFrame(animate);\\n}\\nfunction onMouseMove(event) {\\n  if (canvasRef) {\\n    let rect = canvasRef.getBoundingClientRect();\\n    let { w, h } = canvasSize;\\n    let x = event.clientX - rect.left - w / 2;\\n    let y = event.clientY - rect.top - h / 2;\\n    let inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;\\n    if (inside) {\\n      mouse.x = x;\\n      mouse.y = y;\\n    }\\n  }\\n}\\nonMount(() => {\\n  if (canvasRef) {\\n    context = canvasRef.getContext(\\"2d\\");\\n    resizeCanvas();\\n    animate();\\n    window.addEventListener(\\"resize\\", resizeCanvas);\\n    window.addEventListener(\\"mousemove\\", onMouseMove);\\n  }\\n  return () => {\\n    window.removeEventListener(\\"resize\\", resizeCanvas);\\n    window.removeEventListener(\\"mousemove\\", onMouseMove);\\n  };\\n});\\n$: {\\n  if (canvasRef) {\\n    drawParticles();\\n  }\\n}\\n<\/script>\\r\\n\\r\\n<div class={className} bind:this={canvasContainerRef} aria-hidden=\\"true\\">\\r\\n  <canvas bind:this={canvasRef} class=\\"size-full\\"></canvas>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  .size-full {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAuKE,wBAAW,CACT,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACV"}'
};
function hexToRgb(hex) {
  hex = hex.replace("#", "");
  if (hex.length === 3) {
    hex = hex.split("").map((char) => char + char).join("");
  }
  const hexInt = parseInt(hex, 16);
  const red = hexInt >> 16 & 255;
  const green = hexInt >> 8 & 255;
  const blue = hexInt & 255;
  return [red, green, blue];
}
const Particles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  let { quantity = 100 } = $$props;
  let { staticity = 50 } = $$props;
  let { ease = 50 } = $$props;
  let { size = 2.4 } = $$props;
  let { refresh = true } = $$props;
  let { color = "#A8B0BC" } = $$props;
  let { vx = 0 } = $$props;
  let { vy = 0 } = $$props;
  let canvasRef;
  let canvasContainerRef;
  hexToRgb(color);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.quantity === void 0 && $$bindings.quantity && quantity !== void 0) $$bindings.quantity(quantity);
  if ($$props.staticity === void 0 && $$bindings.staticity && staticity !== void 0) $$bindings.staticity(staticity);
  if ($$props.ease === void 0 && $$bindings.ease && ease !== void 0) $$bindings.ease(ease);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.refresh === void 0 && $$bindings.refresh && refresh !== void 0) $$bindings.refresh(refresh);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.vx === void 0 && $$bindings.vx && vx !== void 0) $$bindings.vx(vx);
  if ($$props.vy === void 0 && $$bindings.vy && vy !== void 0) $$bindings.vy(vy);
  $$result.css.add(css);
  return `<div class="${escape(null_to_empty(className), true) + " svelte-977r95"}" aria-hidden="true"${add_attribute("this", canvasContainerRef, 0)}><canvas class="size-full svelte-977r95"${add_attribute("this", canvasRef, 0)}></canvas> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name = "";
  return `<section class="initial"><div class="relative flex flex-col w-full max-w-lg items-center justify-center overflow-hidden">${validate_component(Meteors, "Meteors").$$render($$result, { number: 30 }, {}, {})} ${validate_component(Particles, "Particles").$$render(
    $$result,
    {
      className: "absolute inset-0",
      refresh: true
    },
    {},
    {}
  )} <img class="initial__img"${add_attribute("src", logo, 0)} alt="baibakovkir"> <img class="initial__snow"${add_attribute("src", snow, 0)} alt="Снег"></div> ${validate_component(TextHeaderShine, "TextTitle").$$render($$result, { title: "База знаний" }, {}, {})} <p class="initial__text" data-svelte-h="svelte-1jungnk">База знаний - это платформа для изучения всего на свете!</p> <p class="initial__text" data-svelte-h="svelte-1kezy9p">На данный момент доступны курсы:</p> <div class="initial__grid" data-svelte-h="svelte-13eqzk"><div class="initial__box"><a href="/english" class="initial__link"><img${add_attribute("src", englishColor, 0)} alt="Английский" class="initial__box__img"> <p class="initial__box__text initial__box__text_yellow">Английский язык</p></a></div> <div class="initial__box"><a href="/development" class="initial__link"><img${add_attribute("src", spanishColor, 0)} alt="Испанский" class="initial__box__img"> <p class="initial__box__text initial__box__text_yellow">Испанский язык</p></a></div> <div class="initial__box"><a href="/development" class="initial__link"><img${add_attribute("src", codingColor, 0)} alt="Программирование" class="initial__box__img"> <p class="initial__box__text initial__box__text_yellow">Программирование</p></a></div></div></section> <section class="spheres"><h2 class="spheres__text" data-svelte-h="svelte-1q0tgex">Связаться с разработчиками</h2> <form class="spheres__form"><input class="spheres__input spheres__input_name" type="text" placeholder="Ваше имя"${add_attribute("value", name, 0)}> <textarea class="spheres__input spheres__input_message" rows="5" placeholder="Ваше сообщение">${escape("")}</textarea> <div class="spheres__button__wrapper" data-svelte-h="svelte-4omfis"><button class="spheres__button" type="submit">Отправить</button></div></form> <p class="spheres__text" data-svelte-h="svelte-8uxwne">Нравится проект? Расскажите о нас!</p></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CImDOF-m.js.map
