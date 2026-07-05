# Component

描述图像颜色分量。

**Since:** 9

**System capability:** SystemCapability.Multimedia.Image.Core

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## componentType

```TypeScript
readonly componentType: ComponentType
```

组件类型。

**Type:** ComponentType

**Since:** 9

**System capability:** SystemCapability.Multimedia.Image.Core

## rowStride

```TypeScript
readonly rowStride: int
```

行距。单位：字节（Byte）。读取相机预览流数据时，需要按stride进行读取，使用详情请参考 [相机预览花屏解决方案](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-deal-stride-solution)。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Multimedia.Image.Core

## byteBuffer

```TypeScript
readonly byteBuffer: ArrayBuffer
```

组件缓冲区。

**Type:** ArrayBuffer

**Since:** 9

**System capability:** SystemCapability.Multimedia.Image.Core

## pixelStride

```TypeScript
readonly pixelStride: int
```

像素间距。单位：字节（Byte）。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Multimedia.Image.Core

