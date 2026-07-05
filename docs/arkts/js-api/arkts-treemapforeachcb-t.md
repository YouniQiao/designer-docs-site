# TreeMapForEachCb

```TypeScript
export type TreeMapForEachCb<K, V> = (value: V, key: K, map: TreeMap<K, V>) => void
```

TreeMap的回调函数类型。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | V | Yes | 当前元素的值。 |
| key | K | Yes | 当前元素的键。 |
| map | TreeMap&lt;K, V> | Yes | 当前正在遍历的TreeMap实例。 |

