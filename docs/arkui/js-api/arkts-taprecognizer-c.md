# TapRecognizer

点击手势识别器对象，继承自[GestureRecognizer](arkts-gesturerecognizer-c.md#GestureRecognizer)。

**Inheritance:** TapRecognizerextends: GestureRecognizer.

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## getTapCount

```TypeScript
getTapCount(): number
```

返回预设点击手势识别器连续点击次数阈值。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | 预设点击手势识别器连续点击次数阈值。 取值范围：[0, +∞) |

