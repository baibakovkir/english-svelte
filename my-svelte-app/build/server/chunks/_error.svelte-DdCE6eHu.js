import { c as create_ssr_component, d as subscribe, e as escape } from './ssr-DuKu5otS.js';
import { p as page } from './stores-CDdI0SH0.js';
import './exports-DuWZopOC.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}: ${escape($page.error.message)}</h1>`;
});

export { Error as default };
//# sourceMappingURL=_error.svelte-DdCE6eHu.js.map
