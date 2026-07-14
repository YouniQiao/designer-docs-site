# TextTimer properties/events

In addition to the [universal attributes](../../../../reference/apis-arkui/arkui-ts/ts-component-general-attributes.md), the following attributes are supported. In addition to the [universal events](../../../../reference/apis-arkui/arkui-ts/ts-component-general-events.md), the following events are supported.

**Inheritance/Implementation:** TextTimerAttribute extends [CommonMethod<TextTimerAttribute>](CommonMethod<TextTimerAttribute>)

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## contentModifier

```TypeScript
contentModifier(modifier: ContentModifier<TextTimerConfiguration>)
```

Creates a content modifier.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | ContentModifier&lt;TextTimerConfiguration&gt; | Yes | Content modifier to apply to the **TextTimer**component.<br>**modifier**: content modifier. You need a custom class to implement the **ContentModifier** API. |

## fontColor

```TypeScript
fontColor(value: ResourceColor)
```

Sets the font color.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 10.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | Font color.<br>Default value on wearable devices: **'#c5ffffff'**, indicating thatthe text is displayed in white.<br>Default value on other devices: **'#e6182431'**, indicating that the text isdisplayed in black. |

## fontFamily

```TypeScript
fontFamily(value: ResourceStr)
```

Sets the font family.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 10.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceStr | Yes | Font family. The default font is **'HarmonyOS Sans'**.<br>The 'HarmonyOS Sans' fontand [registered custom fonts](../arkts-apis/arkts-font.md) are supported for applications.<br>Only the 'HarmonyOSSans' font is supported for widgets. |

## fontSize

```TypeScript
fontSize(value: Length)
```

Sets the font size.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 10.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | Font size. When the value is of the number type in Length, the unit is fp. The defaultfont size is 16 fp. When the value is of the string type in Length:<br>- If the string does not start with adigit, it is treated as 0 fp.<br>- If the string starts with a digit and contains characters other than[pixel units](../../../../reference/apis-arkui/arkui-ts/ts-pixel-units.md) (such as letters or specialcharacters), the leading numeric part is extracted as the value and the unit is fp. For example, the value**"abc"** is treated as **0fp**, **"10vp"** is treated as **10vp**, and **"10vp11abc"** is treated as **10fp**.The value cannot be a percentage. |

## fontStyle

```TypeScript
fontStyle(value: FontStyle)
```

Sets the font style.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 10.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | FontStyle | Yes | Font style, for example, italic.<br>Default value: **FontStyle.Normal** |

## fontWeight

```TypeScript
fontWeight(value: number | FontWeight | ResourceStr)
```

Sets the font weight of the text. If the value is too large, the text in different fonts may be truncated.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 10.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| FontWeight \| ResourceStr | Yes | Font weight of the text. The value range of the number type is[100, 900]. The value interval is 100. A larger value indicates a wider font. If the value of the number typeis not within the value range, the default value is **400**. The [ResourceStr](arkts-arkui-resourcestr-t.md) type supportsonly strings of the number type, such as **"400"**, **"bold"**, **"bolder"**, **"lighter"**, **"regular"**, and**"medium"**, corresponding to the enums in **FontWeight**.<br>Default value: **FontWeight.Normal**<br>TheResource type is supported since API version 20.<br>**Since:** 20 |

## format

```TypeScript
format(value: string)
```

Sets the custom format. The value must contain at least one of the following keywords: **HH**, **mm**, **ss**, and **SS**. If the date format is yy, MM, or dd, the default value is used. The timer update frequency is in the minimum unit of **format**. For example, if **format** is set to **'HH:mm'**, the update frequency is one minute.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 10.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | Yes | Custom date display format.<br>Default value: **'HH:mm:ss.SS'** |

## onTimer

```TypeScript
onTimer(event: (utc: number, elapsedTime: number) => void)
```

Event triggered when the time text changes. This event is not triggered when the screen is locked or the application is running in the background. When high-precision [format](TextTimerAttribute#format)s (such as **SS**) are used, the callback interval may vary.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 10.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (utc: number, elapsedTime: number) =&gt; void | Yes | utc: Linux timestamp, which is the amount of time that has elapsed since January 1, 1970, in the minimum unit of the format.<br>elapsedTime: Elapsed time of the timer, in the minimum unit of theformat. |

## textShadow

```TypeScript
textShadow(value: ShadowOptions | Array<ShadowOptions>)
```

Sets the text shadow. It supports input parameters in an array to implement multiple text shadows. This API does not work with the **fill** attribute or coloring strategy. > **NOTE** > > This API can be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 12.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ShadowOptions \| Array&lt;ShadowOptions&gt; | Yes | Parameters of the text shadow effect, including the color,blur radius, and offset. |

