import { e as error } from './index-CvuFLVuQ.js';
import { p as posts } from './data4-T3ho0lnJ.js';

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

const index = 15;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DuQ9lfAi.js')).default;
const server_id = "src/routes/text/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/15.NibcMSSG.js","_app/immutable/chunks/scheduler.CBUumMkb.js","_app/immutable/chunks/index.DTQdrM-u.js","_app/immutable/chunks/LinkAnimated.C7vyY0Aj.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=15-CFwlj4kp.js.map
