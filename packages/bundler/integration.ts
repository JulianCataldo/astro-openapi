import type { AstroIntegration } from 'astro';
import fs from 'node:fs/promises';
import path from 'node:path';

/* ========================================================================== */

const SwaggerParser = await import('@apidevtools/swagger-parser').then(
	({ default: d }) => d,
);

function bundle(oaDefinitionPath: string) {
	SwaggerParser.bundle(oaDefinitionPath)
		.then((res) => {
			fs.writeFile(
				'./public/api/openapi.json',
				JSON.stringify(res, null, 2),
			).catch((err) => {
				throw err;
			});
		})
		.catch((err) => {
			throw err;
		});
}

const defaultDefinitionPath = '/src/definitions/openapi.yaml';

let created = false;

export const integration = (): AstroIntegration => ({
	name: 'openapi-bundler',
	hooks: {
		'astro:server:setup': ({ server }) => {
			if (created) return;
			created = true;

			const def = path.join(process.cwd(), defaultDefinitionPath);

			bundle(def);
			server.watcher.on('all', (_e, file) => {
				//
				if (!file.startsWith(path.dirname(def))) return;

				bundle(def);
			});
		},
	},
});
