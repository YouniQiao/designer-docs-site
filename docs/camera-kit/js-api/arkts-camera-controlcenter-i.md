# ControlCenter

ControlCenter inherits from [ControlCenterQuery]camera.ControlCenterQuery. It is used to enable the camera controller.

**Inheritance:** ControlCenterextends: ControlCenterQuery.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## enableControlCenter

```TypeScript
enableControlCenter(enabled: boolean): void
```

Enables the camera controller.

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to enable or disable the camera controller. true to enable, false  otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

