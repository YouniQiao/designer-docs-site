# WindowInfo (System API)

Describes the window information.

**Since:** 18

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { window } from '@kit.ArkUI';
```

## displayId

```TypeScript
displayId?: number
```

Indicates the ID of the display where the window is located.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Window.SessionManager

## globalDisplayRect

```TypeScript
globalDisplayRect?: Rect
```

Window size in the global coordinate system. In extended screen scenarios, the top-left corner of the primary
screen is used as the coordinate origin. In virtual screen scenarios, the top-left corner of the virtual screen
is used as the coordinate origin. The default value is [0, 0, 0, 0].

**Type:** Rect

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

## globalRect

```TypeScript
globalRect?: Rect
```

Indicates the actual display size and position of the window.

**Type:** Rect

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Window.SessionManager

