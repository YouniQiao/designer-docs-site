# AudioCapturerOptions

Describes audio capturer configurations.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## preferredInputDevice

```TypeScript
preferredInputDevice?: AudioDeviceDescriptor
```

Perfered input device for this audio capturer. The preferredInputDevice must be an input device, and the source type in {@link captureInfo} must be {@link SourceType#SOURCE_TYPE_RECONGITION} or {@link SourceType#SOURCE_TYPE_VOICE_TRANSCRIPTION}, otherwise this parameter will be ignored. If the user does not specify a device, the system automatically selects the recording device for the audio capturer. When the user specifies a prefer device to create a recongition or transcription recording, 1) If the prefer device is online, the current audiocapturer may use the preferred device for recording; if the prefer device goes offline during operation, the system automatically selects a recording device. 2) If the prefer device is offline, the system automatically selects a recording device; if the prefer device comes online during operation, it may switch to the prefer device for recording. Users can query the device which is in use by {@link AudioCapturer#getCurrentAudioCapturerChangeInfo}.

**类型：** AudioDeviceDescriptor

**起始版本：** 22

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**系统接口：** 此接口为系统接口。

## playbackCaptureConfig

```TypeScript
playbackCaptureConfig?: AudioPlaybackCaptureConfig
```

Defines configuration for capturing played audio. This API is supported since API version 10 and deprecated since API version 12. You are advised to use [AVScreenCapture](docroot://reference/apis-media-kit/capi-avscreencapture.md) instead.

**类型：** AudioPlaybackCaptureConfig

**起始版本：** 10

**废弃版本：** 12

**替代接口：** OH_AVScreenCapture

**系统能力：** SystemCapability.Multimedia.Audio.PlaybackCapture

## streamInfo

```TypeScript
streamInfo: AudioStreamInfo
```

Audio stream information.

**类型：** AudioStreamInfo

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

## playbackCaptureMode

```TypeScript
playbackCaptureMode?: AudioPlaybackCaptureMode
```

The playback capture mode for audio capturer. This can be a combination of the available {@link AudioPlaybackCaptureMode}.

**类型：** AudioPlaybackCaptureMode

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.PlaybackCapture

## capturerInfo

```TypeScript
capturerInfo: AudioCapturerInfo
```

Audio capturer information.

**类型：** AudioCapturerInfo

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

