# CameraOcclusionDetectionResult

Describes the instance returned by the occlusion status callback, which indicates whether the camera lens is blocked or dirty.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## isCameraLensDirty

```TypeScript
readonly isCameraLensDirty: boolean
```

Whether the camera lens is dirty. **true** if dirty, false otherwise.

**类型：** boolean

**起始版本：** 13

**原子化服务API：** 从API version 23开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## isCameraOccluded

```TypeScript
readonly isCameraOccluded: boolean
```

Whether the camera lens is blocked. **true** if blocked, **false** otherwise.

**类型：** boolean

**起始版本：** 12

**原子化服务API：** 从API version 23开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

