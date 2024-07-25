import { c as create_ssr_component, e as escape, f as each } from './ssr-DuKu5otS.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section class="english-course"><h1 class="english-course__title">${escape(data.post.title)}</h1> <div class="english-course__container"><div class="english-course__menu english-course__menu_left"><h2 class="english-course__subtitle" data-svelte-h="svelte-1xnpva9">Необходимые знания:</h2> <div class="english-course__list-box"><ul class="english-course__list">${each(data.post.content, ({ name, slug }) => {
    return `<a class="english-course__link" href="${"/grammar/" + escape(slug, true)}"><li class="english-course__item">${escape(name)}</li></a>`;
  })}</ul></div></div> <div class="english-course__menu english-course__menu_right"><p class="english-course__text" data-svelte-h="svelte-3d4g5r">Выберите нужную тему. В каждой теме есть теория и практические задания. Также в темах будут задания на грамматику, аудирование, работа с текстом и видео.</p> ${data.post.description ? `<p class="english-course__text">${escape(data.post.description)}</p>` : ``}</div></div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CqUKRSEP.js.map
