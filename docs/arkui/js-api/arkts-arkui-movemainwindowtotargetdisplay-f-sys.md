# moveMainWindowToTargetDisplay (System API)

## Modules to Import

```TypeScript
import { window } from '@kit.ArkUI';
```

## moveMainWindowToTargetDisplay

```TypeScript
function moveMainWindowToTargetDisplay(displayId: number, windowId: number, userId?: number): Promise<void>
```

Move a window to the target display. The window must be a main window.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayId | number | Yes | Indicate the id of display. |
| windowId | number | Yes | A main window id which will be moved. |
| userId | number | No | Indicate the user ID of the target application space.If not provided, the current user is used by default. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value indicates complete. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal.Possible cause: The window is not found or has been destoryed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300004](../errorcode-window.md#1300004-unauthorized-operation) | Unauthorized operation. Possible cause: The window is not a main window. |
| [1300008](../errorcode-window.md#1300008-display-device-exception) | Invalid display. Possible cause:1. DisplayId is a negative number or not exist. |
| [1300016](../errorcode-window.md#1300016-parameter-verification-error) | Parameter error. Possible cause:1. The userId is not exist. |

