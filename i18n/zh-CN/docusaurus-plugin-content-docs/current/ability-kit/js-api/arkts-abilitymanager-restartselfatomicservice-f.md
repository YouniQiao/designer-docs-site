# restartSelfAtomicService

## restartSelfAtomicService

```TypeScript
function restartSelfAtomicService(context: Context): void
```

重启当前原子化服务。 > **说明：** > > - 当前仅支持以独立窗口方式拉起原子化服务。 > > - 在调用本接口成功后的3秒内，再次调用本接口、 > [ApplicationContext.restartApp()]./application/ApplicationContext:ApplicationContext.restartApp或 > [UIAbilityContext.restartApp()]./application/UIAbilityContext:UIAbilityContext.restartApp接口中的任一接口，系统将返回错误码1 > 6000064。

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 当前Ability的上下文。 说明：当前仅支持  [UIAbilityContext]./application/UIAbilityContext:UIAbilityContext。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16000050 | Internal error. Possible causes: 1. Connect to system service failed;  2.Send restart message to system service failed; 3.System service failed to communicate with dependency module. |
| 16000053 | The ability is not on the top of the UI. |
| 16000064 | Restart too frequently. Try again at least 3s later. |
| 16000086 | The context is not UIAbilityContext. |
| 16000090 | The caller is not an atomic service. |

**示例：**

```TypeScript
import { AbilityConstant, EmbeddableUIAbility, Want, abilityManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends EmbeddableUIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    try {
      abilityManager.restartSelfAtomicService(this.context);
    } catch (e) {
      console.error(`restartSelfAtomicService error: ${JSON.stringify(e as BusinessError)}`);
    }
  }
}

```

