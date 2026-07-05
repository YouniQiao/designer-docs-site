# AudioSessionBehaviorFlags

```TypeScript
enum AudioSessionBehaviorFlags
```

Enumerates audio session behavior flags.

**起始版本：** 24

**系统能力：** SystemCapability.Multimedia.Audio.Core

## DEFAULT_BEHAVIOR

```TypeScript
DEFAULT_BEHAVIOR = 0x00000000
```

Default behavior, used to clear behavior settings.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

## MUTE_WHEN_INTERRUPTED

```TypeScript
MUTE_WHEN_INTERRUPTED = 0x00000002
```

When the system needs to stop or pause the audio stream, it performs a forced mute instead. In the audio session scenario, the application will receive a notification {@link #AUDIO_SESSION_STATE_CHANGE_HINT_MUTE} when muted and a notification {@link #AUDIO_SESSION_STATE_CHANGE_HINT_UNMUTE} when resumed. In the AudioRenderer and AudioCapturer scenarios, the application will receive a notification {@link #INTERRUPT_HINT_MUTE} when muted and a notification {@link #INTERRUPT_HINT_UNMUTE} when resumed. This flag cannot coexist with {@link #PAUSE_WHEN_INTERRUPTED}; if both flags are set, only {@link #PAUSE_WHEN_INTERRUPTED} will take effect.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

## PAUSE_WHEN_INTERRUPTED

```TypeScript
PAUSE_WHEN_INTERRUPTED = 0x00000004
```

When the system needs to stop the audio stream, it performs a pause instead. In the audio session scenario, the application will receive a notification {@link #AUDIO_SESSION_STATE_CHANGE_HINT_PAUSE} when paused and a notification {@link #AUDIO_SESSION_STATE_CHANGE_HINT_RESUME} when resumed. In the AudioRenderer and AudioCapturer scenarios, the application will receive a notification {@link #INTERRUPT_HINT_PAUSE} when paused and a notification {@link #INTERRUPT_HINT_RESUME} when resumed. This flag cannot coexist with {@link #MUTE_WHEN_INTERRUPTED}; if both flags are set, only this flag will take effect.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

