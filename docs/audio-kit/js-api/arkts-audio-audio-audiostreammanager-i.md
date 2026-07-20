# AudioStreamManager

This interface implements audio stream management.

Before calling any API in AudioStreamManager, you must use [getStreamManager](arkts-audio-audio-audiomanager-i.md#getstreammanager-1) to obtain an AudioStreamManager instance.

> **NOTE**  
>  
> - The initial APIs of this interface are supported since API version 9.

**Since:** 9

<!--Device-audio-interface AudioStreamManager--><!--Device-audio-interface AudioStreamManager-End-->

**System capability:** SystemCapability.Multimedia.Audio.Core

## Modules to Import

```TypeScript
import { audio } from '@kit.AudioKit';
```

## getAudioEffectInfoArray

```TypeScript
getAudioEffectInfoArray(usage: StreamUsage, callback: AsyncCallback<AudioEffectInfoArray>): void
```

Obtains information about the audio effect mode in use. This API uses an asynchronous callback to return the result.

**Since:** 10

<!--Device-AudioStreamManager-getAudioEffectInfoArray(usage: StreamUsage, callback: AsyncCallback<AudioEffectInfoArray>): void--><!--Device-AudioStreamManager-getAudioEffectInfoArray(usage: StreamUsage, callback: AsyncCallback<AudioEffectInfoArray>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| usage | [StreamUsage](arkts-audio-audio-streamusage-e.md) | Yes | Audio stream usage. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<AudioEffectInfoArray> | Yes | Callback used to return the result. If the operation is successful, **err** is **undefined** and **data** is the information about the audio effect mode obtained;otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. Return by callback. |

## getAudioEffectInfoArray

```TypeScript
getAudioEffectInfoArray(usage: StreamUsage): Promise<AudioEffectInfoArray>
```

Obtains information about the audio effect mode in use. This API uses a promise to return the result.

**Since:** 10

<!--Device-AudioStreamManager-getAudioEffectInfoArray(usage: StreamUsage): Promise<AudioEffectInfoArray>--><!--Device-AudioStreamManager-getAudioEffectInfoArray(usage: StreamUsage): Promise<AudioEffectInfoArray>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| usage | [StreamUsage](arkts-audio-audio-streamusage-e.md) | Yes | Audio stream usage. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<AudioEffectInfoArray> | Promise used to return the information about the audio effect mode obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. Return by promise. |

## getAudioEffectInfoArraySync

```TypeScript
getAudioEffectInfoArraySync(usage: StreamUsage): AudioEffectInfoArray
```

Obtains information about the audio effect mode in use. This API returns the result synchronously.

**Since:** 10

<!--Device-AudioStreamManager-getAudioEffectInfoArraySync(usage: StreamUsage): AudioEffectInfoArray--><!--Device-AudioStreamManager-getAudioEffectInfoArraySync(usage: StreamUsage): AudioEffectInfoArray-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| usage | [StreamUsage](arkts-audio-audio-streamusage-e.md) | Yes | Audio stream usage. |

**Return value:**

| Type | Description |
| --- | --- |
| [AudioEffectInfoArray](arkts-audio-audio-audioeffectinfoarray-t.md) | Information about the audio effect mode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## getCurrentAudioCapturerInfoArray

```TypeScript
getCurrentAudioCapturerInfoArray(callback: AsyncCallback<AudioCapturerChangeInfoArray>): void
```

Obtains the information about this audio capturer. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> The audio capturer information returned by this API may include internal audio recording streams, such as voice  
> wakeup and cellular calls.

**Since:** 9

<!--Device-AudioStreamManager-getCurrentAudioCapturerInfoArray(callback: AsyncCallback<AudioCapturerChangeInfoArray>): void--><!--Device-AudioStreamManager-getCurrentAudioCapturerInfoArray(callback: AsyncCallback<AudioCapturerChangeInfoArray>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<AudioCapturerChangeInfoArray> | Yes | Callback used to return the result. If the operation is successful, **err** is **undefined** and **data** is the audio capturer information obtained;otherwise, **err** is an error object. |

## getCurrentAudioCapturerInfoArray

```TypeScript
getCurrentAudioCapturerInfoArray(): Promise<AudioCapturerChangeInfoArray>
```

Obtains the information about this audio capturer. This API uses a promise to return the result.

> **NOTE**  
>  
> The audio capturer information returned by this API may include internal audio recording streams, such as voice  
> wakeup and cellular calls.

**Since:** 9

<!--Device-AudioStreamManager-getCurrentAudioCapturerInfoArray(): Promise<AudioCapturerChangeInfoArray>--><!--Device-AudioStreamManager-getCurrentAudioCapturerInfoArray(): Promise<AudioCapturerChangeInfoArray>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<AudioCapturerChangeInfoArray> | Promise used to return the audio capturer information. |

## getCurrentAudioCapturerInfoArraySync

```TypeScript
getCurrentAudioCapturerInfoArraySync(): AudioCapturerChangeInfoArray
```

Obtains the information about this audio capturer. This API returns the result synchronously.

> **NOTE**  
>  
> The audio capturer information returned by this API may include internal audio recording streams, such as voice  
> wakeup and cellular calls.

**Since:** 10

<!--Device-AudioStreamManager-getCurrentAudioCapturerInfoArraySync(): AudioCapturerChangeInfoArray--><!--Device-AudioStreamManager-getCurrentAudioCapturerInfoArraySync(): AudioCapturerChangeInfoArray-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| [AudioCapturerChangeInfoArray](arkts-audio-audio-audiocapturerchangeinfoarray-t.md) | Audio capturer information. |

## getCurrentAudioRendererInfoArray

```TypeScript
getCurrentAudioRendererInfoArray(callback: AsyncCallback<AudioRendererChangeInfoArray>): void
```

Obtains the information about this audio renderer. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> The audio renderer information returned by this API may include internal audio playback streams, such as  
> cellular calls and ultrasonic streams.

**Since:** 9

<!--Device-AudioStreamManager-getCurrentAudioRendererInfoArray(callback: AsyncCallback<AudioRendererChangeInfoArray>): void--><!--Device-AudioStreamManager-getCurrentAudioRendererInfoArray(callback: AsyncCallback<AudioRendererChangeInfoArray>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<AudioRendererChangeInfoArray> | Yes | Callback used to return the result. If the operation is successful, **err** is **undefined** and **data** is the audio renderer information obtained;otherwise, **err** is an error object. |

## getCurrentAudioRendererInfoArray

```TypeScript
getCurrentAudioRendererInfoArray(): Promise<AudioRendererChangeInfoArray>
```

Obtains the information about this audio renderer. This API uses a promise to return the result.

> **NOTE**  
>  
> The audio renderer information returned by this API may include internal audio playback streams, such as  
> cellular calls and ultrasonic streams.

**Since:** 9

<!--Device-AudioStreamManager-getCurrentAudioRendererInfoArray(): Promise<AudioRendererChangeInfoArray>--><!--Device-AudioStreamManager-getCurrentAudioRendererInfoArray(): Promise<AudioRendererChangeInfoArray>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<AudioRendererChangeInfoArray> | Promise used to return the audio renderer information. |

## getCurrentAudioRendererInfoArraySync

```TypeScript
getCurrentAudioRendererInfoArraySync(): AudioRendererChangeInfoArray
```

Obtains the information about this audio renderer. This API returns the result synchronously.

> **NOTE**  
>  
> The audio renderer information returned by this API may include internal audio playback streams, such as  
> cellular calls and ultrasonic streams.

**Since:** 10

<!--Device-AudioStreamManager-getCurrentAudioRendererInfoArraySync(): AudioRendererChangeInfoArray--><!--Device-AudioStreamManager-getCurrentAudioRendererInfoArraySync(): AudioRendererChangeInfoArray-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| [AudioRendererChangeInfoArray](arkts-audio-audio-audiorendererchangeinfoarray-t.md) | Audio renderer information. |

## isAcousticEchoCancelerSupported

```TypeScript
isAcousticEchoCancelerSupported(sourceType: SourceType): boolean
```

Checks whether the specified audio source type supports echo cancellation.

**Since:** 20

<!--Device-AudioStreamManager-isAcousticEchoCancelerSupported(sourceType: SourceType): boolean--><!--Device-AudioStreamManager-isAcousticEchoCancelerSupported(sourceType: SourceType): boolean-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sourceType | [SourceType](../../apis-arkweb/arkts-apis/arkts-arkweb-webview-sourcetype-e.md) | Yes | Audio source type. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for whether echo cancellation is supported. **true** if supported, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## isActive

```TypeScript
isActive(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void
```

Checks whether a stream is active. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 20

**Substitutes:** isStreamActive

<!--Device-AudioStreamManager-isActive(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void--><!--Device-AudioStreamManager-isActive(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | [AudioVolumeType](arkts-audio-audio-audiovolumetype-e.md) | Yes | Audio stream types. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<boolean> | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is **true** if the stream is active or **false** if not active;otherwise, **err** is an error object. |

## isActive

```TypeScript
isActive(volumeType: AudioVolumeType): Promise<boolean>
```

Checks whether a stream is active. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 20

**Substitutes:** isStreamActive

<!--Device-AudioStreamManager-isActive(volumeType: AudioVolumeType): Promise<boolean>--><!--Device-AudioStreamManager-isActive(volumeType: AudioVolumeType): Promise<boolean>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | [AudioVolumeType](arkts-audio-audio-audiovolumetype-e.md) | Yes | Audio stream types. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | Promise used to return the result, indicating whether the stream is active.**true** if active, **false** otherwise. |

## isActiveSync

```TypeScript
isActiveSync(volumeType: AudioVolumeType): boolean
```

Checks whether a stream is active. This API returns the result synchronously.

**Since:** 10

**Deprecated since:** 20

**Substitutes:** isStreamActive

<!--Device-AudioStreamManager-isActiveSync(volumeType: AudioVolumeType): boolean--><!--Device-AudioStreamManager-isActiveSync(volumeType: AudioVolumeType): boolean-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | [AudioVolumeType](arkts-audio-audio-audiovolumetype-e.md) | Yes | Audio stream types. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for whether the stream is active. **true** if active, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## isAudioLoopbackSupported

```TypeScript
isAudioLoopbackSupported(mode: AudioLoopbackMode): boolean
```

Checks whether the current system supports the specified audio loopback mode.

**Since:** 20

<!--Device-AudioStreamManager-isAudioLoopbackSupported(mode: AudioLoopbackMode): boolean--><!--Device-AudioStreamManager-isAudioLoopbackSupported(mode: AudioLoopbackMode): boolean-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | [AudioLoopbackMode](arkts-audio-audio-audioloopbackmode-e.md) | Yes | Audio loopback mode. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for whether the audio loopback mode is supported. **true** if supported,**false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## isDirectPlaybackSupported

```TypeScript
isDirectPlaybackSupported(streamInfo: AudioStreamInfo, usage: StreamUsage): boolean
```

Return if direct playback is supported for the specific audio stream info and usage type in current device situation.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AudioStreamManager-isDirectPlaybackSupported(streamInfo: AudioStreamInfo, usage: StreamUsage): boolean--><!--Device-AudioStreamManager-isDirectPlaybackSupported(streamInfo: AudioStreamInfo, usage: StreamUsage): boolean-End-->

**System capability:** SystemCapability.Multimedia.Audio.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streamInfo | [AudioStreamInfo](arkts-audio-audio-audiostreaminfo-i.md) | Yes | reference of stream info structure to describe basic audio format. |
| usage | [StreamUsage](arkts-audio-audio-streamusage-e.md) | Yes | stream usage type used to decide the audio device and pipe type selection result. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | True if direct playback is supported in this situation. |

## isFastPlaybackSupported

```TypeScript
isFastPlaybackSupported(streamInfo: AudioStreamInfo, usage: StreamUsage): boolean
```

Return if fast playback is supported for the specific audio stream info and usage type in current device situation.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AudioStreamManager-isFastPlaybackSupported(streamInfo: AudioStreamInfo, usage: StreamUsage): boolean--><!--Device-AudioStreamManager-isFastPlaybackSupported(streamInfo: AudioStreamInfo, usage: StreamUsage): boolean-End-->

**System capability:** SystemCapability.Multimedia.Audio.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streamInfo | [AudioStreamInfo](arkts-audio-audio-audiostreaminfo-i.md) | Yes | reference of stream info structure to describe basic audio format. |
| usage | [StreamUsage](arkts-audio-audio-streamusage-e.md) | Yes | stream usage type used to decide the audio device and pipe type selection result. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | True if fast playback is supported in this situation. |

## isFastRecordingSupported

```TypeScript
isFastRecordingSupported(streamInfo: AudioStreamInfo, source: SourceType): boolean
```

Return if fast recording is supported for the specific audio stream info and usage type in current device situation.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AudioStreamManager-isFastRecordingSupported(streamInfo: AudioStreamInfo, source: SourceType): boolean--><!--Device-AudioStreamManager-isFastRecordingSupported(streamInfo: AudioStreamInfo, source: SourceType): boolean-End-->

**System capability:** SystemCapability.Multimedia.Audio.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streamInfo | [AudioStreamInfo](arkts-audio-audio-audiostreaminfo-i.md) | Yes | reference of stream info structure to describe basic audio format. |
| source | [SourceType](../../apis-arkweb/arkts-apis/arkts-arkweb-webview-sourcetype-e.md) | Yes | stream source type used to decide the audio device and pipe type selection result. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | True if fast recording is supported in this situation. |

## isIntelligentNoiseReductionEnabledForCurrentDevice

```TypeScript
isIntelligentNoiseReductionEnabledForCurrentDevice(sourceType: SourceType): boolean
```

Checks whether the intelligent noise reduction feature is enabled for the audio stream of the specified source type.

**Since:** 21

<!--Device-AudioStreamManager-isIntelligentNoiseReductionEnabledForCurrentDevice(sourceType: SourceType): boolean--><!--Device-AudioStreamManager-isIntelligentNoiseReductionEnabledForCurrentDevice(sourceType: SourceType): boolean-End-->

**System capability:** SystemCapability.Multimedia.Audio.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sourceType | [SourceType](../../apis-arkweb/arkts-apis/arkts-arkweb-webview-sourcetype-e.md) | Yes | Audio source type. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for whether the intelligent noise reduction feature is enabled. **true** if enabled, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## isMultichannelPlaybackSupported

```TypeScript
isMultichannelPlaybackSupported(streamInfo: AudioStreamInfo, usage: StreamUsage): boolean
```

Return if multichannel playback is supported for the specific audio stream info and usage type in current device situation.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AudioStreamManager-isMultichannelPlaybackSupported(streamInfo: AudioStreamInfo, usage: StreamUsage): boolean--><!--Device-AudioStreamManager-isMultichannelPlaybackSupported(streamInfo: AudioStreamInfo, usage: StreamUsage): boolean-End-->

**System capability:** SystemCapability.Multimedia.Audio.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streamInfo | [AudioStreamInfo](arkts-audio-audio-audiostreaminfo-i.md) | Yes | reference of stream info structure to describe basic audio format. |
| usage | [StreamUsage](arkts-audio-audio-streamusage-e.md) | Yes | stream usage type used to decide the audio device and pipe type selection result. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | True if multichannel playback is supported in this situation. |

## isOffloadPlaybackSupported

```TypeScript
isOffloadPlaybackSupported(streamInfo: AudioStreamInfo, usage: StreamUsage): boolean
```

Return if offload playback is supported for the specific audio stream info and usage type in current device situation.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AudioStreamManager-isOffloadPlaybackSupported(streamInfo: AudioStreamInfo, usage: StreamUsage): boolean--><!--Device-AudioStreamManager-isOffloadPlaybackSupported(streamInfo: AudioStreamInfo, usage: StreamUsage): boolean-End-->

**System capability:** SystemCapability.Multimedia.Audio.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streamInfo | [AudioStreamInfo](arkts-audio-audio-audiostreaminfo-i.md) | Yes | reference of stream info structure to describe basic audio format. |
| usage | [StreamUsage](arkts-audio-audio-streamusage-e.md) | Yes | stream usage type used to decide the audio device and pipe type selection result. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | True if offload playback is supported in this situation. |

## isRecordingAvailable

```TypeScript
isRecordingAvailable(capturerInfo: AudioCapturerInfo): boolean
```

Checks whether recording can be started based on the audio source type in the audio capturer information.

**Since:** 20

<!--Device-AudioStreamManager-isRecordingAvailable(capturerInfo: AudioCapturerInfo): boolean--><!--Device-AudioStreamManager-isRecordingAvailable(capturerInfo: AudioCapturerInfo): boolean-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| capturerInfo | [AudioCapturerInfo](arkts-audio-audio-audiocapturerinfo-i.md) | Yes | Audio capturer information. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for whether recording can be started. **true** if recording can be started,**false** otherwise.<br>This API checks whether the specified audio source type in the capturer information can acquire focus. It should be called before starting audio recording to avoid conflicts with existing recording streams. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## isStreamActive

```TypeScript
isStreamActive(streamUsage: StreamUsage): boolean
```

Checks whether a stream is active. This API returns the result synchronously.

**Since:** 20

<!--Device-AudioStreamManager-isStreamActive(streamUsage: StreamUsage): boolean--><!--Device-AudioStreamManager-isStreamActive(streamUsage: StreamUsage): boolean-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streamUsage | [StreamUsage](arkts-audio-audio-streamusage-e.md) | Yes | Audio stream usage. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for whether the stream is active. **true** if active, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## off('audioRendererChange')

```TypeScript
off(type: 'audioRendererChange', callback?: Callback<AudioRendererChangeInfoArray>): void
```

Unsubscribes from the audio renderer change event. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> The audio renderer information returned by this API may include internal audio playback streams, such as  
> cellular calls and ultrasonic streams.

**Since:** 9

<!--Device-AudioStreamManager-off(type: 'audioRendererChange', callback?: Callback<AudioRendererChangeInfoArray>): void--><!--Device-AudioStreamManager-off(type: 'audioRendererChange', callback?: Callback<AudioRendererChangeInfoArray>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioRendererChange' | Yes | Event type. The event **'audioRendererChange'** is triggered when the audio playback stream status or device is changed. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<AudioRendererChangeInfoArray> | No | Callback used to return the audio renderer information.<br>**Since:** 18 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## off('audioCapturerChange')

```TypeScript
off(type: 'audioCapturerChange', callback?: Callback<AudioCapturerChangeInfoArray>): void
```

Unsubscribes from the audio capturer change event. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> The audio capturer information returned by this API may include internal audio recording streams, such as voice  
> wakeup and cellular calls.

**Since:** 9

<!--Device-AudioStreamManager-off(type: 'audioCapturerChange', callback?: Callback<AudioCapturerChangeInfoArray>): void--><!--Device-AudioStreamManager-off(type: 'audioCapturerChange', callback?: Callback<AudioCapturerChangeInfoArray>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioCapturerChange' | Yes | Event type. The event **'audioCapturerChange'** is triggered when the audio capturer is changed. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<AudioCapturerChangeInfoArray> | No | Callback used to return the audio capturer information.<br>**Since:** 18 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## on('audioRendererChange')

```TypeScript
on(type: 'audioRendererChange', callback: Callback<AudioRendererChangeInfoArray>): void
```

Subscribes to the audio renderer change event, which is triggered when the audio playback stream status or device is changed. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> The audio renderer information returned by this API may include internal audio playback streams, such as  
> cellular calls and ultrasonic streams.

**Since:** 9

<!--Device-AudioStreamManager-on(type: 'audioRendererChange', callback: Callback<AudioRendererChangeInfoArray>): void--><!--Device-AudioStreamManager-on(type: 'audioRendererChange', callback: Callback<AudioRendererChangeInfoArray>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioRendererChange' | Yes | Event type. The event **'audioRendererChange'** is triggered when the audio playback stream status or device is changed. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<AudioRendererChangeInfoArray> | Yes | Callback used to return the audio renderer information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

## on('audioCapturerChange')

```TypeScript
on(type: 'audioCapturerChange', callback: Callback<AudioCapturerChangeInfoArray>): void
```

Subscribes to the audio capturer change event, which is triggered when the audio recording stream status or device is changed. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> The audio capturer information returned by this API may include internal audio recording streams, such as voice  
> wakeup and cellular calls.

**Since:** 9

<!--Device-AudioStreamManager-on(type: 'audioCapturerChange', callback: Callback<AudioCapturerChangeInfoArray>): void--><!--Device-AudioStreamManager-on(type: 'audioCapturerChange', callback: Callback<AudioCapturerChangeInfoArray>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioCapturerChange' | Yes | Event type. The event **'audioCapturerChange'** is triggered when the audio recording stream status or device is changed. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<AudioCapturerChangeInfoArray> | Yes | Callback used to return the audio capturer information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

