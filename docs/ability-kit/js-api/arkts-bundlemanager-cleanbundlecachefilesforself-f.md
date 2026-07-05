# cleanBundleCacheFilesForSelf

## cleanBundleCacheFilesForSelf

```TypeScript
function cleanBundleCacheFilesForSelf(): Promise<void>
```

清理应用自身的缓存。使用Promise异步回调。

**Since:** 21

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

bundleManager.cleanBundleCacheFilesForSelf().then(() => {
  hilog.info(0x0000, 'testTag', 'cleanBundleCacheFilesForSelf complete.');
});

```

