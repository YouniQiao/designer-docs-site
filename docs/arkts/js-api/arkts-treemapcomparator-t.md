# TreeMapComparator

```TypeScript
export type TreeMapComparator<K> = (firstValue: K, secondValue: K) => double
```

TreeMap的比较器类型。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| firstValue | K | Yes | 第一个比较值。 |
| secondValue | K | Yes | 第二个比较值。 |

**Return value:**

| Type | Description |
| --- | --- |
| double | - 比较结果。 |

