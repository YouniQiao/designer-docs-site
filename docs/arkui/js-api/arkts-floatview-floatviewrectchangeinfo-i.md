# FloatViewRectChangeInfo

标准悬浮窗矩形区域变化信息。

**Since:** 26.0.0

**System capability:** SystemCapability.Window.SessionManager

## Modules to Import

```TypeScript
import { floatView } from '@kit.ArkUI';
```

## reason

```TypeScript
reason: string
```

标准悬浮窗矩形区域变化的原因。原因和对应含义如下： "POSITION_CHANGE"：位置变化 "SIZE_CHANGE"：大小变化 "RECT_CHANGE"：位置大小同时变化

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

## windowRect

```TypeScript
windowRect: window.Rect
```

标准悬浮窗窗口矩形区域。

**Type:** window.Rect

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

## windowScale

```TypeScript
windowScale: double
```

标准悬浮窗窗口缩放比例。

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

