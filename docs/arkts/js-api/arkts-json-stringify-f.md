# stringify

## stringify

```TypeScript
function stringify(value: Object, replacer?: (number | string)[] | null, space?: string | number): string
```

将ArkTS对象或数组转换为JSON字符串。对于容器，支持线性容器，但不支持非线性容器。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Object | Yes | ArkTS对象或数组。对于容器，支持线性容器，但不支持非线性容器。 |
| replacer | (number \| string)[] \| null | No |  |
| space | string \| number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回JSON文本。 |

## stringify

```TypeScript
function stringify(value: Object, replacer?: Transformer, space?: string | number): string
```

将ArkTS对象或数组转换为JSON字符串。对于容器，支持线性容器，但不支持非线性容器。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Object | Yes | ArkTS对象或数组。对于容器，支持线性容器，但不支持非线性容器。 |
| replacer | Transformer | No |  |
| space | string \| number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回JSON文本。 |

