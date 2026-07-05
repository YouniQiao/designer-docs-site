# getAllUninstalledBundleResourceInfo

## getAllUninstalledBundleResourceInfo

```TypeScript
function getAllUninstalledBundleResourceInfo(resourceFlags: int): Promise<Array<BundleResourceInfo>>
```

根据给定的resourceFlags获取所有已卸载且保留数据的应用的BundleResourceInfo。使用Promise异步回调。

**Since:** 21

**Required permissions:** 

 ohos.permission.GET_BUNDLE_RESOURCES

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resourceFlags | int | Yes | 指定返回的BundleResourceInfo所包含的信息，取值请参考  [ResourceFlag枚举值]bundleResourceManager.ResourceFlag。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;BundleResourceInfo>> | Promise对象，返回BundleResourceInfo数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |

**Example**

```TypeScript
import { bundleResourceManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let resourceFlag = bundleResourceManager.ResourceFlag.GET_RESOURCE_INFO_ALL;
try {
  bundleResourceManager.getAllUninstalledBundleResourceInfo(resourceFlag).then(data => {
    hilog.info(0x0000, 'testTag', 'getAllUninstalledBundleResourceInfo successfully. Data length: %{public}s',
      JSON.stringify(data.length));
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'getAllUninstalledBundleResourceInfo failed. err: %{public}s', err.message);
  })
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getAllUninstalledBundleResourceInfo failed: %{public}s', message);
}

```

