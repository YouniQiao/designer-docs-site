# ImageSpan properties/events

The attributes inherit from [BaseSpan](arkts-arkui-basespan-c.md#basespan). Among the universal attributes, [size](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md#common), [background](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md#common), and [border](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md#common) are supported. Among all the universal events, only the [click event](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md#common) is supported. The following events are also supported.

**Inheritance/Implementation:** ImageSpanAttribute extends [BaseSpan<ImageSpanAttribute>](BaseSpan<ImageSpanAttribute>)

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## alt

```TypeScript
alt(value: PixelMap)
```

Sets the placeholder image displayed during image loading.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | PixelMap | Yes | Placeholder image displayed during image loading. The[PixelMap](../../apis-image-kit/arkts-apis/arkts-image-pixelmap-i.md#pixelmap) type is supported.<br>Default value: **null** |

## colorFilter

```TypeScript
colorFilter(filter: ColorFilter | DrawingColorFilter)
```

Sets the color filter for the image.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | ColorFilter \| DrawingColorFilter | Yes | 1. Color filter of the image. The input parameter is a 4 x 5RGBA transformation matrix.<br>The first row of the matrix represents a vector value of R (red), the second rowrepresents a vector value of G (green), the third row represents a vector value of B (blue), and the fourth rowrepresents a vector value of A (alpha). The four rows represent different RGBA vector values.<br>If the matrixcontains entries of 1 on the diagonal and entries of 0 in other places, the original color of the image isretained.<br> **Calculation rule:**<br>If the input filter matrix is as follows:<br>![image-matrix-1](../../../../reference/apis-arkui/arkui-ts/figures/image_matrix_1.png)<br>And the pixel point is[R, G, B, A] with color values in the [0, 255] range,<br>Then the color after filtering is [R', G', B', A'].<br>![image-matrix-2](../../../../reference/apis-arkui/arkui-ts/figures/image_matrix_2.png)<br>2. The ColorFiltertype of **@ohos.graphics.drawing** can be used as the input parameter.<br>**NOTE**<br>The DrawingColorfiltertype can be used in atomic services. The SVG image source takes effect only for the stroke attribute. |

## objectFit

```TypeScript
objectFit(value: ImageFit)
```

Sets the image scale type.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ImageFit | Yes | Image scale type.<br>Default value: **ImageFit.Cover** |

## onComplete

```TypeScript
onComplete(callback: ImageCompleteCallback)
```

Triggered when the image is successfully loaded or decoded. The size of the loaded image is returned.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ImageCompleteCallback | Yes | Callback triggered when the image is successfully loaded or decoded. |

## onError

```TypeScript
onError(callback: ImageErrorCallback)
```

Triggered when an error occurs during image loading.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ImageErrorCallback | Yes | Callback triggered when an error occurs during image loading. |

## supportSvg2

```TypeScript
supportSvg2(enable: Optional<boolean>)
```

Sets whether to enable [enhanced SVG tag parsing](../../../../reference/apis-arkui/arkui-ts/ts-image-svg2-capabilities.md). When this feature is enabled, SVG image rendering behavior changes accordingly. After the **ImageSpan** component is created, the value of this attribute cannot be dynamically changed.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | Optional&lt;boolean&gt; | Yes | Whether to enable[enhanced SVG tag parsing capabilities](../../../../reference/apis-arkui/arkui-ts/ts-image-svg2-capabilities.md).<br>**true**: Enable enhanced SVG parsing. **false**: Use original SVG parsing.<br>Default value: **false**. |

## verticalAlign

```TypeScript
verticalAlign(value: ImageSpanAlignment)
```

Sets the alignment mode of the image relative to the line height.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ImageSpanAlignment | Yes | Alignment mode of the image relative to the line height.<br>Default value:**ImageSpanAlignment.BOTTOM** |

