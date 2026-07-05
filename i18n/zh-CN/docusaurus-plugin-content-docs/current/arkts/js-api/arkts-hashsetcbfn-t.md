# HashSetCbFn

```TypeScript
export type HashSetCbFn<T> = (value: T, key: T, set: HashSet<T>) => void
```

HashSet的回调函数类型。

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | T | 是 | 当前正在处理的元素。 |
| key | T | 是 | [已废弃] HashSet不使用键值对，此参数仅为API兼容性保留。 |
| set | HashSet&lt;T> | 是 | 当前正在遍历的HashSet实例。 |

