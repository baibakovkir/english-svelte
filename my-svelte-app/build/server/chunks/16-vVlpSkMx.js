import { p as posts } from './data5-DA3z2vZq.js';

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

const index = 16;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Br4KQyOG.js')).default;
const server_id = "src/routes/video/+page.server.ts";
const imports = ["_app/immutable/nodes/16.BwiHU8yt.js","_app/immutable/chunks/scheduler.CQWhEZFA.js","_app/immutable/chunks/index.WnMLyVnY.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/Sidebar.ClT8jRWv.js"];
const stylesheets = ["_app/immutable/assets/Sidebar.BwwmB-20.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=16-vVlpSkMx.js.map
