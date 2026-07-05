# QueueForEachCb

```TypeScript
export type QueueForEachCb<T> = (value: T, index: int, queue: Queue<T>) => void
```

Queue的回调函数类型。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | T | Yes | 当前遍历到的元素。 |
| index | int | Yes | 当前遍历到的下标值。  该值为整数。 |
| queue | Queue&lt;T> | Yes | 当前正在遍历的Queue实例。 |

