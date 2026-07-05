# LinkedListForEachCb

```TypeScript
export type LinkedListForEachCb<T> = (value: T, index: int, linkedList: LinkedList<T>) => void
```

LinkedList的回调函数类型。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | T | Yes | 当前元素的值。 |
| index | int | Yes | 当前元素的下标。  该值为整数。 |
| linkedList | LinkedList&lt;T> | Yes | 当前正在遍历的LinkedList实例。 |

