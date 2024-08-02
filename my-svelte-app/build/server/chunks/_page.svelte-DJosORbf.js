import { c as create_ssr_component, e as escape, f as each } from './ssr-DuKu5otS.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return ` <section class="menu"><h1 class="menu__title">${escape(data.post.title)}</h1> <div class="menu__box"><p class="menu__text" data-svelte-h="svelte-cg8ayi">Выберите нужную тему. В каждой теме есть теория и практические задания. Также в темах будут задания на грамматику, аудирование, работа с текстом и видео.</p> ${data.post.description ? `<p class="menu__text">${escape(data.post.description)}</p>` : ``} <ul class="menu__menu">${each(data.post.content, ({ name, slug }) => {
    return `<a class="menu__menu__item__link" href="${"/grammar/" + escape(slug, true)}"><div class="menu__menu__item"><li class="menu__menu__item__text">${escape(name)}</li> </div></a>`;
  })}</ul></div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DJosORbf.js.map
