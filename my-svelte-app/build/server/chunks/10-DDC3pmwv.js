import { p as posts } from './data2-DcJdKgKp.js';

function load() {
  return {
    summaries: posts.map((post) => ({
      slug: post.slug,
      title: post.title,
      img: post.img
    }))
  };
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-hNo4gPmC.js')).default;
const server_id = "src/routes/english/+page.server.ts";
const imports = ["_app/immutable/nodes/10.Cf08rAW_.js","_app/immutable/chunks/scheduler.CQWhEZFA.js","_app/immutable/chunks/index.BXTP0M7K.js","_app/immutable/chunks/each.D6YF6ztN.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=10-DDC3pmwv.js.map
