# ConcatArray

<!--Device-unnamed-interface ConcatArray<T>--><!--Device-unnamed-interface ConcatArray<T>-End-->

<a id="join"></a>
## join

```TypeScript
join(separator?: string): string
```

<!--Device-ConcatArray-join(separator?: string): string--><!--Device-ConcatArray-join(separator?: string): string-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| separator | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| string |  |

<a id="slice"></a>
## slice

```TypeScript
slice(start?: number, end?: number): T[]
```

<!--Device-ConcatArray-slice(start?: number, end?: number): T[]--><!--Device-ConcatArray-slice(start?: number, end?: number): T[]-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| start | number | No |  |
| end | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| T[] |  |

## length

```TypeScript
readonly length: number
```

**Type:** number

<!--Device-ConcatArray-readonly length: number--><!--Device-ConcatArray-readonly length: number-End-->

## n

```TypeScript
readonly [n: number]: T
```

**Type:** T

<!--Device-ConcatArray-readonly [n: number]: T--><!--Device-ConcatArray-readonly [n: number]: T-End-->

