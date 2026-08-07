# TextStyle

Describes a text style.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

<!--Device-text-interface TextStyle--><!--Device-text-interface TextStyle-End-->

**System capability:** SystemCapability.Graphics.Drawing

## backgroundRect

```TypeScript
backgroundRect?: RectStyle
```

Rectangle style.

**Type:** RectStyle

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TextStyle-backgroundRect?: RectStyle--><!--Device-TextStyle-backgroundRect?: RectStyle-End-->

**System capability:** SystemCapability.Graphics.Drawing

## badgeType

```TypeScript
badgeType?: TextBadgeType
```

Sets whether to use superscript or subscript in text layout. **TEXT\_SUPERSCRIPT** indicates that superscript is enabled, and **TEXT\_SUBSCRIPT** indicates that subscript is enabled. The default value is **TEXT\_BADGE\_NONE**,indicating that neither superscript nor subscript is enabled.

**Type:** TextBadgeType

**Since:** 20

**ArkTS mode:** ArkTS-Dyn since version 20; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TextStyle-badgeType?: TextBadgeType--><!--Device-TextStyle-badgeType?: TextBadgeType-End-->

**System capability:** SystemCapability.Graphics.Drawing

## baseline

```TypeScript
baseline?: TextBaseline
```

Text baseline type. The default value is **ALPHABETIC**.

**Type:** TextBaseline

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TextStyle-baseline?: TextBaseline--><!--Device-TextStyle-baseline?: TextBaseline-End-->

**System capability:** SystemCapability.Graphics.Drawing

## baselineShift

```TypeScript
baselineShift?: double
```

Underline offset of text, a floating-point value in physical pixels (px), with a default value of **0.0**.

**Type:** double

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TextStyle-baselineShift?: double--><!--Device-TextStyle-baselineShift?: double-End-->

**System capability:** SystemCapability.Graphics.Drawing

## color

```TypeScript
color?: common2D.Color
```

Text color. The default color is white.

**Type:** common2D.Color

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TextStyle-color?: common2D.Color--><!--Device-TextStyle-color?: common2D.Color-End-->

**System capability:** SystemCapability.Graphics.Drawing

## decoration

```TypeScript
decoration?: Decoration
```

Text decoration. By default, no decoration is used.

**Type:** Decoration

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TextStyle-decoration?: Decoration--><!--Device-TextStyle-decoration?: Decoration-End-->

**System capability:** SystemCapability.Graphics.Drawing

## ellipsis

```TypeScript
ellipsis?: string
```

Ellipsis content, which will be used to replace the extra content.

**Type:** string

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TextStyle-ellipsis?: string--><!--Device-TextStyle-ellipsis?: string-End-->

**System capability:** SystemCapability.Graphics.Drawing

## ellipsisMode

```TypeScript
ellipsisMode?: EllipsisMode
```

Ellipsis type. The default value is **END**, indicating that the ellipsis is at the end of a line.

**Type:** EllipsisMode

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TextStyle-ellipsisMode?: EllipsisMode--><!--Device-TextStyle-ellipsisMode?: EllipsisMode-End-->

**System capability:** SystemCapability.Graphics.Drawing

## fontEdging

```TypeScript
fontEdging?: drawing.FontEdging
```

Edge processing mode for drawing texts. The default value is **ANTI\_ALIAS**.

**Type:** drawing.FontEdging

**Since:** 24

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 24.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

<!--Device-TextStyle-fontEdging?: drawing.FontEdging--><!--Device-TextStyle-fontEdging?: drawing.FontEdging-End-->

**System capability:** SystemCapability.Graphics.Drawing

## fontFamilies

```TypeScript
fontFamilies?: Array<string>
```

Array of font families. By default, the array is empty, indicating that all system fonts are matched.

**Type:** Array&lt;string&gt;

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TextStyle-fontFamilies?: Array<string>--><!--Device-TextStyle-fontFamilies?: Array<string>-End-->

**System capability:** SystemCapability.Graphics.Drawing

## fontFeatures

```TypeScript
fontFeatures?: Array<FontFeature>
```

Array of font features.

**Type:** Array&lt;FontFeature&gt;

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TextStyle-fontFeatures?: Array<FontFeature>--><!--Device-TextStyle-fontFeatures?: Array<FontFeature>-End-->

**System capability:** SystemCapability.Graphics.Drawing

## fontSize

```TypeScript
fontSize?: double
```

Font size, a floating-point value with a default value of **14.0**, measured in physical pixels (px).

**Type:** double

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TextStyle-fontSize?: double--><!--Device-TextStyle-fontSize?: double-End-->

**System capability:** SystemCapability.Graphics.Drawing

## fontStyle

```TypeScript
fontStyle?: FontStyle
```

Font style. The default value is **NORMAL**.

**Type:** FontStyle

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TextStyle-fontStyle?: FontStyle--><!--Device-TextStyle-fontStyle?: FontStyle-End-->

**System capability:** SystemCapability.Graphics.Drawing

## fontTypefaces

```TypeScript
fontTypefaces?: Array<drawing.Typeface>
```

Array of font typefaces

**Type:** Array&lt;drawing.Typeface&gt;

**Since:** 26.0.0

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-TextStyle-fontTypefaces?: Array<drawing.Typeface>--><!--Device-TextStyle-fontTypefaces?: Array<drawing.Typeface>-End-->

**System capability:** SystemCapability.Graphics.Drawing

## fontVariations

```TypeScript
fontVariations?: Array<FontVariation>
```

Array of font variations.

