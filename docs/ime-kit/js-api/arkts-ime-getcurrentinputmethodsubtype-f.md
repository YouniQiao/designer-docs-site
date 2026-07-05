# getCurrentInputMethodSubtype

## Modules to Import

```TypeScript
import { inputMethod } from '@ohos.inputMethod';
```

## getCurrentInputMethodSubtype

```TypeScript
function getCurrentInputMethodSubtype(): InputMethodSubtype
```

Get the current input method subtype

**Since:** 9

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Return value:**

| Type | Description |
| --- | --- |
| InputMethodSubtype | the subtype of the current input method. |

**Example**

```TypeScript
import { InputMethodSubtype } from '@kit.IMEKit';

let currentImeSubType: InputMethodSubtype = inputMethod.getCurrentInputMethodSubtype();

```

