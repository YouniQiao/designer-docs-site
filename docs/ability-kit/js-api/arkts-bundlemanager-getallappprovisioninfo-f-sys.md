# getAllAppProvisionInfo

## getAllAppProvisionInfo

```TypeScript
function getAllAppProvisionInfo(userId?: int): Promise<Array<AppProvisionInfo>>
```

根据userId获取指定用户下所有应用的[Provision]bundleManager/AppProvisionInfo配置文件信息。使用Promise异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or * (ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AppProvisionInfo>> | Promise对象，返回应用的provision配置文件信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied. A non-system application is not allowed to call a system API. |
| 17700004 | The specified user id is not found. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let userId = 100;

try {
  bundleManager.getAllAppProvisionInfo().then((data) => {
    hilog.info(0x0000, 'testTag', 'getAllAppProvisionInfo successfully. Data: %{public}s', JSON.stringify(data));
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'getAllAppProvisionInfo failed. Cause: %{public}s', err.message);
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getAllAppProvisionInfo failed. Cause: %{public}s', message);
}

try {
  bundleManager.getAllAppProvisionInfo(userId).then((data) => {
    hilog.info(0x0000, 'testTag', 'getAllAppProvisionInfo successfully. Data: %{public}s', JSON.stringify(data));
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'getAllAppProvisionInfo failed. Cause: %{public}s', err.message);
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getAllAppProvisionInfo failed. Cause: %{public}s', message);
}

```

