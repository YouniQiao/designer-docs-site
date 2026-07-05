# InitializationOptions

PixelMap的初始化选项。

**Since:** 8

**System capability:** SystemCapability.Multimedia.Image.Core

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## scaleMode

```TypeScript
scaleMode?: ScaleMode
```

缩放模式。默认值为FIT_TARGET_SIZE。

**Type:** ScaleMode

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

## pixelFormat

```TypeScript
pixelFormat?: PixelMapFormat
```

生成的PixelMap的像素格式。默认值为RGBA_8888。

**Type:** PixelMapFormat

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

## size

```TypeScript
size: Size
```

创建的图片尺寸，宽高值必须为正整数。

**Type:** Size

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

## alphaType

```TypeScript
alphaType?: AlphaType
```

透明度。默认值为IMAGE_ALPHA_TYPE_PREMUL。

**Type:** AlphaType

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

## editable

```TypeScript
editable?: boolean
```

图像像素是否可被编辑。true表示可被编辑，false表示不可被编辑。设为false时，可提升图像的渲染和传输性能，但是图像不可被二次编辑。例如，writePixels操作将失败。默认值为false。

**Type:** boolean

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

## srcPixelFormat

```TypeScript
srcPixelFormat?: PixelMapFormat
```

传入的缓冲区数据的像素格式。默认值为BGRA_8888。

**Type:** PixelMapFormat

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.Core

