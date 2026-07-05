# WindowChangeOptions

描述窗口变更事件监听的扩展配置， 用于指定监听流程配置和事件过滤条件。

**起始版本：** 22

**系统能力：** SystemCapability.Test.UiTest

## 导入模块

```TypeScript
import { ResizeDirection,WindowMode,PenMode,PenKeyOperation,Driver,MatchPattern,UiDirection,TouchOptions,ComponentEventType,PointerMatrix,WindowChangeType,Component,ON,PenKey,Rect,InputTextMode,UIEventObserver,WindowFilter,WindowChangeOptions,UiWindow,TouchPadSwipeOptions,Point,KeyOptions,DisplayRotation,UIElementInfo,PenKeyOperationOptions,ComponentEventOptions,MouseButton,On } from '@kit.TestKit';
```

## bundleName

```TypeScript
bundleName?: string
```

要监听的窗口的包名。默认监听所有窗口。

**类型：** string

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

## timeout

```TypeScript
timeout?: int
```

监听超时时间间隔，防止因事件通知延迟导致监听失败。 <br>取值范围：值应 >= 500 <br>默认值：10000 <br>单位：ms

**类型：** int

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

