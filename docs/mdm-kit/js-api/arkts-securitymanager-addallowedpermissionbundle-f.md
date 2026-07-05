# addAllowedPermissionBundle

## addAllowedPermissionBundle

```TypeScript
function addAllowedPermissionBundle(admin: Want, permission: string, applicationInstance: common.ApplicationInstance): void
```

添加允许使用已禁用指定权限的应用到权限使用例外名单，权限使用例外名单中的应用可以不受[setDisallowedPermission]securityManager.setDisallowedPermission的策略限制。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_SECURITY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| permission | string | Yes | 权限名称。 |
| applicationInstance | common.ApplicationInstance | Yes | 需添加到权限使用例外名单的应用实例信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | Parameter verification failed. |
| 9201015 | The application is not installed. |
| 9201044 | This permission is not disallowed.  Applications cannot be added to or removed from the trustlist. |

