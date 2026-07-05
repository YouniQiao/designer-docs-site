# queryExtensionAbilityInfo

## queryExtensionAbilityInfo

```TypeScript
function queryExtensionAbilityInfo(want: Want, extensionAbilityType: ExtensionAbilityType,
      extensionAbilityFlags: int, callback: AsyncCallback<Array<ExtensionAbilityInfo>>): void
```

根据给定的want、extensionAbilityType和extensionAbilityFlags获取一个或多个ExtensionAbilityInfo。使用callback异步回调。 获取调用方自身的信息时不需要权限。

**Since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 表示包含要查询的应用Bundle名称的Want。 |
| extensionAbilityType | ExtensionAbilityType | Yes | 标识extensionAbility的类型。 |
| extensionAbilityFlags | int | Yes | 表示用于指定将返回的ExtensionInfo对象中包含的信息的标志，具体取值及不同含义参考  [ExtensionAbilityFlag]bundleManager.ExtensionAbilityFlag。 |
| callback | AsyncCallback&lt;Array&lt;ExtensionAbilityInfo>> | Yes | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-asynccallback-i.md#AsyncCallback)，当获  取成功时，err为undefined，data为获取到Array；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. At least one parameter(action, entity, uri or type) is required for implicit  query. |
| 17700001 | The specified bundleName is not found. |
| 17700003 | The specified extensionAbility is not found. |
| 17700026 | The specified bundle is disabled. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { Want } from '@kit.AbilityKit';

let extensionAbilityType = bundleManager.ExtensionAbilityType.FORM;
let extensionFlags = bundleManager.ExtensionAbilityFlag.GET_EXTENSION_ABILITY_INFO_DEFAULT;
let want: Want = {
  bundleName: "com.example.myapplication",
  abilityName: "EntryAbility"
};

try {
  bundleManager.queryExtensionAbilityInfo(want, extensionAbilityType, extensionFlags, (err, data) => {
    if (err) {
      hilog.error(0x0000, 'testTag', 'queryExtensionAbilityInfo failed: %{public}s', err.message);
    } else {
      hilog.info(0x0000, 'testTag', 'queryExtensionAbilityInfo successfully: %{public}s', JSON.stringify(data));
    }
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'queryExtensionAbilityInfo failed: %{public}s', message);
}

```

## queryExtensionAbilityInfo

```TypeScript
function queryExtensionAbilityInfo(want: Want, extensionAbilityType: ExtensionAbilityType, extensionAbilityFlags: int, userId: int, callback: AsyncCallback<Array<ExtensionAbilityInfo>>): void
```

根据给定的want、extensionAbilityType、extensionAbilityFlags和userId获取一个或多个ExtensionAbilityInfo。使用callback异步回调。 获取调用方自身的信息时不需要权限。

**Since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 表示包含要查询的应用Bundle名称的Want。 |
| extensionAbilityType | ExtensionAbilityType | Yes | 标识extensionAbility的类型。 |
| extensionAbilityFlags | int | Yes | 表示用于指定将返回的ExtensionInfo对象中包含的信息的标志，具体取值及不同含义参考  [ExtensionAbilityFlag]bundleManager.ExtensionAbilityFlag。 |
| userId | int | Yes | 表示用户ID，可以通过  [getOsAccountLocalId]@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback)  获取。 |
| callback | AsyncCallback&lt;Array&lt;ExtensionAbilityInfo>> | Yes | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-asynccallback-i.md#AsyncCallback)，当获  取成功时，err为undefined，data为获取到Array；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. At least one parameter(action, entity, uri or type) is required for implicit  query. |
| 17700001 | The specified bundleName is not found. |
| 17700003 | The specified extensionAbility is not found. |
| 17700004 | The specified userId is invalid. |
| 17700026 | The specified bundle is disabled. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { Want } from '@kit.AbilityKit';

let extensionAbilityType = bundleManager.ExtensionAbilityType.FORM;
let extensionFlags = bundleManager.ExtensionAbilityFlag.GET_EXTENSION_ABILITY_INFO_DEFAULT;
let userId = 100;
let want: Want = {
  bundleName: "com.example.myapplication",
  abilityName: "EntryAbility"
};

try {
  bundleManager.queryExtensionAbilityInfo(want, extensionAbilityType, extensionFlags, userId, (err, data) => {
    if (err) {
      hilog.error(0x0000, 'testTag', 'queryExtensionAbilityInfo failed: %{public}s', err.message);
    } else {
      hilog.info(0x0000, 'testTag', 'queryExtensionAbilityInfo successfully: %{public}s', JSON.stringify(data));
    }
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'queryExtensionAbilityInfo failed: %{public}s', message);
}

```

## queryExtensionAbilityInfo

```TypeScript
function queryExtensionAbilityInfo(want: Want, extensionAbilityType: ExtensionAbilityType, extensionAbilityFlags: int, userId?: int): Promise<Array<ExtensionAbilityInfo>>
```

根据给定的want、extensionAbilityType、extensionAbilityFlags和userId获取ExtensionAbilityInfo。使用Promise异步回调。 获取调用方自身的信息时不需要权限。

**Since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 表示包含要查询的应用Bundle名称的Want。 |
| extensionAbilityType | ExtensionAbilityType | Yes | 标识extensionAbility的类型。 |
| extensionAbilityFlags | int | Yes | 表示用于指定将返回的ExtensionInfo对象中包含的信息的标志，具体取值及不同含义参考  [ExtensionAbilityFlag]bundleManager.ExtensionAbilityFlag。 |
| userId | int | No | 表示用户ID，可以通过  [getOsAccountLocalId]@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback)  获取，默认值：调用方所在用户，取值范围：大于等于0。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ExtensionAbilityInfo>> | Promise对象，返回Array。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. At least one parameter(action, entity, uri or type) is required for implicit  query. |
| 17700001 | The specified bundleName is not found. |
| 17700003 | The specified extensionAbility is not found. |
| 17700004 | The specified userId is invalid. |
| 17700026 | The specified bundle is disabled. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { Want } from '@kit.AbilityKit';

let extensionAbilityType = bundleManager.ExtensionAbilityType.FORM;
let extensionFlags = bundleManager.ExtensionAbilityFlag.GET_EXTENSION_ABILITY_INFO_DEFAULT;
let userId = 100;
let want: Want = {
  bundleName: "com.example.myapplication",
  abilityName: "EntryAbility"
};

try {
  bundleManager.queryExtensionAbilityInfo(want, extensionAbilityType, extensionFlags, userId).then((data) => {
    hilog.info(0x0000, 'testTag', 'queryExtensionAbilityInfo successfully. Data: %{public}s', JSON.stringify(data));
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'queryExtensionAbilityInfo failed. Cause: %{public}s', err.message);
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'queryExtensionAbilityInfo failed. Cause: %{public}s', message);
}


import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { Want } from '@kit.AbilityKit';

let extensionAbilityType = bundleManager.ExtensionAbilityType.FORM;
let extensionFlags = bundleManager.ExtensionAbilityFlag.GET_EXTENSION_ABILITY_INFO_DEFAULT;
let want: Want = {
  bundleName: "com.example.myapplication",
  abilityName: "EntryAbility"
};

try {
  bundleManager.queryExtensionAbilityInfo(want, extensionAbilityType, extensionFlags).then((data) => {
    hilog.info(0x0000, 'testTag', 'queryExtensionAbilityInfo successfully. Data: %{public}s', JSON.stringify(data));
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'queryExtensionAbilityInfo failed. Cause: %{public}s', err.message);
  })
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'queryExtensionAbilityInfo failed. Cause: %{public}s', message);
}

```

