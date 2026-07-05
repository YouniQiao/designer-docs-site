# InputEvent

设备上报的基本事件。

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## Modules to Import

```TypeScript
import { InputEvent } from '@kit.InputKit';
```

## screenId

```TypeScript
screenId: int
```

目标屏幕ID。

**Type:** int

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.MultimodalInput.Input.Core

## actionTime

```TypeScript
actionTime: long
```

上报输入事件的时间，表示系统启动运行至今逝去的微秒数，单位为微秒（μs）。

**Type:** long

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.MultimodalInput.Input.Core

## id

```TypeScript
id: int
```

事件ID。

**Type:** int

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.MultimodalInput.Input.Core

## deviceId

```TypeScript
deviceId: int
```

输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。

**Type:** int

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.MultimodalInput.Input.Core

## windowId

```TypeScript
windowId: int
```

目标窗口ID。

**Type:** int

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.MultimodalInput.Input.Core

