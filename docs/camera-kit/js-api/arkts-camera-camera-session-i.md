# Session

**Session** implements a session, which saves all [CameraInput](arkts-camera-camera-camerainput-i.md) and [CameraOutput](arkts-camera-camera-cameraoutput-i.md) instances required to run the camera and requests the camera to take a photo or record a video.

**Since:** 11

<!--Device-camera-interface Session--><!--Device-camera-interface Session-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

<a id="addinput"></a>
## addInput

```TypeScript
addInput(cameraInput: CameraInput): void
```

Adds a [CameraInput](arkts-camera-camera-camerainput-i.md) instance to this session.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-Session-addInput(cameraInput: CameraInput): void--><!--Device-Session-addInput(cameraInput: CameraInput): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cameraInput | [CameraInput](arkts-camera-camera-camerainput-i.md) | Yes | **CameraInput** instance to add. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400102](../errorcode-camera.md#7400102-invalid-operation) | Operation not allowed. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config.<br>**Applicable version:** 11 - 17 |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error.<br>**Applicable version:** 12 and later |

<a id="addoutput"></a>
## addOutput

```TypeScript
addOutput(cameraOutput: CameraOutput): void
```

Adds a [CameraOutput](arkts-camera-camera-cameraoutput-i.md) instance to this session.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-Session-addOutput(cameraOutput: CameraOutput): void--><!--Device-Session-addOutput(cameraOutput: CameraOutput): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cameraOutput | [CameraOutput](arkts-camera-camera-cameraoutput-i.md) | Yes | **CameraOutput** instance to add. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400102](../errorcode-camera.md#7400102-invalid-operation) | Operation not allowed. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config.<br>**Applicable version:** 11 - 17 |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error.<br>**Applicable version:** 12 and later |

<a id="beginconfig"></a>
## beginConfig

```TypeScript
beginConfig(): void
```

Starts configuration for the session.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-Session-beginConfig(): void--><!--Device-Session-beginConfig(): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400105](../errorcode-camera.md#7400105-session-configuration-locked) | Session config locked. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error.<br>**Applicable version:** 12 and later |

<a id="canaddinput"></a>
## canAddInput

```TypeScript
canAddInput(cameraInput: CameraInput): boolean
```

Checks whether a **CameraInput** instance can be added to this session. This API must be called after [beginConfig](arkts-camera-camera-session-i.md#beginconfig-1) and before [commitConfig](arkts-camera-camera-session-i.md#commitconfig-1).

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-Session-canAddInput(cameraInput: CameraInput): boolean--><!--Device-Session-canAddInput(cameraInput: CameraInput): boolean-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cameraInput | [CameraInput](arkts-camera-camera-camerainput-i.md) | Yes | **CameraInput** instance to add. The API does not take effect if the input parameter is invalid (for example, the value is out of range, null, or undefined). |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for adding the **CameraInput** instance. **true** if it can be added, **false** otherwise. |

<a id="canaddoutput"></a>
## canAddOutput

```TypeScript
canAddOutput(cameraOutput: CameraOutput): boolean
```

Determines whether a CameraOutput instance can be added to this session. This API must be called after [addInput](arkts-camera-camera-session-i.md#addinput-1) and before [commitConfig](arkts-camera-camera-session-i.md#commitconfig-1).

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-Session-canAddOutput(cameraOutput: CameraOutput): boolean--><!--Device-Session-canAddOutput(cameraOutput: CameraOutput): boolean-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cameraOutput | [CameraOutput](arkts-camera-camera-cameraoutput-i.md) | Yes | **CameraOutput** instance to add. The API does not take effect if the input parameter is invalid (for example, the value is out of range, null, or undefined). |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for adding the **CameraOutput** instance. **true** if it can be added,**false** otherwise. |

<a id="commitconfig"></a>
## commitConfig

```TypeScript
commitConfig(callback: AsyncCallback<void>): void
```

Commits the configuration for this session. This API uses an asynchronous callback to return the result.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-Session-commitConfig(callback: AsyncCallback<void>): void--><!--Device-Session-commitConfig(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the configuration is successfully committed, **err** is **undefined**; otherwise, **err** is an error object with an error code defined in [CameraErrorCode](arkts-camera-camera-cameraerrorcode-e.md). For example, if the aspect ratio of the preview stream is different from that of the video output stream, error code 7400201 is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400102](../errorcode-camera.md#7400102-invalid-operation) | Operation not allowed. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

<a id="commitconfig-1"></a>
## commitConfig

```TypeScript
commitConfig(): Promise<void>
```

Commits the configuration for this session. This API uses a promise to return the result.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-Session-commitConfig(): Promise<void>--><!--Device-Session-commitConfig(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400102](../errorcode-camera.md#7400102-invalid-operation) | Operation not allowed. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

<a id="release"></a>
## release

```TypeScript
release(callback: AsyncCallback<void>): void
```

Releases this session. This API uses an asynchronous callback to return the result.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-Session-release(callback: AsyncCallback<void>): void--><!--Device-Session-release(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the session is released successfully, **err** is **undefined**; otherwise, **err** is an error object with an error code defined in [CameraErrorCode](arkts-camera-camera-cameraerrorcode-e.md). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

<a id="release-1"></a>
## release

```TypeScript
release(): Promise<void>
```

Releases this session. This API uses a promise to return the result.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-Session-release(): Promise<void>--><!--Device-Session-release(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

<a id="removeinput"></a>
## removeInput

```TypeScript
removeInput(cameraInput: CameraInput): void
```

Removes a [CameraInput](arkts-camera-camera-camerainput-i.md) instance from this session. This API must be called after [beginConfig](arkts-camera-camera-session-i.md#beginconfig-1) and before [commitConfig](arkts-camera-camera-session-i.md#commitconfig-1).

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-Session-removeInput(cameraInput: CameraInput): void--><!--Device-Session-removeInput(cameraInput: CameraInput): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cameraInput | [CameraInput](arkts-camera-camera-camerainput-i.md) | Yes | **CameraInput** instance to remove. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400102](../errorcode-camera.md#7400102-invalid-operation) | Operation not allowed. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config.<br>**Applicable version:** 11 - 17 |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error.<br>**Applicable version:** 12 and later |

<a id="removeoutput"></a>
## removeOutput

```TypeScript
removeOutput(cameraOutput: CameraOutput): void
```

Removes a [CameraOutput](arkts-camera-camera-cameraoutput-i.md) instance from this session.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-Session-removeOutput(cameraOutput: CameraOutput): void--><!--Device-Session-removeOutput(cameraOutput: CameraOutput): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cameraOutput | [CameraOutput](arkts-camera-camera-cameraoutput-i.md) | Yes | **CameraOutput** instance to remove. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400102](../errorcode-camera.md#7400102-invalid-operation) | Operation not allowed. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config.<br>**Applicable version:** 11 - 17 |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error.<br>**Applicable version:** 12 and later |

<a id="start"></a>
## start

```TypeScript
start(callback: AsyncCallback<void>): void
```

Starts this session. This API uses an asynchronous callback to return the result.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-Session-start(callback: AsyncCallback<void>): void--><!--Device-Session-start(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the session starts successfully,**err** is **undefined**; otherwise, **err** is an error object with an error code defined in [CameraErrorCode](arkts-camera-camera-cameraerrorcode-e.md). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |
| [7400102](../errorcode-camera.md#7400102-invalid-operation) | Operation not allowed.<br>**Applicable version:** 12 and later |

<a id="start-1"></a>
## start

```TypeScript
start(): Promise<void>
```

Starts this session. This API uses a promise to return the result.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-Session-start(): Promise<void>--><!--Device-Session-start(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |
| [7400102](../errorcode-camera.md#7400102-invalid-operation) | Operation not allowed.<br>**Applicable version:** 12 and later |

<a id="stop"></a>
## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

Stops this session. This API uses an asynchronous callback to return the result.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-Session-stop(callback: AsyncCallback<void>): void--><!--Device-Session-stop(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the session stops successfully,**err** is **undefined**; otherwise, **err** is an error object with an error code defined in [CameraErrorCode](arkts-camera-camera-cameraerrorcode-e.md). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

<a id="stop-1"></a>
## stop

```TypeScript
stop(): Promise<void>
```

Stops this session. This API uses a promise to return the result.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-Session-stop(): Promise<void>--><!--Device-Session-stop(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

