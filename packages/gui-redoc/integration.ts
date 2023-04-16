import type { AstroIntegration } from 'astro';

/* ========================================================================== */

export const integration = (): AstroIntegration => ({
	name: 'openapi-backend',
	hooks: {
		'astro:config:setup': ({ injectRoute }) => {
			injectRoute({
				// TODO: source base path from .openapiconfig?
				pattern: '/api-docs/redoc',
				entryPoint: '@astro-openapi/gui-redoc/gui-redoc-endpoint.astro',
			});
		},
	},
});
