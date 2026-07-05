# acquireDataAbilityHelper

## acquireDataAbilityHelper

```TypeScript
function acquireDataAbilityHelper(uri: string): DataAbilityHelper
```

获取dataAbilityHelper对象。 > **说明：** > > 组件启动规则详见：[组件启动规则（FA模型）](docroot://application-models/component-startup-rules-fa.md)。 > > 跨应用访问dataAbility，对端应用需配置关联启动。

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | 表示要打开的文件的路径。 |

**Return value:**

| Type | Description |
| --- | --- |
| DataAbilityHelper | 用来协助其他Ability访问DataAbility的工具类。 |

**Example**

```TypeScript
import { featureAbility } from '@kit.AbilityKit';

let dataAbilityHelper = featureAbility.acquireDataAbilityHelper(
  'dataability:///com.example.DataAbility'
);

```

