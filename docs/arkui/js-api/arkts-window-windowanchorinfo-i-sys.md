# WindowAnchorInfo

一级子窗与主窗保持相对位置的窗口锚点参数信息。

**Since:** 24

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { window } from '@kit.ArkUI';
```

## offsetX

```TypeScript
offsetX?: int
```

一级子窗锚点与主窗锚点位置的X轴偏移量，单位为px。仅支持整数输入，浮点数向下取整，默认值为0。

**Type:** int

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## offsetY

```TypeScript
offsetY?: int
```

一级子窗锚点与主窗锚点位置的Y轴偏移量，单位为px。仅支持整数输入，浮点数向下取整，默认值为0。

**Type:** int

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

## anchorType

```TypeScript
anchorType: WindowAnchor
```

一级子窗与主窗保持相对位置不变时的窗口锚点枚举。

**Type:** WindowAnchor

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

