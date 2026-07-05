# HdrDecomposeOptions

HDR PixelMap分解为Picture的配置选项，分解后的Picture包含一张SDR主图和一张增益图（GainMap）。

**Since:** 26.0.0

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## desiredPixelFormat

```TypeScript
desiredPixelFormat?: PixelMapFormat
```

分解后SDR PixelMap和增益图的像素格式。支持RGBA_8888、NV12、NV21。默认值为RGBA_8888。

**Type:** PixelMapFormat

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

## isFullSizeGainmap

```TypeScript
isFullSizeGainmap?: boolean
```

是否生成全尺寸增益图。 true表示生成全尺寸增益图，增益图尺寸和主图一致；false表示不生成全尺寸增益图，增益图尺寸是主图的一半。默认值为false。

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

