# setOtaUpdateNonceEnable

## setOtaUpdateNonceEnable

```TypeScript
function setOtaUpdateNonceEnable(admin: Want, isEnable: boolean): void
```

使能服务器端生成随机Nonce标记

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ENTERPRISE_MANAGE_SYSTEM

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| admin | Want | 是 | 企业设备管理扩展组件 |
| isEnable | boolean | 是 | 随机标记 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200016 | Service timeout. |

**示例：**

```TypeScript
import { systemManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // 需根据实际情况进行替换
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
// 需根据实际情况进行替换
let isEnable: boolean = true;
try {
  systemManager.setOtaUpdateNonceEnable(wantTemp, isEnable);
  console.info('Succeeded in setting OTA update Nonce enable.');
} catch (err) {
  console.error(`Failed to set OTA update Nonce enable. Code is ${err.code}, message is ${err.message}`);
}

```

