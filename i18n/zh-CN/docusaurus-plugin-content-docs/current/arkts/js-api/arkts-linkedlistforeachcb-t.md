# LinkedListForEachCb

```TypeScript
export type LinkedListForEachCb<T> = (value: T, index: int, linkedList: LinkedList<T>) => void
```

LinkedList的回调函数类型。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | T | 是 | 当前元素的值。 |
| index | int | 是 | 当前元素的下标。  该值为整数。 |
| linkedList | LinkedList&lt;T> | 是 | 当前正在遍历的LinkedList实例。 |

