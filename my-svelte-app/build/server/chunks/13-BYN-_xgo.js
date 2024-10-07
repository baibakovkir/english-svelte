import { e as error } from './index-CvuFLVuQ.js';
import { p as posts } from './data3-B7MjO50E.js';

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
const component = async () => component_cache ??= (await import('./_page.svelte-Dhjqbx1o.js')).default;
const server_id = "src/routes/grammar/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/13.DoY3hEh5.js","_app/immutable/chunks/scheduler.CQWhEZFA.js","_app/immutable/chunks/index.UGgirURG.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/LinkAnimated.Ds9hYhPy.js","_app/immutable/chunks/TextHeaderShine.CyUoSynK.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=13-BYN-_xgo.js.map
