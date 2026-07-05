# ListComparatorFn

```TypeScript
export type ListComparatorFn<T> = (firstValue: T, secondValue: T) => double
```

List排序比较器的类型。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| firstValue | T | Yes | firstValue（必填）前一项元素。 |
| secondValue | T | Yes | secondValue（必填）后一项元素。 |

**Return value:**

| Type | Description |
| --- | --- |
| double | 数值类型。 |

