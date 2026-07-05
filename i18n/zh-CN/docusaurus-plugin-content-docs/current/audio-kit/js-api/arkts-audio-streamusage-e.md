# StreamUsage

```TypeScript
enum StreamUsage
```

Enumerates the types of audio streams played.

**起始版本：** 7

**系统能力：** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_UNKNOWN

```TypeScript
STREAM_USAGE_UNKNOWN = 0
```

Unknown content.

**起始版本：** 7

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_MEDIA

```TypeScript
STREAM_USAGE_MEDIA = 1
```

Media.

**起始版本：** 7

**废弃版本：** 10

**替代接口：** ohos.multimedia.audio.StreamUsage.STREAM_USAGE_MUSIC

**系统能力：** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_MUSIC

```TypeScript
STREAM_USAGE_MUSIC = 1
```

Music.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_VOICE_COMMUNICATION

```TypeScript
STREAM_USAGE_VOICE_COMMUNICATION = 2
```

VoIP voice call. (The 3A algorithm is enabled when this stream starts.)

**起始版本：** 7

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_VOICE_ASSISTANT

```TypeScript
STREAM_USAGE_VOICE_ASSISTANT = 3
```

Voice assistant.

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_ALARM

```TypeScript
STREAM_USAGE_ALARM = 4
```

Audio stream for alarming.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_VOICE_MESSAGE

```TypeScript
STREAM_USAGE_VOICE_MESSAGE = 5
```

Voice message.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_NOTIFICATION_RINGTONE

```TypeScript
STREAM_USAGE_NOTIFICATION_RINGTONE = 6
```

Notification or ringtone usage.

**起始版本：** 7

**废弃版本：** 10

**替代接口：** ohos.multimedia.audio.StreamUsage#STREAM_USAGE_RINGTONE

**系统能力：** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_RINGTONE

```TypeScript
STREAM_USAGE_RINGTONE = 6
```

Ringtone.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_NOTIFICATION

```TypeScript
STREAM_USAGE_NOTIFICATION = 7
```

Notification.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_ACCESSIBILITY

```TypeScript
STREAM_USAGE_ACCESSIBILITY = 8
```

Accessibility.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_SYSTEM

```TypeScript
STREAM_USAGE_SYSTEM = 9
```

System usage, such as screen lock or key click.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Core

**系统接口：** 此接口为系统接口。

## STREAM_USAGE_MOVIE

```TypeScript
STREAM_USAGE_MOVIE = 10
```

Movie or video.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_GAME

```TypeScript
STREAM_USAGE_GAME = 11
```

Gaming.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_AUDIOBOOK

```TypeScript
STREAM_USAGE_AUDIOBOOK = 12
```

Audiobooks (including crosstalks and storytelling), news radio, and podcasts.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_NAVIGATION

```TypeScript
STREAM_USAGE_NAVIGATION = 13
```

Navigation.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_DTMF

```TypeScript
STREAM_USAGE_DTMF = 14
```

DTMF dial tone usage.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Core

**系统接口：** 此接口为系统接口。

## STREAM_USAGE_ENFORCED_TONE

```TypeScript
STREAM_USAGE_ENFORCED_TONE = 15
```

Enforced tone usage, such as camera shutter.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Core

**系统接口：** 此接口为系统接口。

## STREAM_USAGE_ULTRASONIC

```TypeScript
STREAM_USAGE_ULTRASONIC = 16
```

Ultrasonic playing usage. This type is only used for msdp condition.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.Core

**系统接口：** 此接口为系统接口。

## STREAM_USAGE_VIDEO_COMMUNICATION

```TypeScript
STREAM_USAGE_VIDEO_COMMUNICATION = 17
```

VoIP video call. (The 3A algorithm is enabled when this stream starts.)

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_VOICE_CALL_ASSISTANT

```TypeScript
STREAM_USAGE_VOICE_CALL_ASSISTANT = 21
```

Voice call assistant type. This type is only used for call assistant functionalities.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Audio.Core

**系统接口：** 此接口为系统接口。

## STREAM_USAGE_ANNOUNCEMENT

```TypeScript
STREAM_USAGE_ANNOUNCEMENT = 22
```

Announcement usage.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

**系统接口：** 此接口为系统接口。

## STREAM_USAGE_EMERGENCY

```TypeScript
STREAM_USAGE_EMERGENCY = 23
```

Emergency usage.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

**系统接口：** 此接口为系统接口。

