import { c as create_ssr_component, e as escape } from './ssr-DuKu5otS.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section class="initial"><h1 class="initial__title">${escape(data.post.title)}</h1> <div class="initial__about"><div class="initial__box"><!-- HTML_TAG_START -->${data.post.content}<!-- HTML_TAG_END --></div></div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-B8k8wprN.js.map
