# ParagraphStyle

Describes the text paragraph style.

Except the first paragraph, all paragraphs are formed using the escape character '\n'.

The style of a paragraph is the one (if any) set for the first element or the paragraph style of the bound component.

Before API version 26.0.0, if the first placeholder in a paragraph of the styled string is a [CustomSpan](arkts-arkui-customspan-c.md) or [ImageAttachment](arkts-arkui-imageattachment-c.md), the paragraph style set for that paragraph does not take effect. From API version 26.0.0, the paragraph style takes effect.

**Since:** 12

<!--Device-unnamed-declare class ParagraphStyle--><!--Device-unnamed-declare class ParagraphStyle-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="constructor"></a>
## constructor

```TypeScript
constructor(value?: ParagraphStyleInterface)
```

A constructor used to create a text paragraph style.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ParagraphStyle-constructor(value?: ParagraphStyleInterface)--><!--Device-ParagraphStyle-constructor(value?: ParagraphStyleInterface)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ParagraphStyleInterface](arkts-arkui-paragraphstyleinterface-i.md) | No | Paragraph style options. |

## leadingMargin

```TypeScript
readonly leadingMargin?: number | LeadingMarginPlaceholder
```

Indent of the text paragraph.

If the return value is of the number type, the unit is vp.

**Type:** number \| LeadingMarginPlaceholder

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ParagraphStyle-readonly leadingMargin?: number | LeadingMarginPlaceholder--><!--Device-ParagraphStyle-readonly leadingMargin?: number | LeadingMarginPlaceholder-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## leadingMarginSpan

```TypeScript
readonly leadingMarginSpan?: LeadingMarginSpan
```

Custom indentation information for text paragraphs in the styled string.

**Type:** LeadingMarginSpan

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ParagraphStyle-readonly leadingMarginSpan?: LeadingMarginSpan--><!--Device-ParagraphStyle-readonly leadingMarginSpan?: LeadingMarginSpan-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## maxLines

```TypeScript
readonly maxLines?: number
```

Maximum number of lines in the text paragraph.

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ParagraphStyle-readonly maxLines?: number--><!--Device-ParagraphStyle-readonly maxLines?: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## overflow

```TypeScript
readonly overflow?: TextOverflow
```

Display mode when the text is too long in the text paragraph.

**Type:** TextOverflow

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ParagraphStyle-readonly overflow?: TextOverflow--><!--Device-ParagraphStyle-readonly overflow?: TextOverflow-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## paragraphSpacing

```TypeScript
readonly paragraphSpacing?: number
```

Paragraph spacing of the styled string text.

Unit: vp

**Type:** number

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-ParagraphStyle-readonly paragraphSpacing?: number--><!--Device-ParagraphStyle-readonly paragraphSpacing?: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## shaderStyle

```TypeScript
readonly shaderStyle?: ShaderStyle
```

Text shader effect.

**Since**: 26.0.0.

**Type:** ShaderStyle

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ParagraphStyle-readonly shaderStyle?: ShaderStyle--><!--Device-ParagraphStyle-readonly shaderStyle?: ShaderStyle-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## tailIndents

```TypeScript
readonly tailIndents?: Array<number>
```

Get the tail indentation of the StyledString.The unit is vp.

**Type:** Array&lt;number&gt;

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ParagraphStyle-readonly tailIndents?: Array<number>--><!--Device-ParagraphStyle-readonly tailIndents?: Array<number>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## textAlign

```TypeScript
readonly textAlign?: TextAlign
```

Horizontal alignment mode of the text paragraph.

**Type:** TextAlign

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ParagraphStyle-readonly textAlign?: TextAlign--><!--Device-ParagraphStyle-readonly textAlign?: TextAlign-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## textDirection

```TypeScript
readonly textDirection?: TextDirection
```

Text direction.

**Type:** TextDirection

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-ParagraphStyle-readonly textDirection?: TextDirection--><!--Device-ParagraphStyle-readonly textDirection?: TextDirection-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## textIndent

```TypeScript
readonly textIndent?: number
```

First line indent of the text paragraph.

Unit: VP.

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ParagraphStyle-readonly textIndent?: number--><!--Device-ParagraphStyle-readonly textIndent?: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## textVerticalAlign

```TypeScript
readonly textVerticalAlign?: TextVerticalAlign
```

Vertical alignment mode of the text paragraph.

The effect of this attribute is noticeable only when the same font size is used in a paragraph and [lineHeight](TextAttribute#lineHeight) is set, or when different font sizes are used in a paragraph and the font sizes are mixed. The **SuperscriptStyle** in [TextStyle](arkts-arkui-textstyle-c.md) takes effect only when the value of [TextVerticalAlign](arkts-arkui-textverticalalign-e.md) is set to **TextVerticalAlign.BASELINE**. In other vertical alignment modes, the superscript and subscript texts are displayed in the same way as the normal text.

**Type:** TextVerticalAlign

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-ParagraphStyle-readonly textVerticalAlign?: TextVerticalAlign--><!--Device-ParagraphStyle-readonly textVerticalAlign?: TextVerticalAlign-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## wordBreak

```TypeScript
readonly wordBreak?: WordBreak
```

Word break rule of the text paragraph.

**Type:** WordBreak

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ParagraphStyle-readonly wordBreak?: WordBreak--><!--Device-ParagraphStyle-readonly wordBreak?: WordBreak-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

