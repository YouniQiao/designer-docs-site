# Button properties/events

In addition to the [universal attributes](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the following attributes are supported.

The [universal events](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md) are supported.

**Inheritance/Implementation:** ButtonAttribute extends [CommonMethod<ButtonAttribute>](CommonMethod<ButtonAttribute>)

**Since:** 7

<!--Device-unnamed-declare class ButtonAttribute extends CommonMethod<ButtonAttribute>--><!--Device-unnamed-declare class ButtonAttribute extends CommonMethod<ButtonAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="buttonstyle"></a>
## buttonStyle

```TypeScript
buttonStyle(value: ButtonStyleMode)
```

Sets the style and primacy for the button. The system automatically adjusts the button background color and text color based on the enumerated value. You can also use the [backgroundColor](arkts-arkui-commonmethod-c.md#backgroundcolor-1),[fontColor](ButtonAttribute#fontColor), and [role](ButtonAttribute#role) APIs to set the background color and text color. The actual displayed effect will be determined by the last setting.

> **NOTE**  
>  
> This API can be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 12.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

<!--Device-ButtonAttribute-buttonStyle(value: ButtonStyleMode): ButtonAttribute--><!--Device-ButtonAttribute-buttonStyle(value: ButtonStyleMode): ButtonAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ButtonStyleMode](arkts-arkui-buttonstylemode-e.md) | Yes | Style and primacy of the button<br>Default value: **ButtonStyleMode.EMPHASIZED** |

<a id="contentmodifier"></a>
## contentModifier

```TypeScript
contentModifier(modifier: ContentModifier<ButtonConfiguration>)
```

Creates a content modifier.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ButtonAttribute-contentModifier(modifier: ContentModifier<ButtonConfiguration>): ButtonAttribute--><!--Device-ButtonAttribute-contentModifier(modifier: ContentModifier<ButtonConfiguration>): ButtonAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | [ContentModifier](arkts-arkui-contentmodifier-i.md)&lt;ButtonConfiguration&gt; | Yes | Content modifier to apply to the button.<br>**modifier**: content modifier. You need a custom class to implement the **ContentModifier** API. |

<a id="controlsize"></a>
## controlSize

```TypeScript
controlSize(value: ControlSize)
```

Sets the size for the button.

> **NOTE**  
>  
> This API can be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 12.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

<!--Device-ButtonAttribute-controlSize(value: ControlSize): ButtonAttribute--><!--Device-ButtonAttribute-controlSize(value: ControlSize): ButtonAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ControlSize](arkts-arkui-controlsize-e.md) | Yes | Size of the button.<br>Default value: **ControlSize.NORMAL** |

<a id="fontcolor"></a>
## fontColor

```TypeScript
fontColor(value: ResourceColor)
```

Sets the font color for the button.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-ButtonAttribute-fontColor(value: ResourceColor): ButtonAttribute--><!--Device-ButtonAttribute-fontColor(value: ResourceColor): ButtonAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceColor](../arkts-apis/arkts-arkui-resourcecolor-t.md) | Yes | Font color of the button.<br>Default value: **$r('sys.color.font_on_primary')**,which means white |

<a id="fontfamily"></a>
## fontFamily

```TypeScript
fontFamily(value: string | Resource)
```

Sets the font family.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-ButtonAttribute-fontFamily(value: string | Resource): ButtonAttribute--><!--Device-ButtonAttribute-fontFamily(value: string | Resource): ButtonAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string \| Resource | Yes | Font family. The 'HarmonyOS Sans' font and [registered custom fonts](../arkts-apis/arkts-font.md) are supported. |

<a id="fontsize"></a>
## fontSize

```TypeScript
fontSize(value: Length)
```

Sets the font size for the button.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-ButtonAttribute-fontSize(value: Length): ButtonAttribute--><!--Device-ButtonAttribute-fontSize(value: Length): ButtonAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Length](../arkts-apis/arkts-arkui-length-t.md) | Yes | Font size of the button.<br>Default value:<br>**$r('sys.float.Body_L')** when **controlSize** is set to **ControlSize.NORMAL**<br>**$r('sys.float.Body_S')** when **controlSize** is set to **ControlSize.SMALL**<br>Note: For the string type, percentage values are not supported. |

<a id="fontstyle"></a>
## fontStyle

```TypeScript
fontStyle(value: FontStyle)
```

