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
		client: {"start":"_app/immutable/entry/start.RbdmuOtM.js","app":"_app/immutable/entry/app.oZzjPm-b.js","imports":["_app/immutable/entry/start.RbdmuOtM.js","_app/immutable/chunks/entry.2xqjaWZi.js","_app/immutable/chunks/scheduler.Bj67otkU.js","_app/immutable/entry/app.oZzjPm-b.js","_app/immutable/chunks/scheduler.Bj67otkU.js","_app/immutable/chunks/index.CjQoJbwm.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-DzrWCoLj.js')),
			__memo(() => import('./chunks/1-uiLsmXV6.js')),
			__memo(() => import('./chunks/2-DiYPno28.js')),
			__memo(() => import('./chunks/3-DmIClTjD.js')),
			__memo(() => import('./chunks/4-BF-HnG8-.js')),
			__memo(() => import('./chunks/5-BrpeV6K-.js')),
			__memo(() => import('./chunks/6-Pxsvt_M6.js')),
			__memo(() => import('./chunks/7-o2JB8qS3.js')),
			__memo(() => import('./chunks/8--zoxK0L6.js')),
			__memo(() => import('./chunks/9-B0n7GwOo.js')),
			__memo(() => import('./chunks/10-LN6BlLcm.js')),
			__memo(() => import('./chunks/11-D0W1S_Et.js')),
			__memo(() => import('./chunks/12-CvoFEker.js')),
			__memo(() => import('./chunks/13-ChBwXmzb.js')),
			__memo(() => import('./chunks/14-DWn4NEJ4.js')),
			__memo(() => import('./chunks/15-BU9OKKbQ.js')),
			__memo(() => import('./chunks/16-Cv0SN8kl.js')),
			__memo(() => import('./chunks/17-BynJ8t6d.js'))
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
