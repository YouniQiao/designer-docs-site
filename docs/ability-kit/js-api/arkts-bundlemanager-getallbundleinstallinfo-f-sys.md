# getAllBundleInstallInfo

## getAllBundleInstallInfo

```TypeScript
function getAllBundleInstallInfo(): Promise<Array<Record<string, Object>>>
```

获取系统内所有应用的扩展安装信息。使用Promise异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.GET_INSTALLED_BUNDLE_LIST

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Record&lt;string, Object>>> | The install information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  bundleManager.getAllBundleInstallInfo().then((data) => {
    hilog.info(0x0000, 'testTag', 'getAllBundleInstallInfo successfully. Data: %{public}s', JSON.stringify(data));
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'getAllBundleInstallInfo failed. Cause: %{public}s', err.message);
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getAllBundleInstallInfo failed. Cause: %{public}s', message);
}

```

