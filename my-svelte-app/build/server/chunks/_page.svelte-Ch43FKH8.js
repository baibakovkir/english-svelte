import { c as create_ssr_component, v as validate_component, f as each, e as escape } from './ssr-DuKu5otS.js';
import { S as Sidebar } from './Sidebar-B3d7tTZK.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {
    default: () => {
      return `<ul>${each(data.summaries, ({ slug, title }) => {
        return `<li><a href="${"/audio/" + escape(slug, true)}">${escape(title)}</a></li>`;
      })}</ul>`;
    }
  })} <section class="grammar"><h1 data-svelte-h="svelte-59fza3">Аудирование</h1> <div class="initial__box"><p class="initial__text" data-svelte-h="svelte-ptlhnn">Приветствуем вас на этой странице, где мы объясним вам преимущества разделения изучения грамматики на модули. Этот подход поможет вам лучше понять грамматику, ускорить процесс обучения и добиться успеха в изучении языка.</p> <p class="initial__text" data-svelte-h="svelte-y6p7nw">Модули - это структурированные блоки информации, которые содержат основные аспекты грамматики языка. Каждый модуль посвящен определенной теме, такой как глаголы, прилагательные, местоимения и т. д. Разделение грамматики на модули делает обучение более организованным и доступным для понимания.</p> <ul class="grammar__menu">${each(data.summaries, ({ slug, title }) => {
    return `<li><a href="${"/audio/" + escape(slug, true)}">${escape(title)}</a></li>`;
  })}</ul></div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Ch43FKH8.js.map
