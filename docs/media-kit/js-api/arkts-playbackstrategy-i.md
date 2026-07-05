# PlaybackStrategy

Provides preferred playback settings for player.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Media.Core

## Modules to Import

```TypeScript
import { media } from '@kit.MediaKit';
```

## enableSuperResolution

```TypeScript
enableSuperResolution?: boolean
```

Enable super-resolution feature. default is false. Must enable super-resolution feature before calling {@link #setSuperResolution} and {@link #setVideoWindowSize}.

**Type:** boolean

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.Core

## preferredWidth

```TypeScript
preferredWidth?: int
```

Choose a stream with width close to it.

**Type:** int

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.Core

## mutedMediaType

```TypeScript
mutedMediaType?: MediaType
```

mute the specified media stream when playing.

**Type:** MediaType

**Since:** 12

**System capability:** SystemCapability.Multimedia.Media.Core

## preferredBufferDurationForPlaying

```TypeScript
preferredBufferDurationForPlaying?: double
```

Customize the buffering threshold for start or restart playing. The unit is second.

**Type:** double

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.Core

## preferredHdr

```TypeScript
preferredHdr?: boolean
```

If true, the player should choose HDR stream if exist.

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.Core

## preferredBufferDuration

```TypeScript
preferredBufferDuration?: int
```

Chooses a preferred buffer duration. <p>The preferred buffer duration in the playback policy, is used to set the buffer size. For details, see [Online Video Frame Freezing Optimization Practice]https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-online-video-playback-lags-practice.</p>

**Type:** int

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.Core

## preferredAudioLanguage

```TypeScript
preferredAudioLanguage?: string
```

Audio language.

**Type:** string

**Since:** 13

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.Core

## enableCameraPostprocessing

```TypeScript
enableCameraPostprocessing?: boolean
```

Indicates whether to enable camera post-processing during video playback, which is used to apply image enhancements when playing back video content.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.Multimedia.Media.Core

**System API:** This is a system API.

## showFirstFrameOnPrepare

```TypeScript
showFirstFrameOnPrepare?: boolean
```

Show first frame on prepare.

**Type:** boolean

**Since:** 17

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.Core

## thresholdForAutoQuickPlay

```TypeScript
thresholdForAutoQuickPlay?: double
```

set max buffering threshold for liveStreaming or avplayer while change the speed. It is recommended that the value be 2 seconds greater than the starting waterline.

**Type:** double

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.Core

## keepDecodingOnMute

```TypeScript
keepDecodingOnMute?: boolean
```

Indicates whether to keep the decoder working when closing the media, which is used to facilitate quick opening of the media. Currently only supports video

**Type:** boolean

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.Core

## preferredSubtitleLanguage

```TypeScript
preferredSubtitleLanguage?: string
```

Subtitle language.

**Type:** string

**Since:** 13

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.Core

## preferredHeight

```TypeScript
preferredHeight?: int
```

Choose a stream with height close to it.

**Type:** int

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.Core

