# getAbilityDelegator

## getAbilityDelegator

```TypeScript
function getAbilityDelegator(): AbilityDelegator
```

获取应用程序的AbilityDelegator对象。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.app.ability.abilityDelegatorRegistry:abilityDelegatorRegistry.getAbilityDelegator

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| AbilityDelegator | [AbilityDelegator]./application/AbilityDelegator:AbilityDelegator对象。可以用来调度测试框  架相关功能。 |

**Example**

```TypeScript
import AbilityDelegatorRegistry from '@ohos.application.abilityDelegatorRegistry';

let abilityDelegator = AbilityDelegatorRegistry.getAbilityDelegator();

```

