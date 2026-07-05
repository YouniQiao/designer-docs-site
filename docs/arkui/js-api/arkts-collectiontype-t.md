# CollectionType

```TypeScript
export declare type CollectionType<S> = Array<S> | Map<string | number, S> |
  Set<S> | collections.Array<S> | collections.Map<string | number, S> | collections.Set<S>
```

globalConnect的入参泛型，用于定义globalConnect支持的持久化集合数据类型。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

| Type | Description |
| --- | --- |
| Array&lt;S> |  |
| Map&lt;string |  |
| number, S> |  |
| Set&lt;S> |  |
| collections.Array&lt;S> |  |
| collections.Map&lt;string |  |
| number, S> |  |
| collections.Set&lt;S> |  |

