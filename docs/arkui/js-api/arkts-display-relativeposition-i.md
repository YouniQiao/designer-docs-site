# RelativePosition

相对坐标系下的坐标位置，以displayId对应的屏幕左上角为原点。

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

## Modules to Import

```TypeScript
import { display } from '@kit.ArkUI';
```

## position

```TypeScript
position: Position
```

以displayId所指定屏幕左上角为原点的坐标值。

**Type:** Position

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

## displayId

```TypeScript
displayId: long
```

相对坐标所对应的屏幕ID，仅支持整数输入，且需大于等于0。

**Type:** long

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

