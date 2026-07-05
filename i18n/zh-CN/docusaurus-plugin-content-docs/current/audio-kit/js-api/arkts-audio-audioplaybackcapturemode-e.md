# AudioPlaybackCaptureMode

```TypeScript
enum AudioPlaybackCaptureMode
```

Defines mode for playback capture, each mode means different target streams to capture.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Multimedia.Audio.PlaybackCapture

## MODE_DEFAULT

```TypeScript
MODE_DEFAULT = 0x0
```

Default mode. Capture most of the audio streams, except tone streams and privacy streams.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.PlaybackCapture

## MODE_MEDIA

```TypeScript
MODE_MEDIA = 0x1
```

Media mode. Capture media, voice message and also unknown streams.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.PlaybackCapture

## MODE_EXCLUDING_SELF

```TypeScript
MODE_EXCLUDING_SELF = 0x8000
```

Excluding self mode. Capture streams excluding the audio played by application itself.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.PlaybackCapture

