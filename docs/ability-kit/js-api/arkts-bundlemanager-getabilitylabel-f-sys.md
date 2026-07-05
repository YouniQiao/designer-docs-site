# getAbilityLabel

## getAbilityLabel

```TypeScript
function getAbilityLabel(bundleName: string, moduleName: string, abilityName: string, callback: AsyncCallback<string>): void
```

获取指定bundleName、moduleName和abilityName的label。使用callback异步回调。 获取调用方自身的信息时不需要权限。

**Since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 表示应用程序的bundleName。 |
| moduleName | string | Yes | 表示Module名称。 |
| abilityName | string | Yes | 表示UIAbility组件的名称。 |
| callback | AsyncCallback&lt;string> | Yes | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-asynccallback-i.md#AsyncCallback)，当获取成功时，err为undefined，  data为获指定组件的Label值；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 801 | Capability not supported. |
| 17700001 | The specified bundleName is not found. |
| 17700002 | The specified moduleName is not found. |
| 17700003 | The specified abilityName is not found. |
| 17700026 | The specified bundle is disabled. |
| 17700029 | The specified ability is disabled. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let bundleName = 'com.example.myapplication';
let moduleName = 'entry';
let abilityName = 'EntryAbility';

try {
  bundleManager.getAbilityLabel(bundleName, moduleName, abilityName, (err, data) => {
    if (err) {
      hilog.error(0x0000, 'testTag', 'getAbilityLabel failed: %{public}s', err.message);
    } else {
      hilog.info(0x0000, 'testTag', 'getAbilityLabel successfully: %{public}s', JSON.stringify(data));
    }
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getAbilityLabel failed: %{public}s', message);
}

```

## getAbilityLabel

```TypeScript
function getAbilityLabel(bundleName: string, moduleName: string, abilityName: string): Promise<string>
```

获取指定bundleName、moduleName和abilityName的label。使用Promise异步回调。 获取调用方自身的信息时不需要权限。

**Since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 表示应用程序的bundleName。 |
| moduleName | string | Yes | 表示Module名称。 |
| abilityName | string | Yes | 表示UIAbility组件的名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回指定组件的label值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 801 | Capability not supported. |
| 17700001 | The specified bundleName is not found. |
| 17700002 | The specified moduleName is not found. |
| 17700003 | The specified abilityName is not found. |
| 17700026 | The specified bundle is disabled. |
| 17700029 | The specified ability is disabled. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let bundleName = 'com.example.myapplication';
let moduleName = 'entry';
let abilityName = 'EntryAbility';

try {
  bundleManager.getAbilityLabel(bundleName, moduleName, abilityName).then((data) => {
    hilog.info(0x0000, 'testTag', 'getAbilityLabel successfully. Data: %{public}s', JSON.stringify(data));
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'getAbilityLabel failed. Cause: %{public}s', err.message);
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getAbilityLabel failed. Cause: %{public}s', message);
}

```

