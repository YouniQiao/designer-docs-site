# WindowChangeOptions

Describes the extended configuration of window change event listening, which is used to specify the listening process configuration and event filtering conditions.

**Since:** 22

**System capability:** SystemCapability.Test.UiTest

## Modules to Import

```TypeScript
import { ResizeDirection, WindowMode, PenMode, PenKeyOperation, Driver, MatchPattern, UiDirection, TouchOptions, ComponentEventType, PointerMatrix, WindowChangeType, Component, ON, PenKey, Rect, InputTextMode, UIEventObserver, WindowFilter, WindowChangeOptions, UiWindow, TouchPadSwipeOptions, Point, KeyOptions, DisplayRotation, UIElementInfo, PenKeyOperationOptions, ComponentEventOptions, MouseButton, On } from '@ohos.UiTest';
```

## bundleName

```TypeScript
bundleName?: string
```

Bundle name of the window to be listened for. By default, all windows are listened for.

**Type:** string

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Test.UiTest

## timeout

```TypeScript
timeout?: number
```

Listening timeout interval, to prevent listening failures caused by event notification delay. <br>Value range: The value should be >= 500 <br>Default value: 10000 <br>Unit: ms

**Type:** number

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Test.UiTest

