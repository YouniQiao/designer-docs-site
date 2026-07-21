# FoldSplitContainer

**FoldSplitContainer** is a layout container designed to manage regions for two-panel and three-panel arrangements on a foldable device across various states, including the expanded state, the semi-folded state,and the folded state.

> **NOTE**  
>  
> By default, a two-panel layout is used when the window width is less than or equal to 600 vp.  
> When the window width exceeds 600 vp, an extended area is supported alongside the top-bottom split layout.  
> A semi-folded state layout can be triggered when the window width is greater than 600 vp and the device  
> is in a horizontal, half-folded posture. In the semi-folded layout, visual avoidance for the screen  
> crease area is applied, and the extended area cannot span across the crease. The extended area can also  
> be configured not to display in the semi-folded state.

**Since:** 12

**Decorator:** @Component

<!--Device-unnamed-export declare struct FoldSplitContainer--><!--Device-unnamed-export declare struct FoldSplitContainer-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { HoverModeStatus, ExtraRegionPosition, OnHoverStatusChangeHandler, ExpandedRegionLayoutOptions, FoldSplitContainer, HoverModeRegionLayoutOptions, FoldedRegionLayoutOptions, PresetSplitRatio } from '@kit.ArkUI';
```

## animationOptions

```TypeScript
animationOptions?: AnimateParam | null
```

Animation settings. The value **null** indicates that the animation is disabled.

**Type:** AnimateParam \| null

**Since:** 12

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FoldSplitContainer-animationOptions?: AnimateParam | null--><!--Device-FoldSplitContainer-animationOptions?: AnimateParam | null-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## expandedLayoutOptions

```TypeScript
expandedLayoutOptions: ExpandedRegionLayoutOptions
```

Layout information for the expanded state.

**Type:** ExpandedRegionLayoutOptions

**Since:** 12

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FoldSplitContainer-expandedLayoutOptions: ExpandedRegionLayoutOptions--><!--Device-FoldSplitContainer-expandedLayoutOptions: ExpandedRegionLayoutOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## extra

```TypeScript
extra?: Callback<void>
```

Callback function for the extra region. If this parameter is not provided,there is no corresponding region.

**Type:** Callback&lt;void&gt;

**Since:** 12

**Decorator:** @BuilderParam

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FoldSplitContainer-extra?: Callback<void>--><!--Device-FoldSplitContainer-extra?: Callback<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## foldedLayoutOptions

```TypeScript
foldedLayoutOptions: FoldedRegionLayoutOptions
```

Layout information for the folded state.

**Type:** FoldedRegionLayoutOptions

**Since:** 12

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FoldSplitContainer-foldedLayoutOptions: FoldedRegionLayoutOptions--><!--Device-FoldSplitContainer-foldedLayoutOptions: FoldedRegionLayoutOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## hoverModeLayoutOptions

```TypeScript
hoverModeLayoutOptions: HoverModeRegionLayoutOptions
```

Layout information for the semi-folded state.

**Type:** HoverModeRegionLayoutOptions

**Since:** 12

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FoldSplitContainer-hoverModeLayoutOptions: HoverModeRegionLayoutOptions--><!--Device-FoldSplitContainer-hoverModeLayoutOptions: HoverModeRegionLayoutOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onHoverStatusChange

```TypeScript
onHoverStatusChange?: OnHoverStatusChangeHandler
```

Callback function triggered when the foldable device enters or exits the semi-folded state.

**Type:** OnHoverStatusChangeHandler

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FoldSplitContainer-onHoverStatusChange?: OnHoverStatusChangeHandler--><!--Device-FoldSplitContainer-onHoverStatusChange?: OnHoverStatusChangeHandler-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## primary

```TypeScript
primary: Callback<void>
```

Callback function for the primary region.

**Type:** Callback&lt;void&gt;

**Since:** 12

**Decorator:** @BuilderParam

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FoldSplitContainer-primary: Callback<void>--><!--Device-FoldSplitContainer-primary: Callback<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## secondary

```TypeScript
secondary: Callback<void>
```

Callback function for the extra region.

**Type:** Callback&lt;void&gt;

**Since:** 12

**Decorator:** @BuilderParam

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-FoldSplitContainer-secondary: Callback<void>--><!--Device-FoldSplitContainer-secondary: Callback<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

