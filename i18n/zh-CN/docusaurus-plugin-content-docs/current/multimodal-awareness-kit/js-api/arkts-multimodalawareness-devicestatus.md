# @ohos.multimodalAwareness.deviceStatus

The **deviceStatus** module provides the device status awareness functionality.

**起始版本：** 18

**系统能力：** SystemCapability.MultimodalAwareness.DeviceStatus

## 导入模块

```TypeScript
import { deviceStatus } from '@kit.MultimodalAwarenessKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[getDeviceRotationRadian](arkts-devicestatus-getdevicerotationradian-f-sys.md#getDeviceRotationRadian-1) | Obtains the device posture data. The posture data contains the rotation angles of the x, y, and z axes, that is, the Euler angles of the three axes. The definitions of the three axes are the same as those of the device sensor, and the right-handed coordinate system is used. Posture rotation angles are calculated under the z-x-y intrinsic rotation order, and derived by converting quaternions obtained via sensor fusion. |
| [off](arkts-devicestatus-off-f.md#off-1) | Unsubscribes from steady standing state events. |
| [offSteadyStandingDetect](arkts-devicestatus-offsteadystandingdetect-f.md#offSteadyStandingDetect-1) | Unsubscribes from steady standing status detection events. |
| [on](arkts-devicestatus-on-f.md#on-1) | Subscribes to steady standing state events. |
| [onSteadyStandingDetect](arkts-devicestatus-onsteadystandingdetect-f.md#onSteadyStandingDetect-1) | Subscribes to steady standing status detection events. |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[DeviceRotationRadian](arkts-devicestatus-devicerotationradian-i-sys.md) | Interface for device rotation radian |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [SteadyStandingStatus](arkts-devicestatus-steadystandingstatus-e.md) | Defines the steady standing state (that is, stand mode). A device enters stand mode when it is stationary, and its screen is at an angle between 45 and 135 degrees relative to the horizontal plane. For foldable smartphones, the device must be in a folded state or fully unfolded state. |

