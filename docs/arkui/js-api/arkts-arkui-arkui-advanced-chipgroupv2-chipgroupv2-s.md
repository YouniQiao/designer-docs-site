# ChipGroupV2

Defines chipGroupV2.

**Since:** 26.0.0

**Decorator:** @ComponentV2

<!--Device-unnamed-export declare struct ChipGroupV2--><!--Device-unnamed-export declare struct ChipGroupV2-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { ChipGroupV2ItemConfig, ChipGroupV2ItemStyleConfig, ChipGroupV2SpaceConfig, ChipGroupV2IconGroupSuffix, ChipGroupV2Items, ChipGroupV2Padding, ChipGroupV2Item, ChipGroupV2ItemStyle, ChipGroupV2, ChipGroupV2PaddingConfig, ChipGroupV2IconItemConfig, ChipGroupV2SymbolItemConfig, ChipGroupV2Space } from '@kit.ArkUI';
```

<a id="build"></a>
## build

```TypeScript
build(): void
```

Build function for ChipGroupV2

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipGroupV2-build(): void--><!--Device-ChipGroupV2-build(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## $items

```TypeScript
$items?: Callback<ChipGroupV2Items>
```

Two-way binding callback method for ChipV2 item.

**Type:** Callback&lt;ChipGroupV2Items&gt;

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipGroupV2-$items?: Callback<ChipGroupV2Items>--><!--Device-ChipGroupV2-$items?: Callback<ChipGroupV2Items>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## $selectedIndexes

```TypeScript
$selectedIndexes?: Callback<Array<number>>
```

Two-way binding callback method for selected ChipV2 item indexes.

**Type:** Callback&lt;Array&lt;number&gt;&gt;

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipGroupV2-$selectedIndexes?: Callback<Array<number>>--><!--Device-ChipGroupV2-$selectedIndexes?: Callback<Array<number>>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## chipGroupPadding

```TypeScript
chipGroupPadding?: ChipGroupV2Padding
```

ChipGroupV2 padding (only support top and bottom).

**Type:** ChipGroupV2Padding

**Since:** 26.0.0

**Decorator:** @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipGroupV2-chipGroupPadding?: ChipGroupV2Padding--><!--Device-ChipGroupV2-chipGroupPadding?: ChipGroupV2Padding-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## chipGroupSpace

```TypeScript
chipGroupSpace?: ChipGroupV2Space
```

Left and right inner margins and spacing between ChipV2.

**Type:** ChipGroupV2Space

**Since:** 26.0.0

**Decorator:** @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipGroupV2-chipGroupSpace?: ChipGroupV2Space--><!--Device-ChipGroupV2-chipGroupSpace?: ChipGroupV2Space-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## itemStyle

```TypeScript
itemStyle?: ChipGroupV2ItemStyle
```

ChipV2 item style.

**Type:** ChipGroupV2ItemStyle

**Since:** 26.0.0

**Decorator:** @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipGroupV2-itemStyle?: ChipGroupV2ItemStyle--><!--Device-ChipGroupV2-itemStyle?: ChipGroupV2ItemStyle-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## items

```TypeScript
items: ChipGroupV2Items
```

ChipV2 item.

**Type:** ChipGroupV2Items

**Since:** 26.0.0

**Decorator:** @Require, @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipGroupV2-items: ChipGroupV2Items--><!--Device-ChipGroupV2-items: ChipGroupV2Items-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## multiple

```TypeScript
multiple?: boolean
```

Support multiple ChipV2 item selection.

**Type:** boolean

**Since:** 26.0.0

**Decorator:** @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipGroupV2-multiple?: boolean--><!--Device-ChipGroupV2-multiple?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onChange

```TypeScript
onChange?: Callback<Array<number>>
```

Callback method when the chipV2 status changes

**Type:** Callback&lt;Array&lt;number&gt;&gt;

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipGroupV2-onChange?: Callback<Array<number>>--><!--Device-ChipGroupV2-onChange?: Callback<Array<number>>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selectedIndexes

```TypeScript
selectedIndexes?: Array<number>
```

Selected ChipV2 item indexes.

**Type:** Array&lt;number&gt;

**Since:** 26.0.0

**Decorator:** @Param

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipGroupV2-selectedIndexes?: Array<number>--><!--Device-ChipGroupV2-selectedIndexes?: Array<number>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## suffix

```TypeScript
suffix?: Callback<void>
```

The builder function which will be rendered in the suffix of ChipGroupV2.

**Type:** Callback&lt;void&gt;

**Since:** 26.0.0

**Decorator:** @BuilderParam

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipGroupV2-suffix?: Callback<void>--><!--Device-ChipGroupV2-suffix?: Callback<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

