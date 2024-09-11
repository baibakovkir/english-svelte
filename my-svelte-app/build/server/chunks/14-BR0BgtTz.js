import { p as posts } from './data4-BpddG6lu.js';

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

const index = 14;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DrhF_J74.js')).default;
const server_id = "src/routes/text/+page.server.ts";
const imports = ["_app/immutable/nodes/14.BOUp7HKy.js","_app/immutable/chunks/scheduler.CQWhEZFA.js","_app/immutable/chunks/index.WnMLyVnY.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/Sidebar.ClT8jRWv.js"];
const stylesheets = ["_app/immutable/assets/Sidebar.BwwmB-20.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=14-BR0BgtTz.js.map
