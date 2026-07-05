# AudioCapturer

This interface provides APIs for audio capture. Before calling any API in AudioCapturer, you must use [createAudioCapturer](arkts-audio-createaudiocapturer-f.md#createAudioCapturer-1) to create an AudioCapturer instance. > **NOTE** > > - The initial APIs of this interface are supported since API version 8.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

## Modules to Import

```TypeScript
import { audio } from '@kit.AudioKit';
```

## getAudioStreamId

```TypeScript
getAudioStreamId(callback: AsyncCallback<long>): void
```

Obtains the stream ID of this audio capturer. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;long> | Yes | Callback used to return the result. If the operation is successful,  err is undefined and data is the stream ID obtained; otherwise, err is an error object. |

## getAudioStreamId

```TypeScript
getAudioStreamId(): Promise<long>
```

Obtains the stream ID of this audio capturer. This API uses a promise to return the result.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | Promise used to return the stream ID. |

## getAudioStreamIdSync

```TypeScript
getAudioStreamIdSync(): long
```

Obtains the stream ID of this audio capturer. This API returns the result synchronously.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| long | Stream ID. |

## getAudioTime

```TypeScript
getAudioTime(callback: AsyncCallback<long>): void
```

Obtains the timestamp of the current recording position, measured in nanoseconds from the Unix epoch (January 1, 1970). This API uses an asynchronous callback to return the result.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;long> | Yes | Callback used to return the result. If the operation is successful,  err is undefined and data is the number of nanoseconds obtained; otherwise, err is an error  object. |

## getAudioTime

```TypeScript
getAudioTime(): Promise<long>
```

Obtains the timestamp of the current recording position, measured in nanoseconds from the Unix epoch (January 1, 1970). This API uses a promise to return the result.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | Promise used to return a timestamp representing the number of nanoseconds elapsed  since the Unix epoch (January 1, 1970).  The timestamp unit is nanoseconds. |

## getAudioTimestampInfo

```TypeScript
getAudioTimestampInfo(): Promise<AudioTimestampInfo>
```

Obtains the timestamp and position information of an input audio stream. This API obtains the actual recording position (specified by **framePos**) of the audio channel and the timestamp when recording to that position (specified by **timestamp**, in nanoseconds).

**Since:** 19

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioTimestampInfo> | Promise used to return the timestamp and position information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800103 | Operation not permit at current state. |

## getAudioTimestampInfoSync

```TypeScript
getAudioTimestampInfoSync(): AudioTimestampInfo
```

Obtains the timestamp and position information of an input audio stream. This API returns the result synchronously.

**Since:** 19

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| AudioTimestampInfo | Information about the timestamp and position information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800103 | Operation not permit at current state. |

## getAudioTimeSync

```TypeScript
getAudioTimeSync(): long
```

Obtains the timestamp of the current recording position, measured in nanoseconds from the Unix epoch (January 1, 1970). This API returns the result synchronously.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| long | Timestamp. |

## getBufferSize

```TypeScript
getBufferSize(callback: AsyncCallback<long>): void
```

Obtains a reasonable minimum buffer size in bytes for capturing. This API uses an asynchronous callback to return the result.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;long> | Yes | Callback used to return the result. If the operation is successful,  err is undefined and data is the minimum buffer size obtained; otherwise, err is an error  object. The unit is bytes. |

## getBufferSize

```TypeScript
getBufferSize(): Promise<long>
```

Obtains a reasonable minimum buffer size in bytes for capturing. This API uses a promise to return the result.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | Promise used to return the buffer size.  The unit is bytes. |

## getBufferSizeSync

```TypeScript
getBufferSizeSync(): long
```

Obtains a reasonable minimum buffer size in bytes for capturing. This API returns the result synchronously.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| long | Buffer size, in bytes. |

## getCapturerInfo

```TypeScript
getCapturerInfo(callback: AsyncCallback<AudioCapturerInfo>): void
```

Obtains the audio capturer information. This API uses an asynchronous callback to return the result.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AudioCapturerInfo> | Yes | Callback used to return the result. If the operation is  successful, err is undefined and data is the capturer information obtained; otherwise, err is  an error object. |

## getCapturerInfo

```TypeScript
getCapturerInfo(): Promise<AudioCapturerInfo>
```

Obtains the audio capturer information. This API uses a promise to return the result.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioCapturerInfo> | Promise used to return the audio capturer information. |

## getCapturerInfoSync

```TypeScript
getCapturerInfoSync(): AudioCapturerInfo
```

Obtains the audio capturer information. This API returns the result synchronously.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| AudioCapturerInfo | Audio capturer information. |

## getCurrentAudioCapturerChangeInfo

```TypeScript
getCurrentAudioCapturerChangeInfo(): AudioCapturerChangeInfo
```

Obtains the configuration changes of the current audio capturer. This API returns the result synchronously.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Audio.Device

**Return value:**

| Type | Description |
| --- | --- |
| AudioCapturerChangeInfo | Configuration changes of the audio capturer. |

## getCurrentInputDevices

```TypeScript
getCurrentInputDevices(): AudioDeviceDescriptors
```

Obtains the information of the current input devices. This API returns the result synchronously.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Audio.Device

**Return value:**

| Type | Description |
| --- | --- |
| AudioDeviceDescriptors | An array of the audio device descriptors. |

## getNoiseReductionMode

```TypeScript
getNoiseReductionMode(): NoiseReductionMode
```

Gets the noise reduction mode for current audio capturer. The mode will only consider the default and setted status, audio input device and stream concurrency will not be considered.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| NoiseReductionMode | The noise reduction mode for current audio capturer,  the default value is {@link NoiseReductionMode#FIDELITY}. |

## getOverflowCount

```TypeScript
getOverflowCount(): Promise<long>
```

Obtains the number of overflow audio frames in the audio stream that is being captured. This API uses a promise to return the result.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | Promise used to return the number of overflow audio frames. |

## getOverflowCountSync

```TypeScript
getOverflowCountSync(): long
```

Obtains the number of overflow audio frames in the audio stream that is being captured. This API returns the result synchronously.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| long | Number of overflow audio frames. |

## getStreamInfo

```TypeScript
getStreamInfo(callback: AsyncCallback<AudioStreamInfo>): void
```

Obtains the stream information of this audio capturer. This API uses an asynchronous callback to return the result.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AudioStreamInfo> | Yes | Callback used to return the result. If the operation is  successful, err is undefined and data is the stream information obtained; otherwise, err is  an error object. |

## getStreamInfo

```TypeScript
getStreamInfo(): Promise<AudioStreamInfo>
```

Obtains the stream information of this audio capturer. This API uses a promise to return the result.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioStreamInfo> | Promise used to return the stream information. |

## getStreamInfoSync

```TypeScript
getStreamInfoSync(): AudioStreamInfo
```

Obtains the stream information of this audio capturer. This API returns the result synchronously.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| AudioStreamInfo | Stream information. |

## getSupportedNoiseReductionModes

```TypeScript
getSupportedNoiseReductionModes(): Array<NoiseReductionMode>
```

Gets all the supported noise reduction modes for current device platform. Currently the noise reduction effect is only supported when using {@link SourceType#SOURCE_TYPE_VOICE_MESSAGE}, other supported usage may be extened later. The supported modes will only consider the audio format and device platform, audio input device and stream concurrency will not be considered.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;NoiseReductionMode> | The supported noise reduction mode array, at least  {@link NoiseReductionMode#FIDELITY} is supported. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800301 | Audio server process died. |

## off('markReach')

```TypeScript
off(type: 'markReach', callback?: Callback<long>): void
```

Unsubscribes from the mark reached event. This API uses an asynchronous callback to return the result.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'markReach' | Yes | Event type. The event 'markReach' is triggered when the number of frames  captured reaches the value of the frame parameter. |
| callback | Callback&lt;long> | No | Callback used to return the value of the frame parameter. [since 18] |

## off('periodReach')

```TypeScript
off(type: 'periodReach', callback?: Callback<long>): void
```

Unsubscribes from the period reached event. This API uses an asynchronous callback to return the result.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'periodReach' | Yes | Event type. The event 'periodReach' is triggered each time the number of  frames captured reaches the value of the frame parameter. |
| callback | Callback&lt;long> | No | Callback used to return the value of the frame parameter. [since 18] |

## off('stateChange')

```TypeScript
off(type: 'stateChange', callback?: Callback<AudioState>): void
```

Unsubscribes from the audio capturer state change event. This API uses an asynchronous callback to return the result.

**Since:** 18

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'stateChange' | Yes | Event type. The event 'stateChange' is triggered when the listening for audio  capturer state change event is canceled. |
| callback | Callback&lt;AudioState> | No | Callback used to return the audio status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## off

```TypeScript
off(type: 'audioInterrupt'): void
```

Unsubscribes from the audio interruption event.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Interrupt

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioInterrupt' | Yes | Event type. The event 'audioInterrupt' is triggered when the audio focus  is changed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## off('inputDeviceChange')

```TypeScript
off(type: 'inputDeviceChange', callback?: Callback<AudioDeviceDescriptors>): void
```

Unsubscribes from the audio input device change event. This API uses an asynchronous callback to return the result.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'inputDeviceChange' | Yes | Event type. The event 'inputDeviceChange' is triggered when an audio  input device is changed. |
| callback | Callback&lt;AudioDeviceDescriptors> | No | Callback used to return the information about the audio  input device. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## off('audioCapturerChange')

```TypeScript
off(type: 'audioCapturerChange', callback?: Callback<AudioCapturerChangeInfo>): void
```

Unsubscribes from the audio capturer configuration change event. This API uses an asynchronous callback to return the result.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioCapturerChange' | Yes | Event type. The event 'audioCapturerChange' is triggered when the  audio capturer configuration is changed. |
| callback | Callback&lt;AudioCapturerChangeInfo> | No | Callback used for unsubscription. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## off('readData')

```TypeScript
off(type: 'readData', callback?: Callback<ArrayBuffer>): void
```

Unsubscribes from the audio data read event. This API uses an asynchronous callback to return the result.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'readData' | Yes | Event type. The event 'readData' is triggered when audio stream data needs to be  read. |
| callback | Callback&lt;ArrayBuffer> | No | Callback used to return the buffer from which the data is read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## offAudioCapturerChange

```TypeScript
offAudioCapturerChange(callback?: Callback<AudioCapturerChangeInfo>): void
```

Unsubscribes audio capturer info change event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioCapturerChangeInfo> | No | Callback used in subscribe. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## offAudioInterrupt

```TypeScript
offAudioInterrupt(): void
```

UnSubscribes to audio interrupt events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Interrupt

## offInputDeviceChange

```TypeScript
offInputDeviceChange(callback?: Callback<AudioDeviceDescriptors>): void
```

Unsubscribes input device change event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioDeviceDescriptors> | No | Callback used in subscribe. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## offMarkReach

```TypeScript
offMarkReach(callback?: Callback<long>): void
```

Unsubscribes from the mark reached events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;long> | No | Callback invoked when the event is triggered. |

## offPeriodReach

```TypeScript
offPeriodReach(callback?: Callback<long>): void
```

Unsubscribes from period reached events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;long> | No | Callback invoked when the event is triggered. |

## offReadData

```TypeScript
offReadData(callback?: Callback<ArrayBuffer>): void
```

Unsubscribes audio data callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ArrayBuffer> | No | Callback used in subscribe. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## offReadMicInData

```TypeScript
offReadMicInData(callback?: Callback<AudioCapturerMicInData>): void
```

Unsubscribes from micIn audio data callback.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioCapturerMicInData> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Caller is not a system application. |
| 6800101 | Parameter verification failed. |
| 6800103 | Operation not permitted at running state. |

## offStateChange

```TypeScript
offStateChange(callback?: Callback<AudioState>): void
```

Unsubscribes audio state change event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioState> | No | Callback used to listen for the audio state change event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## on('markReach')

```TypeScript
on(type: 'markReach', frame: long, callback: Callback<long>): void
```

Subscribes to the mark reached event, which is triggered (only once) when the number of frames captured reaches the value of the **frame** parameter. This API uses an asynchronous callback to return the result. For example, if **frame** is set to **100**, the callback is invoked when the number of captured frames reaches the 100th frame.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'markReach' | Yes | Event type. The event 'markReach' is triggered when the number of frames  captured reaches the value of the frame parameter. |
| frame | long | Yes | Number of frames to trigger the event. The value must be greater than 0. |
| callback | Callback&lt;long> | Yes | Callback used to return the value of the frame parameter. |

## on('periodReach')

```TypeScript
on(type: 'periodReach', frame: long, callback: Callback<long>): void
```

Subscribes to the period reached event, which is triggered each time the number of frames captured reaches the value of the **frame** parameter. In other words, the information is reported periodically. This API uses an asynchronous callback to return the result. For example, if **frame** is set to **10**, the callback is invoked each time 10 frames are captured, for example , when the number of frames captured reaches the 10th frame, 20th frame, and 30th frame.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'periodReach' | Yes | Event type. The event 'periodReach' is triggered each time the number of  frames captured reaches the value of the frame parameter. |
| frame | long | Yes | Number of frames to trigger the event. The value must be greater than 0. |
| callback | Callback&lt;long> | Yes | Callback used to return the value of the frame parameter. |

## on('stateChange')

```TypeScript
on(type: 'stateChange', callback: Callback<AudioState>): void
```

Subscribes to the audio capturer state change event, which is triggered when the state of the audio capturer is changed. This API uses an asynchronous callback to return the result.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'stateChange' | Yes | Event type. The event 'stateChange' is triggered when the state of the audio  capturer is changed. |
| callback | Callback&lt;AudioState> | Yes | Callback used to return the audio status. |

## on('audioInterrupt')

```TypeScript
on(type: 'audioInterrupt', callback: Callback<InterruptEvent>): void
```

Subscribes to the audio interruption event, which is triggered when the audio focus is changed. This API uses an asynchronous callback to return the result. The AudioCapturer instance proactively gains the focus when the **start** event occurs and releases the focus when the **pause** or **stop** event occurs. Therefore, you do not need to request to gain or release the focus. After this API is called, an [InterruptEvent](arkts-audio-interruptevent-i.md#InterruptEvent) is received when the AudioCapturer instance fails to obtain the focus or an audio interruption event occurs (for example, the audio stream is interrupted by others). It is recommended that the application perform further processing based on the **InterruptEvent** information. For details, see [Introduction to Audio Focus](docroot://media/audio/audio-playback-concurrency.md).

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Interrupt

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioInterrupt' | Yes | Event type. The event 'audioInterrupt' is triggered when the audio focus  is changed. |
| callback | Callback&lt;InterruptEvent> | Yes | Callback used to return the event information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## on('inputDeviceChange')

```TypeScript
on(type: 'inputDeviceChange', callback: Callback<AudioDeviceDescriptors>): void
```

Subscribes to the audio input device change event, which is triggered when an audio input device is changed. This API uses an asynchronous callback to return the result.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'inputDeviceChange' | Yes | Event type. The event 'inputDeviceChange' is triggered when an audio  input device is changed. |
| callback | Callback&lt;AudioDeviceDescriptors> | Yes | Callback used to return the updated information about the  audio input device. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## on('audioCapturerChange')

```TypeScript
on(type: 'audioCapturerChange', callback: Callback<AudioCapturerChangeInfo>): void
```

Subscribes to the audio capturer configuration change event, which is triggered when the audio recording stream status or device is changed. This API uses an asynchronous callback to return the result. The subscription is implemented asynchronously and the callback, which is triggered when the audio capturer configuration changes, may fail to reflect the actual condition.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioCapturerChange' | Yes | Event type. The event 'audioCapturerChange' is triggered when the  audio recording stream status or device is changed. |
| callback | Callback&lt;AudioCapturerChangeInfo> | Yes | Callback used to return the current configuration and  status information of the audio capturer. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## on('readData')

```TypeScript
on(type: 'readData', callback: Callback<ArrayBuffer>): void
```

Subscribes to the audio data read event, which is triggered when audio stream data needs to be read. This API uses an asynchronous callback to return the result. The callback function is used only to read audio data. Do not call AudioCapturer APIs in it. To eliminate power-on noise caused by the microphone hardware design, the first 100 ms of data after recording starts is typically muted.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'readData' | Yes | Event type. The event 'readData' is triggered when audio stream data needs to be  read. |
| callback | Callback&lt;ArrayBuffer> | Yes | Callback used to return the buffer from which the data is read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## onAudioCapturerChange

```TypeScript
onAudioCapturerChange(callback: Callback<AudioCapturerChangeInfo>): void
```

Subscribes audio capturer info change event callback. The event is triggered when input device change for this stream.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioCapturerChangeInfo> | Yes | Callback used to listen device change event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## onAudioInterrupt

```TypeScript
onAudioInterrupt(callback: Callback<InterruptEvent>): void
```

Listens for audio interrupt events. This method uses a callback to get interrupt events. The interrupt event is triggered when audio recording is interrupted.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Interrupt

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;InterruptEvent> | Yes | Callback used to listen for interrupt callback. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## onInputDeviceChange

```TypeScript
onInputDeviceChange(callback: Callback<AudioDeviceDescriptors>): void
```

Subscribes input device change event callback. The event is triggered when input device change for this stream.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioDeviceDescriptors> | Yes | Callback used to listen device change event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## onMarkReach

```TypeScript
onMarkReach(frame: long, callback: Callback<long>): void
```

Subscribes to mark reached events. When the number of frames captured reaches the value of the frame parameter, the callback is invoked.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| frame | long | Yes | Number of frames to trigger the event. The value must be greater than 0. |
| callback | Callback&lt;long> | Yes | Callback invoked when the event is triggered. |

## onPeriodReach

```TypeScript
onPeriodReach(frame: long, callback: Callback<long>): void
```

Subscribes to period reached events. When the period of frame capturing reaches the value of frame parameter, the callback is invoked.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| frame | long | Yes | Period during which frame capturing is listened. The value must be greater than 0. |
| callback | Callback&lt;long> | Yes | Callback invoked when the event is triggered. |

## onReadData

```TypeScript
onReadData(callback: Callback<ArrayBuffer>): void
```

Subscribes audio data callback. The event is triggered when audio buffer is available for reading more data.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ArrayBuffer> | Yes | Callback with the buffer to read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## onReadMicInData

```TypeScript
onReadMicInData(callback: Callback<AudioCapturerMicInData>): void
```

Subscribes to micIn audio data callback. This callback has higher priority than 'readData' callback. If this callback and 'readData' callback are both subscribed, only this callback will be triggered. See {@link #onReadData} for more details. The event is triggered when an audio buffer is available for reading more data.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioCapturerMicInData> | Yes | Callback for the buffers to read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Caller is not a system application. |
| 6800103 | Operation not permitted at running state. |

## onStateChange

```TypeScript
onStateChange(callback: Callback<AudioState>): void
```

Subscribes audio state change event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioState> | Yes | Callback used to listen for the audio state change event. |

## read

```TypeScript
read(size: number, isBlockingRead: boolean, callback: AsyncCallback<ArrayBuffer>): void
```

Reads the buffer from the audio capturer. This method uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 11

**Substitute:** ohos.multimedia.audio.AudioCapturer#event:readData

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | number | Yes | Number of bytes to read. |
| isBlockingRead | boolean | Yes | Whether to block the read operation. true to block, false otherwise. |
| callback | AsyncCallback&lt;ArrayBuffer> | Yes | Callback used to return the result. If the operation is  successful, err is undefined and data is the buffer read; otherwise, err is an error object. |

## read

```TypeScript
read(size: number, isBlockingRead: boolean): Promise<ArrayBuffer>
```

Reads the buffer. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 11

**Substitute:** ohos.multimedia.audio.AudioCapturer#event:readData

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | number | Yes | Number of bytes to read. |
| isBlockingRead | boolean | Yes | Whether to block the read operation. true to block, false otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ArrayBuffer> | Promise used to return the data read from the buffer. |

## release

```TypeScript
release(callback: AsyncCallback<void>): void
```

Releases this audio capturer. This API uses an asynchronous callback to return the result.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

## release

```TypeScript
release(): Promise<void>
```

Releases this audio capturer. This API uses a promise to return the result.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

## requestPlaybackCaptureStart

```TypeScript
requestPlaybackCaptureStart(callback: Callback<PlaybackCaptureStartState>): void
```

Asynchronously request to start the playback capture stream. This function is non-blocking, which means system will continue to process user authorization and stream starting when receiving the start request. And the final result will be returned by callback.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.PlaybackCapture

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;PlaybackCaptureStartState> | Yes | Callback function used to receive the final  result of start request. |

## setIndependentAudioSessionStrategy

```TypeScript
setIndependentAudioSessionStrategy(strategy: AudioSessionStrategy, behavior: int): void
```

Sets the independent audio session strategy and behavior parameters. > **NOTE** > > If this API is called while an audio capturer is running, you must call the > [start](arkts-audio-audiocapturer-i.md#start) API again for > the settings to take effect.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| strategy | AudioSessionStrategy | Yes | Audio session strategy. |
| behavior | int | Yes | Specifies the audio session behavior. This can be a single flag or a bitwise OR  combination of multiple flags. For details about the supported audio session behaviors, see  [AudioSessionBehaviorFlags](arkts-audio-audiosessionbehaviorflags-e.md#AudioSessionBehaviorFlags). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |
| 6800103 | Operation not permit at current state. |

## setInputDeviceToAccessory

```TypeScript
setInputDeviceToAccessory(): void
```

Sets default input device of this Capturer to DEVICE_TYPE_ACCESSORY. Other capturers' devices will not be affected by this method. This method can only be used before the capture stream starts. Besides, if audio accessory is not connected, this method will report fail. After calling this function, the input device of this capturer will not be affected by other interfaces.

**Since:** 19

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Caller is not a system application. |
| 6800103 | Operation not permit at current state. |

## setMuteHint

```TypeScript
setMuteHint(mute: boolean): Promise<void>
```

Set mute hint for this capturer, this method is used as a hint for power optimization it does not mute the recording stream, only affects internal processing strategy.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mute | boolean | Yes | Use true if application recording stream muted by application if self. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800103 | Operation not permitted at current state, stream is not running. |

## setNoiseReductionMode

```TypeScript
setNoiseReductionMode(noiseReductionMode: NoiseReductionMode): void
```

Sets noise reduction mode for current audio capturer. The supported mode should be obtained by {@link #getSupportedNoiseReductionModes}. The actual effect may vary from different audio devices, and will be invalid when there are multiple recording streams running simultaneously. The mode can only be changed in created and stopped state.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| noiseReductionMode | NoiseReductionMode | Yes | The noise reduction mode to set. |

**Error codes:**

| Error Code ID | Error Message |
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

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| muteWhenInterrupted | boolean | Yes | Whether to mute the current audio recording stream during an audio  interruption. true to mute, false otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800103 | Operation not permitted at current state. |

## start

```TypeScript
start(callback: AsyncCallback<void>): void
```

Starts this audio capturer to start capturing audio data. This API uses an asynchronous callback to return the result.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. If the operation fails, an error object with  the following error code is returned: Error code 6800301: indicates abnormal status, focus preemption  failure, and abnormal system processing. For details, see system logs. |

## start

```TypeScript
start(): Promise<void>
```

Starts this audio capturer to start capturing audio data. This API uses a promise to return the result.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise object, which indicates that the capturer is started successfully. If the  operation fails, an error object with the following error code is returned:  Error code 6800301: indicates abnormal status, focus preemption failure, and abnormal system processing. For  details, see system logs. |

## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

Stops this audio capturer, ceasing the input audio stream. This API uses an asynchronous callback to return the result.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

## stop

```TypeScript
stop(): Promise<void>
```

Stops this audio capturer, ceasing the input audio stream. This API uses a promise to return the result.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

## state

```TypeScript
readonly state: AudioState
```

Audio capturer state.

**Type:** AudioState

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

