# Point

表示设备屏幕上的坐标点。

**起始版本：** 9

**系统能力：** SystemCapability.Test.UiTest

## 导入模块

```TypeScript
import { ResizeDirection,WindowMode,PenMode,PenKeyOperation,Driver,MatchPattern,UiDirection,TouchOptions,ComponentEventType,PointerMatrix,WindowChangeType,Component,ON,PenKey,Rect,InputTextMode,UIEventObserver,WindowFilter,WindowChangeOptions,UiWindow,TouchPadSwipeOptions,Point,KeyOptions,DisplayRotation,UIElementInfo,PenKeyOperationOptions,ComponentEventOptions,MouseButton,On } from '@kit.TestKit';
```

## x

```TypeScript
x: int
```

坐标点的水平坐标。该值为大于0的整数。

**类型：** int

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

## y

```TypeScript
y: int
```

坐标点的垂直坐标。该值为大于0的整数。

**类型：** int

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

## displayId

```TypeScript
displayId?: int
```

坐标点所属的显示ID。该值为大于或等于0的整数。默认值为设备的默认屏幕ID。

**类型：** int

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

