# ListForEachCb

```TypeScript
export type ListForEachCb<T> = (value: T, index: int, list: List<T>) => void
```

List的回调函数类型。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | T | Yes | 当前元素的值。 |
| index | int | Yes | 当前元素的下标。  该值为整数。 |
| list | List&lt;T> | Yes | 当前正在遍历的List实例。 |

