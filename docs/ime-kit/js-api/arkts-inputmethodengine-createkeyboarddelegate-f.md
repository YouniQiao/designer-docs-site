# createKeyboardDelegate

## createKeyboardDelegate

```TypeScript
function createKeyboardDelegate(): KeyboardDelegate
```

Obtains a [KeyboardDelegate]inputMethodEngine.KeyboardDelegate instance for the input method. The input method can use the obtained instance to subscribe to a physical keyboard event, text selection change event, and more.

**Since:** 8

**Deprecated since:** 9

**Substitute:** inputMethodEngine.getKeyboardDelegate()

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Return value:**

| Type | Description |
| --- | --- |
| KeyboardDelegate | KeyboardDelegate instance. |

**Example**

```TypeScript
let keyboardDelegate: inputMethodEngine.KeyboardDelegate = inputMethodEngine.createKeyboardDelegate();

```

