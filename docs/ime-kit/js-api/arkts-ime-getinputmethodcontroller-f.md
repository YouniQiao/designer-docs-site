# getInputMethodController

## Modules to Import

```TypeScript
import { inputMethod } from '@ohos.inputMethod';
```

## getInputMethodController

```TypeScript
function getInputMethodController(): InputMethodController
```

Input method controller

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [getController](arkts-ime-getcontroller-f.md#getcontroller-1)

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Return value:**

| Type | Description |
| --- | --- |
| InputMethodController | the object of InputMethodController. |

**Example**

```TypeScript
let inputMethodController: inputMethod.InputMethodController = inputMethod.getInputMethodController();

```

