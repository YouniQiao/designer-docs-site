# getAbilityDelegator

## getAbilityDelegator

```TypeScript
function getAbilityDelegator(): AbilityDelegator
```

Obtains the **AbilityDelegator** object of the application.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getAbilityDelegator](arkts-test-getabilitydelegator-f.md#getabilitydelegator-1)

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| AbilityDelegator | [AbilityDelegator](../../apis-ability-kit/arkts-apis/arkts-ability-abilitydelegator-i.md#abilitydelegator) object,which can be used to schedule functions related to the test framework. |

**Example**

```TypeScript
import AbilityDelegatorRegistry from '@ohos.application.abilityDelegatorRegistry';

let abilityDelegator = AbilityDelegatorRegistry.getAbilityDelegator();

```

