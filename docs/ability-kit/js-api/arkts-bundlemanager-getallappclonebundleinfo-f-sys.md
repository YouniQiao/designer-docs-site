# getAllAppCloneBundleInfo

## getAllAppCloneBundleInfo

```TypeScript
function getAllAppCloneBundleInfo(bundleName: string, bundleFlags: int, userId?: int): Promise<Array<BundleInfo>>
```

根据bundleName、[bundleFlags](arkts-bundlemanager-bundleflag-e.md#BundleFlag)以及用户ID查询主应用和分身应用的BundleInfo列表。 使用Promise异步回调。 获取调用方自身的信息时不需要权限。

**Since:** 12

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 表示要查询的应用Bundle名称。 |
| bundleFlags | int | Yes | 表示用于指定要返回的BundleInfo对象中包含的信息的标志。 |
| userId | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;BundleInfo>> | Promise对象。返回应用包信息列表。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 17700001 | The specified bundleName is not found. |
| 17700004 | The specified user ID is not found. |
| 17700026 | The specified bundle and clone apps are all disabled. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let bundleName = 'com.example.myapplication';
let bundleFlags = bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_HAP_MODULE |
bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_EXTENSION_ABILITY;

try {
  bundleManager.getAllAppCloneBundleInfo(bundleName, bundleFlags).then((res: Array<bundleManager.BundleInfo>) => {
    let index = 0;
    for (let item of res) {
      hilog.info(0x0000, 'testTag', 'getAllAppCloneBundleInfo res: BundleInfo[%{public}d] = %{public}s', index++,
        JSON.stringify(item));
    }
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'getAllAppCloneBundleInfo failed. Cause: %{public}s', err.message);
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getAllAppCloneBundleInfo failed. Cause: %{public}s', message);
}

```

