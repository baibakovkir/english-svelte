import { c as create_ssr_component, e as escape, b as add_attribute } from './ssr-15CCXxDF.js';

const arrowRight = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%206L8%202L10%202L16%208L10%2014L8%2014L8%2010L-1.74845e-07%2010L-3.01991e-07%206L8%206Z'%20fill='%23000000'/%3e%3c/svg%3e";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const videoLink = data.post.link?.split("v=")[1];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<section class="video"><div class="initial__top"><h1 class="initial__title initial__title_right">${escape(data.post.title)}</h1> <div class="initial__top-link" data-svelte-h="svelte-1vc93bg"><a href="/english/oge" class="initial__task-link">Перейти к курсу<img class="initial__link__arrow"${add_attribute("src", arrowRight, 0)} alt="arrow"></a></div></div> <iframe class="video__iframe" src="${"https://www.youtube.com/embed/" + escape(videoLink, true)}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DGVca5Zr.js.map
