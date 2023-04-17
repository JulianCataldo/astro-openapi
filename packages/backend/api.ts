// import path from 'node:path';
import fs from 'node:fs';
import yaml from 'yaml';
import OpenAPIBackend from 'openapi-backend';
import type { OpenAPIV3_1 } from 'openapi-types';

// const serverUrl = import.meta.env.SITE_URL; //+ import.meta.env.SITE_BASE;

// TODO: make it configurable
const defaultDefinitionPath = './src/definitions/openapi.yaml';

// console.log({ serverUrl });

const d = await fs.promises.readFile(defaultDefinitionPath, 'utf8');
const apiDoc = yaml.parse(d) as OpenAPIV3_1.Document;

console.log({ d, apiDoc, s: apiDoc.servers });

// apiDoc.servers[0].url = 'http://localhost:1402';
// def.

export default new OpenAPIBackend({
	// definition: path.join(process.cwd(), defaultDefinitionPath),
	definition: apiDoc,
	/* NOTE: Not working (upstream known issue) */
	// ajvOpts: {
	//   coerceTypes: true,
	// },
	/* Using our validator inside operations can have benefits.  */
	// validate: false,
	/**
	 * Quick startup. Attempts to optimize startup time by skipping and deferring some parts.
	 * This setting is recommended to optimize cold starts in Serverless Function environments such as AWS Lambda / Azure Functions / GCP Cloud Functions.
	 */
	quick: true,
});
