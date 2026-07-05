# AuxiliaryPictureInfo

表示辅助图的图像信息。

**Since:** 13

**System capability:** SystemCapability.Multimedia.Image.Core

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## colorSpace

```TypeScript
colorSpace: colorSpaceManager.ColorSpaceManager
```

目标色彩空间。

**Type:** colorSpaceManager.ColorSpaceManager

**Since:** 13

**System capability:** SystemCapability.Multimedia.Image.Core

## pixelFormat

```TypeScript
pixelFormat: PixelMapFormat
```

像素格式。

**Type:** PixelMapFormat

**Since:** 13

**System capability:** SystemCapability.Multimedia.Image.Core

## size

```TypeScript
size: Size
```

图片大小。

**Type:** Size

**Since:** 13

**System capability:** SystemCapability.Multimedia.Image.Core

## rowStride

```TypeScript
rowStride: int
```

行跨距。单位：字节（Byte）。应大于或等于图像每行像素数据所占的字节数，不满足时数据读取异常。

**Type:** int

**Since:** 13

**System capability:** SystemCapability.Multimedia.Image.Core

## auxiliaryPictureType

```TypeScript
auxiliaryPictureType: AuxiliaryPictureType
```

辅助图的图像类型。

**Type:** AuxiliaryPictureType

**Since:** 13

**System capability:** SystemCapability.Multimedia.Image.Core

