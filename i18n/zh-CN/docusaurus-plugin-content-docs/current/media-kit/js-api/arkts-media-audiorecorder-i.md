# AudioRecorder

AudioRecorder is a class for audio recording management. It provides APIs to record audio. Before calling any API in AudioRecorder, you must use [createAudioRecorder()](arkts-media-createaudiorecorder-f.md#createAudioRecorder-1) to create an AudioRecorder instance.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

## 导入模块

```TypeScript
import { media } from '@kit.MediaKit';
```

## on('prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset')

```TypeScript
on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void
```

Subscribes to the audio recording events.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVRecorder.on(type:

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'prepare' \| 'start' \| 'pause' \| 'resume' \| 'stop' \| 'release' \| 'reset' | 是 | Event type. The  following events are supported: 'prepare'\|'start'\| 'pause' \| 'resume' \|'stop'\|'release'\|'reset' - '  prepare': triggered when the prepare() API is called and the audio recording parameters are set. - '  start': triggered when the start() API is called and audio recording starts. - 'pause': triggered when  the pause() API is called and audio recording is paused. - 'resume': triggered when the resume()  API is called and audio recording is resumed. - 'stop': triggered when the stop() API is called and  audio recording stops. - 'release': triggered when the release() API is called and the recording  resources are released. - 'reset': triggered when the reset() API is called and audio recording is  reset. |
| callback | () => void | 是 | Callback invoked when the event is triggered. |

## on('prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset')

```TypeScript
on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void
```

Subscribes to the audio recording events.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVRecorder.on(type:

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'prepare' \| 'start' \| 'pause' \| 'resume' \| 'stop' \| 'release' \| 'reset' | 是 | Event type. The  following events are supported: 'prepare'\|'start'\| 'pause' \| 'resume' \|'stop'\|'release'\|'reset' - '  prepare': triggered when the prepare() API is called and the audio recording parameters are set. - '  start': triggered when the start() API is called and audio recording starts. - 'pause': triggered when  the pause() API is called and audio recording is paused. - 'resume': triggered when the resume()  API is called and audio recording is resumed. - 'stop': triggered when the stop() API is called and  audio recording stops. - 'release': triggered when the release() API is called and the recording  resources are released. - 'reset': triggered when the reset() API is called and audio recording is  reset. |
| callback | () => void | 是 | Callback invoked when the event is triggered. |

## on('prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset')

```TypeScript
on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void
```

Subscribes to the audio recording events.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVRecorder.on(type:

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'prepare' \| 'start' \| 'pause' \| 'resume' \| 'stop' \| 'release' \| 'reset' | 是 | Event type. The  following events are supported: 'prepare'\|'start'\| 'pause' \| 'resume' \|'stop'\|'release'\|'reset' - '  prepare': triggered when the prepare() API is called and the audio recording parameters are set. - '  start': triggered when the start() API is called and audio recording starts. - 'pause': triggered when  the pause() API is called and audio recording is paused. - 'resume': triggered when the resume()  API is called and audio recording is resumed. - 'stop': triggered when the stop() API is called and  audio recording stops. - 'release': triggered when the release() API is called and the recording  resources are released. - 'reset': triggered when the reset() API is called and audio recording is  reset. |
| callback | () => void | 是 | Callback invoked when the event is triggered. |

## on('prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset')

```TypeScript
on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void
```

Subscribes to the audio recording events.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVRecorder.on(type:

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'prepare' \| 'start' \| 'pause' \| 'resume' \| 'stop' \| 'release' \| 'reset' | 是 | Event type. The  following events are supported: 'prepare'\|'start'\| 'pause' \| 'resume' \|'stop'\|'release'\|'reset' - '  prepare': triggered when the prepare() API is called and the audio recording parameters are set. - '  start': triggered when the start() API is called and audio recording starts. - 'pause': triggered when  the pause() API is called and audio recording is paused. - 'resume': triggered when the resume()  API is called and audio recording is resumed. - 'stop': triggered when the stop() API is called and  audio recording stops. - 'release': triggered when the release() API is called and the recording  resources are released. - 'reset': triggered when the reset() API is called and audio recording is  reset. |
| callback | () => void | 是 | Callback invoked when the event is triggered. |

## on('prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset')

```TypeScript
on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void
```

Subscribes to the audio recording events.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVRecorder.on(type:

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'prepare' \| 'start' \| 'pause' \| 'resume' \| 'stop' \| 'release' \| 'reset' | 是 | Event type. The  following events are supported: 'prepare'\|'start'\| 'pause' \| 'resume' \|'stop'\|'release'\|'reset' - '  prepare': triggered when the prepare() API is called and the audio recording parameters are set. - '  start': triggered when the start() API is called and audio recording starts. - 'pause': triggered when  the pause() API is called and audio recording is paused. - 'resume': triggered when the resume()  API is called and audio recording is resumed. - 'stop': triggered when the stop() API is called and  audio recording stops. - 'release': triggered when the release() API is called and the recording  resources are released. - 'reset': triggered when the reset() API is called and audio recording is  reset. |
| callback | () => void | 是 | Callback invoked when the event is triggered. |

## on('prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset')

```TypeScript
on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void
```

Subscribes to the audio recording events.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVRecorder.on(type:

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'prepare' \| 'start' \| 'pause' \| 'resume' \| 'stop' \| 'release' \| 'reset' | 是 | Event type. The  following events are supported: 'prepare'\|'start'\| 'pause' \| 'resume' \|'stop'\|'release'\|'reset' - '  prepare': triggered when the prepare() API is called and the audio recording parameters are set. - '  start': triggered when the start() API is called and audio recording starts. - 'pause': triggered when  the pause() API is called and audio recording is paused. - 'resume': triggered when the resume()  API is called and audio recording is resumed. - 'stop': triggered when the stop() API is called and  audio recording stops. - 'release': triggered when the release() API is called and the recording  resources are released. - 'reset': triggered when the reset() API is called and audio recording is  reset. |
| callback | () => void | 是 | Callback invoked when the event is triggered. |

## on('prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset')

```TypeScript
on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void
```

Subscribes to the audio recording events.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVRecorder.on(type:

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'prepare' \| 'start' \| 'pause' \| 'resume' \| 'stop' \| 'release' \| 'reset' | 是 | Event type. The  following events are supported: 'prepare'\|'start'\| 'pause' \| 'resume' \|'stop'\|'release'\|'reset' - '  prepare': triggered when the prepare() API is called and the audio recording parameters are set. - '  start': triggered when the start() API is called and audio recording starts. - 'pause': triggered when  the pause() API is called and audio recording is paused. - 'resume': triggered when the resume()  API is called and audio recording is resumed. - 'stop': triggered when the stop() API is called and  audio recording stops. - 'release': triggered when the release() API is called and the recording  resources are released. - 'reset': triggered when the reset() API is called and audio recording is  reset. |
| callback | () => void | 是 | Callback invoked when the event is triggered. |

## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Subscribes to audio recording error events. After an error event is reported, you must handle the event and exit the recording.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVRecorder.on(type:

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'error' | 是 | Event type, which is 'error' in this case. This event is triggered when an error  occurs during audio recording. |
| callback | ErrorCallback | 是 | Callback invoked when the event is triggered. |

## pause

```TypeScript
pause(): void
```

Pauses audio recording. This API can be called only after the **'start'** event is triggered.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVRecorder.pause(callback:

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

## prepare

```TypeScript
prepare(config: AudioRecorderConfig): void
```

Prepares for recording.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVRecorder.prepare(config:

**需要权限：** 

 ohos.permission.MICROPHONE

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| config | AudioRecorderConfig | 是 | Audio recording parameters, including the audio output URI, encoding  format, sample rate, audio channel count, and output format. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | permission denied. [since 12] |

## release

```TypeScript
release(): void
```

Releases the audio recording resources.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVRecorder.release(callback:

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

## reset

```TypeScript
reset(): void
```

Resets audio recording. Before resetting audio recording, you must call **stop()** to stop recording. After audio recording is reset, you must call **prepare()** to set the recording configurations for another recording.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVRecorder.reset(callback:

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

## resume

```TypeScript
resume(): void
```

Resumes audio recording. This API can be called only after the **'pause'** event is triggered.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVRecorder.resume(callback:

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

## start

```TypeScript
start(): void
```

Starts audio recording. This API can be called only after the **'prepare'** event is triggered.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVRecorder.start(callback:

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

## stop

```TypeScript
stop(): void
```

Stops audio recording.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVRecorder.stop(callback:

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

