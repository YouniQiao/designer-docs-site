# DecodingOptionsForPicture

图像解码设置选项。

**Since:** 13

**System capability:** SystemCapability.Multimedia.Image.ImageSource

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## desiredPixelFormat

```TypeScript
desiredPixelFormat?: PixelMapFormat
```

解码的像素格式。默认值为RGBA_8888。 仅支持设置：RGBA_8888、BGRA_8888、RGB_565、NV12及NV21。 当设置其他不支持的像素格式时，返回解码失败。

**Type:** PixelMapFormat

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.ImageSource

## desiredSizeForMainPixelMap

```TypeScript
desiredSizeForMainPixelMap?: Size
```

期望输出主图大小（必须为正整数），默认为主图原始尺寸。单位：像素（px）。 若主图原始尺寸与指定尺寸不一致，则会进行拉伸/缩放到指定尺寸。 辅助图的宽度与高度均与主图按照同比例进行相应拉伸/缩放。

**Type:** Size

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.ImageSource

## desiredAuxiliaryPictures

```TypeScript
desiredAuxiliaryPictures: Array<AuxiliaryPictureType>
```

设置AuxiliaryPicture类型，当未指定或传入空的Array时，系统会解码所有可用的AuxiliaryPicture类型。 如果不希望解码任何辅助图，可以直接解码为PixelMap，使用PixelMap创建仅包含主图的Picture。

**Type:** Array<AuxiliaryPictureType>

**Since:** 13

**System capability:** SystemCapability.Multimedia.Image.ImageSource

