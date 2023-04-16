import type { AstroIntegration } from 'astro';
import fs from 'node:fs/promises';
import path from 'node:path';

/* ========================================================================== */

const SwaggerParser = await import('@apidevtools/swagger-parser').then(
	({ default: d }) => d,
);

// TODO: make it configurable
const defaultBundleDest = 'public/api/openapi.json';

function bundle(oaDefinitionPath: string) {
	SwaggerParser.bundle(oaDefinitionPath)
		.then(async (res) => {
			const p = path.join(process.cwd(), defaultBundleDest);
			const data = JSON.stringify(res, null, 2);
			await fs.mkdir(path.dirname(p), { recursive: true });
			await fs.writeFile(p, data).catch((err) => {
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
