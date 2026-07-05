# getBundleArchiveInfoSync

## getBundleArchiveInfoSync

```TypeScript
function getBundleArchiveInfoSync(hapFilePath: string, bundleFlags: int): BundleInfo
```

以同步方法根据给定的hapFilePath和bundleFlags获取BundleInfo对象。

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hapFilePath | string | Yes | 表示存储HAP的路径，路径应该是当前应用程序数据目录的相对路径。 |
| bundleFlags | int | Yes | 表示用于指定要返回的BundleInfo对象中包含的信息的标志。 |

**Return value:**

| Type | Description |
| --- | --- |
| BundleInfo | 返回BundleInfo对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 17700022 | The hapFilePath is invalid. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let hapFilePath = "/data/xxx/test.hap";
let bundleFlags = bundleManager.BundleFlag.GET_BUNDLE_INFO_DEFAULT;

try {
  let data = bundleManager.getBundleArchiveInfoSync(hapFilePath, bundleFlags)
  hilog.info(0x0000, 'testTag', 'getBundleArchiveInfoSync successfully. Data: %{public}s', JSON.stringify(data));
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getBundleArchiveInfoSync failed. Cause: %{public}s', message);
}

```

