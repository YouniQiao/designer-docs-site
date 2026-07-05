# AvoidArea

窗口内容的避让区域。 窗口内容做[沉浸式布局](docroot://windowmanager/window-terminology.md#沉浸式布局)适配时，需要按照 [AvoidAreaType](arkts-window-avoidareatype-e.md#AvoidAreaType)对应的AvoidArea做窗口内容避让。 在避让区域内，应用窗口内容被遮挡且无法响应用户点击事件。 > **说明：** > > 示意图展示了leftRect、topRect、rightRect、bottomRect的含义。 > > ![avoidArea](docroot://reference/apis-arkui/figures/avoidArea.png)

**Since:** 7

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## Modules to Import

```TypeScript
import { window } from '@kit.ArkUI';
```

## visible

```TypeScript
visible: boolean
```

无实际意义，暂不支持使用。

**Type:** boolean

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## topRect

```TypeScript
topRect: Rect
```

中心位于窗口的两条对角线的顶部的矩形区。

**Type:** Rect

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## leftRect

```TypeScript
leftRect: Rect
```

中心位于窗口的两条对角线的左侧的矩形区。

**Type:** Rect

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## rightRect

```TypeScript
rightRect: Rect
```

中心位于窗口的两条对角线的右侧的矩形区。

**Type:** Rect

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## bottomRect

```TypeScript
bottomRect: Rect
```

中心位于窗口的两条对角线的底部的矩形区。

**Type:** Rect

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

