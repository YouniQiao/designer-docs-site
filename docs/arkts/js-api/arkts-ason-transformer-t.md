# Transformer

```TypeScript
type Transformer = (this: ISendable, key: string,
      value: ISendable | undefined | null) => ISendable | undefined | null
```

转换结果函数的类型。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

| Type | Description |
| --- | --- |
| (this: ISendable, key: string,
      value: ISendable |  |
| undefined |  |
| null) => ISendable |  |
| undefined |  |
| null |  |

