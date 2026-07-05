# AudioPlayer

> **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用[AVPlayer](arkts-multimedia-media.md#media)替代。 音频播放管理类，用于管理和播放音频媒体。在调用AudioPlayer的方法前，需要先通过 [createAudioPlayer()](arkts-media-createaudioplayer-f.md#createAudioPlayer-1)构建一个AudioPlayer实例。

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

获取音频轨道信息。需在'dataLoad'事件成功触发后，才能调用。通过回调函数获取返回值。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.getTrackDescription](arkts-media-avplayer-i.md#getTrackDescription) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.getTrackDescription(callback:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;MediaDescription>> | Yes | 回调函数。获取音频轨道信息成功时，err为undefined，data为获取到的  MediaDescription数组，否则为错误对象。 |

## getTrackDescription

```TypeScript
getTrackDescription(): Promise<Array<MediaDescription>>
```

获取音频轨道信息。需在'dataLoad'事件成功触发后，才能调用。通过Promise获取返回值。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.getTrackDescription](arkts-media-avplayer-i.md#getTrackDescription)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.getTrackDescription()

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;MediaDescription>> | 音频轨道信息MediaDescription数组Promise返回值。 |

## on('bufferingUpdate')

```TypeScript
on(type: 'bufferingUpdate', callback: (infoType: BufferingInfoType, value: number) => void): void
```

开始订阅音频缓存更新事件。仅网络播放支持该订阅事件。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.on('bufferingUpdate')](arkts-media-avplayer-i.md#on) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.on(type:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'bufferingUpdate' | Yes | 音频缓存事件回调类型，支持的事件：'bufferingUpdate'。 |
| callback | (infoType: BufferingInfoType, value: number) => void | Yes | 音频缓存事件回调方法。  [BufferingInfoType](arkts-media-bufferinginfotype-e.md#BufferingInfoType)value值固定为0。 |

## on('play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange')

```TypeScript
on(type: 'play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange', callback: () => void): void
```

开始订阅音频播放事件。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.on('stateChange')](arkts-media-avplayer-i.md#on) > 替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.on(type:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'play' \| 'pause' \| 'stop' \| 'reset' \| 'dataLoad' \| 'finish' \| 'volumeChange' | Yes | 播放事件回调类型，支持的事件包括：'  play' \| 'pause' \| 'stop' \| 'reset' \| 'dataLoad' \| 'finish' \| 'volumeChange'。 - 'play'：完成  [play()](arkts-media-audioplayer-i.md#play)调用，音频开始播放，触发该事件。 - 'pause'：完成  [pause()](arkts-media-audioplayer-i.md#pause)调用，音频暂停播放，触发该事件。 - 'stop'：完成[stop()](arkts-media-audioplayer-i.md#stop)  调用，音频停止播放，触发该事件。 - 'reset'：完成[reset()](arkts-media-audioplayer-i.md#reset)调用，播放器重置，触发该事件。 - 'dataLoad'：完成音频数  据加载后触发该事件，即src属性设置完成后触发该事件。 - 'finish'：完成音频播放后触发该事件。 - 'volumeChange'：完成  [setVolume()](arkts-media-audioplayer-i.md#setVolume)调用，播放音量改变后触发该事件。 |
| callback | () => void | Yes | 播放事件回调方法。 |

## on('play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange')

```TypeScript
on(type: 'play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange', callback: () => void): void
```

开始订阅音频播放事件。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.on('stateChange')](arkts-media-avplayer-i.md#on) > 替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.on(type:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'play' \| 'pause' \| 'stop' \| 'reset' \| 'dataLoad' \| 'finish' \| 'volumeChange' | Yes | 播放事件回调类型，支持的事件包括：'  play' \| 'pause' \| 'stop' \| 'reset' \| 'dataLoad' \| 'finish' \| 'volumeChange'。 - 'play'：完成  [play()](arkts-media-audioplayer-i.md#play)调用，音频开始播放，触发该事件。 - 'pause'：完成  [pause()](arkts-media-audioplayer-i.md#pause)调用，音频暂停播放，触发该事件。 - 'stop'：完成[stop()](arkts-media-audioplayer-i.md#stop)  调用，音频停止播放，触发该事件。 - 'reset'：完成[reset()](arkts-media-audioplayer-i.md#reset)调用，播放器重置，触发该事件。 - 'dataLoad'：完成音频数  据加载后触发该事件，即src属性设置完成后触发该事件。 - 'finish'：完成音频播放后触发该事件。 - 'volumeChange'：完成  [setVolume()](arkts-media-audioplayer-i.md#setVolume)调用，播放音量改变后触发该事件。 |
| callback | () => void | Yes | 播放事件回调方法。 |

## on('play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange')

```TypeScript
on(type: 'play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange', callback: () => void): void
```

开始订阅音频播放事件。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.on('stateChange')](arkts-media-avplayer-i.md#on) > 替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.on(type:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'play' \| 'pause' \| 'stop' \| 'reset' \| 'dataLoad' \| 'finish' \| 'volumeChange' | Yes | 播放事件回调类型，支持的事件包括：'  play' \| 'pause' \| 'stop' \| 'reset' \| 'dataLoad' \| 'finish' \| 'volumeChange'。 - 'play'：完成  [play()](arkts-media-audioplayer-i.md#play)调用，音频开始播放，触发该事件。 - 'pause'：完成  [pause()](arkts-media-audioplayer-i.md#pause)调用，音频暂停播放，触发该事件。 - 'stop'：完成[stop()](arkts-media-audioplayer-i.md#stop)  调用，音频停止播放，触发该事件。 - 'reset'：完成[reset()](arkts-media-audioplayer-i.md#reset)调用，播放器重置，触发该事件。 - 'dataLoad'：完成音频数  据加载后触发该事件，即src属性设置完成后触发该事件。 - 'finish'：完成音频播放后触发该事件。 - 'volumeChange'：完成  [setVolume()](arkts-media-audioplayer-i.md#setVolume)调用，播放音量改变后触发该事件。 |
| callback | () => void | Yes | 播放事件回调方法。 |

## on('play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange')

```TypeScript
on(type: 'play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange', callback: () => void): void
```

开始订阅音频播放事件。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.on('stateChange')](arkts-media-avplayer-i.md#on) > 替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.on(type:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'play' \| 'pause' \| 'stop' \| 'reset' \| 'dataLoad' \| 'finish' \| 'volumeChange' | Yes | 播放事件回调类型，支持的事件包括：'  play' \| 'pause' \| 'stop' \| 'reset' \| 'dataLoad' \| 'finish' \| 'volumeChange'。 - 'play'：完成  [play()](arkts-media-audioplayer-i.md#play)调用，音频开始播放，触发该事件。 - 'pause'：完成  [pause()](arkts-media-audioplayer-i.md#pause)调用，音频暂停播放，触发该事件。 - 'stop'：完成[stop()](arkts-media-audioplayer-i.md#stop)  调用，音频停止播放，触发该事件。 - 'reset'：完成[reset()](arkts-media-audioplayer-i.md#reset)调用，播放器重置，触发该事件。 - 'dataLoad'：完成音频数  据加载后触发该事件，即src属性设置完成后触发该事件。 - 'finish'：完成音频播放后触发该事件。 - 'volumeChange'：完成  [setVolume()](arkts-media-audioplayer-i.md#setVolume)调用，播放音量改变后触发该事件。 |
| callback | () => void | Yes | 播放事件回调方法。 |

## on('play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange')

```TypeScript
on(type: 'play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange', callback: () => void): void
```

开始订阅音频播放事件。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.on('stateChange')](arkts-media-avplayer-i.md#on) > 替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.on(type:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'play' \| 'pause' \| 'stop' \| 'reset' \| 'dataLoad' \| 'finish' \| 'volumeChange' | Yes | 播放事件回调类型，支持的事件包括：'  play' \| 'pause' \| 'stop' \| 'reset' \| 'dataLoad' \| 'finish' \| 'volumeChange'。 - 'play'：完成  [play()](arkts-media-audioplayer-i.md#play)调用，音频开始播放，触发该事件。 - 'pause'：完成  [pause()](arkts-media-audioplayer-i.md#pause)调用，音频暂停播放，触发该事件。 - 'stop'：完成[stop()](arkts-media-audioplayer-i.md#stop)  调用，音频停止播放，触发该事件。 - 'reset'：完成[reset()](arkts-media-audioplayer-i.md#reset)调用，播放器重置，触发该事件。 - 'dataLoad'：完成音频数  据加载后触发该事件，即src属性设置完成后触发该事件。 - 'finish'：完成音频播放后触发该事件。 - 'volumeChange'：完成  [setVolume()](arkts-media-audioplayer-i.md#setVolume)调用，播放音量改变后触发该事件。 |
| callback | () => void | Yes | 播放事件回调方法。 |

## on('play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange')

```TypeScript
on(type: 'play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange', callback: () => void): void
```

开始订阅音频播放事件。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.on('stateChange')](arkts-media-avplayer-i.md#on) > 替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.on(type:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'play' \| 'pause' \| 'stop' \| 'reset' \| 'dataLoad' \| 'finish' \| 'volumeChange' | Yes | 播放事件回调类型，支持的事件包括：'  play' \| 'pause' \| 'stop' \| 'reset' \| 'dataLoad' \| 'finish' \| 'volumeChange'。 - 'play'：完成  [play()](arkts-media-audioplayer-i.md#play)调用，音频开始播放，触发该事件。 - 'pause'：完成  [pause()](arkts-media-audioplayer-i.md#pause)调用，音频暂停播放，触发该事件。 - 'stop'：完成[stop()](arkts-media-audioplayer-i.md#stop)  调用，音频停止播放，触发该事件。 - 'reset'：完成[reset()](arkts-media-audioplayer-i.md#reset)调用，播放器重置，触发该事件。 - 'dataLoad'：完成音频数  据加载后触发该事件，即src属性设置完成后触发该事件。 - 'finish'：完成音频播放后触发该事件。 - 'volumeChange'：完成  [setVolume()](arkts-media-audioplayer-i.md#setVolume)调用，播放音量改变后触发该事件。 |
| callback | () => void | Yes | 播放事件回调方法。 |

## on('play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange')

```TypeScript
on(type: 'play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange', callback: () => void): void
```

开始订阅音频播放事件。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.on('stateChange')](arkts-media-avplayer-i.md#on) > 替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.on(type:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'play' \| 'pause' \| 'stop' \| 'reset' \| 'dataLoad' \| 'finish' \| 'volumeChange' | Yes | 播放事件回调类型，支持的事件包括：'  play' \| 'pause' \| 'stop' \| 'reset' \| 'dataLoad' \| 'finish' \| 'volumeChange'。 - 'play'：完成  [play()](arkts-media-audioplayer-i.md#play)调用，音频开始播放，触发该事件。 - 'pause'：完成  [pause()](arkts-media-audioplayer-i.md#pause)调用，音频暂停播放，触发该事件。 - 'stop'：完成[stop()](arkts-media-audioplayer-i.md#stop)  调用，音频停止播放，触发该事件。 - 'reset'：完成[reset()](arkts-media-audioplayer-i.md#reset)调用，播放器重置，触发该事件。 - 'dataLoad'：完成音频数  据加载后触发该事件，即src属性设置完成后触发该事件。 - 'finish'：完成音频播放后触发该事件。 - 'volumeChange'：完成  [setVolume()](arkts-media-audioplayer-i.md#setVolume)调用，播放音量改变后触发该事件。 |
| callback | () => void | Yes | 播放事件回调方法。 |

## on('timeUpdate')

```TypeScript
on(type: 'timeUpdate', callback: Callback<number>): void
```

开始订阅音频播放时间更新事件。处于播放状态时，每隔1s上报一次该事件。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.on('timeUpdate')](arkts-media-avplayer-i.md#on) > 替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.on(type:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'timeUpdate' | Yes | 播放事件回调类型，支持的事件包括：'timeUpdate'。 - 'timeUpdate'：音频播放时间戳更新，开始播放后自动触发该事件。 |
| callback | Callback&lt;number> | Yes | 播放事件回调方法。回调方法入参为更新后的时间戳。 |

## on('audioInterrupt')

```TypeScript
on(type: 'audioInterrupt', callback: (info: audio.InterruptEvent) => void): void
```

监听音频焦点变化事件，参考[audio.InterruptEvent](../../apis-audio-kit/arkts-apis/arkts-audio-interruptevent-i.md#InterruptEvent)。 > **说明：** > > 从API version 9开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.on('audioInterrupt')](arkts-media-avplayer-i.md#on) > 替代。

**Since:** 9

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.on(type:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioInterrupt' | Yes | 音频焦点变化事件回调类型，支持的事件：'audioInterrupt'。 |
| callback | (info: audio.InterruptEvent) => void | Yes | 音频焦点变化事件回调方法。 |

## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

开始订阅音频播放错误事件，当上报error错误事件后，用户需处理error事件，退出播放操作。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.on('error')](arkts-media-avplayer-i.md#on)替 > 代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.on(type:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | 播放错误事件回调类型，支持的事件包括：'error'。 - 'error'：音频播放中发生错误，触发该事件。 |
| callback | ErrorCallback | Yes | 播放错误事件回调方法。 |

## pause

```TypeScript
pause(): void
```

暂停播放音频资源。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.pause](arkts-media-avplayer-i.md#pause)替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.pause(callback:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

## play

```TypeScript
play(): void
```

开始播放音频资源，需在'dataLoad'事件成功触发后，才能调用。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.play](arkts-media-avplayer-i.md#play)替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.play(callback:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

## release

```TypeScript
release(): void
```

释放音频资源。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.release](arkts-media-avplayer-i.md#release)替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.release(callback:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

## reset

```TypeScript
reset(): void
```

重置播放音频资源。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.reset](arkts-media-avplayer-i.md#reset)替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.reset(callback:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

## seek

```TypeScript
seek(timeMs: number): void
```

跳转到指定播放位置。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用[AVPlayer.seek](arkts-media-avplayer-i.md#seek)替代 > 。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.seek

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| timeMs | number | Yes | 指定的跳转时间节点，单位毫秒（ms），取值范围[0, duration]。 |

## setVolume

```TypeScript
setVolume(vol: number): void
```

设置音量。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.setVolume](arkts-media-avplayer-i.md#setVolume)替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.setVolume

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| vol | number | Yes | 指定的相对音量大小，取值范围为[0.00-1.00]，1表示最大音量，即100%。 |

## stop

```TypeScript
stop(): void
```

停止播放音频资源。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.stop](arkts-media-avplayer-i.md#stop)替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.stop(callback:

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

## duration

```TypeScript
readonly duration: number
```

音频时长，单位为毫秒（ms）。

**Type:** number

**Since:** 6

**Deprecated since:** 9

**Substitute:** ohos.multimedia.media/media.AVPlayer#duration

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

## currentTime

```TypeScript
readonly currentTime: number
```

音频的当前播放位置，单位为毫秒（ms）。

**Type:** number

**Since:** 6

**Deprecated since:** 9

**Substitute:** ohos.multimedia.media/media.AVPlayer#currentTime

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

## src

```TypeScript
src: string
```

音频媒体URI，支持当前主流的音频格式(m4a、aac、mp3、ogg、wav、amr)。 **支持路径示例**： 1. fd类型播放：fd://xx ![](docroot://reference/apis-media-kit/figures/zh-cn_image_url.png) 2. http网络播放: http://xx 3. https网络播放: https://xx 4. hls网络播放路径：http://xx或者https://xx ohos.permission.READ_MEDIA 或 ohos.permission.INTERNET。

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

音频循环播放属性，设置为'true'表示循环播放。

**Type:** boolean

**Since:** 6

**Deprecated since:** 9

**Substitute:** ohos.multimedia.media/media.AVPlayer#loop

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

## audioInterruptMode

```TypeScript
audioInterruptMode?: audio.InterruptMode
```

音频焦点模型。

**Type:** audio.InterruptMode

**Since:** 9

**Deprecated since:** 9

**Substitute:** ohos.multimedia.media/media.AVPlayer#audioInterruptMode

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

## fdSrc

```TypeScript
fdSrc: AVFileDescriptor
```

音频媒体文件描述，使用场景：应用中的音频资源被连续存储在同一个文件中。 **使用示例**： 假设一个连续存储的音乐文件: 音乐1(地址偏移:0，字节长度:100) 音乐2(地址偏移:101，字节长度:50) 音乐3(地址偏移:151，字节长度:150) 1. 播放音乐1：AVFileDescriptor { fd = 资源句柄; offset = 0; length = 100; } 2. 播放音乐2：AVFileDescriptor { fd = 资源句柄; offset = 101; length = 50; } 3. 播放音乐3：AVFileDescriptor { fd = 资源句柄; offset = 151; length = 150; } 假设是一个独立的音乐文件: 请使用src=fd://xx

**Type:** AVFileDescriptor

**Since:** 9

**Deprecated since:** 9

**Substitute:** ohos.multimedia.media/media.AVPlayer#fdSrc

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

## state

```TypeScript
readonly state: AudioState
```

可以查询音频播放的状态，该状态不可作为调用play/pause/stop等状态切换的触发条件。

**Type:** AudioState

**Since:** 6

**Deprecated since:** 9

**Substitute:** ohos.multimedia.media/media.AVPlayer#state

**System capability:** SystemCapability.Multimedia.Media.AudioPlayer

