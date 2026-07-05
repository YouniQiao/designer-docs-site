# SwipeRecognizer

快滑手势识别器对象，继承于[GestureRecognizer](arkts-gesturerecognizer-c.md#GestureRecognizer)。

**Inheritance:** SwipeRecognizerextends: GestureRecognizer.

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## getDirection

```TypeScript
getDirection(): SwipeDirection
```

返回预设快滑手势识别器触发快滑手势滑动方向。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| SwipeDirection | 预设快滑手势识别器触发快滑手势滑动方向。 |

## getVelocityThreshold

```TypeScript
getVelocityThreshold(): number
```

返回预设快滑手势识别器识别滑动最小速度阈值。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | 预设快滑手势识别器识别滑动最小速度阈值，单位为vp/s。 取值范围：[0, +∞) |

