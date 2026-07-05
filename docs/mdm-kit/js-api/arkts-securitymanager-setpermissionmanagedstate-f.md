# setPermissionManagedState

## setPermissionManagedState

```TypeScript
function setPermissionManagedState(
    admin: Want,
    applicationInstance: ApplicationInstance,
    permissions: Array<string>,
    managedState: PermissionManagedState
  ): void
```

设置指定应用的[user_grant权限](../../apis-ability-kit/arkts-apis/arkts-permissions-t.md#Permissions)的管理策略。

**Since:** 20

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_USER_GRANT_PERMISSION

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| applicationInstance | ApplicationInstance | Yes | 指定应用实例。 |
| permissions | Array&lt;string> | Yes | 需要管理的权限名称列表，仅支持[user_grant权限](../../apis-ability-kit/arkts-apis/arkts-permissions-t.md#Permissions)。权限名称列表以  [应用权限组](docroot://security/AccessToken/app-permission-group-list.md)为单位。列表中应包含应用在  [module.json5](docroot://quick-start/module-configuration-file.md)中声明的同一权限组内的所有权限。例如：应用如果在module.json5中声明需要  ohos.permission.READ_CALENDAR和ohos.permission.WRITE_CALENDAR权限，则传入的权限名称列表必须同时包含ohos.permission.READ_CALENDAR和  ohos.permission.WRITE_CALENDAR两个权限。 |
| managedState | PermissionManagedState | Yes | 应用权限的管理策略。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200010 | A conflict policy has been configured. |
| 9200012 | The parameter validation failed. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

**Example**

```TypeScript
import { Want } from '@kit.AbilityKit';
import { securityManager } from '@kit.MDMKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
let appInstanceTemp: securityManager.ApplicationInstance = {
      // Replace with actual values.
      appIdentifier: '736498586',
      appIndex: 0,
      accountId: 100
};
let permissionsTemp: Array<string> = ['ohos.permission.CAMERA', 'ohos.permission.LOCATION'];
try {
    securityManager.setPermissionManagedState(wantTemp, appInstanceTemp, permissionsTemp, securityManager.PermissionManagedState.GRANTED);
    console.info('Succeeded in setting permission managed state.');
} catch(err) {
    console.error(`Failed to set permission managed state.  Code: ${err.code}, message: ${err.message}`);
}

```

