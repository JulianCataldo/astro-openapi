import type { AstroIntegration } from 'astro';
import fs from 'node:fs/promises';
import path from 'node:path';
import prettier from 'prettier';
import { generateTypesForDocument } from 'openapi-client-axios-typegen';

/* ========================================================================== */

const defaultBundleDest = 'src/types/openapi.d.ts';

function generate(def: string) {
	// process.chdir(path.join(process.cwd(), 'src/definitions'));
	generateTypesForDocument(def, {
		transformOperationName: (operationName) => operationName,
	})
		.then(async (output) => {
			// process.chdir(process.cwd());
			const data =
				"declare module 'astro-openapi:types' {" +
				`${output.join('\n')}\n` +
				`declare global {
	namespace AstroOpenAPI {
		export { Client };
	}
}` +
				`}`;

			const p = path.join(process.cwd(), defaultBundleDest);

			await fs.mkdir(path.dirname(p), { recursive: true });
			fs.writeFile(
				p,
				// TODO: load workspace prettier config.
				prettier.format(data, { parser: 'typescript', singleQuote: true }),
			).catch((err) => {
				throw err;
			});
		})
		.catch((err) => {
			throw err;
		});

	// process.chdir(process.cwd());
}

const defaultDefinitionPath = '/src/definitions/openapi.yaml';

let created = false;

export const integration = (): AstroIntegration => ({
	name: 'openapi-typegen',
	hooks: {
		'astro:server:setup': ({ server }) => {
			if (created) return;
			created = true;

			const def = path.join(process.cwd(), defaultDefinitionPath);

			generate(def);
			server.watcher.on('all', (_e, file) => {
				//
				if (!file.startsWith(path.dirname(def))) return;

				generate(def);
			});
		},
	},
});
