import { c as create_ssr_component, d as subscribe, e as escape } from './ssr-C8JQ9GCh.js';
import { p as page } from './stores-BZXeBPPJ.js';
import './exports-BGi7-Rnc.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}</h1> <p>${escape($page.error?.message)}</p>`;
});

export { Error as default };
//# sourceMappingURL=error.svelte-tS7Xm1Sc.js.map
