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
pnpm install    @astro-openapi/client


#               — Documentation GUIs —

pnpm astro add \
                @astro-openapi/gui-swagger \
                @astro-openapi/gui-elements \
                @astro-openapi/gui-redoc
```

<!-- ```sh

#               — Peer dependencies —

pnpm install \
                openapi-backend \
                openapi-client-axios-typegen \
                @apidevtools/swagger-parser \
                openapi-client-axios

``` -->

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
		openapiTypegen(),
	],
});
```
