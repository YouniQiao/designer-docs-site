# ShouldBuiltInRecognizerParallelWithCallback

```TypeScript
declare type ShouldBuiltInRecognizerParallelWithCallback = (current: GestureRecognizer, others: Array<GestureRecognizer>) => GestureRecognizer
```

系统内置手势与响应链上其他组件的手势设置并行关系的回调事件类型。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| current | GestureRecognizer | Yes | 当前组件的系统内置手势识别器，当前版本只提供内置的[GestureType]GestureControl.GestureType.PAN_GESTURE类型的手势识别器。 |
| others | Array&lt;GestureRecognizer> | Yes | 响应链上更高优先级的其他组件相同类别的手势识别器。 |

**Return value:**

| Type | Description |
| --- | --- |
| GestureRecognizer | 与current识别器绑定并行关系的某个手势识别器。 |

