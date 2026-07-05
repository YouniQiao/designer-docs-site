# switchUninstallState

## switchUninstallState

```TypeScript
function switchUninstallState(bundleName: string, state: boolean): void
```

切换指定应用的可卸载状态，此接口与EDM应用拦截管控机制不互相影响。

**Since:** 12

**Required permissions:** 

 ohos.permission.CHANGE_BUNDLE_UNINSTALL_STATE

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 表示指定应用的bundleName。 |
| state | boolean | Yes | 表示应用的可卸载状态，值为true表示应用可以被卸载，值为false表示应用不可以被卸载。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 17700001 | The specified bundleName is not found. |
| 17700060 | The specified application cannot be uninstalled. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  bundleManager.switchUninstallState('com.example.myapplication', false);
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'switchUninstallState failed: %{public}s', message);
}

```

