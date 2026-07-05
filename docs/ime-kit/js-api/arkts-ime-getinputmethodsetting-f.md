# getInputMethodSetting

## Modules to Import

```TypeScript
import { inputMethod } from '@ohos.inputMethod';
```

## getInputMethodSetting

```TypeScript
function getInputMethodSetting(): InputMethodSetting
```

Input method setting

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getSetting](arkts-ime-getsetting-f.md#getsetting-1)

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Return value:**

| Type | Description |
| --- | --- |
| InputMethodSetting | the object of InputMethodSetting |

**Example**

```TypeScript
let inputMethodSetting: inputMethod.InputMethodSetting = inputMethod.getInputMethodSetting();

```

