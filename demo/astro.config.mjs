import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

import openapiBackend from '@astro-openapi/backend';
import openapiClient from '@astro-openapi/client';
import openapiTypegen from '@astro-openapi/typegen';
import openapiBundler from '@astro-openapi/bundler';

// import openapiGuiSwagger from '@astro-openapi/gui-swagger';
// import openapiGuiElements from '@astro-openapi/gui-elements';
// import openapiGuiRedoc from '@astro-openapi/gui-redoc';

// https://astro.build/config
export default defineConfig({
	server: {
		port: 9402,
	},
	site: 'http://localhost:9402',
	output: 'server',
	adapter: node({
		mode: 'standalone',
	}),

	integrations: [
		//
		openapiBundler(),
		openapiBackend(),
		openapiClient(),
		openapiTypegen(),
		// openapiGuiSwagger(),
		// openapiGuiElements(),
		// openapiGuiRedoc(),
	],
});
