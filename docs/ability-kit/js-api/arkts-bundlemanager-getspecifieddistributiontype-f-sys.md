# getSpecifiedDistributionType

## getSpecifiedDistributionType

```TypeScript
function getSpecifiedDistributionType(bundleName: string): string
```

以同步的方法查询指定bundleName的[HarmonyAppProvision配置文件说明](docroot://security/app-provision-structure.md)，该返回值是在调用install接口时传 入的[InstallParam](arkts-installer-installparam-i-sys.md#InstallParam)中的specifiedDistributionType字段。 获取调用方自身的信息时不需要权限。

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 指定的bundleName。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回指定bundleName的[HarmonyAppProvision配置文件说明](docroot://security/app-provision-structure.md)。 |

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

let bundleName = "com.example.myapplication";

try {
  let type = bundleManager.getSpecifiedDistributionType(bundleName);
  hilog.info(0x0000, 'testTag', 'getSpecifiedDistributionType successfully, type:%{public}s', type);
} catch (error) {
  let message = (error as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getSpecifiedDistributionType failed. Cause: %{public}s', message);
}

```

