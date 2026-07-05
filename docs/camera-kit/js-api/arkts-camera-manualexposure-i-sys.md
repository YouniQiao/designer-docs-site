# ManualExposure

ManualExposure extends [ManualExposureQuery]camera.ManualExposureQuery Provides APIs to obtain and set the exposure duration.

**Inheritance:** ManualExposureextends: ManualExposureQuery.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getExposure

```TypeScript
getExposure(): int
```

Obtains the manual exposure duration in use.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| int | The current exposure value, in units of ms |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |
| 7400101 | Parameter missing or parameter type incorrect. [since 12] |

**Example**

```TypeScript
function getExposure(nightPhotoSession: camera.NightPhotoSession): number | undefined {
  let exposureRange: Array<number> = nightPhotoSession.getSupportedExposureRange();
  if (exposureRange === undefined || exposureRange.length <= 0) {
    return undefined;
  }
  let exposure: number = nightPhotoSession.getExposure();
  return exposure;
}

```

## getExposureDuration

```TypeScript
getExposureDuration(): int
```

Gets current exposure value.

**Since:** 24

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| int | The current exposure value, in units of microsecond |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400102 | Operation not allowed, session or inputdevice maybe abnormal. |
| 7400103 | Session not config. |

## setExposure

```TypeScript
setExposure(exposure: int): void
```

Sets the manual exposure duration. Before using this API, call [getSupportedExposureRange]camera.ManualExposureQuery.getSupportedExposureRange to obtain the supported manual exposure durations, in ms.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| exposure | int | Yes | Manual exposure duration, which must be one of the supported durations obtained by  running [getSupportedExposureRange]camera.ManualExposureQuery.getSupportedExposureRange. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |
| 7400102 | Operation not allowed. [since 12] |

## setExposureDuration

```TypeScript
setExposureDuration(exposureDuration: int): void
```

Sets Exposure duration value, units: microseconds.

**Since:** 24

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| exposureDuration | int | Yes | Exposure duration value |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

