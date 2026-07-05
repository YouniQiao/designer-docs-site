# TypedArrayMapCallback

```TypeScript
type TypedArrayMapCallback<ElementType, ArrayType> =
    (value: ElementType, index: number, array: ArrayType) => ElementType
```

ArkTS TypedArray转换映射函数类型。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ElementType | Yes | 当前映射的ArkTS TypedArray元素。 |
| index | number | Yes | 当前映射的ArkTS TypedArray元素索引，从0开始。 |
| array | ArrayType | Yes | 当前映射的ArkTS TypedArray实例。 |

**Return value:**

| Type | Description |
| --- | --- |
| ElementType | 转换后的元素值。 |

