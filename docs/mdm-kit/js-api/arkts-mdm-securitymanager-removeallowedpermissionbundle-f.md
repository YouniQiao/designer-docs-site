# removeAllowedPermissionBundle

## Modules to Import

```TypeScript
import { securityManager } from '@kit.MDMKit';
```

<a id="removeallowedpermissionbundle"></a>
## removeAllowedPermissionBundle

```TypeScript
function removeAllowedPermissionBundle(admin: Want, permission: string, applicationInstance: common.ApplicationInstance): void
```

Removes the application from the list of applications allowed to grant the permission.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_SECURITY

**Model restriction:** This API can be used only in the stage model.

<!--Device-securityManager-function removeAllowedPermissionBundle(admin: Want, permission: string, applicationInstance: common.ApplicationInstance): void--><!--Device-securityManager-function removeAllowedPermissionBundle(admin: Want, permission: string, applicationInstance: common.ApplicationInstance): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | admin indicates the administrator ability information. |
| permission | string | Yes | permission indicates the name of the permission. |
| applicationInstance | common.ApplicationInstance | Yes | applicationInstance indicates the application need to be removed from the list of applications allowed to grant the permission. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9200012](../errorcode-enterpriseDeviceManager.md#9200012-parameter-verification-failed) | Parameter verification failed. |
| 9201044 | This permission is not disallowed.Applications cannot be added to or removed from the trustlist. |

