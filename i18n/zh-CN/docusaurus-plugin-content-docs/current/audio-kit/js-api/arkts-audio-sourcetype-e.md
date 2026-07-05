# SourceType

```TypeScript
enum SourceType
```

Enumerates the types of audio streams captured.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Core

## SOURCE_TYPE_INVALID

```TypeScript
SOURCE_TYPE_INVALID = -1
```

Invalid audio source.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Core

## SOURCE_TYPE_MIC

```TypeScript
SOURCE_TYPE_MIC = 0
```

Mic source.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Core

## SOURCE_TYPE_VOICE_RECOGNITION

```TypeScript
SOURCE_TYPE_VOICE_RECOGNITION = 1
```

Voice recognition source.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Core

## SOURCE_TYPE_PLAYBACK_CAPTURE

```TypeScript
SOURCE_TYPE_PLAYBACK_CAPTURE = 2
```

Playback capture source type.

**起始版本：** 10

**废弃版本：** 12

**替代接口：** OH_AVScreenCapture

**系统能力：** SystemCapability.Multimedia.Audio.PlaybackCapture

## SOURCE_TYPE_WAKEUP

```TypeScript
SOURCE_TYPE_WAKEUP = 3
```

Wakeup source type. Permission ohos.permission.MANAGE_INTELLIGENT_VOICE is needed when calling createAudioCapturer with this type.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Core

**系统接口：** 此接口为系统接口。

## SOURCE_TYPE_VOICE_CALL

```TypeScript
SOURCE_TYPE_VOICE_CALL = 4
```

Voice call source type. Permission ohos.permission.RECORD_VOICE_CALL is needed when calling createAudioCapturer with this type.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Audio.Core

**系统接口：** 此接口为系统接口。

## SOURCE_TYPE_VOICE_COMMUNICATION

```TypeScript
SOURCE_TYPE_VOICE_COMMUNICATION = 7
```

Voice communication source. (The 3A algorithm is not enabled if recording is started independently. It is enabled when the AudioRenderer of the [STREAM_USAGE_VOICE_COMMUNICATION]audio.StreamUsage or [STREAM_USAGE_VIDEO_COMMUNICATION]audio.StreamUsage type is also used to start playback.)

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Core

## SOURCE_TYPE_VOICE_MESSAGE

```TypeScript
SOURCE_TYPE_VOICE_MESSAGE = 10
```

Voice message source.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Audio.Core

## SOURCE_TYPE_VOICE_TRANSCRIPTION

```TypeScript
SOURCE_TYPE_VOICE_TRANSCRIPTION = 12
```

Source type for voice transcription and processing.

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.Audio.Core

**系统接口：** 此接口为系统接口。

## SOURCE_TYPE_CAMCORDER

```TypeScript
SOURCE_TYPE_CAMCORDER = 13
```

Camcorder source type.

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Audio.Core

## SOURCE_TYPE_UNPROCESSED

```TypeScript
SOURCE_TYPE_UNPROCESSED = 14
```

Unprocessed source type.

**起始版本：** 14

**系统能力：** SystemCapability.Multimedia.Audio.Core

## SOURCE_TYPE_LIVE

```TypeScript
SOURCE_TYPE_LIVE = 17
```

Live broadcast source type.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Core

## SOURCE_TYPE_UNPROCESSED_VOICE_ASSISTANT

```TypeScript
SOURCE_TYPE_UNPROCESSED_VOICE_ASSISTANT = 19
```

Unprocessed voice assistant source type.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

**系统接口：** 此接口为系统接口。

