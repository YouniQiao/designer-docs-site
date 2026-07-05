# getAllBundleInfo

## getAllBundleInfo

```TypeScript
function getAllBundleInfo(bundleFlags: int, callback: AsyncCallback<Array<BundleInfo>>): void
```

根据给定的bundleFlags获取系统中所有的BundleInfo。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.GET_INSTALLED_BUNDLE_LIST

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleFlags | int | Yes | 指定返回的BundleInfo所包含的信息。 |
| callback | AsyncCallback&lt;Array&lt;BundleInfo>> | Yes | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-asynccallback-i.md#AsyncCallback)，当获取成功时，err为  undefined，data为获取到的Array；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let bundleFlags = bundleManager.BundleFlag.GET_BUNDLE_INFO_DEFAULT;

try {
  bundleManager.getAllBundleInfo(bundleFlags, (err, data) => {
    if (err) {
      hilog.error(0x0000, 'testTag', 'getAllBundleInfo failed: %{public}s', err.message);
    } else {
      hilog.info(0x0000, 'testTag', 'getAllBundleInfo successfully: %{public}s', JSON.stringify(data));
    }
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getAllBundleInfo failed: %{public}s', message);
}

```

## getAllBundleInfo

```TypeScript
function getAllBundleInfo(bundleFlags: int, userId: int, callback: AsyncCallback<Array<BundleInfo>>): void
```

根据给定的bundleFlags和userId获取系统中所有的BundleInfo。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.GET_INSTALLED_BUNDLE_LIST

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleFlags | int | Yes | 指定返回的BundleInfo所包含的信息。 |
| userId | int | Yes | 表示用户ID，可以通过  [getOsAccountLocalId]@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback)  获取。 |
| callback | AsyncCallback&lt;Array&lt;BundleInfo>> | Yes | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-asynccallback-i.md#AsyncCallback)，当获取成功时，err为  undefined，data为获取到的Array；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 17700004 | The specified user ID is not found. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let bundleFlags = bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_REQUESTED_PERMISSION;
let userId = 100;

try {
  bundleManager.getAllBundleInfo(bundleFlags, userId, (err, data) => {
    if (err) {
      hilog.error(0x0000, 'testTag', 'getAllBundleInfo failed: %{public}s', err.message);
    } else {
      hilog.info(0x0000, 'testTag', 'getAllBundleInfo successfully: %{public}s', JSON.stringify(data));
    }
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getAllBundleInfo failed: %{public}s', message);
}

```

## getAllBundleInfo

```TypeScript
function getAllBundleInfo(bundleFlags: int, userId?: int): Promise<Array<BundleInfo>>
```

根据给定的bundleFlags和userId获取系统中所有的BundleInfo。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.GET_INSTALLED_BUNDLE_LIST

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleFlags | int | Yes | 指定返回的BundleInfo所包含的信息。 |
| userId | int | No | 表示用户ID，可以通过  [getOsAccountLocalId]@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback)  获取，默认值：调用方所在用户，取值范围：大于等于0。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;BundleInfo>> | Promise对象。返回Array。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| 17700004 | The specified user ID is not found. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let bundleFlags = bundleManager.BundleFlag.GET_BUNDLE_INFO_DEFAULT;

try {
  bundleManager.getAllBundleInfo(bundleFlags).then((data) => {
    hilog.info(0x0000, 'testTag', 'getAllBundleInfo successfully. Data: %{public}s', JSON.stringify(data));
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'getAllBundleInfo failed. Cause: %{public}s', err.message);
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getAllBundleInfo failed. Cause: %{public}s', message);
}

```

