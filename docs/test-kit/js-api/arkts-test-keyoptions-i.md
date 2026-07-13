# KeyOptions

Represents the options for key operations.

**Since:** 26.0.0

**System capability:** SystemCapability.Test.UiTest

## Modules to Import

```TypeScript
import { ResizeDirection, WindowMode, PenMode, PenKeyOperation, Driver, MatchPattern, UiDirection, TouchOptions, ComponentEventType, PointerMatrix, WindowChangeType, Component, ON, PenKey, Rect, InputTextMode, UIEventObserver, WindowFilter, WindowChangeOptions, UiWindow, TouchPadSwipeOptions, Point, KeyOptions, DisplayRotation, UIElementInfo, PenKeyOperationOptions, ComponentEventOptions, MouseButton, On } from '@kit.TestKit';
```

## key1

```TypeScript
key1?: number
```

The first keyCode to press during the operation.
If not set, no key event will be injected.
Setting only key2 without key1 will result in a BusinessError 17000007.

**Type:** number

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Test.UiTest

## key2

```TypeScript
key2?: number
```

The second KeyCode to press during the operation.
If not set, no key event will be injected.
Setting only key2 without key1 will result in a BusinessError 17000007.

**Type:** number

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Test.UiTest

