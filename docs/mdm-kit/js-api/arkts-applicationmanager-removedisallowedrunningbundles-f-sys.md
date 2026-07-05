# removeDisallowedRunningBundles

## removeDisallowedRunningBundles

```TypeScript
function removeDisallowedRunningBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void
```

移除在应用运行禁止名单中的应用，在禁止名单存在的情况下，在应用运行禁止名单中的应用不允许在当前用户下运行。使用callback异步回调。

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** applicationManager.removeDisallowedRunningBundlesSync

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| appIds | Array&lt;string> | Yes | 应用ID数组，指定具体应用。 说明： 从API version 21版本开始，数组中的元素支持使用  [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和  [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，仅移除传入的  [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)（或  [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)），不会移除同一应用的  [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)（或  [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)）。API version 20及之前版本，数组中的元素只支持使用  [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当接口调用成功，err为null，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { applicationManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
// Replace with actual values.
let appIds: Array<string> = ['com.example.******_******/******5t5CoBM='];

applicationManager.removeDisallowedRunningBundles(wantTemp, appIds, (err) => {
  if (err) {
    console.error(`Failed to remove disallowed running bundles. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info('Succeeded in removing disallowed running bundles');
});

```

## removeDisallowedRunningBundles

```TypeScript
function removeDisallowedRunningBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void
```

移除在应用运行禁止名单中的应用，在禁止名单存在的情况下，在应用运行禁止名单中的应用不允许在指定用户（通过userId指定）下运行。使用callback异步回调。

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** applicationManager.removeDisallowedRunningBundlesSync

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| appIds | Array&lt;string> | Yes | 应用ID数组，指定具体应用。 说明： 从API version 21版本开始，数组中的元素支持使用  [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和  [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，仅移除传入的  [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)（或  [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)），不会移除同一应用的  [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)（或  [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)）。API version 20及之前版本，数组中的元素只支持使用  [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。 |
| userId | number | Yes | 用户ID，指定具体用户。取值范围：大于等于0。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当接口调用成功，err为null，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { applicationManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
// Replace with actual values.
let appIds: Array<string> = ['com.example.******_******/******5t5CoBM='];

applicationManager.removeDisallowedRunningBundles(wantTemp, appIds, 100, (err) => {
  if (err) {
    console.error(`Failed to remove disallowed running bundles. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info('Succeeded in removing disallowed running bundles');
});

```

## removeDisallowedRunningBundles

```TypeScript
function removeDisallowedRunningBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>
```

移除当前/指定用户在应用运行禁止名单中的应用，使用Promise异步回调。

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** applicationManager.removeDisallowedRunningBundlesSync

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| appIds | Array&lt;string> | Yes | 应用ID数组，指定具体应用。 说明： 从API version 21版本开始，数组中的元素支持使用  [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和  [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，仅移除传入的  [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)（或  [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)），不会移除同一应用的  [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)（或  [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)）。API version 20及之前版本，数组中的元素只支持使用  [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。 |
| userId | number | No | 用户ID，取值范围：大于等于0。 - 调用接口时，若传入userId，表示指定用户。 - 调用接口时，若未传入userId，表示当前用户。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。当移除应用运行禁止名单失败时，会抛出错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { applicationManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
// Replace with actual values.
let appIds: Array<string> = ['com.example.******_******/******5t5CoBM='];

applicationManager.removeDisallowedRunningBundles(wantTemp, appIds, 100).then(() => {
  console.info('Succeeded in removing disallowed running bundles');
}).catch((err: BusinessError) => {
  console.error(`Failed to remove disallowed running bundles. Code is ${err.code}, message is ${err.message}`);
});

```

