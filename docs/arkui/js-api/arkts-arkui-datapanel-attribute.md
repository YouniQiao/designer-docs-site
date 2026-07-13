# DataPanel properties/events

In addition to the
[universal attributes](../../../../reference/apis-arkui/arkui-ts/ts-component-general-attributes.md), the following
attributes are supported.

The [universal events](../../../../reference/apis-arkui/arkui-ts/ts-component-general-events.md) are supported.

**Inheritance/Implementation:** DataPanelAttribute extends [CommonMethod<DataPanelAttribute>](CommonMethod<DataPanelAttribute>)

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## closeEffect

```TypeScript
closeEffect(value: boolean)
```

Sets whether to disable the rotation and shadow effects for the component. When the
[trackShadow](DataPanelAttribute#trackShadow) attribute is not configured, this attribute controls the shadow
effect. If the shadow effect is enabled, the default shadow style is applied. When **trackShadow** is explicitly
set, the **trackShadow** configuration takes precedence.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to disable the rotation and shadow effects for the component.<br>Default value:**false**. **true**: Disable the rotation and shadow effects. **false**: Enable the rotation and shadoweffects. |

## contentModifier

```TypeScript
contentModifier(modifier: ContentModifier<DataPanelConfiguration>)
```

Creates a content modifier.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | ContentModifier&lt;DataPanelConfiguration&gt; | Yes | Content modifier to apply to the current component.<br>**modifier**: content modifier. You need a custom class to implement the **ContentModifier** API. |

## strokeWidth

```TypeScript
strokeWidth(value: Length)
```

Sets the stroke width of the border. This attribute does not take effect when the data panel type is
**DataPanelType.Line**.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | Stroke width of the border.<br>Default value: **24**<br>Unit: vp<br>When string valuesare provided without explicit units, the default unit px will be applied. For example, '10' is equivalent to '10px'.<br>**NOTE**<br>If a value less than 0 is set, the default value is used.<br>If the value exceeds theradius of the ring, the thickness will automatically be adjusted to 12% of the ring's radius to prevent visualissues. Excessively large values may cause the ring to become invisible. |

## trackBackgroundColor

```TypeScript
trackBackgroundColor(value: ResourceColor)
```

Sets the background color.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | Background color.<br>The value is in hexadecimal ARGB notation. The first twodigits indicate transparency. Default value: **'#08182431'** |

## trackShadow

```TypeScript
trackShadow(value: DataPanelShadowOptions)
```

Sets the shadow style.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | DataPanelShadowOptions | Yes | Shadow style.<br>**NOTE**<br>If this parameter is set to **null**, theshadow effect is disabled. |

## valueColors

```TypeScript
valueColors(value: Array<ResourceColor | LinearGradient>)
```

Sets an array of data segment colors.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Array&lt;ResourceColor \| LinearGradient&gt; | Yes | Array of data segment colors. A value of the**ResourceColor** type indicates a solid color, and a value of the **LinearGradient** type indicates a colorgradient. The array defaults to gradient colors.<br>Default colors for the nine data segments:[{ color: '#F7CE00', offset: 0 }, { color: '#F99B11', offset: 1 }],[{ color: '#F76223', offset: 0 }, { color: '#F2400A', offset: 1 }],[{ color: '#F772AC', offset: 0 }, { color: '#E65392', offset: 1 }],[{ color: '#A575EB', offset: 0 }, { color: '#A12DF7', offset: 1 }],[{ color: '#7B79F7', offset: 0 }, { color: '#4B48F7', offset: 1 }],[{ color: '#4B8AF3', offset: 0 }, { color: '#007DFF', offset: 1 }],[{ color: '#73C1E6', offset: 0 }, { color: '#4FB4E3', offset: 1 }],[{ color: '#A5D61D', offset: 0 }, { color: '#69D14F', offset: 1 }],[{ color: '#A2A2B0', offset: 0 }, { color: '#8E8E93', offset: 1 }] |

