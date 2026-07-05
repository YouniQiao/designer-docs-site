# addOsAccount (System API)

## Modules to Import

```TypeScript
import { accountManager } from '@ohos.enterprise.accountManager';
```

## addOsAccount

```TypeScript
function addOsAccount(admin: Want, name: string, type: osAccount.OsAccountType): osAccount.OsAccountInfo
```

Adds an account in the background.

**Since:** 11

**Deprecated since:** 26.0.0

**Substitutes:** [addOsAccountAsync](arkts-mdm-addosaccountasync-f.md#addosaccountasync-1)

**Required permissions:** ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of theEnterpriseAdminExtensionAbility and the bundle name of the application. |
| name | string | Yes | User ID, which must be greater than or equal to 0. |
| type | osAccount.OsAccountType | Yes | Type of the account to add.<br>The value can be any of the following:<br>· **ADMIN**: administrator account.<br>· **NORMAL**: normal account.<br>· **GUEST**: guest account. |

**Return value:**

| Type | Description |
| --- | --- |
| osAccount.OsAccountInfo | Information about the account added. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9201003](../errorcode-enterpriseDeviceManager.md#9201003-failed-to-add-an-account) | Failed to add an OS account. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permissionrequired to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { accountManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';
import { osAccount } from '@kit.BasicServicesKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

try {
  // Replace parameters with actual values.
  let info: osAccount.OsAccountInfo = accountManager.addOsAccount(wantTemp, "TestAccountName", osAccount.OsAccountType.NORMAL);
  console.info(`Succeeded in creating os account: ${JSON.stringify(info)}`);
} catch (err) {
  console.error(`Failed to create os account. Code: ${err.code}, message: ${err.message}`);
}

```

