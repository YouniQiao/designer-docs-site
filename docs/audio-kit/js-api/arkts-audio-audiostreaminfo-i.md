# AudioStreamInfo

Describes audio stream information.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Core

## Modules to Import

```TypeScript
import { audio } from '@ohos.multimedia.audio';
```

## channelLayout

```TypeScript
channelLayout?: AudioChannelLayout
```

Audio channel layout. The default value is **0x0**.

**Type:** AudioChannelLayout

**Since:** 11

**System capability:** SystemCapability.Multimedia.Audio.Core

## channels

```TypeScript
channels: AudioChannel
```

Number of audio channels.

**Type:** AudioChannel

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Core

## encodingType

```TypeScript
encodingType: AudioEncodingType
```

Audio encoding type.

**Type:** AudioEncodingType

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Core

## sampleFormat

```TypeScript
sampleFormat: AudioSampleFormat
```

Audio sample format.

**Type:** AudioSampleFormat

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Core

## samplingRate

```TypeScript
samplingRate: AudioSamplingRate | number
```

Audio sampling rate.

**Type:** AudioSamplingRate | number

**Since:** 8

**Model restriction:** 
- API version 26.0.0 and later: This API can be used in both the stage model and FA model.

**System capability:** SystemCapability.Multimedia.Audio.Core

