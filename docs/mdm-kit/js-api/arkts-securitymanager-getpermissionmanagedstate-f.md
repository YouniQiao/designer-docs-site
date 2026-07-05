# getPermissionManagedState

## getPermissionManagedState

```TypeScript
function getPermissionManagedState(
    admin: Want,
    applicationInstance: ApplicationInstance,
    permission: string
  ): PermissionManagedState
```

获取指定应用的指定[user_grant权限](../../apis-ability-kit/arkts-apis/arkts-permissions-t.md#Permissions)的管理策略。

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
| permission | string | Yes | 需要获取管理策略的权限名称，仅支持user_grant权限。 |

**Return value:**

| Type | Description |
| --- | --- |
| PermissionManagedState | 应用权限的管理策略。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
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
let permissionTemp: string = 'ohos.permission.ENTERPRISE_MANAGE_USER_GRANT_PERMISSION';
try {
    let result: securityManager.PermissionManagedState = securityManager.getPermissionManagedState(wantTemp, appInstanceTemp, permissionTemp);
    console.info(`Succeeded in getting permission managed state, result : ${result}`);
} catch(err) {
    console.error(`Failed to get permission managed state. Code: ${err.code}, message: ${err.message}`);
}

```

