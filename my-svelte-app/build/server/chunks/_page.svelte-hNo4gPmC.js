import { c as create_ssr_component, f as each, e as escape, b as add_attribute } from './ssr-15CCXxDF.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<section class="english"><div class="english__container"><h1 class="english__title" data-svelte-h="svelte-17r44tj">Курсы по английскому языку</h1> <div class="english__grid">${each(data.summaries, ({ slug, title, img }) => {
    return `<div class="english__box"><a href="${"/english/" + escape(slug, true)}" class="english__link"><img${add_attribute("src", img, 0)}${add_attribute("alt", title, 0)} class="english__box__img"> <p class="english__box__text english__box__text_yellow">${escape(title)}</p></a> </div>`;
  })}</div> </div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-hNo4gPmC.js.map
