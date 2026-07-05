# stringify

## stringify

```TypeScript
function stringify(value: Object | null | undefined): string
```

将ArkTS值转换为JavaScript对象表示法（JSON）字符串。 额外支持Map和Set。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Object \| null \| undefined | Yes | 要转换的值。[since 18] |

**Return value:**

| Type | Description |
| --- | --- |
| string | 该值的JSON字符串表示。 |

