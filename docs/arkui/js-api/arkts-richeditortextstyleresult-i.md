# RichEditorTextStyleResult

后端返回的文本样式信息。 在RichEditorTextStyle中，fontWeight是设置字体粗细的输入参数。 RichEditorSymbolSpanStyle和RichEditorSymbolSpanStyleResult中fontWeight的转换关系，与RichEditorTextStyle和 RichEditorTextStyleResult中fontWeight的转换关系一致。

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## strokeWidth

```TypeScript
strokeWidth?: number
```

文本描边宽度。 单位为[vp]common。

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontFeature

```TypeScript
fontFeature?: string
```

文字特性效果。

**Type:** string

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## letterSpacing

```TypeScript
letterSpacing?: number
```

文本字符间距，默认单位为fp。

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontStyle

```TypeScript
fontStyle: FontStyle
```

字体样式。

**Type:** FontStyle

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontFamily

```TypeScript
fontFamily: string
```

字体列表。

**Type:** string

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## strokeJoinStyle

```TypeScript
strokeJoinStyle?: StrokeJoinStyle
```

获取文本描边拐角样式。

**Type:** StrokeJoinStyle

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## lineHeight

```TypeScript
lineHeight?: number
```

文本行高，默认单位为fp。

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontSize

```TypeScript
fontSize: number
```

字体大小，默认单位为fp。

**Type:** number

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## strokeColor

```TypeScript
strokeColor?: ResourceColor
```

文本描边颜色。

**Type:** ResourceColor

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## textShadow

```TypeScript
textShadow?: Array<ShadowOptions>
```

文字阴影效果。 **说明：** 仅支持查询阴影模糊半径、颜色和偏移量。

**Type:** Array<ShadowOptions>

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## decoration

```TypeScript
decoration: DecorationStyleResult
```

文本装饰线样式信息。

**Type:** DecorationStyleResult

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontWeight

```TypeScript
fontWeight: number
```

字体粗细。

**Type:** number

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontColor

```TypeScript
fontColor: ResourceColor
```

文本颜色。

**Type:** ResourceColor

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## textBackgroundStyle

```TypeScript
textBackgroundStyle?: TextBackgroundStyle
```

文本背景样式。

**Type:** TextBackgroundStyle

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## halfLeading

```TypeScript
halfLeading?: boolean
```

文本是否将行间距平分至行的顶部与底部。 true表示将行间距平分至行的顶部与底部，false则不平分。 默认值：false。

**Type:** boolean

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

