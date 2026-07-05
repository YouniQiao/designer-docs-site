# TypedArrayPredicateFn

```TypeScript
type TypedArrayPredicateFn<ElementType, ArrayType> =
    (value: ElementType, index: number, array: ArrayType) => boolean
```

ArkTS TypedArray断言测试函数类型。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ElementType | Yes | 当前遍历的ArkTS TypedArray元素。 |
| index | number | Yes | 当前遍历的ArkTS TypedArray元素索引，从0开始。 |
| array | ArrayType | Yes | 当前遍历的ArkTS TypedArray实例。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 如果值符合条件，则为true，否则为false。 |

