# AVPlayer

AVPlayer is a playback management class. It provides APIs to manage and play media assets. Before calling any API in AVPlayer, you must use [createAVPlayer()](arkts-media-createavplayer-f.md#createavplayer-1) to create an AVPlayer instance. When using the AVPlayer instance, you are advised to register the following callbacks to proactively obtain status changes: [on('stateChange')](arkts-media-avplayer-i.md#on-2): listens for AVPlayer state changes. [on('error')](arkts-media-avplayer-i.md#on-16): listens for error events. Applications must properly manage AVPlayer instances according to their specific needs, creating and freeing them when necessary. Holding too many AVPlayer instances can lead to high memory usage, and in some cases, the system might terminate applications to free up resources. For details about the audio and video playback demo, see [Audio Playback](../../../../media/media/using-avplayer-for-playback.md) and [Video Playback](../../../../media/media/video-playback.md).

**Since:** 9

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

## Modules to Import

```TypeScript
import { media } from '@ohos.multimedia.media';
```

## addPlaybackMediaSource

```TypeScript
addPlaybackMediaSource(src: MediaSource, id?: string): Promise<string>
```

Add a new playback source to the player's playlist.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | MediaSource | Yes | Playback source to be added to the playlist. |
| id | string | No | Indicates the ID of a media source in the playlist.The newly added media source is inserted before the specified media source.<br>Default value:if empty, it means adding to the end of the list |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise used to return the result,if success, a unique ID corresponding to the media resource will be returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |
| [5400108](../errorcode-media.md#5400108-parameter-value-out-of-range) | The media source ID does not exist in the playlist. Returned by promise. |

## addSubtitleFromFd

```TypeScript
addSubtitleFromFd(fd: number, offset?: number, length?: number): Promise<void>
```

Adds an external subtitle to a video based on the FD. Currently, the external subtitle must be set after **fdSrc** of the video resource is set in an AVPlayer instance. This API uses a promise to return the result.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | Resource handle, which is obtained by calling[resourceManager.getRawFd](../../apis-localization-kit/arkts-apis/arkts-localization-resourcemanager-i.md#getrawfd-1). |
| offset | number | No | Resource offset, which needs to be entered based on the preset asset information. Aninvalid value causes a failure to parse subtitle assets. The default value is **0**.unit:Byte. |
| length | number | No | Resource length, which needs to be entered based on the preset asset information. Thedefault value is the remaining bytes from the offset in the file. An invalid value causes a failure to parsesubtitle assets. The default value is **0**. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Return by promise. |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |

## addSubtitleFromUrl

```TypeScript
addSubtitleFromUrl(url: string): Promise<void>
```

Adds an external subtitle to a video based on the URL. Currently, the external subtitle must be set after **fdSrc** of the video resource is set in an AVPlayer instance. This API uses a promise to return the result.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | Address of the external subtitle file. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Return by promise. |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |

## advanceToMediaSource

```TypeScript
advanceToMediaSource(id: string): Promise<void>
```

Ends playback of the current mediasource and starts playback of the specified mediasource in the mediasource list.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | Indicates the ID of the media source to play. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |
| [5400108](../errorcode-media.md#5400108-parameter-value-out-of-range) | The mediasource does not exist in the playlist. Returned via promise. |

## advanceToNextMediaSource

```TypeScript
advanceToNextMediaSource() : Promise<void>
```

Ends playback of the current mediasource and starts playback of the next mediasource in the mediasource list.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed . Return by promise. |
| [5400108](../errorcode-media.md#5400108-parameter-value-out-of-range) | The previous mediasource does not exist in the playlist. Returned viapromise. |

## advanceToPrevMediaSource

```TypeScript
advanceToPrevMediaSource(): Promise<void>
```

Ends playback of the current mediasource and starts playback of the previous mediasource in the mediasource list.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |
| [5400108](../errorcode-media.md#5400108-parameter-value-out-of-range) | The next mediasource does not exist in the playlist. Returned via promise. |

## clearPlaybackList

```TypeScript
clearPlaybackList(): Promise<void>
```

Clears all the items in the player's playlist. Currently playing media will be terminated immediately.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise is used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | operation not allowed . Returned via promise. |

## deselectTrack

```TypeScript
deselectTrack(index: number): Promise<void>
```

Deselects the specified track when the AVPlayer plays multimedia resources with multiple audio or video tracks. This API uses a promise to return the result.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | Track index, which is obtained from[MediaDescription](arkts-media-mediadescription-i.md#mediadescription) by calling[getTrackDescription](arkts-media-avplayer-i.md#gettrackdescription-2). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Return by promise. |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |

## getCurrentMediaSource

```TypeScript
getCurrentMediaSource(): MediaSource | undefined
```

Return the current mediasource.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Return value:**

| Type | Description |
| --- | --- |
| MediaSource | current mediasource if the operation is successful; returns undefined otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |

## getCurrentPresentationTimestamp

```TypeScript
getCurrentPresentationTimestamp() : number
```

Obtains the current playback time. This API can be called only when the AVPlayer is in the **playing**, **paused**, or **completed** state.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Return value:**

| Type | Description |
| --- | --- |
| number | Current playback time, in microseconds. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. |

## getCurrentTrack

```TypeScript
getCurrentTrack(trackType: MediaType): Promise<number>
```

Obtains the selected track by the specified media type. This API can be called only when the AVPlayer is in the prepared, playing, or paused state. This API uses a promise to return the result.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| trackType | MediaType | Yes | specified media Type, see [MediaType](#MediaType). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | A Promise instance used to return selected track index. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400101](../errorcode-media.md#5400101-memory-allocation-failed) | No memory. Return by promise. |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |
| [5400103](../errorcode-media.md#5400103-io-error) | I/O error. Return by promise. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by promise. |

## getLoadedTimeRanges

```TypeScript
getLoadedTimeRanges(): Promise<Array<Range>>
```

Obtains the list of loaded time ranges. This API uses a promise to return the result. > **NOTE** > > - For local media resources, the time range is from 0 to the entire media duration. > > - For network media resources, the list of locally loaded time ranges is returned.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Range&gt;&gt; | Promise used to return the list of loaded time ranges on the player.<br>The time range is represented by the **[start, end]** position on the playback timeline, in milliseconds. |

## getMediaKeySystemInfos

```TypeScript
getMediaKeySystemInfos(): Array<drm.MediaKeySystemInfo>
```

Obtains the media key system information of the media asset that is being played. This API can be called only after the [on('mediaKeySystemInfoUpdate')](arkts-media-avplayer-i.md#on-1) event is successfully triggered.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;drm.MediaKeySystemInfo&gt; | Array of MediaKeySystemInfo objects, each of which contains the**uuid** and **pssh** properties. If the return value is undefined, the mediaKeySystemInfoUpdate event is nottriggered. |

## getMediaSources

```TypeScript
getMediaSources(): Array<MediaSource | undefined>
```

Return the array of mediasources in the playlist.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;MediaSource \| undefined&gt; | array of mediasources in the playlist. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |

## getPlaybackInfo

```TypeScript
getPlaybackInfo(): Promise<PlaybackInfo>
```

Obtains the playback information. This API can be called only when the AVPlayer is in the prepared, playing, or paused state. This API uses a promise to return the result.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PlaybackInfo&gt; | Promise used to return **PlaybackInfo**. |

## getPlaybackPosition

```TypeScript
getPlaybackPosition() : number
```

Obtains the current playback position. This API can be called only when the AVPlayer is in the prepared, playing, paused, or completed state.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Return value:**

| Type | Description |
| --- | --- |
| number | Current playback time, in milliseconds. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. |

## getPlaybackRate

```TypeScript
getPlaybackRate(): Promise<number>
```

Obtains the playback speed of an AVPlayer. This API uses a promise to return the result.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise object, which returns the playback speed. |

## getPlaybackStatisticMetrics

```TypeScript
getPlaybackStatisticMetrics(): Promise<PlaybackMetrics>
```

Obtains the statistic metrics of the current player. This API can be called when the AVPlayer is in the prepared, playing, paused, completed, or stopped state. This API uses a promise to return the result.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PlaybackMetrics&gt; | Promise used to return the playback metrics of the current AVPlayer. |

## getSeekableTimeRanges

```TypeScript
getSeekableTimeRanges(): Promise<Array<Range>>
```

Obtains the list of seekable time ranges. This API uses a promise to return the result. > **NOTE** > > - For local media resources and media resources that support segment-based requests, the time range is from 0 > to the entire media duration. > > - For media resources that support only chunk-based transmission, there is no seekable time range.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Range&gt;&gt; | Promise used to return the list of seekable time ranges on the player.<br>The time range is represented by the **[start, end]** position on the playback timeline, in milliseconds. |

## getSelectedTracks

```TypeScript
getSelectedTracks(): Promise<Array<number>>
```

Obtains the indexes of the selected audio or video tracks. This API can be called only when the AVPlayer is in the prepared, playing, or paused state. This API uses a promise to return the result.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;number&gt;&gt; | Promise used to return the index array. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. |

## getTrackDescription

```TypeScript
getTrackDescription(callback: AsyncCallback<Array<MediaDescription>>): void
```

Obtains the audio and video track information. This API can be called only when the AVPlayer is in the prepared, playing, or paused state. To obtain information about all audio and video tracks, this API must be called after the data loading callback is triggered. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;MediaDescription&gt;&gt; | Yes | Callback used to return the result. If the operationis successful, **err** is **undefined** and **data** is the MediaDescription array obtained; otherwise,**err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by callback. |

## getTrackDescription

```TypeScript
getTrackDescription(): Promise<Array<MediaDescription>>
```

Obtains the audio and video track information. This API can be called only when the AVPlayer is in the prepared, playing, or paused state. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;MediaDescription&gt;&gt; | Promise used to return the MediaDescription array that holds theaudio and video track information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |

## getTrackSelectionFilter

```TypeScript
getTrackSelectionFilter(): Promise<TrackSelectionFilter>
```

Obtains the track selection filter configured for the player. This API uses a promise to return the result.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;TrackSelectionFilter&gt; | Promise used to return the track selection filter configured for theplayer. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. |

## isSeekContinuousSupported

```TypeScript
isSeekContinuousSupported() : boolean
```

Checks whether the media source supports [seek](arkts-media-avplayer-i.md#seek-1) in SEEK_CONTINUOUS mode (specified by [SeekMode](arkts-media-seekmode-e.md#seekmode)). The actual value is returned when this API is called in the prepared, playing, paused, or completed state. The value **false** is returned if it is called in other states. For devices that do not support the seek operation in SEEK_CONTINUOUS mode, **false** is returned.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of the seek operation in **SEEK_CONTINUOUS** mode. **true** tosupport, **false** otherwise. |

## off('mediaKeySystemInfoUpdate')

```TypeScript
off(type: 'mediaKeySystemInfoUpdate', callback?: Callback<Array<drm.MediaKeySystemInfo>>): void
```

Unsubscribes from media key system information changes.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'mediaKeySystemInfoUpdate' | Yes | Event type, which is **'mediaKeySystemInfoUpdate'** in this case. |
| callback | Callback&lt;Array&lt;drm.MediaKeySystemInfo&gt;&gt; | No | Callback invoked when the event is triggered. Itreports a **MediaKeySystemInfo** array. If this parameter is specified, only the specified callback isunregistered. Otherwise, all callbacks associated with the **mediaKeySystemInfoUpdate** event will beunregistered.<br>**Since:** 12 |

## off('stateChange')

```TypeScript
off(type: 'stateChange', callback?: OnAVPlayerStateChangeHandle): void
```

Unsubscribes from [AVPlayerState](arkts-media-avplayerstate-t.md#avplayerstate) state changes.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'stateChange' | Yes | Event type, which is **'stateChange'** in this case. |
| callback | OnAVPlayerStateChangeHandle | No | Callback invoked when the event is triggered. If this parameteris specified, only the specified callback is unregistered. Otherwise, all callbacks associated with the**stateChange** event will be unregistered.<br>**Since:** 12 |

## off('volumeChange')

```TypeScript
off(type: 'volumeChange', callback?: Callback<number>): void
```

Unsubscribes from the event that checks whether the volume is successfully set.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'volumeChange' | Yes | Event type, which is **'volumeChange'** in this case. |
| callback | Callback&lt;number&gt; | No | Callback invoked when the event is triggered. It reports the effectivevolume. If this parameter is specified, only the specified callback is unregistered. Otherwise, all callbacksassociated with the **volumeChange** event will be unregistered.<br>**Since:** 12 |

## off('endOfStream')

```TypeScript
off(type: 'endOfStream', callback?: Callback<void>): void
```

Unsubscribes from the event that indicates the end of the stream being played.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'endOfStream' | Yes | Event type, which is **'endOfStream'** in this case. |
| callback | Callback&lt;void&gt; | No | Callback invoked when the event is triggered. If this parameter isspecified, only the specified callback is unregistered. Otherwise, all callbacks associated with the**endOfStream** event will be unregistered.<br>**Since:** 19 |

## off('seekDone')

```TypeScript
off(type: 'seekDone', callback?: Callback<number>): void
```

Unsubscribes from the event that checks whether the seek operation takes effect.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'seekDone' | Yes | Event type, which is **'seekDone'** in this case. |
| callback | Callback&lt;number&gt; | No | Callback invoked when the event is triggered. It reports the time positionrequested by the user.<br>For video playback, [SeekMode](arkts-media-seekmode-e.md#seekmode) maycause the actual position to be different from that requested by the user. The exact position can be obtainedfrom the **currentTime** property. The time in this callback only means that the requested seek operation iscomplete. If this parameter is specified, only the specified callback is unregistered. Otherwise, allcallbacks associated with the **seekDone** event will be unregistered.<br>**Since:** 12 |

## off('speedDone')

```TypeScript
off(type: 'speedDone', callback?: Callback<number>): void
```

Unsubscribes from the event that checks whether the playback speed is successfully set.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'speedDone' | Yes | Event type, which is **'speedDone'** in this case. |
| callback | Callback&lt;number&gt; | No | Callback used to return the result. When the call of **setSpeed** issuccessful, the effective speed mode is reported. For details, see[PlaybackSpeed](arkts-media-playbackspeed-e.md#playbackspeed). If this parameter is specified, only thespecified callback is unregistered. Otherwise, all callbacks associated with the **speedDone** event will beunregistered.<br>**Since:** 12 |

## off('playbackRateDone')

```TypeScript
off(type: 'playbackRateDone', callback?: OnPlaybackRateDone): void
```

Unsubscribes from the event indicating that the playback rate set by calling [setPlaybackRate](arkts-media-avplayer-i.md#setplaybackrate-1) is applied.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playbackRateDone' | Yes | Event type, which is **'playbackRateDone'** in this case. |
| callback | OnPlaybackRateDone | No | Callback invoked when the event is triggered. It reports the newplayback rate. If this parameter is specified, only the specified callback is unregistered. Otherwise, allcallbacks associated with the **playbackRateDone** event will be unregistered. |

## off('bitrateDone')

```TypeScript
off(type: 'bitrateDone', callback?: Callback<number>): void
```

Unsubscribes from the event that checks whether the bitrate is successfully set.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'bitrateDone' | Yes | Event type, which is **'bitrateDone'** in this case. |
| callback | Callback&lt;number&gt; | No | Callback invoked when the event is triggered. It reports the effectivebitrate, in bit/s. If this parameter is specified, only the specified callback is unregistered. Otherwise, allcallbacks associated with the **bitrateDone** event will be unregistered.<br>**Since:** 19 |

## off('timeUpdate')

```TypeScript
off(type: 'timeUpdate', callback?: Callback<number>): void
```

Unsubscribes from playback position changes.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'timeUpdate' | Yes | Event type, which is **'timeUpdate'** in this case. |
| callback | Callback&lt;number&gt; | No | Callback used to return the current time. If this parameter is specified,only the specified callback is unregistered. Otherwise, all callbacks associated with the **timeUpdate**event will be unregistered.<br>**Since:** 12 |

## off('durationUpdate')

```TypeScript
off(type: 'durationUpdate', callback?: Callback<number>): void
```

Unsubscribes from media asset duration changes.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'durationUpdate' | Yes | Event type, which is **'durationUpdate'** in this case. |
| callback | Callback&lt;number&gt; | No | Callback used to return the resource duration. If this parameter isspecified, only the specified callback is unregistered. Otherwise, all callbacks associated with the**durationUpdate** event will be unregistered.<br>**Since:** 19 |

## off('bufferingUpdate')

```TypeScript
off(type: 'bufferingUpdate', callback?: OnBufferingUpdateHandler): void
```

Unsubscribes from audio and video buffer changes.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'bufferingUpdate' | Yes | Event type, which is **'bufferingUpdate'** in this case. |
| callback | OnBufferingUpdateHandler | No | Callback invoked when the event is triggered. If this parameteris specified, only the specified callback is unregistered. Otherwise, all callbacks associated with the**bufferingUpdate** event will be unregistered.<br>**Since:** 12 |

## off('startRenderFrame')

```TypeScript
off(type: 'startRenderFrame', callback?: Callback<void>): void
```

Unsubscribes from the event that indicates rendering starts for the first frame.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'startRenderFrame' | Yes | Event type, which is **'startRenderFrame'** in this case. |
| callback | Callback&lt;void&gt; | No | Callback invoked when the event is triggered. If this parameter isspecified, only the specified callback is unregistered. Otherwise, all callbacks associated with the**startRenderFrame** event will be unregistered.<br>**Since:** 19 |

## off('videoSizeChange')

```TypeScript
off(type: 'videoSizeChange', callback?: OnVideoSizeChangeHandler): void
```

Unsubscribes from video size changes.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'videoSizeChange' | Yes | Event type, which is **'videoSizeChange'** in this case. |
| callback | OnVideoSizeChangeHandler | No | Callback invoked when the event is triggered. If this parameteris specified, only the specified callback is unregistered. Otherwise, all callbacks associated with the**videoSizeChange** event will be unregistered.<br>**Since:** 12 |

## off('audioInterrupt')

```TypeScript
off(type: 'audioInterrupt', callback?: Callback<audio.InterruptEvent>): void
```

Unsubscribes from the audio interruption event.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioInterrupt' | Yes | Event type, which is **'audioInterrupt'** in this case. |
| callback | Callback&lt;audio.InterruptEvent&gt; | No | Callback invoked when the event is triggered. If thisparameter is specified, only the specified callback is unregistered. Otherwise, all callbacks associated withthe **audioInterrupt** event will be unregistered.<br>**Since:** 12 |

## off('availableBitrates')

```TypeScript
off(type: 'availableBitrates', callback?: Callback<Array<number>>): void
```

Unsubscribes from available bitrates of HLS/DASH streams. This event is reported after [prepare](arkts-media-avplayer-i.md#prepare-1) is called.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'availableBitrates' | Yes | Event type, which is **'availableBitrates'** in this case. |
| callback | Callback&lt;Array&lt;number&gt;&gt; | No | Callback invoked when the event is triggered. It returns an array thatholds the available bitrates, in bit/s. If the array length is 0, no bitrate can be set. If this parameter is specified, only the specified callback is unregistered. Otherwise, all callbacks associated with the**availableBitrates** event will be unregistered.<br>**Since:** 12 |

## off('error')

```TypeScript
off(type: 'error', callback?: ErrorCallback): void
```

Unsubscribes from AVPlayer errors.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type, which is **'error'** in this case. |
| callback | ErrorCallback | No | Callback used to return the error code ID and error message. If thisparameter is specified, only the specified callback is unregistered. Otherwise, all callbacks associated withthe **error** event will be unregistered.<br>**Since:** 12 |

## off('audioOutputDeviceChangeWithInfo')

```TypeScript
off(type: 'audioOutputDeviceChangeWithInfo', callback?: Callback<audio.AudioStreamDeviceChangeInfo>): void
```

Unsubscribes from audio stream output device changes and reasons. This API uses an asynchronous callback to return the result.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioOutputDeviceChangeWithInfo' | Yes | Event type, which is **'audioOutputDeviceChangeWithInfo'** inthis case. |
| callback | Callback&lt;audio.AudioStreamDeviceChangeInfo&gt; | No | Callback used to return the output devicedescriptor of the current audio stream and the change reason. If this parameter is specified, only thespecified callback is unregistered. Otherwise, all callbacks associated with the**audioOutputDeviceChangeWithInfo** event will be unregistered. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |

## off('subtitleUpdate')

```TypeScript
off(type: 'subtitleUpdate', callback?: Callback<SubtitleInfo>): void
```

Unsubscribes from subtitle update events.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'subtitleUpdate' | Yes | Event type, which is **'subtitleUpdate'** in this case. The event is triggeredwhen the external subtitle is updated. |
| callback | Callback&lt;SubtitleInfo&gt; | No | Callback that has been registered to listen for subtitle updateevents. If this parameter is specified, only the specified callback is unregistered. Otherwise, all callbacksassociated with the **subtitleUpdate** event will be unregistered. |

## off('trackChange')

```TypeScript
off(type: 'trackChange', callback?: OnTrackChangeHandler): void
```

Unsubscribes from track change events.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'trackChange' | Yes | Event type, which is **'trackChange'** in this case. The event is triggered whenthe track changes. |
| callback | OnTrackChangeHandler | No | Callback that has been registered to listen for track changes. If thisparameter is specified, only the specified callback is unregistered. Otherwise, all callbacks associated withthe **trackChange** event will be unregistered. |

## off('trackInfoUpdate')

```TypeScript
off(type: 'trackInfoUpdate', callback?: Callback<Array<MediaDescription>>): void
```

Unsubscribes from track information update events.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'trackInfoUpdate' | Yes | Event type, which is **'trackInfoUpdate'** in this case. The event istriggered when the track information is updated. |
| callback | Callback&lt;Array&lt;MediaDescription&gt;&gt; | No | Callback that has been registered to listen for trackinformation updates. If this parameter is specified, only the specified callback is unregistered. Otherwise,all callbacks associated with the **trackInfoUpdate** event will be unregistered. |

## off('amplitudeUpdate')

```TypeScript
off(type: 'amplitudeUpdate', callback?: Callback<Array<number>>): void
```

Unsubscribes from update events of the maximum amplitude.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'amplitudeUpdate' | Yes | Event type, which is **'amplitudeUpdate'** in this case. The event istriggered when the amplitude changes. |
| callback | Callback&lt;Array&lt;number&gt;&gt; | No | Callback that has been registered to listen for amplitude updates.If this parameter is specified, only the specified callback is unregistered. Otherwise, all callbacksassociated with the **amplitudeUpdate** event will be unregistered. |

## off('seiMessageReceived')

```TypeScript
off(type: 'seiMessageReceived', payloadTypes?: Array<number>, callback?: OnSeiMessageHandle): void
```

Unsubscribes from the events indicating that an SEI message is received.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'seiMessageReceived' | Yes | Event type, which is **'seiMessageReceived'** in this case. The event istriggered when an SEI message is received. |
| payloadTypes | Array&lt;number&gt; | No | Array of subscribed-to payload types of SEI messages. |
| callback | OnSeiMessageHandle | No | Callback used to listen for SEI message events and receive thesubscribed-to payload types. If this parameter is specified, only the specified callback is unregistered.Otherwise, all callbacks associated with the **seiMessageReceived** event will be unregistered. |

## off('superResolutionChanged')

```TypeScript
off(type:'superResolutionChanged', callback?: OnSuperResolutionChanged): void
```

Unsubscribes from the event indicating that super resolution is enabled or disabled.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'superResolutionChanged' | Yes | Event type, which is **'superResolutionChanged'** in this case. Theevent is triggered when super resolution is enabled or disabled. |
| callback | OnSuperResolutionChanged | No | Callback used to listen for super resolution status changes. Ifthis parameter is specified, only the specified callback is unregistered. Otherwise, all callbacks associatedwith the **superResolutionChanged** event will be unregistered. |

## offMetricsEvent

```TypeScript
offMetricsEvent(callback?: Callback<Array<AVMetricsEvent>>): void
```

Unsubscribes from metric events during playback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Array&lt;AVMetricsEvent&gt;&gt; | No | Callback invoked for metric events. This API uses anasynchronous callback to return the result. |

## offPlaybackContentChanged

```TypeScript
offPlaybackContentChanged(callback?: Callback<string>):void
```

Unregisters listener to detect when changes occur in the playback content.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;string&gt; | No | Callback invoked when the event is triggered.<br>Default value:If this parameter is not specified, all callback functions for the event are unsubscribed. |

## offTimedMetaData

```TypeScript
offTimedMetaData(callback?: Callback<AVTimedMetaData>): void
```

Unregister listener to detect time-based metadata, Currently, only the #EXT-X-DATERANGE data of HLS and the Event Streams information of DASH are supported.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AVTimedMetaData&gt; | No | Callback invoked when the event is triggered.<br>Default value:If this parameter is not specified, all callback functions for the event are unsubscribed. |

## on('mediaKeySystemInfoUpdate')

```TypeScript
on(type: 'mediaKeySystemInfoUpdate', callback: Callback<Array<drm.MediaKeySystemInfo>>): void
```

Subscribes to media key system information changes.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'mediaKeySystemInfoUpdate' | Yes | Event type, which is **'mediaKeySystemInfoUpdate'** in this case.This event is triggered when the copyright protection information of the media asset being played changes. |
| callback | Callback&lt;Array&lt;drm.MediaKeySystemInfo&gt;&gt; | Yes | Callback invoked when the event is triggered. Itreports a **MediaKeySystemInfo** array.<br>**Since:** 12 |

## on('stateChange')

```TypeScript
on(type: 'stateChange', callback: OnAVPlayerStateChangeHandle): void
```

Subscribes to AVPlayer state changes.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'stateChange' | Yes | Event type, which is **'stateChange'** in this case. This event can be triggeredby both user operations and the system. |
| callback | OnAVPlayerStateChangeHandle | Yes | Callback invoked when the event is triggered.<br>**Since:** 12 |

## on('volumeChange')

```TypeScript
on(type: 'volumeChange', callback: Callback<number>): void
```

Subscribes to the event to check whether the volume is successfully set.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'volumeChange' | Yes | Event type, which is **'volumeChange'** in this case. This event is triggeredeach time **setVolume()** is called. |
| callback | Callback&lt;number&gt; | Yes | Callback invoked when the event is triggered. It reports the effectivevolume. |

## on('endOfStream')

```TypeScript
on(type: 'endOfStream', callback: Callback<void>): void
```

Subscribes to the event that indicates the end of the stream being played. If **[loop](../../../../reference/apis-media-kit/arkts-apis-media-AVPlayer.md#properties) = true** is set, the AVPlayer seeks to the beginning of the stream and plays the stream again. If **loop** is not set, the completed state is reported through the [stateChange](arkts-media-avplayer-i.md#on-2) event.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'endOfStream' | Yes | Event type, which is **'endOfStream'** in this case. This event is triggered whenthe AVPlayer finishes playing the media asset. |
| callback | Callback&lt;void&gt; | Yes | Callback invoked when the event is triggered. |

## on('seekDone')

```TypeScript
on(type: 'seekDone', callback: Callback<number>): void
```

Subscribes to the event to check whether the seek operation takes effect.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'seekDone' | Yes | Event type, which is **'seekDone'** in this case. This event is triggered each time**seek()** is called, except in SEEK_CONTINUOUS mode. |
| callback | Callback&lt;number&gt; | Yes | Callback invoked when the event is triggered. It reports the time positionrequested by the user.<br>For video playback, [SeekMode](arkts-media-seekmode-e.md#seekmode) maycause the actual position to be different from that requested by the user. The exact position can be obtainedfrom the **currentTime** property. The time in this callback only means that the requested seek operation iscomplete. |

## on('speedDone')

```TypeScript
on(type: 'speedDone', callback: Callback<number>): void
```

Subscribes to the event to check whether the playback speed is successfully set.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'speedDone' | Yes | Event type, which is **'speedDone'** in this case. This event is triggered eachtime **setSpeed()** is called. |
| callback | Callback&lt;number&gt; | Yes | Callback used to return the result. When the call of **setSpeed** issuccessful, the effective speed mode is reported. For details, see[PlaybackSpeed](arkts-media-playbackspeed-e.md#playbackspeed). |

## on('playbackRateDone')

```TypeScript
on(type: 'playbackRateDone', callback: OnPlaybackRateDone): void
```

Subscribes to the event indicating that the playback rate set by calling [setPlaybackRate](arkts-media-avplayer-i.md#setplaybackrate-1) is applied.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playbackRateDone' | Yes | Event type, which is **'playbackRateDone'** in this case. This event istriggered each time **setPlaybackRate** is called. |
| callback | OnPlaybackRateDone | Yes | Callback invoked when the event is triggered. It reports the newplayback rate. |

## on('bitrateDone')

```TypeScript
on(type: 'bitrateDone', callback: Callback<number>): void
```

Subscribes to the event to check whether the bitrate is successfully set.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'bitrateDone' | Yes | Event type, which is **'bitrateDone'** in this case. This event is triggered eachtime **setBitrate()** is called. |
| callback | Callback&lt;number&gt; | Yes | Callback invoked when the event is triggered. It reports the effectivebitrate, in bit/s. |

## on('timeUpdate')

```TypeScript
on(type: 'timeUpdate', callback: Callback<number>): void
```

Subscribes to playback position changes. It is used to refresh the current position of the progress bar. By default, this event is reported every 100 ms. However, it is reported immediately upon a successful seek operation. > **NOTE** > > - The **'timeUpdate'** event is not supported in live streaming scenarios. > > - When a seek operation is performed, the progress bar can be updated based on the **'timeUpdate'** event only > after the seek operation is complete (**'seekdone'** received). > > - In the **pause** state, the player reports the timeUpdate event when the buffering ends.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'timeUpdate' | Yes | Event type, which is **'timeUpdate'** in this case. |
| callback | Callback&lt;number&gt; | Yes | Callback used to return the current time. |

## on('durationUpdate')

```TypeScript
on(type: 'durationUpdate', callback: Callback<number>): void
```

Subscribes to media asset duration changes. It is used to refresh the length of the progress bar. By default, this event is reported once in the prepared state. However, it can be repeatedly reported for special streams that trigger duration changes. > **NOTE** > > The **durationUpdate** event is not supported in live streaming scenarios.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'durationUpdate' | Yes | Event type, which is **'durationUpdate'** in this case. |
| callback | Callback&lt;number&gt; | Yes | Callback used to return the resource duration. |

## on('bufferingUpdate')

```TypeScript
on(type: 'bufferingUpdate', callback: OnBufferingUpdateHandler): void
```

Subscribes to audio and video buffer changes. This subscription is supported only in network playback scenarios.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'bufferingUpdate' | Yes | Event type, which is **'bufferingUpdate'** in this case. |
| callback | OnBufferingUpdateHandler | Yes | Callback invoked when the event is triggered.<br>**Since:** 12 |

## on('startRenderFrame')

```TypeScript
on(type: 'startRenderFrame', callback: Callback<void>): void
```

Subscribes to the event that indicates rendering starts for the first frame. This subscription is supported only in video playback scenarios. This event only means that the playback service sends the first frame to the display module. The actual rendering effect depends on the rendering performance of the display service.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'startRenderFrame' | Yes | Event type, which is **'startRenderFrame'** in this case. |
| callback | Callback&lt;void&gt; | Yes | Callback invoked when the event is triggered. |

## on('videoSizeChange')

```TypeScript
on(type: 'videoSizeChange', callback: OnVideoSizeChangeHandler): void
```

Subscribes to video size (width and height) changes. This subscription is supported only in video playback scenarios. By default, this event is reported only once in the prepared state. However, it is also reported upon resolution changes in the case of HLS streams.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'videoSizeChange' | Yes | Event type, which is **'videoSizeChange'** in this case. |
| callback | OnVideoSizeChangeHandler | Yes | Callback invoked when the event is triggered.<br>**Since:** 12 |

## on('audioInterrupt')

```TypeScript
on(type: 'audioInterrupt', callback: Callback<audio.InterruptEvent>): void
```

Subscribes to the audio interruption event. When multiple audio and video assets are played at the same time, this event is triggered based on the audio interruption mode [audio.InterruptMode](../../apis-audio-kit/arkts-apis/arkts-audio-interruptmode-e.md#interruptmode). The application needs to perform corresponding processing based on different audio interruption events. For details, see [Handling Audio Interruption Events](../../../../media/audio/audio-playback-concurrency.md).

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioInterrupt' | Yes | Event type, which is **'audioInterrupt'** in this case. |
| callback | Callback&lt;audio.InterruptEvent&gt; | Yes | Callback invoked when the event is triggered.<br>**Since:** 12 |

## on('availableBitrates')

```TypeScript
on(type: 'availableBitrates', callback: Callback<Array<number>>): void
```

Subscribes to available bitrates of HLS/DASH streams. This event is reported only after the AVPlayer switches to the prepared state.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'availableBitrates' | Yes | Event type, which is **'availableBitrates'** in this case. This event istriggered once after the AVPlayer switches to the prepared state. |
| callback | Callback&lt;Array&lt;number&gt;&gt; | Yes | Callback invoked when the event is triggered. It returns an array thatholds the available bitrates, in bit/s. If the array length is 0, no bitrate can be set.<br>**Since:** 12 |

## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Subscribes to [AVPlayer](arkts-multimedia-media.md#media) errors. This event is used only for error prompt and does not require the user to stop playback control. If the [AVPlayerState](arkts-media-avplayerstate-t.md#avplayerstate) is also switched to error, call [reset()](arkts-media-avplayer-i.md#reset-1) or [release()](arkts-media-avplayer-i.md#release-1) to exit the playback. If the playback remains in the error state after the [reset()](arkts-media-avplayer-i.md#reset-1) method is called, you are advised to directly invoke the [release()](arkts-media-avplayer-i.md#release-1) method to exit the playback operation.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type, which is **'error'** in this case. This event can be triggered by both useroperations and the system. |
| callback | ErrorCallback | Yes | Callback used to return the error code ID and error message. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [5400101](../errorcode-media.md#5400101-memory-allocation-failed) | No memory. |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. |
| [5400103](../errorcode-media.md#5400103-io-error) | I/O error.<br>**Applicable version:** 9 - 13 |
| [5400104](../errorcode-media.md#5400104-operation-timeout) | Time out. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. |
| [5400106](../errorcode-media.md#5400106-format-not-supported) | Unsupported format. |
| [5411001](../errorcode-media.md#5411001-failed-to-parse-or-connect-to-the-server-address) | IO can not find host.<br>**Applicable version:** 14 |
| [5411002](../errorcode-media.md#5411002-network-connection-timeout) | IO connection timeout.<br>**Applicable version:** 14 |
| [5411003](../errorcode-media.md#5411003-data-or-link-exception-caused-by-network-exceptions) | IO network abnormal.<br>**Applicable version:** 14 |
| [5411004](../errorcode-media.md#5411004-network-disabled) | IO network unavailable.<br>**Applicable version:** 14 |
| [5411005](../errorcode-media.md#5411005-access-denied) | IO no permission.<br>**Applicable version:** 14 |
| [5411006](../errorcode-media.md#5411006-client-request-parameter-is-incorrect-or-exceeds-the-processing-capability) | IO request denied.<br>**Applicable version:** 14 |
| [5411007](../errorcode-media.md#5411007-no-resource-available) | IO resource not found.<br>**Applicable version:** 14 |
| [5411008](../errorcode-media.md#5411008-server-fails-to-verify-the-client-certificate) | IO SSL client cert needed.<br>**Applicable version:** 14 |
| [5411009](../errorcode-media.md#5411009-ssl-connection-failed) | IO SSL connect fail.<br>**Applicable version:** 14 |
| [5411010](../errorcode-media.md#5411010-client-fails-to-verify-the-server-certificate) | IO SSL server cert untrusted.<br>**Applicable version:** 14 |
| [5411011](../errorcode-media.md#5411011-unsupported-request-due-to-network-protocol-errors) | IO unsupported request.<br>**Applicable version:** 14 |
| [5410002](../errorcode-media.md#5410002-seek-in-seekcontinuous-mode-is-not-supported) | Seek continuous unsupported.<br>**Applicable version:** 18 |
| [5411012](../errorcode-media.md#5411012-request-not-supported-due-to-http-plaintext-interception) | Http cleartext traffic is not permitted.<br>**Applicable version:** 23 |

## on('audioOutputDeviceChangeWithInfo')

```TypeScript
on(type: 'audioOutputDeviceChangeWithInfo', callback: Callback<audio.AudioStreamDeviceChangeInfo>): void
```

Subscribes to audio stream output device changes and reasons. This API uses an asynchronous callback to return the result. When subscribing to this event, you are advised to implement the player behavior when the device is connected or disconnected by referring to [Handling Output Device Changes Gracefully](../../../../media/audio/audio-output-device-change.md).

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioOutputDeviceChangeWithInfo' | Yes | Event type, which is **'audioOutputDeviceChangeWithInfo'** inthis case. |
| callback | Callback&lt;audio.AudioStreamDeviceChangeInfo&gt; | Yes | Callback used to return the output devicedescriptor of the current audio stream and the change reason. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |

## on('subtitleUpdate')

```TypeScript
on(type: 'subtitleUpdate', callback: Callback<SubtitleInfo>): void
```

Subscribes to subtitle update events. When external subtitles exist, the system notifies the application through the subscribed-to callback. An application can subscribe to only one subtitle update event. When the application initiates multiple subscriptions to this event, the last subscription is applied.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'subtitleUpdate' | Yes | Event type, which is **'subtitleUpdate'** in this case. The event is triggeredwhen the external subtitle is updated. |
| callback | Callback&lt;SubtitleInfo&gt; | Yes | Callback invoked when the subtitle is updated. |

## on('trackChange')

```TypeScript
on(type: 'trackChange', callback: OnTrackChangeHandler): void
```

Subscribes to track change events. When the track changes, the system notifies the application through the subscribed-to callback. An application can subscribe to only one track change event. When the application initiates multiple subscriptions to this event, the last subscription is applied.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'trackChange' | Yes | Event type, which is **'trackChange'** in this case. The event is triggered whenthe track changes. |
| callback | OnTrackChangeHandler | Yes | Callback invoked when the event is triggered. |

## on('trackInfoUpdate')

```TypeScript
on(type: 'trackInfoUpdate', callback: Callback<Array<MediaDescription>>): void
```

Subscribes to track information update events. When the track information is updated, the system notifies the application through the subscribed-to callback. An application can subscribe to only one track change event. When the application initiates multiple subscriptions to this event, the last subscription is applied.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'trackInfoUpdate' | Yes | Event type, which is **'trackInfoUpdate'** in this case. The event istriggered when the track information is updated. |
| callback | Callback&lt;Array&lt;MediaDescription&gt;&gt; | Yes | Callback invoked when the event is triggered. |

## on('amplitudeUpdate')

```TypeScript
on(type: 'amplitudeUpdate', callback: Callback<Array<number>>): void
```

Subscribes to update events of the maximum audio level value, which is periodically reported when audio resources are played.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'amplitudeUpdate' | Yes | Event type, which is **'amplitudeUpdate'** in this case. The event istriggered when the amplitude changes. |
| callback | Callback&lt;Array&lt;number&gt;&gt; | Yes | Callback invoked when the event is triggered. |

## on('seiMessageReceived')

```TypeScript
on(type: 'seiMessageReceived', payloadTypes: Array<number>, callback: OnSeiMessageHandle): void
```

Subscribes to events indicating that a Supplemental Enhancement Information (SEI) message is received. This applies only to HTTP-FLV live streaming and is triggered when SEI messages are present in the video stream. You must initiate the subscription before calling **prepare**. If you initiate multiple subscriptions to this event, the last subscription is applied.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'seiMessageReceived' | Yes | Event type, which is **'seiMessageReceived'** in this case. The event istriggered when an SEI message is received. |
| payloadTypes | Array&lt;number&gt; | Yes | Array of subscribed-to payload types of SEI messages. Currently, onlypayloadType = 5 is supported. |
| callback | OnSeiMessageHandle | Yes | Callback used to listen for SEI message events and receive thesubscribed-to payload types. |

## on('superResolutionChanged')

```TypeScript
on(type:'superResolutionChanged', callback: OnSuperResolutionChanged): void
```

Subscribes to the event indicating that super resolution is enabled or disabled.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'superResolutionChanged' | Yes | Event type, which is **'superResolutionChanged'** in this case. Theevent is triggered when super resolution is enabled or disabled. |
| callback | OnSuperResolutionChanged | Yes | Callback used to listen for super resolution status changes. |

## onMetricsEvent

```TypeScript
onMetricsEvent(callback: Callback<Array<AVMetricsEvent>>): void
```

Subscribes to metric events during playback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Array&lt;AVMetricsEvent&gt;&gt; | Yes | Callback invoked for metric events. This API uses anasynchronous callback to return the result. |

## onPlaybackContentChanged

```TypeScript
onPlaybackContentChanged(callback: Callback<string>):void
```

Registers a listener to detect when the playback content has changed. The value carried in the callback function is the ID of the media source that is being played in the playlist.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;string&gt; | Yes | Callback invoked when the event is triggered. |

## onTimedMetaData

```TypeScript
onTimedMetaData(callback: Callback<AVTimedMetaData>): void
```

Register listener to detect time-based metadata, Currently, only the #EXT-X-DATERANGE data of HLS and the Event Streams information of DASH are supported.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AVTimedMetaData&gt; | Yes | Callback invoked when the event is triggered. |

## pause

```TypeScript
pause(callback: AsyncCallback<void>): void
```

Pauses audio and video playback. This API can be called only when the AVPlayer is in the playing state. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by callback. |

## pause

```TypeScript
pause(): Promise<void>
```

Pauses audio and video playback. This API can be called only when the AVPlayer is in the playing state. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |

## play

```TypeScript
play(callback: AsyncCallback<void>): void
```

Starts to play an audio and video asset. This API can be called only when the AVPlayer is in the prepared, paused, or completed state. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by callback. |

## play

```TypeScript
play(): Promise<void>
```

Starts to play an audio and video asset. This API can be called only when the AVPlayer is in the prepared, paused, or completed state. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |

## prepare

```TypeScript
prepare(callback: AsyncCallback<void>): void
```

Prepares for audio and video playback. This API can be called only when the AVPlayer is in the initialized state. The state changes can be detected by subscribing to the [stateChange](arkts-media-avplayer-i.md#on-2) event. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by callback. |
| [5400106](../errorcode-media.md#5400106-format-not-supported) | Unsupported format. Return by callback. |

## prepare

```TypeScript
prepare(): Promise<void>
```

Prepares for audio and video playback. This API can be called only when the AVPlayer is in the initialized state. The state changes can be detected by subscribing to the [stateChange](arkts-media-avplayer-i.md#on-2) event. This API uses a promise to return the result. If your application frequently switches between short videos, you can create multiple AVPlayer objects to prepare the next video in advance, thereby improving the switching performance. For details, see [Smooth Switchover Between Online Short Videos](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-smooth-switching).

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |
| [5400106](../errorcode-media.md#5400106-format-not-supported) | Unsupported format. Return by promise. |

## release

```TypeScript
release(callback: AsyncCallback<void>): void
```

Releases the playback resources. This API can be called when the AVPlayer is in any state except released. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by callback. |

## release

```TypeScript
release(): Promise<void>
```

Releases the playback resources. This API can be called when the AVPlayer is in any state except released. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |

## removePlaybackMediaSource

```TypeScript
removePlaybackMediaSource(id: string): Promise<void>
```

Removes the specified playback media source from the player's playlist. If the id does not exist in the current playlist, the method returns immediately.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | ID returned after a media source is added to the playlist. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |
| [5400108](../errorcode-media.md#5400108-parameter-value-out-of-range) | The media source ID does not exist in the playlist. Returned via promise. |

## reset

```TypeScript
reset(callback: AsyncCallback<void>): void
```

Resets audio and video playback. This API can be called only when the AVPlayer is in the initialized, prepared, playing, paused, completed, stopped, or error state. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by callback. |

## reset

```TypeScript
reset(): Promise<void>
```

Resets audio and video playback. This API can be called only when the AVPlayer is in the initialized, prepared, playing, paused, completed, stopped, or error state. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |

## seek

```TypeScript
seek(timeMs: number, mode?: SeekMode): void
```

Seeks to the specified playback position. This API can be called only when the AVPlayer is in the prepared, playing, paused, or completed state. You can check whether the seek operation takes effect by subscribing to the [on('seekDone')](arkts-media-avplayer-i.md#on-5) event. > **NOTE** > > Since API version 24, **seek** is supported in live streaming scenarios.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| timeMs | number | Yes | Position to seek to, in ms. The value range is[0, [duration](../../../../reference/apis-media-kit/arkts-apis-media-AVPlayer.md#properties)].<br>When the seekmode is [SEEK_CONTINUOUS](arkts-media-seekmode-e.md#seekmode), you can set this parameter to **-1**to end the **SEEK_CONTINUOUS** mode. |
| mode | SeekMode | No | Seek mode based on the video I frame. The default value is **SEEK_PREV_SYNC**.**Set this parameter only for video playback.** |

## seekToDefaultPosition

```TypeScript
seekToDefaultPosition(): void
```

Seeks to the default access point of the playback source. For live streams, the latest recommended access point is used. For on-demand videos, the start position of the video is used (equivalent to **seek(0)**).

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by callback. |

## selectTrack

```TypeScript
selectTrack(index: number, mode?: SwitchMode): Promise<void>
```

Selects a track when the AVPlayer plays multimedia resources with multiple audio or video tracks. This API uses a promise to return the result.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | Index of the track. You can call[getTrackDescription](arkts-media-avplayer-i.md#gettrackdescription-2) to obtain all track information[MediaDescription](arkts-media-mediadescription-i.md#mediadescription) of the current resource. |
| mode | SwitchMode | No | Video track mode. The default mode is **SMOOTH**. This parameter takes effect onlyfor DASH/HLS network stream video track switching.<br>HLS network stream video is supported since API version24.<br>**Since:** 26.0.0 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Return by promise. |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |

## setBitrate

```TypeScript
setBitrate(bitrate: number): void
```

Sets the bitrate for the streaming media. This API is valid only for HLS/DASH streams. By default, the AVPlayer selects a proper bitrate based on the network connection speed. This API can be called only when the AVPlayer is in the prepared, playing, paused, or completed state. You can check whether the setting takes effect by subscribing to the [bitrateDone](arkts-media-avplayer-i.md#on-8) event.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bitrate | number | Yes | Bitrate to set. You can obtain the available bitrates of the current HLS/DASH stream bysubscribing to the[availableBitrates](arkts-media-avplayer-i.md#on-15)event. If the bitrate to set is not in the list of the available bitrates, the AVPlayer selects from the listthe bitrate that is closed to the bitrate to set. If the length of the available bitrate list obtainedthrough the event is 0, no bitrate can be set and the **bitrateDone** callback will not be triggered, in bit/s. |

## setDecryptionConfig

```TypeScript
setDecryptionConfig(mediaKeySession: drm.MediaKeySession, secureVideoPath: boolean): void
```

Sets the decryption configuration. When receiving an [on('mediaKeySystemInfoUpdate')](arkts-media-avplayer-i.md#on-1) event, create the related configuration and set the decryption configuration based on the information in the reported event. Otherwise, the playback fails.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mediaKeySession | drm.MediaKeySession | Yes | Decryption session. |
| secureVideoPath | boolean | Yes | Secure video channel. **true** if a secure video channel is selected,**false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |

## setLoudnessGain

```TypeScript
setLoudnessGain(loudnessGain: number): Promise<void>
```

Sets the loudness gain of the AVPlayer. After this API is called, the loudness gain takes effect immediately. This API uses a promise to return the result. > **NOTE** > > - This API can be called when the AVPlayer is in the prepared, playing, paused, completed, or stopped state. > > - Before calling this API, ensure that the audio rendering information has been set in > **AVPlayer.audioRendererInfo** and the **usage** parameter in **audioRendererInfo** has been set to > [STREAM_USAGE_MUSIC](../../apis-audio-kit/arkts-apis/arkts-audio-streamusage-e.md#streamusage), > [STREAM_USAGE_MOVIE](../../apis-audio-kit/arkts-apis/arkts-audio-streamusage-e.md#streamusage), or > [STREAM_USAGE_AUDIOBOOK](../../apis-audio-kit/arkts-apis/arkts-audio-streamusage-e.md#streamusage).

**Since:** 21

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| loudnessGain | number | Yes | Loudness gain, in the range [-90.0, 24.0], in dB. The default value is 0.0 dB. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

## setMediaMuted

```TypeScript
setMediaMuted(mediaType: MediaType, muted: boolean): Promise<void>
```

Mutes or unmutes the audio. Since API version 20, this API also supports whether to display the video image. This API uses a promise to return the result. This API can be called only when the AVPlayer is in the prepared, playing, paused, or completed state.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mediaType | MediaType | Yes | Media type.<br>For API version 12 to 19, only **MEDIA_TYPE_AUD** is supported.&lt;br&gt;Since API version 20, **MEDIA_TYPE_VID** is supported. |
| muted | boolean | Yes | For API version 12 to 19, only audio playback strategies are supported. This parameterspecifies whether to mute or unmute the audio. **true** to mute, **false** otherwise.<br>Since API version 20, video playback strategies are also supported. This parameter specifies whether to disable or enable thevideo image. **true** to disable, false otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Return by promise. |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |

## setMediaSource

```TypeScript
setMediaSource(src: MediaSource, strategy?: PlaybackStrategy): Promise<void>
```

Sets a source of streaming media that can be pre-downloaded, downloads the media data, and temporarily stores the data in the memory. This API uses a promise to return the result.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | MediaSource | Yes | Source of the streaming media to pre-download. |
| strategy | PlaybackStrategy | No | strategy for playing the pre-downloaded streaming media. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |

## setPlaybackRange

```TypeScript
setPlaybackRange(startTimeMs: number, endTimeMs: number, mode?: SeekMode) : Promise<void>
```

Sets the playback range and seeks to the start position of the range based on the specified [SeekMode](arkts-media-seekmode-e.md#seekmode). After the setting, only the content in the specified range of the audio or video file is played. This API uses a promise to return the result. It can be used in the initialized, prepared, paused, stopped, or completed state.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startTimeMs | number | Yes | Start position of the range, in ms. The value range is[0, duration). If **-1** is passed in, the system starts playing from position 0. |
| endTimeMs | number | Yes | End position of the range, in ms. The value range is (startTimeMs, duration]. If**-1** is passed in, the system plays the content until it reaches the final part of the asset. |
| mode | SeekMode | No | Seek mode, which can be **SeekMode.SEEK_PREV_SYNC** or **SeekMode.SEEK_CLOSEST**.<br>The default value is **SeekMode.SEEK_PREV_SYNC**. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. Return by promise. |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |

## setPlaybackRate

```TypeScript
setPlaybackRate(rate: number): void
```

Sets the playback rate. This API can be called only when the AVPlayer is in the prepared, playing, paused, or completed state. The value range is [0.125, 4.0]. You can check whether the setting takes effect through the [playbackRateDone](arkts-media-avplayer-i.md#on-7) event. > **NOTE** > > This API is not supported in live mode.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rate | number | Yes | Playback rate, which is in the range [0.125, 4.0]. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400108](../errorcode-media.md#5400108-parameter-value-out-of-range) | The parameter check failed, parameter value out of range. |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed, if invalid state or live stream. |

## setPlaybackStrategy

```TypeScript
setPlaybackStrategy(strategy: PlaybackStrategy): Promise<void>
```

Sets a playback strategy. This API can be called only when the AVPlayer is in the initialized state. This API uses a promise to return the result.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| strategy | PlaybackStrategy | Yes | Playback strategy. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types. 2. Parameterverification failed. |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |

## setSpeed

```TypeScript
setSpeed(speed: PlaybackSpeed): void
```

Sets the playback speed. This API can be called only when the AVPlayer is in the prepared, playing, paused, or completed state. You can check whether the speed setting takes effect by subscribing to the [on('speedDone')](arkts-media-avplayer-i.md#on-6) event. > **NOTE** > > This method is not supported in live streaming scenarios.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| speed | PlaybackSpeed | Yes | Playback speed to set. |

## setSuperResolution

```TypeScript
setSuperResolution(enabled: boolean) : Promise<void>
```

Enables or disables super resolution. This API can be called when the AVPlayer is in the initialized, prepared, playing, paused, completed, or stopped state. This API uses a promise to return the result. Before calling [prepare()](arkts-media-avplayer-i.md#prepare-1), enable super resolution by using [PlaybackStrategy](arkts-media-playbackstrategy-i.md#playbackstrategy).

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to enable or disable super resolution. **true** to enable, **false**otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |
| [5410003](../errorcode-media.md#5410003-super-resolution-is-not-supported) | Super-resolution not supported. Return by promise. |
| [5410004](../errorcode-media.md#5410004-super-resolution-is-not-enabled) | Missing enable super-resolution feature in {@link PlaybackStrategy}.Return by promise. |

## setTrackSelectionFilter

```TypeScript
setTrackSelectionFilter(filter : TrackSelectionFilter): Promise<void>
```

Sets a track selection filter for the player. The player will use this filter to select available tracks for playback. This API uses a promise to return the result.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | TrackSelectionFilter | Yes | Track selection filter. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. |

## setVideoWindowSize

```TypeScript
setVideoWindowSize(width: number, height: number) : Promise<void>
```

Sets the resolution of the output video after super resolution. This API can be called when the AVPlayer is in the initialized, prepared, playing, paused, completed, or stopped state. This API uses a promise to return the result. The input parameter values must be in the range of 320 × 320 to 1920 × 1080 (in px). Before calling [prepare()](arkts-media-avplayer-i.md#prepare-1), enable super resolution by using [PlaybackStrategy](arkts-media-playbackstrategy-i.md#playbackstrategy).

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| width | number | Yes | Target width of the output video after super resolution. The value range is [320-1920], inpx. |
| height | number | Yes | Target height of the output video after super resolution. The value range is [320-1080],in px. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Return by promise. |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |
| [5410003](../errorcode-media.md#5410003-super-resolution-is-not-supported) | Super-resolution not supported. Return by promise. |
| [5410004](../errorcode-media.md#5410004-super-resolution-is-not-enabled) | Missing enable super-resolution feature in {@link PlaybackStrategy}.Return by promise. |

## setVolume

```TypeScript
setVolume(volume: number): void
```

Sets the playback volume. This API can be called only when the AVPlayer is in the prepared, playing, paused, or completed state. You can check whether the volume setting takes effect by subscribing to the [on('volumeChange')](arkts-media-avplayer-i.md#on-3) event.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volume | number | Yes | Relative volume. The value ranges from 0.00 to 1.00. The value **1.00** indicates themaximum volume (100%). |

## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

Stops audio and video playback. This API can be called only when the AVPlayer is in the prepared, playing, paused, or completed state. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by callback. |

## stop

```TypeScript
stop(): Promise<void>
```

Stops audio and video playback. This API can be called only when the AVPlayer is in the prepared, playing, paused, or completed state. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |

## audioEffectMode

```TypeScript
audioEffectMode ?: audio.AudioEffectMode
```

Audio effect mode. The audio effect mode is a dynamic property and is restored to the default value **EFFECT_DEFAULT** when **usage** of **audioRendererInfo** is changed. It can be set only when the AVPlayer is in the prepared, playing, paused, or completed state.

**Type:** audio.AudioEffectMode

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

## audioInterruptMode

```TypeScript
audioInterruptMode?: audio.InterruptMode
```

Audio interruption mode. The default value is **SHARE_MODE**. It is a dynamic property and can be set only when the AVPlayer is in the prepared, playing, paused, or completed state. To take effect, this property must be set before [play()](arkts-media-avplayer-i.md#play-1) is called for the first time.

**Type:** audio.InterruptMode

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

## audioRendererInfo

```TypeScript
audioRendererInfo?: audio.AudioRendererInfo
```

Audio renderer information. If the media source contains videos, the default value of **usage** is **STREAM_USAGE_MOVIE**. Otherwise, the default value of **usage** is **STREAM_USAGE_MUSIC**. The default value of **rendererFlags** is 0. If the default value of **usage** does not meet the requirements, configure [audio.AudioRendererInfo](../../apis-audio-kit/arkts-apis/arkts-audio-audiorendererinfo-i.md#audiorendererinfo). This parameter can be set only when the AVPlayer is in the initialized state. To take effect, this property must be set before [prepare()](arkts-media-avplayer-i.md#prepare-1) is called for the first time.

**Type:** audio.AudioRendererInfo

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

## currentTime

```TypeScript
readonly currentTime: number
```

Current video playback position, in ms. It can be used as a query parameter when the AVPlayer is in the prepared, playing, paused, or completed state. The value **-1** indicates an invalid value. In live mode, **-1** is returned by default.

**Type:** number

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

## dataSrc

```TypeScript
dataSrc?: AVDataSrcDescriptor
```

Descriptor of a streaming media asset. It can be set only when the AVPlayer is in the idle state. **Use scenario**: An application plays a file that has been downloaded from a remote source and saved locally. When the application has not yet downloaded the complete audio or video resources, it can start playing the data that has already been retrieved. By writing the retrieved data to a local file and simultaneously reading from that file, the application can achieve the capability of playing while caching. The video formats MP4, MPEG-TS, and MKV are supported. The audio formats M4A, AAC, MP3, OGG, WAV, FLAC, AMR, and APE are supported. A user is obtaining an audio and video file from a remote server and wants to play the downloaded file content. To implement this scenario, do as follows: 1. Obtain the total file size, in bytes. If the total size cannot be obtained, set **fileSize** to **-1**. 2. Implement the **func** callback to fill in data. If **fileSize** is **-1**, the format of **func** is **func(buffer: ArrayBuffer, length: number)**, and the AVPlayer obtains data in sequence; otherwise, the format is **func(buffer: ArrayBuffer, length: number, pos: number)**, and the AVPlayer seeks and obtains data in the required positions. 3. Set **AVDataSrcDescriptor {fileSize = size, callback = func}**. **Notes:** If the media file to play is in MP4/M4A format, ensure that the **moov** field (specifying the media information) is before the **mdat** field (specifying the media data) or the fields before the **moov** field is less than 10 MB. Otherwise, the parsing fails and the media file cannot be played. **NOTE** WebM is no longer supported since API version 11.

**Type:** AVDataSrcDescriptor

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

## duration

```TypeScript
readonly duration: number
```

Video duration, in ms. It can be used as a query parameter when the AVPlayer is in the prepared, playing, paused, or completed state. The value **-1** indicates an invalid value. In live mode, **-1** is returned by default.

**Type:** number

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

## fdSrc

```TypeScript
fdSrc?: AVFileDescriptor
```

FD of the media asset. It can be set only when the AVPlayer is in the idle state. **Use scenario**: This property is required when media assets of an application are continuously stored in a file. The video formats MP4, MPEG-TS, and MKV are supported. The audio formats M4A, AAC, MP3, OGG, WAV, FLAC, AMR, and APE are supported. Assume that a media file that stores continuous assets consists of the following: Video 1 (address offset: 0, byte length: 100) Video 2 (address offset: 101; byte length: 50) Video 3 (address offset: 151, byte length: 150) 1. To play video 1: AVFileDescriptor { fd = resource handle; offset = 0; length = 100; } 2. To play video 2: AVFileDescriptor { fd = resource handle; offset = 101; length = 50; } 3. To play video 3: AVFileDescriptor { fd = resource handle; offset = 151; length = 150; } To play an independent media file, use **src=fd://xx**. **NOTE** WebM is no longer supported since API version 11.

**Type:** AVFileDescriptor

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

## height

```TypeScript
readonly height: number
```

Video height, in px. It can be used as a query parameter when the AVPlayer is in the prepared, playing, paused, or completed state. The value **0** indicates an invalid value.

**Type:** number

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

## loop

```TypeScript
loop: boolean
```

Whether to loop playback. **true** to loop, **false** otherwise. The default value is **false**. It is a dynamic property and can be set only when the AVPlayer is in the prepared, playing, paused, or completed state. This setting is not supported in live mode.

**Type:** boolean

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

## playlistLoopMode

```TypeScript
playlistLoopMode?: PlaylistLoopMode
```

Set the loop mode when playing the media source playlist. <br>Default value:PLAYLIST_LOOP_MODE_ALL, which means loops all items in the playlist.

**Type:** PlaylistLoopMode

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

## privacyType

```TypeScript
privacyType?: audio.AudioPrivacyType
```

Audio privacy configuration. For more information, see {@link #audio.AudioPrivacyType}. Default value: PRIVACY_TYPE_PUBLIC.

**Type:** audio.AudioPrivacyType

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

## state

```TypeScript
readonly state: AVPlayerState
```

AVPlayer state. It can be used as a query parameter when the AVPlayer is in any state.

**Type:** AVPlayerState

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

## surfaceId

```TypeScript
surfaceId?: string
```

Video window ID. By default, there is no video window. This property can be set for the first time only when the AVPlayer is in the initialized state. It can be updated when the AVPlayer is in the prepared, playing, paused, completed, or stopped state. After the reset, the video is played in the new window. **Use scenario**: It is used to render the window for video playback (not involved in audio-only playback scenarios). [Create a surface ID through XComponent](../../apis-arkui/arkts-components/arkts-arkui-xcomponentcontroller-c.md#getxcomponentsurfaceid-1).

**Type:** string

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

## url

```TypeScript
url?: string
```

URL of the media asset. It can be set only when the AVPlayer is in the idle state. Supported video formats: MP4, MPEG-TS, and MKV. Supported audio formats: M4A, AAC, MP3, OGG, WAV, FLAC, AMR, and APE. **Example of supported URLs**: 1. FD: fd://xx ![](../../../../reference/apis-media-kit/figures/en-us_image_url.png) 2. HTTP: http://xx 3. HTTPS: https://xx 4. HLS: http://xx or https://xx **NOTE** - To set the playback URL, you need to declare the [ohos.permission.INTERNET](../../../../security/AccessToken/permissions-for-all.md#ohospermissioninternet) permission. The related error code is [201 Permission Denied](../../../../reference/errorcode-universal.md#201-permission-denied). - WebM is no longer supported since API version 11. - After the resource handle (FD) is transferred to an AVPlayer instance, do not use the resource handle to perform other read and write operations, including but not limited to transferring this handle to other AVPlayer, AVMetadataExtractor, AVImageGenerator, or AVTranscoder instance. Competition occurs when multiple AVPlayers use the same resource handle to read and write files at the same time, resulting in errors in obtaining data.

**Type:** string

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

## videoScaleType

```TypeScript
videoScaleType?: VideoScaleType
```

Video scale type. The default value is **VIDEO_SCALE_TYPE_FIT**. It is a dynamic property and can be set only when the AVPlayer is in the prepared, playing, paused, or completed state.

**Type:** VideoScaleType

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

## width

```TypeScript
readonly width: number
```

Video width, in px. It can be used as a query parameter when the AVPlayer is in the prepared, playing, paused, or completed state. The value **0** indicates an invalid value.

**Type:** number

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

