# parse

## parse

```TypeScript
function parse(text: string, reviver?: Transformer, options?: ParseOptions): Object | null
```

将JSON字符串解析为ArkTS对象或null。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | 有效的JSON字符串。 |
| reviver | Transformer | No |  |
| options | ParseOptions | No | 解析选项，用于控制解析结果的类型。默认值为undefined。 |

**Return value:**

| Type | Description |
| --- | --- |
| Object | 返回与JSON文本对应的Object、数组、字符串、数字、布尔值或null值。 |

