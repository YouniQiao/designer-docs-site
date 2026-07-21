# MultiCapsuleSegmentButtonV2

Defines the segmented button with multi capsule style.

**Since:** 18

**Decorator:** @ComponentV2

<!--Device-unnamed-export declare struct MultiCapsuleSegmentButtonV2--><!--Device-unnamed-export declare struct MultiCapsuleSegmentButtonV2-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OnSelectedIndexesChange, TabSegmentButtonV2, SegmentButtonV2Items, MultiCapsuleSegmentButtonV2, OnSelectedIndexChange, SegmentButtonV2ItemOptions, SegmentButtonV2Item, CapsuleSegmentButtonV2 } from '@kit.ArkUI';
```

<a id="build"></a>
## build

```TypeScript
build(): void
```

Sets the build function of the segmented button.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-MultiCapsuleSegmentButtonV2-build(): void--><!--Device-MultiCapsuleSegmentButtonV2-build(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## $selectedIndexes

```TypeScript
$selectedIndexes: OnSelectedIndexesChange
```

Callback invoked when the selected item changes.

**Type:** OnSelectedIndexesChange

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-MultiCapsuleSegmentButtonV2-$selectedIndexes: OnSelectedIndexesChange--><!--Device-MultiCapsuleSegmentButtonV2-$selectedIndexes: OnSelectedIndexesChange-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## itemBackgroundBlurStyle

```TypeScript
readonly itemBackgroundBlurStyle?: BlurStyle
```

Background blur style of segmented button items.

Default value: **undefined**

This property is read-only.

**Type:** BlurStyle

**Since:** 18

**Decorator:** @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-MultiCapsuleSegmentButtonV2-readonly itemBackgroundBlurStyle?: BlurStyle--><!--Device-MultiCapsuleSegmentButtonV2-readonly itemBackgroundBlurStyle?: BlurStyle-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## itemBackgroundBlurStyleOptions

```TypeScript
readonly itemBackgroundBlurStyleOptions?: BackgroundBlurStyleOptions
```

Background blur style options of segmented button items.

Default value: **undefined**

This property is read-only.

**Type:** BackgroundBlurStyleOptions

**Since:** 18

**Decorator:** @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-MultiCapsuleSegmentButtonV2-readonly itemBackgroundBlurStyleOptions?: BackgroundBlurStyleOptions--><!--Device-MultiCapsuleSegmentButtonV2-readonly itemBackgroundBlurStyleOptions?: BackgroundBlurStyleOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## itemBackgroundColor

```TypeScript
readonly itemBackgroundColor?: ColorMetrics
```

Background color of unselected segmented button items.

Default value: **$r('sys.color.segment_button_v2_multi_capsule_button_background')**

If the value is **undefined**, the default value is used.

This property is read-only.

**Type:** ColorMetrics

**Since:** 18

**Decorator:** @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-MultiCapsuleSegmentButtonV2-readonly itemBackgroundColor?: ColorMetrics--><!--Device-MultiCapsuleSegmentButtonV2-readonly itemBackgroundColor?: ColorMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## itemBackgroundEffect

```TypeScript
readonly itemBackgroundEffect?: BackgroundEffectOptions
```

Background effect of segmented button items.

Default value: **undefined**

This property is read-only.

**Type:** BackgroundEffectOptions

**Since:** 18

**Decorator:** @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-MultiCapsuleSegmentButtonV2-readonly itemBackgroundEffect?: BackgroundEffectOptions--><!--Device-MultiCapsuleSegmentButtonV2-readonly itemBackgroundEffect?: BackgroundEffectOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## itemBorderRadius

```TypeScript
readonly itemBorderRadius?: LengthMetrics
```

Border radius of segmented button items.

Value range: [0, +∞)

Default value: **$r('sys.float.segment_button_v2_selected_corner_radius')**.

If the value is out of the range, the default value is used.

This property is read-only.

**Type:** LengthMetrics

**Since:** 18

**Decorator:** @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-MultiCapsuleSegmentButtonV2-readonly itemBorderRadius?: LengthMetrics--><!--Device-MultiCapsuleSegmentButtonV2-readonly itemBorderRadius?: LengthMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## itemFontColor

```TypeScript
readonly itemFontColor?: ColorMetrics
```

Font color of unselected segmented button items.

Default value: **$r('sys.color.font_secondary')**

If the value is **undefined**, the default value is used.

**NOTE**

When **fontColor** of **textModifier** is set for **items**, **itemFontColor** has no effect.

This property is read-only.

**Type:** ColorMetrics

**Since:** 18

**Decorator:** @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-MultiCapsuleSegmentButtonV2-readonly itemFontColor?: ColorMetrics--><!--Device-MultiCapsuleSegmentButtonV2-readonly itemFontColor?: ColorMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## itemFontSize

```TypeScript
readonly itemFontSize?: LengthMetrics
```

Font size of unselected segmented button items.

Value range: [0, +∞)

Default value: **14fp**

**NOTE**

Percentage values are not supported. If an invalid value is set, the default value is used.

When **fontSize** of **textModifier** is set for **items**, **itemFontSize** has no effect.

This property is read-only.

**Type:** LengthMetrics

**Since:** 18

**Decorator:** @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-MultiCapsuleSegmentButtonV2-readonly itemFontSize?: LengthMetrics--><!--Device-MultiCapsuleSegmentButtonV2-readonly itemFontSize?: LengthMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## itemFontWeight

```TypeScript
readonly itemFontWeight?: FontWeight
```

Font weight of unselected segmented button items.

Default value: **FontWeight.Medium**

If the value is out of the range, the default value is used.

**NOTE**

When **fontWeight** of **textModifier** is set for **items**, **itemFontWeight** has no effect.

This property is read-only.

**Type:** FontWeight

**Since:** 18

**Decorator:** @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-MultiCapsuleSegmentButtonV2-readonly itemFontWeight?: FontWeight--><!--Device-MultiCapsuleSegmentButtonV2-readonly itemFontWeight?: FontWeight-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## itemIconFillColor

```TypeScript
readonly itemIconFillColor?: ColorMetrics
```

Icon color of unselected segmented button items.

Default value: **$r('sys.color.font_secondary')**

If the value is **undefined**, the default value is used.

**NOTE**

When **fillColor** of **iconModifier** is set for **items**, **itemIconFillColor** has no effect.

This property is read-only.

**Type:** ColorMetrics

**Since:** 18

**Decorator:** @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-MultiCapsuleSegmentButtonV2-readonly itemIconFillColor?: ColorMetrics--><!--Device-MultiCapsuleSegmentButtonV2-readonly itemIconFillColor?: ColorMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## itemIconSize

```TypeScript
readonly itemIconSize?: SizeT<LengthMetrics>
```

Image-type icon size of segmented button items.

Value range: [0, +∞)

Default value: **{ width: LengthMetrics.vp(24), height: LengthMetrics.vp(24) }**.

If the value is out of the range, the default value is used.

**NOTE**

When **width** and **height** of **iconModifier** are set for **items**, **itemIconSize** has no effect.

This property is read-only.

**Type:** SizeT&lt;LengthMetrics&gt;

**Since:** 18

**Decorator:** @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-MultiCapsuleSegmentButtonV2-readonly itemIconSize?: SizeT<LengthMetrics>--><!--Device-MultiCapsuleSegmentButtonV2-readonly itemIconSize?: SizeT<LengthMetrics>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## itemMaxFontScale

```TypeScript
readonly itemMaxFontScale?: number | Resource
```

Maximum font scale factor of the segmented button item text.

Value range: [1, 2]

Default value: **1**

**NOTE**

A value less than 1 is treated as **1**. A value greater than 2 is treated as **2**. Abnormal values are ineffective by default.

This property is read-only.

**Type:** number \| Resource

**Since:** 18

**Decorator:** @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-MultiCapsuleSegmentButtonV2-readonly itemMaxFontScale?: number | Resource--><!--Device-MultiCapsuleSegmentButtonV2-readonly itemMaxFontScale?: number | Resource-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## itemMinFontScale

```TypeScript
readonly itemMinFontScale?: number | Resource
```

Minimum font scale factor of the segmented button item text.

Value range: [0, 1]

Default value: **0**

**NOTE**

A value less than 0 is treated as **0**. A value greater than 1 is treated as **1**. Abnormal values are ineffective by default.

This property is read-only.

**Type:** number \| Resource

**Since:** 18

**Decorator:** @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-MultiCapsuleSegmentButtonV2-readonly itemMinFontScale?: number | Resource--><!--Device-MultiCapsuleSegmentButtonV2-readonly itemMinFontScale?: number | Resource-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## itemMinHeight

```TypeScript
readonly itemMinHeight?: LengthMetrics
```

Minimum height of the segmented button item.

Value range: [0, +∞)

Default value:

**$r('sys.float.segment_button_v2_singleline_selected_height')** for text-only buttons and icon-only buttons, and **$r('sys.float.segment_button_v2_doubleline_selected_height')** for buttons with both an icon and text.

If the value is out of the range, the default value is used.

This property is read-only.

**Type:** LengthMetrics

**Since:** 18

**Decorator:** @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-MultiCapsuleSegmentButtonV2-readonly itemMinHeight?: LengthMetrics--><!--Device-MultiCapsuleSegmentButtonV2-readonly itemMinHeight?: LengthMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## itemPadding

```TypeScript
readonly itemPadding?: LocalizedPadding
```

Padding of the segmented button item.

Default value:**{top: LengthMetrics.resource ($r('sys.float.padding_level2')), bottom: LengthMetrics.resource ($r('sys.float.padding_level2')), start: LengthMetrics.resource($r('sys.float.padding_level4')),end: LengthMetrics.resource($r('sys.float.padding_level4'))}**

If the value is **undefined**, the default value is used.

This property is read-only.

**Type:** LocalizedPadding

**Since:** 18

**Decorator:** @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-MultiCapsuleSegmentButtonV2-readonly itemPadding?: LocalizedPadding--><!--Device-MultiCapsuleSegmentButtonV2-readonly itemPadding?: LocalizedPadding-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## itemSelectedBackgroundColor

```TypeScript
readonly itemSelectedBackgroundColor?: ColorMetrics
```

Background color of the selected segmented button item.

Default value: **$r('sys.color.segment_button_v2_tab_selected_item_background')**

If the value is **undefined**, the default value is used.

This property is read-only.

**Type:** ColorMetrics

**Since:** 18

**Decorator:** @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-MultiCapsuleSegmentButtonV2-readonly itemSelectedBackgroundColor?: ColorMetrics--><!--Device-MultiCapsuleSegmentButtonV2-readonly itemSelectedBackgroundColor?: ColorMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## itemSelectedFontColor

```TypeScript
readonly itemSelectedFontColor?: ColorMetrics
```

Font color of the selected segmented button item.

Default value: **$r('sys.color.font_primary')**.

If the value is **undefined**, the default value is used.

**NOTE**

When **fontColor** of **textModifier** is set for **items**, **itemSelectedFontColor** has no effect.

This property is read-only.

**Type:** ColorMetrics

**Since:** 18

**Decorator:** @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-MultiCapsuleSegmentButtonV2-readonly itemSelectedFontColor?: ColorMetrics--><!--Device-MultiCapsuleSegmentButtonV2-readonly itemSelectedFontColor?: ColorMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## itemSelectedFontSize

```TypeScript
readonly itemSelectedFontSize?: LengthMetrics
```

Font size of the selected segmented button item.

Value range: [0, +∞)

Default value: **14fp**

**NOTE**

Percentage values are not supported. If an invalid value is set, the default value is used.

When **fontSize** of **textModifier** is set for **items**, **itemSelectedFontSize** has no effect.

This property is read-only.

**Type:** LengthMetrics

**Since:** 18

**Decorator:** @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-MultiCapsuleSegmentButtonV2-readonly itemSelectedFontSize?: LengthMetrics--><!--Device-MultiCapsuleSegmentButtonV2-readonly itemSelectedFontSize?: LengthMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## itemSelectedFontWeight

```TypeScript
readonly itemSelectedFontWeight?: FontWeight
```

Font weight of the selected segmented button item.

Default value: **FontWeight.Medium**

If the value is out of the range, the default value is used.

**NOTE**

When **fontWeight** of **textModifier** is set for **items**, **itemSelectedFontWeight** has no effect.

This property is read-only.

**Type:** FontWeight

**Since:** 18

**Decorator:** @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-MultiCapsuleSegmentButtonV2-readonly itemSelectedFontWeight?: FontWeight--><!--Device-MultiCapsuleSegmentButtonV2-readonly itemSelectedFontWeight?: FontWeight-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## itemSelectedIconFillColor

```TypeScript
readonly itemSelectedIconFillColor?: ColorMetrics
```

Icon color of the selected segmented button item.

Default value: **$r('sys.color.font_primary')**

If the value is **undefined**, the default value is used.

**NOTE**

When **fillColor** of **iconModifier** is set for **items**, **itemSelectedIconFillColor** has no effect.

This property is read-only.

**Type:** ColorMetrics

**Since:** 18

**Decorator:** @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-MultiCapsuleSegmentButtonV2-readonly itemSelectedIconFillColor?: ColorMetrics--><!--Device-MultiCapsuleSegmentButtonV2-readonly itemSelectedIconFillColor?: ColorMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## itemSelectedSymbolFontColor

```TypeScript
readonly itemSelectedSymbolFontColor?: ColorMetrics
```

HM Symbol icon color of the selected segmented button item.

Default value: **$r('sys.color.font_primary')**

If the value is **undefined**, the default value is used.

**NOTE**

When **fontColor** of **symbolModifier** is set for **items**, **itemSelectedSymbolFontColor** has no effect.

This property is read-only.

**Type:** ColorMetrics

**Since:** 18

**Decorator:** @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-MultiCapsuleSegmentButtonV2-readonly itemSelectedSymbolFontColor?: ColorMetrics--><!--Device-MultiCapsuleSegmentButtonV2-readonly itemSelectedSymbolFontColor?: ColorMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## itemSpace

```TypeScript
readonly itemSpace?: LengthMetrics
```

Space between segmented button items.

Value range: [0, +∞)

Default value: **LengthMetrics.vp(1)**

**NOTE**

Percentage values are not supported. If an invalid value is set, the default value is used.

This property is read-only.

**Type:** LengthMetrics

**Since:** 18

**Decorator:** @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-MultiCapsuleSegmentButtonV2-readonly itemSpace?: LengthMetrics--><!--Device-MultiCapsuleSegmentButtonV2-readonly itemSpace?: LengthMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## itemSymbolFontColor

```TypeScript
readonly itemSymbolFontColor?: ColorMetrics
```

HM Symbol icon color of unselected segmented button items.

Default value: **$r('sys.color.font_secondary')**

If the value is **undefined**, the default value is used.

**NOTE**

When **fontColor** of **symbolModifier** is set for **items**, **itemSymbolFontColor** has no effect.

This property is read-only.

**Type:** ColorMetrics

**Since:** 18

**Decorator:** @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-MultiCapsuleSegmentButtonV2-readonly itemSymbolFontColor?: ColorMetrics--><!--Device-MultiCapsuleSegmentButtonV2-readonly itemSymbolFontColor?: ColorMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## itemSymbolFontSize

```TypeScript
readonly itemSymbolFontSize?: LengthMetrics
```

HM Symbol icon size of segmented button items.

Value range: [0, +∞)

Default value: **20fp**

**NOTE**

Percentage values are not supported. If an invalid value is set, the default value is used.

When **fontSize** of **symbolModifier** is set for **items**, **itemSymbolFontSize** has no effect.

This property is read-only.

**Type:** LengthMetrics

**Since:** 18

**Decorator:** @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-MultiCapsuleSegmentButtonV2-readonly itemSymbolFontSize?: LengthMetrics--><!--Device-MultiCapsuleSegmentButtonV2-readonly itemSymbolFontSize?: LengthMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## items

```TypeScript
readonly items: SegmentButtonV2Items
```

Items of the segmented button.

If the value is **undefined**, the option information is not displayed.

This property is read-only.

**Type:** SegmentButtonV2Items

**Since:** 18

**Decorator:** @Require, @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-MultiCapsuleSegmentButtonV2-readonly items: SegmentButtonV2Items--><!--Device-MultiCapsuleSegmentButtonV2-readonly items: SegmentButtonV2Items-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## languageDirection

```TypeScript
readonly languageDirection?: Direction
```

Language direction of the segmented button.

Default value: **Direction.Auto**

If the value is out of the range, the default value is used.

This property is read-only.

**Type:** Direction

**Since:** 18

**Decorator:** @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-MultiCapsuleSegmentButtonV2-readonly languageDirection?: Direction--><!--Device-MultiCapsuleSegmentButtonV2-readonly languageDirection?: Direction-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onItemClicked

```TypeScript
onItemClicked?: Callback<number>
```

Callback invoked when a segmented button item is clicked.

**Type:** Callback&lt;number&gt;

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-MultiCapsuleSegmentButtonV2-onItemClicked?: Callback<number>--><!--Device-MultiCapsuleSegmentButtonV2-onItemClicked?: Callback<number>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selectedIndexes

```TypeScript
readonly selectedIndexes: number[]
```

Array of indexes of the selected segmented button items. The index is zero-based and increments by 1.

If the value is **undefined**, no item is selected.

**NOTE**

Only valid button indexes are supported. An empty array [] indicates no selection.

This property is read-only.

**Type:** number[]

**Since:** 18

**Decorator:** @Require, @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-MultiCapsuleSegmentButtonV2-readonly selectedIndexes: number[]--><!--Device-MultiCapsuleSegmentButtonV2-readonly selectedIndexes: number[]-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

