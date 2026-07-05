# MetadataFaceObject

Implements the human face metadata object used for camera detection. It inherits from [MetadataObject]camera.MetadataObjectType and is the data source of the camera information in [CameraInput]camera.CameraInput. It is obtained by calling metadataOutput. [on('metadataObjectsAvailable')]camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>).

**继承实现关系：** MetadataFaceObject继承自：MetadataObject。

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## pitchAngle

```TypeScript
readonly pitchAngle: int
```

Pitch angle, with a value range of [-90, 90], where downward is positive.

**类型：** int

**起始版本：** 13

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## emotion

```TypeScript
readonly emotion: Emotion
```

Detected emotion.

**类型：** Emotion

**起始版本：** 13

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## rightEyeBoundingBox

```TypeScript
readonly rightEyeBoundingBox: Rect
```

Right eye area.

**类型：** Rect

**起始版本：** 13

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## yawAngle

```TypeScript
readonly yawAngle: int
```

Yaw angle, with a value range of [-90, 90], where rightward is positive.

**类型：** int

**起始版本：** 13

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## rollAngle

```TypeScript
readonly rollAngle: int
```

Row angle, with a value range of [-180, 180], where clockwise direction is positive.

**类型：** int

**起始版本：** 13

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## leftEyeBoundingBox

```TypeScript
readonly leftEyeBoundingBox: Rect
```

Left eye area.

**类型：** Rect

**起始版本：** 13

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## emotionConfidence

```TypeScript
readonly emotionConfidence: double
```

Confidence of the emotion detection, with a value range of [0, 1].

**类型：** double

**起始版本：** 13

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

