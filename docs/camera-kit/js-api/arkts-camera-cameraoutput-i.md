# CameraOutput

CameraOutput implements output information used in [Session]camera.Session. It is the base class of **output**.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## release

```TypeScript
release(callback: AsyncCallback<void>): void
```

Releases output resources. This API uses an asynchronous callback to return the result.

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the output resources are  released successfully, err is undefined; otherwise, err is an error object with an error code  defined in [CameraErrorCode]camera.CameraErrorCode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400201 | Camera service fatal error. |

## release

```TypeScript
release(): Promise<void>
```

Releases output resources. This API uses a promise to return the result.

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400201 | Camera service fatal error. |

