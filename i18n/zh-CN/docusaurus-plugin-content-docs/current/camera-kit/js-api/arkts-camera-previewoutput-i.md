# PreviewOutput

Implements preview output. It inherits from [CameraOutput]camera.CameraOutput.

**继承实现关系：** PreviewOutput继承自：CameraOutput。

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## addDeferredSurface

```TypeScript
addDeferredSurface(surfaceId: string): void
```

Adds a deferred surface.

**起始版本：** 10

**原子化服务API：** 从API version 24开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| surfaceId | string | 是 | Surface object id used in camera photo output. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 13 - 23] |

## attachSketchSurface

```TypeScript
attachSketchSurface(surfaceId: string): void
```

Attaches a surface for PiP preview.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| surfaceId | string | 是 | Surface ID, which is obtained from  [XComponent]XComponent. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |
| 7400101 | Parameter missing or parameter type incorrect. [since 12] |
| 7400201 | Camera service fatal error. [since 12] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function attachSketchSurface(previewOutput: camera.PreviewOutput, session: camera.Session, cameraInput: camera.CameraInput, sketchSurfaceId: string): void {
  try {
    session.beginConfig();
    session.addInput(cameraInput);
    session.addOutput(previewOutput);
    previewOutput.enableSketch(true);
    session.commitConfig();
    previewOutput.attachSketchSurface(sketchSurfaceId);
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`The attachSketchSurface call failed. error code: ${err.code}`);
  }
}

```

## enableBandwidthCompression

```TypeScript
enableBandwidthCompression(enabled: boolean): void
```

Enables preview bandwidth compression. Before enabling this feature, you can call [isBandwidthCompressionSupported]camera.PreviewOutput.isBandwidthCompressionSupported to check whether the device supports preview bandwidth compression. > **NOTE** > > This function must be called prior to > [Session.commitConfig]camera.Session.commitConfig(callback: AsyncCallback<void>). > Otherwise, the preview output stream format will be affected.

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | Whether to enable preview bandwidth compression. true to enable, false  otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400102 | Operation not allowed. |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

## enableSketch

```TypeScript
enableSketch(enabled: boolean): void
```

Enables or disables PiP preview.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | Whether to enable or disable PiP view. true to enable, false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |
| 7400102 | Operation not allowed. [since 12] |
| 7400201 | Camera service fatal error. [since 12] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function enableSketch(previewOutput: camera.PreviewOutput, session: camera.Session, cameraInput: camera.CameraInput): void {
  try {
    session.beginConfig();
    session.addInput(cameraInput);
    session.addOutput(previewOutput);
    previewOutput.enableSketch(true);
    session.commitConfig();
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`The enableSketch call failed. error code: ${err.code}`);
  }
}

```

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
getActiveProfile(): Profile
```

Obtains the profile that takes effect currently.

**起始版本：** 12

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Profile | Profile obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400201 | Camera service fatal error. |

## getPreviewRotation

```TypeScript
getPreviewRotation(displayRotation?: int): ImageRotation
```

Obtains the preview rotation angle. - Device's natural orientation: the default orientation for using a device. For example, the default orientation of the bar-type phone is in portrait mode, with the charging port facing downward. - Camera lens angle: equivalent to the angle at which the camera is rotated clockwise to match the device's natural orientation. For example, the rear camera sensor of a bar-type phone is installed in landscape mode. Therefore, it needs to be rotated by 90 degrees clockwise to match the device's natural orientation. - [Screen rotation](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-multi-device-window-direction#section15598121101615) : indicates the clockwise rotation angle of the device screen.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| displayRotation | int | 否 | Screen rotation angle of the display. It is obtained by calling  [display.getDefaultDisplaySync](../../apis-arkui/arkts-apis/arkts-display-getdefaultdisplaysync-f.md#getDefaultDisplaySync-1). Since API version 23,  the input parameter displayRotation is optional. If no parameter is passed, the system obtains the  displayRotation value to calculate rotation angle of a video. [since 12 - 22] |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ImageRotation | The preview rotation angle obtained. If the API call fails, undefined is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. [since 12 - 22] |
| 7400201 | Camera service fatal error. |

## getSketchRatio

```TypeScript
getSketchRatio(): double
```

Obtains the zoom ratio when PiP preview is enabled.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| double | Zoom ratio. If PiP preview is not supported, the value -1 is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |

**示例：**

```TypeScript
function getSketchRatio(previewOutput: camera.PreviewOutput): number {
  let sketchRatio: number = previewOutput.getSketchRatio();
  return sketchRatio;
}

```

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

## isBandwidthCompressionSupported

```TypeScript
isBandwidthCompressionSupported(): boolean
```

Checks whether preview bandwidth compression is supported. This involves reducing data volume through encoding to minimize bandwidth usage during transmission.

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for the support of preview bandwidth compression. true if supported,  false otherwise. |

## isLogViewAssistSupported

```TypeScript
isLogViewAssistSupported(): boolean
```

Checks whether log video view assistance is supported.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for the support of log video view assistance. true if supported,  false otherwise. |

## isSketchSupported

```TypeScript
isSketchSupported(): boolean
```

Checks whether Picture-in-Picture (PiP) preview is supported.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for the support of the PiP preview. true if supported, false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function isSketchSupported(previewOutput: camera.PreviewOutput): boolean {
  try {
    let isSupported: boolean = previewOutput.isSketchSupported();
    return isSupported;
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`The isSketchSupported call failed. error code: ${err.code}`);
  }
  return false;
}

```

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

