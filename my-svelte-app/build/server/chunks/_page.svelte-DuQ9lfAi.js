import { c as create_ssr_component, b as add_attribute, v as validate_component } from './ssr-C8JQ9GCh.js';
import { L as LinkAnimated } from './LinkAnimated-Bkzoc70j.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<section class="text"><embed${add_attribute("src", data.post.pdf, 0)} type="application/pdf" class="text__pdf" allowfullscreen> ${validate_component(LinkAnimated, "LinkAnimated").$$render(
    $$result,
    {
      name: "Вернуться назад",
      link: "javascript:history.back()"
    },
    {},
    {}
  )}</section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DuQ9lfAi.js.map
