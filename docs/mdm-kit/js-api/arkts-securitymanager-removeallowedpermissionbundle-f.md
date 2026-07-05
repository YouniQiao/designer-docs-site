# removeAllowedPermissionBundle

## removeAllowedPermissionBundle

```TypeScript
function removeAllowedPermissionBundle(admin: Want, permission: string, applicationInstance: common.ApplicationInstance): void
```

从权限使用例外名单中移除指定应用，移除后该应用则不能继续使用对应的权限。

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
| applicationInstance | common.ApplicationInstance | Yes | 需从权限使用例外名单移除的应用实例信息。  the application need to be removed from the list of applications allowed to grant the permission. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | Parameter verification failed. |
| 9201044 | This permission is not disallowed.  Applications cannot be added to or removed from the trustlist. |

