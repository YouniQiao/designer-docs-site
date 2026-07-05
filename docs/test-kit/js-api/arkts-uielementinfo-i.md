# UIElementInfo

提供UI事件的信息。

**Since:** 10

**System capability:** SystemCapability.Test.UiTest

## Modules to Import

```TypeScript
import { ResizeDirection,WindowMode,PenMode,PenKeyOperation,Driver,MatchPattern,UiDirection,TouchOptions,ComponentEventType,PointerMatrix,WindowChangeType,Component,ON,PenKey,Rect,InputTextMode,UIEventObserver,WindowFilter,WindowChangeOptions,UiWindow,TouchPadSwipeOptions,Point,KeyOptions,DisplayRotation,UIElementInfo,PenKeyOperationOptions,ComponentEventOptions,MouseButton,On } from '@kit.TestKit';
```

## componentEventType

```TypeScript
readonly componentEventType?: ComponentEventType
```

组件操作事件类型。 如果不是组件操作事件，返回{@link ComponentEventType.COMPONENT_UNDEFINED}。

**Type:** ComponentEventType

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

## componentId

```TypeScript
readonly componentId?: string
```

组件ID。如果不是组件操作事件，返回空字符串。

**Type:** string

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

## componentRect

```TypeScript
readonly componentRect?: Rect
```

组件的矩形区域，如果是窗口则将rect的所有属性设为0。

**Type:** Rect

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

## windowChangeType

```TypeScript
readonly windowChangeType?: WindowChangeType
```

窗口变更事件类型。 如果不是窗口变更事件，返回{@link WindowChangeType.WINDOW_UNDEFINED}。

**Type:** WindowChangeType

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

## bundleName

```TypeScript
readonly bundleName: string
```

应用的包名。

**Type:** string

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

## text

```TypeScript
readonly text: string
```

组件或窗口的文本信息。

**Type:** string

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

## type

```TypeScript
readonly type: string
```

组件或窗口类型。

**Type:** string

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

## windowId

```TypeScript
readonly windowId?: int
```

组件所属窗口的ID。

**Type:** int

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

