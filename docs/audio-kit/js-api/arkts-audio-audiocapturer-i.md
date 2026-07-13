# AudioCapturer

This interface provides APIs for audio capture.

Before calling any API in AudioCapturer, you must use
[createAudioCapturer](arkts-audio-createaudiocapturer-f.md#createaudiocapturer-1)
to create an AudioCapturer instance.

> **NOTE**
>
> - The initial APIs of this interface are supported since API version 8.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

## Modules to Import

```TypeScript
import { audio } from '@kit.AudioKit';
```

## getAudioStreamId

```TypeScript
getAudioStreamId(callback: AsyncCallback<number>): void
```

Obtains the stream ID of this audio capturer. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is the stream ID obtained; otherwise, **err** is an error object. |

## getAudioStreamId

```TypeScript
getAudioStreamId(): Promise<number>
```

Obtains the stream ID of this audio capturer. This API uses a promise to return the result.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the stream ID. |

## getAudioStreamIdSync

```TypeScript
getAudioStreamIdSync(): number
```

Obtains the stream ID of this audio capturer. This API returns the result synchronously.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| number | Stream ID. |

## getAudioTime

```TypeScript
getAudioTime(callback: AsyncCallback<number>): void
```

Obtains the timestamp of the current recording position, measured in nanoseconds from the Unix epoch (January 1,
1970). This API uses an asynchronous callback to return the result.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is the number of nanoseconds obtained; otherwise, **err** is an errorobject. |

## getAudioTime

```TypeScript
getAudioTime(): Promise<number>
```

Obtains the timestamp of the current recording position, measured in nanoseconds from the Unix epoch (January 1,
1970). This API uses a promise to return the result.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return a timestamp representing the number of nanoseconds elapsedsince the Unix epoch (January 1, 1970).<br>The timestamp unit is nanoseconds. |

## getAudioTimeSync

```TypeScript
getAudioTimeSync(): number
```

Obtains the timestamp of the current recording position, measured in nanoseconds from the Unix epoch (January 1,
1970). This API returns the result synchronously.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| number | Timestamp. |

## getAudioTimestampInfo

```TypeScript
getAudioTimestampInfo(): Promise<AudioTimestampInfo>
```

Obtains the timestamp and position information of an input audio stream.

This API obtains the actual recording position (specified by **framePos**) of the audio channel and the timestamp
when recording to that position (specified by **timestamp**, in nanoseconds).

**Since:** 19

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioTimestampInfo&gt; | Promise used to return the timestamp and position information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800103](../errorcode-audio.md#6800103-unsupported-state) | Operation not permit at current state. |

## getAudioTimestampInfoSync

```TypeScript
getAudioTimestampInfoSync(): AudioTimestampInfo
```

Obtains the timestamp and position information of an input audio stream. This API returns the result
synchronously.

**Since:** 19

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| AudioTimestampInfo | Information about the timestamp and position information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800103](../errorcode-audio.md#6800103-unsupported-state) | Operation not permit at current state. |

## getBufferSize

```TypeScript
getBufferSize(callback: AsyncCallback<number>): void
```

Obtains a reasonable minimum buffer size in bytes for capturing. This API uses an asynchronous callback to return
the result.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is the minimum buffer size obtained; otherwise, **err** is an errorobject.<br>The unit is bytes. |

## getBufferSize

```TypeScript
getBufferSize(): Promise<number>
```

Obtains a reasonable minimum buffer size in bytes for capturing. This API uses a promise to return the result.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the buffer size.<br>The unit is bytes. |

## getBufferSizeSync

```TypeScript
getBufferSizeSync(): number
```

Obtains a reasonable minimum buffer size in bytes for capturing. This API returns the result synchronously.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| number | Buffer size, in bytes. |

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
| callback | AsyncCallback&lt;AudioCapturerInfo&gt; | Yes | Callback used to return the result. If the operation issuccessful, **err** is **undefined** and **data** is the capturer information obtained; otherwise, **err** isan error object. |

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
| Promise&lt;AudioCapturerInfo&gt; | Promise used to return the audio capturer information. |

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

Gets the noise reduction mode for current audio capturer.
The mode will only consider the default and setted status, audio input device and stream concurrency will
not be considered.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| NoiseReductionMode | The noise reduction mode for current audio capturer,the default value is {@link NoiseReductionMode#FIDELITY}. |

## getOverflowCount

```TypeScript
getOverflowCount(): Promise<number>
```

Obtains the number of overflow audio frames in the audio stream that is being captured. This API uses a promise
to return the result.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the number of overflow audio frames. |

## getOverflowCountSync

```TypeScript
getOverflowCountSync(): number
```

Obtains the number of overflow audio frames in the audio stream that is being captured. This API returns the
result synchronously.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| number | Number of overflow audio frames. |

## getStreamInfo

```TypeScript
getStreamInfo(callback: AsyncCallback<AudioStreamInfo>): void
```

Obtains the stream information of this audio capturer. This API uses an asynchronous callback to return the
result.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AudioStreamInfo&gt; | Yes | Callback used to return the result. If the operation issuccessful, **err** is **undefined** and **data** is the stream information obtained; otherwise, **err** isan error object. |

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
| Promise&lt;AudioStreamInfo&gt; | Promise used to return the stream information. |

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

Gets all the supported noise reduction modes for current device platform.
Currently the noise reduction effect is only supported when using
{@link SourceType#SOURCE_TYPE_VOICE_MESSAGE}, other supported usage may be extened later.
The supported modes will only consider the audio format and device platform,
audio input device and stream concurrency will not be considered.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;NoiseReductionMode&gt; | The supported noise reduction mode array, at least{@link NoiseReductionMode#FIDELITY} is supported. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800301](../errorcode-audio.md#6800301-system-error) | Audio server process died. |

## off('markReach')

```TypeScript
off(type: 'markReach', callback?: Callback<number>): void
```

Unsubscribes from the mark reached event. This API uses an asynchronous callback to return the result.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'markReach' | Yes | Event type. The event **'markReach'** is triggered when the number of framescaptured reaches the value of the **frame** parameter. |
| callback | Callback&lt;number&gt; | No | Callback used to return the value of the **frame** parameter.<br>**Since:** 18 |

## off('periodReach')

```TypeScript
off(type: 'periodReach', callback?: Callback<number>): void
```

Unsubscribes from the period reached event. This API uses an asynchronous callback to return the result.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'periodReach' | Yes | Event type. The event **'periodReach'** is triggered each time the number offrames captured reaches the value of the **frame** parameter. |
| callback | Callback&lt;number&gt; | No | Callback used to return the value of the **frame** parameter.<br>**Since:** 18 |

## off('stateChange')

```TypeScript
off(type: 'stateChange', callback?: Callback<AudioState>): void
```

Unsubscribes from the audio capturer state change event. This API uses an asynchronous callback to return the
result.

**Since:** 18

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'stateChange' | Yes | Event type. The event **'stateChange'** is triggered when the listening for audiocapturer state change event is canceled. |
| callback | Callback&lt;AudioState&gt; | No | Callback used to return the audio status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

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
| type | 'audioInterrupt' | Yes | Event type. The event **'audioInterrupt'** is triggered when the audio focusis changed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## off('inputDeviceChange')

```TypeScript
off(type: 'inputDeviceChange', callback?: Callback<AudioDeviceDescriptors>): void
```

Unsubscribes from the audio input device change event. This API uses an asynchronous callback to return the
result.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'inputDeviceChange' | Yes | Event type. The event **'inputDeviceChange'** is triggered when an audioinput device is changed. |
| callback | Callback&lt;AudioDeviceDescriptors&gt; | No | Callback used to return the information about the audioinput device. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## off('audioCapturerChange')

```TypeScript
off(type: 'audioCapturerChange', callback?: Callback<AudioCapturerChangeInfo>): void
```

Unsubscribes from the audio capturer configuration change event. This API uses an asynchronous callback to return
the result.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioCapturerChange' | Yes | Event type. The event **'audioCapturerChange'** is triggered when theaudio capturer configuration is changed. |
| callback | Callback&lt;AudioCapturerChangeInfo&gt; | No | Callback used for unsubscription. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

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
| type | 'readData' | Yes | Event type. The event **'readData'** is triggered when audio stream data needs to beread. |
| callback | Callback&lt;ArrayBuffer&gt; | No | Callback used to return the buffer from which the data is read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## on('markReach')

```TypeScript
on(type: 'markReach', frame: number, callback: Callback<number>): void
```

Subscribes to the mark reached event, which is triggered (only once) when the number of frames captured reaches
the value of the **frame** parameter. This API uses an asynchronous callback to return the result.

For example, if **frame** is set to **100**, the callback is invoked when the number of captured frames reaches
the 100th frame.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'markReach' | Yes | Event type. The event **'markReach'** is triggered when the number of framescaptured reaches the value of the **frame** parameter. |
| frame | number | Yes | Number of frames to trigger the event. The value must be greater than **0**. |
| callback | Callback&lt;number&gt; | Yes | Callback used to return the value of the **frame** parameter. |

## on('periodReach')

```TypeScript
on(type: 'periodReach', frame: number, callback: Callback<number>): void
```

Subscribes to the period reached event, which is triggered each time the number of frames captured reaches the
value of the **frame** parameter. In other words, the information is reported periodically. This API uses an
asynchronous callback to return the result.

For example, if **frame** is set to **10**, the callback is invoked each time 10 frames are captured, for example
, when the number of frames captured reaches the 10th frame, 20th frame, and 30th frame.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'periodReach' | Yes | Event type. The event **'periodReach'** is triggered each time the number offrames captured reaches the value of the **frame** parameter. |
| frame | number | Yes | Number of frames to trigger the event. The value must be greater than **0**. |
| callback | Callback&lt;number&gt; | Yes | Callback used to return the value of the **frame** parameter. |

## on('stateChange')

```TypeScript
on(type: 'stateChange', callback: Callback<AudioState>): void
```

Subscribes to the audio capturer state change event, which is triggered when the state of the audio capturer is
changed. This API uses an asynchronous callback to return the result.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'stateChange' | Yes | Event type. The event **'stateChange'** is triggered when the state of the audiocapturer is changed. |
| callback | Callback&lt;AudioState&gt; | Yes | Callback used to return the audio status. |

## on('audioInterrupt')

```TypeScript
on(type: 'audioInterrupt', callback: Callback<InterruptEvent>): void
```

Subscribes to the audio interruption event, which is triggered when the audio focus is changed. This API uses an
asynchronous callback to return the result.

The AudioCapturer instance proactively gains the focus when the **start** event occurs and releases the focus
when the **pause** or **stop** event occurs. Therefore, you do not need to request to gain or release the focus.

After this API is called, an [InterruptEvent](arkts-audio-interruptevent-i.md) is received when
the AudioCapturer instance fails to obtain the focus or an audio interruption event occurs (for example, the
audio stream is interrupted by others). It is recommended that the application perform further processing based
on the **InterruptEvent** information. For details, see
[Introduction to Audio Focus](../../../../media/audio/audio-playback-concurrency.md).

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Interrupt

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioInterrupt' | Yes | Event type. The event **'audioInterrupt'** is triggered when the audio focusis changed. |
| callback | Callback&lt;InterruptEvent&gt; | Yes | Callback used to return the event information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## on('inputDeviceChange')

```TypeScript
on(type: 'inputDeviceChange', callback: Callback<AudioDeviceDescriptors>): void
```

Subscribes to the audio input device change event, which is triggered when an audio input device is changed. This
API uses an asynchronous callback to return the result.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'inputDeviceChange' | Yes | Event type. The event **'inputDeviceChange'** is triggered when an audioinput device is changed. |
| callback | Callback&lt;AudioDeviceDescriptors&gt; | Yes | Callback used to return the updated information about theaudio input device. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## on('audioCapturerChange')

```TypeScript
on(type: 'audioCapturerChange', callback: Callback<AudioCapturerChangeInfo>): void
```

Subscribes to the audio capturer configuration change event, which is triggered when the audio recording stream
status or device is changed. This API uses an asynchronous callback to return the result. The subscription is
implemented asynchronously and the callback, which is triggered when the audio capturer configuration changes,
may fail to reflect the actual condition.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioCapturerChange' | Yes | Event type. The event **'audioCapturerChange'** is triggered when theaudio recording stream status or device is changed. |
| callback | Callback&lt;AudioCapturerChangeInfo&gt; | Yes | Callback used to return the current configuration andstatus information of the audio capturer. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## on('readData')

```TypeScript
on(type: 'readData', callback: Callback<ArrayBuffer>): void
```

Subscribes to the audio data read event, which is triggered when audio stream data needs to be read. This API
uses an asynchronous callback to return the result.

The callback function is used only to read audio data. Do not call AudioCapturer APIs in it.

To eliminate power-on noise caused by the microphone hardware design, the first 100 ms of data after recording
starts is typically muted.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'readData' | Yes | Event type. The event **'readData'** is triggered when audio stream data needs to beread. |
| callback | Callback&lt;ArrayBuffer&gt; | Yes | Callback used to return the buffer from which the data is read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## read

```TypeScript
read(size: number, isBlockingRead: boolean, callback: AsyncCallback<ArrayBuffer>): void
```

Reads the buffer from the audio capturer. This method uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 11

**Substitutes:** event:readData

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | number | Yes | Number of bytes to read. |
| isBlockingRead | boolean | Yes | Whether to block the read operation. **true** to block, **false** otherwise. |
| callback | AsyncCallback&lt;ArrayBuffer&gt; | Yes | Callback used to return the result. If the operation issuccessful, **err** is **undefined** and **data** is the buffer read; otherwise, **err** is an error object. |

## read

```TypeScript
read(size: number, isBlockingRead: boolean): Promise<ArrayBuffer>
```

Reads the buffer. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 11

**Substitutes:** event:readData

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | number | Yes | Number of bytes to read. |
| isBlockingRead | boolean | Yes | Whether to block the read operation. **true** to block, **false** otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ArrayBuffer&gt; | Promise used to return the data read from the buffer. |

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
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

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
| Promise&lt;void&gt; | Promise that returns no value. |

## requestPlaybackCaptureStart

```TypeScript
requestPlaybackCaptureStart(callback: Callback<PlaybackCaptureStartState>): void
```

Asynchronously request to start the playback capture stream.
This function is non-blocking, which means system will continue to process user authorization and
stream starting when receiving the start request. And the final result will be returned by callback.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Audio.PlaybackCapture

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;PlaybackCaptureStartState&gt; | Yes | Callback function used to receive the finalresult of start request. |

## setIndependentAudioSessionStrategy

```TypeScript
setIndependentAudioSessionStrategy(strategy: AudioSessionStrategy, behavior: number): void
```

Sets the independent audio session strategy and behavior parameters.

> **NOTE**
>
> If this API is called while an audio capturer is running, you must call the
> [start](arkts-audio-audiocapturer-i.md#start-1) API again for
> the settings to take effect.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| strategy | AudioSessionStrategy | Yes | Audio session strategy. |
| behavior | number | Yes | Specifies the audio session behavior.<br>This can be a single flag or a bitwise ORcombination of multiple flags.<br>For details about the supported audio session behaviors, see[AudioSessionBehaviorFlags](arkts-audio-audiosessionbehaviorflags-e.md). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |
| [6800103](../errorcode-audio.md#6800103-unsupported-state) | Operation not permit at current state. |

## setMuteHint

```TypeScript
setMuteHint(mute: boolean): Promise<void>
```

Set mute hint for this capturer, this method is used as a hint for power optimization
it does not mute the recording stream, only affects internal processing strategy.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mute | boolean | Yes | Use true if application recording stream muted by application if self. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800103](../errorcode-audio.md#6800103-unsupported-state) | Operation not permitted at current state, stream is not running. |

## setNoiseReductionMode

```TypeScript
setNoiseReductionMode(noiseReductionMode: NoiseReductionMode): void
```

Sets noise reduction mode for current audio capturer.
The supported mode should be obtained by {@link #getSupportedNoiseReductionModes}.
The actual effect may vary from different audio devices, and will be invalid when there are multiple
recording streams running simultaneously.
The mode can only be changed in created and stopped state.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| noiseReductionMode | NoiseReductionMode | Yes | The noise reduction mode to set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |
| [6800103](../errorcode-audio.md#6800103-unsupported-state) | Illegal state, audio capturer is in running or released state. |
| [6800104](../errorcode-audio.md#6800104-unsupported-parameter-value) | The setted mode is not supported. |
| [6800301](../errorcode-audio.md#6800301-system-error) | Audio server process died. |

## setWillMuteWhenInterrupted

```TypeScript
setWillMuteWhenInterrupted(muteWhenInterrupted: boolean): Promise<void>
```

Sets whether to
[mute the current audio recording stream when an audio interruption occurs](../../../../media/audio/using-audiocapturer-for-recording.md#setting-the-mute-interruption-mode)
. This API uses a promise to return the result.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| muteWhenInterrupted | boolean | Yes | Whether to mute the current audio recording stream during an audiointerruption. **true** to mute, **false** otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800103](../errorcode-audio.md#6800103-unsupported-state) | Operation not permitted at current state. |

## start

```TypeScript
start(callback: AsyncCallback<void>): void
```

Starts this audio capturer to start capturing audio data. This API uses an asynchronous callback to return the
result.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. If the operation fails, an error object withthe following error code is returned:<br>Error code 6800301: indicates abnormal status, focus preemptionfailure, and abnormal system processing. For details, see system logs. |

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
| Promise&lt;void&gt; | Promise object, which indicates that the capturer is started successfully. If theoperation fails, an error object with the following error code is returned:<br>Error code 6800301: indicates abnormal status, focus preemption failure, and abnormal system processing. Fordetails, see system logs. |

## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

Stops this audio capturer, ceasing the input audio stream. This API uses an asynchronous callback to return the
result.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

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
| Promise&lt;void&gt; | Promise that returns no value. |

## state

```TypeScript
readonly state: AudioState
```

Audio capturer state.

**Type:** AudioState

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

