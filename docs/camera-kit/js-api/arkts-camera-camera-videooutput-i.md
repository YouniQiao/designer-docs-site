# VideoOutput

**VideoOutput** implements output information used in a video session. It inherits from [CameraOutput](arkts-camera-camera-cameraoutput-i.md).

**Inheritance/Implementation:** VideoOutput extends [CameraOutput](arkts-camera-camera-cameraoutput-i.md)

**Since:** 10

<!--Device-camera-interface VideoOutput extends CameraOutput--><!--Device-camera-interface VideoOutput extends CameraOutput-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

<a id="getactiveframerate"></a>
## getActiveFrameRate

```TypeScript
getActiveFrameRate(): FrameRateRange
```

Obtains the configured frame rate range.This API is valid only after [setFrameRate](arkts-camera-camera-previewoutput-i.md#setframerate-1) is called to set a frame rate range for preview streams.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-VideoOutput-getActiveFrameRate(): FrameRateRange--><!--Device-VideoOutput-getActiveFrameRate(): FrameRateRange-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| [FrameRateRange](arkts-camera-camera-frameraterange-i.md) | Frame rate range. |

<a id="getactiveprofile"></a>
## getActiveProfile

```TypeScript
getActiveProfile(): VideoProfile
```

Obtains the profile that takes effect currently.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-VideoOutput-getActiveProfile(): VideoProfile--><!--Device-VideoOutput-getActiveProfile(): VideoProfile-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| [VideoProfile](arkts-camera-camera-videoprofile-i.md) | Profile obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

<a id="getsupportedframerates"></a>
## getSupportedFrameRates

```TypeScript
getSupportedFrameRates(): Array<FrameRateRange>
```

Obtains the supported frame rates.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-VideoOutput-getSupportedFrameRates(): Array<FrameRateRange>--><!--Device-VideoOutput-getSupportedFrameRates(): Array<FrameRateRange>-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;FrameRateRange&gt; | Array of supported frame rates. If the API call fails, undefined is returned. |

<a id="getvideorotation"></a>
## getVideoRotation

```TypeScript
getVideoRotation(deviceDegree?: number): ImageRotation
```

Obtains the video rotation angle.

- Device's natural orientation: the default orientation for using a device. For example, the default orientation of the bar-type phone is in portrait mode, with the charging port facing downward.  
- Camera lens angle: equivalent to the angle at which the camera is rotated clockwise to match the device's natural orientation. For example, the rear camera sensor of a bar-type phone is installed in landscape mode.Therefore, it needs to be rotated by 90 degrees clockwise to match the device's natural orientation.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-VideoOutput-getVideoRotation(deviceDegree?: int): ImageRotation--><!--Device-VideoOutput-getVideoRotation(deviceDegree?: int): ImageRotation-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceDegree | number | No | Device rotation angle, measured in degrees, within the range of [0, 360].<br>Since API version 23, the input parameter **deviceDegree** is optional. If no parameter is passed, the system obtains the **deviceDegree** value to calculate the video rotation angle.<br>**Since:** 23 |

**Return value:**

| Type | Description |
| --- | --- |
| [ImageRotation](arkts-camera-camera-imagerotation-e.md) | Returns the rotation angle of a video. If the API call fails, undefined is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect.<br>**Applicable version:** 12 - 22 |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

<a id="off"></a>
## off('frameStart')

```TypeScript
off(type: 'frameStart', callback?: AsyncCallback<void>): void
```

Unsubscribes from preview frame start events.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-VideoOutput-off(type: 'frameStart', callback?: AsyncCallback<void>): void--><!--Device-VideoOutput-off(type: 'frameStart', callback?: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'frameStart' | Yes | Event type. The value is fixed at **'frameStart'**. The event can be listened for when a previewOutput instance is created. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | No | Callback used to return the result. If this parameter is specified, the subscription to the specified event with the specified callback is canceled. (The callback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are canceled. |

<a id="off-1"></a>
## off('frameEnd')

```TypeScript
off(type: 'frameEnd', callback?: AsyncCallback<void>): void
```

Unsubscribes from preview frame end events.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-VideoOutput-off(type: 'frameEnd', callback?: AsyncCallback<void>): void--><!--Device-VideoOutput-off(type: 'frameEnd', callback?: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'frameEnd' | Yes | Event type. The value is fixed at **'frameEnd'**. The event can be listened for when a previewOutput instance is created. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | No | Callback used to return the result. If this parameter is specified, the subscription to the specified event with the specified callback is canceled. (The callback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are canceled. |

<a id="off-2"></a>
## off('error')

```TypeScript
off(type: 'error', callback?: ErrorCallback): void
```

Unsubscribes from metadata error events.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-VideoOutput-off(type: 'error', callback?: ErrorCallback): void--><!--Device-VideoOutput-off(type: 'error', callback?: ErrorCallback): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at **'error'**. The event can be listened for when a metadataOutput instance is created. |
| callback | [ErrorCallback](../../apis-arkui/arkts-components/arkts-arkui-errorcallback-t-sys.md) | No | Callback used to return the result. If this parameter is specified, the subscription to the specified event with the specified callback is canceled. (The callback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are canceled. |

<a id="on"></a>
## on('frameStart')

```TypeScript
on(type: 'frameStart', callback: AsyncCallback<void>): void
```

Subscribes to preview frame start events. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-VideoOutput-on(type: 'frameStart', callback: AsyncCallback<void>): void--><!--Device-VideoOutput-on(type: 'frameStart', callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'frameStart' | Yes | Event type. The value is fixed at **'frameStart'**. The event can be listened for when a previewOutput instance is created. This event is triggered and returned when the bottom layer starts exposure for the first time. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. The preview starts as long as this event is returned. |

<a id="on-1"></a>
## on('frameEnd')

```TypeScript
on(type: 'frameEnd', callback: AsyncCallback<void>): void
```

Subscribes to preview frame end events. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-VideoOutput-on(type: 'frameEnd', callback: AsyncCallback<void>): void--><!--Device-VideoOutput-on(type: 'frameEnd', callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'frameEnd' | Yes | Event type. The value is fixed at **'frameEnd'**. The event can be listened for when a previewOutput instance is created. This event is triggered and returned when the last frame of preview ends. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. The preview ends as long as this event is returned. |

<a id="on-2"></a>
## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Subscribes to metadata error events. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-VideoOutput-on(type: 'error', callback: ErrorCallback): void--><!--Device-VideoOutput-on(type: 'error', callback: ErrorCallback): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at **'error'**. The event can be listened for when a metadataOutput instance is created. This event is triggered and the corresponding error message is returned when an error occurs during the use of a metadata-related API such as [start](arkts-camera-camera-metadataoutput-i.md#start-1) or [CameraOutput.release](arkts-camera-camera-cameraoutput-i.md#release-1). |
| callback | [ErrorCallback](../../apis-arkui/arkts-components/arkts-arkui-errorcallback-t-sys.md) | Yes | Callback used to return an error code defined in [CameraErrorCode](arkts-camera-camera-cameraerrorcode-e.md). |

<a id="setframerate"></a>
## setFrameRate

```TypeScript
setFrameRate(minFps: number, maxFps: number): void
```

Sets a frame rate range for preview streams. The range must be within the supported frame rate range, which can be obtained by calling [getSupportedFrameRates](arkts-camera-camera-previewoutput-i.md#getsupportedframerates-1).

> **NOTE**  
>  
> This API is valid only in [PhotoSession](arkts-camera-camera-photosession-i.md) or  
> [VideoSession](arkts-camera-camera-videosession-i.md) mode.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-VideoOutput-setFrameRate(minFps: int, maxFps: int): void--><!--Device-VideoOutput-setFrameRate(minFps: int, maxFps: int): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| minFps | number | Yes | Minimum frame rate, in fps. When the maximum value is less than the minimum value, the API does not take effect. |
| maxFps | number | Yes | Maximum frame rate, in fps. When the minimum value is greater than the maximum value, the API does not take effect. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400101](../errorcode-camera.md#7400101-invalid-parameter) | Parameter missing or parameter type incorrect. |
| [7400110](../errorcode-camera.md#7400110-configuration-conflicts) | Unresolved conflicts with current configurations. |

<a id="start"></a>
## start

```TypeScript
start(callback: AsyncCallback<void>): void
```

Starts video recording. This API uses an asynchronous callback to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-VideoOutput-start(callback: AsyncCallback<void>): void--><!--Device-VideoOutput-start(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If video recording starts successfully, **err** is **undefined**; otherwise, **err** is an error object with an error code defined in [CameraErrorCode](arkts-camera-camera-cameraerrorcode-e.md). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

<a id="start-1"></a>
## start

```TypeScript
start(): Promise<void>
```

Starts video recording. This API uses a promise to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-VideoOutput-start(): Promise<void>--><!--Device-VideoOutput-start(): Promise<void>-End-->

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

<a id="stop"></a>
## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

Stops video recording. This API uses an asynchronous callback to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-VideoOutput-stop(callback: AsyncCallback<void>): void--><!--Device-VideoOutput-stop(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If video recording stops successfully, **err** is **undefined**; otherwise, **err** is an error object. |

<a id="stop-1"></a>
## stop

```TypeScript
stop(): Promise<void>
```

Stops video recording. This API uses a promise to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-VideoOutput-stop(): Promise<void>--><!--Device-VideoOutput-stop(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

