# 📦  Installation

Various setup methods for bootstrapping your new full-stack project.

<!-- more -->

## Method 1: Clone the demo project

```sh
pnpx degit JulianCataldo/astro-openapi/demo ./aoa-demo
cd ./aoa-demo && pnpm install
```

## Method 2: step-by-step, manual installation.

> **Note**
> Each of those packages below are cherry-pickable.

<!-- TODO: needless PEER DEPS -->

```sh
#               — Toolset —

pnpm astro add \
                @astro-openapi/backend \
                @astro-openapi/typegen \
                @astro-openapi/bundler \
                @astro-openapi/client


#               — Documentation GUIs —

pnpm astro add \
                @astro-openapi/gui-swagger \
                @astro-openapi/gui-elements \
                @astro-openapi/gui-redoc
```

You should now have those integrations in your Astro configuration:

```js
// ./astro.config.mjs
import { defineConfig } from 'astro/config';

import openapiBackend from '@astro-openapi/backend';
import openapiTypegen from '@astro-openapi/typegen';

// https://astro.build/config
export default defineConfig({
	output: 'server',

	integrations: [
		//
		openapiBackend(),
		openapiClient(),
		openapiTypegen(),
		openapiBundler(),

		openapiGuiSwagger(),
		openapiGuiElements(),
		openapiGuiRedoc(),
	],
});
```

See a complete config example here: [./demo/astro.config.mjs](https://github.com/JulianCataldo/astro-openapi/blob/main/demo/astro.config.mjs).
