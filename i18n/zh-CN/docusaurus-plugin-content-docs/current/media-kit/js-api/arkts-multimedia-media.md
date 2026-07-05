# @ohos.multimedia.media

## 导入模块

```TypeScript
import { media } from '@kit.MediaKit';
```

## 汇总

### 命名空间

| 名称 | 描述 |
| --- | --- |
| [media](arkts-media-n.md) | 媒体子系统为开发者提供一套简单且易于理解的接口，使得开发者能够方便接入系统并使用系统的媒体资源。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [AudioPlayer](arkts-audioplayer-i.md) | > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用[AVPlayer]{@link @ohos.multimedia.media:media}替代。 音频播放管理类，用于管理和播放音频媒体。在调用AudioPlayer的方法前，需要先通过 [createAudioPlayer()]{@link @ohos.multimedia.media:media.createAudioPlayer}构建一个AudioPlayer实例。 |
| [AudioRecorder](arkts-audiorecorder-i.md) | > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用[AVRecorder]{@link @ohos.multimedia.media:media}替代。 音频录制管理类，用于录制音频媒体。在调用AudioRecorder的方法前，需要先通过 [createAudioRecorder()]{@link @ohos.multimedia.media:media.createAudioRecorder} 构建一个AudioRecorder实例。 |
| [AudioRecorderConfig](arkts-audiorecorderconfig-i.md) | Provides the audio recorder configuration definitions. |
| [AVDataSrcDescriptor](arkts-avdatasrcdescriptor-i.md) | Defines the descriptor of an audio and video file, which is used in DataSource playback mode. Use scenario: An application can create a playback instance and start playback before it finishes downloading the audio and video resources. |
| [AVFileDescriptor](arkts-avfiledescriptor-i.md) | Media file descriptor. The caller needs to ensure that the fd is valid and the offset and length are correct. |
| [AVRecorder](arkts-avrecorder-i.md) | 音视频录制管理类，用于音视频媒体录制。在调用AVRecorder的方法前，需要先调用 [createAVRecorder]{@link @ohos.multimedia.media:media.createAVRecorder(callback: AsyncCallback<AVRecorder>)}接口构建一个 AVRecorder实例。 音视频录制demo可参考：[音频录制开发指导](docroot://media/media/using-avrecorder-for-recording.md)、 [视频录制开发指导](docroot://media/media/video-recording.md)。 > **说明：** > > - 本Interface首批接口从API version 9开始支持。 > > - 相机视频录制功能需配合相机模块使用，相机模块接口的使用详情请参考[相机管理]{@link @ohos.multimedia.camera:camera}。 |
| [AVRecorderConfig](arkts-avrecorderconfig-i.md) | Describes the audio and video recording parameters. The **audioSourceType** and **videoSourceType** parameters are used to distinguish audio-only recording, video-only recording, and audio and video recording. For audio-only recording, set only **audioSourceType**. For video-only recording, set only **videoSourceType**. For audio and video recording, set both **audioSourceType** and **videoSourceType**. |
| [AVRecorderProfile](arkts-avrecorderprofile-i.md) | Describes the audio and video recording profile. |
| [AVScreenCaptureRecordConfig](arkts-avscreencapturerecordconfig-i.md) | Defines the screen capture parameters. |
| [AVScreenCaptureRecorder](arkts-avscreencapturerecorder-i.md) | 屏幕录制管理类，用于进行屏幕录制。在调用AVScreenCaptureRecorder的方法前，需要先通过 [createAVScreenCaptureRecorder()]{@link @ohos.multimedia.media:media.createAVScreenCaptureRecorder()}创建一个 AVScreenCaptureRecorder实例。 > **说明：** > > - 本Interface首批接口从API version 12开始支持。 |
| [AVScreenCaptureStrategy](arkts-avscreencapturestrategy-i.md) | Provides the media AVScreenCaptureStrategy definition. |
| [AVTranscoder](arkts-avtranscoder-i.md) | 视频转码管理类，用于视频转码。在调用AVTranscoder的方法前，需要先通过 [createAVTranscoder()]{@link @ohos.multimedia.media:media.createAVTranscoder()}构建一个AVTranscoder实例。 视频转码demo可参考：[视频转码开发指导](docroot://media/media/using-avtranscoder-for-transcodering.md) > **说明：** > > - 本Interface首批接口从API version 12开始支持。 |
| [AVTranscoderConfig](arkts-avtranscoderconfig-i.md) | Describes the video transcoding parameters. |
| [EncoderInfo](arkts-encoderinfo-i.md) | Describes the information about an encoder. |
| [Location](arkts-location-i.md) | Provides the geographical location definitions for media resources. |
| [MediaDescription](arkts-mediadescription-i.md) | Provides the container definition for media description key-value pairs. |
| [MediaSource](arkts-mediasource-i.md) | 媒体数据信息。来源于 [createMediaSourceWithUrl]{@link @ohos.multimedia.media:media.createMediaSourceWithUrl(url: string, headers?: Record<string, string>)} 。 > **说明：** > > - 本Interface首批接口从API version 12开始支持。 |
| [MediaSourceLoader](arkts-mediasourceloader-i.md) | Defines a media data loader, which needs to be implemented by applications. |
| [MediaSourceLoadingRequest](arkts-mediasourceloadingrequest-i.md) | 用于定义加载请求的对象。应用程序通过该对象来获取请求的资源位置，通过该对象和播放器进行数据交互。 > **说明：** > > - 本Interface首批接口从API version 18开始支持。 |
| [MediaStream](arkts-mediastream-i.md) | Media Stream. AVPlayer use this for mediaData access, current version only support live stream. |
| [PlaybackInfo](arkts-playbackinfo-i.md) | Provides player statistic info. |
| [PlaybackStrategy](arkts-playbackstrategy-i.md) | Provides preferred playback settings for player. |
| [Range](arkts-range-i.md) | Provides Range with lower and upper limit. |
| <!--DelRow-->[ScreenCaptureMonitor](arkts-screencapturemonitor-i.md) | A class that provides APIs to query and monitor the system screen recorder status. Before calling any API, you must use getScreenCaptureMonitor() to obtain a ScreenCaptureMonitor instance. |
| [SubtitleInfo](arkts-subtitleinfo-i.md) | Provides subtitle information. When a subtitle update event is subscribed to, the information about the external subtitle is returned through a callback. Can be synchronized to the time reported by AVPlayer#timeUpdate event |
| [VideoPlayer](arkts-videoplayer-i.md) | 视频播放管理类，用于管理和播放视频媒体。在调用VideoPlayer的方法前，需要先通过 [createVideoPlayer()]{@link @ohos.multimedia.media:media.createVideoPlayer(callback: AsyncCallback<VideoPlayer>)}构建 一个VideoPlayer实例。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用[AVPlayer]{@link @ohos.multimedia.media:media}替代。 |
| <!--DelRow-->[VideoRecorder](arkts-videorecorder-i.md) | The maintenance of this interface has been stopped since version api 9. Please use AVRecorder. Manages and record video. Before calling an VideoRecorder method, you must use createVideoRecorder() to create an VideoRecorder instance. |
| <!--DelRow-->[VideoRecorderConfig](arkts-videorecorderconfig-i.md) | Provides the video recorder configuration definitions. |
| <!--DelRow-->[VideoRecorderProfile](arkts-videorecorderprofile-i.md) | Provides the video recorder profile definitions. |
| <!--DelRow-->[WatermarkConfig](arkts-watermarkconfig-i.md) | Set configures of a watermark to AVRecorder. The position starts at top left corner. |
| [WatermarkConfiguration](arkts-watermarkconfiguration-i.md) | Set configuration of a watermark. The position starts at top left corner. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [AacProfile](arkts-aacprofile-e.md) | 高级音频编码（AAC）类型枚举。 |
| [AudioEncoder](arkts-audioencoder-e.md) | > **说明：** > > 从API version 6开始支持，从API version 8开始废弃，建议使用[CodecMimeType]{@link media.CodecMimeType}替代。 表示音频编码格式的枚举。 |
| [AudioOutputFormat](arkts-audiooutputformat-e.md) | > **说明：** > > 从API version 6开始支持，从API version 8 开始废弃，建议使用[ContainerFormatType]{@link media.ContainerFormatType}替代。 表示音频封装格式的枚举。 |
| [AudioSourceType](arkts-audiosourcetype-e.md) | 表示视频录制中音频源类型的枚举。 |
| [AVMimeTypes](arkts-avmimetypes-e.md) | 媒体MIME类型，通过[setMimeType]{@link @ohos.multimedia.media:media.MediaSource.setMimeType}设置。 |
| [AVScreenCaptureFillMode](arkts-avscreencapturefillmode-e.md) | 进行屏幕录制时视频填充模式的枚举。 |
| [AVScreenCaptureRecordPreset](arkts-avscreencapturerecordpreset-e.md) | 进行屏幕录制时的编码、封装格式参数的枚举。 |
| [AVScreenCaptureStateCode](arkts-avscreencapturestatecode-e.md) | 屏幕录制的状态回调。 |
| [BufferingInfoType](arkts-bufferinginfotype-e.md) | 缓存事件类型枚举。 |
| [CodecMimeType](arkts-codecmimetype-e.md) | Codec MIME类型枚举。 |
| [ContainerFormatType](arkts-containerformattype-e.md) | 表示容器格式类型的枚举，缩写为CFT。 |
| [FileGenerationMode](arkts-filegenerationmode-e.md) | 表示创建媒体文件模式的枚举。 |
| [LoadingRequestError](arkts-loadingrequesterror-e.md) | 枚举，数据加载过程中状态变化的原因。 |
| [MediaDescriptionKey](arkts-mediadescriptionkey-e.md) | 媒体信息描述枚举。 |
| [MediaErrorCode](arkts-mediaerrorcode-e.md) | 媒体服务错误类型枚举。 > **说明：** > > 从API version 8开始支持，从API version 11开始废弃，建议使用[AVErrorCode]{@link media.AVErrorCode}替代。 |
| [MediaType](arkts-mediatype-e.md) | 媒体类型枚举。 |
| <!--DelRow-->[MetaSourceType](arkts-metasourcetype-e.md) | Enumerates meta source type for recorder. |
| [PickerMode](arkts-pickermode-e.md) | 表示屏幕录制Picker模式的枚举。 |
| [PlaybackInfoKey](arkts-playbackinfokey-e.md) | 播放信息描述枚举。 |
| [PlaybackMetricsKey](arkts-playbackmetricskey-e.md) | 表示播放器指标信息的枚举。 |
| [PlaybackSpeed](arkts-playbackspeed-e.md) | 视频播放的倍速枚举，可通过setSpeed方法作为参数传递下去。 |
| [PlaylistLoopMode](arkts-playlistloopmode-e.md) | 表示播放列表循环模式的枚举。 |
| <!--DelRow-->[ScreenCaptureEvent](arkts-screencaptureevent-e.md) | Enumerates the states available for the system screen recorder. |
| [SeekMode](arkts-seekmode-e.md) | 视频播放的Seek模式枚举，可通过seek方法作为参数传递下去。 |
| [SwitchMode](arkts-switchmode-e.md) | 表示视频播放的selectTrack模式枚举。 可通过selectTrack方法作为参数传递下去，当前DASH/HLS协议视频轨均支持该扩展参数（从API版本26.0.0开始HLS协议视频轨支持该扩展参数）。 |
| [VideoScaleType](arkts-videoscaletype-e.md) | 枚举，视频缩放模式。 |
| [VideoSourceType](arkts-videosourcetype-e.md) | 表示视频录制中视频源类型的枚举。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [AudioState](arkts-audiostate-t.md) | 音频播放的状态机。可通过state属性获取当前状态。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用[AVPlayerState]{@link media.AVPlayerState}替代。 |
| [AVRecorderState](arkts-avrecorderstate-t.md) | 音视频录制的状态机。可通过state属性获取当前状态。 |
| [MediaDescription](arkts-mediadescription-t.md) | Provides the container definition for media description key-value pairs. The media description consists of key-value pairs where keys reference @MediaDescriptionKey. |
| [OnAVRecorderStateChangeHandler](arkts-onavrecorderstatechangehandler-t.md) | 录制状态机切换事件回调方法。 |
| [PlaybackInfo](arkts-playbackinfo-t.md) | Provides the container definition for media description key-value pairs. |
| [PlaybackMetrics](arkts-playbackmetrics-t.md) | 提供播放器指标信息键值对的容器定义。 |
| [SourceCloseCallback](arkts-sourceclosecallback-t.md) | 由应用实现此回调函数，应用应释放相关资源。 > **注意：** > > 客户端在处理完请求后应立刻返回。 |
| [SourceOpenCallback](arkts-sourceopencallback-t.md) | 由应用实现此回调函数，应用需处理传入的资源打开请求，并返回所打开资源对应的唯一句柄。 > **注意：** > > 客户端在处理完请求后应立刻返回。 |
| [SourceReadCallback](arkts-sourcereadcallback-t.md) | 由应用实现此回调函数，应用需记录读取请求，并在数据充足时通过对应的MediaSourceLoadingRequest对象的 [respondData]{@link @ohos.multimedia.media:media.MediaSourceLoadingRequest.respondData(uuid: number, offset: number, buffer: ArrayBuffer)} 方法推送数据。 > **注意：** > > 客户端在处理完请求后应立刻返回。 |
| [VideoPlayState](arkts-videoplaystate-t.md) | 视频播放的状态机，可通过state属性获取当前状态。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用[AVPlayerState]{@link media.AVPlayerState}替代。 |
| <!--DelRow-->[VideoRecordState](arkts-videorecordstate-t.md) | The maintenance of this interface has been stopped since version api 9. Please use AVRecorderState. Describes video recorder states. |

