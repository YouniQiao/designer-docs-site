# RotationChangeResult

应用在窗口旋转变化时返回的信息，系统会根据此信息改变当前窗口矩形区域大小。当返回主窗口旋转变化的信息时，系统不改变主窗口的大小。 应用窗口与系统窗口大小存在限制，具体限制与相关规则可见 [resize](arkts-window-window-i.md#resize)。

**Since:** 19

**System capability:** SystemCapability.Window.SessionManager

## Modules to Import

```TypeScript
import { window } from '@kit.ArkUI';
```

## windowRect

```TypeScript
windowRect: Rect
```

相对于屏幕或父窗坐标系的窗口矩形区域信息。

**Type:** Rect

**Since:** 19

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## rectType

```TypeScript
rectType: RectType
```

窗口矩形区域坐标系类型。

**Type:** RectType

**Since:** 19

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

