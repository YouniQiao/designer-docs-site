# VideoPlayer

VideoPlayer is a class for video playback management. It provides APIs to manage and play videos. Before calling any API in VideoPlayer, you must use [createVideoPlayer()](arkts-media-media-createvideoplayer-f.md#createvideoplayer-1)to create a VideoPlayer instance.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [media:media](arkts-multimedia-media.md)

<!--Device-media-interface VideoPlayer--><!--Device-media-interface VideoPlayer-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

## Modules to Import

```TypeScript
import { media } from '@kit.MediaKit';
```

<a id="gettrackdescription"></a>
## getTrackDescription

```TypeScript
getTrackDescription(callback: AsyncCallback<Array<MediaDescription>>): void
```

Obtains the video track information. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getTrackDescription(callback:](arkts-media-media-avplayer-i.md#gettrackdescription-1)

<!--Device-VideoPlayer-getTrackDescription(callback: AsyncCallback<Array<MediaDescription>>): void--><!--Device-VideoPlayer-getTrackDescription(callback: AsyncCallback<Array<MediaDescription>>): void-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;MediaDescription&gt;&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is **undefined** and **data** is the MediaDescription array obtained; otherwise,**err** is an error object. |

<a id="gettrackdescription-1"></a>
## getTrackDescription

```TypeScript
getTrackDescription(): Promise<Array<MediaDescription>>
```

Obtains the video track information. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getTrackDescription()](arkts-media-media-avplayer-i.md#gettrackdescription-1)

<!--Device-VideoPlayer-getTrackDescription(): Promise<Array<MediaDescription>>--><!--Device-VideoPlayer-getTrackDescription(): Promise<Array<MediaDescription>>-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;MediaDescription&gt;&gt; | Promise used to return the MediaDescription array that holds the video track information. |

<a id="on"></a>
## on('playbackCompleted')

```TypeScript
on(type: 'playbackCompleted', callback: Callback<void>): void
```

Subscribes to the video playback completion event.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** on(type:

<!--Device-VideoPlayer-on(type: 'playbackCompleted', callback: Callback<void>): void--><!--Device-VideoPlayer-on(type: 'playbackCompleted', callback: Callback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playbackCompleted' | Yes | Event type, which is **'playbackCompleted'** in this case. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;void&gt; | Yes | Callback invoked when the event is triggered. |

<a id="on-1"></a>
## on('bufferingUpdate')

```TypeScript
on(type: 'bufferingUpdate', callback: (infoType: BufferingInfoType, value: number) => void): void
```

Subscribes to the video buffering update event. This API works only under online playback.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** on(type:

<!--Device-VideoPlayer-on(type: 'bufferingUpdate', callback: (infoType: BufferingInfoType, value: number) => void): void--><!--Device-VideoPlayer-on(type: 'bufferingUpdate', callback: (infoType: BufferingInfoType, value: number) => void): void-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'bufferingUpdate' | Yes | Event type, which is **'bufferingUpdate'** in this case. |
| callback | (infoType: BufferingInfoType, value: number) =&gt; void | Yes | Callback invoked when the event is triggered.<br>The value of [BufferingInfoType](arkts-media-media-bufferinginfotype-e.md) is fixed at **0**. |

<a id="on-2"></a>
## on('startRenderFrame')

```TypeScript
on(type: 'startRenderFrame', callback: Callback<void>): void
```

Subscribes to the frame rendering start event.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** on(type:

<!--Device-VideoPlayer-on(type: 'startRenderFrame', callback: Callback<void>): void--><!--Device-VideoPlayer-on(type: 'startRenderFrame', callback: Callback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'startRenderFrame' | Yes | Event type, which is **'startRenderFrame'** in this case. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;void&gt; | Yes | Callback invoked when the event is triggered. |

<a id="on-3"></a>
## on('videoSizeChanged')

```TypeScript
on(type: 'videoSizeChanged', callback: (width: number, height: number) => void): void
```

Subscribes to the video width and height change event.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** on(type:

<!--Device-VideoPlayer-on(type: 'videoSizeChanged', callback: (width: number, height: number) => void): void--><!--Device-VideoPlayer-on(type: 'videoSizeChanged', callback: (width: number, height: number) => void): void-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'videoSizeChanged' | Yes | Event type, which is **'videoSizeChanged'** in this case. |
| callback | (width: number, height: number) =&gt; void | Yes | Callback invoked when the event is triggered. **width** indicates the video width,and **height** indicates the video height, in px. |

<a id="on-4"></a>
## on('audioInterrupt')

```TypeScript
on(type: 'audioInterrupt', callback: (info: audio.InterruptEvent) => void): void
```

Subscribes to the audio interruption event. For details, see [audio.InterruptEvent](../../apis-audio-kit/arkts-apis/arkts-audio-audio-interruptevent-i.md).

**Since:** 9

**Deprecated since:** 9

**Substitutes:** on(type:

<!--Device-VideoPlayer-on(type: 'audioInterrupt', callback: (info: audio.InterruptEvent) => void): void--><!--Device-VideoPlayer-on(type: 'audioInterrupt', callback: (info: audio.InterruptEvent) => void): void-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioInterrupt' | Yes | Event type, which is **'audioInterrupt'** in this case. |
| callback | (info: audio.InterruptEvent) =&gt; void | Yes | Callback invoked when the event is triggered. |

<a id="on-5"></a>
## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Subscribes to video playback error events. After an error event is reported, you must handle the event and exit the playback.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** on(type:

<!--Device-VideoPlayer-on(type: 'error', callback: ErrorCallback): void--><!--Device-VideoPlayer-on(type: 'error', callback: ErrorCallback): void-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type, which is **'error'** in this case.<br>This event is triggered when an error occurs during video playback. |
| callback | [ErrorCallback](../../apis-arkui/arkts-components/arkts-arkui-errorcallback-t-sys.md) | Yes | Callback invoked when the event is triggered. |

<a id="pause"></a>
## pause

```TypeScript
pause(callback: AsyncCallback<void>): void
```

Pauses video playback. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [pause(callback:](arkts-media-media-avplayer-i.md#pause-1)

<!--Device-VideoPlayer-pause(callback: AsyncCallback<void>): void--><!--Device-VideoPlayer-pause(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

<a id="pause-1"></a>
## pause

```TypeScript
pause(): Promise<void>
```

Pauses video playback. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [pause()](arkts-media-media-avplayer-i.md#pause-1)

<!--Device-VideoPlayer-pause(): Promise<void>--><!--Device-VideoPlayer-pause(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

<a id="play"></a>
## play

```TypeScript
play(callback: AsyncCallback<void>): void
```

Starts video playback. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [play(callback:](arkts-media-media-avplayer-i.md#play-1)

<!--Device-VideoPlayer-play(callback: AsyncCallback<void>): void--><!--Device-VideoPlayer-play(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

<a id="play-1"></a>
## play

```TypeScript
play(): Promise<void>
```

Starts video playback. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [play()](arkts-media-media-avplayer-i.md#play-1)

<!--Device-VideoPlayer-play(): Promise<void>--><!--Device-VideoPlayer-play(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

<a id="prepare"></a>
## prepare

```TypeScript
prepare(callback: AsyncCallback<void>): void
```

Prepares for video playback. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [prepare(callback:](arkts-media-media-avplayer-i.md#prepare-1)

<!--Device-VideoPlayer-prepare(callback: AsyncCallback<void>): void--><!--Device-VideoPlayer-prepare(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

<a id="prepare-1"></a>
## prepare

```TypeScript
prepare(): Promise<void>
```

Prepares for video playback. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [prepare()](arkts-media-media-avplayer-i.md#prepare-1)

<!--Device-VideoPlayer-prepare(): Promise<void>--><!--Device-VideoPlayer-prepare(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

<a id="release"></a>
## release

```TypeScript
release(callback: AsyncCallback<void>): void
```

Releases the video playback resources. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [release(callback:](arkts-media-media-avplayer-i.md#release-1)

<!--Device-VideoPlayer-release(callback: AsyncCallback<void>): void--><!--Device-VideoPlayer-release(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

<a id="release-1"></a>
## release

```TypeScript
release(): Promise<void>
```

Releases the video playback resources. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [release()](arkts-media-media-avplayer-i.md#release-1)

<!--Device-VideoPlayer-release(): Promise<void>--><!--Device-VideoPlayer-release(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

<a id="reset"></a>
## reset

```TypeScript
reset(callback: AsyncCallback<void>): void
```

Resets video playback. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [reset(callback:](arkts-media-media-avplayer-i.md#reset-1)

<!--Device-VideoPlayer-reset(callback: AsyncCallback<void>): void--><!--Device-VideoPlayer-reset(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

<a id="reset-1"></a>
## reset

```TypeScript
reset(): Promise<void>
```

Resets video playback. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [reset()](arkts-media-media-avplayer-i.md#reset-1)

<!--Device-VideoPlayer-reset(): Promise<void>--><!--Device-VideoPlayer-reset(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

<a id="seek"></a>
## seek

```TypeScript
seek(timeMs: number, callback: AsyncCallback<number>): void
```

Seeks to the specified playback position. The previous key frame at the specified position is played. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [seek](arkts-media-media-avplayer-i.md#seek-1)

<!--Device-VideoPlayer-seek(timeMs: number, callback: AsyncCallback<number>): void--><!--Device-VideoPlayer-seek(timeMs: number, callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| timeMs | number | Yes | Position to seek to, in ms. The value range is [0, duration]. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is the new playback position; otherwise, **err** is an error object. |

<a id="seek-1"></a>
## seek

```TypeScript
seek(timeMs: number, mode: SeekMode, callback: AsyncCallback<number>): void
```

Seeks to the specified playback position. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [seek](arkts-media-media-avplayer-i.md#seek-1)

<!--Device-VideoPlayer-seek(timeMs: number, mode: SeekMode, callback: AsyncCallback<number>): void--><!--Device-VideoPlayer-seek(timeMs: number, mode: SeekMode, callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| timeMs | number | Yes | Position to seek to, in ms. The value range is [0, duration]. |
| mode | [SeekMode](arkts-media-media-seekmode-e.md) | Yes | Seek mode. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is the new playback position; otherwise, **err** is an error object. |

<a id="seek-2"></a>
## seek

```TypeScript
seek(timeMs: number, mode?: SeekMode): Promise<number>
```

Seeks to the specified playback position. If **mode** is not specified, the previous key frame at the specified position is played. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [seek](arkts-media-media-avplayer-i.md#seek-1)

<!--Device-VideoPlayer-seek(timeMs: number, mode?: SeekMode): Promise<number>--><!--Device-VideoPlayer-seek(timeMs: number, mode?: SeekMode): Promise<number>-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| timeMs | number | Yes | Position to seek to, in ms. The value range is [0, duration]. |
| mode | [SeekMode](arkts-media-media-seekmode-e.md) | No | Seek mode based on the video I frame. The default value is **SEEK_PREV_SYNC**. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the playback position, in ms. |

<a id="setdisplaysurface"></a>
## setDisplaySurface

```TypeScript
setDisplaySurface(surfaceId: string, callback: AsyncCallback<void>): void
```

Sets a surface ID. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> - **SetDisplaySurface** must be called between the URL setting and the calling of **prepare**. A surface must  
> be set for video streams without audio. Otherwise, the calling of **prepare** fails.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [null]

<!--Device-VideoPlayer-setDisplaySurface(surfaceId: string, callback: AsyncCallback<void>): void--><!--Device-VideoPlayer-setDisplaySurface(surfaceId: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| surfaceId | string | Yes | Surface ID, which is obtained from the **XComponent**. For details about how to obtain it, see [XComponent](../../apis-arkui/arkts-components/arkts-arkui-xcomponent-i). |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the setting is successful,**err** is **undefined**. Otherwise, **err** is an error object. |

<a id="setdisplaysurface-1"></a>
## setDisplaySurface

```TypeScript
setDisplaySurface(surfaceId: string): Promise<void>
```

Sets a surface ID. This API uses a promise to return the result.

> **NOTE**  
>  
> - **SetDisplaySurface** must be called between the URL setting and the calling of **prepare**. A surface must  
> be set for video streams without audio. Otherwise, the calling of **prepare** fails.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [null]

<!--Device-VideoPlayer-setDisplaySurface(surfaceId: string): Promise<void>--><!--Device-VideoPlayer-setDisplaySurface(surfaceId: string): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| surfaceId | string | Yes | Surface ID, which is obtained from the **XComponent**. For details about how to obtain it, see [XComponent](../../apis-arkui/arkts-components/arkts-arkui-xcomponent-i). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

<a id="setspeed"></a>
## setSpeed

```TypeScript
setSpeed(speed: number, callback: AsyncCallback<number>): void
```

Sets the playback speed. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [setSpeed](arkts-media-media-avplayer-i.md#setspeed-1)

<!--Device-VideoPlayer-setSpeed(speed: number, callback: AsyncCallback<number>): void--><!--Device-VideoPlayer-setSpeed(speed: number, callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| speed | number | Yes | Video playback speed. For details, see [PlaybackSpeed](arkts-media-media-playbackspeed-e.md). |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is the playback speed; otherwise, **err** is an error object. |

<a id="setspeed-1"></a>
## setSpeed

```TypeScript
setSpeed(speed: number): Promise<number>
```

Sets the playback speed. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [setSpeed](arkts-media-media-avplayer-i.md#setspeed-1)

<!--Device-VideoPlayer-setSpeed(speed: number): Promise<number>--><!--Device-VideoPlayer-setSpeed(speed: number): Promise<number>-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| speed | number | Yes | Video playback speed. For details, see [PlaybackSpeed](arkts-media-media-playbackspeed-e.md). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the playback speed. For details, see [PlaybackSpeed](arkts-media-media-playbackspeed-e.md). |

<a id="setvolume"></a>
## setVolume

```TypeScript
setVolume(vol: number, callback: AsyncCallback<void>): void
```

Sets the volume. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [setVolume](arkts-media-media-avplayer-i.md#setvolume-1)

<!--Device-VideoPlayer-setVolume(vol: number, callback: AsyncCallback<void>): void--><!--Device-VideoPlayer-setVolume(vol: number, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| vol | number | Yes | Relative volume. The value ranges from 0.00 to 1.00. The value **1.00** indicates the maximum volume (100%). |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the setting is successful,**err** is **undefined**. Otherwise, **err** is an error object. |

<a id="setvolume-1"></a>
## setVolume

```TypeScript
setVolume(vol: number): Promise<void>
```

Sets the volume. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [setVolume](arkts-media-media-avplayer-i.md#setvolume-1)

<!--Device-VideoPlayer-setVolume(vol: number): Promise<void>--><!--Device-VideoPlayer-setVolume(vol: number): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| vol | number | Yes | Relative volume. The value ranges from 0.00 to 1.00. The value **1.00** indicates the maximum volume (100%). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

<a id="stop"></a>
## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

Stops video playback. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [stop(callback:](arkts-media-media-avplayer-i.md#stop-1)

<!--Device-VideoPlayer-stop(callback: AsyncCallback<void>): void--><!--Device-VideoPlayer-stop(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

<a id="stop-1"></a>
## stop

```TypeScript
stop(): Promise<void>
```

Stops video playback. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [stop()](arkts-media-media-avplayer-i.md#stop-1)

<!--Device-VideoPlayer-stop(): Promise<void>--><!--Device-VideoPlayer-stop(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

## audioInterruptMode

```TypeScript
audioInterruptMode?: audio.InterruptMode
```

Audio interruption mode.

**Type:** audio.InterruptMode

**Since:** 9

**Deprecated since:** 9

**Substitutes:** audioInterruptMode

<!--Device-VideoPlayer-audioInterruptMode?: audio.InterruptMode--><!--Device-VideoPlayer-audioInterruptMode?: audio.InterruptMode-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

## currentTime

```TypeScript
readonly currentTime: number
```

Current video playback position, in ms.

**Type:** number

**Since:** 8

**Deprecated since:** 9

**Substitutes:** currentTime

<!--Device-VideoPlayer-readonly currentTime: number--><!--Device-VideoPlayer-readonly currentTime: number-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

## duration

```TypeScript
readonly duration: number
```

Video duration, in ms. The value **-1** indicates the live mode.

**Type:** number

**Since:** 8

**Deprecated since:** 9

**Substitutes:** duration

<!--Device-VideoPlayer-readonly duration: number--><!--Device-VideoPlayer-readonly duration: number-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

## fdSrc

```TypeScript
fdSrc: AVFileDescriptor
```

Description of a video file. This property is required when video assets of an application are continuously stored in a file.

Assume that a music file that stores continuous music assets consists of the following:

Video 1 (address offset: 0, byte length: 100)

Video 2 (address offset: 101; byte length: 50)

Video 3 (address offset: 151, byte length: 150)

1. To play video 1: AVFileDescriptor { fd = resource handle; offset = 0; length = 100; }2. To play video 2: AVFileDescriptor { fd = resource handle; offset = 101; length = 50; }3. To play video 3: AVFileDescriptor { fd = resource handle; offset = 151; length = 150; }

To play an independent video file, use **src=fd://xx**.

**Type:** AVFileDescriptor

**Since:** 9

**Deprecated since:** 9

**Substitutes:** fdSrc

<!--Device-VideoPlayer-fdSrc: AVFileDescriptor--><!--Device-VideoPlayer-fdSrc: AVFileDescriptor-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

## height

```TypeScript
readonly height: number
```

Video height, in px.

**Type:** number

**Since:** 8

**Deprecated since:** 9

**Substitutes:** height

<!--Device-VideoPlayer-readonly height: number--><!--Device-VideoPlayer-readonly height: number-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

## loop

```TypeScript
loop: boolean
```

Whether to loop video playback. **true** to loop, **false** otherwise.

**Type:** boolean

**Since:** 8

**Deprecated since:** 9

**Substitutes:** loop

<!--Device-VideoPlayer-loop: boolean--><!--Device-VideoPlayer-loop: boolean-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

## state

```TypeScript
readonly state: VideoPlayState
```

Video playback state.

**Type:** VideoPlayState

**Since:** 8

**Deprecated since:** 9

**Substitutes:** state

<!--Device-VideoPlayer-readonly state: VideoPlayState--><!--Device-VideoPlayer-readonly state: VideoPlayState-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

## url

```TypeScript
url: string
```

Video URL. The video formats MP4, MPEG-TS, and MKV are supported.

**Example of supported URLs**:

1. FD: fd://xx

![](docroot://reference/apis-media-kit/figures/en-us_image_url.png)

2. HTTP: http://xx3. HTTPS: https://xx4. HLS: http://xx or https://xx5. File type: file://xx

**NOTE**

WebM is no longer supported since API version 11.

**Type:** string

**Since:** 8

**Deprecated since:** 9

**Substitutes:** url

<!--Device-VideoPlayer-url: string--><!--Device-VideoPlayer-url: string-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

## videoScaleType

```TypeScript
videoScaleType?: VideoScaleType
```

Video scale type. The default value is **VIDEO_SCALE_TYPE_FIT**.

**Type:** VideoScaleType

**Since:** 9

**Deprecated since:** 9

**Substitutes:** videoScaleType

<!--Device-VideoPlayer-videoScaleType?: VideoScaleType--><!--Device-VideoPlayer-videoScaleType?: VideoScaleType-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

## width

```TypeScript
readonly width: number
```

Video width, in px.

**Type:** number

**Since:** 8

**Deprecated since:** 9

**Substitutes:** width

<!--Device-VideoPlayer-readonly width: number--><!--Device-VideoPlayer-readonly width: number-End-->

**System capability:** SystemCapability.Multimedia.Media.VideoPlayer

