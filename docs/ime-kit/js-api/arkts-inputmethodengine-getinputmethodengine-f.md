# getInputMethodEngine

## getInputMethodEngine

```TypeScript
function getInputMethodEngine(): InputMethodEngine
```

Obtains an [InputMethodEngine]inputMethodEngine.InputMethodEngine instance for the input method. The input method can use the obtained instance to subscribe to a soft keyboard display/hide request event.

**Since:** 8

**Deprecated since:** 9

**Substitute:** inputMethodEngine.getInputMethodAbility()

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Return value:**

| Type | Description |
| --- | --- |
| InputMethodEngine | InputMethodAbility instance. |

**Example**

```TypeScript
let InputMethodEngine: inputMethodEngine.InputMethodEngine = inputMethodEngine.getInputMethodEngine();

```

