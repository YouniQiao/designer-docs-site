# KeyEvent

In the following API examples, you must first use [getKeyboardDelegate](arkts-ime-inputmethodengine-getkeyboarddelegate-f.md#getkeyboarddelegate-1) to obtain a **KeyboardDelegate** instance, and then call the APIs using the obtained instance.

**Since:** 8

<!--Device-inputMethodEngine-interface KeyEvent--><!--Device-inputMethodEngine-interface KeyEvent-End-->

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## Modules to Import

```TypeScript
import { inputMethodEngine } from '@kit.IMEKit';
```

## keyAction

```TypeScript
readonly keyAction: number
```

Key event type.

- **2**: keydown event.  
- **3**: keyup event.

**Type:** number

**Since:** 8

<!--Device-KeyEvent-readonly keyAction: int--><!--Device-KeyEvent-readonly keyAction: int-End-->

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## keyCode

```TypeScript
readonly keyCode: number
```

Key value. For details, see [KeyCode](../../apis-input-kit/arkts-apis/arkts-input-multimodalinput-keycode-keycode-e.md).

**Type:** number

**Since:** 8

<!--Device-KeyEvent-readonly keyCode: int--><!--Device-KeyEvent-readonly keyCode: int-End-->

**System capability:** SystemCapability.MiscServices.InputMethodFramework

