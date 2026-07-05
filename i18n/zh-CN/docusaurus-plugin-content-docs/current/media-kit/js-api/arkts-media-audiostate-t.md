# AudioState

```TypeScript
type AudioState = 'idle' | 'playing' | 'paused' | 'stopped' | 'error'
```

Describes the audio playback state. You can obtain the state through the **state** property.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** media.AVPlayerState

**系统能力：** SystemCapability.Multimedia.Media.AudioPlayer

| 类型 | 说明 |
| --- | --- |
| 'idle' | No audio playback is in progress. The audio player is in this state after the  'dataload' or 'reset' event is triggered. |
| 'playing' | Audio playback is in progress. The audio player is in this state after the 'play'  event is triggered. |
| 'paused' | Audio playback is paused. The audio player is in this state after the 'pause' event  is triggered. |
| 'stopped' | Audio playback is stopped. The audio player is in this state after the 'stop' event  is triggered. |
| 'error' | Audio playback is in the error state. |