Unsubscribes from PreviewOutput error events.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'error' | 是 | Event type. The value is fixed at 'error'. The event can be listened for when a  previewOutput instance is created. |
| callback | ErrorCallback | 否 | Callback used to return the result. If this parameter is specified, the  subscription to the specified event with the specified callback is canceled. (The callback object cannot be  an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are  canceled. |

## off('sketchStatusChanged')

```TypeScript
off(type: 'sketchStatusChanged', callback?: AsyncCallback<SketchStatusData>): void
```

Unsubscribes from PiP status change events.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'sketchStatusChanged' | 是 | Event type. The value is fixed at 'sketchStatusChanged'. The event  can be listened for when a PiP preview stream is created. |
| callback | AsyncCallback&lt;SketchStatusData> | 否 | Callback used to return the result. This parameter is  optional. If this parameter is specified, the subscription to the specified event  on('sketchStatusChanged') with the specified callback is canceled. (The callback object cannot be an  anonymous function.) |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

**示例：**

```TypeScript
function unregisterSketchStatusChanged(previewOutput: camera.PreviewOutput): void {
  previewOutput.off('sketchStatusChanged');
}

```

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

## offSketchStatusChanged

```TypeScript
offSketchStatusChanged(callback?: AsyncCallback<SketchStatusData>): void
```

Unsubscribes sketch status changed event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;SketchStatusData> | 否 |  |

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

Subscribes to PreviewOutput error events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**起始版本：** 10

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'error' | 是 | Event type. The value is fixed at 'error'. The event can be listened for when a  previewOutput instance is created. This event is triggered and the corresponding error message is returned  when an error occurs during the use of a preview-related API such as  [Session.start]camera.Session.start() or  [CameraOutput.release]camera.CameraOutput.release(). |
| callback | ErrorCallback | 是 | Callback used to return an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

## on('sketchStatusChanged')

```TypeScript
on(type: 'sketchStatusChanged', callback: AsyncCallback<SketchStatusData>): void
```

Subscribes to PiP status change events. This API uses an asynchronous callback to return the result.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'sketchStatusChanged' | 是 | Event type. The value is fixed at 'sketchStatusChanged'. The event  can be listened for when a PiP preview stream is created. This event is triggered when PiP preview is enabled  or disabled or the zoom ratio changes while PiP preview is enabled. |
| callback | AsyncCallback&lt;SketchStatusData> | 是 | Callback used to return the PiP status data. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function callback(error: BusinessError, data: camera.SketchStatusData): void {
  if (error !== undefined && error.code !== 0) {
    console.error(`Callback Error, errorCode: ${error.code}`);
    return;
  }
  console.info(`sketch errorCode is ${error.code}, data is ${JSON.stringify(data)}`);
}

function registerSketchStatusChanged(previewOutput: camera.PreviewOutput): void {
  previewOutput.on('sketchStatusChanged', callback);
}

```

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
| callback | ErrorCallback | 是 | Callback used to get the preview output errors. |

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

## onSketchStatusChanged

```TypeScript
onSketchStatusChanged(callback: AsyncCallback<SketchStatusData>): void
```

Subscribes sketch status changed event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;SketchStatusData> | 是 | Callback used to sketch status data. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System Application. |

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

## setLogViewAssistEnable

```TypeScript
setLogViewAssistEnable(enable: boolean): void
```

Log video view assistance toggle. Before enabling this feature, you can call [isLogViewAssistSupported]camera.PreviewOutput.isLogViewAssistSupported to check whether the device supports log video view assistance.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | Whether to enable log video view assistance, true to enable, false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

## setPreviewRotation

```TypeScript
setPreviewRotation(previewRotation: ImageRotation, isDisplayLocked?: boolean): void
```

Sets the preview rotation angle.

**起始版本：** 12

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| previewRotation | ImageRotation | 是 | Preview rotation angle. |
| isDisplayLocked | boolean | 否 | Whether the orientation of the surface is locked when the screen rotates. If  this parameter is not set, the default value false is used, indicating that the orientation is not  locked. true if locked, false otherwise. For details, see  [SurfaceRotationOptions]SurfaceRotationOptions. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400201 | Camera service fatal error. |

## start

```TypeScript
start(callback: AsyncCallback<void>): void
```

Starts to output preview streams. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.Session.start(callback:

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the preview stream output starts  successfully, err is undefined; otherwise, err is an error object with an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## start

```TypeScript
start(): Promise<void>
```

Starts to output preview streams. This API uses a promise to return the result.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.Session.start()

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

Stops outputting preview streams. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.Session.stop(callback:

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the preview stream output stops  successfully, err is undefined; otherwise, err is an error object. |

## stop

```TypeScript
stop(): Promise<void>
```

Stops outputting preview streams. This API uses a promise to return the result.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** camera.Session.stop()

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

