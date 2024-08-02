import { c as create_ssr_component, v as validate_component, f as each, e as escape } from './ssr-DuKu5otS.js';
import { S as Sidebar } from './Sidebar-B3d7tTZK.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {
    default: () => {
      return `<ul>${each(data.summaries, ({ slug, title }) => {
        return `<li><a href="${"/video/" + escape(slug, true)}">${escape(title)}</a></li>`;
      })}</ul>`;
    }
  })} <section class="menu"><h1 class="menu__title" data-svelte-h="svelte-g7j87z">Видео</h1> <div class="menu__box"><p class="menu__text" data-svelte-h="svelte-m7ae8">Приветствуем вас на этой странице, где мы объясним вам преимущества разделения изучения грамматики на модули. Этот подход поможет вам лучше понять грамматику, ускорить процесс обучения и добиться успеха в изучении языка.</p> <p class="menu__text" data-svelte-h="svelte-1yvbf09">Модули - это структурированные блоки информации, которые содержат основные аспекты грамматики языка. Каждый модуль посвящен определенной теме, такой как глаголы, прилагательные, местоимения и т. д. Разделение грамматики на модули делает обучение более организованным и доступным для понимания.</p> <ul class="menu__menu">${each(data.summaries, ({ slug, title }) => {
    return `<a class="menu__menu__item__link" href="${"/video/" + escape(slug, true)}"><div class="menu__menu__item"><li class="menu__menu__item__text">${escape(title)}</li> </div></a>`;
  })}</ul></div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DlJleA7e.js.map
