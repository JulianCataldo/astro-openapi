# Module: @astro-openapi/backend

## Type Aliases

### AstroOperationHandler

Ƭ **AstroOperationHandler**<`Body`, `Params`, `Query`, `Headers`, `Cookie`\>: (`openapi?`: `Context`<`Body`, `Params`, `Query`, `Headers`, `Cookie`\>, `astro?`: `AstroAPIContext`) => `ReturnType`<`APIRoute`\>

#### Type parameters

| Name      | Type  |
| :-------- | :---- |
| `Body`    | `any` |
| `Params`  | `any` |
| `Query`   | `any` |
| `Headers` | `any` |
| `Cookie`  | `any` |

#### Type declaration

▸ (`openapi?`, `astro?`): `ReturnType`<`APIRoute`\>

##### Parameters

| Name       | Type                                                       |
| :--------- | :--------------------------------------------------------- |
| `openapi?` | `Context`<`Body`, `Params`, `Query`, `Headers`, `Cookie`\> |
| `astro?`   | `AstroAPIContext`                                          |

##### Returns

`ReturnType`<`APIRoute`\>

#### Defined in

[handle-astro-request.ts:14](https://github.com/JulianCataldo/astro-openapi/blob/bea96b5/packages/backend/handle-astro-request.ts#L14)

## Functions

### default

▸ **default**(): `AstroIntegration`

#### Returns

`AstroIntegration`

#### Defined in

[integration.ts:6](https://github.com/JulianCataldo/astro-openapi/blob/bea96b5/packages/backend/integration.ts#L6)
