# PreviewOutput

Implements preview output. It inherits from [CameraOutput]camera.CameraOutput.

**Inheritance:** PreviewOutputextends: CameraOutput.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## addDeferredSurface

```TypeScript
addDeferredSurface(surfaceId: string): void
```

Adds a deferred surface.

**Since:** 10

**Atomic service API:** From API version 24 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| surfaceId | string | Yes | Surface object id used in camera photo output. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 13 - 23] |

## attachSketchSurface

```TypeScript
attachSketchSurface(surfaceId: string): void
```

Attaches a surface for PiP preview.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| surfaceId | string | Yes | Surface ID, which is obtained from  [XComponent]XComponent. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |
| 7400101 | Parameter missing or parameter type incorrect. [since 12] |
| 7400201 | Camera service fatal error. [since 12] |

**Example**

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
    // If the operation fails, error.code is returned and processed.
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

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to enable preview bandwidth compression. true to enable, false  otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400102 | Operation not allowed. |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

## enableSketch

```TypeScript
enableSketch(enabled: boolean): void
```

Enables or disables PiP preview.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to enable or disable PiP view. true to enable, false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |
| 7400102 | Operation not allowed. [since 12] |
| 7400201 | Camera service fatal error. [since 12] |

**Example**

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
    // If the operation fails, error.code is returned and processed.
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

**Since:** 12

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| FrameRateRange | Frame rate range. |

## getActiveProfile

```TypeScript
getActiveProfile(): Profile
```

Obtains the profile that takes effect currently.

**Since:** 12

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Profile | Profile obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400201 | Camera service fatal error. |

## getPreviewRotation

```TypeScript
getPreviewRotation(displayRotation?: int): ImageRotation
```

