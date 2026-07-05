# TorchStatusInfo

Describes the flashlight status information.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## torchLevel

```TypeScript
readonly torchLevel: double
```

Flashlight brightness level. The value range is [0, 1]. A larger value indicates a greater luminance.

**类型：** double

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## isTorchAvailable

```TypeScript
readonly isTorchAvailable: boolean
```

Whether the flashlight is available. **true** if available, **false** otherwise.

**类型：** boolean

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## isTorchActive

```TypeScript
readonly isTorchActive: boolean
```

Whether the flashlight is activated. **true** if activated, **false** otherwise.

**类型：** boolean

**起始版本：** 11

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

