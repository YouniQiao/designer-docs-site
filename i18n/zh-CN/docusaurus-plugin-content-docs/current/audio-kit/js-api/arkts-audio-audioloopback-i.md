# AudioLoopback

This interface provides APIs for audio monitoring. Before calling any API in AudioLoopback, you must use [audio.createAudioLoopback](arkts-audio-createaudioloopback-f.md#createAudioLoopback-1) to create an AudioLoopback instance. When audio loopback is enabled, the system creates a low-latency renderer and capturer to implement low-latency in- ear monitoring. The audio captured is routed back to the renderer through an internal path. The renderer follows the audio focus strategy for [STREAM_USAGE_MUSIC](arkts-audio-streamusage-e.md#StreamUsage), whereas the capturer follows the strategy for [SOURCE_TYPE_MIC](arkts-audio-sourcetype-e.md#SourceType). The system automatically chooses the input and output devices. If these devices do not support low latency, audio loopback does not work. If another audio stream takes over the audio focus or if the input or output device changes to the one that does not support low latency, the system disables audio loopback automatically. > **NOTE** > > - The initial APIs of this interface are supported since API version 20.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## enable

```TypeScript
enable(enable: boolean): Promise<boolean>
```

Enable or disable audio loopback. When audio loopback is enabled, the system automatically creates fast playback and recording streams to implement low-latency in-ear monitoring. When audio loopback is disabled, the audio stream is destroyed. If enabling audio loopback fails, you can use {@link AudioLoopback#getStatus} to query the cause. After audio loopback is enabled, you can subscribe to the statusChange event to listen for audio loopback status changes.

**起始版本：** 20

**需要权限：** 

 ohos.permission.MICROPHONE

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | Whether to enable or disable audio loopback. true to enable, false otherwise. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result, indicating whether the API call is successful.  true is successful, false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 6800101 | Parameter verification failed. |

## getEqualizerPreset

```TypeScript
getEqualizerPreset(): AudioLoopbackEqualizerPreset
```

Gets the current equalizer preset. The default equalizer preset of audio loopback is {@link AudioLoopbackEqualizerPreset#FULL} if users do not modify the preset.

**起始版本：** 21

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioLoopbackEqualizerPreset | Equalizer type.  If no equalizer type has been set, the default equalizer type is FULL. |

## getPreferredDevicePair

```TypeScript
getPreferredDevicePair(): AudioDevicePair | null
```

Gets the preferred audio device pair in current device connection situation.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioDevicePair | The preferred audio device pair in audio system,  or null if there is no supported device pair. |

## getReverbPreset

```TypeScript
getReverbPreset(): AudioLoopbackReverbPreset
```

Get the current reverberation. The default reverberation preset of audio loopback is {@link AudioLoopbackReverbPreset#THEATER} if users do not modify the preset.

**起始版本：** 21

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioLoopbackReverbPreset | Reverb mode.  If no reverb mode has been set, the default reverb mode is THEATER. |

## getStatus

```TypeScript
getStatus(): Promise<AudioLoopbackStatus>
```

Obtains the audio loopback status. This API uses a promise to return the result.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AudioLoopbackStatus> | Promise used to return the audio loopback status. |

## getSupportedDevicePairs

```TypeScript
getSupportedDevicePairs(): Array<AudioDevicePair>
```

Gets supported audio device pairs in current device connection situation.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;AudioDevicePair> | Audio device pairs that support loopback,  if there is no supported device pair, empty array will be returned. |

## getVolume

```TypeScript
getVolume(): double
```

Gets the output volume for audio loopback.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| double | Current audio loopback output volume value. |

## off('statusChange')

```TypeScript
off(type: 'statusChange', callback?: Callback<AudioLoopbackStatus>): void
```

Unsubscribes from the audio loopback status event. This API uses an asynchronous callback to return the result.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'statusChange' | 是 | Event type. The event 'statusChange' is triggered when the status of the  audio loopback is changed. |
| callback | Callback&lt;AudioLoopbackStatus> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## offStatusChange

```TypeScript
offStatusChange(callback?: Callback<AudioLoopbackStatus>): void
```

Unsubscribes audio loopback status change event callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioLoopbackStatus> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## on('statusChange')

```TypeScript
on(type: 'statusChange', callback: Callback<AudioLoopbackStatus>): void
```

Subscribes to the audio loopback status change event, which is triggered when the status of the audio loopback is changed. This API uses an asynchronous callback to return the result.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'statusChange' | 是 | Event type. The event 'statusChange' is triggered when the status of the  audio loopback is changed. |
| callback | Callback&lt;AudioLoopbackStatus> | 是 | Callback used to return the audio loopback status. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## onStatusChange

```TypeScript
onStatusChange(callback: Callback<AudioLoopbackStatus>): void
```

Subscribes to audio loopback status changes.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioLoopbackStatus> | 是 | Callback used to return the audio loopback status  change event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## setEqualizerPreset

```TypeScript
setEqualizerPreset(preset: AudioLoopbackEqualizerPreset): boolean
```

Sets the equalizer preset of the audio loopback.

**起始版本：** 21

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| preset | AudioLoopbackEqualizerPreset | 是 | Equalizer type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Setting result. true if successful, false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## setReverbPreset

```TypeScript
setReverbPreset(preset: AudioLoopbackReverbPreset): boolean
```

Sets the reverberation of the audio loopback.

**起始版本：** 21

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| preset | AudioLoopbackReverbPreset | 是 | Reverb mode. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Setting result. true if successful, false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## setVolume

```TypeScript
setVolume(volume: double): Promise<void>
```

Sets the volume for audio loopback. This volume does not affect other audio streams or the system volume.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volume | double | 是 | Volume to set. The value type is float, ranging from 0.0 to 1.0. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed, from 0.0 to 1.0. |

