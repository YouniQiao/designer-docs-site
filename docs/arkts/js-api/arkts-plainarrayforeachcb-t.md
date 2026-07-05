# PlainArrayForEachCb

```TypeScript
export type PlainArrayForEachCb<T> = (value: T, key: int, PlainArray: PlainArray<T>) => void
```

PlainArray的回调函数类型。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | T | Yes | 当前元素的值。 |
| key | int | Yes | 当前元素的键。  该值为整数。 |
| PlainArray | PlainArray&lt;T> | Yes | 当前正在遍历的PlainArray实例。 |

