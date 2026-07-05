# ManualExposure (System API)

ManualExposure extends [ManualExposureQuery](arkts-camera-manualexposurequery-i.md#manualexposurequery) Provides APIs to obtain and set the exposure duration.

**Inheritance/Implementation:** ManualExposure extends [ManualExposureQuery](arkts-camera-manualexposurequery-i.md#manualexposurequery)

**Since:** 24

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@ohos.multimedia.camera';
```

## getExposureDuration

```TypeScript
getExposureDuration(): number
```

Gets current exposure value.

**Since:** 24

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | The current exposure value, in units of microsecond |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400102](../errorcode-camera.md#7400102-invalid-operation) | Operation not allowed, session or inputdevice maybe abnormal. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

## setExposureDuration

```TypeScript
setExposureDuration(exposureDuration: number): void
```

Sets Exposure duration value, units: microseconds.

**Since:** 24

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| exposureDuration | number | Yes | Exposure duration value |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

