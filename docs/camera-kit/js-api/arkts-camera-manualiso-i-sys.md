# ManualIso (System API)

ManualIso object.

**Inheritance/Implementation:** ManualIso extends [ManualIsoQuery](arkts-camera-manualisoquery-i.md#manualisoquery)

**Since:** 24

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@ohos.multimedia.camera';
```

## getIso

```TypeScript
getIso(): number
```

Gets current ISO.

**Since:** 24

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| number | The current ISO. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application.<br>**Applicable version:** 12 - 23 |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |
| [7400102](../errorcode-camera.md#7400102-invalid-operation) | Operation not allowed, the inputDevice or the session is abnormal.<br>**Applicable version:** 24 |

## setIso

```TypeScript
setIso(iso: number): void
```

Sets ISO sensitivity value, within the range of getSupportedIsoRange. This control is only effective if ExposureMode is set to EXPOSURE_MODE_LOCKED.

**Since:** 24

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| iso | number | Yes | ISO |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application.<br>**Applicable version:** 12 - 23 |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect.<br>**Applicable version:** 12 - 23 |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |
| [7400102](../errorcode-camera.md#7400102-invalid-operation) | Operation not allowed, the inputDevice or the session is abnormal.<br>**Applicable version:** 24 |

