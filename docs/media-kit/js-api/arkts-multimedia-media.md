# @ohos.multimedia.media

The multimedia subsystem provides a set of simple and easy-to-use APIs for you to access the system and use media resources.

**Since:** 6

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
| [createAVAdsController](arkts-media-createavadscontroller-f.md#createavadscontroller-1) | Create an ad playback controller associated with the player instance. |
| [createAVDownloaderManager](arkts-media-createavdownloadermanager-f.md#createavdownloadermanager-1) | Creating a Streaming Resource Download Task Manager |
| [createAVImageGenerator](arkts-media-createavimagegenerator-f.md#createavimagegenerator-1) | Creates an AVImageGenerator instance. This API uses a promise to return the result. |
| [createAVImageGenerator](arkts-media-createavimagegenerator-f.md#createavimagegenerator-2) | Creates an AVImageGenerator instance. This API uses an asynchronous callback to return the result. |
| [createAVMetadataExtractor](arkts-media-createavmetadataextractor-f.md#createavmetadataextractor-1) | Creates an AVMetadataExtractor instance. This API uses a promise to return the result. |
| [createAVMetadataExtractor](arkts-media-createavmetadataextractor-f.md#createavmetadataextractor-2) | Creates an AVMetadataExtractor instance. This API uses an asynchronous callback to return the result. |
| [createAVPlayer](arkts-media-createavplayer-f.md#createavplayer-1) | Creates an AVPlayer instance. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; - You are advised to create a maximum of 16 AVPlayer instances for an application in both audio and video &gt; playback scenarios.&lt;!--Del--&gt; &gt; &gt; - The actual number of instances that can be created may be different. It depends on the specifications of the &gt; device chip in use. For example, in the case of RK3568, you are advised to create a maximum of 6 AVPlayer &gt; instances for an application in audio and video playback scenarios.&lt;!--DelEnd--&gt; &gt; &gt; - Applications must properly manage AVPlayer instances according to their specific needs, creating and freeing &gt; them when necessary. Holding too many AVPlayer instances can lead to high memory usage, and in some cases, the &gt; system might terminate applications to free up resources. |
| [createAVPlayer](arkts-media-createavplayer-f.md#createavplayer-2) | Creates an AVPlayer instance. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; - You are advised to create a maximum of 16 AVPlayer instances for an application in both audio and video &gt; playback scenarios.&lt;!--Del--&gt; &gt; &gt; - The actual number of instances that can be created may be different. It depends on the specifications of the &gt; device chip in use. For example, in the case of RK3568, you are advised to create a maximum of 6 AVPlayer &gt; instances for an application in audio and video playback scenarios.&lt;!--DelEnd--&gt; &gt; &gt; - Applications should reasonably use AVPlayer objects in accordance with actual service requirements, create them &gt; on demand, and release them in a timely manner. This avoids excessive memory consumption caused by holding too &gt; many AVPlayer instances, which may result in the system terminating the application. |
| [createAVRecorder](arkts-media-createavrecorder-f.md#createavrecorder-1) | Creates an AVRecorder instance. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; An application can create multiple AVRecorder instances. However, because the device shares a common audio &gt; channel, only one instance can record audio at a time. Any attempt to create the second instance for audio &gt; recording fails due to audio channel conflicts. |
| [createAVRecorder](arkts-media-createavrecorder-f.md#createavrecorder-2) | Creates an AVRecorder instance. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; An application can create multiple AVRecorder instances. However, because the device shares a common audio &gt; channel, only one instance can record audio at a time. Any attempt to create the second instance for audio &gt; recording fails due to audio channel conflicts. |
| [createAVScreenCaptureRecorder](arkts-media-createavscreencapturerecorder-f.md#createavscreencapturerecorder-1) | Creates an AVScreenCaptureRecorder instance. This API uses a promise to return the result. |
| [createAVTranscoder](arkts-media-createavtranscoder-f.md#createavtranscoder-1) | Creates an AVTranscoder instance. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; A maximum of 2 AVTranscoder instances can be created. |
| [createAudioPlayer](arkts-media-createaudioplayer-f.md#createaudioplayer-1) | Creates an AudioPlayer instance in synchronous mode. |
| [createAudioRecorder](arkts-media-createaudiorecorder-f.md#createaudiorecorder-1) | Creates an AudioRecorder instance to control audio recording. Only one AudioRecorder instance can be created per device. |
| [createMediaSourceWithDataSource](arkts-media-createmediasourcewithdatasource-f.md#createmediasourcewithdatasource-1) | Creates a media source from a custom data source. |
| [createMediaSourceWithDirectory](arkts-media-createmediasourcewithdirectory-f.md#createmediasourcewithdirectory-1) | Create a MediaSource object from the given directory. |
| [createMediaSourceWithFd](arkts-media-createmediasourcewithfd-f.md#createmediasourcewithfd-1) | Creates a media source from file descriptor. |
| [createMediaSourceWithStreamData](arkts-media-createmediasourcewithstreamdata-f.md#createmediasourcewithstreamdata-1) | Creates a multi-bitrate media source for streaming media. Currently, only the HTTP-FLV multi-bitrate media source is supported. |
| [createMediaSourceWithUrl](arkts-media-createmediasourcewithurl-f.md#createmediasourcewithurl-1) | Creates a media source for streaming media to be pre-downloaded. |
| [createSoundPool](arkts-media-createsoundpool-f.md#createsoundpool-1) | Creates a SoundPool instance. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; - In versions earlier than API version 18, the bottom layer of the created SoundPool object is in singleton mode. &gt; Therefore, an application process can create only one SoundPool instance. &gt; &gt; - In API version 18 and later, the bottom layer of the created SoundPool object is in multiton mode. Therefore, &gt; an application process can create a maximum of 128 SoundPool instances. |
| [createSoundPool](arkts-media-createsoundpool-f.md#createsoundpool-2) | Creates a SoundPool instance. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; - In versions earlier than API version 18, the bottom layer of the created SoundPool object is in singleton mode. &gt; Therefore, an application process can create only one SoundPool instance. &gt; &gt; - In API version 18 and later, the bottom layer of the created SoundPool object is in multiton mode. Therefore, &gt; an application process can create a maximum of 128 SoundPool instances. |
| [createVideoPlayer](arkts-media-createvideoplayer-f.md#createvideoplayer-1) | Creates a **VideoPlayer** instance. This API uses an asynchronous callback to return the result. |
| [createVideoPlayer](arkts-media-createvideoplayer-f.md#createvideoplayer-2) | Creates a VideoPlayer instance. This API uses a promise to return the result. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [createParallelSoundPool](arkts-media-createparallelsoundpool-f-sys.md#createparallelsoundpool-1) | Creates a **SoundPool** instance. This API uses a promise to return the result. If a **SoundPool** instance created using [createSoundPool](#createSoundPool) is used to play the same sound again, it stops the current audio and restarts the audio. However, if the instance is created using **createParallelSoundPool**, it keeps playing the first audio and starts the new one alongside it. |
| [createVideoRecorder](arkts-media-createvideorecorder-f-sys.md#createvideorecorder-1) | The maintenance of this interface has been stopped since version api 9. Please use AVRecorder Creates an VideoRecorder instance. |
| [createVideoRecorder](arkts-media-createvideorecorder-f-sys.md#createvideorecorder-2) | The maintenance of this interface has been stopped since version api 9. Please use AVRecorder Creates an VideoRecorder instance. |
| [getAVScreenCaptureConfigurableParameters](arkts-media-getavscreencaptureconfigurableparameters-f-sys.md#getavscreencaptureconfigurableparameters-1) | get Configurations which user can changes from AVScreenCapture server |
| [getScreenCaptureMonitor](arkts-media-getscreencapturemonitor-f-sys.md#getscreencapturemonitor-1) | Obtains a **ScreenCaptureMonitor** instance. This API uses a promise to return the result. |
| [reportAVScreenCaptureUserChoice](arkts-media-reportavscreencaptureuserchoice-f-sys.md#reportavscreencaptureuserchoice-1) | Reports the user selection result in the screen capture privacy dialog box to the AVScreenCapture server to determine whether to start screen capture. Screen capture starts only when the user touches a button to continue the operation. This API is called by the system application that creates the dialog box. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [AVAdsController](arkts-media-avadscontroller-i.md) | Definition of the Ad Content Control Interface |
| [AVDataSrcDescriptor](arkts-media-avdatasrcdescriptor-i.md) | Defines the descriptor of an audio and video file, which is used in DataSource playback mode. Use scenario: An application can create a playback instance and start playback before it finishes downloading the audio and video resources. |
| [AVDownloaderManager](arkts-media-avdownloadermanager-i.md) | Definition of the Offline Download Management Interface |
| [AVFileDescriptor](arkts-media-avfiledescriptor-i.md) | Media file descriptor. The caller needs to ensure that the fd is valid and the offset and length are correct. |
| [AVImageGenerator](arkts-media-avimagegenerator-i.md) | AVImageGenerator is a class for video thumbnail retrieval. It provides APIs to obtain a thumbnail from a video. Before calling any API in AVImageGenerator, you must use [createAVImageGenerator()](arkts-media-createavimagegenerator-f.md#createavimagegenerator-3) to create an AVImageGenerator instance. For details about the demo for obtaining video thumbnails, see [Obtaining Video Thumbnails](../../../../media/media/avimagegenerator.md). |
| [AVMetadata](arkts-media-avmetadata-i.md) | Defines the audio and video metadata. Parameters that are not declared as read-only in [AVRecorderConfig](#AVRecorderConfig) can be used as input parameters for recording of [AVRecorder](#AVRecorder). |
| [AVMetadataExtractor](arkts-media-avmetadataextractor-i.md) | AVMetadataExtractor is a class for metadata retrieval. It provides APIs to obtain metadata and thumbnails from media assets. Before calling any API of AVMetadataExtractor, you must use [media.createAVMetadataExtractor](arkts-media-createavmetadataextractor-f.md#createavmetadataextractor-3) to create an AVMetadataExtractor instance. For details about the demo of obtaining audio or video metadata and video thumbnails, see [Using AVMetadataExtractor to Extract Audio and Video Metadata (ArkTS)](../../../../media/media/avmetadataextractor.md). |
| [AVMetricsEvent](arkts-media-avmetricsevent-i.md) | Describes the information of an Metrics Event. |
| [AVPlayer](arkts-media-avplayer-i.md) | AVPlayer is a playback management class. It provides APIs to manage and play media assets. Before calling any API in AVPlayer, you must use [createAVPlayer()](arkts-media-createavplayer-f.md#createavplayer-1) to create an AVPlayer instance. When using the AVPlayer instance, you are advised to register the following callbacks to proactively obtain status changes: [on('stateChange')](arkts-media-avplayer-i.md#on-2): listens for AVPlayer state changes. [on('error')](arkts-media-avplayer-i.md#on-16): listens for error events. Applications must properly manage AVPlayer instances according to their specific needs, creating and freeing them when necessary. Holding too many AVPlayer instances can lead to high memory usage, and in some cases, the system might terminate applications to free up resources. For details about the audio and video playback demo, see [Audio Playback](../../../../media/media/using-avplayer-for-playback.md) and [Video Playback](../../../../media/media/video-playback.md). |
| [AVRecorder](arkts-media-avrecorder-i.md) | AVRecorder is a class for audio and video recording management. It provides APIs to record media assets. Before calling any API in AVRecorder, you must use [createAVRecorder()](arkts-media-createavrecorder-f.md#createavrecorder-1) to create an AVRecorder instance. For details about the audio and video recording demo, see [Audio Recording](../../../../media/media/using-avrecorder-for-recording.md) and [Video Recording](../../../../media/media/video-recording.md). &gt; **NOTE** &gt; &gt; &gt; To use the camera to record videos, the camera module is required. For details about how to use the APIs &gt; provided by the camera module, see [Camera Management](../../apis-camera-kit/arkts-apis/arkts-multimedia-camera.md). |
| [AVRecorderConfig](arkts-media-avrecorderconfig-i.md) | Describes the audio and video recording parameters. The **audioSourceType** and **videoSourceType** parameters are used to distinguish audio-only recording, video-only recording, and audio and video recording. For audio-only recording, set only **audioSourceType**. For video-only recording, set only **videoSourceType**. For audio and video recording, set both **audioSourceType** and **videoSourceType**. |
| [AVRecorderProfile](arkts-media-avrecorderprofile-i.md) | Describes the audio and video recording profile. |
| [AVScreenCaptureRecordConfig](arkts-media-avscreencapturerecordconfig-i.md) | Defines the screen capture parameters. |
| [AVScreenCaptureRecorder](arkts-media-avscreencapturerecorder-i.md) | AVScreenCaptureRecorder is a class for screen capture management. It provides APIs for screen capture. Before calling any API in AVScreenCaptureRecorder, you must use [createAVScreenCaptureRecorder()](arkts-media-createavscreencapturerecorder-f.md#createavscreencapturerecorder-1) to create an AVScreenCaptureRecorder instance. |
| [AVScreenCaptureStrategy](arkts-media-avscreencapturestrategy-i.md) | Provides the media AVScreenCaptureStrategy definition. |
| [AVTimedMetaData](arkts-media-avtimedmetadata-i.md) | Interface for defining time base metadata |
| [AVTranscoder](arkts-media-avtranscoder-i.md) | AVTranscoder is a transcoding management class. It provides APIs to transcode videos. Before calling any API in AVTranscoder, you must use [createAVTranscoder()](arkts-media-createavtranscoder-f.md#createavtranscoder-1) to create an AVTranscoder instance. For details about the AVTranscoder demo, see [Using AVTranscoder for Transcoding](../../../../media/media/using-avtranscoder-for-transcodering.md). |
| [AVTranscoderConfig](arkts-media-avtranscoderconfig-i.md) | Describes the video transcoding parameters. |
| [AudioPlayer](arkts-media-audioplayer-i.md) | AudioPlayer is a class for audio playback management. It provides APIs to manage and play audio. Before calling any API in AudioPlayer, you must use [createAudioPlayer()](arkts-media-createaudioplayer-f.md#createaudioplayer-1) to create an AudioPlayer instance. |
| [AudioRecorder](arkts-media-audiorecorder-i.md) | AudioRecorder is a class for audio recording management. It provides APIs to record audio. Before calling any API in AudioRecorder, you must use [createAudioRecorder()](arkts-media-createaudiorecorder-f.md#createaudiorecorder-1) to create an AudioRecorder instance. |
| [AudioRecorderConfig](arkts-media-audiorecorderconfig-i.md) | Provides the audio recorder configuration definitions. |
| [EncoderInfo](arkts-media-encoderinfo-i.md) | Describes the information about an encoder. |
| [FrameInfo](arkts-media-frameinfo-i.md) | Defines the frame info when fetch picture form a video. |
| [Location](arkts-media-location-i.md) | Provides the geographical location definitions for media resources. |
| [MediaDescription](arkts-media-mediadescription-i.md) | Provides the container definition for media description key-value pairs. |
| [MediaSource](arkts-media-mediasource-i.md) | The MediaSource class defines the media data information, which is from [createMediaSourceWithUrl](arkts-media-createmediasourcewithurl-f.md#createmediasourcewithurl-1). |
| [MediaSourceLoader](arkts-media-mediasourceloader-i.md) | Defines a media data loader, which needs to be implemented by applications. |
| [MediaSourceLoadingRequest](arkts-media-mediasourceloadingrequest-i.md) | The MediaSourceLoadingRequest class defines a loading request object. Applications use this object to obtain the location of the requested resource and to interact with the player for data exchange. |
| [MediaStream](arkts-media-mediastream-i.md) | Media Stream. AVPlayer use this for mediaData access, current version only support live stream. |
| [OutputSize](arkts-media-outputsize-i.md) | This interface is used to define the output image size. |
| [PixelMapParams](arkts-media-pixelmapparams-i.md) | Defines the format parameters of the video thumbnail to be obtained. |
| [PlaybackInfo](arkts-media-playbackinfo-i.md) | Provides player statistic info. |
| [PlaybackStrategy](arkts-media-playbackstrategy-i.md) | Provides preferred playback settings for player. |
| [Range](arkts-media-range-i.md) | Provides Range with lower and upper limit. |
| [SeiMessage](arkts-media-seimessage-i.md) | Describes the information of an SEI message. |
| [SubtitleInfo](arkts-media-subtitleinfo-i.md) | Provides subtitle information. When a subtitle update event is subscribed to, the information about the external subtitle is returned through a callback. Can be synchronized to the time reported by AVPlayer#timeUpdate event |
| [TrackSelectionFilter](arkts-media-trackselectionfilter-i.md) | Describes the filter conditions for track selection. |
| [VideoPlayer](arkts-media-videoplayer-i.md) | VideoPlayer is a class for video playback management. It provides APIs to manage and play videos. Before calling any API in VideoPlayer, you must use [createVideoPlayer()](arkts-media-createvideoplayer-f.md#createvideoplayer-1) to create a VideoPlayer instance. |
| [VideoSize](arkts-media-videosize-i.md) | Describes the video Dimensions. |
| [WatermarkConfiguration](arkts-media-watermarkconfiguration-i.md) | Set configuration of a watermark. The position starts at top left corner. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [AVMetadata](arkts-media-avmetadata-i-sys.md) | Defines the audio and video metadata. Parameters that are not declared as read-only in [AVRecorderConfig](#AVRecorderConfig) can be used as input parameters for recording of [AVRecorder](#AVRecorder). |
| [AVMetadataExtractor](arkts-media-avmetadataextractor-i-sys.md) | AVMetadataExtractor is a class for metadata retrieval. It provides APIs to obtain metadata and thumbnails from media assets. Before calling any API of AVMetadataExtractor, you must use [media.createAVMetadataExtractor](arkts-media-createavmetadataextractor-f.md#createavmetadataextractor-3) to create an AVMetadataExtractor instance. For details about the demo of obtaining audio or video metadata and video thumbnails, see [Using AVMetadataExtractor to Extract Audio and Video Metadata (ArkTS)](../../../../media/media/avmetadataextractor.md). |
| [AVPlayer](arkts-media-avplayer-i-sys.md) | AVPlayer is a playback management class. It provides APIs to manage and play media assets. Before calling any API in AVPlayer, you must use [createAVPlayer()](arkts-media-createavplayer-f.md#createavplayer-1) to create an AVPlayer instance. When using the AVPlayer instance, you are advised to register the following callbacks to proactively obtain status changes: [on('stateChange')](arkts-media-avplayer-i.md#on-2): listens for AVPlayer state changes. [on('error')](arkts-media-avplayer-i.md#on-16): listens for error events. Applications must properly manage AVPlayer instances according to their specific needs, creating and freeing them when necessary. Holding too many AVPlayer instances can lead to high memory usage, and in some cases, the system might terminate applications to free up resources. For details about the audio and video playback demo, see [Audio Playback](../../../../media/media/using-avplayer-for-playback.md) and [Video Playback](../../../../media/media/video-playback.md). |
| [AVRecorder](arkts-media-avrecorder-i-sys.md) | AVRecorder is a class for audio and video recording management. It provides APIs to record media assets. Before calling any API in AVRecorder, you must use [createAVRecorder()](arkts-media-createavrecorder-f.md#createavrecorder-1) to create an AVRecorder instance. For details about the audio and video recording demo, see [Audio Recording](../../../../media/media/using-avrecorder-for-recording.md) and [Video Recording](../../../../media/media/video-recording.md). &gt; **NOTE** &gt; &gt; &gt; To use the camera to record videos, the camera module is required. For details about how to use the APIs &gt; provided by the camera module, see [Camera Management](../../apis-camera-kit/arkts-apis/arkts-multimedia-camera.md). |
| [AVRecorderConfig](arkts-media-avrecorderconfig-i-sys.md) | Describes the audio and video recording parameters. The **audioSourceType** and **videoSourceType** parameters are used to distinguish audio-only recording, video-only recording, and audio and video recording. For audio-only recording, set only **audioSourceType**. For video-only recording, set only **videoSourceType**. For audio and video recording, set both **audioSourceType** and **videoSourceType**. |
| [AVRecorderProfile](arkts-media-avrecorderprofile-i-sys.md) | Describes the audio and video recording profile. |
| [AVScreenCaptureStrategy](arkts-media-avscreencapturestrategy-i-sys.md) | Provides the media AVScreenCaptureStrategy definition. |
| [PixelMapParams](arkts-media-pixelmapparams-i-sys.md) | Defines the format parameters of the video thumbnail to be obtained. |
| [PlaybackStrategy](arkts-media-playbackstrategy-i-sys.md) | Provides preferred playback settings for player. |
| [ScreenCaptureMonitor](arkts-media-screencapturemonitor-i-sys.md) | A class that provides APIs to query and monitor the system screen recorder status. Before calling any API, you must use getScreenCaptureMonitor() to obtain a ScreenCaptureMonitor instance. |
| [VideoRecorder](arkts-media-videorecorder-i-sys.md) | The maintenance of this interface has been stopped since version api 9. Please use AVRecorder. Manages and record video. Before calling an VideoRecorder method, you must use createVideoRecorder() to create an VideoRecorder instance. |
| [VideoRecorderConfig](arkts-media-videorecorderconfig-i-sys.md) | Provides the video recorder configuration definitions. |
| [VideoRecorderProfile](arkts-media-videorecorderprofile-i-sys.md) | Provides the video recorder profile definitions. |
| [WatermarkConfig](arkts-media-watermarkconfig-i-sys.md) | Set configures of a watermark to AVRecorder. The position starts at top left corner. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [AVErrorCode](arkts-media-averrorcode-e.md) | Enumerates the types of [Media error codes](../../../../reference/apis-media-kit/errorcode-media.md). |
| [AVImageQueryOptions](arkts-media-avimagequeryoptions-e.md) | Enumerates the relationship between the video frame and the time at which the video thumbnail is obtained. The time passed in for obtaining the thumbnail may be different from the time of the video frame for which the thumbnail is actually obtained. Therefore, you need to specify their relationship. |
| [AVMetricsEventType](arkts-media-avmetricseventtype-e.md) | Enumerates the metric events supported by the media service. |
| [AVMimeTypes](arkts-media-avmimetypes-e.md) | Enumerates the MIME type, which is set by using [setMimeType](arkts-media-mediasource-i.md#setmimetype-1). |
| [AVScreenCaptureFillMode](arkts-media-avscreencapturefillmode-e.md) | Enumerates the video fill modes during screen capture. |
| [AVScreenCaptureRecordPreset](arkts-media-avscreencapturerecordpreset-e.md) | Enumerates the encoding and container formats used during screen capture. |
| [AVScreenCaptureStateCode](arkts-media-avscreencapturestatecode-e.md) | Enumerates the screen capture states used in callbacks. |
| [AacProfile](arkts-media-aacprofile-e.md) | Enumerates the supported Advanced Audio Coding (AAC) formats. |
| [AudioEncoder](arkts-media-audioencoder-e.md) | Enumerates the audio encoding formats. |
| [AudioOutputFormat](arkts-media-audiooutputformat-e.md) | Enumerates the audio output formats. |
| [AudioSourceType](arkts-media-audiosourcetype-e.md) | Enumerates the audio source types for video recording. |
| [BufferingInfoType](arkts-media-bufferinginfotype-e.md) | Enumerates the buffering event types. |
| [CodecMimeType](arkts-media-codecmimetype-e.md) | Enumerates the codec MIME types. |
| [ContainerFormatType](arkts-media-containerformattype-e.md) | Enumerates the container format types (CFTs). |
| [FetchResult](arkts-media-fetchresult-e.md) | Enumerates the results of obtaining thumbnails in batches. |
| [FileGenerationMode](arkts-media-filegenerationmode-e.md) | Enumerates the modes for creating media files. |
| [HdrType](arkts-media-hdrtype-e.md) | Enumerates the HDR types. |
| [LoadingRequestError](arkts-media-loadingrequesterror-e.md) | Enumerates the reasons for data loading status changes. |
| [MediaDescriptionKey](arkts-media-mediadescriptionkey-e.md) | Enumerates the media description keys. |
| [MediaErrorCode](arkts-media-mediaerrorcode-e.md) | Enumerates the media error codes. |
| [MediaType](arkts-media-mediatype-e.md) | Enumerates the media types. |
| [PickerMode](arkts-media-pickermode-e.md) | Enumerates the display mode for the screen capture picker. |
| [PlaybackInfoKey](arkts-media-playbackinfokey-e.md) | Enumerates the playback description keys. |
| [PlaybackMetricsKey](arkts-media-playbackmetricskey-e.md) | Enumerates the playback metric keys. |
| [PlaybackSpeed](arkts-media-playbackspeed-e.md) | Enumerates the video playback speeds, which can be passed in the **setSpeed** API. |
| [PlaylistLoopMode](arkts-media-playlistloopmode-e.md) | Enumerates loop mode keys for playback. |
| [SeekMode](arkts-media-seekmode-e.md) | Enumerates the video playback seek modes, which can be passed in the **seek** API. |
| [SoundInterruptMode](arkts-media-soundinterruptmode-e.md) | Enumerates the interruption modes of the audio files with the same ID in SoundPool. |
| [StateChangeReason](arkts-media-statechangereason-e.md) | Enumerates the reasons for the state transition of the AVPlayer or AVRecorder instance. The enum value is reported together with **state**. |
| [SwitchMode](arkts-media-switchmode-e.md) | Enumerates the **selectTrack** modes for video playback. SwitchMode can be passed as a parameter through the **selectTrack** method. Currently, both DASH and HLS video tracks support this extended parameter. (HLS video tracks support this extended parameter since API version 24.) |
| [VideoScaleType](arkts-media-videoscaletype-e.md) | Enumerates the video scale modes. |
| [VideoSourceType](arkts-media-videosourcetype-e.md) | Enumerates the video source types for video recording. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [AVErrorCode](arkts-media-averrorcode-e-sys.md) | Enumerates the types of [Media error codes](../../../../reference/apis-media-kit/errorcode-media.md). |
| [MetaSourceType](arkts-media-metasourcetype-e-sys.md) | Enumerates meta source type for recorder. |
| [PixelFormat](arkts-media-pixelformat-e-sys.md) | Enumerates the color formats supported by the video thumbnail. |
| [ScreenCaptureEvent](arkts-media-screencaptureevent-e-sys.md) | Enumerates the states available for the system screen recorder. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [AVDownloadTaskState](arkts-media-avdownloadtaskstate-t.md) | Enumerates the states of the download task. |
| [AVPlayerState](arkts-media-avplayerstate-t.md) | Describes the state of the [AVPlayer](arkts-multimedia-media.md). Your application can proactively obtain the AVPlayer state through the **state** property or obtain the reported AVPlayer state by subscribing to the [stateChange](arkts-media-avplayer-i.md#on-2) event. For details about the rules for state transition, see [Audio Playback](../../../../media/media/using-avplayer-for-playback.md). |
| [AVRecorderState](arkts-media-avrecorderstate-t.md) | Enumerates the AVRecorder states. You can obtain the state through the **state** property. |
| [AudioState](arkts-media-audiostate-t.md) | Describes the audio playback state. You can obtain the state through the **state** property. |
| [OnAVDownloadProgressChangeHandle](arkts-media-onavdownloadprogresschangehandle-t.md) | Describes the callback invoked for the AVDownloader progress change event. |
| [OnAVDownloadTaskStateHandle](arkts-media-onavdownloadtaskstatehandle-t.md) | Describes the callback invoked for the AVDownloader state change event. |
| [OnAVPlayerStateChangeHandle](arkts-media-onavplayerstatechangehandle-t.md) | Describes the callback invoked for the AVPlayer state change event. |
| [OnAVRecorderStateChangeHandler](arkts-media-onavrecorderstatechangehandler-t.md) | Describes the callback invoked for the AVRecorder state change event. |
| [OnAdsEventAdsStartedHandle](arkts-media-onadseventadsstartedhandle-t.md) | Describes the callback function of the ad content playback start event. |
| [OnAdsEventLoadingErrorHandle](arkts-media-onadseventloadingerrorhandle-t.md) | Describes the callback function for the ad media resource loading error event. |
| [OnBufferingUpdateHandler](arkts-media-onbufferingupdatehandler-t.md) | Describes the callback invoked for the buffering update event. |
| [OnFrameFetched](arkts-media-onframefetched-t.md) | Describes the callback invoked when thumbnails are obtained in batches. |
| [OnPlaybackRateDone](arkts-media-onplaybackratedone-t.md) | Describes the callback invoked for the event indicating that the playback rate setting is complete. |
| [OnSeiMessageHandle](arkts-media-onseimessagehandle-t.md) | Describes the handle used to obtain SEI messages. This is used when in subscriptions to SEI message events, and the callback returns detailed SEI information. |
| [OnSuperResolutionChanged](arkts-media-onsuperresolutionchanged-t.md) | Describes the callback used to listen for video super resolution status changes. If super resolution is enabled by using [PlaybackStrategy](arkts-media-playbackstrategy-i.md), this callback is invoked to report the super resolution status changes. It is also invoked to report the initial status when the video starts. However, this callback is not invoked when super resolution is not enabled. Super resolution is automatically disabled in either of the following cases: * The current super resolution algorithm only works with videos that have a frame rate of 30 fps or lower. If the video frame rate exceeds 30 fps, or if the input frame rate exceeds the processing capability of the super resolution algorithm in scenarios such as fast playback, super resolution is automatically disabled. * The current super resolution algorithm supports input resolutions from 320 × 320 to 1920 × 1080, in px. If the input video resolution exceeds the range during playback, super resolution is automatically disabled. |
| [OnTrackChangeHandler](arkts-media-ontrackchangehandler-t.md) | Describes the callback invoked for the track change event. |
| [OnVideoSizeChangeHandler](arkts-media-onvideosizechangehandler-t.md) | Describes the callback invoked for the video size change event. |
| [PlayParameters](arkts-media-playparameters-t.md) | Describes the playback parameters of the sound pool. |
| [PlaybackMetrics](arkts-media-playbackmetrics-t.md) | Describes the container for the key-value pairs of playback metrics. |
| [SoundPool](arkts-media-soundpool-t.md) | SoundPool, which provides APIs for loading, unloading, playing, and stopping playing system sounds, setting the volume, and setting the number of loops. |
| [SourceCloseCallback](arkts-media-sourceclosecallback-t.md) | This callback function is implemented by applications to release related resources. &gt; **NOTE** &gt; &gt; The client must return the handle immediately after processing the request. |
| [SourceOpenCallback](arkts-media-sourceopencallback-t.md) | This callback function is implemented by applications to handle resource open requests and return a unique handle for the opened resource. &gt; **NOTE** &gt; &gt; The client must return the handle immediately after processing the request. |
| [SourceReadCallback](arkts-media-sourcereadcallback-t.md) | This callback function is implemented by applications to handle resource read requests. When data is available, applications should push it to the player using the [respondData](arkts-media-mediasourceloadingrequest-i.md#responddata-1) API of the corresponding MediaSourceLoadingRequest object. &gt; **NOTE** &gt; &gt; The client must return the handle immediately after processing the request. |
| [VideoPlayState](arkts-media-videoplaystate-t.md) | Describes the video playback state. You can obtain the state through the **state** property. |

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [VideoRecordState](arkts-media-videorecordstate-t-sys.md) | The maintenance of this interface has been stopped since version api 9. Please use AVRecorderState. Describes video recorder states. |
<!--DelEnd-->

