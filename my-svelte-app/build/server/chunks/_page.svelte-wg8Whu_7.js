import { c as create_ssr_component, e as escape, b as add_attribute } from './ssr-DuKu5otS.js';
import { a as arrowRight } from './arrow-right-CJI_SI3n.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const pdfUrl = `https://abc-profmed.ru/g/s3/lp/lpc.v4/file/TestPDF.pdf`;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section class="text"><div class="initial__top"><h1 class="initial__title initial__title_right">${escape(data.post.title)}</h1> <div class="initial__top-link"><a href="${"/audio/" + escape(data.post.slug, true)}" class="initial__task-link">Перейти к аудио<img class="initial__link__arrow"${add_attribute("src", arrowRight, 0)} alt="arrow"></a></div></div> <embed${add_attribute("src", pdfUrl, 0)} type="application/pdf" class="text__pdf" allowfullscreen></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-wg8Whu_7.js.map
