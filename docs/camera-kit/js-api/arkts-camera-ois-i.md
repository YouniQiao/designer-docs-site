# OIS

OIS (Optical Image Stabilization) interface.

**Inheritance:** OISextends: OISQuery.

**Since:** 24

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## setOISMode

```TypeScript
setOISMode(mode: OISMode): void
```

Sets the OIS mode.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | OISMode | Yes | The OIS mode to set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400102 | Operation not allowed, the inputDevice or the session is abnormal. |
| 7400103 | Session not config. |

## setOISModeCustom

```TypeScript
setOISModeCustom(pitch: double, yaw: double): void
```

Sets custom OIS bias values for each axis.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pitch | double | Yes | Bias value for pitch axis. |
| yaw | double | Yes | Bias value for yaw axis. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400102 | Operation not allowed, the inputDevice or the session is abnormal. |
| 7400103 | Session not config. |

