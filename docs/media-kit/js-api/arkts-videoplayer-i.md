# VideoPlayer

视频播放管理类，用于管理和播放视频媒体。在调用VideoPlayer的方法前，需要先通过 [createVideoPlayer()](arkts-media-createvideoplayer-f.md#createVideoPlayer-1)构建 一个VideoPlayer实例。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用[AVPlayer](arkts-multimedia-media.md#media)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

## Modules to Import

```TypeScript
import { media } from '@kit.MediaKit';
```

## getTrackDescription

```TypeScript
getTrackDescription(callback: AsyncCallback<Array<MediaDescription>>): void
```

获取视频轨道信息。通过回调函数获取返回值。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.getTrackDescription](arkts-media-avplayer-i.md#getTrackDescription) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.getTrackDescription(callback:

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;MediaDescription>> | Yes | 回调函数。获取视频轨道信息成功时，err为undefined，data为获取到的视频轨道信息  MediaDescription数组，否则为错误对象。 |

## getTrackDescription

```TypeScript
getTrackDescription(): Promise<Array<MediaDescription>>
```

获取视频轨道信息。通过Promise获取返回值。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.getTrackDescription](arkts-media-avplayer-i.md#getTrackDescription)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.getTrackDescription()

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;MediaDescription>> | Promise对象，返回获取的视频轨道信息MediaDescription数组。 |

## on('playbackCompleted')

```TypeScript
on(type: 'playbackCompleted', callback: Callback<void>): void
```

开始监听视频播放完成事件。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.on('stateChange')](arkts-media-avplayer-i.md#on) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.on(type:

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playbackCompleted' | Yes | 视频播放完成事件回调类型，支持的事件：'playbackCompleted'。 |
| callback | Callback&lt;void> | Yes | 视频播放完成事件回调方法。 |

## on('bufferingUpdate')

```TypeScript
on(type: 'bufferingUpdate', callback: (infoType: BufferingInfoType, value: number) => void): void
```

开始监听视频缓存更新事件。仅网络播放支持该订阅事件。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.on('bufferingUpdate')](arkts-media-avplayer-i.md#on) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.on(type:

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'bufferingUpdate' | Yes | 视频缓存事件回调类型，支持的事件：'bufferingUpdate'。 |
| callback | (infoType: BufferingInfoType, value: number) => void | Yes | 视频缓存事件回调方法。  [BufferingInfoType](arkts-media-bufferinginfotype-e.md#BufferingInfoType)value值固定为0。 |

## on('startRenderFrame')

```TypeScript
on(type: 'startRenderFrame', callback: Callback<void>): void
```

开始监听视频播放首帧送显上报事件。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.on('startRenderFrame')](arkts-media-avplayer-i.md#on) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.on(type:

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'startRenderFrame' | Yes | 视频播放首帧送显上报事件回调类型，支持的事件：'startRenderFrame'。 |
| callback | Callback&lt;void> | Yes | 视频播放首帧送显上报事件回调方法。 |

## on('videoSizeChanged')

```TypeScript
on(type: 'videoSizeChanged', callback: (width: number, height: number) => void): void
```

开始监听视频播放宽高变化事件。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.on('videoSizeChange')](arkts-media-avplayer-i.md#on) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.on(type:

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'videoSizeChanged' | Yes | 视频播放宽高变化事件回调类型，支持的事件：'videoSizeChanged'。 |
| callback | (width: number, height: number) => void | Yes | 视频播放宽高变化事件回调方法，width表示宽，height表示高。 |

## on('audioInterrupt')

```TypeScript
on(type: 'audioInterrupt', callback: (info: audio.InterruptEvent) => void): void
```

监听音频焦点变化事件，参考[audio.InterruptEvent](../../apis-audio-kit/arkts-apis/arkts-audio-interruptevent-i.md#InterruptEvent)。 > **说明：** > > 从API version 9开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.on('audioInterrupt')](arkts-media-avplayer-i.md#on) > 替代。

**Since:** 9

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.on(type:

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioInterrupt' | Yes | 音频焦点变化事件回调类型，支持的事件：'audioInterrupt'。 |
| callback | (info: audio.InterruptEvent) => void | Yes | 音频焦点变化事件回调方法。 |

## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

开始监听视频播放错误事件，当上报error错误事件后，用户需处理error事件，退出播放操作。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.on('error')](arkts-media-avplayer-i.md#on)替 > 代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.on(type:

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | 播放错误事件回调类型，支持的事件包括：'error'。 - 'error'：视频播放中发生错误，触发该事件。 |
| callback | ErrorCallback | Yes | 播放错误事件回调方法。 |

## pause

```TypeScript
pause(callback: AsyncCallback<void>): void
```

通过回调方式暂停播放视频。通过回调函数获取返回值。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.pause](arkts-media-avplayer-i.md#pause)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.pause(callback:

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当暂停播放视频成功，err为undefined，否则为错误对象。 |

## pause

```TypeScript
pause(): Promise<void>
```

暂停播放视频。通过Promise获取返回值。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用[AVPlayer.pause](arkts-media-avplayer-i.md#pause) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.pause()

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 暂停播放视频的Promise返回值。 |

## play

```TypeScript
play(callback: AsyncCallback<void>): void
```

开始播放视频。通过回调函数获取返回值。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.play](arkts-media-avplayer-i.md#play)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.play(callback:

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当开始播放视频成功，err为undefined，否则为错误对象。 |

## play

```TypeScript
play(): Promise<void>
```

开始播放视频。通过Promise获取返回值。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用[AVPlayer.play](arkts-media-avplayer-i.md#play)替代 > 。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.play()

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 开始播放视频的Promise返回值。 |

## prepare

```TypeScript
prepare(callback: AsyncCallback<void>): void
```

准备播放视频。通过回调函数获取返回值。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.prepare](arkts-media-avplayer-i.md#prepare)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.prepare(callback:

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当准备播放视频成功，err为undefined，否则为错误对象。 |

## prepare

```TypeScript
prepare(): Promise<void>
```

准备播放视频。通过Promise获取返回值。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.prepare](arkts-media-avplayer-i.md#prepare)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.prepare()

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 准备播放视频的Promise返回值。 |

## release

```TypeScript
release(callback: AsyncCallback<void>): void
```

释放视频资源。通过回调函数获取返回值。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.release](arkts-media-avplayer-i.md#release)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.release(callback:

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当释放视频资源成功，err为undefined，否则为错误对象。 |

## release

```TypeScript
release(): Promise<void>
```

释放视频资源。通过Promise获取返回值。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.release](arkts-media-avplayer-i.md#release)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.release()

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 释放视频资源的Promise返回值。 |

## reset

```TypeScript
reset(callback: AsyncCallback<void>): void
```

重置播放视频。通过回调函数获取返回值。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.reset](arkts-media-avplayer-i.md#reset)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.reset(callback:

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当重置播放视频成功，err为undefined，否则为错误对象。 |

## reset

```TypeScript
reset(): Promise<void>
```

重置播放视频。通过Promise获取返回值。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用[AVPlayer.reset](arkts-media-avplayer-i.md#reset) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.reset()

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

## seek

```TypeScript
seek(timeMs: number, callback: AsyncCallback<number>): void
```

跳转到指定播放位置，默认跳转到指定时间点的上一个关键帧。通过回调函数获取返回值。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用[AVPlayer.seek](arkts-media-avplayer-i.md#seek)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.seek

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| timeMs | number | Yes | 指定的跳转时间节点，单位毫秒（ms），取值范围为[0, duration]。 |
| callback | AsyncCallback&lt;number> | Yes | 回调函数。跳转到指定播放位置成功时，err为undefined，data为获取到的跳转到的播放位置，否则为错误对象。 |

## seek

```TypeScript
seek(timeMs: number, mode: SeekMode, callback: AsyncCallback<number>): void
```

跳转到指定播放位置。通过回调函数获取返回值。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用[AVPlayer.seek](arkts-media-avplayer-i.md#seek)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.seek

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| timeMs | number | Yes | 指定的跳转时间节点，单位毫秒（ms），取值范围为[0, duration]。 |
| mode | SeekMode | Yes | 跳转模式。 |
| callback | AsyncCallback&lt;number> | Yes | 回调函数。跳转到指定播放位置成功时，err为undefined，data为获取到的跳转到的播放位置，否则为错误对象。 |

## seek

```TypeScript
seek(timeMs: number, mode?: SeekMode): Promise<number>
```

跳转到指定播放位置，如果没有设置mode则跳转到指定时间点的上一个关键帧。通过Promise获取返回值。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用[AVPlayer.seek](arkts-media-avplayer-i.md#seek)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.seek

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| timeMs | number | Yes | 指定的跳转时间节点，单位毫秒（ms），取值范围为[0, duration]。 |
| mode | SeekMode | No | 基于视频I帧的跳转模式，默认为SEEK_PREV_SYNC模式。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | 跳转到指定播放位置的Promise返回值，单位ms。 |

## setDisplaySurface

```TypeScript
setDisplaySurface(surfaceId: string, callback: AsyncCallback<void>): void
```

设置SurfaceId。通过回调函数获取返回值。 > **说明：** > > - SetDisplaySurface需要在设置url和Prepare之间，无音频的视频流必须设置Surface否则Prepare失败。 > > - 从API version 8开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.surfaceId](docroot://reference/apis-media-kit/arkts-apis-media-AVPlayer.md#属性)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** null

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| surfaceId | string | Yes | 指定SurfaceId，应从XComponent组件获取，获取方式请参考  [XComponent]./@internal/component/ets/xcomponent。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当设置SurfaceId成功，err为undefined，否则为错误对象。 |

## setDisplaySurface

```TypeScript
setDisplaySurface(surfaceId: string): Promise<void>
```

设置SurfaceId。通过Promise获取返回值。 > **说明：** > > - SetDisplaySurface需要在设置url和Prepare之间，无音频的视频流必须设置Surface否则Prepare失败。 > > - 从API version 8开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.surfaceId](docroot://reference/apis-media-kit/arkts-apis-media-AVPlayer.md#属性)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** null

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| surfaceId | string | Yes | 指定SurfaceId，应从XComponent组件获取，获取方式请参考  [XComponent]./@internal/component/ets/xcomponent。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 设置SurfaceId的Promise返回值。 |

## setSpeed

```TypeScript
setSpeed(speed: number, callback: AsyncCallback<number>): void
```

设置播放速度。通过回调函数获取返回值。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.setSpeed](arkts-media-avplayer-i.md#setSpeed)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.setSpeed

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| speed | number | Yes | 指定播放视频速度，具体见[PlaybackSpeed](arkts-media-playbackspeed-e.md#PlaybackSpeed)。 |
| callback | AsyncCallback&lt;number> | Yes | 回调函数。设置播放速度成功时，err为undefined，data为设置的播放速度，否则为错误对象。 |

## setSpeed

```TypeScript
setSpeed(speed: number): Promise<number>
```

设置播放速度。通过Promise获取返回值。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.setSpeed](arkts-media-avplayer-i.md#setSpeed)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.setSpeed

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| speed | number | Yes | 指定播放视频速度，具体见[PlaybackSpeed](arkts-media-playbackspeed-e.md#PlaybackSpeed)。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | Promise对象，返回设置的播放速度，具体见  [PlaybackSpeed](arkts-media-playbackspeed-e.md#PlaybackSpeed)。 |

## setVolume

```TypeScript
setVolume(vol: number, callback: AsyncCallback<void>): void
```

设置音量。通过回调函数获取返回值。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.setVolume](arkts-media-avplayer-i.md#setVolume)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.setVolume

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| vol | number | Yes | 指定的相对音量大小，取值范围为[0.00-1.00]，1表示最大音量，即100%。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当设置音量成功，err为undefined，否则为错误对象。 |

## setVolume

```TypeScript
setVolume(vol: number): Promise<void>
```

设置音量。通过Promise获取返回值。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.setVolume](arkts-media-avplayer-i.md#setVolume)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.setVolume

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| vol | number | Yes | 指定的相对音量大小，取值范围为[0.00-1.00]，1表示最大音量，即100%。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 设置音量的Promise返回值。 |

## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

通过回调方式停止播放视频。通过回调函数获取返回值。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [AVPlayer.stop](arkts-media-avplayer-i.md#stop)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.stop(callback:

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当停止播放视频成功，err为undefined，否则为错误对象。 |

## stop

```TypeScript
stop(): Promise<void>
```

停止播放视频。通过Promise获取返回值。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用[AVPlayer.stop](arkts-media-avplayer-i.md#stop)替代 > 。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.multimedia.media:media.AVPlayer.stop()

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 停止播放视频的Promise返回值。 |

## duration

```TypeScript
readonly duration: number
```

视频时长，单位为毫秒（ms），返回-1表示直播模式。

**Type:** number

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.multimedia.media/media.AVPlayer#duration

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

## currentTime

```TypeScript
readonly currentTime: number
```

视频的当前播放位置，单位为毫秒（ms）。

**Type:** number

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.multimedia.media/media.AVPlayer#currentTime

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

## loop

```TypeScript
loop: boolean
```

视频循环播放属性，设置为'true'表示循环播放。

**Type:** boolean

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.multimedia.media/media.AVPlayer#loop

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

## audioInterruptMode

```TypeScript
audioInterruptMode?: audio.InterruptMode
```

音频焦点模式。

**Type:** audio.InterruptMode

**Since:** 9

**Deprecated since:** 9

**Substitute:** ohos.multimedia.media/media.AVPlayer#audioInterruptMode

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

## width

```TypeScript
readonly width: number
```

视频宽，单位为像素（px）。

**Type:** number

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.multimedia.media/media.AVPlayer#width

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

## videoScaleType

```TypeScript
videoScaleType?: VideoScaleType
```

视频缩放模式。默认值为VIDEO_SCALE_TYPE_FIT。

**Type:** VideoScaleType

**Since:** 9

**Deprecated since:** 9

**Substitute:** ohos.multimedia.media/media.AVPlayer#videoScaleType

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

## fdSrc

```TypeScript
fdSrc: AVFileDescriptor
```

视频媒体文件描述，使用场景：应用中的视频资源被连续存储在同一个文件中。 **使用示例**： 假设一个连续存储的音乐文件: 视频1(地址偏移:0，字节长度:100) 视频2(地址偏移:101，字节长度:50) 视频3(地址偏移:151，字节长度:150) 1. 播放视频1：AVFileDescriptor { fd = 资源句柄; offset = 0; length = 100; } 2. 播放视频2：AVFileDescriptor { fd = 资源句柄; offset = 101; length = 50; } 3. 播放视频3：AVFileDescriptor { fd = 资源句柄; offset = 151; length = 150; } 假设是一个独立的视频文件: 请使用src=fd://xx

**Type:** AVFileDescriptor

**Since:** 9

**Deprecated since:** 9

**Substitute:** ohos.multimedia.media/media.AVPlayer#fdSrc

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

## state

```TypeScript
readonly state: VideoPlayState
```

视频播放的状态。

**Type:** VideoPlayState

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.multimedia.media/media.AVPlayer#state

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

## url

```TypeScript
url: string
```

视频媒体URL，支持当前主流的视频格式(mp4、mpeg-ts、mkv)。 **支持路径示例**： 1. fd类型播放：fd://xx ![](docroot://reference/apis-media-kit/figures/zh-cn_image_url.png) 2. http网络播放: http://xx 3. https网络播放: https://xx 4. hls网络播放路径：http://xx或者https://xx 5. file类型: file://xx **说明：** 从API version 11开始不支持webm。

**Type:** string

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.multimedia.media/media.AVPlayer#url

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

## height

```TypeScript
readonly height: number
```

视频高，单位为像素（px）。

**Type:** number

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.multimedia.media/media.AVPlayer#height

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

