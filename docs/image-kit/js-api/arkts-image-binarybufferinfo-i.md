# BinaryBufferInfo

描述二值图像缓冲区内的信息及数据。

**Since:** 26.0.0

**System capability:** SystemCapability.Multimedia.Image.ImagePacker

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## data

```TypeScript
data: ArrayBuffer
```

图像数据缓冲区，包含二值图像数据。

**Type:** ArrayBuffer

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.ImagePacker

## size

```TypeScript
size: Size
```

图像尺寸，包含宽度和高度。

**Type:** Size

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.ImagePacker

## bytesPerRow

```TypeScript
bytesPerRow?: int
```

每行字节数。若未指定，将按(width + 7) / 8计算。该值应为整数。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.ImagePacker

