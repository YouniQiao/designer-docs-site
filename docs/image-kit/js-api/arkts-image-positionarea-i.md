# PositionArea

表示图片指定区域内的数据。

**Since:** 7

**System capability:** SystemCapability.Multimedia.Image.Core

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## pixels

```TypeScript
pixels: ArrayBuffer
```

像素数据缓冲区。仅支持BGRA_8888格式的像素数据。

**Type:** ArrayBuffer

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

## offset

```TypeScript
offset: int
```

偏移量。单位：字节（Byte）。

**Type:** int

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

## region

```TypeScript
region: Region
```

区域信息，用于按区域进行图像数据的读写。写入的区域宽度加X坐标不能大于原图的宽度，写入的区域高度加Y坐标不能大于原图的高度。

**Type:** Region

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

## stride

```TypeScript
stride: int
```

跨距，内存中每行像素所占的空间。单位：字节（Byte）。stride >= region.size.width * 4，不满足时数据读取异常。

**Type:** int

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

