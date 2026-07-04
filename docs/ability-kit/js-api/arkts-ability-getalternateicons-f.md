---
last_update:
  date: 2026-07-04
---

# getAlternateIcons

## Modules to Import

```TypeScript
import { bundleManager } from '@ohos.bundle.bundleManager';
```

## getAlternateIcons

```TypeScript
function getAlternateIcons(): Promise<Array<AlternateIconInfo>>
```

Get all alternate icon info configured by the application itself.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AlternateIconInfo&gt;&gt; | Returns a list of AlternateIconInfo objects. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17700311 | Failed to obtain the alternate icon. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  bundleManager.getAlternateIcons().then((data) => {
    hilog.info(0x0000, 'testTag', 'getAlternateIcons successfully. Data: %{public}s', JSON.stringify(data));
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'getAlternateIcons failed. Cause: %{public}s', err.message);
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getAlternateIcons failed. Cause: %{public}s', message);
}

```

