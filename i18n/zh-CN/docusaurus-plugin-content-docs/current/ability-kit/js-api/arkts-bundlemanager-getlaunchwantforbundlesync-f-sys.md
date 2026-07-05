# getLaunchWantForBundleSync

## getLaunchWantForBundleSync

```TypeScript
function getLaunchWantForBundleSync(bundleName: string, userId?: int): Want
```

根据给定的包名和用户ID，获取用于启动应用程序的Want参数。

**起始版本：** 10

**需要权限：** 

- API版本10 - 23： ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

- API版本24+： ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or * (ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 表示应用的包名。 |
| userId | int | 否 | 表示用户ID，可以通过  [getOsAccountLocalId]@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback)  获取。 默认值：调用方所在用户。 取值范围：大于等于0。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Want | Want对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. [since 10 - 23] |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| 17700001 | The specified bundle is not found. |
| 17700004 | The specified user id is not found. |
| 17700026 | The specified bundle is disabled. |

**示例：**

```TypeScript
// 示例接口含有userId参数，获取用于启动指定用户下的应用程序所需的Want参数
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { Want } from '@kit.AbilityKit';

let bundleName = 'com.example.myapplication';
let userId = 100;

try {
  let want: Want = bundleManager.getLaunchWantForBundleSync(bundleName, userId);
  hilog.info(0x0000, 'testTag', 'getLaunchWantForBundleSync successfully. Data: %{public}s', JSON.stringify(want));
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getLaunchWantForBundleSync failed. Cause: %{public}s', message);
}


// 示例接口不含userId参数，获取用于启动当前用户下的应用程序所需的Want参数
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { Want } from '@kit.AbilityKit';

let bundleName = 'com.example.myapplication';

try {
  let want: Want = bundleManager.getLaunchWantForBundleSync(bundleName);
  hilog.info(0x0000, 'testTag', 'getLaunchWantForBundleSync successfully. Data: %{public}s', JSON.stringify(want));
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getLaunchWantForBundleSync failed. Cause: %{public}s', message);
}

```

