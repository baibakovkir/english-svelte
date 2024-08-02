const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png",".mp3":"audio/mpeg",".jpg":"image/jpeg",".avif":"image/avif"},
	_: {
		client: {"start":"_app/immutable/entry/start.CBmGnTRD.js","app":"_app/immutable/entry/app.DsPMkggh.js","imports":["_app/immutable/entry/start.CBmGnTRD.js","_app/immutable/chunks/entry.CG9aOgaE.js","_app/immutable/chunks/scheduler.Bj67otkU.js","_app/immutable/entry/app.DsPMkggh.js","_app/immutable/chunks/scheduler.Bj67otkU.js","_app/immutable/chunks/index.59xXzVuS.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-DJ2jtgHv.js')),
			__memo(() => import('./chunks/1-B4mIXcSs.js')),
			__memo(() => import('./chunks/2-DVRhUoDs.js')),
			__memo(() => import('./chunks/3-B5qha6-a.js')),
			__memo(() => import('./chunks/4-C-7GXO21.js')),
			__memo(() => import('./chunks/5-DP4_pjn8.js')),
			__memo(() => import('./chunks/6-DjIyGjzc.js')),
			__memo(() => import('./chunks/7-Dpgc9mVP.js')),
			__memo(() => import('./chunks/8-ZtQ5J9EJ.js')),
			__memo(() => import('./chunks/9-BXP3QmRC.js')),
			__memo(() => import('./chunks/10-CKaMUxl8.js')),
			__memo(() => import('./chunks/11-DXJuPUFx.js')),
			__memo(() => import('./chunks/12-DFVL1b0P.js')),
			__memo(() => import('./chunks/13-UDh2L2ZY.js')),
			__memo(() => import('./chunks/14-ZBlu2tZL.js')),
			__memo(() => import('./chunks/15-rdNJnhyo.js')),
			__memo(() => import('./chunks/16-Crp15-n4.js')),
			__memo(() => import('./chunks/17-Cd9wzzAe.js'))
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
		server_assets: {"_app/immutable/assets/test.JPQhuB3V.mp3":3396268,"_app/immutable/assets/english-oge.DyQvRGqq.jpg":1934097,"_app/immutable/assets/english-talking.DOQ8ysq1.jpg":4046587,"_app/immutable/assets/english-a1.Bew4dcRV.avif":190728}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
