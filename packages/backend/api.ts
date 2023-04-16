import path from 'node:path';
import OpenAPIBackend from 'openapi-backend';

// const serverUrl = import.meta.env.SITE_URL; //+ import.meta.env.SITE_BASE;

const defaultDefinitionPath = './src/definitions/openapi.yaml';

// console.log({ serverUrl });

export default new OpenAPIBackend({
	definition: path.join(process.cwd(), defaultDefinitionPath),
	// definition: apiDoc as OpenAPIV3_1.Document,
	/* NOTE: Not working (upstream known issue) */
	// ajvOpts: {
	//   coerceTypes: true,
	// },
	/* Using our validator inside operations have benefits.  */
	// validate: false,
	/**
	 * Quick startup. Attempts to optimize startup time by skipping and deferring some parts.
	 * This setting is recommended to optimize cold starts in Serverless Function environments such as AWS Lambda / Azure Functions / GCP Cloud Functions.
	 */
	quick: true,
});
