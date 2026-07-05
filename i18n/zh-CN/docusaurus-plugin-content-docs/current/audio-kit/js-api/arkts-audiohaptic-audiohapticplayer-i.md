# AudioHapticPlayer

Implements audio-haptic playback. Before calling any API in AudioHapticPlayer, you must use [createPlayer]audioHaptic.AudioHapticManager.createPlayer(id: number, options?: AudioHapticPlayerOptions) to create an AudioHapticPlayer instance.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

## 导入模块

```TypeScript
import { audioHaptic } from '@kit.AudioKit';
```

## enableHapticsInSilentMode

```TypeScript
enableHapticsInSilentMode(enable: boolean): void
```

Enable haptics when the ringer mode is silent mode. This function should be called before player start or after stop, and before release.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | use {@code true} if application want to enable this feature. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 5400102 | Operate not permit in current state. |

## isHapticsIntensityAdjustmentSupported

```TypeScript
isHapticsIntensityAdjustmentSupported(): boolean
```

Check whether the device supports haptics intensity adjustment.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | - {@code true} means supported. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |

## isHapticsRampSupported

```TypeScript
isHapticsRampSupported(): boolean
```

Check whether the device supports haptics intensity ramp effect.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | - {@code true} means supported. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |

## isMuted

```TypeScript
isMuted(type: AudioHapticType): boolean
```

Checks whether an audio-haptic type is muted.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | AudioHapticType | 是 | Audio-haptic type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Check result for whether the audio-haptic type is muted. true if muted, false  otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Parameter verification failed. |

**示例：**

```TypeScript
let audioHapticType: audioHaptic.AudioHapticType = audioHaptic.AudioHapticType.AUDIO_HAPTIC_TYPE_AUDIO;

let result: boolean = audioHapticPlayerInstance.isMuted(audioHapticType);

```

## off('endOfStream')

```TypeScript
off(type: 'endOfStream', callback?: Callback<void>): void
```

Unsubscribes from the EOS event. This API uses an asynchronous callback to return the result.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'endOfStream' | 是 | Event type. The event 'endOfStream' is triggered when the audio stream  playback ends. |
| callback | Callback&lt;void> | 否 |  |

**示例：**

```TypeScript
// 取消该事件的所有监听。
audioHapticPlayerInstance.off('endOfStream');

// 同一监听事件中，on方法和off方法传入callback参数一致，off方法取消对应on方法订阅的监听。
let endOfStreamCallback = () => {
  console.info('Succeeded in using on or off function.');
};

audioHapticPlayerInstance.on('endOfStream', endOfStreamCallback);

audioHapticPlayerInstance.off('endOfStream', endOfStreamCallback);

```

## off('audioInterrupt')

```TypeScript
off(type: 'audioInterrupt', callback?: Callback<audio.InterruptEvent>): void
```

Unsubscribes from the audio interruption event. This API uses an asynchronous callback to return the result.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'audioInterrupt' | 是 | Event type. The event 'audioInterrupt' is triggered when the audio focus  is changed. |
| callback | Callback&lt;audio.InterruptEvent> | 否 | Callback used to return the event information. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';

// 取消该事件的所有监听。
audioHapticPlayerInstance.off('audioInterrupt');

// 同一监听事件中，on方法和off方法传入callback参数一致，off方法取消对应on方法订阅的监听。
let isPlaying: boolean; // 标识符，表示是否正在渲染。
let isDucked: boolean; // 标识符，表示是否被降低音量。
let audioInterruptCallback = (interruptEvent: audio.InterruptEvent) => {
  // 在发生音频打断事件时，audioHapticPlayerInstance收到interruptEvent回调，此处根据其内容做相应处理。
  // 1. 可选：读取interruptEvent.forceType的类型，判断系统是否已强制执行相应操作。
  // 注意：默认焦点策略下，INTERRUPT_HINT_RESUME为INTERRUPT_SHARE类型，其余hintType均为INTERRUPT_FORCE类型。因此对forceType可不做判断。
  // 2. 必选：读取interruptEvent.hintType的类型，做出相应的处理。
  if (interruptEvent.forceType == audio.InterruptForceType.INTERRUPT_FORCE) {
    // 音频焦点事件已由系统强制执行，应用需更新自身状态及显示内容等。
    switch (interruptEvent.hintType) {
      case audio.InterruptHint.INTERRUPT_HINT_PAUSE:
        // 音频流已被暂停，临时失去焦点，待可重获焦点时会收到resume对应的interruptEvent。
        console.info('Force paused. Update playing status and stop writing');
        isPlaying = false; // 简化处理，代表应用切换至暂停状态的若干操作。
        break;
      case audio.InterruptHint.INTERRUPT_HINT_STOP:
        // 音频流已被停止，永久失去焦点，若想恢复渲染，需用户主动触发。
        console.info('Force stopped. Update playing status and stop writing');
        isPlaying = false; // 简化处理，代表应用切换至暂停状态的若干操作。
        break;
      case audio.InterruptHint.INTERRUPT_HINT_DUCK:
        // 音频流已被降低音量渲染。
        console.info('Force ducked. Update volume status');
        isDucked = true; // 简化处理，代表应用更新音量状态的若干操作。
        break;
      case audio.InterruptHint.INTERRUPT_HINT_UNDUCK:
        // 音频流已被恢复正常音量渲染。
        console.info('Force unducked. Update volume status');
        isDucked = false; // 简化处理，代表应用更新音量状态的若干操作。
        break;
      default:
        break;
    }
  } else if (interruptEvent.forceType == audio.InterruptForceType.INTERRUPT_SHARE) {
    // 音频焦点事件需由应用进行操作，应用可以自主选择如何处理该事件，建议应用遵从InterruptHint提示处理。
    switch (interruptEvent.hintType) {
      case audio.InterruptHint.INTERRUPT_HINT_RESUME:
        // 建议应用继续渲染（说明音频流此前被强制暂停，临时失去焦点，现在可以恢复渲染）。
        // 由于INTERRUPT_HINT_RESUME操作需要应用主动执行，系统无法强制，故INTERRUPT_HINT_RESUME事件一定为INTERRUPT_SHARE类型。
        console.info('Resume force paused renderer or ignore');
        // 若选择继续渲染，需在此处主动执行开始渲染的若干操作。
        break;
      default:
        break;
    }
  }
};

