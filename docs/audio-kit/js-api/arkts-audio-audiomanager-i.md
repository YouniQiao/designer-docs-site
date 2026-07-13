# AudioManager

This interface implements audio volume and device management.

Before calling any API in AudioManager, you must use
[getAudioManager](arkts-audio-getaudiomanager-f.md#getaudiomanager-1) to obtain an AudioManager instance.

**Since:** 7

**System capability:** SystemCapability.Multimedia.Audio.Core

## Modules to Import

```TypeScript
import { audio } from '@kit.AudioKit';
```

## getAudioParameter

```TypeScript
getAudioParameter(key: string, callback: AsyncCallback<string>): void
```

Obtains the value of an audio parameter. This method uses an asynchronous callback to return the query result.

**Since:** 7

**Deprecated since:** 11

**System capability:** SystemCapability.Multimedia.Audio.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key of the audio parameter whose value is to be obtained. |
| callback | AsyncCallback&lt;string&gt; | Yes | Callback used to return the value of the audio parameter. |

## getAudioParameter

```TypeScript
getAudioParameter(key: string): Promise<string>
```

Obtains the value of an audio parameter. This method uses a promise to return the query result.

**Since:** 7

**Deprecated since:** 11

**System capability:** SystemCapability.Multimedia.Audio.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key of the audio parameter whose value is to be obtained. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise used to return the value of the audio parameter. |

## getAudioScene

```TypeScript
getAudioScene(callback: AsyncCallback<AudioScene>): void
```

Obtains the audio scene. This API uses an asynchronous callback to return the result.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Communication

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AudioScene&gt; | Yes | Callback used to return the result. If the operation issuccessful, **err** is **undefined** and **data** is the audio scene obtained; otherwise, **err** is an errorobject. |

## getAudioScene

```TypeScript
getAudioScene(): Promise<AudioScene>
```

Obtains the audio scene. This API uses a promise to return the result.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Communication

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioScene&gt; | Promise used to return the audio scene. |

## getAudioSceneSync

```TypeScript
getAudioSceneSync(): AudioScene
```

Obtains the audio scene. This API returns the result synchronously.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Communication

**Return value:**

| Type | Description |
| --- | --- |
| AudioScene | Audio scene. |

## getDebuggingManager

```TypeScript
getDebuggingManager(): AudioDebuggingManager
```

Obtains an AudioDebuggingManager instance.
<p><strong>NOTE</strong>:
The {@link #AudioDebuggingManager} instance is a singleton.
</p>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Audio.Core

**Return value:**

| Type | Description |
| --- | --- |
| AudioDebuggingManager | this {@link #AudioDebuggingManager} object. |

## getDeviceEnhanceManager

```TypeScript
getDeviceEnhanceManager(): AudioDeviceEnhanceManager
```

Obtains a device enhancement manager instance.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Audio.DeviceEnhance

**Return value:**

| Type | Description |
| --- | --- |
| AudioDeviceEnhanceManager | Returns an instance of audio device enhancement manager. |

## getDevices

```TypeScript
getDevices(deviceFlag: DeviceFlag, callback: AsyncCallback<AudioDeviceDescriptors>): void
```

Obtains the audio devices with a specific flag. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getDevices

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceFlag | DeviceFlag | Yes | Audio device flag. |
| callback | AsyncCallback&lt;AudioDeviceDescriptors&gt; | Yes | Callback used to return the result. If the operationis successful, **err** is **undefined** and **data** is the audio devices obtained; otherwise, **err** is anerror object. |

## getDevices

```TypeScript
getDevices(deviceFlag: DeviceFlag): Promise<AudioDeviceDescriptors>
```

Obtains the audio devices with a specific flag. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getDevices

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceFlag | DeviceFlag | Yes | Audio device flag. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioDeviceDescriptors&gt; | Promise used to return the device list. |

## getMaxVolume

```TypeScript
getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>): void
```

Obtains the maximum volume allowed for a stream. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getMaxVolume

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is the maximum stream volume obtained; otherwise, **err** is an errorobject. |

## getMaxVolume

```TypeScript
getMaxVolume(volumeType: AudioVolumeType): Promise<number>
```

Obtains the maximum volume allowed for a stream. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getMaxVolume

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the maximum volume. |

## getMinVolume

```TypeScript
getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>): void
```

Obtains the minimum volume allowed for a stream. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getMinVolume

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is the minimum stream volume obtained; otherwise, **err** is an errorobject. |

## getMinVolume

```TypeScript
getMinVolume(volumeType: AudioVolumeType): Promise<number>
```

Obtains the minimum volume allowed for a stream. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getMinVolume

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the minimum volume. |

## getRecordingManager

```TypeScript
getRecordingManager(): AudioRecordingManager
```

Obtains a recording manager instance. Provides recording strategy management, including collaborative recording and recording control capabilities.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| AudioRecordingManager | Returns an instance of audio record manager. |

## getRingerMode

```TypeScript
getRingerMode(callback: AsyncCallback<AudioRingMode>): void
```

Obtains the ringer mode. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getRingerMode

**System capability:** SystemCapability.Multimedia.Audio.Communication

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AudioRingMode&gt; | Yes | Callback used to return the result. If the operation issuccessful, **err** is **undefined** and **data** is the ringer mode obtained; otherwise, **err** is an errorobject. |

## getRingerMode

```TypeScript
getRingerMode(): Promise<AudioRingMode>
```

Obtains the ringer mode. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getRingerMode

**System capability:** SystemCapability.Multimedia.Audio.Communication

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioRingMode&gt; | Promise used to return the ringer mode. |

## getRoutingManager

```TypeScript
getRoutingManager(): AudioRoutingManager
```

Obtains an AudioRoutingManager instance.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Device

**Return value:**

| Type | Description |
| --- | --- |
| AudioRoutingManager | AudioRoutingManager instance. |

## getSessionManager

```TypeScript
getSessionManager(): AudioSessionManager
```

Obtains an AudioSessionManager instance.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Multimedia.Audio.Core

**Return value:**

| Type | Description |
| --- | --- |
| AudioSessionManager | AudioSessionManager instance. |

## getSpatializationManager

```TypeScript
getSpatializationManager(): AudioSpatializationManager
```

Obtains an AudioSpatializationManager instance.

**Since:** 18

**System capability:** SystemCapability.Multimedia.Audio.Spatialization

**Return value:**

| Type | Description |
| --- | --- |
| AudioSpatializationManager | AudioSpatializationManager instance. |

## getStreamManager

```TypeScript
getStreamManager(): AudioStreamManager
```

Obtains an AudioStreamManager instance.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Audio.Core

**Return value:**

| Type | Description |
| --- | --- |
| AudioStreamManager | AudioStreamManager instance. |

## getVolume

```TypeScript
getVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>): void
```

Obtains the volume of a stream. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getVolume

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is the stream volume obtained; otherwise, **err** is an error object.The volume range of a specified stream can be obtained by calling[getMinVolume](arkts-audio-audiomanager-i.md#getminvolume-1)and[getMaxVolume](arkts-audio-audiomanager-i.md#getmaxvolume-1). |

## getVolume

```TypeScript
getVolume(volumeType: AudioVolumeType): Promise<number>
```

Obtains the volume of a stream. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getVolume

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the volume of the stream. The volume range of a specifiedstream can be obtained by calling[getMinVolume](arkts-audio-audiomanager-i.md#getminvolume-1)and[getMaxVolume](arkts-audio-audiomanager-i.md#getmaxvolume-1). |

## getVolumeManager

```TypeScript
getVolumeManager(): AudioVolumeManager
```

Obtains an AudioVolumeManager instance.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Return value:**

| Type | Description |
| --- | --- |
| AudioVolumeManager | AudioVolumeManager instance. |

## isActive

```TypeScript
isActive(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void
```

Checks whether a stream is active. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** isActive

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is **true** if the stream is active or **false** if not active;otherwise, **err** is an error object. |

## isActive

```TypeScript
isActive(volumeType: AudioVolumeType): Promise<boolean>
```

Checks whether a stream is active. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** isActive

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result, indicating whether the stream is active.**true** if active, **false** otherwise. |

## isDeviceActive

```TypeScript
isDeviceActive(deviceType: ActiveDeviceType, callback: AsyncCallback<boolean>): void
```

Checks whether a device is active. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** isCommunicationDeviceActive

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceType | ActiveDeviceType | Yes | Active audio device type. |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is **true** if the device is active or **false** if not active;otherwise, **err** is an error object. |

## isDeviceActive

```TypeScript
isDeviceActive(deviceType: ActiveDeviceType): Promise<boolean>
```

Checks whether a device is active. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** isCommunicationDeviceActive

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceType | ActiveDeviceType | Yes | Active audio device type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result, indicating whether the device is active.**true** if active, **false** otherwise. |

## isMicrophoneMute

```TypeScript
isMicrophoneMute(callback: AsyncCallback<boolean>): void
```

Checks whether the microphone is muted. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** isMicrophoneMute

**Required permissions:** ohos.permission.MICROPHONE

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is **true** if the microphone is muted or **false** if not muted;otherwise, **err** is an error object. |

## isMicrophoneMute

```TypeScript
isMicrophoneMute(): Promise<boolean>
```

Checks whether the microphone is muted. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** isMicrophoneMute

**Required permissions:** ohos.permission.MICROPHONE

**System capability:** SystemCapability.Multimedia.Audio.Device

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result, indicating whether the microphone is muted.**true** if muted, **false** otherwise. |

## isMute

```TypeScript
isMute(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void
```

Checks whether a stream is muted. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** isMute

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is **true** if the stream is muted or **false** if not muted; otherwise, **err** is an error object. |

## isMute

```TypeScript
isMute(volumeType: AudioVolumeType): Promise<boolean>
```

Checks whether a stream is muted. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** isMute

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result, indicating whether the stream is muted. **true**if muted, **false** otherwise. |

## mute

```TypeScript
mute(volumeType: AudioVolumeType, mute: boolean, callback: AsyncCallback<void>): void
```

Mutes a volume type. This method uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** AVVolumePanel

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |
| mute | boolean | Yes | Mute status to set. The value true means to mute the volume type, and false means the opposite. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

## mute

```TypeScript
mute(volumeType: AudioVolumeType, mute: boolean): Promise<void>
```

Mutes a volume type. This method uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** AVVolumePanel

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |
| mute | boolean | Yes | Mute status to set. The value true means to mute the volume type, and false means the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

## off('audioSceneChange')

```TypeScript
off(type: 'audioSceneChange', callback?: Callback<AudioScene>): void
```

Unsubscribes from the audio scene change event. This API uses an asynchronous callback to return the result.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Communication

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioSceneChange' | Yes | Event type. The event **'audioSceneChange'** is triggered when the audioscene is changed. |
| callback | Callback&lt;AudioScene&gt; | No | Callback used to return the current audio scene. |

## off('deviceChange')

```TypeScript
off(type: 'deviceChange', callback?: Callback<DeviceChangeAction>): void
```

Unsubscribes from the audio device change event. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:deviceChange

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceChange' | Yes | Event type. The event **'deviceChange'** is triggered when the connection statusof an audio device is changed. |
| callback | Callback&lt;DeviceChangeAction&gt; | No | Callback used to return the device change details. |

## off('interrupt')

```TypeScript
off(type: 'interrupt', interrupt: AudioInterrupt, callback?: Callback<InterruptAction>): void
```

Unsubscribes from the audio interruption event. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 11

**Substitutes:** event:audioInterrupt

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'interrupt' | Yes | Event type. The event **'interrupt'** is triggered when the audio focus is changed. |
| interrupt | AudioInterrupt | Yes | Audio interruption event type. |
| callback | Callback&lt;InterruptAction&gt; | No | Callback used to return the event information. |

## on('audioSceneChange')

```TypeScript
on(type: 'audioSceneChange', callback: Callback<AudioScene>): void
```

Subscribes to the audio scene change event. This API uses an asynchronous callback to return the result.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Communication

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioSceneChange' | Yes | Event type. The event **'audioSceneChange'** is triggered when the audioscene is changed. |
| callback | Callback&lt;AudioScene&gt; | Yes | Callback used to return the current audio scene. |

## on('deviceChange')

```TypeScript
on(type: 'deviceChange', callback: Callback<DeviceChangeAction>): void
```

Subscribes to the event indicating that the connection status of an audio device is changed. This API uses an
asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:deviceChange

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceChange' | Yes | Event type. The event **'deviceChange'** is triggered when the connection statusof an audio device is changed. |
| callback | Callback&lt;DeviceChangeAction&gt; | Yes | Callback used to return the device change details. |

## on('interrupt')

```TypeScript
on(type: 'interrupt', interrupt: AudioInterrupt, callback: Callback<InterruptAction>): void
```

Subscribes to the audio interruption event, which is triggered when the audio focus is changed. This API uses an
asynchronous callback to return the result.

Same as
[on('audioInterrupt')](arkts-audio-audiorenderer-i.md#on-1)
, this API is used to listen for focus changes. However, this API is used in scenarios without audio streams (no
AudioRenderer instance is created), such as frequency modulation (FM) and voice wakeup.

**Since:** 7

**Deprecated since:** 11

**Substitutes:** event:audioInterrupt

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'interrupt' | Yes | Event type. The event **'interrupt'** is triggered when the audio focus is changed. |
| interrupt | AudioInterrupt | Yes | Audio interruption event type. |
| callback | Callback&lt;InterruptAction&gt; | Yes | Callback used to return the event information. |

## setAudioParameter

```TypeScript
setAudioParameter(key: string, value: string, callback: AsyncCallback<void>): void
```

Sets an audio parameter. This method uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 11

**Required permissions:** ohos.permission.MODIFY_AUDIO_SETTINGS

**System capability:** SystemCapability.Multimedia.Audio.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key of the audio parameter to set. |
| value | string | Yes | Value of the audio parameter to set. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

## setAudioParameter

```TypeScript
setAudioParameter(key: string, value: string): Promise<void>
```

Sets an audio parameter. This method uses a promise to return the result.

**Since:** 7

**Deprecated since:** 11

**Required permissions:** ohos.permission.MODIFY_AUDIO_SETTINGS

**System capability:** SystemCapability.Multimedia.Audio.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key of the audio parameter to set. |
| value | string | Yes | Value of the audio parameter to set. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

## setDeviceActive

```TypeScript
setDeviceActive(deviceType: ActiveDeviceType, active: boolean, callback: AsyncCallback<void>): void
```

Sets a device to the active state. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** setCommunicationDevice

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceType | ActiveDeviceType | Yes | Active audio device type. |
| active | boolean | Yes | Active state to set. **true** to set the device to the active state, **false**otherwise. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

## setDeviceActive

```TypeScript
setDeviceActive(deviceType: ActiveDeviceType, active: boolean): Promise<void>
```

Sets a device to the active state. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** setCommunicationDevice

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceType | ActiveDeviceType | Yes | Active audio device type. |
| active | boolean | Yes | Active state to set. **true** to set the device to the active state, **false**otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

## setMicrophoneMute

```TypeScript
setMicrophoneMute(mute: boolean, callback: AsyncCallback<void>): void
```

Mutes or unmutes the microphone. This method uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Required permissions:** ohos.permission.MICROPHONE

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mute | boolean | Yes | Mute status to set. The value true means to mute the microphone, and false means the opposite. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

## setMicrophoneMute

```TypeScript
setMicrophoneMute(mute: boolean): Promise<void>
```

Mutes or unmutes the microphone. This method uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Required permissions:** ohos.permission.MICROPHONE

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mute | boolean | Yes | Mute status to set. The value true means to mute the microphone, and false means the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

## setRingerMode

```TypeScript
setRingerMode(mode: AudioRingMode, callback: AsyncCallback<void>): void
```

Sets the ringer mode. This method uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Required permissions:** ohos.permission.ACCESS_NOTIFICATION_POLICY

**System capability:** SystemCapability.Multimedia.Audio.Communication

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | AudioRingMode | Yes | Ringer mode. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

## setRingerMode

```TypeScript
setRingerMode(mode: AudioRingMode): Promise<void>
```

Sets the ringer mode. This method uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Required permissions:** ohos.permission.ACCESS_NOTIFICATION_POLICY

**System capability:** SystemCapability.Multimedia.Audio.Communication

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | AudioRingMode | Yes | Ringer mode. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

## setVolume

```TypeScript
setVolume(volumeType: AudioVolumeType, volume: number, callback: AsyncCallback<void>): void
```

Sets the volume for a volume type. This method uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** AVVolumePanel

**Required permissions:** ohos.permission.ACCESS_NOTIFICATION_POLICY

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |
| volume | number | Yes | Volume to set. The value range can be obtained by calling getMinVolume and getMaxVolume. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

## setVolume

```TypeScript
setVolume(volumeType: AudioVolumeType, volume: number): Promise<void>
```

Sets the volume for a volume type. This method uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** AVVolumePanel

**Required permissions:** ohos.permission.ACCESS_NOTIFICATION_POLICY

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | AudioVolumeType | Yes | Audio volume type. |
| volume | number | Yes | Volume to set. The value range can be obtained by calling getMinVolume and getMaxVolume. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

