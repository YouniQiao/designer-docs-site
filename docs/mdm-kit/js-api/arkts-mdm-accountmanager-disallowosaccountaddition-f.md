# disallowOsAccountAddition

## Modules to Import

```TypeScript
import { accountManager } from '@kit.MDMKit';
```

<a id="disallowosaccountaddition"></a>
## disallowOsAccountAddition

```TypeScript
function disallowOsAccountAddition(admin: Want, disallow: boolean, accountId?: number): void
```

Users are not allowed to add accounts.

**Since:** 12

**Required permissions:** ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY

**Model restriction:** This API can be used only in the stage model.

<!--Device-accountManager-function disallowOsAccountAddition(admin: Want, disallow: boolean, accountId?: number): void--><!--Device-accountManager-function disallowOsAccountAddition(admin: Want, disallow: boolean, accountId?: number): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| disallow | boolean | Yes | Whether to forbid the creation of local user accounts. The value **true** means the creation of local user accounts is forbidden, and the value **false** means the opposite. |
| accountId | number | No | User ID, which specifies a user. If this parameter is not specified, all users are not allowed to add accounts. If this parameter is specified, specified users are not allowed to add accounts.The value must be greater than or equal to 0.<br>You can call the [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-osaccount-accountmanager-i.md#getosaccountlocalid-1)API to obtain the user ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { accountManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

try {
  // Replace parameters with actual values.
  accountManager.disallowOsAccountAddition(wantTemp, true, 100);
  console.info('Succeeded in disallowing os account addition.');
} catch (err) {
  console.error(`Failed to disallow os account addition. Code: ${err.code}, message: ${err.message}`);
}

```

