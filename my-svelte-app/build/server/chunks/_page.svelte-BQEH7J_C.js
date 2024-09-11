import { c as create_ssr_component, e as escape, f as each, v as validate_component } from './ssr-15CCXxDF.js';

const css = {
  code: ".shine-on-hover.svelte-15ajnpg:hover{animation:shine 2s linear infinite}",
  map: '{"version":3,"file":"CardBackgroundShine.svelte","sources":["CardBackgroundShine.svelte"],"sourcesContent":["<script>\\r\\n  export let title;\\r\\n  export let description;\\r\\n<\/script>\\r\\n\\r\\n<style>\\r\\n  .shine-on-hover:hover {\\r\\n    animation: shine 2s linear infinite; /* Apply the shine animation on hover */\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div\\r\\n  class=\\"shine-on-hover inline-flex max-w-[350px] w-full h-[150px] items-center justify-center rounded-xl text-sm border border-black/10 bg-[linear-gradient(110deg,#ccc5b9ff,45%,#1e2631,55%,#ccc5b9ff)] bg-[length:200%_100%] px-4 py-5 transition-colors\\"\\r\\n>\\r\\n  <div class=\\"flex flex-col gap-2\\">\\r\\n    <h3 class=\\"text-xl font-semibold text-neutral-700 text-center\\">{title}</h3>\\r\\n    <p class=\\"text-sm leading-[1.5] text-neutral-900 text-center\\">\\r\\n      {description}\\r\\n    </p>\\r\\n  </div>\\r\\n</div>"],"names":[],"mappings":"AAME,8BAAe,MAAO,CACpB,SAAS,CAAE,KAAK,CAAC,EAAE,CAAC,MAAM,CAAC,QAC7B"}'
};
const CardBackgroundShine = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  $$result.css.add(css);
  return `<div class="shine-on-hover inline-flex max-w-[350px] w-full h-[150px] items-center justify-center rounded-xl text-sm border border-black/10 bg-[linear-gradient(110deg,#ccc5b9ff,45%,#1e2631,55%,#ccc5b9ff)] bg-[length:200%_100%] px-4 py-5 transition-colors svelte-15ajnpg"><div class="flex flex-col gap-2"><h3 class="text-xl font-semibold text-neutral-700 text-center">${escape(title)}</h3> <p class="text-sm leading-[1.5] text-neutral-900 text-center">${escape(description)}</p></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<section class="menu"><h1 class="menu__title">${escape(data.post.title)}</h1> <div class="menu__box"><p class="menu__text" data-svelte-h="svelte-cg8ayi">Выберите нужную тему. В каждой теме есть теория и практические задания. Также в темах будут задания на грамматику, аудирование, работа с текстом и видео.</p> ${data.post.description ? `<p class="menu__text">${escape(data.post.description)}</p>` : ``} <ul class="menu__menu">${each(data.post.content, ({ name, slug }) => {
    return `<a class="menu__menu__item__link" href="${"/grammar/" + escape(slug, true)}">${validate_component(CardBackgroundShine, "Card").$$render($$result, { title: name, description: slug }, {}, {})} </a>`;
  })}</ul></div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BQEH7J_C.js.map
