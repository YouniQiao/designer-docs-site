# InputTextMode

Describes the text input mode.

**Since:** 20

**System capability:** SystemCapability.Test.UiTest

## Modules to Import

```TypeScript
import { ResizeDirection, WindowMode, PenMode, PenKeyOperation, Driver, MatchPattern, UiDirection, TouchOptions, ComponentEventType, PointerMatrix, WindowChangeType, Component, ON, PenKey, Rect, InputTextMode, UIEventObserver, WindowFilter, WindowChangeOptions, UiWindow, TouchPadSwipeOptions, Point, KeyOptions, DisplayRotation, UIElementInfo, PenKeyOperationOptions, ComponentEventOptions, MouseButton, On } from '@kit.TestKit';
```

## addition

```TypeScript
addition?: boolean
```

Whether to input text in addition mode. The value **true** means to input text in addition mode, and **false** means the opposite. Default value: **false**

**Type:** boolean

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Test.UiTest

## paste

```TypeScript
paste?: boolean
```

Whether to copy and paste text. The value **true** means to copy and paste text, and **false** means to type text. Default value: **false** **Note**: If the input text contains Chinese characters, special characters, or the text length exceeds 200 characters, the text is copied and pasted regardless of the value of this parameter.

**Type:** boolean

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Test.UiTest

