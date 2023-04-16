import type { APIRoute } from 'astro';

import api from './api.js';
import {
	handleAstroRequest,
	AstroOperationHandler,
} from './handle-astro-request.js';

// @ts-expect-error ...
// eslint-disable-next-line import/no-absolute-path
const operations = await import('/src/services/index.js')
	.then(({ operations: ops }) => ops as AstroOperationHandler)
	.catch(() => {
		console.log('No ops');
	});

console.log({ ops: operations });

api.register({
	/* Generic operations */
	validationFail: (openapi, _astro) => ({
		body: JSON.stringify(openapi.validation),
		status: 502,
	}),

	notImplemented: (_openapi, _astro) => ({ body: 'notImplemented' }),
	notFound: (_openapi, _astro) => ({ body: 'notFound' }),

	...operations,
});

api.init().catch((e) => {
	console.error(e);
});

export const all: APIRoute = async (context) =>
	handleAstroRequest(api, context);
