# getAbilityDelegator

## Modules to Import

```TypeScript
import { abilityDelegatorRegistry } from '@ohos.app.ability.abilityDelegatorRegistry';
```

## getAbilityDelegator

```TypeScript
function getAbilityDelegator(): AbilityDelegator
```

Obtains an [AbilityDelegator](application/AbilityDelegator:AbilityDelegator) object.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| AbilityDelegator | [AbilityDelegator](application/AbilityDelegator:AbilityDelegator) object, which canbe used to schedule the functionalities of the test framework. |

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

