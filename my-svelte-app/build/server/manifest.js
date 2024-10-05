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
		client: {"start":"_app/immutable/entry/start.CjklJUNt.js","app":"_app/immutable/entry/app.TlBR2WbI.js","imports":["_app/immutable/entry/start.CjklJUNt.js","_app/immutable/chunks/entry.BqNLwUa4.js","_app/immutable/chunks/scheduler.CQWhEZFA.js","_app/immutable/entry/app.TlBR2WbI.js","_app/immutable/chunks/scheduler.CQWhEZFA.js","_app/immutable/chunks/index.UGgirURG.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-jq8joqJU.js')),
			__memo(() => import('./chunks/1-BcqeJfeT.js')),
			__memo(() => import('./chunks/2-mDAk3jZf.js')),
			__memo(() => import('./chunks/3-BxQAiC4u.js')),
			__memo(() => import('./chunks/4-CkGS5DrH.js')),
			__memo(() => import('./chunks/5-Y2Eg3wj5.js')),
			__memo(() => import('./chunks/6-CRCO_vjK.js')),
			__memo(() => import('./chunks/7-Dpgs5zuW.js')),
			__memo(() => import('./chunks/8-D6F643Rd.js')),
			__memo(() => import('./chunks/9-DELPpFSG.js')),
			__memo(() => import('./chunks/10-DqCF1tmc.js')),
			__memo(() => import('./chunks/11-CHq1Cb7z.js')),
			__memo(() => import('./chunks/12-BxSxzMoP.js')),
			__memo(() => import('./chunks/13-DtJTgWuK.js')),
			__memo(() => import('./chunks/14-BiP3r01b.js')),
			__memo(() => import('./chunks/15-x3nKtDKI.js')),
			__memo(() => import('./chunks/16-D32NQGAQ.js')),
			__memo(() => import('./chunks/17-DQTin_kt.js'))
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
