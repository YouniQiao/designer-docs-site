# TextPickerTextStyle

Defines the text style options for the text picker. Inherits from [PickerTextStyle](arkts-arkui-pickertextstyle-i.md).

**Inheritance/Implementation:** TextPickerTextStyle extends [PickerTextStyle](arkts-arkui-pickertextstyle-i.md)

**Since:** 15

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## maxFontSize

```TypeScript
maxFontSize?: number | string | Resource
```

Maximum font size for the text. For details, see [maxFontSize](TextAttribute#maxFontSize).

**Type:** number | string | Resource

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## minFontSize

```TypeScript
minFontSize?: number | string | Resource
```

Minimum font size for the text. Used with **maxFontSize** to enable font scaling. When both **minFontSize** and **maxFontSize** are set, the **size** property in **font** is ignored. By default, the maximum number of lines is 1, with the **MIN_FONT_SIZE_FIRST** adaptation strategy. For details, see [minFontSize](TextAttribute#minFontSize).

**Type:** number | string | Resource

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## overflow

```TypeScript
overflow?: TextOverflow
```

Text overflow behavior. This property has no effect when set to **MARQUEE**. For details, see [textOverflow](TextAttribute#textOverflow).

**Type:** TextOverflow

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

