# AudioSessionStateChangeHint

```TypeScript
enum AudioSessionStateChangeHint
```

Enumerates the hints for audio session state changes. The hint is obtained when an [AudioSessionStateChangedEvent](arkts-audio-audiosessionstatechangedevent-i.md#AudioSessionStateChangedEvent) is received. The hint specifies the action (such as audio pause or volume adjustment) to take on the audio session based on the focus strategy. For details, see [Audio Session Management](docroot://media/audio/audio-session-management.md).

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Core

## AUDIO_SESSION_STATE_CHANGE_HINT_RESUME

```TypeScript
AUDIO_SESSION_STATE_CHANGE_HINT_RESUME = 0
```

A hint is displayed, indicating that the audio session is resuming. The application can proactively trigger operations such as rendering.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Core

## AUDIO_SESSION_STATE_CHANGE_HINT_PAUSE

```TypeScript
AUDIO_SESSION_STATE_CHANGE_HINT_PAUSE = 1
```

A hint is displayed, indicating that the audio session is paused and the audio focus is lost temporarily. When focus is regained, the AUDIO_SESSION_STATE_CHANGE_HINT_RESUME event is received.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Core

## AUDIO_SESSION_STATE_CHANGE_HINT_STOP

```TypeScript
AUDIO_SESSION_STATE_CHANGE_HINT_STOP = 2
```

A hint is displayed, indicating that the audio session is stopped and the audio focus is lost permanently.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Core

## AUDIO_SESSION_STATE_CHANGE_HINT_TIME_OUT_STOP

```TypeScript
AUDIO_SESSION_STATE_CHANGE_HINT_TIME_OUT_STOP = 3
```

A hint is displayed, indicating that the audio session is stopped by the system due to no activity, and the audio focus is lost.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Core

## AUDIO_SESSION_STATE_CHANGE_HINT_DUCK

```TypeScript
AUDIO_SESSION_STATE_CHANGE_HINT_DUCK = 4
```

A hint is displayed, indicating that audio ducking starts and the audio is played at a lower volume. If [enableMuteSuggestionWhenMixWithOthers](arkts-audio-audiosessionmanager-i.md#enableMuteSuggestionWhenMixWithOthers) is enabled, you can choose to mute the audio.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Core

## AUDIO_SESSION_STATE_CHANGE_HINT_UNDUCK

```TypeScript
AUDIO_SESSION_STATE_CHANGE_HINT_UNDUCK = 5
```

A hint is displayed, indicating that audio ducking ends and the audio is played at the normal volume. If [enableMuteSuggestionWhenMixWithOthers](arkts-audio-audiosessionmanager-i.md#enableMuteSuggestionWhenMixWithOthers) is enabled, you can unmute the audio.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.Audio.Core

## AUDIO_SESSION_STATE_CHANGE_HINT_MUTE_SUGGESTION

```TypeScript
AUDIO_SESSION_STATE_CHANGE_HINT_MUTE_SUGGESTION = 6
```

Suggests to mute the playback because there is another application begin to play nonmixable audio, application can decide whether to mute. If interrupt strategy is duck, {@link #AUDIO_SESSION_STATE_CHANGE_HINT_DUCK} will replace mute suggestion event, but application can still decide to mute when receive hint duck.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

## AUDIO_SESSION_STATE_CHANGE_HINT_UNMUTE_SUGGESTION

```TypeScript
AUDIO_SESSION_STATE_CHANGE_HINT_UNMUTE_SUGGESTION = 7
```

Suggest to unmute the playback because another application's nonmixable audio ends, application can decide whether to mute. If interrupt strategy is unduck, {@link #AUDIO_SESSION_STATE_CHANGE_HINT_UNDUCK} will replace unmute suggestion event, but application can still decide to unmute when receive hint unduck.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

## AUDIO_SESSION_STATE_CHANGE_HINT_MUTE

```TypeScript
AUDIO_SESSION_STATE_CHANGE_HINT_MUTE = 8
```

The hint can be received only after the parameter {@link #AudioSessionBehaviorFlags.MUTE_WHEN_INTERRUPTED} has been set by the interface {@link #setAudioSessionBehavior} and {@link #setAudioSessionScene} has been called, and the audio session has been activated. After the hint is received, the audio stream is muted.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

## AUDIO_SESSION_STATE_CHANGE_HINT_UNMUTE

```TypeScript
AUDIO_SESSION_STATE_CHANGE_HINT_UNMUTE = 9
```

The hint can be received only after the parameter {@link #AudioSessionBehaviorFlags.MUTE_WHEN_INTERRUPTED} has been set by the interface {@link #setAudioSessionBehavior} and {@link #setAudioSessionScene} has been called, and the audio session has been activated. When the hint is received, the audio stream is unmuted.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

