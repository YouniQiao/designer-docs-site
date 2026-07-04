---
last_update:
  date: 2026-07-04
---

# hasWindowFocus

## Modules to Import

```TypeScript
import { featureAbility } from '@ohos.ability.featureAbility';
```

## hasWindowFocus

```TypeScript
function hasWindowFocus(callback: AsyncCallback<boolean>): void
```

Checks whether the main window of this ability has window focus.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Returns the result in the form of callback.If this ability currentlyhas window focus,return true otherwise,return false. |

**Example**

```TypeScript
import { featureAbility } from '@kit.AbilityKit';

featureAbility.hasWindowFocus((error, data) => {
  if (error && error.code !== 0) {
    console.error(`hasWindowFocus fail, error: ${JSON.stringify(error)}`);
  } else {
    console.info(`hasWindowFocus success, data: ${JSON.stringify(data)}`);
  }
});

```


## hasWindowFocus

```TypeScript
function hasWindowFocus(): Promise<boolean>
```

Checks whether the main window of this ability has window focus.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Returns {@code true} if this ability currently has window focus;returns {@code false} otherwise. |

**Example**

```TypeScript
import { featureAbility } from '@kit.AbilityKit';

featureAbility.hasWindowFocus().then((data) => {
  console.info(`hasWindowFocus data: ${JSON.stringify(data)}`);
});

```

