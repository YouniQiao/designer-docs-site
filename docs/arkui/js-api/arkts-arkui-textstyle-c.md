# TextStyle

Describes the text style.

**Since:** 12

<!--Device-unnamed-declare class TextStyle--><!--Device-unnamed-declare class TextStyle-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="constructor"></a>
## constructor

```TypeScript
constructor(value?: TextStyleInterface)
```

A constructor used to create a text style.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextStyle-constructor(value?: TextStyleInterface)--><!--Device-TextStyle-constructor(value?: TextStyleInterface)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [TextStyleInterface](arkts-arkui-textstyleinterface-i.md) | No | Font style options. |

## fontColor

```TypeScript
readonly fontColor?: ResourceColor
```

Text color of the styled string.

**Type:** ResourceColor

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextStyle-readonly fontColor?: ResourceColor--><!--Device-TextStyle-readonly fontColor?: ResourceColor-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontConfigs

```TypeScript
readonly fontConfigs?: FontConfigs
```

Font configuration of the styled string.

Default value: **undefined**, indicating that fontConfigs is not set.

**Type:** FontConfigs

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

<!--Device-TextStyle-readonly fontConfigs?: FontConfigs--><!--Device-TextStyle-readonly fontConfigs?: FontConfigs-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontFamily

```TypeScript
readonly fontFamily?: string
```

Font family of the styled string.

Returns **undefined** by default.

**Type:** string

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextStyle-readonly fontFamily?: string--><!--Device-TextStyle-readonly fontFamily?: string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontSize

```TypeScript
readonly fontSize?: number
```

Font size of the styled string.

Unit: [vp](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md)

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextStyle-readonly fontSize?: number--><!--Device-TextStyle-readonly fontSize?: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontStyle

```TypeScript
readonly fontStyle?: FontStyle
```

Font style of the styled string.

**Type:** FontStyle

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextStyle-readonly fontStyle?: FontStyle--><!--Device-TextStyle-readonly fontStyle?: FontStyle-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontVariations

```TypeScript
readonly fontVariations?: Array<FontVariation>
```

Array of variable font attributes.

Default value: **undefined**, indicating that variable font attributes are not set.

**Since**: 26.0.0

**Type:** Array&lt;FontVariation&gt;

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-TextStyle-readonly fontVariations?: Array<FontVariation>--><!--Device-TextStyle-readonly fontVariations?: Array<FontVariation>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontWeight

```TypeScript
readonly fontWeight?: number
```

Font weight of the styled string.

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextStyle-readonly fontWeight?: number--><!--Device-TextStyle-readonly fontWeight?: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## strokeColor

```TypeScript
readonly strokeColor?: ResourceColor
```

Text stroke color of the styled string.

Default value: same as the text color.

**Type:** ResourceColor

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-TextStyle-readonly strokeColor?: ResourceColor--><!--Device-TextStyle-readonly strokeColor?: ResourceColor-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## strokeJoinStyle

```TypeScript
readonly strokeJoinStyle?: StrokeJoinStyle
```

Text stroke join style of the styled string.

Default value: **StrokeJoinStyle.MITER_JOIN**.

**Since**: 26.0.0.

**Type:** StrokeJoinStyle

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-TextStyle-readonly strokeJoinStyle?: StrokeJoinStyle--><!--Device-TextStyle-readonly strokeJoinStyle?: StrokeJoinStyle-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## strokeWidth

```TypeScript
readonly strokeWidth?: number
```

Text stroke width of the styled string.

Default value: **0**, in [vp](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md).

**Type:** number

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-TextStyle-readonly strokeWidth?: number--><!--Device-TextStyle-readonly strokeWidth?: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## superscript

```TypeScript
readonly superscript?: SuperscriptStyle
```

Superscript or subscript for the styled string.

Default value: **SuperscriptStyle.NORMAL**.

**Type:** SuperscriptStyle

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-TextStyle-readonly superscript?: SuperscriptStyle--><!--Device-TextStyle-readonly superscript?: SuperscriptStyle-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

