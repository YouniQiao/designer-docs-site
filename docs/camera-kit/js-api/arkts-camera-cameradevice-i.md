# CameraDevice

Describes the camera device information.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## sensorPhysicalSize

```TypeScript
readonly sensorPhysicalSize?: Array<double>
```

Physical dimensions (width and height) of the sensor.

**Type:** Array<double>

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

## hostDeviceType

```TypeScript
readonly hostDeviceType: HostDeviceType
```

Remote device type.

**Type:** HostDeviceType

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## minimumFocusDistance

```TypeScript
readonly minimumFocusDistance?: double
```

Minimum focus distance of the camera.

**Type:** double

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

## lensFocalLength

```TypeScript
readonly lensFocalLength?: double
```

Actual focal length of the lens.

**Type:** double

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

## sensorPixelArraySize

```TypeScript
readonly sensorPixelArraySize?: Array<int>
```

Pixel array dimensions (width and height, in pixels) of the sensor.

**Type:** Array<int>

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

## lensEquivalentFocalLength

```TypeScript
readonly lensEquivalentFocalLength?: Array<int>
```

Equivalent focal length of the camera lens.

**Type:** Array<int>

**Since:** 20

**Atomic service API:** From API version 24 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## automotiveCameraPosition

```TypeScript
readonly automotiveCameraPosition?: AutomotiveCameraPosition
```

Automotive camera position attribute.

**Type:** AutomotiveCameraPosition

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

## cameraOrientation

```TypeScript
readonly cameraOrientation: int
```

Camera installation angle, which does not change as the screen rotates. The value range is [0, 360], in degrees.

**Type:** int

**Since:** 12

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

## connectionType

```TypeScript
readonly connectionType: ConnectionType
```

Camera connection type.

**Type:** ConnectionType

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

## cameraType

```TypeScript
readonly cameraType: CameraType
```

Camera type.

**Type:** CameraType

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

## lensIntrinsicCalibration

```TypeScript
readonly lensIntrinsicCalibration?: Array<double>
```

Array of lens internal parameter calibration parameters.

**Type:** Array<double>

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

## lensDistortion

```TypeScript
readonly lensDistortion?: Array<double>
```

Array of lens distortion parameters.

**Type:** Array<double>

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

## constituentCameraDevices

```TypeScript
readonly constituentCameraDevices?: Array<CameraDevice>
```

List of physical cameras that form the logical camera.

**Type:** Array<CameraDevice>

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

## cameraId

```TypeScript
readonly cameraId: string
```

Camera ID.

**Type:** string

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

## sensorColorFilterArrangement

```TypeScript
readonly sensorColorFilterArrangement?: SensorColorFilterArrangement
```

Arrangement mode of the sensor color filter.

**Type:** SensorColorFilterArrangement

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

## cameraPosition

```TypeScript
readonly cameraPosition: CameraPosition
```

Camera position.

**Type:** CameraPosition

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

## isRetractable

```TypeScript
readonly isRetractable?: boolean
```

Camera device retractable attribute

**Type:** boolean

**Since:** 18

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## isLogicalCamera

```TypeScript
readonly isLogicalCamera?: boolean
```

Whether a camera is a logical camera (consisting of multiple physical cameras). **true** if the camera is a logical camera, **false** otherwise.

**Type:** boolean

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

## hostDeviceName

```TypeScript
readonly hostDeviceName: string
```

Remote device name. If no remote device is available, an empty value is returned.

**Type:** string

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

