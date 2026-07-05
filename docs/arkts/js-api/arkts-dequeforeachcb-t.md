# DequeForEachCb

```TypeScript
export type DequeForEachCb<T> = (value: T, index: int, deque: Deque<T>) => void
```

Deque的forEach回调函数类型。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | T | Yes | 当前正在处理的元素。 |
| index | int | Yes | 当前元素的下标。 |
| deque | Deque&lt;T> | Yes | 当前正在遍历的Deque实例。 |

