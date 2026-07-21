# @ohos.multimodalInput.inputConsumer

The **inputConsumer** module implements listening for combination key events as well as listening and interception for volume key events.

> **NOTE**  
>  
> - Global shortcut keys are combination keys defined by the system or application. System shortcut keys are defined  
> by the system, and application shortcut keys are defined by applications.

**Since:** 14

<!--Device-unnamed-declare namespace inputConsumer--><!--Device-unnamed-declare namespace inputConsumer-End-->

**System capability:** SystemCapability.MultimodalInput.Input.InputConsumer

## Modules to Import

```TypeScript
import { inputConsumer } from '@kit.InputKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getAllSystemHotkeys](arkts-input-inputconsumer-getallsystemhotkeys-f.md#getallsystemhotkeys) | Obtains all system shortcut keys. This API uses a promise to return the result. |
| [off](arkts-input-inputconsumer-off-f.md#off-1) | Unsubscribes from application shortcut key change events. This API uses an asynchronous callback to return the result. |
| [off](arkts-input-inputconsumer-off-f.md#off-2) | Unsubscribes from key press events. This API uses an asynchronous callback to return the result. If the API call is successful, the system's default response to the key event will be resumed; that is, system-level actions, such as volume adjustment, will be triggered normally. |
| [on](arkts-input-inputconsumer-on-f.md#on-1) | Subscribes to application shortcut key change events. This API obtains combination key input events that meet the specified conditions, and uses an asynchronous callback to return the result. |
| [on](arkts-input-inputconsumer-on-f.md#on-2) | Subscribes to key press events. If the current application is in the foreground focus window, a callback is triggered when the specified key is pressed. This API uses an asynchronous callback to return the result.  If the API call is successful, the system's default response to the key event will be intercepted; that is, system-level actions, such as volume adjustment, will no longer be triggered. To restore the system response, call [off](inputConsumer.off(type: 'keyPressed', callback?: Callback<KeyEvent>)) to disable listening for the key event. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getShieldStatus](arkts-input-inputconsumer-getshieldstatus-f-sys.md#getshieldstatus) | Obtains the system hotkey shield status. |
| [off](arkts-input-inputconsumer-off-f-sys.md#off) | Disables listening for system hotkey change events. This API uses an asynchronous callback to return the result. |
| [offKey](arkts-input-inputconsumer-offkey-f-sys.md#offkey) | Unsubscribe system keys. |
| [on](arkts-input-inputconsumer-on-f-sys.md#on) | Enables listening for system hotkey change events. This API uses an asynchronous callback to return the system hotkey data when a system hotkey event that meets the specified condition occurs. |
| [onKey](arkts-input-inputconsumer-onkey-f-sys.md#onkey) | Subscribe system keys. |
| [setShieldStatus](arkts-input-inputconsumer-setshieldstatus-f-sys.md#setshieldstatus) | Sets the system hotkey shield status. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [HotkeyOptions](arkts-input-inputconsumer-hotkeyoptions-i.md) | Defines shortcut key options. |
| [KeyPressedConfig](arkts-input-inputconsumer-keypressedconfig-i.md) | Sets the key event consumption configuration. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [KeyOptions](arkts-input-inputconsumer-keyoptions-i-sys.md) | Represents combination key options. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [KeyCommandTriggerType](arkts-input-inputconsumer-keycommandtriggertype-e-sys.md) | KeyCommandTriggerType |
| [ShieldMode](arkts-input-inputconsumer-shieldmode-e-sys.md) | Enumerates shortcut key shield modes. |
<!--DelEnd-->

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [KeyCommandCallback](arkts-input-inputconsumer-keycommandcallback-t-sys.md) | Callback function when the shortcut key registered by the system application meets the conditions. |
<!--DelEnd-->

