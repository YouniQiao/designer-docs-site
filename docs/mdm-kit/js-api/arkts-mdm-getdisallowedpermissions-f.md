# getDisallowedPermissions

## Modules to Import

```TypeScript
import { securityManager } from '@ohos.enterprise.securityManager';
```

## getDisallowedPermissions

```TypeScript
function getDisallowedPermissions(admin: Want | null, accountId: number): Array<string>
```

Gets the permissions that are disallowed to be granted for an account.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_SECURITY

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want \| null | Yes | admin indicates the administrator ability information. |
| accountId | number | Yes | accountId indicates the ID of OS account<br>The value must be an integer greater than or equal to 0. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string&gt; | the list of permissions that are disallowed to be granted for the account. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9200012](../errorcode-enterpriseDeviceManager.md#9200012-parameter-verification-failed) | Parameter verification failed. |

