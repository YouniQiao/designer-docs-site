# TreeMapForEachCb

```TypeScript
export type TreeMapForEachCb<K, V> = (value: V, key: K, map: TreeMap<K, V>) => void
```

TreeMap的回调函数类型。

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | V | 是 | 当前元素的值。 |
| key | K | 是 | 当前元素的键。 |
| map | TreeMap&lt;K, V> | 是 | 当前正在遍历的TreeMap实例。 |

