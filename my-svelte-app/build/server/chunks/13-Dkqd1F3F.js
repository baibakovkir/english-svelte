import { e as error } from './index-CvuFLVuQ.js';
import { p as posts } from './data3-x2cnbJ4J.js';

async function load({ params }) {
  const postSlug = params.slug;
  const post = posts.find((post2) => post2.slug === postSlug);
  if (!post) {
    throw error(404, "Not found");
  }
  return { post };
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 13;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-da5Y22ab.js')).default;
const server_id = "src/routes/grammar/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/13.DoDS1IwV.js","_app/immutable/chunks/scheduler.Bj67otkU.js","_app/immutable/chunks/index.CjQoJbwm.js","_app/immutable/chunks/each.D6YF6ztN.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=13-Dkqd1F3F.js.map
