# Gauge properties/events

In addition to the [universal attributes](../../../../reference/apis-arkui/arkui-ts/ts-component-general-attributes.md), the following attributes are supported. The [universal events](../../../../reference/apis-arkui/arkui-ts/ts-component-general-events.md) are supported.

**Inheritance/Implementation:** GaugeAttribute extends [CommonMethod<GaugeAttribute>](CommonMethod<GaugeAttribute>)

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## colors

```TypeScript
colors(colors: ResourceColor | LinearGradient | Array<[ResourceColor | LinearGradient, number]>)
```

Sets the colors of the gauge. Since API version 11, this API follows the following rules: If the data type is [ResourceColor](arkts-arkui-resourcecolor-t.md), the ring is of the monochrome type. If the data type is [LinearGradient](arkts-arkui-lineargradient-i.md), the ring is of the gradient type. If the data type is Array, the ring is of the gradient type. The first parameter indicates the color value. If it is set to a non-color value, the color of 0xFFE84026 is used. The second parameter indicates the color weight. If it is set to a negative number or a non-numeric value, the color weight is 0. A ring of the gradient type contains a maximum of nine color segments. If there are more than nine segments, the excess is not displayed.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| colors | ResourceColor \| LinearGradient \| Array&lt;[ResourceColor \| LinearGradient, number]&gt; | Yes | Colors of thegauge. You can set colors for individual segments.<br>Default value in API version 9: **Color.Black**<br>Default value in API version 11:<br>If no color is provided or the array is empty, the ring color will be agradient consisting of the following colors: 0xFF64BB5C, 0xFFF7CE00, and 0xFFE84026.<br>If a color value isprovided but invalid, the ring will be in the color of 0xFFE84026.<br>Colors with a weight of 0 are notdisplayed in the ring. If all weights are 0, the ring is not displayed.<br>**Since:** 11 |

## contentModifier

```TypeScript
contentModifier(modifier: ContentModifier<GaugeConfiguration>)
```

Creates a content modifier.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | ContentModifier&lt;GaugeConfiguration&gt; | Yes | Content modifier to apply to the current component.<br>**modifier**: content modifier. You need a custom class to implement the **ContentModifier** API. |

## description

```TypeScript
description(value: CustomBuilder)
```

Sets the description of the gauge.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | CustomBuilder | Yes | Description.<br>**NOTE**<br>You need to customize the content – text or imageryrecommended – in @Builder.<br>If the width and height of the custom content are in percentage, the referencerange is a rectangle that is 44.4% of the diameter of the ring horizontally and 25.4% vertically (for images,it is 28.6% both horizontally and vertically), positioned 0 vp away from the bottom of the ring and centeredhorizontally.<br>If this parameter is set to null, no description is displayed.<br>If this parameter is notset, what's displayed is subject to the maximum and minimum value settings.<br>If either or both of the maximumand minimum values are set, they are displayed.<br>If neither maximum nor minimum values are set, nodescription is displayed.<br>The maximum and minimum values are displayed at the bottom of the ring and cannotbe relocated. They may be blocked by the ring if the ring's start and end angles are not set properly. |

## endAngle

```TypeScript
endAngle(angle: number)
```

Sets the end angle of the gauge. Ensure an appropriate difference between the start angle and end angle. If this difference is too small, the drawn chart may be abnormal. You are advised to use a monochrome ring to set the **value** attribute of the **Gauge**. You can also use **setTimeout** to delay value loading.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| angle | number | Yes | End angle of the gauge. The 0 o'clock is defined as 0 degrees. Clockwise rotationrepresents positive angles, and counterclockwise rotation represents negative angles. Values exceeding 360degrees are equivalent to the remainder after division by 360 degrees.<br>Default value: **360**<br>Drawingfrom the start position to the end position is performed only in the clockwise direction. |

## indicator

```TypeScript
indicator(value: GaugeIndicatorOptions)
```

Sets the indicator style of the gauge.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | GaugeIndicatorOptions | Yes | Indicator style.<br>**NOTE**<br>If this attribute is set to **null**, noindicator is displayed. |

## privacySensitive

```TypeScript
privacySensitive(isPrivacySensitiveMode: Optional<boolean>)
```

Sets whether to enable privacy mode. > **NOTE** > > This API can be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 20.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isPrivacySensitiveMode | Optional&lt;boolean&gt; | Yes | Whether to enable privacy mode. In privacy mode, the gaugeindicator points to **0**, the maximum and minimum values are masked, and the scale range is displayed in grayor the background color. The value **true** means to enable privacy mode, and **false** means the opposite.<br>Default value: **false**.&lt;!--Del--&gt;<br>For widgets, this property must be used with[FormComponent](arkts-arkui-formcomponent.md) and the [obscured](arkts-arkui-commonmethod-c.md#obscured-1) attribute to displayprivacy masking effects.&lt;!--DelEnd--&gt;. |

## startAngle

```TypeScript
startAngle(angle: number)
```

Sets the start angle of the gauge.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| angle | number | Yes | Start angle of the gauge. The 0 o'clock is defined as 0 degrees. Clockwise rotationrepresents positive angles, and counterclockwise rotation represents negative angles. Values exceeding 360degrees are equivalent to the remainder after division by 360 degrees.<br>Default value: **0**<br>Drawing fromthe start position to the end position is performed only in the clockwise direction. |

## strokeWidth

```TypeScript
strokeWidth(length: Length)
```

Sets the stroke width of the gauge.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| length | Length | Yes | Stroke width of the gauge.<br>Default value: **4**<br>Unit: vp<br>**NOTE**<br>A valueless than or equal to 0 is handled as the default value.<br>If the value exceeds the maximum value, the radiusof the gauge, the maximum value is used.<br>The value cannot be in percentage. |

## trackShadow

```TypeScript
trackShadow(value: GaugeShadowOptions)
```

Sets the shadow style of the gauge.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | GaugeShadowOptions | Yes | Shadow effect. You can specify the blur radius, and the offset along the Xand Y axes.<br>**NOTE**<br>The shadow color is the same as the ring color.<br>If this attribute is set to**null**, the shadow effect is disabled. |

## value

```TypeScript
value(value: number)
```

Sets the value of the gauge.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Value of the gauge. It can be dynamically changed.<br>Default value: **0** |

