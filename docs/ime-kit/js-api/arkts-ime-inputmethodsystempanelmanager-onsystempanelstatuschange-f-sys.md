# onSystemPanelStatusChange (System API)

## Modules to Import

```TypeScript
import { inputMethodSystemPanelManager } from '@kit.IMEKit';
```

<a id="onsystempanelstatuschange"></a>
## onSystemPanelStatusChange

```TypeScript
function onSystemPanelStatusChange(callback: Callback<SystemPanelStatus>): void
```

Subscribe to the system panel status change event.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-inputMethodSystemPanelManager-function onSystemPanelStatusChange(callback: Callback<SystemPanelStatus>): void--><!--Device-inputMethodSystemPanelManager-function onSystemPanelStatusChange(callback: Callback<SystemPanelStatus>): void-End-->

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;SystemPanelStatus&gt; | Yes | callback triggered when the system panel status changes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | not system application. |