**Type:** Array&lt;FontVariation&gt;

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TextStyle-fontVariations?: Array<FontVariation>--><!--Device-TextStyle-fontVariations?: Array<FontVariation>-End-->

**System capability:** SystemCapability.Graphics.Drawing

## fontWeight

```TypeScript
fontWeight?: FontWeight
```

Font weight. The default value is **W400**. Currently, only the default system font supports font weight adjustment. For other fonts, if the weight is less than semi-bold (W600), there is no variation in stroke thickness. If the weight is greater than or equal to semi-bold, it might result in a fake bold effect.

**Type:** FontWeight

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TextStyle-fontWeight?: FontWeight--><!--Device-TextStyle-fontWeight?: FontWeight-End-->

**System capability:** SystemCapability.Graphics.Drawing

## fontWidth

```TypeScript
fontWidth?: FontWidth
```

Font width. The default value is **NORMAL**.

**Type:** FontWidth

**Since:** 21

**ArkTS mode:** ArkTS-Dyn since version 21; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TextStyle-fontWidth?: FontWidth--><!--Device-TextStyle-fontWidth?: FontWidth-End-->

**System capability:** SystemCapability.Graphics.Drawing

## halfLeading

```TypeScript
halfLeading?: boolean
```

Whether half leading is enabled. Half leading is the leading split in half and applied equally to the top and bottom edges. The value **true** means that half leading is enabled, and **false** means the opposite. The default value is **false**.

**Type:** boolean

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TextStyle-halfLeading?: boolean--><!--Device-TextStyle-halfLeading?: boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

## heightOnly

```TypeScript
heightOnly?: boolean
```

How the height of the text box is set. The value **true** means that the height of the text box is set based on the font size and the value of **heightScale**, and **false** means that the height is set based on the line height and line spacing. The default value is **false**.

**Type:** boolean

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TextStyle-heightOnly?: boolean--><!--Device-TextStyle-heightOnly?: boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

## heightScale

```TypeScript
heightScale?: double
```

Scale factor of the line height. The value is a floating point number. The default value is **1.0**. This parameter is valid only when **heightOnly** is set to **true**.

**Type:** double

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TextStyle-heightScale?: double--><!--Device-TextStyle-heightScale?: double-End-->

**System capability:** SystemCapability.Graphics.Drawing

## letterSpacing

```TypeScript
letterSpacing?: double
```

Character spacing, a floating-point value in physical pixels (px) with a default value of **0.0**. A positive value widens the character gap, while a negative value narrows it.

**Type:** double

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TextStyle-letterSpacing?: double--><!--Device-TextStyle-letterSpacing?: double-End-->

**System capability:** SystemCapability.Graphics.Drawing

## lineHeightMaximum

```TypeScript
lineHeightMaximum?: double
```

Maximum line height, in physical pixels (px). If the line height is scaled, the maximum line height takes effect when [TextStyle]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_.heightScale is greater than 0. The value is a positive floating point number. The default value is **Number.MAX\_VALUE**.

**Type:** double

**Since:** 21

**ArkTS mode:** ArkTS-Dyn since version 21; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TextStyle-lineHeightMaximum?: double--><!--Device-TextStyle-lineHeightMaximum?: double-End-->

**System capability:** SystemCapability.Graphics.Drawing

## lineHeightMinimum

```TypeScript
lineHeightMinimum?: double
```

Minimum line height, in physical pixels (px). If the line height is scaled, the minimum line height takes effect when [TextStyle]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_.heightScale is greater than 0. The value is a non-negative floating point number. The default value is **0**.

**Type:** double

**Since:** 21

**ArkTS mode:** ArkTS-Dyn since version 21; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TextStyle-lineHeightMinimum?: double--><!--Device-TextStyle-lineHeightMinimum?: double-End-->

**System capability:** SystemCapability.Graphics.Drawing

## lineHeightStyle

```TypeScript
lineHeightStyle?: LineHeightStyle
```

Scaling base style of the line height. The default value is **FONT\_SIZE**.

**Type:** LineHeightStyle

**Since:** 21

**ArkTS mode:** ArkTS-Dyn since version 21; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TextStyle-lineHeightStyle?: LineHeightStyle--><!--Device-TextStyle-lineHeightStyle?: LineHeightStyle-End-->

**System capability:** SystemCapability.Graphics.Drawing

## locale

```TypeScript
locale?: string
```

Language type. For example, **'en-Latn'** indicates English (Latin script), **'zh-Hans'** indicates Simplified Chinese, and **'zh-Hant'** indicates Traditional Chinese. Supports two-segment language tags in the language-script format, where language complies with the ISO 639-1 standard and script complies with the ISO 15924standard. If the locale is not specified, set to an empty string, or set to **undefined**, the default locale is  
**'zh-Hans'**.

**Type:** string

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TextStyle-locale?: string--><!--Device-TextStyle-locale?: string-End-->

**System capability:** SystemCapability.Graphics.Drawing

## textShadows

```TypeScript
textShadows?: Array<TextShadow>
```

Array of shadows.

**Type:** Array&lt;TextShadow&gt;

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TextStyle-textShadows?: Array<TextShadow>--><!--Device-TextStyle-textShadows?: Array<TextShadow>-End-->

**System capability:** SystemCapability.Graphics.Drawing

## wordSpacing

```TypeScript
wordSpacing?: double
```

Word spacing, a floating-point value in physical pixels (px) with a default value of **0.0**.

**Type:** double

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TextStyle-wordSpacing?: double--><!--Device-TextStyle-wordSpacing?: double-End-->

**System capability:** SystemCapability.Graphics.Drawing

