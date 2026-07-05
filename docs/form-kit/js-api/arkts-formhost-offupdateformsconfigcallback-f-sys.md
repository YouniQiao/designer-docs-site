# offUpdateFormsConfigCallback

## offUpdateFormsConfigCallback

```TypeScript
function offUpdateFormsConfigCallback(callback?: formInfo.UpdateFormsConfigCallback): void
```

Unregister the callback for updating form config.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | formInfo.UpdateFormsConfigCallback | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 16500050 | IPC connection error. |

