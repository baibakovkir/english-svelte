import { c as create_ssr_component, b as add_attribute, v as validate_component, e as escape } from './ssr-15CCXxDF.js';

const logo = "/_app/immutable/assets/logo.BMPIq1g5.png";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return `<footer><p>© ${escape(year)} baibakovkir dev</p></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="header"><nav class="header__nav nav_burger"><a class="header__link" href="/" data-svelte-h="svelte-19fb6b9"><img class="header__logo"${add_attribute("src", logo, 0)} alt="ENG" width="30px" height="30px"></a> <ul class="header__menu"><li class="header__menu__item"><a class="header__link" href="/grammar" data-svelte-h="svelte-vua7z4">Грамматика</a></li> <li class="header__menu__item"><a class="header__link" href="/text" data-svelte-h="svelte-1imd1uk">Тексты</a></li> <li class="header__menu__item"><a class="header__link" href="/audio" data-svelte-h="svelte-187sjiv">Аудио</a></li> <li class="header__menu__item"><a class="header__link" href="/video" data-svelte-h="svelte-1pg7cac">Видео</a></li> <button type="button" class="header__button header__button__close"></button></ul> <button type="button" class="header__button header__button__burger"></button></nav></header> <main class="main">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-BNkZJUNu.js.map
