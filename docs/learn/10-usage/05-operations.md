# Defining Services Operations

This is how to create your server operations for you OpenAPI specification to source from.

<!-- more -->

Firstly, make sure you have the correct entrypoint:

```sh
mkdir ./src/services && touch ./src/services/index.ts
```

```ts
// ./src/services/index.ts
import type { AstroOperationHandler } from '@astro-openapi/backend';
import type { OperationMethods } from 'astro-openapi:types'; // < Auto-generated

// import * as products from './products.js';
// import * as users from './users.js';
import * as pets from './pets.js';

type Operations<OM> = Record<keyof OM, AstroOperationHandler>;

export const operations: Operations<OperationMethods> = {
	// ...products,
	// ...users,
	...pets,
};

// /* Generic operations */
// validationFail: (openapi, _astro) => ({
//   body: JSON.stringify(openapi.validation),
//   status: 502,
// }),
// notImplemented: (_openapi, _astro) => ({ body: '(DEMO): notImplemented' }),
// notFound: (_openapi, _astro) => ({ body: '(DEMO): notFound' }),
```

You can choose to organize your operations like this, depending on the amount of code:

1. **Directly** in the `index.ts` if they're short enough
1. By **entity type**, in a separate files, grouping all operations. Eg. `pets.ts`
1. By **operation names**, in sub-folder. E.g. `pets/findPets.ts`…

> **Note**
> In our examples, operations are splitted by **entity** (2), a medium, sensible default for most.  
> In the end, only
> the exported **`operations`** object in **`./src/services/index.ts`** is authoritative.  
> It acts as the single
> entry point for the OpenAPI backend to source from.

```sh
touch ./src/services/pets.ts
```

```ts
// ./src/services/pets.ts
import type { AstroOperationHandler } from '@astro-openapi/backend';
import type { Paths } from '../types/openapi.js';

export const findPets: AstroOperationHandler<
	/* Body */ undefined,
	/* Params */ undefined,
	/* Query */ Paths.FindPets.QueryParameters
	/* Headers */ // undefined,
	/* Cookie */ // undefined,
> = (openapi, _astro) => {
	const result = {
		/*  */
	};

	return {
		body: JSON.stringify(result),
		status: 200,
	};
};

//  ...
```

See [./demo/src/services/pets.ts](https://github.com/JulianCataldo/astro-openapi/tree/main/demo/src/services/pets.ts) for inspiration.
