# AudioHapticManager

Manages the audio-haptic feature. Before calling any API in AudioHapticManager, you must use [getAudioHapticManager]audioHaptic.getAudioHapticManager to create an AudioHapticManager instance.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

## 导入模块

```TypeScript
import { audioHaptic } from '@kit.AudioKit';
```

## createPlayer

```TypeScript
createPlayer(id: number, options?: AudioHapticPlayerOptions): Promise<AudioHapticPlayer>
```

Create an audio haptic player. This method uses a promise to return the result. If haptics is needed, caller should have the permission of ohos.permission.VIBRATE.

**起始版本：** 11

**需要权限：** 

 ohos.permission.VIBRATE

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | number | 是 | Source ID. |
| options | AudioHapticPlayerOptions | 否 | Options of the audio-haptic player. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AudioHapticPlayer> | Promise used to return the audio-haptic player. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 5400102 | Operation not allowed. |
| 5400103 | I/O error. |
| 5400106 | Unsupport format. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let id = 0; // 需要通过registerSource方法获取。

let options: audioHaptic.AudioHapticPlayerOptions = {muteAudio: false, muteHaptics: false};
let audioHapticPlayerInstance: audioHaptic.AudioHapticPlayer | undefined = undefined;

audioHapticManagerInstance.createPlayer(id, options).then((value: audioHaptic.AudioHapticPlayer) => {
  audioHapticPlayerInstance = value;
  console.info('Succeeded in creating player.');
}).catch((err: BusinessError) => {
  console.error(`Failed to create player. Code: ${err.code}, message: ${err.message}`);
});

```

## createPlayer

```TypeScript
createPlayer(id: int, options?: AudioHapticPlayerOptions): Promise<AudioHapticPlayer | null>
```

Create an audio haptic player. This method uses a promise to return the result. If haptics is needed, caller should have the permission of ohos.permission.VIBRATE.

**起始版本：** 23

**需要权限：** 

 ohos.permission.VIBRATE

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | int | 是 | Source id. |
| options | AudioHapticPlayerOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AudioHapticPlayer \| null> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 5400102 | Operation not allowed. |
| 5400103 | I/O error. |
| 5400106 | Unsupport format. |

## registerSource

```TypeScript
registerSource(audioUri: string, hapticUri: string): Promise<int>
```

Registers audio and haptic resources via URIs. This API uses a promise to return the result. > **NOTE** > > A maximum of 128 resources can be registered at the same time for an application. Any attempt to register > beyond this limit will fail (returning a negative resource ID). You are advised to reasonably manage the number > of registered resources. For resources that are no longer used, you are advised to unregister them in a timely > manner.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| audioUri | string | 是 | URI of the audio source. - For details about the supported audio resource formats  and path formats in the normal latency mode, see [AVPlayer](../../apis-media-kit/arkts-apis/arkts-multimedia-media.md#media). - For  details about the supported audio resource formats in the low-latency mode, see  [SoundPool](docroot://reference/apis-media-kit/js-apis-inner-multimedia-soundPool.md#soundpool). The path  format must meet the requirements described in  [fileIo.open](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#fileioopen). - In both modes, you  are advised to pass in the absolute path of the file. |
| hapticUri | string | 是 | URI of the haptic source. For details about the supported haptic resource  formats, see [HapticFileDescriptor](../../apis-sensor-service-kit/arkts-apis/arkts-vibrator-hapticfiledescriptor-i.md#HapticFileDescriptor). The path format must  meet the requirements described in  [fileIo.open](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#fileioopen). You are advised to  pass in the absolute path of the file. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Promise, which returns the registered resource ID.  In normal cases, the returned resource ID is a non-negative number. A negative ID indicates a registration  failure. In this case, check whether the number of registered resources exceeds the upper limit. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let audioUri = 'data/audioTest.wav'; // 需更改为目标音频资源的Uri。
let hapticUri = 'data/hapticTest.json'; // 需更改为目标振动资源的Uri。
let id = 0;
// 单个应用最多支持同时注册128个资源，超过之后将会注册失败（返回注册的资源ID为负数）。推荐应用合理控制注册资源数量，对于不再需要使用的资源，建议及时取消注册。
audioHapticManagerInstance.registerSource(audioUri, hapticUri).then((value: number) => {
  console.info(`Succeeded in registering source. ID: ${value}.`);
  id = value;
}).catch((err: BusinessError) => {
  console.error(`Failed to register source. Code: ${err.code}, message: ${err.message}`);
});

```

