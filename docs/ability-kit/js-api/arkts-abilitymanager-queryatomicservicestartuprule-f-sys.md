# queryAtomicServiceStartupRule

## queryAtomicServiceStartupRule

```TypeScript
function queryAtomicServiceStartupRule(context: Context, appId: string): Promise<AtomicServiceStartupRule>
```

查询嵌入式拉起[EmbeddableUIAbility](arkts-embeddableuiability-c.md#EmbeddableUIAbility)的规则。使用Promise异步回调。 该接口仅在Phone和Tablet设备中可正常调用，在其他设备中返回801错误码。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 嵌入式拉起EmbeddableUIAbility的调用方Context。 说明：目前仅支持  [UIAbilityContext]./application/UIAbilityContext:UIAbilityContext。 |
| appId | string | Yes | 应用的唯一标识，由云端统一分配。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AtomicServiceStartupRule> | Promise对象。返回嵌入式拉起原子化服务的规则。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 16000050 | Internal error. |

**Example**

```TypeScript
import { abilityManager, UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  onForeground() {
    let appId: string = '6918661953712445909';
    try {
      abilityManager.queryAtomicServiceStartupRule(this.context, appId).then((data: abilityManager.AtomicServiceStartupRule) => {
        console.info(`queryAtomicServiceStartupRule data: ${JSON.stringify(data)}`);
      }).catch((err: BusinessError) => {
        console.error(`queryAtomicServiceStartupRule failed, code is ${err.code}, message is ${err.message}`);
      });
    } catch (err) {
      // Process input parameter errors.
      console.error(`param is invalid, code is ${err.code}, message is ${err.message}`);
    }
  }
}

```

