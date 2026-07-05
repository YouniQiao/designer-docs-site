# AudioEffectManager

Implements audio effect management.

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.Audio.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## getAudioEffectProperty

```TypeScript
getAudioEffectProperty(): Array<AudioEffectProperty>
```

Gets current audio effect properties.

**起始版本：** 18

**需要权限：** 

 ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS

**系统能力：** SystemCapability.Multimedia.Audio.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;AudioEffectProperty> | Array of current audio effect properties. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Caller is not a system application. |
| 6800301 | System error. |

**示例：**

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

**起始版本：** 18

**需要权限：** 

 ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS

**系统能力：** SystemCapability.Multimedia.Audio.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;AudioEffectProperty> | Array of supported audio effect properties. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Caller is not a system application. |
| 6800301 | System error. |

**示例：**

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

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether the current device supports audio separation effect. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';

let isSupported: boolean = audioEffectManager.isAudioSeparationEffectSupported();
console.info(`Audio separation effect is supported: ${isSupported}`);

```

## offAudioSeparationEffectEnabledChange

```TypeScript
offAudioSeparationEffectEnabledChange(callback?: Callback<boolean>): void
```

Unsubscribes from the system audio separation effect enabled state change event.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 6800101 | Parameter verification failed. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';

audioEffectManager.offAudioSeparationEffectEnabledChange();

```

## onAudioSeparationEffectEnabledChange

```TypeScript
onAudioSeparationEffectEnabledChange(callback: Callback<boolean>): void
```

Subscribes to system audio separation effect enabled state change event. The audio separation effect state in system can be set by system playback controller application, other applications can use this function to listen the change event.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | 是 | Callback used to listen the system audio separation effect  enabled state change event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';

audioEffectManager.onAudioSeparationEffectEnabledChange((isEnabled: boolean) => {
  console.info(`Audio separation effect enabled state changed: ${isEnabled}`);
});

```

## setAudioEffectProperty

```TypeScript
setAudioEffectProperty(propertyArray: Array<AudioEffectProperty>): void
```

Sets current audio effect properties.

**起始版本：** 18

**需要权限：** 

 ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS

**系统能力：** SystemCapability.Multimedia.Audio.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| propertyArray | Array&lt;AudioEffectProperty> | 是 | array of audio effect property to be set.  Notice that only one effect property name in each effect property category should be set. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Caller is not a system application. |
| 6800101 | Parameter verification failed. Possible causes:  1. More than one effect property name of the same effect property category are in the input array.  2. The input audioEffectProperties are not supported by the current device.  3. The name or category of the input audioEffectProperties is incorrect. |
| 6800301 | System error. |

**示例：**

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

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | The required effect state, true for enabled, false for disabled. |
| uid | int | 是 | The uid of target application process to add effect.  The value should be an integer. |
| streamId | long | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Caller is not a system application. |
| 6800101 | Parameter verification failed. |
| 6800104 | Effect is not supported in this device. |
| 6800301 | Audio service error occurs like service died. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

audioEffectManager.setAudioSeparationEffectEnabled(true, 10001).then(() => {
  console.info('Succeeded in setting audio separation effect enabled.');
}).catch((err: BusinessError) => {
  console.error(`Failed to set audio separation effect enabled. Code: ${err.code}, message: ${err.message}`);
});

```

## setAudioSeparationEffectVolume

```TypeScript
setAudioSeparationEffectVolume(type: AudioSeparationVolumeType, volume: double): Promise<void>
```

Sets audio separation effect volume for specific volume type. This API uses a promise to return the result.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | AudioSeparationVolumeType | 是 | The type to set volume. |
| volume | double | 是 | The target volume value.  Value range: [0,1]. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Caller is not a system application. |
| 6800101 | Parameter verification failed. |
| 6800104 | Effect is not supported in this device. |
| 6800301 | Audio service error occurs like service died. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

audioEffectManager.setAudioSeparationEffectVolume(audio.AudioSeparationVolumeType.VOLUME_TYPE_VOCAL, 0.5).then(() => {
  console.info('Succeeded in setting audio separation effect volume.');
}).catch((err: BusinessError) => {
  console.error(`Failed to set audio separation effect volume. Code: ${err.code}, message: ${err.message}`);
});

```

