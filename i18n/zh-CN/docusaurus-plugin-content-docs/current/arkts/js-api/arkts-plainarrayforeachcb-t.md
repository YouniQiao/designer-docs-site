# PlainArrayForEachCb

```TypeScript
export type PlainArrayForEachCb<T> = (value: T, key: int, PlainArray: PlainArray<T>) => void
```

PlainArray的回调函数类型。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | T | 是 | 当前元素的值。 |
| key | int | 是 | 当前元素的键。  该值为整数。 |
| PlainArray | PlainArray&lt;T> | 是 | 当前正在遍历的PlainArray实例。 |

