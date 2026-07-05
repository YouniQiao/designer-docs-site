# ImageBufferData

保存图像缓冲区数据的指针、不同颜色分量的行间距与像素间距信息。

**Since:** 23

**System capability:** SystemCapability.Multimedia.Image.Core

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## rowStride

```TypeScript
readonly rowStride: int[]
```

颜色分量的行跨距。单位：字节（Byte）。 对于编码后的图片如JPEG，该属性无意义。 读取相机预览流数据时，需要按rowStride进行读取，使用详情请参考 [相机预览花屏解决方案](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-deal-stride-solution)。

**Type:** int[]

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## byteBuffer

```TypeScript
readonly byteBuffer: ArrayBuffer
```

图像缓冲区。

**Type:** ArrayBuffer

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## pixelStride

```TypeScript
readonly pixelStride: int[]
```

颜色分量的像素间距。单位：字节（Byte）。 对于编码后的图片如JPEG，该属性无意义。

**Type:** int[]

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

