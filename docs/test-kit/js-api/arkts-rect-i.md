# Rect

表示设备屏幕上的矩形区域。

**Since:** 9

**System capability:** SystemCapability.Test.UiTest

## Modules to Import

```TypeScript
import { ResizeDirection,WindowMode,PenMode,PenKeyOperation,Driver,MatchPattern,UiDirection,TouchOptions,ComponentEventType,PointerMatrix,WindowChangeType,Component,ON,PenKey,Rect,InputTextMode,UIEventObserver,WindowFilter,WindowChangeOptions,UiWindow,TouchPadSwipeOptions,Point,KeyOptions,DisplayRotation,UIElementInfo,PenKeyOperationOptions,ComponentEventOptions,MouseButton,On } from '@kit.TestKit';
```

## top

```TypeScript
top: int
```

组件边框左上角的Y坐标。该值为大于0的整数。 <br>单位：px

**Type:** int

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

## left

```TypeScript
left: int
```

组件边框左上角的X坐标。该值为大于0的整数。 <br>单位：px

**Type:** int

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

## bottom

```TypeScript
bottom: int
```

组件边框右下角的Y坐标。该值为大于0的整数。 <br>单位：px

**Type:** int

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

## right

```TypeScript
right: int
```

组件边框右下角的X坐标。该值为大于0的整数。 <br>单位：px

**Type:** int

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

## displayId

```TypeScript
displayId?: int
```

组件边框所属的显示ID。该值为大于或等于0的整数。 <br>默认值：设备的默认屏幕ID。

**Type:** int

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

