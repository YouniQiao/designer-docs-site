# ManualExposureQuery

Provides APIs to obtain the manual exposure range supported.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getExposureBiasStep

```TypeScript
getExposureBiasStep(): double
```

Get exposure bias step.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| double | exposure bias step. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400102 | Operation not allowed, session or inputdevice maybe abnormal. |
| 7400103 | Session not config. |

## getSupportedExposureDurationRange

```TypeScript
getSupportedExposureDurationRange(): Array<int>
```

Gets the supported manual exposure duration range, units: microseconds.

**Since:** 24

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;int> | The array of manual exposure range. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400102 | Operation not allowed, session or inputdevice maybe abnormal. |
| 7400103 | Session not config, only throw in session usage. |

## getSupportedExposureRange

```TypeScript
getSupportedExposureRange(): Array<int>
```

Obtains the supported manual exposure durations.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;int> | Array of manual exposure durations supported, in ms. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config, only throw in session usage. |
| 7400101 | Parameter missing or parameter type incorrect. [since 12] |

**Example**

```TypeScript
function getSupportedExposureRange(nightPhotoSession: camera.NightPhotoSession): Array<number> {
  let exposureRange: Array<number> = nightPhotoSession.getSupportedExposureRange();
  return exposureRange;
}

```

