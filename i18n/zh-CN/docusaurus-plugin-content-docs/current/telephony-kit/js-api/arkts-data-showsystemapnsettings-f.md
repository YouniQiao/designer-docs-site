# showSystemApnSettings

## showSystemApnSettings

```TypeScript
function showSystemApnSettings(context: Context): Promise<void>
```

Open the system APN selection menu, which is presented in a semi-modal form and can be used to select a specific APN. This API uses a promise to return the result. If there is no SIM card or the device does not support the APN menu, the menu cannot be displayed.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Telephony.CellularData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Indicates Context instance. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**示例：**

```TypeScript
import { data } from '@kit.TelephonyKit';
import { common } from '@kit.AbilityKit';

let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
data.showSystemApnSettings(context).then(() => {
  console.info("showSystemApnSettings success");
}).catch(() => {
  console.error("showSystemApnSettings failed");
});

```

