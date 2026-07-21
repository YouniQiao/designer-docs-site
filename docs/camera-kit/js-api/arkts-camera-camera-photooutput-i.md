# PhotoOutput

Implements output information used in a photo session. It inherits from [CameraOutput](arkts-camera-camera-cameraoutput-i.md).

**Inheritance/Implementation:** PhotoOutput extends [CameraOutput](arkts-camera-camera-cameraoutput-i.md)

**Since:** 10

<!--Device-camera-interface PhotoOutput extends CameraOutput--><!--Device-camera-interface PhotoOutput extends CameraOutput-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

<a id="capture"></a>
## capture

```TypeScript
capture(callback: AsyncCallback<void>): void
```

Captures a photo with the default photo capture parameters. This API uses an asynchronous callback to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-PhotoOutput-capture(callback: AsyncCallback<void>): void--><!--Device-PhotoOutput-capture(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the photo is successfully captured with the default parameters, **err** is **undefined**; otherwise, **err** is an error object with an error code defined in [CameraErrorCode](arkts-camera-camera-cameraerrorcode-e.md). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400104](../errorcode-camera.md#7400104-session-not-running) | Session not running. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

<a id="capture-1"></a>
## capture

```TypeScript
capture(): Promise<void>
```

Captures a photo with the default photo capture parameters. This API uses a promise to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-PhotoOutput-capture(): Promise<void>--><!--Device-PhotoOutput-capture(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400104](../errorcode-camera.md#7400104-session-not-running) | Session not running. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

<a id="capture-2"></a>
## capture

```TypeScript
capture(setting: PhotoCaptureSetting, callback: AsyncCallback<void>): void
```

Captures a photo with the specified photo capture parameters. This API uses an asynchronous callback to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-PhotoOutput-capture(setting: PhotoCaptureSetting, callback: AsyncCallback<void>): void--><!--Device-PhotoOutput-capture(setting: PhotoCaptureSetting, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| setting | [PhotoCaptureSetting](arkts-camera-camera-photocapturesetting-i.md) | Yes | Photo capture settings. If the input data is of the **undefined** type,a photo capture operation is triggered based on the default settings. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the operation fails, an error code defined in [CameraErrorCode](arkts-camera-camera-cameraerrorcode-e.md) is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400104](../errorcode-camera.md#7400104-session-not-running) | Session not running. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

<a id="capture-3"></a>
## capture

```TypeScript
capture(setting: PhotoCaptureSetting): Promise<void>
```

Captures a photo with the specified photo capture parameters. This API uses a promise to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-PhotoOutput-capture(setting: PhotoCaptureSetting): Promise<void>--><!--Device-PhotoOutput-capture(setting: PhotoCaptureSetting): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| setting | [PhotoCaptureSetting](arkts-camera-camera-photocapturesetting-i.md) | Yes | Photo capture settings. If the input data is of the **undefined** type,a photo capture operation is triggered based on the default settings. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400104](../errorcode-camera.md#7400104-session-not-running) | Session not running. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

<a id="enableautoextendedgainmapdelivery"></a>
## enableAutoExtendedGainmapDelivery

```TypeScript
enableAutoExtendedGainmapDelivery(enabled: boolean): void
```

Enable auto extended gainmap delivery.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-PhotoOutput-enableAutoExtendedGainmapDelivery(enabled: boolean): void--><!--Device-PhotoOutput-enableAutoExtendedGainmapDelivery(enabled: boolean): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | enable auto extended gainmap delivery if TRUE. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400102](../errorcode-camera.md#7400102-invalid-operation) | Operation not allowed. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config, only throw in session usage. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

<a id="enablemirror"></a>
## enableMirror

```TypeScript
enableMirror(enabled: boolean): void
```

Enables or disables mirroring photo capture.Before calling this API, check whether moving photo capture is supported by calling [isMovingPhotoSupported](arkts-camera-camera-photooutput-i.md#ismovingphotosupported-1) and whether mirroring is supported by calling [isMirrorSupported](arkts-camera-camera-photooutput-i.md#ismirrorsupported-1).

**Since:** 13

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-PhotoOutput-enableMirror(enabled: boolean): void--><!--Device-PhotoOutput-enableMirror(enabled: boolean): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to enable mirroring photo capture. **true** to enable, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

<a id="enablemovingphoto"></a>
## enableMovingPhoto

```TypeScript
enableMovingPhoto(enabled: boolean): void
```

Enables or disables the feature of taking moving photos.

**Since:** 12

**Required permissions:** ohos.permission.MICROPHONE

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-PhotoOutput-enableMovingPhoto(enabled: boolean): void--><!--Device-PhotoOutput-enableMovingPhoto(enabled: boolean): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to enable the feature of taking moving photos. **true** to enable, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | permission denied. |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

<a id="getactiveprofile"></a>
## getActiveProfile

```TypeScript
getActiveProfile(): Profile
```

Obtains the profile that takes effect currently.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-PhotoOutput-getActiveProfile(): Profile--><!--Device-PhotoOutput-getActiveProfile(): Profile-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Profile](arkts-camera-camera-profile-i.md) | Profile obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

<a id="getphotorotation"></a>
## getPhotoRotation

```TypeScript
getPhotoRotation(deviceDegree?: number): ImageRotation
```

Obtains the photo rotation angle.

- Device's natural orientation: the default orientation for using a device. For example, the default orientation of the bar-type phone is in portrait mode, with the charging port facing downward.  
- Camera lens angle: equivalent to the angle at which the camera is rotated clockwise to match the device's natural orientation. For example, the rear camera sensor of a bar-type phone is installed in landscape mode.Therefore, it needs to be rotated by 90 degrees clockwise to match the device's natural orientation.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-PhotoOutput-getPhotoRotation(deviceDegree?: int): ImageRotation--><!--Device-PhotoOutput-getPhotoRotation(deviceDegree?: int): ImageRotation-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceDegree | number | No | Device rotation angle, measured in degrees, within the range of [0, 360].<br>If the input value goes beyond this range, the system uses the remainder of the input value divided by 360.<br>Since API version 23, the input parameter **deviceDegree** is optional. If no parameter is passed, the system obtains the **deviceDegree** value to calculate the photo rotation angle.<br>**Since:** 23 |

**Return value:**

| Type | Description |
| --- | --- |
| [ImageRotation](arkts-camera-camera-imagerotation-e.md) | Rotation angle of the photo. If the API call fails, undefined is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect.<br>**Applicable version:** 12 - 22 |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

<a id="getsupportedmovingphotovideocodectypes"></a>
## getSupportedMovingPhotoVideoCodecTypes

```TypeScript
getSupportedMovingPhotoVideoCodecTypes(): Array<VideoCodecType>
```

Obtains the supported video codec types of moving photos.

**Since:** 13

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-PhotoOutput-getSupportedMovingPhotoVideoCodecTypes(): Array<VideoCodecType>--><!--Device-PhotoOutput-getSupportedMovingPhotoVideoCodecTypes(): Array<VideoCodecType>-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;VideoCodecType&gt; | Array holding the supported video codec types. If the API call fails,undefined is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

<a id="isautoextendedgainmapdeliverysupported"></a>
## isAutoExtendedGainmapDeliverySupported

```TypeScript
isAutoExtendedGainmapDeliverySupported(): boolean
```

Confirm if auto extended gainmap delivery supported.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-PhotoOutput-isAutoExtendedGainmapDeliverySupported(): boolean--><!--Device-PhotoOutput-isAutoExtendedGainmapDeliverySupported(): boolean-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | TRUE if the auto extended gainmap delivery is supported. |

<a id="ismirrorsupported"></a>
## isMirrorSupported

```TypeScript
isMirrorSupported(): boolean
```

Checks whether mirror photography is supported.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-PhotoOutput-isMirrorSupported(): boolean--><!--Device-PhotoOutput-isMirrorSupported(): boolean-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of mirror photography. **true** if supported, **false** otherwise. If the API call fails, undefined is returned. |

<a id="ismovingphotosupported"></a>
## isMovingPhotoSupported

```TypeScript
isMovingPhotoSupported(): boolean
```

Checks whether taking moving photos is supported.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-PhotoOutput-isMovingPhotoSupported(): boolean--><!--Device-PhotoOutput-isMovingPhotoSupported(): boolean-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of taking moving photos. **true** if supported, **false** otherwise. If the API call fails, undefined is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

<a id="isphotoqualityprioritizationsupported"></a>
## isPhotoQualityPrioritizationSupported

```TypeScript
isPhotoQualityPrioritizationSupported(qualityPrioritization: PhotoQualityPrioritization): boolean
```

Checks whether the specified photo quality prioritization strategy is supported.

**Since:** 21

**Atomic service API:** This API can be used in atomic services since API version 21.

<!--Device-PhotoOutput-isPhotoQualityPrioritizationSupported(qualityPrioritization: PhotoQualityPrioritization): boolean--><!--Device-PhotoOutput-isPhotoQualityPrioritizationSupported(qualityPrioritization: PhotoQualityPrioritization): boolean-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| qualityPrioritization | [PhotoQualityPrioritization](arkts-camera-camera-photoqualityprioritization-e.md) | Yes | Photo quality prioritization strategy. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of the specified photo quality prioritization strategy.**true** if supported, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error,reconfiguring streams is needed to recover from failure. |

<a id="off"></a>
## off('photoAvailable')

```TypeScript
off(type: 'photoAvailable', callback?: AsyncCallback<Photo>): void
```

Unsubscribes from the events of returning available photos.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-PhotoOutput-off(type: 'photoAvailable', callback?: AsyncCallback<Photo>): void--><!--Device-PhotoOutput-off(type: 'photoAvailable', callback?: AsyncCallback<Photo>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'photoAvailable' | Yes | Event type. The value is fixed at **'photoAvailable'**. The event can be listened for when a photoOutput instance is created. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Photo&gt; | No | Callback used to return the result. If this parameter is specified,the subscription to the specified event with the specified callback is canceled. (The callback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are canceled. |

<a id="off-1"></a>
## off('photoAssetAvailable')

```TypeScript
off(type: 'photoAssetAvailable', callback?: AsyncCallback<photoAccessHelper.PhotoAsset>): void
```

Unsubscribes from photo asset available events.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-PhotoOutput-off(type: 'photoAssetAvailable', callback?: AsyncCallback<photoAccessHelper.PhotoAsset>): void--><!--Device-PhotoOutput-off(type: 'photoAssetAvailable', callback?: AsyncCallback<photoAccessHelper.PhotoAsset>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'photoAssetAvailable' | Yes | Event type. The value is fixed at **'photoAssetAvailable'**. The event can be listened for when a photoOutput instance is created. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;photoAccessHelper.PhotoAsset&gt; | No | Callback used for unsubscription. If this parameter is specified, the subscription to the specified event with the specified callback is canceled. (The callback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are canceled. |

<a id="off-2"></a>
## off('captureStart')

```TypeScript
off(type: 'captureStart', callback?: AsyncCallback<number>): void
```

Unsubscribes from capture start events.

> **NOTE**  
>  
> Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 10

**Deprecated since:** 11

**Substitutes:** off(type:

<!--Device-PhotoOutput-off(type: 'captureStart', callback?: AsyncCallback<number>): void--><!--Device-PhotoOutput-off(type: 'captureStart', callback?: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'captureStart' | Yes | Event type. The value is fixed at **'captureStart'**. The event can be listened for when a photoOutput instance is created. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | No | Callback used to return the result. If this parameter is specified,the subscription to the specified event with the specified callback is canceled. (The callback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are canceled. |

<a id="off-3"></a>
## off('captureStartWithInfo')

```TypeScript
off(type: 'captureStartWithInfo', callback?: AsyncCallback<CaptureStartInfo>): void
```

Unsubscribes from capture start events.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-PhotoOutput-off(type: 'captureStartWithInfo', callback?: AsyncCallback<CaptureStartInfo>): void--><!--Device-PhotoOutput-off(type: 'captureStartWithInfo', callback?: AsyncCallback<CaptureStartInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'captureStartWithInfo' | Yes | Event type. The value is fixed at **'captureStartWithInfo'**. The event can be listened for when a photoOutput instance is created. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;CaptureStartInfo&gt; | No | Callback used to return the result. If this parameter is specified, the subscription to the specified event with the specified callback is canceled. (The callback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are canceled. |

<a id="off-4"></a>
## off('frameShutter')

```TypeScript
off(type: 'frameShutter', callback?: AsyncCallback<FrameShutterInfo>): void
```

Unsubscribes from frame shutter events.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-PhotoOutput-off(type: 'frameShutter', callback?: AsyncCallback<FrameShutterInfo>): void--><!--Device-PhotoOutput-off(type: 'frameShutter', callback?: AsyncCallback<FrameShutterInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'frameShutter' | Yes | Event type. The value is fixed at **'frameShutter'**. The event can be listened for when a photoOutput instance is created. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;FrameShutterInfo&gt; | No | Callback used to return the result. If this parameter is specified, the subscription to the specified event with the specified callback is canceled. (The callback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are canceled. |

<a id="off-5"></a>
## off('frameShutterEnd')

```TypeScript
off(type: 'frameShutterEnd', callback?: AsyncCallback<FrameShutterEndInfo>): void
```

Unsubscribes from frame shutter end events.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-PhotoOutput-off(type: 'frameShutterEnd', callback?: AsyncCallback<FrameShutterEndInfo>): void--><!--Device-PhotoOutput-off(type: 'frameShutterEnd', callback?: AsyncCallback<FrameShutterEndInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'frameShutterEnd' | Yes | Event type. The value is fixed at **'frameShutterEnd'**. The event can be listened for when a photoOutput instance is created. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;FrameShutterEndInfo&gt; | No | Callback used to return the result. If this parameter is specified, the subscription to the specified event with the specified callback is canceled. (The callback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are canceled. |

<a id="off-6"></a>
## off('captureEnd')

```TypeScript
off(type: 'captureEnd', callback?: AsyncCallback<CaptureEndInfo>): void
```

Unsubscribes from capture end events.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-PhotoOutput-off(type: 'captureEnd', callback?: AsyncCallback<CaptureEndInfo>): void--><!--Device-PhotoOutput-off(type: 'captureEnd', callback?: AsyncCallback<CaptureEndInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'captureEnd' | Yes | Event type. The value is fixed at **'captureEnd'**. The event can be listened for when a photoOutput instance is created. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;CaptureEndInfo&gt; | No | Callback used to return the result. If this parameter is specified, the subscription to the specified event with the specified callback is canceled. (The callback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are canceled. |

<a id="off-7"></a>
## off('captureReady')

```TypeScript
off(type: 'captureReady', callback?: AsyncCallback<void>): void
```

Unsubscribes from capture ready events.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-PhotoOutput-off(type: 'captureReady', callback?: AsyncCallback<void>): void--><!--Device-PhotoOutput-off(type: 'captureReady', callback?: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'captureReady' | Yes | Event type. The value is fixed at **'captureReady'**. The event can be listened for when a photoOutput instance is created. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | No | Callback used to return the result. If this parameter is specified, the subscription to the specified event with the specified callback is canceled. (The callback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are canceled. |

<a id="off-8"></a>
## off('estimatedCaptureDuration')

```TypeScript
off(type: 'estimatedCaptureDuration', callback?: AsyncCallback<number>): void
```

Unsubscribes from estimated capture duration events.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-PhotoOutput-off(type: 'estimatedCaptureDuration', callback?: AsyncCallback<double>): void--><!--Device-PhotoOutput-off(type: 'estimatedCaptureDuration', callback?: AsyncCallback<double>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'estimatedCaptureDuration' | Yes | Event type. The value is fixed at **'estimatedCaptureDuration'**.The event can be listened for when a photoOutput instance is created. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | No | Callback used to return the result. If this parameter is specified,the subscription to the specified event with the specified callback is canceled. (The callback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are canceled. |

<a id="off-9"></a>
## off('error')

```TypeScript
off(type: 'error', callback?: ErrorCallback): void
```

Unsubscribes from PhotoOutput error events.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-PhotoOutput-off(type: 'error', callback?: ErrorCallback): void--><!--Device-PhotoOutput-off(type: 'error', callback?: ErrorCallback): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at **'error'**. The event can be listened for when a photoOutput instance is created. |
| callback | [ErrorCallback](../../apis-arkui/arkts-components/arkts-arkui-errorcallback-t-sys.md) | No | Callback used to return the result. If this parameter is specified, the subscription to the specified event with the specified callback is canceled. (The callback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are canceled. |

<a id="offcapturephotoavailable"></a>
## offCapturePhotoAvailable

```TypeScript
offCapturePhotoAvailable(callback?: Callback<CapturePhoto>): void
```

Unsubscribes photo available event callback, which supports delivery of uncompressed photo.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-PhotoOutput-offCapturePhotoAvailable(callback?: Callback<CapturePhoto>): void--><!--Device-PhotoOutput-offCapturePhotoAvailable(callback?: Callback<CapturePhoto>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;CapturePhoto&gt; | No | Callback used to get the CapturePhoto. |

<a id="on"></a>
## on('photoAvailable')

```TypeScript
on(type: 'photoAvailable', callback: AsyncCallback<Photo>): void
```

Subscribes to the events of returning available photos. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-PhotoOutput-on(type: 'photoAvailable', callback: AsyncCallback<Photo>): void--><!--Device-PhotoOutput-on(type: 'photoAvailable', callback: AsyncCallback<Photo>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'photoAvailable' | Yes | Event type. The value is fixed at **'photoAvailable'**. The event can be listened for when a **photoOutput** instance is created. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Photo&gt; | Yes | Callback used to listen for the events of returning available photos. |

<a id="on-1"></a>
## on('photoAssetAvailable')

```TypeScript
on(type: 'photoAssetAvailable', callback: AsyncCallback<photoAccessHelper.PhotoAsset>): void
```

Subscribes to photo asset available events. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-PhotoOutput-on(type: 'photoAssetAvailable', callback: AsyncCallback<photoAccessHelper.PhotoAsset>): void--><!--Device-PhotoOutput-on(type: 'photoAssetAvailable', callback: AsyncCallback<photoAccessHelper.PhotoAsset>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'photoAssetAvailable' | Yes | Event type. The value is fixed at **'photoAssetAvailable'**. The event can be listened for when a photoOutput instance is created. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;photoAccessHelper.PhotoAsset&gt; | Yes | Callback used to return the photo asset. |

<a id="on-2"></a>
## on('captureStart')

```TypeScript
on(type: 'captureStart', callback: AsyncCallback<number>): void
```

Subscribes to capture start events. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 10

**Deprecated since:** 11

**Substitutes:** on(type:

<!--Device-PhotoOutput-on(type: 'captureStart', callback: AsyncCallback<number>): void--><!--Device-PhotoOutput-on(type: 'captureStart', callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'captureStart' | Yes | Event type. The value is fixed at **'captureStart'**. The event can be listened for when a photoOutput instance is created. This event is triggered and returned when the bottom layer starts exposure each time a photo is taken. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback used to return the capture ID. |

<a id="on-3"></a>
## on('captureStartWithInfo')

```TypeScript
on(type: 'captureStartWithInfo', callback: AsyncCallback<CaptureStartInfo>): void
```

Subscribes to capture start events. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-PhotoOutput-on(type: 'captureStartWithInfo', callback: AsyncCallback<CaptureStartInfo>): void--><!--Device-PhotoOutput-on(type: 'captureStartWithInfo', callback: AsyncCallback<CaptureStartInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'captureStartWithInfo' | Yes | Event type. The value is fixed at **'captureStartWithInfo'**. The event can be listened for when a photoOutput instance is created. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;CaptureStartInfo&gt; | Yes | Callback used to return the capture ID. |

<a id="on-4"></a>
## on('frameShutter')

```TypeScript
on(type: 'frameShutter', callback: AsyncCallback<FrameShutterInfo>): void
```

Subscribes to frame shutter events. This API uses an asynchronous callback to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-PhotoOutput-on(type: 'frameShutter', callback: AsyncCallback<FrameShutterInfo>): void--><!--Device-PhotoOutput-on(type: 'frameShutter', callback: AsyncCallback<FrameShutterInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'frameShutter' | Yes | Event type. The value is fixed at **'frameShutter'**. The event can be listened for when a photoOutput instance is created. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;FrameShutterInfo&gt; | Yes | Callback used to return the result. A new photo capture request can be delivered as long as this event is returned. |

<a id="on-5"></a>
## on('frameShutterEnd')

```TypeScript
on(type: 'frameShutterEnd', callback: AsyncCallback<FrameShutterEndInfo>): void
```

Subscribes to frame shutter end events. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-PhotoOutput-on(type: 'frameShutterEnd', callback: AsyncCallback<FrameShutterEndInfo>): void--><!--Device-PhotoOutput-on(type: 'frameShutterEnd', callback: AsyncCallback<FrameShutterEndInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'frameShutterEnd' | Yes | Event type. The value is fixed at **'frameShutterEnd'**. The event can be listened for when a photoOutput instance is created. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;FrameShutterEndInfo&gt; | Yes | Callback used to return the result. It is invoked when the frame shutter ends. |

<a id="on-6"></a>
## on('captureEnd')

```TypeScript
on(type: 'captureEnd', callback: AsyncCallback<CaptureEndInfo>): void
```

Subscribes to capture end events. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-PhotoOutput-on(type: 'captureEnd', callback: AsyncCallback<CaptureEndInfo>): void--><!--Device-PhotoOutput-on(type: 'captureEnd', callback: AsyncCallback<CaptureEndInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'captureEnd' | Yes | Event type. The value is fixed at **'captureEnd'**. The event can be listened for when a photoOutput instance is created. This event is triggered and the corresponding information is returned when the photo capture is complete. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;CaptureEndInfo&gt; | Yes | Callback used to return the result. |

<a id="on-7"></a>
## on('captureReady')

```TypeScript
on(type: 'captureReady', callback: AsyncCallback<void>): void
```

Subscribes to capture ready events. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-PhotoOutput-on(type: 'captureReady', callback: AsyncCallback<void>): void--><!--Device-PhotoOutput-on(type: 'captureReady', callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'captureReady' | Yes | Event type. The value is fixed at **'captureReady'**. The event can be listened for when a photoOutput instance is created. The event is triggered and the corresponding information is returned when it is ready to take the next photo. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. |

<a id="on-8"></a>
## on('estimatedCaptureDuration')

```TypeScript
on(type: 'estimatedCaptureDuration', callback: AsyncCallback<number>): void
```

Subscribes to estimated capture duration events. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-PhotoOutput-on(type: 'estimatedCaptureDuration', callback: AsyncCallback<double>): void--><!--Device-PhotoOutput-on(type: 'estimatedCaptureDuration', callback: AsyncCallback<double>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'estimatedCaptureDuration' | Yes | Event type. The value is fixed at **'estimatedCaptureDuration'**.The event can be listened for when a photoOutput instance is created. This event is triggered and the corresponding information is returned when the photo capture is complete. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback used to return the estimated duration when the sensor captures frames at the bottom layer in a single capture, measured in units of milliseconds. If **–1** is reported, there is no estimated duration. |

<a id="on-9"></a>
## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Subscribes to PhotoOutput error events. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-PhotoOutput-on(type: 'error', callback: ErrorCallback): void--><!--Device-PhotoOutput-on(type: 'error', callback: ErrorCallback): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at **'error'**. The event can be listened for when a photoOutput instance is created. This event is triggered and the corresponding error message is returned when an error occurs during the calling of a photo-related API. |
| callback | [ErrorCallback](../../apis-arkui/arkts-components/arkts-arkui-errorcallback-t-sys.md) | Yes | Callback used to return an error code defined in [CameraErrorCode](arkts-camera-camera-cameraerrorcode-e.md). |

<a id="oncapturephotoavailable"></a>
## onCapturePhotoAvailable

```TypeScript
onCapturePhotoAvailable(callback: Callback<CapturePhoto>): void
```

Subscribes photo available event callback, which supports delivery of uncompressed photo.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-PhotoOutput-onCapturePhotoAvailable(callback: Callback<CapturePhoto>): void--><!--Device-PhotoOutput-onCapturePhotoAvailable(callback: Callback<CapturePhoto>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;CapturePhoto&gt; | Yes | Callback used to get the CapturePhoto. |

<a id="setmovingphotovideocodectype"></a>
## setMovingPhotoVideoCodecType

```TypeScript
setMovingPhotoVideoCodecType(codecType: VideoCodecType): void
```

Sets a video codec type for moving photos.

**Since:** 13

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-PhotoOutput-setMovingPhotoVideoCodecType(codecType: VideoCodecType): void--><!--Device-PhotoOutput-setMovingPhotoVideoCodecType(codecType: VideoCodecType): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| codecType | [VideoCodecType](arkts-camera-camera-videocodectype-e.md) | Yes | Video codec type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

<a id="setphotoqualityprioritization"></a>
## setPhotoQualityPrioritization

```TypeScript
setPhotoQualityPrioritization(qualityPrioritization: PhotoQualityPrioritization): void
```

Sets the photo quality prioritization strategy.Before setting the strategy, you can call [isPhotoQualityPrioritizationSupported](arkts-camera-camera-photooutput-i.md#isphotoqualityprioritizationsupported-1) to check whether the device supports the specified photo quality prioritization strategy.

**Since:** 21

**Atomic service API:** This API can be used in atomic services since API version 21.

<!--Device-PhotoOutput-setPhotoQualityPrioritization(qualityPrioritization: PhotoQualityPrioritization): void--><!--Device-PhotoOutput-setPhotoQualityPrioritization(qualityPrioritization: PhotoQualityPrioritization): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| qualityPrioritization | [PhotoQualityPrioritization](arkts-camera-camera-photoqualityprioritization-e.md) | Yes | Photo quality prioritization strategy. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error,reconfiguring streams is needed to recover from failure. |
| [7400102](../errorcode-camera.md#7400102-invalid-operation) | Operation not allowed. |

