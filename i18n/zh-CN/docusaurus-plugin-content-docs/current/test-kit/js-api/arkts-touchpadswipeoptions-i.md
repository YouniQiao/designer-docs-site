# TouchPadSwipeOptions

描述触控板滑动手势选项的信息。

**起始版本：** 18

**系统能力：** SystemCapability.Test.UiTest

## 导入模块

```TypeScript
import { ResizeDirection,WindowMode,PenMode,PenKeyOperation,Driver,MatchPattern,UiDirection,TouchOptions,ComponentEventType,PointerMatrix,WindowChangeType,Component,ON,PenKey,Rect,InputTextMode,UIEventObserver,WindowFilter,WindowChangeOptions,UiWindow,TouchPadSwipeOptions,Point,KeyOptions,DisplayRotation,UIElementInfo,PenKeyOperationOptions,ComponentEventOptions,MouseButton,On } from '@kit.TestKit';
```

## speed

```TypeScript
speed?: int
```

滑动速度。 <br>取值范围：[200, 40000] <br>单位：px/s。 <br>如果为负数则抛出错误码17000007。 <br>默认值：2000

**类型：** int

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

## stay

```TypeScript
stay?: boolean
```

滑动手势是否在触控板上停留1秒后再抬起。值**true**表示停留1秒，**false**表示不停留。 <br>默认值：false

**类型：** boolean

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

