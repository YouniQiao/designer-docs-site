# AudioCapturer

This interface provides APIs for audio capture. Before calling any API in AudioCapturer, you must use [createAudioCapturer](arkts-audio-createaudiocapturer-f.md#createAudioCapturer-1) to create an AudioCapturer instance. > **NOTE** > > - The initial APIs of this interface are supported since API version 8.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## getAudioStreamId

```TypeScript
getAudioStreamId(callback: AsyncCallback<long>): void
```

Obtains the stream ID of this audio capturer. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;long> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is the stream ID obtained; otherwise, err is an error object. |

## getAudioStreamId

```TypeScript
getAudioStreamId(): Promise<long>
```

Obtains the stream ID of this audio capturer. This API uses a promise to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | Promise used to return the stream ID. |

## getAudioStreamIdSync

```TypeScript
getAudioStreamIdSync(): long
```

Obtains the stream ID of this audio capturer. This API returns the result synchronously.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | Stream ID. |

## getAudioTime

```TypeScript
getAudioTime(callback: AsyncCallback<long>): void
```

Obtains the timestamp of the current recording position, measured in nanoseconds from the Unix epoch (January 1, 1970). This API uses an asynchronous callback to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;long> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is the number of nanoseconds obtained; otherwise, err is an error  object. |

## getAudioTime

```TypeScript
getAudioTime(): Promise<long>
```

Obtains the timestamp of the current recording position, measured in nanoseconds from the Unix epoch (January 1, 1970). This API uses a promise to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | Promise used to return a timestamp representing the number of nanoseconds elapsed  since the Unix epoch (January 1, 1970).  The timestamp unit is nanoseconds. |

## getAudioTimestampInfo

```TypeScript
getAudioTimestampInfo(): Promise<AudioTimestampInfo>
```

Obtains the timestamp and position information of an input audio stream. This API obtains the actual recording position (specified by **framePos**) of the audio channel and the timestamp when recording to that position (specified by **timestamp**, in nanoseconds).

**起始版本：** 19

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AudioTimestampInfo> | Promise used to return the timestamp and position information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800103 | Operation not permit at current state. |

## getAudioTimestampInfoSync

```TypeScript
getAudioTimestampInfoSync(): AudioTimestampInfo
```

Obtains the timestamp and position information of an input audio stream. This API returns the result synchronously.

**起始版本：** 19

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioTimestampInfo | Information about the timestamp and position information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800103 | Operation not permit at current state. |

## getAudioTimeSync

```TypeScript
getAudioTimeSync(): long
```

Obtains the timestamp of the current recording position, measured in nanoseconds from the Unix epoch (January 1, 1970). This API returns the result synchronously.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | Timestamp. |

## getBufferSize

```TypeScript
getBufferSize(callback: AsyncCallback<long>): void
```

Obtains a reasonable minimum buffer size in bytes for capturing. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;long> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is the minimum buffer size obtained; otherwise, err is an error  object. The unit is bytes. |

## getBufferSize

```TypeScript
getBufferSize(): Promise<long>
```

Obtains a reasonable minimum buffer size in bytes for capturing. This API uses a promise to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | Promise used to return the buffer size.  The unit is bytes. |

## getBufferSizeSync

```TypeScript
getBufferSizeSync(): long
```

Obtains a reasonable minimum buffer size in bytes for capturing. This API returns the result synchronously.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | Buffer size, in bytes. |

## getCapturerInfo

```TypeScript
getCapturerInfo(callback: AsyncCallback<AudioCapturerInfo>): void
```

Obtains the audio capturer information. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AudioCapturerInfo> | 是 | Callback used to return the result. If the operation is  successful, err is undefined and data is the capturer information obtained; otherwise, err is  an error object. |

## getCapturerInfo

```TypeScript
getCapturerInfo(): Promise<AudioCapturerInfo>
```

Obtains the audio capturer information. This API uses a promise to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AudioCapturerInfo> | Promise used to return the audio capturer information. |

## getCapturerInfoSync

```TypeScript
getCapturerInfoSync(): AudioCapturerInfo
```

Obtains the audio capturer information. This API returns the result synchronously.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioCapturerInfo | Audio capturer information. |

## getCurrentAudioCapturerChangeInfo

```TypeScript
getCurrentAudioCapturerChangeInfo(): AudioCapturerChangeInfo
```

Obtains the configuration changes of the current audio capturer. This API returns the result synchronously.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Audio.Device

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioCapturerChangeInfo | Configuration changes of the audio capturer. |

## getCurrentInputDevices

```TypeScript
getCurrentInputDevices(): AudioDeviceDescriptors
```

Obtains the information of the current input devices. This API returns the result synchronously.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Audio.Device

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioDeviceDescriptors | An array of the audio device descriptors. |

## getNoiseReductionMode

```TypeScript
getNoiseReductionMode(): NoiseReductionMode
```

Gets the noise reduction mode for current audio capturer. The mode will only consider the default and setted status, audio input device and stream concurrency will not be considered.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| NoiseReductionMode | The noise reduction mode for current audio capturer,  the default value is {@link NoiseReductionMode#FIDELITY}. |

## getOverflowCount

```TypeScript
getOverflowCount(): Promise<long>
```

Obtains the number of overflow audio frames in the audio stream that is being captured. This API uses a promise to return the result.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | Promise used to return the number of overflow audio frames. |

## getOverflowCountSync

```TypeScript
getOverflowCountSync(): long
```

Obtains the number of overflow audio frames in the audio stream that is being captured. This API returns the result synchronously.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | Number of overflow audio frames. |

## getStreamInfo

```TypeScript
getStreamInfo(callback: AsyncCallback<AudioStreamInfo>): void
```

Obtains the stream information of this audio capturer. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AudioStreamInfo> | 是 | Callback used to return the result. If the operation is  successful, err is undefined and data is the stream information obtained; otherwise, err is  an error object. |

## getStreamInfo

```TypeScript
getStreamInfo(): Promise<AudioStreamInfo>
```

Obtains the stream information of this audio capturer. This API uses a promise to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AudioStreamInfo> | Promise used to return the stream information. |

## getStreamInfoSync

```TypeScript
getStreamInfoSync(): AudioStreamInfo
```

Obtains the stream information of this audio capturer. This API returns the result synchronously.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioStreamInfo | Stream information. |

## getSupportedNoiseReductionModes

```TypeScript
getSupportedNoiseReductionModes(): Array<NoiseReductionMode>
```

Gets all the supported noise reduction modes for current device platform. Currently the noise reduction effect is only supported when using {@link SourceType#SOURCE_TYPE_VOICE_MESSAGE}, other supported usage may be extened later. The supported modes will only consider the audio format and device platform, audio input device and stream concurrency will not be considered.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;NoiseReductionMode> | The supported noise reduction mode array, at least  {@link NoiseReductionMode#FIDELITY} is supported. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800301 | Audio server process died. |

## off('markReach')

```TypeScript
off(type: 'markReach', callback?: Callback<long>): void
```

Unsubscribes from the mark reached event. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'markReach' | 是 | Event type. The event 'markReach' is triggered when the number of frames  captured reaches the value of the frame parameter. |
| callback | Callback&lt;long> | 否 | Callback used to return the value of the frame parameter. [since 18] |

## off('periodReach')

```TypeScript
off(type: 'periodReach', callback?: Callback<long>): void
```

Unsubscribes from the period reached event. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'periodReach' | 是 | Event type. The event 'periodReach' is triggered each time the number of  frames captured reaches the value of the frame parameter. |
| callback | Callback&lt;long> | 否 | Callback used to return the value of the frame parameter. [since 18] |

## off('stateChange')

```TypeScript
off(type: 'stateChange', callback?: Callback<AudioState>): void
```

Unsubscribes from the audio capturer state change event. This API uses an asynchronous callback to return the result.

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'stateChange' | 是 | Event type. The event 'stateChange' is triggered when the listening for audio  capturer state change event is canceled. |
| callback | Callback&lt;AudioState> | 否 | Callback used to return the audio status. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## off

```TypeScript
off(type: 'audioInterrupt'): void
```

Unsubscribes from the audio interruption event.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Interrupt

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'audioInterrupt' | 是 | Event type. The event 'audioInterrupt' is triggered when the audio focus  is changed. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## off('inputDeviceChange')

```TypeScript
off(type: 'inputDeviceChange', callback?: Callback<AudioDeviceDescriptors>): void
```

Unsubscribes from the audio input device change event. This API uses an asynchronous callback to return the result.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'inputDeviceChange' | 是 | Event type. The event 'inputDeviceChange' is triggered when an audio  input device is changed. |
| callback | Callback&lt;AudioDeviceDescriptors> | 否 | Callback used to return the information about the audio  input device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## off('audioCapturerChange')

```TypeScript
off(type: 'audioCapturerChange', callback?: Callback<AudioCapturerChangeInfo>): void
```

Unsubscribes from the audio capturer configuration change event. This API uses an asynchronous callback to return the result.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'audioCapturerChange' | 是 | Event type. The event 'audioCapturerChange' is triggered when the  audio capturer configuration is changed. |
| callback | Callback&lt;AudioCapturerChangeInfo> | 否 | Callback used for unsubscription. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## off('readData')

```TypeScript
off(type: 'readData', callback?: Callback<ArrayBuffer>): void
```

Unsubscribes from the audio data read event. This API uses an asynchronous callback to return the result.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'readData' | 是 | Event type. The event 'readData' is triggered when audio stream data needs to be  read. |
| callback | Callback&lt;ArrayBuffer> | 否 | Callback used to return the buffer from which the data is read. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## offAudioCapturerChange

```TypeScript
offAudioCapturerChange(callback?: Callback<AudioCapturerChangeInfo>): void
```

Unsubscribes audio capturer info change event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioCapturerChangeInfo> | 否 | Callback used in subscribe. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## offAudioInterrupt

```TypeScript
offAudioInterrupt(): void
```

UnSubscribes to audio interrupt events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Interrupt

## offInputDeviceChange

```TypeScript
offInputDeviceChange(callback?: Callback<AudioDeviceDescriptors>): void
```

Unsubscribes input device change event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioDeviceDescriptors> | 否 | Callback used in subscribe. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## offMarkReach

```TypeScript
offMarkReach(callback?: Callback<long>): void
```

Unsubscribes from the mark reached events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;long> | 否 | Callback invoked when the event is triggered. |

## offPeriodReach

```TypeScript
offPeriodReach(callback?: Callback<long>): void
```

Unsubscribes from period reached events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;long> | 否 | Callback invoked when the event is triggered. |

## offReadData

```TypeScript
offReadData(callback?: Callback<ArrayBuffer>): void
```

Unsubscribes audio data callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;ArrayBuffer> | 否 | Callback used in subscribe. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## offReadMicInData

```TypeScript
offReadMicInData(callback?: Callback<AudioCapturerMicInData>): void
```

Unsubscribes from micIn audio data callback.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioCapturerMicInData> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 6800101 | Parameter verification failed. |
| 6800103 | Operation not permitted at running state. |

## offStateChange

```TypeScript
offStateChange(callback?: Callback<AudioState>): void
```

Unsubscribes audio state change event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioState> | 否 | Callback used to listen for the audio state change event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## on('markReach')

```TypeScript
on(type: 'markReach', frame: long, callback: Callback<long>): void
```

Subscribes to the mark reached event, which is triggered (only once) when the number of frames captured reaches the value of the **frame** parameter. This API uses an asynchronous callback to return the result. For example, if **frame** is set to **100**, the callback is invoked when the number of captured frames reaches the 100th frame.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'markReach' | 是 | Event type. The event 'markReach' is triggered when the number of frames  captured reaches the value of the frame parameter. |
| frame | long | 是 | Number of frames to trigger the event. The value must be greater than 0. |
| callback | Callback&lt;long> | 是 | Callback used to return the value of the frame parameter. |

## on('periodReach')

```TypeScript
on(type: 'periodReach', frame: long, callback: Callback<long>): void
```

Subscribes to the period reached event, which is triggered each time the number of frames captured reaches the value of the **frame** parameter. In other words, the information is reported periodically. This API uses an asynchronous callback to return the result. For example, if **frame** is set to **10**, the callback is invoked each time 10 frames are captured, for example , when the number of frames captured reaches the 10th frame, 20th frame, and 30th frame.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'periodReach' | 是 | Event type. The event 'periodReach' is triggered each time the number of  frames captured reaches the value of the frame parameter. |
| frame | long | 是 | Number of frames to trigger the event. The value must be greater than 0. |
| callback | Callback&lt;long> | 是 | Callback used to return the value of the frame parameter. |

## on('stateChange')

```TypeScript
on(type: 'stateChange', callback: Callback<AudioState>): void
```

Subscribes to the audio capturer state change event, which is triggered when the state of the audio capturer is changed. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'stateChange' | 是 | Event type. The event 'stateChange' is triggered when the state of the audio  capturer is changed. |
| callback | Callback&lt;AudioState> | 是 | Callback used to return the audio status. |

## on('audioInterrupt')

```TypeScript
on(type: 'audioInterrupt', callback: Callback<InterruptEvent>): void
```

Subscribes to the audio interruption event, which is triggered when the audio focus is changed. This API uses an asynchronous callback to return the result. The AudioCapturer instance proactively gains the focus when the **start** event occurs and releases the focus when the **pause** or **stop** event occurs. Therefore, you do not need to request to gain or release the focus. After this API is called, an [InterruptEvent](arkts-audio-interruptevent-i.md#InterruptEvent) is received when the AudioCapturer instance fails to obtain the focus or an audio interruption event occurs (for example, the audio stream is interrupted by others). It is recommended that the application perform further processing based on the **InterruptEvent** information. For details, see [Introduction to Audio Focus](docroot://media/audio/audio-playback-concurrency.md).

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Interrupt

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'audioInterrupt' | 是 | Event type. The event 'audioInterrupt' is triggered when the audio focus  is changed. |
| callback | Callback&lt;InterruptEvent> | 是 | Callback used to return the event information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## on('inputDeviceChange')

```TypeScript
on(type: 'inputDeviceChange', callback: Callback<AudioDeviceDescriptors>): void
```

Subscribes to the audio input device change event, which is triggered when an audio input device is changed. This API uses an asynchronous callback to return the result.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'inputDeviceChange' | 是 | Event type. The event 'inputDeviceChange' is triggered when an audio  input device is changed. |
| callback | Callback&lt;AudioDeviceDescriptors> | 是 | Callback used to return the updated information about the  audio input device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## on('audioCapturerChange')

```TypeScript
on(type: 'audioCapturerChange', callback: Callback<AudioCapturerChangeInfo>): void
```

Subscribes to the audio capturer configuration change event, which is triggered when the audio recording stream status or device is changed. This API uses an asynchronous callback to return the result. The subscription is implemented asynchronously and the callback, which is triggered when the audio capturer configuration changes, may fail to reflect the actual condition.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'audioCapturerChange' | 是 | Event type. The event 'audioCapturerChange' is triggered when the  audio recording stream status or device is changed. |
| callback | Callback&lt;AudioCapturerChangeInfo> | 是 | Callback used to return the current configuration and  status information of the audio capturer. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## on('readData')

```TypeScript
on(type: 'readData', callback: Callback<ArrayBuffer>): void
```

Subscribes to the audio data read event, which is triggered when audio stream data needs to be read. This API uses an asynchronous callback to return the result. The callback function is used only to read audio data. Do not call AudioCapturer APIs in it. To eliminate power-on noise caused by the microphone hardware design, the first 100 ms of data after recording starts is typically muted.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'readData' | 是 | Event type. The event 'readData' is triggered when audio stream data needs to be  read. |
| callback | Callback&lt;ArrayBuffer> | 是 | Callback used to return the buffer from which the data is read. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## onAudioCapturerChange

```TypeScript
onAudioCapturerChange(callback: Callback<AudioCapturerChangeInfo>): void
```

Subscribes audio capturer info change event callback. The event is triggered when input device change for this stream.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioCapturerChangeInfo> | 是 | Callback used to listen device change event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## onAudioInterrupt

```TypeScript
onAudioInterrupt(callback: Callback<InterruptEvent>): void
```

Listens for audio interrupt events. This method uses a callback to get interrupt events. The interrupt event is triggered when audio recording is interrupted.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Interrupt

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;InterruptEvent> | 是 | Callback used to listen for interrupt callback. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## onInputDeviceChange

```TypeScript
onInputDeviceChange(callback: Callback<AudioDeviceDescriptors>): void
```

Subscribes input device change event callback. The event is triggered when input device change for this stream.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioDeviceDescriptors> | 是 | Callback used to listen device change event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## onMarkReach

```TypeScript
onMarkReach(frame: long, callback: Callback<long>): void
```

Subscribes to mark reached events. When the number of frames captured reaches the value of the frame parameter, the callback is invoked.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| frame | long | 是 | Number of frames to trigger the event. The value must be greater than 0. |
| callback | Callback&lt;long> | 是 | Callback invoked when the event is triggered. |

## onPeriodReach

```TypeScript
onPeriodReach(frame: long, callback: Callback<long>): void
```

Subscribes to period reached events. When the period of frame capturing reaches the value of frame parameter, the callback is invoked.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| frame | long | 是 | Period during which frame capturing is listened. The value must be greater than 0. |
| callback | Callback&lt;long> | 是 | Callback invoked when the event is triggered. |

## onReadData

```TypeScript
onReadData(callback: Callback<ArrayBuffer>): void
```

Subscribes audio data callback. The event is triggered when audio buffer is available for reading more data.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;ArrayBuffer> | 是 | Callback with the buffer to read. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## onReadMicInData

```TypeScript
onReadMicInData(callback: Callback<AudioCapturerMicInData>): void
```

Subscribes to micIn audio data callback. This callback has higher priority than 'readData' callback. If this callback and 'readData' callback are both subscribed, only this callback will be triggered. See {@link #onReadData} for more details. The event is triggered when an audio buffer is available for reading more data.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioCapturerMicInData> | 是 | Callback for the buffers to read. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 6800103 | Operation not permitted at running state. |

## onStateChange

```TypeScript
onStateChange(callback: Callback<AudioState>): void
```

Subscribes audio state change event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioState> | 是 | Callback used to listen for the audio state change event. |

## read

```TypeScript
read(size: number, isBlockingRead: boolean, callback: AsyncCallback<ArrayBuffer>): void
```

Reads the buffer from the audio capturer. This method uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 11

**替代接口：** ohos.multimedia.audio.AudioCapturer#event:readData

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| size | number | 是 | Number of bytes to read. |
| isBlockingRead | boolean | 是 | Whether to block the read operation. true to block, false otherwise. |
| callback | AsyncCallback&lt;ArrayBuffer> | 是 | Callback used to return the result. If the operation is  successful, err is undefined and data is the buffer read; otherwise, err is an error object. |

## read

```TypeScript
read(size: number, isBlockingRead: boolean): Promise<ArrayBuffer>
```

Reads the buffer. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 11

**替代接口：** ohos.multimedia.audio.AudioCapturer#event:readData

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| size | number | 是 | Number of bytes to read. |
| isBlockingRead | boolean | 是 | Whether to block the read operation. true to block, false otherwise. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ArrayBuffer> | Promise used to return the data read from the buffer. |

## release

```TypeScript
release(callback: AsyncCallback<void>): void
```

Releases this audio capturer. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

## release

```TypeScript
release(): Promise<void>
```

Releases this audio capturer. This API uses a promise to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

## requestPlaybackCaptureStart

```TypeScript
requestPlaybackCaptureStart(callback: Callback<PlaybackCaptureStartState>): void
```

Asynchronously request to start the playback capture stream. This function is non-blocking, which means system will continue to process user authorization and stream starting when receiving the start request. And the final result will be returned by callback.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.PlaybackCapture

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;PlaybackCaptureStartState> | 是 | Callback function used to receive the final  result of start request. |

## setIndependentAudioSessionStrategy

```TypeScript
setIndependentAudioSessionStrategy(strategy: AudioSessionStrategy, behavior: int): void
```

Sets the independent audio session strategy and behavior parameters. > **NOTE** > > If this API is called while an audio capturer is running, you must call the > [start](arkts-audio-audiocapturer-i.md#start) API again for > the settings to take effect.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| strategy | AudioSessionStrategy | 是 | Audio session strategy. |
| behavior | int | 是 | Specifies the audio session behavior. This can be a single flag or a bitwise OR  combination of multiple flags. For details about the supported audio session behaviors, see  [AudioSessionBehaviorFlags](arkts-audio-audiosessionbehaviorflags-e.md#AudioSessionBehaviorFlags). |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |
| 6800103 | Operation not permit at current state. |

## setInputDeviceToAccessory

```TypeScript
setInputDeviceToAccessory(): void
```

Sets default input device of this Capturer to DEVICE_TYPE_ACCESSORY. Other capturers' devices will not be affected by this method. This method can only be used before the capture stream starts. Besides, if audio accessory is not connected, this method will report fail. After calling this function, the input device of this capturer will not be affected by other interfaces.

**起始版本：** 19

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**系统接口：** 此接口为系统接口。

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 6800103 | Operation not permit at current state. |

## setMuteHint

```TypeScript
setMuteHint(mute: boolean): Promise<void>
```

Set mute hint for this capturer, this method is used as a hint for power optimization it does not mute the recording stream, only affects internal processing strategy.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mute | boolean | 是 | Use true if application recording stream muted by application if self. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800103 | Operation not permitted at current state, stream is not running. |

## setNoiseReductionMode

```TypeScript
setNoiseReductionMode(noiseReductionMode: NoiseReductionMode): void
```

Sets noise reduction mode for current audio capturer. The supported mode should be obtained by {@link #getSupportedNoiseReductionModes}. The actual effect may vary from different audio devices, and will be invalid when there are multiple recording streams running simultaneously. The mode can only be changed in created and stopped state.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| noiseReductionMode | NoiseReductionMode | 是 | The noise reduction mode to set. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |
| 6800103 | Illegal state, audio capturer is in running or released state. |
| 6800104 | The setted mode is not supported. |
| 6800301 | Audio server process died. |

## setWillMuteWhenInterrupted

```TypeScript
setWillMuteWhenInterrupted(muteWhenInterrupted: boolean): Promise<void>
```

Sets whether to [mute the current audio recording stream when an audio interruption occurs](docroot://media/audio/using-audiocapturer-for-recording.md#setting-the-mute-interruption-mode) . This API uses a promise to return the result.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| muteWhenInterrupted | boolean | 是 | Whether to mute the current audio recording stream during an audio  interruption. true to mute, false otherwise. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800103 | Operation not permitted at current state. |

## start

```TypeScript
start(callback: AsyncCallback<void>): void
```

Starts this audio capturer to start capturing audio data. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. If the operation fails, an error object with  the following error code is returned: Error code 6800301: indicates abnormal status, focus preemption  failure, and abnormal system processing. For details, see system logs. |

## start

```TypeScript
start(): Promise<void>
```

Starts this audio capturer to start capturing audio data. This API uses a promise to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise object, which indicates that the capturer is started successfully. If the  operation fails, an error object with the following error code is returned:  Error code 6800301: indicates abnormal status, focus preemption failure, and abnormal system processing. For  details, see system logs. |

## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

Stops this audio capturer, ceasing the input audio stream. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

## stop

```TypeScript
stop(): Promise<void>
```

Stops this audio capturer, ceasing the input audio stream. This API uses a promise to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

## state

```TypeScript
readonly state: AudioState
```

Audio capturer state.

**类型：** AudioState

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

