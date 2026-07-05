# PhotoCaptureSetting

Describes the settings for taking an image.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## mirror

```TypeScript
mirror?: boolean
```

Whether mirror photography is enabled (disabled by default). Before using this enumerated value, call [isMirrorSupported]camera.PhotoOutput.isMirrorSupported to check whether mirror photography is supported. **true** if enabled, **false** otherwise.

**类型：** boolean

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## rotation

```TypeScript
rotation?: ImageRotation
```

Rotation angle of the image. The default value is **0**, indicating clockwise rotation.

**类型：** ImageRotation

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## compressionQuality

```TypeScript
compressionQuality?: int
```

Photo image compression quality.

**类型：** int

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## location

```TypeScript
location?: Location
```

Geolocation information of the image (depending on the device hardware information by default).

**类型：** Location

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## quality

```TypeScript
quality?: QualityLevel
```

Image quality (low by default).

**类型：** QualityLevel

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

