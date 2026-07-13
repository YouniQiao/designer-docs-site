# PhotoOutput

Implements output information used in a photo session. It inherits from
[CameraOutput](arkts-camera-cameraoutput-i.md).

**Inheritance/Implementation:** PhotoOutput extends [CameraOutput](arkts-camera-cameraoutput-i.md)

**Since:** 10

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## capture

```TypeScript
capture(callback: AsyncCallback<void>): void
```

Captures a photo with the default photo capture parameters. This API uses an asynchronous callback to return the
result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the photo is successfullycaptured with the default parameters, **err** is **undefined**; otherwise, **err** is an error object with anerror code defined in [CameraErrorCode](arkts-camera-cameraerrorcode-e.md). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400104](../errorcode-camera.md#7400104-session-not-running) | Session not running. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

## capture

```TypeScript
capture(): Promise<void>
```

Captures a photo with the default photo capture parameters. This API uses a promise to return the result.

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
| [7400104](../errorcode-camera.md#7400104-session-not-running) | Session not running. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

## capture

```TypeScript
capture(setting: PhotoCaptureSetting, callback: AsyncCallback<void>): void
```

Captures a photo with the specified photo capture parameters. This API uses an asynchronous callback to return
the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| setting | PhotoCaptureSetting | Yes | Photo capture settings. If the input data is of the **undefined** type,a photo capture operation is triggered based on the default settings. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation fails, an errorcode defined in [CameraErrorCode](arkts-camera-cameraerrorcode-e.md) is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400104](../errorcode-camera.md#7400104-session-not-running) | Session not running. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

## capture

```TypeScript
capture(setting: PhotoCaptureSetting): Promise<void>
```

Captures a photo with the specified photo capture parameters. This API uses a promise to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| setting | PhotoCaptureSetting | Yes | Photo capture settings. If the input data is of the **undefined** type,a photo capture operation is triggered based on the default settings. |

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

## enableAutoExtendedGainmapDelivery

```TypeScript
enableAutoExtendedGainmapDelivery(enabled: boolean): void
```

Enable auto extended gainmap delivery.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

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

## enableMirror

```TypeScript
enableMirror(enabled: boolean): void
```

Enables or disables mirroring photo capture.
Before calling this API, check whether moving photo capture is supported by calling
[isMovingPhotoSupported](arkts-camera-photooutput-i.md#ismovingphotosupported-1) and whether mirroring is supported by
calling [isMirrorSupported](arkts-camera-photooutput-i.md#ismirrorsupported-1).

**Since:** 13

**Atomic service API:** This API can be used in atomic services since API version 19.

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

## enableMovingPhoto

```TypeScript
enableMovingPhoto(enabled: boolean): void
```

Enables or disables the feature of taking moving photos.

**Since:** 12

**Required permissions:** ohos.permission.MICROPHONE

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to enable the feature of taking moving photos. **true** to enable, **false**otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | permission denied. |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

## getActiveProfile

```TypeScript
getActiveProfile(): Profile
```

Obtains the profile that takes effect currently.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Profile | Profile obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

## getPhotoRotation

```TypeScript
getPhotoRotation(deviceDegree?: number): ImageRotation
```

Obtains the photo rotation angle.

- Device's natural orientation: the default orientation for using a device. For example, the default orientation
of the bar-type phone is in portrait mode, with the charging port facing downward.
- Camera lens angle: equivalent to the angle at which the camera is rotated clockwise to match the device's
natural orientation. For example, the rear camera sensor of a bar-type phone is installed in landscape mode.
Therefore, it needs to be rotated by 90 degrees clockwise to match the device's natural orientation.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceDegree | number | No | Device rotation angle, measured in degrees, within the range of [0, 360].<br>Ifthe input value goes beyond this range, the system uses the remainder of the input value divided by 360.<br>Since API version 23, the input parameter **deviceDegree** is optional. If no parameter is passed, the systemobtains the **deviceDegree** value to calculate the photo rotation angle.<br>**Since:** 23 |

**Return value:**

| Type | Description |
| --- | --- |
| ImageRotation | Rotation angle of the photo. If the API call fails, undefined is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect.<br>**Applicable version:** 12 - 22 |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

## getSupportedMovingPhotoVideoCodecTypes

```TypeScript
getSupportedMovingPhotoVideoCodecTypes(): Array<VideoCodecType>
```

Obtains the supported video codec types of moving photos.

**Since:** 13

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;VideoCodecType&gt; | Array holding the supported video codec types. If the API call fails,undefined is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

## isAutoExtendedGainmapDeliverySupported

```TypeScript
isAutoExtendedGainmapDeliverySupported(): boolean
```

Confirm if auto extended gainmap delivery supported.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | TRUE if the auto extended gainmap delivery is supported. |

## isMirrorSupported

```TypeScript
isMirrorSupported(): boolean
```

Checks whether mirror photography is supported.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of mirror photography. **true** if supported, **false**otherwise. If the API call fails, undefined is returned. |

## isMovingPhotoSupported

```TypeScript
isMovingPhotoSupported(): boolean
```

Checks whether taking moving photos is supported.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of taking moving photos. **true** if supported, **false**otherwise. If the API call fails, undefined is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

## isPhotoQualityPrioritizationSupported

```TypeScript
isPhotoQualityPrioritizationSupported(qualityPrioritization: PhotoQualityPrioritization): boolean
```

Checks whether the specified photo quality prioritization strategy is supported.

**Since:** 21

**Atomic service API:** This API can be used in atomic services since API version 21.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| qualityPrioritization | PhotoQualityPrioritization | Yes | Photo quality prioritization strategy. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of the specified photo quality prioritization strategy.**true** if supported, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error,reconfiguring streams is needed to recover from failure. |

## off('photoAvailable')

```TypeScript
off(type: 'photoAvailable', callback?: AsyncCallback<Photo>): void
```

Unsubscribes from the events of returning available photos.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'photoAvailable' | Yes | Event type. The value is fixed at **'photoAvailable'**. The event can belistened for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;Photo&gt; | No | Callback used to return the result. If this parameter is specified,the subscription to the specified event with the specified callback is canceled. (The callback object cannotbe an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks arecanceled. |

## off('photoAssetAvailable')

```TypeScript
off(type: 'photoAssetAvailable', callback?: AsyncCallback<photoAccessHelper.PhotoAsset>): void
```

Unsubscribes from photo asset available events.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'photoAssetAvailable' | Yes | Event type. The value is fixed at **'photoAssetAvailable'**. The eventcan be listened for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;photoAccessHelper.PhotoAsset&gt; | No | Callback used for unsubscription. If thisparameter is specified, the subscription to the specified event with the specified callback is canceled. (Thecallback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event withall the callbacks are canceled. |

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

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'captureStart' | Yes | Event type. The value is fixed at **'captureStart'**. The event can be listenedfor when a photoOutput instance is created. |
| callback | AsyncCallback&lt;number&gt; | No | Callback used to return the result. If this parameter is specified,the subscription to the specified event with the specified callback is canceled. (The callback object cannotbe an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks arecanceled. |

## off('captureStartWithInfo')

```TypeScript
off(type: 'captureStartWithInfo', callback?: AsyncCallback<CaptureStartInfo>): void
```

Unsubscribes from capture start events.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'captureStartWithInfo' | Yes | Event type. The value is fixed at **'captureStartWithInfo'**. The eventcan be listened for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;CaptureStartInfo&gt; | No | Callback used to return the result. If this parameter isspecified, the subscription to the specified event with the specified callback is canceled. (The callbackobject cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all thecallbacks are canceled. |

## off('frameShutter')

```TypeScript
off(type: 'frameShutter', callback?: AsyncCallback<FrameShutterInfo>): void
```

Unsubscribes from frame shutter events.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'frameShutter' | Yes | Event type. The value is fixed at **'frameShutter'**. The event can be listenedfor when a photoOutput instance is created. |
| callback | AsyncCallback&lt;FrameShutterInfo&gt; | No | Callback used to return the result. If this parameter isspecified, the subscription to the specified event with the specified callback is canceled. (The callbackobject cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all thecallbacks are canceled. |

## off('frameShutterEnd')

```TypeScript
off(type: 'frameShutterEnd', callback?: AsyncCallback<FrameShutterEndInfo>): void
```

Unsubscribes from frame shutter end events.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'frameShutterEnd' | Yes | Event type. The value is fixed at **'frameShutterEnd'**. The event can belistened for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;FrameShutterEndInfo&gt; | No | Callback used to return the result. If this parameter isspecified, the subscription to the specified event with the specified callback is canceled. (The callbackobject cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all thecallbacks are canceled. |

## off('captureEnd')

```TypeScript
off(type: 'captureEnd', callback?: AsyncCallback<CaptureEndInfo>): void
```

Unsubscribes from capture end events.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'captureEnd' | Yes | Event type. The value is fixed at **'captureEnd'**. The event can be listened forwhen a photoOutput instance is created. |
| callback | AsyncCallback&lt;CaptureEndInfo&gt; | No | Callback used to return the result. If this parameter isspecified, the subscription to the specified event with the specified callback is canceled. (The callbackobject cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all thecallbacks are canceled. |

## off('captureReady')

```TypeScript
off(type: 'captureReady', callback?: AsyncCallback<void>): void
```

Unsubscribes from capture ready events.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'captureReady' | Yes | Event type. The value is fixed at **'captureReady'**. The event can be listenedfor when a photoOutput instance is created. |
| callback | AsyncCallback&lt;void&gt; | No | Callback used to return the result. If this parameter is specified, thesubscription to the specified event with the specified callback is canceled. (The callback object cannot bean anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks arecanceled. |

## off('estimatedCaptureDuration')

```TypeScript
off(type: 'estimatedCaptureDuration', callback?: AsyncCallback<number>): void
```

Unsubscribes from estimated capture duration events.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'estimatedCaptureDuration' | Yes | Event type. The value is fixed at **'estimatedCaptureDuration'**.The event can be listened for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;number&gt; | No | Callback used to return the result. If this parameter is specified,the subscription to the specified event with the specified callback is canceled. (The callback object cannotbe an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks arecanceled. |

## off('error')

```TypeScript
off(type: 'error', callback?: ErrorCallback): void
```

Unsubscribes from PhotoOutput error events.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at **'error'**. The event can be listened for when aphotoOutput instance is created. |
| callback | ErrorCallback | No | Callback used to return the result. If this parameter is specified, thesubscription to the specified event with the specified callback is canceled. (The callback object cannot bean anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks arecanceled. |

## offCapturePhotoAvailable

```TypeScript
offCapturePhotoAvailable(callback?: Callback<CapturePhoto>): void
```

Unsubscribes photo available event callback, which supports delivery of uncompressed photo.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;CapturePhoto&gt; | No | Callback used to get the CapturePhoto. |

## on('photoAvailable')

```TypeScript
on(type: 'photoAvailable', callback: AsyncCallback<Photo>): void
```

Subscribes to the events of returning available photos. This API uses an asynchronous callback to return the
result.

> **NOTE**
>
> Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'photoAvailable' | Yes | Event type. The value is fixed at **'photoAvailable'**. The event can belistened for when a **photoOutput** instance is created. |
| callback | AsyncCallback&lt;Photo&gt; | Yes | Callback used to listen for the events of returning available photos. |

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

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'photoAssetAvailable' | Yes | Event type. The value is fixed at **'photoAssetAvailable'**. The eventcan be listened for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;photoAccessHelper.PhotoAsset&gt; | Yes | Callback used to return the photo asset. |

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

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'captureStart' | Yes | Event type. The value is fixed at **'captureStart'**. The event can be listenedfor when a photoOutput instance is created. This event is triggered and returned when the bottom layer startsexposure each time a photo is taken. |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to return the capture ID. |

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

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'captureStartWithInfo' | Yes | Event type. The value is fixed at **'captureStartWithInfo'**. The eventcan be listened for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;CaptureStartInfo&gt; | Yes | Callback used to return the capture ID. |

## on('frameShutter')

```TypeScript
on(type: 'frameShutter', callback: AsyncCallback<FrameShutterInfo>): void
```

Subscribes to frame shutter events. This API uses an asynchronous callback to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'frameShutter' | Yes | Event type. The value is fixed at **'frameShutter'**. The event can be listenedfor when a photoOutput instance is created. |
| callback | AsyncCallback&lt;FrameShutterInfo&gt; | Yes | Callback used to return the result. A new photo capturerequest can be delivered as long as this event is returned. |

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

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'frameShutterEnd' | Yes | Event type. The value is fixed at **'frameShutterEnd'**. The event can belistened for when a photoOutput instance is created. |
| callback | AsyncCallback&lt;FrameShutterEndInfo&gt; | Yes | Callback used to return the result. It is invoked whenthe frame shutter ends. |

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

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'captureEnd' | Yes | Event type. The value is fixed at **'captureEnd'**. The event can be listened forwhen a photoOutput instance is created. This event is triggered and the corresponding information is returnedwhen the photo capture is complete. |
| callback | AsyncCallback&lt;CaptureEndInfo&gt; | Yes | Callback used to return the result. |

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

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'captureReady' | Yes | Event type. The value is fixed at **'captureReady'**. The event can be listenedfor when a photoOutput instance is created. The event is triggered and the corresponding information isreturned when it is ready to take the next photo. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

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

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'estimatedCaptureDuration' | Yes | Event type. The value is fixed at **'estimatedCaptureDuration'**.The event can be listened for when a photoOutput instance is created. This event is triggered and thecorresponding information is returned when the photo capture is complete. |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to return the estimated duration when the sensorcaptures frames at the bottom layer in a single capture, measured in units of milliseconds. If **–1** isreported, there is no estimated duration. |

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

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at **'error'**. The event can be listened for when aphotoOutput instance is created. This event is triggered and the corresponding error message is returned whenan error occurs during the calling of a photo-related API. |
| callback | ErrorCallback | Yes | Callback used to return an error code defined in[CameraErrorCode](arkts-camera-cameraerrorcode-e.md). |

## onCapturePhotoAvailable

```TypeScript
onCapturePhotoAvailable(callback: Callback<CapturePhoto>): void
```

Subscribes photo available event callback, which supports delivery of uncompressed photo.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;CapturePhoto&gt; | Yes | Callback used to get the CapturePhoto. |

## setMovingPhotoVideoCodecType

```TypeScript
setMovingPhotoVideoCodecType(codecType: VideoCodecType): void
```

Sets a video codec type for moving photos.

**Since:** 13

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| codecType | VideoCodecType | Yes | Video codec type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

## setPhotoQualityPrioritization

```TypeScript
setPhotoQualityPrioritization(qualityPrioritization: PhotoQualityPrioritization): void
```

Sets the photo quality prioritization strategy.
Before setting the strategy, you can call
[isPhotoQualityPrioritizationSupported](arkts-camera-photooutput-i.md#isphotoqualityprioritizationsupported-1) to check
whether the device supports the specified photo quality prioritization strategy.

**Since:** 21

**Atomic service API:** This API can be used in atomic services since API version 21.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| qualityPrioritization | PhotoQualityPrioritization | Yes | Photo quality prioritization strategy. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error,reconfiguring streams is needed to recover from failure. |
| [7400102](../errorcode-camera.md#7400102-invalid-operation) | Operation not allowed. |

