# AudioRecorderConfig

Provides the audio recorder configuration definitions.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** AVRecorderConfig

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

## Modules to Import

```TypeScript
import { media } from '@ohos.multimedia.media';
```

## audioEncodeBitRate

```TypeScript
audioEncodeBitRate?: number
```

Audio encoding bit rate, in bit/s.

**Type:** number

**Since:** 6

**Deprecated since:** 9

**Substitutes:** audioBitrate

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

## audioEncoder

```TypeScript
audioEncoder?: AudioEncoder
```

Audio encoding format. The default value is DEFAULT, it will be deprecated after API8. use "audioEncoderMime" instead.

**Type:** AudioEncoder

**Since:** 6

**Deprecated since:** 8

**Substitutes:** audioEncoderMime

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

## audioEncoderMime

```TypeScript
audioEncoderMime?: CodecMimeType
```

audio encoding format MIME. it used to replace audioEncoder.

**Type:** CodecMimeType

**Since:** 8

**Deprecated since:** 9

**Substitutes:** audioCodec

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

## audioSampleRate

```TypeScript
audioSampleRate?: number
```

Audio sampling rate, in Hz.

**Type:** number

**Since:** 6

**Deprecated since:** 9

**Substitutes:** audioSampleRate

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

## fileFormat

```TypeScript
fileFormat?: ContainerFormatType
```

output file format. see @ContainerFormatType , it used to replace "format".

**Type:** ContainerFormatType

**Since:** 8

**Deprecated since:** 9

**Substitutes:** fileFormat

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

## format

```TypeScript
format?: AudioOutputFormat
```

Audio output format. The default value is DEFAULT, it will be deprecated after API8. it will be replaced with "fileFormat".

**Type:** AudioOutputFormat

**Since:** 6

**Deprecated since:** 8

**Substitutes:** fileFormat

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

## location

```TypeScript
location?: Location
```

Geographical location information.

**Type:** Location

**Since:** 6

**Deprecated since:** 9

**Substitutes:** location

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

## numberOfChannels

```TypeScript
numberOfChannels?: number
```

Number of audio channels.

**Type:** number

**Since:** 6

**Deprecated since:** 9

**Substitutes:** audioChannels

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

## uri

```TypeScript
uri: string
```

Audio output uri.support two kind of uri now. format like: scheme + "://" + "context". file: file://path fd: fd://fd

**Type:** string

**Since:** 6

**Deprecated since:** 9

**Substitutes:** url

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

