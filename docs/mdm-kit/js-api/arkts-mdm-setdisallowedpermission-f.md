# setDisallowedPermission

## Modules to Import

```TypeScript
import { securityManager } from '@ohos.enterprise.securityManager';
```

## setDisallowedPermission

```TypeScript
function setDisallowedPermission(admin: Want, permission: string, disallow: boolean, accountId: number): void
```

Sets the permissions that are disallowed to be granted for an account.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_SECURITY

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | admin indicates the administrator ability information. |
| permission | string | Yes | permission indicates the name of the permission. |
| disallow | boolean | Yes | true if disallowed granted for the account, otherwise false. |
| accountId | number | Yes | accountId indicates the ID of OS account<br>The value must be an integer greater than or equal to 0. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9200012](../errorcode-enterpriseDeviceManager.md#9200012-parameter-verification-failed) | Parameter verification failed. |
| 9201045 | This permission cannot be disallowed. |

