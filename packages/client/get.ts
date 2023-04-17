import { OpenAPIClientAxios } from 'openapi-client-axios';
import type { OpenAPIV3_1 } from 'openapi-types';
// import type { Client } from '../types/openapi.js';
// import apiDoc from '../openapi.json' assert { type: 'json' };

declare global {
	interface ImportMeta {
		env: any;
	}
}
const siteUrl = `${(import.meta.env.SITE as string | undefined) ?? ''}${
	import.meta.env.BASE_URL
}`;
const apiUrl = `${siteUrl}api`;

// TODO: make it configurable
export const defaultBundleUrl = `${apiUrl}/openapi.json`;

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace AstroOpenAPI {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface Client {}
}

export async function getClient<T = AstroOpenAPI.Client>(
	/**
	 * Defaults to
	 * `SITE` + `BASE_URL` + `/api/openapi.json`
	 */
	bundleUrl = defaultBundleUrl,

	/**
	 * For app-tied client, not external ones
	 */
	devOverride = false,
) {
	const definition = await fetch(bundleUrl)
		.then((r) => r.json() as unknown as OpenAPIV3_1.Document)
		.catch((e) => {
			console.log(bundleUrl);
			throw e;
		});

	if (definition.servers?.length && devOverride) {
		definition.servers[0].url = apiUrl;
	}

	console.log({ definition });

	const api = new OpenAPIClientAxios({
		quick: true,

		definition,
	});

	api.init().catch((e) => {
		throw e;
	});
	const client = await api.getClient<T>();
	return client;
}
