# RotationRecognizer

旋转手势识别器对象，继承于[GestureRecognizer](arkts-gesturerecognizer-c.md#GestureRecognizer)。

**继承实现关系：** RotationRecognizer继承自：GestureRecognizer。

**起始版本：** 18

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## getAngle

```TypeScript
getAngle(): number
```

返回预设旋转手势识别器触发旋转手势最小改变度数阈值。

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | 预设旋转手势识别器触发旋转手势最小改变度数阈值，单位为deg。 取值范围：  [0, +∞) 说明： 当输入的改变度数的值小于等于0或大于360时，会被转化为默认值，默认值为1。 |

