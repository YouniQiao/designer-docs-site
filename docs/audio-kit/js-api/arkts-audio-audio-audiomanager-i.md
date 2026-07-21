# AudioManager

This interface implements audio volume and device management.

Before calling any API in AudioManager, you must use [getAudioManager](arkts-audio-audio-getaudiomanager-f.md#getaudiomanager-1) to obtain an AudioManager instance.

**Since:** 7

<!--Device-audio-interface AudioManager--><!--Device-audio-interface AudioManager-End-->

**System capability:** SystemCapability.Multimedia.Audio.Core

## Modules to Import

```TypeScript
import { audio } from '@kit.AudioKit';
```

<a id="getaudioparameter"></a>
## getAudioParameter

```TypeScript
getAudioParameter(key: string, callback: AsyncCallback<string>): void
```

Obtains the value of an audio parameter. This method uses an asynchronous callback to return the query result.

**Since:** 7

**Deprecated since:** 11

<!--Device-AudioManager-getAudioParameter(key: string, callback: AsyncCallback<string>): void--><!--Device-AudioManager-getAudioParameter(key: string, callback: AsyncCallback<string>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key of the audio parameter whose value is to be obtained. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;string&gt; | Yes | Callback used to return the value of the audio parameter. |

<a id="getaudioparameter-1"></a>
## getAudioParameter

```TypeScript
getAudioParameter(key: string): Promise<string>
```

Obtains the value of an audio parameter. This method uses a promise to return the query result.

**Since:** 7

**Deprecated since:** 11

<!--Device-AudioManager-getAudioParameter(key: string): Promise<string>--><!--Device-AudioManager-getAudioParameter(key: string): Promise<string>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key of the audio parameter whose value is to be obtained. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise used to return the value of the audio parameter. |

<a id="getaudioscene"></a>
## getAudioScene

```TypeScript
getAudioScene(callback: AsyncCallback<AudioScene>): void
```

Obtains the audio scene. This API uses an asynchronous callback to return the result.

**Since:** 8

<!--Device-AudioManager-getAudioScene(callback: AsyncCallback<AudioScene>): void--><!--Device-AudioManager-getAudioScene(callback: AsyncCallback<AudioScene>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Communication

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;AudioScene&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is **undefined** and **data** is the audio scene obtained; otherwise, **err** is an error object. |

<a id="getaudioscene-1"></a>
## getAudioScene

```TypeScript
getAudioScene(): Promise<AudioScene>
```

Obtains the audio scene. This API uses a promise to return the result.

**Since:** 8

<!--Device-AudioManager-getAudioScene(): Promise<AudioScene>--><!--Device-AudioManager-getAudioScene(): Promise<AudioScene>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Communication

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioScene&gt; | Promise used to return the audio scene. |

<a id="getaudioscenesync"></a>
## getAudioSceneSync

```TypeScript
getAudioSceneSync(): AudioScene
```

Obtains the audio scene. This API returns the result synchronously.

**Since:** 10

<!--Device-AudioManager-getAudioSceneSync(): AudioScene--><!--Device-AudioManager-getAudioSceneSync(): AudioScene-End-->

**System capability:** SystemCapability.Multimedia.Audio.Communication

**Return value:**

| Type | Description |
| --- | --- |
| [AudioScene](arkts-audio-audio-audioscene-e.md) | Audio scene. |

<a id="getdebuggingmanager"></a>
## getDebuggingManager

```TypeScript
getDebuggingManager(): AudioDebuggingManager
```

Obtains an AudioDebuggingManager instance.<p><strong>NOTE</strong>:The {@link #AudioDebuggingManager} instance is a singleton.</p>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AudioManager-getDebuggingManager(): AudioDebuggingManager--><!--Device-AudioManager-getDebuggingManager(): AudioDebuggingManager-End-->

**System capability:** SystemCapability.Multimedia.Audio.Core

**Return value:**

| Type | Description |
| --- | --- |
| [AudioDebuggingManager](arkts-audio-audio-audiodebuggingmanager-i.md) | this {@link #AudioDebuggingManager} object. |

<a id="getdeviceenhancemanager"></a>
## getDeviceEnhanceManager

```TypeScript
getDeviceEnhanceManager(): AudioDeviceEnhanceManager
```

Obtains a device enhancement manager instance.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AudioManager-getDeviceEnhanceManager(): AudioDeviceEnhanceManager--><!--Device-AudioManager-getDeviceEnhanceManager(): AudioDeviceEnhanceManager-End-->

**System capability:** SystemCapability.Multimedia.Audio.DeviceEnhance

**Return value:**

| Type | Description |
| --- | --- |
| [AudioDeviceEnhanceManager](arkts-audio-audio-audiodeviceenhancemanager-i.md) | Returns an instance of audio device enhancement manager. |

<a id="getdevices"></a>
## getDevices

```TypeScript
getDevices(deviceFlag: DeviceFlag, callback: AsyncCallback<AudioDeviceDescriptors>): void
```

Obtains the audio devices with a specific flag. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getDevices

<!--Device-AudioManager-getDevices(deviceFlag: DeviceFlag, callback: AsyncCallback<AudioDeviceDescriptors>): void--><!--Device-AudioManager-getDevices(deviceFlag: DeviceFlag, callback: AsyncCallback<AudioDeviceDescriptors>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceFlag | [DeviceFlag](arkts-audio-audio-deviceflag-e.md) | Yes | Audio device flag. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;AudioDeviceDescriptors&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is **undefined** and **data** is the audio devices obtained; otherwise, **err** is an error object. |

<a id="getdevices-1"></a>
## getDevices

```TypeScript
getDevices(deviceFlag: DeviceFlag): Promise<AudioDeviceDescriptors>
```

Obtains the audio devices with a specific flag. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getDevices

<!--Device-AudioManager-getDevices(deviceFlag: DeviceFlag): Promise<AudioDeviceDescriptors>--><!--Device-AudioManager-getDevices(deviceFlag: DeviceFlag): Promise<AudioDeviceDescriptors>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceFlag | [DeviceFlag](arkts-audio-audio-deviceflag-e.md) | Yes | Audio device flag. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioDeviceDescriptors&gt; | Promise used to return the device list. |

<a id="getmaxvolume"></a>
## getMaxVolume

```TypeScript
getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>): void
```

Obtains the maximum volume allowed for a stream. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getMaxVolume

<!--Device-AudioManager-getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>): void--><!--Device-AudioManager-getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | [AudioVolumeType](arkts-audio-audio-audiovolumetype-e.md) | Yes | Audio volume type. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is the maximum stream volume obtained; otherwise, **err** is an error object. |

<a id="getmaxvolume-1"></a>
## getMaxVolume

```TypeScript
getMaxVolume(volumeType: AudioVolumeType): Promise<number>
```

Obtains the maximum volume allowed for a stream. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getMaxVolume

<!--Device-AudioManager-getMaxVolume(volumeType: AudioVolumeType): Promise<number>--><!--Device-AudioManager-getMaxVolume(volumeType: AudioVolumeType): Promise<number>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | [AudioVolumeType](arkts-audio-audio-audiovolumetype-e.md) | Yes | Audio volume type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the maximum volume. |

<a id="getminvolume"></a>
## getMinVolume

```TypeScript
getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>): void
```

Obtains the minimum volume allowed for a stream. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getMinVolume

<!--Device-AudioManager-getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>): void--><!--Device-AudioManager-getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | [AudioVolumeType](arkts-audio-audio-audiovolumetype-e.md) | Yes | Audio volume type. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is the minimum stream volume obtained; otherwise, **err** is an error object. |

<a id="getminvolume-1"></a>
## getMinVolume

```TypeScript
getMinVolume(volumeType: AudioVolumeType): Promise<number>
```

Obtains the minimum volume allowed for a stream. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getMinVolume

<!--Device-AudioManager-getMinVolume(volumeType: AudioVolumeType): Promise<number>--><!--Device-AudioManager-getMinVolume(volumeType: AudioVolumeType): Promise<number>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | [AudioVolumeType](arkts-audio-audio-audiovolumetype-e.md) | Yes | Audio volume type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the minimum volume. |

<a id="getrecordingmanager"></a>
## getRecordingManager

```TypeScript
getRecordingManager(): AudioRecordingManager
```

Obtains a recording manager instance. Provides recording strategy management, including collaborative recording and recording control capabilities.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AudioManager-getRecordingManager(): AudioRecordingManager--><!--Device-AudioManager-getRecordingManager(): AudioRecordingManager-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Return value:**

| Type | Description |
| --- | --- |
| [AudioRecordingManager](arkts-audio-audio-audiorecordingmanager-i.md) | Returns an instance of audio record manager. |

<a id="getringermode"></a>
## getRingerMode

```TypeScript
getRingerMode(callback: AsyncCallback<AudioRingMode>): void
```

Obtains the ringer mode. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getRingerMode

<!--Device-AudioManager-getRingerMode(callback: AsyncCallback<AudioRingMode>): void--><!--Device-AudioManager-getRingerMode(callback: AsyncCallback<AudioRingMode>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Communication

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;AudioRingMode&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is **undefined** and **data** is the ringer mode obtained; otherwise, **err** is an error object. |

<a id="getringermode-1"></a>
## getRingerMode

```TypeScript
getRingerMode(): Promise<AudioRingMode>
```

Obtains the ringer mode. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getRingerMode

<!--Device-AudioManager-getRingerMode(): Promise<AudioRingMode>--><!--Device-AudioManager-getRingerMode(): Promise<AudioRingMode>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Communication

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioRingMode&gt; | Promise used to return the ringer mode. |

<a id="getroutingmanager"></a>
## getRoutingManager

```TypeScript
getRoutingManager(): AudioRoutingManager
```

Obtains an AudioRoutingManager instance.

**Since:** 9

<!--Device-AudioManager-getRoutingManager(): AudioRoutingManager--><!--Device-AudioManager-getRoutingManager(): AudioRoutingManager-End-->

**System capability:** SystemCapability.Multimedia.Audio.Device

**Return value:**

| Type | Description |
| --- | --- |
| [AudioRoutingManager](arkts-audio-audio-audioroutingmanager-i.md) | AudioRoutingManager instance. |

<a id="getsessionmanager"></a>
## getSessionManager

```TypeScript
getSessionManager(): AudioSessionManager
```

Obtains an AudioSessionManager instance.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-AudioManager-getSessionManager(): AudioSessionManager--><!--Device-AudioManager-getSessionManager(): AudioSessionManager-End-->

**System capability:** SystemCapability.Multimedia.Audio.Core

**Return value:**

| Type | Description |
| --- | --- |
| [AudioSessionManager](arkts-audio-audio-audiosessionmanager-i.md) | AudioSessionManager instance. |

<a id="getspatializationmanager"></a>
## getSpatializationManager

```TypeScript
getSpatializationManager(): AudioSpatializationManager
```

Obtains an AudioSpatializationManager instance.

**Since:** 18

<!--Device-AudioManager-getSpatializationManager(): AudioSpatializationManager--><!--Device-AudioManager-getSpatializationManager(): AudioSpatializationManager-End-->

**System capability:** SystemCapability.Multimedia.Audio.Spatialization

**Return value:**

| Type | Description |
| --- | --- |
| [AudioSpatializationManager](arkts-audio-audio-audiospatializationmanager-i.md) | AudioSpatializationManager instance. |

<a id="getstreammanager"></a>
## getStreamManager

```TypeScript
getStreamManager(): AudioStreamManager
```

Obtains an AudioStreamManager instance.

**Since:** 9

<!--Device-AudioManager-getStreamManager(): AudioStreamManager--><!--Device-AudioManager-getStreamManager(): AudioStreamManager-End-->

**System capability:** SystemCapability.Multimedia.Audio.Core

**Return value:**

| Type | Description |
| --- | --- |
| [AudioStreamManager](arkts-audio-audio-audiostreammanager-i.md) | AudioStreamManager instance. |

<a id="getvolume"></a>
## getVolume

```TypeScript
getVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>): void
```

Obtains the volume of a stream. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getVolume

<!--Device-AudioManager-getVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>): void--><!--Device-AudioManager-getVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | [AudioVolumeType](arkts-audio-audio-audiovolumetype-e.md) | Yes | Audio volume type. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is the stream volume obtained; otherwise, **err** is an error object.The volume range of a specified stream can be obtained by calling [getMinVolume](arkts-audio-audio-audiomanager-i.md#getminvolume-1)and [getMaxVolume](arkts-audio-audio-audiomanager-i.md#getmaxvolume-1). |

<a id="getvolume-1"></a>
## getVolume

```TypeScript
getVolume(volumeType: AudioVolumeType): Promise<number>
```

Obtains the volume of a stream. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getVolume

<!--Device-AudioManager-getVolume(volumeType: AudioVolumeType): Promise<number>--><!--Device-AudioManager-getVolume(volumeType: AudioVolumeType): Promise<number>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | [AudioVolumeType](arkts-audio-audio-audiovolumetype-e.md) | Yes | Audio volume type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the volume of the stream. The volume range of a specified stream can be obtained by calling [getMinVolume](arkts-audio-audio-audiomanager-i.md#getminvolume-1)and [getMaxVolume](arkts-audio-audio-audiomanager-i.md#getmaxvolume-1). |

<a id="getvolumemanager"></a>
## getVolumeManager

```TypeScript
getVolumeManager(): AudioVolumeManager
```

Obtains an AudioVolumeManager instance.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-AudioManager-getVolumeManager(): AudioVolumeManager--><!--Device-AudioManager-getVolumeManager(): AudioVolumeManager-End-->

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Return value:**

| Type | Description |
| --- | --- |
| [AudioVolumeManager](arkts-audio-audio-audiovolumemanager-i.md) | AudioVolumeManager instance. |

<a id="isactive"></a>
## isActive

```TypeScript
isActive(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void
```

Checks whether a stream is active. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** isActive

<!--Device-AudioManager-isActive(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void--><!--Device-AudioManager-isActive(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | [AudioVolumeType](arkts-audio-audio-audiovolumetype-e.md) | Yes | Audio volume type. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;boolean&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is **true** if the stream is active or **false** if not active;otherwise, **err** is an error object. |

<a id="isactive-1"></a>
## isActive

```TypeScript
isActive(volumeType: AudioVolumeType): Promise<boolean>
```

Checks whether a stream is active. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** isActive

<!--Device-AudioManager-isActive(volumeType: AudioVolumeType): Promise<boolean>--><!--Device-AudioManager-isActive(volumeType: AudioVolumeType): Promise<boolean>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | [AudioVolumeType](arkts-audio-audio-audiovolumetype-e.md) | Yes | Audio volume type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result, indicating whether the stream is active.**true** if active, **false** otherwise. |

<a id="isdeviceactive"></a>
## isDeviceActive

```TypeScript
isDeviceActive(deviceType: ActiveDeviceType, callback: AsyncCallback<boolean>): void
```

Checks whether a device is active. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** isCommunicationDeviceActive

<!--Device-AudioManager-isDeviceActive(deviceType: ActiveDeviceType, callback: AsyncCallback<boolean>): void--><!--Device-AudioManager-isDeviceActive(deviceType: ActiveDeviceType, callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceType | [ActiveDeviceType](arkts-audio-audio-activedevicetype-e.md) | Yes | Active audio device type. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;boolean&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is **true** if the device is active or **false** if not active;otherwise, **err** is an error object. |

<a id="isdeviceactive-1"></a>
## isDeviceActive

```TypeScript
isDeviceActive(deviceType: ActiveDeviceType): Promise<boolean>
```

Checks whether a device is active. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** isCommunicationDeviceActive

<!--Device-AudioManager-isDeviceActive(deviceType: ActiveDeviceType): Promise<boolean>--><!--Device-AudioManager-isDeviceActive(deviceType: ActiveDeviceType): Promise<boolean>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceType | [ActiveDeviceType](arkts-audio-audio-activedevicetype-e.md) | Yes | Active audio device type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result, indicating whether the device is active.**true** if active, **false** otherwise. |

<a id="ismicrophonemute"></a>
## isMicrophoneMute

```TypeScript
isMicrophoneMute(callback: AsyncCallback<boolean>): void
```

Checks whether the microphone is muted. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** isMicrophoneMute

**Required permissions:** ohos.permission.MICROPHONE

<!--Device-AudioManager-isMicrophoneMute(callback: AsyncCallback<boolean>): void--><!--Device-AudioManager-isMicrophoneMute(callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;boolean&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is **true** if the microphone is muted or **false** if not muted;otherwise, **err** is an error object. |

<a id="ismicrophonemute-1"></a>
## isMicrophoneMute

```TypeScript
isMicrophoneMute(): Promise<boolean>
```

Checks whether the microphone is muted. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** isMicrophoneMute

**Required permissions:** ohos.permission.MICROPHONE

<!--Device-AudioManager-isMicrophoneMute(): Promise<boolean>--><!--Device-AudioManager-isMicrophoneMute(): Promise<boolean>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Device

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result, indicating whether the microphone is muted.**true** if muted, **false** otherwise. |

<a id="ismute"></a>
## isMute

```TypeScript
isMute(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void
```

Checks whether a stream is muted. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** isMute

<!--Device-AudioManager-isMute(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void--><!--Device-AudioManager-isMute(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | [AudioVolumeType](arkts-audio-audio-audiovolumetype-e.md) | Yes | Audio volume type. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;boolean&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is **true** if the stream is muted or **false** if not muted; otherwise, **err** is an error object. |

<a id="ismute-1"></a>
## isMute

```TypeScript
isMute(volumeType: AudioVolumeType): Promise<boolean>
```

Checks whether a stream is muted. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** isMute

<!--Device-AudioManager-isMute(volumeType: AudioVolumeType): Promise<boolean>--><!--Device-AudioManager-isMute(volumeType: AudioVolumeType): Promise<boolean>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | [AudioVolumeType](arkts-audio-audio-audiovolumetype-e.md) | Yes | Audio volume type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result, indicating whether the stream is muted. **true** if muted, **false** otherwise. |

<a id="mute"></a>
## mute

```TypeScript
mute(volumeType: AudioVolumeType, mute: boolean, callback: AsyncCallback<void>): void
```

Mutes a volume type. This method uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** AVVolumePanel

<!--Device-AudioManager-mute(volumeType: AudioVolumeType, mute: boolean, callback: AsyncCallback<void>): void--><!--Device-AudioManager-mute(volumeType: AudioVolumeType, mute: boolean, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | [AudioVolumeType](arkts-audio-audio-audiovolumetype-e.md) | Yes | Audio volume type. |
| mute | boolean | Yes | Mute status to set. The value true means to mute the volume type, and false means the opposite. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. |

<a id="mute-1"></a>
## mute

```TypeScript
mute(volumeType: AudioVolumeType, mute: boolean): Promise<void>
```

Mutes a volume type. This method uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** AVVolumePanel

<!--Device-AudioManager-mute(volumeType: AudioVolumeType, mute: boolean): Promise<void>--><!--Device-AudioManager-mute(volumeType: AudioVolumeType, mute: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | [AudioVolumeType](arkts-audio-audio-audiovolumetype-e.md) | Yes | Audio volume type. |
| mute | boolean | Yes | Mute status to set. The value true means to mute the volume type, and false means the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

<a id="off"></a>
## off('audioSceneChange')

```TypeScript
off(type: 'audioSceneChange', callback?: Callback<AudioScene>): void
```

Unsubscribes from the audio scene change event. This API uses an asynchronous callback to return the result.

**Since:** 20

<!--Device-AudioManager-off(type: 'audioSceneChange', callback?: Callback<AudioScene>): void--><!--Device-AudioManager-off(type: 'audioSceneChange', callback?: Callback<AudioScene>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Communication

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioSceneChange' | Yes | Event type. The event **'audioSceneChange'** is triggered when the audio scene is changed. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;AudioScene&gt; | No | Callback used to return the current audio scene. |

<a id="off-1"></a>
## off('deviceChange')

```TypeScript
off(type: 'deviceChange', callback?: Callback<DeviceChangeAction>): void
```

Unsubscribes from the audio device change event. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:deviceChange

<!--Device-AudioManager-off(type: 'deviceChange', callback?: Callback<DeviceChangeAction>): void--><!--Device-AudioManager-off(type: 'deviceChange', callback?: Callback<DeviceChangeAction>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceChange' | Yes | Event type. The event **'deviceChange'** is triggered when the connection status of an audio device is changed. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;DeviceChangeAction&gt; | No | Callback used to return the device change details. |

<a id="off-2"></a>
## off('interrupt')

```TypeScript
off(type: 'interrupt', interrupt: AudioInterrupt, callback?: Callback<InterruptAction>): void
```

Unsubscribes from the audio interruption event. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 11

**Substitutes:** event:audioInterrupt

<!--Device-AudioManager-off(type: 'interrupt', interrupt: AudioInterrupt, callback?: Callback<InterruptAction>): void--><!--Device-AudioManager-off(type: 'interrupt', interrupt: AudioInterrupt, callback?: Callback<InterruptAction>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'interrupt' | Yes | Event type. The event **'interrupt'** is triggered when the audio focus is changed. |
| interrupt | [AudioInterrupt](arkts-audio-audio-audiointerrupt-i.md) | Yes | Audio interruption event type. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;InterruptAction&gt; | No | Callback used to return the event information. |

<a id="on"></a>
## on('audioSceneChange')

```TypeScript
on(type: 'audioSceneChange', callback: Callback<AudioScene>): void
```

Subscribes to the audio scene change event. This API uses an asynchronous callback to return the result.

**Since:** 20

<!--Device-AudioManager-on(type: 'audioSceneChange', callback: Callback<AudioScene>): void--><!--Device-AudioManager-on(type: 'audioSceneChange', callback: Callback<AudioScene>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Communication

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioSceneChange' | Yes | Event type. The event **'audioSceneChange'** is triggered when the audio scene is changed. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;AudioScene&gt; | Yes | Callback used to return the current audio scene. |

<a id="on-1"></a>
## on('deviceChange')

```TypeScript
on(type: 'deviceChange', callback: Callback<DeviceChangeAction>): void
```

Subscribes to the event indicating that the connection status of an audio device is changed. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** event:deviceChange

<!--Device-AudioManager-on(type: 'deviceChange', callback: Callback<DeviceChangeAction>): void--><!--Device-AudioManager-on(type: 'deviceChange', callback: Callback<DeviceChangeAction>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceChange' | Yes | Event type. The event **'deviceChange'** is triggered when the connection status of an audio device is changed. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;DeviceChangeAction&gt; | Yes | Callback used to return the device change details. |

<a id="on-2"></a>
## on('interrupt')

```TypeScript
on(type: 'interrupt', interrupt: AudioInterrupt, callback: Callback<InterruptAction>): void
```

Subscribes to the audio interruption event, which is triggered when the audio focus is changed. This API uses an asynchronous callback to return the result.

Same as [on('audioInterrupt')](@ohos.multimedia.audio:audio.AudioRenderer.on(type: 'audioInterrupt', callback: Callback<InterruptEvent>)), this API is used to listen for focus changes. However, this API is used in scenarios without audio streams (no AudioRenderer instance is created), such as frequency modulation (FM) and voice wakeup.

**Since:** 7

**Deprecated since:** 11

**Substitutes:** event:audioInterrupt

<!--Device-AudioManager-on(type: 'interrupt', interrupt: AudioInterrupt, callback: Callback<InterruptAction>): void--><!--Device-AudioManager-on(type: 'interrupt', interrupt: AudioInterrupt, callback: Callback<InterruptAction>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'interrupt' | Yes | Event type. The event **'interrupt'** is triggered when the audio focus is changed. |
| interrupt | [AudioInterrupt](arkts-audio-audio-audiointerrupt-i.md) | Yes | Audio interruption event type. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;InterruptAction&gt; | Yes | Callback used to return the event information. |

<a id="setaudioparameter"></a>
## setAudioParameter

```TypeScript
setAudioParameter(key: string, value: string, callback: AsyncCallback<void>): void
```

Sets an audio parameter. This method uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 11

**Required permissions:** ohos.permission.MODIFY_AUDIO_SETTINGS

<!--Device-AudioManager-setAudioParameter(key: string, value: string, callback: AsyncCallback<void>): void--><!--Device-AudioManager-setAudioParameter(key: string, value: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key of the audio parameter to set. |
| value | string | Yes | Value of the audio parameter to set. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. |

<a id="setaudioparameter-1"></a>
## setAudioParameter

```TypeScript
setAudioParameter(key: string, value: string): Promise<void>
```

Sets an audio parameter. This method uses a promise to return the result.

**Since:** 7

**Deprecated since:** 11

**Required permissions:** ohos.permission.MODIFY_AUDIO_SETTINGS

<!--Device-AudioManager-setAudioParameter(key: string, value: string): Promise<void>--><!--Device-AudioManager-setAudioParameter(key: string, value: string): Promise<void>-End-->

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

<a id="setdeviceactive"></a>
## setDeviceActive

```TypeScript
setDeviceActive(deviceType: ActiveDeviceType, active: boolean, callback: AsyncCallback<void>): void
```

Sets a device to the active state. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** setCommunicationDevice

<!--Device-AudioManager-setDeviceActive(deviceType: ActiveDeviceType, active: boolean, callback: AsyncCallback<void>): void--><!--Device-AudioManager-setDeviceActive(deviceType: ActiveDeviceType, active: boolean, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceType | [ActiveDeviceType](arkts-audio-audio-activedevicetype-e.md) | Yes | Active audio device type. |
| active | boolean | Yes | Active state to set. **true** to set the device to the active state, **false** otherwise. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

<a id="setdeviceactive-1"></a>
## setDeviceActive

```TypeScript
setDeviceActive(deviceType: ActiveDeviceType, active: boolean): Promise<void>
```

Sets a device to the active state. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** setCommunicationDevice

<!--Device-AudioManager-setDeviceActive(deviceType: ActiveDeviceType, active: boolean): Promise<void>--><!--Device-AudioManager-setDeviceActive(deviceType: ActiveDeviceType, active: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceType | [ActiveDeviceType](arkts-audio-audio-activedevicetype-e.md) | Yes | Active audio device type. |
| active | boolean | Yes | Active state to set. **true** to set the device to the active state, **false** otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

<a id="setmicrophonemute"></a>
## setMicrophoneMute

```TypeScript
setMicrophoneMute(mute: boolean, callback: AsyncCallback<void>): void
```

Mutes or unmutes the microphone. This method uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Required permissions:** ohos.permission.MICROPHONE

<!--Device-AudioManager-setMicrophoneMute(mute: boolean, callback: AsyncCallback<void>): void--><!--Device-AudioManager-setMicrophoneMute(mute: boolean, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mute | boolean | Yes | Mute status to set. The value true means to mute the microphone, and false means the opposite. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. |

<a id="setmicrophonemute-1"></a>
## setMicrophoneMute

```TypeScript
setMicrophoneMute(mute: boolean): Promise<void>
```

Mutes or unmutes the microphone. This method uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Required permissions:** ohos.permission.MICROPHONE

<!--Device-AudioManager-setMicrophoneMute(mute: boolean): Promise<void>--><!--Device-AudioManager-setMicrophoneMute(mute: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Device

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mute | boolean | Yes | Mute status to set. The value true means to mute the microphone, and false means the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

<a id="setringermode"></a>
## setRingerMode

```TypeScript
setRingerMode(mode: AudioRingMode, callback: AsyncCallback<void>): void
```

Sets the ringer mode. This method uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Required permissions:** ohos.permission.ACCESS_NOTIFICATION_POLICY

<!--Device-AudioManager-setRingerMode(mode: AudioRingMode, callback: AsyncCallback<void>): void--><!--Device-AudioManager-setRingerMode(mode: AudioRingMode, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Communication

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | [AudioRingMode](arkts-audio-audio-audioringmode-e.md) | Yes | Ringer mode. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. |

<a id="setringermode-1"></a>
## setRingerMode

```TypeScript
setRingerMode(mode: AudioRingMode): Promise<void>
```

Sets the ringer mode. This method uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Required permissions:** ohos.permission.ACCESS_NOTIFICATION_POLICY

<!--Device-AudioManager-setRingerMode(mode: AudioRingMode): Promise<void>--><!--Device-AudioManager-setRingerMode(mode: AudioRingMode): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Communication

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | [AudioRingMode](arkts-audio-audio-audioringmode-e.md) | Yes | Ringer mode. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

<a id="setvolume"></a>
## setVolume

```TypeScript
setVolume(volumeType: AudioVolumeType, volume: number, callback: AsyncCallback<void>): void
```

Sets the volume for a volume type. This method uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** AVVolumePanel

**Required permissions:** ohos.permission.ACCESS_NOTIFICATION_POLICY

<!--Device-AudioManager-setVolume(volumeType: AudioVolumeType, volume: number, callback: AsyncCallback<void>): void--><!--Device-AudioManager-setVolume(volumeType: AudioVolumeType, volume: number, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | [AudioVolumeType](arkts-audio-audio-audiovolumetype-e.md) | Yes | Audio volume type. |
| volume | number | Yes | Volume to set. The value range can be obtained by calling getMinVolume and getMaxVolume. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. |

<a id="setvolume-1"></a>
## setVolume

```TypeScript
setVolume(volumeType: AudioVolumeType, volume: number): Promise<void>
```

Sets the volume for a volume type. This method uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** AVVolumePanel

**Required permissions:** ohos.permission.ACCESS_NOTIFICATION_POLICY

<!--Device-AudioManager-setVolume(volumeType: AudioVolumeType, volume: number): Promise<void>--><!--Device-AudioManager-setVolume(volumeType: AudioVolumeType, volume: number): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Volume

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeType | [AudioVolumeType](arkts-audio-audio-audiovolumetype-e.md) | Yes | Audio volume type. |
| volume | number | Yes | Volume to set. The value range can be obtained by calling getMinVolume and getMaxVolume. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

