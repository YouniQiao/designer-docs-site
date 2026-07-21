# @ohos.multimedia.media

The multimedia subsystem provides a set of simple and easy-to-use APIs for you to access the system and use media resources.

**Since:** 6

<!--Device-unnamed-declare namespace media--><!--Device-unnamed-declare namespace media-End-->

**System capability:** 
- API version 12 and later: SystemCapability.Multimedia.Media.Core

## Modules to Import

```TypeScript
import { media } from '@kit.MediaKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createAVAdsController](arkts-media-media-createavadscontroller-f.md#createavadscontroller) | Create an ad playback controller associated with the player instance. |
| [createAVDownloaderManager](arkts-media-media-createavdownloadermanager-f.md#createavdownloadermanager) | Creating a Streaming Resource Download Task Manager |
| [createAVImageGenerator](arkts-media-media-createavimagegenerator-f.md#createavimagegenerator) | Creates an AVImageGenerator instance. This API uses a promise to return the result. |
| [createAVImageGenerator](arkts-media-media-createavimagegenerator-f.md#createavimagegenerator-1) | Creates an AVImageGenerator instance. This API uses an asynchronous callback to return the result. |
| [createAVMetadataExtractor](arkts-media-media-createavmetadataextractor-f.md#createavmetadataextractor) | Creates an AVMetadataExtractor instance. This API uses a promise to return the result. |
| [createAVMetadataExtractor](arkts-media-media-createavmetadataextractor-f.md#createavmetadataextractor-1) | Creates an AVMetadataExtractor instance. This API uses an asynchronous callback to return the result. |
| [createAVPlayer](arkts-media-media-createavplayer-f.md#createavplayer) | Creates an AVPlayer instance. This API uses an asynchronous callback to return the result. |
| [createAVPlayer](arkts-media-media-createavplayer-f.md#createavplayer-1) | Creates an AVPlayer instance. This API uses a promise to return the result. |
| [createAVRecorder](arkts-media-media-createavrecorder-f.md#createavrecorder) | Creates an AVRecorder instance. This API uses an asynchronous callback to return the result. |
| [createAVRecorder](arkts-media-media-createavrecorder-f.md#createavrecorder-1) | Creates an AVRecorder instance. This API uses a promise to return the result. |
| [createAVScreenCaptureRecorder](arkts-media-media-createavscreencapturerecorder-f.md#createavscreencapturerecorder) | Creates an AVScreenCaptureRecorder instance. This API uses a promise to return the result. |
| [createAVTranscoder](arkts-media-media-createavtranscoder-f.md#createavtranscoder) | Creates an AVTranscoder instance. This API uses a promise to return the result. |
| [createAudioPlayer](arkts-media-media-createaudioplayer-f.md#createaudioplayer) | Creates an AudioPlayer instance in synchronous mode. |
| [createAudioRecorder](arkts-media-media-createaudiorecorder-f.md#createaudiorecorder) | Creates an AudioRecorder instance to control audio recording. Only one AudioRecorder instance can be created per device. |
| [createMediaSourceWithDataSource](arkts-media-media-createmediasourcewithdatasource-f.md#createmediasourcewithdatasource) | Creates a media source from a custom data source. |
| [createMediaSourceWithDirectory](arkts-media-media-createmediasourcewithdirectory-f.md#createmediasourcewithdirectory) | Create a MediaSource object from the given directory. |
| [createMediaSourceWithFd](arkts-media-media-createmediasourcewithfd-f.md#createmediasourcewithfd) | Creates a media source from file descriptor. |
| [createMediaSourceWithStreamData](arkts-media-media-createmediasourcewithstreamdata-f.md#createmediasourcewithstreamdata) | Creates a multi-bitrate media source for streaming media. Currently, only the HTTP-FLV multi-bitrate media source is supported. |
| [createMediaSourceWithUrl](arkts-media-media-createmediasourcewithurl-f.md#createmediasourcewithurl) | Creates a media source for streaming media to be pre-downloaded. |
| [createSoundPool](arkts-media-media-createsoundpool-f.md#createsoundpool) | Creates a SoundPool instance. This API uses an asynchronous callback to return the result. |
| [createSoundPool](arkts-media-media-createsoundpool-f.md#createsoundpool-1) | Creates a SoundPool instance. This API uses a promise to return the result. |
| [createVideoPlayer](arkts-media-media-createvideoplayer-f.md#createvideoplayer) | Creates a **VideoPlayer** instance. This API uses an asynchronous callback to return the result. |
| [createVideoPlayer](arkts-media-media-createvideoplayer-f.md#createvideoplayer-1) | Creates a VideoPlayer instance. This API uses a promise to return the result. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [createParallelSoundPool](arkts-media-media-createparallelsoundpool-f-sys.md#createparallelsoundpool) | Creates a **SoundPool** instance. This API uses a promise to return the result.  If a **SoundPool** instance created using [createSoundPool](#createSoundPool) is used to play the same sound again, it stops the current audio and restarts the audio. However, if the instance is created using **createParallelSoundPool**, it keeps playing the first audio and starts the new one alongside it. |
| [createVideoRecorder](arkts-media-media-createvideorecorder-f-sys.md#createvideorecorder) | The maintenance of this interface has been stopped since version api 9. Please use AVRecorder Creates an VideoRecorder instance. |
| [createVideoRecorder](arkts-media-media-createvideorecorder-f-sys.md#createvideorecorder-1) | The maintenance of this interface has been stopped since version api 9. Please use AVRecorder Creates an VideoRecorder instance. |
| [getAVScreenCaptureConfigurableParameters](arkts-media-media-getavscreencaptureconfigurableparameters-f-sys.md#getavscreencaptureconfigurableparameters) | get Configurations which user can changes from AVScreenCapture server |
| [getScreenCaptureMonitor](arkts-media-media-getscreencapturemonitor-f-sys.md#getscreencapturemonitor) | Obtains a **ScreenCaptureMonitor** instance. This API uses a promise to return the result. |
| [reportAVScreenCaptureUserChoice](arkts-media-media-reportavscreencaptureuserchoice-f-sys.md#reportavscreencaptureuserchoice) | Reports the user selection result in the screen capture privacy dialog box to the AVScreenCapture server to determine whether to start screen capture. Screen capture starts only when the user touches a button to continue the operation.This API is called by the system application that creates the dialog box. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [AVAdsController](arkts-media-media-avadscontroller-i.md) | Definition of the Ad Content Control Interface |
| [AVDataSrcDescriptor](arkts-media-media-avdatasrcdescriptor-i.md) | Defines the descriptor of an audio and video file, which is used in DataSource playback mode.Use scenario: An application can create a playback instance and start playback before it finishes downloading the audio and video resources. |
| [AVDownloaderManager](arkts-media-media-avdownloadermanager-i.md) | Definition of the Offline Download Management Interface |
| [AVFileDescriptor](arkts-media-media-avfiledescriptor-i.md) | Media file descriptor. The caller needs to ensure that the fd is valid and the offset and length are correct. |
| [AVImageGenerator](arkts-media-media-avimagegenerator-i.md) | AVImageGenerator is a class for video thumbnail retrieval. It provides APIs to obtain a thumbnail from a video.Before calling any API in AVImageGenerator, you must use [createAVImageGenerator()](arkts-media-media-createavimagegenerator-f.md#createavimagegenerator-1)to create an AVImageGenerator instance.  For details about the demo for obtaining video thumbnails, see [Obtaining Video Thumbnails](docroot://media/media/avimagegenerator.md). |
| [AVMetadata](arkts-media-media-avmetadata-i.md) | Defines the audio and video metadata. Parameters that are not declared as read-only in [AVRecorderConfig](#AVRecorderConfig) can be used as input parameters for recording of [AVRecorder](#AVRecorder). |
| [AVMetadataExtractor](arkts-media-media-avmetadataextractor-i.md) | AVMetadataExtractor is a class for metadata retrieval. It provides APIs to obtain metadata and thumbnails from media assets. Before calling any API of AVMetadataExtractor, you must use [media.createAVMetadataExtractor](arkts-media-media-createavmetadataextractor-f.md#createavmetadataextractor-1)to create an AVMetadataExtractor instance.  For details about the demo of obtaining audio or video metadata and video thumbnails, see [Using AVMetadataExtractor to Extract Audio and Video Metadata (ArkTS)](docroot://media/media/avmetadataextractor.md). |
| [AVMetricsEvent](arkts-media-media-avmetricsevent-i.md) | Describes the information of an Metrics Event. |
| [AVPlayer](arkts-media-media-avplayer-i.md) | AVPlayer is a playback management class. It provides APIs to manage and play media assets. Before calling any API in AVPlayer, you must use [createAVPlayer()](arkts-media-media-createavplayer-f.md#createavplayer-1) to create an AVPlayer instance.  When using the AVPlayer instance, you are advised to register the following callbacks to proactively obtain status changes: [on('stateChange')](media.AVPlayer.on(type: 'stateChange', callback: OnAVPlayerStateChangeHandle)):listens for AVPlayer state changes. [on('error')](media.AVPlayer.on(type: 'error', callback: ErrorCallback)):listens for error events.  Applications must properly manage AVPlayer instances according to their specific needs, creating and freeing them when necessary. Holding too many AVPlayer instances can lead to high memory usage, and in some cases, the system might terminate applications to free up resources.  For details about the audio and video playback demo, see [Audio Playback](docroot://media/media/using-avplayer-for-playback.md) and [Video Playback](docroot://media/media/video-playback.md). |
| [AVRecorder](arkts-media-media-avrecorder-i.md) | AVRecorder is a class for audio and video recording management. It provides APIs to record media assets. Before calling any API in AVRecorder, you must use [createAVRecorder()](arkts-media-media-createavrecorder-f.md#createavrecorder-1) to create an AVRecorder instance.  For details about the audio and video recording demo, see [Audio Recording](docroot://media/media/using-avrecorder-for-recording.md) and [Video Recording](docroot://media/media/video-recording.md). |
| [AVRecorderConfig](arkts-media-media-avrecorderconfig-i.md) | Describes the audio and video recording parameters.  The **audioSourceType** and **videoSourceType** parameters are used to distinguish audio-only recording,video-only recording, and audio and video recording. For audio-only recording, set only **audioSourceType**.For video-only recording, set only **videoSourceType**. For audio and video recording, set both **audioSourceType** and **videoSourceType**. |
| [AVRecorderProfile](arkts-media-media-avrecorderprofile-i.md) | Describes the audio and video recording profile. |
| [AVScreenCaptureRecordConfig](arkts-media-media-avscreencapturerecordconfig-i.md) | Defines the screen capture parameters. |
| [AVScreenCaptureRecorder](arkts-media-media-avscreencapturerecorder-i.md) | AVScreenCaptureRecorder is a class for screen capture management. It provides APIs for screen capture. Before calling any API in AVScreenCaptureRecorder, you must use [createAVScreenCaptureRecorder()](arkts-media-media-createavscreencapturerecorder-f.md#createavscreencapturerecorder-1) to create an AVScreenCaptureRecorder instance. |
| [AVScreenCaptureStrategy](arkts-media-media-avscreencapturestrategy-i.md) | Provides the media AVScreenCaptureStrategy definition. |
| [AVTimedMetaData](arkts-media-media-avtimedmetadata-i.md) | Interface for defining time base metadata |
| [AVTranscoder](arkts-media-media-avtranscoder-i.md) | AVTranscoder is a transcoding management class. It provides APIs to transcode videos. Before calling any API in AVTranscoder, you must use [createAVTranscoder()](arkts-media-media-createavtranscoder-f.md#createavtranscoder-1) to create an AVTranscoder instance.  For details about the AVTranscoder demo, see [Using AVTranscoder for Transcoding](docroot://media/media/using-avtranscoder-for-transcodering.md). |
| [AVTranscoderConfig](arkts-media-media-avtranscoderconfig-i.md) | Describes the video transcoding parameters. |
| [AudioPlayer](arkts-media-media-audioplayer-i.md) | AudioPlayer is a class for audio playback management. It provides APIs to manage and play audio. Before calling any API in AudioPlayer, you must use [createAudioPlayer()](arkts-media-media-createaudioplayer-f.md#createaudioplayer-1) to create an AudioPlayer instance. |
| [AudioRecorder](arkts-media-media-audiorecorder-i.md) | AudioRecorder is a class for audio recording management. It provides APIs to record audio. Before calling any API in AudioRecorder, you must use [createAudioRecorder()](arkts-media-media-createaudiorecorder-f.md#createaudiorecorder-1) to create an AudioRecorder instance. |
| [AudioRecorderConfig](arkts-media-media-audiorecorderconfig-i.md) | Provides the audio recorder configuration definitions. |
| [EncoderInfo](arkts-media-media-encoderinfo-i.md) | Describes the information about an encoder. |
| [FrameInfo](arkts-media-media-frameinfo-i.md) | Defines the frame info when fetch picture form a video. |
| [Location](arkts-media-media-location-i.md) | Provides the geographical location definitions for media resources. |
| [MediaDescription](arkts-media-media-mediadescription-i.md) | Provides the container definition for media description key-value pairs. |
| [MediaSource](arkts-media-media-mediasource-i.md) | The MediaSource class defines the media data information, which is from [createMediaSourceWithUrl](arkts-media-media-createmediasourcewithurl-f.md#createmediasourcewithurl-1). |
| [MediaSourceLoader](arkts-media-media-mediasourceloader-i.md) | Defines a media data loader, which needs to be implemented by applications. |
| [MediaSourceLoadingRequest](arkts-media-media-mediasourceloadingrequest-i.md) | The MediaSourceLoadingRequest class defines a loading request object. Applications use this object to obtain the location of the requested resource and to interact with the player for data exchange. |
| [MediaStream](arkts-media-media-mediastream-i.md) | Media Stream. AVPlayer use this for mediaData access, current version only support live stream. |
| [OutputSize](arkts-media-media-outputsize-i.md) | This interface is used to define the output image size. |
| [PixelMapParams](arkts-media-media-pixelmapparams-i.md) | Defines the format parameters of the video thumbnail to be obtained. |
| [PlaybackInfo](arkts-media-media-playbackinfo-i.md) | Provides player statistic info. |
| [PlaybackStrategy](arkts-media-media-playbackstrategy-i.md) | Provides preferred playback settings for player. |
| [Range](arkts-media-media-range-i.md) | Provides Range with lower and upper limit. |
| [SeiMessage](arkts-media-media-seimessage-i.md) | Describes the information of an SEI message. |
| [SubtitleInfo](arkts-media-media-subtitleinfo-i.md) | Provides subtitle information. When a subtitle update event is subscribed to, the information about the external subtitle is returned through a callback.Can be synchronized to the time reported by AVPlayer#timeUpdate event |
| [TrackSelectionFilter](arkts-media-media-trackselectionfilter-i.md) | Describes the filter conditions for track selection. |
| [VideoPlayer](arkts-media-media-videoplayer-i.md) | VideoPlayer is a class for video playback management. It provides APIs to manage and play videos. Before calling any API in VideoPlayer, you must use [createVideoPlayer()](arkts-media-media-createvideoplayer-f.md#createvideoplayer-1)to create a VideoPlayer instance. |
| [VideoSize](arkts-media-media-videosize-i.md) | Describes the video Dimensions. |
| [WatermarkConfiguration](arkts-media-media-watermarkconfiguration-i.md) | Set configuration of a watermark. The position starts at top left corner. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [AVMetadata](arkts-media-media-avmetadata-i-sys.md) | Defines the audio and video metadata. Parameters that are not declared as read-only in [AVRecorderConfig](#AVRecorderConfig) can be used as input parameters for recording of [AVRecorder](#AVRecorder). |
| [AVMetadataExtractor](arkts-media-media-avmetadataextractor-i-sys.md) | AVMetadataExtractor is a class for metadata retrieval. It provides APIs to obtain metadata and thumbnails from media assets. Before calling any API of AVMetadataExtractor, you must use [media.createAVMetadataExtractor](arkts-media-media-createavmetadataextractor-f.md#createavmetadataextractor-1)to create an AVMetadataExtractor instance.  For details about the demo of obtaining audio or video metadata and video thumbnails, see [Using AVMetadataExtractor to Extract Audio and Video Metadata (ArkTS)](docroot://media/media/avmetadataextractor.md). |
| [AVPlayer](arkts-media-media-avplayer-i-sys.md) | AVPlayer is a playback management class. It provides APIs to manage and play media assets. Before calling any API in AVPlayer, you must use [createAVPlayer()](arkts-media-media-createavplayer-f.md#createavplayer-1) to create an AVPlayer instance.  When using the AVPlayer instance, you are advised to register the following callbacks to proactively obtain status changes: [on('stateChange')](media.AVPlayer.on(type: 'stateChange', callback: OnAVPlayerStateChangeHandle)):listens for AVPlayer state changes. [on('error')](media.AVPlayer.on(type: 'error', callback: ErrorCallback)):listens for error events.  Applications must properly manage AVPlayer instances according to their specific needs, creating and freeing them when necessary. Holding too many AVPlayer instances can lead to high memory usage, and in some cases, the system might terminate applications to free up resources.  For details about the audio and video playback demo, see [Audio Playback](docroot://media/media/using-avplayer-for-playback.md) and [Video Playback](docroot://media/media/video-playback.md). |
| [AVRecorder](arkts-media-media-avrecorder-i-sys.md) | AVRecorder is a class for audio and video recording management. It provides APIs to record media assets. Before calling any API in AVRecorder, you must use [createAVRecorder()](arkts-media-media-createavrecorder-f.md#createavrecorder-1) to create an AVRecorder instance.  For details about the audio and video recording demo, see [Audio Recording](docroot://media/media/using-avrecorder-for-recording.md) and [Video Recording](docroot://media/media/video-recording.md). |
| [AVRecorderConfig](arkts-media-media-avrecorderconfig-i-sys.md) | Describes the audio and video recording parameters.  The **audioSourceType** and **videoSourceType** parameters are used to distinguish audio-only recording,video-only recording, and audio and video recording. For audio-only recording, set only **audioSourceType**.For video-only recording, set only **videoSourceType**. For audio and video recording, set both **audioSourceType** and **videoSourceType**. |
| [AVRecorderProfile](arkts-media-media-avrecorderprofile-i-sys.md) | Describes the audio and video recording profile. |
| [AVScreenCaptureStrategy](arkts-media-media-avscreencapturestrategy-i-sys.md) | Provides the media AVScreenCaptureStrategy definition. |
| [PixelMapParams](arkts-media-media-pixelmapparams-i-sys.md) | Defines the format parameters of the video thumbnail to be obtained. |
| [PlaybackStrategy](arkts-media-media-playbackstrategy-i-sys.md) | Provides preferred playback settings for player. |
| [ScreenCaptureMonitor](arkts-media-media-screencapturemonitor-i-sys.md) | A class that provides APIs to query and monitor the system screen recorder status. Before calling any API,you must use getScreenCaptureMonitor() to obtain a ScreenCaptureMonitor instance. |
| [VideoRecorder](arkts-media-media-videorecorder-i-sys.md) | The maintenance of this interface has been stopped since version api 9. Please use AVRecorder.Manages and record video. Before calling an VideoRecorder method, you must use createVideoRecorder()to create an VideoRecorder instance. |
| [VideoRecorderConfig](arkts-media-media-videorecorderconfig-i-sys.md) | Provides the video recorder configuration definitions. |
| [VideoRecorderProfile](arkts-media-media-videorecorderprofile-i-sys.md) | Provides the video recorder profile definitions. |
| [WatermarkConfig](arkts-media-media-watermarkconfig-i-sys.md) | Set configures of a watermark to AVRecorder. The position starts at top left corner. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [AVErrorCode](arkts-media-media-averrorcode-e.md) | Enumerates the types of [Media error codes](docroot://reference/apis-media-kit/errorcode-media.md). |
| [AVImageQueryOptions](arkts-media-media-avimagequeryoptions-e.md) | Enumerates the relationship between the video frame and the time at which the video thumbnail is obtained.  The time passed in for obtaining the thumbnail may be different from the time of the video frame for which the thumbnail is actually obtained. Therefore, you need to specify their relationship. |
| [AVMetricsEventType](arkts-media-media-avmetricseventtype-e.md) | Enumerates the metric events supported by the media service. |
| [AVMimeTypes](arkts-media-media-avmimetypes-e.md) | Enumerates the MIME type, which is set by using [setMimeType](arkts-media-media-mediasource-i.md#setmimetype-1). |
| [AVScreenCaptureFillMode](arkts-media-media-avscreencapturefillmode-e.md) | Enumerates the video fill modes during screen capture. |
| [AVScreenCaptureRecordPreset](arkts-media-media-avscreencapturerecordpreset-e.md) | Enumerates the encoding and container formats used during screen capture. |
| [AVScreenCaptureStateCode](arkts-media-media-avscreencapturestatecode-e.md) | Enumerates the screen capture states used in callbacks. |
| [AacProfile](arkts-media-media-aacprofile-e.md) | Enumerates the supported Advanced Audio Coding (AAC) formats. |
| [AudioEncoder](arkts-media-media-audioencoder-e.md) | Enumerates the audio encoding formats. |
| [AudioOutputFormat](arkts-media-media-audiooutputformat-e.md) | Enumerates the audio output formats. |
| [AudioSourceType](arkts-media-media-audiosourcetype-e.md) | Enumerates the audio source types for video recording. |
| [BufferingInfoType](arkts-media-media-bufferinginfotype-e.md) | Enumerates the buffering event types. |
| [CodecMimeType](arkts-media-media-codecmimetype-e.md) | Enumerates the codec MIME types. |
| [ContainerFormatType](arkts-media-media-containerformattype-e.md) | Enumerates the container format types (CFTs). |
| [FetchResult](arkts-media-media-fetchresult-e.md) | Enumerates the results of obtaining thumbnails in batches. |
| [FileGenerationMode](arkts-media-media-filegenerationmode-e.md) | Enumerates the modes for creating media files. |
| [HdrType](arkts-media-media-hdrtype-e.md) | Enumerates the HDR types. |
| [LoadingRequestError](arkts-media-media-loadingrequesterror-e.md) | Enumerates the reasons for data loading status changes. |
| [MediaDescriptionKey](arkts-media-media-mediadescriptionkey-e.md) | Enumerates the media description keys. |
| [MediaErrorCode](arkts-media-media-mediaerrorcode-e.md) | Enumerates the media error codes. |
| [MediaType](arkts-media-media-mediatype-e.md) | Enumerates the media types. |
| [PickerMode](arkts-media-media-pickermode-e.md) | Enumerates the display mode for the screen capture picker. |
| [PlaybackInfoKey](arkts-media-media-playbackinfokey-e.md) | Enumerates the playback description keys. |
| [PlaybackMetricsKey](arkts-media-media-playbackmetricskey-e.md) | Enumerates the playback metric keys. |
| [PlaybackSpeed](arkts-media-media-playbackspeed-e.md) | Enumerates the video playback speeds, which can be passed in the **setSpeed** API. |
| [PlaylistLoopMode](arkts-media-media-playlistloopmode-e.md) | Enumerates loop mode keys for playback. |
| [SeekMode](arkts-media-media-seekmode-e.md) | Enumerates the video playback seek modes, which can be passed in the **seek** API. |
| [SoundInterruptMode](arkts-media-media-soundinterruptmode-e.md) | Enumerates the interruption modes of the audio files with the same ID in SoundPool. |
| [StateChangeReason](arkts-media-media-statechangereason-e.md) | Enumerates the reasons for the state transition of the AVPlayer or AVRecorder instance. The enum value is reported together with **state**. |
| [SwitchMode](arkts-media-media-switchmode-e.md) | Enumerates the **selectTrack** modes for video playback.  SwitchMode can be passed as a parameter through the **selectTrack** method. Currently, both DASH and HLS video tracks support this extended parameter. (HLS video tracks support this extended parameter since API version 24.) |
| [VideoScaleType](arkts-media-media-videoscaletype-e.md) | Enumerates the video scale modes. |
| [VideoSourceType](arkts-media-media-videosourcetype-e.md) | Enumerates the video source types for video recording. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [AVErrorCode](arkts-media-media-averrorcode-e-sys.md) | Enumerates the types of [Media error codes](docroot://reference/apis-media-kit/errorcode-media.md). |
| [MetaSourceType](arkts-media-media-metasourcetype-e-sys.md) | Enumerates meta source type for recorder. |
| [PixelFormat](arkts-media-media-pixelformat-e-sys.md) | Enumerates the color formats supported by the video thumbnail. |
| [ScreenCaptureEvent](arkts-media-media-screencaptureevent-e-sys.md) | Enumerates the states available for the system screen recorder. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [AVDownloadTaskState](arkts-media-media-avdownloadtaskstate-t.md) | Enumerates the states of the download task. |
| [AVPlayerState](arkts-media-media-avplayerstate-t.md) | Describes the state of the [AVPlayer](arkts-multimedia-media.md). Your application can proactively obtain the AVPlayer state through the **state** property or obtain the reported AVPlayer state by subscribing to the [stateChange](@ohos.multimedia.media:media.AVPlayer.on(type: 'stateChange', callback: OnAVPlayerStateChangeHandle))event. For details about the rules for state transition, see [Audio Playback](docroot://media/media/using-avplayer-for-playback.md). |
| [AVRecorderState](arkts-media-media-avrecorderstate-t.md) | Enumerates the AVRecorder states. You can obtain the state through the **state** property. |
| [AudioState](arkts-media-media-audiostate-t.md) | Describes the audio playback state. You can obtain the state through the **state** property. |
| [OnAVDownloadProgressChangeHandle](arkts-media-media-onavdownloadprogresschangehandle-t.md) | Describes the callback invoked for the AVDownloader progress change event. |
| [OnAVDownloadTaskStateHandle](arkts-media-media-onavdownloadtaskstatehandle-t.md) | Describes the callback invoked for the AVDownloader state change event. |
| [OnAVPlayerStateChangeHandle](arkts-media-media-onavplayerstatechangehandle-t.md) | Describes the callback invoked for the AVPlayer state change event. |
| [OnAVRecorderStateChangeHandler](arkts-media-media-onavrecorderstatechangehandler-t.md) | Describes the callback invoked for the AVRecorder state change event. |
| [OnAdsEventAdsStartedHandle](arkts-media-media-onadseventadsstartedhandle-t.md) | Describes the callback function of the ad content playback start event. |
| [OnAdsEventLoadingErrorHandle](arkts-media-media-onadseventloadingerrorhandle-t.md) | Describes the callback function for the ad media resource loading error event. |
| [OnBufferingUpdateHandler](arkts-media-media-onbufferingupdatehandler-t.md) | Describes the callback invoked for the buffering update event. |
| [OnFrameFetched](arkts-media-media-onframefetched-t.md) | Describes the callback invoked when thumbnails are obtained in batches. |
| [OnPlaybackRateDone](arkts-media-media-onplaybackratedone-t.md) | Describes the callback invoked for the event indicating that the playback rate setting is complete. |
| [OnSeiMessageHandle](arkts-media-media-onseimessagehandle-t.md) | Describes the handle used to obtain SEI messages. This is used when in subscriptions to SEI message events, and the callback returns detailed SEI information. |
| [OnSuperResolutionChanged](arkts-media-media-onsuperresolutionchanged-t.md) | Describes the callback used to listen for video super resolution status changes. If super resolution is enabled by using [PlaybackStrategy](arkts-media-media-playbackstrategy-i.md), this callback is invoked to report the super resolution status changes. It is also invoked to report the initial status when the video starts. However,this callback is not invoked when super resolution is not enabled.  Super resolution is automatically disabled in either of the following cases:  * The current super resolution algorithm only works with videos that have a frame rate of 30 fps or lower. If the video frame rate exceeds 30 fps, or if the input frame rate exceeds the processing capability of the super resolution algorithm in scenarios such as fast playback, super resolution is automatically disabled.* The current super resolution algorithm supports input resolutions from 320 × 320 to 1920 × 1080, in px. If the input video resolution exceeds the range during playback, super resolution is automatically disabled. |
| [OnTrackChangeHandler](arkts-media-media-ontrackchangehandler-t.md) | Describes the callback invoked for the track change event. |
| [OnVideoSizeChangeHandler](arkts-media-media-onvideosizechangehandler-t.md) | Describes the callback invoked for the video size change event. |
| [PlayParameters](arkts-media-media-playparameters-t.md) | Describes the playback parameters of the sound pool. |
| [PlaybackMetrics](arkts-media-media-playbackmetrics-t.md) | Describes the container for the key-value pairs of playback metrics. |
| [SoundPool](arkts-media-media-soundpool-t.md) | SoundPool, which provides APIs for loading, unloading, playing, and stopping playing system sounds, setting the volume, and setting the number of loops. |
| [SourceCloseCallback](arkts-media-media-sourceclosecallback-t.md) | This callback function is implemented by applications to release related resources. |
| [SourceOpenCallback](arkts-media-media-sourceopencallback-t.md) | This callback function is implemented by applications to handle resource open requests and return a unique handle for the opened resource. |
| [SourceReadCallback](arkts-media-media-sourcereadcallback-t.md) | This callback function is implemented by applications to handle resource read requests. When data is available,applications should push it to the player using the [respondData](arkts-media-media-mediasourceloadingrequest-i.md#responddata-1)API of the corresponding MediaSourceLoadingRequest object. |
| [VideoPlayState](arkts-media-media-videoplaystate-t.md) | Describes the video playback state. You can obtain the state through the **state** property. |

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [VideoRecordState](arkts-media-media-videorecordstate-t-sys.md) | The maintenance of this interface has been stopped since version api 9. Please use AVRecorderState.Describes video recorder states. |
<!--DelEnd-->

