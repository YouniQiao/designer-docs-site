# RotationRecognizer

旋转手势识别器对象，继承于[GestureRecognizer](arkts-gesturerecognizer-c.md#GestureRecognizer)。

**Inheritance:** RotationRecognizerextends: GestureRecognizer.

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## getAngle

```TypeScript
getAngle(): number
```

返回预设旋转手势识别器触发旋转手势最小改变度数阈值。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | 预设旋转手势识别器触发旋转手势最小改变度数阈值，单位为deg。 取值范围：  [0, +∞) 说明： 当输入的改变度数的值小于等于0或大于360时，会被转化为默认值，默认值为1。 |

