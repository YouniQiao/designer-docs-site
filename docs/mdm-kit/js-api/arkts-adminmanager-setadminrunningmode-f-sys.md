# setAdminRunningMode

## setAdminRunningMode

```TypeScript
function setAdminRunningMode(admin: Want, mode: RunningMode): void
```

设置设备管理应用的运行模式。

**Since:** 19

**Required permissions:** 

 ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| mode | RunningMode | Yes | 运行模式。取值为DEFAULT表示默认用户运行模式，即应用在首次开机后的用户下运行。取值为MULTI_USER表示多用户运行模式，即应用能够在多个用户下同时运行。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |

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

