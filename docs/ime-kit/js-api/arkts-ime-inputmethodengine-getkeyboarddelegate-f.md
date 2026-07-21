# getKeyboardDelegate

## Modules to Import

```TypeScript
import { inputMethodEngine } from '@kit.IMEKit';
```

<a id="getkeyboarddelegate"></a>
## getKeyboardDelegate

```TypeScript
function getKeyboardDelegate(): KeyboardDelegate
```

Obtains a [KeyboardDelegate](arkts-ime-inputmethodengine-keyboarddelegate-i.md) instance for the input method.

The input method can use the obtained instance to subscribe to a physical keyboard event, text selection change event, and more.

**Since:** 9

<!--Device-inputMethodEngine-function getKeyboardDelegate(): KeyboardDelegate--><!--Device-inputMethodEngine-function getKeyboardDelegate(): KeyboardDelegate-End-->

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Return value:**

| Type | Description |
| --- | --- |
| [KeyboardDelegate](arkts-ime-inputmethodengine-keyboarddelegate-i.md) | **KeyboardDelegate** instance. |

**Example**

```TypeScript
let KeyboardDelegate: inputMethodEngine.KeyboardDelegate = inputMethodEngine.getKeyboardDelegate();

```

