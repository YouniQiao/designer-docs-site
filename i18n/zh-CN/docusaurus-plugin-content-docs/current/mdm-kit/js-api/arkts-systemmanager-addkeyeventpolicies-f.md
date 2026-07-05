# addKeyEventPolicies

## addKeyEventPolicies

```TypeScript
function addKeyEventPolicies(admin: Want, keyPolicies: Array<KeyEventPolicy>): void
```

添加按键事件处理策略。系统触发按键事件时，若匹配下发的按键事件策略，将通过 [EnterpriseAdminExtensionAbility.onKeyEvent](arkts-enterpriseadminextensionability-c.md#onKeyEvent) 回调通知MDM应用，并携带匹配策略的按键事件信息。

**起始版本：** 23

**需要权限：** 

 ohos.permission.ENTERPRISE_MANAGE_SYSTEM

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| admin | Want | 是 | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| keyPolicies | Array&lt;KeyEventPolicy> | 是 | 按键策略。支持物理按键（电源键、音量加、音量减），导航键（回退、主页、最近打开）。物理键支持任意组合为组合键，导航键不支持组合。组合键事  件响应详见  [按键事件回调](arkts-enterpriseadminextensionability-c.md#onKeyEvent)接口。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200010 | A conflict policy has been configured. |
| 9200012 | Parameter verification failed. |
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

let keypolicy: Array<systemManager.KeyEventPolicy> = [
  {
    "keyCode": systemManager.KeyCode.POWER,
    "keyPolicy": systemManager.KeyPolicy.CUSTOM
  },
  {
    "keyCode": systemManager.KeyCode.VOLUME_UP,
    "keyPolicy": systemManager.KeyPolicy.CUSTOM
  }
];

try {
  systemManager.addKeyEventPolicies(wantTemp, keypolicy);
  console.info('Succeeded in adding key event policies.');
} catch (err) {
  console.error(`Failed to add key event policies. Code is ${err.code}, message is ${err.message}`);
}

```

