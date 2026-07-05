# AudioRecorderConfig

Provides the audio recorder configuration definitions.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.multimedia.media/media.AVRecorderConfig

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

## 导入模块

```TypeScript
import { media } from '@kit.MediaKit';
```

## audioEncoder

```TypeScript
audioEncoder?: AudioEncoder
```

Audio encoding format. The default value is DEFAULT, it will be deprecated after API8. use "audioEncoderMime" instead.

**类型：** AudioEncoder

**起始版本：** 6

**废弃版本：** 8

**替代接口：** ohos.multimedia.media/media.AudioRecorderConfig.audioEncoderMime

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

## numberOfChannels

```TypeScript
numberOfChannels?: number
```

Number of audio channels.

**类型：** number

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.multimedia.media/media.AVRecorderProfile#audioChannels

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

## format

```TypeScript
format?: AudioOutputFormat
```

Audio output format. The default value is DEFAULT, it will be deprecated after API8. it will be replaced with "fileFormat".

**类型：** AudioOutputFormat

**起始版本：** 6

**废弃版本：** 8

**替代接口：** ohos.multimedia.media/media.AudioRecorderConfig.fileFormat

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

## audioEncoderMime

```TypeScript
audioEncoderMime?: CodecMimeType
```

audio encoding format MIME. it used to replace audioEncoder.

**类型：** CodecMimeType

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.multimedia.media/media.AVRecorderProfile#audioCodec

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

## location

```TypeScript
location?: Location
```

Geographical location information.

**类型：** Location

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.multimedia.media/media.AVMetadata#location

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

## uri

```TypeScript
uri: string
```

Audio output uri.support two kind of uri now. format like: scheme + "://" + "context". file: file://path fd: fd://fd

**类型：** string

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.multimedia.media/media.AVRecorderConfig#url

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

## fileFormat

```TypeScript
fileFormat?: ContainerFormatType
```

output file format. see @ContainerFormatType , it used to replace "format".

**类型：** ContainerFormatType

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.multimedia.media/media.AVRecorderProfile#fileFormat

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

## audioSampleRate

```TypeScript
audioSampleRate?: number
```

Audio sampling rate, in Hz.

**类型：** number

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.multimedia.media/media.AVRecorderProfile#audioSampleRate

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

## audioEncodeBitRate

```TypeScript
audioEncodeBitRate?: number
```

Audio encoding bit rate, in bit/s.

**类型：** number

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.multimedia.media/media.AVRecorderProfile#audioBitrate

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

