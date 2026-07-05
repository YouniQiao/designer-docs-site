# onSystemPanelStatusChange

## onSystemPanelStatusChange

```TypeScript
function onSystemPanelStatusChange(callback: Callback<SystemPanelStatus>): void
```

Subscribe to the system panel status change event.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;SystemPanelStatus> | Yes | callback triggered when the system panel status changes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | not system application. |

