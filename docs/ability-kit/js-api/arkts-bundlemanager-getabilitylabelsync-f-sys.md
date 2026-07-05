# getAbilityLabelSync

## getAbilityLabelSync

```TypeScript
function getAbilityLabelSync(bundleName: string, moduleName: string, abilityName: string): string
```

以同步的方法获取指定bundleName、moduleName和abilityName的label。 获取调用方自身的信息时不需要权限。

**Since:** 10

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
| string | 指定组件的label值。 |

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
  let abilityLabel = bundleManager.getAbilityLabelSync(bundleName, moduleName, abilityName);
  hilog.info(0x0000, 'testTag', 'getAbilityLabelSync successfully. Data: %{public}s', abilityLabel);
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getAbilityLabelSync failed. Cause: %{public}s', message);
}

```

