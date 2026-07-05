# WindowLayoutInfo

窗口布局信息。

**Since:** 15

**System capability:** SystemCapability.Window.SessionManager

## Modules to Import

```TypeScript
import { window } from '@kit.ArkUI';
```

## windowRect

```TypeScript
windowRect: Rect
```

窗口尺寸，窗口在屏幕上的实际位置和大小。

**Type:** Rect

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## windowAlpha

```TypeScript
windowAlpha?: double
```

窗口透明度。有效值范围为[0.0, 1.0]，0.0表示完全透明，1.0表示完全不透明。默认值是-1.0，表示未查询到窗口透明度或者查询失败。

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

