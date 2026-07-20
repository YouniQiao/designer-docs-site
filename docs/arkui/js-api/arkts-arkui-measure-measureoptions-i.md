# MeasureOptions

Provides attributes of the measured text.

**Since:** 9

<!--Device-unnamed-export interface MeasureOptions--><!--Device-unnamed-export interface MeasureOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { MeasureOptions } from '@kit.ArkUI';
```

## baselineOffset

```TypeScript
baselineOffset?: number | string
```

Baseline offset of the measured text.

Default value: **0**

**Type:** number | string

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MeasureOptions-baselineOffset?: number | string--><!--Device-MeasureOptions-baselineOffset?: number | string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constraintWidth

```TypeScript
constraintWidth?: number | string | Resource
```

Layout width of the measured text.

**NOTE**

The default unit is vp. The value cannot be a percentage. If this parameter is not set, the value of **SizeOptions** is the maximum width allowed for the single-line text.

**Type:** number | string | Resource

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MeasureOptions-constraintWidth?: number | string | Resource--><!--Device-MeasureOptions-constraintWidth?: number | string | Resource-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontFamily

```TypeScript
fontFamily?: string | Resource
```

Font family of the measured text. Default value: **'HarmonyOS Sans'**

Only the default font is supported.

**Type:** string | Resource

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MeasureOptions-fontFamily?: string | Resource--><!--Device-MeasureOptions-fontFamily?: string | Resource-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontSize

```TypeScript
fontSize?: number | string | Resource
```

Font size of the text to be measured. When **fontSize** is of the number type, the unit is vp.

Default value: **16**

**NOTE**

The value cannot be a percentage.

Since API version 12, the fp unit is used when **fontSize** is of the number type.

**Type:** number | string | Resource

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MeasureOptions-fontSize?: number | string | Resource--><!--Device-MeasureOptions-fontSize?: number | string | Resource-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontStyle

```TypeScript
fontStyle?: number | FontStyle
```

Font style of the measured text.

Default value: **FontStyle.Normal**

Value range for the number type: [0, 1], with intervals of 1, corresponding to the values in the **FontStyle** enum

**Type:** number | FontStyle

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MeasureOptions-fontStyle?: number | FontStyle--><!--Device-MeasureOptions-fontStyle?: number | FontStyle-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontWeight

```TypeScript
fontWeight?: number | string | FontWeight
```

Font width of the measured text. For the number type, the value ranges from 100 to 900, at an interval of 100. A larger value indicates a heavier font weight. The default value is **400**. For the string type, only strings of the number type are supported, for example, **400**, **"bold"**, **"bolder"**, **"lighter"**, **"regular"**, and **"medium"**, which correspond to the enumerated values in **FontWeight**.

Default value: **FontWeight.Normal**

**Type:** number | string | FontWeight

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MeasureOptions-fontWeight?: number | string | FontWeight--><!--Device-MeasureOptions-fontWeight?: number | string | FontWeight-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## letterSpacing

```TypeScript
letterSpacing?: number | string
```

Letter spacing of the measured text.

Default value: **0**

**Type:** number | string

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MeasureOptions-letterSpacing?: number | string--><!--Device-MeasureOptions-letterSpacing?: number | string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## lineHeight

```TypeScript
lineHeight?: number | string | Resource
```

Line height of the measured text.

**Type:** number | string | Resource

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MeasureOptions-lineHeight?: number | string | Resource--><!--Device-MeasureOptions-lineHeight?: number | string | Resource-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## maxLines

```TypeScript
maxLines?: number
```

Maximum number of lines in the measured text.

Value range: [0, *INT32_MAX*]

**Type:** number

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MeasureOptions-maxLines?: number--><!--Device-MeasureOptions-maxLines?: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## overflow

```TypeScript
overflow?: number | TextOverflow
```

Display mode when the measured text is too long.

Default value: **1**

Value range for the number type: [0, 3], with intervals of 1, corresponding to the values in the **TextOverflow** enum

**Type:** number | TextOverflow

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MeasureOptions-overflow?: number | TextOverflow--><!--Device-MeasureOptions-overflow?: number | TextOverflow-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## textAlign

```TypeScript
textAlign?: number | TextAlign
```

Horizontal alignment mode of the measured text.

Default value: **TextAlign.Start**

Value range for the number type: [0, 3], with intervals of 1, corresponding to the values in the **TextAlign** enum

**Type:** number | TextAlign

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MeasureOptions-textAlign?: number | TextAlign--><!--Device-MeasureOptions-textAlign?: number | TextAlign-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## textCase

```TypeScript
textCase?: number | TextCase
```

Case of the measured text.

Default value: **TextCase.Normal**

Value range for the number type: [0, 2], with intervals of 1, corresponding to the values in the **TextCase** enum

**Type:** number | TextCase

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MeasureOptions-textCase?: number | TextCase--><!--Device-MeasureOptions-textCase?: number | TextCase-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## textContent

```TypeScript
textContent: string | Resource
```

Content of the measured text.

**Type:** string | Resource

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MeasureOptions-textContent: string | Resource--><!--Device-MeasureOptions-textContent: string | Resource-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## textIndent

```TypeScript
textIndent?: number | string
```

Indentation of the first line. Default value: **0**.

**Type:** number | string

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MeasureOptions-textIndent?: number | string--><!--Device-MeasureOptions-textIndent?: number | string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## wordBreak

```TypeScript
wordBreak?: WordBreak
```

Line break rule.

Default value: **WordBreak.BREAK_WORD**

**NOTE**

When used with **{overflow: TextOverflow.Ellipsis}** and **maxLines**, **WordBreak.BREAK_ALL** can insert line breaks between letters when overflow occurs and display excess content with an ellipsis (...).

**Type:** WordBreak

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MeasureOptions-wordBreak?: WordBreak--><!--Device-MeasureOptions-wordBreak?: WordBreak-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

