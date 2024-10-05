import { c as create_ssr_component, e as escape } from './ssr-15CCXxDF.js';

const css = {
  code: ".shine-on-hover.svelte-15ajnpg:hover{animation:shine 2s linear infinite}",
  map: '{"version":3,"file":"CardBackgroundShine.svelte","sources":["CardBackgroundShine.svelte"],"sourcesContent":["<script>\\r\\n  export let title;\\r\\n  export let description;\\r\\n<\/script>\\r\\n\\r\\n<style>\\r\\n  .shine-on-hover:hover {\\r\\n    animation: shine 2s linear infinite; /* Apply the shine animation on hover */\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div\\r\\n  class=\\"shine-on-hover inline-flex max-w-[350px] w-full h-[150px] items-center justify-center rounded-xl text-sm border border-black/10 bg-[linear-gradient(110deg,#e0e6eb,45%,#f8f8f8,55%,#e0e6eb)] bg-[length:200%_100%] px-4 py-5 transition-colors\\"\\r\\n>\\r\\n  <div class=\\"flex flex-col gap-2\\">\\r\\n    <h3 class=\\"text-xl font-semibold text-neutral-700 text-center\\">{title}</h3>\\r\\n    <p class=\\"text-sm leading-[1.5] text-neutral-900 text-center\\">\\r\\n      {description}\\r\\n    </p>\\r\\n  </div>\\r\\n</div>"],"names":[],"mappings":"AAME,8BAAe,MAAO,CACpB,SAAS,CAAE,KAAK,CAAC,EAAE,CAAC,MAAM,CAAC,QAC7B"}'
};
const CardBackgroundShine = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  $$result.css.add(css);
  return `<div class="shine-on-hover inline-flex max-w-[350px] w-full h-[150px] items-center justify-center rounded-xl text-sm border border-black/10 bg-[linear-gradient(110deg,#e0e6eb,45%,#f8f8f8,55%,#e0e6eb)] bg-[length:200%_100%] px-4 py-5 transition-colors svelte-15ajnpg"><div class="flex flex-col gap-2"><h3 class="text-xl font-semibold text-neutral-700 text-center">${escape(title)}</h3> <p class="text-sm leading-[1.5] text-neutral-900 text-center">${escape(description)}</p></div></div>`;
});

export { CardBackgroundShine as C };
//# sourceMappingURL=CardBackgroundShine-CoXgSVmK.js.map
