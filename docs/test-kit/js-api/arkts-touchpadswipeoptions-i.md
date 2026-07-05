# TouchPadSwipeOptions

描述触控板滑动手势选项的信息。

**Since:** 18

**System capability:** SystemCapability.Test.UiTest

## Modules to Import

```TypeScript
import { ResizeDirection,WindowMode,PenMode,PenKeyOperation,Driver,MatchPattern,UiDirection,TouchOptions,ComponentEventType,PointerMatrix,WindowChangeType,Component,ON,PenKey,Rect,InputTextMode,UIEventObserver,WindowFilter,WindowChangeOptions,UiWindow,TouchPadSwipeOptions,Point,KeyOptions,DisplayRotation,UIElementInfo,PenKeyOperationOptions,ComponentEventOptions,MouseButton,On } from '@kit.TestKit';
```

## speed

```TypeScript
speed?: int
```

滑动速度。 <br>取值范围：[200, 40000] <br>单位：px/s。 <br>如果为负数则抛出错误码17000007。 <br>默认值：2000

**Type:** int

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

## stay

```TypeScript
stay?: boolean
```

滑动手势是否在触控板上停留1秒后再抬起。值**true**表示停留1秒，**false**表示不停留。 <br>默认值：false

**Type:** boolean

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

