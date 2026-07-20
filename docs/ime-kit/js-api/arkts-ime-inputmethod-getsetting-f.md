# getSetting

## Modules to Import

```TypeScript
import { inputMethod } from '@kit.IMEKit';
```

## getSetting

```TypeScript
function getSetting(): InputMethodSetting
```

Input method setting

**Since:** 9

<!--Device-inputMethod-function getSetting(): InputMethodSetting--><!--Device-inputMethod-function getSetting(): InputMethodSetting-End-->

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Return value:**

| Type | Description |
| --- | --- |
| [InputMethodSetting](arkts-ime-inputmethod-inputmethodsetting-i.md) | the object of InputMethodSetting. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [12800007](../errorcode-inputmethod-framework.md#12800007-input-method-setter-error) | input method setter error. Possible cause:create InputMethodSetting object failed. |

**Example**

```TypeScript
let inputMethodSetting: inputMethod.InputMethodSetting = inputMethod.getSetting();

```

