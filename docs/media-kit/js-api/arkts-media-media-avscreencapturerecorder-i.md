# AVScreenCaptureRecorder

AVScreenCaptureRecorder is a class for screen capture management. It provides APIs for screen capture. Before calling any API in AVScreenCaptureRecorder, you must use [createAVScreenCaptureRecorder()](arkts-media-media-createavscreencapturerecorder-f.md#createavscreencapturerecorder-1) to create an AVScreenCaptureRecorder instance.

**Since:** 12

<!--Device-media-interface AVScreenCaptureRecorder--><!--Device-media-interface AVScreenCaptureRecorder-End-->

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

## Modules to Import

```TypeScript
import { media } from '@kit.MediaKit';
```

<a id="addwatermark"></a>
## addWatermark

```TypeScript
addWatermark(watermark: image.PixelMap, config: WatermarkConfiguration): Promise<number>
```

add a watermark for the AVScreenCaptureRecorder. This API uses a promise to return the result.App can add up to 5 watermarks.This API can be called only before calling startRecording().

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AVScreenCaptureRecorder-addWatermark(watermark: image.PixelMap, config: WatermarkConfiguration): Promise<int>--><!--Device-AVScreenCaptureRecorder-addWatermark(watermark: image.PixelMap, config: WatermarkConfiguration): Promise<int>-End-->

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| watermark | image.PixelMap | Yes | : Watermark image. |
| config | [WatermarkConfiguration](arkts-media-media-watermarkconfiguration-i.md) | Yes | : Configuration of the watermark. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise that returns the watermark id. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |
| [5400103](../errorcode-media.md#5400103-io-error) | IO error. Return by promise. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by promise. |
| [5400108](../errorcode-media.md#5400108-parameter-value-out-of-range) | The parameter check failed, parameter value out of range. |

<a id="excludepickerwindows"></a>
## excludePickerWindows

```TypeScript
excludePickerWindows(excludedWindows: Array<number>): Promise<void>
```

Sets the list of windows to be hidden in the picker. The setting takes effect the next time the picker is displayed. This API uses a promise to return the result.

**Since:** 22

<!--Device-AVScreenCaptureRecorder-excludePickerWindows(excludedWindows: Array<int>): Promise<void>--><!--Device-AVScreenCaptureRecorder-excludePickerWindows(excludedWindows: Array<int>): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| excludedWindows | Array&lt;number&gt; | Yes | List of windows to be hidden in the picker. For details about how to obtain window properties, see [getWindowProperties](docroot://reference/apis-arkui/arkts-apis-window-Window.md#getwindowproperties9). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |
| [5400103](../errorcode-media.md#5400103-io-error) | IO error. Return by promise. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by promise. |

<a id="init"></a>
## init

```TypeScript
init(config: AVScreenCaptureRecordConfig): Promise<void>
```

Initializes screen capture and sets screen capture parameters. This API uses a promise to return the result.

**Since:** 12

<!--Device-AVScreenCaptureRecorder-init(config: AVScreenCaptureRecordConfig): Promise<void>--><!--Device-AVScreenCaptureRecorder-init(config: AVScreenCaptureRecordConfig): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | [AVScreenCaptureRecordConfig](arkts-media-media-avscreencapturerecordconfig-i.md) | Yes | Screen capture parameters to set. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3. Parameter verification failed. Return by promise. |
| [5400103](../errorcode-media.md#5400103-io-error) | IO error. Return by promise. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by promise. |

<a id="off"></a>
## off('stateChange')

```TypeScript
off(type: 'stateChange', callback?: Callback<AVScreenCaptureStateCode>): void
```

Unsubscribes from screen capture state changes. You can specify a callback to cancel the specified subscription.

**Since:** 12

<!--Device-AVScreenCaptureRecorder-off(type: 'stateChange', callback?: Callback<AVScreenCaptureStateCode>): void--><!--Device-AVScreenCaptureRecorder-off(type: 'stateChange', callback?: Callback<AVScreenCaptureStateCode>): void-End-->

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'stateChange' | Yes | Event type, which is **'stateChange'** in this case. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;AVScreenCaptureStateCode&gt; | No | Callback used for unsubscription.[AVScreenCaptureStateCode](arkts-media-media-avscreencapturestatecode-e.md) indicates the new state. If this parameter is not specified, the last subscription is canceled. |

<a id="off-1"></a>
## off('error')

```TypeScript
off(type: 'error', callback?: ErrorCallback): void
```

Unsubscribes from AVScreenCaptureRecorder errors. You can specify a callback to cancel the specified subscription.

**Since:** 12

<!--Device-AVScreenCaptureRecorder-off(type: 'error', callback?: ErrorCallback): void--><!--Device-AVScreenCaptureRecorder-off(type: 'error', callback?: ErrorCallback): void-End-->

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type, which is **'error'** in this case. |
| callback | [ErrorCallback](../../apis-arkui/arkts-components/arkts-arkui-errorcallback-t-sys.md) | No | Callback used for unsubscription. If this parameter is not specified, the last subscription is canceled. |

<a id="on"></a>
## on('stateChange')

```TypeScript
on(type: 'stateChange', callback: Callback<AVScreenCaptureStateCode>): void
```

Subscribes to screen capture state changes. An application can subscribe to only one screen capture state change event. When the application initiates multiple subscriptions to this event, the last subscription is applied.

**Since:** 12

<!--Device-AVScreenCaptureRecorder-on(type: 'stateChange', callback: Callback<AVScreenCaptureStateCode>): void--><!--Device-AVScreenCaptureRecorder-on(type: 'stateChange', callback: Callback<AVScreenCaptureStateCode>): void-End-->

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'stateChange' | Yes | Event type, which is **'stateChange'** in this case. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;AVScreenCaptureStateCode&gt; | Yes | Callback invoked when the event is triggered.[AVScreenCaptureStateCode](arkts-media-media-avscreencapturestatecode-e.md) indicates the new state. |

<a id="on-1"></a>
## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Subscribes to AVScreenCaptureRecorder errors. You can handle the errors based on the application logic. An application can subscribe to only one AVScreenCaptureRecorder error event. When the application initiates multiple subscriptions to this event, the last subscription is applied.

**Since:** 12

<!--Device-AVScreenCaptureRecorder-on(type: 'error', callback: ErrorCallback): void--><!--Device-AVScreenCaptureRecorder-on(type: 'error', callback: ErrorCallback): void-End-->

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type, which is **'error'** in this case. |
| callback | [ErrorCallback](../../apis-arkui/arkts-components/arkts-arkui-errorcallback-t-sys.md) | Yes | Callback invoked when the event is triggered. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | permission denied. |
| [5400103](../errorcode-media.md#5400103-io-error) | IO error. Return by ErrorCallback. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by ErrorCallback. |

<a id="pauserecording"></a>
## pauseRecording

```TypeScript
pauseRecording(): Promise<void>
```

Pause screen capture. This API uses a promise to return the result.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AVScreenCaptureRecorder-pauseRecording(): Promise<void>--><!--Device-AVScreenCaptureRecorder-pauseRecording(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not be permitted. Return by promise. |
| [5400103](../errorcode-media.md#5400103-io-error) | IO error. Return by promise. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by promise. |

<a id="presentpicker"></a>
## presentPicker

```TypeScript
presentPicker(): Promise<void>
```

Displays the Picker once more after the screen capture starts, allowing for dynamic updates to the recording source, such as changing the window or screen being recorded. This API uses a promise to return the result.

> **NOTE**  
>  
> - The ongoing capture process remains uninterrupted while updating the recording source.  
>  
> - Following the dynamic update of the recording source through the Picker, the capture proceeds with the newly  
> selected source.

**Since:** 22

<!--Device-AVScreenCaptureRecorder-presentPicker(): Promise<void>--><!--Device-AVScreenCaptureRecorder-presentPicker(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |
| [5400103](../errorcode-media.md#5400103-io-error) | IO error. Return by promise. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by promise. |

<a id="release"></a>
## release

```TypeScript
release(): Promise<void>
```

Releases this AVScreenCaptureRecorder instance. This API uses a promise to return the result.

**Since:** 12

<!--Device-AVScreenCaptureRecorder-release(): Promise<void>--><!--Device-AVScreenCaptureRecorder-release(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400103](../errorcode-media.md#5400103-io-error) | IO error. Return by promise. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by promise. |

<a id="resumerecording"></a>
## resumeRecording

```TypeScript
resumeRecording(): Promise<void>
```

Resume screen capture. This API uses a promise to return the result.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AVScreenCaptureRecorder-resumeRecording(): Promise<void>--><!--Device-AVScreenCaptureRecorder-resumeRecording(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not be permitted. Return by promise. |
| [5400103](../errorcode-media.md#5400103-io-error) | IO error. Return by promise. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by promise. |

<a id="setcontentautorotation"></a>
## setContentAutoRotation

```TypeScript
setContentAutoRotation(enable: boolean): Promise<void>
```

Sets whether the captured screen content automatically rotates to keep the image upright.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AVScreenCaptureRecorder-setContentAutoRotation(enable: boolean): Promise<void>--><!--Device-AVScreenCaptureRecorder-setContentAutoRotation(enable: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Indicates whether to enable automatic rotation. The default value is **false**.A value of **true** indicates automatic rotation and the image content in the output frame remains upright. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Return by promise. |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by promise. |

<a id="setmicenabled"></a>
## setMicEnabled

```TypeScript
setMicEnabled(enable: boolean): Promise<void>
```

Enables or disables the microphone. This API uses a promise to return the result.

**Since:** 12

<!--Device-AVScreenCaptureRecorder-setMicEnabled(enable: boolean): Promise<void>--><!--Device-AVScreenCaptureRecorder-setMicEnabled(enable: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Whether to enable the microphone. **true** to enable, **false** otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400103](../errorcode-media.md#5400103-io-error) | IO error. Return by promise. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by promise. |

<a id="setpickermode"></a>
## setPickerMode

```TypeScript
setPickerMode(pickerMode: PickerMode): Promise<void>
```

Sets the display mode of the picker. The setting takes effect the next time the picker is displayed. This API uses a promise to return the result.

**Since:** 22

<!--Device-AVScreenCaptureRecorder-setPickerMode(pickerMode: PickerMode): Promise<void>--><!--Device-AVScreenCaptureRecorder-setPickerMode(pickerMode: PickerMode): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pickerMode | [PickerMode](arkts-media-media-pickermode-e.md) | Yes | Picker mode.<br>It defines the content type displayed in the picker. The options are as follows:<br>- **SCREEN_ONLY**: Displays only a list of screens.<br>- **WINDOW_ONLY**: Displays only a list of windows.<br>- **SCREEN_AND_WINDOW**: Displays both screens and windows. It is the default value. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |
| [5400103](../errorcode-media.md#5400103-io-error) | IO error. Return by promise. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by promise. |

<a id="skipprivacymode"></a>
## skipPrivacyMode

```TypeScript
skipPrivacyMode(windowIDs: Array<number>): Promise<void>
```

During screen capture, the application can exempt its privacy windows from security purposes. This API uses a promise to return the result.

For example, if a user enters a password in this application during screen capture, the application will not display a black screen.

**Since:** 12

<!--Device-AVScreenCaptureRecorder-skipPrivacyMode(windowIDs: Array<int>): Promise<void>--><!--Device-AVScreenCaptureRecorder-skipPrivacyMode(windowIDs: Array<int>): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| windowIDs | Array&lt;number&gt; | Yes | IDs of windows that require privacy exemption, including the main window IDs and subwindow IDs. For details about how to obtain window properties, see [getWindowProperties](docroot://reference/apis-arkui/arkts-apis-window-Window.md#getwindowproperties9). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400103](../errorcode-media.md#5400103-io-error) | IO error. Return by promise. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by promise. |

<a id="startrecording"></a>
## startRecording

```TypeScript
startRecording(): Promise<void>
```

Starts screen recording. Before using this API, you must call [init](arkts-media-media-avscreencapturerecorder-i.md#init-1). This API uses a promise to return the result.

**Since:** 12

<!--Device-AVScreenCaptureRecorder-startRecording(): Promise<void>--><!--Device-AVScreenCaptureRecorder-startRecording(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400103](../errorcode-media.md#5400103-io-error) | IO error. Return by promise. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by promise. |

<a id="stoprecording"></a>
## stopRecording

```TypeScript
stopRecording(): Promise<void>
```

Stops screen recording. This API uses a promise to return the result.

**Since:** 12

<!--Device-AVScreenCaptureRecorder-stopRecording(): Promise<void>--><!--Device-AVScreenCaptureRecorder-stopRecording(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400103](../errorcode-media.md#5400103-io-error) | IO error. Return by promise. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by promise. |

