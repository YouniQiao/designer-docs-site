# getCurrentInputMethod

## Modules to Import

```TypeScript
import { inputMethod } from '@ohos.inputMethod';
```

## getCurrentInputMethod

```TypeScript
function getCurrentInputMethod(): InputMethodProperty
```

Get current input method

**Since:** 9

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Return value:**

| Type | Description |
| --- | --- |
| InputMethodProperty | the property of current inputmethod. |

**Example**

```TypeScript
let currentIme: inputMethod.InputMethodProperty = inputMethod.getCurrentInputMethod();

```

