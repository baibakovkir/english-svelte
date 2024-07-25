import { c as create_ssr_component, b as add_attribute } from './ssr-DuKu5otS.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const pdfUrl = `https://abc-profmed.ru/g/s3/lp/lpc.v4/file/TestPDF.pdf`;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section class="text"><embed${add_attribute("src", pdfUrl, 0)} type="application/pdf" class="text__pdf" allowfullscreen></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-OYJSpeBU.js.map
