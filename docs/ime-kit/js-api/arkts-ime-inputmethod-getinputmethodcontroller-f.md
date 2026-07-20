# getInputMethodController

## Modules to Import

```TypeScript
import { inputMethod } from '@kit.IMEKit';
```

## getInputMethodController

```TypeScript
function getInputMethodController(): InputMethodController
```

Input method controller

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [getController](arkts-ime-inputmethod-getcontroller-f.md#getcontroller-1)

<!--Device-inputMethod-function getInputMethodController(): InputMethodController--><!--Device-inputMethod-function getInputMethodController(): InputMethodController-End-->

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Return value:**

| Type | Description |
| --- | --- |
| [InputMethodController](arkts-ime-inputmethod-inputmethodcontroller-i.md) | the object of InputMethodController. |

**Example**

```TypeScript
let inputMethodController: inputMethod.InputMethodController = inputMethod.getInputMethodController();

```

