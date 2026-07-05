# Transformer

```TypeScript
type Transformer = (this: ISendable, key: string,
      value: ISendable | undefined | null) => ISendable | undefined | null
```

转换结果函数的类型。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

| 类型 | 说明 |
| --- | --- |
| (this: ISendable, key: string,
      value: ISendable |  |
| undefined |  |
| null) => ISendable |  |
| undefined |  |
| null |  |

