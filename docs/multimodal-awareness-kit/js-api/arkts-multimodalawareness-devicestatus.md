# @ohos.multimodalAwareness.deviceStatus

The **deviceStatus** module provides the device status awareness functionality.

**Since:** 18

**System capability:** SystemCapability.MultimodalAwareness.DeviceStatus

## Modules to Import

```TypeScript
import { deviceStatus } from '@ohos.multimodalAwareness.deviceStatus';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [off](arkts-multimodalawareness-off-f.md#off-1) | Unsubscribes from steady standing state events. |
| [on](arkts-multimodalawareness-on-f.md#on-1) | Subscribes to steady standing state events. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getDeviceRotationRadian](arkts-multimodalawareness-getdevicerotationradian-f-sys.md#getdevicerotationradian-1) | Obtains the device posture data. The posture data contains the rotation angles of the x, y, and z axes, that is, the Euler angles of the three axes. The definitions of the three axes are the same as those of the device sensor, and the right-handed coordinate system is used. Posture rotation angles are calculated under the z-x-y intrinsic rotation order, and derived by converting quaternions obtained via sensor fusion. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [DeviceRotationRadian](arkts-multimodalawareness-devicerotationradian-i-sys.md) | Interface for device rotation radian |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [SteadyStandingStatus](arkts-multimodalawareness-steadystandingstatus-e.md) | Defines the steady standing state (that is, stand mode). A device enters stand mode when it is stationary, and its screen is at an angle between 45 and 135 degrees relative to the horizontal plane. For foldable smartphones, the device must be in a folded state or fully unfolded state. |