## registerSourceFromFd

```TypeScript
registerSourceFromFd(audioFd: AudioHapticFileDescriptor, hapticFd: AudioHapticFileDescriptor): Promise<int>
```

Registers audio and haptic resources via file descriptors. This API uses a promise to return the result. > **NOTE** > > A maximum of 128 resources can be registered at the same time for an application. Any attempt to register > beyond this limit will fail (returning a negative resource ID). You are advised to reasonably manage the number > of registered resources. For resources that are no longer used, you are advised to unregister them in a timely > manner.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| audioFd | AudioHapticFileDescriptor | 是 | Valid file descriptor object that has been opened, used to  describe the audio file. The offset and length must match the actual file length. |
| hapticFd | AudioHapticFileDescriptor | 是 | Valid file descriptor object that has been opened, used to  describe the haptic file. The offset and length must match the actual file length. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Promise, which returns the registered resource ID.  In normal cases, the returned resource ID is a non-negative number. A negative ID indicates a registration  failure. In this case, check whether the number of registered resources exceeds the upper limit. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;

let audioFile = context.resourceManager.getRawFdSync('audioTest.ogg'); // 需要改成rawfile目录下的对应文件。
let audioFd: audioHaptic.AudioHapticFileDescriptor = {
  fd: audioFile.fd,
  offset: audioFile.offset,
  length: audioFile.length,
};

let hapticFile = context.resourceManager.getRawFdSync('hapticTest.json'); // 需要改成rawfile目录下的对应文件。
let hapticFd: audioHaptic.AudioHapticFileDescriptor = {
  fd: hapticFile.fd,
  offset: hapticFile.offset,
  length: hapticFile.length,
};
let id = 0;
// 单个应用最多支持同时注册128个资源，超过之后将会注册失败（返回注册的资源ID为负数）。推荐应用合理控制注册资源数量，对于不再需要使用的资源，建议及时取消注册。
audioHapticManagerInstance.registerSourceFromFd(audioFd, hapticFd).then((value: number) => {
  console.info(`Succeeded in registering source from fd. ID: ${value}.`);
  id = value;
}).catch((err: BusinessError) => {
  console.error(`Failed to register source from fd. Code: ${err.code}, message: ${err.message}`);
});

```

## setAudioLatencyMode

```TypeScript
setAudioLatencyMode(id:int, latencyMode: AudioLatencyMode): void
```

Sets the latency mode for an audio-haptic source.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | int | 是 | Source ID. |
| latencyMode | AudioLatencyMode | 是 | Audio latency mode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 5400102 | Operation not allowed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let id = 0; // 需要通过registerSource方法获取。

let latencyMode: audioHaptic.AudioLatencyMode = audioHaptic.AudioLatencyMode.AUDIO_LATENCY_MODE_FAST;

audioHapticManagerInstance.setAudioLatencyMode(id, latencyMode);

```

## setStreamUsage

```TypeScript
setStreamUsage(id: int, usage: audio.StreamUsage): void
```

Sets the stream usage for an audio-haptic source.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | int | 是 | Source ID. |
| usage | audio.StreamUsage | 是 | Stream usage. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types;  3.Parameter verification failed. |
| 5400102 | Operation not allowed. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

let id = 0; // 需要通过registerSource方法获取。

let usage: audio.StreamUsage = audio.StreamUsage.STREAM_USAGE_NOTIFICATION;

audioHapticManagerInstance.setStreamUsage(id, usage);

```

## unregisterSource

```TypeScript
unregisterSource(id: int): Promise<void>
```

Unregisters an audio-haptic source. This API uses a promise to return the result. > **NOTE** > > For resources that are no longer used, you are advised to unregister them in a timely manner to avoid issues > such as resource leaks or the number of resources exceeding the upper limit.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AudioHaptic.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | int | 是 | Source ID. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let id = 0; // 需要通过registerSource方法获取。

audioHapticManagerInstance.unregisterSource(id).then(() => {
  console.info('Succeeded in unregistering source.');
}).catch((err: BusinessError) => {
  console.error(`Failed to unregister source. Code: ${err.code}, message: ${err.message}`);
});

```

