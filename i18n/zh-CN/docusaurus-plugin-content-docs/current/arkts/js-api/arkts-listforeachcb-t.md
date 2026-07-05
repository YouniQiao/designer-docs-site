# ListForEachCb

```TypeScript
export type ListForEachCb<T> = (value: T, index: int, list: List<T>) => void
```

List的回调函数类型。

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | T | 是 | 当前元素的值。 |
| index | int | 是 | 当前元素的下标。  该值为整数。 |
| list | List&lt;T> | 是 | 当前正在遍历的List实例。 |

