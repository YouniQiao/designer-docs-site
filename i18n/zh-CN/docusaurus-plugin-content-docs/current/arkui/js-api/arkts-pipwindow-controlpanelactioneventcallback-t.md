# ControlPanelActionEventCallback

```TypeScript
type ControlPanelActionEventCallback = (event: PiPActionEventType, status?: int) => void
```

描述画中画控制面板控件动作事件回调。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | PiPActionEventType | 是 | 回调画中画控制面板控件动作事件类型。 应用依据控件动作事件做相应处理，如触发'playbackStateChanged'事件时，需要开始或停止视频  。 |
| status | int | 否 |  |

