# ImageReceiverOptions

ImageReceiver的初始化选项。

**Since:** 23

**System capability:** SystemCapability.Multimedia.Image.ImageReceiver

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## size

```TypeScript
size?: Size
```

图像的大小，包括宽与高，且值都大于0。单位：像素（px）。 该参数不会影响接收到的图片大小，实际返回大小由生产者决定，如相机。

**Type:** Size

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.ImageReceiver

## capacity

```TypeScript
capacity?: int
```

可同时访问的最大图像数量。该值必须为正整数，且小于或等于64张。 该参数仅作为期望值，实际capacity由设备硬件决定。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.ImageReceiver

