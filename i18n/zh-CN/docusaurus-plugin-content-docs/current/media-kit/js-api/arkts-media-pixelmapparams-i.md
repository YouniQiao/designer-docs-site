# PixelMapParams

Defines the format parameters of the video thumbnail to be obtained.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Media.AVImageGenerator

## 导入模块

```TypeScript
import { media } from '@kit.MediaKit';
```

## autoFlip

```TypeScript
autoFlip?: boolean
```

Auto flip the thumbnail when video has mirror attribute (Vertical Flip or Horizontal Flip). If the value is false, the returned thumbnail will not be flipped. **System API**: This is a system API.

**类型：** boolean

**起始版本：** 21

**系统能力：** SystemCapability.Multimedia.Media.AVImageGenerator

**系统接口：** 此接口为系统接口。

## width

```TypeScript
width?: int
```

Width of the thumbnail. Unit: px. The value must be greater than 0 and less than or equal to the width of the original video. Otherwise, the returned thumbnail will not be scaled.

**类型：** int

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Media.AVImageGenerator

## colorFormat

```TypeScript
colorFormat?: PixelFormat
```

Color format of the thumbnail. **System API**: This is a system API.

**类型：** PixelFormat

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Media.AVImageGenerator

**系统接口：** 此接口为系统接口。

## height

```TypeScript
height?: int
```

Height of the thumbnail. Unit: px. The value must be greater than 0 and less than or equal to the height of the original video. Otherwise, the returned thumbnail will not be scaled.

**类型：** int

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Media.AVImageGenerator

