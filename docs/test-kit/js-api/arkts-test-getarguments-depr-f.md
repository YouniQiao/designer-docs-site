# getArguments

## getArguments

```TypeScript
function getArguments(): AbilityDelegatorArgs
```

Obtains the **AbilityDelegatorArgs** object of the application.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getArguments](arkts-test-getarguments-f.md#getarguments-1)

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| AbilityDelegatorArgs | [AbilityDelegatorArgs](../../apis-ability-kit/arkts-apis/arkts-ability-abilitydelegatorargs-i.md#abilitydelegatorargs) object, which can be usedto obtain test parameters. |

**Example**

```TypeScript
import AbilityDelegatorRegistry from '@ohos.application.abilityDelegatorRegistry';

let args = AbilityDelegatorRegistry.getArguments();
console.info(`getArguments bundleName: ${args.bundleName}`);
console.info(`getArguments testCaseNames: ${args.testCaseNames}`);
console.info(`getArguments testRunnerClassName: ${args.testRunnerClassName}`);

```

