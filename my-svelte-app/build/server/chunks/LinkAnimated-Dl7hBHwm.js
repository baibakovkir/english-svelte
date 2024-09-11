import { c as create_ssr_component, b as add_attribute, e as escape } from './ssr-15CCXxDF.js';

const LinkAnimated = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { link } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0) $$bindings.link(link);
  return `<a${add_attribute("href", link, 0)}><div class="absolute top-40 right-5 after:absolute after:bg-neutral-400 after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"><span class="text-neutral-700">${escape(name)}</span></div></a>`;
});

export { LinkAnimated as L };
//# sourceMappingURL=LinkAnimated-Dl7hBHwm.js.map
