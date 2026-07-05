# ManualIso

ManualIso object.

**Inheritance:** ManualIsoextends: ManualIsoQuery.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getIso

```TypeScript
getIso(): int
```

Gets current ISO.

**Since:** 12

**Atomic service API:** From API version 24 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| int | The current ISO. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. [since 12 - 23] |
| 7400103 | Session not config. |
| 7400102 | Operation not allowed, the inputDevice or the session is abnormal. [since 24] |

## setIso

```TypeScript
setIso(iso: int): void
```

Sets ISO sensitivity value, within the range of getSupportedIsoRange. This control is only effective if ExposureMode is set to EXPOSURE_MODE_LOCKED.

**Since:** 12

**Atomic service API:** From API version 24 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| iso | int | Yes | ISO |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. [since 12 - 23] |
| 7400101 | Parameter missing or parameter type incorrect. [since 12 - 23] |
| 7400103 | Session not config. |
| 7400102 | Operation not allowed, the inputDevice or the session is abnormal. [since 24] |

