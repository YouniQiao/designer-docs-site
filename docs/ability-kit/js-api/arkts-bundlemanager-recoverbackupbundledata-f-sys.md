# recoverBackupBundleData

## recoverBackupBundleData

```TypeScript
function recoverBackupBundleData(bundleName: string, userId: int, appIndex: int): Promise<void>
```

恢复指定用户下指定应用或分身应用的备份数据。使用Promise异步回调。

**Since:** 21

**Required permissions:** 

 ohos.permission.RECOVER_BUNDLE

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 要恢复备份的应用包名。 |
| userId | int | Yes | 表示用户ID，可以通过  [getOsAccountLocalId]@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback)  获取，取值范围：大于等于0。 |
| appIndex | int | Yes | 表示应用索引。取值范围0~5，取值为0表示主应用，取值1~5表示分身应用的索引。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 17700001 | The specified bundleName is not found. |
| 17700004 | The specified user ID is not found. |
| 17700061 | AppIndex not in valid range. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

// Replace the bundle name, user ID, and application index with the actual ones.
let bundleName: string = 'com.ohos.demo';
let userId: number = 100;
let appIndex: number = 0;

try {
  bundleManager.recoverBackupBundleData(bundleName, userId, appIndex).then(() => {
    hilog.info(0x0000, 'testTag', 'recoverBackupBundleData successfully');
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'recoverBackupBundleData failed. Cause: %{public}s', err.message);
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'recoverBackupBundleData failed. Cause: %{public}s', message);
}

```

