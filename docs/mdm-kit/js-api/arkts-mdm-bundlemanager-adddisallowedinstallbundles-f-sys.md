# addDisallowedInstallBundles (System API)

## Modules to Import

```TypeScript
import { bundleManager } from '@kit.MDMKit';
```

## addDisallowedInstallBundles

```TypeScript
function addDisallowedInstallBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void
```

Adds the applications that cannot be installed by the current user. This API uses an asynchronous callback to return the result.

**Since:** 10

**Deprecated since:** 26.0.0

**Substitutes:** [addDisallowedInstallBundlesSync](arkts-mdm-bundlemanager-adddisallowedinstallbundlessync-f.md#adddisallowedinstallbundlessync-1)

**Required permissions:** ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY

**Model restriction:** This API can be used only in the stage model.

<!--Device-bundleManager-function addDisallowedInstallBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void--><!--Device-bundleManager-function addDisallowedInstallBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| appIds | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | Yes | Application IDs.<br>Note: From API version 21 onwards, the **appId** and **appIdentifier** of the app can be passed. **appIdentifier** is recommended. In API version 20 and earlier versions, only **appId** can be passed. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback invoked to return the result. If the operation is successful,**err** is **null**. Otherwise, **err** is an error object. |

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

Adds the applications that cannot be installed by the user specified by **userId**. This API uses an asynchronous callback to return the result.

**Since:** 10

**Deprecated since:** 26.0.0

**Substitutes:** [addDisallowedInstallBundlesSync](arkts-mdm-bundlemanager-adddisallowedinstallbundlessync-f.md#adddisallowedinstallbundlessync-1)

**Required permissions:** ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY

**Model restriction:** This API can be used only in the stage model.

<!--Device-bundleManager-function addDisallowedInstallBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void--><!--Device-bundleManager-function addDisallowedInstallBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| appIds | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | Yes | Application IDs.<br>Note: From API version 21 onwards, the **appId** and **appIdentifier** of the app can be passed. **appIdentifier** is recommended. In API version 20 and earlier versions, only **appId** can be passed. |
| userId | number | Yes | User ID, which must be greater than or equal to 0. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback invoked to return the result. If the operation is successful,**err** is **null**. Otherwise, **err** is an error object. |

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

Adds the applications that are not allowed to be installed by the current or specified user. This API uses a promise to return the result.

**Since:** 10

**Deprecated since:** 26.0.0

**Substitutes:** [addDisallowedInstallBundlesSync](arkts-mdm-bundlemanager-adddisallowedinstallbundlessync-f.md#adddisallowedinstallbundlessync-1)

**Required permissions:** ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY

**Model restriction:** This API can be used only in the stage model.

<!--Device-bundleManager-function addDisallowedInstallBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>--><!--Device-bundleManager-function addDisallowedInstallBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| appIds | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | Yes | Application IDs.<br>Note: From API version 21 onwards, the **appId** and **appIdentifier** of the app can be passed. **appIdentifier** is recommended. In API version 20 and earlier versions, only **appId** can be passed. |
| userId | number | No | User ID, which must be greater than or equal to 0.<br> - If **userId** is passed in,this API applies to the specified user.<br> - If **userId** is not passed in, this API applies to the current user. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. If the operation fails, an error object will be thrown. |

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

