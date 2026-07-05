# SourceOptions

ImageSource的初始化选项。

**Since:** 9

**System capability:** SystemCapability.Multimedia.Image.Core

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## sourcePixelFormat

```TypeScript
sourcePixelFormat?: PixelMapFormat
```

图片像素格式，默认值为UNKNOWN。

**Type:** PixelMapFormat

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

## sourceDensity

```TypeScript
sourceDensity: int
```

图片资源像素密度。单位：ppi（像素/英寸）。 在解码参数[DecodingOptions]image.DecodingOptions未设置desiredSize的前提下，当前参数SourceOptions.sourceDensity与 DecodingOptions.fitDensity非零时将对解码输出的pixelmap进行缩放。 缩放后宽计算公式如下(高同理)：(width * fitDensity + (sourceDensity >> 1)) / sourceDensity。

**Type:** int

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

## sourceSize

```TypeScript
sourceSize?: Size
```

图像像素大小，默认值为空。

**Type:** Size

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

