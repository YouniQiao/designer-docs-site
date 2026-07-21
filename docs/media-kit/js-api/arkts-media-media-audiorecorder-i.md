# AudioRecorder

AudioRecorder is a class for audio recording management. It provides APIs to record audio. Before calling any API in AudioRecorder, you must use [createAudioRecorder()](arkts-media-media-createaudiorecorder-f.md#createaudiorecorder-1) to create an AudioRecorder instance.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [media:media](arkts-multimedia-media.md)

<!--Device-media-interface AudioRecorder--><!--Device-media-interface AudioRecorder-End-->

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

## Modules to Import

```TypeScript
import { media } from '@kit.MediaKit';
```

<a id="on"></a>
## on('prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset')

```TypeScript
on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void
```

Subscribes to the audio recording events.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** on(type:

<!--Device-AudioRecorder-on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void--><!--Device-AudioRecorder-on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void-End-->

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'prepare' \| 'start' \| 'pause' \| 'resume' \| 'stop' \| 'release' \| 'reset' | Yes | Event type. The following events are supported: 'prepare'\|'start'\| 'pause' \| 'resume' \|'stop'\|'release'\|'reset'<br>- 'prepare': triggered when the **prepare()** API is called and the audio recording parameters are set.<br>- 'start': triggered when the **start()** API is called and audio recording starts.<br>- 'pause': triggered when the **pause()** API is called and audio recording is paused.<br>- 'resume': triggered when the **resume()** API is called and audio recording is resumed.<br>- 'stop': triggered when the **stop()** API is called and audio recording stops.<br>- 'release': triggered when the **release()** API is called and the recording resources are released.<br>- 'reset': triggered when the **reset()** API is called and audio recording is reset. |
| callback | () =&gt; void | Yes | Callback invoked when the event is triggered. |

<a id="on-1"></a>
## on('prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset')

```TypeScript
on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void
```

Subscribes to the audio recording events.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** on(type:

<!--Device-AudioRecorder-on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void--><!--Device-AudioRecorder-on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void-End-->

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'prepare' \| 'start' \| 'pause' \| 'resume' \| 'stop' \| 'release' \| 'reset' | Yes | Event type. The following events are supported: 'prepare'\|'start'\| 'pause' \| 'resume' \|'stop'\|'release'\|'reset'<br>- 'prepare': triggered when the **prepare()** API is called and the audio recording parameters are set.<br>- 'start': triggered when the **start()** API is called and audio recording starts.<br>- 'pause': triggered when the **pause()** API is called and audio recording is paused.<br>- 'resume': triggered when the **resume()** API is called and audio recording is resumed.<br>- 'stop': triggered when the **stop()** API is called and audio recording stops.<br>- 'release': triggered when the **release()** API is called and the recording resources are released.<br>- 'reset': triggered when the **reset()** API is called and audio recording is reset. |
| callback | () =&gt; void | Yes | Callback invoked when the event is triggered. |

<a id="on-2"></a>
## on('prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset')

```TypeScript
on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void
```

Subscribes to the audio recording events.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** on(type:

<!--Device-AudioRecorder-on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void--><!--Device-AudioRecorder-on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void-End-->

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'prepare' \| 'start' \| 'pause' \| 'resume' \| 'stop' \| 'release' \| 'reset' | Yes | Event type. The following events are supported: 'prepare'\|'start'\| 'pause' \| 'resume' \|'stop'\|'release'\|'reset'<br>- 'prepare': triggered when the **prepare()** API is called and the audio recording parameters are set.<br>- 'start': triggered when the **start()** API is called and audio recording starts.<br>- 'pause': triggered when the **pause()** API is called and audio recording is paused.<br>- 'resume': triggered when the **resume()** API is called and audio recording is resumed.<br>- 'stop': triggered when the **stop()** API is called and audio recording stops.<br>- 'release': triggered when the **release()** API is called and the recording resources are released.<br>- 'reset': triggered when the **reset()** API is called and audio recording is reset. |
| callback | () =&gt; void | Yes | Callback invoked when the event is triggered. |

<a id="on-3"></a>
## on('prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset')

```TypeScript
on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void
```

Subscribes to the audio recording events.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** on(type:

<!--Device-AudioRecorder-on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void--><!--Device-AudioRecorder-on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void-End-->

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'prepare' \| 'start' \| 'pause' \| 'resume' \| 'stop' \| 'release' \| 'reset' | Yes | Event type. The following events are supported: 'prepare'\|'start'\| 'pause' \| 'resume' \|'stop'\|'release'\|'reset'<br>- 'prepare': triggered when the **prepare()** API is called and the audio recording parameters are set.<br>- 'start': triggered when the **start()** API is called and audio recording starts.<br>- 'pause': triggered when the **pause()** API is called and audio recording is paused.<br>- 'resume': triggered when the **resume()** API is called and audio recording is resumed.<br>- 'stop': triggered when the **stop()** API is called and audio recording stops.<br>- 'release': triggered when the **release()** API is called and the recording resources are released.<br>- 'reset': triggered when the **reset()** API is called and audio recording is reset. |
| callback | () =&gt; void | Yes | Callback invoked when the event is triggered. |

<a id="on-4"></a>
## on('prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset')

```TypeScript
on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void
```

Subscribes to the audio recording events.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** on(type:

<!--Device-AudioRecorder-on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void--><!--Device-AudioRecorder-on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void-End-->

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'prepare' \| 'start' \| 'pause' \| 'resume' \| 'stop' \| 'release' \| 'reset' | Yes | Event type. The following events are supported: 'prepare'\|'start'\| 'pause' \| 'resume' \|'stop'\|'release'\|'reset'<br>- 'prepare': triggered when the **prepare()** API is called and the audio recording parameters are set.<br>- 'start': triggered when the **start()** API is called and audio recording starts.<br>- 'pause': triggered when the **pause()** API is called and audio recording is paused.<br>- 'resume': triggered when the **resume()** API is called and audio recording is resumed.<br>- 'stop': triggered when the **stop()** API is called and audio recording stops.<br>- 'release': triggered when the **release()** API is called and the recording resources are released.<br>- 'reset': triggered when the **reset()** API is called and audio recording is reset. |
| callback | () =&gt; void | Yes | Callback invoked when the event is triggered. |

<a id="on-5"></a>
## on('prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset')

```TypeScript
on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void
```

Subscribes to the audio recording events.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** on(type:

<!--Device-AudioRecorder-on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void--><!--Device-AudioRecorder-on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void-End-->

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'prepare' \| 'start' \| 'pause' \| 'resume' \| 'stop' \| 'release' \| 'reset' | Yes | Event type. The following events are supported: 'prepare'\|'start'\| 'pause' \| 'resume' \|'stop'\|'release'\|'reset'<br>- 'prepare': triggered when the **prepare()** API is called and the audio recording parameters are set.<br>- 'start': triggered when the **start()** API is called and audio recording starts.<br>- 'pause': triggered when the **pause()** API is called and audio recording is paused.<br>- 'resume': triggered when the **resume()** API is called and audio recording is resumed.<br>- 'stop': triggered when the **stop()** API is called and audio recording stops.<br>- 'release': triggered when the **release()** API is called and the recording resources are released.<br>- 'reset': triggered when the **reset()** API is called and audio recording is reset. |
| callback | () =&gt; void | Yes | Callback invoked when the event is triggered. |

<a id="on-6"></a>
## on('prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset')

```TypeScript
on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void
```

Subscribes to the audio recording events.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** on(type:

<!--Device-AudioRecorder-on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void--><!--Device-AudioRecorder-on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void-End-->

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'prepare' \| 'start' \| 'pause' \| 'resume' \| 'stop' \| 'release' \| 'reset' | Yes | Event type. The following events are supported: 'prepare'\|'start'\| 'pause' \| 'resume' \|'stop'\|'release'\|'reset'<br>- 'prepare': triggered when the **prepare()** API is called and the audio recording parameters are set.<br>- 'start': triggered when the **start()** API is called and audio recording starts.<br>- 'pause': triggered when the **pause()** API is called and audio recording is paused.<br>- 'resume': triggered when the **resume()** API is called and audio recording is resumed.<br>- 'stop': triggered when the **stop()** API is called and audio recording stops.<br>- 'release': triggered when the **release()** API is called and the recording resources are released.<br>- 'reset': triggered when the **reset()** API is called and audio recording is reset. |
| callback | () =&gt; void | Yes | Callback invoked when the event is triggered. |

<a id="on-7"></a>
## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Subscribes to audio recording error events. After an error event is reported, you must handle the event and exit the recording.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** on(type:

<!--Device-AudioRecorder-on(type: 'error', callback: ErrorCallback): void--><!--Device-AudioRecorder-on(type: 'error', callback: ErrorCallback): void-End-->

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type, which is **'error'** in this case.<br>This event is triggered when an error occurs during audio recording. |
| callback | [ErrorCallback](../../apis-arkui/arkts-components/arkts-arkui-errorcallback-t-sys.md) | Yes | Callback invoked when the event is triggered. |

<a id="pause"></a>
## pause

```TypeScript
pause(): void
```

Pauses audio recording. This API can be called only after the **'start'** event is triggered.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [pause(callback:](arkts-media-media-avrecorder-i.md#pause-1)

<!--Device-AudioRecorder-pause(): void--><!--Device-AudioRecorder-pause(): void-End-->

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

<a id="prepare"></a>
## prepare

```TypeScript
prepare(config: AudioRecorderConfig): void
```

Prepares for recording.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [prepare(config:](arkts-media-media-avrecorder-i.md#prepare-1)

**Required permissions:** ohos.permission.MICROPHONE

<!--Device-AudioRecorder-prepare(config: AudioRecorderConfig): void--><!--Device-AudioRecorder-prepare(config: AudioRecorderConfig): void-End-->

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | [AudioRecorderConfig](arkts-media-media-audiorecorderconfig-i.md) | Yes | Audio recording parameters, including the audio output URI, encoding format, sample rate, audio channel count, and output format. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | permission denied.<br>**Applicable version:** 12 and later |

<a id="release"></a>
## release

```TypeScript
release(): void
```

Releases the audio recording resources.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [release(callback:](arkts-media-media-avrecorder-i.md#release-1)

<!--Device-AudioRecorder-release(): void--><!--Device-AudioRecorder-release(): void-End-->

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

<a id="reset"></a>
## reset

```TypeScript
reset(): void
```

Resets audio recording.

Before resetting audio recording, you must call **stop()** to stop recording. After audio recording is reset, you must call **prepare()** to set the recording configurations for another recording.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [reset(callback:](arkts-media-media-avrecorder-i.md#reset-1)

<!--Device-AudioRecorder-reset(): void--><!--Device-AudioRecorder-reset(): void-End-->

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

<a id="resume"></a>
## resume

```TypeScript
resume(): void
```

Resumes audio recording. This API can be called only after the **'pause'** event is triggered.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [resume(callback:](arkts-media-media-avrecorder-i.md#resume-1)

<!--Device-AudioRecorder-resume(): void--><!--Device-AudioRecorder-resume(): void-End-->

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

<a id="start"></a>
## start

```TypeScript
start(): void
```

Starts audio recording. This API can be called only after the **'prepare'** event is triggered.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [start(callback:](arkts-media-media-avrecorder-i.md#start-1)

<!--Device-AudioRecorder-start(): void--><!--Device-AudioRecorder-start(): void-End-->

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

<a id="stop"></a>
## stop

```TypeScript
stop(): void
```

Stops audio recording.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [stop(callback:](arkts-media-media-avrecorder-i.md#stop-1)

<!--Device-AudioRecorder-stop(): void--><!--Device-AudioRecorder-stop(): void-End-->

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

