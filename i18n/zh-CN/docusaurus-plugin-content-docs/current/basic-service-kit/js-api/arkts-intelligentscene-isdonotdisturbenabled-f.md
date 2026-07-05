# isDoNotDisturbEnabled

## isDoNotDisturbEnabled

```TypeScript
function isDoNotDisturbEnabled(): Promise<boolean>
```

Checks whether Do Not Disturb is enabled on this device. The Do Not Disturb state defines if notifications are allowed to interrupt the user (e.g. via sound & vibration) and is applied globally.

**起始版本：** 23

**需要权限：** 

 ohos.permission.GET_DONOTDISTURB_STATE

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Applications.IntelligentScene

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Returns whether Do Not Disturb is enabled. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 35200001 | Internal error. |

**示例：**

```TypeScript
import { BusinessError, intelligentScene } from '@kit.BasicServicesKit';

async function isDoNotDisturbEnabled(): Promise<boolean> {
  let isDoNotDisturbEnabled: boolean = false;
  try {
    isDoNotDisturbEnabled = await intelligentScene.isDoNotDisturbEnabled();
  } catch (err) {
    console.error(`Failed to get doNotDisturb state, code: ${err.code}, message: ${err.message}`);
  }
  if (isDoNotDisturbEnabled) {
    console.info('DoNotDisturb state is open');
  } else {
    console.info('DoNotDisturb state is closed');
  }
  return isDoNotDisturbEnabled;
}

```

