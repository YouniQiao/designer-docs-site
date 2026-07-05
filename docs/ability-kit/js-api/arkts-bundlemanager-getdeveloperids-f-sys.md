# getDeveloperIds

## getDeveloperIds

```TypeScript
function getDeveloperIds(appDistributionType?: int): Array<string>
```

根据给定的应用[appDistributionType]bundleManager.AppDistributionType获取当前用户下的所有开发者ID列表。

**Since:** 12

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appDistributionType | int | No | 表示应用的分发类型，当该参数缺省时，会返回所有应用的开发者ID列表。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | 同步返回Array。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

let appDistributionType = bundleManager.AppDistributionType.ENTERPRISE;

try {
  let data = bundleManager.getDeveloperIds(appDistributionType);
  hilog.info(0x0000, 'testTag', 'getDeveloperIds successfully. Data: %{public}s', JSON.stringify(data));
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getDeveloperIds failed: %{public}s', message);
}

```