Sets the font style for the button.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-ButtonAttribute-fontStyle(value: FontStyle): ButtonAttribute--><!--Device-ButtonAttribute-fontStyle(value: FontStyle): ButtonAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [FontStyle](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-text-fontstyle-e.md) | Yes | Font style of the button.<br>Default value: **FontStyle.Normal** |

<a id="fontweight"></a>
## fontWeight

```TypeScript
fontWeight(value: number | FontWeight | string)
```

Sets the font weight for the button.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-ButtonAttribute-fontWeight(value: number | FontWeight | string): ButtonAttribute--><!--Device-ButtonAttribute-fontWeight(value: number | FontWeight | string): ButtonAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| FontWeight \| string | Yes | Font weight of the button. For the number type, the value ranges from 100 to 900, at an interval of 100. A larger value indicates a thicker font.<br>Default value: **500**<br>For the string type, only strings that represent a number, for example, **'400'**, and the following enumerated values of **FontWeight** are supported: **'bold'**, **'bolder'**, **'lighter'**, **'regular'**, and **'medium'**.<br>If the value is abnormal or invalid, the font weight defaults to 400. |

<a id="labelstyle"></a>
## labelStyle

```TypeScript
labelStyle(value: LabelStyle)
```

Sets the label style for the button.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ButtonAttribute-labelStyle(value: LabelStyle): ButtonAttribute--><!--Device-ButtonAttribute-labelStyle(value: LabelStyle): ButtonAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [LabelStyle](arkts-arkui-labelstyle-i.md) | Yes | Label style of the button. |

<a id="maxfontscale"></a>
## maxFontScale

```TypeScript
maxFontScale(scale: number | Resource)
```

Sets the maximum font scale factor for text.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ButtonAttribute-maxFontScale(scale: number | Resource): ButtonAttribute--><!--Device-ButtonAttribute-maxFontScale(scale: number | Resource): ButtonAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scale | number \| Resource | Yes | Maximum font scale factor for text.<br>Value range:[1, +∞)<br>**NOTE**<br>A value less than 1 is handled as **1**. Abnormal values are ineffective by default.<br>If this parameter is not configured, the maximum scale for a circular button is 1x, while the maximum scale for capsule-type buttons, standard buttons, and rounded rectangle buttons defaults to the system-defined value. |

<a id="minfontscale"></a>
## minFontScale

```TypeScript
minFontScale(scale: number | Resource)
```

Sets the minimum font scale factor for text.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ButtonAttribute-minFontScale(scale: number | Resource): ButtonAttribute--><!--Device-ButtonAttribute-minFontScale(scale: number | Resource): ButtonAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scale | number \| Resource | Yes | Minimum font scale factor for text.<br>Value range: [0, 1]<br>**NOTE**<br>A value less than 0 is handled as **0**. A value greater than 1 is handled as **1**. Abnormal values are ineffective by default. |

<a id="role"></a>
## role

```TypeScript
role(value: ButtonRole)
```

Sets the role of the button. The system automatically adjusts the button background color and text color based on the enumerated value. You can also use the [backgroundColor](arkts-arkui-commonmethod-c.md#backgroundcolor-1),[fontColor](ButtonAttribute#fontColor), and [buttonStyle](ButtonAttribute#buttonStyle) APIs to set the background color and text color. The actual displayed effect will be determined by the last setting.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-ButtonAttribute-role(value: ButtonRole): ButtonAttribute--><!--Device-ButtonAttribute-role(value: ButtonRole): ButtonAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ButtonRole](arkts-arkui-buttonrole-e.md) | Yes | Role of the button.<br>Default value: **ButtonRole.NORMAL** |

<a id="stateeffect"></a>
## stateEffect

```TypeScript
stateEffect(value: boolean)
```

Specifies whether to enable the pressed state effect when the button is clicked.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-ButtonAttribute-stateEffect(value: boolean): ButtonAttribute--><!--Device-ButtonAttribute-stateEffect(value: boolean): ButtonAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to enable the pressed state effect when the button is clicked.<br>**true**: The pressed state effect is enabled. **false**: The pressed state effect is disabled.<br>Default value: **true** |

<a id="type"></a>
## type

```TypeScript
type(value: ButtonType)
```

Sets the button type.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-ButtonAttribute-type(value: ButtonType): ButtonAttribute--><!--Device-ButtonAttribute-type(value: ButtonType): ButtonAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ButtonType](arkts-arkui-buttontype-e.md) | Yes | Button type.<br>API version 18 and later: The default value is **ButtonType.ROUNDED_RECTANGLE**. |

