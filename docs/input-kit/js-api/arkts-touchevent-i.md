# TouchEvent

触屏输入事件。

**Inheritance:** TouchEventextends: InputEvent.

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## Modules to Import

```TypeScript
import { SourceType,ToolType,TouchEvent,FixedMode,KeyAction,Touch } from '@kit.InputKit';
```

## touches

```TypeScript
touches: Touch[]
```

所有触屏点。

**Type:** Touch[]

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## isInject

```TypeScript
isInject?: boolean
```

表示该触屏输入事件是否为注入事件。注入事件详细介绍可参考 [@ohos.multimodalInput.inputEventClient](arkts-multimodalinput-inputeventclient.md#inputEventClient)。

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.MultimodalInput.Input.Core

**System API:** This is a system API.

## sourceType

```TypeScript
sourceType: SourceType
```

触屏来源的设备类型。

**Type:** SourceType

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## touch

```TypeScript
touch: Touch
```

当前触屏点信息。

**Type:** Touch

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## action

```TypeScript
action: Action
```

触屏输入事件类型。

**Type:** Action

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## fixedMode

```TypeScript
fixedMode?: FixedMode
```

修正坐标的模式。

**Type:** FixedMode

**Since:** 19

**System capability:** SystemCapability.MultimodalInput.Input.Core

**System API:** This is a system API.

