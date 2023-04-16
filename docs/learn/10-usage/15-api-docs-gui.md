# API docs GUIs (Swagger, Elements, Redoc)

Quickly spin-up an automatic documentation from your OpenAPI specifications.  
Comes with multiple flavors.

<!-- more -->

Head over to one of this endpoint: `/api-docs/{swagger|elements|redoc}`.

You can import them as components, too:

```astro
---
import OpenApiGuiSwagger from '@astro-openapi/gui-swagger/OpenApiGuiSwagger.astro';
import OpenApiGuiRedoc from '@astro-openapi/gui-redoc/OpenApiGuiRedoc.astro';
import OpenApiGuiElements from '@astro-openapi/gui-elements/OpenApiGuiElements.astro';

const gui = 'elements'; // E.g, could source it from `Astro.params`,…
---

{
	gui === 'elements' && (
		<OpenApiGuiElements schemaUrl={'./api/openapi.json' /* (default) */} />
	)
}

{gui === 'redoc' && <OpenApiGuiRedoc />}

{gui === 'swagger' && <OpenApiGuiSwagger />}
```

## Swagger

<!-- prettier-ignore -->
> **Note**
> **Dark theme** support has been added on top of the original component