audioHapticPlayerInstance.on('audioInterrupt', audioInterruptCallback);

audioHapticPlayerInstance.off('audioInterrupt', audioInterruptCallback);

```

## offAudioInterrupt

```TypeScript
offAudioInterrupt(callback?: Callback<audio.InterruptEvent>): void
```

Unsubscribes audio interrupt event.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;audio.InterruptEvent> | 否 | Callback used to listen for audio interrupt info. |

## offEndOfStream

```TypeScript
offEndOfStream(callback?: Callback<void>): void
```

Unsubscribes end of stream event.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 否 |  |

## on('endOfStream')

```TypeScript
on(type: 'endOfStream', callback: Callback<void>): void
```

Subscribes to end of stream (EOS) event, which is triggered when the audio stream playback ends. This API uses an asynchronous callback to return the result.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'endOfStream' | 是 | Event type. The event 'endOfStream' is triggered when the audio stream  playback ends. |
| callback | Callback&lt;void> | 是 | Callback that returns no value. |

**示例：**

```TypeScript
audioHapticPlayerInstance.on('endOfStream', () => {
  console.info('Succeeded in using on function.');
});

```

## on('audioInterrupt')

```TypeScript
on(type: 'audioInterrupt', callback: Callback<audio.InterruptEvent>): void
```

Subscribes to the audio interruption event, which is triggered when the audio focus is changed. This API uses an asynchronous callback to return the result.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'audioInterrupt' | 是 | Event type. The event 'audioInterrupt' is triggered when the audio focus  is changed. |
| callback | Callback&lt;audio.InterruptEvent> | 是 | Callback used to return the event information. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';

let isPlaying: boolean; // 标识符，表示是否正在渲染。
let isDucked: boolean; // 标识符，表示是否被降低音量。

audioHapticPlayerInstance.on('audioInterrupt', (interruptEvent: audio.InterruptEvent) => {
  // 在发生音频打断事件时，audioHapticPlayerInstance收到interruptEvent回调，此处根据其内容做相应处理。
  // 1. 可选：读取interruptEvent.forceType的类型，判断系统是否已强制执行相应操作。
  // 注意：默认焦点策略下，INTERRUPT_HINT_RESUME为INTERRUPT_SHARE类型，其余hintType均为INTERRUPT_FORCE类型。因此对forceType可不做判断。
  // 2. 必选：读取interruptEvent.hintType的类型，做出相应的处理。
  if (interruptEvent.forceType == audio.InterruptForceType.INTERRUPT_FORCE) {
    // 音频焦点事件已由系统强制执行，应用需更新自身状态及显示内容等。
    switch (interruptEvent.hintType) {
      case audio.InterruptHint.INTERRUPT_HINT_PAUSE:
        // 音频流已被暂停，临时失去焦点，待可重获焦点时会收到resume对应的interruptEvent。
        console.info('Force paused. Update playing status and stop writing');
        isPlaying = false; // 简化处理，代表应用切换至暂停状态的若干操作。
        break;
      case audio.InterruptHint.INTERRUPT_HINT_STOP:
        // 音频流已被停止，永久失去焦点，若想恢复渲染，需用户主动触发。
        console.info('Force stopped. Update playing status and stop writing');
        isPlaying = false; // 简化处理，代表应用切换至暂停状态的若干操作。
        break;
      case audio.InterruptHint.INTERRUPT_HINT_DUCK:
        // 音频流已被降低音量渲染。
        console.info('Force ducked. Update volume status');
        isDucked = true; // 简化处理，代表应用更新音量状态的若干操作。
        break;
      case audio.InterruptHint.INTERRUPT_HINT_UNDUCK:
        // 音频流已被恢复正常音量渲染。
        console.info('Force unducked. Update volume status');
        isDucked = false; // 简化处理，代表应用更新音量状态的若干操作。
        break;
      default:
        break;
    }
  } else if (interruptEvent.forceType == audio.InterruptForceType.INTERRUPT_SHARE) {
    // 音频焦点事件需由应用进行操作，应用可以自主选择如何处理该事件，建议应用遵从InterruptHint提示处理。
    switch (interruptEvent.hintType) {
      case audio.InterruptHint.INTERRUPT_HINT_RESUME:
        // 建议应用继续渲染（说明音频流此前被强制暂停，临时失去焦点，现在可以恢复渲染）。
        // 由于INTERRUPT_HINT_RESUME操作需要应用主动执行，系统无法强制，故INTERRUPT_HINT_RESUME事件一定为INTERRUPT_SHARE类型。
        console.info('Resume force paused renderer or ignore');
        // 若选择继续渲染，需在此处主动执行开始渲染的若干操作。
        break;
      default:
        break;
    }
  }
});

```

