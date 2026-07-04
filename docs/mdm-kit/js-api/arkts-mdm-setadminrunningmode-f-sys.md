# setAdminRunningMode (System API)

## Modules to Import

```TypeScript
import { adminManager } from '@ohos.enterprise.adminManager';
```

## setAdminRunningMode

```TypeScript
function setAdminRunningMode(admin: Want, mode: RunningMode): void
```

Sets the running mode of the device management application.

**Since:** 19

**Required permissions:** ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of theEnterpriseAdminExtensionAbility and the bundle name of the application. |
| mode | RunningMode | Yes | Running mode. <br>The value **DEFAULT** means the application runs under the defaultuser (user after the first device power-on). The value **MULTI_USER** means the application runs under multipleusers at the same time. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permissionrequired to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { adminManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let admin: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
try {
  adminManager.setAdminRunningMode(admin, adminManager.RunningMode.MULTI_USER);
  console.info(`Succeeded in setting admin running mode.`);
} catch(err) {
  console.error(`Failed to set admin running mode. Code: ${err.code}, message: ${err.message}`);
}

```

