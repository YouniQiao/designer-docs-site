# ImageRotateOrientation

```TypeScript
declare enum ImageRotateOrientation
```

期望的图像内容显示方向。

**Since:** 14

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## AUTO

```TypeScript
AUTO = 0
```

读取图片携带的EXIF元数据作为显示方向，支持旋转和镜像。 [PixelMap](../../apis-image-kit/arkts-apis/arkts-image-pixelmap-i.md#PixelMap)和 [DrawableDescriptor](arkts-drawabledescriptor-t.md#DrawableDescriptor)类型的图片不包含头信息，调用该接口时图片显示效果不变化。 ![imageRotateOrientation_0](docroot://reference/apis-arkui/arkui-ts/figures/imageRotateOrientation_0.png)

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** From API version 23 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## UP

```TypeScript
UP = 1
```

默认按照当前图片的像素数据进行显示，不做任何处理。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** From API version 23 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## RIGHT

```TypeScript
RIGHT = 2
```

将当前图片顺时针旋转90度后显示。 ![imageRotateOrientation_2](docroot://reference/apis-arkui/arkui-ts/figures/imageRotateOrientation_2.png)

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** From API version 23 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## DOWN

```TypeScript
DOWN = 3
```

将当前图片顺时针旋转180度后显示。 ![imageRotateOrientation_3](docroot://reference/apis-arkui/arkui-ts/figures/imageRotateOrientation_3.png)

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** From API version 23 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## LEFT

```TypeScript
LEFT = 4
```

将当前图片顺时针旋转270度后显示。 ![imageRotateOrientation_4](docroot://reference/apis-arkui/arkui-ts/figures/imageRotateOrientation_4.png)

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** From API version 23 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## UP_MIRRORED

```TypeScript
UP_MIRRORED = 5
```

将当前图片水平翻转后显示。 ![imageRotateOrientation_5](docroot://reference/apis-arkui/arkui-ts/figures/imageRotateOrientation_5.png)

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** From API version 23 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## RIGHT_MIRRORED

```TypeScript
RIGHT_MIRRORED = 6
```

将当前图片水平翻转再顺时针旋转90度后显示。 ![imageRotateOrientation_6](docroot://reference/apis-arkui/arkui-ts/figures/imageRotateOrientation_6.png)

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** From API version 23 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## DOWN_MIRRORED

```TypeScript
DOWN_MIRRORED = 7
```

将当前图片垂直翻转后显示。 ![imageRotateOrientation_7](docroot://reference/apis-arkui/arkui-ts/figures/imageRotateOrientation_7.png)

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** From API version 23 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## LEFT_MIRRORED

```TypeScript
LEFT_MIRRORED = 8
```

将当前图片水平翻转再顺时针旋转270度后显示。 ![imageRotateOrientation_8](docroot://reference/apis-arkui/arkui-ts/figures/imageRotateOrientation_8.png)

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** From API version 23 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

