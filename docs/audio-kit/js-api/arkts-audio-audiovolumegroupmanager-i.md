# AudioVolumeGroupManager

This interface implements volume management for an audio group. Before calling any API in AudioVolumeGroupManager, you must use [getVolumeGroupManager](arkts-audio-audiovolumemanager-i.md#getVolumeGroupManager) to obtain an AudioVolumeGroupManager instance. > **NOTE** > > - The initial APIs of this interface are supported since API version 9.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Volume

## Modules to Import

```TypeScript
import { audio } from '@kit.AudioKit';
```

## adjustSystemVolumeByStep

```TypeScript
adjustSystemVolumeByStep(volumeType: AudioVolumeType, adjustType: VolumeAdjustType, callback: AsyncCallback<void>): void
```

Adjusts system volume by step for target volume type. This method uses an asynchronous callback to return the result.

**Since:** 10

**Required permissions:** 

 ohos.permission.ACCESS_NOTIFICATION_POLICY

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |
| adjustType | VolumeAdjustType | Yes | Volume adjustment type. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. Return by callback. |
| 6800301 | System error. Return by callback. |

**Example**

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

**Since:** 10

**Required permissions:** 

 ohos.permission.ACCESS_NOTIFICATION_POLICY

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |
| adjustType | VolumeAdjustType | Yes | Volume adjustment type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. Return by promise. |
| 6800301 | System error. Return by promise. |

**Example**

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

**Since:** 10

**Required permissions:** 

 ohos.permission.ACCESS_NOTIFICATION_POLICY

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| adjustType | VolumeAdjustType | Yes | Volume adjustment type. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. Return by callback. |
| 6800301 | System error. Return by callback. |

**Example**

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

**Since:** 10

**Required permissions:** 

 ohos.permission.ACCESS_NOTIFICATION_POLICY

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| adjustType | VolumeAdjustType | Yes | Volume adjustment type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. Return by promise. |
| 6800301 | System error. Return by promise. |

**Example**

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

**Since:** 13

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | int | Yes | The target uid's active volume type or  0 which means the global active volume type. |

**Return value:**

| Type | Description |
| --- | --- |
| AudioVolumeType | Current active volume type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters unspecified.  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

**Example**

```TypeScript
let uid: number = 20010041; // Application ID.

let value = audioVolumeGroupManager.getActiveVolumeTypeSync(uid);

```

## getMaxAmplitudeForInputDevice

```TypeScript
getMaxAmplitudeForInputDevice(inputDevice: AudioDeviceDescriptor): Promise<double>
```

Obtains the maximum amplitude (in the range [0, 1]) of the audio stream for an input device. This API uses a promise to return the result.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| inputDevice | AudioDeviceDescriptor | Yes | Descriptor of the target device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;double> | Promise used to return the maximum amplitude, which is in the range [0, 1]. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. Return by promise. |
| 6800301 | System error. Return by promise. |

## getMaxAmplitudeForOutputDevice

```TypeScript
getMaxAmplitudeForOutputDevice(outputDevice: AudioDeviceDescriptor): Promise<double>
```

Obtains the maximum amplitude (in the range [0, 1]) of the audio stream for an output device. This API uses a promise to return the result.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| outputDevice | AudioDeviceDescriptor | Yes | Descriptor of the target device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;double> | Promise used to return the maximum amplitude, which is in the range [0, 1]. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. Return by promise. |
| 6800301 | System error. Return by promise. |

## getMaxVolume

```TypeScript
getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>): void
```

Obtains the maximum volume level of a stream. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 20

**Substitute:** ohos.multimedia.audio.AudioVolumeManager#getMaxVolumeByStream

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |
| callback | AsyncCallback&lt;int> | Yes | Callback used to return the result. If the operation is successful,  err is undefined and data is the maximum stream volume level obtained; otherwise, err is an  error object. |

## getMaxVolume

```TypeScript
getMaxVolume(volumeType: AudioVolumeType): Promise<int>
```

Obtains the maximum volume level of a stream. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 20

**Substitute:** ohos.multimedia.audio.AudioVolumeManager#getMaxVolumeByStream

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise used to return the maximum volume level. |

## getMaxVolumeSync

```TypeScript
getMaxVolumeSync(volumeType: AudioVolumeType): int
```

Obtains the maximum volume level of a stream. This API returns the result synchronously.

**Since:** 10

**Deprecated since:** 20

**Substitute:** ohos.multimedia.audio.AudioVolumeManager#getMaxVolumeByStream

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |

**Return value:**

| Type | Description |
| --- | --- |
| int | Maximum volume level. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## getMinVolume

```TypeScript
getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>): void
```

Obtains the minimum volume level of a stream. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 20

**Substitute:** ohos.multimedia.audio.AudioVolumeManager#getMinVolumeByStream

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |
| callback | AsyncCallback&lt;int> | Yes | Callback used to return the result. If the operation is successful,  err is undefined and data is the minimum stream volume level obtained; otherwise, err is an  error object. |

## getMinVolume

```TypeScript
getMinVolume(volumeType: AudioVolumeType): Promise<int>
```

Obtains the minimum volume level of a stream. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 20

**Substitute:** ohos.multimedia.audio.AudioVolumeManager#getMinVolumeByStream

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise used to return the minimum volume level. |

## getMinVolumeSync

```TypeScript
getMinVolumeSync(volumeType: AudioVolumeType): int
```

Obtains the minimum volume level of a stream. This API returns the result synchronously.

**Since:** 10

**Deprecated since:** 20

**Substitute:** ohos.multimedia.audio.AudioVolumeManager#getMinVolumeByStream

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |

**Return value:**

| Type | Description |
| --- | --- |
| int | Minimum volume level. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## getRingerMode

```TypeScript
getRingerMode(callback: AsyncCallback<AudioRingMode>): void
```

Obtains the ringer mode. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AudioRingMode> | Yes | Callback used to return the result. If the operation is  successful, err is undefined and data is the ringer mode obtained; otherwise, err is an error  object. |

## getRingerMode

```TypeScript
getRingerMode(): Promise<AudioRingMode>
```

Obtains the ringer mode. This API uses a promise to return the result.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioRingMode> | Promise used to return the ringer mode. |

## getRingerModeSync

```TypeScript
getRingerModeSync(): AudioRingMode
```

Obtains the ringer mode. This API returns the result synchronously.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Return value:**

| Type | Description |
| --- | --- |
| AudioRingMode | Ringer mode. |

## getSystemVolumeInDb

```TypeScript
getSystemVolumeInDb(volumeType: AudioVolumeType, volumeLevel: int, device: DeviceType, callback: AsyncCallback<double>): void
```

Obtains the volume gain. This API uses an asynchronous callback to return the result.

**Since:** 10

**Deprecated since:** 20

**Substitute:** ohos.multimedia.audio.AudioVolumeManager#getVolumeInUnitOfDbByStream

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |
| volumeLevel | int | Yes | Volume level. |
| device | DeviceType | Yes | Device type. |
| callback | AsyncCallback&lt;double> | Yes | Callback used to return the result. If the operation is successful,  err is undefined and data is the volume gain obtained; otherwise, err is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. Return by callback. |
| 6800301 | System error. Return by callback. |

## getSystemVolumeInDb

```TypeScript
getSystemVolumeInDb(volumeType: AudioVolumeType, volumeLevel: int, device: DeviceType): Promise<double>
```

Obtains the volume gain. This API uses a promise to return the result.

**Since:** 10

**Deprecated since:** 20

**Substitute:** ohos.multimedia.audio.AudioVolumeManager#getVolumeInUnitOfDbByStream

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |
| volumeLevel | int | Yes | Volume level. |
| device | DeviceType | Yes | Device type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;double> | Promise used to return the volume gain (in dB). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. Return by promise. |
| 6800301 | System error. Return by promise. |

## getSystemVolumeInDbSync

```TypeScript
getSystemVolumeInDbSync(volumeType: AudioVolumeType, volumeLevel: int, device: DeviceType): double
```

Obtains the volume gain. This API returns the result synchronously.

**Since:** 10

**Deprecated since:** 20

**Substitute:** ohos.multimedia.audio.AudioVolumeManager#getVolumeInUnitOfDbByStream

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |
| volumeLevel | int | Yes | Volume level. |
| device | DeviceType | Yes | Device type. |

**Return value:**

| Type | Description |
| --- | --- |
| double | Volume gain (in dB). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## getVolume

```TypeScript
getVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>): void
```

Obtains the volume level of a stream. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 20

**Substitute:** ohos.multimedia.audio.AudioVolumeManager#getVolumeByStream

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |
| callback | AsyncCallback&lt;int> | Yes | Callback used to return the result. If the operation is successful,  err is undefined and data is the stream volume level obtained; otherwise, err is an error  object. The volume range of a specified stream can be obtained by calling  [getMinVolume]audio.AudioVolumeGroupManager.getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback)  and  [getMaxVolume]audio.AudioVolumeGroupManager.getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback)  . |

