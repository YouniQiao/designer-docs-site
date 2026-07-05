# VideoPlayer

VideoPlayer is a class for video playback management. It provides APIs to manage and play videos. Before calling any API in VideoPlayer, you must use [createVideoPlayer()](arkts-media-createvideoplayer-f.md#createVideoPlayer-1) to create a VideoPlayer instance.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

## 导入模块

```TypeScript
import { media } from '@kit.MediaKit';
```

## getTrackDescription

```TypeScript
getTrackDescription(callback: AsyncCallback<Array<MediaDescription>>): void
```

Obtains the video track information. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVPlayer.getTrackDescription(callback:

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;MediaDescription>> | 是 | Callback used to return the result. If the operation  is successful, err is undefined and data is the MediaDescription array obtained; otherwise,  err is an error object. |

## getTrackDescription

```TypeScript
getTrackDescription(): Promise<Array<MediaDescription>>
```

Obtains the video track information. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVPlayer.getTrackDescription()

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;MediaDescription>> | Promise used to return the MediaDescription array that holds the  video track information. |

## on('playbackCompleted')

```TypeScript
on(type: 'playbackCompleted', callback: Callback<void>): void
```

Subscribes to the video playback completion event.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVPlayer.on(type:

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'playbackCompleted' | 是 | Event type, which is 'playbackCompleted' in this case. |
| callback | Callback&lt;void> | 是 | Callback invoked when the event is triggered. |

## on('bufferingUpdate')

```TypeScript
on(type: 'bufferingUpdate', callback: (infoType: BufferingInfoType, value: number) => void): void
```

Subscribes to the video buffering update event. This API works only under online playback.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVPlayer.on(type:

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'bufferingUpdate' | 是 | Event type, which is 'bufferingUpdate' in this case. |
| callback | (infoType: BufferingInfoType, value: number) => void | 是 | Callback invoked when the event is triggered. The value of  [BufferingInfoType](arkts-media-bufferinginfotype-e.md#BufferingInfoType) is fixed at 0. |

## on('startRenderFrame')

```TypeScript
on(type: 'startRenderFrame', callback: Callback<void>): void
```

Subscribes to the frame rendering start event.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVPlayer.on(type:

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'startRenderFrame' | 是 | Event type, which is 'startRenderFrame' in this case. |
| callback | Callback&lt;void> | 是 | Callback invoked when the event is triggered. |

## on('videoSizeChanged')

```TypeScript
on(type: 'videoSizeChanged', callback: (width: number, height: number) => void): void
```

Subscribes to the video width and height change event.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVPlayer.on(type:

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'videoSizeChanged' | 是 | Event type, which is 'videoSizeChanged' in this case. |
| callback | (width: number, height: number) => void | 是 | Callback invoked when the event is triggered. width indicates the video width,  and height indicates the video height, in px. |

## on('audioInterrupt')

```TypeScript
on(type: 'audioInterrupt', callback: (info: audio.InterruptEvent) => void): void
```

Subscribes to the audio interruption event. For details, see [audio.InterruptEvent](../../apis-audio-kit/arkts-apis/arkts-audio-interruptevent-i.md#InterruptEvent).

**起始版本：** 9

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVPlayer.on(type:

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'audioInterrupt' | 是 | Event type, which is 'audioInterrupt' in this case. |
| callback | (info: audio.InterruptEvent) => void | 是 | Callback invoked when the event is triggered. |

## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Subscribes to video playback error events. After an error event is reported, you must handle the event and exit the playback.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVPlayer.on(type:

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'error' | 是 | Event type, which is 'error' in this case. This event is triggered when an error  occurs during video playback. |
| callback | ErrorCallback | 是 | Callback invoked when the event is triggered. |

## pause

```TypeScript
pause(callback: AsyncCallback<void>): void
```

Pauses video playback. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVPlayer.pause(callback:

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

## pause

```TypeScript
pause(): Promise<void>
```

Pauses video playback. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVPlayer.pause()

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

## play

```TypeScript
play(callback: AsyncCallback<void>): void
```

Starts video playback. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVPlayer.play(callback:

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

## play

```TypeScript
play(): Promise<void>
```

Starts video playback. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVPlayer.play()

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

## prepare

```TypeScript
prepare(callback: AsyncCallback<void>): void
```

Prepares for video playback. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVPlayer.prepare(callback:

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

## prepare

```TypeScript
prepare(): Promise<void>
```

Prepares for video playback. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVPlayer.prepare()

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

## release

```TypeScript
release(callback: AsyncCallback<void>): void
```

Releases the video playback resources. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVPlayer.release(callback:

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

## release

```TypeScript
release(): Promise<void>
```

Releases the video playback resources. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVPlayer.release()

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

## reset

```TypeScript
reset(callback: AsyncCallback<void>): void
```

Resets video playback. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVPlayer.reset(callback:

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

## reset

```TypeScript
reset(): Promise<void>
```

Resets video playback. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVPlayer.reset()

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

## seek

```TypeScript
seek(timeMs: number, callback: AsyncCallback<number>): void
```

Seeks to the specified playback position. The previous key frame at the specified position is played. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVPlayer.seek

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| timeMs | number | 是 | Position to seek to, in ms. The value range is [0, duration]. |
| callback | AsyncCallback&lt;number> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is the new playback position; otherwise, err is an error object. |

## seek

```TypeScript
seek(timeMs: number, mode: SeekMode, callback: AsyncCallback<number>): void
```

Seeks to the specified playback position. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVPlayer.seek

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| timeMs | number | 是 | Position to seek to, in ms. The value range is [0, duration]. |
| mode | SeekMode | 是 | Seek mode. |
| callback | AsyncCallback&lt;number> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is the new playback position; otherwise, err is an error object. |

## seek

```TypeScript
seek(timeMs: number, mode?: SeekMode): Promise<number>
```

Seeks to the specified playback position. If **mode** is not specified, the previous key frame at the specified position is played. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVPlayer.seek

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| timeMs | number | 是 | Position to seek to, in ms. The value range is [0, duration]. |
| mode | SeekMode | 否 | Seek mode based on the video I frame. The default value is SEEK_PREV_SYNC. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number> | Promise used to return the playback position, in ms. |

## setDisplaySurface

```TypeScript
setDisplaySurface(surfaceId: string, callback: AsyncCallback<void>): void
```

Sets a surface ID. This API uses an asynchronous callback to return the result. > **NOTE** > > - **SetDisplaySurface** must be called between the URL setting and the calling of **prepare**. A surface must > be set for video streams without audio. Otherwise, the calling of **prepare** fails.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** null

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| surfaceId | string | 是 | Surface ID, which is obtained from the XComponent. For details about how to  obtain it, see [XComponent]./@internal/component/ets/xcomponent. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the setting is successful,  err is undefined. Otherwise, err is an error object. |

## setDisplaySurface

```TypeScript
setDisplaySurface(surfaceId: string): Promise<void>
```

Sets a surface ID. This API uses a promise to return the result. > **NOTE** > > - **SetDisplaySurface** must be called between the URL setting and the calling of **prepare**. A surface must > be set for video streams without audio. Otherwise, the calling of **prepare** fails.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** null

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| surfaceId | string | 是 | Surface ID, which is obtained from the XComponent. For details about how to  obtain it, see [XComponent]./@internal/component/ets/xcomponent. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

## setSpeed

```TypeScript
setSpeed(speed: number, callback: AsyncCallback<number>): void
```

Sets the playback speed. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVPlayer.setSpeed

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| speed | number | 是 | Video playback speed. For details, see  [PlaybackSpeed](arkts-media-playbackspeed-e.md#PlaybackSpeed). |
| callback | AsyncCallback&lt;number> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is the playback speed; otherwise, err is an error object. |

## setSpeed

```TypeScript
setSpeed(speed: number): Promise<number>
```

Sets the playback speed. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVPlayer.setSpeed

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| speed | number | 是 | Video playback speed. For details, see  [PlaybackSpeed](arkts-media-playbackspeed-e.md#PlaybackSpeed). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number> | Promise used to return the playback speed. For details, see  [PlaybackSpeed](arkts-media-playbackspeed-e.md#PlaybackSpeed). |

## setVolume

```TypeScript
setVolume(vol: number, callback: AsyncCallback<void>): void
```

Sets the volume. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVPlayer.setVolume

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| vol | number | 是 | Relative volume. The value ranges from 0.00 to 1.00. The value 1.00 indicates the  maximum volume (100%). |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the setting is successful,  err is undefined. Otherwise, err is an error object. |

## setVolume

```TypeScript
setVolume(vol: number): Promise<void>
```

Sets the volume. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVPlayer.setVolume

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| vol | number | 是 | Relative volume. The value ranges from 0.00 to 1.00. The value 1.00 indicates the  maximum volume (100%). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

Stops video playback. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVPlayer.stop(callback:

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

## stop

```TypeScript
stop(): Promise<void>
```

Stops video playback. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.multimedia.media:media.AVPlayer.stop()

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

## duration

```TypeScript
readonly duration: number
```

Video duration, in ms. The value **-1** indicates the live mode.

**类型：** number

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.multimedia.media/media.AVPlayer#duration

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

## currentTime

```TypeScript
readonly currentTime: number
```

Current video playback position, in ms.

**类型：** number

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.multimedia.media/media.AVPlayer#currentTime

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

## loop

```TypeScript
loop: boolean
```

Whether to loop video playback. **true** to loop, **false** otherwise.

**类型：** boolean

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.multimedia.media/media.AVPlayer#loop

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

## audioInterruptMode

```TypeScript
audioInterruptMode?: audio.InterruptMode
```

Audio interruption mode.

**类型：** audio.InterruptMode

**起始版本：** 9

**废弃版本：** 9

**替代接口：** ohos.multimedia.media/media.AVPlayer#audioInterruptMode

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

## width

```TypeScript
readonly width: number
```

Video width, in px.

**类型：** number

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.multimedia.media/media.AVPlayer#width

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

## videoScaleType

```TypeScript
videoScaleType?: VideoScaleType
```

Video scale type. The default value is **VIDEO_SCALE_TYPE_FIT**.

**类型：** VideoScaleType

**起始版本：** 9

**废弃版本：** 9

**替代接口：** ohos.multimedia.media/media.AVPlayer#videoScaleType

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

## fdSrc

```TypeScript
fdSrc: AVFileDescriptor
```

Description of a video file. This property is required when video assets of an application are continuously stored in a file. Assume that a music file that stores continuous music assets consists of the following: Video 1 (address offset: 0, byte length: 100) Video 2 (address offset: 101; byte length: 50) Video 3 (address offset: 151, byte length: 150) 1. To play video 1: AVFileDescriptor { fd = resource handle; offset = 0; length = 100; } 2. To play video 2: AVFileDescriptor { fd = resource handle; offset = 101; length = 50; } 3. To play video 3: AVFileDescriptor { fd = resource handle; offset = 151; length = 150; } To play an independent video file, use **src=fd://xx**.

**类型：** AVFileDescriptor

**起始版本：** 9

**废弃版本：** 9

**替代接口：** ohos.multimedia.media/media.AVPlayer#fdSrc

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

## state

```TypeScript
readonly state: VideoPlayState
```

Video playback state.

**类型：** VideoPlayState

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.multimedia.media/media.AVPlayer#state

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

## url

```TypeScript
url: string
```

Video URL. The video formats MP4, MPEG-TS, and MKV are supported. **Example of supported URLs**: 1. FD: fd://xx ![](docroot://reference/apis-media-kit/figures/en-us_image_url.png) 2. HTTP: http://xx 3. HTTPS: https://xx 4. HLS: http://xx or https://xx 5. File type: file://xx **NOTE** WebM is no longer supported since API version 11.

**类型：** string

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.multimedia.media/media.AVPlayer#url

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

## height

```TypeScript
readonly height: number
```

Video height, in px.

**类型：** number

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.multimedia.media/media.AVPlayer#height

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

