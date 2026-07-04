---
last_update:
  date: 2026-07-04
---

# isApplicationDisableForbidden (System API)

## Modules to Import

```TypeScript
import { bundleManager } from '@ohos.bundle.bundleManager';
```

## isApplicationDisableForbidden

```TypeScript
function isApplicationDisableForbidden(bundleName: string, userId: number, appIndex: number): boolean
```

Check whether a specified application is forbidden to be disabled. If you need to check whether an application is forbidden to be disabled under the current user, ohos.permission.GET_BUNDLE_INFO_PRIVILEGED needs to be applied for. If you need to check whether an application is forbidden to be disabled under other users, ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS need to be applied for.

**Since:** 24

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or (ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Indicates the bundle name. |
| userId | number | Yes | Indicates the user ID. |
| appIndex | number | Yes | Indicates the index of clone app. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the application is forbidden to be disabled; returns false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied. Non-system APP calling system API. |
| [17700001](../errorcode-bundle.md#17700001-bundle-name-does-not-exist) | The specified bundle is not found. |
| [17700004](../errorcode-bundle.md#17700004-user-id-does-not-exist) | The specified user ID is not found. |
| [17700061](../errorcode-bundle.md#17700061-appindex-for-a-clone-is-invalid) | The specified app index is invalid. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let bundleName: string = 'com.example.myapplication';
let userId: number = 100;
let appIndex: number = 0;

try {
  let data = bundleManager.isApplicationDisableForbidden(bundleName, userId, appIndex);
  hilog.info(0x0000, 'testTag', 'isApplicationDisableForbidden successfully: %{public}s', JSON.stringify(data));
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'isApplicationDisableForbidden failed: %{public}s', message);
}


```

