# Rect

表示设备屏幕上的矩形区域。

**起始版本：** 9

**系统能力：** SystemCapability.Test.UiTest

## 导入模块

```TypeScript
import { ResizeDirection,WindowMode,PenMode,PenKeyOperation,Driver,MatchPattern,UiDirection,TouchOptions,ComponentEventType,PointerMatrix,WindowChangeType,Component,ON,PenKey,Rect,InputTextMode,UIEventObserver,WindowFilter,WindowChangeOptions,UiWindow,TouchPadSwipeOptions,Point,KeyOptions,DisplayRotation,UIElementInfo,PenKeyOperationOptions,ComponentEventOptions,MouseButton,On } from '@kit.TestKit';
```

## top

```TypeScript
top: int
```

组件边框左上角的Y坐标。该值为大于0的整数。 <br>单位：px

**类型：** int

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

## left

```TypeScript
left: int
```

组件边框左上角的X坐标。该值为大于0的整数。 <br>单位：px

**类型：** int

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

## bottom

```TypeScript
bottom: int
```

组件边框右下角的Y坐标。该值为大于0的整数。 <br>单位：px

**类型：** int

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

## right

```TypeScript
right: int
```

组件边框右下角的X坐标。该值为大于0的整数。 <br>单位：px

**类型：** int

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

## displayId

```TypeScript
displayId?: int
```

组件边框所属的显示ID。该值为大于或等于0的整数。 <br>默认值：设备的默认屏幕ID。

**类型：** int

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

