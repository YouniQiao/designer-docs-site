# Transformer

```TypeScript
type Transformer = (this: Object, key: string, value: Object) => Object | undefined | null
```

定义转换结果函数的类型。 当作为[JSON.parse]json.parse的参数时，对象的每个成员都会调用此函数，可在解析期间进行自定义数据处理或转换。 当作为 [JSON.stringify]json.stringify(value: Object, replacer?: Transformer, space?: string | number)的参数时， 在序列化期间用于转换和处理每个属性。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

| Type | Description |
| --- | --- |
| (this: Object, key: string, value: Object) => Object |  |
| undefined |  |
| null |  |

