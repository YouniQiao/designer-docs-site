# @ohos.arkui.advanced.ChipGroup

## Modules to Import

```TypeScript
import { ChipItemLabelOptions,ChipGroupSpaceOptions,SymbolItemOptions,SuffixImageIconOptions,IconGroupSuffix,IconItemOptions,ChipItemStyle,ChipGroupItemOptions,ChipGroup,IconOptions } from '@kit.ArkUI';
```

## Summary

### Interfaces

| Name | Description |
| --- | --- |
| [ChipGroupItemOptions](arkts-chipgroupitemoptions-i.md) | ChipGroupItemOptions定义每个Chip的非通用属性。 > **说明：** > > 当传入`suffixIcon`参数时，`allowClose`不生效；未传入`suffixIcon`参数时，`allowClose`决定是否显示移除图标。 |
| [ChipGroupPaddingOptions](arkts-chipgrouppaddingoptions-i.md) | ChipGroupPaddingOptions定义了ChipGroup的上下内边距，用于控制其整体高度。 |
| [ChipGroupSpaceOptions](arkts-chipgroupspaceoptions-i.md) | ChipGroupSpaceOptions 定义了ChipGroup左右内边距，以及Chip与Chip之间的间距。 |
| [ChipItemStyle](arkts-chipitemstyle-i.md) | ChipItemStyle定义了Chip的共通属性。 > **说明：** > > 1. 操作块的大小有两种类型，一种是ChipSize，提供NORMAL和SMALL两种尺寸供选择；另一种是SizeOptions。 > > 2. backgroundColor、selectedBackgroundColor传入undefined时，显示默认背景颜色，传入非法值时，背景色透明。 |
| [IconItemOptions](arkts-iconitemoptions-i.md) | 定义了尾部builder接口，针对背板大小及颜色设置限制。 |
| [IconOptions](arkts-iconoptions-i.md) | IconOptions定义图标的共通属性。 |
| [LabelOptions](arkts-labeloptions-i.md) | Label定义图标属性。 |
| [SuffixImageIconOptions](arkts-suffiximageiconoptions-i.md) | 后缀图标选项的类型。 继承自[IconOptions]{@link IconOptions}。 |
| [SymbolItemOptions](arkts-symbolitemoptions-i.md) | ChipGroup的尾部图标选项类型。 |

