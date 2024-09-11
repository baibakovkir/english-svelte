import { c as create_ssr_component, d as subscribe, e as escape } from './ssr-15CCXxDF.js';
import { p as page } from './stores-ci_8qx4_.js';
import './exports-BGi7-Rnc.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}: ${escape($page.error.message)}</h1>`;
});

export { Error as default };
//# sourceMappingURL=_error.svelte-DaSZ_X5k.js.map
