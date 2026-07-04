---
last_update:
  date: 2026-07-04
---

# getApplicationLabel

## Modules to Import

```TypeScript
import { bundleManager } from '@ohos.bundle.bundleManager';
```

## getApplicationLabel

```TypeScript
function getApplicationLabel(bundleName: string, appIndex: number): Promise<string>
```

Obtains the label of a specified application.

**Since:** 26.0.0

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Indicates the bundle name of the application. |
| appIndex | number | Yes | Indicates the index of clone app. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Returns label of specified application. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [17700001](../errorcode-bundle.md#17700001-bundle-name-does-not-exist) | The specified bundle is not found. |
| [17700061](../errorcode-bundle.md#17700061-appindex-for-a-clone-is-invalid) | The specified app index is invalid. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  bundleManager.getApplicationLabel('com.hap.myapplication', 1).then((data: string) => {
    hilog.info(0x0000, 'testTag', 'getApplicationLabel succeed: Data: %{public}s', data);
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'getApplicationLabel failed: %{public}d  %{public}s', err.code, err.message);
  });
} catch (err) {
  let code = (err as BusinessError).code;
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getApplicationLabel failed: error %{public}d  %{public}s', err.code, err.message);
}

```

