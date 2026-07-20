# uninstallEnterpriseReSignatureCertificate

## Modules to Import

```TypeScript
import { securityManager } from '@kit.MDMKit';
```

## uninstallEnterpriseReSignatureCertificate

```TypeScript
function uninstallEnterpriseReSignatureCertificate(admin: Want, certificateAlias: string, accountId: number): void
```

Uninstalls the enterprise re-signing certificate.

**Since:** 24

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_SECURITY

**Model restriction:** This API can be used only in the stage model.

<!--Device-securityManager-function uninstallEnterpriseReSignatureCertificate(admin: Want, certificateAlias: string, accountId: int): void--><!--Device-securityManager-function uninstallEnterpriseReSignatureCertificate(admin: Want, certificateAlias: string, accountId: int): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| certificateAlias | string | Yes | Certificate alias, which must end with **.cer**. |
| accountId | number | Yes | Account ID, which must be greater than or equal to 0. You can call [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-osaccount-accountmanager-i.md#getosaccountlocalid-2) of **@ohos.account.osAccount** to obtain the account ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9200012](../errorcode-enterpriseDeviceManager.md#9200012-parameter-verification-failed) | Parameter verification failed. |
| [9201008](../errorcode-enterpriseDeviceManager.md#9201008-enterprise-resigning-certificate-not-exist) | The certificate does not exist. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |

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
let certificateAlias: string = 'test.cer';
// Replace with actual values.
let accountId: number = 100;
try {
  securityManager.uninstallEnterpriseReSignatureCertificate(
    wantTemp, certificateAlias, accountId);
  console.info('Success to uninstall enterprise re signature certificate.');
} catch (err) {
  console.error(`Failed to uninstall enterprise re signature certificate.
    Code: ${err.code}, message: ${err.message}`);
};

```

