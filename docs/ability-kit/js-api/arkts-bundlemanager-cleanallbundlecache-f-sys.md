# cleanAllBundleCache

## cleanAllBundleCache

```TypeScript
function cleanAllBundleCache(): Promise<void>
```

清理全局缓存。使用Promise异步回调。

**Since:** 15

**Required permissions:** 

 ohos.permission.REMOVE_CACHE_FILES

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

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
  bundleManager.cleanAllBundleCache().then((data) => {
    hilog.info(0x0000, 'testTag', 'cleanAllBundleCache successful.');
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'cleanAllBundleCache failed: %{public}s', err.message);
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'cleanAllBundleCache failed: %{public}s', message);
}

```

