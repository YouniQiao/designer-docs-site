# KeyOptions

表示按键操作的选项。

**Since:** 26.0.0

**System capability:** SystemCapability.Test.UiTest

## Modules to Import

```TypeScript
import { ResizeDirection,WindowMode,PenMode,PenKeyOperation,Driver,MatchPattern,UiDirection,TouchOptions,ComponentEventType,PointerMatrix,WindowChangeType,Component,ON,PenKey,Rect,InputTextMode,UIEventObserver,WindowFilter,WindowChangeOptions,UiWindow,TouchPadSwipeOptions,Point,KeyOptions,DisplayRotation,UIElementInfo,PenKeyOperationOptions,ComponentEventOptions,MouseButton,On } from '@kit.TestKit';
```

## key1

```TypeScript
key1?: int
```

操作期间按下的第一个keyCode。 如果未设置，将不会注入按键事件。 仅设置key2而不设置key1将导致BusinessError 17000007。

**Type:** int

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

## key2

```TypeScript
key2?: int
```

操作期间按下的第二个KeyCode。 如果未设置，将不会注入按键事件。 仅设置key2而不设置key1将导致BusinessError 17000007。

**Type:** int

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

