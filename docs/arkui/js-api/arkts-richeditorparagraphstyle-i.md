# RichEditorParagraphStyle

段落样式。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## textDirection

```TypeScript
textDirection?: TextDirection
```

设置文本方向。 默认值：TextDirection.DEFAULT

**Type:** TextDirection

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## wordBreak

```TypeScript
wordBreak?: WordBreak
```

设置断行规则。 默认值：WordBreak.BREAK_WORD

**Type:** WordBreak

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## paragraphSpacing

```TypeScript
paragraphSpacing?: number
```

设置段落间距大小。 单位：fp 段落间距默认大小为0。

**Type:** number

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## lineBreakStrategy

```TypeScript
lineBreakStrategy?: LineBreakStrategy
```

设置折行规则。 默认值：LineBreakStrategy.GREEDY 在wordBreak不等于breakAll的时候生效，不支持连字符。

**Type:** LineBreakStrategy

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## textAlign

```TypeScript
textAlign?: TextAlign
```

设置文本段落在水平方向的对齐方式。默认值：TextAlign.START

**Type:** TextAlign

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## shaderStyle

```TypeScript
shaderStyle?: ShaderStyle
```

设置文本着色器效果。 该接口与[RichEditorTextStyle](arkts-richeditortextstyleresult-i.md#RichEditorTextStyleResult)中的strokeWidth同时设置时，该接口不生效，shaderStyle的优先级高于 [RichEditorTextStyle](arkts-richeditortextstyleresult-i.md#RichEditorTextStyleResult)的fontColor。 **模型约束：** 此接口仅可在Stage模型下使用。

**Type:** ShaderStyle

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## textVerticalAlign

```TypeScript
textVerticalAlign?: TextVerticalAlign
```

设置文本段落在垂直方向的对齐方式。 默认值：TextVerticalAlign.BASELINE

**Type:** TextVerticalAlign

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## leadingMargin

```TypeScript
leadingMargin?: Dimension | LeadingMarginPlaceholder
```

设置文本段落缩进，当段落仅存在ImageSpan或BuilderSpan时，此属性值不生效。参数为Dimension类型时，不支持以Percentage形式设置。默认值：{"size":["0.00px","0.00px"]}

**Type:** Dimension | LeadingMarginPlaceholder

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

