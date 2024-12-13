import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape, f as each } from './ssr-15CCXxDF.js';
import { T as TextHeaderShine } from './TextHeaderShine-Dz41x75R.js';
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
    return `<span id="${"meteor-" + escape(idx + 1, true)}"${add_attribute("class", cn("pointer-events-none absolute left-1/2 top-1/2 size-[2.4px] rotate-[215deg] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"), 0)} style="${"top: " + escape(style.top, true) + "px; left: " + escape(style.left, true) + "; animation-delay: " + escape(style.animationDelay, true) + "; animation-duration: " + escape(style.animationDuration, true) + ";"}"><svg xmlns="http://www.w3.org/2000/svg" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" width="5" height="5" viewBox="0 0 32 32"><path fill="#A8B0BC" d="M21.415 12H28v-2h-4.585L28 5.415L26.586 4L22 8.587V4h-2v6.587L18.587 12H17V8h-2v4h-1.587L12 10.587V4h-2v4.587L5.414 4L4 5.415L8.585 10H4v2h6.585L12 13.415V15H8v2h4v1.587L10.587 20H4v2h4.587L4 26.586l1.414 1.415L10 23.415V28h2v-6.585L13.415 20H15v4h2v-4h1.585L20 21.415V28h2v-4.585l4.585 4.586L28 26.586L23.413 22H28v-2h-6.587L20 18.587V17h4v-2h-4v-1.585ZM18 18h-4v-4h4Z"></path></svg>  <div class="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 via-blue-600/30 to-transparent"></div> </span>`;
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name = "";
  return `<section class="initial"><div class="relative flex flex-col w-full max-w-lg items-center justify-center overflow-hidden">${validate_component(Meteors, "Meteors").$$render($$result, { number: 30 }, {}, {})} <img class="initial__img"${add_attribute("src", logo, 0)} alt="baibakovkir"> <img class="initial__snow"${add_attribute("src", snow, 0)} alt="Снег"></div> ${validate_component(TextHeaderShine, "TextTitle").$$render($$result, { title: "База знаний" }, {}, {})} <p class="initial__text" data-svelte-h="svelte-1jungnk">База знаний - это платформа для изучения всего на свете!</p> <p class="initial__text" data-svelte-h="svelte-1kezy9p">На данный момент доступны курсы:</p> <div class="initial__grid" data-svelte-h="svelte-13eqzk"><div class="initial__box"><a href="/english" class="initial__link"><img${add_attribute("src", englishColor, 0)} alt="Английский" class="initial__box__img"> <p class="initial__box__text initial__box__text_yellow">Английский язык</p></a></div> <div class="initial__box"><a href="/development" class="initial__link"><img${add_attribute("src", spanishColor, 0)} alt="Испанский" class="initial__box__img"> <p class="initial__box__text initial__box__text_yellow">Испанский язык</p></a></div> <div class="initial__box"><a href="/development" class="initial__link"><img${add_attribute("src", codingColor, 0)} alt="Программирование" class="initial__box__img"> <p class="initial__box__text initial__box__text_yellow">Программирование</p></a></div></div></section> <section class="spheres"><h2 class="spheres__text" data-svelte-h="svelte-1q0tgex">Связаться с разработчиками</h2> <form class="spheres__form"><input class="spheres__input spheres__input_name" type="text" placeholder="Ваше имя"${add_attribute("value", name, 0)}> <textarea class="spheres__input spheres__input_message" rows="5" placeholder="Ваше сообщение">${escape("")}</textarea> <div class="spheres__button__wrapper" data-svelte-h="svelte-4omfis"><button class="spheres__button" type="submit">Отправить</button></div></form> <p class="spheres__text" data-svelte-h="svelte-8uxwne">Нравится проект? Расскажите о нас!</p></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BmNc-jtR.js.map
