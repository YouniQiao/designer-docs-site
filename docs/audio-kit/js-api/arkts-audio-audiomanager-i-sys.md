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

## disableSafeMediaVolume

```TypeScript
disableSafeMediaVolume(): Promise<void>
```

user disable the safe media volume state.

**Since:** 12

**Required permissions:** ohos.permission.MODIFY_AUDIO_SETTINGS

**System capability:** SystemCapability.Multimedia.Audio.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system App. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

audioManager.disableSafeMediaVolume().then(() => {
  console.info('disableSafeMediaVolume success.');
}).catch((err: BusinessError) => {
  console.error(`disableSafeMediaVolume fail: ${err.code},${err.message}`);
});

```

## getCollaborativeManager

```TypeScript
getCollaborativeManager(): AudioCollaborativeManager
```

Obtains a collaborative playback management instance.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Audio.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| AudioCollaborativeManager | Returns a collaborative playback management instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system App. |

## getEffectManager

```TypeScript
getEffectManager(): AudioEffectManager
```

Obtains an {@link AudioEffectManager} instance.

**Since:** 18

**System capability:** SystemCapability.Multimedia.Audio.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| AudioEffectManager | AudioEffectManager instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system App. |

**Example**

```TypeScript
import { audio } from '@kit.AudioKit';

let audioEffectManager: audio.AudioEffectManager = audioManager.getEffectManager();

```

## getExtraParameters

```TypeScript
getExtraParameters(mainKey: string, subKeys?: Array<string>): Promise<Record<string, string>>
```

Obtains the values of a certain key. This method uses a promise to return the query result.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Audio.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mainKey | string | Yes | Main key of the audio parameters to get. |
| subKeys | Array&lt;string&gt; | No | Sub keys of the audio parameters to get. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Record&lt;string, string&gt;&gt; | Promise used to return the key-value pairs. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system App. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let subKeys: Array<String> = ['key_example'];
audioManager.getExtraParameters('key_example', subKeys).then((value: Record<string, string>) => {
  console.info(`Promise returned to indicate that the value of the audio extra parameters is obtained ${value}.`);
}).catch((err: BusinessError) => {
  console.error(`Failed to get the audio extra parameters ${err}`);
});

```

## on('volumeChange')

```TypeScript
on(type: 'volumeChange', callback: Callback<VolumeEvent>): void
```

Listens for system volume change events. This method uses a callback to get volume change events.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:volumeChange

**System capability:** SystemCapability.Multimedia.Audio.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'volumeChange' | Yes | Type of the event to listen for. Only the volumeChange event is supported. |
| callback | Callback&lt;VolumeEvent&gt; | Yes | Callback used to get the system volume change event. |

**Example**

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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** event:ringerModeChange

**System capability:** SystemCapability.Multimedia.Audio.Communication

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'ringerModeChange' | Yes | Type of the event to listen for. Only the ringerModeChange event issupported. |
| callback | Callback&lt;AudioRingMode&gt; | Yes | Callback used to get the updated ringer mode. |

**Example**

```TypeScript
audioManager.on('ringerModeChange', (ringerMode: audio.AudioRingMode) => {
  console.info(`Updated ringermode: ${ringerMode}`);
});

```

## setAudioScene

```TypeScript
setAudioScene(scene: AudioScene, callback: AsyncCallback<void>): void
```

Sets the audio scene mode to change audio strategies. This method uses an asynchronous callback to return the
result.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Communication

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scene | AudioScene | Yes | Audio scene mode. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

**Example**

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

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Communication

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scene | AudioScene | Yes | Audio scene mode. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

audioManager.setAudioScene(audio.AudioScene.AUDIO_SCENE_PHONE_CALL).then(() => {
  console.info('Promise returned to indicate a successful setting of the audio scene mode.');
}).catch((err: BusinessError) => {
  console.error(`Failed to set the audio scene mode ${err}`);
});

```

## setExtraParameters

```TypeScript
setExtraParameters(mainKey: string, kvpairs: Record<string, string>): Promise<void>
```

Sets extra audio parameters. This method uses a promise to return the result.

**Since:** 11

**Required permissions:** ohos.permission.MODIFY_AUDIO_SETTINGS

**System capability:** SystemCapability.Multimedia.Audio.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mainKey | string | Yes | Main key of the audio parameters to set. |
| kvpairs | Record&lt;string, string&gt; | Yes | Key-value pairs with subkeys and values to set. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system App. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

**Example**

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

