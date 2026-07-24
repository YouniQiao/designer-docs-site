# setAppClonePreference (System API)

## Modules to Import

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
```

## setAppClonePreference

```TypeScript
function setAppClonePreference(bundleName: string, appClonePreference: AppClonePreference): Promise<void>
```

Sets the application clone preference configuration.

**Since:** 26.1.0

**Required permissions:** ohos.permission.MANAGE_CLONE_BUNDLE_PREFERENCES

**Model restriction:** This API can be used only in the stage model.

<!--Device-bundleManager-function setAppClonePreference(bundleName: string, appClonePreference: AppClonePreference): Promise<void>--><!--Device-bundleManager-function setAppClonePreference(bundleName: string, appClonePreference: AppClonePreference): Promise<void>-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name of the target application. |
| appClonePreference | [AppClonePreference](arkts-ability-bundleinfo-appclonepreference-i-sys.md) | Yes | Application clone preference configuration to set. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [17700001](../errorcode-bundle.md#17700001-bundle-name-does-not-exist) | The specified bundleName is not found. |
| [17700026](../errorcode-bundle.md#17700026-bundle-disabled) | The specified bundle is disabled. |
| [17700061](../errorcode-bundle.md#17700061-appindex-for-a-clone-is-invalid) | The specified app index is invalid. |
| 17700094 | The specified bundle did not create a clone. |

