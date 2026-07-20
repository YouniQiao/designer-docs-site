# getArguments

## Modules to Import

```TypeScript
import { abilityDelegatorRegistry } from '@kit.TestKit';
```

## getArguments

```TypeScript
function getArguments(): AbilityDelegatorArgs
```

Obtains an [AbilityDelegatorArgs](application/abilityDelegatorArgs:AbilityDelegatorArgs) object.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-abilityDelegatorRegistry-function getArguments(): AbilityDelegatorArgs--><!--Device-abilityDelegatorRegistry-function getArguments(): AbilityDelegatorArgs-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| [AbilityDelegatorArgs](arkts-test-abilitydelegatorregistry-abilitydelegatorargs-t.md) | [AbilityDelegatorArgs](application/abilityDelegatorArgs:AbilityDelegatorArgs)object, which can be used to obtain test parameters. |

**Example**

```TypeScript
import { abilityDelegatorRegistry } from '@kit.TestKit';

let args = abilityDelegatorRegistry.getArguments();
console.info(`getArguments bundleName: ${args.bundleName}`);
console.info(`getArguments parameters: ${JSON.stringify(args.parameters)}`);
console.info(`getArguments testCaseNames: ${args.testCaseNames}`);
console.info(`getArguments testRunnerClassName: ${args.testRunnerClassName}`);

```

