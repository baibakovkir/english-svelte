import { p as posts } from './data-DUIxdMk3.js';

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
const component = async () => component_cache ??= (await import('./_page.svelte-Ch43FKH8.js')).default;
const server_id = "src/routes/audio/+page.server.ts";
const imports = ["_app/immutable/nodes/7.Bjjzv1oL.js","_app/immutable/chunks/scheduler.Bj67otkU.js","_app/immutable/chunks/index.U5MeZLZm.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/Sidebar.BuvnA0Qw.js"];
const stylesheets = ["_app/immutable/assets/Sidebar.BwwmB-20.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=7-mtO90WFi.js.map
