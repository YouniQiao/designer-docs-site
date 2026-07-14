# @ohos.arkui.advanced.ChipGroup

## Modules to Import

```TypeScript
import { ChipItemLabelOptions, ChipGroupSpaceOptions, SymbolItemOptions, SuffixImageIconOptions, IconGroupSuffix, IconItemOptions, ChipItemStyle, ChipGroupItemOptions, ChipGroup, IconOptions } from '@kit.ArkUI';
```

## Summary

### Structs

| Name | Description |
| --- | --- |
| [ChipGroup](arkts-arkui-chipgroup-s.md) | &gt; **NOTE** &gt; &gt; 1. When **multiple** is set to **false**, if **selectedIndexes** is not passed in, the first chip is automatically &gt; selected by default. However, if the provided **selectedIndexes** includes multiple elements, the chip at the first &gt; index is selected by default. &gt; &gt; 2. To use the suffix functionality, the **IconGroupSuffix** API must be imported. If this API is not provided, the &gt; suffix area will remain empty. &gt; &gt; 3. The icon fill colors (**fillColor** and **activedFillColor**) must match the font color (**fontColor**). If &gt; different colors need to be set, use **prefixSymbol** when passing in &gt; [ChipGroupSpaceOptions](arkts-arkui-chipgroupspaceoptions-i.md). |
| [IconGroupSuffix](arkts-arkui-icongroupsuffix-s.md) | The **ChipGroup** component provides a set of chips for organizing and categorizing files or resource content. &gt; **NOTE** &gt; &gt; With **SymbolGlyphModifier**, neither modifying the animation type with **symbolEffect** nor setting the effect &gt; strategy with [effectStrategy](SymbolGlyphAttribute#effectStrategy) is supported. |

### Interfaces

| Name | Description |
| --- | --- |
| [ChipGroupItemOptions](arkts-arkui-chipgroupitemoptions-i.md) | Defines the specific attributes of individual chips. &gt; **NOTE** &gt; &gt; If **suffixIcon** is specified, **allowClose** has no effect. |
| [ChipGroupPaddingOptions](arkts-arkui-chipgrouppaddingoptions-i.md) | Defines the top and bottom padding of a **ChipGroup** component, which is used to control the overall height of the ChipGroup. |
| [ChipGroupSpaceOptions](arkts-arkui-chipgroupspaceoptions-i.md) | Defines the left and right padding of the chip group, and the spacing between chips. |
| [ChipItemStyle](arkts-arkui-chipitemstyle-i.md) | Defines the common attributes shared by all chips. &gt; **NOTE** &gt; &gt; 1. The size settings for chips can be of two types: (1) **ChipSize**, which conveniently offers two size options, &gt; **NORMAL** and **SMALL**; (2) **SizeOptions**. &gt; &gt; 2. If **backgroundColor** or **selectedBackgroundColor** is set to **undefined**, the default background color is &gt; used. If an invalid value is provided, the background color is transparent. |
| [IconItemOptions](arkts-arkui-iconitemoptions-i.md) | Defines the configuration for the trailing builder, with constraints applied to background size and color settings. |
| [IconOptions](arkts-arkui-iconoptions-i.md) | Defines the common attributes of icons. |
| [LabelOptions](arkts-arkui-labeloptions-i.md) | Defines the label configuration options. |
| [SuffixImageIconOptions](arkts-arkui-suffiximageiconoptions-i.md) | Defines the configuration options for suffix icons. Inherits from [IconOptions](arkts-arkui-iconoptions-i.md). |
| [SymbolItemOptions](arkts-arkui-symbolitemoptions-i.md) | Suffix icon option type of ChipGroup. |

