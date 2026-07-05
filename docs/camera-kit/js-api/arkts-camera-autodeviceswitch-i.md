# AutoDeviceSwitch

AutoDeviceSwitch** inherits from [AutoDeviceSwitchQuery]camera.AutoDeviceSwitchQuery and is used to enable or disable automatic camera switch. This capability can be used only on foldable devices. For details about the development, see [Practices for Automatic Camera Switching (ArkTS)](docroot://media/camera/camera-auto-switch.md). It is recommended that the system automatically handle input device switching, session configuration, and parameter continuity during automatic camera switch. If the system detects that the zoom ranges of the two cameras are different during camera switching, it will notify the application through the **isDeviceCapabilityChanged** field in [AutoDeviceSwitchStatus]camera.AutoDeviceSwitchStatus. However, the application still needs to handle the UX change. For example, for the zoom range adjustment, the application needs to call [getZoomRatioRange]camera.ZoomQuery.getZoomRatioRange to obtain data and update the UX. Therefore, **AutoDeviceSwitch** is more applicable to simplified UX interactions.

**Inheritance:** AutoDeviceSwitchextends: AutoDeviceSwitchQuery.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## enableAutoDeviceSwitch

```TypeScript
enableAutoDeviceSwitch(enabled: boolean): void
```

Enables or disables automatic camera switch. You can use [isAutoDeviceSwitchSupported]camera.AutoDeviceSwitchQuery.isAutoDeviceSwitchSupported to check whether the device supports automatic camera switch. > **NOTE** > > This API is used only for foldable devices with multiple front cameras. In different fold states, the system > can automatically switch to an available front camera. It does not enable automatic switching between front and > rear cameras.

**Since:** 13

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to enable automatic camera switch. true to enable, false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400102 | Operation not allowed. |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |
| 7400101 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;  3. Parameters verification failed. [since 19] |

