# @ohos.multimodalInput.inputEventClient

The **inputEventClient** module provides the capability of injecting key, mouse/touchpad, and touchscreen events.

**Since:** 26.0.0

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { inputEventClient } from '@ohos.multimodalInput.inputEventClient';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createKeyboardController](arkts-input-createkeyboardcontroller-f.md#createkeyboardcontroller-1) | Creates a keyboard controller for simulating key operations. This API uses a promise to return the result. |
| [createMouseController](arkts-input-createmousecontroller-f.md#createmousecontroller-1) | Creates a mouse controller for simulating mouse operations. This API uses a promise to return the result. |
| [createTouchController](arkts-input-createtouchcontroller-f.md#createtouchcontroller-1) | Creates a touch controller for simulating touch operations. This API uses a promise to return the result. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [injectEvent](arkts-input-injectevent-f-sys.md#injectevent-1) | Injects keys (including single keys and combination keys). |
| [injectKeyEvent](arkts-input-injectkeyevent-f-sys.md#injectkeyevent-1) | Injects key events (for both single keys and combination keys). |
| [injectMouseEvent](arkts-input-injectmouseevent-f-sys.md#injectmouseevent-1) | Injects a mouse/touchpad event. |
| [injectTouchEvent](arkts-input-injecttouchevent-f-sys.md#injecttouchevent-1) | Injects a touch event. |
| [permitInjection](arkts-input-permitinjection-f-sys.md#permitinjection-1) | Specifies whether to authorize event injection. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [KeyboardController](arkts-input-keyboardcontroller-i.md) | Provides the capability of simulating key operations. The simulated key operation sequence must meet the following requirements: 1. A key can only be pressed when it is in the released state, or when it is the most recently pressed key and has not been released. 2. A key can only be released after it has been pressed. 3. A maximum of five keys can be pressed and held simultaneously. |
| [MouseController](arkts-input-mousecontroller-i.md) | Provides the capability of simulating mouse operations. The simulated mouse operation sequence must meet the following requirements: 1. A mouse button can be pressed only when it is in the released state. 2. A mouse button can only be released after it has been pressed. 3. A valid axis event sequence must begin with a **beginAxis** call, followed by zero or more **updateAxis** calls, and end with an **endAxis** call. 4. Only one axis event sequence can be in progress at a time. |
| [TouchController](arkts-input-touchcontroller-i.md) | Provides the capability of simulating touch operations. The simulated touch operation sequence must meet the following requirements: 1. All touch points must share the same **displayId**. 2. Each touch point must begin with a **touchDown()** call, followed by zero or more **touchMove()** calls, and end with an **touchUp()** call. |
| [TouchPoint](arkts-input-touchpoint-i.md) | Represents information about a single touch point on the display. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [KeyEvent](arkts-input-keyevent-i-sys.md) | Defines the key event to inject. |
| [KeyEventData](arkts-input-keyeventdata-i-sys.md) | Defines the key event to inject. |
| [KeyEventInfo](arkts-input-keyeventinfo-i-sys.md) | Defines the key event information injected by the user. |
| [MouseEventData](arkts-input-mouseeventdata-i-sys.md) | Defines the mouse event data. |
| [TouchEventData](arkts-input-toucheventdata-i-sys.md) | Defines the touch event data. |
<!--DelEnd-->

