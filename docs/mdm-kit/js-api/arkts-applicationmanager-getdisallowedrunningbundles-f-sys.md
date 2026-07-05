# getDisallowedRunningBundles

## getDisallowedRunningBundles

```TypeScript
function getDisallowedRunningBundles(admin: Want, callback: AsyncCallback<Array<string>>): void
```

获取当前用户下的应用运行禁止名单。使用callback异步回调。

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** applicationManager.getDisallowedRunningBundlesSync

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| callback | AsyncCallback&lt;Array&lt;string>> | Yes | 回调函数，当获取应用运行禁止名单成功时，err为null，否则为错误对象。 说明： API version 20  及之前版本，返回值为应用[appId](docroot://quick-start/common-problem-of-application.md#什么是appid)列表。从API version 21版本开始，返回值为  应用[appId](docroot://quick-start/common-problem-of-application.md#什么是appid)或  [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)列表。 |

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

applicationManager.getDisallowedRunningBundles(wantTemp, (err, result) => {
  if (err) {
    console.error(`Failed to get disallowed running bundles. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info(`Succeeded in getting disallowed running bundles, result : ${JSON.stringify(result)}`);
});

```

## getDisallowedRunningBundles

```TypeScript
function getDisallowedRunningBundles(admin: Want, userId: number, callback: AsyncCallback<Array<string>>): void
```

获取指定用户（通过userId指定）下的应用运行禁止名单。使用callback异步回调。

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** applicationManager.getDisallowedRunningBundlesSync

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| userId | number | Yes | 用户ID，指定具体用户。取值范围：大于等于0。 |
| callback | AsyncCallback&lt;Array&lt;string>> | Yes | 回调函数，当获取应用运行禁止名单成功时，err为null，否则为错误对象。 说明： API version 20  及之前版本，返回值为应用[appId](docroot://quick-start/common-problem-of-application.md#什么是appid)列表。从API version 21版本开始，返回值为  应用[appId](docroot://quick-start/common-problem-of-application.md#什么是appid)或  [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)列表。 |

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

applicationManager.getDisallowedRunningBundles(wantTemp, 100, (err, result) => {
  if (err) {
    console.error(`Failed to get disallowed running bundles. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info(`Succeeded in getting disallowed running bundles, result : ${JSON.stringify(result)}`);
});

```

## getDisallowedRunningBundles

```TypeScript
function getDisallowedRunningBundles(admin: Want, userId?: number): Promise<Array<string>>
```

获取当前/指定用户下的应用运行禁止名单，使用Promise异步回调。

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** applicationManager.getDisallowedRunningBundlesSync

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| userId | number | No | 用户ID，取值范围：大于等于0。 - 调用接口时，若传入userId，表示指定用户。 - 调用接口时，若未传入userId，表示当前用户。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | Promise对象，返回当前/指定用户下的应用运行禁止名单。 说明： API version 20及之前版本，返回值为应用  [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)列表。从API version 21版本开始，返回值为应用  [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)或  [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)列表。 |

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

applicationManager.getDisallowedRunningBundles(wantTemp, 100).then((result) => {
  console.info(`Succeeded in getting disallowed running bundles, result : ${JSON.stringify(result)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to get disallowed running bundles. Code is ${err.code}, message is ${err.message}`);
});

```