Obtains the preview rotation angle. - Device's natural orientation: the default orientation for using a device. For example, the default orientation of the bar-type phone is in portrait mode, with the charging port facing downward. - Camera lens angle: equivalent to the angle at which the camera is rotated clockwise to match the device's natural orientation. For example, the rear camera sensor of a bar-type phone is installed in landscape mode. Therefore, it needs to be rotated by 90 degrees clockwise to match the device's natural orientation. - [Screen rotation](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-multi-device-window-direction#section15598121101615) : indicates the clockwise rotation angle of the device screen.

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayRotation | int | No | Screen rotation angle of the display. It is obtained by calling  [display.getDefaultDisplaySync](../../apis-arkui/arkts-apis/arkts-display-getdefaultdisplaysync-f.md#getDefaultDisplaySync-1). Since API version 23,  the input parameter displayRotation is optional. If no parameter is passed, the system obtains the  displayRotation value to calculate rotation angle of a video. [since 12 - 22] |

**Return value:**

| Type | Description |
| --- | --- |
| ImageRotation | The preview rotation angle obtained. If the API call fails, undefined is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. [since 12 - 22] |
| 7400201 | Camera service fatal error. |

## getSketchRatio

```TypeScript
getSketchRatio(): double
```

Obtains the zoom ratio when PiP preview is enabled.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| double | Zoom ratio. If PiP preview is not supported, the value -1 is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |

**Example**

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

**Since:** 12

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;FrameRateRange> | Array of supported frame rates. If the API call fails, undefined is returned. |

## isBandwidthCompressionSupported

```TypeScript
isBandwidthCompressionSupported(): boolean
```

Checks whether preview bandwidth compression is supported. This involves reducing data volume through encoding to minimize bandwidth usage during transmission.

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of preview bandwidth compression. true if supported,  false otherwise. |

## isLogViewAssistSupported

```TypeScript
isLogViewAssistSupported(): boolean
```

Checks whether log video view assistance is supported.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of log video view assistance. true if supported,  false otherwise. |

## isSketchSupported

```TypeScript
isSketchSupported(): boolean
```

Checks whether Picture-in-Picture (PiP) preview is supported.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of the PiP preview. true if supported, false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function isSketchSupported(previewOutput: camera.PreviewOutput): boolean {
  try {
    let isSupported: boolean = previewOutput.isSketchSupported();
    return isSupported;
  } catch (error) {
    // If the operation fails, error.code is returned and processed.
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

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'frameStart' | Yes | Event type. The value is fixed at 'frameStart'. The event can be listened for  when a previewOutput instance is created. |
| callback | AsyncCallback&lt;void> | No | Callback used to return the result. If this parameter is specified, the  subscription to the specified event with the specified callback is canceled. (The callback object cannot be  an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are  canceled. |

## off('frameEnd')

```TypeScript
off(type: 'frameEnd', callback?: AsyncCallback<void>): void
```

Unsubscribes from preview frame end events.

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'frameEnd' | Yes | Event type. The value is fixed at 'frameEnd'. The event can be listened for when  a previewOutput instance is created. |
| callback | AsyncCallback&lt;void> | No | Callback used to return the result. If this parameter is specified, the  subscription to the specified event with the specified callback is canceled. (The callback object cannot be  an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are  canceled. |

## off('error')

```TypeScript
off(type: 'error', callback?: ErrorCallback): void
```

Unsubscribes from PreviewOutput error events.

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at 'error'. The event can be listened for when a  previewOutput instance is created. |
| callback | ErrorCallback | No | Callback used to return the result. If this parameter is specified, the  subscription to the specified event with the specified callback is canceled. (The callback object cannot be  an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are  canceled. |

## off('sketchStatusChanged')

```TypeScript
off(type: 'sketchStatusChanged', callback?: AsyncCallback<SketchStatusData>): void
```

Unsubscribes from PiP status change events.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'sketchStatusChanged' | Yes | Event type. The value is fixed at 'sketchStatusChanged'. The event  can be listened for when a PiP preview stream is created. |
| callback | AsyncCallback&lt;SketchStatusData> | No | Callback used to return the result. This parameter is  optional. If this parameter is specified, the subscription to the specified event  on('sketchStatusChanged') with the specified callback is canceled. (The callback object cannot be an  anonymous function.) |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

**Example**

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

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ErrorCallback | No |  |

## offFrameEnd

```TypeScript
offFrameEnd(callback?: AsyncCallback<void>): void
```

Unsubscribes from frame end event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | No |  |

## offFrameStart

```TypeScript
offFrameStart(callback?: AsyncCallback<void>): void
```

Unsubscribes from frame start event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | No |  |

## offSketchStatusChanged

```TypeScript
offSketchStatusChanged(callback?: AsyncCallback<SketchStatusData>): void
```

Unsubscribes sketch status changed event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;SketchStatusData> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

## on('frameStart')

```TypeScript
on(type: 'frameStart', callback: AsyncCallback<void>): void
```

Subscribes to preview frame start events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'frameStart' | Yes | Event type. The value is fixed at 'frameStart'. The event can be listened for  when a previewOutput instance is created. This event is triggered and returned when the bottom layer starts  exposure for the first time. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. The preview starts as long as this  event is returned. |

## on('frameEnd')

```TypeScript
on(type: 'frameEnd', callback: AsyncCallback<void>): void
```

Subscribes to preview frame end events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'frameEnd' | Yes | Event type. The value is fixed at 'frameEnd'. The event can be listened for when  a previewOutput instance is created. This event is triggered and returned when the last frame of preview  ends. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. The preview ends as long as this  event is returned. |

## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Subscribes to PreviewOutput error events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at 'error'. The event can be listened for when a  previewOutput instance is created. This event is triggered and the corresponding error message is returned  when an error occurs during the use of a preview-related API such as  [Session.start]camera.Session.start() or  [CameraOutput.release]camera.CameraOutput.release(). |
| callback | ErrorCallback | Yes | Callback used to return an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

## on('sketchStatusChanged')

```TypeScript
on(type: 'sketchStatusChanged', callback: AsyncCallback<SketchStatusData>): void
```

Subscribes to PiP status change events. This API uses an asynchronous callback to return the result.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'sketchStatusChanged' | Yes | Event type. The value is fixed at 'sketchStatusChanged'. The event  can be listened for when a PiP preview stream is created. This event is triggered when PiP preview is enabled  or disabled or the zoom ratio changes while PiP preview is enabled. |
| callback | AsyncCallback&lt;SketchStatusData> | Yes | Callback used to return the PiP status data. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

**Example**

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

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ErrorCallback | Yes | Callback used to get the preview output errors. |

## onFrameEnd

```TypeScript
onFrameEnd(callback: AsyncCallback<void>): void
```

Subscribes frame end event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. |

## onFrameStart

```TypeScript
onFrameStart(callback: AsyncCallback<void>): void
```

Subscribes frame start event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. |

## onSketchStatusChanged

```TypeScript
onSketchStatusChanged(callback: AsyncCallback<SketchStatusData>): void
```

Subscribes sketch status changed event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;SketchStatusData> | Yes | Callback used to sketch status data. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |

## setFrameRate

```TypeScript
setFrameRate(minFps: int, maxFps: int): void
```

Sets a frame rate range for preview streams. The range must be within the supported frame rate range, which can be obtained by calling [getSupportedFrameRates]camera.PreviewOutput.getSupportedFrameRates. > **NOTE** > > This API is valid only in [PhotoSession]camera.PhotoSession or > [VideoSession]camera.VideoSession mode.

**Since:** 12

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| minFps | int | Yes | Minimum frame rate, in fps. When the maximum value is less than the minimum value, the  API does not take effect. |
| maxFps | int | Yes | Maximum frame rate, in fps. When the minimum value is greater than the maximum value, the  API does not take effect. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400110 | Unresolved conflicts with current configurations. |

## setLogViewAssistEnable

```TypeScript
setLogViewAssistEnable(enable: boolean): void
```

Log video view assistance toggle. Before enabling this feature, you can call [isLogViewAssistSupported]camera.PreviewOutput.isLogViewAssistSupported to check whether the device supports log video view assistance.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Whether to enable log video view assistance, true to enable, false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

## setPreviewRotation

```TypeScript
setPreviewRotation(previewRotation: ImageRotation, isDisplayLocked?: boolean): void
```

Sets the preview rotation angle.

**Since:** 12

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| previewRotation | ImageRotation | Yes | Preview rotation angle. |
| isDisplayLocked | boolean | No | Whether the orientation of the surface is locked when the screen rotates. If  this parameter is not set, the default value false is used, indicating that the orientation is not  locked. true if locked, false otherwise. For details, see  [SurfaceRotationOptions]SurfaceRotationOptions. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400201 | Camera service fatal error. |

## start

```TypeScript
start(callback: AsyncCallback<void>): void
```

Starts to output preview streams. This API uses an asynchronous callback to return the result.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.Session.start(callback:

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the preview stream output starts  successfully, err is undefined; otherwise, err is an error object with an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## start

```TypeScript
start(): Promise<void>
```

Starts to output preview streams. This API uses a promise to return the result.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.Session.start()

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |

## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

Stops outputting preview streams. This API uses an asynchronous callback to return the result.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.Session.stop(callback:

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the preview stream output stops  successfully, err is undefined; otherwise, err is an error object. |

## stop

```TypeScript
stop(): Promise<void>
```

Stops outputting preview streams. This API uses a promise to return the result.

**Since:** 10

**Deprecated since:** 11

**Substitute:** camera.Session.stop()

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

