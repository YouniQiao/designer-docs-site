# Key

按键。

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.Core

## Modules to Import

```TypeScript
import { KeyEvent,Action,Key } from '@kit.InputKit';
```

## code

```TypeScript
code: KeyCode
```

键值。

**Type:** KeyCode

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.MultimodalInput.Input.Core

## pressedTime

```TypeScript
pressedTime: long
```

按键按下时间，表示系统启动运行至今逝去的微秒数，单位为微秒（μs）。

**Type:** long

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

