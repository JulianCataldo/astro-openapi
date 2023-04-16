import type { AstroOperationHandler } from '@astro-openapi/backend';
import type { OperationMethods } from 'astro-openapi:types';

// import * as products from './products.js';
// import * as users from './users.js';
import * as persons from './persons.js';

type Operations<OM> = Record<keyof OM, AstroOperationHandler>;

export const operations: Operations<OperationMethods> = {
	// ...products,
	// ...users,
	...persons,
};

// /* Generic operations */
// validationFail: (openapi, _astro) => ({
//   body: JSON.stringify(openapi.validation),
//   status: 502,
// }),
// notImplemented: (_openapi, _astro) => ({ body: '(DEMO): notImplemented' }),
// notFound: (_openapi, _astro) => ({ body: '(DEMO): notFound' }),
