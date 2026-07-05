# setApplicationEnabled

## setApplicationEnabled

```TypeScript
function setApplicationEnabled(bundleName: string, appIndex: int, isEnabled: boolean): Promise<void>
```

设置指定应用或分身应用的禁用或使能状态。使用Promise异步回调。

**Since:** 12

**Required permissions:** 

 ohos.permission.CHANGE_ABILITY_ENABLED_STATE

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 表示应用程序的bundleName。 |
| appIndex | int | Yes | 表示分身应用的索引。 appIndex为0时，表示设置主应用的禁用或使能状态。appIndex大于0时，表示设置指定分身应用的禁用或使能状态。 |
| isEnabled | boolean | Yes | 值为true表示使能，值为false表示禁用。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 17700001 | The specified bundleName is not found. |
| 17700061 | AppIndex not in valid range. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let bundleName = "com.ohos.myapplication";

try {
  bundleManager.setApplicationEnabled(bundleName, 1, false).then(() => {
    hilog.info(0x0000, "testTag", "setApplicationEnabled successfully.");
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'setApplicationEnabled failed: %{public}s', err.message);
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'setApplicationEnabled failed: %{public}s', message);
}

```

## setApplicationEnabled

```TypeScript
function setApplicationEnabled(bundleName: string, appIndex: int, isEnabled: boolean, killProcess: boolean): Promise<void>
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
| isEnabled | boolean | Yes | true表示启用应用程序，false表示禁用应用程序。 |
| killProcess | boolean | Yes | true表示应用进程在禁用时会杀死应用进程，而值为false表示禁用时不会杀死应用程序进程 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回值 |

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
  bundleManager.setApplicationEnabled(bundleName, appIndex, isEnabled, killProcess)
    .then(() => {
      hilog.info(0x0000, 'testTag', 'setApplicationEnabled successfully');
    })
    .catch((err: BusinessError) => {
      hilog.error(0x0000, 'testTag', 'setApplicationEnabled failed: %{public}s', err.message);
    });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'setApplicationEnabled failed: %{public}s', message);
}

```

## setApplicationEnabled

```TypeScript
function setApplicationEnabled(bundleName: string, isEnabled: boolean, callback: AsyncCallback<void>): void
```

设置指定应用的禁用或使能状态。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.CHANGE_ABILITY_ENABLED_STATE

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 指定应用的bundleName。 |
| isEnabled | boolean | Yes | 值为true表示使能，值为false表示禁用。 |
| callback | AsyncCallback&lt;void> | Yes | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-asynccallback-i.md#AsyncCallback)，当设置应用禁用或使能状态成功时，err为  undefined，否则为错误对象。 |

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
  bundleManager.setApplicationEnabled(bundleName, false, err => {
    if (err) {
      hilog.error(0x0000, 'testTag', 'setApplicationEnabled failed: %{public}s', err.message);
    } else {
      hilog.info(0x0000, 'testTag', 'setApplicationEnabled successfully.');
    }
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'setApplicationEnabled failed: %{public}s', message);
}

```

## setApplicationEnabled

```TypeScript
function setApplicationEnabled(bundleName: string, isEnabled: boolean): Promise<void>
```

设置指定应用的禁用或使能状态。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.CHANGE_ABILITY_ENABLED_STATE

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 表示应用程序的bundleName。 |
| isEnabled | boolean | Yes | 值为true表示使能，值为false表示禁用。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

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
  bundleManager.setApplicationEnabled(bundleName, false).then(() => {
    hilog.info(0x0000, "testTag", "setApplicationEnabled successfully.");
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'setApplicationEnabled failed: %{public}s', err.message);
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'setApplicationEnabled failed: %{public}s', message);
}

```

