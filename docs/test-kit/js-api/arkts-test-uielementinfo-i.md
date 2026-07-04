# UIElementInfo

Provides information about the UI event.

**Since:** 10

**System capability:** SystemCapability.Test.UiTest

## Modules to Import

```TypeScript
import { ResizeDirection, WindowMode, PenMode, PenKeyOperation, Driver, MatchPattern, UiDirection, TouchOptions, ComponentEventType, PointerMatrix, WindowChangeType, Component, ON, PenKey, Rect, InputTextMode, UIEventObserver, WindowFilter, WindowChangeOptions, UiWindow, TouchPadSwipeOptions, Point, KeyOptions, DisplayRotation, UIElementInfo, PenKeyOperationOptions, ComponentEventOptions, MouseButton, On } from '@ohos.UiTest';
```

## bundleName

```TypeScript
readonly bundleName: string
```

Bundle name of the application.

**Type:** string

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

## componentEventType

```TypeScript
readonly componentEventType?: ComponentEventType
```

Component operation event type. If it is not a component operation event, {@link ComponentEventType.COMPONENT_UNDEFINED} is returned.

**Type:** ComponentEventType

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Test.UiTest

## componentId

```TypeScript
readonly componentId?: string
```

Component ID. If it is not a component operation event, an empty string is returned.

**Type:** string

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Test.UiTest

## componentRect

```TypeScript
readonly componentRect?: Rect
```

The rect of the component, set all attributes of rect to 0 if it's a window.

**Type:** Rect

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Test.UiTest

## text

```TypeScript
readonly text: string
```

Text information of the component or window.

**Type:** string

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

## type

```TypeScript
readonly type: string
```

Component or window type.

**Type:** string

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Test.UiTest

## windowChangeType

```TypeScript
readonly windowChangeType?: WindowChangeType
```

Window change event type. If the event is not a window change event, {@link WindowChangeType.WINDOW_UNDEFINED} is returned.

**Type:** WindowChangeType

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Test.UiTest

## windowId

```TypeScript
readonly windowId?: number
```

ID of the window where the component belongs.

**Type:** number

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Test.UiTest

