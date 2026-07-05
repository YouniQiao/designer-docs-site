# ShouldRecognizerParallelWithCallback

```TypeScript
declare type ShouldRecognizerParallelWithCallback = (current: GestureRecognizer, others: Array<GestureRecognizer>) => GestureRecognizer
```

手势与响应链上其他组件的手势设置并行关系的回调事件类型。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| current | GestureRecognizer | Yes | 当前组件的手势识别器，当前仅支持[GestureType]GestureControl.GestureType.PAN_GESTURE类型的手势识别器。 |
| others | Array&lt;GestureRecognizer> | Yes | 响应链上优先级高于当前组件的其他组件所持有的同类型[GestureType]GestureControl.GestureType的手势识别器。 |

**Return value:**

| Type | Description |
| --- | --- |
| GestureRecognizer | 与current识别器绑定并行关系的某个手势识别器。 |

