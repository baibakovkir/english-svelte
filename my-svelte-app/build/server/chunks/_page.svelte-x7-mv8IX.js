import { c as create_ssr_component, e as escape } from './ssr-15CCXxDF.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const videoLink = data.post.link?.split("v=")[1];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<section class="video"><div class="initial__top"><h1 class="initial__title">${escape(data.post.title)}</h1></div> <iframe class="video__iframe" src="${"https://www.youtube.com/embed/" + escape(videoLink, true)}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-x7-mv8IX.js.map
