# ArrayFromMapFn

```TypeScript
type ArrayFromMapFn<FromElementType, ToElementType> = (value: FromElementType, index: number) => ToElementType
```

ArkTS Array归约函数类型，被Array类的'from'接口使用。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | FromElementType | Yes | 当前正在处理的元素。 |
| index | number | Yes | 当前遍历的ArkTS Array元素索引。 |

**Return value:**

| Type | Description |
| --- | --- |
| ToElementType | 归约函数的结果，该结果会作为数组的新元素。 |

