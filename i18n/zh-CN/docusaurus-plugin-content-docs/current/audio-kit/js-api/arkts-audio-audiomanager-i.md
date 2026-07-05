# AudioManager

This interface implements audio volume and device management. Before calling any API in AudioManager, you must use [getAudioManager](arkts-audio-getaudiomanager-f.md#getAudioManager-1) to obtain an AudioManager instance.

**起始版本：** 7

**系统能力：** SystemCapability.Multimedia.Audio.Core

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## disableSafeMediaVolume

```TypeScript
disableSafeMediaVolume(): Promise<void>
```

user disable the safe media volume state.

**起始版本：** 12

**需要权限：** 

 ohos.permission.MODIFY_AUDIO_SETTINGS

**系统能力：** SystemCapability.Multimedia.Audio.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

audioManager.disableSafeMediaVolume().then(() => {
  console.info('disableSafeMediaVolume success.');
}).catch((err: BusinessError) => {
  console.error(`disableSafeMediaVolume fail: ${err.code},${err.message}`);
});

```

## getAudioParameter

```TypeScript
getAudioParameter(key: string, callback: AsyncCallback<string>): void
```

Obtains the value of an audio parameter. This method uses an asynchronous callback to return the query result.

**起始版本：** 7

**废弃版本：** 11

**系统能力：** SystemCapability.Multimedia.Audio.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key of the audio parameter whose value is to be obtained. |
| callback | AsyncCallback&lt;string> | 是 | Callback used to return the value of the audio parameter. |

## getAudioParameter

```TypeScript
getAudioParameter(key: string): Promise<string>
```

Obtains the value of an audio parameter. This method uses a promise to return the query result.

**起始版本：** 7

**废弃版本：** 11

**系统能力：** SystemCapability.Multimedia.Audio.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key of the audio parameter whose value is to be obtained. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Promise used to return the value of the audio parameter. |

## getAudioScene

```TypeScript
getAudioScene(callback: AsyncCallback<AudioScene>): void
```

Obtains the audio scene. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Communication

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AudioScene> | 是 | Callback used to return the result. If the operation is  successful, err is undefined and data is the audio scene obtained; otherwise, err is an error  object. |

## getAudioScene

```TypeScript
getAudioScene(): Promise<AudioScene>
```

Obtains the audio scene. This API uses a promise to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Communication

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AudioScene> | Promise used to return the audio scene. |

## getAudioSceneSync

```TypeScript
getAudioSceneSync(): AudioScene
```

Obtains the audio scene. This API returns the result synchronously.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Communication

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioScene | Audio scene. |

## getCollaborativeManager

```TypeScript
getCollaborativeManager(): AudioCollaborativeManager
```

Obtains a collaborative playback management instance.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioCollaborativeManager | Returns a collaborative playback management instance. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |

## getDebuggingManager

```TypeScript
getDebuggingManager(): AudioDebuggingManager
```

Obtains an AudioDebuggingManager instance. <p><strong>NOTE</strong>: The {@link #AudioDebuggingManager} instance is a singleton. </p>

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioDebuggingManager | this {@link #AudioDebuggingManager} object. |

## getDeviceEnhanceManager

```TypeScript
getDeviceEnhanceManager(): AudioDeviceEnhanceManager
```

Obtains a device enhancement manager instance.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.DeviceEnhance

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioDeviceEnhanceManager | Returns an instance of audio device enhancement manager. |

## getDevices

```TypeScript
getDevices(deviceFlag: DeviceFlag, callback: AsyncCallback<AudioDeviceDescriptors>): void
```

Obtains the audio devices with a specific flag. This API uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.AudioRoutingManager#getDevices

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceFlag | DeviceFlag | 是 | Audio device flag. |
| callback | AsyncCallback&lt;AudioDeviceDescriptors> | 是 | Callback used to return the result. If the operation  is successful, err is undefined and data is the audio devices obtained; otherwise, err is an  error object. |

## getDevices

```TypeScript
getDevices(deviceFlag: DeviceFlag): Promise<AudioDeviceDescriptors>
```

Obtains the audio devices with a specific flag. This API uses a promise to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.AudioRoutingManager#getDevices

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceFlag | DeviceFlag | 是 | Audio device flag. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AudioDeviceDescriptors> | Promise used to return the device list. |

## getEffectManager

```TypeScript
getEffectManager(): AudioEffectManager
```

Obtains an {@link AudioEffectManager} instance.

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.Audio.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioEffectManager | AudioEffectManager instance. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';

let audioEffectManager: audio.AudioEffectManager = audioManager.getEffectManager();

```

## getExtraParameters

```TypeScript
getExtraParameters(mainKey: string, subKeys?: Array<string>): Promise<Record<string, string>>
```

Obtains the values of a certain key. This method uses a promise to return the query result.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Audio.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mainKey | string | 是 | Main key of the audio parameters to get. |
| subKeys | Array&lt;string> | 否 | Sub keys of the audio parameters to get. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Record&lt;string, string>> | Promise used to return the key-value pairs. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let subKeys: Array<String> = ['key_example'];
audioManager.getExtraParameters('key_example', subKeys).then((value: Record<string, string>) => {
  console.info(`Promise returned to indicate that the value of the audio extra parameters is obtained ${value}.`);
}).catch((err: BusinessError) => {
  console.error(`Failed to get the audio extra parameters ${err}`);
});

```

## getMaxVolume

```TypeScript
getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>): void
```

Obtains the maximum volume allowed for a stream. This API uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.AudioVolumeGroupManager#getMaxVolume

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |
| callback | AsyncCallback&lt;number> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is the maximum stream volume obtained; otherwise, err is an error  object. |

## getMaxVolume

```TypeScript
getMaxVolume(volumeType: AudioVolumeType): Promise<number>
```

Obtains the maximum volume allowed for a stream. This API uses a promise to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.AudioVolumeGroupManager#getMaxVolume

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number> | Promise used to return the maximum volume. |

## getMinVolume

```TypeScript
getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>): void
```

Obtains the minimum volume allowed for a stream. This API uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.AudioVolumeGroupManager#getMinVolume

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |
| callback | AsyncCallback&lt;number> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is the minimum stream volume obtained; otherwise, err is an error  object. |

## getMinVolume

```TypeScript
getMinVolume(volumeType: AudioVolumeType): Promise<number>
```

Obtains the minimum volume allowed for a stream. This API uses a promise to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.AudioVolumeGroupManager#getMinVolume

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number> | Promise used to return the minimum volume. |

## getRecordingManager

```TypeScript
getRecordingManager(): AudioRecordingManager
```

Obtains a recording manager instance. Provides recording strategy management, including collaborative recording and recording control capabilities.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioRecordingManager | Returns an instance of audio record manager. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |

## getRingerMode

```TypeScript
getRingerMode(callback: AsyncCallback<AudioRingMode>): void
```

Obtains the ringer mode. This API uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.AudioVolumeGroupManager#getRingerMode

**系统能力：** SystemCapability.Multimedia.Audio.Communication

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AudioRingMode> | 是 | Callback used to return the result. If the operation is  successful, err is undefined and data is the ringer mode obtained; otherwise, err is an error  object. |

## getRingerMode

```TypeScript
getRingerMode(): Promise<AudioRingMode>
```

Obtains the ringer mode. This API uses a promise to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.AudioVolumeGroupManager#getRingerMode

**系统能力：** SystemCapability.Multimedia.Audio.Communication

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AudioRingMode> | Promise used to return the ringer mode. |

## getRoutingManager

```TypeScript
getRoutingManager(): AudioRoutingManager
```

Obtains an AudioRoutingManager instance.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Device

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioRoutingManager | AudioRoutingManager instance. |

## getSessionManager

```TypeScript
getSessionManager(): AudioSessionManager
```

Obtains an AudioSessionManager instance.

**起始版本：** 12

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioSessionManager | AudioSessionManager instance. |

## getSpatializationManager

```TypeScript
getSpatializationManager(): AudioSpatializationManager
```

Obtains an AudioSpatializationManager instance.

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.Audio.Spatialization

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioSpatializationManager | AudioSpatializationManager instance. |

## getStreamManager

```TypeScript
getStreamManager(): AudioStreamManager
```

Obtains an AudioStreamManager instance.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioStreamManager | AudioStreamManager instance. |

## getVolume

```TypeScript
getVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>): void
```

Obtains the volume of a stream. This API uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.AudioVolumeGroupManager#getVolume

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |
| callback | AsyncCallback&lt;number> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is the stream volume obtained; otherwise, err is an error object.  The volume range of a specified stream can be obtained by calling  [getMinVolume]audio.AudioManager.getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback)  and  [getMaxVolume]audio.AudioManager.getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback)  . |

## getVolume

```TypeScript
getVolume(volumeType: AudioVolumeType): Promise<number>
```

Obtains the volume of a stream. This API uses a promise to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.AudioVolumeGroupManager#getVolume

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number> | Promise used to return the volume of the stream. The volume range of a specified  stream can be obtained by calling  [getMinVolume]audio.AudioManager.getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback)  and  [getMaxVolume]audio.AudioManager.getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback)  . |

## getVolumeManager

```TypeScript
getVolumeManager(): AudioVolumeManager
```

Obtains an AudioVolumeManager instance.

**起始版本：** 9

**原子化服务API：** 从API version 23开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioVolumeManager | AudioVolumeManager instance. |

## isActive

```TypeScript
isActive(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void
```

Checks whether a stream is active. This API uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.AudioStreamManager#isActive

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |
| callback | AsyncCallback&lt;boolean> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is true if the stream is active or false if not active;  otherwise, err is an error object. |

## isActive

```TypeScript
isActive(volumeType: AudioVolumeType): Promise<boolean>
```

Checks whether a stream is active. This API uses a promise to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.AudioStreamManager#isActive

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result, indicating whether the stream is active.  true if active, false otherwise. |

## isDeviceActive

```TypeScript
isDeviceActive(deviceType: ActiveDeviceType, callback: AsyncCallback<boolean>): void
```

Checks whether a device is active. This API uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.AudioRoutingManager#isCommunicationDeviceActive

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceType | ActiveDeviceType | 是 | Active audio device type. |
| callback | AsyncCallback&lt;boolean> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is true if the device is active or false if not active;  otherwise, err is an error object. |

## isDeviceActive

```TypeScript
isDeviceActive(deviceType: ActiveDeviceType): Promise<boolean>
```

Checks whether a device is active. This API uses a promise to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.AudioRoutingManager#isCommunicationDeviceActive

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceType | ActiveDeviceType | 是 | Active audio device type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result, indicating whether the device is active.  true if active, false otherwise. |

## isMicrophoneMute

```TypeScript
isMicrophoneMute(callback: AsyncCallback<boolean>): void
```

Checks whether the microphone is muted. This API uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.AudioVolumeGroupManager#isMicrophoneMute

**需要权限：** 

 ohos.permission.MICROPHONE

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is true if the microphone is muted or false if not muted;  otherwise, err is an error object. |

## isMicrophoneMute

```TypeScript
isMicrophoneMute(): Promise<boolean>
```

Checks whether the microphone is muted. This API uses a promise to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.AudioVolumeGroupManager#isMicrophoneMute

**需要权限：** 

 ohos.permission.MICROPHONE

**系统能力：** SystemCapability.Multimedia.Audio.Device

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result, indicating whether the microphone is muted.  true if muted, false otherwise. |

## isMute

```TypeScript
isMute(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void
```

Checks whether a stream is muted. This API uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.AudioVolumeGroupManager#isMute

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |
| callback | AsyncCallback&lt;boolean> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is true if the stream is muted or false if not muted; otherwise  , err is an error object. |

## isMute

```TypeScript
isMute(volumeType: AudioVolumeType): Promise<boolean>
```

Checks whether a stream is muted. This API uses a promise to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.AudioVolumeGroupManager#isMute

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result, indicating whether the stream is muted. true  if muted, false otherwise. |

## mute

```TypeScript
mute(volumeType: AudioVolumeType, mute: boolean, callback: AsyncCallback<void>): void
```

Mutes a volume type. This method uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.avVolumePanel.AVVolumePanel

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |
| mute | boolean | 是 | Mute status to set. The value true means to mute the volume type, and false means the opposite. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

## mute

```TypeScript
mute(volumeType: AudioVolumeType, mute: boolean): Promise<void>
```

Mutes a volume type. This method uses a promise to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.avVolumePanel.AVVolumePanel

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |
| mute | boolean | 是 | Mute status to set. The value true means to mute the volume type, and false means the opposite. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

## off('audioSceneChange')

```TypeScript
off(type: 'audioSceneChange', callback?: Callback<AudioScene>): void
```

Unsubscribes from the audio scene change event. This API uses an asynchronous callback to return the result.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Communication

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'audioSceneChange' | 是 | Event type. The event 'audioSceneChange' is triggered when the audio  scene is changed. |
| callback | Callback&lt;AudioScene> | 否 |  |

## off('deviceChange')

```TypeScript
off(type: 'deviceChange', callback?: Callback<DeviceChangeAction>): void
```

Unsubscribes from the audio device change event. This API uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.AudioRoutingManager#event:deviceChange

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'deviceChange' | 是 | Event type. The event 'deviceChange' is triggered when the connection status  of an audio device is changed. |
| callback | Callback&lt;DeviceChangeAction> | 否 | Callback used to return the device change details. |

## off('interrupt')

```TypeScript
off(type: 'interrupt', interrupt: AudioInterrupt, callback?: Callback<InterruptAction>): void
```

Unsubscribes from the audio interruption event. This API uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 11

**替代接口：** ohos.multimedia.audio.AudioRenderer#event:audioInterrupt

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'interrupt' | 是 | Event type. The event 'interrupt' is triggered when the audio focus is changed. |
| interrupt | AudioInterrupt | 是 | Audio interruption event type. |
| callback | Callback&lt;InterruptAction> | 否 | Callback used to return the event information. |

## offAudioSceneChange

```TypeScript
offAudioSceneChange(callback?: Callback<AudioScene>): void
```

Unsubscribes to audio scene change events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Communication

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioScene> | 否 |  |

## on('volumeChange')

```TypeScript
on(type: 'volumeChange', callback: Callback<VolumeEvent>): void
```

Listens for system volume change events. This method uses a callback to get volume change events.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.AudioVolumeManager#event:volumeChange

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'volumeChange' | 是 | Type of the event to listen for. Only the volumeChange event is supported. |
| callback | Callback&lt;VolumeEvent> | 是 | Callback used to get the system volume change event. |

**示例：**

```TypeScript
audioManager.on('volumeChange', (volumeEvent: audio.VolumeEvent) => {
  console.info(`VolumeType of stream: ${volumeEvent.volumeType} `);
  console.info(`Volume level: ${volumeEvent.volume} `);
  console.info(`Whether to updateUI: ${volumeEvent.updateUi} `);
});

```

## on('ringerModeChange')

```TypeScript
on(type: 'ringerModeChange', callback: Callback<AudioRingMode>): void
```

Listens for ringer mode change events. This method uses a callback to get ringer mode changes.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.AudioVolumeGroupManager#event:ringerModeChange

**系统能力：** SystemCapability.Multimedia.Audio.Communication

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'ringerModeChange' | 是 | Type of the event to listen for. Only the ringerModeChange event is  supported. |
| callback | Callback&lt;AudioRingMode> | 是 | Callback used to get the updated ringer mode. |

**示例：**

```TypeScript
audioManager.on('ringerModeChange', (ringerMode: audio.AudioRingMode) => {
  console.info(`Updated ringermode: ${ringerMode}`);
});

```

## on('audioSceneChange')

```TypeScript
on(type: 'audioSceneChange', callback: Callback<AudioScene>): void
```

Subscribes to the audio scene change event. This API uses an asynchronous callback to return the result.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Communication

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'audioSceneChange' | 是 | Event type. The event 'audioSceneChange' is triggered when the audio  scene is changed. |
| callback | Callback&lt;AudioScene> | 是 | Callback used to return the current audio scene. |

## on('deviceChange')

```TypeScript
on(type: 'deviceChange', callback: Callback<DeviceChangeAction>): void
```

Subscribes to the event indicating that the connection status of an audio device is changed. This API uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.AudioRoutingManager#event:deviceChange

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'deviceChange' | 是 | Event type. The event 'deviceChange' is triggered when the connection status  of an audio device is changed. |
| callback | Callback&lt;DeviceChangeAction> | 是 | Callback used to return the device change details. |

## on('interrupt')

```TypeScript
on(type: 'interrupt', interrupt: AudioInterrupt, callback: Callback<InterruptAction>): void
```

Subscribes to the audio interruption event, which is triggered when the audio focus is changed. This API uses an asynchronous callback to return the result. Same as [on('audioInterrupt')](arkts-audio-audiorenderer-i.md#on) , this API is used to listen for focus changes. However, this API is used in scenarios without audio streams (no AudioRenderer instance is created), such as frequency modulation (FM) and voice wakeup.

**起始版本：** 7

**废弃版本：** 11

**替代接口：** ohos.multimedia.audio.AudioRenderer#event:audioInterrupt

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'interrupt' | 是 | Event type. The event 'interrupt' is triggered when the audio focus is changed. |
| interrupt | AudioInterrupt | 是 | Audio interruption event type. |
| callback | Callback&lt;InterruptAction> | 是 | Callback used to return the event information. |

## onAudioSceneChange

```TypeScript
onAudioSceneChange(callback: Callback<AudioScene>): void
```

Subscribes to audio scene change events. When system changes communication scene status, registered clients will receive the callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Communication

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioScene> | 是 | Callback used to obtain the latest audio scene. |

## setAudioParameter

```TypeScript
setAudioParameter(key: string, value: string, callback: AsyncCallback<void>): void
```

Sets an audio parameter. This method uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 11

**需要权限：** 

 ohos.permission.MODIFY_AUDIO_SETTINGS

**系统能力：** SystemCapability.Multimedia.Audio.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key of the audio parameter to set. |
| value | string | 是 | Value of the audio parameter to set. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

## setAudioParameter

```TypeScript
setAudioParameter(key: string, value: string): Promise<void>
```

Sets an audio parameter. This method uses a promise to return the result.

**起始版本：** 7

**废弃版本：** 11

**需要权限：** 

 ohos.permission.MODIFY_AUDIO_SETTINGS

**系统能力：** SystemCapability.Multimedia.Audio.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | Key of the audio parameter to set. |
| value | string | 是 | Value of the audio parameter to set. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

## setAudioScene

```TypeScript
setAudioScene(scene: AudioScene, callback: AsyncCallback<void>): void
```

Sets the audio scene mode to change audio strategies. This method uses an asynchronous callback to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Communication

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| scene | AudioScene | 是 | Audio scene mode. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

audioManager.setAudioScene(audio.AudioScene.AUDIO_SCENE_PHONE_CALL, (err: BusinessError) => {
  if (err) {
    console.error(`Failed to set the audio scene mode. ${err}`);
    return;
  }
  console.info('Callback invoked to indicate a successful setting of the audio scene mode.');
});

```

## setAudioScene

```TypeScript
setAudioScene(scene: AudioScene): Promise<void>
```

Sets the audio scene mode to change audio strategies. This method uses a promise to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Communication

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| scene | AudioScene | 是 | Audio scene mode. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

audioManager.setAudioScene(audio.AudioScene.AUDIO_SCENE_PHONE_CALL).then(() => {
  console.info('Promise returned to indicate a successful setting of the audio scene mode.');
}).catch((err: BusinessError) => {
  console.error(`Failed to set the audio scene mode ${err}`);
});

```

## setDeviceActive

```TypeScript
setDeviceActive(deviceType: ActiveDeviceType, active: boolean, callback: AsyncCallback<void>): void
```

Sets a device to the active state. This API uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.AudioRoutingManager#setCommunicationDevice

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceType | ActiveDeviceType | 是 | Active audio device type. |
| active | boolean | 是 | Active state to set. true to set the device to the active state, false  otherwise. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

## setDeviceActive

```TypeScript
setDeviceActive(deviceType: ActiveDeviceType, active: boolean): Promise<void>
```

Sets a device to the active state. This API uses a promise to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.AudioRoutingManager#setCommunicationDevice

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceType | ActiveDeviceType | 是 | Active audio device type. |
| active | boolean | 是 | Active state to set. true to set the device to the active state, false  otherwise. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

## setExtraParameters

```TypeScript
setExtraParameters(mainKey: string, kvpairs: Record<string, string>): Promise<void>
```

Sets extra audio parameters. This method uses a promise to return the result.

**起始版本：** 11

**需要权限：** 

 ohos.permission.MODIFY_AUDIO_SETTINGS

**系统能力：** SystemCapability.Multimedia.Audio.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mainKey | string | 是 | Main key of the audio parameters to set. |
| kvpairs | Record&lt;string, string> | 是 | Key-value pairs with subkeys and values to set. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let kvpairs = {} as Record<string, string>;
kvpairs = {
  'key_example': 'value_example'
};

audioManager.setExtraParameters('key_example', kvpairs).then(() => {
  console.info('Promise returned to indicate a successful setting of the extra parameters.');
}).catch((err: BusinessError) => {
  console.error(`Failed to set the audio extra parameters ${err}`);
});

```

## setMicrophoneMute

```TypeScript
setMicrophoneMute(mute: boolean, callback: AsyncCallback<void>): void
```

Mutes or unmutes the microphone. This method uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 9

**需要权限：** 

 ohos.permission.MICROPHONE

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mute | boolean | 是 | Mute status to set. The value true means to mute the microphone, and false means the opposite. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

## setMicrophoneMute

```TypeScript
setMicrophoneMute(mute: boolean): Promise<void>
```

Mutes or unmutes the microphone. This method uses a promise to return the result.

**起始版本：** 7

**废弃版本：** 9

**需要权限：** 

 ohos.permission.MICROPHONE

**系统能力：** SystemCapability.Multimedia.Audio.Device

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mute | boolean | 是 | Mute status to set. The value true means to mute the microphone, and false means the opposite. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

## setRingerMode

```TypeScript
setRingerMode(mode: AudioRingMode, callback: AsyncCallback<void>): void
```

Sets the ringer mode. This method uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 9

**需要权限：** 

 ohos.permission.ACCESS_NOTIFICATION_POLICY

**系统能力：** SystemCapability.Multimedia.Audio.Communication

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | AudioRingMode | 是 | Ringer mode. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

## setRingerMode

```TypeScript
setRingerMode(mode: AudioRingMode): Promise<void>
```

Sets the ringer mode. This method uses a promise to return the result.

**起始版本：** 7

**废弃版本：** 9

**需要权限：** 

 ohos.permission.ACCESS_NOTIFICATION_POLICY

**系统能力：** SystemCapability.Multimedia.Audio.Communication

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | AudioRingMode | 是 | Ringer mode. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

## setVolume

```TypeScript
setVolume(volumeType: AudioVolumeType, volume: number, callback: AsyncCallback<void>): void
```

Sets the volume for a volume type. This method uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.avVolumePanel.AVVolumePanel

**需要权限：** 

 ohos.permission.ACCESS_NOTIFICATION_POLICY

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |
| volume | number | 是 | Volume to set. The value range can be obtained by calling getMinVolume and getMaxVolume. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

## setVolume

```TypeScript
setVolume(volumeType: AudioVolumeType, volume: number): Promise<void>
```

Sets the volume for a volume type. This method uses a promise to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.avVolumePanel.AVVolumePanel

**需要权限：** 

 ohos.permission.ACCESS_NOTIFICATION_POLICY

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |
| volume | number | 是 | Volume to set. The value range can be obtained by calling getMinVolume and getMaxVolume. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

