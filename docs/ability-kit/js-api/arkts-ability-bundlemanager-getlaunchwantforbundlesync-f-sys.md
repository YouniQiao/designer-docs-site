# getLaunchWantForBundleSync (System API)

## Modules to Import

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
```

## getLaunchWantForBundleSync

```TypeScript
function getLaunchWantForBundleSync(bundleName: string, userId?: number): Want
```

Obtains the Want used to launch the bundle based on the given bundle name and user ID. This API returns the result synchronously.

**Since:** 24

**Required permissions:** 
- API version 24+: ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or (ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)
- API version 10 - 23: ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

<!--Device-bundleManager-function getLaunchWantForBundleSync(bundleName: string, userId?: int): Want--><!--Device-bundleManager-function getLaunchWantForBundleSync(bundleName: string, userId?: int): Want-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| userId | number | No | User ID, which can be obtained by calling [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-osaccount-accountmanager-i.md#getosaccountlocalid-1). The default value is the user ID of the caller. The value must be greater than or equal to 0. |

**Return value:**

| Type | Description |
| --- | --- |
| [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Want object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api.<br>**Applicable version:** 10 - 23 |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [17700001](../errorcode-bundle.md#17700001-bundle-name-does-not-exist) | The specified bundle is not found. |
| [17700004](../errorcode-bundle.md#17700004-user-id-does-not-exist) | The specified user id is not found. |
| [17700026](../errorcode-bundle.md#17700026-bundle-disabled) | The specified bundle is disabled. |

**Example**

```TypeScript
// The sample API contains the userId parameter. Obtain the Want parameter required for starting an application of a specified user.
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { Want } from '@kit.AbilityKit';

let bundleName = 'com.example.myapplication';
let userId = 100;

try {
  let want: Want = bundleManager.getLaunchWantForBundleSync(bundleName, userId);
  hilog.info(0x0000, 'testTag', 'getLaunchWantForBundleSync successfully. Data: %{public}s', JSON.stringify(want));
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getLaunchWantForBundleSync failed. Cause: %{public}s', message);
}

```

```TypeScript
// The sample API does not contain the userId parameter. Obtain the Want parameter required for starting an application of the current user.
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { Want } from '@kit.AbilityKit';

let bundleName = 'com.example.myapplication';

try {
  let want: Want = bundleManager.getLaunchWantForBundleSync(bundleName);
  hilog.info(0x0000, 'testTag', 'getLaunchWantForBundleSync successfully. Data: %{public}s', JSON.stringify(want));
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getLaunchWantForBundleSync failed. Cause: %{public}s', message);
}

```

