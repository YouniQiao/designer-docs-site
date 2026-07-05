# ArrayListReplaceCb

```TypeScript
export type ArrayListReplaceCb<T> =  (value: T, index: int, arrlist: ArrayList<T>) => T
```

ArrayList的回调函数类型。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | T | 是 | 当前正在处理的元素。 |
| index | int | 是 | 当前元素的下标。 |
| arrlist | ArrayList&lt;T> | 是 | 当前正在遍历的ArrayList实例。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T | 此回调返回替换后的元素。 |

