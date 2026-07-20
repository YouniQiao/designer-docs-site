# StrutStyle

Describes the strut style, which determines the line spacing, baseline alignment mode, and other properties related to the line height when drawing texts. The strut style is disabled by default.

**Since:** 12

<!--Device-text-interface StrutStyle--><!--Device-text-interface StrutStyle-End-->

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { text } from '@kit.ArkGraphics2D';
```

## enabled

```TypeScript
enabled?: boolean
```

Whether to enable the strut style. The value **true** means to enable the strut style, and **false** means the opposite. The default value is **false**.

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-StrutStyle-enabled?: boolean--><!--Device-StrutStyle-enabled?: boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

## fontFamilies

```TypeScript
fontFamilies?: Array<string>
```

Array of font families. By default, the array is empty, indicating that all system fonts are matched.

**Type:** Array<string>

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-StrutStyle-fontFamilies?: Array<string>--><!--Device-StrutStyle-fontFamilies?: Array<string>-End-->

**System capability:** SystemCapability.Graphics.Drawing

## fontSize

```TypeScript
fontSize?: number
```

Font size, a floating-point value with a default value of **14.0**, measured in physical pixels (px).

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-StrutStyle-fontSize?: double--><!--Device-StrutStyle-fontSize?: double-End-->

**System capability:** SystemCapability.Graphics.Drawing

## fontStyle

```TypeScript
fontStyle?: FontStyle
```

Font style. The default value is **NORMAL**.

**Type:** FontStyle

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-StrutStyle-fontStyle?: FontStyle--><!--Device-StrutStyle-fontStyle?: FontStyle-End-->

**System capability:** SystemCapability.Graphics.Drawing

## fontWeight

```TypeScript
fontWeight?: FontWeight
```

Font weight. The default value is **W400**. The default system font supports font weight adjustment. For other fonts, if the weight is less than W600, there is no variation in stroke thickness. If the weight is greater than or equal to W600, it might result in a fake bold effect.

**Type:** FontWeight

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-StrutStyle-fontWeight?: FontWeight--><!--Device-StrutStyle-fontWeight?: FontWeight-End-->

**System capability:** SystemCapability.Graphics.Drawing

## fontWidth

```TypeScript
fontWidth?: FontWidth
```

Font width. The default value is **NORMAL**.

**Type:** FontWidth

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-StrutStyle-fontWidth?: FontWidth--><!--Device-StrutStyle-fontWidth?: FontWidth-End-->

**System capability:** SystemCapability.Graphics.Drawing

## forceHeight

```TypeScript
forceHeight?: boolean
```

Whether to forcibly use the strut height for all lines. The value **true** means to forcibly use the strut height for all lines, and **false** means the opposite. The default value is **false**.

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-StrutStyle-forceHeight?: boolean--><!--Device-StrutStyle-forceHeight?: boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

## halfLeading

```TypeScript
halfLeading?: boolean
```

Whether half leading is enabled. Half leading is the leading split in half and applied equally to the top and bottom edges. The value **true** means that half leading is enabled, and **false** means the opposite. The default value is **false**.

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-StrutStyle-halfLeading?: boolean--><!--Device-StrutStyle-halfLeading?: boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

## height

```TypeScript
height?: number
```

Scale factor of the line height. The value is a floating point number. The default value is **1.0**.

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-StrutStyle-height?: double--><!--Device-StrutStyle-height?: double-End-->

**System capability:** SystemCapability.Graphics.Drawing

## heightOverride

```TypeScript
heightOverride?: boolean
```

Whether to override the height. The value **true** means to override the height, and **false** means the opposite. The default value is **false**.

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-StrutStyle-heightOverride?: boolean--><!--Device-StrutStyle-heightOverride?: boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

## leading

```TypeScript
leading?: number
```

Custom line spacing applied to the strut, a floating-point value in physical pixels (px), with a default value of **-1.0**.

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-StrutStyle-leading?: double--><!--Device-StrutStyle-leading?: double-End-->

**System capability:** SystemCapability.Graphics.Drawing

