# @ohos.arkui.advanced.FoldSplitContainer

## 导入模块

```TypeScript
import { HoverModeStatus,ExtraRegionPosition,OnHoverStatusChangeHandler,ExpandedRegionLayoutOptions,FoldSplitContainer,HoverModeRegionLayoutOptions,FoldedRegionLayoutOptions,PresetSplitRatio } from '@kit.ArkUI';
```

## 汇总

### 接口

| 名称 | 描述 |
| --- | --- |
| [ExpandedRegionLayoutOptions](arkts-expandedregionlayoutoptions-i.md) | Layout information for the expanded state. |
| [FoldedRegionLayoutOptions](arkts-foldedregionlayoutoptions-i.md) | Provides the layout information of the folded state. |
| [HoverModeRegionLayoutOptions](arkts-hovermoderegionlayoutoptions-i.md) | Layout information for the semi-folded state. > **NOTE** > > 1. In semi-folded state, the device contains an avoidance area, and layout calculations must account for > the impact of this avoidance area on the overall layout. > 2. In semi-folded mode, the upper screen is dedicated to content display, and the lower screen is > reserved for interaction. |
| [HoverModeStatus](arkts-hovermodestatus-i.md) | Provides information about the device or application's folding, rotation, and window state. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [ExtraRegionPosition](arkts-extraregionposition-e.md) | Provides the position information of the extra region. |
| [PresetSplitRatio](arkts-presetsplitratio-e.md) | Enumerates the split ratios. |

### 类型

| 名称 | 描述 |
| --- | --- |
| [OnHoverStatusChangeHandler](arkts-onhoverstatuschangehandler-t.md) | Implements a handler for the **onHoverStatusChange** event. |

