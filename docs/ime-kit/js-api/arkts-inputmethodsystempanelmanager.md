# @ohos.inputMethodSystemPanelManager

Input method system panel manager.

**Since:** 26.0.0

<!--Device-unnamed-declare namespace inputMethodSystemPanelManager--><!--Device-unnamed-declare namespace inputMethodSystemPanelManager-End-->

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { inputMethodSystemPanelManager } from '@kit.IMEKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [connectSystemChannel](arkts-ime-inputmethodsystempanelmanager-connectsystemchannel-f-sys.md#connectsystemchannel-1) | Connect system channel for the panel and input method. |
| [offSystemPanelStatusChange](arkts-ime-inputmethodsystempanelmanager-offsystempanelstatuschange-f-sys.md#offsystempanelstatuschange-1) | Unsubscribe from the system panel status change event. |
| [offSystemPrivateCommand](arkts-ime-inputmethodsystempanelmanager-offsystemprivatecommand-f-sys.md#offsystemprivatecommand-1) | Unsubscribe from the event when the input method application sends private data commands. |
| [onSystemPanelStatusChange](arkts-ime-inputmethodsystempanelmanager-onsystempanelstatuschange-f-sys.md#onsystempanelstatuschange-1) | Subscribe to the system panel status change event. |
| [onSystemPrivateCommand](arkts-ime-inputmethodsystempanelmanager-onsystemprivatecommand-f-sys.md#onsystemprivatecommand-1) | Subscribe to the event when the input method application sends private data commands. |
| [sendPrivateCommand](arkts-ime-inputmethodsystempanelmanager-sendprivatecommand-f-sys.md#sendprivatecommand-1) | Send private command. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [SystemPanelStatus](arkts-ime-inputmethodsystempanelmanager-systempanelstatus-i-sys.md) | System panel status. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [InputMethodInputType](arkts-ime-inputmethodsystempanelmanager-inputmethodinputtype-e-sys.md) | Defines the input type. |
<!--DelEnd-->

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [CommandDataType](arkts-ime-inputmethodsystempanelmanager-commanddatatype-t-sys.md) | Indicates the possible data types of the command. |
<!--DelEnd-->

