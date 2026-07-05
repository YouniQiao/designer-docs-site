# LightWeightSetForEachCb

```TypeScript
export type LightWeightSetForEachCb<T> = (value: T, key: T, set: LightWeightSet<T>) => void
```

LightWeightSet的回调函数类型。

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | T | 是 | 当前元素的值。 |
| key | T | 是 | 当前元素的键（与value相同）。 |
| set | LightWeightSet&lt;T> | 是 | 当前正在遍历的LightWeightSet实例。 |

