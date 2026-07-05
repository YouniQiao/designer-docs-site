# WindowFilter

提供此窗口的标志属性。

**起始版本：** 9

**系统能力：** SystemCapability.Test.UiTest

## 导入模块

```TypeScript
import { ResizeDirection,WindowMode,PenMode,PenKeyOperation,Driver,MatchPattern,UiDirection,TouchOptions,ComponentEventType,PointerMatrix,WindowChangeType,Component,ON,PenKey,Rect,InputTextMode,UIEventObserver,WindowFilter,WindowChangeOptions,UiWindow,TouchPadSwipeOptions,Point,KeyOptions,DisplayRotation,UIElementInfo,PenKeyOperationOptions,ComponentEventOptions,MouseButton,On } from '@kit.TestKit';
```

## focused

```TypeScript
focused?: boolean
```

窗口是否已聚焦。值**true**表示窗口已聚焦，**false**表示未聚焦。默认值为**false**。

**类型：** boolean

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

## active

```TypeScript
active?: boolean
```

窗口是否正在与用户交互。值**true**表示窗口正在与用户交互，**false**表示未交互。

**类型：** boolean

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

## bundleName

```TypeScript
bundleName?: string
```

窗口所属应用的包名。默认值为空。

**类型：** string

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

## displayId

```TypeScript
displayId?: int
```

窗口所属的显示ID。该值为大于或等于0的整数。默认值为设备的默认屏幕ID。

**类型：** int

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

## title

```TypeScript
title?: string
```

窗口标题。默认值为空。

**类型：** string

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Test.UiTest

## actived

```TypeScript
actived?: boolean
```

窗口是否正在与用户交互。值**true**表示窗口正在与用户交互，**false**表示未交互。 该API自API版本11起废弃。建议使用**active** API替代。

**类型：** boolean

**起始版本：** 9

**废弃版本：** 11

**替代接口：** ohos.UiTest.WindowFilter#active

**系统能力：** SystemCapability.Test.UiTest

