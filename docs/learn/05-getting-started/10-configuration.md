## ⚙️  Configuration

Walk-through to prepare your full-stack application, declaratively.

<!-- more -->

### Definitions

Create an OpenAPI definition file:

```sh
mkdir ./src/definitions && touch ./src/definitions/openapi.yaml
```

```yaml
openapi: 3.0.0
info:
  version: 1.0.0
# ...
```

See the demo one for inspiration in [./demo/src/definitions/openapi.yaml](https://github.com/JulianCataldo/astro-openapi/tree/main/demo/src/definitions/openapi.yaml)

---

Launch Astro development server:

```
pnpm dev
```

Your OpenAPI **typings** should be generated at startup in **`./src/types/openapi.d.ts`**.  
Same for the bundle, which is a tooling friendly, static, de-referenced version of your API definition, generated in **`./public/api/openapi.json`**.

Everything in `./src/definitions` is watched for changes.  
That mean you can split your OpenAPI using references and edit
child documents, regeneration happens smoothly in the background.
