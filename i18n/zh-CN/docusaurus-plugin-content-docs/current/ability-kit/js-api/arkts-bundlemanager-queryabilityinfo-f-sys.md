# queryAbilityInfo

## queryAbilityInfo

```TypeScript
function queryAbilityInfo(want: Want, abilityFlags: int, callback: AsyncCallback<Array<AbilityInfo>>): void
```

根据给定的want和abilityFlags获取一个或多个AbilityInfo。使用callback异步回调。 获取调用方自身的信息时不需要权限。

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | 表示包含要查询的应用Bundle名称的Want。 |
| abilityFlags | int | 是 | 指定返回的AbilityInfo所包含的信息，具体取值及不同含义参考[AbilityFlag]bundleManager.AbilityFlag。 |
| callback | AsyncCallback&lt;Array&lt;AbilityInfo>> | 是 | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-asynccallback-i.md#AsyncCallback)，当获取成功时，err为  undefined，data为获取到的Array；否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. At least one parameter(action, entity, uri or type) is required for implicit  query. |
| 17700001 | The specified bundleName is not found. |
| 17700003 | The specified ability is not found. |
| 17700026 | The specified bundle is disabled. |
| 17700029 | The specified ability is disabled. |

**示例：**

```TypeScript
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
  bundleManager.queryAbilityInfo(want, abilityFlags, (err, data) => {
    if (err) {
      hilog.error(0x0000, 'testTag', 'queryAbilityInfo failed: %{public}s', err.message);
    } else {
      hilog.info(0x0000, 'testTag', 'queryAbilityInfo successfully: %{public}s', JSON.stringify(data));
    }
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'queryAbilityInfo failed: %{public}s', message);
}

```

## queryAbilityInfo

```TypeScript
function queryAbilityInfo(want: Want, abilityFlags: int, userId: int, callback: AsyncCallback<Array<AbilityInfo>>): void
```

根据给定的want、abilityFlags和userId获取多个AbilityInfo。使用callback异步回调。 获取调用方自身的信息时不需要权限。

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | 表示包含要查询的应用Bundle名称的Want。 |
| abilityFlags | int | 是 | 指定返回的AbilityInfo所包含的信息，具体取值及不同含义参考[AbilityFlag]bundleManager.AbilityFlag。 |
| userId | int | 是 | 表示用户ID，可以通过  [getOsAccountLocalId]@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback)  获取。 |
| callback | AsyncCallback&lt;Array&lt;AbilityInfo>> | 是 | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-asynccallback-i.md#AsyncCallback)，当获取成功时，err为  undefined，data为获取到的Array；否则为错误对象。 |

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
  bundleManager.queryAbilityInfo(want, abilityFlags, userId, (err, data) => {
    if (err) {
      hilog.error(0x0000, 'testTag', 'queryAbilityInfo failed: %{public}s', err.message);
    } else {
      hilog.info(0x0000, 'testTag', 'queryAbilityInfo successfully: %{public}s', JSON.stringify(data));
    }
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'queryAbilityInfo failed: %{public}s', message);
}

```

## queryAbilityInfo

```TypeScript
function queryAbilityInfo(want: Want, abilityFlags: int, userId?: int): Promise<Array<AbilityInfo>>
```

根据给定的want、abilityFlags和userId获取一个或多个AbilityInfo。使用Promise异步回调。 获取调用方自身的信息时不需要权限。

**起始版本：** 9

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
| Promise&lt;Array&lt;AbilityInfo>> | Promise对象，返回Array。 |

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
  bundleManager.queryAbilityInfo(want, abilityFlags, userId).then((data) => {
    hilog.info(0x0000, 'testTag', 'queryAbilityInfo successfully. Data: %{public}s', JSON.stringify(data));
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'queryAbilityInfo failed. Cause: %{public}s', err.message);
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'queryAbilityInfo failed. Cause: %{public}s', message);
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
  bundleManager.queryAbilityInfo(want, abilityFlags).then((data) => {
    hilog.info(0x0000, 'testTag', 'queryAbilityInfo successfully. Data: %{public}s', JSON.stringify(data));
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'queryAbilityInfo failed. Cause: %{public}s', err.message);
  })
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'queryAbilityInfo failed. Cause: %{public}s', message);
}

```

## queryAbilityInfo

```TypeScript
function queryAbilityInfo(wants: Array<Want>, abilityFlags: int, userId?: int): Promise<Array<AbilityInfo>>
```

根据给定的want列表、abilityFlags和userId获取一个或多个AbilityInfo。使用Promise异步回调。 获取调用方自身的信息时不需要权限。

**起始版本：** 12

**需要权限：** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| wants | Array&lt;Want> | 是 | 表示包含要查询的应用Bundle名称的Want集合。 |
| abilityFlags | int | 是 | 表示指定返回的AbilityInfo所包含的信息，具体取值及不同含义参考[AbilityFlag]bundleManager.AbilityFlag。 |
| userId | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;AbilityInfo>> | Promise对象，返回Array信息。 |

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
  bundleName: "com.example.myapplication1",
  abilityName: "EntryAbility"
};
let want1: Want = {
  bundleName: "com.example.myapplication2",
  abilityName: "EntryAbility"
};
let wants: Array<Want> = [want, want1];
try {
  bundleManager.queryAbilityInfo(wants, abilityFlags, userId).then((data) => {
    hilog.info(0x0000, 'testTag', 'queryAbilityInfo successfully. Data: %{public}s', JSON.stringify(data));
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'queryAbilityInfo failed. Cause: %{public}s', err.message);
  })
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'queryAbilityInfo failed. Cause: %{public}s', message);
}

```

