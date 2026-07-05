# Session

Session** implements a session, which saves all [CameraInput]camera.CameraInput and [CameraOutput]camera.CameraOutput instances required to run the camera and requests the camera to take a photo or record a video.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## addInput

```TypeScript
addInput(cameraInput: CameraInput): void
```

Adds a [CameraInput]camera.CameraInput instance to this session.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cameraInput | CameraInput | Yes | CameraInput instance to add. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400102 | Operation not allowed. |
| 7400103 | Session not config. [since 11 - 17] |
| 7400201 | Camera service fatal error. [since 12] |

## addOutput

```TypeScript
addOutput(cameraOutput: CameraOutput): void
```

Adds a [CameraOutput]camera.CameraOutput instance to this session.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cameraOutput | CameraOutput | Yes | CameraOutput instance to add. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400102 | Operation not allowed. |
| 7400103 | Session not config. [since 11 - 17] |
| 7400201 | Camera service fatal error. [since 12] |

## beginConfig

```TypeScript
beginConfig(): void
```

Starts configuration for the session.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400105 | Session config locked. |
| 7400201 | Camera service fatal error. [since 12] |

## canAddInput

```TypeScript
canAddInput(cameraInput: CameraInput): boolean
```

Checks whether a **CameraInput** instance can be added to this session. This API must be called after [beginConfig]camera.Session.beginConfig and before [commitConfig]camera.Session.commitConfig().

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cameraInput | CameraInput | Yes | CameraInput instance to add. The API does not take effect if the input  parameter is invalid (for example, the value is out of range, null, or undefined). |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for adding the CameraInput instance. true if it can be added, false  otherwise. |

## canAddOutput

```TypeScript
canAddOutput(cameraOutput: CameraOutput): boolean
```

Determines whether a CameraOutput instance can be added to this session. This API must be called after [addInput]camera.Session.addInput and before [commitConfig]camera.Session.commitConfig().

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cameraOutput | CameraOutput | Yes | CameraOutput instance to add. The API does not take effect if the  input parameter is invalid (for example, the value is out of range, null, or undefined). |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for adding the CameraOutput instance. true if it can be added,  false otherwise. |

## commitConfig

```TypeScript
commitConfig(callback: AsyncCallback<void>): void
```

Commits the configuration for this session. This API uses an asynchronous callback to return the result.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the configuration is  successfully committed, err is undefined; otherwise, err is an error object with an error code  defined in [CameraErrorCode]camera.CameraErrorCode. For example, if the  aspect ratio of the preview stream is different from that of the video output stream, error code 7400201 is  returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400102 | Operation not allowed. |
| 7400201 | Camera service fatal error. |

## commitConfig

```TypeScript
commitConfig(): Promise<void>
```

Commits the configuration for this session. This API uses a promise to return the result.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400102 | Operation not allowed. |
| 7400201 | Camera service fatal error. |

## getActiveParameter

```TypeScript
getActiveParameter(key: string): string
```

Gets the active value of the given key in camera metadata.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Tag name in camera metadata. |

**Return value:**

| Type | Description |
| --- | --- |
| string | The active value of the key in camera metadata. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400102 | Operation not allowed. |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

## getCameraOutputCapabilities

```TypeScript
getCameraOutputCapabilities(camera: CameraDevice): Array<CameraOutputCapability>
```

Get the supported camera output capability set.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| camera | CameraDevice | Yes | Camera device. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;CameraOutputCapability> | The array of the output capability. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400201 | Camera service fatal error. |

## getParameters

```TypeScript
getParameters(key: string): Array<string>
```

Gets the values of the given key in camera metadata.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Tag name in camera metadata. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | The values of the key in camera metadata. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400102 | Operation not allowed. |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

## getSupportedKeys

```TypeScript
getSupportedKeys(): Array<string>
```

Gets the supported keys in camera metadata.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | The supported keys in camera metadata. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

## release

```TypeScript
release(callback: AsyncCallback<void>): void
```

Releases this session. This API uses an asynchronous callback to return the result.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the session is released  successfully, err is undefined; otherwise, err is an error object with an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400201 | Camera service fatal error. |

## release

```TypeScript
release(): Promise<void>
```

Releases this session. This API uses a promise to return the result.

**Since:** 11

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

## removeInput

```TypeScript
removeInput(cameraInput: CameraInput): void
```

Removes a [CameraInput]camera.CameraInput instance from this session. This API must be called after [beginConfig]camera.Session.beginConfig and before [commitConfig]camera.Session.commitConfig().

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cameraInput | CameraInput | Yes | CameraInput instance to remove. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400102 | Operation not allowed. |
| 7400103 | Session not config. [since 11 - 17] |
| 7400201 | Camera service fatal error. [since 12] |

## removeOutput

```TypeScript
removeOutput(cameraOutput: CameraOutput): void
```

Removes a [CameraOutput]camera.CameraOutput instance from this session.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cameraOutput | CameraOutput | Yes | CameraOutput instance to remove. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400102 | Operation not allowed. |
| 7400103 | Session not config. [since 11 - 17] |
| 7400201 | Camera service fatal error. [since 12] |

## setParameters

```TypeScript
setParameters(kvpairs: Record<string, string>): void
```

Sets key-value pairs parameters for the session.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| kvpairs | Record&lt;string, string> | Yes | The pairs of tag name and value in camera metadata. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400102 | Operation not allowed. |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

## setUsage

```TypeScript
setUsage(usage: UsageType, enabled: boolean): void
```

Set usage for the capture session.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| usage | UsageType | Yes | The capture session usage. |
| enabled | boolean | Yes | Enable usage for session if TRUE. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400102 | Operation not allowed. |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

## start

```TypeScript
start(callback: AsyncCallback<void>): void
```

Starts this session. This API uses an asynchronous callback to return the result.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the session starts successfully,  err is undefined; otherwise, err is an error object with an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |
| 7400102 | Operation not allowed. [since 12] |

## start

```TypeScript
start(): Promise<void>
```

Starts this session. This API uses a promise to return the result.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |
| 7400102 | Operation not allowed. [since 12] |

## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

Stops this session. This API uses an asynchronous callback to return the result.

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the session stops successfully,  err is undefined; otherwise, err is an error object with an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400201 | Camera service fatal error. |

## stop

```TypeScript
stop(): Promise<void>
```

Stops this session. This API uses a promise to return the result.

**Since:** 11

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

