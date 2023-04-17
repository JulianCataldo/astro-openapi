import type { AstroIntegration } from 'astro';
import topLevelAwait from 'vite-plugin-top-level-await';

/* ========================================================================== */

// TODO: Choose a configuration method, via dedicated config file, or env,…
// interface Settings {
// 	opsEntry?: string;
// }
export const integration = (/* settings: Settings */): AstroIntegration => ({
	name: 'openapi-backend',
	hooks: {
		'astro:config:setup': ({ /* injectRoute, */ updateConfig }) => {
			// NOTE: UNUSED, preferring file path routing, but can propose both options
			// injectRoute({
			// 	// TODO: source base path from .openapiconfig?
			//   pattern: '/api/v1/[...openapi]',
			//   entryPoint: '@astro-openapi/backend/endpoint.ts',
			// });
			updateConfig({
				vite: {
					server: { strictPort: true },

					plugins: [
						// HACK: Sadly, this is needed only when distributing the package. All Vite / TS tricks failed.
						topLevelAwait(),
					],
				},
			});
		},
	},
});
