# TextStyle

文本样式。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { text } from '@kit.ArkGraphics2D';
```

## lineHeightMinimum

```TypeScript
lineHeightMinimum?: double
```

行高下限，单位为物理像素px。若同时应用行高缩放，行高下限在[TextStyle]text.TextStyle.heightScale大于0时生效。取值范围为非负浮点数，默认值为0。

**Type:** double

**Since:** 21

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## color

```TypeScript
color?: common2D.Color
```

文字颜色，默认为白色。

**Type:** common2D.Color

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## wordSpacing

```TypeScript
wordSpacing?: double
```

单词间距，浮点数，单位为物理像素px，默认为0.0。

**Type:** double

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## baselineShift

```TypeScript
baselineShift?: double
```

文本下划线的偏移距离，浮点数，单位为物理像素px，默认为0.0。

**Type:** double

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## locale

```TypeScript
locale?: string
```

语言类型，例如'en-Latn'代表英文(拉丁文字)，'zh-Hans'代表简体中文，'zh-Hant'代表繁体中文。支持language-script格式的两段式语言标签，language遵循ISO 639-1规范， script遵循ISO 15924规范。未指定locale或者设置为空字符串或为undefined时，默认locale为'zh-Hans'。

**Type:** string

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## lineHeightStyle

```TypeScript
lineHeightStyle?: LineHeightStyle
```

行高缩放基数样式。默认为FONT_SIZE。

**Type:** LineHeightStyle

**Since:** 21

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## lineHeightMaximum

```TypeScript
lineHeightMaximum?: double
```

行高上限，单位为物理像素px。若同时应用行高缩放，行高上限在[TextStyle]text.TextStyle.heightScale大于0时生效。取值为正数浮点数，默认值为Number.MAX_VALUE。

**Type:** double

**Since:** 21

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## badgeType

```TypeScript
badgeType?: TextBadgeType
```

设置文本排版时是否使能上标或下标。TEXT_SUPERSCRIPT表示使能上标，TEXT_SUBSCRIPT表示使能下标，默认值为TEXT_BADGE_NONE表示不使能。

**Type:** TextBadgeType

**Since:** 20

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## fontEdging

```TypeScript
fontEdging?: drawing.FontEdging
```

绘制文本的边缘处理方式，默认值为ANTI_ALIAS。

**Type:** drawing.FontEdging

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## decoration

```TypeScript
decoration?: Decoration
```

装饰线设置，默认不使用装饰线。

**Type:** Decoration

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## fontWeight

```TypeScript
fontWeight?: FontWeight
```

字重，默认为W400。 目前只有系统默认字体支持字重的调节，其他字体设置字重值小于semi-bold（即W600）时字体粗细无变化，当设置字重值大于等于semi-bold（即W600）时可能会触发伪加粗效果。

**Type:** FontWeight

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## halfLeading

```TypeScript
halfLeading?: boolean
```

true表示将行间距平分至行的顶部与底部，false则不平分，默认为false。

**Type:** boolean

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## heightOnly

```TypeScript
heightOnly?: boolean
```

true表示根据字体大小和heightScale设置文本框的高度，false表示根据行高和行距，默认为false。

**Type:** boolean

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## ellipsisMode

```TypeScript
ellipsisMode?: EllipsisMode
```

省略号类型，默认为END，行尾省略号。

**Type:** EllipsisMode

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## fontVariations

```TypeScript
fontVariations?: Array<FontVariation>
```

可变字体属性数组。

**Type:** Array<FontVariation>

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## heightScale

```TypeScript
heightScale?: double
```

行高缩放倍数，浮点数，默认为1.0，heightOnly为true时生效。

**Type:** double

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## fontTypefaces

```TypeScript
fontTypefaces?: Array<drawing.Typeface>
```

字体对象数组

**Type:** Array<drawing.Typeface>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## fontFeatures

```TypeScript
fontFeatures?: Array<FontFeature>
```

文本字体特征数组。

**Type:** Array<FontFeature>

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## backgroundRect

```TypeScript
backgroundRect?: RectStyle
```

文本矩形框样式。

**Type:** RectStyle

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## letterSpacing

```TypeScript
letterSpacing?: double
```

字符间距，正数拉开字符距离，如果为负数则拉近字符距离，浮点数，单位为物理像素px，默认为0.0。

**Type:** double

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## baseline

```TypeScript
baseline?: TextBaseline
```

文本基线类型，默认为ALPHABETIC。

**Type:** TextBaseline

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## fontStyle

```TypeScript
fontStyle?: FontStyle
```

字体样式，默认为常规样式。

**Type:** FontStyle

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## ellipsis

```TypeScript
ellipsis?: string
```

省略号文本，表示省略号生效后使用该字段值替换省略号部分。

**Type:** string

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## fontWidth

```TypeScript
fontWidth?: FontWidth
```

字体宽度，默认为NORMAL。

**Type:** FontWidth

**Since:** 21

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## fontSize

```TypeScript
fontSize?: double
```

字体大小，浮点数，默认为14.0，单位为物理像素px。

**Type:** double

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## fontFamilies

```TypeScript
fontFamilies?: Array<string>
```

字体家族名称列表，默认为空，匹配系统字体。

**Type:** Array<string>

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## textShadows

```TypeScript
textShadows?: Array<TextShadow>
```

文本阴影数组。

**Type:** Array<TextShadow>

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

