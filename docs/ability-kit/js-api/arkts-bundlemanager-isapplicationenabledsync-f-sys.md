# isApplicationEnabledSync

## isApplicationEnabledSync

```TypeScript
function isApplicationEnabledSync(bundleName: string): boolean
```

以同步方法获取指定应用的禁用或使能状态。

**Since:** 10

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 表示应用程序的bundleName。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回true表示当前应用为使能状态，返回false表示当前应用为禁用状态。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 17700001 | The specified bundleName is not found. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let bundleName = 'com.example.myapplication';

try {
  let data = bundleManager.isApplicationEnabledSync(bundleName);
  hilog.info(0x0000, 'testTag', 'isApplicationEnabledSync successfully: %{public}s', JSON.stringify(data));
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'isApplicationEnabledSync failed: %{public}s', message);
}

```

