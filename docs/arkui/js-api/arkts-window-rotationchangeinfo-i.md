# RotationChangeInfo

窗口旋转变化时的窗口信息。

**Since:** 19

**System capability:** SystemCapability.Window.SessionManager

## Modules to Import

```TypeScript
import { window } from '@kit.ArkUI';
```

## orientation

```TypeScript
orientation: int
```

窗口显示方向。 - 0表示竖屏。 - 1表示反向横屏。 - 2表示反向竖屏。 - 3表示横屏。 开发者在使用时，需要注意该方向与display对象的属性orientation含义不一致。

**Type:** int

**Since:** 19

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## displayRect

```TypeScript
displayRect: Rect
```

窗口所在屏幕旋转后的矩形区域大小。

**Type:** Rect

**Since:** 19

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## displayId

```TypeScript
displayId: long
```

窗口所在屏幕Id。

**Type:** long

**Since:** 19

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## type

```TypeScript
type: RotationChangeType
```

窗口旋转事件类型。

**Type:** RotationChangeType

**Since:** 19

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

