# DecorationStyle

Describes the text decorative line style.

**Since:** 12

<!--Device-unnamed-declare class DecorationStyle--><!--Device-unnamed-declare class DecorationStyle-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="constructor"></a>
## constructor

```TypeScript
constructor(value: DecorationStyleInterface)
```

A constructor used to create a text decorative line style.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-DecorationStyle-constructor(value: DecorationStyleInterface)--><!--Device-DecorationStyle-constructor(value: DecorationStyleInterface)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [DecorationStyleInterface](arkts-arkui-decorationstyleinterface-i.md) | Yes | Text decorative line options.<br>Default value:<br>{<br> type:TextDecorationType.None,<br> color: Color.Black,<br> style: TextDecorationStyle.SOLID <br>} |

<a id="constructor-1"></a>
## constructor

```TypeScript
constructor(value: DecorationStyleInterface, options?: DecorationOptions)
```

Constructor of a text decoration line style, including additional configuration options.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-DecorationStyle-constructor(value: DecorationStyleInterface, options?: DecorationOptions)--><!--Device-DecorationStyle-constructor(value: DecorationStyleInterface, options?: DecorationOptions)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [DecorationStyleInterface](arkts-arkui-decorationstyleinterface-i.md) | Yes | Text decorative line options.<br>Default value:<br>{<br> type:TextDecorationType.None,<br> color: Color.Black,<br> style: TextDecorationStyle.SOLID, <br> thicknessScale: 1.0<br>} |
| options | [DecorationOptions](arkts-arkui-decorationoptions-i.md) | No | Additional configuration options for the text decoration line.<br>Default value:<br>{<br> enableMultiType: undefined<br>} |

## color

```TypeScript
readonly color?: ResourceColor
```

Color of the text decorative line.

**Type:** ResourceColor

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-DecorationStyle-readonly color?: ResourceColor--><!--Device-DecorationStyle-readonly color?: ResourceColor-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## options

```TypeScript
readonly options?: DecorationOptions
```

Additional configuration options for the text decoration line style.

**Type:** DecorationOptions

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-DecorationStyle-readonly options?: DecorationOptions--><!--Device-DecorationStyle-readonly options?: DecorationOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## style

```TypeScript
readonly style?: TextDecorationStyle
```

Style of the text decorative line.

**Type:** TextDecorationStyle

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-DecorationStyle-readonly style?: TextDecorationStyle--><!--Device-DecorationStyle-readonly style?: TextDecorationStyle-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## thicknessScale

```TypeScript
readonly thicknessScale?: number
```

Scale factor for the thickness of the text decoration line.

**Type:** number

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-DecorationStyle-readonly thicknessScale?: number--><!--Device-DecorationStyle-readonly thicknessScale?: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## type

```TypeScript
readonly type: TextDecorationType
```

Type of the text decorative line.

**Type:** TextDecorationType

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-DecorationStyle-readonly type: TextDecorationType--><!--Device-DecorationStyle-readonly type: TextDecorationType-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

