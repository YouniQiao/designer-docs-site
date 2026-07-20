# cleanBundleCacheFilesForSelf

## Modules to Import

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
```

## cleanBundleCacheFilesForSelf

```TypeScript
function cleanBundleCacheFilesForSelf(): Promise<void>
```

Clears the application cache. This API uses a promise to return the result.

**Since:** 21

**Atomic service API:** This API can be used in atomic services since API version 21.

<!--Device-bundleManager-function cleanBundleCacheFilesForSelf(): Promise<void>--><!--Device-bundleManager-function cleanBundleCacheFilesForSelf(): Promise<void>-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

bundleManager.cleanBundleCacheFilesForSelf().then(() => {
  hilog.info(0x0000, 'testTag', 'cleanBundleCacheFilesForSelf complete.');
});

```

