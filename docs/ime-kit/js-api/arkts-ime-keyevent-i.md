# KeyEvent

In the following API examples, you must first use [getKeyboardDelegate](arkts-ime-getkeyboarddelegate-f.md#getkeyboarddelegate-1) to obtain a **KeyboardDelegate** instance, and then call the APIs using the obtained instance.

**Since:** 8

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## Modules to Import

```TypeScript
import { inputMethodEngine } from '@ohos.inputMethodEngine';
```

## keyAction

```TypeScript
readonly keyAction: number
```

Key event type. - **2**: keydown event. - **3**: keyup event.

**Type:** number

**Since:** 8

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## keyCode

```TypeScript
readonly keyCode: number
```

Key value. For details, see [KeyCode](../../apis-input-kit/arkts-apis/arkts-input-keycode-e.md#keycode).

**Type:** number

**Since:** 8

**System capability:** SystemCapability.MiscServices.InputMethodFramework

