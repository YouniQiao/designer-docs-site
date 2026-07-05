# getAppCloneBundleInfo

## getAppCloneBundleInfo

```TypeScript
function getAppCloneBundleInfo(bundleName: string, appIndex: int, bundleFlags: int, userId?: int): Promise<BundleInfo>
```

根据bundleName、分身索引、[bundleFlags](arkts-bundlemanager-bundleflag-e.md#BundleFlag)以及用户ID查询主应用或分身应用的 BundleInfo。使用Promise异步回调。 获取调用方自身的信息时不需要权限。

**Since:** 12

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 表示要查询的应用Bundle名称。 |
| appIndex | int | Yes | 表示要查询的分身应用索引。 appIndex为0时，表示查询主应用信息。appIndex大于0时，表示查询指定分身应用信息。 |
| bundleFlags | int | Yes | 表示用于指定要返回的BundleInfo对象中包含的信息的标志。 |
| userId | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;BundleInfo> | Promise对象。返回应用包信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 17700001 | The specified bundleName is not found. |
| 17700004 | The specified user ID is not found. |
| 17700026 | The specified bundle is disabled. |
| 17700061 | AppIndex not in valid range. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let bundleName = 'com.example.myapplication';
let appIndex = 1;
let bundleFlags = bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_HAP_MODULE |
bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_EXTENSION_ABILITY;

try {
  bundleManager.getAppCloneBundleInfo(bundleName, appIndex, bundleFlags).then((res: bundleManager.BundleInfo) => {
    hilog.info(0x0000, 'testTag', 'getAppCloneBundleInfo res: BundleInfo = %{public}s', JSON.stringify(res));
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'getAppCloneBundleInfo failed. Cause: %{public}s', err.message);
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getAppCloneBundleInfo failed. Cause: %{public}s', message);
}

```

