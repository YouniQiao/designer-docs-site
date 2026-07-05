# getArguments

## getArguments

```TypeScript
function getArguments(): AbilityDelegatorArgs
```

获取单元测试参数AbilityDelegatorArgs对象。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.app.ability.abilityDelegatorRegistry:abilityDelegatorRegistry.getArguments

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| AbilityDelegatorArgs | [AbilityDelegatorArgs]./application/abilityDelegatorArgs:AbilityDelegatorArgs对象。可以用来获取测试参数。 |

**Example**

```TypeScript
import AbilityDelegatorRegistry from '@ohos.application.abilityDelegatorRegistry';

let args = AbilityDelegatorRegistry.getArguments();
console.info(`getArguments bundleName: ${args.bundleName}`);
console.info(`getArguments testCaseNames: ${args.testCaseNames}`);
console.info(`getArguments testRunnerClassName: ${args.testRunnerClassName}`);

```

