# getAppClonePreference (System API)

## Modules to Import

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
```

## getAppClonePreference

```TypeScript
function getAppClonePreference(bundleName: string): Promise<AppClonePreference>
```

Obtains the application clone preference configuration based on the given bundle name.

**Since:** 26.1.0

**Required permissions:** ohos.permission.MANAGE_CLONE_BUNDLE_PREFERENCES

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name of the target application. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AppClonePreference&gt; | Promise used to return the application clone preference configuration. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [17700001](../errorcode-bundle.md#17700001-bundle-name-does-not-exist) | The specified bundleName is not found. |
| 17700095 | The specified bundle not found app clone preference. |

