# onSeniorModeStateChangeForApp

## onSeniorModeStateChangeForApp

```TypeScript
function onSeniorModeStateChangeForApp(callback: Callback<AppSeniorModeInfo>): void
```

Register an observer for anyone application's senior mode state changes.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.READ_ACCESSIBILITY_CONFIG

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AppSeniorModeInfo> | Yes | Asynchronous callback interface. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed.  A non-system application calls a system API. |

