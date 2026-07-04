# acquireDataAbilityHelper

## Modules to Import

```TypeScript
import { particleAbility } from '@ohos.ability.particleAbility';
```

## acquireDataAbilityHelper

```TypeScript
function acquireDataAbilityHelper(uri: string): DataAbilityHelper
```

Obtains the dataAbilityHelper.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | Indicates the path of the file to open. |

**Return value:**

| Type | Description |
| --- | --- |
| DataAbilityHelper | Returns the dataAbilityHelper. |

**Example**

```TypeScript
import { particleAbility } from '@kit.AbilityKit';

let uri = '';
particleAbility.acquireDataAbilityHelper(uri);

```

