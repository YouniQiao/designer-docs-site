# FoldedRegionLayoutOptions

Provides the layout information of the folded state.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { HoverModeStatus, ExtraRegionPosition, OnHoverStatusChangeHandler, ExpandedRegionLayoutOptions, FoldSplitContainer, HoverModeRegionLayoutOptions, FoldedRegionLayoutOptions, PresetSplitRatio } from '@ohos.arkui.advanced.FoldSplitContainer';
```

## verticalSplitRatio

```TypeScript
verticalSplitRatio?: number
```

Height ratio between the primary and extra regions. The value range is all integers. Default value: {@link.PresetSplitRatio}.LAYOUT_1V1.

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

