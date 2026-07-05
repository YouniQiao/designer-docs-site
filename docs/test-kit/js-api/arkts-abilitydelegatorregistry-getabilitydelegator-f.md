# getAbilityDelegator

## getAbilityDelegator

```TypeScript
function getAbilityDelegator(): AbilityDelegator
```

获取应用程序的[AbilityDelegator]application/AbilityDelegator:AbilityDelegator对象，该对象能够使用调度测试框架的相关功能。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| AbilityDelegator | [AbilityDelegator]application/AbilityDelegator:AbilityDelegator对象。可以用来调度测试框架相关功能。 |

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

