# QueryParamValue

```TypeScript
export type QueryParamValue = string | number | boolean | null | undefined
```

A single value that can be used as a query parameter. Serialization rules when used in {@link QueryParamObject}: - textual values: serialized as-is before URL encoding. - numeric values: converted to its string representation before URL encoding. - logical values: converted to "true" or "false" before URL encoding. - null or undefined: serialized as the key without `=` or a value (for example, `{ a: null }` -> `a`).

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetStack

| Type | Description |
| --- | --- |
| string |  |
| int |  |
| boolean |  |
| null |  |
| undefined |  |

