# ImageAttachment

Describes the image attachment.

**Since:** 12

<!--Device-unnamed-declare class ImageAttachment--><!--Device-unnamed-declare class ImageAttachment-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="constructor"></a>
## constructor

```TypeScript
constructor(value: ImageAttachmentInterface)
```

A constructor used to create an image object.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ImageAttachment-constructor(value: ImageAttachmentInterface)--><!--Device-ImageAttachment-constructor(value: ImageAttachmentInterface)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ImageAttachmentInterface](arkts-arkui-imageattachmentinterface-i.md) | Yes | Image attachment options. |

<a id="constructor-1"></a>
## constructor

```TypeScript
constructor(attachment: Optional<AttachmentType>)
```

A constructor used to create an image object. Compared to the constructor with a **value** type parameter, this constructor with an **attachment** type parameter supports images of **undefined** and [ResourceStr](arkts-arkui-resourcestr-t.md) types.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-ImageAttachment-constructor(attachment: Optional<AttachmentType>)--><!--Device-ImageAttachment-constructor(attachment: Optional<AttachmentType>)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| attachment | [Optional](../arkts-components/arkts-arkui-optional-t.md)&lt;AttachmentType&gt; | Yes | Image attachment, which can be of type PixelMap or [ResourceStr](arkts-arkui-resourcestr-t.md). |

## colorFilter

```TypeScript
readonly colorFilter?: ColorFilterType
```

Image color filter of the styled string.

**Type:** ColorFilterType

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-ImageAttachment-readonly colorFilter?: ColorFilterType--><!--Device-ImageAttachment-readonly colorFilter?: ColorFilterType-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## layoutStyle

```TypeScript
readonly layoutStyle?: ImageAttachmentLayoutStyle
```

Image layout of the styled string.

**Type:** ImageAttachmentLayoutStyle

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ImageAttachment-readonly layoutStyle?: ImageAttachmentLayoutStyle--><!--Device-ImageAttachment-readonly layoutStyle?: ImageAttachmentLayoutStyle-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## objectFit

```TypeScript
readonly objectFit?: ImageFit
```

Image scale type of the styled string.

**Type:** ImageFit

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ImageAttachment-readonly objectFit?: ImageFit--><!--Device-ImageAttachment-readonly objectFit?: ImageFit-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## size

```TypeScript
readonly size?: SizeOptions
```

Image size of the styled string.

Number-type values use px as the unit.

**Type:** SizeOptions

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ImageAttachment-readonly size?: SizeOptions--><!--Device-ImageAttachment-readonly size?: SizeOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## sizeInVp

```TypeScript
readonly sizeInVp?: SizeOptions
```

Image size of the styled string.

Number-type values use vp as the unit.

If **ImageAttachment** is set to a negative value or **undefined**, **undefined** is returned.

**Type:** SizeOptions

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 21.

<!--Device-ImageAttachment-readonly sizeInVp?: SizeOptions--><!--Device-ImageAttachment-readonly sizeInVp?: SizeOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## supportSvg2

```TypeScript
readonly supportSvg2?: boolean
```

Whether to enable [enhanced SVG tag parsing capabilities](docroot://reference/apis-arkui/arkui-ts/ts-image-svg2-capabilities.md).

**true**: Enable enhanced SVG tag parsing. **false**: Use original SVG tag parsing.

Default value: **false**

**Type:** boolean

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ImageAttachment-readonly supportSvg2?: boolean--><!--Device-ImageAttachment-readonly supportSvg2?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## value

```TypeScript
readonly value: PixelMap
```

Image data source of the styled string.

**Type:** PixelMap

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ImageAttachment-readonly value: PixelMap--><!--Device-ImageAttachment-readonly value: PixelMap-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## verticalAlign

```TypeScript
readonly verticalAlign?: ImageSpanAlignment
```

Image alignment mode of the styled string.

**Type:** ImageSpanAlignment

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ImageAttachment-readonly verticalAlign?: ImageSpanAlignment--><!--Device-ImageAttachment-readonly verticalAlign?: ImageSpanAlignment-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

