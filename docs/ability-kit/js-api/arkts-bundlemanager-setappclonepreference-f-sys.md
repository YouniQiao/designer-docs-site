# setAppClonePreference

## setAppClonePreference

```TypeScript
function setAppClonePreference(bundleName: string, appClonePreference: AppClonePreference): Promise<void>
```

Sets the application clone preference configuration.

**Since:** 26.1.0

**Required permissions:** 

 ohos.permission.MANAGE_CLONE_BUNDLE_PREFERENCES

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name of the target application. |
| appClonePreference | AppClonePreference | Yes | Application clone preference configuration to set. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 17700001 | The specified bundleName is not found. |
| 17700026 | The specified bundle is disabled. |
| 17700061 | The specified app index is invalid. |
| 17700094 | The specified bundle did not create a clone. |

