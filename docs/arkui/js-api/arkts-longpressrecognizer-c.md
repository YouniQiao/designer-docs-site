# LongPressRecognizer

长按手势识别器对象，继承于[GestureRecognizer](arkts-gesturerecognizer-c.md#GestureRecognizer)。

**Inheritance:** LongPressRecognizerextends: GestureRecognizer.

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## getAllowableMovement

```TypeScript
getAllowableMovement(): number
```

获取长按手势识别器识别的手势的最大移动距离。

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | 长按手势识别器识别的手势的最大移动距离，单位为px。 取值范围：(0, +∞) |

## getDuration

```TypeScript
getDuration(): number
```

返回预设长按手势识别器触发长按最短时间阈值。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回预设长按手势识别器触发长按最短时间阈值，单位为ms。 取值范围：[0, +∞) |

## isRepeat

```TypeScript
isRepeat(): boolean
```

返回预设长按手势识别器是否连续触发事件回调。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 预设长按手势识别器是否连续触发事件回调。当绑定长按手势且不会连续触发回调时，返回false。当绑定长按手势且会连续触发回调时，返回true。 |

