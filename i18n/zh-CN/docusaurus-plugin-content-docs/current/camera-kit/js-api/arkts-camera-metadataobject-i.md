# MetadataObject

Implements the basic metadata object used for camera detection. It serves as the data source of the camera information in [CameraInput]camera.CameraInput. It is obtained by calling metadataOutput. [on('metadataObjectsAvailable')]camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>).

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## boundingBox

```TypeScript
readonly boundingBox: Rect
```

Metadata rectangle.

**类型：** Rect

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## confidence

```TypeScript
readonly confidence: double
```

Confidence of the detection, with a value range of [0, 1].

**类型：** double

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## type

```TypeScript
readonly type: MetadataObjectType
```

Metadata object type.

**类型：** MetadataObjectType

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## objectId

```TypeScript
readonly objectId: int
```

Metadata object ID.

**类型：** int

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## isLockFocusTracked

```TypeScript
readonly isLockFocusTracked?: boolean
```

Whether the focus is locked and being tracked currently.

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## timestamp

```TypeScript
readonly timestamp: int
```

Current timestamp, in nanoseconds (ns).

**类型：** int

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

