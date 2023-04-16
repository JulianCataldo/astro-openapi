import type { AstroIntegration } from 'astro';
import topLevelAwait from 'vite-plugin-top-level-await';

/* ========================================================================== */

export const integration = (): AstroIntegration => ({
	name: 'openapi-backend',
	hooks: {
		'astro:config:setup': ({ /* injectRoute, */ updateConfig }) => {
			// NOTE: UNUSED, preferring file path routing
			// injectRoute({
			// 	// TODO: source base path from .openapiconfig?
			//   pattern: '/api/v1/[...openapi]',
			//   entryPoint: '@astro-openapi/backend/endpoint.ts',
			// });
			updateConfig({
				vite: {
					plugins: [
						//
						topLevelAwait(),
					],
				},
			});
		},
	},
});
