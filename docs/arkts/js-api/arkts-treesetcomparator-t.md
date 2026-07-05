# TreeSetComparator

```TypeScript
export type TreeSetComparator<T> = (firstValue: T, secondValue: T) => double
```

TreeSet的比较器类型。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| firstValue | T | Yes | 第一个比较值。 |
| secondValue | T | Yes | 第二个比较值。 |

**Return value:**

| Type | Description |
| --- | --- |
| double | - 比较结果。 |

