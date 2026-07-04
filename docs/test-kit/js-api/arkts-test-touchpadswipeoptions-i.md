# TouchPadSwipeOptions

Describes information about the touchpad swipe gesture option.

**Since:** 18

**System capability:** SystemCapability.Test.UiTest

## Modules to Import

```TypeScript
import { ResizeDirection, WindowMode, PenMode, PenKeyOperation, Driver, MatchPattern, UiDirection, TouchOptions, ComponentEventType, PointerMatrix, WindowChangeType, Component, ON, PenKey, Rect, InputTextMode, UIEventObserver, WindowFilter, WindowChangeOptions, UiWindow, TouchPadSwipeOptions, Point, KeyOptions, DisplayRotation, UIElementInfo, PenKeyOperationOptions, ComponentEventOptions, MouseButton, On } from '@ohos.UiTest';
```

## speed

```TypeScript
speed?: number
```

Swipe speed. <br>Value range:[200, 40000] <br>Unit: px/s. <br>Throws error code 17000007 if negative. <br>Default value: 2000

**Type:** number

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Test.UiTest

## stay

```TypeScript
stay?: boolean
```

Whether the swipe gesture stays on the touchpad for 1s before it is lifted. The value **true** indicates that the swipe gesture stays on the touchpad for 1s, and **false** indicates the opposite. <br>Default value: false

**Type:** boolean

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Test.UiTest

