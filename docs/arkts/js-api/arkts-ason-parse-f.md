# parse

## parse

```TypeScript
function parse(text: string, reviver?: Transformer, options?: ParseOptions): ISendable | null
```

将JavaScript对象表示法（JSON）字符串转换为ArkTS值。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | 有效的JSON字符串。 |
| reviver | Transformer | No |  |
| options | ParseOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| ISendable | 返回ArkTS值。 |

