# AudioOutputFormat

```TypeScript
enum AudioOutputFormat
```

Enumerates the audio output formats.

**起始版本：** 6

**废弃版本：** 8

**替代接口：** media.ContainerFormatType

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

## DEFAULT

```TypeScript
DEFAULT = 0
```

Default output format. This API is defined but not implemented yet. Note: It is supported since API version 6 and deprecated since API version 8. You are advised to select one from [ContainerFormatType]media.ContainerFormatType as required.

**起始版本：** 6

**废弃版本：** 8

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

## MPEG_4

```TypeScript
MPEG_4 = 2
```

MPEG-4. Note: It is supported since API version 6 and deprecated since API version 8. You are advised to use **CFT_MPEG_4** in [ContainerFormatType]media.ContainerFormatType instead.

**起始版本：** 6

**废弃版本：** 8

**替代接口：** ohos.multimedia.media/media.ContainerFormatType#CFT_MPEG_4

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

## AMR_NB

```TypeScript
AMR_NB = 3
```

AMR_NB. This API is defined but not implemented yet. Note: It is supported since API version 6 and deprecated since API version 8. You are advised to use **CFT_AMR** in [ContainerFormatType]media.ContainerFormatType instead. For the encoding format, use **AUDIO_AMR_NB** in [CodecMimeType]media.CodecMimeType.

**起始版本：** 6

**废弃版本：** 8

**替代接口：** ohos.multimedia.media/media.ContainerFormatType#CFT_AMR

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

## AMR_WB

```TypeScript
AMR_WB = 4
```

AMR_WB. This API is defined but not implemented yet. Note: It is supported since API version 6 and deprecated since API version 8. You are advised to use **CFT_AMR** in [ContainerFormatType]media.ContainerFormatType instead. For the encoding format, use **AUDIO_AMR_WB** in [CodecMimeType]media.CodecMimeType.

**起始版本：** 6

**废弃版本：** 8

**替代接口：** ohos.multimedia.media/media.ContainerFormatType#CFT_AMR

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

## AAC_ADTS

```TypeScript
AAC_ADTS = 6
```

Audio Data Transport Stream (ADTS), which is a transport stream format of AAC-based audio. Note: It is supported since API version 6 and deprecated since API version 8. You are advised to use **CFT_AAC** in [ContainerFormatType]media.ContainerFormatType instead.

**起始版本：** 6

**废弃版本：** 8

**替代接口：** ohos.multimedia.media/media.ContainerFormatType#CFT_AAC

**系统能力：** SystemCapability.Multimedia.Media.AudioRecorder

