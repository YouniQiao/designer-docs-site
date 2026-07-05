# KeyEvent

按键注入描述信息。

**Since:** 8

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { inputEventClient } from '@kit.InputKit';
```

## isPressed

```TypeScript
isPressed: boolean
```

按键是否按下。 true表示按键按下，false表示按键抬起。

**Type:** boolean

**Since:** 8

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**System API:** This is a system API.

## keyCode

```TypeScript
keyCode: int
```

按键键值。当前仅支持返回键/KEYCODE_BACK键。

**Type:** int

**Since:** 8

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**System API:** This is a system API.

## keyDownDuration

```TypeScript
keyDownDuration: int
```

按键按下持续时间，单位为微秒（μs）。

**Type:** int

**Since:** 8

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**System API:** This is a system API.

## isIntercepted

```TypeScript
isIntercepted: boolean
```

按键是否可以被拦截。 true表示可以被拦截，false表示不可被拦截。

**Type:** boolean

**Since:** 8

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**System API:** This is a system API.

