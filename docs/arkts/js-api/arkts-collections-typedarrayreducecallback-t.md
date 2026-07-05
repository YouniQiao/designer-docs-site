# TypedArrayReduceCallback

```TypeScript
type TypedArrayReduceCallback<AccType, ElementType, ArrayType> =
    (previousValue: AccType, currentValue: ElementType, currentIndex: number, array: ArrayType) => AccType
```

ArkTS TypedArray归约函数类型。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| previousValue | AccType | Yes | 当前遍历所累积的值。 |
| currentValue | ElementType | Yes | 当前遍历的ArkTS TypedArray元素。 |
| currentIndex | number | Yes | 当前遍历的ArkTS TypedArray元素索引，从0开始。 |
| array | ArrayType | Yes | 当前遍历的ArkTS TypedArray实例。 |

**Return value:**

| Type | Description |
| --- | --- |
| AccType | 归约函数的结果。该结果会作为下一次调用TypedArrayReduceCallback时的previousValue参数。 |

