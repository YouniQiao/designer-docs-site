# removeAutoStartApps

## Modules to Import

```TypeScript
import { applicationManager } from '@kit.MDMKit';
```

## removeAutoStartApps

```TypeScript
function removeAutoStartApps(admin: Want, autoStartApps: Array<Want>): void
```

Removes the auto-start applications for the current user.

**Since:** 12

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_APPLICATION

**Model restriction:** This API can be used only in the stage model.

<!--Device-applicationManager-function removeAutoStartApps(admin: Want, autoStartApps: Array<Want>): void--><!--Device-applicationManager-function removeAutoStartApps(admin: Want, autoStartApps: Array<Want>): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| autoStartApps | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<Want> | Yes | Array of auto-start applications. **Want** must contain **bundleName** and **abilityName**. The ability can be UIAbility or ServiceExtensionAbility. If the value of **exported** in the [abilities](../../../../quick-start/module-configuration-file.md#abilities) tag is **false**, the ability cannot be started. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { applicationManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace it as required.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
let autoStartApps: Array<Want> = [
  {
    // Replace it as required.
    bundleName: 'com.example.autoStartApplication',
    abilityName: 'EntryAbility'
  }
];

try {
  applicationManager.removeAutoStartApps(wantTemp, autoStartApps);
  console.info('Succeeded in removing auto start applications.');
} catch(err) {
  console.error(`Failed to remove auto start applications. Code: ${err.code}, message: ${err.message}`);
}

```


## removeAutoStartApps

```TypeScript
function removeAutoStartApps(admin: Want, autoStartApps: Array<Want>, accountId: number): void
```

Removes the specified application from the auto-start application list of a specified user.

**Since:** 20

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_APPLICATION

**Model restriction:** This API can be used only in the stage model.

<!--Device-applicationManager-function removeAutoStartApps(admin: Want, autoStartApps: Array<Want>, accountId: number): void--><!--Device-applicationManager-function removeAutoStartApps(admin: Want, autoStartApps: Array<Want>, accountId: number): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| autoStartApps | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<Want> | Yes | Array of auto-start applications. **Want** must contain **bundleName** and **abilityName**. |
| accountId | number | Yes | Account ID, which must be greater than or equal to 0.<br> You can call [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-osaccount-accountmanager-i.md#getosaccountlocalid-2) of @ohos.account.osAccount to obtain the ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |

**Example**

```TypeScript
import { applicationManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';
 
let wantTemp: Want = {
  // Replace it as required.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

let autoStartApps: Array<Want> = [
  // Replace it as required.
  {
    bundleName: 'com.example.autoStartApplication',
    abilityName: 'EntryAbility'
  }
];

try {
  applicationManager.removeAutoStartApps(wantTemp, autoStartApps, 100);
  console.info('Succeeded in removing auto start applications.');
} catch(err) {
  console.error(`Failed to remove auto start applications. Code: ${err.code}, message: ${err.message}`);
}

```

