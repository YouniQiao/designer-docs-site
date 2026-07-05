# getLaunchWant

## getLaunchWant

```TypeScript
function getLaunchWant(): Want
```

获取本应用[入口UIAbility](docroot://quick-start/application-package-glossary.md#uiability)的Want参数。

**Since:** 13

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**Return value:**

| Type | Description |
| --- | --- |
| Want | 返回仅包含bundleName和abilityName的Want对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17700072 | The launch want is not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { bundleManager } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let want = bundleManager.getLaunchWant();
  hilog.info(0x0000, 'testTag', 'getLaunchWant ability name: %{public}s', want.abilityName);
  hilog.info(0x0000, 'testTag', 'getLaunchWant bundle name: %{public}s', want.bundleName);
} catch (error) {
  let message = (error as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getLaunchWant failed: %{public}s', message);
}

```

