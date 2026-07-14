# getInputMethodAbility

## Modules to Import

```TypeScript
import { inputMethodEngine } from '@kit.IMEKit';
```

## getInputMethodAbility

```TypeScript
function getInputMethodAbility(): InputMethodAbility
```

Obtains an [InputMethodAbility](arkts-ime-inputmethodability-i.md) instance for the input method. This API can be called only by an input method. The input method can use the obtained instance to subscribe to a soft keyboard display/hide request event, create/ destroy an input method panel, and the like.

**Since:** 9

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Return value:**

| Type | Description |
| --- | --- |
| InputMethodAbility | **InputMethodAbility** instance. |

**Example**

```TypeScript
let InputMethodAbility: inputMethodEngine.InputMethodAbility = inputMethodEngine.getInputMethodAbility();

```

