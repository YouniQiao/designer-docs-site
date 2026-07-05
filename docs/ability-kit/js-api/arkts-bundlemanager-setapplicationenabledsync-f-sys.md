# setApplicationEnabledSync

## setApplicationEnabledSync

```TypeScript
function setApplicationEnabledSync(bundleName: string, isEnabled: boolean): void
```

以同步方法设置指定应用的禁用或使能状态。

**Since:** 10

**Required permissions:** 

 ohos.permission.CHANGE_ABILITY_ENABLED_STATE

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 指定应用的bundleName。 |
| isEnabled | boolean | Yes | 值为true表示使能，值为false表示禁用。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 17700001 | The specified bundleName is not found. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let bundleName = "com.ohos.myapplication";

try {
  bundleManager.setApplicationEnabledSync(bundleName, false);
  hilog.info(0x0000, 'testTag', 'setApplicationEnabledSync successfully.');
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'setApplicationEnabledSync failed: %{public}s', message);
}

```

## setApplicationEnabledSync

```TypeScript
function setApplicationEnabledSync(bundleName: string, appIndex: int, isEnabled: boolean, killProcess: boolean): void
```

设置应用程序是启用还是禁用，并控制在禁用时是否杀死进程。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.CHANGE_ABILITY_ENABLED_STATE

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用包名 |
| appIndex | int | Yes | 应用的分身索引  取值范围为全体整数。 |
| isEnabled | boolean | Yes | true表示启用应用程序，false表示启用应用程序。 |
| killProcess | boolean | Yes | true表示应用进程在禁用时杀死应用程序进程，而值为false表示禁用时不会杀死应用程序进程 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied. Non-system APP calling system API. |
| 17700001 | The specified bundle is not found. |
| 17700061 | The specified app index is invalid. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

// Replace with the application bundle name, application index, and whether to enable the application and whether to exit the application process when the application is disabled.
let bundleName: string = 'com.example.myapplication';
let appIndex: number = 0;
let isEnabled: boolean = true;
let killProcess: boolean = false;

try {
  bundleManager.setApplicationEnabledSync(bundleName, appIndex, isEnabled, killProcess);
  hilog.info(0x0000, 'testTag', 'setApplicationEnabledSync successfully');
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'setApplicationEnabledSync failed: %{public}s', message);
}

```

