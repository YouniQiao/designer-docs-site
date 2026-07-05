# StreamUsage

```TypeScript
enum StreamUsage
```

Enumerates the types of audio streams played.

**Since:** 7

**System capability:** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_UNKNOWN

```TypeScript
STREAM_USAGE_UNKNOWN = 0
```

Unknown content.

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_MEDIA

```TypeScript
STREAM_USAGE_MEDIA = 1
```

Media.

**Since:** 7

**Deprecated since:** 10

**Substitute:** ohos.multimedia.audio.StreamUsage.STREAM_USAGE_MUSIC

**System capability:** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_MUSIC

```TypeScript
STREAM_USAGE_MUSIC = 1
```

Music.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_VOICE_COMMUNICATION

```TypeScript
STREAM_USAGE_VOICE_COMMUNICATION = 2
```

VoIP voice call. (The 3A algorithm is enabled when this stream starts.)

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_VOICE_ASSISTANT

```TypeScript
STREAM_USAGE_VOICE_ASSISTANT = 3
```

Voice assistant.

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_ALARM

```TypeScript
STREAM_USAGE_ALARM = 4
```

Audio stream for alarming.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_VOICE_MESSAGE

```TypeScript
STREAM_USAGE_VOICE_MESSAGE = 5
```

Voice message.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_NOTIFICATION_RINGTONE

```TypeScript
STREAM_USAGE_NOTIFICATION_RINGTONE = 6
```

Notification or ringtone usage.

**Since:** 7

**Deprecated since:** 10

**Substitute:** ohos.multimedia.audio.StreamUsage#STREAM_USAGE_RINGTONE

**System capability:** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_RINGTONE

```TypeScript
STREAM_USAGE_RINGTONE = 6
```

Ringtone.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_NOTIFICATION

```TypeScript
STREAM_USAGE_NOTIFICATION = 7
```

Notification.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_ACCESSIBILITY

```TypeScript
STREAM_USAGE_ACCESSIBILITY = 8
```

Accessibility.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_SYSTEM

```TypeScript
STREAM_USAGE_SYSTEM = 9
```

System usage, such as screen lock or key click.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Core

**System API:** This is a system API.

## STREAM_USAGE_MOVIE

```TypeScript
STREAM_USAGE_MOVIE = 10
```

Movie or video.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_GAME

```TypeScript
STREAM_USAGE_GAME = 11
```

Gaming.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_AUDIOBOOK

```TypeScript
STREAM_USAGE_AUDIOBOOK = 12
```

Audiobooks (including crosstalks and storytelling), news radio, and podcasts.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_NAVIGATION

```TypeScript
STREAM_USAGE_NAVIGATION = 13
```

Navigation.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_DTMF

```TypeScript
STREAM_USAGE_DTMF = 14
```

DTMF dial tone usage.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Core

**System API:** This is a system API.

## STREAM_USAGE_ENFORCED_TONE

```TypeScript
STREAM_USAGE_ENFORCED_TONE = 15
```

Enforced tone usage, such as camera shutter.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Core

**System API:** This is a system API.

## STREAM_USAGE_ULTRASONIC

```TypeScript
STREAM_USAGE_ULTRASONIC = 16
```

Ultrasonic playing usage. This type is only used for msdp condition.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Audio.Core

**System API:** This is a system API.

## STREAM_USAGE_VIDEO_COMMUNICATION

```TypeScript
STREAM_USAGE_VIDEO_COMMUNICATION = 17
```

VoIP video call. (The 3A algorithm is enabled when this stream starts.)

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Audio.Core

## STREAM_USAGE_VOICE_CALL_ASSISTANT

```TypeScript
STREAM_USAGE_VOICE_CALL_ASSISTANT = 21
```

Voice call assistant type. This type is only used for call assistant functionalities.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Audio.Core

**System API:** This is a system API.

## STREAM_USAGE_ANNOUNCEMENT

```TypeScript
STREAM_USAGE_ANNOUNCEMENT = 22
```

Announcement usage.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.Core

**System API:** This is a system API.

## STREAM_USAGE_EMERGENCY

```TypeScript
STREAM_USAGE_EMERGENCY = 23
```

Emergency usage.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.Core

**System API:** This is a system API.

