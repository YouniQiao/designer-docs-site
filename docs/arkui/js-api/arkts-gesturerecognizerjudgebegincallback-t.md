# GestureRecognizerJudgeBeginCallback

```TypeScript
declare type GestureRecognizerJudgeBeginCallback = (event: BaseGestureEvent, current: GestureRecognizer, recognizers: Array<GestureRecognizer>, touchRecognizers?: Array<TouchRecognizer>) => GestureJudgeResult
```

自定义手势识别器判定回调类型。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | BaseGestureEvent | Yes | 当前基础手势事件信息。 |
| current | GestureRecognizer | Yes | 当前即将要响应的识别器对象。 |
| recognizers | Array&lt;GestureRecognizer> | Yes | 响应链上的其他手势识别器对象。 |
| touchRecognizers | Array&lt;TouchRecognizer> | no |  |

**Return value:**

| Type | Description |
| --- | --- |
| GestureJudgeResult | 手势是否裁决成功的判定结果。 |

