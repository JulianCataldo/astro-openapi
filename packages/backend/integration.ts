// NOTE: UNUSED, preferring file path routing

// import type { AstroIntegration } from 'astro';

// /* ========================================================================== */

// export const integration = (): AstroIntegration => ({
//   name: 'openapi-backend',
//   hooks: {
//     'astro:config:setup': ({ injectRoute }) => {
//       injectRoute({
//         // TODO: source base path from .openapiconfig?
//         pattern: '/api/v1/[...openapi]',
//         entryPoint: '@astro-openapi/backend/endpoint.ts',
//       });
//     },
//   },
// });
