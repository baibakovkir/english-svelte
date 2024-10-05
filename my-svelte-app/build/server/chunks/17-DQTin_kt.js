import { e as error } from './index-CvuFLVuQ.js';
import { p as posts } from './data5-BZ2LvrnZ.js';

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

const index = 17;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-x7-mv8IX.js')).default;
const server_id = "src/routes/video/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/17.Bg1r3Esk.js","_app/immutable/chunks/scheduler.CQWhEZFA.js","_app/immutable/chunks/index.UGgirURG.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=17-DQTin_kt.js.map
