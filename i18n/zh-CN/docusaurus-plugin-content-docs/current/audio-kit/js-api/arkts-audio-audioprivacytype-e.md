# AudioPrivacyType

```TypeScript
enum AudioPrivacyType
```

Enumerates whether an audio stream can be recorded by other applications.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.PlaybackCapture

## PRIVACY_TYPE_PUBLIC

```TypeScript
PRIVACY_TYPE_PUBLIC = 0
```

The audio stream can be recorded or screen-projected by other applications and is not privacy-related.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.PlaybackCapture

## PRIVACY_TYPE_PRIVATE

```TypeScript
PRIVACY_TYPE_PRIVATE = 1
```

The audio stream cannot be recorded or screen-projected by other applications.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Audio.PlaybackCapture

## PRIVACY_TYPE_SHARED

```TypeScript
PRIVACY_TYPE_SHARED = 2
```

The audio stream can be recorded or screen-projected by other applications and is privacy-related. For example, if the privacy policy is **PRIVACY_TYPE_PUBLIC**, audio streams of the [STREAM_USAGE_VOICE_COMMUNICATION]audio.StreamUsage type cannot be recorded or screen-projected by other applications. However, if the privacy policy is **PRIVACY_TYPE_SHARED**, these audio streams can be recorded or screen- projected by other applications.

**起始版本：** 21

**系统能力：** SystemCapability.Multimedia.Audio.PlaybackCapture

