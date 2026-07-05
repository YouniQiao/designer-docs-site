# ControlPanelActionEventCallback

```TypeScript
type ControlPanelActionEventCallback = (event: PiPActionEventType, status?: int) => void
```

描述画中画控制面板控件动作事件回调。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | PiPActionEventType | Yes | 回调画中画控制面板控件动作事件类型。 应用依据控件动作事件做相应处理，如触发'playbackStateChanged'事件时，需要开始或停止视频  。 |
| status | int | no |  |

