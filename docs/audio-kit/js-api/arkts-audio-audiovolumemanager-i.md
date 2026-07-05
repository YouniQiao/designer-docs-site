# AudioVolumeManager

This interface implements audio volume management. Before calling any API in AudioVolumeManager, you must use [getVolumeManager](arkts-audio-audiomanager-i.md#getVolumeManager) to obtain an AudioVolumeManager instance. > **NOTE** > > - The initial APIs of this interface are supported since API version 9.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Volume

## Modules to Import

```TypeScript
import { audio } from '@kit.AudioKit';
```

## forceVolumeKeyControlType

```TypeScript
forceVolumeKeyControlType(volumeType: AudioVolumeType, duration: int): void
```

Interface for forcibly setting the volume type by pressing the volume key.

**Since:** 20

**Required permissions:** 

 ohos.permission.MODIFY_AUDIO_SETTINGS

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type  that the application expects to control using the volume key. |
| duration | int | Yes | Duration for continuing to control the volume type when no key is pressed.  The forced volume type setting is released when the timer expires. Unit is second, the maximum  duration is 10 seconds.  If the duration is set to -1, the setting is canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |
| 6800301 | Crash or blocking occurs in system process. |

## getActiveStreamsVolumeInfo

```TypeScript
getActiveStreamsVolumeInfo(): ActiveStreamsVolumeInfoArray
```

Obtains the Volume information of the active audio streams.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| ActiveStreamsVolumeInfoArray | Returns the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 6800301 | System error, crash or blocking occurs in system process. |

## getAppVolumePercentage

```TypeScript
getAppVolumePercentage(): Promise<int>
```

Obtains the volume of the application. (The volume range is 0 to 100.) This API uses a promise to return the result.

**Since:** 19

**Atomic service API:** From API version 23 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise used to return the application volume. |

## getAppVolumePercentageForUid

```TypeScript
getAppVolumePercentageForUid(uid: int): Promise<int>
```

Get the volume for specified app with range from 0 to 100. Applications with same uid share the same volume.

**Since:** 19

**Required permissions:** 

 ohos.permission.MANAGE_AUDIO_CONFIG

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | int | Yes | App's uid. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise used to return the application's volume percentage. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

**Example**

```TypeScript
let uid: number = 20010041; // Application ID.

audioVolumeManager.getAppVolumePercentageForUid(20010041).then((value: number) => {
  console.info(`app volume is ${value}.`);
});

```

## getAudioVolumeTypeByStreamUsage

```TypeScript
getAudioVolumeTypeByStreamUsage(streamUsage: StreamUsage): AudioVolumeType
```

Obtains volume type by stream type.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streamUsage | StreamUsage | Yes | Audio stream type. |

**Return value:**

| Type | Description |
| --- | --- |
| AudioVolumeType | Return the audio volume type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## getMaxSystemVolume

```TypeScript
getMaxSystemVolume(volumeType: AudioVolumeType): int
```

Obtains the maximum volume allowed for a volume type.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |

**Return value:**

| Type | Description |
| --- | --- |
| int | Max volume level. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## getMaxVolumeByStream

```TypeScript
getMaxVolumeByStream(streamUsage: StreamUsage): int
```

Obtains the maximum volume of a specified audio stream.

**Since:** 20

**Atomic service API:** From API version 23 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streamUsage | StreamUsage | Yes | Audio stream for which the maximum volume is to be obtained. |

**Return value:**

| Type | Description |
| --- | --- |
| int | Volume. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## getMinSystemVolume

```TypeScript
getMinSystemVolume(volumeType: AudioVolumeType): int
```

Obtains the minimum volume allowed for a volume type.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |

**Return value:**

| Type | Description |
| --- | --- |
| int | Min volume level. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## getMinSystemVolumePercentage

```TypeScript
getMinSystemVolumePercentage(volumeType: AudioVolumeType): int
```

Gets the minimum system volume percentage application can set for specified volume type.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type to get. |

**Return value:**

| Type | Description |
| --- | --- |
| int | Returns the volume percentage, which is an interger with the range [0, 100]. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## getMinVolumeByStream

```TypeScript
getMinVolumeByStream(streamUsage: StreamUsage): int
```

Obtains the minimum volume of a specified audio stream.

**Since:** 20

**Atomic service API:** From API version 23 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streamUsage | StreamUsage | Yes | Audio stream for which the minimum volume is to be obtained. |

**Return value:**

| Type | Description |
| --- | --- |
| int | Volume. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## getStreamUsagesByVolumeType

```TypeScript
getStreamUsagesByVolumeType(volumeType: AudioVolumeType): StreamUsageArray
```

Obtains stream types by volume type.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio stream type. |

**Return value:**

| Type | Description |
| --- | --- |
| StreamUsageArray | Return the audio stream types. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## getSupportedAudioVolumeTypes

```TypeScript
getSupportedAudioVolumeTypes(): Array<Readonly<AudioVolumeType>>
```

Obtains system supported volume types.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;Readonly&lt;AudioVolumeType>> | Return the system volume type array. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |

## getSystemVolume

```TypeScript
getSystemVolume(volumeType: AudioVolumeType): int
```

Obtains the volume of a volume type.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |

**Return value:**

| Type | Description |
| --- | --- |
| int | Current system volume level. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## getSystemVolumeByUid

```TypeScript
getSystemVolumeByUid(volumeType: AudioVolumeType, callingUid: int): int
```

Obtains the volume of streams in specific uid application.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |
| callingUid | int | Yes | Uid of the stream owner. |

**Return value:**

| Type | Description |
| --- | --- |
| int | Current system volume level. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |
| 6800301 | Crash or blocking occurs in system process. |

## getSystemVolumePercentage

```TypeScript
getSystemVolumePercentage(volumeType: AudioVolumeType): int
```

Gets the current system volume percentage for specified volume type.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type to get. |

**Return value:**

| Type | Description |
| --- | --- |
| int | Returns the volume percentage, which is an interger with the range [0, 100]. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## getVolumeByStream

```TypeScript
getVolumeByStream(streamUsage: StreamUsage): int
```

Obtains the volume of a specified audio stream.

**Since:** 20

**Atomic service API:** From API version 23 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streamUsage | StreamUsage | Yes | Audio stream for which the volume is to be obtained. |

**Return value:**

| Type | Description |
| --- | --- |
| int | Volume. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## getVolumeGroupInfos

```TypeScript
getVolumeGroupInfos(networkId: string, callback: AsyncCallback<VolumeGroupInfos>): void
```

Get the volume group list for a networkId. This method uses an asynchronous callback to return the result.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| networkId | string | Yes | Distributed deice net work id |
| callback | AsyncCallback&lt;VolumeGroupInfos> | Yes | Callback used to return the result. |

**Example**

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

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| networkId | string | Yes | Distributed deice net work id |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;VolumeGroupInfos> | Promise used to return the result. |

**Example**

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

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| networkId | string | Yes | Distributed deice net work id |

**Return value:**

| Type | Description |
| --- | --- |
| VolumeGroupInfos | Volume group info list. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

**Example**

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

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| groupId | int | Yes | Volume group ID. The default value is DEFAULT_VOLUME_GROUP_ID. |
| callback | AsyncCallback&lt;AudioVolumeGroupManager> | Yes | Callback used to return the result. If the operation  is successful, err is undefined and data is the VolumeGroupManager instance obtained; otherwise,  err is an error object. |

## getVolumeGroupManager

```TypeScript
getVolumeGroupManager(groupId: int): Promise<AudioVolumeGroupManager>
```

Obtains a VolumeGroupManager instance. This API uses a promise to return the result.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| groupId | int | Yes | Volume group ID. The default value is DEFAULT_VOLUME_GROUP_ID. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioVolumeGroupManager> | Promise used to return the VolumeGroupManager instance. |

## getVolumeGroupManagerSync

```TypeScript
getVolumeGroupManagerSync(groupId: int): AudioVolumeGroupManager
```

Obtains a VolumeGroupManager instance. This API returns the result synchronously.

**Since:** 10

**Atomic service API:** From API version 23 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| groupId | int | Yes | Volume group ID. The default value is DEFAULT_VOLUME_GROUP_ID. |

**Return value:**

| Type | Description |
| --- | --- |
| AudioVolumeGroupManager | VolumeGroupManager instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## getVolumeInUnitOfDb

```TypeScript
getVolumeInUnitOfDb(volumeType: AudioVolumeType, volumeLevel: int, device: DeviceType): double
```

Gets the volume db value that system calculate by volume type, volume level and device type.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |
| volumeLevel | int | Yes | Volume level. |
| device | DeviceType | Yes | Output device type. |

**Return value:**

| Type | Description |
| --- | --- |
| double | The system volume in dB. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## getVolumeInUnitOfDbByStream

```TypeScript
getVolumeInUnitOfDbByStream(streamUsage: StreamUsage, volumeLevel: int, device: DeviceType): double
```

Obtains the volume (in dB) calculated by the system based on the audio stream, volume level, and device type.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streamUsage | StreamUsage | Yes | Audio stream. |
| volumeLevel | int | Yes | Volume level. |
| device | DeviceType | Yes | Device type. |

**Return value:**

| Type | Description |
| --- | --- |
| double | Volume of the audio stream, in dB. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## isAppVolumeMutedForUid

```TypeScript
isAppVolumeMutedForUid(uid: int, owned: boolean): Promise<boolean>
```

Checks whether the app volume is muted. If there are multiple callers setting muted states, only when all callers cancel muted state the volume of this app will be truly unmuted.

**Since:** 19

**Required permissions:** 

 ohos.permission.MANAGE_AUDIO_CONFIG

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | int | Yes | App's uid. |
| owned | boolean | Yes | If true is passed, the result will be indicated your owned muted state  settings to this app. Otherwise if false is passed, the result will be indicated the real muted state. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## isSystemMuted

```TypeScript
isSystemMuted(volumeType: AudioVolumeType): boolean
```

Checks whether a volume type is muted.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | The mute status of the volume type. The value true  means that the volume type is muted, and false means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## isSystemMutedForStream

```TypeScript
isSystemMutedForStream(streamUsage: StreamUsage): boolean
```

Checks whether a specified audio stream is muted.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streamUsage | StreamUsage | Yes | Audio stream to check. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for whether the audio stream is muted. true if muted, false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## off('volumeChange')

```TypeScript
off(type: 'volumeChange', callback?: Callback<VolumeEvent>): void
```

Unsubscribes from the system volume change event. This API uses an asynchronous callback to return the result.

**Since:** 12

**Deprecated since:** 20

**Substitute:** ohos.multimedia.audio.AudioVolumeManager#event:streamVolumeChange

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'volumeChange' | Yes | Event type. The event 'volumeChange' is triggered when the system volume is  changed. |
| callback | Callback&lt;VolumeEvent> | No | Callback used to return the changed volume. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters missing;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## off('appVolumeChangeForUid')

```TypeScript
off(type: 'appVolumeChangeForUid', callback?: Callback<VolumeEvent>): void
```

Unsubscribes to the app volume change events..

**Since:** 19

**Required permissions:** 

 ohos.permission.MANAGE_AUDIO_CONFIG

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'appVolumeChangeForUid' | Yes | Type of the event to be unregistered. Only the appVolumeChangeForUid  event is supported. |
| callback | Callback&lt;VolumeEvent> | No | Callback used to obtain the invoking volume change event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## off('appVolumeChange')

```TypeScript
off(type: 'appVolumeChange', callback?: Callback<VolumeEvent>): void
```

Unsubscribes from the application-level volume change event of the application. This API uses an asynchronous callback to return the result.

**Since:** 19

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'appVolumeChange' | Yes | Event type. The event 'appVolumeChange' is triggered when the application  -level volume is changed. |
| callback | Callback&lt;VolumeEvent> | No | Callback used to return the changed volume. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## off('activeVolumeTypeChange')

```TypeScript
off(type: 'activeVolumeTypeChange', callback?: Callback<AudioVolumeType>): void
```

Unsubscribes from active volume type changes.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'activeVolumeTypeChange' | Yes | Type of the event to unregister.  Only the activeVolumeTypeChange event is supported. |
| callback | Callback&lt;AudioVolumeType> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## off('systemVolumeChange')

```TypeScript
off(type: 'systemVolumeChange', callback?: Callback<VolumeEvent>): void
```

Unsubscribes to the system volume change events.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'systemVolumeChange' | Yes | Type of the event to be unregistered.  Only the systemVolumeChange event is supported. |
| callback | Callback&lt;VolumeEvent> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## off('streamVolumeChange')

```TypeScript
off(type: 'streamVolumeChange', callback?: Callback<StreamVolumeEvent>): void
```

Unsubscribes from the system audio volume change event, which is triggered when the system audio volume is changed. This API uses an asynchronous callback to return the result.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'streamVolumeChange' | Yes | Event type. The event 'volumeChange' is triggered when the system  volume is changed. |
| callback | Callback&lt;StreamVolumeEvent> | No |  |

## offActiveVolumeTypeChange

```TypeScript
offActiveVolumeTypeChange(callback?: Callback<AudioVolumeType>): void
```

Unsubscribes from active volume type changes.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioVolumeType> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## offAppVolumeChange

```TypeScript
offAppVolumeChange(callback?: Callback<VolumeEvent>): void
```

Unsubscribes to the app volume change events..

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;VolumeEvent> | No | Callback used to obtain the invoking volume change event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## offAppVolumeChangeForUid

```TypeScript
offAppVolumeChangeForUid(callback?: Callback<VolumeEvent>): void
```

Unsubscribes to the app volume change events..

**Since:** 23

**Required permissions:** 

 ohos.permission.MANAGE_AUDIO_CONFIG

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;VolumeEvent> | No | Callback used to obtain the invoking volume change event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## offStreamVolumeChange

```TypeScript
offStreamVolumeChange(callback?: Callback<StreamVolumeEvent>): void
```

Unsubscribes to the stream volume change events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;StreamVolumeEvent> | No |  |

## offSystemVolumeChange

```TypeScript
offSystemVolumeChange(callback?: Callback<VolumeEvent>): void
```

Unsubscribes to the system volume change events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;VolumeEvent> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## offSystemVolumeChangeByFilter

```TypeScript
offSystemVolumeChangeByFilter(callback?: Callback<VolumeEvent>): void
```

Unsubscribes from the system volume change events.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;VolumeEvent> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system app. |
| 6800101 | Parameter verification failed. |

## offVolumePercentageChange

```TypeScript
offVolumePercentageChange(callback?: Callback<VolumeEvent>): void
```

Unsubscribes from system volume percentage change events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;VolumeEvent> | No | Callback used to return the system volume percentage change event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## on('volumeChange')

```TypeScript
on(type: 'volumeChange', callback: Callback<VolumeEvent>): void
```

Subscribes to the system volume change event, which is triggered when the system volume is changed. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 20

**Substitute:** ohos.multimedia.audio.AudioVolumeManager#event:streamVolumeChange

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'volumeChange' | Yes | Event type. The event 'volumeChange' is triggered when the system volume is  changed. |
| callback | Callback&lt;VolumeEvent> | Yes | Callback used to return the changed volume. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## on('appVolumeChangeForUid')

```TypeScript
on(type: 'appVolumeChangeForUid', uid: int, callback: Callback<VolumeEvent>): void
```

Listens for specified app volume change events. The app volume may changed by {@link setAppVolumePercentageForUid}.

**Since:** 19

**Required permissions:** 

 ohos.permission.MANAGE_AUDIO_CONFIG

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'appVolumeChangeForUid' | Yes | Type of the event to listen for. Only the  appVolumeChangeForUid event is supported. |
| uid | int | Yes | The app's uid. |
| callback | Callback&lt;VolumeEvent> | Yes | Callback used to get the app volume change event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## on('appVolumeChange')

```TypeScript
on(type: 'appVolumeChange', callback: Callback<VolumeEvent>): void
```

Subscribes to the application-level volume change event of the application (triggered when the application-level volume is changed). This API uses an asynchronous callback to return the result.

**Since:** 19

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'appVolumeChange' | Yes | Event type. The event 'appVolumeChange' is triggered when the application  -level volume is changed. |
| callback | Callback&lt;VolumeEvent> | Yes | Callback used to return the changed volume. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## on('activeVolumeTypeChange')

```TypeScript
on(type: 'activeVolumeTypeChange', callback: Callback<AudioVolumeType>): void
```

Subscribes to active volume type changes.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'activeVolumeTypeChange' | Yes | Type of the event to listen for.  Only the activeVolumeTypeChange event is supported. |
| callback | Callback&lt;AudioVolumeType> | Yes | Callback used to return the active volume type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## on('systemVolumeChange')

```TypeScript
on(type: 'systemVolumeChange', callback: Callback<VolumeEvent>): void
```

Listens for system volume change events. This method uses a callback to get volume change events.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'systemVolumeChange' | Yes | Type of the event to listen for.  Only the systemVolumeChange event is supported. |
| callback | Callback&lt;VolumeEvent> | Yes | Callback used to get the system volume change event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## on('streamVolumeChange')

```TypeScript
on(type: 'streamVolumeChange', streamUsage: StreamUsage, callback: Callback<StreamVolumeEvent>): void
```

Subscribes to the system audio volume change event, which is triggered when the system audio volume is changed. This API uses an asynchronous callback to return the result.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'streamVolumeChange' | Yes | Event type. The event 'streamVolumeChange' is triggered when the  system audio volume is changed. |
| streamUsage | StreamUsage | Yes | Audio stream usage. |
| callback | Callback&lt;StreamVolumeEvent> | Yes | Callback used to return the changed volume. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## onActiveVolumeTypeChange

```TypeScript
onActiveVolumeTypeChange(callback: Callback<AudioVolumeType>): void
```

Subscribes to active volume type changes.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AudioVolumeType> | Yes | Callback used to return the active volume type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## onAppVolumeChange

```TypeScript
onAppVolumeChange(callback: Callback<VolumeEvent>): void
```

Listens for app volume change events. The app volume may changed by your called {@link setAppVolumePercentage} or other system settings.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;VolumeEvent> | Yes | Callback used to get the app volume change event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## onAppVolumeChangeForUid

```TypeScript
onAppVolumeChangeForUid(uid: int, callback: Callback<VolumeEvent>): void
```

Listens for specified app volume change events. The app volume may changed by {@link setAppVolumePercentageForUid}.

**Since:** 23

**Required permissions:** 

 ohos.permission.MANAGE_AUDIO_CONFIG

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | int | Yes | The app's uid. |
| callback | Callback&lt;VolumeEvent> | Yes | Callback used to get the app volume change event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## onStreamVolumeChange

```TypeScript
onStreamVolumeChange(streamUsage: StreamUsage, callback: Callback<StreamVolumeEvent>): void
```

Listens for stream volume change events. This method uses a callback to get volume change events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streamUsage | StreamUsage | Yes | StreamUsage to be listened. |
| callback | Callback&lt;StreamVolumeEvent> | Yes | Callback used to get the stream volume change event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |

## onSystemVolumeChange

```TypeScript
onSystemVolumeChange(callback: Callback<VolumeEvent>): void
```

Listens for system volume change events. This method uses a callback to get volume change events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;VolumeEvent> | Yes | Callback used to get the system volume change event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## onSystemVolumeChangeByFilter

```TypeScript
onSystemVolumeChangeByFilter(filter: SystemVolumeFilter, callback: Callback<VolumeEvent>): void
```

Subscribes to system volume change events. When the system volume for the target filter changes, registered clients will receive a callback.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | SystemVolumeFilter | Yes | Filter for system volume changes. |
| callback | Callback&lt;VolumeEvent> | Yes | Callback to receive information about  the system volume. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not a system app. |
| 6800101 | Parameter verification failed. |

## onVolumePercentageChange

```TypeScript
onVolumePercentageChange(callback: Callback<VolumeEvent>): void
```

Subscribes to system volume percentage change events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;VolumeEvent> | Yes | Callback used to return the system volume percentage change event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |

## setAppVolumeMutedForUid

```TypeScript
setAppVolumeMutedForUid(uid: int, muted: boolean): Promise<void>
```

Change mute state of specified application volume. If there are multiple callers setting muted states, only when all callers cancel muted state the volume of this app will be truly unmuted.

**Since:** 19

**Required permissions:** 

 ohos.permission.MANAGE_AUDIO_CONFIG

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | int | Yes | App's uid. |
| muted | boolean | Yes | Muted state to set. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |
| 6800301 | Crash or blocking occurs in system process. |

## setAppVolumePercentage

```TypeScript
setAppVolumePercentage(volume: int): Promise<void>
```

Sets the volume (within a range of 0 to 100) for the application. This API uses a promise to return the result.

**Since:** 19

**Atomic service API:** From API version 23 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volume | int | Yes | Volume to set. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |
| 6800301 | Crash or blocking occurs in system process. |

## setAppVolumePercentageForUid

```TypeScript
setAppVolumePercentageForUid(uid: int, volume: int): Promise<void>
```

Sets the volume for specified app with range from 0 to 100. Applications with same uid share the same volume.

**Since:** 19

**Required permissions:** 

 ohos.permission.MANAGE_AUDIO_CONFIG

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | int | Yes | App's uid. |
| volume | int | Yes | Volume to set the application's volume percentage. The value range is from 0 to 100. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |
| 6800301 | Crash or blocking occurs in system process. |

**Example**

```TypeScript
let uid: number = 20010041; // Application ID.
let volume: number = 20;    // Volume to set.

audioVolumeManager.setAppVolumePercentageForUid(uid, volume).then(() => {
  console.info(`set app volume success.`);
});

```

## setSystemVolumeByUid

```TypeScript
setSystemVolumeByUid(volumeType: AudioVolumeType, volume: int, callingUid: int): Promise<void>
```

Sets the volume for specific uid application. This method uses a promise to return the result.

**Since:** 20

**Required permissions:** 

 ohos.permission.ACCESS_NOTIFICATION_POLICY

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |
| volume | int | Yes | Volume to set. The value range can be obtained by calling getMinVolume and getMaxVolume. |
| callingUid | int | Yes | Uid of the stream owner. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
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

**Since:** 23

**Required permissions:** 

 ohos.permission.MANAGE_AUDIO_CONFIG

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type to set. |
| percentage | int | Yes | Percentage to set. It must be an integer with the range  from minimum value getted by {@link #getMinSystemVolumePercentage} to 100. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system App. |
| 6800101 | Parameter verification failed, including  volumeType or percentage param begin out of range. |
| 6800301 | Crash or blocking occurs in system process. |

