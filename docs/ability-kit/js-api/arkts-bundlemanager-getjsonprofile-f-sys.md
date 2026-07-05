# getJsonProfile

## getJsonProfile

```TypeScript
function getJsonProfile(profileType: ProfileType, bundleName: string, moduleName?: string, userId?: int): string
```

以同步的方法根据给定的profileType、bundleName和moduleName查询相应配置文件的JSON字符串。 获取调用方自己的配置文件时不需要权限。

**Since:** 11

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| profileType | ProfileType | Yes | 表示要查询的配置文件类型。 |
| bundleName | string | Yes | 表示要查询应用程序的bundleName。 |
| moduleName | string | No | 表示要查询应用程序的module的名称，缺省时在入口模块中查找。 |
| userId | int | No | 表示用户ID，可以通过  [getOsAccountLocalId]@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback)  获取，默认值：调用方所在用户，取值范围：大于等于0。 [since 12] |

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回配置文件的JSON字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 17700001 | The specified bundleName is not found. |
| 17700002 | The specified moduleName is not found. |
| 17700024 | Failed to get the profile because the specified profile is not found in the  HAP. |
| 17700026 | The specified bundle is disabled. |
| 17700004 | The specified user ID is not found. [since 12] |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

let bundleName = 'com.example.myapplication';
let moduleName = 'entry';
let profileType = bundleManager.ProfileType.INTENT_PROFILE;

try {
  let data = bundleManager.getJsonProfile(profileType, bundleName, moduleName);
  hilog.info(0x0000, 'testTag', 'getJsonProfile successfully. Data: %{public}s', data);
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getJsonProfile failed: %{public}s', message);
}

```

