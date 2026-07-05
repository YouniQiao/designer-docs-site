# ArrayListComparatorFn

```TypeScript
export type ArrayListComparatorFn<T> = (firstValue: T, secondValue: T) => double
```

ArrayList中sort方法的比较器类型。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| firstValue | T | Yes | 需要排序的前一项元素。 |
| secondValue | T | Yes | 需要排序的后一项元素。 |

**Return value:**

| Type | Description |
| --- | --- |
| double | number类型。 |

