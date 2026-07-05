# WindowEventListener

```TypeScript
declare type WindowEventListener = (windowId: int, event: window.WindowEventType) => void
```

窗口事件的回调函数定义

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| windowId | int | Yes | 触发事件的窗口id |
| event | window.WindowEventType | Yes | 窗口回调的事件类型 |

