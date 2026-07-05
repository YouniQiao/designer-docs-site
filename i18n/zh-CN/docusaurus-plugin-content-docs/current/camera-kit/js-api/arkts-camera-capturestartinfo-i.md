# CaptureStartInfo

Describes the capture start information.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## captureId

```TypeScript
captureId: int
```

ID of this capture action.

**类型：** int

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## time

```TypeScript
time: long
```

Estimated duration when the sensor captures frames at the bottom layer in a single capture. If **–1** is reported , there is no estimated duration.

**类型：** long

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

