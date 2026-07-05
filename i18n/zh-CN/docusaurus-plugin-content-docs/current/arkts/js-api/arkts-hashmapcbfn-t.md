# HashMapCbFn

```TypeScript
export type HashMapCbFn<K, V> = (value: V, key: K, map: HashMap<K, V>) => void
```

HashMap的回调函数类型。

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | V | 是 | 当前键值对的值。 |
| key | K | 是 | 当前键值对的键。 |
| map | HashMap&lt;K, V> | 是 | 当前正在遍历的HashMap实例。 |

