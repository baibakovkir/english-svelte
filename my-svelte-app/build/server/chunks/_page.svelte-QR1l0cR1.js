import { c as create_ssr_component, v as validate_component, f as each, e as escape } from './ssr-C8JQ9GCh.js';
import { S as Sidebar } from './Sidebar-CiCre4p0.js';
import { C as CardBackgroundShine } from './CardBackgroundShine-CesqTelk.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {
    default: () => {
      return `<ul>${each(data.summaries, ({ slug, title }) => {
        return `<li><a href="${"/grammar/" + escape(slug, true)}">${escape(title)}</a></li>`;
      })}</ul>`;
    }
  })} <section class="menu"><h1 class="menu__title" data-svelte-h="svelte-r36tbp">Грамматика</h1> <div class="menu__box"><ul class="menu__menu">${each(data.summaries, ({ title, slug }) => {
    return `<a class="menu__menu__item__link" href="${"/grammar/" + escape(slug, true)}">${validate_component(CardBackgroundShine, "Card").$$render($$result, { title, description: slug }, {}, {})} </a>`;
  })}</ul></div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-QR1l0cR1.js.map
