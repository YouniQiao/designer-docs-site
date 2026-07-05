# KeyEvent

In the following API examples, you must first use [getKeyboardDelegate]inputMethodEngine.getKeyboardDelegate() to obtain a **KeyboardDelegate** instance, and then call the APIs using the obtained instance.

**Since:** 8

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## Modules to Import

```TypeScript
import { inputMethodEngine } from '@kit.IMEKit';
```

## keyCode

```TypeScript
readonly keyCode: int
```

Key value. For details, see [KeyCode](../../apis-input-kit/arkts-apis/arkts-keycode-e.md#KeyCode).

**Type:** int

**Since:** 8

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## keyAction

```TypeScript
readonly keyAction: int
```

Key event type. - **2**: keydown event. - **3**: keyup event.

**Type:** int

**Since:** 8

**System capability:** SystemCapability.MiscServices.InputMethodFramework

