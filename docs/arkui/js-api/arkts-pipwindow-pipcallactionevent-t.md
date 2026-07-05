# PiPCallActionEvent

```TypeScript
type PiPCallActionEvent = 'hangUp' | 'micStateChanged' | 'videoStateChanged' | 'voiceStateChanged'
```

视频通话控制事件类型。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

| Type | Description |
| --- | --- |
| 'hangUp' | 挂断视频通话。 |
| 'micStateChanged' | 打开或关闭麦克风。 |
| 'videoStateChanged' | 打开或关闭摄像头。 |
| 'voiceStateChanged' | 静音或解除静音。 [since 12] |

