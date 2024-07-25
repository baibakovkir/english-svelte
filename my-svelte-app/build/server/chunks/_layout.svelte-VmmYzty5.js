import { c as create_ssr_component, b as add_attribute, v as validate_component, e as escape } from './ssr-DuKu5otS.js';

const logo = "/_app/immutable/assets/logo.BMPIq1g5.png";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return `<footer><p>© ${escape(year)} baibakovkir dev</p></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="header"><nav class="header__nav nav_burger"><a class="header__link" href="/" data-svelte-h="svelte-19fb6b9"><img class="header__logo"${add_attribute("src", logo, 0)} alt="ENG" width="30px" height="30px"></a> <ul class="header__menu"><li class="header__menu__item" data-svelte-h="svelte-a5350m"><a class="header__link" href="/grammar">Грамматика</a></li> <li class="header__menu__item" data-svelte-h="svelte-95vppy"><a class="header__link" href="/text">Тексты</a></li> <li class="header__menu__item" data-svelte-h="svelte-re3xt"><a class="header__link" href="/audio">Аудио</a></li> <li class="header__menu__item" data-svelte-h="svelte-7uksg6"><a class="header__link" href="/video">Видео</a></li> <li class="header__menu__item" data-svelte-h="svelte-1iwkh66"><a class="header__link" href="/about">О проекте</a></li> <button type="button" class="header__button header__button__close"></button></ul> <button type="button" class="header__button header__button__burger"></button></nav></div> <main class="main">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-VmmYzty5.js.map
