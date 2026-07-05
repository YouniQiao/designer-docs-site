# TouchOptions

触摸操作的通用选项。

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Test.UiTest

## 导入模块

```TypeScript
import { ResizeDirection,WindowMode,PenMode,PenKeyOperation,Driver,MatchPattern,UiDirection,TouchOptions,ComponentEventType,PointerMatrix,WindowChangeType,Component,ON,PenKey,Rect,InputTextMode,UIEventObserver,WindowFilter,WindowChangeOptions,UiWindow,TouchPadSwipeOptions,Point,KeyOptions,DisplayRotation,UIElementInfo,PenKeyOperationOptions,ComponentEventOptions,MouseButton,On } from '@kit.TestKit';
```

## duration

```TypeScript
duration?: int
```

操作的持续时间，单位为毫秒。 <br>取值范围：值应 >= 1500 <br>单位：ms <br>默认值：1500

**类型：** int

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

## pressure

```TypeScript
pressure?: double
```

触摸压力值。 <br>取值范围：[0.0, 1.0] <br>默认值：1.0

**类型：** double

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

## speed

```TypeScript
speed?: int
```

触摸动作的速度。 <br>取值范围：[200, 40000] <br>单位：px/s。 <br>如果为负数则抛出错误码17000007。 <br>默认值：600

**类型：** int

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

