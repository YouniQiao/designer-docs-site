# HashMapCbFn

```TypeScript
export type HashMapCbFn<K, V> = (value: V, key: K, map: HashMap<K, V>) => void
```

HashMap的回调函数类型。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | V | Yes | 当前键值对的值。 |
| key | K | Yes | 当前键值对的键。 |
| map | HashMap&lt;K, V> | Yes | 当前正在遍历的HashMap实例。 |

