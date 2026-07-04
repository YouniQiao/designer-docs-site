# ZoomQuery

Provides the API to obtain the equivalent focal length information list in the current mode.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@ohos.multimedia.camera';
```

## getZoomPointInfos

```TypeScript
getZoomPointInfos(): Array<ZoomPointInfo>
```

Obtains the equivalent focal length information list in the current mode.

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;ZoomPointInfo&gt; | Equivalent focal length information list in the current mode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application.<br>**Applicable version:** 12 - 24 |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config, only throw in session usage. |

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
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config, only throw in session usage. |

