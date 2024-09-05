import { e as error } from './index-CvuFLVuQ.js';
import { p as posts } from './data-CUyU3WX3.js';

async function load({ params }) {
  const postSlug = params.slug;
  const post = posts.find((post2) => post2.slug === postSlug);
  if (!post) {
    throw error(404, "Not found");
  }
  const link = post.link;
  return { post, link };
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Bl36rVk7.js')).default;
const server_id = "src/routes/audio/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/8.CNcuJ_Sf.js","_app/immutable/chunks/scheduler.Bj67otkU.js","_app/immutable/chunks/index.CjQoJbwm.js","_app/immutable/chunks/arrow-right.Due544SG.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8--zoxK0L6.js.map
