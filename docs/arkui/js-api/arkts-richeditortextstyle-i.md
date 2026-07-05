# RichEditorTextStyle

文本样式信息。

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## strokeWidth

```TypeScript
strokeWidth?: LengthMetrics | number
```

文本描边宽度。如果LengthMetrics的unit值是[PERCENT]./../../../arkui/Graphics:LengthUnit，当前设置不生效，作为0处理。 值小于0时为实体字，大于0时为轮廓字，等于0时无描边效果。 默认值：0vp。 单位：LengthMetrics类型时跟随LengthMetrics，number类型时是vp。 取值范围：(-∞, +∞) **模型约束：** 此接口仅可在Stage模型下使用。

**Type:** LengthMetrics | number

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
letterSpacing?: number | string
```

文本字符间距，默认单位为fp。

**Type:** number | string

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontStyle

```TypeScript
fontStyle?: FontStyle
```

字体样式。

**Type:** FontStyle

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontFamily

```TypeScript
fontFamily?: ResourceStr
```

字体列表。

**Type:** ResourceStr

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## strokeJoinStyle

```TypeScript
strokeJoinStyle?: StrokeJoinStyle
```

文本描边拐角样式。 默认值：StrokeJoinStyle.MITER_JOIN。 **模型约束：** 此接口仅可在Stage模型下使用。

**Type:** StrokeJoinStyle

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## lineHeight

```TypeScript
lineHeight?: number | string | Resource
```

文本行高，默认单位为fp。

**Type:** number | string | Resource

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontSize

```TypeScript
fontSize?: Length | number
```

字体大小，默认单位为fp。

**Type:** Length | number

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## strokeColor

```TypeScript
strokeColor?: ResourceColor
```

文本描边颜色。 默认值：跟随字体颜色。 设置异常值时跟随字体颜色。

**Type:** ResourceColor

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## textShadow

```TypeScript
textShadow?: ShadowOptions | Array<ShadowOptions>
```

设置文字阴影效果。该接口支持以数组形式入参，实现多重文字阴影。 **说明：** 仅支持设置阴影模糊半径、颜色和偏移量，不支持智能取色。

**Type:** ShadowOptions | Array<ShadowOptions>

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## decoration

```TypeScript
decoration?: DecorationStyleInterface
```

设置文本装饰线的样式、颜色和粗细。 type默认值：TextDecorationType.None color默认值：跟随字体颜色。 style默认值：TextDecorationStyle.SOLID thicknessScale默认值：1.0

**Type:** DecorationStyleInterface

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontWeight

```TypeScript
fontWeight?: number | FontWeight | string
```

字体粗细。

**Type:** number | FontWeight | string

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontColor

```TypeScript
fontColor?: ResourceColor
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

