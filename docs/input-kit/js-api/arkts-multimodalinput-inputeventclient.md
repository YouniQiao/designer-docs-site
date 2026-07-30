# @ohos.multimodalInput.inputEventClient

The **inputEventClient** module provides the capability of injecting key, mouse/touchpad, and touchscreen events.

**Since:** 26.0.0

<!--Device-unnamed-declare namespace inputEventClient--><!--Device-unnamed-declare namespace inputEventClient-End-->

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { inputEventClient } from '@kit.InputKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createKeyboardController](arkts-input-inputeventclient-createkeyboardcontroller-f.md#createkeyboardcontroller) | Creates a keyboard controller for simulating key operations. This API uses a promise to return the result. |
| [createMouseController](arkts-input-inputeventclient-createmousecontroller-f.md#createmousecontroller) | Creates a mouse controller for simulating mouse operations. This API uses a promise to return the result. |
| [createTouchController](arkts-input-inputeventclient-createtouchcontroller-f.md#createtouchcontroller) | Creates a touch controller for simulating touch operations. This API uses a promise to return the result. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [injectEvent](arkts-input-inputeventclient-injectevent-f-sys.md#injectevent) | Injects keys (including single keys and combination keys). |
| [injectKeyEvent](arkts-input-inputeventclient-injectkeyevent-f-sys.md#injectkeyevent) | Injects key events (for both single keys and combination keys). |
| [injectMouseEvent](arkts-input-inputeventclient-injectmouseevent-f-sys.md#injectmouseevent) | Injects a mouse/touchpad event. |
| [injectTouchEvent](arkts-input-inputeventclient-injecttouchevent-f-sys.md#injecttouchevent) | Injects a touch event. |
| [permitInjection](arkts-input-inputeventclient-permitinjection-f-sys.md#permitinjection) | Specifies whether to authorize event injection. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [KeyboardController](arkts-input-inputeventclient-keyboardcontroller-i.md) | Provides the capability of simulating key operations. The simulated key operation sequence must meet the following requirements:  1. A key can only be pressed when it is in the released state, or when it is the most recently pressed key and has not been released.2. A key can only be released after it has been pressed.3. A maximum of five keys can be pressed and held simultaneously. |
| [MouseController](arkts-input-inputeventclient-mousecontroller-i.md) | Provides the capability of simulating mouse operations. The simulated mouse operation sequence must meet the following requirements:  1. A mouse button can be pressed only when it is in the released state.2. A mouse button can only be released after it has been pressed.3. A valid axis event sequence must begin with a **beginAxis** call, followed by zero or more **updateAxis** calls,and end with an **endAxis** call.4. Only one axis event sequence can be in progress at a time. |
| [TouchController](arkts-input-inputeventclient-touchcontroller-i.md) | Provides the capability of simulating touch operations. The simulated touch operation sequence must meet the following requirements:  1. All touch points must share the same **displayId**.2. Each touch point must begin with a **touchDown()** call, followed by zero or more **touchMove()** calls, and end with an **touchUp()** call. |
| [TouchPoint](arkts-input-inputeventclient-touchpoint-i.md) | Represents information about a single touch point on the display. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [KeyEvent](arkts-input-inputeventclient-keyevent-i-sys.md) | Defines the key event to inject. |
| [KeyEventData](arkts-input-inputeventclient-keyeventdata-i-sys.md) | Defines the key event to inject. |
| [KeyEventInfo](arkts-input-inputeventclient-keyeventinfo-i-sys.md) | Defines the key event information injected by the user. |
| [MouseEventData](arkts-input-inputeventclient-mouseeventdata-i-sys.md) | Defines the mouse event data. |
| [TouchEventData](arkts-input-inputeventclient-toucheventdata-i-sys.md) | Defines the touch event data. |
<!--DelEnd-->

