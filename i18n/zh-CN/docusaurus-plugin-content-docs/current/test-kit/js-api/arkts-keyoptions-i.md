# KeyOptions

表示按键操作的选项。

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Test.UiTest

## 导入模块

```TypeScript
import { ResizeDirection,WindowMode,PenMode,PenKeyOperation,Driver,MatchPattern,UiDirection,TouchOptions,ComponentEventType,PointerMatrix,WindowChangeType,Component,ON,PenKey,Rect,InputTextMode,UIEventObserver,WindowFilter,WindowChangeOptions,UiWindow,TouchPadSwipeOptions,Point,KeyOptions,DisplayRotation,UIElementInfo,PenKeyOperationOptions,ComponentEventOptions,MouseButton,On } from '@kit.TestKit';
```

## key1

```TypeScript
key1?: int
```

操作期间按下的第一个keyCode。 如果未设置，将不会注入按键事件。 仅设置key2而不设置key1将导致BusinessError 17000007。

**类型：** int

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

## key2

```TypeScript
key2?: int
```

操作期间按下的第二个KeyCode。 如果未设置，将不会注入按键事件。 仅设置key2而不设置key1将导致BusinessError 17000007。

**类型：** int

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

