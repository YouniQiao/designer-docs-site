# PinchRecognizer

捏合手势识别器对象，继承于[GestureRecognizer](arkts-gesturerecognizer-c.md#GestureRecognizer)。

**Inheritance:** PinchRecognizerextends: GestureRecognizer.

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## getDistance

```TypeScript
getDistance(): number
```

返回预设捏合手势识别器最小识别距离阈值。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | 预设捏合手势识别器最小识别距离阈值，单位为vp。 取值范围：[0, +∞) |

