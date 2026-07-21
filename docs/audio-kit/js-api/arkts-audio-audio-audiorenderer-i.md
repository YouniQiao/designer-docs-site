# AudioRenderer

This interface provides APIs for audio rendering.

Before calling any API in AudioRenderer, you must use [createAudioRenderer](arkts-audio-audio-createaudiorenderer-f.md#createaudiorenderer-1)to create an AudioRenderer instance.

> **NOTE**  
>  
> - The initial APIs of this interface are supported since API version 8.

**Since:** 8

<!--Device-audio-interface AudioRenderer--><!--Device-audio-interface AudioRenderer-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

## Modules to Import

```TypeScript
import { audio } from '@kit.AudioKit';
```

<a id="drain"></a>
## drain

```TypeScript
drain(callback: AsyncCallback<void>): void
```

Drains the playback buffer. This API uses an asynchronous callback to return the result.

**Since:** 8

<!--Device-AudioRenderer-drain(callback: AsyncCallback<void>): void--><!--Device-AudioRenderer-drain(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

<a id="drain-1"></a>
## drain

```TypeScript
drain(): Promise<void>
```

Drains the playback buffer. This API uses a promise to return the result.

**Since:** 8

<!--Device-AudioRenderer-drain(): Promise<void>--><!--Device-AudioRenderer-drain(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

<a id="flush"></a>
## flush

```TypeScript
flush(): Promise<void>
```

Flushes the buffer. This API is available when [AudioState](arkts-audio-audio-audiostate-e.md) is **STATE_RUNNING**, **STATE_PAUSED**, or **STATE_STOPPED**. This API uses a promise to return the result.

**Since:** 11

<!--Device-AudioRenderer-flush(): Promise<void>--><!--Device-AudioRenderer-flush(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800103](../errorcode-audio.md#6800103-unsupported-state) | Operation not permit at current state. Return by promise. |

<a id="getaudioeffectmode"></a>
## getAudioEffectMode

```TypeScript
getAudioEffectMode(callback: AsyncCallback<AudioEffectMode>): void
```

Obtains the audio effect mode in use. This API uses an asynchronous callback to return the result.

**Since:** 10

<!--Device-AudioRenderer-getAudioEffectMode(callback: AsyncCallback<AudioEffectMode>): void--><!--Device-AudioRenderer-getAudioEffectMode(callback: AsyncCallback<AudioEffectMode>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;AudioEffectMode&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is **undefined** and **data** is the audio effect mode obtained; otherwise, **err** is an error object. |

<a id="getaudioeffectmode-1"></a>
## getAudioEffectMode

```TypeScript
getAudioEffectMode(): Promise<AudioEffectMode>
```

Obtains the audio effect mode in use. This API uses a promise to return the result.

**Since:** 10

<!--Device-AudioRenderer-getAudioEffectMode(): Promise<AudioEffectMode>--><!--Device-AudioRenderer-getAudioEffectMode(): Promise<AudioEffectMode>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioEffectMode&gt; | Promise used to return the audio effect mode. |

<a id="getaudiostreamid"></a>
## getAudioStreamId

```TypeScript
getAudioStreamId(callback: AsyncCallback<number>): void
```

Obtains the stream ID of this audio renderer. This API uses an asynchronous callback to return the result.

**Since:** 9

<!--Device-AudioRenderer-getAudioStreamId(callback: AsyncCallback<long>): void--><!--Device-AudioRenderer-getAudioStreamId(callback: AsyncCallback<long>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is the stream ID obtained; otherwise, **err** is an error object. |

<a id="getaudiostreamid-1"></a>
## getAudioStreamId

```TypeScript
getAudioStreamId(): Promise<number>
```

Obtains the stream ID of this audio renderer. This API uses a promise to return the result.

**Since:** 9

<!--Device-AudioRenderer-getAudioStreamId(): Promise<long>--><!--Device-AudioRenderer-getAudioStreamId(): Promise<long>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the stream ID. |

<a id="getaudiostreamidsync"></a>
## getAudioStreamIdSync

```TypeScript
getAudioStreamIdSync(): number
```

Obtains the stream ID of this audio renderer. This API returns the result synchronously.

**Since:** 10

<!--Device-AudioRenderer-getAudioStreamIdSync(): long--><!--Device-AudioRenderer-getAudioStreamIdSync(): long-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| number | Stream ID. |

<a id="getaudiotime"></a>
## getAudioTime

```TypeScript
getAudioTime(callback: AsyncCallback<number>): void
```

Obtains the timestamp of the current playback position, measured in nanoseconds from the Unix epoch (January 1, 1970). This API uses an asynchronous callback to return the result.

**Since:** 8

<!--Device-AudioRenderer-getAudioTime(callback: AsyncCallback<long>): void--><!--Device-AudioRenderer-getAudioTime(callback: AsyncCallback<long>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is the number of nanoseconds obtained; otherwise, **err** is an error object. |

<a id="getaudiotime-1"></a>
## getAudioTime

```TypeScript
getAudioTime(): Promise<number>
```

Obtains the timestamp of the current playback position, measured in nanoseconds from the Unix epoch (January 1, 1970). This API uses a promise to return the result.

**Since:** 8

<!--Device-AudioRenderer-getAudioTime(): Promise<long>--><!--Device-AudioRenderer-getAudioTime(): Promise<long>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the timestamp. |

<a id="getaudiotimesync"></a>
## getAudioTimeSync

```TypeScript
getAudioTimeSync(): number
```

Obtains the timestamp of the current playback position, measured in nanoseconds from the Unix epoch (January 1, 1970). This API returns the result synchronously.

**Since:** 10

<!--Device-AudioRenderer-getAudioTimeSync(): long--><!--Device-AudioRenderer-getAudioTimeSync(): long-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| number | Timestamp. |

<a id="getaudiotimestampinfo"></a>
## getAudioTimestampInfo

```TypeScript
getAudioTimestampInfo(): Promise<AudioTimestampInfo>
```

Obtains the timestamp and position information of an output audio stream. It adapts to the speed adjustment interface. This API uses a promise to return the result.

This information is commonly used for audio and video synchronization.

Note that when the actual playback position (**framePosition**) is 0, the timestamp remains fixed until the stream begins to play. The playback position is also reset when **Flush** is called.

Additionally, changes in the audio stream route, such as switching devices or output types, will reset the playback position, whereas the timestamp keeps increasing. You are advised to call this API to obtain the corresponding value only when the actual playback position and timestamp are stable. This API adapts to the speed adjustment interface. For example, if the playback speed is set to 2x, the rate at which the playback position increases is also twice the normal speed.

**Since:** 19

<!--Device-AudioRenderer-getAudioTimestampInfo(): Promise<AudioTimestampInfo>--><!--Device-AudioRenderer-getAudioTimestampInfo(): Promise<AudioTimestampInfo>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioTimestampInfo&gt; | Promise used to return the audio stream timestamp and the current data frame position. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800103](../errorcode-audio.md#6800103-unsupported-state) | Operation not permit at current state. |

<a id="getaudiotimestampinfosync"></a>
## getAudioTimestampInfoSync

```TypeScript
getAudioTimestampInfoSync(): AudioTimestampInfo
```

Obtains the timestamp and position information of an output audio stream. It adapts to the speed adjustment interface. This API returns the result synchronously.

This information is commonly used for audio and video synchronization.

Note that when the actual playback position (**framePosition**) is 0, the timestamp remains fixed until the stream begins to play. The playback position is also reset when **Flush** is called.

Additionally, changes in the audio stream route, such as switching devices or output types, will reset the playback position, whereas the timestamp keeps increasing. You are advised to call this API to obtain the corresponding value only when the actual playback position and timestamp are stable. This API adapts to the speed adjustment interface. For example, if the playback speed is set to 2x, the rate at which the playback position increases is also twice the normal speed.

**Since:** 19

<!--Device-AudioRenderer-getAudioTimestampInfoSync(): AudioTimestampInfo--><!--Device-AudioRenderer-getAudioTimestampInfoSync(): AudioTimestampInfo-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| [AudioTimestampInfo](arkts-audio-audio-audiotimestampinfo-i.md) | Information about the audio stream timestamp and the current data frame position. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800103](../errorcode-audio.md#6800103-unsupported-state) | Operation not permit at current state. |

<a id="getbuffersize"></a>
## getBufferSize

```TypeScript
getBufferSize(callback: AsyncCallback<number>): void
```

Obtains a reasonable minimum buffer size in bytes for rendering. This API uses an asynchronous callback to return the result.

**Since:** 8

<!--Device-AudioRenderer-getBufferSize(callback: AsyncCallback<long>): void--><!--Device-AudioRenderer-getBufferSize(callback: AsyncCallback<long>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is the minimum buffer size obtained; otherwise, **err** is an error object.<br>The unit is bytes. |

<a id="getbuffersize-1"></a>
## getBufferSize

```TypeScript
getBufferSize(): Promise<number>
```

Obtains a reasonable minimum buffer size in bytes for rendering. This API uses a promise to return the result.

**Since:** 8

<!--Device-AudioRenderer-getBufferSize(): Promise<long>--><!--Device-AudioRenderer-getBufferSize(): Promise<long>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the buffer size.<br>The unit is bytes. |

<a id="getbuffersizesync"></a>
## getBufferSizeSync

```TypeScript
getBufferSizeSync(): number
```

Obtains a reasonable minimum buffer size in bytes for rendering. This API returns the result synchronously.

**Since:** 10

<!--Device-AudioRenderer-getBufferSizeSync(): long--><!--Device-AudioRenderer-getBufferSizeSync(): long-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| number | Buffer size, in bytes. |

<a id="getcurrentoutputdevices"></a>
## getCurrentOutputDevices

```TypeScript
getCurrentOutputDevices(callback: AsyncCallback<AudioDeviceDescriptors>): void
```

Obtains the output device information of the audio stream. This API uses an asynchronous callback to return the result.

**Since:** 10

<!--Device-AudioRenderer-getCurrentOutputDevices(callback: AsyncCallback<AudioDeviceDescriptors>): void--><!--Device-AudioRenderer-getCurrentOutputDevices(callback: AsyncCallback<AudioDeviceDescriptors>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;AudioDeviceDescriptors&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is **undefined** and **data** is the output device information obtained; otherwise,**err** is an error object. |

<a id="getcurrentoutputdevices-1"></a>
## getCurrentOutputDevices

```TypeScript
getCurrentOutputDevices(): Promise<AudioDeviceDescriptors>
```

Obtains the output device information of the audio stream. This API uses a promise to return the result.

**Since:** 10

<!--Device-AudioRenderer-getCurrentOutputDevices(): Promise<AudioDeviceDescriptors>--><!--Device-AudioRenderer-getCurrentOutputDevices(): Promise<AudioDeviceDescriptors>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Device

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioDeviceDescriptors&gt; | Promise used to return the output device information. |

<a id="getcurrentoutputdevicessync"></a>
## getCurrentOutputDevicesSync

```TypeScript
getCurrentOutputDevicesSync(): AudioDeviceDescriptors
```

Obtains the output device information of the audio stream. This API returns the result synchronously.

**Since:** 10

<!--Device-AudioRenderer-getCurrentOutputDevicesSync(): AudioDeviceDescriptors--><!--Device-AudioRenderer-getCurrentOutputDevicesSync(): AudioDeviceDescriptors-End-->

**System capability:** SystemCapability.Multimedia.Audio.Device

**Return value:**

| Type | Description |
| --- | --- |
| [AudioDeviceDescriptors](arkts-audio-audio-audiodevicedescriptors-t.md) | Output device information. |

<a id="getlatency"></a>
## getLatency

```TypeScript
getLatency(type: AudioLatencyType): number
```

Obtains the estimated latency of the current audio route.

> **NOTE**  
>  
> - The estimated latency of a wireless audio device may be inaccurate. The result is for reference only.  
>  
> - Since the latency is not counted in the real-time buffer, you are advised to obtain the latency only when the  
> audio playback starts to avoid frequent calls. Otherwise, the API call may be blocked due to route switching.  
>  
> - You are advised to use [getAudioTimestampInfo](arkts-audio-audio-audiorenderer-i.md#getaudiotimestampinfo-1) or  
> [getAudioTimestampInfoSync](arkts-audio-audio-audiorenderer-i.md#getaudiotimestampinfosync-1) to implement audio and video  
> synchronization after the audio is output to the hardware.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-AudioRenderer-getLatency(type: AudioLatencyType): int--><!--Device-AudioRenderer-getLatency(type: AudioLatencyType): int-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | [AudioLatencyType](arkts-audio-audio-audiolatencytype-e.md) | Yes | Obtains the latency type. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Audio latency, in milliseconds. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |
| [6800103](../errorcode-audio.md#6800103-unsupported-state) | Operation not permitted in release state. |
| [6800301](../errorcode-audio.md#6800301-system-error) | System internal error, like audio service error. |

<a id="getloudnessgain"></a>
## getLoudnessGain

```TypeScript
getLoudnessGain(): number
```

Gets loudness gain of this stream.

**Since:** 20

<!--Device-AudioRenderer-getLoudnessGain(): double--><!--Device-AudioRenderer-getLoudnessGain(): double-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns one float value, unit is dB. |

<a id="getmaxstreamvolume"></a>
## getMaxStreamVolume

```TypeScript
getMaxStreamVolume(callback: AsyncCallback<number>): void
```

Obtains the maximum volume of the audio stream. This API uses an asynchronous callback to return the result.

**Since:** 10

<!--Device-AudioRenderer-getMaxStreamVolume(callback: AsyncCallback<double>): void--><!--Device-AudioRenderer-getMaxStreamVolume(callback: AsyncCallback<double>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is the maximum volume obtained; otherwise, **err** is an error object.<br>The volume range is [0.0, 1.0]. |

<a id="getmaxstreamvolume-1"></a>
## getMaxStreamVolume

```TypeScript
getMaxStreamVolume(): Promise<number>
```

Obtains the maximum volume of the audio stream. This API uses a promise to return the result.

**Since:** 10

<!--Device-AudioRenderer-getMaxStreamVolume(): Promise<double>--><!--Device-AudioRenderer-getMaxStreamVolume(): Promise<double>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the maximum volume of the audio stream.<br>The volume range is [0.0, 1.0]. |

<a id="getmaxstreamvolumesync"></a>
## getMaxStreamVolumeSync

```TypeScript
getMaxStreamVolumeSync(): number
```

Obtains the maximum volume of the audio stream. This API returns the result synchronously.

**Since:** 10

<!--Device-AudioRenderer-getMaxStreamVolumeSync(): double--><!--Device-AudioRenderer-getMaxStreamVolumeSync(): double-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| number | Maximum volume of the audio stream, which ranges from 0.0 to 1.0. |

<a id="getminstreamvolume"></a>
## getMinStreamVolume

```TypeScript
getMinStreamVolume(callback: AsyncCallback<number>): void
```

Obtains the minimum volume of the audio stream. This API uses an asynchronous callback to return the result.

**Since:** 10

<!--Device-AudioRenderer-getMinStreamVolume(callback: AsyncCallback<double>): void--><!--Device-AudioRenderer-getMinStreamVolume(callback: AsyncCallback<double>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is the minimum volume obtained; otherwise, **err** is an error object.<br>The volume range is [0.0, 1.0]. |

<a id="getminstreamvolume-1"></a>
## getMinStreamVolume

```TypeScript
getMinStreamVolume(): Promise<number>
```

Obtains the minimum volume of the audio stream. This API uses a promise to return the result.

**Since:** 10

<!--Device-AudioRenderer-getMinStreamVolume(): Promise<double>--><!--Device-AudioRenderer-getMinStreamVolume(): Promise<double>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the minimum volume of the audio stream.<br>The volume range is [0.0, 1.0]. |

<a id="getminstreamvolumesync"></a>
## getMinStreamVolumeSync

```TypeScript
getMinStreamVolumeSync(): number
```

Obtains the minimum volume of the audio stream. This API returns the result synchronously.

**Since:** 10

<!--Device-AudioRenderer-getMinStreamVolumeSync(): double--><!--Device-AudioRenderer-getMinStreamVolumeSync(): double-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| number | Minimum volume of the audio stream, which ranges from 0.0 to 1.0. |

<a id="getrenderrate"></a>
## getRenderRate

```TypeScript
getRenderRate(callback: AsyncCallback<AudioRendererRate>): void
```

Obtains the audio renderer rate. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 11

**Substitutes:** getSpeed

<!--Device-AudioRenderer-getRenderRate(callback: AsyncCallback<AudioRendererRate>): void--><!--Device-AudioRenderer-getRenderRate(callback: AsyncCallback<AudioRendererRate>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;AudioRendererRate&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is **undefined** and **data** is the render rate obtained; otherwise, **err** is an error object. |

<a id="getrenderrate-1"></a>
## getRenderRate

```TypeScript
getRenderRate(): Promise<AudioRendererRate>
```

Obtains the audio renderer rate. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 11

**Substitutes:** getSpeed

<!--Device-AudioRenderer-getRenderRate(): Promise<AudioRendererRate>--><!--Device-AudioRenderer-getRenderRate(): Promise<AudioRendererRate>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioRendererRate&gt; | Promise used to return the render rate. |

<a id="getrenderratesync"></a>
## getRenderRateSync

```TypeScript
getRenderRateSync(): AudioRendererRate
```

Obtains the audio renderer rate. This API returns the result synchronously.

**Since:** 10

**Deprecated since:** 11

**Substitutes:** getSpeed

<!--Device-AudioRenderer-getRenderRateSync(): AudioRendererRate--><!--Device-AudioRenderer-getRenderRateSync(): AudioRendererRate-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| [AudioRendererRate](arkts-audio-audio-audiorendererrate-e.md) | Audio render rate. |

<a id="getrendererinfo"></a>
## getRendererInfo

```TypeScript
getRendererInfo(callback: AsyncCallback<AudioRendererInfo>): void
```

Obtains the information about this audio renderer. This API uses an asynchronous callback to return the result.

**Since:** 8

<!--Device-AudioRenderer-getRendererInfo(callback: AsyncCallback<AudioRendererInfo>): void--><!--Device-AudioRenderer-getRendererInfo(callback: AsyncCallback<AudioRendererInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;AudioRendererInfo&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is **undefined** and **data** is the audio renderer information obtained; otherwise,**err** is an error object. |

<a id="getrendererinfo-1"></a>
## getRendererInfo

```TypeScript
getRendererInfo(): Promise<AudioRendererInfo>
```

Obtains the information about this audio renderer. This API uses a promise to return the result.

**Since:** 8

<!--Device-AudioRenderer-getRendererInfo(): Promise<AudioRendererInfo>--><!--Device-AudioRenderer-getRendererInfo(): Promise<AudioRendererInfo>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioRendererInfo&gt; | Promise used to return the audio renderer information. |

<a id="getrendererinfosync"></a>
## getRendererInfoSync

```TypeScript
getRendererInfoSync(): AudioRendererInfo
```

Obtains the information about this audio renderer. This API returns the result synchronously.

**Since:** 10

<!--Device-AudioRenderer-getRendererInfoSync(): AudioRendererInfo--><!--Device-AudioRenderer-getRendererInfoSync(): AudioRendererInfo-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| [AudioRendererInfo](arkts-audio-audio-audiorendererinfo-i.md) | Audio renderer information. |

<a id="getsilentmodeandmixwithothers"></a>
## getSilentModeAndMixWithOthers

```TypeScript
getSilentModeAndMixWithOthers(): boolean
```

Obtains the silent mode in concurrent playback for the audio stream.

**Since:** 12

<!--Device-AudioRenderer-getSilentModeAndMixWithOthers(): boolean--><!--Device-AudioRenderer-getSilentModeAndMixWithOthers(): boolean-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Enabled status of the silent mode in concurrent playback. **true** if enabled, **false** otherwise. |

<a id="getspeed"></a>
## getSpeed

```TypeScript
getSpeed(): number
```

Obtains the playback speed.

**Since:** 11

<!--Device-AudioRenderer-getSpeed(): double--><!--Device-AudioRenderer-getSpeed(): double-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| number | Playback rate, which ranges from 0.25 to 4.0. |

<a id="getstreaminfo"></a>
## getStreamInfo

```TypeScript
getStreamInfo(callback: AsyncCallback<AudioStreamInfo>): void
```

Obtains the stream information of this audio renderer. This API uses an asynchronous callback to return the result.

**Since:** 8

<!--Device-AudioRenderer-getStreamInfo(callback: AsyncCallback<AudioStreamInfo>): void--><!--Device-AudioRenderer-getStreamInfo(callback: AsyncCallback<AudioStreamInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;AudioStreamInfo&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is **undefined** and **data** is the stream information obtained; otherwise, **err** is an error object. |

<a id="getstreaminfo-1"></a>
## getStreamInfo

```TypeScript
getStreamInfo(): Promise<AudioStreamInfo>
```

Obtains the stream information of this audio renderer. This API uses a promise to return the result.

**Since:** 8

<!--Device-AudioRenderer-getStreamInfo(): Promise<AudioStreamInfo>--><!--Device-AudioRenderer-getStreamInfo(): Promise<AudioStreamInfo>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioStreamInfo&gt; | Promise used to return the stream information. |

<a id="getstreaminfosync"></a>
## getStreamInfoSync

```TypeScript
getStreamInfoSync(): AudioStreamInfo
```

Obtains the stream information of this audio renderer. This API returns the result synchronously.

**Since:** 10

<!--Device-AudioRenderer-getStreamInfoSync(): AudioStreamInfo--><!--Device-AudioRenderer-getStreamInfoSync(): AudioStreamInfo-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| [AudioStreamInfo](arkts-audio-audio-audiostreaminfo-i.md) | Stream information. |

<a id="getunderflowcount"></a>
## getUnderflowCount

```TypeScript
getUnderflowCount(callback: AsyncCallback<number>): void
```

Obtains the number of underflow audio frames in the audio stream that is being played. This API uses an asynchronous callback to return the result.

**Since:** 10

<!--Device-AudioRenderer-getUnderflowCount(callback: AsyncCallback<long>): void--><!--Device-AudioRenderer-getUnderflowCount(callback: AsyncCallback<long>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is the number of underloaded audio frames obtained; otherwise, **err** is an error object. |

<a id="getunderflowcount-1"></a>
## getUnderflowCount

```TypeScript
getUnderflowCount(): Promise<number>
```

Obtains the number of underflow audio frames in the audio stream that is being played. This API uses a promise to return the result.

**Since:** 10

<!--Device-AudioRenderer-getUnderflowCount(): Promise<long>--><!--Device-AudioRenderer-getUnderflowCount(): Promise<long>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the number of underflow audio frames. |

<a id="getunderflowcountsync"></a>
## getUnderflowCountSync

```TypeScript
getUnderflowCountSync(): number
```

Obtains the number of underflow audio frames in the audio stream that is being played. This API returns the result synchronously.

**Since:** 10

<!--Device-AudioRenderer-getUnderflowCountSync(): long--><!--Device-AudioRenderer-getUnderflowCountSync(): long-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| number | Number of underflow audio frames. |

<a id="getvolume"></a>
## getVolume

```TypeScript
getVolume(): number
```

Obtains the volume of the audio stream. This API returns the result synchronously.

**Since:** 12

<!--Device-AudioRenderer-getVolume(): double--><!--Device-AudioRenderer-getVolume(): double-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| number | Volume, in the range [0.0, 1.0]. |

<a id="off"></a>
## off('audioInterrupt')

```TypeScript
off(type: 'audioInterrupt', callback?: Callback<InterruptEvent>): void
```

Unsubscribes from the audio interruption event. This API uses an asynchronous callback to return the result.

**Since:** 18

<!--Device-AudioRenderer-off(type: 'audioInterrupt', callback?: Callback<InterruptEvent>): void--><!--Device-AudioRenderer-off(type: 'audioInterrupt', callback?: Callback<InterruptEvent>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Interrupt

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioInterrupt' | Yes | Event type. The event **'audioInterrupt'** is triggered when the audio focus is changed. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;InterruptEvent&gt; | No | Callback used to return the event information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

<a id="off-1"></a>
## off('markReach')

```TypeScript
off(type: 'markReach', callback?: Callback<number>): void
```

Unsubscribes from the mark reached event. This API uses an asynchronous callback to return the result.

**Since:** 8

<!--Device-AudioRenderer-off(type: 'markReach', callback?: Callback<long>): void--><!--Device-AudioRenderer-off(type: 'markReach', callback?: Callback<long>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'markReach' | Yes | Event type. The event **'markReach'** is triggered when the number of frames rendered reaches the value of the **frame** parameter. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;number&gt; | No | Callback used to return the value of the **frame** parameter.<br>**Since:** 18 |

<a id="off-2"></a>
## off('periodReach')

```TypeScript
off(type: 'periodReach', callback?: Callback<number>): void
```

Unsubscribes from the period reached event. This API uses an asynchronous callback to return the result.

**Since:** 8

<!--Device-AudioRenderer-off(type: 'periodReach', callback?: Callback<long>): void--><!--Device-AudioRenderer-off(type: 'periodReach', callback?: Callback<long>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'periodReach' | Yes | Event type. The event **'periodReach'** is triggered each time the number of frames rendered reaches the value of the **frame** parameter. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;number&gt; | No | Callback used to return the value of the **frame** parameter.<br>**Since:** 18 |

<a id="off-3"></a>
## off('stateChange')

```TypeScript
off(type: 'stateChange', callback?: Callback<AudioState>): void
```

Unsubscribes from the audio renderer state change event. This API uses an asynchronous callback to return the result.

**Since:** 18

<!--Device-AudioRenderer-off(type: 'stateChange', callback?: Callback<AudioState>): void--><!--Device-AudioRenderer-off(type: 'stateChange', callback?: Callback<AudioState>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'stateChange' | Yes | Event type. The event **'stateChange'** is triggered when the listening for audio renderer state change event is canceled. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;AudioState&gt; | No | Callback used to return the audio status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

<a id="off-4"></a>
## off('outputDeviceChange')

```TypeScript
off(type: 'outputDeviceChange', callback?: Callback<AudioDeviceDescriptors>): void
```

Unsubscribes from the audio output device change event. This API uses an asynchronous callback to return the result.

**Since:** 10

<!--Device-AudioRenderer-off(type: 'outputDeviceChange', callback?: Callback<AudioDeviceDescriptors>): void--><!--Device-AudioRenderer-off(type: 'outputDeviceChange', callback?: Callback<AudioDeviceDescriptors>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'outputDeviceChange' | Yes | Event type. The event **'outputDeviceChange'** is triggered when an audio output device is changed. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;AudioDeviceDescriptors&gt; | No | Callback used to return the output device descriptor of the current audio stream. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

<a id="off-5"></a>
## off('outputDeviceChangeWithInfo')

```TypeScript
off(type: 'outputDeviceChangeWithInfo', callback?: Callback<AudioStreamDeviceChangeInfo>): void
```

Unsubscribes from the change event of audio output devices and reasons. This API uses an asynchronous callback to return the result.

**Since:** 11

<!--Device-AudioRenderer-off(type: 'outputDeviceChangeWithInfo', callback?: Callback<AudioStreamDeviceChangeInfo>): void--><!--Device-AudioRenderer-off(type: 'outputDeviceChangeWithInfo', callback?: Callback<AudioStreamDeviceChangeInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'outputDeviceChangeWithInfo' | Yes | Event type. The event **'outputDeviceChangeWithInfo'** is triggered when an audio output device is changed, and the change reason is reported. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;AudioStreamDeviceChangeInfo&gt; | No | Callback used to return the output device descriptor of the current audio stream and the change reason. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

<a id="off-6"></a>
## off('writeData')

```TypeScript
off(type: 'writeData', callback?: AudioRendererWriteDataCallback): void
```

Unsubscribes from the audio data write event. This API uses an asynchronous callback to return the result.

**Since:** 11

<!--Device-AudioRenderer-off(type: 'writeData', callback?: AudioRendererWriteDataCallback): void--><!--Device-AudioRenderer-off(type: 'writeData', callback?: AudioRendererWriteDataCallback): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'writeData' | Yes | Event type. The event **'writeData'** is triggered when audio data needs to be written. |
| callback | [AudioRendererWriteDataCallback](arkts-audio-audio-audiorendererwritedatacallback-t.md) | No | Callback used to write the data to the buffer.<br>API version 11 does not support the return of the callback result. API version 12 and later support the return of the callback result [AudioDataCallbackResult](arkts-audio-audio-audiodatacallbackresult-e.md).<br>**Since:** 12 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

<a id="on"></a>
## on('audioInterrupt')

```TypeScript
on(type: 'audioInterrupt', callback: Callback<InterruptEvent>): void
```

Subscribes to the audio interruption event, which is triggered when the audio focus is changed. This API uses an asynchronous callback to return the result.

The AudioRenderer instance proactively gains the focus when the **start** event occurs and releases the focus when the **pause** or **stop** event occurs. Therefore, you do not need to request to gain or release the focus.

After this API is called, an [InterruptEvent](arkts-audio-audio-interruptevent-i.md) is received when the AudioRenderer instance fails to obtain the focus or an audio interruption event occurs (for example, the audio stream is interrupted by others). It is recommended that the application perform further processing based on the **InterruptEvent** information. For details, see [Introduction to Audio Focus](docroot://media/audio/audio-playback-concurrency.md).

**Since:** 9

<!--Device-AudioRenderer-on(type: 'audioInterrupt', callback: Callback<InterruptEvent>): void--><!--Device-AudioRenderer-on(type: 'audioInterrupt', callback: Callback<InterruptEvent>): void-End-->

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

<a id="on-1"></a>
## on('markReach')

```TypeScript
on(type: 'markReach', frame: number, callback: Callback<number>): void
```

Subscribes to the mark reached event, which is triggered (only once) when the number of frames rendered reaches the value of the **frame** parameter. This API uses an asynchronous callback to return the result.

For example, if **frame** is set to **100**, the callback is invoked when the number of rendered frames reaches the 100th frame.

**Since:** 8

<!--Device-AudioRenderer-on(type: 'markReach', frame: long, callback: Callback<long>): void--><!--Device-AudioRenderer-on(type: 'markReach', frame: long, callback: Callback<long>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'markReach' | Yes | Event type. The event **'markReach'** is triggered when the number of frames rendered reaches the value of the **frame** parameter. |
| frame | number | Yes | Number of frames to trigger the event. The value must be greater than **0**. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;number&gt; | Yes | Callback used to return the value of the **frame** parameter. |

<a id="on-2"></a>
## on('periodReach')

```TypeScript
on(type: 'periodReach', frame: number, callback: Callback<number>): void
```

Subscribes to the period reached event, which is triggered each time the number of frames rendered reaches the value of the **frame** parameter. In other words, the information is reported periodically. This API uses an asynchronous callback to return the result.

For example, if **frame** is set to **10**, the callback is invoked each time 10 frames are rendered, for example, when the number of frames rendered reaches the 10th frame, 20th frame, and 30th frame.

**Since:** 8

<!--Device-AudioRenderer-on(type: 'periodReach', frame: long, callback: Callback<long>): void--><!--Device-AudioRenderer-on(type: 'periodReach', frame: long, callback: Callback<long>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'periodReach' | Yes | Event type. The event **'periodReach'** is triggered each time the number of frames rendered reaches the value of the **frame** parameter. |
| frame | number | Yes | Number of frames to trigger the event. The value must be greater than **0**. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;number&gt; | Yes | Callback used to return the value of the **frame** parameter. |

<a id="on-3"></a>
## on('stateChange')

```TypeScript
on(type: 'stateChange', callback: Callback<AudioState>): void
```

Subscribes to the audio renderer state change event, which is triggered when the state of the audio renderer is changed. This API uses an asynchronous callback to return the result.

**Since:** 8

<!--Device-AudioRenderer-on(type: 'stateChange', callback: Callback<AudioState>): void--><!--Device-AudioRenderer-on(type: 'stateChange', callback: Callback<AudioState>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'stateChange' | Yes | Event type. The event **'stateChange'** is triggered when the state of the audio renderer is changed. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;AudioState&gt; | Yes | Callback used to return the audio status. |

<a id="on-4"></a>
## on('outputDeviceChange')

```TypeScript
on(type: 'outputDeviceChange', callback: Callback<AudioDeviceDescriptors>): void
```

Subscribes to the audio output device change event, which is triggered when an audio output device is changed.This API uses an asynchronous callback to return the result.

**Since:** 10

<!--Device-AudioRenderer-on(type: 'outputDeviceChange', callback: Callback<AudioDeviceDescriptors>): void--><!--Device-AudioRenderer-on(type: 'outputDeviceChange', callback: Callback<AudioDeviceDescriptors>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'outputDeviceChange' | Yes | Event type. The event **'outputDeviceChange'** is triggered when an audio output device is changed. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;AudioDeviceDescriptors&gt; | Yes | Callback used to return the output device descriptor of the current audio stream. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

<a id="on-5"></a>
## on('outputDeviceChangeWithInfo')

```TypeScript
on(type: 'outputDeviceChangeWithInfo', callback: Callback<AudioStreamDeviceChangeInfo>): void
```

Subscribes to the change event of audio output devices and reasons, which is triggered when an audio output device is changed, and the change reason is reported. This API uses an asynchronous callback to return the result.

**Since:** 11

<!--Device-AudioRenderer-on(type: 'outputDeviceChangeWithInfo', callback: Callback<AudioStreamDeviceChangeInfo>): void--><!--Device-AudioRenderer-on(type: 'outputDeviceChangeWithInfo', callback: Callback<AudioStreamDeviceChangeInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'outputDeviceChangeWithInfo' | Yes | Event type. The event **'outputDeviceChangeWithInfo'** is triggered when an audio output device is changed, and the change reason is reported. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;AudioStreamDeviceChangeInfo&gt; | Yes | Callback used to return the output device descriptor of the current audio stream and the change reason. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

<a id="on-6"></a>
## on('writeData')

```TypeScript
on(type: 'writeData', callback: AudioRendererWriteDataCallback): void
```

Subscribes to the audio data write event, which is triggered when audio data needs to be written. This API uses an asynchronous callback to return the result.

The callback function is used only to write audio data. Do not call AudioRenderer APIs in it.

**Since:** 11

<!--Device-AudioRenderer-on(type: 'writeData', callback: AudioRendererWriteDataCallback): void--><!--Device-AudioRenderer-on(type: 'writeData', callback: AudioRendererWriteDataCallback): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'writeData' | Yes | Event type. The event **'writeData'** is triggered when audio data needs to be written. |
| callback | [AudioRendererWriteDataCallback](arkts-audio-audio-audiorendererwritedatacallback-t.md) | Yes | Callback used to write the data to the buffer.<br>API version 11 does not support the return of the callback result. API version 12 and later support the return of the callback result [AudioDataCallbackResult](arkts-audio-audio-audiodatacallbackresult-e.md).<br>**Since:** 12 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

<a id="pause"></a>
## pause

```TypeScript
pause(callback: AsyncCallback<void>): void
```

Pauses this audio renderer. This API uses an asynchronous callback to return the result.

**Since:** 8

<!--Device-AudioRenderer-pause(callback: AsyncCallback<void>): void--><!--Device-AudioRenderer-pause(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

<a id="pause-1"></a>
## pause

```TypeScript
pause(): Promise<void>
```

Pauses this audio renderer. This API uses a promise to return the result.

**Since:** 8

<!--Device-AudioRenderer-pause(): Promise<void>--><!--Device-AudioRenderer-pause(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

<a id="release"></a>
## release

```TypeScript
release(callback: AsyncCallback<void>): void
```

Releases the renderer. This API uses an asynchronous callback to return the result.

**Since:** 8

<!--Device-AudioRenderer-release(callback: AsyncCallback<void>): void--><!--Device-AudioRenderer-release(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

<a id="release-1"></a>
## release

```TypeScript
release(): Promise<void>
```

Releases the renderer. This API uses a promise to return the result.

**Since:** 8

<!--Device-AudioRenderer-release(): Promise<void>--><!--Device-AudioRenderer-release(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

<a id="setaudioeffectmode"></a>
## setAudioEffectMode

```TypeScript
setAudioEffectMode(mode: AudioEffectMode, callback: AsyncCallback<void>): void
```

Sets an audio effect mode. This API uses an asynchronous callback to return the result.

**Since:** 10

<!--Device-AudioRenderer-setAudioEffectMode(mode: AudioEffectMode, callback: AsyncCallback<void>): void--><!--Device-AudioRenderer-setAudioEffectMode(mode: AudioEffectMode, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | [AudioEffectMode](arkts-audio-audio-audioeffectmode-e.md) | Yes | Audio effect mode to set. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. Return by callback. |

<a id="setaudioeffectmode-1"></a>
## setAudioEffectMode

```TypeScript
setAudioEffectMode(mode: AudioEffectMode): Promise<void>
```

Sets an audio effect mode. This API uses a promise to return the result.

**Since:** 10

<!--Device-AudioRenderer-setAudioEffectMode(mode: AudioEffectMode): Promise<void>--><!--Device-AudioRenderer-setAudioEffectMode(mode: AudioEffectMode): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | [AudioEffectMode](arkts-audio-audio-audioeffectmode-e.md) | Yes | Audio effect mode to set. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. Return by promise. |

<a id="setchannelblendmode"></a>
## setChannelBlendMode

```TypeScript
setChannelBlendMode(mode: ChannelBlendMode): void
```

Sets the audio channel blending mode. This API returns the result synchronously.

**Since:** 11

<!--Device-AudioRenderer-setChannelBlendMode(mode: ChannelBlendMode): void--><!--Device-AudioRenderer-setChannelBlendMode(mode: ChannelBlendMode): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | [ChannelBlendMode](arkts-audio-audio-channelblendmode-e.md) | Yes | Audio channel blending mode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |
| [6800103](../errorcode-audio.md#6800103-unsupported-state) | Operation not permit at current state. |

<a id="setdefaultoutputdevice"></a>
## setDefaultOutputDevice

```TypeScript
setDefaultOutputDevice(deviceType: DeviceType): Promise<void>
```

Temporarily changes the current audio device This function applies on audiorenderers whose StreamUsage are STREAM_USAGE_VOICE_COMMUNICATION/STREAM_USAGE_VIDEO_COMMUNICATION/STREAM_USAGE_VOICE_MESSAGE.Setting the device will only takes effect if no other accessory such as headphones are in use

**Since:** 12

<!--Device-AudioRenderer-setDefaultOutputDevice(deviceType: DeviceType): Promise<void>--><!--Device-AudioRenderer-setDefaultOutputDevice(deviceType: DeviceType): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceType | [DeviceType](../../apis-localization-kit/arkts-apis/arkts-localization-resourcemanager-devicetype-e.md) | Yes | the available deviceTypes are EARPIECE: Built-in earpiece SPEAKER: Built-in speaker DEFAULT: System default output device |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |
| [6800103](../errorcode-audio.md#6800103-unsupported-state) | Operation not permit at current state. |

<a id="setindependentaudiosessionstrategy"></a>
## setIndependentAudioSessionStrategy

```TypeScript
setIndependentAudioSessionStrategy(strategy: AudioSessionStrategy, behavior: number): void
```

Sets the independent audio session strategy and behavior parameters.

> **NOTE**  
>  
> If this API is called while an audio renderer is running, you must call the  
> [start](arkts-audio-audio-audiorenderer-i.md#start-1) API again for  
> the settings to take effect.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-AudioRenderer-setIndependentAudioSessionStrategy(strategy: AudioSessionStrategy, behavior: int): void--><!--Device-AudioRenderer-setIndependentAudioSessionStrategy(strategy: AudioSessionStrategy, behavior: int): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

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

<a id="setinterruptmode"></a>
## setInterruptMode

```TypeScript
setInterruptMode(mode: InterruptMode, callback: AsyncCallback<void>): void
```

Sets the audio interruption mode for the application. This API uses an asynchronous callback to return the result.

**Since:** 9

<!--Device-AudioRenderer-setInterruptMode(mode: InterruptMode, callback: AsyncCallback<void>): void--><!--Device-AudioRenderer-setInterruptMode(mode: InterruptMode, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Interrupt

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | [InterruptMode](arkts-audio-audio-interruptmode-e.md) | Yes | Audio interruption mode. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

<a id="setinterruptmode-1"></a>
## setInterruptMode

```TypeScript
setInterruptMode(mode: InterruptMode): Promise<void>
```

Sets the audio interruption mode for the application. This API uses a promise to return the result.

**Since:** 9

<!--Device-AudioRenderer-setInterruptMode(mode: InterruptMode): Promise<void>--><!--Device-AudioRenderer-setInterruptMode(mode: InterruptMode): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Interrupt

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | [InterruptMode](arkts-audio-audio-interruptmode-e.md) | Yes | Audio interruption mode. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

<a id="setinterruptmodesync"></a>
## setInterruptModeSync

```TypeScript
setInterruptModeSync(mode: InterruptMode): void
```

Sets the audio interruption mode for the application. This API returns the result synchronously.

**Since:** 10

<!--Device-AudioRenderer-setInterruptModeSync(mode: InterruptMode): void--><!--Device-AudioRenderer-setInterruptModeSync(mode: InterruptMode): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Interrupt

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | [InterruptMode](arkts-audio-audio-interruptmode-e.md) | Yes | Audio interruption mode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

<a id="setloudnessgain"></a>
## setLoudnessGain

```TypeScript
setLoudnessGain(loudnessGain: number): Promise<void>
```

Sets the loudness gain of this stream. The default loudness gain is 0.0dB.The stream usage of the audio renderer must be {@link StreamUsage#STREAM_USAGE_MUSIC},{@link StreamUsage#STREAM_USAGE_MOVIE} or {@link StreamUsage#STREAM_USAGE_AUDIOBOOK}.After calling this interface, the adjustment of loundness gain will take effect immediately.

**Since:** 20

<!--Device-AudioRenderer-setLoudnessGain(loudnessGain: double): Promise<void>--><!--Device-AudioRenderer-setLoudnessGain(loudnessGain: double): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| loudnessGain | number | Yes | Loudness gain to set, expressed in dB. The value type is float.The loudness gain changes from -90.0dB to 24.0dB. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |
| [6800104](../errorcode-audio.md#6800104-unsupported-parameter-value) | Operation is not supported on this renderer, e.g. the stream usage of this renderer is not one of {@link StreamUsage#STREAM_USAGE_MUSIC}, {@link StreamUsage#STREAM_USAGE_MOVIE} or{@link StreamUsage#STREAM_USAGE_AUDIOBOOK}, or this renderer is routed through the high-resolution playback path. |

<a id="setrenderrate"></a>
## setRenderRate

```TypeScript
setRenderRate(rate: AudioRendererRate, callback: AsyncCallback<void>): void
```

Sets the render rate. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 11

**Substitutes:** setSpeed

<!--Device-AudioRenderer-setRenderRate(rate: AudioRendererRate, callback: AsyncCallback<void>): void--><!--Device-AudioRenderer-setRenderRate(rate: AudioRendererRate, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rate | [AudioRendererRate](arkts-audio-audio-audiorendererrate-e.md) | Yes | Audio render rate. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

<a id="setrenderrate-1"></a>
## setRenderRate

```TypeScript
setRenderRate(rate: AudioRendererRate): Promise<void>
```

Sets the render rate. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 11

**Substitutes:** setSpeed

<!--Device-AudioRenderer-setRenderRate(rate: AudioRendererRate): Promise<void>--><!--Device-AudioRenderer-setRenderRate(rate: AudioRendererRate): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rate | [AudioRendererRate](arkts-audio-audio-audiorendererrate-e.md) | Yes | Audio render rate. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

<a id="setsilentmodeandmixwithothers"></a>
## setSilentModeAndMixWithOthers

```TypeScript
setSilentModeAndMixWithOthers(on: boolean): void
```

Sets the silent mode in concurrent playback for the audio stream.

If the silent mode in concurrent playback is enabled, the system mutes the audio stream and does not interrupt other audio streams. If the silent mode in concurrent playback is disabled, the audio stream can gain focus based on the system focus strategy.

**Since:** 12

<!--Device-AudioRenderer-setSilentModeAndMixWithOthers(on: boolean): void--><!--Device-AudioRenderer-setSilentModeAndMixWithOthers(on: boolean): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| on | boolean | Yes | Whether to enable or disable the silent mode in concurrent playback for the audio stream.**true** to enable, **false** otherwise. |

<a id="setspeed"></a>
## setSpeed

```TypeScript
setSpeed(speed: number): void
```

Sets the playback speed.

**Since:** 11

<!--Device-AudioRenderer-setSpeed(speed: double): void--><!--Device-AudioRenderer-setSpeed(speed: double): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| speed | number | Yes | Playback rate, which ranges from 0.25 to 4.0. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

<a id="setvolume"></a>
## setVolume

```TypeScript
setVolume(volume: number, callback: AsyncCallback<void>): void
```

Sets the volume for the audio stream. This API uses an asynchronous callback to return the result.

**Since:** 9

<!--Device-AudioRenderer-setVolume(volume: double, callback: AsyncCallback<void>): void--><!--Device-AudioRenderer-setVolume(volume: double, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volume | number | Yes | Volume to set, which is in the range [0.0, 1.0]. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

<a id="setvolume-1"></a>
## setVolume

```TypeScript
setVolume(volume: number): Promise<void>
```

Sets the volume for the audio stream. This API uses a promise to return the result.

**Since:** 9

<!--Device-AudioRenderer-setVolume(volume: double): Promise<void>--><!--Device-AudioRenderer-setVolume(volume: double): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volume | number | Yes | Volume to set, which is in the range [0.0, 1.0]. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

<a id="setvolumewithramp"></a>
## setVolumeWithRamp

```TypeScript
setVolumeWithRamp(volume: number, duration: number): void
```

Sets a volume ramp. This API returns the result synchronously.

**Since:** 11

<!--Device-AudioRenderer-setVolumeWithRamp(volume: double, duration: int): void--><!--Device-AudioRenderer-setVolumeWithRamp(volume: double, duration: int): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volume | number | Yes | Target volume, within the range [0.0, 1.0]. |
| duration | number | Yes | Time range during which the ramp applies, in ms. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

<a id="start"></a>
## start

```TypeScript
start(callback: AsyncCallback<void>): void
```

Starts this audio renderer. This API uses an asynchronous callback to return the result.

**Since:** 8

<!--Device-AudioRenderer-start(callback: AsyncCallback<void>): void--><!--Device-AudioRenderer-start(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. If the operation fails, an error object with one of the following error codes is returned:<br>Error code 6800301: indicates abnormal status, focus preemption failure, and abnormal system processing. For details, see system logs. |

<a id="start-1"></a>
## start

```TypeScript
start(): Promise<void>
```

Starts this audio renderer. This API uses a promise to return the result.

**Since:** 8

<!--Device-AudioRenderer-start(): Promise<void>--><!--Device-AudioRenderer-start(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise object, which indicates that the renderer is started successfully. If the operation fails, an error object with one of the following error codes is returned:<br>Error code 6800301: indicates abnormal status, focus preemption failure, and abnormal system processing. For details, see system logs. |

<a id="stop"></a>
## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

Stops this audio renderer. This API uses an asynchronous callback to return the result.

**Since:** 8

<!--Device-AudioRenderer-stop(callback: AsyncCallback<void>): void--><!--Device-AudioRenderer-stop(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

<a id="stop-1"></a>
## stop

```TypeScript
stop(): Promise<void>
```

Stops this audio renderer. This API uses a promise to return the result.

**Since:** 8

<!--Device-AudioRenderer-stop(): Promise<void>--><!--Device-AudioRenderer-stop(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

<a id="write"></a>
## write

```TypeScript
write(buffer: ArrayBuffer, callback: AsyncCallback<number>): void
```

Writes the buffer. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 11

**Substitutes:** event:writeData

<!--Device-AudioRenderer-write(buffer: ArrayBuffer, callback: AsyncCallback<number>): void--><!--Device-AudioRenderer-write(buffer: ArrayBuffer, callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer | Yes | Data to be written to the buffer. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is the number of bytes written; otherwise, **err** is an error object. |

<a id="write-1"></a>
## write

```TypeScript
write(buffer: ArrayBuffer): Promise<number>
```

Writes the buffer. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 11

**Substitutes:** event:writeData

<!--Device-AudioRenderer-write(buffer: ArrayBuffer): Promise<number>--><!--Device-AudioRenderer-write(buffer: ArrayBuffer): Promise<number>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer | Yes | Data to be written to the buffer. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the number of written bytes. |

## state

```TypeScript
readonly state: AudioState
```

Audio renderer state.

**Type:** AudioState

**Since:** 8

<!--Device-AudioRenderer-readonly state: AudioState--><!--Device-AudioRenderer-readonly state: AudioState-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