## getVolume

```TypeScript
getVolume(volumeType: AudioVolumeType): Promise<int>
```

Obtains the volume level of a stream. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 20

**Substitute:** ohos.multimedia.audio.AudioVolumeManager#getVolumeByStream

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise used to return the stream volume level. The volume range of a specified stream  can be obtained by calling  [getMinVolume]audio.AudioVolumeGroupManager.getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback)  and  [getMaxVolume]audio.AudioVolumeGroupManager.getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback)  . |

## getVolumeSync

```TypeScript
getVolumeSync(volumeType: AudioVolumeType): int
```

Obtains the volume level of a stream. This API returns the result synchronously.

**Since:** 10

**Deprecated since:** 20

**Substitute:** ohos.multimedia.audio.AudioVolumeManager#getVolumeByStream

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |

**Return value:**

| Type | Description |
| --- | --- |
| int | Volume level of the stream. The volume range of a specified stream can be obtained by calling  [getMinVolume]audio.AudioVolumeGroupManager.getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback)  and  [getMaxVolume]audio.AudioVolumeGroupManager.getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback)  . |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## isMicrophoneMute

```TypeScript
isMicrophoneMute(callback: AsyncCallback<boolean>): void
```

Checks whether the microphone is muted. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | Callback used to return the result. If the operation is successful,  err is undefined and data is true if the microphone is muted or false if not muted;  otherwise, err is an error object. |

