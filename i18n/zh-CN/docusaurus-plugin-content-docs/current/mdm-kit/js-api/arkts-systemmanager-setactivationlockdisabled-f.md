# setActivationLockDisabled

## setActivationLockDisabled

```TypeScript
function setActivationLockDisabled(admin: Want, isDisabled: boolean, credential?: string): Promise<void>
```

禁用/启用设备激活锁。设备激活锁被禁用后，将无法使用查找设备功能。该功能只适用于特定设备<!--RP5--><!--RP5End-->。

**起始版本：** 24

**需要权限：** 

 ohos.permission.ENTERPRISE_MANAGE_SYSTEM

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| admin | Want | 是 | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| isDisabled | boolean | 是 | 是否禁用激活锁。true表示禁用，false表示启用。 |
| credential | string | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。当设置禁用/启用失败时，会抛出错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | Parameter verification failed. |
| 9200016 | Service timeout. |
| 9201011 | The credential of the activation lock is invalid. |
| 9201012 | Failed to enable or disable the activation lock. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |

**示例：**

```TypeScript
import { Want } from '@kit.AbilityKit';
import { systemManager } from '@kit.MDMKit';

let wantTemp: Want = {
  // 需根据实际情况进行替换
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
// 需根据实际情况进行替换
let credential: string = "XXX";
let isDisabled: boolean = true;
systemManager.setActivationLockDisabled(wantTemp, isDisabled, credential).then(() => {
  console.info('Succeeded in setting activation lock status.');
}).catch((err: BusinessError) => {
  console.error(`Failed to set activation lock status. Code: ${err.code}, message: ${err.message}`);
});

```

