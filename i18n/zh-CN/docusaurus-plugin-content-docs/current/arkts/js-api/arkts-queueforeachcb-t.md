# QueueForEachCb

```TypeScript
export type QueueForEachCb<T> = (value: T, index: int, queue: Queue<T>) => void
```

Queue的回调函数类型。

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | T | 是 | 当前遍历到的元素。 |
| index | int | 是 | 当前遍历到的下标值。  该值为整数。 |
| queue | Queue&lt;T> | 是 | 当前正在遍历的Queue实例。 |

