# VideoPlayState

```TypeScript
type VideoPlayState = 'idle' | 'prepared' | 'playing' | 'paused' | 'stopped' | 'error'
```

Describes the video playback state. You can obtain the state through the **state** property.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** media.AVPlayerState

**系统能力：** SystemCapability.Multimedia.Media.VideoPlayer

| 类型 | 说明 |
| --- | --- |
| 'idle' | The video player is idle. |
| 'prepared' | Video playback is being prepared. |
| 'playing' | Video playback is in progress. |
| 'paused' | Video playback is paused. |
| 'stopped' | Video playback is stopped. |
| 'error' | Video playback is in the error state. |

