# StackForEachCb

```TypeScript
export type StackForEachCb<T> = (value: T, index: int, stack: Stack<T>) => void
```

Stack的回调函数类型。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | T | Yes | 当前遍历到的元素。 |
| index | int | Yes | 当前遍历到的下标值。  该值为整数。 |
| stack | Stack&lt;T> | Yes | 当前正在遍历的Stack实例。 |

