# getArguments

## getArguments

```TypeScript
function getArguments(): AbilityDelegatorArgs
```

获取单元测试参数[AbilityDelegatorArgs]application/abilityDelegatorArgs:AbilityDelegatorArgs对象。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| AbilityDelegatorArgs | [AbilityDelegatorArgs]application/abilityDelegatorArgs:AbilityDelegatorArgs对象。  可以用来获取测试参数。 |

**Example**

```TypeScript
import { abilityDelegatorRegistry } from '@kit.TestKit';

let args = abilityDelegatorRegistry.getArguments();
console.info(`getArguments bundleName: ${args.bundleName}`);
console.info(`getArguments parameters: ${JSON.stringify(args.parameters)}`);
console.info(`getArguments testCaseNames: ${args.testCaseNames}`);
console.info(`getArguments testRunnerClassName: ${args.testRunnerClassName}`);

```

