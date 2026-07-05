# Point

表示设备屏幕上的坐标点。

**Since:** 9

**System capability:** SystemCapability.Test.UiTest

## Modules to Import

```TypeScript
import { ResizeDirection,WindowMode,PenMode,PenKeyOperation,Driver,MatchPattern,UiDirection,TouchOptions,ComponentEventType,PointerMatrix,WindowChangeType,Component,ON,PenKey,Rect,InputTextMode,UIEventObserver,WindowFilter,WindowChangeOptions,UiWindow,TouchPadSwipeOptions,Point,KeyOptions,DisplayRotation,UIElementInfo,PenKeyOperationOptions,ComponentEventOptions,MouseButton,On } from '@kit.TestKit';
```

## x

```TypeScript
x: int
```

坐标点的水平坐标。该值为大于0的整数。

**Type:** int

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

## y

```TypeScript
y: int
```

坐标点的垂直坐标。该值为大于0的整数。

**Type:** int

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

## displayId

```TypeScript
displayId?: int
```

坐标点所属的显示ID。该值为大于或等于0的整数。默认值为设备的默认屏幕ID。

**Type:** int

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

