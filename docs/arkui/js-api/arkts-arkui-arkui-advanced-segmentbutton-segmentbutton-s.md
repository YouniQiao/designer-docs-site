# SegmentButton

**SegmentButton** is a versatile component that organizes related options into visually grouped buttons. It supports three variants: tab-style, capsule-style single-select, and capsule-style multi-select.
>**NOTE**  
>  
> - The **SegmentButton** component does not support [universal attributes](../arkts-components/arkts-arkui-commonmethod-c.md).The component occupies the maximum available width within its content area and distributes this width evenly among its items. It adapts its height automatically to the content (text and images), the minimum height being 28 vp.  
>  
> - Properties decorated with @Prop are optional. They are required during construction only when used together with the @Require decorator.

**Since:** 11

**Decorator:** @Component

<!--Device-unnamed-declare struct SegmentButton--><!--Device-unnamed-declare struct SegmentButton-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { CommonSegmentButtonOptions, SegmentButtonItemOptionsConstructorOptions, SegmentButtonIconTextItem, SegmentButtonItemOptions, SegmentButtonTextItem, CapsuleSegmentButtonOptions, SegmentButtonOptions, CapsuleSegmentButtonConstructionOptions, SegmentButtonItemTuple, SegmentButton, SegmentButtonItemArray, SegmentButtonItemOptionsArray, SegmentButtonIconItem, BorderRadiusMode, TabSegmentButtonConstructionOptions, TabSegmentButtonOptions, ItemRestriction, DimensionNoPercentage } from '@kit.ArkUI';
```

## enableStateAnimation

```TypeScript
enableStateAnimation: boolean
```

Whether to enable property animation for the segment button when the **selectedIndex** value is modified via a variable.

**true**: Property animation is enabled. **false**: Property animation is disabled and the original animation is used.

Default value: **false**

**Type:** boolean

**Default:** false

**Since:** 24

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

<!--Device-SegmentButton-enableStateAnimation: boolean--><!--Device-SegmentButton-enableStateAnimation: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## maxFontScale

```TypeScript
maxFontScale: number | Resource
```

Maximum font scale for the text in the **SegmentButton**.

Value range: [1, 2]

Values less than 1 are treated as 1, and values greater than 2 are treated as 2.

**Type:** number \| Resource

**Since:** 14

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-SegmentButton-maxFontScale: number | Resource--><!--Device-SegmentButton-maxFontScale: number | Resource-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onItemClicked

```TypeScript
onItemClicked?: Callback<number>
```

Callback function triggered when a segment button option is tapped. The subscript of the tapped option is passed as a parameter. If this parameter is not passed, no callback is triggered when the option is tapped.

**Type:** Callback&lt;number&gt;

**Since:** 13

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 13.

<!--Device-SegmentButton-onItemClicked?: Callback<number>--><!--Device-SegmentButton-onItemClicked?: Callback<number>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## options

```TypeScript
options: SegmentButtonOptions
```

Options of the **SegmentButton** component.

**Type:** SegmentButtonOptions

**Since:** 11

**Decorator:** @ObjectLink

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-SegmentButton-options: SegmentButtonOptions--><!--Device-SegmentButton-options: SegmentButtonOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selectedIndexes

```TypeScript
selectedIndexes: number[]
```

Indexes of selected items of the **SegmentButton**. The index is zero-based and increments by 1.

**NOTE**

**selectedIndexes** is decorated with [@Link](../../../ui/state-management/arkts-link.md) to implement parent-child two-way synchronization. If no items are selected, an empty array **[]** can be passed in.

**Type:** number[]

**Since:** 11

**Decorator:** @Link

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-SegmentButton-selectedIndexes: number[]--><!--Device-SegmentButton-selectedIndexes: number[]-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

