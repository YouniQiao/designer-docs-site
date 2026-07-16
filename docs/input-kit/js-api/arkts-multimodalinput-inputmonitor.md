# @ohos.multimodalInput.inputMonitor

The **inputMonitor** module implements listening for events of input devices, including the touchscreen, mouse, and
touchpad.

> **NOTE**
>
> - In this document, **global** indicates the entire touchscreen or touchpad. For example, listening for global
> touch events means to listen for touch events triggered when a user touches at any position on the touchpad.

**Since:** 7

**System capability:** SystemCapability.MultimodalInput.Input.InputMonitor

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { inputMonitor } from '@kit.InputKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [off](arkts-input-off-f-sys.md#off-1) | Cancels listening for global touchscreen input events. This API uses an asynchronous callback to return the result. |
| [off](arkts-input-off-f-sys.md#off-2) | Disables listening for global mouse events. This API uses an asynchronous callback to return the result. |
| [off](arkts-input-off-f-sys.md#off-3) | Disables listening for global touchpad pinch events. This API uses an asynchronous callback to return the result. |
| [off](arkts-input-off-f-sys.md#off-4) | Disables listening for global touchpad pinch events. This API uses an asynchronous callback to return the result. |
| [off](arkts-input-off-f-sys.md#off-5) | Disables listening for rotation events of the touchpad. This API uses an asynchronous callback to return theresult. |
| [off](arkts-input-off-f-sys.md#off-6) | Disables listening for three-finger swipe events. This API uses an asynchronous callback to return the result. |
| [off](arkts-input-off-f-sys.md#off-7) | Disables listening for four-finger swipe events. This API uses an asynchronous callback to return the result. |
| [off](arkts-input-off-f-sys.md#off-8) | Disables listening for three-finger tap events. This API uses an asynchronous callback to return the result. |
| [off](arkts-input-off-f-sys.md#off-9) | Disables listening for fingerprint gesture input events. This API uses an asynchronous callback to return theresult. |
| [off](arkts-input-off-f-sys.md#off-10) | Cancels listening for inward swipe events. This API uses an asynchronous callback to return the result. |
| [off](arkts-input-off-f-sys.md#off-11) | Disables listening for touchscreen swipe events. This API uses an asynchronous callback to return the result. |
| [off](arkts-input-off-f-sys.md#off-12) | Disables listening for touchscreen pinch events. This API uses an asynchronous callback to return the result. |
| [off](arkts-input-off-f-sys.md#off-13) | Cancels listening for the press and release events of the specified key, which can be the **META_LEFT**,**META_RIGHT**, power, or volume key. This API must be used together with **inputMonitor.on ('keyPressed')**. ThisAPI uses an asynchronous callback to return the result. |
| [on](arkts-input-on-f-sys.md#on-1) | Listens for global touchscreen input events. This API uses an asynchronous callback to return the result. |
| [on](arkts-input-on-f-sys.md#on-2) | Enables listening for global mouse events. This API uses an asynchronous callback to return the result. |
| [on](arkts-input-on-f-sys.md#on-3) | Enables listening for mouse events. When the mouse pointer moves to the specified rectangular area, a callback istriggered. This API uses an asynchronous callback to return the result. |
| [on](arkts-input-on-f-sys.md#on-4) | Enables listening for global touchpad pinch events. This API uses an asynchronous callback to return the result. |
| [on](arkts-input-on-f-sys.md#on-5) | Enables listening for global touchpad pinch events. This API uses an asynchronous callback to return the result. |
| [on](arkts-input-on-f-sys.md#on-6) | Enables listening for rotation events of the touchpad. This API uses an asynchronous callback to return the result. |
| [on](arkts-input-on-f-sys.md#on-7) | Enables listening for three-finger swipe events. This API uses an asynchronous callback to return the result. |
| [on](arkts-input-on-f-sys.md#on-8) | Enables listening for four-finger swipe events. This API uses an asynchronous callback to return the result. |
| [on](arkts-input-on-f-sys.md#on-9) | Enables listening for three-finger tap events. This API uses an asynchronous callback to return the result. |
| [on](arkts-input-on-f-sys.md#on-10) | Enables listening for fingerprint gesture input events. This API uses an asynchronous callback to return theresult. |
| [on](arkts-input-on-f-sys.md#on-11) | Listens for inward swipe events. This API uses an asynchronous callback to return the result. |
| [on](arkts-input-on-f-sys.md#on-12) | Enables listening for touchscreen swipe events. This API uses an asynchronous callback to return the result. |
| [on](arkts-input-on-f-sys.md#on-13) | Enables listening for touchscreen pinch events. This API uses an asynchronous callback to return the result. |
| [on](arkts-input-on-f-sys.md#on-14) | Listens for the press and release events of the specified key, which can be the **META_LEFT**, **META_RIGHT**,power, or volume key. This API uses an asynchronous callback to return the result. |
| [queryTouchEvents](arkts-input-querytouchevents-f-sys.md#querytouchevents-1) | Queries recent touchscreen input events. A maximum of 100 events can be queried. Since API version 26.0.0, amaximum of 60 events can be queried. This API uses a promise to return the result. |
<!--DelEnd-->

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [TouchEventReceiver](arkts-input-toucheventreceiver-t-sys.md) | Callback used to return the touch event. |
<!--DelEnd-->

