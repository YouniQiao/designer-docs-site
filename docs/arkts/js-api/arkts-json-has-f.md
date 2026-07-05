# has

## has

```TypeScript
function has(obj: object, property: string): boolean
```

检查ArkTS对象中是否包含某个键。此API可用于[JSON.parse]json.parse解析JSON字符串后的相关操作。仅支持最外层为字典格式（大括号而非中括号）的有效JSON字符串。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| obj | object | Yes | ArkTS对象。 |
| property | string | Yes | 待检查的键。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 如果对象中包含该键返回true，否则返回false。 |

