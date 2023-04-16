import { OpenAPIClientAxios } from 'openapi-client-axios';
import type { OpenAPIV3_1 } from 'openapi-types';
// import type { Client } from '../types/openapi.js';
// import apiDoc from '../openapi.json' assert { type: 'json' };

export const defaultBundleUrl = `${
	(import.meta.env.SITE as string | undefined) ?? ''
}/${import.meta.env.BASE_URL}/api/openapi.json`;

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace AstroOpenAPI {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface Client {}
}

export async function getClient<T = AstroOpenAPI.Client>(
	bundleUrl = defaultBundleUrl,
) {
	const api = new OpenAPIClientAxios({
		quick: true,

		definition: (await fetch(bundleUrl).then(
			(r) => r.json() as unknown,
		)) as OpenAPIV3_1.Document,
		// definition: apiDoc as OpenAPIV3_1.Document,
	});

	api.init().catch(() => undefined);
	const client = await api.getClient<T>();
	return client;
}
