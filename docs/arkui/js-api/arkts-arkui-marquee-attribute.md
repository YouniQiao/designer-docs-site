# Marquee properties/events

In addition to the [universal attributes](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the following attributes are supported.

**Inheritance/Implementation:** MarqueeAttribute extends [CommonMethod<MarqueeAttribute>](CommonMethod<MarqueeAttribute>)

**Since:** 8

<!--Device-unnamed-declare class MarqueeAttribute extends CommonMethod<MarqueeAttribute>--><!--Device-unnamed-declare class MarqueeAttribute extends CommonMethod<MarqueeAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## allowScale

```TypeScript
allowScale(value: boolean)
```

Sets whether to allow text to scale.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-MarqueeAttribute-allowScale(value: boolean): MarqueeAttribute--><!--Device-MarqueeAttribute-allowScale(value: boolean): MarqueeAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to allow text to scale.<br>**true**: yes; **false**: no<br>Default value:**false**<br>**NOTE**<br>This parameter is effective only when [fontSize](MarqueeAttribute#fontSize) is in fp units. |

## fontColor

```TypeScript
fontColor(value: ResourceColor)
```

Sets the font color.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-MarqueeAttribute-fontColor(value: ResourceColor): MarqueeAttribute--><!--Device-MarqueeAttribute-fontColor(value: ResourceColor): MarqueeAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceColor](../arkts-apis/arkts-arkui-resourcecolor-t.md) | Yes | Font color.<br>Default value: **'#c5ffffff'** (light blue) on wearables;**'e6182431'** (black) on other devices |

## fontFamily

```TypeScript
fontFamily(value: string | Resource)
```

Sets the font family.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-MarqueeAttribute-fontFamily(value: string | Resource): MarqueeAttribute--><!--Device-MarqueeAttribute-fontFamily(value: string | Resource): MarqueeAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string \| Resource | Yes | Font family. Default font: **'HarmonyOS Sans'**<br>Supported fonts include **'HarmonyOS Sans'** and custom fonts registered using [loadFontSync](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-text-fontcollection-c.md#loadfontsync-1).<br>Only the 'HarmonyOS Sans' font is supported for widgets. |

## fontSize

```TypeScript
fontSize(value: Length)
```

Sets the text size.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-MarqueeAttribute-fontSize(value: Length): MarqueeAttribute--><!--Device-MarqueeAttribute-fontSize(value: Length): MarqueeAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Length](../arkts-apis/arkts-arkui-length-t.md) | Yes | Font size. If **fontSize** is of the number type, the unit fp is used. The default font size is 16 fp. This parameter cannot be set in percentage. |

## fontWeight

```TypeScript
fontWeight(value: number | FontWeight | string)
```

Sets the font weight. If the value is too large, the text may be clipped depending on the font.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-MarqueeAttribute-fontWeight(value: number | FontWeight | string): MarqueeAttribute--><!--Device-MarqueeAttribute-fontWeight(value: number | FontWeight | string): MarqueeAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| FontWeight \| string | Yes | Font weight. For the number type, the value range is [100, 900], at an interval of 100. The default value is **400**. A larger value indicates a heavier font weight. For the string type, only strings that represent a number, for example, **400**, and the following enumerated values of **FontWeight** are supported: **bold**, **bolder**, **lighter**, **regular**, and **medium**.<br>Default value:**FontWeight.Normal** |

## marqueeUpdateStrategy

```TypeScript
marqueeUpdateStrategy(value: MarqueeUpdateStrategy)
```

Sets the scrolling strategy for the marquee after its attributes are updated. (This attribute takes effect when the marquee is in the playing state and the text content width exceeds the width of the marquee component.)

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MarqueeAttribute-marqueeUpdateStrategy(value: MarqueeUpdateStrategy): MarqueeAttribute--><!--Device-MarqueeAttribute-marqueeUpdateStrategy(value: MarqueeUpdateStrategy): MarqueeAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [MarqueeUpdateStrategy](../arkts-apis/arkts-arkui-enums-marqueeupdatestrategy-e.md) | Yes | Scrolling strategy for the marquee after its attributes are updated.<br>Default value: **MarqueeUpdateStrategy.DEFAULT** |

## onBounce

```TypeScript
onBounce(event: () => void)
```

Triggered when the marquee has reached the end. This event will be triggered for multiple times if the **loop** attribute is not set to **1**.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-MarqueeAttribute-onBounce(event: () => void): MarqueeAttribute--><!--Device-MarqueeAttribute-onBounce(event: () => void): MarqueeAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () => void | Yes | Callback invoked when the marquee has finished scrolling once. |

## onFinish

```TypeScript
onFinish(event: () => void)
```

Triggered when the marquee has finished the number of scrolling times set by the **loop** attribute.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-MarqueeAttribute-onFinish(event: () => void): MarqueeAttribute--><!--Device-MarqueeAttribute-onFinish(event: () => void): MarqueeAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () => void | Yes | Callback invoked when the marquee has finished the number of scrolling times set by the **loop** attribute. |

## onStart

```TypeScript
onStart(event: () => void)
```

Triggered when the marquee text changes or starts scrolling.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-MarqueeAttribute-onStart(event: () => void): MarqueeAttribute--><!--Device-MarqueeAttribute-onStart(event: () => void): MarqueeAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () => void | Yes | Callback invoked when the marquee text changes or starts scrolling. |

## onStop

```TypeScript
onStop(event: Callback<void> | undefined)
```

Called when scrolling is stoped.

<p><strong>NOTE</strong>:<br>If event is set to undefined, the current event will be unbound.</p>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**Widget capability:** This API can be used in ArkTS widgets since API version 26.0.0.

<!--Device-MarqueeAttribute-onStop(event: Callback<void> | undefined): MarqueeAttribute--><!--Device-MarqueeAttribute-onStop(event: Callback<void> | undefined): MarqueeAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<void> \| undefined | Yes |  |

