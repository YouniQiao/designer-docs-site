# getAppClonePreference

## getAppClonePreference

```TypeScript
function getAppClonePreference(bundleName: string): Promise<AppClonePreference>
```

Obtains the application clone preference configuration based on the given bundle name.

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

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AppClonePreference> | Promise used to return the application clone preference configuration. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 17700001 | The specified bundleName is not found. |
| 17700095 | The specified bundle not found app clone preference. |

