export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/assessments/text-area-counter.png","images/sait-logo.png","images/site-ui/cpnt200-card.jpg","images/site-ui/cpnt201-card.jpg","images/site-ui/cpnt260-card.jpg","images/site-ui/cpnt262-card.jpg","images/site-ui/cpnt265-card.jpg","images/site-ui/dsgn270-card.jpg","images/slides/better-search-phrases.png","images/slides/browser-triad.png","images/slides/contracting.png","images/slides/deploy-strapi.png","images/slides/final-week-checklist.png","images/slides/flex-nav.png","images/slides/flexbox-extras.png","images/slides/flexbox-intermediate.png","images/slides/git-github.png","images/slides/heros-banners.png","images/slides/http-rest.png","images/slides/js-arrays.png","images/slides/js-async.png","images/slides/js-changing-css.png","images/slides/js-conditional-code.png","images/slides/js-dom.png","images/slides/js-errors.png","images/slides/js-exceptions.png","images/slides/js-for-loops.png","images/slides/js-forms.png","images/slides/js-functions-events.png","images/slides/js-higher-order-array-methods.png","images/slides/js-intro.png","images/slides/js-strings.png","images/slides/js-variables.png","images/slides/raster-html-images.png","images/slides/side-gigs.png","images/slides/strapi-content-types.png","images/slides/ui-quiz.png","images/slides/web-colours.png","images/slides/web-typography.png","images/tools/font-stack-inspector.png","link.svg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-07e34e01.js","imports":["_app/immutable/start-07e34e01.js","_app/immutable/chunks/index-eb08601c.js","_app/immutable/chunks/singletons-59fc7830.js","_app/immutable/chunks/index-99de41cb.js","_app/immutable/chunks/preload-helper-41c905a7.js","_app/immutable/chunks/control-f5b05b5f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/assessments",
				pattern: /^\/assessments\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/courses",
				pattern: /^\/courses\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/courses/[code]",
				pattern: /^\/courses\/([^/]+?)\/?$/,
				params: [{"name":"code","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/courses/[code]/assessments",
				pattern: /^\/courses\/([^/]+?)\/assessments\/?$/,
				params: [{"name":"code","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/courses/[code]/assessments/[slug]",
				pattern: /^\/courses\/([^/]+?)\/assessments\/([^/]+?)\/?$/,
				params: [{"name":"code","optional":false,"rest":false,"chained":false},{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/courses/[code]/day-[day]",
				pattern: /^\/courses\/([^/]+?)\/day-([^/]+?)\/?$/,
				params: [{"name":"code","optional":false,"rest":false,"chained":false},{"name":"day","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/house-rules",
				pattern: /^\/house-rules\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/library",
				pattern: /^\/library\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 13 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
