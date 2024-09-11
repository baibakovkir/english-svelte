const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png",".mp3":"audio/mpeg",".jpg":"image/jpeg",".avif":"image/avif",".pdf":"application/pdf"},
	_: {
		client: {"start":"_app/immutable/entry/start.B0ZAKC6O.js","app":"_app/immutable/entry/app.DGlFteW9.js","imports":["_app/immutable/entry/start.B0ZAKC6O.js","_app/immutable/chunks/entry.BizMaWXL.js","_app/immutable/chunks/scheduler.CQWhEZFA.js","_app/immutable/entry/app.DGlFteW9.js","_app/immutable/chunks/scheduler.CQWhEZFA.js","_app/immutable/chunks/index.WnMLyVnY.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-BQiWJZKY.js')),
			__memo(() => import('./chunks/1-DbSZ4zXN.js')),
			__memo(() => import('./chunks/2-gaotvNcb.js')),
			__memo(() => import('./chunks/3-CkTFDnEI.js')),
			__memo(() => import('./chunks/4-D9uxT8vs.js')),
			__memo(() => import('./chunks/5-0pEzadpN.js')),
			__memo(() => import('./chunks/6-BK3sFypv.js')),
			__memo(() => import('./chunks/7-CROBOcaq.js')),
			__memo(() => import('./chunks/8-BVFDfhaB.js')),
			__memo(() => import('./chunks/9-nYaQ4CZt.js')),
			__memo(() => import('./chunks/10-ZObiMbbW.js')),
			__memo(() => import('./chunks/11-Bvpf2Dd0.js')),
			__memo(() => import('./chunks/12-OxAKAc7H.js')),
			__memo(() => import('./chunks/13-C8WzEsCO.js')),
			__memo(() => import('./chunks/14-BR0BgtTz.js')),
			__memo(() => import('./chunks/15-Dclz5pWJ.js')),
			__memo(() => import('./chunks/16-vVlpSkMx.js')),
			__memo(() => import('./chunks/17-DyQQTixJ.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/audio",
				pattern: /^\/audio\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/audio/[slug]",
				pattern: /^\/audio\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,], errors: [1,2,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/development",
				pattern: /^\/development\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/english",
				pattern: /^\/english\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/english/[slug]",
				pattern: /^\/english\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/grammar",
				pattern: /^\/grammar\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/grammar/[slug]",
				pattern: /^\/grammar\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,], errors: [1,3,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/text",
				pattern: /^\/text\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/text/[slug]",
				pattern: /^\/text\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,], errors: [1,4,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/video",
				pattern: /^\/video\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/video/[slug]",
				pattern: /^\/video\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,], errors: [1,5,], leaf: 17 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {"_app/immutable/assets/Order of Adjectives Song.RLOd7pbM.mp3":1949615,"_app/immutable/assets/english-oge.DyQvRGqq.jpg":1934097,"_app/immutable/assets/english-talking.DOQ8ysq1.jpg":4046587,"_app/immutable/assets/english-a1.Bew4dcRV.avif":190728,"_app/immutable/assets/adj word order.CuZA3Rjr.pdf":591062}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
