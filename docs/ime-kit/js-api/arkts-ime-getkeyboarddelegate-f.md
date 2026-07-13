# getKeyboardDelegate

## Modules to Import

```TypeScript
import { inputMethodEngine } from '@kit.IMEKit';
```

## getKeyboardDelegate

```TypeScript
function getKeyboardDelegate(): KeyboardDelegate
```

Obtains a [KeyboardDelegate](arkts-ime-keyboarddelegate-i.md) instance for the input method.

The input method can use the obtained instance to subscribe to a physical keyboard event, text selection change
event, and more.

**Since:** 9

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Return value:**

| Type | Description |
| --- | --- |
| KeyboardDelegate | **KeyboardDelegate** instance. |

**Example**

```TypeScript
let KeyboardDelegate: inputMethodEngine.KeyboardDelegate = inputMethodEngine.getKeyboardDelegate();

```

