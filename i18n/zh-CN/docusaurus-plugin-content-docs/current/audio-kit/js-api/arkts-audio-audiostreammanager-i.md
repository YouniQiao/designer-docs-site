# AudioStreamManager

This interface implements audio stream management. Before calling any API in AudioStreamManager, you must use [getStreamManager](arkts-audio-audiomanager-i.md#getStreamManager) to obtain an AudioStreamManager instance. > **NOTE** > > - The initial APIs of this interface are supported since API version 9.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Core

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## getAudioEffectInfoArray

```TypeScript
getAudioEffectInfoArray(usage: StreamUsage, callback: AsyncCallback<AudioEffectInfoArray>): void
```

Obtains information about the audio effect mode in use. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| usage | StreamUsage | 是 | Audio stream usage. |
| callback | AsyncCallback&lt;AudioEffectInfoArray> | 是 | Callback used to return the result. If the operation is  successful, err is undefined and data is the information about the audio effect mode obtained;  otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. Return by callback. |

## getAudioEffectInfoArray

```TypeScript
getAudioEffectInfoArray(usage: StreamUsage): Promise<AudioEffectInfoArray>
```

Obtains information about the audio effect mode in use. This API uses a promise to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| usage | StreamUsage | 是 | Audio stream usage. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AudioEffectInfoArray> | Promise used to return the information about the audio effect mode  obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. Return by promise. |

## getAudioEffectInfoArraySync

```TypeScript
getAudioEffectInfoArraySync(usage: StreamUsage): AudioEffectInfoArray
```

Obtains information about the audio effect mode in use. This API returns the result synchronously.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| usage | StreamUsage | 是 | Audio stream usage. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioEffectInfoArray | Information about the audio effect mode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## getCurrentAudioCapturerInfoArray

```TypeScript
getCurrentAudioCapturerInfoArray(callback: AsyncCallback<AudioCapturerChangeInfoArray>): void
```

Obtains the information about this audio capturer. This API uses an asynchronous callback to return the result. > **NOTE** > > The audio capturer information returned by this API may include internal audio recording streams, such as voice > wakeup and cellular calls.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AudioCapturerChangeInfoArray> | 是 | Callback used to return the result. If the  operation is successful, err is undefined and data is the audio capturer information obtained;  otherwise, err is an error object. |

## getCurrentAudioCapturerInfoArray

```TypeScript
getCurrentAudioCapturerInfoArray(): Promise<AudioCapturerChangeInfoArray>
```

Obtains the information about this audio capturer. This API uses a promise to return the result. > **NOTE** > > The audio capturer information returned by this API may include internal audio recording streams, such as voice > wakeup and cellular calls.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AudioCapturerChangeInfoArray> | Promise used to return the audio capturer information. |

## getCurrentAudioCapturerInfoArraySync

```TypeScript
getCurrentAudioCapturerInfoArraySync(): AudioCapturerChangeInfoArray
```

Obtains the information about this audio capturer. This API returns the result synchronously. > **NOTE** > > The audio capturer information returned by this API may include internal audio recording streams, such as voice > wakeup and cellular calls.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioCapturerChangeInfoArray | Audio capturer information. |

## getCurrentAudioRendererInfoArray

```TypeScript
getCurrentAudioRendererInfoArray(callback: AsyncCallback<AudioRendererChangeInfoArray>): void
```

Obtains the information about this audio renderer. This API uses an asynchronous callback to return the result. > **NOTE** > > The audio renderer information returned by this API may include internal audio playback streams, such as > cellular calls and ultrasonic streams.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AudioRendererChangeInfoArray> | 是 | Callback used to return the result. If the  operation is successful, err is undefined and data is the audio renderer information obtained;  otherwise, err is an error object. |

## getCurrentAudioRendererInfoArray

```TypeScript
getCurrentAudioRendererInfoArray(): Promise<AudioRendererChangeInfoArray>
```

Obtains the information about this audio renderer. This API uses a promise to return the result. > **NOTE** > > The audio renderer information returned by this API may include internal audio playback streams, such as > cellular calls and ultrasonic streams.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AudioRendererChangeInfoArray> | Promise used to return the audio renderer information. |

## getCurrentAudioRendererInfoArraySync

```TypeScript
getCurrentAudioRendererInfoArraySync(): AudioRendererChangeInfoArray
```

Obtains the information about this audio renderer. This API returns the result synchronously. > **NOTE** > > The audio renderer information returned by this API may include internal audio playback streams, such as > cellular calls and ultrasonic streams.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioRendererChangeInfoArray | Audio renderer information. |

## isAcousticEchoCancelerSupported

```TypeScript
isAcousticEchoCancelerSupported(sourceType: SourceType): boolean
```

Checks whether the specified audio source type supports echo cancellation.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sourceType | SourceType | 是 | Audio source type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for whether echo cancellation is supported. true if supported, false  otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## isActive

```TypeScript
isActive(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void
```

Checks whether a stream is active. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**废弃版本：** 20

**替代接口：** ohos.multimedia.audio.AudioStreamManager#isStreamActive

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio stream types. |
| callback | AsyncCallback&lt;boolean> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is true if the stream is active or false if not active;  otherwise, err is an error object. |

## isActive

```TypeScript
isActive(volumeType: AudioVolumeType): Promise<boolean>
```

Checks whether a stream is active. This API uses a promise to return the result.

**起始版本：** 9

**废弃版本：** 20

**替代接口：** ohos.multimedia.audio.AudioStreamManager#isStreamActive

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio stream types. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result, indicating whether the stream is active.  true if active, false otherwise. |

## isActiveSync

```TypeScript
isActiveSync(volumeType: AudioVolumeType): boolean
```

Checks whether a stream is active. This API returns the result synchronously.

**起始版本：** 10

**废弃版本：** 20

**替代接口：** ohos.multimedia.audio.AudioStreamManager#isStreamActive

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio stream types. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for whether the stream is active. true if active, false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## isAudioLoopbackSupported

```TypeScript
isAudioLoopbackSupported(mode: AudioLoopbackMode): boolean
```

Checks whether the current system supports the specified audio loopback mode.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | AudioLoopbackMode | 是 | Audio loopback mode. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for whether the audio loopback mode is supported. true if supported,  false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## isDirectPlaybackSupported

```TypeScript
isDirectPlaybackSupported(streamInfo: AudioStreamInfo, usage: StreamUsage): boolean
```

Return if direct playback is supported for the specific audio stream info and usage type in current device situation.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| streamInfo | AudioStreamInfo | 是 | reference of stream info structure to describe basic audio format. |
| usage | StreamUsage | 是 | stream usage type used to decide the audio device and pipe type selection result. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | True if direct playback is supported in this situation. |

## isFastPlaybackSupported

```TypeScript
isFastPlaybackSupported(streamInfo: AudioStreamInfo, usage: StreamUsage): boolean
```

Return if fast playback is supported for the specific audio stream info and usage type in current device situation.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| streamInfo | AudioStreamInfo | 是 | reference of stream info structure to describe basic audio format. |
| usage | StreamUsage | 是 | stream usage type used to decide the audio device and pipe type selection result. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | True if fast playback is supported in this situation. |

## isFastRecordingSupported

```TypeScript
isFastRecordingSupported(streamInfo: AudioStreamInfo, source: SourceType): boolean
```

Return if fast recording is supported for the specific audio stream info and usage type in current device situation.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| streamInfo | AudioStreamInfo | 是 | reference of stream info structure to describe basic audio format. |
| source | SourceType | 是 | stream source type used to decide the audio device and pipe type selection result. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | True if fast recording is supported in this situation. |

## isIntelligentNoiseReductionEnabledForCurrentDevice

```TypeScript
isIntelligentNoiseReductionEnabledForCurrentDevice(sourceType: SourceType): boolean
```

Checks whether the intelligent noise reduction feature is enabled for the audio stream of the specified source type.

**起始版本：** 21

**系统能力：** SystemCapability.Multimedia.Audio.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sourceType | SourceType | 是 | Audio source type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for whether the intelligent noise reduction feature is enabled. true if  enabled, false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## isMultichannelPlaybackSupported

```TypeScript
isMultichannelPlaybackSupported(streamInfo: AudioStreamInfo, usage: StreamUsage): boolean
```

Return if multichannel playback is supported for the specific audio stream info and usage type in current device situation.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| streamInfo | AudioStreamInfo | 是 | reference of stream info structure to describe basic audio format. |
| usage | StreamUsage | 是 | stream usage type used to decide the audio device and pipe type selection result. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | True if multichannel playback is supported in this situation. |

## isOffloadPlaybackSupported

```TypeScript
isOffloadPlaybackSupported(streamInfo: AudioStreamInfo, usage: StreamUsage): boolean
```

Return if offload playback is supported for the specific audio stream info and usage type in current device situation.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| streamInfo | AudioStreamInfo | 是 | reference of stream info structure to describe basic audio format. |
| usage | StreamUsage | 是 | stream usage type used to decide the audio device and pipe type selection result. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | True if offload playback is supported in this situation. |

## isRecordingAvailable

```TypeScript
isRecordingAvailable(capturerInfo: AudioCapturerInfo): boolean
```

Checks whether recording can be started based on the audio source type in the audio capturer information.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| capturerInfo | AudioCapturerInfo | 是 | Audio capturer information. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for whether recording can be started. true if recording can be started,  false otherwise.  This API checks whether the specified audio source type in the capturer information can acquire focus. It should  be called before starting audio recording to avoid conflicts with existing recording streams. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## isStreamActive

```TypeScript
isStreamActive(streamUsage: StreamUsage): boolean
```

Checks whether a stream is active. This API returns the result synchronously.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| streamUsage | StreamUsage | 是 | Audio stream usage. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for whether the stream is active. true if active, false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## off('audioRendererChange')

```TypeScript
off(type: 'audioRendererChange', callback?: Callback<AudioRendererChangeInfoArray>): void
```

Unsubscribes from the audio renderer change event. This API uses an asynchronous callback to return the result. > **NOTE** > > The audio renderer information returned by this API may include internal audio playback streams, such as > cellular calls and ultrasonic streams.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'audioRendererChange' | 是 | Event type. The event 'audioRendererChange' is triggered when the  audio playback stream status or device is changed. |
| callback | Callback&lt;AudioRendererChangeInfoArray> | 否 | Callback used to return the audio renderer  information. [since 18] |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## off('audioCapturerChange')

```TypeScript
off(type: 'audioCapturerChange', callback?: Callback<AudioCapturerChangeInfoArray>): void
```

Unsubscribes from the audio capturer change event. This API uses an asynchronous callback to return the result. > **NOTE** > > The audio capturer information returned by this API may include internal audio recording streams, such as voice > wakeup and cellular calls.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'audioCapturerChange' | 是 | Event type. The event 'audioCapturerChange' is triggered when the  audio capturer is changed. |
| callback | Callback&lt;AudioCapturerChangeInfoArray> | 否 | Callback used to return the audio capturer  information. [since 18] |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## offAudioCapturerChange

```TypeScript
offAudioCapturerChange(callback?: Callback<AudioCapturerChangeInfoArray>): void
```

Unsubscribes to audio capturer change events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioCapturerChangeInfoArray> | 否 | Callback invoked for the audio capturer change  event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## offAudioRendererChange

```TypeScript
offAudioRendererChange(callback?: Callback<AudioRendererChangeInfoArray>): void
```

Unsubscribes to audio renderer change events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioRendererChangeInfoArray> | 否 | Callback invoked for the audio renderer change  event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## on('audioRendererChange')

```TypeScript
on(type: 'audioRendererChange', callback: Callback<AudioRendererChangeInfoArray>): void
```

Subscribes to the audio renderer change event, which is triggered when the audio playback stream status or device is changed. This API uses an asynchronous callback to return the result. > **NOTE** > > The audio renderer information returned by this API may include internal audio playback streams, such as > cellular calls and ultrasonic streams.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'audioRendererChange' | 是 | Event type. The event 'audioRendererChange' is triggered when the  audio playback stream status or device is changed. |
| callback | Callback&lt;AudioRendererChangeInfoArray> | 是 | Callback used to return the audio renderer  information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## on('audioCapturerChange')

```TypeScript
on(type: 'audioCapturerChange', callback: Callback<AudioCapturerChangeInfoArray>): void
```

Subscribes to the audio capturer change event, which is triggered when the audio recording stream status or device is changed. This API uses an asynchronous callback to return the result. > **NOTE** > > The audio capturer information returned by this API may include internal audio recording streams, such as voice > wakeup and cellular calls.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'audioCapturerChange' | 是 | Event type. The event 'audioCapturerChange' is triggered when the  audio recording stream status or device is changed. |
| callback | Callback&lt;AudioCapturerChangeInfoArray> | 是 | Callback used to return the audio capturer  information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## onAudioCapturerChange

```TypeScript
onAudioCapturerChange(callback: Callback<AudioCapturerChangeInfoArray>): void
```

Listens for audio capturer change events. When there is any audio capturer change, registered clients will receive the callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioCapturerChangeInfoArray> | 是 | Callback invoked for the audio capturer change  event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## onAudioRendererChange

```TypeScript
onAudioRendererChange(callback: Callback<AudioRendererChangeInfoArray>): void
```

Listens for audio renderer change events. When there is any audio renderer change, registered clients will receive the callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioRendererChangeInfoArray> | 是 | Callback invoked for the audio renderer change  event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

