# PiPVideoActionEvent

```TypeScript
type PiPVideoActionEvent = 'playbackStateChanged' | 'nextVideo' | 'previousVideo' | 'fastForward' | 'fastBackward'
```

视频播放控制事件类型。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

| Type | Description |
| --- | --- |
| 'playbackStateChanged' | 播放状态发生了变化。 |
| 'nextVideo' | 播放下一个视频。 |
| 'previousVideo' | 播放上一个视频。 |
| 'fastForward' | 视频进度快进。从API version 12 开始支持。 [since 12] |
| 'fastBackward' | 视频进度后退。从API version 12 开始支持。 [since 12] |

