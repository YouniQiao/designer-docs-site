# @ohos.multimodalInput.inputConsumer

The **inputConsumer** module implements listening for combination key events as well as listening and interception for volume key events. > **NOTE** > > - Global shortcut keys are combination keys defined by the system or application. System shortcut keys are defined > by the system, and application shortcut keys are defined by applications.

**Since:** 14

**System capability:** SystemCapability.MultimodalInput.Input.InputConsumer

## Modules to Import

```TypeScript
import { inputConsumer } from '@kit.InputKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getAllSystemHotkeys](arkts-input-getallsystemhotkeys-f.md#getallsystemhotkeys-1) | Obtains all system shortcut keys. This API uses a promise to return the result. |
| [off](arkts-input-off-f.md#off-2) | Unsubscribes from application shortcut key change events. This API uses an asynchronous callback to return the result. |
| [off](arkts-input-off-f.md#off-3) | Unsubscribes from key press events. This API uses an asynchronous callback to return the result. If the API call is successful, the system's default response to the key event will be resumed; that is, system-level actions, such as volume adjustment, will be triggered normally. |
| [on](arkts-input-on-f.md#on-2) | Subscribes to application shortcut key change events. This API obtains combination key input events that meet the specified conditions, and uses an asynchronous callback to return the result. |
| [on](arkts-input-on-f.md#on-3) | Subscribes to key press events. If the current application is in the foreground focus window, a callback is triggered when the specified key is pressed. This API uses an asynchronous callback to return the result. If the API call is successful, the system's default response to the key event will be intercepted; that is, system- level actions, such as volume adjustment, will no longer be triggered. To restore the system response, call [off](arkts-input-off-f.md#off-3) to disable listening for the key event. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getShieldStatus](arkts-input-getshieldstatus-f-sys.md#getshieldstatus-1) | Obtains the system hotkey shield status. |
| [off](arkts-input-off-f-sys.md#off-1) | Disables listening for system hotkey change events. This API uses an asynchronous callback to return the result. |
| [offKey](arkts-input-offkey-f-sys.md#offkey-1) | Unsubscribe system keys. |
| [on](arkts-input-on-f-sys.md#on-1) | Enables listening for system hotkey change events. This API uses an asynchronous callback to return the system hotkey data when a system hotkey event that meets the specified condition occurs. &gt; **NOTE** &gt; &gt; - You can subscribe to only the Down event of a key, or subscribe to both the Down and Up events of a key. &gt; &gt; - If you subscribe to only the Up event of a key, the Down event may be consumed by the focus window, and the Up &gt; event may not be closed. In this case, check whether the design and implementation are proper. |
| [onKey](arkts-input-onkey-f-sys.md#onkey-1) | Subscribe system keys. |
| [setShieldStatus](arkts-input-setshieldstatus-f-sys.md#setshieldstatus-1) | Sets the system hotkey shield status. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [HotkeyOptions](arkts-input-hotkeyoptions-i.md) | Defines shortcut key options. |
| [KeyPressedConfig](arkts-input-keypressedconfig-i.md) | Sets the key event consumption configuration. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [KeyOptions](arkts-input-keyoptions-i-sys.md) | Represents combination key options. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [KeyCommandTriggerType](arkts-input-keycommandtriggertype-e-sys.md) | KeyCommandTriggerType |
| [ShieldMode](arkts-input-shieldmode-e-sys.md) | Enumerates shortcut key shield modes. |
<!--DelEnd-->

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [KeyCommandCallback](arkts-input-keycommandcallback-t-sys.md) | Callback function when the shortcut key registered by the system application meets the conditions. |
<!--DelEnd-->

