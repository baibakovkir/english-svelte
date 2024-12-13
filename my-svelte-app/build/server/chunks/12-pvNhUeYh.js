import { p as posts } from './data3-B7MjO50E.js';

function load() {
  return {
    summaries: posts.map((post) => ({
      slug: post.slug,
      title: post.title
    }))
  };
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DYOzZnhd.js')).default;
const server_id = "src/routes/grammar/+page.server.ts";
const imports = ["_app/immutable/nodes/12.BhArw62z.js","_app/immutable/chunks/scheduler.CQWhEZFA.js","_app/immutable/chunks/index.BXTP0M7K.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/Sidebar.DaJVvVGC.js","_app/immutable/chunks/CardBackgroundShine.DA1Ourj-.js"];
const stylesheets = ["_app/immutable/assets/Sidebar.BwwmB-20.css","_app/immutable/assets/CardBackgroundShine.mGqW47RZ.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=12-pvNhUeYh.js.map
