# ParagraphStyle

文本段落样式对象说明。 除首个段落外，后续段落按'\n'划分。 每个段落的段落样式按首个占位设置的段落样式生效，未设置时，段落按被绑定组件的段落样式生效。 在API版本26.0.0之前，如果属性字符串段落内首个占位为[CustomSpan](arkts-customspan-c.md#CustomSpan)或[ImageAttachment](arkts-imageattachment-c.md#ImageAttachment)时，设置在该段落上的段落样式不生 效。从API版本26.0.0开始，设置段落样式生效。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(value?: ParagraphStyleInterface)
```

文本段落样式的构造函数。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ParagraphStyleInterface | No |  |

## textDirection

```TypeScript
readonly textDirection?: TextDirection
```

获取文本方向。

**Type:** TextDirection

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## wordBreak

```TypeScript
readonly wordBreak?: WordBreak
```

获取属性字符串文本段落的断行规则。

**Type:** WordBreak

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## paragraphSpacing

```TypeScript
readonly paragraphSpacing?: number
```

获取属性字符串文本段落的段落间距。 单位：vp

**Type:** number

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## overflow

```TypeScript
readonly overflow?: TextOverflow
```

获取属性字符串文本段落超长时的显示方式。

**Type:** TextOverflow

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## tailIndents

```TypeScript
readonly tailIndents?: Array<number>
```

获取StyledString的尾部缩进。 单位为vp。

**Type:** Array<number>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## textAlign

```TypeScript
readonly textAlign?: TextAlign
```

获取属性字符串文本段落在水平方向的对齐方式。

**Type:** TextAlign

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## shaderStyle

```TypeScript
readonly shaderStyle?: ShaderStyle
```

获取文本着色器效果。

**Type:** ShaderStyle

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## maxLines

```TypeScript
readonly maxLines?: number
```

获取属性字符串文本段落的最大行数。

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## textVerticalAlign

```TypeScript
readonly textVerticalAlign?: TextVerticalAlign
```

获取属性字符串文本段落在垂直方向的对齐方式。 一个段落下使用同一字号必须同时设置行高[lineHeight]TextAttribute#lineHeight或者同一个段落不同字号文本混排时才有效果差异，否则设置了该属性任意枚举值和未设置该属性都是一样的排版效 果。属性字符串[TextStyle](arkts-textstyle-c.md#TextStyle)中的SuperscriptStyle上下角标样式仅在[TextVerticalAlign]TextVerticalAlign属性值为 TextVerticalAlign.BASELINE时生效，其余垂直对齐方式下上下角标文本和普通文本表现一致，无上下角标效果。

**Type:** TextVerticalAlign

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## leadingMarginSpan

```TypeScript
readonly leadingMarginSpan?: LeadingMarginSpan
```

获取属性字符串文本段落的自定义缩进信息。

**Type:** LeadingMarginSpan

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## textIndent

```TypeScript
readonly textIndent?: number
```

获取属性字符串文本段落的首行文本缩进。单位VP

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## leadingMargin

```TypeScript
readonly leadingMargin?: number | LeadingMarginPlaceholder
```

获取属性字符串文本段落的缩进。 返回为number类型时，单位为vp。

**Type:** number | LeadingMarginPlaceholder

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

