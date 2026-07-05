# TreeSetForEachCb

```TypeScript
export type TreeSetForEachCb<T> = (value: T, key: T, set: TreeSet<T>) => void
```

TreeSet的回调函数类型。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | T | Yes | 当前元素的值。 |
| key | T | Yes | 当前元素的键（与value相同）。 |
| set | TreeSet&lt;T> | Yes | 当前正在遍历的TreeSet实例。 |

