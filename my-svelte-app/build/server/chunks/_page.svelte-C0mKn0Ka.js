import { c as create_ssr_component, b as add_attribute, v as validate_component, e as escape } from './ssr-15CCXxDF.js';
import { T as TextHeaderShine } from './TextHeaderShine-Dz41x75R.js';

const englishColor = "/_app/immutable/assets/english.D7iilFEJ.avif";
const spanishColor = "/_app/immutable/assets/spanishFlag.D-DtBLbF.avif";
const codingColor = "/_app/immutable/assets/programming.BMgVvb45.avif";
const circles = "/_app/immutable/assets/circles.C14K0Pd1.svg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name = "";
  return `<section class="initial"><img class="initial__img"${add_attribute("src", circles, 0)} alt="Круги"> ${validate_component(TextHeaderShine, "TextTitle").$$render($$result, { title: "База знаний" }, {}, {})} <p class="initial__text" data-svelte-h="svelte-1jungnk">База знаний - это платформа для изучения всего на свете!</p> <p class="initial__text" data-svelte-h="svelte-1kezy9p">На данный момент доступны курсы:</p> <div class="initial__grid" data-svelte-h="svelte-13eqzk"><div class="initial__box"><a href="/english" class="initial__link"><img${add_attribute("src", englishColor, 0)} alt="Английский" class="initial__box__img"> <p class="initial__box__text initial__box__text_yellow">Английский язык</p></a></div> <div class="initial__box"><a href="/development" class="initial__link"><img${add_attribute("src", spanishColor, 0)} alt="Испанский" class="initial__box__img"> <p class="initial__box__text initial__box__text_yellow">Испанский язык</p></a></div> <div class="initial__box"><a href="/development" class="initial__link"><img${add_attribute("src", codingColor, 0)} alt="Программирование" class="initial__box__img"> <p class="initial__box__text initial__box__text_yellow">Программирование</p></a></div></div></section> <section class="spheres"><h2 class="spheres__text" data-svelte-h="svelte-1q0tgex">Связаться с разработчиками</h2> <form class="spheres__form"><input class="spheres__input spheres__input_name" type="text" placeholder="Ваше имя"${add_attribute("value", name, 0)}> <textarea class="spheres__input spheres__input_message" rows="5" placeholder="Ваше сообщение">${escape("")}</textarea> <div class="spheres__button__wrapper" data-svelte-h="svelte-4omfis"><button class="spheres__button" type="submit">Отправить</button></div></form> <p class="spheres__text" data-svelte-h="svelte-8uxwne">Нравится проект? Расскажите о нас!</p></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-C0mKn0Ka.js.map