## isMicrophoneMute

```TypeScript
isMicrophoneMute(): Promise<boolean>
```

Checks whether the microphone is muted. This API uses a promise to return the result.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result, indicating whether the microphone is muted.  true if muted, false otherwise. |

## isMicrophoneMuteSync

```TypeScript
isMicrophoneMuteSync(): boolean
```

Checks whether the microphone is muted. This API returns the result synchronously.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for whether the microphone is muted. true if muted, false otherwise. |

## isMute

```TypeScript
isMute(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void
```

Checks whether a stream is muted. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 20

**Substitute:** ohos.multimedia.audio.AudioVolumeManager#isSystemMutedForStream

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |
| callback | AsyncCallback&lt;boolean> | Yes | Callback used to return the result. If the operation is successful,  err is undefined and data is true if the stream is muted or false if not muted; otherwise  , err is an error object. |

## isMute

```TypeScript
isMute(volumeType: AudioVolumeType): Promise<boolean>
```

Checks whether a stream is muted. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 20

**Substitute:** ohos.multimedia.audio.AudioVolumeManager#isSystemMutedForStream

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result, indicating whether the stream is muted. true  if muted, false otherwise. |

## isMuteSync

```TypeScript
isMuteSync(volumeType: AudioVolumeType): boolean
```

Checks whether a stream is muted. This API returns the result synchronously.

**Since:** 10

**Deprecated since:** 20

**Substitute:** ohos.multimedia.audio.AudioVolumeManager#isSystemMutedForStream

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for whether the stream is muted. true if muted, false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## isPersistentMicMute

```TypeScript
isPersistentMicMute(): boolean
```

Checks whether the persistent microphone status is muted.

**Since:** 12

**Required permissions:** 

 ohos.permission.MICROPHONE_CONTROL

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns microphone persistent mute status.  true: The persistent mic mute is enabled in the current system.  false: The persistent mic mute is disabled in the current system. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |

**Example**

```TypeScript
let value: boolean = audioVolumeGroupManager.isPersistentMicMute();

```

## isVolumeUnadjustable

```TypeScript
isVolumeUnadjustable(): boolean
```

Checks whether the fixed volume mode is enabled. When the fixed volume mode is enabled, the volume cannot be adjusted. This API returns the result synchronously.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for whether the fixed volume mode is enabled. true if enabled, false  otherwise. |

## mute

```TypeScript
mute(volumeType: AudioVolumeType, mute: boolean, callback: AsyncCallback<void>): void
```

Mutes a stream. This method uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** 

 ohos.permission.ACCESS_NOTIFICATION_POLICY

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio stream type. |
| mute | boolean | Yes | Mute status to set. The value true means to mute the stream, and false means the  opposite. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. |

**Example**

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

**Since:** 9

**Required permissions:** 

 ohos.permission.ACCESS_NOTIFICATION_POLICY

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio stream type. |
| mute | boolean | Yes | Mute status to set. The value true means to mute the stream, and false means the  opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**Example**

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

**Since:** 18

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'ringerModeChange' | Yes | Event type. The event 'ringerModeChange' is triggered when the ringer  mode is changed. |
| callback | Callback&lt;AudioRingMode> | No | Callback used to return the changed ringer mode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## off('micStateChange')

```TypeScript
off(type: 'micStateChange', callback?: Callback<MicStateChangeEvent>): void
```

Unsubscribes from the microphone state change event. This API uses an asynchronous callback to return the result.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'micStateChange' | Yes | Event type. The event 'micStateChange' is triggered when the microphone  state is changed. |
| callback | Callback&lt;MicStateChangeEvent> | No | Callback used to return the changed microphone state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters missing;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## offMicStateChange

```TypeScript
offMicStateChange(callback?: Callback<MicStateChangeEvent>): void
```

Unsubscribes to the microphone state change events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;MicStateChangeEvent> | No | Callback used to get the system microphone state change  event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## offRingerModeChange

