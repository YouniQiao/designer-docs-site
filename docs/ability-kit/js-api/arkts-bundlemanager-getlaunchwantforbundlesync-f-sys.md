# getLaunchWantForBundleSync

## getLaunchWantForBundleSync

```TypeScript
function getLaunchWantForBundleSync(bundleName: string, userId?: int): Want
```

根据给定的包名和用户ID，获取用于启动应用程序的Want参数。

**Since:** 10

**Required permissions:** 

- API version10  to  23: ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

- API version24 and later: ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or * (ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 表示应用的包名。 |
| userId | int | No | 表示用户ID，可以通过  [getOsAccountLocalId]@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback)  获取。 默认值：调用方所在用户。 取值范围：大于等于0。 |

**Return value:**

| Type | Description |
| --- | --- |
| Want | Want对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. [since 10 - 23] |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| 17700001 | The specified bundle is not found. |
| 17700004 | The specified user id is not found. |
| 17700026 | The specified bundle is disabled. |

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

