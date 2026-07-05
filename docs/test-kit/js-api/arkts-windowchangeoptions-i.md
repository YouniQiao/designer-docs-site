# WindowChangeOptions

描述窗口变更事件监听的扩展配置， 用于指定监听流程配置和事件过滤条件。

**Since:** 22

**System capability:** SystemCapability.Test.UiTest

## Modules to Import

```TypeScript
import { ResizeDirection,WindowMode,PenMode,PenKeyOperation,Driver,MatchPattern,UiDirection,TouchOptions,ComponentEventType,PointerMatrix,WindowChangeType,Component,ON,PenKey,Rect,InputTextMode,UIEventObserver,WindowFilter,WindowChangeOptions,UiWindow,TouchPadSwipeOptions,Point,KeyOptions,DisplayRotation,UIElementInfo,PenKeyOperationOptions,ComponentEventOptions,MouseButton,On } from '@kit.TestKit';
```

## bundleName

```TypeScript
bundleName?: string
```

要监听的窗口的包名。默认监听所有窗口。

**Type:** string

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

## timeout

```TypeScript
timeout?: int
```

监听超时时间间隔，防止因事件通知延迟导致监听失败。 <br>取值范围：值应 >= 500 <br>默认值：10000 <br>单位：ms

**Type:** int

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

