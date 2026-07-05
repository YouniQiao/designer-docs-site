# FingerprintEvent

指纹手势事件的类型和相对侧边指纹器件的偏移位置。

**Since:** 12

**System capability:** SystemCapability.MultimodalInput.Input.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { shortKey } from '@kit.InputKit';
```

## action

```TypeScript
action: FingerprintAction
```

指纹手势事件类型的枚举。

**Type:** FingerprintAction

**Since:** 12

**System capability:** SystemCapability.MultimodalInput.Input.Core

**System API:** This is a system API.

## distanceY

```TypeScript
distanceY: double
```

相对于侧边指纹器件长轴偏移量（正数表示向上移动，负数表示向下移动）。

**Type:** double

**Since:** 12

**System capability:** SystemCapability.MultimodalInput.Input.Core

**System API:** This is a system API.

## distanceX

```TypeScript
distanceX: double
```

相对于侧边指纹器件短轴偏移量（正数表示向右移动，负数表示向左移动）。

**Type:** double

**Since:** 12

**System capability:** SystemCapability.MultimodalInput.Input.Core

**System API:** This is a system API.

