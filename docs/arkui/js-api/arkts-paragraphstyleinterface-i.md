# ParagraphStyleInterface

**Since:** 12

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

设置文本段落的断行规则。 默认值：WordBreak.NORMAL

**Type:** WordBreak

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## paragraphSpacing

```TypeScript
paragraphSpacing?: LengthMetrics
```

设置文本段落的段落间距。 段落间距默认大小为0。不支持百分比。

**Type:** LengthMetrics

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## overflow

```TypeScript
overflow?: TextOverflow
```

设置文本段落超长时的显示方式。 默认值：TextOverflow.None 需配合maxLines使用，单独设置不生效。不支持TextOverflow.MARQUEE。

**Type:** TextOverflow

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## tailIndents

```TypeScript
tailIndents?: LengthMetrics | Array<LengthMetrics>
```

指定段落中每行的尾部缩进。 <p><strong>说明</strong>： 当提供单个LengthMetrics值时，所有行共享相同的尾部缩进 当提供数组时，第i个元素指定第i行的尾部缩进。 如果文本行数超过数组长度，则使用数组中的最后一个元素应用至其余的行。 <br>负值被视为0。 </p>。

**Type:** LengthMetrics | Array<LengthMetrics>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## textAlign

```TypeScript
textAlign?: TextAlign
```

设置文本段落在水平方向的对齐方式。 默认值：TextAlign.Start

**Type:** TextAlign

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## shaderStyle

```TypeScript
shaderStyle?: ShaderStyle
```

设置文本着色器效果。 该接口与[TextStyleInterface](arkts-styled_string.md#TextStyleInterface)的strokeWidth同时设置时，该接口不生效，shaderStyle的优先级高于 [TextStyleInterface](arkts-styled_string.md#TextStyleInterface)中的fontColor。

**Type:** ShaderStyle

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## maxLines

```TypeScript
maxLines?: number
```

设置文本段落的最大行数，默认不限制。

**Type:** number

**Since:** 12

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

## leadingMarginSpan

```TypeScript
leadingMarginSpan?: LeadingMarginSpan
```

设置文本段落的自定义缩进。不支持百分比。 默认值：0

**Type:** LeadingMarginSpan

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## textIndent

```TypeScript
textIndent?: LengthMetrics
```

设置文本段落的首行文本缩进。不支持百分比。 默认值：0

**Type:** LengthMetrics

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## leadingMargin

```TypeScript
leadingMargin?: LengthMetrics | LeadingMarginPlaceholder
```

设置文本段落的缩进。不支持百分比。 默认值：0

**Type:** LengthMetrics | LeadingMarginPlaceholder

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

