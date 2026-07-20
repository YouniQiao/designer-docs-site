# getAbilityDelegator

## Modules to Import

```TypeScript
import { abilityDelegatorRegistry } from '@kit.TestKit';
```

## getAbilityDelegator

```TypeScript
function getAbilityDelegator(): AbilityDelegator
```

Obtains an [AbilityDelegator](application/AbilityDelegator:AbilityDelegator) object.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-abilityDelegatorRegistry-function getAbilityDelegator(): AbilityDelegator--><!--Device-abilityDelegatorRegistry-function getAbilityDelegator(): AbilityDelegator-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| [AbilityDelegator](arkts-test-abilitydelegatorregistry-abilitydelegator-t.md) | [AbilityDelegator](application/AbilityDelegator:AbilityDelegator) object, which can be used to schedule the functionalities of the test framework. |

**Example**

```TypeScript
import { abilityDelegatorRegistry } from '@kit.TestKit';
import { Want } from '@kit.AbilityKit';

let abilityDelegator = abilityDelegatorRegistry.getAbilityDelegator();
let want: Want = {
  bundleName: 'com.example.myapplication',
  abilityName: 'EntryAbility'
};

abilityDelegator.startAbility(want, (err) => {
  if (err) {
    console.error(`Failed start ability, error: ${JSON.stringify(err)}`);
  } else {
    console.info('Success start ability.');
  }
});

```

