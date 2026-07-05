# getSeniorModeStateForApp

## getSeniorModeStateForApp

```TypeScript
function getSeniorModeStateForApp(bundleName: string, appIndex?: int): Promise<boolean>
```

Get the senior mode state for app.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.READ_ACCESSIBILITY_CONFIG

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Indicates the bundle name of the application to be queried  The bundle name must follow the reverse domain naming convention (e.g., "com.example.app"). |
| appIndex | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Returns {@code true} if senior mode is enabled; returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed.  A non-system application calls a system API. |
| 9300000 | System abnormality. |
| 9300008 | The appIndex is invalid. Possible causes:  1.The appIndex is out of the valid range.  2.The application corresponding to the appIndex does not exist. |

