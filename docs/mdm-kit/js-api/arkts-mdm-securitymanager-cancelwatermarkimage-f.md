# cancelWatermarkImage

## Modules to Import

```TypeScript
import { securityManager } from '@kit.MDMKit';
```

## cancelWatermarkImage

```TypeScript
function cancelWatermarkImage(admin: Want, bundleName: string, accountId: number): void
```

Cancels the watermark policy for a specified user.

**Since:** 14

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_SECURITY

**Model restriction:** This API can be used only in the stage model.

<!--Device-securityManager-function cancelWatermarkImage(admin: Want, bundleName: string, accountId: number): void--><!--Device-securityManager-function cancelWatermarkImage(admin: Want, bundleName: string, accountId: number): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| bundleName | string | Yes | Bundle name of the application for which the watermark is removed. |
| accountId | number | Yes | Account ID. You can call [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-osaccount-accountmanager-i.md#getosaccountlocalid-2) of **@ohos.account.osAccount** to obtain the account ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { securityManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
// Replace with actual values.
let bundleName: string = 'com.example.myapplication';
let accountId: number = 100;
try {
    securityManager.cancelWatermarkImage(wantTemp, bundleName, accountId);
    console.info(`Succeeded in setting cancel watermarkImage policy.`);
} catch(err) {
    console.error(`Failed to cancel watermarkImage policy. Code: ${err.code}, message: ${err.message}`);
}

```

