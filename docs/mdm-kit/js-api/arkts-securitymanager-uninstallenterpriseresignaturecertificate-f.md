# uninstallEnterpriseReSignatureCertificate

## uninstallEnterpriseReSignatureCertificate

```TypeScript
function uninstallEnterpriseReSignatureCertificate(admin: Want, certificateAlias: string, accountId: int): void
```

卸载企业应用重签名证书。

**Since:** 24

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_SECURITY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| certificateAlias | string | Yes | 证书别名，必须以'.cer'结尾。 |
| accountId | int | Yes | 用户ID，指定具体用户，取值范围：大于等于0。accountId可以通过@ohos.account.osAccount中的  [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-osaccount-accountmanager-i.md#getOsAccountLocalId)等接口来获取。@ohos.account.osAccount to obtain the account ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | Parameter verification failed. |
| 9201008 | The certificate does not exist. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

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

