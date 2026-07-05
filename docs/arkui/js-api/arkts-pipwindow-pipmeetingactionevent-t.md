# PiPMeetingActionEvent

```TypeScript
type PiPMeetingActionEvent = 'hangUp' | 'voiceStateChanged' | 'videoStateChanged' | 'micStateChanged'
```

视频会议控制事件类型。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

| Type | Description |
| --- | --- |
| 'hangUp' | 挂断视频会议。 |
| 'voiceStateChanged' | 静音或解除静音。 |
| 'videoStateChanged' | 打开或关闭摄像头。 |
| 'micStateChanged' | 打开或关闭麦克风。 [since 12] |

