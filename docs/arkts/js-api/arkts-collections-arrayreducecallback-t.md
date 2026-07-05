# ArrayReduceCallback

```TypeScript
type ArrayReduceCallback<AccType, ElementType, ArrayType> =
    (previousValue: AccType, currentValue: ElementType, currentIndex: number, array: ArrayType) => AccType
```

ArkTS Array归约函数类型，被Array类的'reduceRight'接口使用。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| previousValue | AccType | Yes | 当前遍历所累积的值。 |
| currentValue | ElementType | Yes | 当前遍历的ArkTS Array元素。 |
| currentIndex | number | Yes | 当前遍历的ArkTS Array元素索引。 |
| array | ArrayType | Yes | 当前遍历的ArkTS Array实例。 |

**Return value:**

| Type | Description |
| --- | --- |
| AccType | 归约函数的结果，该结果会作为下一次调用ArrayReduceCallback时的previousValue参数。 |

