# LightWeightSetForEachCb

```TypeScript
export type LightWeightSetForEachCb<T> = (value: T, key: T, set: LightWeightSet<T>) => void
```

LightWeightSet的回调函数类型。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | T | Yes | 当前元素的值。 |
| key | T | Yes | 当前元素的键（与value相同）。 |
| set | LightWeightSet&lt;T> | Yes | 当前正在遍历的LightWeightSet实例。 |

