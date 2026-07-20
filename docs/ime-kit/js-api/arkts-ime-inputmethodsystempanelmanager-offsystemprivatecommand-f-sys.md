# offSystemPrivateCommand (System API)

## Modules to Import

```TypeScript
import { inputMethodSystemPanelManager } from '@kit.IMEKit';
```

## offSystemPrivateCommand

```TypeScript
function offSystemPrivateCommand(callback?: Callback<Record<string, CommandDataType>>): void
```

Unsubscribe from the event when the input method application sends private data commands.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-inputMethodSystemPanelManager-function offSystemPrivateCommand(callback?: Callback<Record<string, CommandDataType>>): void--><!--Device-inputMethodSystemPanelManager-function offSystemPrivateCommand(callback?: Callback<Record<string, CommandDataType>>): void-End-->

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<Record<string, CommandDataType>> | No | callback triggered when an input method application sends a private data command. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | not system application. |

