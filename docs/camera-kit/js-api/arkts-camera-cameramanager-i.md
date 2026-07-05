# CameraManager

Implements camera management. Before calling any API in CameraManager, you must use [getCameraManager](arkts-camera-getcameramanager-f.md#getcameramanager-1) to obtain a CameraManager instance.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@ohos.multimedia.camera';
```

## createCameraInput

```TypeScript
createCameraInput(camera: CameraDevice): CameraInput
```

Creates a **CameraInput** instance with the specified **CameraDevice** instance. This API returns the result synchronously. Before calling this API, call [getSupportedCameras](arkts-camera-cameramanager-i.md#getsupportedcameras-1) to obtain the list of supported camera devices, select the camera device that meets the requirements based on the actual usage scenario, and then create the **CameraInput** instance.

**Since:** 10

**Required permissions:** ohos.permission.CAMERA

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| camera | CameraDevice | Yes | **CameraDevice** instance, which is obtained through[getSupportedCameras](arkts-camera-cameramanager-i.md#getsupportedcameras-1). |

**Return value:**

| Type | Description |
| --- | --- |
| CameraInput | **CameraInput** instance created. If the operation fails, an error code defined in[CameraErrorCode](arkts-camera-cameraerrorcode-e.md#cameraerrorcode) is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400102](../errorcode-camera.md#7400102-invalid-operation) | Operation not allowed.<br>**Applicable version:** 12 |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error.<br>**Applicable version:** 12 |

## createCameraInput

```TypeScript
createCameraInput(position: CameraPosition, type: CameraType): CameraInput
```

Creates a **CameraInput** instance with the specified camera position and type. This API returns the result synchronously. Before calling this API, specify the camera position and type based on the usage scenario. For example, open the front camera for the selfie feature

**Since:** 10

**Required permissions:** ohos.permission.CAMERA

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| position | CameraPosition | Yes | Camera position. You need to obtain the supported camera object by calling[getSupportedCameras](arkts-camera-cameramanager-i.md#getsupportedcameras-1) and then obtain the device positioninformation based on the returned camera object. |
| type | CameraType | Yes | Camera type. You need to obtain the supported camera object by calling[getSupportedCameras](arkts-camera-cameramanager-i.md#getsupportedcameras-1) and then obtain the camera type basedon the returned camera object. |

**Return value:**

| Type | Description |
| --- | --- |
| CameraInput | **CameraInput** instance created. If the operation fails, an error code defined in[CameraErrorCode](arkts-camera-cameraerrorcode-e.md#cameraerrorcode) is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400102](../errorcode-camera.md#7400102-invalid-operation) | Operation not allowed.<br>**Applicable version:** 12 |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error.<br>**Applicable version:** 12 |

## createCaptureSession

```TypeScript
createCaptureSession(): CaptureSession
```

Creates a **CaptureSession** instance. This API returns the result synchronously.

**Since:** 10

**Deprecated since:** 11

**Substitutes:** [createSession](arkts-camera-cameramanager-i.md#createsession-1)

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| CaptureSession | **CaptureSession** instance created. If the operation fails, an error code defined in[CameraErrorCode](arkts-camera-cameraerrorcode-e.md#cameraerrorcode) is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

## createMetadataOutput

```TypeScript
createMetadataOutput(metadataObjectTypes: Array<MetadataObjectType>): MetadataOutput
```

Creates a **MetadataOutput** instance. This API returns the result synchronously.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| metadataObjectTypes | Array&lt;MetadataObjectType&gt; | Yes | Metadata object types, which are obtained through[getSupportedOutputCapability](arkts-camera-cameramanager-i.md#getsupportedoutputcapability-2). |

**Return value:**

| Type | Description |
| --- | --- |
| MetadataOutput | **MetadataOutput** instance created. If the operation fails, an error code defined in[CameraErrorCode](arkts-camera-cameraerrorcode-e.md#cameraerrorcode) is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error.<br>**Applicable version:** 12 |

## createPhotoOutput

```TypeScript
createPhotoOutput(profile: Profile, surfaceId: string): PhotoOutput
```

Creates a **PhotoOutput** instance. This API returns the result synchronously. > **NOTE** > > - This API can only be used to create a **PhotoOutput** object in JPEG format.

**Since:** 10

**Deprecated since:** 11

**Substitutes:** createPhotoOutput(profile?:

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| profile | Profile | Yes | Supported photo profile, which is obtained through[getSupportedOutputCapability](arkts-camera-cameramanager-i.md#getsupportedoutputcapability-2). |
| surfaceId | string | Yes | Surface ID, which is obtained from[ImageReceiver](../../apis-image-kit/arkts-apis/arkts-image-imagereceiver-i.md#imagereceiver). |

**Return value:**

| Type | Description |
| --- | --- |
| PhotoOutput | **PhotoOutput** instance created. If the operation fails, an error code defined in[CameraErrorCode](arkts-camera-cameraerrorcode-e.md#cameraerrorcode) is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |

## createPhotoOutput

```TypeScript
createPhotoOutput(profile?: Profile): PhotoOutput
```

Creates a **PhotoOutput** instance. This API returns the result synchronously.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| profile | Profile | No | Supported photo profile, which is obtained through[getSupportedOutputCapability](arkts-camera-cameramanager-i.md#getsupportedoutputcapability-2).<br>In API version 11, this parameter is mandatory. Starting from API version 12, it will overwrite thepreconfigured parameters passed in through [preconfig](arkts-camera-photosession-i.md#preconfig-1). |

**Return value:**

| Type | Description |
| --- | --- |
| PhotoOutput | **PhotoOutput** instance created. If the operation fails, an error code defined in[CameraErrorCode](arkts-camera-cameraerrorcode-e.md#cameraerrorcode) is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error.<br>**Applicable version:** 12 |

## createPreviewOutput

```TypeScript
createPreviewOutput(profile: Profile, surfaceId: string): PreviewOutput
```

Creates a **PreviewOutput** instance. This API returns the result synchronously.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| profile | Profile | Yes | Supported preview profile, which is obtained through[getSupportedOutputCapability](arkts-camera-cameramanager-i.md#getsupportedoutputcapability-2). |
| surfaceId | string | Yes | Surface ID, which is obtained from[XComponent](XComponent) or [ImageReceiver](../../apis-image-kit/arkts-apis/arkts-image-imagereceiver-i.md#imagereceiver). |

**Return value:**

| Type | Description |
| --- | --- |
| PreviewOutput | **PreviewOutput** instance created. If the operation fails, an error code defined in[CameraErrorCode](arkts-camera-cameraerrorcode-e.md#cameraerrorcode) is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error.<br>**Applicable version:** 12 |

## createPreviewOutput

```TypeScript
createPreviewOutput(surfaceId: string): PreviewOutput
```

Creates a **PreviewOutput** instance without configuration. This API returns the result synchronously. It must be used with [preconfig](arkts-camera-photosession-i.md#preconfig-1).

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| surfaceId | string | Yes | Surface ID, which is obtained from[XComponent](XComponent) or [ImageReceiver](../../apis-image-kit/arkts-apis/arkts-image-imagereceiver-i.md#imagereceiver). |

**Return value:**

| Type | Description |
| --- | --- |
| PreviewOutput | **PreviewOutput** instance created. If the operation fails, an error code defined in[CameraErrorCode](arkts-camera-cameraerrorcode-e.md#cameraerrorcode) is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

## createSession

```TypeScript
createSession<T extends Session>(mode: SceneMode): T
```

Creates a **Session** instance with a given scene mode. This API returns the result synchronously.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | SceneMode | Yes | Scene mode. The API does not take effect if the input parameter is invalid (forexample, the value is out of range, null, or undefined). |

**Return value:**

| Type | Description |
| --- | --- |
| T | **Session** instance created. If the operation fails, an error code defined in[CameraErrorCode](arkts-camera-cameraerrorcode-e.md#cameraerrorcode) is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;3. Parameter verification failed.<br>**Applicable version:** 19 |

## createVideoOutput

```TypeScript
createVideoOutput(profile: VideoProfile, surfaceId: string): VideoOutput
```

Creates a **VideoOutput** instance. This API returns the result synchronously. In video recording mode, if SDR or HDR VIVID is enabled, the camera format and color space must be configured according to the relationships specified in the table below. Configurations that do not match the table will cause issues such as preview exceptions. | SDR/HDR Photo Capture | CameraFormat | ColorSpace | |--------------------|--------------------------|------------------| | SDR | CAMERA_FORMAT_YUV_420_SP | BT709_LIMIT | | HDR_VIVID | CAMERA_FORMAT_YCRCB_P010<br>CAMERA_FORMAT_YCBCR_P010 | BT2020_HLG_LIMIT<br>BT2020_HLG_FULL |

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| profile | VideoProfile | Yes | Supported video profile, which is obtained through[getSupportedOutputCapability](arkts-camera-cameramanager-i.md#getsupportedoutputcapability-2). |
| surfaceId | string | Yes | Surface ID, which is obtained from [AVRecorder](../../apis-media-kit/arkts-apis/arkts-multimedia-media.md#media). |

**Return value:**

| Type | Description |
| --- | --- |
| VideoOutput | **VideoOutput** instance created. If the operation fails, an error code defined in[CameraErrorCode](arkts-camera-cameraerrorcode-e.md#cameraerrorcode) is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error.<br>**Applicable version:** 12 |

## createVideoOutput

```TypeScript
createVideoOutput(surfaceId: string): VideoOutput
```

Creates a **VideoOutput** instance without configuration. This API returns the result synchronously. It must be used with [preconfig](arkts-camera-videosession-i.md#preconfig-1).

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| surfaceId | string | Yes | Surface ID, which is obtained from [AVRecorder](../../apis-media-kit/arkts-apis/arkts-multimedia-media.md#media). |

**Return value:**

| Type | Description |
| --- | --- |
| VideoOutput | **VideoOutput** instance created. If the operation fails, an error code defined in[CameraErrorCode](arkts-camera-cameraerrorcode-e.md#cameraerrorcode) is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

## getCameraConcurrentInfos

```TypeScript
getCameraConcurrentInfos(cameras: Array<CameraDevice>): Array<CameraConcurrentInfo>
```

Obtains the concurrency information of the specified cameras. If the return value is an empty array, concurrency is not supported.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cameras | Array&lt;CameraDevice&gt; | Yes | Array of **CameraDevice** objects. You are advised to use the front andrear cameras obtained by calling [getCameraDevice](arkts-camera-cameramanager-i.md#getcameradevice-1). |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;CameraConcurrentInfo&gt; | Array of concurrency information corresponding to the providedCameraDevice objects, with a one-to-one mapping. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

## getCameraDevice

```TypeScript
getCameraDevice(position: CameraPosition, type: CameraType): CameraDevice
```

Obtains the specified camera based on the camera position and type. Obtains the camera lens of the specified [CameraPosition](arkts-camera-cameraposition-e.md#cameraposition) and [CameraType](arkts-camera-cameratype-e.md#cameratype). If the returned result is undefined, the camera lens is not found on the current device.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| position | CameraPosition | Yes | Camera position. |
| type | CameraType | Yes | Camera type. |

**Return value:**

| Type | Description |
| --- | --- |
| CameraDevice | Camera obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

## getCameraDevices

```TypeScript
getCameraDevices(position: CameraPosition, types: Array<CameraType>, connectType: ConnectionType): Array<CameraDevice>
```

Obtains the list of cameras that meet the search criteria based on the camera position, camera types, and connection type.

**Since:** 23

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| position | CameraPosition | Yes | Camera position. |
| types | Array&lt;CameraType&gt; | Yes | Array of camera types. |
| connectType | ConnectionType | Yes | Camera connection type. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;CameraDevice&gt; | Array of cameras that meet the search criteria. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

## getSupportedCameras

```TypeScript
getSupportedCameras(): Array<CameraDevice>
```

Obtains the supported camera devices. This API returns the result synchronously.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;CameraDevice&gt; | Array of camera devices supported. |

## getSupportedFullOutputCapability

```TypeScript
getSupportedFullOutputCapability(camera: CameraDevice, mode: SceneMode): CameraOutputCapability
```

Obtains the complete output capabilities supported by a specified camera in a specified mode, including YUV, HEIF , and HDR. > **NOTE** > > Before using YUV, HEIF, or HDR, you need to explicitly call this method to ensure that the complete output > capabilities are obtained.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| camera | CameraDevice | Yes | Camera device. |
| mode | SceneMode | Yes | Scene mode. |

**Return value:**

| Type | Description |
| --- | --- |
| CameraOutputCapability | Camera output capability obtained. |

## getSupportedOutputCapability

```TypeScript
getSupportedOutputCapability(camera: CameraDevice): CameraOutputCapability
```

Obtains the output capability supported by a camera device. This API returns the result synchronously.

**Since:** 10

**Deprecated since:** 11

**Substitutes:** getSupportedOutputCapability(camera:

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| camera | CameraDevice | Yes | Camera device. |

**Return value:**

| Type | Description |
| --- | --- |
| CameraOutputCapability | Camera output capability obtained. |

## getSupportedOutputCapability

```TypeScript
getSupportedOutputCapability(camera: CameraDevice, mode: SceneMode): CameraOutputCapability
```

Obtains the output capability supported by a camera device in a given scene mode. This API returns the result synchronously.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| camera | CameraDevice | Yes | Camera device. |
| mode | SceneMode | Yes | Scene mode. |

**Return value:**

| Type | Description |
| --- | --- |
| CameraOutputCapability | Camera output capability obtained. |

## getSupportedSceneModes

```TypeScript
getSupportedSceneModes(camera: CameraDevice): Array<SceneMode>
```

Obtains the scene modes supported by a camera device. This API returns the result synchronously.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| camera | CameraDevice | Yes | Camera device. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;SceneMode&gt; | Array of scene modes supported. |

## getTorchMode

```TypeScript
getTorchMode(): TorchMode
```

Obtains the flashlight mode of this camera device.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| TorchMode | Flashlight mode. |

## isCameraMuted

```TypeScript
isCameraMuted(): boolean
```

Checks whether this camera is muted.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for whether the camera is muted. **true** if muted, **false** otherwise. |

## isTorchModeSupported

```TypeScript
isTorchModeSupported(mode: TorchMode): boolean
```

Checks whether a flashlight mode is supported.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | TorchMode | Yes | Flashlight mode. If the input parameter is null or undefined, it is treated as 0 andthe flashlight is turned off. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of the flashlight mode. **true** if supported, **false**otherwise. If the API call fails, undefined is returned. |

## isTorchSupported

```TypeScript
isTorchSupported(): boolean
```

Checks whether the camera device supports the flashlight.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of the flashlight. **true** if supported, **false** otherwise.If the API call fails, undefined is returned. |

## off('cameraStatus')

```TypeScript
off(type: 'cameraStatus', callback?: AsyncCallback<CameraStatusInfo>): void
```

Unsubscribes from camera status events. This API uses an asynchronous callback to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'cameraStatus' | Yes | Event type. The value is fixed at **'cameraStatus'**. The event can be listenedfor when a **CameraManager** instance is obtained. |
| callback | AsyncCallback&lt;CameraStatusInfo&gt; | No | Callback used to return the result. If this parameter isspecified, the subscription to the specified event with the specified callback is canceled. (The callbackobject cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all thecallbacks are canceled. |

## off('foldStatusChange')

```TypeScript
off(type: 'foldStatusChange', callback?: AsyncCallback<FoldStatusInfo>): void
```

Unsubscribes from fold state change events of the foldable device.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'foldStatusChange' | Yes | Event type. The value is fixed at **'foldStatusChange'**. The event istriggered when the fold state of the foldable device changes. |
| callback | AsyncCallback&lt;FoldStatusInfo&gt; | No | Callback used to return the fold state information about thefoldable device. If this parameter is specified, the subscription to the specified event with the specifiedcallback is canceled. (The callback object cannot be an anonymous function.) Otherwise, the subscriptions tothe specified event with all the callbacks are canceled. |

## off('torchStatusChange')

```TypeScript
off(type: 'torchStatusChange', callback?: AsyncCallback<TorchStatusInfo>): void
```

Unsubscribes from flashlight status change events. This API uses an asynchronous callback to return the result.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'torchStatusChange' | Yes | Event type. The value is fixed at **'torchStatusChange'**. The event can belistened for when a **CameraManager** instance is obtained. |
| callback | AsyncCallback&lt;TorchStatusInfo&gt; | No | Callback used to return the result. If this parameter isspecified, the subscription to the specified event with the specified callback is canceled. (The callbackobject cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all thecallbacks are canceled. |

## on('cameraStatus')

```TypeScript
on(type: 'cameraStatus', callback: AsyncCallback<CameraStatusInfo>): void
```

Subscribes to camera status events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'cameraStatus' | Yes | Event type. The value is fixed at **'cameraStatus'**. The event can be listenedfor when a **CameraManager** instance is obtained. This event is triggered and the corresponding informationis returned only when the camera device is enabled or disabled. |
| callback | AsyncCallback&lt;CameraStatusInfo&gt; | Yes | Callback used to return the camera status change. |

## on('foldStatusChange')

```TypeScript
on(type: 'foldStatusChange', callback: AsyncCallback<FoldStatusInfo>): void
```

Subscribes to fold status change events of the foldable device. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'foldStatusChange' | Yes | Event type. The value is fixed at **'foldStatusChange'**. The event istriggered when the fold state of the foldable device changes. |
| callback | AsyncCallback&lt;FoldStatusInfo&gt; | Yes | Callback used to return the fold state information about thefoldable device. |

## on('torchStatusChange')

```TypeScript
on(type: 'torchStatusChange', callback: AsyncCallback<TorchStatusInfo>): void
```

Subscribes to flashlight status change events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'torchStatusChange' | Yes | Event type. The value is fixed at **'torchStatusChange'**. The event can belistened for when a **CameraManager** instance is obtained. Currently, this event is triggered only in thefollowing scenarios: The flashlight is turned on or turned off, or becomes unavailable or available. |
| callback | AsyncCallback&lt;TorchStatusInfo&gt; | Yes | Callback used to return the flashlight status. |

## setTorchMode

```TypeScript
setTorchMode(mode: TorchMode): void
```

Sets the flashlight mode.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | TorchMode | Yes | Flashlight mode. If the input parameter is null or undefined, it is treated as 0 andthe flashlight is turned off. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect.<br>**Applicable version:** 11 - 17 |
| [7400102](../errorcode-camera.md#7400102-invalid-operation) | Operation not allowed.<br>**Applicable version:** 12 |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error.<br>**Applicable version:** 12 |

