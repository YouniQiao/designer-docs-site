# CameraDevice

Describes the camera device information.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@ohos.multimedia.camera';
```

## hostDeviceName

```TypeScript
readonly hostDeviceName: string
```

Remote device name. If no remote device is available, an empty value is returned.

**Type:** string

**Since:** 15

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## hostDeviceType

```TypeScript
readonly hostDeviceType: HostDeviceType
```

Remote device type.

**Type:** HostDeviceType

**Since:** 15

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## isRetractable

```TypeScript
readonly isRetractable?: boolean
```

Camera device retractable attribute

**Type:** boolean

**Since:** 18

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## lensEquivalentFocalLength

```TypeScript
readonly lensEquivalentFocalLength?: Array<number>
```

Equivalent focal length of the camera lens.

**Type:** Array<number>

**Since:** 24

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

