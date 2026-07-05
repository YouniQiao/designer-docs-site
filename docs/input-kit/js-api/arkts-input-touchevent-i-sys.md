# TouchEvent

Defines a touch event.

**Inheritance/Implementation:** TouchEvent extends [InputEvent](arkts-input-inputevent-i.md#inputevent)

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## Modules to Import

```TypeScript
import { SourceType, ToolType, TouchEvent, FixedMode, KeyAction, Touch } from '@ohos.multimodalInput.touchEvent';
```

## fixedMode

```TypeScript
fixedMode?: FixedMode
```

Coordinate correction mode.

**Type:** FixedMode

**Since:** 19

**System capability:** SystemCapability.MultimodalInput.Input.Core

**System API:** This is a system API.

## isInject

```TypeScript
isInject?: boolean
```

Whether the touch event is an injection event. For details about injection events, see [@ohos.multimodalInput.inputEventClient](arkts-multimodalinput-inputeventclient.md#inputeventclient).

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.MultimodalInput.Input.Core

**System API:** This is a system API.

