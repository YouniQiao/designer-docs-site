# ComponentEventOptions

Describes the extended configuration of component operation event listening, which is used to specify the listening process configuration and event filtering conditions.

**Since:** 22

**System capability:** SystemCapability.Test.UiTest

## Modules to Import

```TypeScript
import { ResizeDirection, WindowMode, PenMode, PenKeyOperation, Driver, MatchPattern, UiDirection, TouchOptions, ComponentEventType, PointerMatrix, WindowChangeType, Component, ON, PenKey, Rect, InputTextMode, UIEventObserver, WindowFilter, WindowChangeOptions, UiWindow, TouchPadSwipeOptions, Point, KeyOptions, DisplayRotation, UIElementInfo, PenKeyOperationOptions, ComponentEventOptions, MouseButton, On } from '@kit.TestKit';
```

## on

```TypeScript
on?: On
```

Attribute requirements of the target component to listen for. By default, all components are listened for. **Note**: Only components with specified attributes can be listened for. Components with relative positions such as **On.isBefore**, **On.isAfter**, and **On.within** cannot be listened for.

**Type:** On

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Test.UiTest

## timeout

```TypeScript
timeout?: number
```

Listening timeout interval , to prevent listening failures casued by event notification delay. <br>Value range: The value should be >= 500 <br>Default value: 10000 <br>Unit: ms

**Type:** number

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Test.UiTest

