# Rect

Describes a rectangle. The coordinate system for the returned detection points is based on the landscape device orientation, with the charging port on the right. In this coordinate system, the top-left corner is (0, 0), and the bottom-right corner is (1, 1). Here, **topLeftX** and **topLeftY** represent the coordinates of the top-left corner of the rectangle, whereas **width** and **height** represent the width and height of the rectangle, respectively. When cropping or selecting a face region based on specific requirements, the x and y coordinates of the rectangle must be multiplied by the width and height of the actual camera preview output stream to obtain the cropped face region. The width and height of the actual preview stream refer to the resolution of the camera output stream. For details, see **size** in [profile]camera.Profile. For details about how to obtain the preview stream data, see [Dual-Channel Preview (ArkTS)](docroot://media/camera/camera-dual-channel-preview.md).

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## topLeftY

```TypeScript
topLeftY: double
```

Y coordinate of the top-left corner of the rectangle, in the range of [0, 1].

**类型：** double

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## topLeftX

```TypeScript
topLeftX: double
```

X coordinate of the top-left corner of the rectangle, in the range of [0, 1].

**类型：** double

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## width

```TypeScript
width: double
```

Width of the rectangle, in the range of [0, 1].

**类型：** double

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## height

```TypeScript
height: double
```

Height of the rectangle, in the range of [0, 1].

**类型：** double

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

