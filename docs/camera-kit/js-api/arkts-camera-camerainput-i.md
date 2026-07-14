# CameraInput

Defines the camera input object. It provides camera device information used in [Session](arkts-camera-session-i.md).

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

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the camera device is closedsuccessfully, **err** is **undefined**. Otherwise, **err** is an error object with an error code defined in[CameraErrorCode](arkts-camera-cameraerrorcode-e.md). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

## close

```TypeScript
close(): Promise<void>
```

Closes this camera device. This API uses a promise to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

## getPhysicalCameraOrientation

```TypeScript
getPhysicalCameraOrientation(): number
```

Obtains the physical camera orientation in the current fold state of the device.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Physical camera orientation. The unit is degree. The value range is [0, 360]. |

## isPhysicalCameraOrientationVariable

```TypeScript
isPhysicalCameraOrientationVariable(): boolean
```

Checks whether the physical camera orientation is adjustable in different fold states of the device.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for whether the physical camera orientation is adjustable. **true** ifadjustable, **false** otherwise. If the API call fails, undefined is returned. |

## off('error')

```TypeScript
off(type: 'error', camera: CameraDevice, callback?: ErrorCallback): void
```

Unsubscribes from CameraInput error events.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at **'error'**. The event can be listened for when aCameraInput instance is created. This event is triggered and the result is returned when an error occurs onthe camera device. For example, if the camera device is unavailable or a conflict occurs, the errorinformation is returned. |
| camera | CameraDevice | Yes | Camera device. |
| callback | ErrorCallback | No | Callback used to return the result. If this parameter is specified, only thecorresponding callback will be unregistered (the callback object cannot be an anonymous function); otherwise,all registered callbacks will be unregistered. |

## on('error')

```TypeScript
on(type: 'error', camera: CameraDevice, callback: ErrorCallback): void
```

Subscribes to CameraInput error events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at **'error'**. The event can be listened for when aCameraInput instance is created. This event is triggered and the result is returned when an error occurs onthe camera device. For example, if the camera device is unavailable or a conflict occurs, the errorinformation is returned. |
| camera | CameraDevice | Yes | Camera device. |
| callback | ErrorCallback | Yes | Callback used to return an error code defined in[CameraErrorCode](arkts-camera-cameraerrorcode-e.md). |

## open

```TypeScript
open(callback: AsyncCallback<void>): void
```

Opens this camera device. This API uses an asynchronous callback to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the camera device is openedsuccessfully, **err** is **undefined**; otherwise, **err** is an error object with an error code defined in[CameraErrorCode](arkts-camera-cameraerrorcode-e.md). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400107](../errorcode-camera.md#7400107-camera-conflict) | Can not use camera cause of conflict. |
| [7400108](../errorcode-camera.md#7400108-camera-disabled-due-to-security-reasons) | Camera disabled cause of security reason. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

## open

```TypeScript
open(): Promise<void>
```

Opens this camera device. This API uses a promise to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400102](../errorcode-camera.md#7400102-invalid-operation) | Operation not allowed. |
| [7400107](../errorcode-camera.md#7400107-camera-conflict) | Can not use camera cause of conflict. |
| [7400108](../errorcode-camera.md#7400108-camera-disabled-due-to-security-reasons) | Camera disabled cause of security reason. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

## open

```TypeScript
open(isSecureEnabled: boolean): Promise<bigint>
```

Opens this camera device. This API uses a promise to return the result.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isSecureEnabled | boolean | Yes | Whether to open the camera device in secure mode. **true** to open in securemode, **false** otherwise. If the operation fails, an error code defined in[CameraErrorCode](arkts-camera-cameraerrorcode-e.md) is returned. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;bigint&gt; | Promise used to return the handle to the camera device in secure mode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400107](../errorcode-camera.md#7400107-camera-conflict) | Can not use camera cause of conflict. |
| [7400108](../errorcode-camera.md#7400108-camera-disabled-due-to-security-reasons) | Camera disabled cause of security reason. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

## open

```TypeScript
open(type: CameraConcurrentType): Promise<void>
```

Opens the camera with the specified concurrency type. This API uses a promise to return the result.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | CameraConcurrentType | Yes | Concurrency type. If the API fails to be called, an error code isreturned. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400102](../errorcode-camera.md#7400102-invalid-operation) | Operation not allowed. |
| [7400107](../errorcode-camera.md#7400107-camera-conflict) | Can not use camera cause of conflict. |
| [7400108](../errorcode-camera.md#7400108-camera-disabled-due-to-security-reasons) | Camera disabled cause of security reason. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

## usePhysicalCameraOrientation

```TypeScript
usePhysicalCameraOrientation(isUsed: boolean): void
```

Enables or disables the use of the physical camera orientation.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isUsed | boolean | Yes | Whether to enable the use of the physical camera orientation. **true** to enable,**false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400102](../errorcode-camera.md#7400102-invalid-operation) | Operation not allowed. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

