# Span properties/events

Inherited from [BaseSpan](arkts-arkui-basespan-c.md).

Among universal events, only
[onClick](arkts-arkui-commonmethod-c.md#onclick-2) click events and
[onHover](arkts-arkui-commonmethod-c.md#onhover-1) hover events are supported.

**Inheritance/Implementation:** SpanAttribute extends [BaseSpan<SpanAttribute>](BaseSpan<SpanAttribute>)

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## decoration

```TypeScript
decoration(value: DecorationStyleInterface)
```

Style and color of the text decorative line.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | DecorationStyleInterface | Yes | Style of the text decorative line.<br>Default value:<br>{<br> type:TextDecorationType.None,<br> color: Color.Black,<br> style: TextDecorationStyle.SOLID <br>}<br>**NOTE**<br>The**style** parameter cannot be used in widgets.<br>**Since:** 12 |

## font

```TypeScript
font(value: Font)
```

Sets the text style, covering the font size, font width, Font family, and font style.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Font | Yes | Text style. |

## font

```TypeScript
font(value: Font, fontConfigs?: FontConfigs)
```

Used to set the font of span.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Font | Yes | the span font size, font weight, font family and font style. |
| fontConfigs | FontConfigs | No | the configuration of font. |

## fontColor

```TypeScript
fontColor(value: ResourceColor)
```

Sets the font color.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | Font color.<br>Default value: **'e6182431'**.<br>Default value for wearables:**'#c5ffffff'** |

## fontFamily

```TypeScript
fontFamily(value: string | Resource)
```

Sets the font family.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string \| Resource | Yes | Font family.<br>Default font: **'HarmonyOS Sans'**<br>To specify multiplefonts, separate them with commas (,), and fonts are applied in priority order. Example:**'Arial, HarmonyOS Sans'**. |

## fontSize

```TypeScript
fontSize(value: number | string | Resource)
```

Sets the font size.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string \| Resource | Yes | Font size. If **fontSize** is of the number type, the unit fp isused. The default font size is 16 fp. For the string type, numeric string values with optional units, forexample, **"10"** or **"10fp"**, are supported. Percentage values are not supported.<br>Default value onwearable devices: **15fp**. |

## fontStyle

```TypeScript
fontStyle(value: FontStyle)
```

Sets the font style.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | FontStyle | Yes | Font style.<br>Default value: **FontStyle.Normal** |

## fontVariations

```TypeScript
fontVariations(fontVariations: Array<FontVariation>)
```

Set the font variation.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fontVariations | Array&lt;FontVariation&gt; | Yes | Indicates the span font variation. |

## fontWeight

```TypeScript
fontWeight(value: number | FontWeight | ResourceStr)
```

Sets the font weight. If the value is too large, the text may be clipped depending on the font.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| FontWeight \| ResourceStr | Yes | Font weight. For the number type, the value range is[100, 900], at an interval of 100. The default value is **400**. A larger value indicates a heavier fontweight. For the string type, only strings of the number type are supported, for example, **400**, **"bold"**,**"bolder"**, **"lighter"**, **"regular"**, and **"medium"**, which correspond to the enumerated values in**FontWeight**.<br>Default value: **FontWeight.Normal**<br>The [Resource](../../apis-localization-kit/arkts-apis/arkts-localization-resource-i.md) type is supportedsince API version 20.<br>**Since:** 20 |

## fontWeight

```TypeScript
fontWeight(weight: number | FontWeight | ResourceStr, fontWeightConfigs?: FontWeightConfigs)
```

Called when the font weight is set.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**Widget capability:** This API can be used in ArkTS widgets since API version 24.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| weight | number \| FontWeight \| ResourceStr | Yes | the span font weight. |
| fontWeightConfigs | FontWeightConfigs | No | the configuration of font weight. |

## letterSpacing

```TypeScript
letterSpacing(value: number | ResourceStr)
```

Sets the letter spacing. A negative value tightens the spacing; a positive value loosens the spacing, and the
letters are spread farther apart with the value. For the string type, numeric string values with optional units,
for example, **"10"** or **"10fp"**, are supported.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| ResourceStr | Yes | Letter spacing.<br>Unit: [fp](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md)<br>The[Resource](../../apis-localization-kit/arkts-apis/arkts-localization-resource-i.md) type is supported since API version 20.<br>**Since:** 20 |

## lineHeight

```TypeScript
lineHeight(value: Length)
```

Sets the line height for the text.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | Line height of the text.<br> If the value is of the number type, the unit is fp. Whenusing the string type, numeric string values with optional units, for example, **"10"** or **"10fp"**, aresupported. |

## textCase

```TypeScript
textCase(value: TextCase)
```

Sets the text case.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | TextCase | Yes | Text case.<br>Default value: **TextCase.Normal** |

## textShadow

```TypeScript
textShadow(value: ShadowOptions | Array<ShadowOptions>)
```

Text shadow. It supports input parameters in an array to implement multiple text shadows. This API does not work
with the **fill** attribute or coloring strategy.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ShadowOptions \| Array&lt;ShadowOptions&gt; | Yes | Text shadow. |

