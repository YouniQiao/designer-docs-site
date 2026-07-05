# ZoomQuery

Provides the API to obtain the equivalent focal length information list in the current mode.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@ohos.multimedia.camera';
```

## getRAWCaptureZoomRatioRange

```TypeScript
getRAWCaptureZoomRatioRange(): Array<number>
```

Gets supported zoom ratio range during raw-capture.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;number&gt; | The zoom ratio range. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400102](../errorcode-camera.md#7400102-invalid-operation) | Operation not allowed, the inputDevice or the session is abnormal. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |

## getZoomRatioRange

```TypeScript
getZoomRatioRange(): Array<number>
```

Obtains the supported zoom ratio range.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;number&gt; | Array containing the minimum and maximum zoom ratios. If the operation fails,undefined is returned and an error code defined in[CameraErrorCode](arkts-camera-cameraerrorcode-e.md#cameraerrorcode) is thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config, only throw in session usage. |

