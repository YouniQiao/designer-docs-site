# ComponentEventOptions

描述组件操作事件监听的扩展配置， 用于指定监听流程配置和事件过滤条件。

**Since:** 22

**System capability:** SystemCapability.Test.UiTest

## Modules to Import

```TypeScript
import { ResizeDirection,WindowMode,PenMode,PenKeyOperation,Driver,MatchPattern,UiDirection,TouchOptions,ComponentEventType,PointerMatrix,WindowChangeType,Component,ON,PenKey,Rect,InputTextMode,UIEventObserver,WindowFilter,WindowChangeOptions,UiWindow,TouchPadSwipeOptions,Point,KeyOptions,DisplayRotation,UIElementInfo,PenKeyOperationOptions,ComponentEventOptions,MouseButton,On } from '@kit.TestKit';
```

## timeout

```TypeScript
timeout?: int
```

监听超时时间间隔，防止因事件通知延迟导致监听失败。 <br>取值范围：值应 >= 500 <br>默认值：10000 <br>单位：ms

**Type:** int

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

## on

```TypeScript
on?: On
```

要监听的目标组件的属性要求。默认监听所有组件。 **注意**：只能监听具有指定属性的组件。具有相对位置的组件如 **On.isBefore**、**On.isAfter**和**On.within**无法被监听。

**Type:** On

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

