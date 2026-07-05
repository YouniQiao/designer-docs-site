# getBundleArchiveInfo

## getBundleArchiveInfo

```TypeScript
function getBundleArchiveInfo(hapFilePath: string, bundleFlags: int, callback: AsyncCallback<BundleInfo>): void
```

根据给定的hapFilePath和bundleFlags获取BundleInfo。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hapFilePath | string | Yes | 表示存储HAP的路径，路径应该是当前应用程序数据目录的相对路径。 |
| bundleFlags | int | Yes | 表示用于指定要返回的BundleInfo对象中包含的信息的标志。 |
| callback | AsyncCallback&lt;BundleInfo> | Yes | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-asynccallback-i.md#AsyncCallback)，当获取成功时，err为  undefined，data为获取到的BundleInfo；否则为错误对象。 |

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
  bundleManager.getBundleArchiveInfo(hapFilePath, bundleFlags, (err, data) => {
    if (err) {
      hilog.error(0x0000, 'testTag', 'getBundleArchiveInfo failed. Cause: %{public}s', err.message);
    } else {
      hilog.info(0x0000, 'testTag', 'getBundleArchiveInfo successfully: %{public}s', JSON.stringify(data));
    }
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getBundleArchiveInfo failed. Cause: %{public}s', message);
}

```

## getBundleArchiveInfo

```TypeScript
function getBundleArchiveInfo(hapFilePath: string,  bundleFlags: int): Promise<BundleInfo>
```

根据给定的hapFilePath和bundleFlags获取BundleInfo。使用Promise异步回调。

**Since:** 9

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
| Promise&lt;BundleInfo> | Promise对象，返回BundleInfo。 |

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
  bundleManager.getBundleArchiveInfo(hapFilePath, bundleFlags).then((data) => {
    hilog.info(0x0000, 'testTag', 'getBundleArchiveInfo successfully. Data: %{public}s', JSON.stringify(data));
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'getBundleArchiveInfo failed. Cause: %{public}s', err.message);
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getBundleArchiveInfo failed. Cause: %{public}s', message);
}

```

