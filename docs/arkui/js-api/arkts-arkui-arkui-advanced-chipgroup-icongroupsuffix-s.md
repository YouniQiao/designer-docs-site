# IconGroupSuffix

The **ChipGroup** component provides a set of chips for organizing and categorizing files or resource content.

> **NOTE**  
>  
> With **SymbolGlyphModifier**, neither modifying the animation type with **symbolEffect** nor setting the effect  
> strategy with [effectStrategy](SymbolGlyphAttribute#effectStrategy) is supported.

**Since:** 12

**Decorator:** @Component

<!--Device-unnamed-export declare struct IconGroupSuffix--><!--Device-unnamed-export declare struct IconGroupSuffix-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { ChipItemLabelOptions, ChipGroupSpaceOptions, SymbolItemOptions, SuffixImageIconOptions, IconGroupSuffix, IconItemOptions, ChipItemStyle, ChipGroupItemOptions, ChipGroup, IconOptions } from '@kit.ArkUI';
```

## iconBackgroundSystemMaterial

```TypeScript
iconBackgroundSystemMaterial?: uiMaterial.Material
```

Set system-styled materials for the component. Different materials have different effects, which can influence the backgroundColor, border, shadow, and other visual attributes of the component.

**Type:** uiMaterial.Material

**Since:** 26.0.0

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-IconGroupSuffix-iconBackgroundSystemMaterial?: uiMaterial.Material--><!--Device-IconGroupSuffix-iconBackgroundSystemMaterial?: uiMaterial.Material-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## items

```TypeScript
items: Array<IconItemOptions | SymbolGlyphModifier | SymbolItemOptions>
```

Custom builder items.

**Type:** Array&lt;IconItemOptions \| SymbolGlyphModifier \| SymbolItemOptions&gt;

**Since:** 12

**Decorator:** @Require, @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-IconGroupSuffix-items: Array<IconItemOptions | SymbolGlyphModifier | SymbolItemOptions>--><!--Device-IconGroupSuffix-items: Array<IconItemOptions | SymbolGlyphModifier | SymbolItemOptions>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

