# getCurrentInputMethodSubtype

## Modules to Import

```TypeScript
import { inputMethod } from '@kit.IMEKit';
```

## getCurrentInputMethodSubtype

```TypeScript
function getCurrentInputMethodSubtype(): InputMethodSubtype
```

Get the current input method subtype

**Since:** 9

<!--Device-inputMethod-function getCurrentInputMethodSubtype(): InputMethodSubtype--><!--Device-inputMethod-function getCurrentInputMethodSubtype(): InputMethodSubtype-End-->

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Return value:**

| Type | Description |
| --- | --- |
| [InputMethodSubtype](arkts-ime-inputmethodsubtype-i.md) | the subtype of the current input method. |

**Example**

```TypeScript
import { InputMethodSubtype } from '@kit.IMEKit';

let currentImeSubType: InputMethodSubtype = inputMethod.getCurrentInputMethodSubtype();

```