```TypeScript
offRingerModeChange(callback?: Callback<AudioRingMode>): void
```

Unsubscribes to the ringer mode state change events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioRingMode> | No | Callback used to get the updated ringer mode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## on('ringerModeChange')

```TypeScript
on(type: 'ringerModeChange', callback: Callback<AudioRingMode>): void
```

Subscribes to the ringer mode change event, which is triggered when the [AudioRingMode](arkts-audio-audioringmode-e.md#AudioRingMode) changes. This API uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'ringerModeChange' | Yes | Event type. The event 'ringerModeChange' is triggered when the ringer  mode is changed. |
| callback | Callback&lt;AudioRingMode> | Yes | Callback used to return the changed ringer mode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## on('micStateChange')

```TypeScript
on(type: 'micStateChange', callback: Callback<MicStateChangeEvent>): void
```

Subscribes to the microphone state change event, which is triggered when the microphone state is changed. This API uses an asynchronous callback to return the result. Currently, when multiple AudioManager instances are used in a single process, only the subscription of the last instance takes effect, and the subscription of other instances is overwritten (even if the last instance does not initiate a subscription). Therefore, you are advised to use a single AudioManager instance.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'micStateChange' | Yes | Event type. The event 'micStateChange' is triggered when the microphone  state is changed. |
| callback | Callback&lt;MicStateChangeEvent> | Yes | Callback used to return the changed microphone state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## onMicStateChange

```TypeScript
onMicStateChange(callback: Callback<MicStateChangeEvent>): void
```

Listens for system microphone state change events. This method uses a callback to get microphone change events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;MicStateChangeEvent> | Yes | Callback used to get the system microphone state change  event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## onRingerModeChange

```TypeScript
onRingerModeChange(callback: Callback<AudioRingMode>): void
```

Listens for ringer mode change events. This method uses a callback to get ringer mode changes.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioRingMode> | Yes | Callback used to get the updated ringer mode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## setMicMute

```TypeScript
setMicMute(mute: boolean): Promise<void>
```

Mutes or unmutes the microphone. This method uses a promise to return the result.

**Since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_AUDIO_CONFIG

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mute | boolean | Yes | Mute status to set. The value true means to mute the microphone, and false means the  opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

**Example**

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

**Since:** 12

**Required permissions:** 

 ohos.permission.MICROPHONE_CONTROL

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mute | boolean | Yes | Mute status to set. The value true means to mute the microphone, and false means the  opposite. |
| type | PolicyType | Yes | Mute status to set. This value represents the caller's type such as EDM or privacy. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters missing.  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

**Example**

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

**Since:** 9

**Deprecated since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_AUDIO_CONFIG

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mute | boolean | Yes | Mute status to set. The value true means to mute the microphone, and false means the opposite. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. |

## setMicrophoneMute

```TypeScript
setMicrophoneMute(mute: boolean): Promise<void>
```

Mutes or unmutes the microphone. This method uses a promise to return the result.

**Since:** 9

**Deprecated since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_AUDIO_CONFIG

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mute | boolean | Yes | Mute status to set. The value true means to mute the microphone, and false means the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

## setRingerMode

```TypeScript
setRingerMode(mode: AudioRingMode, callback: AsyncCallback<void>): void
```

Sets the ringer mode. This method uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** 

 ohos.permission.ACCESS_NOTIFICATION_POLICY

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | AudioRingMode | Yes | Ringer mode. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. |

**Example**

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

**Since:** 9

**Required permissions:** 

 ohos.permission.ACCESS_NOTIFICATION_POLICY

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | AudioRingMode | Yes | Ringer mode. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**Example**

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

**Since:** 9

**Required permissions:** 

 ohos.permission.ACCESS_NOTIFICATION_POLICY

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio stream type. |
| volume | int | Yes | Volume to set. The value range can be obtained by calling getMinVolume and getMaxVolume. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. |

**Example**

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

**Since:** 9

**Required permissions:** 

 ohos.permission.ACCESS_NOTIFICATION_POLICY

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio stream type. |
| volume | int | Yes | Volume to set. The value range can be obtained by calling getMinVolume and getMaxVolume. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**Example**

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

**Since:** 12

**Required permissions:** 

 ohos.permission.ACCESS_NOTIFICATION_POLICY

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio stream type. |
| volume | int | Yes | Volume to set. The value range can be obtained by calling getMinVolume and getMaxVolume. |
| flags | int | Yes | volume flags used to enable different operations, can be union of {@link VolumeFlag} |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |

**Example**

```TypeScript
audioVolumeGroupManager.setVolumeWithFlag(audio.AudioVolumeType.MEDIA, 10, 1).then(() => {
  console.info('Promise returned to indicate a successful volume setting.');
});

```

