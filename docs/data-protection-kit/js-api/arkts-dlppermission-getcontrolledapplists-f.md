# getControlledAppLists

## getControlledAppLists

```TypeScript
function getControlledAppLists(): Promise<Array<string>>
```

Obtain the list of applications that are subject to enterprise DLP control for the current user.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.DLP_POLICY_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.DataLossPrevention

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | Promise that returns the appIdentifiers of controlled application  for the current user. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 19100011 | The system ability works abnormally. |

