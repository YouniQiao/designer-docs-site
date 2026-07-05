# getPreferencesSync

## getPreferencesSync

```TypeScript
function getPreferencesSync(context: Context, options: Options): Preferences
```

Obtains a **Preferences** instance. This API returns the result synchronously.

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Application context. For details about the application context of the FA model, see  [Context]./app/context. For details about the application context of the stage model, see  [Context]./application/Context:Context. |
| options | Options | 是 | Configuration options of the Preferences instance. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Preferences | Preferences instance obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 15501001 | The operations is supported in stage mode only. |
| 15501002 | Invalid dataGroupId. |
| 15500000 | Inner error. [since 11] |

**示例：**

```TypeScript
// 获取context
import { featureAbility } from '@kit.AbilityKit';

let context = featureAbility.getContext();
let dataPreferences: preferences.Preferences | null = null;

let options: preferences.Options = { name: 'myStore' };
dataPreferences = preferences.getPreferencesSync(context, options);


import { UIAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';

let dataPreferences: preferences.Preferences | null = null;

class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    let options: preferences.Options = { name: 'myStore' };
    dataPreferences = preferences.getPreferencesSync(this.context, options);
  }
}

```

