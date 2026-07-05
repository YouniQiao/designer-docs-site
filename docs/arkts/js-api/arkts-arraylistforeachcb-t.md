# ArrayListForEachCb

```TypeScript
export type ArrayListForEachCb<T> =  (value: T, index: int, arrlist: ArrayList<T>) => void
```

ArrayList的回调函数类型。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | T | Yes | 当前正在处理的元素。 |
| index | int | Yes | 当前元素的下标。 |
| arrlist | ArrayList&lt;T> | Yes | 当前正在遍历的ArrayList实例。 |

