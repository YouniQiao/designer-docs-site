# replaceSuperAdmin

## replaceSuperAdmin

```TypeScript
function replaceSuperAdmin(oldAdmin: Want, newAdmin: Want, isKeepPolicy: boolean): void
```

将指定应用替换成超级设备管理应用。

**Since:** 18

**Required permissions:** 

 ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| oldAdmin | Want | Yes | 原有企业设备管理扩展组件。Want中必须包含原有企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| newAdmin | Want | Yes | 新企业设备管理扩展组件。Want中必须包含新的企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| isKeepPolicy | boolean | Yes | 是否保留原有企业设备管理扩展组件的策略，取值为true表示保留，取值为false表示不保留。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200003 | The administrator ability component is invalid. |
| 9200011 | Failed to replace the administrator application of the device. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { adminManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let oldAdmin: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
let newAdmin: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication_new',
  abilityName: 'NewEnterpriseAdminAbility'
};
try {
  adminManager.replaceSuperAdmin(oldAdmin, newAdmin, false);
  console.info(`Succeeded in replacing super admin.`);
} catch(err) {
  console.error(`Failed to replace super admin. Code: ${err.code}, message: ${err.message}`);
}

```

