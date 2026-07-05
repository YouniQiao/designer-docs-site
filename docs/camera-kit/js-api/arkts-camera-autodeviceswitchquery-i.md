# AutoDeviceSwitchQuery

AutoDeviceSwitchQuery** is used to check whether a device supports automatic camera switch. [Automatic Camera Switching](docroot://media/camera/camera-auto-switch.md) is supported only on foldable devices. For details about how to enable this capability, see [enableAutoDeviceSwitch]camera.AutoDeviceSwitch.enableAutoDeviceSwitch.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## isAutoDeviceSwitchSupported

```TypeScript
isAutoDeviceSwitchSupported(): boolean
```

Checks whether the device supports automatic camera switch.

**Since:** 13

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of automatic camera switch. true if supported, false  otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config, only throw in session usage. [since 13 - 17] |

