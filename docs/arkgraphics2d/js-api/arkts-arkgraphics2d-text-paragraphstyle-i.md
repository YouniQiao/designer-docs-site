# ParagraphStyle

Describes a paragraph style.

**Since:** 12

<!--Device-text-interface ParagraphStyle--><!--Device-text-interface ParagraphStyle-End-->

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { text } from '@kit.ArkGraphics2D';
```

## align

```TypeScript
align?: TextAlign
```

Text alignment mode. The default value is **START**. This parameter is invalid when the **tab** parameter is configured.

**Type:** TextAlign

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ParagraphStyle-align?: TextAlign--><!--Device-ParagraphStyle-align?: TextAlign-End-->

**System capability:** SystemCapability.Graphics.Drawing

## autoSpace

```TypeScript
autoSpace?: boolean
```

Sets whether to enable automatic spacing during text typography. **true** indicates that the automatic spacing feature is enabled. In this case, automatic spacing applies between CJK (Chinese, Japanese, and Korean) and Western characters (Latin, Cyrillic, and Greek), between CJK and digits, between CJK and copyright symbols,between copyright symbols and digits, and between copyright symbols and Western characters. **false** (default)indicates that the automatic spacing feature is disabled.

**Type:** boolean

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ParagraphStyle-autoSpace?: boolean--><!--Device-ParagraphStyle-autoSpace?: boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

## breakStrategy

```TypeScript
breakStrategy?: BreakStrategy
```

Text break strategy. The default value is **GREEDY**.

**Type:** BreakStrategy

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ParagraphStyle-breakStrategy?: BreakStrategy--><!--Device-ParagraphStyle-breakStrategy?: BreakStrategy-End-->

**System capability:** SystemCapability.Graphics.Drawing

## compressHeadPunctuation

```TypeScript
compressHeadPunctuation?: boolean
```

Sets whether to use punctuation compression at the beginning of a line in text layout. **true** means yes;**false** otherwise. The default value is **false**.

**NOTE**

1. The font file must support the ss08 feature in [FontFeature](arkts-arkgraphics2d-text-fontfeature-i.md).Otherwise, compression cannot be performed.2. Only the punctuations within the punctuation compression range at the beginning of a line are in the scope of this feature.

Punctuation range at the beginning of a line.  
| Punctuation| Unicode Code Point| Unicode Name|  
|---------|---------|-------------|  
| 「| U+300C | LEFT CORNER BRACKET |  
| 『| U+300E | LEFT WHITE CORNER BRACKET |  
| " | U+201C | LEFT DOUBLE QUOTATION MARK |  
| ' | U+2018 | LEFT SINGLE QUOTATION MARK |  
| （| U+FF08 | FULLWIDTH LEFT PARENTHESIS |  
| 《| U+300A | LEFT DOUBLE ANGLE BRACKET |  
| 〈| U+3008 | LEFT ANGLE BRACKET |  
| 【| U+3010 | LEFT BLACK LENTICULAR BRACKET |  
| 〖| U+3016 | LEFT WHITE LENTICULAR BRACKET |  
| 〔| U+3014 | LEFT TORTOISE SHELL BRACKET |  
| ［| U+FF3B | FULLWIDTH LEFT SQUARE BRACKET |  
| ｛| U+FF5B | FULLWIDTH LEFT CURLY BRACKET |

**Type:** boolean

**Since:** 23

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-ParagraphStyle-compressHeadPunctuation?: boolean--><!--Device-ParagraphStyle-compressHeadPunctuation?: boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

## fallbackLineSpacing

```TypeScript
fallbackLineSpacing?: boolean
```

Sets whether to enable line height rollback during text layout. If the set line height is less than the actual line height, the line height is rolled back to the actual line height. **true** means yes; **false** otherwise.The default value is **false**.

**Type:** boolean

**Since:** 23

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-ParagraphStyle-fallbackLineSpacing?: boolean--><!--Device-ParagraphStyle-fallbackLineSpacing?: boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

## firstLineHeadIndent

```TypeScript
firstLineHeadIndent?: number
```

Sets the first-line indent of a paragraph. The indent value must be greater than or equal to 0. The default value is **0**.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ParagraphStyle-firstLineHeadIndent?: double--><!--Device-ParagraphStyle-firstLineHeadIndent?: double-End-->

**System capability:** SystemCapability.Graphics.Drawing

## headIndents

```TypeScript
headIndents?: Array<number>
```

Sets the line-start indent array. Each element in the array represents the indent value of a single line. If the actual number of text lines exceeds the length of the indent array, the last value of the array is applied to the extra lines. All indent values must be greater than or equal to 0. By default, the array is empty.

**Type:** Array<number>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ParagraphStyle-headIndents?: Array<double>--><!--Device-ParagraphStyle-headIndents?: Array<double>-End-->

**System capability:** SystemCapability.Graphics.Drawing

## includeFontPadding

```TypeScript
includeFontPadding?: boolean
```

Sets whether to use padding at the beginning and end of a line in text layout. **true** means yes; **false** otherwise. The default value is **false**.

**Type:** boolean

**Since:** 23

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-ParagraphStyle-includeFontPadding?: boolean--><!--Device-ParagraphStyle-includeFontPadding?: boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

## lineSpacing

```TypeScript
lineSpacing?: number
```

Line spacing, in physical pixels (px). The default value is **0**. **lineSpacing** is not restricted by **lineHeightMaximum** and **lineHeightMinimum** in [TextStyle](arkts-arkgraphics2d-text-textstyle-i.md). By default, the line spacing is reserved for the last line. You can set [TextStyle](arkts-arkgraphics2d-text-textstyle-i.md).textHeightBehavior to **DISABLE_ALL** or **DISABLE_LAST_ASCENT** to disable the line spacing for the last line.

**Type:** number

**Since:** 21

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ParagraphStyle-lineSpacing?: double--><!--Device-ParagraphStyle-lineSpacing?: double-End-->

**System capability:** SystemCapability.Graphics.Drawing

## maxLines

```TypeScript
maxLines?: number
```

Maximum number of lines. The value is an integer. The default value is **1e9**.

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ParagraphStyle-maxLines?: int--><!--Device-ParagraphStyle-maxLines?: int-End-->

**System capability:** SystemCapability.Graphics.Drawing

## orphanCharOptimization

```TypeScript
orphanCharOptimization?: boolean
```

Sets whether to enable orphan optimization during text typesetting. Orphan optimization improves text layout by more efficiently handling orphan characters (the first character in the last line of a paragraph). When enabled,it adjusts line break positions to avoid orphan characters as much as possible. Orphan optimization takes effect only when [wordBreak](arkts-arkgraphics2d-text-wordbreak-e.md) is not BREAK_ALL and the [locale](arkts-arkgraphics2d-text-textstyle-i.md) of the first [TextStyle](arkts-arkgraphics2d-text-textstyle-i.md) of the text to be typeset is "zh-Hans" or "zh-Hant". **true** means that orphan optimization is enabled, and **false** means the opposite. The default value is **false**.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ParagraphStyle-orphanCharOptimization?: boolean--><!--Device-ParagraphStyle-orphanCharOptimization?: boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

## punctuationOverflow

```TypeScript
punctuationOverflow?: boolean
```

Whether to enable punctuation overflow.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ParagraphStyle-punctuationOverflow?: boolean--><!--Device-ParagraphStyle-punctuationOverflow?: boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

## strutStyle

```TypeScript
strutStyle?: StrutStyle
```

Strut style. The default value is the initial **StrutStyle** object.

**Type:** StrutStyle

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ParagraphStyle-strutStyle?: StrutStyle--><!--Device-ParagraphStyle-strutStyle?: StrutStyle-End-->

**System capability:** SystemCapability.Graphics.Drawing

## tab

```TypeScript
tab?: TextTab
```

Alignment mode and position of the text after the tab character in a paragraph. By default, the tab character is replaced with a space. This parameter is invalid when it is used together with the **align** parameter or the **ellipsis** parameter in [TextStyle](arkts-arkgraphics2d-text-textstyle-i.md).

**Type:** TextTab

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ParagraphStyle-tab?: TextTab--><!--Device-ParagraphStyle-tab?: TextTab-End-->

**System capability:** SystemCapability.Graphics.Drawing

## tailIndents

```TypeScript
tailIndents?: Array<number>
```

Sets the end-of-line indent array. Each element in the array represents the indent value of a single line. If the actual number of text lines exceeds the length of the indent array, the last value of the array is applied to the extra lines. All indent values must be greater than or equal to 0. By default, the array is empty.

**Type:** Array<number>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ParagraphStyle-tailIndents?: Array<double>--><!--Device-ParagraphStyle-tailIndents?: Array<double>-End-->

**System capability:** SystemCapability.Graphics.Drawing

## textDirection

```TypeScript
textDirection?: TextDirection
```

Text direction. The default value is **LTR**.

**Type:** TextDirection

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ParagraphStyle-textDirection?: TextDirection--><!--Device-ParagraphStyle-textDirection?: TextDirection-End-->

**System capability:** SystemCapability.Graphics.Drawing

## textHeightBehavior

```TypeScript
textHeightBehavior?: TextHeightBehavior
```

Text height modifier pattern. The default value is **ALL**.

**Type:** TextHeightBehavior

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ParagraphStyle-textHeightBehavior?: TextHeightBehavior--><!--Device-ParagraphStyle-textHeightBehavior?: TextHeightBehavior-End-->

**System capability:** SystemCapability.Graphics.Drawing

## textStyle

```TypeScript
textStyle?: TextStyle
```

Text style applied to the paragraph. The default value is the initial text style.

**Type:** TextStyle

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ParagraphStyle-textStyle?: TextStyle--><!--Device-ParagraphStyle-textStyle?: TextStyle-End-->

**System capability:** SystemCapability.Graphics.Drawing

## trailingSpaceOptimized

```TypeScript
trailingSpaceOptimized?: boolean
```

Whether to consider the alignment impact of trailing spaces during text layout. The value **true** indicates that the alignment impact of trailing spaces is ignored, and the value **false** indicates that the alignment impact of trailing spaces is considered. The default value is **false**.

**Type:** boolean

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ParagraphStyle-trailingSpaceOptimized?: boolean--><!--Device-ParagraphStyle-trailingSpaceOptimized?: boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

## verticalAlign

```TypeScript
verticalAlign?: TextVerticalAlign
```

Vertical alignment of text. This parameter takes effect when line height scaling (that is, **heightScale** of [TextStyle](arkts-arkgraphics2d-text-textstyle-i.md)) is enabled or different font sizes (that is, **fontSize** of [TextStyle](arkts-arkgraphics2d-text-textstyle-i.md)) are set for text in a line. If superscript and subscript text (that is,**badgeType** of [TextStyle](arkts-arkgraphics2d-text-textstyle-i.md)) is set in a line, the superscript and subscript text will participate in vertical alignment as common text.

**Type:** TextVerticalAlign

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ParagraphStyle-verticalAlign?: TextVerticalAlign--><!--Device-ParagraphStyle-verticalAlign?: TextVerticalAlign-End-->

**System capability:** SystemCapability.Graphics.Drawing

## wordBreak

```TypeScript
wordBreak?: WordBreak
```

Word break type. The default value is **BREAK_WORD**.

**Type:** WordBreak

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ParagraphStyle-wordBreak?: WordBreak--><!--Device-ParagraphStyle-wordBreak?: WordBreak-End-->

**System capability:** SystemCapability.Graphics.Drawing

