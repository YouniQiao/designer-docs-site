# TextStyleInterface

TextStyleInterface

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontColor

```TypeScript
fontColor?: ResourceColor
```

Font color.

Default value: theme color.

**Type:** ResourceColor

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontConfigs

```TypeScript
fontConfigs?: FontConfigs
```

Font configuration. The default value is inherited from [FontConfigs](arkts-arkui-fontconfigs-i.md).

**Type:** FontConfigs

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontFamily

```TypeScript
fontFamily?: ResourceStr
```

Font family.

Default value: theme font.

**Type:** ResourceStr

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontSize

```TypeScript
fontSize?: LengthMetrics
```

Font size.

Default value: 16 fp.

If **unit** of **LengthMetrics** is percent, the setting does not take effect, and 16 fp is used instead.

Unit: [fp](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md)

**Type:** LengthMetrics

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontStyle

```TypeScript
fontStyle?: FontStyle
```

Font style.

Default value: **FontStyle.Normal**.

**Type:** FontStyle

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontVariations

```TypeScript
fontVariations?: Array<FontVariation>
```

Variable font attributes.

Default value: **undefined**, indicating that variable font attributes are not set.

The priority of **fontVariations** is higher than that of **fontWeight**.

**Since**: 26.0.0

**Type:** Array<FontVariation>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontWeight

```TypeScript
fontWeight?: number | FontWeight | string
```

Font weight.

For the number type, the value ranges from 100 to 900, at an interval of 100. A larger value indicates a heavier
font weight. The default value is **400**. For the string type, only strings that represent a number, for example,
**400**, and the following enumerated values of **FontWeight** are supported: **bold**, **bolder**, **lighter**,
**regular**, and **medium**.

**Type:** number | FontWeight | string

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## strokeColor

```TypeScript
strokeColor?: ResourceColor
```

Text stroke color.

Default value: text color. If invalid values are provided, the text color is used.

**Type:** ResourceColor

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## strokeJoinStyle

```TypeScript
strokeJoinStyle?: StrokeJoinStyle
```

Text stroke join style.

Default value: **StrokeJoinStyle.MITER_JOIN**.

**Since**: 26.0.0.

**Type:** StrokeJoinStyle

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## strokeWidth

```TypeScript
strokeWidth?: LengthMetrics
```

Text stroke width. If **unit** of **LengthMetrics** is percent, the setting does not take effect, and 0 is used
instead.

If the value is less than 0, the text is solid. If the value is greater than 0, the text is hollow.

Default value: **0**.

**Type:** LengthMetrics

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## superscript

```TypeScript
superscript?: SuperscriptStyle
```

Superscript or subscript for the text.

Default value: **SuperscriptStyle.NORMAL**.

**Type:** SuperscriptStyle

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

