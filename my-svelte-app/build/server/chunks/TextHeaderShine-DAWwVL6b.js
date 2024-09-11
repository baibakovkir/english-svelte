import { c as create_ssr_component, e as escape } from './ssr-15CCXxDF.js';

const TextHeaderShine = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  return `<h1 class="text-3xl font-medium inline-flex animate-shine bg-[linear-gradient(110deg,#939393,45%,#1e2631,55%,#939393)] bg-[length:200%_100%] text-transparent bg-clip-text">${escape(title)}</h1>`;
});

export { TextHeaderShine as T };
//# sourceMappingURL=TextHeaderShine-DAWwVL6b.js.map
