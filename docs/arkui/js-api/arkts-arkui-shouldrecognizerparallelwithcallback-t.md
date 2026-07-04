# ShouldRecognizerParallelWithCallback

```TypeScript
declare type ShouldRecognizerParallelWithCallback = (current: GestureRecognizer, others: Array<GestureRecognizer>) => GestureRecognizer
```

Represents the callback used to set the parallel relationship between gestures of the current component and gestures of other components in the response chain.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| current | GestureRecognizer | Yes | Gesture recognizer of the current component. Currently only a gesturerecognizer of the [GestureType](../../apis-accessibility-kit/arkts-apis/arkts-accessibility-gesturetype-t.md#gesturetype).PAN_GESTURE type is supported. |
| others | Array&lt;GestureRecognizer&gt; | Yes | Gesture recognizers of the same [GestureType](arkts-arkui-gesturetype-e.md#gesturetype) fromother components with higher priority in the response chain. |

**Return value:**

| Type | Description |
| --- | --- |
| GestureRecognizer | Gesture recognizer that is bound in parallel with the current recognizer. |

