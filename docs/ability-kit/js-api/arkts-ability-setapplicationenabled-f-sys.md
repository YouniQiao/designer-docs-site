---
last_update:
  date: 2026-07-04
---

# setApplicationEnabled (System API)

## Modules to Import

```TypeScript
import { bundleManager } from '@ohos.bundle.bundleManager';
```

## setApplicationEnabled

```TypeScript
function setApplicationEnabled(bundleName: string, appIndex: number, isEnabled: boolean): Promise<void>
```

Enables or disables an application or an application clone. This API uses a promise to return the result.

**Since:** 12

**Required permissions:** ohos.permission.CHANGE_ABILITY_ENABLED_STATE

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| appIndex | number | Yes | Index of the application clone.<br> The value **0** means to enable or disable the mainapplication. A value greater than 0 means to enable or disable the application clone. |
| isEnabled | boolean | Yes | Whether to enable the application. **true** to enable, **false** otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [17700001](../errorcode-bundle.md#17700001-bundle-name-does-not-exist) | The specified bundleName is not found. |
| [17700061](../errorcode-bundle.md#17700061-appindex-for-a-clone-is-invalid) | AppIndex not in valid range. |

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
function setApplicationEnabled(bundleName: string, appIndex: number, isEnabled: boolean, killProcess: boolean): Promise<void>
```

Set whether an application is enabled or disabled, with control over whether the process is killed when disabled.

**Since:** 26.0.0

**Required permissions:** ohos.permission.CHANGE_ABILITY_ENABLED_STATE

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Indicates the bundle name. |
| appIndex | number | Yes | Indicates the index of clone app. |
| isEnabled | boolean | Yes | The value true means to enable the application, and the value false means todisable the application. |
| killProcess | boolean | Yes | The value true indicates that the application process will be killed whendisabled, while the value false indicates that the application process will not be killed when disabled. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied. Non-system APP calling system API. |
| [17700001](../errorcode-bundle.md#17700001-bundle-name-does-not-exist) | The specified bundle is not found. |
| [17700061](../errorcode-bundle.md#17700061-appindex-for-a-clone-is-invalid) | The specified app index is invalid. |

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

Enables or disables an application. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.CHANGE_ABILITY_ENABLED_STATE

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| isEnabled | boolean | Yes | Whether to enable the application. **true** to enable, **false** otherwise. |
| callback | AsyncCallback&lt;void&gt; | Yes | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-asynccallback-i.md#asynccallback) used to return the result. Ifthe operation is successful, **err** is **null**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [17700001](../errorcode-bundle.md#17700001-bundle-name-does-not-exist) | The specified bundleName is not found. |

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

Enables or disables an application. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.CHANGE_ABILITY_ENABLED_STATE

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| isEnabled | boolean | Yes | Whether to enable the application. **true** to enable, **false** otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [17700001](../errorcode-bundle.md#17700001-bundle-name-does-not-exist) | The specified bundleName is not found. |

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

