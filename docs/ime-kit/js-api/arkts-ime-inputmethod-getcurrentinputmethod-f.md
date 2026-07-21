# getCurrentInputMethod

## Modules to Import

```TypeScript
import { inputMethod } from '@kit.IMEKit';
```

<a id="getcurrentinputmethod"></a>
## getCurrentInputMethod

```TypeScript
function getCurrentInputMethod(): InputMethodProperty
```

Get current input method

**Since:** 9

<!--Device-inputMethod-function getCurrentInputMethod(): InputMethodProperty--><!--Device-inputMethod-function getCurrentInputMethod(): InputMethodProperty-End-->

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Return value:**

| Type | Description |
| --- | --- |
| [InputMethodProperty](arkts-ime-inputmethod-inputmethodproperty-i.md) | the property of current inputmethod. |

**Example**

```TypeScript
let currentIme: inputMethod.InputMethodProperty = inputMethod.getCurrentInputMethod();

```

