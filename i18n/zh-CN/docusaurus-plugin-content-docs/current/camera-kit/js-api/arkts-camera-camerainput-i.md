# CameraInput

Defines the camera input object. It provides camera device information used in [Session]camera.Session.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## close

```TypeScript
close(callback: AsyncCallback<void>): void
```

Closes this camera device. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the camera device is closed  successfully, err is undefined. Otherwise, err is an error object with an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400201 | Camera service fatal error. |

## close

```TypeScript
close(): Promise<void>
```

Closes this camera device. This API uses a promise to return the result.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400201 | Camera service fatal error. |

## closeDelayed

```TypeScript
closeDelayed(time: int): Promise<void>
```

Delay close camera.

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| time | int | 是 | delay time for turning off camera, in units of second. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400201 | Camera service fatal error. |

## controlAuxiliary

```TypeScript
controlAuxiliary(auxiliaryType: AuxiliaryType, auxiliaryStatus: AuxiliaryStatus): Promise<void>
```

Control auxiliary.

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| auxiliaryType | AuxiliaryType | 是 | Auxiliary type. |
| auxiliaryStatus | AuxiliaryStatus | 是 | Auxiliary status. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400102 | Operation not allowed. |
| 7400201 | Camera service fatal error. |

## getPhysicalCameraOrientation

```TypeScript
getPhysicalCameraOrientation(): int
```

Obtains the physical camera orientation in the current fold state of the device.

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Physical camera orientation. The unit is degree. The value range is [0, 360]. |

## isPhysicalCameraOrientationVariable

```TypeScript
isPhysicalCameraOrientationVariable(): boolean
```

Checks whether the physical camera orientation is adjustable in different fold states of the device.

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for whether the physical camera orientation is adjustable. true if  adjustable, false otherwise. If the API call fails, undefined is returned. |

## off('error')

```TypeScript
off(type: 'error', camera: CameraDevice, callback?: ErrorCallback): void
```

Unsubscribes from CameraInput error events.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'error' | 是 | Event type. The value is fixed at 'error'. The event can be listened for when a  CameraInput instance is created. This event is triggered and the result is returned when an error occurs on  the camera device. For example, if the camera device is unavailable or a conflict occurs, the error  information is returned. |
| camera | CameraDevice | 是 | Camera device. |
| callback | ErrorCallback | 否 | Callback used to return the result. If this parameter is specified, only the  corresponding callback will be unregistered (the callback object cannot be an anonymous function); otherwise,  all registered callbacks will be unregistered. |

## off('cameraOcclusionDetection')

```TypeScript
off(type: 'cameraOcclusionDetection', callback?: AsyncCallback<CameraOcclusionDetectionResult>): void
```

Unsubscribes from **CameraInput** occlusion events. This API uses an asynchronous callback to return the result.

**起始版本：** 12

**原子化服务API：** 从API version 23开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'cameraOcclusionDetection' | 是 | Event type. The value is fixed at 'cameraOcclusionDetection'.  The event can be listened for when a CameraInput instance is created. It is triggered when the occlusion  status of the camera lens changes, and the occlusion status is returned. |
| callback | AsyncCallback&lt;CameraOcclusionDetectionResult> | 否 | Callback used to return the result. If this  parameter is specified, the subscription to the specified event with the specified callback is canceled. (The  callback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with  all the callbacks are canceled. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. [since 12 - 22] |

## offCameraOcclusionDetection

```TypeScript
offCameraOcclusionDetection(callback?: AsyncCallback<CameraOcclusionDetectionResult>): void
```

Unsubscribes from camera occlusion detection results.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;CameraOcclusionDetectionResult> | 否 |  |

## offError

```TypeScript
offError(camera: CameraDevice, callback?: ErrorCallback): void
```

Unsubscribes from error events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| camera | CameraDevice | 是 | Camera device. |
| callback | ErrorCallback | 否 |  |

## on('error')

```TypeScript
on(type: 'error', camera: CameraDevice, callback: ErrorCallback): void
```

Subscribes to CameraInput error events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'error' | 是 | Event type. The value is fixed at 'error'. The event can be listened for when a  CameraInput instance is created. This event is triggered and the result is returned when an error occurs on  the camera device. For example, if the camera device is unavailable or a conflict occurs, the error  information is returned. |
| camera | CameraDevice | 是 | Camera device. |
| callback | ErrorCallback | 是 | Callback used to return an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

## on('cameraOcclusionDetection')

```TypeScript
on(type: 'cameraOcclusionDetection', callback: AsyncCallback<CameraOcclusionDetectionResult>): void
```

Subscribes to **CameraInput** occlusion events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**起始版本：** 12

**原子化服务API：** 从API version 23开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'cameraOcclusionDetection' | 是 | Event type. The value is fixed at 'cameraOcclusionDetection'.  The event can be listened for when a CameraInput instance is created. It is triggered when the occlusion  status of the camera lens changes, and the occlusion status is returned. |
| callback | AsyncCallback&lt;CameraOcclusionDetectionResult> | 是 | Callback used to return the occlusion status. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. [since 12 - 22] |

## onCameraOcclusionDetection

```TypeScript
onCameraOcclusionDetection(callback: AsyncCallback<CameraOcclusionDetectionResult>): void
```

Subscribes to camera occlusion detection results.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;CameraOcclusionDetectionResult> | 是 | Callback used to get detection results. |

## onError

```TypeScript
onError(camera: CameraDevice, callback: ErrorCallback): void
```

Subscribes to error events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| camera | CameraDevice | 是 | Camera device. |
| callback | ErrorCallback | 是 | Callback used to get the camera input errors. |

## open

```TypeScript
open(callback: AsyncCallback<void>): void
```

Opens this camera device. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the camera device is opened  successfully, err is undefined; otherwise, err is an error object with an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400107 | Can not use camera cause of conflict. |
| 7400108 | Camera disabled cause of security reason. |
| 7400201 | Camera service fatal error. |

## open

```TypeScript
open(): Promise<void>
```

Opens this camera device. This API uses a promise to return the result.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 12

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isSecureEnabled | boolean | 是 | Whether to open the camera device in secure mode. true to open in secure  mode, false otherwise. If the operation fails, an error code defined in  [CameraErrorCode]camera.CameraErrorCode is returned. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;bigint> | Promise used to return the handle to the camera device in secure mode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400107 | Can not use camera cause of conflict. |
| 7400108 | Camera disabled cause of security reason. |
| 7400201 | Camera service fatal error. |

## open

```TypeScript
open(type: CameraConcurrentType): Promise<void>
```

Opens the camera with the specified concurrency type. This API uses a promise to return the result.

**起始版本：** 18

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | CameraConcurrentType | 是 | Concurrency type. If the API fails to be called, an error code is  returned. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 19

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| position | CameraPosition | 是 | The positon used for the camera. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400201 | Camera service fatal error. |

## usePhysicalCameraOrientation

```TypeScript
usePhysicalCameraOrientation(isUsed: boolean): void
```

Enables or disables the use of the physical camera orientation.

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isUsed | boolean | 是 | Whether to enable the use of the physical camera orientation. true to enable,  false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400102 | Operation not allowed. |
| 7400201 | Camera service fatal error. |

