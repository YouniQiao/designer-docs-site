# AudioEffectManager

Implements audio effect management.

**Since:** 18

**System capability:** SystemCapability.Multimedia.Audio.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { audio } from '@kit.AudioKit';
```

## getAudioEffectProperty

```TypeScript
getAudioEffectProperty(): Array<AudioEffectProperty>
```

Gets current audio effect properties.

**Since:** 18

**Required permissions:** 

 ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS

**System capability:** SystemCapability.Multimedia.Audio.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;AudioEffectProperty> | Array of current audio effect properties. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Caller is not a system application. |
| 6800301 | System error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let propertyArray: Array<audio.AudioEffectProperty> = audioStreamManager.getAudioEffectProperty();
  console.info(`The effect modes are: ${propertyArray}`);
} catch (err) {
  let error = err as BusinessError;
  console.error(`getAudioEffectProperty ERROR: ${error}`);
}

```

## getSupportedAudioEffectProperty

```TypeScript
getSupportedAudioEffectProperty(): Array<AudioEffectProperty>
```

Gets supported audio effect properties based on current devices.

**Since:** 18

**Required permissions:** 

 ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS

**System capability:** SystemCapability.Multimedia.Audio.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;AudioEffectProperty> | Array of supported audio effect properties. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Caller is not a system application. |
| 6800301 | System error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let propertyArray: Array<audio.AudioEffectProperty> = audioStreamManager.getSupportedAudioEffectProperty();
  console.info(`The effect modes are: ${propertyArray}`);
} catch (err) {
  let error = err as BusinessError;
  console.error(`getSupportedAudioEffectProperty ERROR: ${error}`);
}

```

## isAudioSeparationEffectSupported

```TypeScript
isAudioSeparationEffectSupported(): boolean
```

Checks whether the current device supports audio separation effect in system.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the current device supports audio separation effect. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Caller is not a system application. |

## offAudioSeparationEffectEnabledChange

```TypeScript
offAudioSeparationEffectEnabledChange(callback?: Callback<boolean>): void
```

Unsubscribes from the system audio separation effect enabled state change event.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Caller is not a system application. |
| 6800101 | Parameter verification failed. |

## onAudioSeparationEffectEnabledChange

```TypeScript
onAudioSeparationEffectEnabledChange(callback: Callback<boolean>): void
```

Subscribes to system audio separation effect enabled state change event. The audio separation effect state in system can be set by system playback controller application, other applications can use this function to listen the change event.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | Yes | Callback used to listen the system audio separation effect  enabled state change event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Caller is not a system application. |

## setAudioEffectProperty

```TypeScript
setAudioEffectProperty(propertyArray: Array<AudioEffectProperty>): void
```

Sets current audio effect properties.

**Since:** 18

**Required permissions:** 

 ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS

**System capability:** SystemCapability.Multimedia.Audio.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propertyArray | Array&lt;AudioEffectProperty> | Yes | array of audio effect property to be set.  Notice that only one effect property name in each effect property category should be set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Caller is not a system application. |
| 6800101 | Parameter verification failed. Possible causes:  1. More than one effect property name of the same effect property category are in the input array.  2. The input audioEffectProperties are not supported by the current device.  3. The name or category of the input audioEffectProperties is incorrect. |
| 6800301 | System error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let propertyArray: Array<audio.AudioEffectProperty> = audioEffectManager.getAudioEffectProperty();
  console.info(`The effect modes are: ${propertyArray}`);
  audioEffectManager.setAudioEffectProperty(propertyArray);
} catch (err) {
  let error = err as BusinessError;
  console.error(`setAudioEffectProperty ERROR: ${error}`);
}

```

## setAudioSeparationEffectEnabled

```TypeScript
setAudioSeparationEffectEnabled(enabled: boolean, uid: int, streamId?: long): Promise<void>
```

Sets audio separation effect enable or disable for specific application process, or for specific audio playback stream. This API uses a promise to return the result.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | The required effect state, true for enabled, false for disabled. |
| uid | int | Yes | The uid of target application process to add effect.  The value should be an integer. |
| streamId | long | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Caller is not a system application. |
| 6800101 | Parameter verification failed. |
| 6800104 | Effect is not supported in this device. |
| 6800301 | Audio service error occurs like service died. |

## setAudioSeparationEffectVolume

```TypeScript
setAudioSeparationEffectVolume(type: AudioSeparationVolumeType, volume: double): Promise<void>
```

Sets audio separation effect volume for specific volume type. This API uses a promise to return the result.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | AudioSeparationVolumeType | Yes | The type to set volume. |
| volume | double | Yes | The target volume value.  Value range: [0,1]. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Caller is not a system application. |
| 6800101 | Parameter verification failed. |
| 6800104 | Effect is not supported in this device. |
| 6800301 | Audio service error occurs like service died. |

