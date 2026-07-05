# replaceSuperAdmin

## replaceSuperAdmin

```TypeScript
function replaceSuperAdmin(oldAdmin: Want, newAdmin: Want, isKeepPolicy: boolean): void
```

将指定应用替换成超级设备管理应用。

**起始版本：** 18

**需要权限：** 

 ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| oldAdmin | Want | 是 | 原有企业设备管理扩展组件。Want中必须包含原有企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| newAdmin | Want | 是 | 新企业设备管理扩展组件。Want中必须包含新的企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| isKeepPolicy | boolean | 是 | 是否保留原有企业设备管理扩展组件的策略，取值为true表示保留，取值为false表示不保留。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200003 | The administrator ability component is invalid. |
| 9200011 | Failed to replace the administrator application of the device. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**示例：**

```TypeScript
import { adminManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let oldAdmin: Want = {
  // 需根据实际情况进行替换
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
let newAdmin: Want = {
  // 需根据实际情况进行替换
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

