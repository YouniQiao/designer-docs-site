# queryAbilityInfoSync

## queryAbilityInfoSync

```TypeScript
function queryAbilityInfoSync(want: Want, abilityFlags: int, userId?: int): Array<AbilityInfo>
```

以同步方法根据给定的want、abilityFlags和userId获取一个或多个AbilityInfo。 获取调用方自身的信息时不需要权限。

**起始版本：** 10

**需要权限：** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | 表示包含要查询的应用Bundle名称的Want。 |
| abilityFlags | int | 是 | 表示指定返回的AbilityInfo所包含的信息，具体取值及不同含义参考[AbilityFlag]bundleManager.AbilityFlag。 |
| userId | int | 否 | 表示用户ID，可以通过  [getOsAccountLocalId]@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback)  获取，默认值：调用方所在用户，取值范围：大于等于0。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;AbilityInfo> | Array信息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. At least one parameter(action, entity, uri or type) is required for implicit  query. |
| 17700001 | The specified bundleName is not found. |
| 17700003 | The specified ability is not found. |
| 17700004 | The specified userId is invalid. |
| 17700026 | The specified bundle is disabled. |
| 17700029 | The specified ability is disabled. |

**示例：**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { Want } from '@kit.AbilityKit';

let abilityFlags = bundleManager.AbilityFlag.GET_ABILITY_INFO_DEFAULT;
let userId = 100;
let want: Want = {
  bundleName: "com.example.myapplication",
  abilityName: "EntryAbility"
};

try {

  let infos = bundleManager.queryAbilityInfoSync(want, abilityFlags, userId);
  hilog.info(0x0000, 'testTag', 'queryAbilityInfoSync successfully. Data: %{public}s', JSON.stringify(infos));
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'queryAbilityInfoSync failed. Cause: %{public}s', message);
}


import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { Want } from '@kit.AbilityKit';

let abilityFlags = bundleManager.AbilityFlag.GET_ABILITY_INFO_DEFAULT;
let want: Want = {
  bundleName: "com.example.myapplication",
  abilityName: "EntryAbility"
};

try {
  let infos = bundleManager.queryAbilityInfoSync(want, abilityFlags);
  hilog.info(0x0000, 'testTag', 'queryAbilityInfoSync successfully. Data: %{public}s', JSON.stringify(infos));
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'queryAbilityInfoSync failed. Cause: %{public}s', message);
}

```

