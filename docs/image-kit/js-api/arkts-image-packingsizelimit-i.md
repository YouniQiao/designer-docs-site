# PackingSizeLimit

图片编码的大小限制。

**Since:** 26.0.0

**System capability:** SystemCapability.Multimedia.Image.ImagePacker

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## level

```TypeScript
level: AntiAliasingLevel
```

缩放时采用的缩放算法。默认值是AntiAliasingLevel.NONE。

**Type:** AntiAliasingLevel

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.ImagePacker

## maxSize

```TypeScript
maxSize: Size
```

最大编码尺寸。 当指定的width或者height大于0时，原图尺寸超过限制将保持原宽高比进行缩放，确保图像尺寸不超过该边界。 默认值为{width: 0, height: 0}，表示不限制编码尺寸。 单位：像素（px）。

**Type:** Size

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.ImagePacker

