# DecorationStyleInterface

文本装饰线样式接口对象说明。 > **说明：** > > 当文字的下边缘轮廓与装饰线位置相交时，会触发下划线避让规则，下划线将在这些字符处避让文字。常见“gjyqp”等英文字符。 > > 当文本装饰线的颜色设置为Color.Transparent时，装饰线颜色设置为跟随每行第一个字的字体颜色。当文本装饰线的颜色设置为透明色16进制对应值“#00FFFFFF”时，装饰线颜色设置为透明色。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## thicknessScale

```TypeScript
thicknessScale?: number
```

装饰线粗细缩放。 默认值：1.0 取值范围：[0, +∞) **说明：** 负值按默认值处理。

**Type:** number

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## color

```TypeScript
color?: ResourceColor
```

装饰线颜色。 默认值：Color.Black

**Type:** ResourceColor

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## style

```TypeScript
style?: TextDecorationStyle
```

装饰线样式。 默认值：TextDecorationStyle.SOLID

**Type:** TextDecorationStyle

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## type

```TypeScript
type: TextDecorationType
```

装饰线类型。 默认值：TextDecorationType.None

**Type:** TextDecorationType

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

