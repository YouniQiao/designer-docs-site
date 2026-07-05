# VideoOutput

VideoOutput** implements output information used in a video session. It inherits from [CameraOutput]camera.CameraOutput.

**继承实现关系：** VideoOutput继承自：CameraOutput。

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## attachMetaSurface

```TypeScript
attachMetaSurface(surfaceId: string, type: VideoMetaType): void
```

Attach a meta surface to VideoOutput.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| surfaceId | string | 是 | Surface object id used for receiving meta infos. |
| type | VideoMetaType | 是 | Video meta type. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400201 | Camera service fatal error. |

## enableAutoDeferredVideoEnhancement

```TypeScript
enableAutoDeferredVideoEnhancement(enabled: boolean): void
```

Enable auto deferred video enhancement if needed.

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | Status of auto deferred video enhancement. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400201 | Camera service fatal error. |

## enableAutoVideoFrameRate

```TypeScript
enableAutoVideoFrameRate(enabled: boolean): void
```

Enable auto frame rate for video capture.

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | enable auto frame rate if TRUE. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |

## enableMirror

```TypeScript
enableMirror(enabled: boolean): void
```

Enables or disables mirror recording. - Before calling this API, check whether mirror recording is supported by using [isMirrorSupported]camera.VideoOutput.isMirrorSupported. - After enabling or disabling mirror recording, call [getVideoRotation]camera.VideoOutput.getVideoRotation to obtain the rotation angle and [updateRotation](../../apis-media-kit/arkts-apis/arkts-media-avrecorder-i.md#updateRotation) to update the rotation angle.

**起始版本：** 12

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | Whether to enable mirror recording. true to enable, false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. [since 12 - 14] |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400103 | Session not config. |

## getActiveFrameRate

```TypeScript
getActiveFrameRate(): FrameRateRange
```

Obtains the configured frame rate range. This API is valid only after [setFrameRate]camera.PreviewOutput.setFrameRate is called to set a frame rate range for preview streams.

**起始版本：** 12

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| FrameRateRange | Frame rate range. |

## getActiveProfile

```TypeScript
getActiveProfile(): VideoProfile
```

Obtains the profile that takes effect currently.

**起始版本：** 12

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| VideoProfile | Profile obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400201 | Camera service fatal error. |

## getSupportedFrameRates

```TypeScript
getSupportedFrameRates(): Array<FrameRateRange>
```

Obtains the supported frame rates.

**起始版本：** 12

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;FrameRateRange> | Array of supported frame rates. If the API call fails, undefined is returned. |

## getSupportedRotations

```TypeScript
getSupportedRotations(): Array<ImageRotation>
```

Get supported video rotations.

**起始版本：** 14

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;ImageRotation> | The array of supported video rotations. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

## getSupportedVideoMetaTypes

```TypeScript
getSupportedVideoMetaTypes(): Array<VideoMetaType>
```

Get supported video meta types.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;VideoMetaType> | The array of supported video meta type. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400201 | Camera service fatal error. |

## getVideoRotation

```TypeScript
getVideoRotation(deviceDegree?: int): ImageRotation
```

Obtains the video rotation angle. - Device's natural orientation: the default orientation for using a device. For example, the default orientation of the bar-type phone is in portrait mode, with the charging port facing downward. - Camera lens angle: equivalent to the angle at which the camera is rotated clockwise to match the device's natural orientation. For example, the rear camera sensor of a bar-type phone is installed in landscape mode. Therefore, it needs to be rotated by 90 degrees clockwise to match the device's natural orientation.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceDegree | int | 否 | Device rotation angle, measured in degrees, within the range of [0, 360]. Since  API version 23, the input parameter deviceDegree is optional. If no parameter is passed, the system  obtains the deviceDegree value to calculate the video rotation angle. [since 12 - 22] |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ImageRotation | Returns the rotation angle of a video. If the API call fails, undefined is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. [since 12 - 22] |
| 7400201 | Camera service fatal error. |

## isAutoDeferredVideoEnhancementEnabled

```TypeScript
isAutoDeferredVideoEnhancementEnabled(): boolean
```

Confirm if auto deferred video enhancement is enabled.

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | TRUE if auto deferred video enhancement is enabled. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400201 | Camera service fatal error. |

## isAutoDeferredVideoEnhancementSupported

```TypeScript
isAutoDeferredVideoEnhancementSupported(): boolean
```

Confirm if auto deferred video enhancement is supported in the specific device.

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | TRUE if auto deferred video enhancement is supported. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400201 | Camera service fatal error. |

## isAutoVideoFrameRateSupported

```TypeScript
isAutoVideoFrameRateSupported(): boolean
```

Determine whether auto frame rate is supported.

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Is auto frame rate supported. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

## isMirrorSupported

```TypeScript
isMirrorSupported(): boolean
```

Checks whether mirror recording is supported.

**起始版本：** 12

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for the support of mirror recording. true if supported, false  otherwise. If the API call fails, undefined is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. [since 12 - 14] |

## isRotationSupported

```TypeScript
isRotationSupported(): boolean
```

Determine whether video rotation is supported.

**起始版本：** 14

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Is video rotation supported. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

## off('deferredVideoEnhancementInfo')

```TypeScript
off(type: 'deferredVideoEnhancementInfo', callback?: AsyncCallback<DeferredVideoEnhancementInfo>): void
```

Unsubscribes from deferred video enhancement info callback.

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'deferredVideoEnhancementInfo' | 是 | Event type. |
| callback | AsyncCallback&lt;DeferredVideoEnhancementInfo> | 否 | Callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

## off('frameStart')

```TypeScript
off(type: 'frameStart', callback?: AsyncCallback<void>): void
```

Unsubscribes from preview frame start events.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'frameStart' | 是 | Event type. The value is fixed at 'frameStart'. The event can be listened for  when a previewOutput instance is created. |
| callback | AsyncCallback&lt;void> | 否 | Callback used to return the result. If this parameter is specified, the  subscription to the specified event with the specified callback is canceled. (The callback object cannot be  an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are  canceled. |

## off('frameEnd')

```TypeScript
off(type: 'frameEnd', callback?: AsyncCallback<void>): void
```

Unsubscribes from preview frame end events.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'frameEnd' | 是 | Event type. The value is fixed at 'frameEnd'. The event can be listened for when  a previewOutput instance is created. |
| callback | AsyncCallback&lt;void> | 否 | Callback used to return the result. If this parameter is specified, the  subscription to the specified event with the specified callback is canceled. (The callback object cannot be  an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are  canceled. |

## off('error')

```TypeScript
off(type: 'error', callback?: ErrorCallback): void
```

Unsubscribes from metadata error events.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'error' | 是 | Event type. The value is fixed at 'error'. The event can be listened for when a  metadataOutput instance is created. |
| callback | ErrorCallback | 否 | Callback used to return the result. If this parameter is specified, the  subscription to the specified event with the specified callback is canceled. (The callback object cannot be  an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are  canceled. |

## offDeferredVideoEnhancementInfo

```TypeScript
offDeferredVideoEnhancementInfo(callback?: AsyncCallback<DeferredVideoEnhancementInfo>): void
```

Unsubscribes from deferred video enhancement info callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;DeferredVideoEnhancementInfo> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

## offError

```TypeScript
offError(callback?: ErrorCallback): void
```

Unsubscribes from error events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ErrorCallback | 否 |  |

## offFrameEnd

```TypeScript
offFrameEnd(callback?: AsyncCallback<void>): void
```

Unsubscribes from frame end event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 否 |  |

## offFrameStart

```TypeScript
offFrameStart(callback?: AsyncCallback<void>): void
```

Unsubscribes from frame start event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 否 |  |

## on('deferredVideoEnhancementInfo')

```TypeScript
on(type: 'deferredVideoEnhancementInfo', callback: AsyncCallback<DeferredVideoEnhancementInfo>): void
```

Subscribes deferred video enhancement info callback.

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'deferredVideoEnhancementInfo' | 是 | Event type. |
| callback | AsyncCallback&lt;DeferredVideoEnhancementInfo> | 是 | Callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

## on('frameStart')

```TypeScript
on(type: 'frameStart', callback: AsyncCallback<void>): void
```

Subscribes to preview frame start events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'frameStart' | 是 | Event type. The value is fixed at 'frameStart'. The event can be listened for  when a previewOutput instance is created. This event is triggered and returned when the bottom layer starts  exposure for the first time. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. The preview starts as long as this  event is returned. |

## on('frameEnd')

```TypeScript
on(type: 'frameEnd', callback: AsyncCallback<void>): void
```

Subscribes to preview frame end events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'frameEnd' | 是 | Event type. The value is fixed at 'frameEnd'. The event can be listened for when  a previewOutput instance is created. This event is triggered and returned when the last frame of preview  ends. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. The preview ends as long as this  event is returned. |

## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Subscribes to metadata error events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'error' | 是 | Event type. The value is fixed at 'error'. The event can be listened for when a  metadataOutput instance is created. This event is triggered and the corresponding error message is returned  when an error occurs during the use of a metadata-related API such as  [start]camera.MetadataOutput.start() or  [CameraOutput.release]camera.CameraOutput.release(). |
| callback | ErrorCallback | 是 | Callback used to return an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

## onDeferredVideoEnhancementInfo

```TypeScript
onDeferredVideoEnhancementInfo(callback: AsyncCallback<DeferredVideoEnhancementInfo>): void
```

Subscribes deferred video enhancement info callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;DeferredVideoEnhancementInfo> | 是 | Callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

## onError

```TypeScript
onError(callback: ErrorCallback): void
```

Subscribes to error events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ErrorCallback | 是 | Callback used to get the video output errors. |

## onFrameEnd

```TypeScript
onFrameEnd(callback: AsyncCallback<void>): void
```

Subscribes frame end event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

## onFrameStart

```TypeScript
onFrameStart(callback: AsyncCallback<void>): void
```

Subscribes frame start event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

## setFrameRate

```TypeScript
setFrameRate(minFps: int, maxFps: int): void
```

Sets a frame rate range for preview streams. The range must be within the supported frame rate range, which can be obtained by calling [getSupportedFrameRates]camera.PreviewOutput.getSupportedFrameRates. > **NOTE** > > This API is valid only in [PhotoSession]camera.PhotoSession or > [VideoSession]camera.VideoSession mode.

**起始版本：** 12

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| minFps | int | 是 | Minimum frame rate, in fps. When the maximum value is less than the minimum value, the  API does not take effect. |
| maxFps | int | 是 | Maximum frame rate, in fps. When the minimum value is greater than the maximum value, the  API does not take effect. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400110 | Unresolved conflicts with current configurations. |

## setRotation

```TypeScript
setRotation(rotation: ImageRotation): void
```

Set a video rotation.

**起始版本：** 14

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rotation | ImageRotation | 是 | The rotation angle. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |

## start

```TypeScript
start(callback: AsyncCallback<void>): void
```

Starts video recording. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If video recording starts  successfully, err is undefined; otherwise, err is an error object with an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

## start

```TypeScript
start(): Promise<void>
```

Starts video recording. This API uses a promise to return the result.

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
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

Stops video recording. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If video recording stops  successfully, err is undefined; otherwise, err is an error object. |

## stop

```TypeScript
stop(): Promise<void>
```

Stops video recording. This API uses a promise to return the result.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

