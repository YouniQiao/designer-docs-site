# AudioCapturerOptions

Describes audio capturer configurations.

**Since:** 8

<!--Device-audio-interface AudioCapturerOptions--><!--Device-audio-interface AudioCapturerOptions-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

## Modules to Import

```TypeScript
import { audio } from '@kit.AudioKit';
```

## capturerInfo

```TypeScript
capturerInfo: AudioCapturerInfo
```

Audio capturer information.

**Type:** AudioCapturerInfo

**Since:** 8

<!--Device-AudioCapturerOptions-capturerInfo: AudioCapturerInfo--><!--Device-AudioCapturerOptions-capturerInfo: AudioCapturerInfo-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

## playbackCaptureConfig

```TypeScript
playbackCaptureConfig?: AudioPlaybackCaptureConfig
```

Defines configuration for capturing played audio.

This API is supported since API version 10 and deprecated since API version 12. You are advised to use [AVScreenCapture](docroot://reference/apis-media-kit/capi-avscreencapture.md) instead.

**Type:** AudioPlaybackCaptureConfig

**Since:** 10

**Deprecated since:** 12

**Substitutes:** OH_AVScreenCapture

<!--Device-AudioCapturerOptions-playbackCaptureConfig?: AudioPlaybackCaptureConfig--><!--Device-AudioCapturerOptions-playbackCaptureConfig?: AudioPlaybackCaptureConfig-End-->

**System capability:** SystemCapability.Multimedia.Audio.PlaybackCapture

## playbackCaptureMode

```TypeScript
playbackCaptureMode?: AudioPlaybackCaptureMode
```

The playback capture mode for audio capturer.This can be a combination of the available {@link AudioPlaybackCaptureMode}.

**Type:** AudioPlaybackCaptureMode

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AudioCapturerOptions-playbackCaptureMode?: AudioPlaybackCaptureMode--><!--Device-AudioCapturerOptions-playbackCaptureMode?: AudioPlaybackCaptureMode-End-->

**System capability:** SystemCapability.Multimedia.Audio.PlaybackCapture

## streamInfo

```TypeScript
streamInfo: AudioStreamInfo
```

Audio stream information.

**Type:** AudioStreamInfo

**Since:** 8

<!--Device-AudioCapturerOptions-streamInfo: AudioStreamInfo--><!--Device-AudioCapturerOptions-streamInfo: AudioStreamInfo-End-->

**System capability:** SystemCapability.Multimedia.Audio.Capturer

