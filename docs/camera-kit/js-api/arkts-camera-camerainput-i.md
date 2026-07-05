# CameraInput

Defines the camera input object. It provides camera device information used in [Session]camera.Session.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## close

```TypeScript
close(callback: AsyncCallback<void>): void
```

Closes this camera device. This API uses an asynchronous callback to return the result.

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the camera device is closed  successfully, err is undefined. Otherwise, err is an error object with an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400201 | Camera service fatal error. |

## close

```TypeScript
close(): Promise<void>
```

Closes this camera device. This API uses a promise to return the result.

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

## closeDelayed

```TypeScript
closeDelayed(time: int): Promise<void>
```

Delay close camera.

**Since:** 18

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| time | int | Yes | delay time for turning off camera, in units of second. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400201 | Camera service fatal error. |

## controlAuxiliary

```TypeScript
controlAuxiliary(auxiliaryType: AuxiliaryType, auxiliaryStatus: AuxiliaryStatus): Promise<void>
```

Control auxiliary.

**Since:** 18

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| auxiliaryType | AuxiliaryType | Yes | Auxiliary type. |
| auxiliaryStatus | AuxiliaryStatus | Yes | Auxiliary status. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400102 | Operation not allowed. |
| 7400201 | Camera service fatal error. |

## getPhysicalCameraOrientation

```TypeScript
getPhysicalCameraOrientation(): int
```

Obtains the physical camera orientation in the current fold state of the device.

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| int | Physical camera orientation. The unit is degree. The value range is [0, 360]. |

## isPhysicalCameraOrientationVariable

```TypeScript
isPhysicalCameraOrientationVariable(): boolean
```

Checks whether the physical camera orientation is adjustable in different fold states of the device.

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for whether the physical camera orientation is adjustable. true if  adjustable, false otherwise. If the API call fails, undefined is returned. |

## off('error')

```TypeScript
off(type: 'error', camera: CameraDevice, callback?: ErrorCallback): void
```

Unsubscribes from CameraInput error events.

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at 'error'. The event can be listened for when a  CameraInput instance is created. This event is triggered and the result is returned when an error occurs on  the camera device. For example, if the camera device is unavailable or a conflict occurs, the error  information is returned. |
| camera | CameraDevice | Yes | Camera device. |
| callback | ErrorCallback | No | Callback used to return the result. If this parameter is specified, only the  corresponding callback will be unregistered (the callback object cannot be an anonymous function); otherwise,  all registered callbacks will be unregistered. |

## off('cameraOcclusionDetection')

```TypeScript
off(type: 'cameraOcclusionDetection', callback?: AsyncCallback<CameraOcclusionDetectionResult>): void
```

Unsubscribes from **CameraInput** occlusion events. This API uses an asynchronous callback to return the result.

**Since:** 12

