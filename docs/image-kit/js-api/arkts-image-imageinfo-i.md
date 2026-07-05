# ImageInfo

表示图片信息。

**Since:** 6

**System capability:** SystemCapability.Multimedia.Image.Core

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## isHdr

```TypeScript
isHdr: boolean
```

true表示图片为高动态范围（HDR），false表示图片非高动态范围（SDR）。对于[ImageSource]image.ImageSource，代表源图片是否为HDR；对于 [PixelMap]image.PixelMap，代表解码后的PixelMap是否为HDR。

**Type:** boolean

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.Core

## pixelFormat

```TypeScript
pixelFormat: PixelMapFormat
```

像素格式。

**Type:** PixelMapFormat

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

## density

```TypeScript
density: int
```

像素密度。单位：ppi（像素/英寸）。

**Type:** int

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

## size

```TypeScript
size: Size
```

图片大小。

**Type:** Size

**Since:** 6

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

## alphaType

```TypeScript
alphaType: AlphaType
```

透明度。

**Type:** AlphaType

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

## mimeType

```TypeScript
mimeType: string
```

图片真实格式（MIME type）。 图片解码和图片编码支持格式的范围不同，请避免直接将解码得到的图片真实格式作为图片编码时[PackingOption]image.PackingOption的format。 可以使用ImageSource[属性](docroot://reference/apis-image-kit/arkts-apis-image-ImageSource.md#属性)中的supportedFormats和 ImagePacker[属性](docroot://reference/apis-image-kit/arkts-apis-image-ImagePacker.md#属性)中的supportedFormats查看解码和编码支持 的格式范围。

**Type:** string

**Since:** 12

**System capability:** SystemCapability.Multimedia.Image.Core

## stride

```TypeScript
stride: int
```

跨距，内存中每行像素所占的空间。单位：字节（Byte）。stride >= size.width * 4，不满足时数据读取异常。

**Type:** int

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

