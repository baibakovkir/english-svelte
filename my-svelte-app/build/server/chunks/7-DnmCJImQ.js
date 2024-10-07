import { p as posts } from './data-DaYeONLC.js';

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

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-I19ikbpV.js')).default;
const server_id = "src/routes/audio/+page.server.ts";
const imports = ["_app/immutable/nodes/7.De8pkiTy.js","_app/immutable/chunks/scheduler.CQWhEZFA.js","_app/immutable/chunks/index.UGgirURG.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/Sidebar.DtDIa9oY.js","_app/immutable/chunks/CardBackgroundShine.BAYa1Adf.js"];
const stylesheets = ["_app/immutable/assets/Sidebar.BwwmB-20.css","_app/immutable/assets/CardBackgroundShine.mGqW47RZ.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=7-DnmCJImQ.js.map
