import type { APIRoute } from 'astro';
import type { Context, OpenAPIBackend } from 'openapi-backend';

export interface AstroAPIContext {
	params: Record<string, string | undefined>;
	request: {
		headers: Headers;
		method: string;
		text: () => Promise<string>;
	};
	url: { searchParams: URLSearchParams };
}

export type AstroOperationHandler<
	Body = any,
	Params = any,
	Query = any,
	Headers = any,
	Cookie = any,
> = (
	openapi?: Context<Body, Params, Query, Headers, Cookie>,
	astro?: AstroAPIContext,
) => ReturnType<APIRoute>;

export async function handleAstroRequest(
	api: OpenAPIBackend,
	astroContext: AstroAPIContext,
) {
	const body = await astroContext.request.text();
	const [method] = [astroContext.request.method];

	const path = `/${astroContext.params.openapi ?? ''}`;

	// NOTE: is this needed?
	const query: Record<string, string | string[]> = {};
	astroContext.url.searchParams.forEach((header, key) => {
		query[key] = header;
	});
	const headers: Record<string, string | string[]> = {};
	astroContext.request.headers.forEach((header, key) => {
		headers[key] = header;
	});

	return api.handleRequest(
		{
			method,
			body,
			path,
			query,
			headers,
		},
		astroContext,
	);
}
