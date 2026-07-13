# QueryParamObject

```TypeScript
export type QueryParamObject = Record<string, QueryParamValue | QueryParamValue[]>
```

A key-value object used to construct URL query parameters automatically.

Each property name is treated as a query parameter key.
Each property value may be either:
- a single {@link QueryParamValue}, or
- an array of {@link QueryParamValue}, which is expanded into repeated
parameters with the same key.

Serialization rules:
- Keys and values are URL-encoded by the system.
- A single value is serialized as one `key=value` pair.
- An array value is serialized as multiple pairs using the same key.
For example, `{ tag: ['a', 'b'] }` is serialized as `tag=a&tag=b`.
- For array values, `undefined` and `null` elements are serialized as empty values without `=`.
For example, `{ a: [1, "", undefined, null] }` is serialized as `a=1&a=&a&a`.

Order semantics:
- This type represents query parameters as an object, not as an ordered list
of key-value pairs.
- Multiple values for the same key are supported through arrays.
- However, callers must not rely on preserving an exact original pair order
such as `a=1&b=2&a=3`. If strict ordering or repeated-key ordering is
required, use a pre-encoded query string instead of {@link QueryParamObject}.

Usage notes:
- Provide raw, unencoded keys and values. Do not pre-encode them.
- If you need full control over the final query string format, use the `string`
form of `queryParams` instead.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetStack

**Property type:** Record<string, QueryParamValue | QueryParamValue[]>

