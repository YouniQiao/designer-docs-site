# @ohos.arkui.advanced.FoldSplitContainer

## Modules to Import

```TypeScript
import { HoverModeStatus, ExtraRegionPosition, OnHoverStatusChangeHandler, ExpandedRegionLayoutOptions, FoldSplitContainer, HoverModeRegionLayoutOptions, FoldedRegionLayoutOptions, PresetSplitRatio } from '@kit.ArkUI';
```

## Summary

### Structs

| Name | Description |
| --- | --- |
| [FoldSplitContainer](arkts-arkui-foldsplitcontainer-s.md) | **FoldSplitContainer** is a layout container designed to manage regions for two-panel and three-panelarrangements on a foldable device across various states, including the expanded state, the semi-folded state,and the folded state.&gt; **NOTE**&gt;&gt; By default, a two-panel layout is used when the window width is less than or equal to 600 vp.&gt; When the window width exceeds 600 vp, an extended area is supported alongside the top-bottom split layout.&gt; A semi-folded state layout can be triggered when the window width is greater than 600 vp and the device&gt; is in a horizontal, half-folded posture. In the semi-folded layout, visual avoidance for the screen&gt; crease area is applied, and the extended area cannot span across the crease. The extended area can also&gt; be configured not to display in the semi-folded state. |

### Interfaces

| Name | Description |
| --- | --- |
| [ExpandedRegionLayoutOptions](arkts-arkui-expandedregionlayoutoptions-i.md) | Layout information for the expanded state. |
| [FoldedRegionLayoutOptions](arkts-arkui-foldedregionlayoutoptions-i.md) | Provides the layout information of the folded state. |
| [HoverModeRegionLayoutOptions](arkts-arkui-hovermoderegionlayoutoptions-i.md) | Layout information for the semi-folded state.&gt; **NOTE**&gt;&gt; 1. In semi-folded state, the device contains an avoidance area, and layout calculations must account for&gt; the impact of this avoidance area on the overall layout.&gt; 2. In semi-folded mode, the upper screen is dedicated to content display, and the lower screen is&gt; reserved for interaction. |
| [HoverModeStatus](arkts-arkui-hovermodestatus-i.md) | Provides information about the device or application's folding, rotation, and window state. |

### Enums

| Name | Description |
| --- | --- |
| [ExtraRegionPosition](arkts-arkui-extraregionposition-e.md) | Provides the position information of the extra region. |
| [PresetSplitRatio](arkts-arkui-presetsplitratio-e.md) | Enumerates the split ratios. |

### Types

| Name | Description |
| --- | --- |
| [OnHoverStatusChangeHandler](arkts-arkui-onhoverstatuschangehandler-t.md) | Implements a handler for the **onHoverStatusChange** event. |

