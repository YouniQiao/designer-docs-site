# HashSetCbFn

```TypeScript
export type HashSetCbFn<T> = (value: T, key: T, set: HashSet<T>) => void
```

HashSet的回调函数类型。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | T | Yes | 当前正在处理的元素。 |
| key | T | Yes | [已废弃] HashSet不使用键值对，此参数仅为API兼容性保留。 |
| set | HashSet&lt;T> | Yes | 当前正在遍历的HashSet实例。 |

