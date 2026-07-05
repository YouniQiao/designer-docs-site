# KeyEvent

In the following API examples, you must first use [getKeyboardDelegate]inputMethodEngine.getKeyboardDelegate() to obtain a **KeyboardDelegate** instance, and then call the APIs using the obtained instance.

**起始版本：** 8

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## 导入模块

```TypeScript
import { inputMethodEngine } from '@kit.IMEKit';
```

## keyCode

```TypeScript
readonly keyCode: int
```

Key value. For details, see [KeyCode](../../apis-input-kit/arkts-apis/arkts-keycode-e.md#KeyCode).

**类型：** int

**起始版本：** 8

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## keyAction

```TypeScript
readonly keyAction: int
```

Key event type. - **2**: keydown event. - **3**: keyup event.

**类型：** int

**起始版本：** 8

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

