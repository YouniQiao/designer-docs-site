# CameraDevice

Describes the camera device information.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## sensorPhysicalSize

```TypeScript
readonly sensorPhysicalSize?: Array<double>
```

Physical dimensions (width and height) of the sensor.

**类型：** Array<double>

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## hostDeviceType

```TypeScript
readonly hostDeviceType: HostDeviceType
```

Remote device type.

**类型：** HostDeviceType

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## minimumFocusDistance

```TypeScript
readonly minimumFocusDistance?: double
```

Minimum focus distance of the camera.

**类型：** double

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## lensFocalLength

```TypeScript
readonly lensFocalLength?: double
```

Actual focal length of the lens.

**类型：** double

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## sensorPixelArraySize

```TypeScript
readonly sensorPixelArraySize?: Array<int>
```

Pixel array dimensions (width and height, in pixels) of the sensor.

**类型：** Array<int>

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## lensEquivalentFocalLength

```TypeScript
readonly lensEquivalentFocalLength?: Array<int>
```

Equivalent focal length of the camera lens.

**类型：** Array<int>

**起始版本：** 20

**原子化服务API：** 从API version 24开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## automotiveCameraPosition

```TypeScript
readonly automotiveCameraPosition?: AutomotiveCameraPosition
```

Automotive camera position attribute.

**类型：** AutomotiveCameraPosition

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## cameraOrientation

```TypeScript
readonly cameraOrientation: int
```

Camera installation angle, which does not change as the screen rotates. The value range is [0, 360], in degrees.

**类型：** int

**起始版本：** 12

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## connectionType

```TypeScript
readonly connectionType: ConnectionType
```

Camera connection type.

**类型：** ConnectionType

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## cameraType

```TypeScript
readonly cameraType: CameraType
```

Camera type.

**类型：** CameraType

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## lensIntrinsicCalibration

```TypeScript
readonly lensIntrinsicCalibration?: Array<double>
```

Array of lens internal parameter calibration parameters.

**类型：** Array<double>

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## lensDistortion

```TypeScript
readonly lensDistortion?: Array<double>
```

Array of lens distortion parameters.

**类型：** Array<double>

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## constituentCameraDevices

```TypeScript
readonly constituentCameraDevices?: Array<CameraDevice>
```

List of physical cameras that form the logical camera.

**类型：** Array<CameraDevice>

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## cameraId

```TypeScript
readonly cameraId: string
```

Camera ID.

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## sensorColorFilterArrangement

```TypeScript
readonly sensorColorFilterArrangement?: SensorColorFilterArrangement
```

Arrangement mode of the sensor color filter.

**类型：** SensorColorFilterArrangement

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## cameraPosition

```TypeScript
readonly cameraPosition: CameraPosition
```

Camera position.

**类型：** CameraPosition

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## isRetractable

```TypeScript
readonly isRetractable?: boolean
```

Camera device retractable attribute

**类型：** boolean

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## isLogicalCamera

```TypeScript
readonly isLogicalCamera?: boolean
```

Whether a camera is a logical camera (consisting of multiple physical cameras). **true** if the camera is a logical camera, **false** otherwise.

**类型：** boolean

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

## hostDeviceName

```TypeScript
readonly hostDeviceName: string
```

Remote device name. If no remote device is available, an empty value is returned.

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

