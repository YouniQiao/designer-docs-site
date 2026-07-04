# WindowEventListener

```TypeScript
declare type WindowEventListener = (windowId: number, event: window.WindowEventType) => void
```

Callback function for window event

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| windowId | int | Yes | The id of the window which triggers the event |
| event | window.WindowEventType | Yes | Window callback event type |

