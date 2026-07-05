# TouchEvent

触屏输入事件。

**继承实现关系：** TouchEvent继承自：InputEvent。

**起始版本：** 9

**系统能力：** SystemCapability.MultimodalInput.Input.Core

## 导入模块

```TypeScript
import { SourceType,ToolType,TouchEvent,FixedMode,KeyAction,Touch } from '@kit.InputKit';
```

## touches

```TypeScript
touches: Touch[]
```

所有触屏点。

**类型：** Touch[]

**起始版本：** 9

**系统能力：** SystemCapability.MultimodalInput.Input.Core

## isInject

```TypeScript
isInject?: boolean
```

表示该触屏输入事件是否为注入事件。注入事件详细介绍可参考 [@ohos.multimodalInput.inputEventClient](arkts-multimodalinput-inputeventclient.md#inputEventClient)。

**类型：** boolean

**起始版本：** 20

**系统能力：** SystemCapability.MultimodalInput.Input.Core

**系统接口：** 此接口为系统接口。

## sourceType

```TypeScript
sourceType: SourceType
```

触屏来源的设备类型。

**类型：** SourceType

**起始版本：** 9

**系统能力：** SystemCapability.MultimodalInput.Input.Core

## touch

```TypeScript
touch: Touch
```

当前触屏点信息。

**类型：** Touch

**起始版本：** 9

**系统能力：** SystemCapability.MultimodalInput.Input.Core

## action

```TypeScript
action: Action
```

触屏输入事件类型。

**类型：** Action

**起始版本：** 9

**系统能力：** SystemCapability.MultimodalInput.Input.Core

## fixedMode

```TypeScript
fixedMode?: FixedMode
```

修正坐标的模式。

**类型：** FixedMode

**起始版本：** 19

**系统能力：** SystemCapability.MultimodalInput.Input.Core

**系统接口：** 此接口为系统接口。

