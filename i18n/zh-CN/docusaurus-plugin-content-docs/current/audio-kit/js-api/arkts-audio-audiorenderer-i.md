# AudioRenderer

This interface provides APIs for audio rendering. Before calling any API in AudioRenderer, you must use [createAudioRenderer](arkts-audio-createaudiorenderer-f.md#createAudioRenderer-1) to create an AudioRenderer instance. > **NOTE** > > - The initial APIs of this interface are supported since API version 8.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## drain

```TypeScript
drain(callback: AsyncCallback<void>): void
```

Drains the playback buffer. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

## drain

```TypeScript
drain(): Promise<void>
```

Drains the playback buffer. This API uses a promise to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

## flush

```TypeScript
flush(): Promise<void>
```

Flushes the buffer. This API is available when [AudioState](arkts-audio-audiostate-e.md#AudioState) is **STATE_RUNNING**, **STATE_PAUSED**, or **STATE_STOPPED**. This API uses a promise to return the result.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800103 | Operation not permit at current state. Return by promise. |

## getAudioEffectMode

```TypeScript
getAudioEffectMode(callback: AsyncCallback<AudioEffectMode>): void
```

Obtains the audio effect mode in use. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AudioEffectMode> | 是 | Callback used to return the result. If the operation is  successful, err is undefined and data is the audio effect mode obtained; otherwise, err is an  error object. |

## getAudioEffectMode

```TypeScript
getAudioEffectMode(): Promise<AudioEffectMode>
```

Obtains the audio effect mode in use. This API uses a promise to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AudioEffectMode> | Promise used to return the audio effect mode. |

## getAudioStreamId

```TypeScript
getAudioStreamId(callback: AsyncCallback<long>): void
```

Obtains the stream ID of this audio renderer. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;long> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is the stream ID obtained; otherwise, err is an error object. |

## getAudioStreamId

```TypeScript
getAudioStreamId(): Promise<long>
```

Obtains the stream ID of this audio renderer. This API uses a promise to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | Promise used to return the stream ID. |

## getAudioStreamIdSync

```TypeScript
getAudioStreamIdSync(): long
```

Obtains the stream ID of this audio renderer. This API returns the result synchronously.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | Stream ID. |

## getAudioTime

```TypeScript
getAudioTime(callback: AsyncCallback<long>): void
```

Obtains the timestamp of the current playback position, measured in nanoseconds from the Unix epoch (January 1, 1 970). This API uses an asynchronous callback to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;long> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is the number of nanoseconds obtained; otherwise, err is an error  object. |

## getAudioTime

```TypeScript
getAudioTime(): Promise<long>
```

Obtains the timestamp of the current playback position, measured in nanoseconds from the Unix epoch (January 1, 1 970). This API uses a promise to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | Promise used to return the timestamp. |

## getAudioTimestampInfo

```TypeScript
getAudioTimestampInfo(): Promise<AudioTimestampInfo>
```

Obtains the timestamp and position information of an output audio stream. It adapts to the speed adjustment interface. This API uses a promise to return the result. This information is commonly used for audio and video synchronization. Note that when the actual playback position (**framePosition**) is 0, the timestamp remains fixed until the stream begins to play. The playback position is also reset when **Flush** is called. Additionally, changes in the audio stream route, such as switching devices or output types, will reset the playback position, whereas the timestamp keeps increasing. You are advised to call this API to obtain the corresponding value only when the actual playback position and timestamp are stable. This API adapts to the speed adjustment interface. For example, if the playback speed is set to 2x, the rate at which the playback position increases is also twice the normal speed.

**起始版本：** 19

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AudioTimestampInfo> | Promise used to return the audio stream timestamp and the current data  frame position. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800103 | Operation not permit at current state. |

## getAudioTimestampInfoSync

```TypeScript
getAudioTimestampInfoSync(): AudioTimestampInfo
```

Obtains the timestamp and position information of an output audio stream. It adapts to the speed adjustment interface. This API returns the result synchronously. This information is commonly used for audio and video synchronization. Note that when the actual playback position (**framePosition**) is 0, the timestamp remains fixed until the stream begins to play. The playback position is also reset when **Flush** is called. Additionally, changes in the audio stream route, such as switching devices or output types, will reset the playback position, whereas the timestamp keeps increasing. You are advised to call this API to obtain the corresponding value only when the actual playback position and timestamp are stable. This API adapts to the speed adjustment interface. For example, if the playback speed is set to 2x, the rate at which the playback position increases is also twice the normal speed.

**起始版本：** 19

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioTimestampInfo | Information about the audio stream timestamp and the current data frame position. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800103 | Operation not permit at current state. |

## getAudioTimeSync

```TypeScript
getAudioTimeSync(): long
```

Obtains the timestamp of the current playback position, measured in nanoseconds from the Unix epoch (January 1, 1 970). This API returns the result synchronously.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | Timestamp. |

## getBufferSize

```TypeScript
getBufferSize(callback: AsyncCallback<long>): void
```

Obtains a reasonable minimum buffer size in bytes for rendering. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;long> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is the minimum buffer size obtained; otherwise, err is an error  object. The unit is bytes. |

## getBufferSize

```TypeScript
getBufferSize(): Promise<long>
```

Obtains a reasonable minimum buffer size in bytes for rendering. This API uses a promise to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | Promise used to return the buffer size.  The unit is bytes. |

## getBufferSizeSync

```TypeScript
getBufferSizeSync(): long
```

Obtains a reasonable minimum buffer size in bytes for rendering. This API returns the result synchronously.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | Buffer size, in bytes. |

## getCurrentOutputDevices

```TypeScript
getCurrentOutputDevices(callback: AsyncCallback<AudioDeviceDescriptors>): void
```

Obtains the output device information of the audio stream. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AudioDeviceDescriptors> | 是 | Callback used to return the result. If the operation  is successful, err is undefined and data is the output device information obtained; otherwise,  err is an error object. |

## getCurrentOutputDevices

```TypeScript
getCurrentOutputDevices(): Promise<AudioDeviceDescriptors>
```

Obtains the output device information of the audio stream. This API uses a promise to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Device

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AudioDeviceDescriptors> | Promise used to return the output device information. |

## getCurrentOutputDevicesSync

```TypeScript
getCurrentOutputDevicesSync(): AudioDeviceDescriptors
```

Obtains the output device information of the audio stream. This API returns the result synchronously.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Device

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioDeviceDescriptors | Output device information. |

## getLatency

```TypeScript
getLatency(type: AudioLatencyType): int
```

Obtains the estimated latency of the current audio route. > **NOTE** > > - The estimated latency of a wireless audio device may be inaccurate. The result is for reference only. > > - Since the latency is not counted in the real-time buffer, you are advised to obtain the latency only when the > audio playback starts to avoid frequent calls. Otherwise, the API call may be blocked due to route switching. > > - You are advised to use [getAudioTimestampInfo]audio.AudioRenderer.getAudioTimestampInfo or > [getAudioTimestampInfoSync]audio.AudioRenderer.getAudioTimestampInfoSync to implement audio and video > synchronization after the audio is output to the hardware.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | AudioLatencyType | 是 | Obtains the latency type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Audio latency, in milliseconds. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |
| 6800103 | Operation not permitted in release state. |
| 6800301 | System internal error, like audio service error. |

## getLoudnessGain

```TypeScript
getLoudnessGain(): double
```

Gets loudness gain of this stream.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| double | Returns one float value, unit is dB. |

## getMaxStreamVolume

```TypeScript
getMaxStreamVolume(callback: AsyncCallback<double>): void
```

Obtains the maximum volume of the audio stream. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;double> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is the maximum volume obtained; otherwise, err is an error object.The volume range is [0.0, 1.0]. |

## getMaxStreamVolume

```TypeScript
getMaxStreamVolume(): Promise<double>
```

Obtains the maximum volume of the audio stream. This API uses a promise to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;double> | Promise used to return the maximum volume of the audio stream.  The volume range is [0.0, 1.0]. |

## getMaxStreamVolumeSync

```TypeScript
getMaxStreamVolumeSync(): double
```

Obtains the maximum volume of the audio stream. This API returns the result synchronously.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| double | Maximum volume of the audio stream, which ranges from 0.0 to 1.0. |

## getMinStreamVolume

```TypeScript
getMinStreamVolume(callback: AsyncCallback<double>): void
```

Obtains the minimum volume of the audio stream. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;double> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is the minimum volume obtained; otherwise, err is an error object.The volume range is [0.0, 1.0]. |

## getMinStreamVolume

```TypeScript
getMinStreamVolume(): Promise<double>
```

Obtains the minimum volume of the audio stream. This API uses a promise to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;double> | Promise used to return the minimum volume of the audio stream.  The volume range is [0.0, 1.0]. |

## getMinStreamVolumeSync

```TypeScript
getMinStreamVolumeSync(): double
```

Obtains the minimum volume of the audio stream. This API returns the result synchronously.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| double | Minimum volume of the audio stream, which ranges from 0.0 to 1.0. |

## getRendererInfo

```TypeScript
getRendererInfo(callback: AsyncCallback<AudioRendererInfo>): void
```

Obtains the information about this audio renderer. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AudioRendererInfo> | 是 | Callback used to return the result. If the operation is  successful, err is undefined and data is the audio renderer information obtained; otherwise,  err is an error object. |

## getRendererInfo

```TypeScript
getRendererInfo(): Promise<AudioRendererInfo>
```

Obtains the information about this audio renderer. This API uses a promise to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AudioRendererInfo> | Promise used to return the audio renderer information. |

## getRendererInfoSync

```TypeScript
getRendererInfoSync(): AudioRendererInfo
```

Obtains the information about this audio renderer. This API returns the result synchronously.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioRendererInfo | Audio renderer information. |

## getRenderRate

```TypeScript
getRenderRate(callback: AsyncCallback<AudioRendererRate>): void
```

Obtains the audio renderer rate. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 11

**替代接口：** ohos.multimedia.audio.AudioRenderer#getSpeed

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AudioRendererRate> | 是 | Callback used to return the result. If the operation is  successful, err is undefined and data is the render rate obtained; otherwise, err is an error  object. |

## getRenderRate

```TypeScript
getRenderRate(): Promise<AudioRendererRate>
```

Obtains the audio renderer rate. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 11

**替代接口：** ohos.multimedia.audio.AudioRenderer#getSpeed

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AudioRendererRate> | Promise used to return the render rate. |

## getRenderRateSync

```TypeScript
getRenderRateSync(): AudioRendererRate
```

Obtains the audio renderer rate. This API returns the result synchronously.

**起始版本：** 10

**废弃版本：** 11

**替代接口：** ohos.multimedia.audio.AudioRenderer#getSpeed

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioRendererRate | Audio render rate. |

## getSilentModeAndMixWithOthers

```TypeScript
getSilentModeAndMixWithOthers(): boolean
```

Obtains the silent mode in concurrent playback for the audio stream.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Enabled status of the silent mode in concurrent playback. true if enabled, false  otherwise. |

## getSpeed

```TypeScript
getSpeed(): double
```

Obtains the playback speed.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| double | Playback rate, which ranges from 0.25 to 4.0. |

## getStreamInfo

```TypeScript
getStreamInfo(callback: AsyncCallback<AudioStreamInfo>): void
```

Obtains the stream information of this audio renderer. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AudioStreamInfo> | 是 | Callback used to return the result. If the operation is  successful, err is undefined and data is the stream information obtained; otherwise, err is  an error object. |

## getStreamInfo

```TypeScript
getStreamInfo(): Promise<AudioStreamInfo>
```

Obtains the stream information of this audio renderer. This API uses a promise to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AudioStreamInfo> | Promise used to return the stream information. |

## getStreamInfoSync

```TypeScript
getStreamInfoSync(): AudioStreamInfo
```

Obtains the stream information of this audio renderer. This API returns the result synchronously.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioStreamInfo | Stream information. |

## getTarget

```TypeScript
getTarget(): RenderTarget
```

Gets the currently render target of this audio renderer. If the render target has not been changed, the default value {@link RenderTarget#PLAYBACK} will be returned. If the {@link setTarget} has been called before calling this interface, ensure its promise object has been resolved successfully, otherwise, the obtained value may be inaccurate.

**起始版本：** 22

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RenderTarget | Render target of this audio renderer. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |

**示例：**

```TypeScript
async function getTarget(){
  // 可选步骤：设置注入模式。
  await audioRenderer.setTarget(audio.RenderTarget.INJECT_TO_VOICE_COMMUNICATION_CAPTURE);
  console.info('Succeeded in setting target.');

  // 调用此接口前，若已经调用过SetTarget接口，请确保SetTarget接口已经设置成功，否则获取到的数值可能不准确。
  let renderTarget = audioRenderer.getTarget();
  console.info(`Succeeded in getting target, RenderTarget: ${renderTarget}.`);
}

```

## getUnderflowCount

```TypeScript
getUnderflowCount(callback: AsyncCallback<long>): void
```

Obtains the number of underflow audio frames in the audio stream that is being played. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;long> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is the number of underloaded audio frames obtained; otherwise, err  is an error object. |

## getUnderflowCount

```TypeScript
getUnderflowCount(): Promise<long>
```

Obtains the number of underflow audio frames in the audio stream that is being played. This API uses a promise to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | Promise used to return the number of underflow audio frames. |

## getUnderflowCountSync

```TypeScript
getUnderflowCountSync(): long
```

Obtains the number of underflow audio frames in the audio stream that is being played. This API returns the result synchronously.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | Number of underflow audio frames. |

## getVolume

```TypeScript
getVolume(): double
```

Obtains the volume of the audio stream. This API returns the result synchronously.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| double | Volume, in the range [0.0, 1.0]. |

## off('audioInterrupt')

```TypeScript
off(type: 'audioInterrupt', callback?: Callback<InterruptEvent>): void
```

Unsubscribes from the audio interruption event. This API uses an asynchronous callback to return the result.

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.Audio.Interrupt

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'audioInterrupt' | 是 | Event type. The event 'audioInterrupt' is triggered when the audio focus  is changed. |
| callback | Callback&lt;InterruptEvent> | 否 | Callback used to return the event information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## off('markReach')

```TypeScript
off(type: 'markReach', callback?: Callback<long>): void
```

Unsubscribes from the mark reached event. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'markReach' | 是 | Event type. The event 'markReach' is triggered when the number of frames  rendered reaches the value of the frame parameter. |
| callback | Callback&lt;long> | 否 | Callback used to return the value of the frame parameter. [since 18] |

## off('periodReach')

```TypeScript
off(type: 'periodReach', callback?: Callback<long>): void
```

Unsubscribes from the period reached event. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'periodReach' | 是 | Event type. The event 'periodReach' is triggered each time the number of  frames rendered reaches the value of the frame parameter. |
| callback | Callback&lt;long> | 否 | Callback used to return the value of the frame parameter. [since 18] |

## off('stateChange')

```TypeScript
off(type: 'stateChange', callback?: Callback<AudioState>): void
```

Unsubscribes from the audio renderer state change event. This API uses an asynchronous callback to return the result.

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'stateChange' | 是 | Event type. The event 'stateChange' is triggered when the listening for audio  renderer state change event is canceled. |
| callback | Callback&lt;AudioState> | 否 | Callback used to return the audio status. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## off('outputDeviceChange')

```TypeScript
off(type: 'outputDeviceChange', callback?: Callback<AudioDeviceDescriptors>): void
```

Unsubscribes from the audio output device change event. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'outputDeviceChange' | 是 | Event type. The event 'outputDeviceChange' is triggered when an audio  output device is changed. |
| callback | Callback&lt;AudioDeviceDescriptors> | 否 | Callback used to return the output device descriptor of  the current audio stream. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## off('outputDeviceChangeWithInfo')

```TypeScript
off(type: 'outputDeviceChangeWithInfo', callback?: Callback<AudioStreamDeviceChangeInfo>): void
```

Unsubscribes from the change event of audio output devices and reasons. This API uses an asynchronous callback to return the result.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'outputDeviceChangeWithInfo' | 是 | Event type. The event 'outputDeviceChangeWithInfo' is  triggered when an audio output device is changed, and the change reason is reported. |
| callback | Callback&lt;AudioStreamDeviceChangeInfo> | 否 | Callback used to return the output device descriptor  of the current audio stream and the change reason. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## off('writeData')

```TypeScript
off(type: 'writeData', callback?: AudioRendererWriteDataCallback): void
```

Unsubscribes from the audio data write event. This API uses an asynchronous callback to return the result.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'writeData' | 是 | Event type. The event 'writeData' is triggered when audio data needs to be  written. |
| callback | AudioRendererWriteDataCallback | 否 | Callback used to write the data to the buffer. API  version 11 does not support the return of the callback result. API version 12 and later support the return of  the callback result [AudioDataCallbackResult](arkts-audio-audiodatacallbackresult-e.md#AudioDataCallbackResult)  . [since 12] |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## offAudioInterrupt

```TypeScript
offAudioInterrupt(callback?: Callback<InterruptEvent>): void
```

Unsubscribes audio interrupt events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Interrupt

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;InterruptEvent> | 否 | Callback used to listen for interrupt callback. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## offMarkReach

```TypeScript
offMarkReach(callback?: Callback<long>): void
```

Unsubscribes from mark reached events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;long> | 否 | Callback invoked when the event is triggered. |

## offOutputDeviceChange

```TypeScript
offOutputDeviceChange(callback?: Callback<AudioDeviceDescriptors>): void
```

Unsubscribes output device change event callback.

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

## offOutputDeviceChangeWithInfo

```TypeScript
offOutputDeviceChangeWithInfo(callback?: Callback<AudioStreamDeviceChangeInfo>): void
```

Unsubscribes output device change event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioStreamDeviceChangeInfo> | 否 | Callback used in subscribe. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## offPeriodReach

```TypeScript
offPeriodReach(callback?: Callback<long>): void
```

Unsubscribes from period reached events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;long> | 否 | Callback invoked when the event is triggered. |

## offStateChange

```TypeScript
offStateChange(callback?: Callback<AudioState>): void
```

Unsubscribes audio state change event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioState> | 否 | Callback invoked when state change. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## offWriteData

```TypeScript
offWriteData(callback?: AudioRendererWriteDataCallback): void
```

Unsubscribes audio data callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AudioRendererWriteDataCallback | 否 | Audio renderer write data callback. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## on('audioInterrupt')

```TypeScript
on(type: 'audioInterrupt', callback: Callback<InterruptEvent>): void
```

Subscribes to the audio interruption event, which is triggered when the audio focus is changed. This API uses an asynchronous callback to return the result. The AudioRenderer instance proactively gains the focus when the **start** event occurs and releases the focus when the **pause** or **stop** event occurs. Therefore, you do not need to request to gain or release the focus. After this API is called, an [InterruptEvent](arkts-audio-interruptevent-i.md#InterruptEvent) is received when the AudioRenderer instance fails to obtain the focus or an audio interruption event occurs (for example, the audio stream is interrupted by others). It is recommended that the application perform further processing based on the **InterruptEvent** information. For details, see [Introduction to Audio Focus](docroot://media/audio/audio-playback-concurrency.md).

**起始版本：** 9

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

## on('markReach')

```TypeScript
on(type: 'markReach', frame: long, callback: Callback<long>): void
```

Subscribes to the mark reached event, which is triggered (only once) when the number of frames rendered reaches the value of the **frame** parameter. This API uses an asynchronous callback to return the result. For example, if **frame** is set to **100**, the callback is invoked when the number of rendered frames reaches the 100th frame.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'markReach' | 是 | Event type. The event 'markReach' is triggered when the number of frames  rendered reaches the value of the frame parameter. |
| frame | long | 是 | Number of frames to trigger the event. The value must be greater than 0. |
| callback | Callback&lt;long> | 是 | Callback used to return the value of the frame parameter. |

## on('periodReach')

```TypeScript
on(type: 'periodReach', frame: long, callback: Callback<long>): void
```

Subscribes to the period reached event, which is triggered each time the number of frames rendered reaches the value of the **frame** parameter. In other words, the information is reported periodically. This API uses an asynchronous callback to return the result. For example, if **frame** is set to **10**, the callback is invoked each time 10 frames are rendered, for example , when the number of frames rendered reaches the 10th frame, 20th frame, and 30th frame.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'periodReach' | 是 | Event type. The event 'periodReach' is triggered each time the number of  frames rendered reaches the value of the frame parameter. |
| frame | long | 是 | Number of frames to trigger the event. The value must be greater than 0. |
| callback | Callback&lt;long> | 是 | Callback used to return the value of the frame parameter. |

## on('stateChange')

```TypeScript
on(type: 'stateChange', callback: Callback<AudioState>): void
```

Subscribes to the audio renderer state change event, which is triggered when the state of the audio renderer is changed. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'stateChange' | 是 | Event type. The event 'stateChange' is triggered when the state of the audio  renderer is changed. |
| callback | Callback&lt;AudioState> | 是 | Callback used to return the audio status. |

## on('outputDeviceChange')

```TypeScript
on(type: 'outputDeviceChange', callback: Callback<AudioDeviceDescriptors>): void
```

Subscribes to the audio output device change event, which is triggered when an audio output device is changed. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'outputDeviceChange' | 是 | Event type. The event 'outputDeviceChange' is triggered when an audio  output device is changed. |
| callback | Callback&lt;AudioDeviceDescriptors> | 是 | Callback used to return the output device descriptor of  the current audio stream. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## on('outputDeviceChangeWithInfo')

```TypeScript
on(type: 'outputDeviceChangeWithInfo', callback: Callback<AudioStreamDeviceChangeInfo>): void
```

Subscribes to the change event of audio output devices and reasons, which is triggered when an audio output device is changed, and the change reason is reported. This API uses an asynchronous callback to return the result.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'outputDeviceChangeWithInfo' | 是 | Event type. The event 'outputDeviceChangeWithInfo' is  triggered when an audio output device is changed, and the change reason is reported. |
| callback | Callback&lt;AudioStreamDeviceChangeInfo> | 是 | Callback used to return the output device descriptor  of the current audio stream and the change reason. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## on('writeData')

```TypeScript
on(type: 'writeData', callback: AudioRendererWriteDataCallback): void
```

Subscribes to the audio data write event, which is triggered when audio data needs to be written. This API uses an asynchronous callback to return the result. The callback function is used only to write audio data. Do not call AudioRenderer APIs in it.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'writeData' | 是 | Event type. The event 'writeData' is triggered when audio data needs to be  written. |
| callback | AudioRendererWriteDataCallback | 是 | Callback used to write the data to the buffer. API  version 11 does not support the return of the callback result. API version 12 and later support the return of  the callback result [AudioDataCallbackResult](arkts-audio-audiodatacallbackresult-e.md#AudioDataCallbackResult)  . [since 12] |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## onAudioInterrupt

```TypeScript
onAudioInterrupt(callback: Callback<InterruptEvent>): void
```

Listens for audio interrupt events. This method uses a callback to get interrupt events. The interrupt event is triggered when audio playback is interrupted.

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

## onMarkReach

```TypeScript
onMarkReach(frame: long, callback: Callback<long>): void
```

Subscribes to mark reached events. When the number of frames rendered reaches the value of the frame parameter, the callback is invoked.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| frame | long | 是 | Number of frames to trigger the event. The value must be greater than 0. |
| callback | Callback&lt;long> | 是 | Callback invoked when the event is triggered. |

## onOutputDeviceChange

```TypeScript
onOutputDeviceChange(callback: Callback<AudioDeviceDescriptors>): void
```

Subscribes output device change event callback. The event is triggered when output device change for this stream.

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

## onOutputDeviceChangeWithInfo

```TypeScript
onOutputDeviceChangeWithInfo(callback: Callback<AudioStreamDeviceChangeInfo>): void
```

Subscribes output device change event callback. The event is triggered when output device change for this stream.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioStreamDeviceChangeInfo> | 是 | Callback used to listen device change event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## onPeriodReach

```TypeScript
onPeriodReach(frame: long, callback: Callback<long>): void
```

Subscribes to period reached events. When the period of frame rendering reaches the value of frame parameter, the callback is invoked.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| frame | long | 是 | Period during which frame rendering is listened. The value must be greater than 0. |
| callback | Callback&lt;long> | 是 | Callback invoked when the event is triggered. |

## onStateChange

```TypeScript
onStateChange(callback: Callback<AudioState>): void
```

Subscribes audio renderer state change event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioState> | 是 | Callback invoked when state change. |

## onWriteData

```TypeScript
onWriteData(callback: AudioRendererWriteDataCallback): void
```

Subscribes audio data callback. The event is triggered when audio buffer is available for writing more data.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AudioRendererWriteDataCallback | 是 | Audio renderer write data callback. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## pause

```TypeScript
pause(callback: AsyncCallback<void>): void
```

Pauses this audio renderer. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

## pause

```TypeScript
pause(): Promise<void>
```

Pauses this audio renderer. This API uses a promise to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

## release

```TypeScript
release(callback: AsyncCallback<void>): void
```

Releases the renderer. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

## release

```TypeScript
release(): Promise<void>
```

Releases the renderer. This API uses a promise to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

## setAudioEffectMode

```TypeScript
setAudioEffectMode(mode: AudioEffectMode, callback: AsyncCallback<void>): void
```

Sets an audio effect mode. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | AudioEffectMode | 是 | Audio effect mode to set. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. Return by callback. |

## setAudioEffectMode

```TypeScript
setAudioEffectMode(mode: AudioEffectMode): Promise<void>
```

Sets an audio effect mode. This API uses a promise to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | AudioEffectMode | 是 | Audio effect mode to set. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. Return by promise. |

## setChannelBlendMode

```TypeScript
setChannelBlendMode(mode: ChannelBlendMode): void
```

Sets the audio channel blending mode. This API returns the result synchronously.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | ChannelBlendMode | 是 | Audio channel blending mode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |
| 6800103 | Operation not permit at current state. |

## setDefaultOutputDevice

```TypeScript
setDefaultOutputDevice(deviceType: DeviceType): Promise<void>
```

Temporarily changes the current audio device This function applies on audiorenderers whose StreamUsage are STREAM_USAGE_VOICE_COMMUNICATION/STREAM_USAGE_VIDEO_COMMUNICATION/STREAM_USAGE_VOICE_MESSAGE. Setting the device will only takes effect if no other accessory such as headphones are in use

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceType | DeviceType | 是 | the available deviceTypes are  EARPIECE: Built-in earpiece  SPEAKER: Built-in speaker  DEFAULT: System default output device |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |
| 6800103 | Operation not permit at current state. |

## setIndependentAudioSessionStrategy

```TypeScript
setIndependentAudioSessionStrategy(strategy: AudioSessionStrategy, behavior: int): void
```

Sets the independent audio session strategy and behavior parameters. > **NOTE** > > If this API is called while an audio renderer is running, you must call the > [start](arkts-audio-audiorenderer-i.md#start) API again for > the settings to take effect.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

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

## setInterruptMode

```TypeScript
setInterruptMode(mode: InterruptMode, callback: AsyncCallback<void>): void
```

Sets the audio interruption mode for the application. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Interrupt

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | InterruptMode | 是 | Audio interruption mode. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

## setInterruptMode

```TypeScript
setInterruptMode(mode: InterruptMode): Promise<void>
```

Sets the audio interruption mode for the application. This API uses a promise to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Interrupt

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | InterruptMode | 是 | Audio interruption mode. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

## setInterruptModeSync

```TypeScript
setInterruptModeSync(mode: InterruptMode): void
```

Sets the audio interruption mode for the application. This API returns the result synchronously.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Interrupt

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | InterruptMode | 是 | Audio interruption mode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## setLoudnessGain

```TypeScript
setLoudnessGain(loudnessGain: double): Promise<void>
```

Sets the loudness gain of this stream. The default loudness gain is 0.0dB. The stream usage of the audio renderer must be {@link StreamUsage#STREAM_USAGE_MUSIC}, {@link StreamUsage#STREAM_USAGE_MOVIE} or {@link StreamUsage#STREAM_USAGE_AUDIOBOOK}. After calling this interface, the adjustment of loundness gain will take effect immediately.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| loudnessGain | double | 是 | Loudness gain to set, expressed in dB. The value type is float.  The loudness gain changes from -90.0dB to 24.0dB. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |
| 6800104 | Operation is not supported on this renderer, e.g. the stream usage of this  renderer is not one of {@link StreamUsage#STREAM_USAGE_MUSIC}, {@link StreamUsage#STREAM_USAGE_MOVIE} or  {@link StreamUsage#STREAM_USAGE_AUDIOBOOK}, or this renderer is routed through the high-resolution playback path. |

## setRenderRate

```TypeScript
setRenderRate(rate: AudioRendererRate, callback: AsyncCallback<void>): void
```

Sets the render rate. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 11

**替代接口：** ohos.multimedia.audio.AudioRenderer#setSpeed

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rate | AudioRendererRate | 是 | Audio render rate. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

## setRenderRate

```TypeScript
setRenderRate(rate: AudioRendererRate): Promise<void>
```

Sets the render rate. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 11

**替代接口：** ohos.multimedia.audio.AudioRenderer#setSpeed

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rate | AudioRendererRate | 是 | Audio render rate. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

## setSilentModeAndMixWithOthers

```TypeScript
setSilentModeAndMixWithOthers(on: boolean): void
```

Sets the silent mode in concurrent playback for the audio stream. If the silent mode in concurrent playback is enabled, the system mutes the audio stream and does not interrupt other audio streams. If the silent mode in concurrent playback is disabled, the audio stream can gain focus based on the system focus strategy.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| on | boolean | 是 | Whether to enable or disable the silent mode in concurrent playback for the audio stream.  true to enable, false otherwise. |

## setSpeed

```TypeScript
setSpeed(speed: double): void
```

Sets the playback speed.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| speed | double | 是 | Playback rate, which ranges from 0.25 to 4.0. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## setTarget

```TypeScript
setTarget(target: RenderTarget): Promise<void>
```

Sets the render target of this audio renderer. This function can only be called when the audio renderer is not in the running or released state. Otherwise, it will return an error. The caller must have the ohos.permission.INJECT_PLAYBACK_TO_AUDIO_CAPTURE permission when target is not {@link RenderTarget#PLAYBACK}. This method can only be called when the audio renderer is ​​not​​ in the RUNNING or RELEASED state. Otherwise, an error will be returned. After changing render target to non-PLAYBACK： 1. The audio route and interruption strategy of this renderer will not be affected by {@link AudioSessionManager}. 2. The device type of this renderer will be {@link DeviceType#SYSTEM_PRIVATE}. 3. Calling {@link start} when the audio scene is not {@link AudioScene#AUDIO_SCENE_VOICE_CHAT} will return error code 6800301. 4. Calling {@link getAudioTime} or {@link getAudioTimeSync} will return error code 6800301. 5. Calling {@link getAudioTimestampInfo} or {@link getAudioTimestampInfoSync} will return error code 6800301. 6. Calling {@link setDefaultOutputDevice} will return error code 6800301.

**起始版本：** 22

**需要权限：** 

 ohos.permission.INJECT_PLAYBACK_TO_AUDIO_CAPTURE

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | RenderTarget | 是 | Render target. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Caller is not a system application. |
| 6800101 | Parameter verification failed. |
| 6800103 | Operation not permit at running and release state. |
| 6800104 | Current renderer is not supported to set target. |
| 6800301 | Audio client call audio service error, System error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

audioRenderer.setTarget(audio.RenderTarget.INJECT_TO_VOICE_COMMUNICATION_CAPTURE).then(() => {
  console.info('Succeeded in setting target.');
}).catch((err: BusinessError) => {
  console.error(`Failed to set target. code: ${err.code}, message: ${err.message}`);
});

```

## setVolume

```TypeScript
setVolume(volume: double, callback: AsyncCallback<void>): void
```

Sets the volume for the audio stream. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volume | double | 是 | Volume to set, which is in the range [0.0, 1.0]. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

## setVolume

```TypeScript
setVolume(volume: double): Promise<void>
```

Sets the volume for the audio stream. This API uses a promise to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volume | double | 是 | Volume to set, which is in the range [0.0, 1.0]. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

## setVolumeWithRamp

```TypeScript
setVolumeWithRamp(volume: double, duration: int): void
```

Sets a volume ramp. This API returns the result synchronously.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volume | double | 是 | Target volume, within the range [0.0, 1.0]. |
| duration | int | 是 | Time range during which the ramp applies, in ms. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## start

```TypeScript
start(callback: AsyncCallback<void>): void
```

Starts this audio renderer. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. If the operation fails, an error object with  one of the following error codes is returned: Error code 6800301: indicates abnormal status, focus  preemption failure, and abnormal system processing. For details, see system logs. |

## start

```TypeScript
start(): Promise<void>
```

Starts this audio renderer. This API uses a promise to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise object, which indicates that the renderer is started successfully. If the  operation fails, an error object with one of the following error codes is returned:  Error code 6800301: indicates abnormal status, focus preemption failure, and abnormal system processing. For  details, see system logs. |

## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

Stops this audio renderer. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

## stop

```TypeScript
stop(): Promise<void>
```

Stops this audio renderer. This API uses a promise to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

## write

```TypeScript
write(buffer: ArrayBuffer, callback: AsyncCallback<number>): void
```

Writes the buffer. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 11

**替代接口：** ohos.multimedia.audio.AudioRenderer#event:writeData

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| buffer | ArrayBuffer | 是 | Data to be written to the buffer. |
| callback | AsyncCallback&lt;number> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is the number of bytes written; otherwise, err is an error object. |

## write

```TypeScript
write(buffer: ArrayBuffer): Promise<number>
```

Writes the buffer. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 11

**替代接口：** ohos.multimedia.audio.AudioRenderer#event:writeData

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| buffer | ArrayBuffer | 是 | Data to be written to the buffer. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number> | Promise used to return the number of written bytes. |

## state

```TypeScript
readonly state: AudioState
```

Audio renderer state.

**类型：** AudioState

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

