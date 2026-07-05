# PlaybackCaptureStartState

```TypeScript
enum PlaybackCaptureStartState
```

Defines the playback capture start state, which is returned asynchronously after calling {@link AudioCapturer.requestPlaybackCaptureStart} function.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Multimedia.Audio.PlaybackCapture

## STATE_SUCCESS

```TypeScript
STATE_SUCCESS = 0
```

Start playback capture success state.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.PlaybackCapture

## STATE_FAILED

```TypeScript
STATE_FAILED = 1
```

Start playback capture failed state, because the request for interrupt is denied or meet system internal error.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.PlaybackCapture

## STATE_NOT_AUTHORIZED

```TypeScript
STATE_NOT_AUTHORIZED = 2
```

Start playback capture but user not authorized state.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.PlaybackCapture

