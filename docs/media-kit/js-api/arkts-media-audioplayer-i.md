# AudioPlayer

AudioPlayer is a class for audio playback management. It provides APIs to manage and play audio. Before calling any API in AudioPlayer, you must use [createAudioPlayer()](arkts-media-createaudioplayer-f.md#createAudioPlayer-1) to create an AudioPlayer instance.

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

## Modules to Import

```TypeScript
import { media } from '@kit.MediaKit';
```

## getTrackDescription

```TypeScript
getTrackDescription(callback: AsyncCallback<Array<MediaDescription>>): void
```

Obtains the audio track information. It can be called only after the **'dataLoad'** event is triggered. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.getTrackDescription(callback:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;MediaDescription>> | Yes | Callback used to return the result. If the operation  is successful, err is undefined and data is the MediaDescription array obtained; otherwise,  err is an error object. |

## getTrackDescription

```TypeScript
getTrackDescription(): Promise<Array<MediaDescription>>
```

Obtains the audio track information. It can be called only after the **'dataLoad'** event is triggered. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.getTrackDescription()

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;MediaDescription>> | Promise used to return a MediaDescription array, which records  the audio track information. |

## on('bufferingUpdate')

```TypeScript
on(type: 'bufferingUpdate', callback: (infoType: BufferingInfoType, value: number) => void): void
```

Subscribes to the audio buffering update event. This API works only under online playback.

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.on(type:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'bufferingUpdate' | Yes | Event type, which is 'bufferingUpdate' in this case. |
| callback | (infoType: BufferingInfoType, value: number) => void | Yes | Callback invoked when the event is triggered. The value of  [BufferingInfoType](arkts-media-bufferinginfotype-e.md#BufferingInfoType) is fixed at 0. |

## on('play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange')

```TypeScript
on(type: 'play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange', callback: () => void): void
```

Subscribes to the audio playback events.

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.on(type:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'play' \| 'pause' \| 'stop' \| 'reset' \| 'dataLoad' \| 'finish' \| 'volumeChange' | Yes | Event type. The  following events are supported: - 'play': triggered when the [play()]media.AudioPlayer.play API is  called and audio playback starts. - 'pause': triggered when the [pause()]media.AudioPlayer.pause  API is called and audio playback is paused. - 'stop': triggered when the  [stop()]media.AudioPlayer.stop API is called and audio playback stops. - 'reset': triggered when  the [reset()]media.AudioPlayer.reset API is called and audio playback is reset. - 'dataLoad':  triggered when the audio data is loaded, that is, when the src property is configured. - 'finish':  triggered when the audio playback is finished. - 'volumeChange': triggered when the  [setVolume()]media.AudioPlayer.setVolume API is called and the playback volume is changed. |
| callback | () => void | Yes | Callback invoked when the event is triggered. |

## on('play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange')

```TypeScript
on(type: 'play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange', callback: () => void): void
```

Subscribes to the audio playback events.

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.on(type:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'play' \| 'pause' \| 'stop' \| 'reset' \| 'dataLoad' \| 'finish' \| 'volumeChange' | Yes | Event type. The  following events are supported: - 'play': triggered when the [play()]media.AudioPlayer.play API is  called and audio playback starts. - 'pause': triggered when the [pause()]media.AudioPlayer.pause  API is called and audio playback is paused. - 'stop': triggered when the  [stop()]media.AudioPlayer.stop API is called and audio playback stops. - 'reset': triggered when  the [reset()]media.AudioPlayer.reset API is called and audio playback is reset. - 'dataLoad':  triggered when the audio data is loaded, that is, when the src property is configured. - 'finish':  triggered when the audio playback is finished. - 'volumeChange': triggered when the  [setVolume()]media.AudioPlayer.setVolume API is called and the playback volume is changed. |
| callback | () => void | Yes | Callback invoked when the event is triggered. |

## on('play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange')

```TypeScript
on(type: 'play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange', callback: () => void): void
```

Subscribes to the audio playback events.

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.on(type:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'play' \| 'pause' \| 'stop' \| 'reset' \| 'dataLoad' \| 'finish' \| 'volumeChange' | Yes | Event type. The  following events are supported: - 'play': triggered when the [play()]media.AudioPlayer.play API is  called and audio playback starts. - 'pause': triggered when the [pause()]media.AudioPlayer.pause  API is called and audio playback is paused. - 'stop': triggered when the  [stop()]media.AudioPlayer.stop API is called and audio playback stops. - 'reset': triggered when  the [reset()]media.AudioPlayer.reset API is called and audio playback is reset. - 'dataLoad':  triggered when the audio data is loaded, that is, when the src property is configured. - 'finish':  triggered when the audio playback is finished. - 'volumeChange': triggered when the  [setVolume()]media.AudioPlayer.setVolume API is called and the playback volume is changed. |
| callback | () => void | Yes | Callback invoked when the event is triggered. |

## on('play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange')

```TypeScript
on(type: 'play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange', callback: () => void): void
```

Subscribes to the audio playback events.

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.on(type:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'play' \| 'pause' \| 'stop' \| 'reset' \| 'dataLoad' \| 'finish' \| 'volumeChange' | Yes | Event type. The  following events are supported: - 'play': triggered when the [play()]media.AudioPlayer.play API is  called and audio playback starts. - 'pause': triggered when the [pause()]media.AudioPlayer.pause  API is called and audio playback is paused. - 'stop': triggered when the  [stop()]media.AudioPlayer.stop API is called and audio playback stops. - 'reset': triggered when  the [reset()]media.AudioPlayer.reset API is called and audio playback is reset. - 'dataLoad':  triggered when the audio data is loaded, that is, when the src property is configured. - 'finish':  triggered when the audio playback is finished. - 'volumeChange': triggered when the  [setVolume()]media.AudioPlayer.setVolume API is called and the playback volume is changed. |
| callback | () => void | Yes | Callback invoked when the event is triggered. |

## on('play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange')

```TypeScript
on(type: 'play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange', callback: () => void): void
```

Subscribes to the audio playback events.

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.on(type:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'play' \| 'pause' \| 'stop' \| 'reset' \| 'dataLoad' \| 'finish' \| 'volumeChange' | Yes | Event type. The  following events are supported: - 'play': triggered when the [play()]media.AudioPlayer.play API is  called and audio playback starts. - 'pause': triggered when the [pause()]media.AudioPlayer.pause  API is called and audio playback is paused. - 'stop': triggered when the  [stop()]media.AudioPlayer.stop API is called and audio playback stops. - 'reset': triggered when  the [reset()]media.AudioPlayer.reset API is called and audio playback is reset. - 'dataLoad':  triggered when the audio data is loaded, that is, when the src property is configured. - 'finish':  triggered when the audio playback is finished. - 'volumeChange': triggered when the  [setVolume()]media.AudioPlayer.setVolume API is called and the playback volume is changed. |
| callback | () => void | Yes | Callback invoked when the event is triggered. |

## on('play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange')

```TypeScript
on(type: 'play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange', callback: () => void): void
```

Subscribes to the audio playback events.

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.on(type:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'play' \| 'pause' \| 'stop' \| 'reset' \| 'dataLoad' \| 'finish' \| 'volumeChange' | Yes | Event type. The  following events are supported: - 'play': triggered when the [play()]media.AudioPlayer.play API is  called and audio playback starts. - 'pause': triggered when the [pause()]media.AudioPlayer.pause  API is called and audio playback is paused. - 'stop': triggered when the  [stop()]media.AudioPlayer.stop API is called and audio playback stops. - 'reset': triggered when  the [reset()]media.AudioPlayer.reset API is called and audio playback is reset. - 'dataLoad':  triggered when the audio data is loaded, that is, when the src property is configured. - 'finish':  triggered when the audio playback is finished. - 'volumeChange': triggered when the  [setVolume()]media.AudioPlayer.setVolume API is called and the playback volume is changed. |
| callback | () => void | Yes | Callback invoked when the event is triggered. |

## on('play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange')

```TypeScript
on(type: 'play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange', callback: () => void): void
```

Subscribes to the audio playback events.

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.on(type:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'play' \| 'pause' \| 'stop' \| 'reset' \| 'dataLoad' \| 'finish' \| 'volumeChange' | Yes | Event type. The  following events are supported: - 'play': triggered when the [play()]media.AudioPlayer.play API is  called and audio playback starts. - 'pause': triggered when the [pause()]media.AudioPlayer.pause  API is called and audio playback is paused. - 'stop': triggered when the  [stop()]media.AudioPlayer.stop API is called and audio playback stops. - 'reset': triggered when  the [reset()]media.AudioPlayer.reset API is called and audio playback is reset. - 'dataLoad':  triggered when the audio data is loaded, that is, when the src property is configured. - 'finish':  triggered when the audio playback is finished. - 'volumeChange': triggered when the  [setVolume()]media.AudioPlayer.setVolume API is called and the playback volume is changed. |
| callback | () => void | Yes | Callback invoked when the event is triggered. |

## on('timeUpdate')

```TypeScript
on(type: 'timeUpdate', callback: Callback<number>): void
```

Subscribes to the **'timeUpdate'** event. This event is reported every second when the audio playback is in progress.

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.on(type:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'timeUpdate' | Yes | Event type, which is 'timeUpdate' in this case. The 'timeUpdate' event  is triggered when the audio playback starts after an audio playback timestamp update. |
| callback | Callback&lt;number> | Yes | Callback invoked when the event is triggered. The input parameter is the  updated timestamp. |

## on('audioInterrupt')

```TypeScript
on(type: 'audioInterrupt', callback: (info: audio.InterruptEvent) => void): void
```

Subscribes to the audio interruption event. For details, see [audio.InterruptEvent](../../apis-audio-kit/arkts-apis/arkts-audio-interruptevent-i.md#InterruptEvent).

**Since:** 9

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.on(type:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioInterrupt' | Yes | Event type, which is 'audioInterrupt' in this case. |
| callback | (info: audio.InterruptEvent) => void | Yes | Callback invoked when the event is triggered. |

## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Subscribes to audio playback error events. After an error event is reported, you must handle the event and exit the playback.

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.on(type:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type, which is 'error' in this case. This event is triggered when an error  occurs during audio playback. |
| callback | ErrorCallback | Yes | Callback invoked when the event is triggered. |

## pause

```TypeScript
pause(): void
```

Pauses audio playback.

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.pause(callback:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

## play

```TypeScript
play(): void
```

Starts to play an audio asset. This API can be called only after the **'dataLoad'** event is triggered.

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.play(callback:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

## release

```TypeScript
release(): void
```

Releases the audio playback resources.

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.release(callback:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

## reset

```TypeScript
reset(): void
```

Resets the audio asset to be played.

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.reset(callback:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

## seek

```TypeScript
seek(timeMs: number): void
```

Seeks to the specified playback position.

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.seek

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| timeMs | number | Yes | Position to seek to, in ms. The value range is [0, duration]. |

## setVolume

```TypeScript
setVolume(vol: number): void
```

Sets the volume.

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.setVolume

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| vol | number | Yes | Relative volume. The value ranges from 0.00 to 1.00. The value 1.00 indicates the  maximum volume (100%). |

## stop

```TypeScript
stop(): void
```

Stops audio playback.

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.stop(callback:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

## duration

```TypeScript
readonly duration: number
```

Audio duration, in ms.

**Type:** number

**Since:** 6

**Deprecated since:** 9

**Substitute:** ohos.multimedia.media/media.AVPlayer#duration

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

## currentTime

```TypeScript
readonly currentTime: number
```

Current audio playback position, in ms.

**Type:** number

**Since:** 6

**Deprecated since:** 9

**Substitute:** ohos.multimedia.media/media.AVPlayer#currentTime

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

## src

```TypeScript
src: string
```

Audio file URI. The mainstream audio formats (M4A, AAC, MP3, OGG, WAV, and AMR) are supported. **Example of supported URLs**: 1. FD: fd://xx ![](docroot://reference/apis-media-kit/figures/en-us_image_url.png) 2. HTTP: http://xx 3. HTTPS: https://xx 4. HLS: http://xx or https://xx ohos.permission.READ_MEDIA or ohos.permission.INTERNET

**Type:** string

**Since:** 6

**Deprecated since:** 9

**Substitute:** ohos.multimedia.media/media.AVPlayer#url

**Required permissions:** 

 ohos.permission.READ_MEDIA or ohos.permission.INTERNET

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

## loop

```TypeScript
loop: boolean
```

Whether to loop audio playback. **true** to loop, **false** otherwise.

**Type:** boolean

**Since:** 6

**Deprecated since:** 9

**Substitute:** ohos.multimedia.media/media.AVPlayer#loop

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

## audioInterruptMode

```TypeScript
audioInterruptMode?: audio.InterruptMode
```

Audio interruption mode.

**Type:** audio.InterruptMode

**Since:** 9

**Deprecated since:** 9

**Substitute:** ohos.multimedia.media/media.AVPlayer#audioInterruptMode

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

## fdSrc

```TypeScript
fdSrc: AVFileDescriptor
```

Description of the audio file. This property is required when audio assets of an application are continuously stored in a file. Assume that a music file that stores continuous music assets consists of the following: Music 1 (address offset: 0, byte length: 100) Music 2 (address offset: 101; byte length: 50) Music 3 (address offset: 151, byte length: 150) 1. To play music 1: AVFileDescriptor { fd = resource handle; offset = 0; length = 100; } 2. To play music 2: AVFileDescriptor { fd = resource handle; offset = 101; length = 50; } 3. To play music 3: AVFileDescriptor { fd = resource handle; offset = 151; length = 150; } To play an independent music file, use **src=fd://xx**.

**Type:** AVFileDescriptor

**Since:** 9

**Deprecated since:** 9

**Substitute:** ohos.multimedia.media/media.AVPlayer#fdSrc

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

## state

```TypeScript
readonly state: AudioState
```

Audio playback state. This state cannot be used as the condition for triggering the call of **play()**, **pause()**, or **stop()**.

**Type:** AudioState

**Since:** 6

**Deprecated since:** 9

**Substitute:** ohos.multimedia.media/media.AVPlayer#state

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

