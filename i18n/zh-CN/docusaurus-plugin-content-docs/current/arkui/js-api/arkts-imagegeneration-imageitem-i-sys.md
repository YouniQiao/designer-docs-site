# ImageItem

Image information for AI-generated images.

**起始版本：** 23

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { imageGeneration } from '@kit.ArkUI';
```

## rect

```TypeScript
rect?: common2D.Rect
```

The size and position of the container used to display images in the preview canvas. <p>**NOTE**: it is recommended to be provided in multi-image fusion scenarios to achieve better results. </p>

**类型：** common2D.Rect

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## image

```TypeScript
image?: image.PixelMap
```

Image decoding information for preview in the page of ImageGeneratorDialog. <p>**NOTE**: Displayed within the canvas in the ImageGeneratorDialog; if not provided, the image will be decoded from the url. </p>

**类型：** image.PixelMap

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## isHandwrite

```TypeScript
isHandwrite?: boolean
```

whether the image type is a hand-drawn line art. <p>**NOTE**: it is recommended to be provided in Hand-drawn line art scenarios to achieve better results. </p>

**类型：** boolean

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## rotation

```TypeScript
rotation?: componentUtils.Rotation2D
```

The rotation of the container used to display images in the preview canvas. <p>**NOTE**: it is recommended to be provided in multi-image fusion scenarios to achieve better results. </p>

**类型：** componentUtils.Rotation2D

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## url

```TypeScript
url?: ResourceStr
```

Original image path information for image generation; <p>**NOTE**: for high-resolution scenarios, it is best to provide the original image path; if not provided, the image.PixelMap will be used for image generation. </p>

**类型：** ResourceStr

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## zIndex

```TypeScript
zIndex?: int
```

In scenarios with multiple images, information about image rendering hierarchy. <p>**NOTE**: it is recommended to be provided in multi-image fusion scenarios to achieve better results. </p>

**类型：** int

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

