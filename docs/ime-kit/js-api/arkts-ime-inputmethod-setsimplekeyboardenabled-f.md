# setSimpleKeyboardEnabled

## Modules to Import

```TypeScript
import { inputMethod } from '@kit.IMEKit';
```

<a id="setsimplekeyboardenabled"></a>
## setSimpleKeyboardEnabled

```TypeScript
function setSimpleKeyboardEnabled(enable: boolean): void
```

Set simple keyboard mode.

**Since:** 20

<!--Device-inputMethod-function setSimpleKeyboardEnabled(enable: boolean): void--><!--Device-inputMethod-function setSimpleKeyboardEnabled(enable: boolean): void-End-->

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | indicates enable simple keyboard or not. |

**Example**

```TypeScript
  let enable: boolean = false;
  inputMethod.setSimpleKeyboardEnabled(enable);

```

