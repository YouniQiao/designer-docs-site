---
last_update:
  date: 2026-07-04
---

# getWindow

## Modules to Import

```TypeScript
import { featureAbility } from '@ohos.ability.featureAbility';
```

## getWindow

```TypeScript
function getWindow(callback: AsyncCallback<window.Window>): void
```

Obtains the window corresponding to the current ability.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;window.Window&gt; | Yes | Returns the window corresponding to the current abilityin the form of callback. |

**Example**

```TypeScript
import { featureAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

featureAbility.getWindow((error: BusinessError, data: window.Window) => {
  if (error && error.code !== 0) {
    console.error(`getWindow fail, error: ${JSON.stringify(error)}`);
  } else {
    console.info(`getWindow success, data: ${typeof(data)}`);
  }
});

```


## getWindow

```TypeScript
function getWindow(): Promise<window.Window>
```

Obtains the window corresponding to the current ability.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;window.Window&gt; | Returns the window corresponding to the current ability. |

**Example**

```TypeScript
import { featureAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

featureAbility.getWindow().then((data: window.Window) => {
  console.info(`getWindow success, data: ${typeof(data)}`);
}).catch((error: BusinessError)=>{
  console.error(`getWindow fail, error: ${JSON.stringify(error)}`);
});

```

