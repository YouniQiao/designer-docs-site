# setAdditionalInfo (System API)

## Modules to Import

```TypeScript
import { bundleManager } from '@ohos.bundle.bundleManager';
```

## setAdditionalInfo

```TypeScript
function setAdditionalInfo(bundleName: string, additionalInfo: string): void
```

Sets additional information for an application. This API can be called only by AppGallery.

**Since:** 11

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| additionalInfo | string | Yes | Additional information to set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter bundleName is empty. |
| [17700001](../errorcode-bundle.md#17700001-bundle-name-does-not-exist) | The specified bundleName is not found. |
| [17700053](../errorcode-bundle.md#17700053-not-invoked-by-appgallery) | The caller is not AppGallery. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let bundleName = "com.example.myapplication";
let additionalInfo = "xxxxxxxxx,formUpdateLevel:4";

try {
  bundleManager.setAdditionalInfo(bundleName, additionalInfo);
  hilog.info(0x0000, 'testTag', 'setAdditionalInfo successfully.');
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'setAdditionalInfo failed. Cause: %{public}s', message);
}

```

