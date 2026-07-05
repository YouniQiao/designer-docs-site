# addDisallowedInstallBundles

## addDisallowedInstallBundles

```TypeScript
function addDisallowedInstallBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void
```

添加应用至应用程序包安装禁止名单，添加至禁止名单的应用不允许在当前用户下安装，使用callback异步回调。

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** bundleManager.addDisallowedInstallBundlesSync

**Required permissions:** 

 ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| appIds | Array&lt;string> | Yes | 应用ID数组。 说明： 从API version 21版本开始，支持传入应用的  [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和  [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，推荐使用  [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)。API version 20及之前版本，仅支  持[appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。 |
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
import { bundleManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
// Replace with actual values.
let appIds: Array<string> = ['com.example.******_******/******5t5CoBM='];

bundleManager.addDisallowedInstallBundles(wantTemp, appIds, (err) => {
  if (err) {
    console.error(`Failed to add disallowed install bundles. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info('Succeeded in adding disallowed install bundles');
});

```

## addDisallowedInstallBundles

```TypeScript
function addDisallowedInstallBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void
```

添加应用至应用程序包安装禁止名单，添加至禁止名单的应用不允许在指定用户（通过userId指定）下安装。使用callback异步回调。

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** bundleManager.addDisallowedInstallBundlesSync

**Required permissions:** 

 ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| appIds | Array&lt;string> | Yes | 应用ID数组。 说明： 从API version 21版本开始，支持传入应用的  [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和  [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，推荐使用  [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)。API version 20及之前版本，仅支  持[appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。 |
| userId | number | Yes | 用户ID，指定具体用户。取值范围：大于等于0。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数，当接口调用成功，err为null，否则为错误对象。 |

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
import { bundleManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
// Replace with actual values.
let appIds: Array<string> = ['com.example.******_******/******5t5CoBM='];

bundleManager.addDisallowedInstallBundles(wantTemp, appIds, 100, (err) => {
  if (err) {
    console.error(`Failed to add disallowed install bundles. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info('Succeeded in adding disallowed install bundles');
});

```

## addDisallowedInstallBundles

```TypeScript
function addDisallowedInstallBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>
```

添加应用至应用程序包安装禁止名单，添加至禁止名单的应用不允许在当前/指定用户下安装。使用Promise异步回调。

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** bundleManager.addDisallowedInstallBundlesSync

**Required permissions:** 

 ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| appIds | Array&lt;string> | Yes | 应用ID数组。 说明： 从API version 21版本开始，支持传入应用的  [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和  [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，推荐使用  [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)。API version 20及之前版本，仅支  持[appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。 |
| userId | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。当添加应用程序包安装禁止名单失败时，会抛出错误对象。 |

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
import { bundleManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
// Replace with actual values.
let appIds: Array<string> = ['com.example.******_******/******5t5CoBM='];

bundleManager.addDisallowedInstallBundles(wantTemp, appIds, 100).then(() => {
  console.info('Succeeded in adding disallowed install bundles');
}).catch((err: BusinessError) => {
  console.error(`Failed to add disallowed install bundles. Code is ${err.code}, message is ${err.message}`);
});

```

