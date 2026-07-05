# OnInlineCounterV2Change

```TypeScript
export type OnInlineCounterV2Change = (value: int) => void
```

定义数值内联型CounterV2的值变化回调类型。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | int | Yes | 当前显示的数值。 。  取值范围：(-∞, +∞)。 |

