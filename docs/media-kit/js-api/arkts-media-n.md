# media

媒体子系统为开发者提供一套简单且易于理解的接口，使得开发者能够方便接入系统并使用系统的媒体资源。

**Since:** 6

**System capability:** SystemCapability.Multimedia.Media.Core

## Modules to Import

```TypeScript
import { media } from '@kit.MediaKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createAVImageGenerator](arkts-media-createavimagegenerator-f.md#createAVImageGenerator-1) | 创建AVImageGenerator对象。使用Promise异步回调。 |
| [createAVImageGenerator](arkts-media-createavimagegenerator-f.md#createAVImageGenerator-2) | Creates an **AVImageGenerator** instance. This API uses a promise to return the result. |
| [createAVImageGenerator](arkts-media-createavimagegenerator-f.md#createAVImageGenerator-3) | 创建AVImageGenerator实例。使用callback异步回调。 |
| [createAVImageGenerator](arkts-media-createavimagegenerator-f.md#createAVImageGenerator-4) | Creates an **AVImageGenerator** instance. This API uses an asynchronous callback to return the result. |
| [createAVMetadataExtractor](arkts-media-createavmetadataextractor-f.md#createAVMetadataExtractor-1) | 创建AVMetadataExtractor实例。使用Promise异步回调。 |
| [createAVMetadataExtractor](arkts-media-createavmetadataextractor-f.md#createAVMetadataExtractor-2) | Creates an **AVMetadataExtractor** instance. This API uses a promise to return the result. |
| [createAVMetadataExtractor](arkts-media-createavmetadataextractor-f.md#createAVMetadataExtractor-3) | 创建AVMetadataExtractor实例。使用callback异步回调。 |
| [createAVMetadataExtractor](arkts-media-createavmetadataextractor-f.md#createAVMetadataExtractor-4) | Creates an **AVMetadataExtractor** instance. This API uses an asynchronous callback to return the result. |
| [createAVPlayer](arkts-media-createavplayer-f.md#createAVPlayer-1) | 创建音视频播放实例。使用callback异步回调。 > **说明：** > > - 推荐单个应用创建的音视频播放实例（即音频、视频、音视频三类相加）不超过16个。<!--Del--> > > - 可创建的音视频播放实例数量依赖于设备芯片的支持情况，如芯片支持创建的数量少于上述情况，请以芯片规格为准。如RK3568推荐单个应用创建6个以内的音视频播放实例。<!--DelEnd--> > > - 应用需要按照实际业务需求合理使用AVPlayer对象，按需创建并及时释放，避免持有过多AVPlayer实例导致内存消耗过大，否则在一定情况下可能导致系统终止应用。 |
| [createAVPlayer](arkts-media-createavplayer-f.md#createAVPlayer-2) | Creates an **AVPlayer** instance. This API uses an asynchronous callback to return the result. <br>**NOTE:**<br> You are advised to create a maximum of 16 **AVPlayer** instances for an application in both audio and video playback scenarios. The actual number of instances that can be created may be different. It depends on the specifications of the device chip in use. |
| [createAVPlayer](arkts-media-createavplayer-f.md#createAVPlayer-3) | 异步方式创建音视频播放实例。使用Promise异步回调。 > **说明：** > > - 推荐单个应用创建的音视频播放实例（即音频、视频、音视频三类相加）不超过16个。<!--Del--> > > - 可创建的音视频播放实例数量依赖于设备芯片的支持情况，如芯片支持创建的数量少于上述情况，请以芯片规格为准。如RK3568推荐单个应用创建6个以内的音视频播放实例。<!--DelEnd--> > > - 应用需要按照实际业务需求合理使用AVPlayer对象，按需创建并及时释放，避免持有过多AVPlayer实例导致内存消耗过大，导致系统终止应用。 |
| [createAVPlayer](arkts-media-createavplayer-f.md#createAVPlayer-4) | Creates an **AVPlayer** instance. This API uses a promise to return the result. <br>**NOTE:**<br> You are advised to create a maximum of 16 **AVPlayer** instances for an application in both audio and video playback scenarios. The actual number of instances that can be created may be different. It depends on the specifications of the device chip in use. |
| [createAVRecorder](arkts-media-createavrecorder-f.md#createAVRecorder-1) | 创建音视频录制实例。使用callback异步回调。 > **说明：** > > 应用可创建多个音视频录制实例，但由于设备共用音频通路，一个设备仅能有一个实例进行音频录制。创建第二个实例录制音频时，将会因为音频通路冲突导致创建失败。 |
| [createAVRecorder](arkts-media-createavrecorder-f.md#createAVRecorder-2) | Creates an **AVRecorder** instance. This API uses an asynchronous callback to return the result. |
| [createAVRecorder](arkts-media-createavrecorder-f.md#createAVRecorder-3) | 创建音视频录制实例。使用Promise异步回调。 > **说明：** > > 应用可创建多个音视频录制实例，但由于设备共用音频通路，一个设备仅能有一个实例进行音频录制。创建第二个实例录制音频时，将会因为音频通路冲突导致创建失败。 |
| [createAVRecorder](arkts-media-createavrecorder-f.md#createAVRecorder-4) | Creates an **AVRecorder** instance. This API uses a promise to return the result. |
| [createAVScreenCaptureRecorder](arkts-media-createavscreencapturerecorder-f.md#createAVScreenCaptureRecorder-1) | 创建屏幕录制实例，使用Promise异步回调。 |
| [createAVScreenCaptureRecorder](arkts-media-createavscreencapturerecorder-f.md#createAVScreenCaptureRecorder-2) | Creates an **AVScreenCaptureRecorder** instance. This API uses a promise to return the result. |
| [createAVTranscoder](arkts-media-createavtranscoder-f.md#createAVTranscoder-1) | 创建视频转码实例。使用Promise异步回调。 > **说明：** > > 可创建的视频转码实例不能超过2个。 |
| [createAVTranscoder](arkts-media-createavtranscoder-f.md#createAVTranscoder-2) | Creates an **AVTranscoder** instance. This API uses a promise to return the result. **NOTE** A maximum of 2 **AVTranscoder** instances can be created. |
| [createAudioPlayer](arkts-media-createaudioplayer-f.md#createAudioPlayer-1) | 同步方式创建音频播放实例。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [createAVPlayer](arkts-media-createavplayer-f.md#createAVPlayer-1)替代。 |
| [createAudioRecorder](arkts-media-createaudiorecorder-f.md#createAudioRecorder-1) | 创建音频录制的实例来控制音频的录制。一台设备只允许创建一个录制实例。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [createAVRecorder](arkts-media-createavrecorder-f.md#createAVRecorder-1)替代。 |
| [createMediaSourceWithDataSource](arkts-media-createmediasourcewithdatasource-f.md#createMediaSourceWithDataSource-1) | 通过自定义数据源创建媒体源。 |
| [createMediaSourceWithFd](arkts-media-createmediasourcewithfd-f.md#createMediaSourceWithFd-1) | 通过文件描述符创建媒体源。 |
| [createMediaSourceWithStreamData](arkts-media-createmediasourcewithstreamdata-f.md#createMediaSourceWithStreamData-1) | 创建流媒体多码率媒体来源实例方法，当前仅支持HTTP-FLV协议格式多码率。 |
| [createMediaSourceWithStreamData](arkts-media-createmediasourcewithstreamdata-f.md#createMediaSourceWithStreamData-2) | Creates a multi-bitrate media source for streaming media. Currently, only the HTTP-FLV multi-bitrate media source is supported. |
| [createMediaSourceWithUrl](arkts-media-createmediasourcewithurl-f.md#createMediaSourceWithUrl-1) | 创建流媒体预下载媒体来源实例方法。 |
| [createMediaSourceWithUrl](arkts-media-createmediasourcewithurl-f.md#createMediaSourceWithUrl-2) | Creates a media source for streaming media to be pre-downloaded. |
| <!--DelRow-->[createParallelSoundPool](arkts-media-createparallelsoundpool-f-sys.md#createParallelSoundPool-1) | Creates a **SoundPool** instance. This API uses a promise to return the result. If a **SoundPool** instance created using [createSoundPool]#createSoundPool is used to play the same sound again, it stops the current audio and restarts the audio. However, if the instance is created using **createParallelSoundPool**, it keeps playing the first audio and starts the new one alongside it. |
| [createSoundPool](arkts-media-createsoundpool-f.md#createSoundPool-1) | 创建音频池实例。使用callback异步回调。 > **说明：** > > - API version 18以下版本，创建的SoundPool对象底层为单实例模式，一个应用进程只能够创建1个SoundPool实例。 > > - API version 18及API version 18以上版本，创建的SoundPool对象底层为多实例模式，一个应用进程最多能够创建128个SoundPool实例。 |
| [createSoundPool](arkts-media-createsoundpool-f.md#createSoundPool-2) | Creates a **SoundPool** instance. This API uses an asynchronous callback to return the result. **NOTE** - In versions earlier than API version 18, the bottom layer of the created **SoundPool** object is in singleton mode. Therefore, an application process can create only one **SoundPool** instance. - In API version 18 and later versions, the bottom layer of the created **SoundPool** object is in multiton mode. Therefore, an application process can create a maximum of 128 **SoundPool** instances. |
| [createSoundPool](arkts-media-createsoundpool-f.md#createSoundPool-3) | 创建音频池实例。使用Promise异步回调。 > **说明：** > > - API version 18以下版本，创建的SoundPool对象底层为单实例模式，一个应用进程只能够创建1个SoundPool实例。 > > - API version 18及API version 18以上版本，创建的SoundPool对象底层为多实例模式，一个应用进程最多能够创建128个SoundPool实例。 |
| [createSoundPool](arkts-media-createsoundpool-f.md#createSoundPool-4) | Creates a **SoundPool** instance. This API uses a promise to return the result. **NOTE** - In versions earlier than API version 18, the bottom layer of the created **SoundPool** object is in singleton mode. Therefore, an application process can create only one **SoundPool** instance. - In API version 18 and later versions, the bottom layer of the created **SoundPool** object is in multiton mode. Therefore, an application process can create a maximum of 128 **SoundPool** instances. |
| [createVideoPlayer](arkts-media-createvideoplayer-f.md#createVideoPlayer-1) | 异步方式创建视频播放实例，使用callback异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [createAVPlayer](arkts-media-createavplayer-f.md#createAVPlayer-1)替代。 |
| [createVideoPlayer](arkts-media-createvideoplayer-f.md#createVideoPlayer-2) | 异步方式创建视频播放实例，通过Promise获取返回值。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用[createAVPlayer](arkts-media-createavplayer-f.md#createAVPlayer-3)替代。 |
| <!--DelRow-->[createVideoRecorder](arkts-media-createvideorecorder-f-sys.md#createVideoRecorder-1) | The maintenance of this interface has been stopped since version api 9. Please use AVRecorder Creates an VideoRecorder instance. |
| <!--DelRow-->[createVideoRecorder](arkts-media-createvideorecorder-f-sys.md#createVideoRecorder-2) | The maintenance of this interface has been stopped since version api 9. Please use AVRecorder Creates an VideoRecorder instance. |
| <!--DelRow-->[createVideoRecorder](arkts-media-createvideorecorder-f-sys.md#createVideoRecorder-3) | The maintenance of this interface has been stopped since version api 9. Please use AVRecorder Creates an VideoRecorder instance. |
| <!--DelRow-->[createVideoRecorder](arkts-media-createvideorecorder-f-sys.md#createVideoRecorder-4) | The maintenance of this interface has been stopped since version api 9. Please use AVRecorder Creates an VideoRecorder instance. |
| <!--DelRow-->[getAVScreenCaptureConfigurableParameters](arkts-media-getavscreencaptureconfigurableparameters-f-sys.md#getAVScreenCaptureConfigurableParameters-1) | get Configurations which user can changes from AVScreenCapture server |
| <!--DelRow-->[getScreenCaptureMonitor](arkts-media-getscreencapturemonitor-f-sys.md#getScreenCaptureMonitor-1) | Obtains a **ScreenCaptureMonitor** instance. This API uses a promise to return the result. |
| <!--DelRow-->[getScreenCaptureMonitor](arkts-media-getscreencapturemonitor-f-sys.md#getScreenCaptureMonitor-2) | Obtains a **ScreenCaptureMonitor** instance. This API uses a promise to return the result. |
| <!--DelRow-->[reportAVScreenCaptureUserChoice](arkts-media-reportavscreencaptureuserchoice-f-sys.md#reportAVScreenCaptureUserChoice-1) | Reports the user selection result in the screen capture privacy dialog box to the AVScreenCapture server to determine whether to start screen capture. Screen capture starts only when the user touches a button to continue the operation. This API is called by the system application that creates the dialog box. |

### Interfaces

| Name | Description |
| --- | --- |
| [AVImageGenerator](arkts-media-avimagegenerator-i.md) | 视频缩略图获取类，用于从视频资源中获取缩略图。在调用AVImageGenerator的方法前，需要先通过 [createAVImageGenerator()](arkts-media-createavimagegenerator-f.md#createAVImageGenerator-3) 构建一个AVImageGenerator实例。 获取视频缩略图的demo可参考：[获取视频缩略图开发指导](docroot://media/media/avimagegenerator.md)。 > **说明：** > > - 本Interface首批接口从API version 12开始支持。 |
| [AVMetadata](arkts-media-avmetadata-i.md) | Defines the audio and video metadata. Parameters that are not declared as read-only in [AVRecorderConfig]#AVRecorderConfig can be used as input parameters for recording of [AVRecorder]#AVRecorder. |
| [AVMetadataExtractor](arkts-media-avmetadataextractor-i.md) | 元数据获取类，用于从媒体资源中获取元数据、缩略图。在调用AVMetadataExtractor的方法前，需要先通过 [media.createAVMetadataExtractor](arkts-media-createavmetadataextractor-f.md#createAVMetadataExtractor-3) 构建一个AVMetadataExtractor实例。 获取音频或视频元数据、视频缩略图的demo可参考：[使用AVMetadataExtractor提取音视频元数据信息(ArkTS)](docroot://media/media/avmetadataextractor.md)。 > **说明：** > > - 本Interface首批接口从API version 11开始支持。 |
| [AVMetricsEvent](arkts-media-avmetricsevent-i.md) | Describes the information of an Metrics Event. |
| [AVPlayer](arkts-media-avplayer-i.md) | 播放管理类，用于管理和播放媒体资源。在调用AVPlayer的方法前，需要先通过 [createAVPlayer()](arkts-media-createavplayer-f.md#createAVPlayer-1)构建一个 AVPlayer实例。 在使用AVPlayer实例的方法时，建议开发者注册相关回调，主动获取当前状态变化。 [on('stateChange')](arkts-media-avplayer-i.md#on)：监听播放状态机 AVPlayerState切换。[on('error')](arkts-media-avplayer-i.md#on)：监听错误事件。 应用需要按照实际业务需求合理使用AVPlayer对象，按需创建并及时释放，避免持有过多AVPlayer实例导致内存消耗过大，否则在一定情况下可能导致系统终止应用。 Audio/Video播放demo可参考：[音频播放开发指导](docroot://media/media/using-avplayer-for-playback.md)、 [视频播放开发指导](docroot://media/media/video-playback.md)。 > **说明：** > > - 本Interface首批接口从API version 9开始支持。 |
| [AVTimedMetaData](arkts-media-avtimedmetadata-i.md) | Interface for defining time base metadata |
| [FrameInfo](arkts-media-frameinfo-i.md) | Defines the frame info when fetch picture form a video. |
| [OutputSize](arkts-media-outputsize-i.md) | This interface is used to define the output image size. |
| [PixelMapParams](arkts-media-pixelmapparams-i.md) | Defines the format parameters of the video thumbnail to be obtained. |
| [SeiMessage](arkts-media-seimessage-i.md) | Describes the information of an SEI message. |
| [TrackSelectionFilter](arkts-media-trackselectionfilter-i.md) | Describes the filter conditions for track selection. |
| [VideoSize](arkts-media-videosize-i.md) | Describes the video Dimensions. |

### Types

| Name | Description |
| --- | --- |
| [AVPlayerState](arkts-media-avplayerstate-t.md) | [AVPlayer](arkts-multimedia-media.md#media)的状态机，可通过state属性主动获取当前状态，也可通过监听 [stateChange](arkts-media-avplayer-i.md#on) 事件上报当前状态，状态机之间的切换规则，可参考[音频播放开发指导](docroot://media/media/using-avplayer-for-playback.md)。 |
| [OnAVPlayerStateChangeHandle](arkts-media-onavplayerstatechangehandle-t.md) | 播放状态机切换事件回调方法。 |
| [OnBufferingUpdateHandler](arkts-media-onbufferingupdatehandler-t.md) | 播放缓存事件回调方法。 |
| [OnFrameFetched](arkts-media-onframefetched-t.md) | 批量获取缩略图回调函数。 |
| [OnPlaybackRateDone](arkts-media-onplaybackratedone-t.md) | 播放速率设置完成事件回调方法。 |
| [OnSeiMessageHandle](arkts-media-onseimessagehandle-t.md) | 获取SEI信息，使用场景：订阅SEI信息事件，回调返回SEI详细信息。 |
| [OnSuperResolutionChanged](arkts-media-onsuperresolutionchanged-t.md) | 视频超分开关事件回调方法。若通过[PlaybackStrategy](arkts-media-playbackstrategy-i.md#PlaybackStrategy)正确使能超分，超分算法状态变化时会通过此回调上报，视频起 播时也会上报超分初始开启/关闭状态。若未使能超分，不会触发该回调。 出现以下两种情况，超分算法会自动关闭。 * 目前超分算法最高仅支持30帧及以下的视频。若视频帧率超过30帧，或者在倍速播放等场景下导致输入帧率超出超分算法处理能力，超分会自动关闭。 * 目前超分算法支持输入分辨率范围为[320x320, 1920x1080]，单位为像素。若播放过程中输入视频分辨率超出此范围，超分算法会自动关闭。 |
| [OnTrackChangeHandler](arkts-media-ontrackchangehandler-t.md) | track变更事件回调方法。 |
| [OnVideoSizeChangeHandler](arkts-media-onvideosizechangehandler-t.md) | 视频播放宽高变化事件回调方法。 |
| [PlayParameters](arkts-media-playparameters-t.md) | 表示音频池播放参数设置。 |
| [SoundPool](arkts-media-soundpool-t.md) | 音频池，提供了系统声音的加载、播放、音量设置、循环设置、停止播放、资源卸载等功能。 |

### Enums

| Name | Description |
| --- | --- |
| [AVErrorCode](arkts-media-averrorcode-e.md) | [Media错误码](docroot://reference/apis-media-kit/errorcode-media.md)类型枚举。 |
| [AVImageQueryOptions](arkts-media-avimagequeryoptions-e.md) | 需要获取的缩略图时间点与视频帧的对应关系。 在获取视频缩略图时，传入的时间点与实际取得的视频帧所在时间点不一定相等，需要指定传入的时间点与实际取得的视频帧的时间关系。 |
| [AVMetricsEventType](arkts-media-avmetricseventtype-e.md) | 表示媒体服务支持的指标事件的枚举。 |
| [FetchResult](arkts-media-fetchresult-e.md) | 表示批量获取缩略图操作结果的枚举。 |
| [HdrType](arkts-media-hdrtype-e.md) | 表示视频HDR类型的枚举。 |
| <!--DelRow-->[PixelFormat](arkts-media-pixelformat-e-sys.md) | Enumerates the color formats supported by the video thumbnail. |
| [SoundInterruptMode](arkts-media-soundinterruptmode-e.md) | 表示在SoundPool中，同一ID的音频在播放时的打断模式的枚举。 |
| [StateChangeReason](arkts-media-statechangereason-e.md) | 表示播放或录制实例状态机切换原因的枚举，伴随state一起上报。 |

