# AudioCapturerOptions

Describes audio capturer configurations.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

## Modules to Import

```TypeScript
import { audio } from '@kit.AudioKit';
```

## preferredInputDevice

```TypeScript
preferredInputDevice?: AudioDeviceDescriptor
```

Perfered input device for this audio capturer. The preferredInputDevice must be an input device, and the source type in {@link captureInfo} must be {@link SourceType#SOURCE_TYPE_RECONGITION} or {@link SourceType#SOURCE_TYPE_VOICE_TRANSCRIPTION}, otherwise this parameter will be ignored. If the user does not specify a device, the system automatically selects the recording device for the audio capturer. When the user specifies a prefer device to create a recongition or transcription recording, 1) If the prefer device is online, the current audiocapturer may use the preferred device for recording; if the prefer device goes offline during operation, the system automatically selects a recording device. 2) If the prefer device is offline, the system automatically selects a recording device; if the prefer device comes online during operation, it may switch to the prefer device for recording. Users can query the device which is in use by {@link AudioCapturer#getCurrentAudioCapturerChangeInfo}.

**Type:** AudioDeviceDescriptor

**Since:** 22

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**System API:** This is a system API.

## playbackCaptureConfig

```TypeScript
playbackCaptureConfig?: AudioPlaybackCaptureConfig
```

Defines configuration for capturing played audio. This API is supported since API version 10 and deprecated since API version 12. You are advised to use [AVScreenCapture](docroot://reference/apis-media-kit/capi-avscreencapture.md) instead.

**Type:** AudioPlaybackCaptureConfig

**Since:** 10

**Deprecated since:** 12

**Substitute:** OH_AVScreenCapture

**System capability:** SystemCapability.Multimedia.Audio.PlaybackCapture

## streamInfo

```TypeScript
streamInfo: AudioStreamInfo
```

Audio stream information.

**Type:** AudioStreamInfo

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

## playbackCaptureMode

```TypeScript
playbackCaptureMode?: AudioPlaybackCaptureMode
```

The playback capture mode for audio capturer. This can be a combination of the available {@link AudioPlaybackCaptureMode}.

**Type:** AudioPlaybackCaptureMode

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.PlaybackCapture

## capturerInfo

```TypeScript
capturerInfo: AudioCapturerInfo
```

Audio capturer information.

**Type:** AudioCapturerInfo

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

