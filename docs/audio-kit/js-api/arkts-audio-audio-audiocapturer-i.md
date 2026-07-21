# AudioCapturer

This interface provides APIs for audio capture.

Before calling any API in AudioCapturer, you must use [createAudioCapturer](arkts-audio-audio-createaudiocapturer-f.md#createaudiocapturer-1)to create an AudioCapturer instance.

> **NOTE**  
>  
> - The initial APIs of this interface are supported since API version 8.

**Since:** 8

<!--Device-audio-interface AudioCapturer--><!--Device-audio-interface AudioCapturer-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

## Modules to Import

```TypeScript
import { audio } from '@kit.AudioKit';
```

<a id="getaudiostreamid"></a>
## getAudioStreamId

```TypeScript
getAudioStreamId(callback: AsyncCallback<number>): void
```

Obtains the stream ID of this audio capturer. This API uses an asynchronous callback to return the result.

**Since:** 9

<!--Device-AudioCapturer-getAudioStreamId(callback: AsyncCallback<long>): void--><!--Device-AudioCapturer-getAudioStreamId(callback: AsyncCallback<long>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is the stream ID obtained; otherwise, **err** is an error object. |

<a id="getaudiostreamid-1"></a>
## getAudioStreamId

```TypeScript
getAudioStreamId(): Promise<number>
```

Obtains the stream ID of this audio capturer. This API uses a promise to return the result.

**Since:** 9

<!--Device-AudioCapturer-getAudioStreamId(): Promise<long>--><!--Device-AudioCapturer-getAudioStreamId(): Promise<long>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the stream ID. |

<a id="getaudiostreamidsync"></a>
## getAudioStreamIdSync

```TypeScript
getAudioStreamIdSync(): number
```

Obtains the stream ID of this audio capturer. This API returns the result synchronously.

**Since:** 10

<!--Device-AudioCapturer-getAudioStreamIdSync(): long--><!--Device-AudioCapturer-getAudioStreamIdSync(): long-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| number | Stream ID. |

<a id="getaudiotime"></a>
## getAudioTime

```TypeScript
getAudioTime(callback: AsyncCallback<number>): void
```

Obtains the timestamp of the current recording position, measured in nanoseconds from the Unix epoch (January 1,1970). This API uses an asynchronous callback to return the result.

**Since:** 8

<!--Device-AudioCapturer-getAudioTime(callback: AsyncCallback<long>): void--><!--Device-AudioCapturer-getAudioTime(callback: AsyncCallback<long>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is the number of nanoseconds obtained; otherwise, **err** is an error object. |

<a id="getaudiotime-1"></a>
## getAudioTime

```TypeScript
getAudioTime(): Promise<number>
```

Obtains the timestamp of the current recording position, measured in nanoseconds from the Unix epoch (January 1,1970). This API uses a promise to return the result.

**Since:** 8

<!--Device-AudioCapturer-getAudioTime(): Promise<long>--><!--Device-AudioCapturer-getAudioTime(): Promise<long>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return a timestamp representing the number of nanoseconds elapsed since the Unix epoch (January 1, 1970).<br>The timestamp unit is nanoseconds. |

<a id="getaudiotimesync"></a>
## getAudioTimeSync

```TypeScript
getAudioTimeSync(): number
```

Obtains the timestamp of the current recording position, measured in nanoseconds from the Unix epoch (January 1,1970). This API returns the result synchronously.

**Since:** 10

<!--Device-AudioCapturer-getAudioTimeSync(): long--><!--Device-AudioCapturer-getAudioTimeSync(): long-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| number | Timestamp. |

<a id="getaudiotimestampinfo"></a>
## getAudioTimestampInfo

```TypeScript
getAudioTimestampInfo(): Promise<AudioTimestampInfo>
```

Obtains the timestamp and position information of an input audio stream.

This API obtains the actual recording position (specified by **framePos**) of the audio channel and the timestamp when recording to that position (specified by **timestamp**, in nanoseconds).

**Since:** 19

<!--Device-AudioCapturer-getAudioTimestampInfo(): Promise<AudioTimestampInfo>--><!--Device-AudioCapturer-getAudioTimestampInfo(): Promise<AudioTimestampInfo>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioTimestampInfo&gt; | Promise used to return the timestamp and position information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800103](../errorcode-audio.md#6800103-unsupported-state) | Operation not permit at current state. |

<a id="getaudiotimestampinfosync"></a>
## getAudioTimestampInfoSync

```TypeScript
getAudioTimestampInfoSync(): AudioTimestampInfo
```

Obtains the timestamp and position information of an input audio stream. This API returns the result synchronously.

**Since:** 19

<!--Device-AudioCapturer-getAudioTimestampInfoSync(): AudioTimestampInfo--><!--Device-AudioCapturer-getAudioTimestampInfoSync(): AudioTimestampInfo-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| [AudioTimestampInfo](arkts-audio-audio-audiotimestampinfo-i.md) | Information about the timestamp and position information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800103](../errorcode-audio.md#6800103-unsupported-state) | Operation not permit at current state. |

<a id="getbuffersize"></a>
## getBufferSize

```TypeScript
getBufferSize(callback: AsyncCallback<number>): void
```

Obtains a reasonable minimum buffer size in bytes for capturing. This API uses an asynchronous callback to return the result.

**Since:** 8

<!--Device-AudioCapturer-getBufferSize(callback: AsyncCallback<long>): void--><!--Device-AudioCapturer-getBufferSize(callback: AsyncCallback<long>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is the minimum buffer size obtained; otherwise, **err** is an error object.<br>The unit is bytes. |

<a id="getbuffersize-1"></a>
## getBufferSize

```TypeScript
getBufferSize(): Promise<number>
```

Obtains a reasonable minimum buffer size in bytes for capturing. This API uses a promise to return the result.

**Since:** 8

<!--Device-AudioCapturer-getBufferSize(): Promise<long>--><!--Device-AudioCapturer-getBufferSize(): Promise<long>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the buffer size.<br>The unit is bytes. |

<a id="getbuffersizesync"></a>
## getBufferSizeSync

```TypeScript
getBufferSizeSync(): number
```

Obtains a reasonable minimum buffer size in bytes for capturing. This API returns the result synchronously.

**Since:** 10

<!--Device-AudioCapturer-getBufferSizeSync(): long--><!--Device-AudioCapturer-getBufferSizeSync(): long-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| number | Buffer size, in bytes. |

<a id="getcapturerinfo"></a>
## getCapturerInfo

```TypeScript
getCapturerInfo(callback: AsyncCallback<AudioCapturerInfo>): void
```

Obtains the audio capturer information. This API uses an asynchronous callback to return the result.

**Since:** 8

<!--Device-AudioCapturer-getCapturerInfo(callback: AsyncCallback<AudioCapturerInfo>): void--><!--Device-AudioCapturer-getCapturerInfo(callback: AsyncCallback<AudioCapturerInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;AudioCapturerInfo&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is **undefined** and **data** is the capturer information obtained; otherwise, **err** is an error object. |

<a id="getcapturerinfo-1"></a>
## getCapturerInfo

```TypeScript
getCapturerInfo(): Promise<AudioCapturerInfo>
```

Obtains the audio capturer information. This API uses a promise to return the result.

**Since:** 8

<!--Device-AudioCapturer-getCapturerInfo(): Promise<AudioCapturerInfo>--><!--Device-AudioCapturer-getCapturerInfo(): Promise<AudioCapturerInfo>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioCapturerInfo&gt; | Promise used to return the audio capturer information. |

<a id="getcapturerinfosync"></a>
## getCapturerInfoSync

```TypeScript
getCapturerInfoSync(): AudioCapturerInfo
```

Obtains the audio capturer information. This API returns the result synchronously.

**Since:** 10

<!--Device-AudioCapturer-getCapturerInfoSync(): AudioCapturerInfo--><!--Device-AudioCapturer-getCapturerInfoSync(): AudioCapturerInfo-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| [AudioCapturerInfo](arkts-audio-audio-audiocapturerinfo-i.md) | Audio capturer information. |

<a id="getcurrentaudiocapturerchangeinfo"></a>
## getCurrentAudioCapturerChangeInfo

```TypeScript
getCurrentAudioCapturerChangeInfo(): AudioCapturerChangeInfo
```

Obtains the configuration changes of the current audio capturer. This API returns the result synchronously.

**Since:** 11

<!--Device-AudioCapturer-getCurrentAudioCapturerChangeInfo(): AudioCapturerChangeInfo--><!--Device-AudioCapturer-getCurrentAudioCapturerChangeInfo(): AudioCapturerChangeInfo-End-->

**System capability:** SystemCapability.Multimedia.Audio.Device

**Return value:**

| Type | Description |
| --- | --- |
| [AudioCapturerChangeInfo](arkts-audio-audio-audiocapturerchangeinfo-i.md) | Configuration changes of the audio capturer. |

<a id="getcurrentinputdevices"></a>
## getCurrentInputDevices

```TypeScript
getCurrentInputDevices(): AudioDeviceDescriptors
```

Obtains the information of the current input devices. This API returns the result synchronously.

**Since:** 11

<!--Device-AudioCapturer-getCurrentInputDevices(): AudioDeviceDescriptors--><!--Device-AudioCapturer-getCurrentInputDevices(): AudioDeviceDescriptors-End-->

**System capability:** SystemCapability.Multimedia.Audio.Device

**Return value:**

| Type | Description |
| --- | --- |
| [AudioDeviceDescriptors](arkts-audio-audio-audiodevicedescriptors-t.md) | An array of the audio device descriptors. |

<a id="getnoisereductionmode"></a>
## getNoiseReductionMode

```TypeScript
getNoiseReductionMode(): NoiseReductionMode
```

Gets the noise reduction mode for current audio capturer.The mode will only consider the default and setted status, audio input device and stream concurrency will not be considered.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AudioCapturer-getNoiseReductionMode(): NoiseReductionMode--><!--Device-AudioCapturer-getNoiseReductionMode(): NoiseReductionMode-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| [NoiseReductionMode](arkts-audio-audio-noisereductionmode-e.md) | The noise reduction mode for current audio capturer,the default value is {@link NoiseReductionMode#FIDELITY}. |

<a id="getoverflowcount"></a>
## getOverflowCount

```TypeScript
getOverflowCount(): Promise<number>
```

Obtains the number of overflow audio frames in the audio stream that is being captured. This API uses a promise to return the result.

**Since:** 12

<!--Device-AudioCapturer-getOverflowCount(): Promise<long>--><!--Device-AudioCapturer-getOverflowCount(): Promise<long>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the number of overflow audio frames. |

<a id="getoverflowcountsync"></a>
## getOverflowCountSync

```TypeScript
getOverflowCountSync(): number
```

Obtains the number of overflow audio frames in the audio stream that is being captured. This API returns the result synchronously.

**Since:** 12

<!--Device-AudioCapturer-getOverflowCountSync(): long--><!--Device-AudioCapturer-getOverflowCountSync(): long-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| number | Number of overflow audio frames. |

<a id="getstreaminfo"></a>
## getStreamInfo

```TypeScript
getStreamInfo(callback: AsyncCallback<AudioStreamInfo>): void
```

Obtains the stream information of this audio capturer. This API uses an asynchronous callback to return the result.

**Since:** 8

<!--Device-AudioCapturer-getStreamInfo(callback: AsyncCallback<AudioStreamInfo>): void--><!--Device-AudioCapturer-getStreamInfo(callback: AsyncCallback<AudioStreamInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;AudioStreamInfo&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is **undefined** and **data** is the stream information obtained; otherwise, **err** is an error object. |

<a id="getstreaminfo-1"></a>
## getStreamInfo

```TypeScript
getStreamInfo(): Promise<AudioStreamInfo>
```

Obtains the stream information of this audio capturer. This API uses a promise to return the result.

**Since:** 8

<!--Device-AudioCapturer-getStreamInfo(): Promise<AudioStreamInfo>--><!--Device-AudioCapturer-getStreamInfo(): Promise<AudioStreamInfo>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioStreamInfo&gt; | Promise used to return the stream information. |

<a id="getstreaminfosync"></a>
## getStreamInfoSync

```TypeScript
getStreamInfoSync(): AudioStreamInfo
```

Obtains the stream information of this audio capturer. This API returns the result synchronously.

**Since:** 10

<!--Device-AudioCapturer-getStreamInfoSync(): AudioStreamInfo--><!--Device-AudioCapturer-getStreamInfoSync(): AudioStreamInfo-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| [AudioStreamInfo](arkts-audio-audio-audiostreaminfo-i.md) | Stream information. |

<a id="getsupportednoisereductionmodes"></a>
## getSupportedNoiseReductionModes

```TypeScript
getSupportedNoiseReductionModes(): Array<NoiseReductionMode>
```

Gets all the supported noise reduction modes for current device platform.Currently the noise reduction effect is only supported when using{@link SourceType#SOURCE_TYPE_VOICE_MESSAGE}, other supported usage may be extened later.The supported modes will only consider the audio format and device platform,audio input device and stream concurrency will not be considered.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AudioCapturer-getSupportedNoiseReductionModes(): Array<NoiseReductionMode>--><!--Device-AudioCapturer-getSupportedNoiseReductionModes(): Array<NoiseReductionMode>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;NoiseReductionMode&gt; | The supported noise reduction mode array, at least{@link NoiseReductionMode#FIDELITY} is supported. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800301](../errorcode-audio.md#6800301-system-error) | Audio server process died. |

<a id="off"></a>
## off('markReach')

```TypeScript
off(type: 'markReach', callback?: Callback<number>): void
```

Unsubscribes from the mark reached event. This API uses an asynchronous callback to return the result.

**Since:** 8

<!--Device-AudioCapturer-off(type: 'markReach', callback?: Callback<long>): void--><!--Device-AudioCapturer-off(type: 'markReach', callback?: Callback<long>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'markReach' | Yes | Event type. The event **'markReach'** is triggered when the number of frames captured reaches the value of the **frame** parameter. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;number&gt; | No | Callback used to return the value of the **frame** parameter.<br>**Since:** 18 |

<a id="off-1"></a>
## off('periodReach')

```TypeScript
off(type: 'periodReach', callback?: Callback<number>): void
```

Unsubscribes from the period reached event. This API uses an asynchronous callback to return the result.

**Since:** 8

<!--Device-AudioCapturer-off(type: 'periodReach', callback?: Callback<long>): void--><!--Device-AudioCapturer-off(type: 'periodReach', callback?: Callback<long>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'periodReach' | Yes | Event type. The event **'periodReach'** is triggered each time the number of frames captured reaches the value of the **frame** parameter. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;number&gt; | No | Callback used to return the value of the **frame** parameter.<br>**Since:** 18 |

<a id="off-2"></a>
## off('stateChange')

```TypeScript
off(type: 'stateChange', callback?: Callback<AudioState>): void
```

Unsubscribes from the audio capturer state change event. This API uses an asynchronous callback to return the result.

**Since:** 18

<!--Device-AudioCapturer-off(type: 'stateChange', callback?: Callback<AudioState>): void--><!--Device-AudioCapturer-off(type: 'stateChange', callback?: Callback<AudioState>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'stateChange' | Yes | Event type. The event **'stateChange'** is triggered when the listening for audio capturer state change event is canceled. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;AudioState&gt; | No | Callback used to return the audio status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

<a id="off-3"></a>
## off

```TypeScript
off(type: 'audioInterrupt'): void
```

Unsubscribes from the audio interruption event.

**Since:** 10

<!--Device-AudioCapturer-off(type: 'audioInterrupt'): void--><!--Device-AudioCapturer-off(type: 'audioInterrupt'): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Interrupt

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioInterrupt' | Yes | Event type. The event **'audioInterrupt'** is triggered when the audio focus is changed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

<a id="off-4"></a>
## off('inputDeviceChange')

```TypeScript
off(type: 'inputDeviceChange', callback?: Callback<AudioDeviceDescriptors>): void
```

Unsubscribes from the audio input device change event. This API uses an asynchronous callback to return the result.

**Since:** 11

<!--Device-AudioCapturer-off(type: 'inputDeviceChange', callback?: Callback<AudioDeviceDescriptors>): void--><!--Device-AudioCapturer-off(type: 'inputDeviceChange', callback?: Callback<AudioDeviceDescriptors>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'inputDeviceChange' | Yes | Event type. The event **'inputDeviceChange'** is triggered when an audio input device is changed. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;AudioDeviceDescriptors&gt; | No | Callback used to return the information about the audio input device. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

<a id="off-5"></a>
## off('audioCapturerChange')

```TypeScript
off(type: 'audioCapturerChange', callback?: Callback<AudioCapturerChangeInfo>): void
```

Unsubscribes from the audio capturer configuration change event. This API uses an asynchronous callback to return the result.

**Since:** 11

<!--Device-AudioCapturer-off(type: 'audioCapturerChange', callback?: Callback<AudioCapturerChangeInfo>): void--><!--Device-AudioCapturer-off(type: 'audioCapturerChange', callback?: Callback<AudioCapturerChangeInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioCapturerChange' | Yes | Event type. The event **'audioCapturerChange'** is triggered when the audio capturer configuration is changed. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;AudioCapturerChangeInfo&gt; | No | Callback used for unsubscription. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

<a id="off-6"></a>
## off('readData')

```TypeScript
off(type: 'readData', callback?: Callback<ArrayBuffer>): void
```

Unsubscribes from the audio data read event. This API uses an asynchronous callback to return the result.

**Since:** 11

<!--Device-AudioCapturer-off(type: 'readData', callback?: Callback<ArrayBuffer>): void--><!--Device-AudioCapturer-off(type: 'readData', callback?: Callback<ArrayBuffer>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'readData' | Yes | Event type. The event **'readData'** is triggered when audio stream data needs to be read. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;ArrayBuffer&gt; | No | Callback used to return the buffer from which the data is read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

<a id="on"></a>
## on('markReach')

```TypeScript
on(type: 'markReach', frame: number, callback: Callback<number>): void
```

Subscribes to the mark reached event, which is triggered (only once) when the number of frames captured reaches the value of the **frame** parameter. This API uses an asynchronous callback to return the result.

For example, if **frame** is set to **100**, the callback is invoked when the number of captured frames reaches the 100th frame.

**Since:** 8

<!--Device-AudioCapturer-on(type: 'markReach', frame: long, callback: Callback<long>): void--><!--Device-AudioCapturer-on(type: 'markReach', frame: long, callback: Callback<long>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'markReach' | Yes | Event type. The event **'markReach'** is triggered when the number of frames captured reaches the value of the **frame** parameter. |
| frame | number | Yes | Number of frames to trigger the event. The value must be greater than **0**. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;number&gt; | Yes | Callback used to return the value of the **frame** parameter. |

<a id="on-1"></a>
## on('periodReach')

```TypeScript
on(type: 'periodReach', frame: number, callback: Callback<number>): void
```

Subscribes to the period reached event, which is triggered each time the number of frames captured reaches the value of the **frame** parameter. In other words, the information is reported periodically. This API uses an asynchronous callback to return the result.

For example, if **frame** is set to **10**, the callback is invoked each time 10 frames are captured, for example, when the number of frames captured reaches the 10th frame, 20th frame, and 30th frame.

**Since:** 8

<!--Device-AudioCapturer-on(type: 'periodReach', frame: long, callback: Callback<long>): void--><!--Device-AudioCapturer-on(type: 'periodReach', frame: long, callback: Callback<long>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'periodReach' | Yes | Event type. The event **'periodReach'** is triggered each time the number of frames captured reaches the value of the **frame** parameter. |
| frame | number | Yes | Number of frames to trigger the event. The value must be greater than **0**. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;number&gt; | Yes | Callback used to return the value of the **frame** parameter. |

<a id="on-2"></a>
## on('stateChange')

```TypeScript
on(type: 'stateChange', callback: Callback<AudioState>): void
```

Subscribes to the audio capturer state change event, which is triggered when the state of the audio capturer is changed. This API uses an asynchronous callback to return the result.

**Since:** 8

<!--Device-AudioCapturer-on(type: 'stateChange', callback: Callback<AudioState>): void--><!--Device-AudioCapturer-on(type: 'stateChange', callback: Callback<AudioState>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'stateChange' | Yes | Event type. The event **'stateChange'** is triggered when the state of the audio capturer is changed. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;AudioState&gt; | Yes | Callback used to return the audio status. |

<a id="on-3"></a>
## on('audioInterrupt')

```TypeScript
on(type: 'audioInterrupt', callback: Callback<InterruptEvent>): void
```

Subscribes to the audio interruption event, which is triggered when the audio focus is changed. This API uses an asynchronous callback to return the result.

The AudioCapturer instance proactively gains the focus when the **start** event occurs and releases the focus when the **pause** or **stop** event occurs. Therefore, you do not need to request to gain or release the focus.

After this API is called, an [InterruptEvent](arkts-audio-audio-interruptevent-i.md) is received when the AudioCapturer instance fails to obtain the focus or an audio interruption event occurs (for example, the audio stream is interrupted by others). It is recommended that the application perform further processing based on the **InterruptEvent** information. For details, see [Introduction to Audio Focus](docroot://media/audio/audio-playback-concurrency.md).

**Since:** 10

<!--Device-AudioCapturer-on(type: 'audioInterrupt', callback: Callback<InterruptEvent>): void--><!--Device-AudioCapturer-on(type: 'audioInterrupt', callback: Callback<InterruptEvent>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Interrupt

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioInterrupt' | Yes | Event type. The event **'audioInterrupt'** is triggered when the audio focus is changed. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;InterruptEvent&gt; | Yes | Callback used to return the event information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

<a id="on-4"></a>
## on('inputDeviceChange')

```TypeScript
on(type: 'inputDeviceChange', callback: Callback<AudioDeviceDescriptors>): void
```

Subscribes to the audio input device change event, which is triggered when an audio input device is changed. This API uses an asynchronous callback to return the result.

**Since:** 11

<!--Device-AudioCapturer-on(type: 'inputDeviceChange', callback: Callback<AudioDeviceDescriptors>): void--><!--Device-AudioCapturer-on(type: 'inputDeviceChange', callback: Callback<AudioDeviceDescriptors>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'inputDeviceChange' | Yes | Event type. The event **'inputDeviceChange'** is triggered when an audio input device is changed. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;AudioDeviceDescriptors&gt; | Yes | Callback used to return the updated information about the audio input device. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

<a id="on-5"></a>
## on('audioCapturerChange')

```TypeScript
on(type: 'audioCapturerChange', callback: Callback<AudioCapturerChangeInfo>): void
```

Subscribes to the audio capturer configuration change event, which is triggered when the audio recording stream status or device is changed. This API uses an asynchronous callback to return the result. The subscription is implemented asynchronously and the callback, which is triggered when the audio capturer configuration changes,may fail to reflect the actual condition.

**Since:** 11

<!--Device-AudioCapturer-on(type: 'audioCapturerChange', callback: Callback<AudioCapturerChangeInfo>): void--><!--Device-AudioCapturer-on(type: 'audioCapturerChange', callback: Callback<AudioCapturerChangeInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioCapturerChange' | Yes | Event type. The event **'audioCapturerChange'** is triggered when the audio recording stream status or device is changed. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;AudioCapturerChangeInfo&gt; | Yes | Callback used to return the current configuration and status information of the audio capturer. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

<a id="on-6"></a>
## on('readData')

```TypeScript
on(type: 'readData', callback: Callback<ArrayBuffer>): void
```

Subscribes to the audio data read event, which is triggered when audio stream data needs to be read. This API uses an asynchronous callback to return the result.

The callback function is used only to read audio data. Do not call AudioCapturer APIs in it.

To eliminate power-on noise caused by the microphone hardware design, the first 100 ms of data after recording starts is typically muted.

**Since:** 11

<!--Device-AudioCapturer-on(type: 'readData', callback: Callback<ArrayBuffer>): void--><!--Device-AudioCapturer-on(type: 'readData', callback: Callback<ArrayBuffer>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'readData' | Yes | Event type. The event **'readData'** is triggered when audio stream data needs to be read. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;ArrayBuffer&gt; | Yes | Callback used to return the buffer from which the data is read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

<a id="read"></a>
## read

```TypeScript
read(size: number, isBlockingRead: boolean, callback: AsyncCallback<ArrayBuffer>): void
```

Reads the buffer from the audio capturer. This method uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 11

**Substitutes:** event:readData

<!--Device-AudioCapturer-read(size: number, isBlockingRead: boolean, callback: AsyncCallback<ArrayBuffer>): void--><!--Device-AudioCapturer-read(size: number, isBlockingRead: boolean, callback: AsyncCallback<ArrayBuffer>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | number | Yes | Number of bytes to read. |
| isBlockingRead | boolean | Yes | Whether to block the read operation. **true** to block, **false** otherwise. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;ArrayBuffer&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is **undefined** and **data** is the buffer read; otherwise, **err** is an error object. |

<a id="read-1"></a>
## read

```TypeScript
read(size: number, isBlockingRead: boolean): Promise<ArrayBuffer>
```

Reads the buffer. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 11

**Substitutes:** event:readData

<!--Device-AudioCapturer-read(size: number, isBlockingRead: boolean): Promise<ArrayBuffer>--><!--Device-AudioCapturer-read(size: number, isBlockingRead: boolean): Promise<ArrayBuffer>-End-->

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

<a id="release"></a>
## release

```TypeScript
release(callback: AsyncCallback<void>): void
```

Releases this audio capturer. This API uses an asynchronous callback to return the result.

**Since:** 8

<!--Device-AudioCapturer-release(callback: AsyncCallback<void>): void--><!--Device-AudioCapturer-release(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

<a id="release-1"></a>
## release

```TypeScript
release(): Promise<void>
```

Releases this audio capturer. This API uses a promise to return the result.

**Since:** 8

<!--Device-AudioCapturer-release(): Promise<void>--><!--Device-AudioCapturer-release(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

<a id="requestplaybackcapturestart"></a>
## requestPlaybackCaptureStart

```TypeScript
requestPlaybackCaptureStart(callback: Callback<PlaybackCaptureStartState>): void
```

Asynchronously request to start the playback capture stream.This function is non-blocking, which means system will continue to process user authorization and stream starting when receiving the start request. And the final result will be returned by callback.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AudioCapturer-requestPlaybackCaptureStart(callback: Callback<PlaybackCaptureStartState>): void--><!--Device-AudioCapturer-requestPlaybackCaptureStart(callback: Callback<PlaybackCaptureStartState>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.PlaybackCapture

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;PlaybackCaptureStartState&gt; | Yes | Callback function used to receive the final result of start request. |

<a id="setindependentaudiosessionstrategy"></a>
## setIndependentAudioSessionStrategy

```TypeScript
setIndependentAudioSessionStrategy(strategy: AudioSessionStrategy, behavior: number): void
```

Sets the independent audio session strategy and behavior parameters.

> **NOTE**  
>  
> If this API is called while an audio capturer is running, you must call the  
> [start](arkts-audio-audio-audiocapturer-i.md#start-1) API again for  
> the settings to take effect.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-AudioCapturer-setIndependentAudioSessionStrategy(strategy: AudioSessionStrategy, behavior: int): void--><!--Device-AudioCapturer-setIndependentAudioSessionStrategy(strategy: AudioSessionStrategy, behavior: int): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| strategy | [AudioSessionStrategy](arkts-audio-audio-audiosessionstrategy-i.md) | Yes | Audio session strategy. |
| behavior | number | Yes | Specifies the audio session behavior.<br>This can be a single flag or a bitwise OR combination of multiple flags.<br>For details about the supported audio session behaviors, see [AudioSessionBehaviorFlags](arkts-audio-audio-audiosessionbehaviorflags-e.md). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |
| [6800103](../errorcode-audio.md#6800103-unsupported-state) | Operation not permit at current state. |

<a id="setmutehint"></a>
## setMuteHint

```TypeScript
setMuteHint(mute: boolean): Promise<void>
```

Set mute hint for this capturer, this method is used as a hint for power optimization it does not mute the recording stream, only affects internal processing strategy.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-AudioCapturer-setMuteHint(mute: boolean): Promise<void>--><!--Device-AudioCapturer-setMuteHint(mute: boolean): Promise<void>-End-->

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

<a id="setnoisereductionmode"></a>
## setNoiseReductionMode

```TypeScript
setNoiseReductionMode(noiseReductionMode: NoiseReductionMode): void
```

Sets noise reduction mode for current audio capturer.The supported mode should be obtained by {@link #getSupportedNoiseReductionModes}.The actual effect may vary from different audio devices, and will be invalid when there are multiple recording streams running simultaneously.The mode can only be changed in created and stopped state.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AudioCapturer-setNoiseReductionMode(noiseReductionMode: NoiseReductionMode): void--><!--Device-AudioCapturer-setNoiseReductionMode(noiseReductionMode: NoiseReductionMode): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| noiseReductionMode | [NoiseReductionMode](arkts-audio-audio-noisereductionmode-e.md) | Yes | The noise reduction mode to set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |
| [6800103](../errorcode-audio.md#6800103-unsupported-state) | Illegal state, audio capturer is in running or released state. |
| [6800104](../errorcode-audio.md#6800104-unsupported-parameter-value) | The setted mode is not supported. |
| [6800301](../errorcode-audio.md#6800301-system-error) | Audio server process died. |

<a id="setwillmutewheninterrupted"></a>
## setWillMuteWhenInterrupted

```TypeScript
setWillMuteWhenInterrupted(muteWhenInterrupted: boolean): Promise<void>
```

Sets whether to [mute the current audio recording stream when an audio interruption occurs](docroot://media/audio/using-audiocapturer-for-recording.md#setting-the-mute-interruption-mode). This API uses a promise to return the result.

**Since:** 20

<!--Device-AudioCapturer-setWillMuteWhenInterrupted(muteWhenInterrupted: boolean): Promise<void>--><!--Device-AudioCapturer-setWillMuteWhenInterrupted(muteWhenInterrupted: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| muteWhenInterrupted | boolean | Yes | Whether to mute the current audio recording stream during an audio interruption. **true** to mute, **false** otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800103](../errorcode-audio.md#6800103-unsupported-state) | Operation not permitted at current state. |

<a id="start"></a>
## start

```TypeScript
start(callback: AsyncCallback<void>): void
```

Starts this audio capturer to start capturing audio data. This API uses an asynchronous callback to return the result.

**Since:** 8

<!--Device-AudioCapturer-start(callback: AsyncCallback<void>): void--><!--Device-AudioCapturer-start(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. If the operation fails, an error object with the following error code is returned:<br>Error code 6800301: indicates abnormal status, focus preemption failure, and abnormal system processing. For details, see system logs. |

<a id="start-1"></a>
## start

```TypeScript
start(): Promise<void>
```

Starts this audio capturer to start capturing audio data. This API uses a promise to return the result.

**Since:** 8

<!--Device-AudioCapturer-start(): Promise<void>--><!--Device-AudioCapturer-start(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise object, which indicates that the capturer is started successfully. If the operation fails, an error object with the following error code is returned:<br>Error code 6800301: indicates abnormal status, focus preemption failure, and abnormal system processing. For details, see system logs. |

<a id="stop"></a>
## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

Stops this audio capturer, ceasing the input audio stream. This API uses an asynchronous callback to return the result.

**Since:** 8

<!--Device-AudioCapturer-stop(callback: AsyncCallback<void>): void--><!--Device-AudioCapturer-stop(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

<a id="stop-1"></a>
## stop

```TypeScript
stop(): Promise<void>
```

Stops this audio capturer, ceasing the input audio stream. This API uses a promise to return the result.

**Since:** 8

<!--Device-AudioCapturer-stop(): Promise<void>--><!--Device-AudioCapturer-stop(): Promise<void>-End-->

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

<!--Device-AudioCapturer-readonly state: AudioState--><!--Device-AudioCapturer-readonly state: AudioState-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

