import { p as posts } from './data3-CTzpTKMw.js';
import './index-CvuFLVuQ.js';

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
const component = async () => component_cache ??= (await import('./_page.svelte-CMpXngcS.js')).default;
const server_id = "src/routes/grammar/+page.server.ts";
const imports = ["_app/immutable/nodes/12.CBCAQqEb.js","_app/immutable/chunks/scheduler.Bj67otkU.js","_app/immutable/chunks/index.59xXzVuS.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/Sidebar.Da-4HNgs.js"];
const stylesheets = ["_app/immutable/assets/Sidebar.BwwmB-20.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=12-DFVL1b0P.js.map