## onAudioInterrupt

```TypeScript
onAudioInterrupt(callback: Callback<audio.InterruptEvent>): void
```

Subscribes audio interrupt event.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;audio.InterruptEvent> | 是 | Callback used to listen for audio interrupt info. |

## onEndOfStream

```TypeScript
onEndOfStream(callback: Callback<void>): void
```

Subscribes end of stream event.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 是 | Callback used to listen for the playback end of stream. |

## release

```TypeScript
release(): Promise<void>
```

Releases this audio-haptic player. This API uses a promise to return the result.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400105 | Service died. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

audioHapticPlayerInstance.release().then(() => {
  console.info('Succeeded in releasing.');
}).catch((err: BusinessError) => {
  console.error(`Failed to release. Code: ${err.code}, message: ${err.message}`);
});

```

## setHapticsIntensity

```TypeScript
setHapticsIntensity(intensity: double): Promise<void>
```

Set haptics intensity for this player. This method uses a promise to return the result. This function should be called before player release, and can only set once for each starting process.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| intensity | double | 是 | Target Haptics intensity value.  The value ranges from 0.00 to 1.00. 1.00 indicates the maximum intensity (100%). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 801 | Function is not supported in current device. |
| 5400102 | Operate not permit in current state. |
| 5400108 | Parameter out of range. |

## setHapticsRamp

```TypeScript
setHapticsRamp(duration: int, startIntensity: double, endIntensity: double): Promise<void>
```

Set haptics intensity ramp effect for this player. This method uses a promise to return the result. This function should be called before player start or after stop, and before release.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| duration | int | 是 | ramp duration to set, unit is milliseconds.  The value should be an integer, and not less than 100. |
| startIntensity | double | 是 | Starting intensity for Haptics ramp to set.  The value ranges from 0.00 to 1.00. 1.00 indicates the maximum intensity (100%). |
| endIntensity | double | 是 | End intensity for haptics ramp to set.  The value ranges from 0.00 to 1.00. 1.00 indicates the maximum intensity (100%). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 801 | Function is not supported in current device. |
| 5400102 | Operate not permit in current state. |
| 5400108 | Parameter out of range. |

## setLoop

```TypeScript
setLoop(loop: boolean): Promise<void>
```

Sets this audio-haptic player to play in a loop. This API uses a promise to return the result. > **NOTE** > > This API must be called before the audio-haptic player is released.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| loop | boolean | 是 | Whether to play in a loop. true to play in a loop, false otherwise. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operate not permit in current state. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

audioHapticPlayerInstance.setLoop(true).then(() => {
  console.info('Succeeded in setting loop.');
}).catch((err: BusinessError) => {
  console.error(`Failed to set loop. Code: ${err.code}, message: ${err.message}`);
});

```

## setVolume

```TypeScript
setVolume(volume: double): Promise<void>
```

Sets the volume for this audio-haptic player. This API uses a promise to return the result. > **NOTE** > > This API must be called before the audio-haptic player is released.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volume | double | 是 | Volume, in the range [0.00, 1.00], where 1.00 indicates the maximum volume (100%). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operate not permit in current state. |
| 5400105 | Service died. |
| 5400108 | Parameter out of range. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

audioHapticPlayerInstance.setVolume(0.5).then(() => {
  console.info('Succeeded in setting volume.');
}).catch((err: BusinessError) => {
  console.error(`Failed to set volume. Code: ${err.code}, message: ${err.message}`);
});

```

## start

```TypeScript
start(): Promise<void>
```

Starts playback. This API uses a promise to return the result.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operate not permit. |
| 5400103 | IO error. |
| 5400105 | Service died. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

audioHapticPlayerInstance.start().then(() => {
  console.info('Succeeded in starting.');
}).catch((err: BusinessError) => {
  console.error(`Failed to start. Code: ${err.code}, message: ${err.message}`);
});

```

## stop

```TypeScript
stop(): Promise<void>
```

Stops playback. This API uses a promise to return the result.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400102 | Operate not permit. |
| 5400105 | Service died. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

audioHapticPlayerInstance.stop().then(() => {
  console.info('Succeeded in stopping.');
}).catch((err: BusinessError) => {
  console.error(`Failed to stop Code: ${err.code}, message: ${err.message}`);
});

```

