# remove

## remove

```TypeScript
function remove(obj: object, property: string): void
```

从ArkTS对象中删除一个键。此API可用于[JSON.parse]json.parse解析JSON字符串后的相关操作。仅支持最外层为字典格式（大括号而非中括号）的有效JSON字符串。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| obj | object | Yes | ArkTS对象。 |
| property | string | Yes | 待删除的键。 |

