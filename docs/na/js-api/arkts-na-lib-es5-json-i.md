# JSON

<!--Device-unnamed-interface JSON--><!--Device-unnamed-interface JSON-End-->

<a id="parse"></a>
## parse

```TypeScript
parse(text: string, reviver?: (this: any, key: string, value: any) => any): any
```

Converts a JavaScript Object Notation (JSON) string into an object.

<!--Device-JSON-parse(text: string, reviver?: (this: any, key: string, value: any) => any): any--><!--Device-JSON-parse(text: string, reviver?: (this: any, key: string, value: any) => any): any-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes |  |
| reviver | (this: any, key: string, value: any) =&gt; any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| any |  |

<a id="stringify"></a>
## stringify

```TypeScript
stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string
```

Converts a JavaScript value to a JavaScript Object Notation (JSON) string.

<!--Device-JSON-stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string--><!--Device-JSON-stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | any | Yes |  |
| replacer | (this: any, key: string, value: any) =&gt; any | No |  |
| space | string \| number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| string |  |

<a id="stringify-1"></a>
## stringify

```TypeScript
stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string
```

Converts a JavaScript value to a JavaScript Object Notation (JSON) string.

<!--Device-JSON-stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string--><!--Device-JSON-stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | any | Yes |  |
| replacer | (number \| string)[] \| null | No |  |
| space | string \| number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| string |  |

