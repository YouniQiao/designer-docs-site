# AVScreenCaptureRecorder

AVScreenCaptureRecorder is a class for screen capture management. It provides APIs for screen capture. Before calling any API in AVScreenCaptureRecorder, you must use [createAVScreenCaptureRecorder()](arkts-media-createavscreencapturerecorder-f.md#createAVScreenCaptureRecorder-1) to create an AVScreenCaptureRecorder instance.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Media.AVScreenCapture

## 导入模块

```TypeScript
import { media } from '@kit.MediaKit';
```

## addWatermark

```TypeScript
addWatermark(watermark: image.PixelMap, config: WatermarkConfiguration): Promise<int>
```

add a watermark for the AVScreenCaptureRecorder. This API uses a promise to return the result. App can add up to 5 watermarks. This API can be called only before calling startRecording().

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.AVScreenCapture

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| watermark | image.PixelMap | 是 | : Watermark image. |
| config | WatermarkConfiguration | 是 | : Configuration of the watermark. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Promise that returns the watermark id. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operation not allowed. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |
| 5400108 | The parameter check failed, parameter value out of range. |

## excludePickerWindows

```TypeScript
excludePickerWindows(excludedWindows: Array<int>): Promise<void>
```

Sets the list of windows to be hidden in the picker. The setting takes effect the next time the picker is displayed. This API uses a promise to return the result.

**起始版本：** 22

**系统能力：** SystemCapability.Multimedia.Media.AVScreenCapture

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| excludedWindows | Array&lt;int> | 是 | List of windows to be hidden in the picker. For details about how to  obtain window properties, see  [getWindowProperties](docroot://reference/apis-arkui/arkts-apis-window-Window.md#getwindowproperties9). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operation not allowed. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## init

```TypeScript
init(config: AVScreenCaptureRecordConfig): Promise<void>
```

Initializes screen capture and sets screen capture parameters. This API uses a promise to return the result.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Media.AVScreenCapture

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| config | AVScreenCaptureRecordConfig | 是 | Screen capture parameters to set. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## off('stateChange')

```TypeScript
off(type: 'stateChange', callback?: Callback<AVScreenCaptureStateCode>): void
```

Unsubscribes from screen capture state changes. You can specify a callback to cancel the specified subscription.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Media.AVScreenCapture

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'stateChange' | 是 | Event type, which is 'stateChange' in this case. |
| callback | Callback&lt;AVScreenCaptureStateCode> | 否 | Callback used for unsubscription.  [AVScreenCaptureStateCode](arkts-media-avscreencapturestatecode-e.md#AVScreenCaptureStateCode) indicates the new  state. If this parameter is not specified, the last subscription is canceled. |

## off('error')

```TypeScript
off(type: 'error', callback?: ErrorCallback): void
```

Unsubscribes from AVScreenCaptureRecorder errors. You can specify a callback to cancel the specified subscription.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Media.AVScreenCapture

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'error' | 是 | Event type, which is 'error' in this case. |
| callback | ErrorCallback | 否 | Callback used for unsubscription. If this parameter is not specified, the  last subscription is canceled. |

## offError

```TypeScript
offError(callback?: ErrorCallback): void
```

Unsubscribes from AVScreenCaptureRecorder errors. You can specify a callback to cancel the specified subscription.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Media.AVScreenCapture

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ErrorCallback | 否 |  |

## offStateChange

```TypeScript
offStateChange(callback?: Callback<AVScreenCaptureStateCode>): void
```

Unsubscribes from screen capture state changes. You can specify a callback to cancel the specified subscription.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Media.AVScreenCapture

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AVScreenCaptureStateCode> | 否 |  |

## on('stateChange')

```TypeScript
on(type: 'stateChange', callback: Callback<AVScreenCaptureStateCode>): void
```

Subscribes to screen capture state changes. An application can subscribe to only one screen capture state change event. When the application initiates multiple subscriptions to this event, the last subscription is applied.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Media.AVScreenCapture

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'stateChange' | 是 | Event type, which is 'stateChange' in this case. |
| callback | Callback&lt;AVScreenCaptureStateCode> | 是 | Callback invoked when the event is triggered.  [AVScreenCaptureStateCode](arkts-media-avscreencapturestatecode-e.md#AVScreenCaptureStateCode) indicates the new  state. |

## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Subscribes to AVScreenCaptureRecorder errors. You can handle the errors based on the application logic. An application can subscribe to only one AVScreenCaptureRecorder error event. When the application initiates multiple subscriptions to this event, the last subscription is applied.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Media.AVScreenCapture

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'error' | 是 | Event type, which is 'error' in this case. |
| callback | ErrorCallback | 是 | Callback invoked when the event is triggered. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | permission denied. |
| 5400103 | IO error. Return by ErrorCallback. |
| 5400105 | Service died. Return by ErrorCallback. |

## onError

```TypeScript
onError(callback: ErrorCallback): void
```

Subscribes to AVScreenCaptureRecorder errors. You can handle the errors based on the application logic. An application can subscribe to only one AVScreenCaptureRecorder error event. When the application initiates multiple subscriptions to this event, the last subscription is applied.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Media.AVScreenCapture

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ErrorCallback | 是 | Callback invoked when the event is triggered. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | permission denied. |
| 5400103 | IO error. Return by ErrorCallback. |
| 5400105 | Service died. Return by ErrorCallback. |

## onStateChange

```TypeScript
onStateChange(callback: Callback<AVScreenCaptureStateCode>): void
```

Subscribes to screen capture state changes. An application can subscribe to only one screen capture state change event. When the application initiates multiple subscriptions to this event, the last subscription is applied.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Media.AVScreenCapture

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AVScreenCaptureStateCode> | 是 | Callback invoked when the event is triggered.  AVScreenCaptureStateCode indicates the new state. |

## pauseRecording

```TypeScript
pauseRecording(): Promise<void>
```

Pause screen capture. This API uses a promise to return the result.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.AVScreenCapture

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operation not be permitted. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## presentPicker

```TypeScript
presentPicker(): Promise<void>
```

Displays the Picker once more after the screen capture starts, allowing for dynamic updates to the recording source, such as changing the window or screen being recorded. This API uses a promise to return the result. > **NOTE** > > - The ongoing capture process remains uninterrupted while updating the recording source. > > - Following the dynamic update of the recording source through the Picker, the capture proceeds with the newly > selected source.

**起始版本：** 22

**系统能力：** SystemCapability.Multimedia.Media.AVScreenCapture

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operation not allowed. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## release

```TypeScript
release(): Promise<void>
```

Releases this AVScreenCaptureRecorder instance. This API uses a promise to return the result.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Media.AVScreenCapture

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## resumeRecording

```TypeScript
resumeRecording(): Promise<void>
```

Resume screen capture. This API uses a promise to return the result.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.AVScreenCapture

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operation not be permitted. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## setContentAutoRotation

```TypeScript
setContentAutoRotation(enable: boolean): Promise<void>
```

Sets whether the captured screen content automatically rotates to keep the image upright.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.AVScreenCapture

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | Indicates whether to enable automatic rotation. The default value is false.  A value of true indicates automatic rotation and the image content in the output frame remains upright. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Return by promise. |
| 5400102 | Operation not allowed. Return by promise. |
| 5400105 | Service died. Return by promise. |

## setMicEnabled

```TypeScript
setMicEnabled(enable: boolean): Promise<void>
```

Enables or disables the microphone. This API uses a promise to return the result.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Media.AVScreenCapture

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | Whether to enable the microphone. true to enable, false otherwise. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## setPickerMode

```TypeScript
setPickerMode(pickerMode: PickerMode): Promise<void>
```

Sets the display mode of the picker. The setting takes effect the next time the picker is displayed. This API uses a promise to return the result.

**起始版本：** 22

**系统能力：** SystemCapability.Multimedia.Media.AVScreenCapture

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pickerMode | PickerMode | 是 | Picker mode. It defines the content type displayed in the picker. The  options are as follows: - SCREEN_ONLY: Displays only a list of screens. - WINDOW_ONLY: Displays  only a list of windows. - SCREEN_AND_WINDOW: Displays both screens and windows. It is the default  value. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operation not allowed. Return by promise. |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## skipPrivacyMode

```TypeScript
skipPrivacyMode(windowIDs: Array<int>): Promise<void>
```

During screen capture, the application can exempt its privacy windows from security purposes. This API uses a promise to return the result. For example, if a user enters a password in this application during screen capture, the application will not display a black screen.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Media.AVScreenCapture

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| windowIDs | Array&lt;int> | 是 | IDs of windows that require privacy exemption, including the main window IDs  and subwindow IDs. For details about how to obtain window properties, see  [getWindowProperties](docroot://reference/apis-arkui/arkts-apis-window-Window.md#getwindowproperties9). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## startRecording

```TypeScript
startRecording(): Promise<void>
```

Starts screen recording. Before using this API, you must call [init](arkts-media-avscreencapturerecorder-i.md#init). This API uses a promise to return the result.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Media.AVScreenCapture

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

## stopRecording

```TypeScript
stopRecording(): Promise<void>
```

Stops screen recording. This API uses a promise to return the result.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Media.AVScreenCapture

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400103 | IO error. Return by promise. |
| 5400105 | Service died. Return by promise. |

