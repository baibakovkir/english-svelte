import { p as posts } from './data5-BMdMLxH2.js';

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
const component = async () => component_cache ??= (await import('./_page.svelte-OJf9HVpi.js')).default;
const server_id = "src/routes/video/+page.server.ts";
const imports = ["_app/immutable/nodes/16.CjGUGsn5.js","_app/immutable/chunks/scheduler.Bj67otkU.js","_app/immutable/chunks/index.U5MeZLZm.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/Sidebar.BuvnA0Qw.js"];
const stylesheets = ["_app/immutable/assets/Sidebar.BwwmB-20.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=16-C-gjVkO4.js.map
