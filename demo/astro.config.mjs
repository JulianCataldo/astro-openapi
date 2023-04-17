import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

import openapiBackend from '@astro-openapi/backend';
import openapiClient from '@astro-openapi/client';
// import openapiTypegen from '@astro-openapi/typegen';
import openapiBundler from '@astro-openapi/bundler';

// import openapiGuiSwagger from '@astro-openapi/gui-swagger';
// import openapiGuiElements from '@astro-openapi/gui-elements';
// import openapiGuiRedoc from '@astro-openapi/gui-redoc';

// https://astro.build/config
export default defineConfig({
	server: {
		port: 9402,
	},

	site: process.env.SITE_URL ?? 'http://localhost:9402',
	output: 'server',
	adapter: node({
		mode: 'standalone',
	}),

	integrations: [
		//
		openapiBackend(), // http://localhost:3000/api/persons, file://./src/services/index.ts
		openapiClient(), //
		// openapiTypegen(), // file://./src/types/openapi.d.ts
		openapiBundler(), // file://./public/api/openapi.json

		// ——— GUIs ———

		// v—• Uncomment for using automatic endpoints ('/api-docs/*') •—v

		// openapiGuiSwagger(), // http://localhost:1402/api-docs/swagger

		// openapiGuiElements(), // http://localhost:1402/api-docs/elements

		// openapiGuiRedoc(), // http://localhost:1402/api-docs/redoc

		// —OR—
		// Use as components. See file://./src/pages/api-docs/[...gui].astro
	],
});
