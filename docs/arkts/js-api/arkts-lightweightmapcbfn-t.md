# LightWeightMapCbFn

```TypeScript
export type LightWeightMapCbFn<K, V> = (value: V, key: K, map: LightWeightMap<K, V>) => void
```

LightWeightMap的回调函数类型。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | V | Yes | 当前元素的值。 |
| key | K | Yes | 当前元素的键。 |
| map | LightWeightMap&lt;K, V> | Yes | 当前正在遍历的LightWeightMap实例。 |

