# AudioVolumeManager

This interface implements audio volume management. Before calling any API in AudioVolumeManager, you must use [getVolumeManager](arkts-audio-audiomanager-i.md#getVolumeManager) to obtain an AudioVolumeManager instance. > **NOTE** > > - The initial APIs of this interface are supported since API version 9.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Volume

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## forceVolumeKeyControlType

```TypeScript
forceVolumeKeyControlType(volumeType: AudioVolumeType, duration: int): void
```

Interface for forcibly setting the volume type by pressing the volume key.

**起始版本：** 20

**需要权限：** 

 ohos.permission.MODIFY_AUDIO_SETTINGS

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type  that the application expects to control using the volume key. |
| duration | int | 是 | Duration for continuing to control the volume type when no key is pressed.  The forced volume type setting is released when the timer expires. Unit is second, the maximum  duration is 10 seconds.  If the duration is set to -1, the setting is canceled. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |
| 6800301 | Crash or blocking occurs in system process. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';

let audioManager = audio.getAudioManager();
let audioVolumeManager = audioManager.getVolumeManager();

// 设置音量保持类型为响铃模式。
let volumeType = audio.AudioVolumeType.RINGTONE;
let duration = 10;
audioVolumeManager.forceVolumeKeyControlType(volumeType, duration);

// 取消音量保持类型，恢复默认音量控制。
let volumeTypeDefault = audio.AudioVolumeType.MEDIA;
let durationToCancel = -1;
audioVolumeManager.forceVolumeKeyControlType(volumeTypeDefault, durationToCancel);

```

## getActiveStreamsVolumeInfo

```TypeScript
getActiveStreamsVolumeInfo(): ActiveStreamsVolumeInfoArray
```

Obtains the Volume information of the active audio streams.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ActiveStreamsVolumeInfoArray | Returns the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800301 | System error, crash or blocking occurs in system process. |

## getAppVolumePercentage

```TypeScript
getAppVolumePercentage(): Promise<int>
```

Obtains the volume of the application. (The volume range is 0 to 100.) This API uses a promise to return the result.

**起始版本：** 19

**原子化服务API：** 从API version 23开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Promise used to return the application volume. |

## getAppVolumePercentageForUid

```TypeScript
getAppVolumePercentageForUid(uid: int): Promise<int>
```

Get the volume for specified app with range from 0 to 100. Applications with same uid share the same volume.

**起始版本：** 19

**需要权限：** 

 ohos.permission.MANAGE_AUDIO_CONFIG

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uid | int | 是 | App's uid. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Promise used to return the application's volume percentage. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
let uid: number = 20010041; // 应用ID。

audioVolumeManager.getAppVolumePercentageForUid(20010041).then((value: number) => {
  console.info(`app volume is ${value}.`);
});

```

## getAudioVolumeTypeByStreamUsage

```TypeScript
getAudioVolumeTypeByStreamUsage(streamUsage: StreamUsage): AudioVolumeType
```

Obtains volume type by stream type.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| streamUsage | StreamUsage | 是 | Audio stream type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioVolumeType | Return the audio volume type. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## getMaxSystemVolume

```TypeScript
getMaxSystemVolume(volumeType: AudioVolumeType): int
```

Obtains the maximum volume allowed for a volume type.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Max volume level. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## getMaxVolumeByStream

```TypeScript
getMaxVolumeByStream(streamUsage: StreamUsage): int
```

Obtains the maximum volume of a specified audio stream.

**起始版本：** 20

**原子化服务API：** 从API version 23开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| streamUsage | StreamUsage | 是 | Audio stream for which the maximum volume is to be obtained. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Volume. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## getMinSystemVolume

```TypeScript
getMinSystemVolume(volumeType: AudioVolumeType): int
```

Obtains the minimum volume allowed for a volume type.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Min volume level. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## getMinSystemVolumePercentage

```TypeScript
getMinSystemVolumePercentage(volumeType: AudioVolumeType): int
```

Gets the minimum system volume percentage application can set for specified volume type.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type to get. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Returns the volume percentage, which is an interger with the range [0, 100]. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
try {
  let volume = audioVolumeManager.getMinSystemVolumePercentage(audio.AudioVolumeType.MEDIA);
  console.info(`MEDIA volume percentage obtained success.`);
} catch (err) {
  let error = err as BusinessError;
  console.error(`Failed to obtain the volume percentage, error: ${error}`);
}

```

## getMinVolumeByStream

```TypeScript
getMinVolumeByStream(streamUsage: StreamUsage): int
```

Obtains the minimum volume of a specified audio stream.

**起始版本：** 20

**原子化服务API：** 从API version 23开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| streamUsage | StreamUsage | 是 | Audio stream for which the minimum volume is to be obtained. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Volume. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## getStreamUsagesByVolumeType

```TypeScript
getStreamUsagesByVolumeType(volumeType: AudioVolumeType): StreamUsageArray
```

Obtains stream types by volume type.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio stream type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| StreamUsageArray | Return the audio stream types. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## getSupportedAudioVolumeTypes

```TypeScript
getSupportedAudioVolumeTypes(): Array<Readonly<AudioVolumeType>>
```

Obtains system supported volume types.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;Readonly&lt;AudioVolumeType>> | Return the system volume type array. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |

## getSystemVolume

```TypeScript
getSystemVolume(volumeType: AudioVolumeType): int
```

Obtains the volume of a volume type.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Current system volume level. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## getSystemVolumeByUid

```TypeScript
getSystemVolumeByUid(volumeType: AudioVolumeType, callingUid: int): int
```

Obtains the volume of streams in specific uid application.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |
| callingUid | int | 是 | Uid of the stream owner. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Current system volume level. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |
| 6800301 | Crash or blocking occurs in system process. |

## getSystemVolumePercentage

```TypeScript
getSystemVolumePercentage(volumeType: AudioVolumeType): int
```

Gets the current system volume percentage for specified volume type.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type to get. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Returns the volume percentage, which is an interger with the range [0, 100]. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
try {
  let volume = audioVolumeManager.getSystemVolumePercentage(audio.AudioVolumeType.MEDIA);
  console.info(`MEDIA volume percentage obtained success.`);
} catch (err) {
  let error = err as BusinessError;
  console.error(`Failed to obtain the volume percentage, error: ${error}`);
}

```

## getVolumeByStream

```TypeScript
getVolumeByStream(streamUsage: StreamUsage): int
```

Obtains the volume of a specified audio stream.

**起始版本：** 20

**原子化服务API：** 从API version 23开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| streamUsage | StreamUsage | 是 | Audio stream for which the volume is to be obtained. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Volume. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## getVolumeGroupInfos

```TypeScript
getVolumeGroupInfos(networkId: string, callback: AsyncCallback<VolumeGroupInfos>): void
```

Get the volume group list for a networkId. This method uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| networkId | string | 是 | Distributed deice net work id |
| callback | AsyncCallback&lt;VolumeGroupInfos> | 是 | Callback used to return the result. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

audioVolumeManager.getVolumeGroupInfos(audio.LOCAL_NETWORK_ID, (err: BusinessError, value: audio.VolumeGroupInfos) => {
  if (err) {
    console.error(`Failed to obtain the volume group infos list. ${err}`);
    return;
  }
  console.info('Callback invoked to indicate that the volume group infos list is obtained.');
});

```

## getVolumeGroupInfos

```TypeScript
getVolumeGroupInfos(networkId: string): Promise<VolumeGroupInfos>
```

Get the volume group list for a networkId. This method uses a promise to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| networkId | string | 是 | Distributed deice net work id |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;VolumeGroupInfos> | Promise used to return the result. |

**示例：**

```TypeScript
async function getVolumeGroupInfos(){
  let volumegroupinfos: audio.VolumeGroupInfos = await audio.getAudioManager().getVolumeManager().getVolumeGroupInfos(audio.LOCAL_NETWORK_ID);
  console.info('Promise returned to indicate that the volumeGroup list is obtained.'+JSON.stringify(volumegroupinfos))
}

```

## getVolumeGroupInfosSync

```TypeScript
getVolumeGroupInfosSync(networkId: string): VolumeGroupInfos
```

Get the volume group list for a networkId.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| networkId | string | 是 | Distributed deice net work id |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| VolumeGroupInfos | Volume group info list. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let volumegroupinfos: audio.VolumeGroupInfos = audioVolumeManager.getVolumeGroupInfosSync(audio.LOCAL_NETWORK_ID);
  console.info(`Indicate that the volumeGroup list is obtained. ${JSON.stringify(volumegroupinfos)}`);
} catch (err) {
  let error = err as BusinessError;
  console.error(`Failed to obtain the volumeGroup list ${error}`);
}

```

## getVolumeGroupManager

```TypeScript
getVolumeGroupManager(groupId: int, callback: AsyncCallback<AudioVolumeGroupManager>): void
```

Obtains a VolumeGroupManager instance. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| groupId | int | 是 | Volume group ID. The default value is DEFAULT_VOLUME_GROUP_ID. |
| callback | AsyncCallback&lt;AudioVolumeGroupManager> | 是 | Callback used to return the result. If the operation  is successful, err is undefined and data is the VolumeGroupManager instance obtained; otherwise,  err is an error object. |

## getVolumeGroupManager

```TypeScript
getVolumeGroupManager(groupId: int): Promise<AudioVolumeGroupManager>
```

Obtains a VolumeGroupManager instance. This API uses a promise to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| groupId | int | 是 | Volume group ID. The default value is DEFAULT_VOLUME_GROUP_ID. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AudioVolumeGroupManager> | Promise used to return the VolumeGroupManager instance. |

## getVolumeGroupManagerSync

```TypeScript
getVolumeGroupManagerSync(groupId: int): AudioVolumeGroupManager
```

Obtains a VolumeGroupManager instance. This API returns the result synchronously.

**起始版本：** 10

**原子化服务API：** 从API version 23开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| groupId | int | 是 | Volume group ID. The default value is DEFAULT_VOLUME_GROUP_ID. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioVolumeGroupManager | VolumeGroupManager instance. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## getVolumeInUnitOfDb

```TypeScript
getVolumeInUnitOfDb(volumeType: AudioVolumeType, volumeLevel: int, device: DeviceType): double
```

Gets the volume db value that system calculate by volume type, volume level and device type.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |
| volumeLevel | int | 是 | Volume level. |
| device | DeviceType | 是 | Output device type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| double | The system volume in dB. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## getVolumeInUnitOfDbByStream

```TypeScript
getVolumeInUnitOfDbByStream(streamUsage: StreamUsage, volumeLevel: int, device: DeviceType): double
```

Obtains the volume (in dB) calculated by the system based on the audio stream, volume level, and device type.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| streamUsage | StreamUsage | 是 | Audio stream. |
| volumeLevel | int | 是 | Volume level. |
| device | DeviceType | 是 | Device type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| double | Volume of the audio stream, in dB. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## isAppVolumeMutedForUid

```TypeScript
isAppVolumeMutedForUid(uid: int, owned: boolean): Promise<boolean>
```

Checks whether the app volume is muted. If there are multiple callers setting muted states, only when all callers cancel muted state the volume of this app will be truly unmuted.

**起始版本：** 19

**需要权限：** 

 ohos.permission.MANAGE_AUDIO_CONFIG

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uid | int | 是 | App's uid. |
| owned | boolean | 是 | If true is passed, the result will be indicated your owned muted state  settings to this app. Otherwise if false is passed, the result will be indicated the real muted state. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
let uid: number = 20010041; // 应用ID。

audioVolumeManager.isAppVolumeMutedForUid(uid, true).then((value: boolean) => {
  console.info(`app muted state is ${value}.`);
});

```

## isSystemMuted

```TypeScript
isSystemMuted(volumeType: AudioVolumeType): boolean
```

Checks whether a volume type is muted.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | The mute status of the volume type. The value true  means that the volume type is muted, and false means the opposite. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## isSystemMutedForStream

```TypeScript
isSystemMutedForStream(streamUsage: StreamUsage): boolean
```

Checks whether a specified audio stream is muted.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| streamUsage | StreamUsage | 是 | Audio stream to check. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for whether the audio stream is muted. true if muted, false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## off('volumeChange')

```TypeScript
off(type: 'volumeChange', callback?: Callback<VolumeEvent>): void
```

Unsubscribes from the system volume change event. This API uses an asynchronous callback to return the result.

**起始版本：** 12

**废弃版本：** 20

**替代接口：** ohos.multimedia.audio.AudioVolumeManager#event:streamVolumeChange

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'volumeChange' | 是 | Event type. The event 'volumeChange' is triggered when the system volume is  changed. |
| callback | Callback&lt;VolumeEvent> | 否 | Callback used to return the changed volume. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters missing;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## off('appVolumeChangeForUid')

```TypeScript
off(type: 'appVolumeChangeForUid', callback?: Callback<VolumeEvent>): void
```

Unsubscribes to the app volume change events..

**起始版本：** 19

**需要权限：** 

 ohos.permission.MANAGE_AUDIO_CONFIG

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'appVolumeChangeForUid' | 是 | Type of the event to be unregistered. Only the appVolumeChangeForUid  event is supported. |
| callback | Callback&lt;VolumeEvent> | 否 | Callback used to obtain the invoking volume change event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
// 取消该事件的所有监听。
audioVolumeManager.off('appVolumeChangeForUid');

// 同一监听事件中，on方法和off方法传入callback参数一致，off方法取消对应on方法订阅的监听。
let appVolumeChangeForUidCallback = (volumeEvent: audio.VolumeEvent) => {
  console.info(`VolumeType of stream: ${volumeEvent.volumeType} `);
  console.info(`Volume level: ${volumeEvent.volume} `);
  console.info(`Whether to updateUI: ${volumeEvent.updateUi} `);
};

audioVolumeManager.on('appVolumeChangeForUid', appVolumeChangeForUidCallback);

audioVolumeManager.off('appVolumeChangeForUid', appVolumeChangeForUidCallback);

```

## off('appVolumeChange')

```TypeScript
off(type: 'appVolumeChange', callback?: Callback<VolumeEvent>): void
```

Unsubscribes from the application-level volume change event of the application. This API uses an asynchronous callback to return the result.

**起始版本：** 19

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'appVolumeChange' | 是 | Event type. The event 'appVolumeChange' is triggered when the application  -level volume is changed. |
| callback | Callback&lt;VolumeEvent> | 否 | Callback used to return the changed volume. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## off('activeVolumeTypeChange')

```TypeScript
off(type: 'activeVolumeTypeChange', callback?: Callback<AudioVolumeType>): void
```

Unsubscribes from active volume type changes.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'activeVolumeTypeChange' | 是 | Type of the event to unregister.  Only the activeVolumeTypeChange event is supported. |
| callback | Callback&lt;AudioVolumeType> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
// 取消该事件的所有监听。
audioVolumeManager.off('activeVolumeTypeChange');

// 同一监听事件中，on方法和off方法传入callback参数一致，off方法取消对应on方法订阅的监听。
let activeVolumeTypeChangeCallback = (volumeType: audio.AudioVolumeType) => {
  console.info(`VolumeType of stream: ${volumeType} `);
};

audioVolumeManager.on('activeVolumeTypeChange', activeVolumeTypeChangeCallback);

audioVolumeManager.off('activeVolumeTypeChange', activeVolumeTypeChangeCallback);

```

## off('systemVolumeChange')

```TypeScript
off(type: 'systemVolumeChange', callback?: Callback<VolumeEvent>): void
```

Unsubscribes to the system volume change events.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'systemVolumeChange' | 是 | Type of the event to be unregistered.  Only the systemVolumeChange event is supported. |
| callback | Callback&lt;VolumeEvent> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
// 取消该事件的所有监听。
audioVolumeManager.off('systemVolumeChange');

// 同一监听事件中，on方法和off方法传入callback参数一致，off方法取消对应on方法订阅的监听。
let systemVolumeChangeCallback = (volumeEvent: audio.VolumeEvent) => {
  console.info(`Succeeded in using on or off function, VolumeEvent: ${volumeEvent}.`);
};

audioVolumeManager.on('systemVolumeChange', systemVolumeChangeCallback);

audioVolumeManager.off('systemVolumeChange', systemVolumeChangeCallback);

```

## off('streamVolumeChange')

```TypeScript
off(type: 'streamVolumeChange', callback?: Callback<StreamVolumeEvent>): void
```

Unsubscribes from the system audio volume change event, which is triggered when the system audio volume is changed. This API uses an asynchronous callback to return the result.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'streamVolumeChange' | 是 | Event type. The event 'volumeChange' is triggered when the system  volume is changed. |
| callback | Callback&lt;StreamVolumeEvent> | 否 |  |

## offActiveVolumeTypeChange

```TypeScript
offActiveVolumeTypeChange(callback?: Callback<AudioVolumeType>): void
```

Unsubscribes from active volume type changes.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioVolumeType> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## offAppVolumeChange

```TypeScript
offAppVolumeChange(callback?: Callback<VolumeEvent>): void
```

Unsubscribes to the app volume change events..

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;VolumeEvent> | 否 | Callback used to obtain the invoking volume change event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## offAppVolumeChangeForUid

```TypeScript
offAppVolumeChangeForUid(callback?: Callback<VolumeEvent>): void
```

Unsubscribes to the app volume change events..

**起始版本：** 23

**需要权限：** 

 ohos.permission.MANAGE_AUDIO_CONFIG

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;VolumeEvent> | 否 | Callback used to obtain the invoking volume change event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## offStreamVolumeChange

```TypeScript
offStreamVolumeChange(callback?: Callback<StreamVolumeEvent>): void
```

Unsubscribes to the stream volume change events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;StreamVolumeEvent> | 否 |  |

## offSystemVolumeChange

```TypeScript
offSystemVolumeChange(callback?: Callback<VolumeEvent>): void
```

Unsubscribes to the system volume change events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;VolumeEvent> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## offSystemVolumeChangeByFilter

```TypeScript
offSystemVolumeChangeByFilter(callback?: Callback<VolumeEvent>): void
```

Unsubscribes from the system volume change events.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;VolumeEvent> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system app. |
| 6800101 | Parameter verification failed. |

## offVolumePercentageChange

```TypeScript
offVolumePercentageChange(callback?: Callback<VolumeEvent>): void
```

Unsubscribes from system volume percentage change events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;VolumeEvent> | 否 | Callback used to return the system volume percentage change event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
// 取消该事件的所有监听。
audioVolumeManager.offVolumePercentageChange();

// 同一监听事件中，on方法和off方法传入callback参数一致，off方法取消对应on方法订阅的监听。
let volumePercentageChangeCallback = (volumeEvent: audio.VolumeEvent) => {
  console.info(`VolumeType of stream: ${volumeEvent.volumeType} `);
  console.info(`Volume level: ${volumeEvent.volume} `);
  console.info(`Volume percentage: ${volumeEvent.percentage} `);
  console.info(`Whether to updateUI: ${volumeEvent.updateUi} `);
};

audioVolumeManager.onVolumePercentageChange(volumePercentageChangeCallback);

audioVolumeManager.offVolumePercentageChange(volumePercentageChangeCallback);

```

## on('volumeChange')

```TypeScript
on(type: 'volumeChange', callback: Callback<VolumeEvent>): void
```

Subscribes to the system volume change event, which is triggered when the system volume is changed. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**废弃版本：** 20

**替代接口：** ohos.multimedia.audio.AudioVolumeManager#event:streamVolumeChange

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'volumeChange' | 是 | Event type. The event 'volumeChange' is triggered when the system volume is  changed. |
| callback | Callback&lt;VolumeEvent> | 是 | Callback used to return the changed volume. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## on('appVolumeChangeForUid')

```TypeScript
on(type: 'appVolumeChangeForUid', uid: int, callback: Callback<VolumeEvent>): void
```

Listens for specified app volume change events. The app volume may changed by {@link setAppVolumePercentageForUid}.

**起始版本：** 19

**需要权限：** 

 ohos.permission.MANAGE_AUDIO_CONFIG

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'appVolumeChangeForUid' | 是 | Type of the event to listen for. Only the  appVolumeChangeForUid event is supported. |
| uid | int | 是 | The app's uid. |
| callback | Callback&lt;VolumeEvent> | 是 | Callback used to get the app volume change event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
let uid: number = 20010041; // 应用ID。

audioVolumeManager.on('appVolumeChangeForUid', uid, (volumeEvent: audio.VolumeEvent) => {
  console.info(`VolumeType of stream: ${volumeEvent.volumeType} `);
  console.info(`Volume level: ${volumeEvent.volume} `);
  console.info(`Whether to updateUI: ${volumeEvent.updateUi} `);
});

```

## on('appVolumeChange')

```TypeScript
on(type: 'appVolumeChange', callback: Callback<VolumeEvent>): void
```

Subscribes to the application-level volume change event of the application (triggered when the application-level volume is changed). This API uses an asynchronous callback to return the result.

**起始版本：** 19

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'appVolumeChange' | 是 | Event type. The event 'appVolumeChange' is triggered when the application  -level volume is changed. |
| callback | Callback&lt;VolumeEvent> | 是 | Callback used to return the changed volume. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## on('activeVolumeTypeChange')

```TypeScript
on(type: 'activeVolumeTypeChange', callback: Callback<AudioVolumeType>): void
```

Subscribes to active volume type changes.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'activeVolumeTypeChange' | 是 | Type of the event to listen for.  Only the activeVolumeTypeChange event is supported. |
| callback | Callback&lt;AudioVolumeType> | 是 | Callback used to return the active volume type. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
audioVolumeManager.on('activeVolumeTypeChange', (volumeType: audio.AudioVolumeType) => {
  console.info(`VolumeType of stream: ${volumeType} `);
});

```

## on('systemVolumeChange')

```TypeScript
on(type: 'systemVolumeChange', callback: Callback<VolumeEvent>): void
```

Listens for system volume change events. This method uses a callback to get volume change events.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'systemVolumeChange' | 是 | Type of the event to listen for.  Only the systemVolumeChange event is supported. |
| callback | Callback&lt;VolumeEvent> | 是 | Callback used to get the system volume change event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
audioVolumeManager.on('systemVolumeChange', (volumeEvent: audio.VolumeEvent) => {
  console.info(`Succeeded in using on function, VolumeEvent: ${volumeEvent}.`);
});

```

## on('streamVolumeChange')

```TypeScript
on(type: 'streamVolumeChange', streamUsage: StreamUsage, callback: Callback<StreamVolumeEvent>): void
```

Subscribes to the system audio volume change event, which is triggered when the system audio volume is changed. This API uses an asynchronous callback to return the result.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'streamVolumeChange' | 是 | Event type. The event 'streamVolumeChange' is triggered when the  system audio volume is changed. |
| streamUsage | StreamUsage | 是 | Audio stream usage. |
| callback | Callback&lt;StreamVolumeEvent> | 是 | Callback used to return the changed volume. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## onActiveVolumeTypeChange

```TypeScript
onActiveVolumeTypeChange(callback: Callback<AudioVolumeType>): void
```

Subscribes to active volume type changes.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioVolumeType> | 是 | Callback used to return the active volume type. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## onAppVolumeChange

```TypeScript
onAppVolumeChange(callback: Callback<VolumeEvent>): void
```

Listens for app volume change events. The app volume may changed by your called {@link setAppVolumePercentage} or other system settings.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;VolumeEvent> | 是 | Callback used to get the app volume change event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## onAppVolumeChangeForUid

```TypeScript
onAppVolumeChangeForUid(uid: int, callback: Callback<VolumeEvent>): void
```

Listens for specified app volume change events. The app volume may changed by {@link setAppVolumePercentageForUid}.

**起始版本：** 23

**需要权限：** 

 ohos.permission.MANAGE_AUDIO_CONFIG

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uid | int | 是 | The app's uid. |
| callback | Callback&lt;VolumeEvent> | 是 | Callback used to get the app volume change event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## onStreamVolumeChange

```TypeScript
onStreamVolumeChange(streamUsage: StreamUsage, callback: Callback<StreamVolumeEvent>): void
```

Listens for stream volume change events. This method uses a callback to get volume change events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| streamUsage | StreamUsage | 是 | StreamUsage to be listened. |
| callback | Callback&lt;StreamVolumeEvent> | 是 | Callback used to get the stream volume change event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## onSystemVolumeChange

```TypeScript
onSystemVolumeChange(callback: Callback<VolumeEvent>): void
```

Listens for system volume change events. This method uses a callback to get volume change events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;VolumeEvent> | 是 | Callback used to get the system volume change event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## onSystemVolumeChangeByFilter

```TypeScript
onSystemVolumeChangeByFilter(filter: SystemVolumeFilter, callback: Callback<VolumeEvent>): void
```

Subscribes to system volume change events. When the system volume for the target filter changes, registered clients will receive a callback.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filter | SystemVolumeFilter | 是 | Filter for system volume changes. |
| callback | Callback&lt;VolumeEvent> | 是 | Callback to receive information about  the system volume. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not a system app. |
| 6800101 | Parameter verification failed. |

## onVolumePercentageChange

```TypeScript
onVolumePercentageChange(callback: Callback<VolumeEvent>): void
```

Subscribes to system volume percentage change events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;VolumeEvent> | 是 | Callback used to return the system volume percentage change event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
onVolumePercentageChange((volumeEvent: audio.VolumeEvent) => {
  console.info(`VolumeType of stream: ${volumeEvent.volumeType} `);
  console.info(`Volume level: ${volumeEvent.volume} `);
  console.info(`Volume percentage: ${volumeEvent.percentage} `);
  console.info(`Whether to updateUI: ${volumeEvent.updateUi} `);
});

```

## setAppVolumeMutedForUid

```TypeScript
setAppVolumeMutedForUid(uid: int, muted: boolean): Promise<void>
```

Change mute state of specified application volume. If there are multiple callers setting muted states, only when all callers cancel muted state the volume of this app will be truly unmuted.

**起始版本：** 19

**需要权限：** 

 ohos.permission.MANAGE_AUDIO_CONFIG

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uid | int | 是 | App's uid. |
| muted | boolean | 是 | Muted state to set. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |
| 6800301 | Crash or blocking occurs in system process. |

**示例：**

```TypeScript
let uid: number = 20010041; // 应用ID。

audioVolumeManager.setAppVolumeMutedForUid(uid, true).then(() => {
  console.info(`set app mute state success.`);
});

```

## setAppVolumePercentage

```TypeScript
setAppVolumePercentage(volume: int): Promise<void>
```

Sets the volume (within a range of 0 to 100) for the application. This API uses a promise to return the result.

**起始版本：** 19

**原子化服务API：** 从API version 23开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volume | int | 是 | Volume to set. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |
| 6800301 | Crash or blocking occurs in system process. |

## setAppVolumePercentageForUid

```TypeScript
setAppVolumePercentageForUid(uid: int, volume: int): Promise<void>
```

Sets the volume for specified app with range from 0 to 100. Applications with same uid share the same volume.

**起始版本：** 19

**需要权限：** 

 ohos.permission.MANAGE_AUDIO_CONFIG

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uid | int | 是 | App's uid. |
| volume | int | 是 | Volume to set the application's volume percentage. The value range is from 0 to 100. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |
| 6800301 | Crash or blocking occurs in system process. |

**示例：**

```TypeScript
let uid: number = 20010041; // 应用ID。
let volume: number = 20;    // 要设置的音量值。

audioVolumeManager.setAppVolumePercentageForUid(uid, volume).then(() => {
  console.info(`set app volume success.`);
});

```

## setSystemVolumeByUid

```TypeScript
setSystemVolumeByUid(volumeType: AudioVolumeType, volume: int, callingUid: int): Promise<void>
```

Sets the volume for specific uid application. This method uses a promise to return the result.

**起始版本：** 20

**需要权限：** 

 ohos.permission.ACCESS_NOTIFICATION_POLICY

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |
| volume | int | 是 | Volume to set. The value range can be obtained by calling getMinVolume and getMaxVolume. |
| callingUid | int | 是 | Uid of the stream owner. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |
| 6800301 | Crash or blocking occurs in system process. |

## setSystemVolumePercentage

```TypeScript
setSystemVolumePercentage(volumeType: AudioVolumeType, percentage: int): Promise<void>
```

Sets the system volume percentage, using an integer ranging from minimum system volume percentage to 100. The volume percentage corresponds to volume levels, with each level tied to a specific percentage. When the volume level changes, the volume percentage adjusts accordingly and is mapped within the range of volume levels. Zero volume is mapped to 0, and the maximum volume is mapped to 100%. Intermediate volume levels are evenly distributed beween 1 and 99. When the volume percentage changes, the volume level changes accordingly.

**起始版本：** 23

**需要权限：** 

 ohos.permission.MANAGE_AUDIO_CONFIG

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type to set. |
| percentage | int | 是 | Percentage to set. It must be an integer with the range  from minimum value getted by {@link #getMinSystemVolumePercentage} to 100. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |
| 6800101 | Parameter verification failed, including  volumeType or percentage param begin out of range. |
| 6800301 | Crash or blocking occurs in system process. |

**示例：**

```TypeScript
audioVolumeManager.setSystemVolumePercentage(audio.AudioVolumeType.MEDIA, 10).then(() => {
  console.info('Promise returned to indicate a successful volume setting.');
});

```

