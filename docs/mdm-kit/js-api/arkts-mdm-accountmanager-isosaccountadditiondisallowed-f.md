# isOsAccountAdditionDisallowed

## Modules to Import

```TypeScript
import { accountManager } from '@kit.MDMKit';
```

## isOsAccountAdditionDisallowed

```TypeScript
function isOsAccountAdditionDisallowed(admin: Want | null, accountId?: number): boolean
```

Queries whether a user is not allowed to add an account.

**Since:** 12

**Required permissions:** ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY

**Model restriction:** This API can be used only in the stage model.

<!--Device-accountManager-function isOsAccountAdditionDisallowed(admin: Want | null, accountId?: number): boolean--><!--Device-accountManager-function isOsAccountAdditionDisallowed(admin: Want | null, accountId?: number): boolean-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want \| null | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application.<br>If the device has multiple MDM applications, you can pass **admin** to query the corresponding policies. If **null** is passed, the policies that actually take effect on the device are returned.<br>**Since:** 26.0.0 |
| accountId | number | No | User ID, which specifies a user. If this parameter is not specified, the system queries whether all users are not allowed to add accounts. If this parameter is specified, the system queries whether specified users are not allowed to add accounts. The value must be greater than or equal to 0.<br>You can call the [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-osaccount-accountmanager-i.md#getosaccountlocalid-1)API to obtain the user ID. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | If **true** is returned, accounts cannot be added.<br>If **false** is returned, the account can be added. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