**Atomic service API:** From API version 23 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'cameraOcclusionDetection' | Yes | Event type. The value is fixed at 'cameraOcclusionDetection'.  The event can be listened for when a CameraInput instance is created. It is triggered when the occlusion  status of the camera lens changes, and the occlusion status is returned. |
| callback | AsyncCallback&lt;CameraOcclusionDetectionResult> | No | Callback used to return the result. If this  parameter is specified, the subscription to the specified event with the specified callback is canceled. (The  callback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with  all the callbacks are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. [since 12 - 22] |

## offCameraOcclusionDetection

```TypeScript
offCameraOcclusionDetection(callback?: AsyncCallback<CameraOcclusionDetectionResult>): void
```

Unsubscribes from camera occlusion detection results.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;CameraOcclusionDetectionResult> | No |  |

## offError

```TypeScript
offError(camera: CameraDevice, callback?: ErrorCallback): void
```

Unsubscribes from error events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| camera | CameraDevice | Yes | Camera device. |
| callback | ErrorCallback | No |  |

## on('error')

```TypeScript
on(type: 'error', camera: CameraDevice, callback: ErrorCallback): void
```

Subscribes to CameraInput error events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at 'error'. The event can be listened for when a  CameraInput instance is created. This event is triggered and the result is returned when an error occurs on  the camera device. For example, if the camera device is unavailable or a conflict occurs, the error  information is returned. |
| camera | CameraDevice | Yes | Camera device. |
| callback | ErrorCallback | Yes | Callback used to return an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

## on('cameraOcclusionDetection')

```TypeScript
on(type: 'cameraOcclusionDetection', callback: AsyncCallback<CameraOcclusionDetectionResult>): void
```

Subscribes to **CameraInput** occlusion events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 12

**Atomic service API:** From API version 23 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'cameraOcclusionDetection' | Yes | Event type. The value is fixed at 'cameraOcclusionDetection'.  The event can be listened for when a CameraInput instance is created. It is triggered when the occlusion  status of the camera lens changes, and the occlusion status is returned. |
| callback | AsyncCallback&lt;CameraOcclusionDetectionResult> | Yes | Callback used to return the occlusion status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. [since 12 - 22] |

## onCameraOcclusionDetection

```TypeScript
onCameraOcclusionDetection(callback: AsyncCallback<CameraOcclusionDetectionResult>): void
```

Subscribes to camera occlusion detection results.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;CameraOcclusionDetectionResult> | Yes | Callback used to get detection results. |

## onError

```TypeScript
onError(camera: CameraDevice, callback: ErrorCallback): void
```

Subscribes to error events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| camera | CameraDevice | Yes | Camera device. |
| callback | ErrorCallback | Yes | Callback used to get the camera input errors. |

## open

```TypeScript
open(callback: AsyncCallback<void>): void
```

Opens this camera device. This API uses an asynchronous callback to return the result.

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the camera device is opened  successfully, err is undefined; otherwise, err is an error object with an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400107 | Can not use camera cause of conflict. |
| 7400108 | Camera disabled cause of security reason. |
| 7400201 | Camera service fatal error. |

## open

```TypeScript
open(): Promise<void>
```

Opens this camera device. This API uses a promise to return the result.

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
| 7400102 | Operation not allowed. |
| 7400107 | Can not use camera cause of conflict. |
| 7400108 | Camera disabled cause of security reason. |
| 7400201 | Camera service fatal error. |

## open

```TypeScript
open(isSecureEnabled: boolean): Promise<bigint>
```

Opens this camera device. This API uses a promise to return the result.

**Since:** 12

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isSecureEnabled | boolean | Yes | Whether to open the camera device in secure mode. true to open in secure  mode, false otherwise. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;bigint> | Promise used to return the handle to the camera device in secure mode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400107 | Can not use camera cause of conflict. |
| 7400108 | Camera disabled cause of security reason. |
| 7400201 | Camera service fatal error. |

## open

```TypeScript
open(type: CameraConcurrentType): Promise<void>
```

Opens the camera with the specified concurrency type. This API uses a promise to return the result.

**Since:** 18

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | CameraConcurrentType | Yes | Concurrency type. If the API fails to be called, an error code is  returned. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400102 | Operation not allowed. |
| 7400107 | Can not use camera cause of conflict. |
| 7400108 | Camera disabled cause of security reason. |
| 7400201 | Camera service fatal error. |

## usedAsPosition

```TypeScript
usedAsPosition(position: CameraPosition): void
```

Sets the camera to be used as a camera at the specified position.

**Since:** 19

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| position | CameraPosition | Yes | The positon used for the camera. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400201 | Camera service fatal error. |

## usePhysicalCameraOrientation

```TypeScript
usePhysicalCameraOrientation(isUsed: boolean): void
```

Enables or disables the use of the physical camera orientation.

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isUsed | boolean | Yes | Whether to enable the use of the physical camera orientation. true to enable,  false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400102 | Operation not allowed. |
| 7400201 | Camera service fatal error. |

