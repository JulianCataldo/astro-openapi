# Type-safe Client Operations

When your API is wired-up server side, you're ready to make your first operations.  
Also, you can setup multiple clients, e.g for external APIs.

<!-- more -->

## Application API

### From backend frontmatter (server)

```astro
---
// ./pages/my/page.astro
import { app } from '@astro-openapi/client';

const person = await app.findPersonById({ id: 123 });
---

<div>{person.data.name}</div>
```

### From browser

```ts
// ./components/MightyFetcher/MightyFetcher.client.ts  \
import { app } from '@astro-openapi/client';

const newPerson = await app.addPerson(
	/* Parameters (Path, Query) */ null,

	/* Data Body (JSON…) */ { email: 'foo@bar.it' },
	//                        ^? Components.Schemas.Person.email

	/* Axios configuration */ {},
);

// Do stuff…
console.log(newPerson.data);
```

## External APIs

```ts
// ./src/lib/openapi-clients.ts
import { getClient } from '@astro-openapi/client';
import type { ExternalOas } from 'my-external-api/oas-client-types';

export const myExternalClient = await getClient<ExternalOas>();

myExternalClient.doStuff(/* … */);
```

> **Note**
> While your local application typings are automatically generated for you, make sure to generated them for external packages.  
> You can do this by using this project or the underlying package (`openapi-client-axios-typegen`) if it's not using Astro, see:
>
> [Generating types](https://openapistack.co/docs/openapi-client-axios/typegen/) in openapi-stack documentation.
