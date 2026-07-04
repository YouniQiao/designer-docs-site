# removeDisallowedRunningBundles (System API)

## Modules to Import

```TypeScript
import { applicationManager } from '@ohos.enterprise.applicationManager';
```

## removeDisallowedRunningBundles

```TypeScript
function removeDisallowedRunningBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void
```

Removes an application from the applications that are not allowed to run under the current user. This API uses an asynchronous callback to return the result.

**Since:** 10

**Deprecated since:** 26.0.0

**Substitutes:** [removeDisallowedRunningBundlesSync](arkts-mdm-removedisallowedrunningbundlessync-f.md#removedisallowedrunningbundlessync-1)

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of theEnterpriseAdminExtensionAbility and the bundle name of the application. |
| appIds | Array&lt;string&gt; | Yes | Application IDs.<br>Note: Since API version 21, elements in the array can use**appId** and **appIdentifier**. Only the input **appId** or **appIdentifier** is removed. **appIdentifier** or**appId** of the same app will not be removed. In API version 20 and earlier versions, only **appId** can betransferred. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback invoked to return the result. If the operation is successful,**err** is **null**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

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

Removes an application from the applications that are not allowed to run under the current user (specified by **userId**). This API uses an asynchronous callback to return the result.

**Since:** 10

**Deprecated since:** 26.0.0

**Substitutes:** [removeDisallowedRunningBundlesSync](arkts-mdm-removedisallowedrunningbundlessync-f.md#removedisallowedrunningbundlessync-1)

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of theEnterpriseAdminExtensionAbility and the bundle name of the application. |
| appIds | Array&lt;string&gt; | Yes | Application IDs.<br>Note: Since API version 21, elements in the array can use**appId** and **appIdentifier**. Only the input **appId** or **appIdentifier** is removed. **appIdentifier** or**appId** of the same app will not be removed. In API version 20 and earlier versions, only **appId** can betransferred. |
| userId | number | Yes | User ID, which must be greater than or equal to 0. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback invoked to return the result. If the operation is successful,**err** is **null**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

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

Removes an application from the applications that are not allowed to run under the current or specified user. This API uses a promise to return the result.

**Since:** 10

**Deprecated since:** 26.0.0

**Substitutes:** [removeDisallowedRunningBundlesSync](arkts-mdm-removedisallowedrunningbundlessync-f.md#removedisallowedrunningbundlessync-1)

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of theEnterpriseAdminExtensionAbility and the bundle name of the application. |
| appIds | Array&lt;string&gt; | Yes | Application IDs.<br>Note: Since API version 21, elements in the array can use**appId** and **appIdentifier**. Only the input **appId** or **appIdentifier** is removed. **appIdentifier** or**appId** of the same app will not be removed. In API version 20 and earlier versions, only **appId** can betransferred. |
| userId | number | No | User ID, which must be greater than or equal to 0.<br> - If **userId** is passed in, theapplications cannot be run by the specified user.<br> - If **userId** is not passed in, the applications cannotbe run by the current user. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. An error object is thrown when an application that is notallowed to run fails to be removed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

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

