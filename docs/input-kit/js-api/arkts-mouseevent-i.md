# MouseEvent

鼠标事件。

**Inheritance:** MouseEventextends: InputEvent.

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## Modules to Import

```TypeScript
import { MouseAction,AxisValue,MouseEvent,Button,MouseToolType,Axis } from '@kit.InputKit';
```

## globalY

```TypeScript
globalY?: int
```

该鼠标事件以主屏左上角为原点的全局坐标系的Y坐标，单位为像素（px）。<!--Del-->作为入参时，若接口参数中的 [MouseEventData.useGlobalCoordinate](arkts-inputeventclient-mouseeventdata-i-sys.md#MouseEventData)为 true，该值必填，当前仅支持整数。若为false，该值无需填写，使用指定屏幕左上角为原点的相对坐标系的Y坐标计算注入事件。<!--DelEnd-->作为出参时，由系统上报。

**Type:** int

**Since:** 20

**System capability:** SystemCapability.MultimodalInput.Input.Core

## globalX

```TypeScript
globalX?: int
```

该鼠标事件以主屏左上角为原点的全局坐标系的X坐标，单位为像素（px）。<!--Del-->作为入参时，若接口参数中的 [MouseEventData.useGlobalCoordinate](arkts-inputeventclient-mouseeventdata-i-sys.md#MouseEventData)为 true，该值必填，当前仅支持整数。若为false，该值无需填写，使用指定屏幕左上角为原点的相对坐标系的X坐标计算注入事件。<!--DelEnd-->作为出参时，由系统上报。

**Type:** int

**Since:** 20

**System capability:** SystemCapability.MultimodalInput.Input.Core

## pressedKeys

```TypeScript
pressedKeys: KeyCode[]
```

当前处于按下状态的键值列表。

**Type:** KeyCode[]

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## capsLock

```TypeScript
capsLock: boolean
```

当前capsLock是否处于使能状态。 true表示使能状态，false表示处于未使能状态。

**Type:** boolean

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## windowY

```TypeScript
windowY: int
```

鼠标所在窗口左上角为原点的相对坐标系的Y坐标。当前仅支持整数，单位为像素（px）。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## fnKey

```TypeScript
fnKey: boolean
```

当前fnKey是否处于按下状态。 true表示处于按下状态，false表示处于抬起状态。

**Type:** boolean

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## ctrlKey

```TypeScript
ctrlKey: boolean
```

当前ctrlKey是否处于按下状态。 true表示处于按下状态，false表示处于抬起状态。

**Type:** boolean

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## windowX

```TypeScript
windowX: int
```

鼠标所在窗口左上角为原点的相对坐标系的X坐标。当前仅支持整数，单位为像素（px）。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## axes

```TypeScript
axes: AxisValue[]
```

鼠标轴类型和轴的值。

**Type:** AxisValue[]

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## numLock

```TypeScript
numLock: boolean
```

当前numLock是否处于使能状态。 true表示使能状态，false表示处于未使能状态。

**Type:** boolean

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## toolType

```TypeScript
toolType: ToolType
```

工具类型。

**Type:** ToolType

**Since:** 11

**System capability:** SystemCapability.MultimodalInput.Input.Core

## button

```TypeScript
button: Button
```

鼠标按键。

**Type:** Button

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## shiftKey

```TypeScript
shiftKey: boolean
```

当前shiftKey是否处于按下状态。 true表示处于按下状态，false表示处于抬起状态。

**Type:** boolean

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## rawDeltaX

```TypeScript
rawDeltaX: int
```

鼠标当前事件相对于上次事件的X坐标偏移值。当前仅支持整数，单位为像素（px）。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## rawDeltaY

```TypeScript
rawDeltaY: int
```

鼠标当前事件相对于上次事件的Y坐标偏移值。当前仅支持整数，单位为像素（px）。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## scrollLock

```TypeScript
scrollLock: boolean
```

当前scrollLock是否处于使能状态。 true表示使能状态，false表示处于未使能状态。

**Type:** boolean

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## action

```TypeScript
action: Action
```

鼠标事件类型。

**Type:** Action

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## altKey

```TypeScript
altKey: boolean
```

当前altKey是否处于按下状态。 true表示处于按下状态，false表示处于抬起状态。

**Type:** boolean

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## logoKey

```TypeScript
logoKey: boolean
```

当前logoKey是否处于按下状态。 true表示处于按下状态，false表示处于抬起状态。

**Type:** boolean

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## pressedButtons

```TypeScript
pressedButtons: Button[]
```

当前处于按下状态的鼠标按键。

**Type:** Button[]

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## screenX

```TypeScript
screenX: int
```

该鼠标事件以指定屏幕左上角为原点的相对坐标系的X坐标。当前仅支持整数，单位为像素（px）。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## screenY

```TypeScript
screenY: int
```

该鼠标事件以指定屏幕左上角为原点的相对坐标系的Y坐标。当前仅支持整数，单位为像素（px）。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

