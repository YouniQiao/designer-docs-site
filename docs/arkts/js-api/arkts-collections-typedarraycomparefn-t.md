# TypedArrayCompareFn

```TypeScript
type TypedArrayCompareFn<ElementType> = (first: ElementType, second: ElementType) => number
```

ArkTS TypedArray排序函数类型。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| first | ElementType | Yes | 当前待比较的第一个元素。 |
| second | ElementType | Yes | 当前待比较的第二个元素。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 元素比较的结果。如果`first`小于`second`，返回值为负数；如果`first`大于`second`，返回值为正数；如果两个值相等，返回值为0。 |

