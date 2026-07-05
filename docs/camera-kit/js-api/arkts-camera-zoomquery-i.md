# ZoomQuery

Provides the API to obtain the equivalent focal length information list in the current mode.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getRAWCaptureZoomRatioRange

```TypeScript
getRAWCaptureZoomRatioRange(): Array<double>
```

Gets supported zoom ratio range during raw-capture.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;double> | The zoom ratio range. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400102 | Operation not allowed, the inputDevice or the session is abnormal. |
| 7400103 | Session not config. |

## getZoomPointInfos

```TypeScript
getZoomPointInfos(): Array<ZoomPointInfo>
```

Obtains the equivalent focal length information list in the current mode.

**Since:** 12

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;ZoomPointInfo> | Equivalent focal length information list in the current mode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. [since 12 - 24] |
| 7400103 | Session not config, only throw in session usage. |

## getZoomRatioRange

```TypeScript
getZoomRatioRange(): Array<double>
```

Obtains the supported zoom ratio range.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;double> | Array containing the minimum and maximum zoom ratios. If the operation fails,  undefined is returned and an error code defined in  [CameraErrorCode]camera.CameraErrorCode is thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config, only throw in session usage. |

## isZoomCenterPointSupported

```TypeScript
isZoomCenterPointSupported(): boolean
```

Checks whether zoom center point is supported.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Is the zoom center point supported. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config, only throw in session usage. |

