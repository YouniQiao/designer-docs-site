# CameraInput

Defines the camera input object.It provides camera device information used in [Session](arkts-camera-camera-session-i.md).

**Since:** 10

<!--Device-camera-interface CameraInput--><!--Device-camera-interface CameraInput-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

<a id="closedelayed"></a>
## closeDelayed

```TypeScript
closeDelayed(time: number): Promise<void>
```

Delay close camera.

**Since:** 18

<!--Device-CameraInput-closeDelayed(time: int): Promise<void>--><!--Device-CameraInput-closeDelayed(time: int): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| time | number | Yes | delay time for turning off camera, in units of second. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

<a id="controlauxiliary"></a>
## controlAuxiliary

```TypeScript
controlAuxiliary(auxiliaryType: AuxiliaryType, auxiliaryStatus: AuxiliaryStatus): Promise<void>
```

Control auxiliary.

**Since:** 18

<!--Device-CameraInput-controlAuxiliary(auxiliaryType: AuxiliaryType, auxiliaryStatus: AuxiliaryStatus): Promise<void>--><!--Device-CameraInput-controlAuxiliary(auxiliaryType: AuxiliaryType, auxiliaryStatus: AuxiliaryStatus): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| auxiliaryType | [AuxiliaryType](arkts-camera-camera-auxiliarytype-e-sys.md) | Yes | Auxiliary type. |
| auxiliaryStatus | [AuxiliaryStatus](arkts-camera-camera-auxiliarystatus-e-sys.md) | Yes | Auxiliary status. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400102](../errorcode-camera.md#7400102-invalid-operation) | Operation not allowed. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

<a id="off"></a>
## off('cameraOcclusionDetection')

```TypeScript
off(type: 'cameraOcclusionDetection', callback?: AsyncCallback<CameraOcclusionDetectionResult>): void
```

Unsubscribes from **CameraInput** occlusion events. This API uses an asynchronous callback to return the result.

**Since:** 23

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-CameraInput-off(type: 'cameraOcclusionDetection', callback?: AsyncCallback<CameraOcclusionDetectionResult>): void--><!--Device-CameraInput-off(type: 'cameraOcclusionDetection', callback?: AsyncCallback<CameraOcclusionDetectionResult>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'cameraOcclusionDetection' | Yes | Event type. The value is fixed at **'cameraOcclusionDetection'**.The event can be listened for when a **CameraInput** instance is created. It is triggered when the occlusion status of the camera lens changes, and the occlusion status is returned. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;CameraOcclusionDetectionResult&gt; | No | Callback used to return the result. If this parameter is specified, the subscription to the specified event with the specified callback is canceled. (The callback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application.<br>**Applicable version:** 12 - 22 |

<a id="on"></a>
## on('cameraOcclusionDetection')

```TypeScript
on(type: 'cameraOcclusionDetection', callback: AsyncCallback<CameraOcclusionDetectionResult>): void
```

Subscribes to **CameraInput** occlusion events. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 23

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-CameraInput-on(type: 'cameraOcclusionDetection', callback: AsyncCallback<CameraOcclusionDetectionResult>): void--><!--Device-CameraInput-on(type: 'cameraOcclusionDetection', callback: AsyncCallback<CameraOcclusionDetectionResult>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'cameraOcclusionDetection' | Yes | Event type. The value is fixed at **'cameraOcclusionDetection'**.The event can be listened for when a **CameraInput** instance is created. It is triggered when the occlusion status of the camera lens changes, and the occlusion status is returned. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;CameraOcclusionDetectionResult&gt; | Yes | Callback used to return the occlusion status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application.<br>**Applicable version:** 12 - 22 |

<a id="usedasposition"></a>
## usedAsPosition

```TypeScript
usedAsPosition(position: CameraPosition): void
```

Sets the camera to be used as a camera at the specified position.

**Since:** 19

<!--Device-CameraInput-usedAsPosition(position: CameraPosition): void--><!--Device-CameraInput-usedAsPosition(position: CameraPosition): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| position | [CameraPosition](arkts-camera-camera-cameraposition-e.md) | Yes | The positon used for the camera. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

