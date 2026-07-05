# AudioRecorder

> **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用[AVRecorder](arkts-multimedia-media.md#media)替代。 音频录制管理类，用于录制音频媒体。在调用AudioRecorder的方法前，需要先通过 [createAudioRecorder()](arkts-media-createaudiorecorder-f.md#createAudioRecorder-1) 构建一个AudioRecorder实例。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

## Modules to Import

```TypeScript
import { media } from '@kit.MediaKit';
```

## on('prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset')

```TypeScript
on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void
```

开始订阅音频录制事件。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [AVRecorder.on('stateChange')](arkts-media-avrecorder-i.md#on) > 替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVRecorder.on(type:

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'prepare' \| 'start' \| 'pause' \| 'resume' \| 'stop' \| 'release' \| 'reset' | Yes | 录制事件回调类型，支持的事件包括：'  prepare' \| 'start' \| 'pause' \| ’resume‘ \| 'stop' \| 'release' \| 'reset'。 - 'prepare' ：完成prepare调用，音频录制参数设  置完成，触发该事件。 - 'start' ：完成start调用，音频录制开始，触发该事件。 - 'pause': 完成pause调用，音频暂停录制，触发该事件。 - 'resume': 完成  resume调用，音频恢复录制，触发该事件。 - 'stop' ：完成stop调用，音频停止录制，触发该事件。 - 'release' ：完成release调用，音频释放录制资源，触发该事件。  - 'reset'：完成reset调用，音频重置为初始状态，触发该事件。 |
| callback | () => void | Yes | 录制事件回调方法。 |

## on('prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset')

```TypeScript
on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void
```

开始订阅音频录制事件。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [AVRecorder.on('stateChange')](arkts-media-avrecorder-i.md#on) > 替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVRecorder.on(type:

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'prepare' \| 'start' \| 'pause' \| 'resume' \| 'stop' \| 'release' \| 'reset' | Yes | 录制事件回调类型，支持的事件包括：'  prepare' \| 'start' \| 'pause' \| ’resume‘ \| 'stop' \| 'release' \| 'reset'。 - 'prepare' ：完成prepare调用，音频录制参数设  置完成，触发该事件。 - 'start' ：完成start调用，音频录制开始，触发该事件。 - 'pause': 完成pause调用，音频暂停录制，触发该事件。 - 'resume': 完成  resume调用，音频恢复录制，触发该事件。 - 'stop' ：完成stop调用，音频停止录制，触发该事件。 - 'release' ：完成release调用，音频释放录制资源，触发该事件。  - 'reset'：完成reset调用，音频重置为初始状态，触发该事件。 |
| callback | () => void | Yes | 录制事件回调方法。 |

## on('prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset')

```TypeScript
on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void
```

开始订阅音频录制事件。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [AVRecorder.on('stateChange')](arkts-media-avrecorder-i.md#on) > 替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVRecorder.on(type:

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'prepare' \| 'start' \| 'pause' \| 'resume' \| 'stop' \| 'release' \| 'reset' | Yes | 录制事件回调类型，支持的事件包括：'  prepare' \| 'start' \| 'pause' \| ’resume‘ \| 'stop' \| 'release' \| 'reset'。 - 'prepare' ：完成prepare调用，音频录制参数设  置完成，触发该事件。 - 'start' ：完成start调用，音频录制开始，触发该事件。 - 'pause': 完成pause调用，音频暂停录制，触发该事件。 - 'resume': 完成  resume调用，音频恢复录制，触发该事件。 - 'stop' ：完成stop调用，音频停止录制，触发该事件。 - 'release' ：完成release调用，音频释放录制资源，触发该事件。  - 'reset'：完成reset调用，音频重置为初始状态，触发该事件。 |
| callback | () => void | Yes | 录制事件回调方法。 |

## on('prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset')

```TypeScript
on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void
```

开始订阅音频录制事件。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [AVRecorder.on('stateChange')](arkts-media-avrecorder-i.md#on) > 替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVRecorder.on(type:

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'prepare' \| 'start' \| 'pause' \| 'resume' \| 'stop' \| 'release' \| 'reset' | Yes | 录制事件回调类型，支持的事件包括：'  prepare' \| 'start' \| 'pause' \| ’resume‘ \| 'stop' \| 'release' \| 'reset'。 - 'prepare' ：完成prepare调用，音频录制参数设  置完成，触发该事件。 - 'start' ：完成start调用，音频录制开始，触发该事件。 - 'pause': 完成pause调用，音频暂停录制，触发该事件。 - 'resume': 完成  resume调用，音频恢复录制，触发该事件。 - 'stop' ：完成stop调用，音频停止录制，触发该事件。 - 'release' ：完成release调用，音频释放录制资源，触发该事件。  - 'reset'：完成reset调用，音频重置为初始状态，触发该事件。 |
| callback | () => void | Yes | 录制事件回调方法。 |

## on('prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset')

```TypeScript
on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void
```

开始订阅音频录制事件。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [AVRecorder.on('stateChange')](arkts-media-avrecorder-i.md#on) > 替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVRecorder.on(type:

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'prepare' \| 'start' \| 'pause' \| 'resume' \| 'stop' \| 'release' \| 'reset' | Yes | 录制事件回调类型，支持的事件包括：'  prepare' \| 'start' \| 'pause' \| ’resume‘ \| 'stop' \| 'release' \| 'reset'。 - 'prepare' ：完成prepare调用，音频录制参数设  置完成，触发该事件。 - 'start' ：完成start调用，音频录制开始，触发该事件。 - 'pause': 完成pause调用，音频暂停录制，触发该事件。 - 'resume': 完成  resume调用，音频恢复录制，触发该事件。 - 'stop' ：完成stop调用，音频停止录制，触发该事件。 - 'release' ：完成release调用，音频释放录制资源，触发该事件。  - 'reset'：完成reset调用，音频重置为初始状态，触发该事件。 |
| callback | () => void | Yes | 录制事件回调方法。 |

## on('prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset')

```TypeScript
on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void
```

开始订阅音频录制事件。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [AVRecorder.on('stateChange')](arkts-media-avrecorder-i.md#on) > 替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVRecorder.on(type:

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'prepare' \| 'start' \| 'pause' \| 'resume' \| 'stop' \| 'release' \| 'reset' | Yes | 录制事件回调类型，支持的事件包括：'  prepare' \| 'start' \| 'pause' \| ’resume‘ \| 'stop' \| 'release' \| 'reset'。 - 'prepare' ：完成prepare调用，音频录制参数设  置完成，触发该事件。 - 'start' ：完成start调用，音频录制开始，触发该事件。 - 'pause': 完成pause调用，音频暂停录制，触发该事件。 - 'resume': 完成  resume调用，音频恢复录制，触发该事件。 - 'stop' ：完成stop调用，音频停止录制，触发该事件。 - 'release' ：完成release调用，音频释放录制资源，触发该事件。  - 'reset'：完成reset调用，音频重置为初始状态，触发该事件。 |
| callback | () => void | Yes | 录制事件回调方法。 |

## on('prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset')

```TypeScript
on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void
```

开始订阅音频录制事件。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [AVRecorder.on('stateChange')](arkts-media-avrecorder-i.md#on) > 替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVRecorder.on(type:

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'prepare' \| 'start' \| 'pause' \| 'resume' \| 'stop' \| 'release' \| 'reset' | Yes | 录制事件回调类型，支持的事件包括：'  prepare' \| 'start' \| 'pause' \| ’resume‘ \| 'stop' \| 'release' \| 'reset'。 - 'prepare' ：完成prepare调用，音频录制参数设  置完成，触发该事件。 - 'start' ：完成start调用，音频录制开始，触发该事件。 - 'pause': 完成pause调用，音频暂停录制，触发该事件。 - 'resume': 完成  resume调用，音频恢复录制，触发该事件。 - 'stop' ：完成stop调用，音频停止录制，触发该事件。 - 'release' ：完成release调用，音频释放录制资源，触发该事件。  - 'reset'：完成reset调用，音频重置为初始状态，触发该事件。 |
| callback | () => void | Yes | 录制事件回调方法。 |

## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

开始订阅音频录制错误事件，当上报error错误事件后，用户需处理error事件，退出录制操作。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [AVRecorder.on('error')](arkts-media-avrecorder-i.md#on) > 替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVRecorder.on(type:

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | 录制错误事件回调类型'error'。 - 'error'：音频录制过程中发生错误，触发该事件。 |
| callback | ErrorCallback | Yes | 录制错误事件回调方法。 |

## pause

```TypeScript
pause(): void
```

暂停录制，需要在'start'事件成功触发后，才能调用pause方法。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [AVRecorder.pause](arkts-media-avrecorder-i.md#pause)替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVRecorder.pause(callback:

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

## prepare

```TypeScript
prepare(config: AudioRecorderConfig): void
```

录音准备。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [AVRecorder.prepare](arkts-media-avrecorder-i.md#prepare) > 替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVRecorder.prepare(config:

**Required permissions:** 

 ohos.permission.MICROPHONE

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | AudioRecorderConfig | Yes | 配置录音的相关参数，包括音频输出URI、编码格式、采样率、声道数、输出格式等。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | permission denied. [since 12] |

## release

```TypeScript
release(): void
```

释放录音资源。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [AVRecorder.release](arkts-media-avrecorder-i.md#release)替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVRecorder.release(callback:

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

## reset

```TypeScript
reset(): void
```

重置录音。 进行重置录音之前，需要先调用stop()停止录音。重置录音之后，需要调用prepare()设置录音参数项，才能再次进行录音。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [AVRecorder.reset](arkts-media-avrecorder-i.md#reset)替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVRecorder.reset(callback:

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

## resume

```TypeScript
resume(): void
```

恢复录制，需要在'pause'事件成功触发后，才能调用resume方法。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [AVRecorder.resume](arkts-media-avrecorder-i.md#resume)替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVRecorder.resume(callback:

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

## start

```TypeScript
start(): void
```

开始录制，需在'prepare'事件成功触发后，才能调用start方法。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [AVRecorder.start](arkts-media-avrecorder-i.md#start)替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVRecorder.start(callback:

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

## stop

```TypeScript
stop(): void
```

停止录音。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [AVRecorder.stop](arkts-media-avrecorder-i.md#stop)替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVRecorder.stop(callback:

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

