# CutoutInfo

挖孔屏、刘海屏、瀑布屏等不可用屏幕区域信息。

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## Modules to Import

```TypeScript
import { display } from '@kit.ArkUI';
```

## boundingRects

```TypeScript
readonly boundingRects: Array<Rect>
```

挖孔、刘海等区域的边界矩形。如果没有挖孔、刘海等区域，数组返回为空。

**Type:** Array<Rect>

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## waterfallDisplayAreaRects

```TypeScript
readonly waterfallDisplayAreaRects: WaterfallDisplayAreaRects
```

瀑布屏曲面部分显示区域。

**Type:** WaterfallDisplayAreaRects

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

