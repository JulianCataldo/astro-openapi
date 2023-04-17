import { getClient } from './get.js';

// @ts-expect-error Retrieved user side as (generated) ambient
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
export const client = await getClient<AstroOpenAPI.Client>(undefined, true);
