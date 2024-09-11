import { c as create_ssr_component, v as validate_component, b as add_attribute } from './ssr-15CCXxDF.js';
import { L as LinkAnimated } from './LinkAnimated-Dl7hBHwm.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<section class="text">${validate_component(LinkAnimated, "LinkAnimated").$$render(
    $$result,
    {
      link: "/audio/" + data.post.slug,
      name: "Далее"
    },
    {},
    {}
  )} <embed${add_attribute("src", data.post.pdf, 0)} type="application/pdf" class="text__pdf" allowfullscreen></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-UCrKHMjg.js.map
