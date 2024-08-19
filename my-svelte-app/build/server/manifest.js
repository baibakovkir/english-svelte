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
		client: {"start":"_app/immutable/entry/start.2VZ6YNpZ.js","app":"_app/immutable/entry/app.UKgLFTL6.js","imports":["_app/immutable/entry/start.2VZ6YNpZ.js","_app/immutable/chunks/entry.CBNhqCKv.js","_app/immutable/chunks/scheduler.Bj67otkU.js","_app/immutable/entry/app.UKgLFTL6.js","_app/immutable/chunks/scheduler.Bj67otkU.js","_app/immutable/chunks/index.CjQoJbwm.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-_lcgQ8mv.js')),
			__memo(() => import('./chunks/1-Bv02rdXi.js')),
			__memo(() => import('./chunks/2-DEvnRgOU.js')),
			__memo(() => import('./chunks/3-CZ7knWXF.js')),
			__memo(() => import('./chunks/4-Bwht5Psi.js')),
			__memo(() => import('./chunks/5-Bv6qj4OM.js')),
			__memo(() => import('./chunks/6-Pxsvt_M6.js')),
			__memo(() => import('./chunks/7-o2JB8qS3.js')),
			__memo(() => import('./chunks/8-pmEZKtXm.js')),
			__memo(() => import('./chunks/9-B0n7GwOo.js')),
			__memo(() => import('./chunks/10-LN6BlLcm.js')),
			__memo(() => import('./chunks/11-D0W1S_Et.js')),
			__memo(() => import('./chunks/12-DEV75x5A.js')),
			__memo(() => import('./chunks/13-Dkqd1F3F.js')),
			__memo(() => import('./chunks/14-DNtvzOOx.js')),
			__memo(() => import('./chunks/15-iSKm-uOg.js')),
			__memo(() => import('./chunks/16-D4ATJz_q.js')),
			__memo(() => import('./chunks/17-vQnDbC2q.js'))
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
