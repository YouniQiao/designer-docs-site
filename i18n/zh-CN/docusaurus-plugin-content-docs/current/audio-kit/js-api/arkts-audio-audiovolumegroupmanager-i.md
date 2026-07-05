# AudioVolumeGroupManager

This interface implements volume management for an audio group. Before calling any API in AudioVolumeGroupManager, you must use [getVolumeGroupManager](arkts-audio-audiovolumemanager-i.md#getVolumeGroupManager) to obtain an AudioVolumeGroupManager instance. > **NOTE** > > - The initial APIs of this interface are supported since API version 9.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Volume

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## adjustSystemVolumeByStep

```TypeScript
adjustSystemVolumeByStep(volumeType: AudioVolumeType, adjustType: VolumeAdjustType, callback: AsyncCallback<void>): void
```

Adjusts system volume by step for target volume type. This method uses an asynchronous callback to return the result.

**起始版本：** 10

**需要权限：** 

 ohos.permission.ACCESS_NOTIFICATION_POLICY

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |
| adjustType | VolumeAdjustType | 是 | Volume adjustment type. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. Return by callback. |
| 6800301 | System error. Return by callback. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

audioVolumeGroupManager.adjustSystemVolumeByStep(audio.AudioVolumeType.MEDIA, audio.VolumeAdjustType.VOLUME_UP, (err: BusinessError) => {
  if (err) {
    console.error(`Failed to adjust the system volume by step ${err}`);
  } else {
    console.info('Success to adjust the system volume by step.');
  }
});

```

## adjustSystemVolumeByStep

```TypeScript
adjustSystemVolumeByStep(volumeType: AudioVolumeType, adjustType: VolumeAdjustType): Promise<void>
```

Adjusts system volume by step for target volume type. This method uses a promise to return the result.

**起始版本：** 10

**需要权限：** 

 ohos.permission.ACCESS_NOTIFICATION_POLICY

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |
| adjustType | VolumeAdjustType | 是 | Volume adjustment type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. Return by promise. |
| 6800301 | System error. Return by promise. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

audioVolumeGroupManager.adjustSystemVolumeByStep(audio.AudioVolumeType.MEDIA, audio.VolumeAdjustType.VOLUME_UP).then(() => {
  console.info('Success to adjust the system volume by step.');
}).catch((error: BusinessError) => {
  console.error('Fail to adjust the system volume by step.');
});

```

## adjustVolumeByStep

```TypeScript
adjustVolumeByStep(adjustType: VolumeAdjustType, callback: AsyncCallback<void>): void
```

Adjusts system volume by step, volume type is decided by system. This method uses an asynchronous callback to return the result.

**起始版本：** 10

**需要权限：** 

 ohos.permission.ACCESS_NOTIFICATION_POLICY

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| adjustType | VolumeAdjustType | 是 | Volume adjustment type. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. Return by callback. |
| 6800301 | System error. Return by callback. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

audioVolumeGroupManager.adjustVolumeByStep(audio.VolumeAdjustType.VOLUME_UP, (err: BusinessError) => {
  if (err) {
    console.error(`Failed to adjust the volume by step. ${err}`);
    return;
  } else {
    console.info('Success to adjust the volume by step.');
  }
});

```

## adjustVolumeByStep

```TypeScript
adjustVolumeByStep(adjustType: VolumeAdjustType): Promise<void>
```

Adjusts system volume by step, volume type is decided by system. This method uses a promise to return the result.

**起始版本：** 10

**需要权限：** 

 ohos.permission.ACCESS_NOTIFICATION_POLICY

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| adjustType | VolumeAdjustType | 是 | Volume adjustment type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. Return by promise. |
| 6800301 | System error. Return by promise. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

audioVolumeGroupManager.adjustVolumeByStep(audio.VolumeAdjustType.VOLUME_UP).then(() => {
  console.info('Success to adjust the volume by step.');
}).catch((error: BusinessError) => {
  console.error('Fail to adjust the volume by step.');
});

```

## getActiveVolumeTypeSync

```TypeScript
getActiveVolumeTypeSync(uid: int): AudioVolumeType
```

Obtains the active volume type in the calling moment. This method returns in sync mode.

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uid | int | 是 | The target uid's active volume type or  0 which means the global active volume type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioVolumeType | Current active volume type. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters unspecified.  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
let uid: number = 20010041; // 应用ID。

let value = audioVolumeGroupManager.getActiveVolumeTypeSync(uid);

```

## getMaxAmplitudeForInputDevice

```TypeScript
getMaxAmplitudeForInputDevice(inputDevice: AudioDeviceDescriptor): Promise<double>
```

Obtains the maximum amplitude (in the range [0, 1]) of the audio stream for an input device. This API uses a promise to return the result.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| inputDevice | AudioDeviceDescriptor | 是 | Descriptor of the target device. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;double> | Promise used to return the maximum amplitude, which is in the range [0, 1]. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. Return by promise. |
| 6800301 | System error. Return by promise. |

## getMaxAmplitudeForOutputDevice

```TypeScript
getMaxAmplitudeForOutputDevice(outputDevice: AudioDeviceDescriptor): Promise<double>
```

Obtains the maximum amplitude (in the range [0, 1]) of the audio stream for an output device. This API uses a promise to return the result.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| outputDevice | AudioDeviceDescriptor | 是 | Descriptor of the target device. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;double> | Promise used to return the maximum amplitude, which is in the range [0, 1]. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. Return by promise. |
| 6800301 | System error. Return by promise. |

## getMaxVolume

```TypeScript
getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>): void
```

Obtains the maximum volume level of a stream. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**废弃版本：** 20

**替代接口：** ohos.multimedia.audio.AudioVolumeManager#getMaxVolumeByStream

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |
| callback | AsyncCallback&lt;int> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is the maximum stream volume level obtained; otherwise, err is an  error object. |

## getMaxVolume

```TypeScript
getMaxVolume(volumeType: AudioVolumeType): Promise<int>
```

Obtains the maximum volume level of a stream. This API uses a promise to return the result.

**起始版本：** 9

**废弃版本：** 20

**替代接口：** ohos.multimedia.audio.AudioVolumeManager#getMaxVolumeByStream

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Promise used to return the maximum volume level. |

## getMaxVolumeSync

```TypeScript
getMaxVolumeSync(volumeType: AudioVolumeType): int
```

Obtains the maximum volume level of a stream. This API returns the result synchronously.

**起始版本：** 10

**废弃版本：** 20

**替代接口：** ohos.multimedia.audio.AudioVolumeManager#getMaxVolumeByStream

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Maximum volume level. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## getMinVolume

```TypeScript
getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>): void
```

Obtains the minimum volume level of a stream. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**废弃版本：** 20

**替代接口：** ohos.multimedia.audio.AudioVolumeManager#getMinVolumeByStream

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |
| callback | AsyncCallback&lt;int> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is the minimum stream volume level obtained; otherwise, err is an  error object. |

## getMinVolume

```TypeScript
getMinVolume(volumeType: AudioVolumeType): Promise<int>
```

Obtains the minimum volume level of a stream. This API uses a promise to return the result.

**起始版本：** 9

**废弃版本：** 20

**替代接口：** ohos.multimedia.audio.AudioVolumeManager#getMinVolumeByStream

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Promise used to return the minimum volume level. |

## getMinVolumeSync

```TypeScript
getMinVolumeSync(volumeType: AudioVolumeType): int
```

Obtains the minimum volume level of a stream. This API returns the result synchronously.

**起始版本：** 10

**废弃版本：** 20

**替代接口：** ohos.multimedia.audio.AudioVolumeManager#getMinVolumeByStream

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Minimum volume level. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## getRingerMode

```TypeScript
getRingerMode(callback: AsyncCallback<AudioRingMode>): void
```

Obtains the ringer mode. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AudioRingMode> | 是 | Callback used to return the result. If the operation is  successful, err is undefined and data is the ringer mode obtained; otherwise, err is an error  object. |

## getRingerMode

```TypeScript
getRingerMode(): Promise<AudioRingMode>
```

Obtains the ringer mode. This API uses a promise to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AudioRingMode> | Promise used to return the ringer mode. |

## getRingerModeSync

```TypeScript
getRingerModeSync(): AudioRingMode
```

Obtains the ringer mode. This API returns the result synchronously.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioRingMode | Ringer mode. |

## getSystemVolumeInDb

```TypeScript
getSystemVolumeInDb(volumeType: AudioVolumeType, volumeLevel: int, device: DeviceType, callback: AsyncCallback<double>): void
```

Obtains the volume gain. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**废弃版本：** 20

**替代接口：** ohos.multimedia.audio.AudioVolumeManager#getVolumeInUnitOfDbByStream

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |
| volumeLevel | int | 是 | Volume level. |
| device | DeviceType | 是 | Device type. |
| callback | AsyncCallback&lt;double> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is the volume gain obtained; otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. Return by callback. |
| 6800301 | System error. Return by callback. |

## getSystemVolumeInDb

```TypeScript
getSystemVolumeInDb(volumeType: AudioVolumeType, volumeLevel: int, device: DeviceType): Promise<double>
```

Obtains the volume gain. This API uses a promise to return the result.

**起始版本：** 10

**废弃版本：** 20

**替代接口：** ohos.multimedia.audio.AudioVolumeManager#getVolumeInUnitOfDbByStream

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |
| volumeLevel | int | 是 | Volume level. |
| device | DeviceType | 是 | Device type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;double> | Promise used to return the volume gain (in dB). |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. Return by promise. |
| 6800301 | System error. Return by promise. |

## getSystemVolumeInDbSync

```TypeScript
getSystemVolumeInDbSync(volumeType: AudioVolumeType, volumeLevel: int, device: DeviceType): double
```

Obtains the volume gain. This API returns the result synchronously.

**起始版本：** 10

**废弃版本：** 20

**替代接口：** ohos.multimedia.audio.AudioVolumeManager#getVolumeInUnitOfDbByStream

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |
| volumeLevel | int | 是 | Volume level. |
| device | DeviceType | 是 | Device type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| double | Volume gain (in dB). |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## getVolume

```TypeScript
getVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>): void
```

Obtains the volume level of a stream. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**废弃版本：** 20

**替代接口：** ohos.multimedia.audio.AudioVolumeManager#getVolumeByStream

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |
| callback | AsyncCallback&lt;int> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is the stream volume level obtained; otherwise, err is an error  object. The volume range of a specified stream can be obtained by calling  [getMinVolume]audio.AudioVolumeGroupManager.getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback)  and  [getMaxVolume]audio.AudioVolumeGroupManager.getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback)  . |

## getVolume

```TypeScript
getVolume(volumeType: AudioVolumeType): Promise<int>
```

Obtains the volume level of a stream. This API uses a promise to return the result.

**起始版本：** 9

**废弃版本：** 20

**替代接口：** ohos.multimedia.audio.AudioVolumeManager#getVolumeByStream

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Promise used to return the stream volume level. The volume range of a specified stream  can be obtained by calling  [getMinVolume]audio.AudioVolumeGroupManager.getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback)  and  [getMaxVolume]audio.AudioVolumeGroupManager.getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback)  . |

## getVolumeSync

```TypeScript
getVolumeSync(volumeType: AudioVolumeType): int
```

Obtains the volume level of a stream. This API returns the result synchronously.

**起始版本：** 10

**废弃版本：** 20

**替代接口：** ohos.multimedia.audio.AudioVolumeManager#getVolumeByStream

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Volume level of the stream. The volume range of a specified stream can be obtained by calling  [getMinVolume]audio.AudioVolumeGroupManager.getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback)  and  [getMaxVolume]audio.AudioVolumeGroupManager.getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback)  . |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## isMicrophoneMute

```TypeScript
isMicrophoneMute(callback: AsyncCallback<boolean>): void
```

Checks whether the microphone is muted. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is true if the microphone is muted or false if not muted;  otherwise, err is an error object. |

## isMicrophoneMute

```TypeScript
isMicrophoneMute(): Promise<boolean>
```

Checks whether the microphone is muted. This API uses a promise to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result, indicating whether the microphone is muted.  true if muted, false otherwise. |

## isMicrophoneMuteSync

```TypeScript
isMicrophoneMuteSync(): boolean
```

Checks whether the microphone is muted. This API returns the result synchronously.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for whether the microphone is muted. true if muted, false otherwise. |

## isMute

```TypeScript
isMute(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void
```

Checks whether a stream is muted. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**废弃版本：** 20

**替代接口：** ohos.multimedia.audio.AudioVolumeManager#isSystemMutedForStream

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

**起始版本：** 9

**废弃版本：** 20

**替代接口：** ohos.multimedia.audio.AudioVolumeManager#isSystemMutedForStream

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result, indicating whether the stream is muted. true  if muted, false otherwise. |

## isMuteSync

```TypeScript
isMuteSync(volumeType: AudioVolumeType): boolean
```

Checks whether a stream is muted. This API returns the result synchronously.

**起始版本：** 10

**废弃版本：** 20

**替代接口：** ohos.multimedia.audio.AudioVolumeManager#isSystemMutedForStream

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio volume type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for whether the stream is muted. true if muted, false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## isPersistentMicMute

```TypeScript
isPersistentMicMute(): boolean
```

Checks whether the persistent microphone status is muted.

**起始版本：** 12

**需要权限：** 

 ohos.permission.MICROPHONE_CONTROL

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns microphone persistent mute status.  true: The persistent mic mute is enabled in the current system.  false: The persistent mic mute is disabled in the current system. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |

**示例：**

```TypeScript
let value: boolean = audioVolumeGroupManager.isPersistentMicMute();

```

## isVolumeUnadjustable

```TypeScript
isVolumeUnadjustable(): boolean
```

Checks whether the fixed volume mode is enabled. When the fixed volume mode is enabled, the volume cannot be adjusted. This API returns the result synchronously.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for whether the fixed volume mode is enabled. true if enabled, false  otherwise. |

## mute

```TypeScript
mute(volumeType: AudioVolumeType, mute: boolean, callback: AsyncCallback<void>): void
```

Mutes a stream. This method uses an asynchronous callback to return the result.

**起始版本：** 9

**需要权限：** 

 ohos.permission.ACCESS_NOTIFICATION_POLICY

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio stream type. |
| mute | boolean | 是 | Mute status to set. The value true means to mute the stream, and false means the  opposite. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

audioVolumeGroupManager.mute(audio.AudioVolumeType.MEDIA, true, (err: BusinessError) => {
  if (err) {
    console.error(`Failed to mute the stream. ${err}`);
    return;
  }
  console.info('Callback invoked to indicate that the stream is muted.');
});

```

## mute

```TypeScript
mute(volumeType: AudioVolumeType, mute: boolean): Promise<void>
```

Mutes a stream. This method uses a promise to return the result.

**起始版本：** 9

**需要权限：** 

 ohos.permission.ACCESS_NOTIFICATION_POLICY

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio stream type. |
| mute | boolean | 是 | Mute status to set. The value true means to mute the stream, and false means the  opposite. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**示例：**

```TypeScript
audioVolumeGroupManager.mute(audio.AudioVolumeType.MEDIA, true).then(() => {
  console.info('Promise returned to indicate that the stream is muted.');
});

```

## off('ringerModeChange')

```TypeScript
off(type: 'ringerModeChange', callback?: Callback<AudioRingMode>): void
```

Unsubscribes from the ringer mode change event. This API uses an asynchronous callback to return the result.

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'ringerModeChange' | 是 | Event type. The event 'ringerModeChange' is triggered when the ringer  mode is changed. |
| callback | Callback&lt;AudioRingMode> | 否 | Callback used to return the changed ringer mode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## off('micStateChange')

```TypeScript
off(type: 'micStateChange', callback?: Callback<MicStateChangeEvent>): void
```

Unsubscribes from the microphone state change event. This API uses an asynchronous callback to return the result.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'micStateChange' | 是 | Event type. The event 'micStateChange' is triggered when the microphone  state is changed. |
| callback | Callback&lt;MicStateChangeEvent> | 否 | Callback used to return the changed microphone state. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters missing;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## offMicStateChange

```TypeScript
offMicStateChange(callback?: Callback<MicStateChangeEvent>): void
```

Unsubscribes to the microphone state change events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;MicStateChangeEvent> | 否 | Callback used to get the system microphone state change  event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## offRingerModeChange

```TypeScript
offRingerModeChange(callback?: Callback<AudioRingMode>): void
```

Unsubscribes to the ringer mode state change events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioRingMode> | 否 | Callback used to get the updated ringer mode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## on('ringerModeChange')

```TypeScript
on(type: 'ringerModeChange', callback: Callback<AudioRingMode>): void
```

Subscribes to the ringer mode change event, which is triggered when the [AudioRingMode](arkts-audio-audioringmode-e.md#AudioRingMode) changes. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'ringerModeChange' | 是 | Event type. The event 'ringerModeChange' is triggered when the ringer  mode is changed. |
| callback | Callback&lt;AudioRingMode> | 是 | Callback used to return the changed ringer mode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## on('micStateChange')

```TypeScript
on(type: 'micStateChange', callback: Callback<MicStateChangeEvent>): void
```

Subscribes to the microphone state change event, which is triggered when the microphone state is changed. This API uses an asynchronous callback to return the result. Currently, when multiple AudioManager instances are used in a single process, only the subscription of the last instance takes effect, and the subscription of other instances is overwritten (even if the last instance does not initiate a subscription). Therefore, you are advised to use a single AudioManager instance.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'micStateChange' | 是 | Event type. The event 'micStateChange' is triggered when the microphone  state is changed. |
| callback | Callback&lt;MicStateChangeEvent> | 是 | Callback used to return the changed microphone state. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## onMicStateChange

```TypeScript
onMicStateChange(callback: Callback<MicStateChangeEvent>): void
```

Listens for system microphone state change events. This method uses a callback to get microphone change events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;MicStateChangeEvent> | 是 | Callback used to get the system microphone state change  event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## onRingerModeChange

```TypeScript
onRingerModeChange(callback: Callback<AudioRingMode>): void
```

Listens for ringer mode change events. This method uses a callback to get ringer mode changes.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioRingMode> | 是 | Callback used to get the updated ringer mode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |

## setMicMute

```TypeScript
setMicMute(mute: boolean): Promise<void>
```

Mutes or unmutes the microphone. This method uses a promise to return the result.

**起始版本：** 11

**需要权限：** 

 ohos.permission.MANAGE_AUDIO_CONFIG

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mute | boolean | 是 | Mute status to set. The value true means to mute the microphone, and false means the  opposite. |

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
audioVolumeGroupManager.setMicMute(true).then(() => {
  console.info('Promise returned to indicate that the mic is muted.');
});

```

## setMicMutePersistent

```TypeScript
setMicMutePersistent(mute: boolean, type: PolicyType): Promise<void>
```

Mutes or unmutes the microphone. This method uses a promise to return the result.

**起始版本：** 12

**需要权限：** 

 ohos.permission.MICROPHONE_CONTROL

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mute | boolean | 是 | Mute status to set. The value true means to mute the microphone, and false means the  opposite. |
| type | PolicyType | 是 | Mute status to set. This value represents the caller's type such as EDM or privacy. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters missing.  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
audioVolumeGroupManager.setMicMutePersistent(true, audio.PolicyType.PRIVACY).then(() => {
  console.info('Succeeded in setting mic mute.');
});

```

## setMicrophoneMute

```TypeScript
setMicrophoneMute(mute: boolean, callback: AsyncCallback<void>): void
```

Mutes or unmutes the microphone. This method uses an asynchronous callback to return the result.

**起始版本：** 9

**废弃版本：** 11

**需要权限：** 

 ohos.permission.MANAGE_AUDIO_CONFIG

**系统能力：** SystemCapability.Multimedia.Audio.Volume

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

**起始版本：** 9

**废弃版本：** 11

**需要权限：** 

 ohos.permission.MANAGE_AUDIO_CONFIG

**系统能力：** SystemCapability.Multimedia.Audio.Volume

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

**起始版本：** 9

**需要权限：** 

 ohos.permission.ACCESS_NOTIFICATION_POLICY

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | AudioRingMode | 是 | Ringer mode. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

audioVolumeGroupManager.setRingerMode(audio.AudioRingMode.RINGER_MODE_NORMAL, (err: BusinessError) => {
  if (err) {
    console.error(`Failed to set the ringer mode. ${err}`);
    return;
  }
  console.info('Callback invoked to indicate a successful setting of the ringer mode.');
});

```

## setRingerMode

```TypeScript
setRingerMode(mode: AudioRingMode): Promise<void>
```

Sets the ringer mode. This method uses a promise to return the result.

**起始版本：** 9

**需要权限：** 

 ohos.permission.ACCESS_NOTIFICATION_POLICY

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | AudioRingMode | 是 | Ringer mode. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**示例：**

```TypeScript
audioVolumeGroupManager.setRingerMode(audio.AudioRingMode.RINGER_MODE_NORMAL).then(() => {
  console.info('Promise returned to indicate a successful setting of the ringer mode.');
});

```

## setVolume

```TypeScript
setVolume(volumeType: AudioVolumeType, volume: int, callback: AsyncCallback<void>): void
```

Sets the volume for a stream. This method uses an asynchronous callback to return the result.

**起始版本：** 9

**需要权限：** 

 ohos.permission.ACCESS_NOTIFICATION_POLICY

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio stream type. |
| volume | int | 是 | Volume to set. The value range can be obtained by calling getMinVolume and getMaxVolume. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

audioVolumeGroupManager.setVolume(audio.AudioVolumeType.MEDIA, 10, (err: BusinessError) => {
  if (err) {
    console.error(`Failed to set the volume. ${err}`);
    return;
  }
  console.info('Callback invoked to indicate a successful volume setting.');
});

```

## setVolume

```TypeScript
setVolume(volumeType: AudioVolumeType, volume: int): Promise<void>
```

Sets the volume for a stream. This method uses a promise to return the result.

**起始版本：** 9

**需要权限：** 

 ohos.permission.ACCESS_NOTIFICATION_POLICY

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio stream type. |
| volume | int | 是 | Volume to set. The value range can be obtained by calling getMinVolume and getMaxVolume. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**示例：**

```TypeScript
audioVolumeGroupManager.setVolume(audio.AudioVolumeType.MEDIA, 10).then(() => {
  console.info('Promise returned to indicate a successful volume setting.');
});

```

## setVolumeWithFlag

```TypeScript
setVolumeWithFlag(volumeType: AudioVolumeType, volume: int, flags: int): Promise<void>
```

Sets the volume for a stream. This method uses a promise to return the result.

**起始版本：** 12

**需要权限：** 

 ohos.permission.ACCESS_NOTIFICATION_POLICY

**系统能力：** SystemCapability.Multimedia.Audio.Volume

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | 是 | Audio stream type. |
| volume | int | 是 | Volume to set. The value range can be obtained by calling getMinVolume and getMaxVolume. |
| flags | int | 是 | volume flags used to enable different operations, can be union of {@link VolumeFlag} |

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
audioVolumeGroupManager.setVolumeWithFlag(audio.AudioVolumeType.MEDIA, 10, 1).then(() => {
  console.info('Promise returned to indicate a successful volume setting.');
});

```

